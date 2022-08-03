import Images from '../resources/images';
import Audios from '../resources/audios';
import Videos from '../resources/videos';
import Constants from '../resources/constants';

export const buttonConfig = [
  {
    label: '📅 When is the Engagement?',
    id: 'engagement_date',
  },
  {
    label: 'See Invitation Card ❤️',
    id: 'invitation',
  },
  {
    label: 'Where do I need to come? 📍',
    id: 'location',
  },
  {
    label: 'Want to see our pics 😍',
    id: 'personal_pics',
  },
  {
    label: 'We are excited to see you together 🤞🏼',
    id: 'join_bless',
  },
];

export const botConfig = {
  engagement_date: {
    text: [
      `It's on the <b>${Constants.engagementDate}</b> of August.`,
      `Yeah we know, it's less than even a month and we are super nervous!😬`,
      `Please be there by ${Constants.engagementTime} 🙏 `,
    ],
    audio: [Audios.EngagementSong],
  },
  invitation: {
    text: [`We may not have it all together, but together we have it all.`],
    image: [Images.InvitationCard],
    video: Videos.EngagementVideo,
  },
  location: {
    text: [
      `It's at <b>${Constants.engagementHallName}</b>`,
      'you can just follow google maps by clicking',
    ],
    location: [Images.LocationImage],
    link: Constants.mapLocation,
  },
  personal_pics: {
    text: [`Here you go`],
    gif: [Images.TomAndJerry],
    text1: [`Ohh!!! Sorry, that's not our real pics 😢`],
    image: [Images.Balaji, Images.Raji, Images.Together],
    text2: [`Cute couples right. Yes, we are!!!`],
  },
  join_bless: {
    text: [`Thanks we meet you on our engagement day!`],
    image: [Images.Together],
  },
};

export const chatInitialData = [
  {
    type: 'text',
    chat: 'Hey! 👋,',
    sender: 'bot',
  },
  {
    type: 'text',
    chat: 'Do you know the talk of the town?',
    sender: 'bot',
  },
  {
    type: 'text',
    chat: 'Yes!! We, <b>Balaji</b> and <b>Raji</b> are getting engaged. 💍',
    sender: 'bot',
  },
  {
    type: 'text',
    chat: 'And we want you to be a part of this celebration as we take the next step together.',
    sender: 'bot',
  },
  {
    type: 'image',
    chat: Images.CoverPic,
    sender: 'bot',
  },
];
