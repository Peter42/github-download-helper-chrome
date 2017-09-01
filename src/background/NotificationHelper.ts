
export default class NotificationHelper {

    private static isWebExtension() {
        return window.hasOwnProperty("browser");
    }

    public static create(title:string, message:string, duration=5, success=false){
        let id: string = "ID" + Math.random().toString(16).slice(2) +"-"+ (new Date()).getTime();

        let icon = "images/icon-48.png";
        if(!success){
            icon= "images/icon-red-48.png";
        }

        var options = {
            type: "basic",
            iconUrl: icon,
            title: title,
            message: message
        };

        if(!NotificationHelper.isWebExtension()) {
            // strangely firefox seems not to support this option although documented as supported here https://developer.mozilla.org/en-US/docs/Web/API/notification/requireInteraction
            options["requireInteraction"] = true;
        }

        chrome.notifications.create(id, options);

        if(duration){
            setTimeout(function(){
                chrome.notifications.clear(id);
            }, duration*1000);
        }

        return id;
    }
}