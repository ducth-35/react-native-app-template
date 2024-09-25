# React Native App Template with React Navigation, React Query, and Zustand

## Introduction

This markdown provides a basic structure for this template.

### Technologies Used:

- React Native
- React Navigation
- React Query
- Zustand
- Axios

## Setup & Run

To set up the project, follow these steps:

1. **Clone this repo**
   `git clone https://github.com/duoqbao/react-native-app-template.git`
2. **Run source**

```
   cd react-native-app-template

   yarn install

   cd ios && pod install

   cd .. && yarn start
```

## Structure :vertical_traffic_light:

```
react-native-app-template/
│
├── src/
│ ├── apis/
│ │ └── index.ts (include config instance & endpoints)
│ │ └── todo.api.ts
| |
│ ├── assets/
│ │ └── fonts
│ │ └── icons
│ │ └── images
│ │
│ ├── components/
│ │ └── index.ts
│ │ └── .... (some component here)
│ │
│ ├── configs/
│ │ └── ... (add configure here)
│ │
│ ├── hooks/
│ │ └── todos
│ │   └── ....(hooks implement by react-query)
│ │ └──useCustomHooks.ts (implement custom hooks)
│ │
│ ├── navigators/
│ │ └── index.tsx (root navigators, where u can authorize, custom routes,...)
│ | └── private.tsx
│ | └── public.tsx
│ │
│ └── screens/
│ | └── Home/
│ | └── Profile/
│ | └── ...etc/
| |
│ └── store/
│ | └── useStore.ts
│ | └── useAnotherStore.ts
| |
│ └── types/
│ | └── global.ts
│ | └── ....etc.ts
│ |
│ └── utils/
│ | └── intex.ts
│ | └── ....etc.ts
| |
├── App.js
└── ...
```

:headphones: Happy coding !
