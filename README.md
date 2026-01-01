# Smart Chess Bot

A powerful chess analysis system for Chess.com and Lichess.org that provides engine-powered move suggestions and position analysis.

## Features

- **Multiple Engine Support**: Choose from local engines, cloud engines, or connect to external servers
- **WebSocket Support**: Connect to remote chess engines via WebSocket (Bettermint, chesshook-intermediary)
- **Bullet Mode**: Ultra-fast analysis for blitz and bullet games
- **Visual Highlighting**: Display suggested moves directly on the chessboard
- **Flexible Configuration**: Adjust engine strength, analysis depth, and move time

## Installation

### Chrome Extension

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `chrome-extension` folder
6. The extension icon will appear in your toolbar

### Userscript (Tampermonkey/Greasemonkey)

1. Install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)
2. Open `smart-chess.js` and click "Install"
3. The script will run automatically on Chess.com and Lichess.org

## Engine Configuration

Smart Chess Bot supports three types of engines:

### 1. Bettermint (Cloud WebSocket Engines)

**Bettermint** provides free, cloud-hosted UCI chess engines accessible via WebSocket. No local setup required!

**Repository**: [ProtonDev-sys/bettermint-sockets](https://github.com/ProtonDev-sys/bettermint-sockets)

#### Features
- No installation required
- Multiple engine personalities
- Free to use
- Hosted on Hugging Face Spaces

#### URL Format
```
wss://ProtonnDev-engine.hf.space/{engine-name}
```

#### Available Engines

**Stockfish Engines** (Classic strong engines):
- `wss://ProtonnDev-engine.hf.space/stockfish-1` - Stockfish 1
- `wss://ProtonnDev-engine.hf.space/stockfish-2` - Stockfish 2
- `wss://ProtonnDev-engine.hf.space/stockfish-3` - Stockfish 3
- `wss://ProtonnDev-engine.hf.space/stockfish-4` - Stockfish 4
- `wss://ProtonnDev-engine.hf.space/stockfish-5` - Stockfish 5
- `wss://ProtonnDev-engine.hf.space/stockfish-6` - Stockfish 6
- `wss://ProtonnDev-engine.hf.space/stockfish-7` - Stockfish 7
- `wss://ProtonnDev-engine.hf.space/stockfish-8` - Stockfish 8
- `wss://ProtonnDev-engine.hf.space/stockfish-9` - Stockfish 9
- `wss://ProtonnDev-engine.hf.space/stockfish-10` - Stockfish 10
- `wss://ProtonnDev-engine.hf.space/stockfish-11` - Stockfish 11
- `wss://ProtonnDev-engine.hf.space/stockfish-12` - Stockfish 12
- `wss://ProtonnDev-engine.hf.space/stockfish-13` - Stockfish 13
- `wss://ProtonnDev-engine.hf.space/stockfish-14` - Stockfish 14
- `wss://ProtonnDev-engine.hf.space/stockfish-15` - Stockfish 15
- `wss://ProtonnDev-engine.hf.space/stockfish-16` - Stockfish 16

**Maia Engines** (Human-like playing style):
- `wss://ProtonnDev-engine.hf.space/maia-1100` - Maia 1100 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1200` - Maia 1200 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1300` - Maia 1300 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1400` - Maia 1400 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1500` - Maia 1500 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1600` - Maia 1600 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1700` - Maia 1700 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1800` - Maia 1800 ELO
- `wss://ProtonnDev-engine.hf.space/maia-1900` - Maia 1900 ELO

**Rodent III Engines** (Personality-based playing styles):
- `wss://ProtonnDev-engine.hf.space/rodent3-alekhine` - Alekhine personality
- `wss://ProtonnDev-engine.hf.space/rodent3-default` - Default balanced play
- `wss://ProtonnDev-engine.hf.space/rodent3-fischer` - Fischer personality

**Patricia Engines** (Rating-calibrated engines):
- `wss://ProtonnDev-engine.hf.space/patricia-1100` - Patricia 1100 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1200` - Patricia 1200 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1300` - Patricia 1300 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1400` - Patricia 1400 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1500` - Patricia 1500 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1600` - Patricia 1600 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1700` - Patricia 1700 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1800` - Patricia 1800 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-1900` - Patricia 1900 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2000` - Patricia 2000 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2100` - Patricia 2100 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2200` - Patricia 2200 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2300` - Patricia 2300 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2400` - Patricia 2400 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2500` - Patricia 2500 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2600` - Patricia 2600 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2700` - Patricia 2700 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2800` - Patricia 2800 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-2900` - Patricia 2900 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-3000` - Patricia 3000 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-3100` - Patricia 3100 ELO
- `wss://ProtonnDev-engine.hf.space/patricia-3200` - Patricia 3200 ELO

#### Setup
1. Open Smart Chess Bot settings
2. Select "Node Server Engines" as engine type
3. Enter a Bettermint URL (e.g., `wss://ProtonnDev-engine.hf.space/stockfish-15`)
4. Start playing!

#### Example: Using Stockfish 15
```
Engine URL: wss://ProtonnDev-engine.hf.space/stockfish-15
Engine Mode: Depth
Engine Power: 15
```

#### Notes
- Cloud engines may have response time variability
- Some engines may be rate-limited during high usage
- No authentication required

---

### 2. chesshook-intermediary (Local WebSocket Server)

**chesshook-intermediary** is a local WebSocket server that provides access to your own UCI chess engines.

**Repository**: [0mlml/chesshook-intermediary](https://github.com/0mlml/chesshook-intermediary)

#### Features
- Uses your local UCI engines (e.g., Stockfish)
- Full control over engine configuration
- Optional authentication with passkey
- WebSocket-based communication

#### Requirements
- Go compiler (1.16 or later)
- UCI chess engine (e.g., Stockfish, Komodo, Leela Chess Zero)

#### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/0mlml/chesshook-intermediary.git
   cd chesshook-intermediary
   ```

2. **Build the server**:
   ```bash
   go build
   ```

3. **Place your UCI engine** (e.g., `stockfish.exe` or `stockfish`) in the same directory or specify its path in the configuration.

4. **Run the server**:
   ```bash
   ./chesshook-intermediary
   ```
   
   Or with a custom port:
   ```bash
   ./chesshook-intermediary -port 8080
   ```

#### Configuration

Edit the configuration file or use command-line arguments:

- **Engine Path**: Path to your UCI engine executable
  ```bash
  ./chesshook-intermediary -engine /path/to/stockfish
  ```

- **Port**: WebSocket server port (default: 8080)
  ```bash
  ./chesshook-intermediary -port 8080
  ```

- **Passkey** (Optional): Add authentication
  ```bash
  ./chesshook-intermediary -passkey mysecretkey
  ```

#### Smart Chess Bot Setup

1. Start chesshook-intermediary server
2. Open Smart Chess Bot settings
3. Select "Node Server Engines" as engine type
4. Enter the WebSocket URL:
   ```
   ws://localhost:8080/ws
   ```
5. Start playing!

#### URL Format
```
ws://localhost:8080/ws
```

Or if running on a different machine:
```
ws://your-server-ip:8080/ws
```

#### Protocol

chesshook-intermediary uses a subscription-based protocol:

1. **Connect** to `ws://localhost:8080/ws`
2. **Send** `sub` to subscribe to engine output
3. **Receive** `subok` confirmation
4. **Send** UCI commands (`position fen ...`, `go depth ...`)
5. **Receive** `info` and `bestmove` responses

Smart Chess Bot automatically detects chesshook-intermediary (by the `/ws` endpoint) and handles the subscription protocol.

#### Authentication

If you've configured a passkey, include it in the URL:
```
ws://localhost:8080/ws?passkey=mysecretkey
```

If authentication fails, you'll see `autherr` in the logs.

#### Example: Using Local Stockfish 16

```bash
# Download Stockfish 16 from https://stockfishchess.org/download/
# Run chesshook-intermediary
./chesshook-intermediary -engine ./stockfish -port 8080
```

In Smart Chess Bot:
```
Engine URL: ws://localhost:8080/ws
Engine Mode: Depth
Engine Power: 20
```

#### Troubleshooting

- **Connection refused**: Make sure chesshook-intermediary is running
- **`autherr` in logs**: Check your passkey is correct
- **No moves returned**: Verify your UCI engine is working correctly
- **Slow responses**: Increase available CPU threads in engine config

---

### 3. Local HTTP Node Server

A local HTTP-based server for running UCI engines.

#### Requirements
- Node.js (v14 or later)
- UCI chess engine (e.g., Stockfish)

#### Installation

1. **Navigate to repository root**:
   ```bash
   cd smartchessbot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Download a UCI engine**:
   - Download Stockfish from [stockfishchess.org](https://stockfishchess.org/download/)
   - Place the engine executable in the repository root
   - Rename it to match the engine name in settings (e.g., `stockfish-15.exe` on Windows, `stockfish-15` on Linux/Mac)

4. **Start the server**:
   ```bash
   node chess-engine.js
   ```
   
   The server will start on `http://localhost:5000`

#### Smart Chess Bot Setup

1. Start the Node server
2. Open Smart Chess Bot settings
3. Select "Node Server Engines" as engine type
4. Configure:
   ```
   Engine URL: http://localhost:5000
   Engine Name: stockfish-15
   ```
5. Start playing!

#### URL Format
```
http://localhost:5000
```

#### Using Different Engines

To use a different engine:

1. Place the engine executable in the repository root
2. Update the engine name in Smart Chess Bot settings
3. Restart the Node server

**Example: Using Komodo**
```
Engine URL: http://localhost:5000
Engine Name: komodo-14
```

Make sure `komodo-14.exe` (Windows) or `komodo-14` (Linux/Mac) is in the repository root.

#### Configuration

Edit `chess-engine.js` to customize:
- Port number
- Engine timeout settings
- Thread count
- Hash table size

#### Troubleshooting

- **Server not starting**: Check if port 5000 is already in use
- **Engine not found**: Verify the engine executable name matches the configuration
- **Slow analysis**: Increase engine threads or hash size in `chess-engine.js`

---

## Usage

1. Navigate to Chess.com or Lichess.org
2. Start a game
3. Smart Chess Bot will automatically analyze positions
4. View suggested moves highlighted on the board (if enabled)

### Settings

Access settings via:
- **Chrome Extension**: Click the extension icon
- **Userscript**: Open the GUI window

#### Key Settings

- **Engine Type**: Choose between web engines, Node server, or Lichess Cloud
- **Engine Mode**: Depth-based or time-based analysis
- **Engine Power**: Adjust analysis depth (1-20) or move time (50-2000ms)
- **Bullet Mode**: Enable for fast games (reduces depth for quicker responses)
- **Display Moves**: Show suggested moves on the board
- **Display Opponent Moves**: Analyze opponent's position

## Comparison: Which Engine Should I Use?

| Feature | Bettermint | chesshook-intermediary | Node HTTP Server |
|---------|------------|------------------------|------------------|
| **Setup** | None (cloud) | Medium (Go + engine) | Easy (Node.js + engine) |
| **Performance** | Good | Excellent (local) | Excellent (local) |
| **Reliability** | Varies | High | High |
| **Privacy** | Positions sent to cloud | Fully local | Fully local |
| **Cost** | Free | Free (uses your hardware) | Free (uses your hardware) |
| **Best For** | Quick setup, testing | Advanced users, privacy | General use, reliability |

## Security and Privacy

### Cloud Engines (Bettermint)
- Chess positions are sent to Hugging Face Spaces
- No personal data is transmitted
- Anonymous usage

### Local Engines (chesshook-intermediary, Node Server)
- All analysis happens locally
- No data leaves your computer
- Complete privacy

## Legal Notice

This tool is for **educational purposes only**. Using chess engines during rated games violates the terms of service of Chess.com and Lichess.org and is considered cheating. Use responsibly in analysis mode or against other engines only.

## Troubleshooting

### WebSocket Connection Issues

**Problem**: "WebSocket error - check engine URL!"

**Solutions**:
- Verify the URL format is correct
- Check that the server is running
- Ensure no firewall is blocking the connection
- For chesshook-intermediary: verify the `/ws` endpoint is in the URL

### Authentication Errors

**Problem**: "Authentication required - check passkey"

**Solutions**:
- Include passkey in URL: `ws://localhost:8080/ws?passkey=yourkey`
- Verify the passkey matches the server configuration
- Check chesshook-intermediary logs for details

### Slow Analysis

**Solutions**:
- Enable Bullet Mode for faster responses
- Reduce analysis depth
- Use a faster engine (e.g., Stockfish 16)
- Increase engine thread count (local servers)

### No Moves Displayed

**Solutions**:
- Enable "Display moves on site" in settings
- Check that the game is active
- Verify engine is connected and responding
- Check browser console for errors

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

See LICENSE file for details.

## Credits

- Original concept and development by sayfpack13
- Bettermint engines by [ProtonDev-sys](https://github.com/ProtonDev-sys)
- chesshook-intermediary by [0mlml](https://github.com/0mlml)
- Stockfish chess engine by the Stockfish team

## Links

- [Bettermint Repository](https://github.com/ProtonDev-sys/bettermint-sockets)
- [chesshook-intermediary Repository](https://github.com/0mlml/chesshook-intermediary)
- [Stockfish Download](https://stockfishchess.org/download/)
- [UCI Protocol Specification](http://wbec-ridderkerk.nl/html/UCIProtocol.html)
