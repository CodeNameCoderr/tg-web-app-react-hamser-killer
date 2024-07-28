const tg = window.Telegram.WebApp;
let username = "Anonymous";

try {
   username = tg.initDataUnsafe?.user.username
   console.log(tg.initDataUnsafe?.user);
}
catch {
    username = "Anonymous";
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