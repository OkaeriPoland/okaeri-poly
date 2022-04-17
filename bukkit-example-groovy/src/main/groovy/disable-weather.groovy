@BaseScript BukkitGroovyScript script

import eu.okaeri.poly.api.bukkit.BukkitGroovyScript
import groovy.transform.BaseScript
import org.bukkit.event.weather.ThunderChangeEvent
import org.bukkit.event.weather.WeatherChangeEvent

listen(WeatherChangeEvent) { event ->
    if (event.toWeatherState()) event.cancelled = true
}

listen(ThunderChangeEvent) { event ->
    if (event.toThunderState()) event.cancelled = true
}
