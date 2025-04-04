import mongoose from "mongoose";
import dotenv from "dotenv";
import Game from "./models/games";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const popularPokiGames = [
  {
    title: "Subway Surfers",
    url: "https://games.poki.com/5dd312fa-015f-11ea-ad56-9cb6d0d995f7?tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&country=LK&poki_url=https://poki.com/en/g/subway-surfers&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3,4,6,9,86,88,93,96,103,228,903,929,1103,1126,1137,1140,1143,1147,1156,1159,1160,1163,1177,1185,1190,1193&experiment=test-959a0db8",
    thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/9b4a1dc7bc1337d7896f2e8c03ed58d9.png",
    category: "Arcade",
    description: "Dash as fast as you can through the subway!"
  },
  {
    title: "Temple Run 2",
    url: "https://games.poki.com/458768/84938be4-42ce-42a8-9968-2f5f2a7618d8?tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&country=LK&poki_url=https://poki.com/en/g/temple-run-2&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3,4,6,9,93,903,929,1103,1126,1137,1140,1143,1147,1163,1190&experiment=test-959a0db8",
    thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7.png",
    category: "Adventure",
    description: "Run through ancient temples and escape the demon monkey"
  },
  {
    title: "Monkey Mart",
    url: "https://1183520a-1ec4-4f33-a7ce-7673c60f912c.poki-gdn.com/455696b7-d7c0-405e-858f-22f510789bde/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fmonkey-mart&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=4%2C52%2C64%2C69%2C91%2C96%2C103%2C118%2C414%2C839%2C929%2C1014%2C1126%2C1137%2C1140%2C1141%2C1143%2C1147%2C1163%2C1187%2C1190%2C1193%2C1205&experiment=test-959a0db8&game_id=1183520a-1ec4-4f33-a7ce-7673c60f912c&game_version_id=455696b7-d7c0-405e-858f-22f510789bde&inspector=0&csp=1",
    thumbnail: "	https://img.poki-cdn.com/cdn-cgi/image/quality=78,…cover,f=auto/ce4a204b6d2cc99d1879da0b2282b0d8.png",
    category: "Adventure",
    description: "Monkey Mart is an idle/management game where you control a cute monkey character who is in charge of a supermarket. Plant fruits, harvest produce, move around from station to station to fill the stands with various food items. Sell bananas, corn, eggs, peanuts, coffee beans, chocolate, wheat etc. Your customers will pick them up and wait for you at the cashier desk - simply stand next to the cash register to collect your money. As you unlock new aisles and grow your market with new products, you can hire assistants to help oversee the maintenance of the aisles and other employees. You can also buy appliances that can prepare advanced products with your harvest such as chocolate bars, coffee, yoghurt, popcorn, peanut butter, muffins, cookies, ice cream, and more! Make sure to upgrade your character's managing skills, unlock new work stations, and teach your staff new skills. Don't forget to wear cool hats and manage your market in style! Do you have the skill it takes to make your farmer's market the best one in town?"
  },

    {
        title: "Sweet World",
        url: "https://93ebba66-e84c-4ba2-96f0-749ce96a92ff.poki-gdn.com/23ef2590-07a0-481c-8693-c1e7f9340154/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fsweet-world&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=7%2C72%2C400%2C832%2C839%2C852%2C909%2C1082%2C1187%2C1190%2C1196&experiment=test-959a0db8&game_id=93ebba66-e84c-4ba2-96f0-749ce96a92ff&game_version_id=23ef2590-07a0-481c-8693-c1e7f9340154&inspector=0&csp=1",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,…over,f=auto/9f92075d9b3287fc20559277effeb719.jpeg",
        category: "Arcade",
        description: "Sweet World is a matching game created by TapLabGames. Get ready for a sweet journey that takes place in a magical candy land! Find two identical candies that can be connected by three or fewer straight lines. Connecting tiles open up new options to further clear the level. Plenty of exciting and challenging puzzles await you in Sweet World. Make sure to share the game with your friends and compare your high scores!"
    },

  {
        title: "Anime Dress Up",
        url: "https://games.poki.com/458768/354c0cbe-92c0-46f7-b674-dbc79f62c927?tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&country=LK&poki_url=https://poki.com/en/g/anime-dress-up&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=4,29,37,85,905,1141,1190&experiment=test-959a0db8",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,…cover,f=auto/ba4b2c2352cae3e81e1870c0c3a4adab.png",
        category: "Arcade",
        description: "Anime Dress Up is the ultimate dress-up game for creating the cutest anime girl look! Let your imagination run wild as you customize everything—from eye shape and skin color to hairstyles and outfits. Mix and match the perfect shoes and accessories, and for a magical touch, add wings, tails, and more! Angel or devil, cat or butterfly—who will you create?"
    },

  {
        title: "Urban Racer",
        url: "https://04f84434-8cf0-4d3c-8c0e-cb58f8787f26.poki-gdn.com/69184b9f-7381-4288-ad1d-69c7da6bfdfb/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Furban-racer&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=1%2C3%2C78%2C93%2C765%2C893%2C929%2C1141%2C1190&experiment=test-959a0db8&game_id=04f84434-8cf0-4d3c-8c0e-cb58f8787f26&game_version_id=69184b9f-7381-4288-ad1d-69c7da6bfdfb&inspector=0&csp=1",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,…over,f=auto/ac690395801a515782509bc69fec6db9.jfif",
        category: "Arcade",
        description: "Urban Racer is an open-world driving adventure where the city is your playground! Speed through busy downtown streets, drift along sandy beaches, and race past lively shopping districts as you take on thrilling missions. Unlock unique cars, explore every corner, and experience the ultimate driving freedom. Are you ready to rule the roads?"
    },

  {
        title: "Smash Karts",
        url: "https://8f24fefe-be3d-4113-9dc5-0678a20f8cfd.poki-gdn.com/4971ab7d-d430-4f7e-a8c9-ffdf09025ba3/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fsmash-karts&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3%2C76%2C78%2C93%2C96%2C869%2C893%2C929%2C1120%2C1126%2C1139%2C1140%2C1143%2C1147%2C1156%2C1194&experiment=test-959a0db8&game_id=8f24fefe-be3d-4113-9dc5-0678a20f8cfd&game_version_id=4971ab7d-d430-4f7e-a8c9-ffdf09025ba3&inspector=0&csp=1",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,…cover,f=auto/9c9e529b14731be871b07b89660bbc2a.png",
        category: "Arcade",
        description: "Smash Karts is a 3D driving game where the objective is to collect surprise boxes and survive using whatever you find in them: Bullets, grenades, even rockets?! Buckle up, wear your helmet, reload your guns and eliminate your opponents! You can even customize your vehicles! Can you last longer than all your playmates in this crazy, action-filled Mario Kart-esque racing game?"
    },

  {
        title: "Happy Glass",
        url: "https://5cac4523-71ea-476e-8acc-a6cb9c25cc06.poki-gdn.com/2719f5f7-a059-44f1-860d-2e8e1c70b9fd/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fhappy-glass&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=7%2C34%2C37%2C72%2C400%2C832%2C1013%2C1141%2C1190&experiment=test-959a0db8&game_id=5cac4523-71ea-476e-8acc-a6cb9c25cc06&game_version_id=2719f5f7-a059-44f1-860d-2e8e1c70b9fd&inspector=0&csp=1",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,…over,f=auto/649f916152c6defac7c09dbaf29f74e9.jfif",
        category: "Arcade",
        description: "Happy Glass is a puzzle game where your mission is to cheer up a sad, empty glass by filling it with liquid! Draw lines to guide the stream of water into the glass and watch it smile as it fills up. Think outside the box to solve puzzles in unique ways and challenge yourself with different modes and levels. Can you bring joy to the glass and become the ultimate puzzle solver?"
    },

  {
        title: "Drive Mad",
        url: "https://f9564e4e-ef25-4e4b-ba67-cb11a1576bbd.poki-gdn.com/cc1bc57a-e355-4696-97c2-097bf6188606/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fdrive-mad&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=78%2C93%2C96%2C103%2C377%2C390%2C400%2C893%2C929%2C1126%2C1139%2C1140%2C1141%2C1143%2C1147%2C1163%2C1185%2C1190%2C1193%2C1197&experiment=test-959a0db8&game_id=f9564e4e-ef25-4e4b-ba67-cb11a1576bbd&game_version_id=cc1bc57a-e355-4696-97c2-097bf6188606&inspector=0&csp=1",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,…cover,f=auto/0fdbf399b9c52aad46ce6a657a563b1b.png",
        category: "Arcade",
        description: "Drive Mad is a car game where you drive on a track filled with obstacles. Your aim is to reach the finish line in one piece. You have to balance your speed so your car doesn't flip over. This is harder than it sounds, as there are many thrilling and creative stunts and obstacles for you to enjoy. Do you have what it takes to finish every level in Drive Mad?"
    },

  {
        title: "Blaze Drifter",
        url: "https://129637ee-3ce5-4cc6-8880-2755dd332f64.poki-gdn.com/d49bf916-9a2b-4d22-9e40-c0c85711318a/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fblaze-drifter&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=1%2C78%2C765%2C893%2C929%2C1141%2C1178%2C1190&experiment=test-959a0db8&special_condition=landing&game_id=129637ee-3ce5-4cc6-8880-2755dd332f64&game_version_id=d49bf916-9a2b-4d22-9e40-c0c85711318a&inspector=0&csp=1",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/aa36401385a23a7c1a8e1ed3023d2f37.png",
        category: "Arcade",
        description: "Blaze Drifter is a thrilling 3D driving game where you aim to become the fastest driver on the road! Speed up, turn, drift, jump, and takedown—perform all the stunts and tricks to stay ahead! Hone your skills by completing levels one by one, or jump into PvP mode to challenge other players. Collect coins on the road and earn rewards from each match to buy cooler cars. Are you ready to prove you're the best driver ever?"
    },

  {
        title: "Hills of Steel",
        url: "https://652d7072-6191-4f75-a2a7-373889c8f0ca.poki-gdn.com/a633d167-e52f-454b-9216-ee783f94c8c1/index.html?country=LK&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fhills-of-steel&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3%2C6%2C65%2C77%2C249%2C869%2C929%2C1126%2C1137%2C1140%2C1141%2C1143%2C1147%2C1163%2C1190&experiment=test-959a0db8&game_id=652d7072-6191-4f75-a2a7-373889c8f0ca&game_version_id=a633d167-e52f-454b-9216-ee783f94c8c1&inspector=0&csp=1",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/e8a5f2eda2e5340e8ded263692835caa.png",
        category: "Arcade",
        description: "Hills of Steel is an action shooter game which puts you behind the wheel of a tank! Race and shoot your way through a hilled battlefield filled with enemies. There's tons of tanks, mechs and robots to unlock and use in your fight! You can also use powerful Boosters like mines, force shields and rocket strikes to make your tank even more dangerous! Can you build the ultimate tank and conquer the Hills of Steel?"
    },

  {
        title: "Kour.ioor 3D",
        url: "https://games.poki.com/458768/16b813ad-93a3-4bae-9bb0-22bd7c6b3c6f?tag=pg-b85c33d24f181e47237df10d841ad475f3710183&site_id=3&iso_lang=en&country=LK&poki_url=https://poki.com/en/g/kour-io&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3,13,65,76,77,93,242,385,744,869,929,1083,1120,1136,1137,1143,1164,1190,1194&experiment=test-959a0db8",
        thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/0da2295e96b19741684466d55cf5a6ab.png",
        category: "Arcade",
        description: "Kour.io is an online multiplayer FPS in which you will have to show who the best Kour really is! There's three different game modes to pick from; Gun Game - in which each kill gives you a newer and stronger gun, Team Deathmatch - where you have to lead your team to victory by getting the most kills or Free For All in which each Kour fights for themselves. With the points you earn in matches, you can buy crates! Each crate holds a cool reward, like a skin for your gun or a new outfit for your Kour. You start out with 7 base classes - each with their own equipment and weapons. Try them all and see which one fits your play style best! Are you a silent assassin that goes in with a silenced handgun? Or do you blow away your enemies with the Rocketeers rocket launcher? You decide. Can you become the best Kour there's ever been?"
    },
];

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Clear existing data
    await Game.deleteMany({});
    console.log('🧹 Cleared existing games');
    
    // Insert new games
    const createdGames = await Game.insertMany(popularPokiGames);
    console.log(`✅ Successfully seeded ${createdGames.length} games`);
    
    // Close connection
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();