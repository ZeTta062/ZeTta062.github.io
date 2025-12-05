import type { dockApps } from "@/constants/dock-apps";


// 1. Finder/Locations 관련 타입

/* 파일 타입 */
export type FileType = "pdf" | "url" | "img" | "fig" | "txt";

/* 공통속성 */
interface BaseItem {
  id: number;
  name: string;
  icon: string;
  kind: "folder" | "file";
  position?: string;
}

/* 파일 타입 */
export interface FileItem extends BaseItem {
    kind: "file";
    fileType: FileType;
    href?: string;
    imageUrl?: string;
    description?: string[];
    subtitle?: string;
    image?: string;
  }

/* 폴더 타입 */
export interface FolderItem extends BaseItem {
    kind: "folder";
    type?: string;
    windowPosition?: string;
    children: (FolderItem | FileItem)[];
}

/* 파인더 아이템 타입 */
export type FinderItem = FolderItem | FileItem;


/* ------------------------------------------------------ */
// 2. 창 ID 관련 타입

/* Dock 앱 ID  */
export type DockApp = (typeof dockApps)[number];
export type DockAppId = DockApp["id"];

export type OpenableDockApp<T extends DockApp> 
    = T extends { canOpen: true } ? T : never;

export type OpenableDockAppId = OpenableDockApp<DockApp>['id'];

// 파일 타입별 동적 창 ID
export type DynamicFileWindowId = "txtfile" | "imgfile"

// 기타 고유 창 ID (Dock 앱이 아니지만 창으로 존재하는 경우)
export type SpecificWindowId = "resume"

// 모든 열 수 있는 창 ID를 통합한 유니온 타입
export type WindowKey = OpenableDockAppId | DynamicFileWindowId | SpecificWindowId;


/* ------------------------------------------------------ */
// 3. Store 상태 관련 타입

/* 개별 윈도우 상태 타입 */
export interface WindowStateItem {
    isOpen: boolean;
    zIndex: number;
    data: unknown | null;
}

/* windows 전체 타입 */
export type WindowsState = Record<WindowKey, WindowStateItem>;

/* 스토어 전체 타입 */
export interface WindowStore {
    windows: WindowsState;
    nextZIndex: number;
  
    openWindow: (windowKey: WindowKey, data?: unknown) => void;
    closeWindow: (windowKey: WindowKey) => void;
    focusWindow: (windowKey: WindowKey) => void;
}