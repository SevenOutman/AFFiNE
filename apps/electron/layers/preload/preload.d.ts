interface Window {
    /**
     * After analyzing the `exposeInMainWorld` calls,
     * `packages/preload/exposedInMainWorld.d.ts` file will be generated.
     * It contains all interfaces.
     * `packages/preload/exposedInMainWorld.d.ts` file is required for TS is `renderer`
     *
     * @see https://github.com/cawa-93/dts-for-context-bridge
     */
    readonly apis: { workspace: { list: () => Promise<string[]>; delete: (id: string) => Promise<void>; }; openLoadDBFileDialog: () => Promise<any>; openSaveDBFileDialog: () => Promise<any>; onThemeChange: (theme: string) => Promise<any>; onSidebarVisibilityChange: (visible: boolean) => Promise<any>; onWorkspaceChange: (workspaceId: string) => Promise<any>; openDBFolder: () => Promise<any>; getGoogleOauthCode: () => Promise<{ requestInit: RequestInit; url: string; }>; updateEnv: (env: string, value: string) => void; };
    readonly appInfo: { electron: boolean; isMacOS: boolean; };
}
