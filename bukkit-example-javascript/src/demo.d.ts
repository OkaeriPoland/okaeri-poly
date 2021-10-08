declare var script: {
    listen<T>(eventClass: T, consumer: Function);
    listen<T>(eventClass: T, priority: EventPriority, consumer: Function);
    listen<T>(eventClass: T, priority: EventPriority, ignoreCancelled: boolean, consumer: Function);
    listenChannel(name: string, pluginMessageListener: any);
    command(label: string, consumer: Function);
    runEvery(ticks: number, runnable: Function);
    runEveryAsync(ticks: number, runnable: Function);
    runLater(ticks: number, runnable: Function);
    runLaterAsync(ticks: number, runnable: Function);
    runNow(runnable: Function);
    runNowAsync(runnable: Function);
    onLoad(runnable: Function);
    onUnload(runnable: Function);
    registerOutgoingPluginChannel(name: string);
}

declare enum EventPriority {
    LOWEST,
    LOW,
    NORMAL,
    HIGH,
    HIGHEST,
    MONITOR,
}

declare interface Player {
    getName(): string
}

declare interface PlayerJoinEvent {
    getPlayer(): Player
}
