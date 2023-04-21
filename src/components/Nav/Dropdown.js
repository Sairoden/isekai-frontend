// import { Menu } from "antd";
// import { Link } from "react-router-dom";

// const apparelMenuItems = [
//   {
//     label: <Link to="/collections/anime-clothing-apparel">All Apparel</Link>,
//     key: "1",
//   },
//   {
//     label: <Link to="/collections/anime-tee-shirts">Tee Shirts</Link>,
//     key: "2",
//   },
//   {
//     label: <Link to="/collections/anime-hoodies-and-sweatshirts">Hoodies</Link>,
//     key: "3",
//   },
//   {
//     label: <Link to="/collections/anime-socks">Socks</Link>,
//     key: "4",
//   },
//   {
//     label: (
//       <Link to="/collections/anime-weeb-cosplay-accessories">Cosplay</Link>
//     ),
//     key: "5",
//   },
// ];

// const homegoodsMenuItems = [
//   {
//     label: <Link to="/collections/anime-homegoods">All Homegoods</Link>,
//     key: "6",
//   },
//   {
//     label: (
//       <Link to="/collections/3d-led-anime-bedroom-lights-lamps">
//         3D LED Lights
//       </Link>
//     ),
//     key: "7",
//   },
//   {
//     label: (
//       <Link to="/collections/anime-kawaii-cartoon-bedroom-pillows">
//         Pillows
//       </Link>
//     ),
//     key: "8",
//   },
// ];

// const lifestyleMenuItems = [
//   {
//     label: <Link to="/collections/sad-aesthetic">Sad Aesthetic</Link>,
//     key: "9",
//   },
//   {
//     label: (
//       <Link to="/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch">
//         Vaporwave
//       </Link>
//     ),
//     key: "10",
//   },
//   {
//     label: <Link to="/collections/kawaii-livestyle-accessories">Kawaii</Link>,
//     key: "11",
//   },
//   {
//     label: (
//       <Link to="/collections/japanese-senpai-shirts-and-hoodies">Senpai</Link>
//     ),
//     key: "12",
//   },
//   {
//     label: (
//       <Link to="/collections/japanese-waifu-shirts-and-hoodies">Waifu</Link>
//     ),
//     key: "13",
//   },
// ];

// const techAccessoriesMenuItems = [
//   {
//     label: <Link to="/collections/anime-phone-cases">Phone Cases</Link>,
//     key: "14",
//   },
//   {
//     label: (
//       <Link to="/collections/anime-airpod-1-2-pro-cases">AirPod Cases</Link>
//     ),
//     key: "15",
//   },
// ];

// const AboutUsMenuItems = [
//   {
//     label: <Link to="/help/about-us">About Us</Link>,
//     key: "16",
//   },
//   {
//     label: <Link to="/help/contact-us">Contact Us</Link>,
//     key: "17",
//   },
//   {
//     label: <Link to="/instruction">Wash & Care Instructions</Link>,
//     key: "18",
//   },
// ];

// const byAnimeItems = [
//   {
//     label: <Link to="/collections/all-anime-merch">All Anime Merch</Link>,
//     key: "19",
//   },
//   {
//     label: <Link to="/collections/demon-slayer-anime-merch">Demon Slayer</Link>,
//     key: "20",
//   },
//   {
//     label: (
//       <Link to="/collections/dragon-ball-z-anime-merch">Dragon Ball Z</Link>
//     ),
//     key: "21",
//   },
//   {
//     label: <Link to="/collections/naruto-anime-merch">Naruto</Link>,
//     key: "22",
//   },
//   {
//     label: <Link to="/collections/one-piece-anime-merch">One Piece</Link>,
//     key: "23",
//   },
// ];

// export const apparelNav = <Menu items={apparelMenuItems} />;

// export const homegoodsNav = <Menu items={homegoodsMenuItems} />;

// export const lifestyleNav = <Menu items={lifestyleMenuItems} />;

// export const techAccessoriesNav = <Menu items={techAccessoriesMenuItems} />;

// export const AboutUsNav = <Menu items={AboutUsMenuItems} />;

// export const byAnimeNav = <Menu items={byAnimeItems}></Menu>;

import { Menu } from "antd";
import { Link } from "react-router-dom";
export const apparelNav = (
  <Menu>
    <Menu.Item>
      <Link to="/collections/anime-clothing-apparel">All Apparel</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/anime-tee-shirts">Tee Shirts</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/anime-hoodies-and-sweatshirts">Hoodies</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/anime-socks">Socks</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/anime-weeb-cosplay-accessories">Cosplay</Link>
    </Menu.Item>
  </Menu>
);

export const homegoodsNav = (
  <Menu>
    <Menu.Item>
      <Link to="/collections/anime-homegoods">All Homegoods</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/3d-led-anime-bedroom-lights-lamps">
        3D LED Lights
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/anime-kawaii-cartoon-bedroom-pillows">
        Pillows
      </Link>
    </Menu.Item>
  </Menu>
);
export const lifestyleNav = (
  <Menu>
    <Menu.Item>
      <Link to="/collections/sad-aesthetic">Sad Aesthetic</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch">
        Vaporwave
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/kawaii-livestyle-accessories">Kawaii</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/japanese-senpai-shirts-and-hoodies">Senpai</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/japanese-waifu-shirts-and-hoodies">Waifu</Link>
    </Menu.Item>
  </Menu>
);

export const techAccessoriesNav = (
  <Menu>
    <Menu.Item>
      <Link to="/collections/anime-phone-cases">Phone Cases</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/anime-airpod-1-2-pro-cases">AirPod Cases</Link>
    </Menu.Item>
  </Menu>
);

export const AboutUsNav = (
  <Menu>
    <Menu.Item>
      <Link to="/help/about-us">About Us</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/help/contact-us">Contact Us</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/instruction">Wash & Care Instructions</Link>
    </Menu.Item>
  </Menu>
);

export const byAnimeNav = (
  <Menu>
    <Menu.Item>
      <Link to="/collections/all-anime-merch">All Anime Merch</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/demon-slayer-anime-merch">Demon Slayer</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/dragon-ball-z-anime-merch">Dragon Ball Z</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/naruto-anime-merch">Naruto</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/collections/one-piece-anime-merch">One Piece</Link>
    </Menu.Item>
  </Menu>
);
