export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'ᥴꪮꪮꪶ ·  ه٥',
    avatar: '',
    username: 'nekomeowww',
    title: 'NGC 原始创作者',
    desc: '微信：l486946490022lQQ：1677529849',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Fabulistl' },
      { type: 'twitter', icon: 'twitter', link: 'https://x.com/Bluewhaleseal' },
    ],
    nameAliases: ['nekomeowww', '绚香猫', '絢香猫', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
  {
    name: '阿七',
    avatar: '',
    username: 'LittleSound',
    title: 'NGC 原始创作者',
    desc: '微信：l48694649l',
    nameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
    emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
