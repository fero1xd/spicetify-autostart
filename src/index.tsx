import { getOrElse } from "effect/Option";
import { BooleanFromString, decodeUnknownOption } from "effect/Schema";

(async function main() {
  if (
    !Spicetify.Player ||
    !Spicetify.Platform ||
    !Spicetify.React ||
    !Spicetify.ReactDOM ||
    !Spicetify.ReactComponent ||
    !Spicetify.Menu ||
    !Spicetify.LocalStorage ||
    !Spicetify.CosmosAsync
  ) {
    setTimeout(main, 100);
    return;
  }

  const isAutostartEnabled = decodeUnknownOption(BooleanFromString)(
    Spicetify.LocalStorage.get("__AUTOSTART__") || "false",
  ).pipe(getOrElse(() => false));

  const menuButton = new Spicetify.Menu.Item(
    "Autostart",
    isAutostartEnabled,
    (a) => {
      Spicetify.LocalStorage.set("__AUTOSTART__", `${!a.isEnabled}`);
      a.setState(!a.isEnabled);
    },
  );

  menuButton.register();
  console.log("Hello World from index.tsx!");
  if (isAutostartEnabled) {
    Spicetify.Player.play();
    Spicetify.showNotification("Playing");
  }
})();
