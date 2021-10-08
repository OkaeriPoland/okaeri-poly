import groovy.transform.Field

import java.time.Instant

@Field
long scriptGlobalCounter = 0


script.runEveryAsync(60 * 20) {
    server.broadcastMessage("It is ${Instant.now()}! ${scriptGlobalCounter++} from ${Thread.currentThread().getName()}")
}
