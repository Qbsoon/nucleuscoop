Game.AddOption("Keyboard Player",
    "The player that will be playing on keyboard and mouse (if any)",
	"KeyboardPlayer",
    Nucleus.KeyboardPlayer.NoKeyboardPlayer);

Game.Debug = true;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SupportsKeyboard = true;
Game.HandlerInterval = 100;
Game.ExecutableName = "battlefrontii.exe";
Game.SteamID = "6060";
Game.GUID = "6060";
Game.GameName = "Star Wars: Battlefront 2";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "";
Game.NeedsSteamEmulation = false;
Game.LauncherTitle = "Star Wars Battlefront II";
Game.SaveType = Nucleus.SaveType.None;
Game.SupportsPositioning = true;
Game.HideTaskbar = false;
Game.CustomXinput = true;
Game.StartArguments = "/win";
Game.HookNeeded = true;
Game.Hook.ForceFocus = false;
Game.HookGameWindowName = "Star Wars Battlefront II";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.BlockMouseEvents = false;
Game.Hook.BlockKeyboardEvents = false;
Game.Hook.BlockInputEvents = false;
Game.LauncherExe = "";

Game.Play = function () {
    //Context.SavePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Games\\Borderlands\\WillowGame\\Config\\WillowEngine.ini";
}
