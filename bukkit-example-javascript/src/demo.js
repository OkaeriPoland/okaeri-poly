const Material = Java.type("org.bukkit.Material")
const Attribute = Java.type("org.bukkit.attribute.Attribute")
const Player = Java.type("org.bukkit.entity.Player")
const EventPriority = Java.type("org.bukkit.event.EventPriority")
const BlockBreakEvent = Java.type("org.bukkit.event.block.BlockBreakEvent")
const AsyncPlayerChatEvent = Java.type("org.bukkit.event.player.AsyncPlayerChatEvent")
const PlayerJoinEvent = Java.type("org.bukkit.event.player.PlayerJoinEvent")
const PlayerQuitEvent = Java.type("org.bukkit.event.player.PlayerQuitEvent")
const ItemStack = Java.type("org.bukkit.inventory.ItemStack")

const HttpClient = Java.type("java.net.http.HttpClient")
const HttpRequest = Java.type("java.net.http.HttpRequest")
const HttpResponse = Java.type("java.net.http.HttpResponse")
const Instant = Java.type("java.time.Instant")

const Thread = Java.type("java.lang.Thread")
const URI = Java.type("java.net.URI")

let scriptGlobalCounter = 0
const httpClient = HttpClient.newHttpClient()


script.listen(PlayerJoinEvent, (event) => {
    event.setJoinMessage(null)
})

script.listen(PlayerQuitEvent, (event) => {
    event.setQuitMessage(null)
})

script.listen(AsyncPlayerChatEvent, EventPriority.LOWEST, (event) => {
    event.setFormat(`<3 ${event.getFormat()}`)
})

script.listen(BlockBreakEvent, EventPriority.MONITOR, true, (event) => {

    if (event.getBlock().getType() !== Material.STONE) {
        return
    }

    event.getPlayer().getInventory().addItem(new ItemStack(Material.DIAMOND, 1))
    event.getPlayer().sendMessage("You're so lucky you received 1 diamond!")
})

script.command("healme", (sender, args) => {

    if (!(sender instanceof Player)) {
        sender.sendMessage("Sorry no mercy for console.");
        return
    }

    sender.setHealth(sender.getAttribute(Attribute.GENERIC_MAX_HEALTH).getValue())
    sender.sendMessage("You have been healed!")
})

script.command("checkserverip", (sender, args) => {

    if (!sender.hasPermission("demo.checkserverip")) {
        sender.sendMessage("No permission demo.checkserverip!")
        return
    }

    script.runNowAsync(() => {

        // FIXME: .graalvm.polyglot.PolyglotException: java.lang.IllegalStateException: java.lang.IllegalAccessException: access to public member failed:
        //        jdk.internal.net.http.HttpRequestBuilderImpl.uri[Ljava.lang.Object;@1011ee36/invokeVirtual, from public Lookup
        //
        // eu.okaeri.poly.lib.graalvm.polyglot.PolyglotException: class eu.okaeri.poly.lib.oracle.truffle.host.HostMethodDesc$SingleMethod$MethodReflectImpl
        // cannot access class jdk.internal.net.http.HttpRequestBuilderImpl (in module java.net.http) because module java.net.http does not export
        // jdk.internal.net.http to unnamed module @439baada
        //
        // --add-exports java.net.http/jdk.internal.net.http=ALL-UNNAMED
        //
        const request = HttpRequest.newBuilder()
            .uri(URI.create("https://checkip.amazonaws.com/"))
            .build()

        const response = httpClient.send(request, HttpResponse.BodyHandlers.ofString())
        sender.sendMessage(`Server IP: ${response.body()}`)
    })
})

script.runEveryAsync(60 * 20, () => {
    server.broadcastMessage(`It is ${Instant.now()}! ${scriptGlobalCounter++} from ${Thread.currentThread().getName()}`)
})
