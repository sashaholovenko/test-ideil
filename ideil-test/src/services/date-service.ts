export default function formatDate(dateString: string, lang:string = "ru-Ru"): string {
    const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
        timeZone: "Europe/Kiev", // Используем полное название часового пояса
    };

    const date = new Date(dateString);
    return date.toLocaleDateString(lang, options);
}