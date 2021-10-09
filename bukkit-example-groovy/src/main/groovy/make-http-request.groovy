import groovy.transform.Field

import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

@Field
HttpClient httpClient = HttpClient.newHttpClient()


script.command("checkserverip") { sender, args ->

    if (!sender.hasPermission("demo.checkserverip")) {
        sender.sendMessage("No permission demo.checkserverip!")
        return
    }

    script.runNowAsync {

        def request = HttpRequest.newBuilder()
                .uri(URI.create("https://checkip.amazonaws.com/"))
                .build()

        def response = httpClient.send(request, HttpResponse.BodyHandlers.ofString())
        sender.sendMessage("Server IP: ${response.body()}")
    }
}
