import { IconNamesMap } from '@/components/Icon/types'
import styles from '@/containers/Home/Home.module.scss'

export const sideMenuArray = [
  {
    href: '/',
    text: 'Main page',
    icon: 'home_stroke' as IconNamesMap,
    iconActive: 'home_solid' as IconNamesMap
  },
  {
    href: '/collections',
    text: 'NFT collections',
    icon: 'collection_stroke' as IconNamesMap,
    iconActive: 'collections_solid' as IconNamesMap
  },
  {
    href: '/items',
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
    href: '/top-users',
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
    mintable: true
  },
]

export const users = [
  {
    image: "/assets/avatar/avatar-7.png",
    follow: 26000,
    name: "LUX"
  },
  {
    image: "/assets/avatar/avatar-8.png",
    follow: 26000,
    name: "Nitters"
  },
  {
    image: "/assets/avatar/avatar-9.png",
    follow: 26000,
    name: "flowmaster"
  },
  {
    image: "/assets/avatar/avatar-10.png",
    follow: 26000,
    name: "burakY"
  },
  {
    image: "/assets/avatar/avatar-11.png",
    follow: 26000,
    name: "hominums"
  },
  {
    image: "/assets/avatar/avatar-7.png",
    follow: 26000,
    name: "LUX"
  },
  {
    image: "/assets/avatar/avatar-8.png",
    follow: 26000,
    name: "Nitters"
  },
  {
    image: "/assets/avatar/avatar-9.png",
    follow: 26000,
    name: "flowmaster"
  },
  {
    image: "/assets/avatar/avatar-10.png",
    follow: 26000,
    name: "burakY"
  },
  {
    image: "/assets/avatar/avatar-11.png",
    follow: 26000,
    name: "hominums"
  },
  {
    image: "/assets/avatar/avatar-7.png",
    follow: 26000,
    name: "LUX"
  },
  {
    image: "/assets/avatar/avatar-8.png",
    follow: 26000,
    name: "Nitters"
  }
]