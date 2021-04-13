const headerData = {
  topText: {
    isVisible: true,
    content: [[
      {
        type: 'link',
        href: '#',
        icon_class: 'fa fa-envelope-o header-email-icon',
        text: 'info@yourwebsite.com'
      },
      {
        type: 'link',
        href: '#',
        icon_class: 'fa fa-phone header-phone-icon',
        text: '(+123)456789'
      }
    ],
    [
      {
        type: 'link',
        href: '#',
        icon_class: 'fa fa-facebook'
      },
      {
        type: 'link',
        href: '#',
        icon_class: 'fa-google-plus'
      },
      {
        type: 'link',
        href: '#',
        icon_class: 'fa fa-twitter'
      },
      {
        type: 'link',
        href: '#',
        icon_class: 'fa fa-linkedin'
      }
    ]]
  },
  logo: {
    imgPath: './img/',
    logo: 'Neuron_logo.png',
    alt: 'Logo',
  },
  nav: [
    {
      type: 'text',
      href: '#',
      text: 'HOME',
      submenu: [
        { type: 'link', href: '#', text: 'Home One' },
        { type: 'link', href: '#', text: 'Home Two' },
        { type: 'link', href: '#', text: 'Home Three' }
      ]
    },
    {
      type: 'link',
      href: '#',
      text: 'ABOUT',
    },
    {
      type: 'link',
      href: '#',
      text: 'FEATURES',
    },
    {
      type: 'link',
      href: '#',
      text: 'PAGES',
      submenu: [
        { type: 'link', href: '#', text: 'Mobile App' },
        { type: 'link', href: '#', text: 'Team Page' },
        { type: 'link', href: '#', text: 'Privicy Policy Page' },
        { type: 'link', href: '#', text: 'Pricing Plan' },
        { type: 'link', href: '#', text: 'ChatBot' },
        { type: 'link', href: '#', text: 'Login' },
        { type: 'link', href: '#', text: 'Register' },
        { type: 'link', href: '#', text: 'Download' },
        { type: 'link', href: '#', text: 'Coming Soon' },
        { type: 'link', href: '#', text: '404 Error' }
      ]
    },
    {
      type: 'link',
      href: '#',
      text: 'SHOP',
      submenu: [
        { type: 'link', href: '#', text: 'Shop' },
        { type: 'link', href: '#', text: 'Shop Single' },
        { type: 'link', href: '#', text: 'Cart' },
        { type: 'link', href: '#', text: 'Checkout' }
      ]
    },
    {
      type: 'link',
      href: '#',
      text: 'BLOG',
      submenu: [
        { type: 'link', href: '#', text: 'Blog' },
        { type: 'link', href: '#', text: 'Blog Left Sidebar' },
        { type: 'link', href: '#', text: 'Blog Right Sidebar' },
        { type: 'link', href: '#', text: 'Blog Details' }
      ]
    },
    {
      type: 'link',
      href: '#',
      text: 'CONTACT',
    }
  ],
  shop: {
    type: 'link',
    icon_class: 'fa fa-shopping-bag'
  },
  search: {
    type: 'link',
    icon_class: 'fa fa-search'
  }
}

export { headerData }