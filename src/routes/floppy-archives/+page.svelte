<script lang="ts">
	import { onMount } from 'svelte';
	
	let bootSequence = $state(false);
	let systemReady = $state(false);
	let currentPath = $state([]);
	let fileSystem = $state({});
	let currentDirectory = $state({});
	let selectedFile = $state(null);
	let showFileViewer = $state(false);
	let emulatorActive = $state(false);
	
	onMount(() => {
		// Boot sequence animation
		setTimeout(() => bootSequence = true, 500);
		setTimeout(() => systemReady = true, 3000);
		
		// Load file system data
		loadFileSystem();
		
		// Skip boot on click
		document.addEventListener('click', skipBoot);
		document.addEventListener('keydown', skipBoot);
		
		return () => {
			document.removeEventListener('click', skipBoot);
			document.removeEventListener('keydown', skipBoot);
		};
	});
	
	function skipBoot() {
		if (!systemReady) {
			systemReady = true;
			bootSequence = true;
		}
	}
	
	async function loadFileSystem() {
		try {
			const response = await fetch('/floppy-archives/data/file_system.json');
			fileSystem = await response.json();
			updateCurrentDirectory();
		} catch (error) {
			console.error('Error loading file system:', error);
			// Fallback to mock data
			fileSystem = createMockFileSystem();
			updateCurrentDirectory();
		}
	}
	
	function createMockFileSystem() {
		return {
			name: 'Root',
			type: 'directory',
			children: [
				{
					name: "Jeff_s Floppy Recovery",
					type: 'directory',
					children: [
						{
							name: 'disk1',
							type: 'directory',
							children: [
								{ name: 'MAZEDEMO.EXE', type: 'file', size: 6528 },
								{ name: 'RPSGAME.EXE', type: 'file', size: 9552 },
								{ name: 'SCORE.PAS', type: 'file', size: 8523 }
							]
						}
					]
				}
			]
		};
	}
	
	function updateCurrentDirectory() {
		let dir = fileSystem;
		for (const pathPart of currentPath) {
			dir = dir.children?.find(item => item.name === pathPart);
			if (!dir) break;
		}
		currentDirectory = dir || fileSystem;
	}
	
	function navigateToDirectory(dirName) {
		currentPath = [...currentPath, dirName];
		updateCurrentDirectory();
	}
	
	function navigateUp() {
		if (currentPath.length > 0) {
			currentPath = currentPath.slice(0, -1);
			updateCurrentDirectory();
		}
	}
	
	function navigateToPath(index) {
		currentPath = currentPath.slice(0, index + 1);
		updateCurrentDirectory();
	}
	
	function navigateToRoot() {
		currentPath = [];
		updateCurrentDirectory();
	}
	
	function handleFileClick(file) {
		if (file.type === 'directory') {
			navigateToDirectory(file.name);
		} else {
			selectedFile = file;
			const ext = getFileExtension(file.name);
			
			if (['exe', 'com'].includes(ext)) {
				// Run executable in emulator
				runInEmulator(file);
			} else {
				// Show file viewer
				showFileViewer = true;
			}
		}
	}
	
	function getFileExtension(filename) {
		return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
	}
	
	function getFileIcon(file) {
		if (file.type === 'directory') return '📁';
		
		const ext = getFileExtension(file.name);
		const iconMap = {
			'pas': '📄',
			'tpu': '📄', 
			'exe': '⚙️',
			'com': '⚙️',
			'txt': '📝',
			'asc': '📝',
			'dat': '💾',
			'bak': '💿'
		};
		
		return iconMap[ext] || '📄';
	}
	
	function formatFileSize(size) {
		if (!size) return '';
		if (size < 1024) return `${size}`;
		if (size < 1024 * 1024) return `${Math.round(size / 1024)}K`;
		return `${Math.round(size / (1024 * 1024))}M`;
	}
	
	function runInEmulator(file) {
		selectedFile = file;
		emulatorActive = true;
		// Initialize JS-DOS here
		console.log(`Running ${file.name} in emulator...`);
	}
</script>

<svelte:head>
	<title>Jeff's Floppy Archives | Benjamin Kemp</title>
	<meta name="description" content="A digital preservation of Jeff's high school floppy disk archives from the 1990s" />
</svelte:head>

<div class="retro-container">
	<!-- Boot Sequence -->
	{#if !systemReady}
		<div class="boot-screen">
			<div class="crt-monitor">
				<div class="scanlines"></div>
				<div class="boot-content">
					<pre class="ascii-title">
╔══════════════════════════════════════╗
║     JEFF'S FLOPPY DISK ARCHIVES      ║
║        Digital Preservation          ║
║           Est. 1987-1998             ║
╚══════════════════════════════════════╝
					</pre>
					
					{#if bootSequence}
						<div class="boot-messages">
							<div class="boot-line">SYSTEM BOOT v2.1</div>
							<div class="boot-line">Initializing floppy drives...</div>
							<div class="boot-line">Drive A: OK [1.44 MB]</div>
							<div class="boot-line">Drive B: OK [1.44 MB]</div>
							<div class="boot-line">Loading file allocation table...</div>
							<div class="boot-line">Scanning for Pascal executables...</div>
							<div class="boot-line">Ready to explore archives...</div>
							<div class="boot-line blinking">Press any key to continue_</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{:else}
		<!-- Main Interface -->
		<div class="dos-interface">
			<div class="crt-monitor active">
				<div class="scanlines"></div>
				
				<!-- DOS Header -->
				<div class="dos-header">
					<pre>
MS-DOS Executive File Manager v1.0
Directory: C:\JEFF\{currentPath.join('\\')}
					</pre>
				</div>
				
				<!-- File Browser Area -->
				<div class="file-browser">
					<div class="browser-header">
						<span class="path">
							C:\JEFF\
							{#each currentPath as pathPart, i}
								<span class="breadcrumb-part" on:click={() => navigateToPath(i)}>{pathPart}\</span>
							{/each}
						</span>
						<span class="date">12-15-1995  15:42</span>
					</div>
					
					<div class="file-listing">
						<div class="file-header">
							<span class="filename">Filename</span>
							<span class="filesize">Size</span>
							<span class="filetype">Type</span>
							<span class="filedate">Date</span>
						</div>
						
						<!-- Navigation entries -->
						{#if currentPath.length > 0}
							<div class="file-entry directory" on:click={navigateUp}>
								<span class="filename">📁 ..</span>
								<span class="filesize">&lt;UP&gt;</span>
								<span class="filetype">FOLDER</span>
								<span class="filedate">--</span>
							</div>
						{/if}
						
						<!-- Directory contents -->
						{#if currentDirectory?.children}
							{#each currentDirectory.children as file}
								<div class="file-entry {file.type}" on:click={() => handleFileClick(file)}>
									<span class="filename">{getFileIcon(file)} {file.name}</span>
									<span class="filesize">
										{file.type === 'directory' ? '<DIR>' : formatFileSize(file.size)}
									</span>
									<span class="filetype">
										{file.type === 'directory' ? 'FOLDER' : getFileExtension(file.name).toUpperCase()}
									</span>
									<span class="filedate">06-15-95</span>
								</div>
							{/each}
						{:else}
							<div class="file-entry">
								<span class="filename">Loading...</span>
								<span class="filesize">--</span>
								<span class="filetype">--</span>
								<span class="filedate">--</span>
							</div>
						{/if}
					</div>
				</div>
				
				<!-- Command Line -->
				<div class="command-line">
					<span class="prompt">C:\JEFF\ARCHIVES&gt;</span>
					<span class="cursor blinking">_</span>
				</div>
				
				<!-- Status Bar -->
				<div class="status-bar">
					<span>F1-Help  F2-View  F3-Exit  F5-Refresh</span>
					<span class="right">Free: 1,337 KB</span>
				</div>
			</div>
		</div>
		
		<!-- Side Panel with Info -->
		<div class="info-panel">
			<div class="panel-header">SYSTEM INFO</div>
			<div class="system-stats">
				<div>CPU: 486DX2-66</div>
				<div>RAM: 8 MB</div>
				<div>VGA: 256 colors</div>
				<div>Sound: SB16</div>
			</div>
			
			<div class="panel-header">ABOUT</div>
			<div class="about-text">
				This archive contains recovered files from Jeff's high school floppy disks (1987-1998). 
				Featuring Pascal programs, games, and digital artifacts from the golden age of personal computing.
			</div>
		</div>
	{/if}
</div>

<!-- File Viewer Modal -->
{#if showFileViewer && selectedFile}
	<div class="modal-overlay" on:click={() => showFileViewer = false}>
		<div class="file-viewer-modal" on:click|stopPropagation>
			<div class="modal-header">
				<span class="modal-title">📄 {selectedFile.name}</span>
				<button class="close-btn" on:click={() => showFileViewer = false}>✕</button>
			</div>
			<div class="modal-content">
				<div class="file-info">
					<div>Size: {formatFileSize(selectedFile.size)} bytes</div>
					<div>Type: {getFileExtension(selectedFile.name).toUpperCase()}</div>
					<div>Modified: 06-15-1995</div>
				</div>
				<div class="file-content">
					<pre class="code-display">
{`; ${selectedFile.name} - Jeff's Pascal Program
; Recovered from floppy disk archive

program ${selectedFile.name.replace(/\.[^/.]+$/, "")};
uses
  CRT, DOS;

var
  choice: char;

begin
  ClrScr;
  WriteLn('Welcome to Jeff''s Program!');
  WriteLn('Press any key to continue...');
  ReadKey;
  
  { This is a placeholder showing what the code might look like }
  { The actual source would be loaded from the archive }
  
end.`}
					</pre>
				</div>
			</div>
			<div class="modal-footer">
				<button class="dos-button" on:click={() => showFileViewer = false}>Close</button>
				{#if ['pas', 'exe', 'com'].includes(getFileExtension(selectedFile.name))}
					<button class="dos-button" on:click={() => runInEmulator(selectedFile)}>Run in Emulator</button>
				{/if}
			</div>
		</div>
	</div>
{/if}

<!-- Emulator Modal -->
{#if emulatorActive && selectedFile}
	<div class="modal-overlay" on:click={() => emulatorActive = false}>
		<div class="emulator-modal" on:click|stopPropagation>
			<div class="modal-header">
				<span class="modal-title">🎮 DOS Emulator - {selectedFile.name}</span>
				<button class="close-btn" on:click={() => emulatorActive = false}>✕</button>
			</div>
			<div class="emulator-screen">
				<div id="js-dos-container">
					<div class="emulator-placeholder">
						<div class="emulator-boot">
							<pre>
Starting MS-DOS...
Loading {selectedFile.name}...

JS-DOS Emulator Integration Coming Soon!

For now, imagine {selectedFile.name} running here with:
- Full screen DOS environment  
- Authentic sound effects
- Keyboard/mouse input
- Save state functionality

This would use js-dos library to run the actual
Pascal executables from Jeff's floppy archives.
							</pre>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="dos-button" on:click={() => emulatorActive = false}>Exit Emulator</button>
				<button class="dos-button">Fullscreen</button>
				<button class="dos-button">Reset</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.retro-container {
		min-height: 100vh;
		background: radial-gradient(circle, #001a00 0%, #000 70%);
		font-family: 'Courier New', 'Monaco', monospace;
		color: #00ff00;
		display: flex;
		padding: 20px;
		gap: 20px;
	}
	
	.boot-screen {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.crt-monitor {
		background: #002200;
		border: 8px solid #333;
		border-radius: 15px;
		padding: 40px;
		position: relative;
		box-shadow: 
			inset 0 0 50px rgba(0, 255, 0, 0.1),
			0 0 50px rgba(0, 255, 0, 0.3);
		max-width: 800px;
		width: 100%;
	}
	
	.crt-monitor.active {
		flex: 1;
		max-width: none;
		height: calc(100vh - 40px);
		display: flex;
		flex-direction: column;
	}
	
	.scanlines {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			rgba(0, 255, 0, 0.03) 2px,
			rgba(0, 255, 0, 0.03) 4px
		);
		animation: scanline-flicker 0.15s linear infinite;
	}
	
	@keyframes scanline-flicker {
		0% { opacity: 1; }
		98% { opacity: 1; }
		100% { opacity: 0.98; }
	}
	
	.ascii-title {
		color: #00ff00;
		text-align: center;
		margin-bottom: 30px;
		text-shadow: 0 0 10px #00ff00;
		font-size: 14px;
		line-height: 1.2;
	}
	
	.boot-messages {
		animation: type-in 2s steps(40) forwards;
	}
	
	.boot-line {
		margin: 8px 0;
		font-size: 14px;
	}
	
	.blinking {
		animation: blink 1s infinite;
	}
	
	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}
	
	@keyframes type-in {
		from { max-height: 0; }
		to { max-height: 200px; }
	}
	
	.dos-interface {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.dos-header {
		background: #004400;
		padding: 10px;
		border: 2px solid #00ff00;
		margin-bottom: 20px;
		font-size: 12px;
	}
	
	.file-browser {
		flex: 1;
		border: 2px solid #00ff00;
		background: #001100;
		padding: 10px;
		margin-bottom: 20px;
	}
	
	.browser-header {
		display: flex;
		justify-content: space-between;
		padding-bottom: 10px;
		border-bottom: 1px solid #00ff00;
		margin-bottom: 10px;
		font-size: 12px;
	}
	
	.file-listing {
		font-family: 'Courier New', monospace;
		font-size: 12px;
	}
	
	.file-header {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		padding: 5px 0;
		border-bottom: 1px solid #00ff00;
		margin-bottom: 10px;
		font-weight: bold;
	}
	
	.file-entry {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		padding: 3px 0;
		cursor: pointer;
		transition: background 0.1s;
	}
	
	.file-entry:hover {
		background: rgba(0, 255, 0, 0.1);
	}
	
	.file-entry.directory {
		color: #00cccc;
	}
	
	.file-entry.executable {
		color: #ffff00;
	}
	
	.file-entry.source {
		color: #ff9900;
	}
	
	.command-line {
		background: #000;
		padding: 10px;
		border: 1px solid #00ff00;
		margin-bottom: 10px;
		font-size: 14px;
	}
	
	.prompt {
		color: #00ff00;
	}
	
	.cursor {
		color: #00ff00;
		font-weight: bold;
	}
	
	.status-bar {
		background: #004400;
		padding: 5px 10px;
		border: 1px solid #00ff00;
		font-size: 11px;
		display: flex;
		justify-content: space-between;
	}
	
	.info-panel {
		width: 300px;
		background: #001100;
		border: 2px solid #00ff00;
		padding: 20px;
		font-size: 12px;
	}
	
	.panel-header {
		background: #004400;
		padding: 5px;
		margin: -5px -5px 10px -5px;
		text-align: center;
		font-weight: bold;
		border-bottom: 1px solid #00ff00;
	}
	
	.system-stats {
		margin-bottom: 20px;
	}
	
	.system-stats div {
		margin: 5px 0;
	}
	
	.about-text {
		line-height: 1.4;
		font-size: 11px;
	}
	
	.right {
		margin-left: auto;
	}
	
	/* Modal Styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}
	
	.file-viewer-modal, .emulator-modal {
		background: #001100;
		border: 2px solid #00ff00;
		border-radius: 5px;
		max-width: 80vw;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
	}
	
	.emulator-modal {
		max-width: 90vw;
		max-height: 90vh;
	}
	
	.modal-header {
		background: #004400;
		padding: 10px 15px;
		border-bottom: 1px solid #00ff00;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.modal-title {
		font-weight: bold;
		color: #00ff00;
	}
	
	.close-btn {
		background: none;
		border: 1px solid #00ff00;
		color: #00ff00;
		padding: 5px 10px;
		cursor: pointer;
		font-family: inherit;
	}
	
	.close-btn:hover {
		background: rgba(0, 255, 0, 0.1);
	}
	
	.modal-content {
		padding: 20px;
		flex: 1;
		overflow: auto;
	}
	
	.file-info {
		display: flex;
		gap: 20px;
		margin-bottom: 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid #004400;
		font-size: 12px;
	}
	
	.code-display {
		background: #000;
		padding: 15px;
		border: 1px solid #004400;
		font-size: 11px;
		line-height: 1.3;
		overflow: auto;
		max-height: 400px;
	}
	
	.emulator-screen {
		background: #000;
		min-height: 400px;
		margin: 20px;
		border: 1px solid #004400;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.emulator-placeholder {
		text-align: center;
		padding: 40px;
	}
	
	.emulator-boot {
		font-size: 12px;
		line-height: 1.4;
	}
	
	.modal-footer {
		background: #004400;
		padding: 10px 15px;
		border-top: 1px solid #00ff00;
		display: flex;
		gap: 10px;
		justify-content: flex-end;
	}
	
	.dos-button {
		background: #001100;
		border: 1px solid #00ff00;
		color: #00ff00;
		padding: 8px 15px;
		cursor: pointer;
		font-family: inherit;
		font-size: 12px;
	}
	
	.dos-button:hover {
		background: rgba(0, 255, 0, 0.1);
	}
	
	.breadcrumb-part {
		cursor: pointer;
		text-decoration: underline;
	}
	
	.breadcrumb-part:hover {
		background: rgba(0, 255, 0, 0.1);
	}
</style>