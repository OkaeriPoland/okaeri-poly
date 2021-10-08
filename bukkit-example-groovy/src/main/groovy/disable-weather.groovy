import org.bukkit.event.weather.ThunderChangeEvent
import org.bukkit.event.weather.WeatherChangeEvent

script.listen(WeatherChangeEvent) { event ->
    if (event.toWeatherState()) event.cancelled = true
}

script.listen(ThunderChangeEvent) { event ->
    if (event.toThunderState()) event.cancelled = true
}
