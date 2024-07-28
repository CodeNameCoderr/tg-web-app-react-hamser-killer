const tg = window.Telegram.WebApp;
let username = "Anonymous";
let telegramId = "TempID";

try {
   username = tg.initDataUnsafe?.user.username;
}
catch {
    username = "Anonymous";
}

try {
    telegramId = tg.initDataUnsafe?.user.id;
} catch{
    telegramId = "TempID";
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
        user : username,
     }

}