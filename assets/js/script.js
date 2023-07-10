// function fetchData() {
//     fetch('https://api.lanyard.rest/v1/users/474329232731013162').then(Response => {
//         if(!Response.ok) {
//             throw Error("ERROR");
//         }
//         return Response.json();
//     }).then(
//         data => {

//             if (data.data.listening_to_spotify === true) {
//                 document.querySelector('#spotify')
//                 .insertAdjacentHTML('afterbegin', `📻 Listening ${data.data.spotify.artist} - ${data.data.spotify.song}`);
//             } else {
//                 document.querySelector('#spotify')
//                 .insertAdjacentHTML('afterbegin', `❌ Not listening to anything`);
//             }

//             const pfp_img = `<img src="https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=256" alt="pfp">`;

//             if (data.data.discord_status === "offline") {
//             document.querySelector('#pfp_img')
//             .insertAdjacentHTML('afterbegin', `<img class="pfp offline" src="https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=256" alt="pfp">`);
//             } else if (data.data.discord_status === "online") {
//             document.querySelector('#pfp_img')
//             .insertAdjacentHTML('afterbegin', `<img class="pfp online" src="https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=256" alt="pfp">`);
//             } else if (data.data.discord_status === "idle") {
//             document.querySelector('#pfp_img')
//             .insertAdjacentHTML('afterbegin', `<img class="pfp idle" src="https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=256" alt="pfp">`);
//             } else if (data.data.discord_status === "dnd") {
//             document.querySelector('#pfp_img')
//             .insertAdjacentHTML('afterbegin', `<img class="pfp dnd" src="https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=256" alt="pfp">`);
//             }
//         }
//     )
// }

// fetchData();


//Import js lanyard