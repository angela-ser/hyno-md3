const { command, sleep, isPrivate, isUrl, Bitly } = require("../lib/");
command(
  {
    pattern: "getqr ?(.*)",
    fromMe: true,
    desc: "Get connection QR",
    type: "misc",
  },
  async (message, match) => {
    for (let index = 0; index < 5; index++) {
      await sleep(30 * 1000);
      await message.sendFromUrl("https://hyno-qr-md.herokuapp.com/", {
        caption: "Scan within 20 seconds",
      });
    }
    return await message.reply("Your session is OVER");
  }
);

