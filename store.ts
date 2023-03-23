import { IconNamesMap } from '@/components/Icon/types'
import { Nested } from '@/components/NftNested'

export const sideMenuArray = [
  {
    href: '/',
    text: 'Main page',
    icon: 'home_stroke' as IconNamesMap,
    iconActive: 'home_solid' as IconNamesMap
  },
  {
    href: '/collection',
    text: 'NFT collections',
    icon: 'collection_stroke' as IconNamesMap,
    iconActive: 'collections_solid' as IconNamesMap
  },
  {
    href: '/nft',
    text: 'NFT items',
    icon: 'image_stroke' as IconNamesMap,
    iconActive: 'image_solid' as IconNamesMap
  },
  {
    href: '/trade',
    text: 'NFT trade',
    icon: 'trade_stroke' as IconNamesMap,
    iconActive: 'trade_solid' as IconNamesMap
  },
  {
    href: '/auction',
    text: 'NFT auction',
    icon: 'auction_outlined' as IconNamesMap,
    iconActive: 'auction_filled' as IconNamesMap
  },
  {
    href: '/users',
    text: 'TOP users',
    icon: 'square-user_stroke' as IconNamesMap,
    iconActive: 'square-user_solid' as IconNamesMap
  }
]

export const menuArray = [
  {
    href: 'mint-nft',
    text: 'Mint NFT',
    icon: 'add-collection_outlined' as IconNamesMap
  },
  {
    href: 'dao',
    text: 'DAO',
    icon: 'dao' as IconNamesMap
  },
  {
    href: 'about-game',
    text: 'About game',
    icon: 'info' as IconNamesMap
  }
]

export const nftItemsArray = [
  {
    id: 1,
    number: 488,
    image: '/assets/nft/488.jpg',
    collection: 'KaleidoscopeKids',
    name: 'Kaleido Kids',
    price: 0.042,
    highestBid: 0
  },
  {
    id: 1,
    number: 911,
    image: '/assets/nft/911.jpg',
    collection: 'Kitaro World',
    name: 'Kitaro',
    price: 0.48,
    highestBid: 0
  },
  {
    id: 1,
    number: 14916,
    image: '/assets/nft/14916.jpg',
    collection: 'CloneX',
    name: 'CloneX',
    price: 9.2,
    highestBid: 0
  },
  {
    id: 1,
    number: 2655,
    image: '/assets/nft/2655.jpg',
    collection: 'BLOOM',
    name: 'BLOOM.',
    price: 0.277,
    highestBid: 0
  },
  {
    id: 1,
    number: 624,
    image: '/assets/nft/624.jpg',
    collection: 'BiPlane Bobo',
    name: 'BiPlane Bobo',
    price: 0.042,
    highestBid: 0
  }
]

export interface IOwner {
  name: string
  avatar: string
  wallet: string
}

export interface INft {
  id: number
  number: number
  image: string
  collection: string
  name: string
  owner: IOwner
  price: number
  extraPay?: number
  auction?: {
    startBid: number
    currentBid?: number
    bidStep?: number
    redemption: number
    startAt: Date
    endAt: Date
  }
}

export const nftTradeItemsArray: INft[] = [
  {
    id: 1,
    number: 488,
    image: '/assets/nft/488.jpg',
    collection: 'KaleidoscopeKids',
    name: 'Kaleido Kids',
    owner: {
      name: 'KK Man',
      avatar: '/assets/avatar/avatar-11.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8,
    auction: {
      startBid: 20,
      currentBid: 120,
      redemption: 200,
      startAt: new Date(new Date().getTime() - 86400000),
      endAt: new Date(new Date().getTime() + 186400000),
    }
  },
  {
    id: 2,
    number: 911,
    image: '/assets/nft/911.jpg',
    collection: 'Kitaro World',
    name: 'Kitaro',
    owner: {
      name: 'KK Man',
      avatar: '/assets/avatar/avatar-12.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 4.2,
    auction: {
      startBid: 20,
      currentBid: 120,
      redemption: 200,
      startAt: new Date(new Date().getTime() - 86400000),
      endAt: new Date(new Date().getTime() + 46400000),
    }
  },
  {
    id: 3,
    number: 14916,
    image: '/assets/nft/14916.jpg',
    collection: 'CloneX',
    name: 'CloneX',
    owner: {
      name: 'KK Man',
      avatar: '/assets/avatar/avatar-10.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: -5,
    auction: {
      startBid: 20,
      redemption: 200,
      startAt: new Date(new Date().getTime() + 86400000),
      endAt: new Date(new Date().getTime() + 186400000),
    }
  },
  {
    id: 4,
    number: 2655,
    image: '/assets/nft/2655.jpg',
    collection: 'BLOOM',
    name: 'BLOOM.',
    owner: {
      name: 'KK Man',
      avatar: '/assets/avatar/avatar-9.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8,
    auction: {
      startBid: 20,
      redemption: 200,
      startAt: new Date(new Date().getTime() + 86400000),
      endAt: new Date(new Date().getTime() + 186400000),
    }
  },
  {
    id: 5,
    number: 624,
    image: '/assets/nft/624.jpg',
    collection: 'BiPlane Bobo',
    name: 'BiPlane Bobo',
    owner: {
      name: 'KK Man',
      avatar: '/assets/avatar/avatar-8.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8,
    auction: {
      startBid: 20,
      redemption: 200,
      startAt: new Date(new Date().getTime() + 86400000),
      endAt: new Date(new Date().getTime() + 186400000),
    }
  },
  {
    id: 6,
    number: 488,
    image: '/assets/nft/6964-2.jpg',
    collection: 'KaleidoscopeKids',
    name: 'Kaleido Kids',
    owner: {
      name: 'KK Man',
      avatar: '/assets/avatar/avatar-7.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: -2,
    auction: {
      startBid: 20,
      redemption: 200,
      startAt: new Date(new Date().getTime() + 86400000),
      endAt: new Date(new Date().getTime() + 186400000),
    }
  }
]

export const nftItemsTradingArray = [
  {
    id: 1,
    number: 488,
    image: '/assets/nft/6964-1.jpg',
    collection: 'KaleidoscopeKids',
    name: 'Kaleido Kids',
    owner: {
      name: '',
      avatar: '/assets/avatar/avatar-12.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8
  },
  {
    id: 1,
    number: 911,
    image: '/assets/nft/6964-2.jpg',
    collection: 'Kitaro World',
    name: 'Kitaro',
    owner: {
      name: '',
      avatar: '/assets/avatar/avatar-12.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8
  },
  {
    id: 1,
    number: 14916,
    image: '/assets/nft/6964-3.jpg',
    collection: 'CloneX',
    name: 'CloneX',
    owner: {
      name: '',
      avatar: '/assets/avatar/avatar-12.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8
  },
  {
    id: 1,
    number: 2655,
    image: '/assets/nft/6964-4.jpg',
    collection: 'BLOOM',
    name: 'BLOOM.',
    owner: {
      name: '',
      avatar: '/assets/avatar/avatar-12.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8
  },
  {
    id: 1,
    number: 624,
    image: '/assets/nft/6964-5.jpg',
    collection: 'BiPlane Bobo',
    name: 'BiPlane Bobo',
    owner: {
      name: '',
      avatar: '/assets/avatar/avatar-12.png',
      wallet: '0x097df08623412412312312300hd'
    },
    price: 16.2,
    extraPay: 3.8
  }
]

export const nftCollectionsArray = [
  {
    id: 1,
    image: '/assets/collection/isekai-meta.jpg',
    ethereum: true,
    bitcoin: true,
    countNft: 10423,
    status: 1,
    avatar: '/assets/avatar/avatar-2.jpg',
    name: 'Isekai meta',
    mintable: true
  },
  {
    id: 1,
    image: '/assets/collection/project-j.jpg',
    ethereum: true,
    bitcoin: true,
    countNft: 10423,
    status: 2,
    avatar: '/assets/avatar/avatar-3.jpg',
    name: 'Project J by Supermeta+',
    mintable: true
  },
  {
    id: 1,
    image: '/assets/collection/mystics.jpg',
    ethereum: true,
    bitcoin: true,
    countNft: 10423,
    status: 2,
    avatar: '/assets/avatar/avatar-5.jpg',
    name: 'MysticsUniverse',
    mintable: true
  },
  {
    id: 1,
    image: '/assets/collection/stage-1-1.jpg',
    ethereum: true,
    bitcoin: true,
    countNft: 10423,
    status: 2,
    avatar: '/assets/avatar/avatar-1.jpg',
    name: 'Sidekast Stage 1-1',
    mintable: true
  },
  {
    id: 1,
    image: '/assets/collection/drji.jpg',
    ethereum: true,
    bitcoin: true,
    countNft: 10423,
    status: 1,
    avatar: '/assets/avatar/avatar-4.jpg',
    name: 'Sidekast Stage 1-1',
    mintable: true
  },
  {
    id: 1,
    image: '/assets/collection/fart.jpg',
    ethereum: true,
    bitcoin: true,
    countNft: 423,
    status: 1,
    avatar: '/assets/avatar/avatar-6.jpg',
    name: 'Sidekast Stage 1-1',
    mintable: false
  },
]

export const users = [
  {
    avatar: "/assets/avatar/avatar-7.png",
    image: '/assets/collection/isekai-meta.jpg',
    follow: 26000,
    name: "LUX"
  },
  {
    avatar: "/assets/avatar/avatar-8.png",
    image: '/assets/collection/project-j.jpg',
    follow: 26000,
    name: "Nitters"
  },
  {
    avatar: "/assets/avatar/avatar-9.png",
    image: '/assets/collection/mystics.jpg',
    follow: 26000,
    name: "flowmaster"
  },
  {
    avatar: "/assets/avatar/avatar-10.png",
    image: '/assets/collection/stage-1-1.jpg',
    follow: 12000,
    name: "burakY"
  },
  {
    avatar: "/assets/avatar/avatar-11.png",
    image: '/assets/collection/drji.jpg',
    follow: 26000,
    name: "hominums"
  },
  {
    avatar: "/assets/avatar/avatar-12.png",
    image: '/assets/collection/fart.jpg',
    follow: 26000,
    name: "KK Man"
  },
  {
    avatar: "/assets/avatar/avatar-8.png",
    image: '/assets/collection/isekai-meta.jpg',
    follow: 11000,
    name: "Nitters"
  },
  {
    avatar: "/assets/avatar/avatar-9.png",
    image: '/assets/collection/project-j.jpg',
    follow: 26000,
    name: "flowmaster"
  },
  {
    avatar: "/assets/avatar/avatar-10.png",
    image: '/assets/collection/mystics.jpg',
    follow: 26000,
    name: "burakY"
  },
  {
    avatar: "/assets/avatar/avatar-11.png",
    image: '/assets/collection/stage-1-1.jpg',
    follow: 26000,
    name: "hominums"
  },
  {
    avatar: "/assets/avatar/avatar-7.png",
    image: '/assets/collection/drji.jpg',
    follow: 26000,
    name: "LUX"
  },
  {
    avatar: "/assets/avatar/avatar-8.png",
    image: '/assets/collection/fart.jpg',
    follow: 15000,
    name: "Nitters"
  }
]

export const optionsCryptoWallet = [
  {
    label: 'Ethereum',
    value: 'eth',
    prefixIcon: 'token_filled' as IconNamesMap
  },
  {
    label: 'Flow',
    value: 'flow',
    prefixIcon: 'flow' as IconNamesMap
  },
  {
    label: 'Immutable-x',
    value: 'immu-x',
    prefixIcon: 'immu-x' as IconNamesMap
  },
  {
    label: 'Polygon',
    value: 'polygon',
    prefixIcon: 'polygon' as IconNamesMap
  },
  {
    label: 'Solana',
    value: 'solana',
    prefixIcon: 'solana' as IconNamesMap
  },
  {
    label: 'Tezos',
    value: 'tezos',
    prefixIcon: 'tezos' as IconNamesMap
  }
]

export const optionsTrending = [
  {
    label: 'Trending',
    value: 'trending'
  },
  {
    label: 'New items',
    value: 'new-items'
  },
  {
    label: 'Price l-h',
    value: 'price_l-h',
    suffixIcon: 'low-high' as IconNamesMap
  },
  {
    label: 'Price h-l',
    value: 'price_h-l',
    suffixIcon: 'high-low' as IconNamesMap
  }
]

export const nftPage = {
  id: 1,
  number: 488,
  like: 26,
  image: '/assets/nft/6964-3-1.jpg',
  nested: [
    {
      id: 1,
      image: '/assets/nft/2655.jpg',
      title: 'Kaleido Kids',
      subtitle: '#514'
    },
    {
      id: 2,
      icon: 'note_filled',
      title: 'Imagine Dragons',
      subtitle: 'Enemy'
    },
    {
      id: 3,
      icon: 'note_filled',
      title: 'Linkin Park',
      subtitle: 'Faint Lyrics'
    },
    {
      id: 4,
      icon: 'file_filled',
      title: 'Some Doc',
      subtitle: 'Title'
    }
  ] as Nested[],
  collection: {
    id: 1,
    image: '/assets/avatar/avatar-13.jpg',
    name: 'KaleidoscopeKids'
  },
  owner: {
    name: '',
    avatar: '/assets/avatar/avatar-12.png',
    wallet: '0x097df08623412412312312300hd'
  },
  creator: {
    avatar: '/assets/avatar/avatar-8.png',
    wallet: '0x0755gg771231231231231231288ij'
  },
  price: {
    eth: 70,
    dollar: 84000,
    highestBid: 4,
    highestBidBy: '0x902df023dghde3t4gredsefweduh33'
  },
  name: 'Kaleido Kids',
  description: 'DigiDaigaku is a collection of 2022 unique characters developed by Limit Break, a company founded by world famous game designers Gabriel Leydon and Halbert Nakagawa. The story...',
  bids: [
    {
      user: {
        avatar: '/assets/avatar/avatar-12.png',
        name: 'Kim',
        wallet: '0x097df086sd3d232fe23d300hd'
      },
      created_at: 1668249120,
      price: {
        wEth: 5.25,
        dollar: 6747,
      }
    },
    {
      user: {
        avatar: '/assets/avatar/avatar-1.jpg',
        name: 'Untre',
        wallet: '0x097df086s1wd232fe23d300hd'
      },
      created_at: 1667478000,
      price: {
        wEth: 1.23,
        dollar: 2344,
      }
    },
    {
      user: {
        avatar: '/assets/avatar/avatar-7.png',
        name: 'Andrew',
        wallet: '0x097df086s1wd232fe23d300hd'
      },
      created_at: 1665333900,
      price: {
        wEth: 5.25,
        dollar: 6747,
      }
    },
    {
      user: {
        avatar: '/assets/avatar/avatar-3.jpg',
        name: 'Oracle',
        wallet: '0x097df086s1wd232fe23d300hd'
      },
      created_at: 1664608260,
      price: {
        wEth: 4.42,
        dollar: 5443,
      }
    },
    {
      user: {
        avatar: '/assets/avatar/avatar-4.jpg',
        name: 'Droid',
        wallet: '0x097df086s1wd232fe23d300hd'
      },
      created_at: 1664518920,
      price: {
        wEth: 5.25,
        dollar: 6747,
      }
    },
    {
      user: {
        avatar: '/assets/avatar/avatar-5.jpg',
        name: 'SSSs',
        wallet: '0x097df086s1wd232fe23d300hd'
      },
      created_at: 1664094000,
      price: {
        wEth: 6.99,
        dollar: 7722,
      }
    },
  ],
  properties: [
    {
      image: '/assets/icon/crystal-ball.png',
      label: 'Magic',
      text: '10 powerpoints',
      value: 16
    },
    {
      image: '/assets/icon/dna.png',
      label: 'DNA',
      text: 'BBNTR',
      value: 2
    },
    {
      image: '/assets/icon/swords.png',
      label: 'Fight',
      text: '24 powerpoints',
      value: 24
    }
  ],
  referral: 'https://app.cryptofairies.club/location/35/item',
  property: {
    color: 'Mild',
    location: 'DAO MAO',
    stick: 'Samurai',
    side: 'GOODNESS',
  } as props,
}

export type propsType = {
  floor: number
  volume: number
  items: string
  users: string
  owners: string
}

export interface props {
  color: string
  location: string
  stick: string
  side: string
}

export const collectionPage = {
  title: 'KaleidoKids',
  price: 0.1,
  subtitle: 'Unusual kids',
  creator: 'Dj.Snash',
  smart: '0x0755gg553f3ed34f0lld388ij',
  banner: '/assets/banner.jpg',
  logo: '/assets/avatar/avatar-13.jpg',
  props: {
    floor: 74.2,
    volume: 850.3,
    items: '10K',
    users: '9K',
    owners: '6.6K'
  } as propsType,
  items: [...nftItemsArray, ...nftItemsArray],
  text: 'The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.',
  description: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.',
  aboutProject: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.',
  team: [
    {
      name: 'Andrew',
      position: 'Designer',
      image: '/assets/team/Rectangle7297.jpg'
    },
    {
      name: 'Max',
      position: 'Proger',
      image: '/assets/team/Rectangle7298.jpg'
    },
    {
      name: 'Alexa',
      position: 'Teamlead',
      image: '/assets/team/Rectangle7299.jpg'
    },
    {
      name: 'Jessica',
      position: 'Prod.manager',
      image: '/assets/team/Rectangle7300.jpg'
    }
  ],
  congratulation: {
    name: 'Kaleido Kids #441',
    props: {
      color: 'Sunrise',
      location: 'Azerot',
      stick: 'Bitcoin',
      side: 'EVIL',
    },
    referral: 'https://app.cryptofairies.club/location/35/item',
    image: '/assets/nft/911-big.jpg',
    nested: [
      {
        id: 1,
        image: '/assets/nft/2655.jpg',
        title: 'Kaleido Kids',
        subtitle: '#514'
      },
      {
        id: 2,
        icon: 'note_filled',
        title: 'Imagine Dragons',
        subtitle: 'Enemy'
      },
      {
        id: 3,
        icon: 'note_filled',
        title: 'Linkin Park',
        subtitle: 'Faint Lyrics'
      },
      {
        id: 4,
        icon: 'file_filled',
        title: 'Some Doc',
        subtitle: 'Title'
      }
    ] as Nested[],
  }
}

export const cryptoWallet = [
  {
    label: 'Ethereum',
    value: 'eth',
    image: '/icon/eth.png'
  },
  {
    label: 'Flow',
    value: 'flow',
    image: '/icon/flow.png'
  },
  {
    label: 'Immutable-x',
    value: 'immu-x',
    image: '/icon/immu-x.png'
  },
  {
    label: 'Polygon',
    value: 'polygon',
    image: '/icon/polygon.png'
  },
  {
    label: 'Solana',
    value: 'solana',
    image: '/icon/solana.png'
  },
  {
    label: 'Tezos',
    value: 'tezos',
    image: '/icon/tezos.png'
  }
]

export const nftFunction = [
  {
    icon: 'collect_filled' as IconNamesMap,
    label: 'Collect',
    value: 'collect'
  },
  {
    icon: 'stack_filled' as IconNamesMap,
    label: 'Stack',
    value: 'stack'
  },
  {
    icon: 'game_filled' as IconNamesMap,
    label: 'Gaming',
    value: 'gaming'
  },
  {
    icon: 'fin-assets_filled' as IconNamesMap,
    label: 'Finance',
    value: 'finance'
  },
  {
    icon: 'logictics_filled' as IconNamesMap,
    label: 'Logistics',
    value: 'logistics'
  }
]