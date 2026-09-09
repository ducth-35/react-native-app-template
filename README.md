# React Native App Template with React Navigation, React Query, and Zustand

## Introduction

This markdown provides a basic structure for this template.

### Technologies Used:

- React Native
- React Navigation
- React Query (TanStack Query)
- Zustand (persisted with MMKV)
- Axios
- react-native-config (multi-env: `.env` / `.env.prod`)

## Setup & Run

To set up the project, follow these steps:

1. **Clone this repo**
   `https://github.com/ducth-35/react-native-app-template.git`
2. **Run source**

```
   cd react-native-app-template

   yarn install

   cd ios && pod install

   cd .. && yarn start:dev
```

### Environments

The app reads its config (`API_URL`, `APP_ENV`) from `react-native-config`, sourced from `.env` (dev) or `.env.prod` (prod). Because these values are baked into the native build, changing a `.env` file requires a native rebuild, not just a JS reload.

| Purpose        | Command              |
| -------------- | -------------------- |
| Start Metro    | `yarn start:dev` / `yarn start:prod` |
| Run Android    | `yarn android:dev` / `yarn android:prod` |
| Run iOS        | `yarn ios:dev` / `yarn ios:prod` |
| Android release| `yarn androidRelease:dev` / `yarn androidRelease:prod` |

## Structure

```
react-native-app-template/
│
├── src/
│ ├── features/
│ │ └── todos/
│ │   └── api.ts (axios calls for this resource)
│ │   └── hooks.ts (useQuery/useMutation hooks, built on ./api)
│ │   └── types.ts
│ │ └── user/
│ │   └── api.ts
│ │   └── hooks.ts
│ │   └── types.ts
│ │ └── <your-resource>/ (add one folder per domain/resource, same 3 files)
│ |
│ ├── lib/
│ │ └── api/
│ │   └── client.ts (shared axios instance, baseURL from Config.API_URL, interceptors)
│ │   └── queryClient.ts (QueryClient: default retry/staleTime/gcTime, global onError)
│ │   └── types.ts (ApiError)
│ │
│ ├── assets/
│ │ └── fonts
│ │ └── icons
│ │ └── images
│ │
│ ├── components/
│ │ └── EnvBadge.tsx
│ │ └── .... (some component here)
│ │
│ ├── configs/
│ │ └── ... (add configure here)
│ │
│ ├── hooks/
│ │ └── index.ts (app-wide custom hooks, not tied to a feature/resource)
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
│ | └── storage.ts (MMKV-backed storage adapter for zustand persist)
│ | └── useSampleStore.ts
│ | └── useAnotherStore.ts
| |
│ └── types/
│ | └── env.d.ts
│ | └── ....etc.ts
│ |
│ └── utils/
│ | └── index.ts
│ | └── ....etc.ts
| |
├── App.tsx
├── .env / .env.prod
└── ...
```

Each domain/resource gets its own folder under `src/features/<resource>/` with `api.ts` (axios calls), `hooks.ts` (react-query hooks — one per query/mutation), and `types.ts`. Screens only ever import from `hooks.ts`, never call `api.ts` or axios directly.
