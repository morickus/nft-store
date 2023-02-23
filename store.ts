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
    href: '/user',
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
    number: 488,
    image: '/assets/nft/488.jpg',
    collection: 'KaleidoscopeKids',
    name: 'Kaleido Kids',
    price: 0.042
  },
  {
    number: 911,
    image: '/assets/nft/911.jpg',
    collection: 'Kitaro World',
    name: 'Kitaro',
    price: 0.48
  },
  {
    number: 14916,
    image: '/assets/nft/14916.jpg',
    collection: 'CloneX',
    name: 'CloneX',
    price: 9.2
  },
  {
    number: 2655,
    image: '/assets/nft/2655.jpg',
    collection: 'BLOOM',
    name: 'BLOOM.',
    price: 0.277
  },
  {
    number: 624,
    image: '/assets/nft/624.jpg',
    collection: 'BiPlane Bobo',
    name: 'BiPlane Bobo',
    price: 0.042
  }
]

export const nftItemsTradingArray = [
  {
    number: 488,
    image: '/assets/nft/6964-1.jpg',
    collection: 'KaleidoscopeKids',
    name: 'Kaleido Kids',
    price: 0.042
  },
  {
    number: 911,
    image: '/assets/nft/6964-2.jpg',
    collection: 'Kitaro World',
    name: 'Kitaro',
    price: 0.48
  },
  {
    number: 14916,
    image: '/assets/nft/6964-3.jpg',
    collection: 'CloneX',
    name: 'CloneX',
    price: 9.2
  },
  {
    number: 2655,
    image: '/assets/nft/6964-4.jpg',
    collection: 'BLOOM',
    name: 'BLOOM.',
    price: 0.277
  },
  {
    number: 624,
    image: '/assets/nft/6964-5.jpg',
    collection: 'BiPlane Bobo',
    name: 'BiPlane Bobo',
    price: 0.042
  }
]

export const nftCollectionsArray = [
  {
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
      image: '/assets/nft/2655.jpg',
      title: 'Kaleido Kids',
      subtitle: '#514'
    },
    {
      icon: 'note_filled',
      title: 'Imagine Dragons',
      subtitle: 'Enemy'
    },
    {
      icon: 'note_filled',
      title: 'Linkin Park',
      subtitle: 'Faint Lyrics'
    },
    {
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
    highestBidBy: 'by 0x902df023dghde3t4gredsefweduh33'
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
  ]
}

export const collectionPage = {
  banner: '/assets/banner.jpg',
  logo: '/assets/avatar/avatar-13.jpg',
}