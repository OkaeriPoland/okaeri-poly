import org.bukkit.Material
import org.bukkit.event.EventPriority
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.inventory.ItemStack

script.listen(BlockBreakEvent, EventPriority.MONITOR, true) { event ->

    if (event.block.type != Material.STONE) {
        return
    }

    event.player.inventory.addItem(new ItemStack(Material.DIAMOND, 1))
    event.player.sendMessage("You're so lucky you received 1 diamond!")
}
