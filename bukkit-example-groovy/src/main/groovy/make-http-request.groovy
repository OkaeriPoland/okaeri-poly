@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import groovy.transform.CompileStatic
import groovy.transform.Field

import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

@Field
HttpClient httpClient = HttpClient.newHttpClient()

@CompileStatic
HttpResponse<String> readUrl(String url) {
    def request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .build()
    return httpClient.send(request, HttpResponse.BodyHandlers.ofString())
}

command("checkserverip") { sender, args ->

    if (!sender.hasPermission("demo.checkserverip")) {
        sender.sendMessage("No permission demo.checkserverip!")
        return
    }

    runNowAsync {
        def response = readUrl("https://checkip.amazonaws.com/")
        sender.sendMessage("Server IP: ${response.body()}")
    }
}
