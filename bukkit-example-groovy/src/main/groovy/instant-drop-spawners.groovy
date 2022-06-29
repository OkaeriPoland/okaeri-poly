@BaseScript BukkitGroovyScript script


import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import groovy.transform.Field
import org.bukkit.entity.EntityType
import org.bukkit.event.entity.CreatureSpawnEvent

@Field
Set<EntityType> entityTypes = [
        EntityType.IRON_GOLEM,
        EntityType.BLAZE
]

listen(CreatureSpawnEvent) { event ->

    if (event.spawnReason != CreatureSpawnEvent.SpawnReason.SPAWNER) {
        return
    }

    if (!this.entityTypes.contains(event.entityType)) {
        return
    }

    event.cancelled = true
}
