import ObserverCountdown from "./ObserverCountdown";
import PublisherCountdown from "./PublisherCountdown";

const publisher = new PublisherCountdown(new Date('01/01/23'));
const root = document.getElementById('root')! as HTMLDivElement;
const observer = new ObserverCountdown(root);
publisher.addObserver(observer);
publisher.startCountdown();
    