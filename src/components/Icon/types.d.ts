import { IconNamesMap } from './types'

export type IconColor = 'default' | 'primary' | 'white' | 'pink' | 'grey' | 'green' | 'red'

export type IconNamesMap =
  'notify_solid'
  | 'notify_stroke'
  | 'wallet_stroke'
  | 'collection_stroke'
  | 'collections_solid'
  | 'home_solid'
  | 'home_stroke'
  | 'square-user_solid'
  | 'square-user_stroke'
  | 'trade_stroke'
  | 'image_solid'
  | 'image_stroke'
  | 'settings_outlined'
  | 'share_filled'
  | 'share_outlined'
  | 'success_outlined'
  | 'swap_outlined'
  | 'token_filled'
  | 'trade_outlined'
  | 'trade_outlined-1'
  | 'txt_filled'
  | 'user-profile_filled'
  | 'off_outlined'
  | 'password_filled'
  | 'password_outlined'
  | 'plus_outlined'
  | 'quest_filled'
  | 'refresh_outlined'
  | 'rejection_outlined'
  | 'search_outlined'
  | 'settings_filled'
  | 'menu_filled'
  | 'location_filled'
  | 'logout_filled'
  | 'logout_outlined'
  | 'more-menu_filled'
  | 'new_user_outlined'
  | 'new-nft_outlined'
  | 'note_filled'
  | 'number_filled'
  | 'edit_filled'
  | 'file_filled'
  | 'filters_outlined'
  | 'fire_filled'
  | 'fixed-price_filled'
  | 'info'
  | 'like_filled'
  | 'like_outlined'
  | 'chevron-up-down_outlined'
  | 'clock_filled'
  | 'close_outlined'
  | 'copy_filled'
  | 'dao'
  | 'delete_filled'
  | 'Discount-Square_filled'
  | 'calendar_filled'
  | 'cart_filled'
  | 'cash_filled'
  | 'change-wallet_outlined'
  | 'check_outlined'
  | 'chevron-left-right_outlined'
  | 'alert_filled'
  | 'add-collection_filled'
  | 'add-collection_outlined'
  | 'arrow-right_outlined'
  | 'bibs_filled'
  | 'collect_filled'
  | 'fin-assets_filled'
  | 'game_filled'
  | 'logictics_filled'
  | 'stack_filled'
  | 'trade_solid'
  | 'immu-x'
  | 'polygon'
  | 'flow'
  | 'tezos'
  | 'solana'
  | 'low-high'
  | 'high-low'
  | 'success_filled'
  | 'twitter_solid'
  | 'discord_solid'
  | 'facebook_solid'
  | 'auction_outlined'
  | 'auction_filled'
  | 'close'
  | 'timer-calendar'

export interface IconProps {
  name: IconNamesMap
  color?: IconColor
  className?: string
  fontSize?: number
  onClick?(): void
}
