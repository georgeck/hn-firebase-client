import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from "firebase/database";

const config = {
    databaseURL: "https://hacker-news.firebaseio.com",
};

const app = initializeApp(config);
const database = getDatabase(app);
// const user = ref(database, "v0/items/jl");
const item = ref(database, "v0/maxitem");

onValue(item, async (snapshot) => {
    const itemID = snapshot.val();
    console.log(itemID);
    await sleep(1000);
    fetch("https://hacker-news.firebaseio.com/v0/item/" + itemID + ".json")
        .then(resp => resp.json())
        .then(jsonData => console.log(jsonData))
});

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
