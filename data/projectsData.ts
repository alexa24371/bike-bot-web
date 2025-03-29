interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '小比克 bike',
    description: `使用 Node javascript 和 Discord.js 庫\n製作的有趣且易於使用的 Discord 聊天機器人
    現在就邀請機器人加入！
    `,
    imgSrc: '/static/images/avatar.png',
    href: 'https://discord.com/oauth2/authorize?client_id=1211405791886839899',
  }
]

export default projectsData
