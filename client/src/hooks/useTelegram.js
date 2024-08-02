const tg = window.Telegram.WebApp;
let username = "Anonymou123s";
let telegramId = "1231425";

try {
   username = tg.initDataUnsafe?.user.username;
}
catch {
    username = "Anon12333asdasdus";
}

try {
    telegramId = tg.initDataUnsafe?.user.id;
} catch{
    telegramId = "1231341121233231235";
}

export function useTelegram() {
    const onClose = () => {
        tg.close();
      }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return{ 
        onToggleButton,
        onClose,
        tg,
        userNameHook: username,
        tgIdHook: telegramId
     }

}