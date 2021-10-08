// @ts-nocheck
// noinspection JSAnnotator,JSDuplicatedDeclaration,JSUnusedGlobalSymbols

// eu.okaeri.poly.api.bukkit.BukkitScriptHelper
declare var script: BukkitScriptHelper

// org.bukkit.plugin.java.JavaPlugin
declare var plugin: JavaPlugin

// java.util.logging.Logger
declare var logger: Logger

// org.bukkit.Server
declare var server: Server

// org.bukkit.event.player.PlayerInteractEntityEvent
declare interface PlayerInteractEntityEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getHand(): EquipmentSlot;
    getRightClicked(): Entity;
}

// org.bukkit.entity.Raider
declare interface Raider extends Monster {
    setPatrolLeader(b: boolean): void;
    isCanJoinRaid(): boolean;
    getPatrolTarget(): Block;
    isPatrolLeader(): boolean;
    setCanJoinRaid(b: boolean): void;
    setPatrolTarget(block: Block): void;
}

// org.bukkit.entity.Shulker
declare interface Shulker extends Golem, Colorable {
    getPeek(): number;
    setPeek(f: number): void;
    getAttachedFace(): BlockFace;
    setAttachedFace(blockFace: BlockFace): void;
}

// org.bukkit.block.ShulkerBox
declare interface ShulkerBox extends Container, Lootable, Lidded {
    getColor(): DyeColor;
}

// org.bukkit.entity.Rabbit
declare interface Rabbit extends Animals {
    setRabbitType(type: Type): void;
    getRabbitType(): Type;
}

// org.bukkit.command.RemoteConsoleCommandSender
declare interface RemoteConsoleCommandSender extends CommandSender {
}

// org.bukkit.inventory.LoomInventory
declare interface LoomInventory extends Inventory {
}

// org.bukkit.map.MapRenderer
declare interface MapRenderer {
    initialize(mapView: MapView): void;
    isContextual(): boolean;
    render(mapView: MapView, mapCanvas: MapCanvas, player: Player): void;
}

// org.bukkit.entity.Ageable
declare interface Ageable extends Creature {
    setAdult(): void;
    setBreed(b: boolean): void;
    canBreed(): boolean;
    setAgeLock(b: boolean): void;
    isAdult(): boolean;
    setBaby(): void;
    getAgeLock(): boolean;
    setAge(i: number): void;
    getAge(): number;
}

// org.bukkit.block.CommandBlock
declare interface CommandBlock extends TileState {
    getName(): string;
    setName(s: string): void;
    setCommand(s: string): void;
    getCommand(): string;
}

// org.bukkit.event.block.BlockIgniteEvent
declare interface BlockIgniteEvent extends BlockEvent, Cancellable {
    getCause(): IgniteCause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getIgnitingBlock(): Block;
    getIgnitingEntity(): Entity;
    getPlayer(): Player;
}

// org.bukkit.entity.Fish
declare interface Fish extends WaterMob {
}

// org.bukkit.util.permissions.DefaultPermissions
declare interface DefaultPermissions {
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, permission: Permission): Permission;
    registerPermission(s: string, s: string, permission: Permission): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, map: Map): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, map: Map, permission: Permission): Permission;
    registerPermission(permission: Permission): Permission;
    registerPermission(permission: Permission, b: boolean): Permission;
    registerPermission(permission: Permission, permission: Permission): Permission;
    registerPermission(s: string, s: string): Permission;
    registerCorePermissions(): void;
}

// eu.okaeri.poly.api.script.ScriptManager
declare interface ScriptManager {
    register(extension: string, scriptService: ScriptService): ScriptManager;
    load(name: string, source: string): ScriptHelper;
    load(path: Path): ScriptHelper;
    unload(name: string): boolean;
    eval(extension: string, source: string): any;
    getServices(): Map;
    listLoaded(): Set;
}

// org.bukkit.inventory.GrindstoneInventory
declare interface GrindstoneInventory extends Inventory {
}

// org.bukkit.entity.Projectile
declare interface Projectile extends Entity {
    setShooter(projectileSource: ProjectileSource): void;
    setBounce(b: boolean): void;
    doesBounce(): boolean;
    getShooter(): ProjectileSource;
}

// org.bukkit.event.block.BlockPistonRetractEvent
declare interface BlockPistonRetractEvent extends BlockPistonEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getBlocks(): List;
    getRetractLocation(): Location;
}

// org.bukkit.inventory.meta.ItemMeta
declare interface ItemMeta extends Cloneable, ConfigurationSerializable, PersistentDataHolder {
    clone(): any;
    clone(): ItemMeta;
    getDisplayName(): string;
    getLocalizedName(): string;
    addAttributeModifier(attribute: Attribute, attributeModifier: AttributeModifier): boolean;
    getCustomTagContainer(): CustomItemTagContainer;
    hasConflictingEnchant(enchantment: Enchantment): boolean;
    setAttributeModifiers(multimap: Multimap): void;
    getAttributeModifiers(equipmentSlot: EquipmentSlot): Multimap;
    getAttributeModifiers(attribute: Attribute): Collection;
    getAttributeModifiers(): Multimap;
    hasAttributeModifiers(): boolean;
    removeAttributeModifier(attribute: Attribute): boolean;
    removeAttributeModifier(attribute: Attribute, attributeModifier: AttributeModifier): boolean;
    removeAttributeModifier(equipmentSlot: EquipmentSlot): boolean;
    setDisplayName(s: string): void;
    addEnchant(enchantment: Enchantment, i: number, b: boolean): boolean;
    hasEnchant(enchantment: Enchantment): boolean;
    getEnchantLevel(enchantment: Enchantment): number;
    getEnchants(): Map;
    removeEnchant(enchantment: Enchantment): boolean;
    setVersion(i: number): void;
    addItemFlags(itemFlag: ItemFlag): void;
    getLore(): List;
    hasItemFlag(itemFlag: ItemFlag): boolean;
    removeItemFlags(itemFlag: ItemFlag): void;
    setLocalizedName(s: string): void;
    getCustomModelData(): number;
    hasEnchants(): boolean;
    getItemFlags(): Set;
    hasLore(): boolean;
    hasDisplayName(): boolean;
    hasCustomModelData(): boolean;
    setCustomModelData(integer: Integer): void;
    hasLocalizedName(): boolean;
    setUnbreakable(b: boolean): void;
    isUnbreakable(): boolean;
    setLore(list: List): void;
}

// org.bukkit.plugin.java.PluginClassLoader
declare interface PluginClassLoader extends URLClassLoader {
    getResource(s: string): URL;
    getResources(s: string): Enumeration;
}

// org.bukkit.block.data.AnaloguePowerable
declare interface AnaloguePowerable extends BlockData {
    setPower(i: number): void;
    getPower(): number;
    getMaximumPower(): number;
}

// org.bukkit.permissions.PermissionRemovedExecutor
declare interface PermissionRemovedExecutor {
    attachmentRemoved(permissionAttachment: PermissionAttachment): void;
}

// org.bukkit.command.CommandExecutor
declare interface CommandExecutor {
    onCommand(commandSender: CommandSender, command: Command, s: string, s: string): boolean;
}

// org.bukkit.structure.Structure
declare interface Structure {
    fill(location: Location, blockVector: BlockVector, b: boolean): void;
    fill(location: Location, location: Location, b: boolean): void;
    getSize(): BlockVector;
    getEntities(): List;
    getEntityCount(): number;
    getPaletteCount(): number;
    place(regionAccessor: RegionAccessor, blockVector: BlockVector, b: boolean, structureRotation: StructureRotation, mirror: Mirror, i: number, f: number, random: Random): void;
    place(location: Location, b: boolean, structureRotation: StructureRotation, mirror: Mirror, i: number, f: number, random: Random): void;
    getPalettes(): List;
}

// org.bukkit.block.data.FaceAttachable
declare interface FaceAttachable extends BlockData {
    getAttachedFace(): AttachedFace;
    setAttachedFace(attachedFace: AttachedFace): void;
}

// org.bukkit.scheduler.BukkitRunnable
declare interface BukkitRunnable extends Runnable {
    cancel(): void;
    isCancelled(): boolean;
    runTaskTimerAsynchronously(plugin: Plugin, l: number, l: number): BukkitTask;
    runTaskAsynchronously(plugin: Plugin): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, l: number, l: number): BukkitTask;
    runTask(plugin: Plugin): BukkitTask;
    runTaskLater(plugin: Plugin, l: number): BukkitTask;
    getTaskId(): number;
}

// org.bukkit.configuration.serialization.DelegateDeserialization
declare interface DelegateDeserialization extends Annotation {
    value(): Class;
}

// org.bukkit.entity.AnimalTamer
declare interface AnimalTamer {
    getName(): string;
    getUniqueId(): UUID;
}

// org.bukkit.event.block.BlockSpreadEvent
declare interface BlockSpreadEvent extends BlockFormEvent {
    getSource(): Block;
}

// org.bukkit.event.weather.LightningStrikeEvent
declare interface LightningStrikeEvent extends WeatherEvent, Cancellable {
    getCause(): Cause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getLightning(): LightningStrike;
}

// org.bukkit.block.data.type.Chain
declare interface Chain extends Orientable, Waterlogged {
}

// org.bukkit.material.SimpleAttachableMaterialData
declare interface SimpleAttachableMaterialData extends MaterialData, Attachable {
    getFacing(): BlockFace;
}

// org.bukkit.SandstoneType
declare enum SandstoneType {
    CRACKED,
    GLYPHED,
    SMOOTH,
}

// org.bukkit.block.data.type.BrewingStand
declare interface BrewingStand extends BlockData {
    getBottles(): Set;
    setBottle(i: number, b: boolean): void;
    getMaximumBottles(): number;
    hasBottle(i: number): boolean;
}

// org.bukkit.event.player.PlayerSwapHandItemsEvent
declare interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getOffHandItem(): ItemStack;
    getMainHandItem(): ItemStack;
    setOffHandItem(itemStack: ItemStack): void;
    setMainHandItem(itemStack: ItemStack): void;
}

// org.bukkit.block.data.type.TNT
declare interface TNT extends BlockData {
    setUnstable(b: boolean): void;
    isUnstable(): boolean;
}

// org.bukkit.event.entity.PotionSplashEvent
declare interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getAffectedEntities(): Collection;
    setIntensity(livingEntity: LivingEntity, d: number): void;
    getIntensity(livingEntity: LivingEntity): number;
    getPotion(): ThrownPotion;
}

// org.bukkit.map.MapCursorCollection
declare interface MapCursorCollection {
    size(): number;
    getCursor(i: number): MapCursor;
    removeCursor(mapCursor: MapCursor): boolean;
    addCursor(i: number, i: number, b: number, b: number, b: boolean, s: string): MapCursor;
    addCursor(i: number, i: number, b: number, b: number, b: boolean): MapCursor;
    addCursor(i: number, i: number, b: number, b: number): MapCursor;
    addCursor(i: number, i: number, b: number): MapCursor;
    addCursor(mapCursor: MapCursor): MapCursor;
}

// org.bukkit.material.Wool
declare interface Wool extends MaterialData, Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

// org.bukkit.generator.BiomeProvider
declare interface BiomeProvider {
    getBiome(worldInfo: WorldInfo, i: number, i: number, i: number): Biome;
    getBiomes(worldInfo: WorldInfo): List;
}

// org.bukkit.entity.CaveSpider
declare interface CaveSpider extends Spider {
}

// org.bukkit.entity.Ghast
declare interface Ghast extends Flying {
}

// org.bukkit.material.Openable
declare interface Openable {
    isOpen(): boolean;
    setOpen(b: boolean): void;
}

// org.bukkit.event.inventory.InventoryOpenEvent
declare interface InventoryOpenEvent extends InventoryEvent, Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getPlayer(): HumanEntity;
}

// org.bukkit.entity.LeashHitch
declare interface LeashHitch extends Hanging {
}

// org.bukkit.plugin.PluginManager
declare interface PluginManager {
    getPermissions(): Set;
    getPermission(s: string): Permission;
    getPlugin(s: string): Plugin;
    getPlugins(): Plugin[];
    useTimings(): boolean;
    getPermissionSubscriptions(s: string): Set;
    addPermission(permission: Permission): void;
    loadPlugin(file: File): Plugin;
    enablePlugin(plugin: Plugin): void;
    disablePlugin(plugin: Plugin): void;
    subscribeToPermission(s: string, permissible: Permissible): void;
    subscribeToDefaultPerms(b: boolean, permissible: Permissible): void;
    getDefaultPermissions(b: boolean): Set;
    unsubscribeFromPermission(s: string, permissible: Permissible): void;
    unsubscribeFromDefaultPerms(b: boolean, permissible: Permissible): void;
    recalculatePermissionDefaults(permission: Permission): void;
    getDefaultPermSubscriptions(b: boolean): Set;
    callEvent(event: Event): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin, b: boolean): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin): void;
    loadPlugins(file: File): Plugin[];
    registerInterface(clazz: Class): void;
    registerEvents(listener: Listener, plugin: Plugin): void;
    disablePlugins(): void;
    removePermission(s: string): void;
    removePermission(permission: Permission): void;
    clearPlugins(): void;
    isPluginEnabled(s: string): boolean;
    isPluginEnabled(plugin: Plugin): boolean;
}

// org.bukkit.entity.Panda
declare interface Panda extends Animals {
    setMainGene(gene: Gene): void;
    getHiddenGene(): Gene;
    getMainGene(): Gene;
    setHiddenGene(gene: Gene): void;
}

// org.bukkit.event.Event
declare interface Event {
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}

// org.bukkit.conversations.ConversationContext
declare interface ConversationContext {
    getPlugin(): Plugin;
    getForWhom(): Conversable;
    setSessionData(object: any, object: any): void;
    getSessionData(object: any): any;
    getAllSessionData(): Map;
}

// org.bukkit.help.IndexHelpTopic
declare interface IndexHelpTopic extends HelpTopic {
}

// org.bukkit.material.SpawnEgg
declare interface SpawnEgg extends MaterialData {
    getSpawnedType(): EntityType;
    setSpawnedType(entityType: EntityType): void;
}

// org.bukkit.entity.Evoker
declare interface Evoker extends Spellcaster {
    getCurrentSpell(): Spell;
    setCurrentSpell(spell: Spell): void;
}

// org.bukkit.entity.Arrow
declare interface Arrow extends AbstractArrow {
    getColor(): Color;
    setColor(color: Color): void;
    setBasePotionData(potionData: PotionData): void;
    getBasePotionData(): PotionData;
    hasCustomEffects(): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    clearCustomEffects(): void;
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    getCustomEffects(): List;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
}

// org.bukkit.block.data.type.Bed
declare interface Bed extends Directional {
    setPart(part: Part): void;
    isOccupied(): boolean;
    getPart(): Part;
}

// org.bukkit.inventory.RecipeChoice
declare interface RecipeChoice extends Predicate, Cloneable {
    clone(): any;
    clone(): RecipeChoice;
    test(object: any): boolean;
    test(itemStack: ItemStack): boolean;
    getItemStack(): ItemStack;
}

// org.bukkit.potion.PotionBrewer
declare interface PotionBrewer {
    getEffects(potionType: PotionType, b: boolean, b: boolean): Collection;
    createEffect(potionEffectType: PotionEffectType, i: number, i: number): PotionEffect;
    getEffectsFromDamage(i: number): Collection;
}

// org.bukkit.entity.Cod
declare interface Cod extends Fish {
}

// org.bukkit.event.player.PlayerHarvestBlockEvent
declare interface PlayerHarvestBlockEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getItemsHarvested(): List;
    getHarvestedBlock(): Block;
}

// org.bukkit.command.TabCompleter
declare interface TabCompleter {
    onTabComplete(commandSender: CommandSender, command: Command, s: string, s: string): List;
}

// org.bukkit.entity.LivingEntity
declare interface LivingEntity extends Attributable, Damageable, ProjectileSource {
    setMemory(memoryKey: MemoryKey, object: any): void;
    rayTraceBlocks(d: number): RayTraceResult;
    rayTraceBlocks(d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    getLineOfSight(set: Set, i: number): List;
    getArrowCooldown(): number;
    setMaximumAir(i: number): void;
    getKiller(): Player;
    setNoDamageTicks(i: number): void;
    getTargetBlock(set: Set, i: number): Block;
    removePotionEffect(potionEffectType: PotionEffectType): void;
    getEyeHeight(): number;
    getEyeHeight(b: boolean): number;
    getEyeLocation(): Location;
    addPotionEffect(potionEffect: PotionEffect): boolean;
    addPotionEffect(potionEffect: PotionEffect, b: boolean): boolean;
    getArrowsInBody(): number;
    setArrowCooldown(i: number): void;
    getPotionEffect(potionEffectType: PotionEffectType): PotionEffect;
    getMaximumAir(): number;
    getLastDamage(): number;
    setArrowsInBody(i: number): void;
    hasPotionEffect(potionEffectType: PotionEffectType): boolean;
    hasLineOfSight(entity: Entity): boolean;
    getEquipment(): EntityEquipment;
    addPotionEffects(collection: Collection): boolean;
    setRemainingAir(i: number): void;
    setLastDamage(d: number): void;
    getRemainingAir(): number;
    getNoDamageTicks(): number;
    isInvisible(): boolean;
    isGliding(): boolean;
    swingOffHand(): void;
    isSleeping(): boolean;
    swingMainHand(): void;
    setSwimming(b: boolean): void;
    setGliding(b: boolean): void;
    getLeashHolder(): Entity;
    setAI(b: boolean): void;
    getMemory(memoryKey: MemoryKey): any;
    hasAI(): boolean;
    isRiptiding(): boolean;
    getCategory(): EntityCategory;
    setCanPickupItems(b: boolean): void;
    setCollidable(b: boolean): void;
    isLeashed(): boolean;
    isCollidable(): boolean;
    isSwimming(): boolean;
    setInvisible(b: boolean): void;
    setLeashHolder(entity: Entity): boolean;
    isClimbing(): boolean;
    getCanPickupItems(): boolean;
    attack(entity: Entity): void;
    getCollidableExemptions(): Set;
    getRemoveWhenFarAway(): boolean;
    getTargetBlockExact(i: number, fluidCollisionMode: FluidCollisionMode): Block;
    getTargetBlockExact(i: number): Block;
    getActivePotionEffects(): Collection;
    setMaximumNoDamageTicks(i: number): void;
    getMaximumNoDamageTicks(): number;
    getLastTwoTargetBlocks(set: Set, i: number): List;
    setRemoveWhenFarAway(b: boolean): void;
}

// org.bukkit.event.hanging.HangingBreakEvent
declare interface HangingBreakEvent extends HangingEvent, Cancellable {
    getCause(): RemoveCause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.entity.Skeleton
declare interface Skeleton extends AbstractSkeleton {
    getConversionTime(): number;
    setConversionTime(i: number): void;
    isConverting(): boolean;
}

// org.bukkit.util.BlockVector
declare interface BlockVector extends Vector {
}

// org.bukkit.entity.Dolphin
declare interface Dolphin extends WaterMob {
}

// org.bukkit.material.PistonExtensionMaterial
declare interface PistonExtensionMaterial extends MaterialData, Attachable {
    setFacingDirection(blockFace: BlockFace): void;
    isSticky(): boolean;
    setSticky(b: boolean): void;
    getFacing(): BlockFace;
    getAttachedFace(): BlockFace;
}

// org.bukkit.inventory.MainHand
declare enum MainHand {
    LEFT,
    RIGHT,
}

// org.bukkit.plugin.UnknownDependencyException
declare interface UnknownDependencyException extends RuntimeException {
}

// org.bukkit.entity.Pillager
declare interface Pillager extends Illager, InventoryHolder {
}

// org.bukkit.event.player.PlayerLoginEvent
declare interface PlayerLoginEvent extends PlayerEvent {
    getAddress(): InetAddress;
    getResult(): Result;
    setResult(result: Result): void;
    getHandlers(): HandlerList;
    allow(): void;
    getHandlerList(): HandlerList;
    getKickMessage(): string;
    setKickMessage(s: string): void;
    disallow(result: Result, s: string): void;
    getHostname(): string;
    getRealAddress(): InetAddress;
}

// org.bukkit.material.Wood
declare interface Wood extends MaterialData {
    setSpecies(treeSpecies: TreeSpecies): void;
    getSpecies(): TreeSpecies;
}

// org.bukkit.help.GenericCommandHelpTopic
declare interface GenericCommandHelpTopic extends HelpTopic {
}

// org.bukkit.block.data.type.Farmland
declare interface Farmland extends BlockData {
    getMoisture(): number;
    setMoisture(i: number): void;
    getMaximumMoisture(): number;
}

// org.bukkit.material.PressurePlate
declare interface PressurePlate extends MaterialData, PressureSensor {
    isPressed(): boolean;
}

// org.bukkit.inventory.HorseInventory
declare interface HorseInventory extends AbstractHorseInventory {
    getArmor(): ItemStack;
    setArmor(itemStack: ItemStack): void;
}

// org.bukkit.entity.Spider
declare interface Spider extends Monster {
}

// org.bukkit.entity.Goat
declare interface Goat extends Animals {
    isScreaming(): boolean;
    setScreaming(b: boolean): void;
}

// org.bukkit.configuration.ConfigurationOptions
declare interface ConfigurationOptions {
    configuration(): Configuration;
    pathSeparator(c: string): ConfigurationOptions;
    pathSeparator(): string;
    copyDefaults(): boolean;
    copyDefaults(b: boolean): ConfigurationOptions;
}

// org.bukkit.event.player.PlayerItemDamageEvent
declare interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getItem(): ItemStack;
    getDamage(): number;
    setDamage(i: number): void;
}

// org.bukkit.SoundGroup
declare interface SoundGroup {
    getPitch(): number;
    getPlaceSound(): Sound;
    getVolume(): number;
    getBreakSound(): Sound;
    getStepSound(): Sound;
    getHitSound(): Sound;
    getFallSound(): Sound;
}

// org.bukkit.entity.Trident
declare interface Trident extends AbstractArrow, ThrowableProjectile {
}

// org.bukkit.GameRule
declare interface GameRule {
    values(): GameRule[];
    getName(): string;
    getType(): Class;
    getByName(s: string): GameRule;
    ANNOUNCE_ADVANCEMENTS: GameRule;
    COMMAND_BLOCK_OUTPUT: GameRule;
    DISABLE_ELYTRA_MOVEMENT_CHECK: GameRule;
    DO_DAYLIGHT_CYCLE: GameRule;
    DO_ENTITY_DROPS: GameRule;
    DO_FIRE_TICK: GameRule;
    DO_LIMITED_CRAFTING: GameRule;
    DO_MOB_LOOT: GameRule;
    DO_MOB_SPAWNING: GameRule;
    DO_TILE_DROPS: GameRule;
    DO_WEATHER_CYCLE: GameRule;
    KEEP_INVENTORY: GameRule;
    LOG_ADMIN_COMMANDS: GameRule;
    MOB_GRIEFING: GameRule;
    NATURAL_REGENERATION: GameRule;
    REDUCED_DEBUG_INFO: GameRule;
    SEND_COMMAND_FEEDBACK: GameRule;
    SHOW_DEATH_MESSAGES: GameRule;
    SPECTATORS_GENERATE_CHUNKS: GameRule;
    DISABLE_RAIDS: GameRule;
    DO_INSOMNIA: GameRule;
    DO_IMMEDIATE_RESPAWN: GameRule;
    DROWNING_DAMAGE: GameRule;
    FALL_DAMAGE: GameRule;
    FIRE_DAMAGE: GameRule;
    FREEZE_DAMAGE: GameRule;
    DO_PATROL_SPAWNING: GameRule;
    DO_TRADER_SPAWNING: GameRule;
    FORGIVE_DEAD_PLAYERS: GameRule;
    UNIVERSAL_ANGER: GameRule;
    RANDOM_TICK_SPEED: GameRule;
    SPAWN_RADIUS: GameRule;
    MAX_ENTITY_CRAMMING: GameRule;
    MAX_COMMAND_CHAIN_LENGTH: GameRule;
    PLAYERS_SLEEPING_PERCENTAGE: GameRule;
}

// org.bukkit.entity.Vindicator
declare interface Vindicator extends Illager {
}

// org.bukkit.conversations.ConversationAbandonedListener
declare interface ConversationAbandonedListener extends EventListener {
    conversationAbandoned(conversationAbandonedEvent: ConversationAbandonedEvent): void;
}

// org.bukkit.WeatherType
declare enum WeatherType {
    DOWNFALL,
    CLEAR,
}

// org.bukkit.entity.Ravager
declare interface Ravager extends Raider {
}

// org.bukkit.map.MapView
declare interface MapView {
    getId(): number;
    isLocked(): boolean;
    isVirtual(): boolean;
    setScale(scale: Scale): void;
    setWorld(world: World): void;
    setUnlimitedTracking(b: boolean): void;
    setTrackingPosition(b: boolean): void;
    isUnlimitedTracking(): boolean;
    getWorld(): World;
    setLocked(b: boolean): void;
    getCenterX(): number;
    isTrackingPosition(): boolean;
    removeRenderer(mapRenderer: MapRenderer): boolean;
    setCenterZ(i: number): void;
    getScale(): Scale;
    getCenterZ(): number;
    setCenterX(i: number): void;
    addRenderer(mapRenderer: MapRenderer): void;
    getRenderers(): List;
}

// org.bukkit.block.data.Directional
declare interface Directional extends BlockData {
    getFacing(): BlockFace;
    getFaces(): Set;
    setFacing(blockFace: BlockFace): void;
}

// org.bukkit.material.LongGrass
declare interface LongGrass extends MaterialData {
    setSpecies(grassSpecies: GrassSpecies): void;
    getSpecies(): GrassSpecies;
}

// org.bukkit.material.Command
declare interface Command extends MaterialData, Redstone {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.block.BrewingStand
declare interface BrewingStand extends Container {
    getInventory(): BrewerInventory;
    getInventory(): Inventory;
    getFuelLevel(): number;
    setBrewingTime(i: number): void;
    getBrewingTime(): number;
    setFuelLevel(i: number): void;
    getSnapshotInventory(): BrewerInventory;
    getSnapshotInventory(): Inventory;
}

// org.bukkit.event.block.BlockGrowEvent
declare interface BlockGrowEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getNewState(): BlockState;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.meta.TropicalFishBucketMeta
declare interface TropicalFishBucketMeta extends ItemMeta {
    clone(): TropicalFishBucketMeta;
    clone(): ItemMeta;
    clone(): any;
    getPatternColor(): DyeColor;
    getBodyColor(): DyeColor;
    setBodyColor(dyeColor: DyeColor): void;
    setPatternColor(dyeColor: DyeColor): void;
    setPattern(pattern: Pattern): void;
    getPattern(): Pattern;
    hasVariant(): boolean;
}

// org.bukkit.util.noise.PerlinOctaveGenerator
declare interface PerlinOctaveGenerator extends OctaveGenerator {
}

// org.bukkit.event.entity.EntityDropItemEvent
declare interface EntityDropItemEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getItemDrop(): Item;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.util.BlockIterator
declare interface BlockIterator extends Iterator {
    remove(): void;
    next(): Block;
    next(): any;
    hasNext(): boolean;
}

// org.bukkit.command.defaults.BukkitCommand
declare interface BukkitCommand extends Command {
}

// org.bukkit.event.server.TabCompleteEvent
declare interface TabCompleteEvent extends Event, Cancellable {
    getBuffer(): string;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getSender(): CommandSender;
    getCompletions(): List;
    setCompletions(list: List): void;
}

// org.bukkit.entity.Mule
declare interface Mule extends ChestedHorse {
}

// org.bukkit.command.PluginCommandYamlParser
declare interface PluginCommandYamlParser {
    parse(plugin: Plugin): List;
}

// org.bukkit.block.Furnace
declare interface Furnace extends Container {
    getInventory(): FurnaceInventory;
    getInventory(): Inventory;
    setCookTime(s: number): void;
    getBurnTime(): number;
    getCookTime(): number;
    getCookTimeTotal(): number;
    setCookTimeTotal(i: number): void;
    setBurnTime(s: number): void;
    getSnapshotInventory(): FurnaceInventory;
    getSnapshotInventory(): Inventory;
}

// org.bukkit.entity.Guardian
declare interface Guardian extends Monster {
    isElder(): boolean;
    setLaser(b: boolean): boolean;
    setElder(b: boolean): void;
    hasLaser(): boolean;
}

// org.bukkit.event.block.BlockPistonExtendEvent
declare interface BlockPistonExtendEvent extends BlockPistonEvent {
    getLength(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getBlocks(): List;
}

// org.bukkit.Warning
declare interface Warning extends Annotation {
    value(): boolean;
    reason(): string;
}

// org.bukkit.entity.PufferFish
declare interface PufferFish extends Fish {
    getPuffState(): number;
    setPuffState(i: number): void;
}

// org.bukkit.entity.SplashPotion
declare interface SplashPotion extends ThrownPotion {
}

// org.bukkit.entity.Slime
declare interface Slime extends Mob {
    getSize(): number;
    setSize(i: number): void;
}

// org.bukkit.material.Step
declare interface Step extends TexturedMaterial {
    setInverted(b: boolean): void;
    isInverted(): boolean;
}

// org.bukkit.OfflinePlayer
declare interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
    getName(): string;
    getUniqueId(): UUID;
    getBedSpawnLocation(): Location;
    isBanned(): boolean;
    getPlayer(): Player;
    isWhitelisted(): boolean;
    setWhitelisted(b: boolean): void;
    getFirstPlayed(): number;
    isOnline(): boolean;
    decrementStatistic(statistic: Statistic, material: Material, i: number): void;
    decrementStatistic(statistic: Statistic, i: number): void;
    decrementStatistic(statistic: Statistic, material: Material): void;
    decrementStatistic(statistic: Statistic, entityType: EntityType): void;
    decrementStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    decrementStatistic(statistic: Statistic): void;
    getLastPlayed(): number;
    setStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    setStatistic(statistic: Statistic, material: Material, i: number): void;
    setStatistic(statistic: Statistic, i: number): void;
    hasPlayedBefore(): boolean;
    getStatistic(statistic: Statistic, entityType: EntityType): number;
    getStatistic(statistic: Statistic, material: Material): number;
    getStatistic(statistic: Statistic): number;
    incrementStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    incrementStatistic(statistic: Statistic, i: number): void;
    incrementStatistic(statistic: Statistic, material: Material): void;
    incrementStatistic(statistic: Statistic, material: Material, i: number): void;
    incrementStatistic(statistic: Statistic): void;
    incrementStatistic(statistic: Statistic, entityType: EntityType): void;
}

// org.bukkit.plugin.RegisteredServiceProvider
declare interface RegisteredServiceProvider extends Comparable {
    compareTo(registeredServiceProvider: RegisteredServiceProvider): number;
    compareTo(object: any): number;
    getPriority(): ServicePriority;
    getProvider(): any;
    getPlugin(): Plugin;
    getService(): Class;
}

// org.bukkit.block.EntityBlockStorage
declare interface EntityBlockStorage extends TileState {
    getEntityCount(): number;
    addEntity(entity: Entity): void;
    releaseEntities(): List;
    setMaxEntities(i: number): void;
    getMaxEntities(): number;
    isFull(): boolean;
}

// org.bukkit.event.player.PlayerShearEntityEvent
declare interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getHand(): EquipmentSlot;
    getEntity(): Entity;
    getItem(): ItemStack;
}

// org.bukkit.event.weather.WeatherEvent
declare interface WeatherEvent extends Event {
    getWorld(): World;
}

// org.bukkit.event.server.MapInitializeEvent
declare interface MapInitializeEvent extends ServerEvent {
    getMap(): MapView;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.SmallDripleaf
declare interface SmallDripleaf extends Dripleaf, Bisected {
}

// org.bukkit.event.entity.EntityTransformEvent
declare interface EntityTransformEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getTransformedEntity(): Entity;
    getTransformedEntities(): List;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getTransformReason(): TransformReason;
}

// org.bukkit.loot.LootContext
declare interface LootContext {
    getLocation(): Location;
    getKiller(): HumanEntity;
    getLootedEntity(): Entity;
    getLootingModifier(): number;
    getLuck(): number;
    DEFAULT_LOOT_MODIFIER: number;
}

// org.bukkit.conversations.Conversable
declare interface Conversable {
    isConversing(): boolean;
    beginConversation(conversation: Conversation): boolean;
    sendRawMessage(s: string): void;
    sendRawMessage(uUID: UUID, s: string): void;
    acceptConversationInput(s: string): void;
    abandonConversation(conversation: Conversation, conversationAbandonedEvent: ConversationAbandonedEvent): void;
    abandonConversation(conversation: Conversation): void;
}

// org.bukkit.configuration.file.YamlConfiguration
declare interface YamlConfiguration extends FileConfiguration {
    loadConfiguration(reader: Reader): YamlConfiguration;
    loadConfiguration(file: File): YamlConfiguration;
}

// org.bukkit.event.player.PlayerPickupItemEvent
declare interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
    getRemaining(): number;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getItem(): Item;
}

// org.bukkit.material.FurnaceAndDispenser
declare interface FurnaceAndDispenser extends DirectionalContainer {
}

// org.bukkit.entity.Illusioner
declare interface Illusioner extends Spellcaster {
}

// org.bukkit.plugin.InvalidPluginException
declare interface InvalidPluginException extends Exception {
}

// org.bukkit.event.player.PlayerRegisterChannelEvent
declare interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
}

// org.bukkit.event.entity.EntityTameEvent
declare interface EntityTameEvent extends EntityEvent, Cancellable {
    getOwner(): AnimalTamer;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.CoralWallFan
declare interface CoralWallFan extends Directional, Waterlogged {
}

// org.bukkit.event.inventory.DragType
declare enum DragType {
    SINGLE,
    EVEN,
}

// org.bukkit.event.player.PlayerBucketFishEvent
declare interface PlayerBucketFishEvent extends PlayerBucketEntityEvent {
    getWaterBucket(): ItemStack;
    getFishBucket(): ItemStack;
}

// org.bukkit.material.Cauldron
declare interface Cauldron extends MaterialData {
    isEmpty(): boolean;
    isFull(): boolean;
}

// org.bukkit.event.block.BlockFromToEvent
declare interface BlockFromToEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getToBlock(): Block;
    getFace(): BlockFace;
}

// org.bukkit.block.data.type.AmethystCluster
declare interface AmethystCluster extends Directional, Waterlogged {
}

// org.bukkit.entity.GlowSquid
declare interface GlowSquid extends Squid {
    getDarkTicksRemaining(): number;
    setDarkTicksRemaining(i: number): void;
}

// org.bukkit.configuration.file.YamlConfigurationOptions
declare interface YamlConfigurationOptions extends FileConfigurationOptions {
    indent(i: number): YamlConfigurationOptions;
    indent(): number;
}

// org.bukkit.conversations.MessagePrompt
declare interface MessagePrompt extends Prompt {
    blocksForInput(conversationContext: ConversationContext): boolean;
    acceptInput(conversationContext: ConversationContext, s: string): Prompt;
}

// org.bukkit.entity.PiglinBrute
declare interface PiglinBrute extends PiglinAbstract {
}

// org.bukkit.event.entity.EntityPortalEnterEvent
declare interface EntityPortalEnterEvent extends EntityEvent {
    getLocation(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.potion.Potion
declare interface Potion {
    apply(itemStack: ItemStack): void;
    apply(livingEntity: LivingEntity): void;
    getType(): PotionType;
    setType(potionType: PotionType): void;
    setLevel(i: number): void;
    getLevel(): number;
    extend(): Potion;
    getEffects(): Collection;
    splash(): Potion;
    fromItemStack(itemStack: ItemStack): Potion;
    setPotionBrewer(potionBrewer: PotionBrewer): void;
    getNameId(): number;
    getBrewer(): PotionBrewer;
    fromDamage(i: number): Potion;
    setSplash(b: boolean): void;
    toDamageValue(): number;
    isSplash(): boolean;
    toItemStack(i: number): ItemStack;
    setHasExtendedDuration(b: boolean): void;
    hasExtendedDuration(): boolean;
}

// org.bukkit.inventory.StonecutterInventory
declare interface StonecutterInventory extends Inventory {
}

// org.bukkit.persistence.PersistentDataContainer
declare interface PersistentDataContainer {
    remove(namespacedKey: NamespacedKey): void;
    get(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType): any;
    isEmpty(): boolean;
    set(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType, object: any): void;
    getOrDefault(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType, object: any): any;
    has(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType): boolean;
    getKeys(): Set;
    getAdapterContext(): PersistentDataAdapterContext;
}

// org.bukkit.block.Container
declare interface Container extends TileState, BlockInventoryHolder, Lockable, Nameable {
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
}

// org.bukkit.inventory.meta.BlockStateMeta
declare interface BlockStateMeta extends ItemMeta {
    getBlockState(): BlockState;
    setBlockState(blockState: BlockState): void;
    hasBlockState(): boolean;
}

// org.bukkit.boss.KeyedBossBar
declare interface KeyedBossBar extends BossBar, Keyed {
}

// org.bukkit.event.block.BlockFertilizeEvent
declare interface BlockFertilizeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlocks(): List;
    getPlayer(): Player;
}

// org.bukkit.event.raid.RaidStopEvent
declare interface RaidStopEvent extends RaidEvent {
    getHandlers(): HandlerList;
    getReason(): Reason;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.Chest
declare interface Chest extends Directional, Waterlogged {
    getType(): Type;
    setType(type: Type): void;
}

// org.bukkit.entity.Player
declare interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
    getAddress(): InetSocketAddress;
    getDisplayName(): string;
    getLocale(): string;
    setLevel(i: number): void;
    getLevel(): number;
    getBedSpawnLocation(): Location;
    setPlayerListHeaderFooter(s: string, s: string): void;
    getPlayerTimeOffset(): number;
    setBedSpawnLocation(location: Location): void;
    setBedSpawnLocation(location: Location, b: boolean): void;
    getAdvancementProgress(advancement: Advancement): AdvancementProgress;
    sendExperienceChange(f: number): void;
    sendExperienceChange(f: number, i: number): void;
    setPlayerListHeader(s: string): void;
    getPlayerListFooter(): string;
    isPlayerTimeRelative(): boolean;
    setPlayerListFooter(s: string): void;
    getPlayerListHeader(): string;
    getClientViewDistance(): number;
    setDisplayName(s: string): void;
    getPlayerListName(): string;
    setPlayerListName(s: string): void;
    setCompassTarget(location: Location): void;
    getCompassTarget(): Location;
    kickPlayer(s: string): void;
    setSpectatorTarget(entity: Entity): void;
    getPing(): number;
    isSneaking(): boolean;
    sendMap(mapView: MapView): void;
    setResourcePack(s: string, b: number): void;
    setResourcePack(s: string): void;
    isSleepingIgnored(): boolean;
    setSneaking(b: boolean): void;
    isSprinting(): boolean;
    setSprinting(b: boolean): void;
    sendBlockChange(location: Location, blockData: BlockData): void;
    sendBlockChange(location: Location, material: Material, b: number): void;
    sendBlockDamage(location: Location, f: number): void;
    sendSignChange(location: Location, s: string): void;
    sendSignChange(location: Location, s: string, dyeColor: DyeColor, b: boolean): void;
    sendSignChange(location: Location, s: string, dyeColor: DyeColor): void;
    resetPlayerWeather(): void;
    playNote(location: Location, instrument: Instrument, note: Note): void;
    playNote(location: Location, b: number, b: number): void;
    stopSound(sound: Sound): void;
    stopSound(sound: Sound, soundCategory: SoundCategory): void;
    stopSound(s: string): void;
    stopSound(s: string, soundCategory: SoundCategory): void;
    updateInventory(): void;
    chat(s: string): void;
    sendChunkChange(location: Location, i: number, i: number, i: number, b: number): boolean;
    giveExpLevels(i: number): void;
    setTotalExperience(i: number): void;
    loadData(): void;
    getTotalExperience(): number;
    showPlayer(player: Player): void;
    showPlayer(plugin: Plugin, player: Player): void;
    isFlying(): boolean;
    saveData(): void;
    setFlySpeed(f: number): void;
    getFlySpeed(): number;
    getWalkSpeed(): number;
    setTexturePack(s: string): void;
    getScoreboard(): Scoreboard;
    breakBlock(block: Block): boolean;
    setScoreboard(scoreboard: Scoreboard): void;
    setExp(f: number): void;
    setWalkSpeed(f: number): void;
    getPlayerWeather(): WeatherType;
    performCommand(s: string): boolean;
    setFlying(b: boolean): void;
    isHealthScaled(): boolean;
    getSpectatorTarget(): Entity;
    setAllowFlight(b: boolean): void;
    resetPlayerTime(): void;
    resetTitle(): void;
    updateCommands(): void;
    getExp(): number;
    setSleepingIgnored(b: boolean): void;
    setHealthScaled(b: boolean): void;
    sendTitle(s: string, s: string): void;
    sendTitle(s: string, s: string, i: number, i: number, i: number): void;
    getPlayerTime(): number;
    openBook(itemStack: ItemStack): void;
    setPlayerWeather(weatherType: WeatherType): void;
    getHealthScale(): number;
    giveExp(i: number): void;
    setPlayerTime(l: number, b: boolean): void;
    setHealthScale(d: number): void;
    hidePlayer(player: Player): void;
    hidePlayer(plugin: Plugin, player: Player): void;
    getAllowFlight(): boolean;
    spigot(): Spigot;
    spigot(): Spigot;
    spigot(): Spigot;
    playSound(location: Location, sound: Sound, f: number, f: number): void;
    playSound(location: Location, s: string, f: number, f: number): void;
    playSound(location: Location, s: string, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(location: Location, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    playEffect(location: Location, effect: Effect, i: number): void;
    playEffect(location: Location, effect: Effect, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number): void;
    spawnParticle(particle: Particle, location: Location, i: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number): void;
    canSee(player: Player): boolean;
    sendRawMessage(s: string): void;
    isOnGround(): boolean;
}

// org.bukkit.inventory.AnvilInventory
declare interface AnvilInventory extends Inventory {
    getMaximumRepairCost(): number;
    setMaximumRepairCost(i: number): void;
    getRepairCost(): number;
    setRepairCost(i: number): void;
    getRenameText(): string;
}

// org.bukkit.event.inventory.InventoryAction
declare enum InventoryAction {
    NOTHING,
    PICKUP_ALL,
    PICKUP_SOME,
    PICKUP_HALF,
    PICKUP_ONE,
    PLACE_ALL,
    PLACE_SOME,
    PLACE_ONE,
    SWAP_WITH_CURSOR,
    DROP_ALL_CURSOR,
    DROP_ONE_CURSOR,
    DROP_ALL_SLOT,
    DROP_ONE_SLOT,
    MOVE_TO_OTHER_INVENTORY,
    HOTBAR_MOVE_AND_READD,
    HOTBAR_SWAP,
    CLONE_STACK,
    COLLECT_TO_CURSOR,
    UNKNOWN,
}

// org.bukkit.event.server.BroadcastMessageEvent
declare interface BroadcastMessageEvent extends ServerEvent, Cancellable {
    getMessage(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRecipients(): Set;
    setMessage(s: string): void;
}

// org.bukkit.event.weather.ThunderChangeEvent
declare interface ThunderChangeEvent extends WeatherEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    toThunderState(): boolean;
}

// org.bukkit.block.data.type.SeaPickle
declare interface SeaPickle extends Waterlogged {
    setPickles(i: number): void;
    getMaximumPickles(): number;
    getMinimumPickles(): number;
    getPickles(): number;
}

// org.bukkit.inventory.DoubleChestInventory
declare interface DoubleChestInventory extends Inventory {
    getLeftSide(): Inventory;
    getRightSide(): Inventory;
    getHolder(): InventoryHolder;
    getHolder(): DoubleChest;
}

// org.bukkit.block.data.type.SculkSensor
declare interface SculkSensor extends AnaloguePowerable, Waterlogged {
    getPhase(): Phase;
    setPhase(phase: Phase): void;
}

// org.bukkit.inventory.LecternInventory
declare interface LecternInventory extends Inventory {
    getHolder(): Lectern;
    getHolder(): InventoryHolder;
}

// org.bukkit.inventory.ComplexRecipe
declare interface ComplexRecipe extends Recipe, Keyed {
}

// org.bukkit.event.raid.RaidSpawnWaveEvent
declare interface RaidSpawnWaveEvent extends RaidEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getRaiders(): List;
    getPatrolLeader(): Raider;
}

// org.bukkit.event.entity.EntityAirChangeEvent
declare interface EntityAirChangeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setAmount(i: number): void;
    getAmount(): number;
}

// org.bukkit.entity.ItemFrame
declare interface ItemFrame extends Hanging {
    getItemDropChance(): number;
    setFixed(b: boolean): void;
    setItemDropChance(f: number): void;
    isFixed(): boolean;
    setItem(itemStack: ItemStack): void;
    setItem(itemStack: ItemStack, b: boolean): void;
    getItem(): ItemStack;
    setVisible(b: boolean): void;
    isVisible(): boolean;
    getRotation(): Rotation;
    setRotation(rotation: Rotation): void;
}

// org.bukkit.inventory.Inventory
declare interface Inventory extends Iterable {
    remove(material: Material): void;
    remove(itemStack: ItemStack): void;
    clear(): void;
    clear(i: number): void;
    isEmpty(): boolean;
    contains(material: Material): boolean;
    contains(itemStack: ItemStack, i: number): boolean;
    contains(material: Material, i: number): boolean;
    contains(itemStack: ItemStack): boolean;
    iterator(i: number): ListIterator;
    iterator(): ListIterator;
    iterator(): Iterator;
    first(material: Material): number;
    first(itemStack: ItemStack): number;
    getLocation(): Location;
    getType(): InventoryType;
    getSize(): number;
    getContents(): ItemStack[];
    all(material: Material): HashMap;
    all(itemStack: ItemStack): HashMap;
    getViewers(): List;
    setItem(i: number, itemStack: ItemStack): void;
    getItem(i: number): ItemStack;
    getMaxStackSize(): number;
    getHolder(): InventoryHolder;
    addItem(itemStack: ItemStack): HashMap;
    removeItem(itemStack: ItemStack): HashMap;
    getStorageContents(): ItemStack[];
    setStorageContents(itemStack: ItemStack): void;
    containsAtLeast(itemStack: ItemStack, i: number): boolean;
    setMaxStackSize(i: number): void;
    firstEmpty(): number;
    setContents(itemStack: ItemStack): void;
}

// org.bukkit.event.world.ChunkLoadEvent
declare interface ChunkLoadEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    isNewChunk(): boolean;
}

// org.bukkit.help.HelpTopicComparator
declare interface HelpTopicComparator extends Comparator {
    compare(object: any, object: any): number;
    compare(helpTopic: HelpTopic, helpTopic: HelpTopic): number;
    topicNameComparatorInstance(): TopicNameComparator;
    helpTopicComparatorInstance(): HelpTopicComparator;
}

// org.bukkit.map.MapFont
declare interface MapFont {
    getChar(c: string): CharacterSprite;
    setChar(c: string, characterSprite: CharacterSprite): void;
    isValid(s: string): boolean;
    getHeight(): number;
    getWidth(s: string): number;
}

// org.bukkit.block.data.type.Leaves
declare interface Leaves extends BlockData {
    isPersistent(): boolean;
    setPersistent(b: boolean): void;
    getDistance(): number;
    setDistance(i: number): void;
}

// org.bukkit.conversations.InactivityConversationCanceller
declare interface InactivityConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

// org.bukkit.event.enchantment.PrepareItemEnchantEvent
declare interface PrepareItemEnchantEvent extends InventoryEvent, Cancellable {
    isCancelled(): boolean;
    getEnchantmentBonus(): number;
    getExpLevelCostsOffered(): number[];
    setCancelled(b: boolean): void;
    getEnchanter(): Player;
    getEnchantBlock(): Block;
    getOffers(): EnchantmentOffer[];
    getItem(): ItemStack;
}

// org.bukkit.block.data.type.Ladder
declare interface Ladder extends Directional, Waterlogged {
}

// org.bukkit.conversations.Prompt
declare interface Prompt extends Cloneable {
    blocksForInput(conversationContext: ConversationContext): boolean;
    acceptInput(conversationContext: ConversationContext, s: string): Prompt;
    getPromptText(conversationContext: ConversationContext): string;
    END_OF_CONVERSATION: Prompt;
}

// org.bukkit.Bukkit
declare interface Bukkit {
    shutdown(): void;
    getName(): string;
    getUnsafe(): UnsafeValues;
    getLogger(): Logger;
    getPort(): number;
    getMap(i: number): MapView;
    createMap(world: World): MapView;
    getVersion(): string;
    getTags(s: string, clazz: Class): Iterable;
    reload(): void;
    getTag(s: string, namespacedKey: NamespacedKey, clazz: Class): Tag;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getGenerateStructures(): boolean;
    isWhitelistEnforced(): boolean;
    setWhitelistEnforced(b: boolean): void;
    getWhitelistedPlayers(): Set;
    getUpdateFolderFile(): File;
    getConnectionThrottle(): number;
    getTicksPerAnimalSpawns(): number;
    getScoreboardManager(): ScoreboardManager;
    getTicksPerAmbientSpawns(): number;
    getMonsterSpawnLimit(): number;
    getStructureManager(): StructureManager;
    getTicksPerMonsterSpawns(): number;
    getWaterAmbientSpawnLimit(): number;
    getTicksPerWaterAmbientSpawns(): number;
    advancementIterator(): Iterator;
    getTicksPerWaterSpawns(): number;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getServicesManager(): ServicesManager;
    broadcastMessage(s: string): number;
    getPluginManager(): PluginManager;
    unloadWorld(s: string, b: boolean): boolean;
    unloadWorld(world: World, b: boolean): boolean;
    savePlayers(): void;
    reloadWhitelist(): void;
    hasWhitelist(): boolean;
    getScheduler(): BukkitScheduler;
    reloadData(): void;
    getAllowEnd(): boolean;
    getUpdateFolder(): string;
    matchPlayer(s: string): List;
    createWorld(worldCreator: WorldCreator): World;
    getAllowNether(): boolean;
    getMaxWorldSize(): number;
    setWhitelist(b: boolean): void;
    getWorlds(): List;
    createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType, i: number, b: boolean): ItemStack;
    getPlayerExact(s: string): Player;
    getPluginCommand(s: string): PluginCommand;
    getWorldType(): string;
    getPlayer(s: string): Player;
    getPlayer(uUID: UUID): Player;
    getWorld(uUID: UUID): World;
    getWorld(s: string): World;
    setServer(server: Server): void;
    getMaxPlayers(): number;
    getViewDistance(): number;
    getIp(): string;
    getServer(): Server;
    getBukkitVersion(): string;
    getOnlinePlayers(): Collection;
    getRecipesFor(itemStack: ItemStack): List;
    getCommandAliases(): Map;
    getSpawnRadius(): number;
    clearRecipes(): void;
    setSpawnRadius(i: number): void;
    getOnlineMode(): boolean;
    resetRecipes(): void;
    getRecipe(namespacedKey: NamespacedKey): Recipe;
    getAllowFlight(): boolean;
    isHardcore(): boolean;
    broadcast(s: string, s: string): number;
    getCraftingRecipe(itemStack: ItemStack, world: World): Recipe;
    getOfflinePlayer(uUID: UUID): OfflinePlayer;
    getOfflinePlayer(s: string): OfflinePlayer;
    getIPBans(): Set;
    unbanIP(s: string): void;
    getBannedPlayers(): Set;
    getBanList(type: Type): BanList;
    banIP(s: string): void;
    craftItem(itemStack: ItemStack, world: World, player: Player): ItemStack;
    addRecipe(recipe: Recipe): boolean;
    recipeIterator(): Iterator;
    dispatchCommand(commandSender: CommandSender, s: string): boolean;
    removeRecipe(namespacedKey: NamespacedKey): boolean;
    getAdvancement(namespacedKey: NamespacedKey): Advancement;
    createBlockData(s: string): BlockData;
    createBlockData(material: Material, s: string): BlockData;
    createBlockData(material: Material, consumer: Consumer): BlockData;
    createBlockData(material: Material): BlockData;
    getServerIcon(): CachedServerIcon;
    loadServerIcon(file: File): CachedServerIcon;
    loadServerIcon(bufferedImage: BufferedImage): CachedServerIcon;
    getOperators(): Set;
    getHelpMap(): HelpMap;
    getIdleTimeout(): number;
    getBossBars(): Iterator;
    getMessenger(): Messenger;
    createChunkData(world: World): ChunkData;
    getBossBar(namespacedKey: NamespacedKey): KeyedBossBar;
    getEntity(uUID: UUID): Entity;
    createInventory(inventoryHolder: InventoryHolder, i: number, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType): Inventory;
    getItemFactory(): ItemFactory;
    isPrimaryThread(): boolean;
    setIdleTimeout(i: number): void;
    createBossBar(namespacedKey: NamespacedKey, s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): KeyedBossBar;
    createBossBar(s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): BossBar;
    getConsoleSender(): ConsoleCommandSender;
    getMotd(): string;
    getWorldContainer(): File;
    setDefaultGameMode(gameMode: GameMode): void;
    createMerchant(s: string): Merchant;
    getDefaultGameMode(): GameMode;
    getOfflinePlayers(): OfflinePlayer[];
    getWarningState(): WarningState;
    removeBossBar(namespacedKey: NamespacedKey): boolean;
    getShutdownMessage(): string;
    spigot(): Spigot;
    selectEntities(commandSender: CommandSender, s: string): List;
    getLootTable(namespacedKey: NamespacedKey): LootTable;
}

// org.bukkit.plugin.PluginDescriptionFile
declare interface PluginDescriptionFile {
    getName(): string;
    getPermissions(): List;
    save(writer: Writer): void;
    getVersion(): string;
    getPrefix(): string;
    getFullName(): string;
    getDescription(): string;
    getCommands(): Map;
    getProvides(): List;
    getAuthors(): List;
    getContributors(): List;
    getWebsite(): string;
    getSoftDepend(): List;
    getRawName(): string;
    getLoad(): PluginLoadOrder;
    getLoadBefore(): List;
    getMain(): string;
    getAPIVersion(): string;
    getDepend(): List;
    getLibraries(): List;
    getClassLoaderOf(): string;
    getAwareness(): Set;
    getPermissionDefault(): PermissionDefault;
}

// org.bukkit.entity.ComplexLivingEntity
declare interface ComplexLivingEntity extends LivingEntity {
    getParts(): Set;
}

// org.bukkit.inventory.CartographyInventory
declare interface CartographyInventory extends Inventory {
}

// org.bukkit.NetherWartsState
declare enum NetherWartsState {
    SEEDED,
    STAGE_ONE,
    STAGE_TWO,
    RIPE,
}

// org.bukkit.block.data.type.Snow
declare interface Snow extends BlockData {
    getLayers(): number;
    setLayers(i: number): void;
    getMaximumLayers(): number;
    getMinimumLayers(): number;
}

// org.bukkit.entity.Hanging
declare interface Hanging extends Entity, Attachable {
    setFacingDirection(blockFace: BlockFace, b: boolean): boolean;
}

// org.bukkit.plugin.AuthorNagException
declare interface AuthorNagException extends RuntimeException {
    getMessage(): string;
}

// org.bukkit.entity.Giant
declare interface Giant extends Monster {
}

// org.bukkit.event.block.BlockExpEvent
declare interface BlockExpEvent extends BlockEvent {
    getHandlers(): HandlerList;
    setExpToDrop(i: number): void;
    getExpToDrop(): number;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.SmithingRecipe
declare interface SmithingRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    getBase(): RecipeChoice;
    getAddition(): RecipeChoice;
}

// org.bukkit.entity.FishHook
declare interface FishHook extends Projectile {
    getState(): HookState;
    setMinWaitTime(i: number): void;
    getMinWaitTime(): number;
    getMaxWaitTime(): number;
    setMaxWaitTime(i: number): void;
    getApplyLure(): boolean;
    setBiteChance(d: number): void;
    pullHookedEntity(): boolean;
    getBiteChance(): number;
    isInOpenWater(): boolean;
    getHookedEntity(): Entity;
    setHookedEntity(entity: Entity): void;
    setApplyLure(b: boolean): void;
}

// org.bukkit.inventory.ItemStack
declare interface ItemStack extends Cloneable, ConfigurationSerializable {
    getType(): Material;
    getData(): MaterialData;
    setType(material: Material): void;
    serialize(): Map;
    deserialize(map: Map): ItemStack;
    addUnsafeEnchantment(enchantment: Enchantment, i: number): void;
    addUnsafeEnchantments(map: Map): void;
    containsEnchantment(enchantment: Enchantment): boolean;
    setAmount(i: number): void;
    getAmount(): number;
    setData(materialData: MaterialData): void;
    getMaxStackSize(): number;
    getEnchantmentLevel(enchantment: Enchantment): number;
    hasItemMeta(): boolean;
    addEnchantment(enchantment: Enchantment, i: number): void;
    getEnchantments(): Map;
    getDurability(): number;
    addEnchantments(map: Map): void;
    setDurability(s: number): void;
    setItemMeta(itemMeta: ItemMeta): boolean;
    getItemMeta(): ItemMeta;
    isSimilar(itemStack: ItemStack): boolean;
    removeEnchantment(enchantment: Enchantment): number;
}

// org.bukkit.entity.minecart.CommandMinecart
declare interface CommandMinecart extends Minecart {
    setName(s: string): void;
    setCommand(s: string): void;
    getCommand(): string;
}

// org.bukkit.configuration.serialization.SerializableAs
declare interface SerializableAs extends Annotation {
    value(): string;
}

// org.bukkit.event.player.PlayerBucketEntityEvent
declare interface PlayerBucketEntityEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getEntity(): Entity;
    getOriginalBucket(): ItemStack;
    getEntityBucket(): ItemStack;
}

// org.bukkit.block.Chest
declare interface Chest extends Container, Lootable, Lidded {
    getBlockInventory(): Inventory;
}

// org.bukkit.event.block.BlockEvent
declare interface BlockEvent extends Event {
    getBlock(): Block;
}

// org.bukkit.entity.minecart.StorageMinecart
declare interface StorageMinecart extends Minecart, InventoryHolder, Lootable {
}

// org.bukkit.command.CommandSender
declare interface CommandSender extends Permissible {
    getName(): string;
    getServer(): Server;
    spigot(): Spigot;
    sendMessage(s: string): void;
    sendMessage(uUID: UUID, s: string): void;
    sendMessage(uUID: UUID, s: string): void;
    sendMessage(s: string): void;
}

// org.bukkit.inventory.SmokingRecipe
declare interface SmokingRecipe extends CookingRecipe {
}

// org.bukkit.entity.Ocelot
declare interface Ocelot extends Animals {
    setTrusting(b: boolean): void;
    isTrusting(): boolean;
    getCatType(): Type;
    setCatType(type: Type): void;
}

// org.bukkit.inventory.Merchant
declare interface Merchant {
    getRecipe(i: number): MerchantRecipe;
    getTrader(): HumanEntity;
    isTrading(): boolean;
    getRecipes(): List;
    setRecipe(i: number, merchantRecipe: MerchantRecipe): void;
    setRecipes(list: List): void;
    getRecipeCount(): number;
}

// org.bukkit.event.player.PlayerExpChangeEvent
declare interface PlayerExpChangeEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setAmount(i: number): void;
    getAmount(): number;
}

// org.bukkit.block.data.Bisected
declare interface Bisected extends BlockData {
    getHalf(): Half;
    setHalf(half: Half): void;
}

// org.bukkit.entity.Villager
declare interface Villager extends AbstractVillager {
    sleep(location: Location): boolean;
    setVillagerExperience(i: number): void;
    getVillagerExperience(): number;
    wakeup(): void;
    shakeHead(): void;
    getVillagerType(): Type;
    setVillagerLevel(i: number): void;
    getVillagerLevel(): number;
    setVillagerType(type: Type): void;
    getProfession(): Profession;
    setProfession(profession: Profession): void;
}

// org.bukkit.block.data.type.StructureBlock
declare interface StructureBlock extends BlockData {
    getMode(): Mode;
    setMode(mode: Mode): void;
}

// org.bukkit.block.BlockState
declare interface BlockState extends Metadatable {
    update(b: boolean, b: boolean): boolean;
    update(b: boolean): boolean;
    update(): boolean;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getType(): Material;
    getData(): MaterialData;
    setType(material: Material): void;
    getChunk(): Chunk;
    getY(): number;
    getWorld(): World;
    getX(): number;
    getZ(): number;
    getBlock(): Block;
    setBlockData(blockData: BlockData): void;
    getBlockData(): BlockData;
    getLightLevel(): number;
    setRawData(b: number): void;
    isPlaced(): boolean;
    setData(materialData: MaterialData): void;
    getRawData(): number;
}

// org.bukkit.block.data.Waterlogged
declare interface Waterlogged extends BlockData {
    isWaterlogged(): boolean;
    setWaterlogged(b: boolean): void;
}

// org.bukkit.GrassSpecies
declare enum GrassSpecies {
    DEAD,
    NORMAL,
    FERN_LIKE,
}

// org.bukkit.util.StringUtil
declare interface StringUtil {
    copyPartialMatches(s: string, iterable: Iterable, collection: Collection): Collection;
    startsWithIgnoreCase(s: string, s: string): boolean;
}

// org.bukkit.boss.BossBar
declare interface BossBar {
    removeAll(): void;
    addFlag(barFlag: BarFlag): void;
    getColor(): BarColor;
    getPlayers(): List;
    setColor(barColor: BarColor): void;
    removeFlag(barFlag: BarFlag): void;
    setStyle(barStyle: BarStyle): void;
    getTitle(): string;
    getStyle(): BarStyle;
    hasFlag(barFlag: BarFlag): boolean;
    setProgress(d: number): void;
    setTitle(s: string): void;
    addPlayer(player: Player): void;
    removePlayer(player: Player): void;
    setVisible(b: boolean): void;
    show(): void;
    hide(): void;
    isVisible(): boolean;
    getProgress(): number;
}

// org.bukkit.entity.Turtle
declare interface Turtle extends Animals {
}

// org.bukkit.event.hanging.HangingBreakByEntityEvent
declare interface HangingBreakByEntityEvent extends HangingBreakEvent {
    getRemover(): Entity;
}

// org.bukkit.entity.Wolf
declare interface Wolf extends Tameable, Sittable {
    isAngry(): boolean;
    setAngry(b: boolean): void;
    setCollarColor(dyeColor: DyeColor): void;
    getCollarColor(): DyeColor;
}

// org.bukkit.entity.EntityCategory
declare enum EntityCategory {
    NONE,
    UNDEAD,
    ARTHROPOD,
    ILLAGER,
    WATER,
}

// org.bukkit.plugin.java.JavaPluginLoader
declare interface JavaPluginLoader extends PluginLoader {
    loadPlugin(file: File): Plugin;
    enablePlugin(plugin: Plugin): void;
    disablePlugin(plugin: Plugin): void;
    createRegisteredListeners(listener: Listener, plugin: Plugin): Map;
    getPluginDescription(file: File): PluginDescriptionFile;
    getPluginFileFilters(): Pattern[];
    pluginParentTimer: CustomTimingsHandler;
}

// org.bukkit.permissions.PermissionAttachmentInfo
declare interface PermissionAttachmentInfo {
    getValue(): boolean;
    getPermission(): string;
    getAttachment(): PermissionAttachment;
    getPermissible(): Permissible;
}

// org.bukkit.block.BlockFace
declare enum BlockFace {
    NORTH,
    EAST,
    SOUTH,
    WEST,
    UP,
    DOWN,
    NORTH_EAST,
    NORTH_WEST,
    SOUTH_EAST,
    SOUTH_WEST,
    WEST_NORTH_WEST,
    NORTH_NORTH_WEST,
    NORTH_NORTH_EAST,
    EAST_NORTH_EAST,
    EAST_SOUTH_EAST,
    SOUTH_SOUTH_EAST,
    SOUTH_SOUTH_WEST,
    WEST_SOUTH_WEST,
    SELF,
}

// org.bukkit.Chunk
declare interface Chunk extends PersistentDataHolder {
    contains(blockData: BlockData): boolean;
    load(): boolean;
    load(b: boolean): boolean;
    unload(): boolean;
    unload(b: boolean): boolean;
    isLoaded(): boolean;
    getPluginChunkTickets(): Collection;
    removePluginChunkTicket(plugin: Plugin): boolean;
    addPluginChunkTicket(plugin: Plugin): boolean;
    getWorld(): World;
    setForceLoaded(b: boolean): void;
    getInhabitedTime(): number;
    setInhabitedTime(l: number): void;
    getX(): number;
    getChunkSnapshot(b: boolean, b: boolean, b: boolean): ChunkSnapshot;
    getChunkSnapshot(): ChunkSnapshot;
    getEntities(): Entity[];
    getTileEntities(): BlockState[];
    getZ(): number;
    isSlimeChunk(): boolean;
    isForceLoaded(): boolean;
    isEntitiesLoaded(): boolean;
    getBlock(i: number, i: number, i: number): Block;
}

// org.bukkit.inventory.meta.tags.ItemTagType
declare interface ItemTagType {
    getPrimitiveType(): Class;
    toPrimitive(object: any, itemTagAdapterContext: ItemTagAdapterContext): any;
    getComplexType(): Class;
    fromPrimitive(object: any, itemTagAdapterContext: ItemTagAdapterContext): any;
    BYTE: ItemTagType;
    SHORT: ItemTagType;
    INTEGER: ItemTagType;
    LONG: ItemTagType;
    FLOAT: ItemTagType;
    DOUBLE: ItemTagType;
    STRING: ItemTagType;
    BYTE_ARRAY: ItemTagType;
    INTEGER_ARRAY: ItemTagType;
    LONG_ARRAY: ItemTagType;
    TAG_CONTAINER: ItemTagType;
}

// org.bukkit.configuration.MemoryConfigurationOptions
declare interface MemoryConfigurationOptions extends ConfigurationOptions {
}

// org.bukkit.conversations.ExactMatchConversationCanceller
declare interface ExactMatchConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

// org.bukkit.event.player.PlayerChatEvent
declare interface PlayerChatEvent extends PlayerEvent, Cancellable {
    getMessage(): string;
    setFormat(s: string): void;
    getFormat(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRecipients(): Set;
    setMessage(s: string): void;
    setPlayer(player: Player): void;
}

// org.bukkit.event.entity.HorseJumpEvent
declare interface HorseJumpEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setPower(f: number): void;
    getPower(): number;
}

// org.bukkit.block.data.type.TechnicalPiston
declare interface TechnicalPiston extends Directional {
    getType(): Type;
    setType(type: Type): void;
}

// org.bukkit.event.entity.SpawnerSpawnEvent
declare interface SpawnerSpawnEvent extends EntitySpawnEvent {
    getSpawner(): CreatureSpawner;
}

// org.bukkit.command.defaults.TimingsCommand
declare interface TimingsCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
    executeSpigotTimings(commandSender: CommandSender, s: string): void;
    timingStart: number;
}

// org.bukkit.event.inventory.FurnaceBurnEvent
declare interface FurnaceBurnEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getFuel(): ItemStack;
    getHandlerList(): HandlerList;
    getBurnTime(): number;
    setBurnTime(i: number): void;
    isBurning(): boolean;
    setBurning(b: boolean): void;
}

// org.bukkit.plugin.messaging.ChannelNotRegisteredException
declare interface ChannelNotRegisteredException extends RuntimeException {
}

// org.bukkit.event.entity.EntityDamageEvent
declare interface EntityDamageEvent extends EntityEvent, Cancellable {
    getCause(): DamageCause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getOriginalDamage(damageModifier: DamageModifier): number;
    getFinalDamage(): number;
    isApplicable(damageModifier: DamageModifier): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getDamage(damageModifier: DamageModifier): number;
    getDamage(): number;
    setDamage(damageModifier: DamageModifier, d: number): void;
    setDamage(d: number): void;
}

// org.bukkit.conversations.ConversationFactory
declare interface ConversationFactory {
    withTimeout(i: number): ConversationFactory;
    withFirstPrompt(prompt: Prompt): ConversationFactory;
    withEscapeSequence(s: string): ConversationFactory;
    withModality(b: boolean): ConversationFactory;
    buildConversation(conversable: Conversable): Conversation;
    withLocalEcho(b: boolean): ConversationFactory;
    withPrefix(conversationPrefix: ConversationPrefix): ConversationFactory;
    addConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): ConversationFactory;
    withConversationCanceller(conversationCanceller: ConversationCanceller): ConversationFactory;
    thatExcludesNonPlayersWithMessage(s: string): ConversationFactory;
    withInitialSessionData(map: Map): ConversationFactory;
}

// org.bukkit.event.player.PlayerAdvancementDoneEvent
declare interface PlayerAdvancementDoneEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getAdvancement(): Advancement;
}

// org.bukkit.block.data.type.DaylightDetector
declare interface DaylightDetector extends AnaloguePowerable {
    setInverted(b: boolean): void;
    isInverted(): boolean;
}

// org.bukkit.event.player.PlayerInteractAtEntityEvent
declare interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
    getClickedPosition(): Vector;
}

// org.bukkit.event.entity.EntityEvent
declare interface EntityEvent extends Event {
    getEntityType(): EntityType;
    getEntity(): Entity;
}

// org.bukkit.event.player.PlayerGameModeChangeEvent
declare interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getNewGameMode(): GameMode;
}

// org.bukkit.entity.Blaze
declare interface Blaze extends Monster {
}

// org.bukkit.event.entity.EntityCreatePortalEvent
declare interface EntityCreatePortalEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getPortalType(): PortalType;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlocks(): List;
}

// org.bukkit.entity.PolarBear
declare interface PolarBear extends Animals {
}

// org.bukkit.generator.WorldInfo
declare interface WorldInfo {
    getName(): string;
    getUID(): UUID;
    getSeed(): number;
    getEnvironment(): Environment;
    getMaxHeight(): number;
    getMinHeight(): number;
}

// org.bukkit.event.player.PlayerRespawnEvent
declare interface PlayerRespawnEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    isAnchorSpawn(): boolean;
    isBedSpawn(): boolean;
    setRespawnLocation(location: Location): void;
    getRespawnLocation(): Location;
}

// org.bukkit.TreeSpecies
declare enum TreeSpecies {
    GENERIC,
    REDWOOD,
    BIRCH,
    JUNGLE,
    ACACIA,
    DARK_OAK,
}

// org.bukkit.event.inventory.TradeSelectEvent
declare interface TradeSelectEvent extends InventoryInteractEvent {
    getIndex(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getInventory(): Inventory;
    getInventory(): MerchantInventory;
    getMerchant(): Merchant;
}

// org.bukkit.event.player.PlayerItemMendEvent
declare interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getItem(): ItemStack;
    setRepairAmount(i: number): void;
    getRepairAmount(): number;
    getExperienceOrb(): ExperienceOrb;
}

// org.bukkit.block.Lockable
declare interface Lockable {
    isLocked(): boolean;
    getLock(): string;
    setLock(s: string): void;
}

// org.bukkit.block.data.type.Hopper
declare interface Hopper extends Directional {
    isEnabled(): boolean;
    setEnabled(b: boolean): void;
}

// org.bukkit.entity.Monster
declare interface Monster extends Creature {
}

// org.bukkit.block.data.type.EnderChest
declare interface EnderChest extends Directional, Waterlogged {
}

// org.bukkit.command.defaults.PluginsCommand
declare interface PluginsCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

// org.bukkit.entity.FallingBlock
declare interface FallingBlock extends Entity {
    getDropItem(): boolean;
    setDropItem(b: boolean): void;
    canHurtEntities(): boolean;
    setHurtEntities(b: boolean): void;
    getBlockData(): BlockData;
    getMaterial(): Material;
}

// org.bukkit.block.data.type.NoteBlock
declare interface NoteBlock extends Powerable {
    setNote(note: Note): void;
    getNote(): Note;
    setInstrument(instrument: Instrument): void;
    getInstrument(): Instrument;
}

// org.bukkit.event.world.SpawnChangeEvent
declare interface SpawnChangeEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getPreviousLocation(): Location;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.meta.SpawnEggMeta
declare interface SpawnEggMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): SpawnEggMeta;
    getSpawnedType(): EntityType;
    setSpawnedType(entityType: EntityType): void;
}

// org.bukkit.metadata.MetadataValue
declare interface MetadataValue {
    value(): any;
    asString(): string;
    asLong(): number;
    asDouble(): number;
    getOwningPlugin(): Plugin;
    asFloat(): number;
    asBoolean(): boolean;
    asShort(): number;
    asByte(): number;
    invalidate(): void;
    asInt(): number;
}

// org.bukkit.event.player.PlayerToggleSprintEvent
declare interface PlayerToggleSprintEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isSprinting(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.banner.PatternType
declare enum PatternType {
    BASE,
    SQUARE_BOTTOM_LEFT,
    SQUARE_BOTTOM_RIGHT,
    SQUARE_TOP_LEFT,
    SQUARE_TOP_RIGHT,
    STRIPE_BOTTOM,
    STRIPE_TOP,
    STRIPE_LEFT,
    STRIPE_RIGHT,
    STRIPE_CENTER,
    STRIPE_MIDDLE,
    STRIPE_DOWNRIGHT,
    STRIPE_DOWNLEFT,
    STRIPE_SMALL,
    CROSS,
    STRAIGHT_CROSS,
    TRIANGLE_BOTTOM,
    TRIANGLE_TOP,
    TRIANGLES_BOTTOM,
    TRIANGLES_TOP,
    DIAGONAL_LEFT,
    DIAGONAL_RIGHT,
    DIAGONAL_LEFT_MIRROR,
    DIAGONAL_RIGHT_MIRROR,
    CIRCLE_MIDDLE,
    RHOMBUS_MIDDLE,
    HALF_VERTICAL,
    HALF_HORIZONTAL,
    HALF_VERTICAL_MIRROR,
    HALF_HORIZONTAL_MIRROR,
    BORDER,
    CURLY_BORDER,
    CREEPER,
    GRADIENT,
    GRADIENT_UP,
    BRICKS,
    SKULL,
    FLOWER,
    MOJANG,
    GLOBE,
    PIGLIN,
}

// org.bukkit.event.inventory.CraftItemEvent
declare interface CraftItemEvent extends InventoryClickEvent {
    getRecipe(): Recipe;
    getInventory(): CraftingInventory;
    getInventory(): Inventory;
}

// org.bukkit.plugin.TimedRegisteredListener
declare interface TimedRegisteredListener extends RegisteredListener {
    reset(): void;
    getCount(): number;
    getTotalTime(): number;
    hasMultiple(): boolean;
    getEventClass(): Class;
}

// org.bukkit.event.player.PlayerVelocityEvent
declare interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getVelocity(): Vector;
    setVelocity(vector: Vector): void;
}

// org.bukkit.NamespacedKey
declare interface NamespacedKey {
    getKey(): string;
    minecraft(s: string): NamespacedKey;
    getNamespace(): string;
    fromString(s: string, plugin: Plugin): NamespacedKey;
    fromString(s: string): NamespacedKey;
    randomKey(): NamespacedKey;
    MINECRAFT: string;
    BUKKIT: string;
}

// org.bukkit.event.player.PlayerRecipeDiscoverEvent
declare interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRecipe(): NamespacedKey;
}

// org.bukkit.block.data.type.Stairs
declare interface Stairs extends Bisected, Directional, Waterlogged {
    setShape(shape: Shape): void;
    getShape(): Shape;
}

// org.bukkit.event.block.BlockBreakEvent
declare interface BlockBreakEvent extends BlockExpEvent, Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setDropItems(b: boolean): void;
    isDropItems(): boolean;
    getPlayer(): Player;
}

// org.bukkit.loot.LootTable
declare interface LootTable extends Keyed {
    fillInventory(inventory: Inventory, random: Random, lootContext: LootContext): void;
    populateLoot(random: Random, lootContext: LootContext): Collection;
}

// org.bukkit.block.data.type.Switch
declare interface Switch extends Directional, FaceAttachable, Powerable {
    getFace(): Face;
    setFace(face: Face): void;
}

// org.bukkit.block.data.type.CaveVinesPlant
declare interface CaveVinesPlant extends BlockData {
    setBerries(b: boolean): void;
    isBerries(): boolean;
}

// org.bukkit.entity.Explosive
declare interface Explosive extends Entity {
    getYield(): number;
    isIncendiary(): boolean;
    setIsIncendiary(b: boolean): void;
    setYield(f: number): void;
}

// org.bukkit.entity.Salmon
declare interface Salmon extends Fish {
}

// org.bukkit.event.inventory.InventoryDragEvent
declare interface InventoryDragEvent extends InventoryInteractEvent {
    getType(): DragType;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCursor(itemStack: ItemStack): void;
    getCursor(): ItemStack;
    getNewItems(): Map;
    getInventorySlots(): Set;
    getRawSlots(): Set;
    getOldCursor(): ItemStack;
}

// org.bukkit.inventory.meta.KnowledgeBookMeta
declare interface KnowledgeBookMeta extends ItemMeta {
    clone(): KnowledgeBookMeta;
    clone(): ItemMeta;
    clone(): any;
    addRecipe(namespacedKey: NamespacedKey): void;
    getRecipes(): List;
    setRecipes(list: List): void;
    hasRecipes(): boolean;
}

// org.bukkit.CoalType
declare enum CoalType {
    COAL,
    CHARCOAL,
}

// org.bukkit.entity.Bee
declare interface Bee extends Animals {
    setFlower(location: Location): void;
    getFlower(): Location;
    setAnger(i: number): void;
    hasStung(): boolean;
    setHasStung(b: boolean): void;
    getAnger(): number;
    getHive(): Location;
    hasNectar(): boolean;
    setHive(location: Location): void;
    setHasNectar(b: boolean): void;
    getCannotEnterHiveTicks(): number;
    setCannotEnterHiveTicks(i: number): void;
}

// org.bukkit.inventory.Recipe
declare interface Recipe {
    getResult(): ItemStack;
}

// org.bukkit.entity.WaterMob
declare interface WaterMob extends Creature {
}

// org.bukkit.event.server.ServiceEvent
declare interface ServiceEvent extends ServerEvent {
    getProvider(): RegisteredServiceProvider;
}

// org.bukkit.event.world.EntitiesLoadEvent
declare interface EntitiesLoadEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getEntities(): List;
}

// org.bukkit.scheduler.BukkitScheduler
declare interface BukkitScheduler {
    isQueued(i: number): boolean;
    cancelTask(i: number): void;
    scheduleSyncDelayedTask(plugin: Plugin, bukkitRunnable: BukkitRunnable): number;
    scheduleSyncDelayedTask(plugin: Plugin, runnable: Runnable, l: number): number;
    scheduleSyncDelayedTask(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): number;
    scheduleSyncDelayedTask(plugin: Plugin, runnable: Runnable): number;
    cancelTasks(plugin: Plugin): void;
    scheduleSyncRepeatingTask(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): number;
    scheduleSyncRepeatingTask(plugin: Plugin, runnable: Runnable, l: number, l: number): number;
    scheduleAsyncRepeatingTask(plugin: Plugin, runnable: Runnable, l: number, l: number): number;
    scheduleAsyncDelayedTask(plugin: Plugin, runnable: Runnable): number;
    scheduleAsyncDelayedTask(plugin: Plugin, runnable: Runnable, l: number): number;
    runTaskTimerAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, runnable: Runnable, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, consumer: Consumer, l: number, l: number): void;
    runTaskAsynchronously(plugin: Plugin, consumer: Consumer): void;
    runTaskAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable): BukkitTask;
    runTaskAsynchronously(plugin: Plugin, runnable: Runnable): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, consumer: Consumer, l: number): void;
    runTaskLaterAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, runnable: Runnable, l: number): BukkitTask;
    getActiveWorkers(): List;
    isCurrentlyRunning(i: number): boolean;
    runTaskTimer(plugin: Plugin, consumer: Consumer, l: number, l: number): void;
    runTaskTimer(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, runnable: Runnable, l: number, l: number): BukkitTask;
    runTask(plugin: Plugin, runnable: Runnable): BukkitTask;
    runTask(plugin: Plugin, consumer: Consumer): void;
    runTask(plugin: Plugin, bukkitRunnable: BukkitRunnable): BukkitTask;
    runTaskLater(plugin: Plugin, runnable: Runnable, l: number): BukkitTask;
    runTaskLater(plugin: Plugin, consumer: Consumer, l: number): void;
    runTaskLater(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): BukkitTask;
    callSyncMethod(plugin: Plugin, callable: Callable): Future;
    getPendingTasks(): List;
}

// org.bukkit.material.Tree
declare interface Tree extends Wood {
    setDirection(blockFace: BlockFace): void;
    getDirection(): BlockFace;
}

// org.bukkit.command.ProxiedCommandSender
declare interface ProxiedCommandSender extends CommandSender {
    getCaller(): CommandSender;
    getCallee(): CommandSender;
}

// org.bukkit.entity.minecart.HopperMinecart
declare interface HopperMinecart extends Minecart, InventoryHolder, Lootable {
    isEnabled(): boolean;
    setEnabled(b: boolean): void;
}

// org.bukkit.event.entity.PiglinBarterEvent
declare interface PiglinBarterEvent extends EntityEvent, Cancellable {
    getInput(): ItemStack;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getOutcome(): List;
}

// org.bukkit.event.block.EntityBlockFormEvent
declare interface EntityBlockFormEvent extends BlockFormEvent {
    getEntity(): Entity;
}

// org.bukkit.block.data.type.PistonHead
declare interface PistonHead extends TechnicalPiston {
    setShort(b: boolean): void;
    isShort(): boolean;
}

// org.bukkit.entity.AbstractSkeleton
declare interface AbstractSkeleton extends Monster {
    getSkeletonType(): SkeletonType;
    setSkeletonType(skeletonType: SkeletonType): void;
}

// org.bukkit.potion.PotionEffect
declare interface PotionEffect extends ConfigurationSerializable {
    apply(livingEntity: LivingEntity): boolean;
    getType(): PotionEffectType;
    serialize(): Map;
    getDuration(): number;
    getColor(): Color;
    hasParticles(): boolean;
    hasIcon(): boolean;
    getAmplifier(): number;
    isAmbient(): boolean;
}

// org.bukkit.block.data.Attachable
declare interface Attachable extends BlockData {
    isAttached(): boolean;
    setAttached(b: boolean): void;
}

// org.bukkit.event.entity.CreeperPowerEvent
declare interface CreeperPowerEvent extends EntityEvent, Cancellable {
    getCause(): PowerCause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getLightning(): LightningStrike;
}

// org.bukkit.inventory.FurnaceRecipe
declare interface FurnaceRecipe extends CookingRecipe {
    setInput(material: Material, i: number): FurnaceRecipe;
    setInput(materialData: MaterialData): FurnaceRecipe;
}

// org.bukkit.event.Listener
declare interface Listener {
}

// org.bukkit.event.inventory.InventoryCloseEvent
declare interface InventoryCloseEvent extends InventoryEvent {
    getPlayer(): HumanEntity;
}

// org.bukkit.inventory.SmithingInventory
declare interface SmithingInventory extends Inventory {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
    getRecipe(): Recipe;
}

// org.bukkit.block.CreatureSpawner
declare interface CreatureSpawner extends TileState {
    getSpawnedType(): EntityType;
    getDelay(): number;
    setSpawnedType(entityType: EntityType): void;
    getMinSpawnDelay(): number;
    setDelay(i: number): void;
    setMinSpawnDelay(i: number): void;
    getSpawnCount(): number;
    getMaxSpawnDelay(): number;
    getSpawnRange(): number;
    setSpawnRange(i: number): void;
    setMaxSpawnDelay(i: number): void;
    setSpawnCount(i: number): void;
    getCreatureTypeName(): string;
    getMaxNearbyEntities(): number;
    setRequiredPlayerRange(i: number): void;
    setCreatureTypeByName(s: string): void;
    setMaxNearbyEntities(i: number): void;
    getRequiredPlayerRange(): number;
}

// org.bukkit.block.data.type.Scaffolding
declare interface Scaffolding extends Waterlogged {
    getDistance(): number;
    setDistance(i: number): void;
    setBottom(b: boolean): void;
    getMaximumDistance(): number;
    isBottom(): boolean;
}

// org.bukkit.plugin.ServicesManager
declare interface ServicesManager {
    register(clazz: Class, object: any, plugin: Plugin, servicePriority: ServicePriority): void;
    load(clazz: Class): any;
    unregister(object: any): void;
    unregister(clazz: Class, object: any): void;
    unregisterAll(plugin: Plugin): void;
    getRegistration(clazz: Class): RegisteredServiceProvider;
    getRegistrations(plugin: Plugin): List;
    getRegistrations(clazz: Class): Collection;
    isProvidedFor(clazz: Class): boolean;
    getKnownServices(): Collection;
}

// org.bukkit.event.world.WorldEvent
declare interface WorldEvent extends Event {
    getWorld(): World;
}

// org.bukkit.command.SimpleCommandMap
declare interface SimpleCommandMap extends CommandMap {
    dispatch(commandSender: CommandSender, s: string): boolean;
    register(s: string, command: Command): boolean;
    register(s: string, s: string, command: Command): boolean;
    getCommand(s: string): Command;
    clearCommands(): void;
    registerAll(s: string, list: List): void;
    tabComplete(commandSender: CommandSender, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, location: Location): List;
    getCommands(): Collection;
    setFallbackCommands(): void;
    registerServerAliases(): void;
}

// org.bukkit.event.block.BlockMultiPlaceEvent
declare interface BlockMultiPlaceEvent extends BlockPlaceEvent {
    getReplacedBlockStates(): List;
}

// org.bukkit.util.permissions.BroadcastPermissions
declare interface BroadcastPermissions {
    registerPermissions(permission: Permission): Permission;
}

// org.bukkit.event.entity.EntityTargetEvent
declare interface EntityTargetEvent extends EntityEvent, Cancellable {
    getTarget(): Entity;
    setTarget(entity: Entity): void;
    getHandlers(): HandlerList;
    getReason(): TargetReason;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.conversations.ConversationPrefix
declare interface ConversationPrefix {
    getPrefix(conversationContext: ConversationContext): string;
}

// org.bukkit.plugin.messaging.MessageTooLargeException
declare interface MessageTooLargeException extends RuntimeException {
}

// org.bukkit.block.Bell
declare interface Bell extends TileState {
}

// org.bukkit.inventory.meta.EnchantmentStorageMeta
declare interface EnchantmentStorageMeta extends ItemMeta {
    clone(): any;
    clone(): ItemMeta;
    clone(): EnchantmentStorageMeta;
    getStoredEnchantLevel(enchantment: Enchantment): number;
    removeStoredEnchant(enchantment: Enchantment): boolean;
    hasConflictingStoredEnchant(enchantment: Enchantment): boolean;
    getStoredEnchants(): Map;
    hasStoredEnchants(): boolean;
    hasStoredEnchant(enchantment: Enchantment): boolean;
    addStoredEnchant(enchantment: Enchantment, i: number, b: boolean): boolean;
}

// org.bukkit.event.block.SpongeAbsorbEvent
declare interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlocks(): List;
}

// org.bukkit.block.structure.StructureRotation
declare enum StructureRotation {
    NONE,
    CLOCKWISE_90,
    CLOCKWISE_180,
    COUNTERCLOCKWISE_90,
}

// org.bukkit.scheduler.BukkitWorker
declare interface BukkitWorker {
    getOwner(): Plugin;
    getThread(): Thread;
    getTaskId(): number;
}

// org.bukkit.entity.LingeringPotion
declare interface LingeringPotion extends ThrownPotion {
}

// org.bukkit.event.server.ServerLoadEvent
declare interface ServerLoadEvent extends ServerEvent {
    getType(): LoadType;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.scoreboard.Scoreboard
declare interface Scoreboard {
    getEntries(): Set;
    getPlayers(): Set;
    getTeam(s: string): Team;
    getTeams(): Set;
    clearSlot(displaySlot: DisplaySlot): void;
    registerNewTeam(s: string): Team;
    getObjectivesByCriteria(s: string): Set;
    registerNewObjective(s: string, s: string): Objective;
    registerNewObjective(s: string, s: string, s: string): Objective;
    registerNewObjective(s: string, s: string, s: string, renderType: RenderType): Objective;
    getObjective(s: string): Objective;
    getObjective(displaySlot: DisplaySlot): Objective;
    getObjectives(): Set;
    getScores(s: string): Set;
    getScores(offlinePlayer: OfflinePlayer): Set;
    resetScores(offlinePlayer: OfflinePlayer): void;
    resetScores(s: string): void;
    getPlayerTeam(offlinePlayer: OfflinePlayer): Team;
    getEntryTeam(s: string): Team;
}

// org.bukkit.material.Button
declare interface Button extends SimpleAttachableMaterialData, Redstone {
    setFacingDirection(blockFace: BlockFace): void;
    getAttachedFace(): BlockFace;
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.event.player.PlayerBucketEvent
declare interface PlayerBucketEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getBlockFace(): BlockFace;
    setItemStack(itemStack: ItemStack): void;
    setCancelled(b: boolean): void;
    getBlock(): Block;
    getItemStack(): ItemStack;
    getBucket(): Material;
    getBlockClicked(): Block;
}

// org.bukkit.block.data.Levelled
declare interface Levelled extends BlockData {
    setLevel(i: number): void;
    getLevel(): number;
    getMaximumLevel(): number;
}

// org.bukkit.block.data.type.EndPortalFrame
declare interface EndPortalFrame extends Directional {
    hasEye(): boolean;
    setEye(b: boolean): void;
}

// org.bukkit.inventory.CampfireRecipe
declare interface CampfireRecipe extends CookingRecipe {
}

// org.bukkit.configuration.file.YamlConstructor
declare interface YamlConstructor extends SafeConstructor {
}

// org.bukkit.entity.Donkey
declare interface Donkey extends ChestedHorse {
}

// org.bukkit.event.block.BlockDispenseEvent
declare interface BlockDispenseEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
    getVelocity(): Vector;
    setVelocity(vector: Vector): void;
}

// org.bukkit.block.data.type.TurtleEgg
declare interface TurtleEgg extends BlockData {
    getMaximumHatch(): number;
    setHatch(i: number): void;
    getHatch(): number;
    getEggs(): number;
    setEggs(i: number): void;
    getMinimumEggs(): number;
    getMaximumEggs(): number;
}

// org.bukkit.plugin.PluginBase
declare interface PluginBase extends Plugin {
    getName(): string;
}

// org.bukkit.entity.TropicalFish
declare interface TropicalFish extends Fish {
    getPatternColor(): DyeColor;
    getBodyColor(): DyeColor;
    setBodyColor(dyeColor: DyeColor): void;
    setPatternColor(dyeColor: DyeColor): void;
    setPattern(pattern: Pattern): void;
    getPattern(): Pattern;
}

// org.bukkit.plugin.SimpleServicesManager
declare interface SimpleServicesManager extends ServicesManager {
    register(clazz: Class, object: any, plugin: Plugin, servicePriority: ServicePriority): void;
    load(clazz: Class): any;
    unregister(object: any): void;
    unregister(clazz: Class, object: any): void;
    unregisterAll(plugin: Plugin): void;
    getRegistration(clazz: Class): RegisteredServiceProvider;
    getRegistrations(clazz: Class): Collection;
    getRegistrations(clazz: Class): List;
    getRegistrations(plugin: Plugin): List;
    isProvidedFor(clazz: Class): boolean;
    getKnownServices(): Set;
    getKnownServices(): Collection;
}

// org.bukkit.structure.Palette
declare interface Palette {
    getBlocks(): List;
    getBlockCount(): number;
}

// org.bukkit.material.Sign
declare interface Sign extends MaterialData, Attachable {
    setFacingDirection(blockFace: BlockFace): void;
    isWallSign(): boolean;
    getFacing(): BlockFace;
    getAttachedFace(): BlockFace;
}

// org.bukkit.event.block.BlockDamageEvent
declare interface BlockDamageEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setInstaBreak(b: boolean): void;
    getHandlerList(): HandlerList;
    getInstaBreak(): boolean;
    getPlayer(): Player;
    getItemInHand(): ItemStack;
}

// org.bukkit.event.entity.FireworkExplodeEvent
declare interface FireworkExplodeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.entity.EnderDragonChangePhaseEvent
declare interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getCurrentPhase(): Phase;
    setNewPhase(phase: Phase): void;
    getNewPhase(): Phase;
}

// org.bukkit.entity.Egg
declare interface Egg extends ThrowableProjectile {
}

// org.bukkit.entity.Pose
declare enum Pose {
    STANDING,
    FALL_FLYING,
    SLEEPING,
    SWIMMING,
    SPIN_ATTACK,
    SNEAKING,
    LONG_JUMPING,
    DYING,
}

// org.bukkit.event.entity.EntityPickupItemEvent
declare interface EntityPickupItemEvent extends EntityEvent, Cancellable {
    getRemaining(): number;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getItem(): Item;
}

// org.bukkit.generator.LimitedRegion
declare interface LimitedRegion extends RegionAccessor {
    getBuffer(): number;
    getTileEntities(): List;
    isInRegion(location: Location): boolean;
    isInRegion(i: number, i: number, i: number): boolean;
}

// org.bukkit.util.permissions.CommandPermissions
declare interface CommandPermissions {
    registerPermissions(permission: Permission): Permission;
}

// org.bukkit.block.data.type.GlassPane
declare interface GlassPane extends MultipleFacing, Waterlogged {
}

// org.bukkit.plugin.messaging.Messenger
declare interface Messenger {
    isReservedChannel(s: string): boolean;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    registerOutgoingPluginChannel(plugin: Plugin, s: string): void;
    getOutgoingChannels(): Set;
    getOutgoingChannels(plugin: Plugin): Set;
    isRegistrationValid(pluginMessageListenerRegistration: PluginMessageListenerRegistration): boolean;
    dispatchIncomingMessage(player: Player, s: string, b: number): void;
    registerIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): PluginMessageListenerRegistration;
    isOutgoingChannelRegistered(plugin: Plugin, s: string): boolean;
    getIncomingChannels(): Set;
    getIncomingChannels(plugin: Plugin): Set;
    getIncomingChannelRegistrations(plugin: Plugin, s: string): Set;
    getIncomingChannelRegistrations(plugin: Plugin): Set;
    getIncomingChannelRegistrations(s: string): Set;
    isIncomingChannelRegistered(plugin: Plugin, s: string): boolean;
    MAX_MESSAGE_SIZE: number;
    MAX_CHANNEL_SIZE: number;
}

// org.bukkit.material.Redstone
declare interface Redstone {
    isPowered(): boolean;
}

// org.bukkit.block.Dropper
declare interface Dropper extends Container, Lootable {
    drop(): void;
}

// org.bukkit.material.TrapDoor
declare interface TrapDoor extends SimpleAttachableMaterialData, Openable {
    isOpen(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    getAttachedFace(): BlockFace;
    setOpen(b: boolean): void;
    setInverted(b: boolean): void;
    isInverted(): boolean;
}

// org.bukkit.entity.Marker
declare interface Marker extends Entity {
}

// org.bukkit.event.entity.EntityDamageByEntityEvent
declare interface EntityDamageByEntityEvent extends EntityDamageEvent {
    getDamager(): Entity;
}

// org.bukkit.event.entity.EntityDamageByBlockEvent
declare interface EntityDamageByBlockEvent extends EntityDamageEvent {
    getDamager(): Block;
}

// org.bukkit.GameMode
declare enum GameMode {
    CREATIVE,
    SURVIVAL,
    ADVENTURE,
    SPECTATOR,
}

// org.bukkit.block.data.type.Bell
declare interface Bell extends Directional, Powerable {
    setAttachment(attachment: Attachment): void;
    getAttachment(): Attachment;
}

// org.bukkit.entity.Flying
declare interface Flying extends Mob {
}

// org.bukkit.material.Colorable
declare interface Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

// org.bukkit.Color
declare interface Color extends ConfigurationSerializable {
    serialize(): Map;
    deserialize(map: Map): Color;
    asRGB(): number;
    getBlue(): number;
    fromRGB(i: number, i: number, i: number): Color;
    fromRGB(i: number): Color;
    mixColors(color: Color): Color;
    setGreen(i: number): Color;
    fromBGR(i: number): Color;
    fromBGR(i: number, i: number, i: number): Color;
    setRed(i: number): Color;
    getGreen(): number;
    setBlue(i: number): Color;
    asBGR(): number;
    mixDyes(dyeColor: DyeColor): Color;
    getRed(): number;
    WHITE: Color;
    SILVER: Color;
    GRAY: Color;
    BLACK: Color;
    RED: Color;
    MAROON: Color;
    YELLOW: Color;
    OLIVE: Color;
    LIME: Color;
    GREEN: Color;
    AQUA: Color;
    TEAL: Color;
    BLUE: Color;
    NAVY: Color;
    FUCHSIA: Color;
    PURPLE: Color;
    ORANGE: Color;
}

// org.bukkit.entity.Strider
declare interface Strider extends Steerable, Vehicle {
    isShivering(): boolean;
    setShivering(b: boolean): void;
}

// org.bukkit.event.entity.SlimeSplitEvent
declare interface SlimeSplitEvent extends EntityEvent, Cancellable {
    getCount(): number;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setCount(i: number): void;
}

// org.bukkit.event.player.PlayerPreLoginEvent
declare interface PlayerPreLoginEvent extends Event {
    getName(): string;
    getAddress(): InetAddress;
    getResult(): Result;
    setResult(result: Result): void;
    getUniqueId(): UUID;
    allow(): void;
    getHandlerList(): HandlerList;
    getKickMessage(): string;
    setKickMessage(s: string): void;
    disallow(result: Result, s: string): void;
}

// org.bukkit.event.player.PlayerBucketEmptyEvent
declare interface PlayerBucketEmptyEvent extends PlayerBucketEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.entity.Axolotl
declare interface Axolotl extends Animals {
    getVariant(): Variant;
    setVariant(variant: Variant): void;
    setPlayingDead(b: boolean): void;
    isPlayingDead(): boolean;
}

// org.bukkit.entity.Cat
declare interface Cat extends Tameable, Sittable {
    getCatType(): Type;
    setCollarColor(dyeColor: DyeColor): void;
    setCatType(type: Type): void;
    getCollarColor(): DyeColor;
}

// org.bukkit.util.io.BukkitObjectOutputStream
declare interface BukkitObjectOutputStream extends ObjectOutputStream {
}

// org.bukkit.conversations.BooleanPrompt
declare interface BooleanPrompt extends ValidatingPrompt {
}

// org.bukkit.block.data.type.BigDripleaf
declare interface BigDripleaf extends Dripleaf {
    setTilt(tilt: Tilt): void;
    getTilt(): Tilt;
}

// org.bukkit.event.vehicle.VehicleUpdateEvent
declare interface VehicleUpdateEvent extends VehicleEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.Repeater
declare interface Repeater extends Directional, Powerable {
    isLocked(): boolean;
    getDelay(): number;
    setDelay(i: number): void;
    getMaximumDelay(): number;
    getMinimumDelay(): number;
    setLocked(b: boolean): void;
}

// org.bukkit.Axis
declare enum Axis {
    X,
    Y,
    Z,
}

// org.bukkit.event.entity.PigZapEvent
declare interface PigZapEvent extends EntityTransformEvent, Cancellable {
    getLightning(): LightningStrike;
    getEntity(): Entity;
    getEntity(): Pig;
    getPigZombie(): PigZombie;
}

// org.bukkit.event.player.AsyncPlayerPreLoginEvent
declare interface AsyncPlayerPreLoginEvent extends Event {
    getName(): string;
    getAddress(): InetAddress;
    getResult(): Result;
    setResult(result: Result): void;
    getUniqueId(): UUID;
    allow(): void;
    getHandlerList(): HandlerList;
    getKickMessage(): string;
    getLoginResult(): Result;
    setKickMessage(s: string): void;
    setLoginResult(result: Result): void;
    disallow(result: Result, s: string): void;
    disallow(result: Result, s: string): void;
}

// org.bukkit.entity.ZombieVillager
declare interface ZombieVillager extends Zombie {
    getConversionPlayer(): OfflinePlayer;
    setConversionPlayer(offlinePlayer: OfflinePlayer): void;
    getConversionTime(): number;
    setConversionTime(i: number): void;
    isConverting(): boolean;
    getVillagerType(): Type;
    setVillagerType(type: Type): void;
    setVillagerProfession(profession: Profession): void;
    getVillagerProfession(): Profession;
}

// org.bukkit.event.entity.ExplosionPrimeEvent
declare interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRadius(): number;
    setRadius(f: number): void;
    getFire(): boolean;
    setFire(b: boolean): void;
}

// org.bukkit.conversations.NumericPrompt
declare interface NumericPrompt extends ValidatingPrompt {
}

// org.bukkit.entity.EnderSignal
declare interface EnderSignal extends Entity {
    setDespawnTimer(i: number): void;
    getTargetLocation(): Location;
    getDropItem(): boolean;
    setTargetLocation(location: Location): void;
    setDropItem(b: boolean): void;
    getDespawnTimer(): number;
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
}

// org.bukkit.event.block.BlockFormEvent
declare interface BlockFormEvent extends BlockGrowEvent {
}

// org.bukkit.BanEntry
declare interface BanEntry {
    save(): void;
    getTarget(): string;
    getSource(): string;
    setCreated(date: Date): void;
    getExpiration(): Date;
    getReason(): string;
    getCreated(): Date;
    setExpiration(date: Date): void;
    setSource(s: string): void;
    setReason(s: string): void;
}

// org.bukkit.event.world.EntitiesUnloadEvent
declare interface EntitiesUnloadEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getEntities(): List;
}

// org.bukkit.inventory.meta.FireworkMeta
declare interface FireworkMeta extends ItemMeta {
    clone(): FireworkMeta;
    clone(): ItemMeta;
    clone(): any;
    getEffects(): List;
    setPower(i: number): void;
    getPower(): number;
    addEffect(fireworkEffect: FireworkEffect): void;
    addEffects(iterable: Iterable): void;
    addEffects(fireworkEffect: FireworkEffect): void;
    getEffectsSize(): number;
    clearEffects(): void;
    hasEffects(): boolean;
    removeEffect(i: number): void;
}

// org.bukkit.block.structure.UsageMode
declare enum UsageMode {
    SAVE,
    LOAD,
    CORNER,
    DATA,
}

// org.bukkit.entity.ExperienceOrb
declare interface ExperienceOrb extends Entity {
    getExperience(): number;
    setExperience(i: number): void;
}

// org.bukkit.event.player.PlayerLocaleChangeEvent
declare interface PlayerLocaleChangeEvent extends PlayerEvent {
    getLocale(): string;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.player.AsyncPlayerChatEvent
declare interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
    getMessage(): string;
    setFormat(s: string): void;
    getFormat(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRecipients(): Set;
    setMessage(s: string): void;
}

// org.bukkit.material.Sandstone
declare interface Sandstone extends MaterialData {
    getType(): SandstoneType;
    setType(sandstoneType: SandstoneType): void;
}

// org.bukkit.entity.Firework
declare interface Firework extends Projectile {
    setFireworkMeta(fireworkMeta: FireworkMeta): void;
    detonate(): void;
    isShotAtAngle(): boolean;
    getFireworkMeta(): FireworkMeta;
    setShotAtAngle(b: boolean): void;
}

// org.bukkit.entity.Phantom
declare interface Phantom extends Flying {
    getSize(): number;
    setSize(i: number): void;
}

// org.bukkit.plugin.SimplePluginManager
declare interface SimplePluginManager extends PluginManager {
    getPermissions(): Set;
    getPermission(s: string): Permission;
    getPlugin(s: string): Plugin;
    getPlugins(): Plugin[];
    useTimings(b: boolean): void;
    useTimings(): boolean;
    getPermissionSubscriptions(s: string): Set;
    addPermission(permission: Permission): void;
    addPermission(permission: Permission, b: boolean): void;
    dirtyPermissibles(): void;
    isTransitiveDepend(pluginDescriptionFile: PluginDescriptionFile, pluginDescriptionFile: PluginDescriptionFile): boolean;
    loadPlugin(file: File): Plugin;
    enablePlugin(plugin: Plugin): void;
    disablePlugin(plugin: Plugin): void;
    subscribeToPermission(s: string, permissible: Permissible): void;
    subscribeToDefaultPerms(b: boolean, permissible: Permissible): void;
    getDefaultPermissions(b: boolean): Set;
    unsubscribeFromPermission(s: string, permissible: Permissible): void;
    unsubscribeFromDefaultPerms(b: boolean, permissible: Permissible): void;
    recalculatePermissionDefaults(permission: Permission): void;
    getDefaultPermSubscriptions(b: boolean): Set;
    callEvent(event: Event): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin, b: boolean): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin): void;
    loadPlugins(file: File): Plugin[];
    registerInterface(clazz: Class): void;
    registerEvents(listener: Listener, plugin: Plugin): void;
    disablePlugins(): void;
    removePermission(permission: Permission): void;
    removePermission(s: string): void;
    clearPlugins(): void;
    isPluginEnabled(s: string): boolean;
    isPluginEnabled(plugin: Plugin): boolean;
}

// org.bukkit.plugin.EventExecutor
declare interface EventExecutor {
    execute(listener: Listener, event: Event): void;
}

// eu.okaeri.poly.api.script.ScriptHelper
declare interface ScriptHelper {
    unregister(): void;
}

// org.bukkit.block.PistonMoveReaction
declare enum PistonMoveReaction {
    MOVE,
    BREAK,
    BLOCK,
    IGNORE,
    PUSH_ONLY,
}

// org.bukkit.event.entity.AreaEffectCloudApplyEvent
declare interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getAffectedEntities(): List;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.HandlerList
declare interface HandlerList {
    register(registeredListener: RegisteredListener): void;
    unregister(registeredListener: RegisteredListener): void;
    unregister(plugin: Plugin): void;
    unregister(listener: Listener): void;
    getRegisteredListeners(): RegisteredListener[];
    getRegisteredListeners(plugin: Plugin): ArrayList;
    getHandlerLists(): ArrayList;
    bakeAll(): void;
    unregisterAll(): void;
    unregisterAll(plugin: Plugin): void;
    unregisterAll(listener: Listener): void;
    bake(): void;
    registerAll(collection: Collection): void;
}

// org.bukkit.conversations.ConversationCanceller
declare interface ConversationCanceller extends Cloneable {
    clone(): any;
    clone(): ConversationCanceller;
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

// org.bukkit.block.data.type.Gate
declare interface Gate extends Directional, Openable, Powerable {
    setInWall(b: boolean): void;
    isInWall(): boolean;
}

// org.bukkit.material.DirectionalContainer
declare interface DirectionalContainer extends MaterialData, Directional {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
}

// org.bukkit.event.entity.FoodLevelChangeEvent
declare interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getFoodLevel(): number;
    setFoodLevel(i: number): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getItem(): ItemStack;
}

// org.bukkit.entity.Parrot
declare interface Parrot extends Tameable, Sittable {
    getVariant(): Variant;
    setVariant(variant: Variant): void;
}

// org.bukkit.entity.Cow
declare interface Cow extends Animals {
}

// org.bukkit.event.entity.EntityEnterBlockEvent
declare interface EntityEnterBlockEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlock(): Block;
}

// org.bukkit.event.entity.ProjectileLaunchEvent
declare interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
    getEntity(): Projectile;
    getEntity(): Entity;
}

// org.bukkit.event.player.PlayerChatTabCompleteEvent
declare interface PlayerChatTabCompleteEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getLastToken(): string;
    getTabCompletions(): Collection;
    getChatMessage(): string;
}

// org.bukkit.event.world.StructureGrowEvent
declare interface StructureGrowEvent extends WorldEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlocks(): List;
    getPlayer(): Player;
    getSpecies(): TreeType;
    isFromBonemeal(): boolean;
}

// org.bukkit.block.Conduit
declare interface Conduit extends TileState {
}

// org.bukkit.event.player.PlayerArmorStandManipulateEvent
declare interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
    getSlot(): EquipmentSlot;
    getPlayerItem(): ItemStack;
    getArmorStandItem(): ItemStack;
}

// org.bukkit.entity.IronGolem
declare interface IronGolem extends Golem {
    setPlayerCreated(b: boolean): void;
    isPlayerCreated(): boolean;
}

// org.bukkit.block.data.type.Fence
declare interface Fence extends MultipleFacing, Waterlogged {
}

// org.bukkit.util.noise.SimplexOctaveGenerator
declare interface SimplexOctaveGenerator extends OctaveGenerator {
    noise(d: number, d: number, d: number, d: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, d: number, d: number, d: number): number;
    getWScale(): number;
    setWScale(d: number): void;
}

// org.bukkit.event.server.PluginDisableEvent
declare interface PluginDisableEvent extends PluginEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.Door
declare interface Door extends Bisected, Directional, Openable, Powerable {
    getHinge(): Hinge;
    setHinge(hinge: Hinge): void;
}

// org.bukkit.Difficulty
declare enum Difficulty {
    PEACEFUL,
    EASY,
    NORMAL,
    HARD,
}

// org.bukkit.block.data.type.Cake
declare interface Cake extends BlockData {
    getBites(): number;
    getMaximumBites(): number;
    setBites(i: number): void;
}

// org.bukkit.entity.LlamaSpit
declare interface LlamaSpit extends Projectile {
}

// org.bukkit.enchantments.EnchantmentWrapper
declare interface EnchantmentWrapper extends Enchantment {
    getEnchantment(): Enchantment;
}

// org.bukkit.Vibration
declare interface Vibration {
    getOrigin(): Location;
    getArrivalTime(): number;
    getDestination(): Destination;
}

// org.bukkit.entity.minecart.RideableMinecart
declare interface RideableMinecart extends Minecart {
}

// org.bukkit.help.HelpMap
declare interface HelpMap {
    clear(): void;
    registerHelpTopicFactory(clazz: Class, helpTopicFactory: HelpTopicFactory): void;
    getHelpTopics(): Collection;
    getHelpTopic(s: string): HelpTopic;
    getIgnoredPlugins(): List;
    addTopic(helpTopic: HelpTopic): void;
}

// org.bukkit.inventory.BeaconInventory
declare interface BeaconInventory extends Inventory {
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
}

// org.bukkit.inventory.meta.LeatherArmorMeta
declare interface LeatherArmorMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): LeatherArmorMeta;
    getColor(): Color;
    setColor(color: Color): void;
}

// org.bukkit.util.noise.NoiseGenerator
declare interface NoiseGenerator {
    floor(d: number): number;
    noise(d: number, i: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, i: number, d: number, d: number): number;
    noise(d: number, i: number, d: number, d: number): number;
    noise(d: number, d: number, i: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, i: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, i: number, d: number, d: number, b: boolean): number;
    noise(d: number): number;
    noise(d: number, d: number): number;
    noise(d: number, d: number, d: number): number;
}

// org.bukkit.entity.Mob
declare interface Mob extends LivingEntity, Lootable {
    getTarget(): LivingEntity;
    setTarget(livingEntity: LivingEntity): void;
    isAware(): boolean;
    setAware(b: boolean): void;
}

// org.bukkit.Art
declare enum Art {
    KEBAB,
    AZTEC,
    ALBAN,
    AZTEC2,
    BOMB,
    PLANT,
    WASTELAND,
    POOL,
    COURBET,
    SEA,
    SUNSET,
    CREEBET,
    WANDERER,
    GRAHAM,
    MATCH,
    BUST,
    STAGE,
    VOID,
    SKULL_AND_ROSES,
    WITHER,
    FIGHTERS,
    POINTER,
    PIGSCENE,
    BURNING_SKULL,
    SKELETON,
    DONKEY_KONG,
}

// org.bukkit.entity.Boss
declare interface Boss extends Entity {
    getBossBar(): BossBar;
}

// org.bukkit.plugin.messaging.PluginChannelDirection
declare enum PluginChannelDirection {
    INCOMING,
    OUTGOING,
}

// org.bukkit.event.player.PlayerChangedMainHandEvent
declare interface PlayerChangedMainHandEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getMainHand(): MainHand;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.InventoryView
declare interface InventoryView {
    setProperty(property: Property, i: number): boolean;
    close(): void;
    getType(): InventoryType;
    getTopInventory(): Inventory;
    getPlayer(): HumanEntity;
    getInventory(i: number): Inventory;
    setItem(i: number, itemStack: ItemStack): void;
    getItem(i: number): ItemStack;
    getTitle(): string;
    getSlotType(i: number): SlotType;
    setCursor(itemStack: ItemStack): void;
    getCursor(): ItemStack;
    convertSlot(i: number): number;
    countSlots(): number;
    getBottomInventory(): Inventory;
    OUTSIDE: number;
}

// org.bukkit.event.block.BlockRedstoneEvent
declare interface BlockRedstoneEvent extends BlockEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getOldCurrent(): number;
    setNewCurrent(i: number): void;
    getNewCurrent(): number;
}

// org.bukkit.map.MapPalette
declare interface MapPalette {
    getColor(b: number): Color;
    resizeImage(image: Image): BufferedImage;
    imageToBytes(image: Image): number[];
    matchColor(color: Color): number;
    matchColor(i: number, i: number, i: number): number;
    TRANSPARENT: number;
    LIGHT_GREEN: number;
    LIGHT_BROWN: number;
    GRAY_1: number;
    RED: number;
    PALE_BLUE: number;
    GRAY_2: number;
    DARK_GREEN: number;
    WHITE: number;
    LIGHT_GRAY: number;
    BROWN: number;
    DARK_GRAY: number;
    BLUE: number;
    DARK_BROWN: number;
}

// org.bukkit.inventory.meta.Damageable
declare interface Damageable extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): Damageable;
    getDamage(): number;
    setDamage(i: number): void;
    hasDamage(): boolean;
}

// org.bukkit.block.data.type.Piston
declare interface Piston extends Directional {
    isExtended(): boolean;
    setExtended(b: boolean): void;
}

// org.bukkit.event.block.MoistureChangeEvent
declare interface MoistureChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getNewState(): BlockState;
    getHandlerList(): HandlerList;
}

// eu.okaeri.poly.api.script.ScriptService
declare interface ScriptService {
    load(name: string, source: string): ScriptHelper;
    exec(name: string, source: string): ScriptHelper;
    unload(name: string): boolean;
    eval(source: string): any;
    getDefaultBindings(scriptHelper: ScriptHelper): Map;
    listLoaded(): Set;
}

// org.bukkit.event.world.LootGenerateEvent
declare interface LootGenerateEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getEntity(): Entity;
    getLootTable(): LootTable;
    isPlugin(): boolean;
    getLootContext(): LootContext;
    setLoot(collection: Collection): void;
    getInventoryHolder(): InventoryHolder;
    getLoot(): List;
}

// org.bukkit.loot.LootTables
declare enum LootTables {
    EMPTY,
    ABANDONED_MINESHAFT,
    BURIED_TREASURE,
    DESERT_PYRAMID,
    END_CITY_TREASURE,
    IGLOO_CHEST,
    JUNGLE_TEMPLE,
    JUNGLE_TEMPLE_DISPENSER,
    NETHER_BRIDGE,
    PILLAGER_OUTPOST,
    BASTION_TREASURE,
    BASTION_OTHER,
    BASTION_BRIDGE,
    BASTION_HOGLIN_STABLE,
    RUINED_PORTAL,
    SHIPWRECK_MAP,
    SHIPWRECK_SUPPLY,
    SHIPWRECK_TREASURE,
    SIMPLE_DUNGEON,
    SPAWN_BONUS_CHEST,
    STRONGHOLD_CORRIDOR,
    STRONGHOLD_CROSSING,
    STRONGHOLD_LIBRARY,
    UNDERWATER_RUIN_BIG,
    UNDERWATER_RUIN_SMALL,
    VILLAGE_ARMORER,
    VILLAGE_BUTCHER,
    VILLAGE_CARTOGRAPHER,
    VILLAGE_DESERT_HOUSE,
    VILLAGE_FISHER,
    VILLAGE_FLETCHER,
    VILLAGE_MASON,
    VILLAGE_PLAINS_HOUSE,
    VILLAGE_SAVANNA_HOUSE,
    VILLAGE_SHEPHERD,
    VILLAGE_SNOWY_HOUSE,
    VILLAGE_TAIGA_HOUSE,
    VILLAGE_TANNERY,
    VILLAGE_TEMPLE,
    VILLAGE_TOOLSMITH,
    VILLAGE_WEAPONSMITH,
    WOODLAND_MANSION,
    ARMOR_STAND,
    AXOLOTL,
    BAT,
    BEE,
    BLAZE,
    CAT,
    CAVE_SPIDER,
    CHICKEN,
    COD,
    COW,
    CREEPER,
    DOLPHIN,
    DONKEY,
    DROWNED,
    ELDER_GUARDIAN,
    ENDER_DRAGON,
    ENDERMAN,
    ENDERMITE,
    EVOKER,
    FOX,
    GHAST,
    GIANT,
    GLOW_SQUID,
    GOAT,
    GUARDIAN,
    HOGLIN,
    HORSE,
    HUSK,
    ILLUSIONER,
    IRON_GOLEM,
    LLAMA,
    MAGMA_CUBE,
    MOOSHROOM,
    MULE,
    OCELOT,
    PANDA,
    PARROT,
    PHANTOM,
    PIG,
    PIGLIN,
    PIGLIN_BRUTE,
    PILLAGER,
    PLAYER,
    POLAR_BEAR,
    PUFFERFISH,
    RABBIT,
    RAVAGER,
    SALMON,
    SHULKER,
    SILVERFISH,
    SKELETON,
    SKELETON_HORSE,
    SLIME,
    SNOW_GOLEM,
    SPIDER,
    SQUID,
    STRAY,
    STRIDER,
    TRADER_LLAMA,
    TROPICAL_FISH,
    TURTLE,
    VEX,
    VILLAGER,
    VINDICATOR,
    WANDERING_TRADER,
    WITCH,
    WITHER,
    WITHER_SKELETON,
    WOLF,
    ZOGLIN,
    ZOMBIE,
    ZOMBIE_HORSE,
    ZOMBIE_VILLAGER,
    ZOMBIFIED_PIGLIN,
    ARMORER_GIFT,
    BUTCHER_GIFT,
    CARTOGRAPHER_GIFT,
    CAT_MORNING_GIFT,
    CLERIC_GIFT,
    FARMER_GIFT,
    FISHERMAN_GIFT,
    FISHING,
    FISHING_FISH,
    FISHING_JUNK,
    FISHING_TREASURE,
    FLETCHER_GIFT,
    LEATHERWORKER_GIFT,
    LIBRARIAN_GIFT,
    MASON_GIFT,
    SHEPHERD_GIFT,
    TOOLSMITH_GIFT,
    WEAPONSMITH_GIFT,
    PIGLIN_BARTERING,
    SHEEP,
    SHEEP_BLACK,
    SHEEP_BLUE,
    SHEEP_BROWN,
    SHEEP_CYAN,
    SHEEP_GRAY,
    SHEEP_GREEN,
    SHEEP_LIGHT_BLUE,
    SHEEP_LIGHT_GRAY,
    SHEEP_LIME,
    SHEEP_MAGENTA,
    SHEEP_ORANGE,
    SHEEP_PINK,
    SHEEP_PURPLE,
    SHEEP_RED,
    SHEEP_WHITE,
    SHEEP_YELLOW,
}

// org.bukkit.event.player.PlayerChannelEvent
declare interface PlayerChannelEvent extends PlayerEvent {
    getChannel(): string;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.configuration.Configuration
declare interface Configuration extends ConfigurationSection {
    options(): ConfigurationOptions;
    addDefault(s: string, object: any): void;
    getDefaults(): Configuration;
    setDefaults(configuration: Configuration): void;
    addDefaults(map: Map): void;
    addDefaults(configuration: Configuration): void;
}

// org.bukkit.entity.Creature
declare interface Creature extends Mob {
}

// org.bukkit.entity.EvokerFangs
declare interface EvokerFangs extends Entity {
    getOwner(): LivingEntity;
    setOwner(livingEntity: LivingEntity): void;
}

// org.bukkit.event.entity.EntityExplodeEvent
declare interface EntityExplodeEvent extends EntityEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getYield(): number;
    setYield(f: number): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    blockList(): List;
}

// org.bukkit.event.block.BlockReceiveGameEvent
declare interface BlockReceiveGameEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getEntity(): Entity;
    getEvent(): GameEvent;
}

// org.bukkit.block.data.type.LightningRod
declare interface LightningRod extends Directional, Powerable, Waterlogged {
}

// org.bukkit.material.Leaves
declare interface Leaves extends Wood {
    setDecayable(b: boolean): void;
    isDecaying(): boolean;
    setDecaying(b: boolean): void;
    isDecayable(): boolean;
}

// org.bukkit.entity.PigZombie
declare interface PigZombie extends Zombie {
    getConversionTime(): number;
    setConversionTime(i: number): void;
    isConverting(): boolean;
    isAngry(): boolean;
    setAngry(b: boolean): void;
    setAnger(i: number): void;
    getAnger(): number;
}

// org.bukkit.EntityEffect
declare enum EntityEffect {
    ARROW_PARTICLES,
    RABBIT_JUMP,
    HURT,
    DEATH,
    WOLF_SMOKE,
    WOLF_HEARTS,
    WOLF_SHAKE,
    SHEEP_EAT,
    IRON_GOLEM_ROSE,
    VILLAGER_HEART,
    VILLAGER_ANGRY,
    VILLAGER_HAPPY,
    WITCH_MAGIC,
    ZOMBIE_TRANSFORM,
    FIREWORK_EXPLODE,
    LOVE_HEARTS,
    SQUID_ROTATE,
    ENTITY_POOF,
    GUARDIAN_TARGET,
    SHIELD_BLOCK,
    SHIELD_BREAK,
    ARMOR_STAND_HIT,
    THORNS_HURT,
    IRON_GOLEM_SHEATH,
    TOTEM_RESURRECT,
    HURT_DROWN,
    HURT_EXPLOSION,
    DOLPHIN_FED,
    RAVAGER_STUNNED,
    CAT_TAME_FAIL,
    CAT_TAME_SUCCESS,
    VILLAGER_SPLASH,
    PLAYER_BAD_OMEN_RAID,
    HURT_BERRY_BUSH,
    FOX_CHEW,
    TELEPORT_ENDER,
    BREAK_EQUIPMENT_MAIN_HAND,
    BREAK_EQUIPMENT_OFF_HAND,
    BREAK_EQUIPMENT_HELMET,
    BREAK_EQUIPMENT_CHESTPLATE,
    BREAK_EQUIPMENT_LEGGINGS,
    BREAK_EQUIPMENT_BOOTS,
}

// org.bukkit.scoreboard.Score
declare interface Score {
    getEntry(): string;
    getScoreboard(): Scoreboard;
    getPlayer(): OfflinePlayer;
    getScore(): number;
    getObjective(): Objective;
    setScore(i: number): void;
    isScoreSet(): boolean;
}

// org.bukkit.inventory.CraftingInventory
declare interface CraftingInventory extends Inventory {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
    getRecipe(): Recipe;
    getMatrix(): ItemStack[];
    setMatrix(itemStack: ItemStack): void;
}

// org.bukkit.event.block.CauldronLevelChangeEvent
declare interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getReason(): ChangeReason;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getNewState(): BlockState;
    getHandlerList(): HandlerList;
    setNewLevel(i: number): void;
    getNewLevel(): number;
    getOldLevel(): number;
    getEntity(): Entity;
}

// org.bukkit.BlockChangeDelegate
declare interface BlockChangeDelegate {
    isEmpty(i: number, i: number, i: number): boolean;
    setBlockData(i: number, i: number, i: number, blockData: BlockData): boolean;
    getHeight(): number;
    getBlockData(i: number, i: number, i: number): BlockData;
}

// org.bukkit.event.player.PlayerUnleashEntityEvent
declare interface PlayerUnleashEntityEvent extends EntityUnleashEvent, Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getPlayer(): Player;
}

// org.bukkit.entity.MushroomCow
declare interface MushroomCow extends Cow {
    getVariant(): Variant;
    setVariant(variant: Variant): void;
}

// org.bukkit.event.inventory.InventoryType
declare enum InventoryType {
    CHEST,
    DISPENSER,
    DROPPER,
    FURNACE,
    WORKBENCH,
    CRAFTING,
    ENCHANTING,
    BREWING,
    PLAYER,
    CREATIVE,
    MERCHANT,
    ENDER_CHEST,
    ANVIL,
    SMITHING,
    BEACON,
    HOPPER,
    SHULKER_BOX,
    BARREL,
    BLAST_FURNACE,
    LECTERN,
    SMOKER,
    LOOM,
    CARTOGRAPHY,
    GRINDSTONE,
    STONECUTTER,
    COMPOSTER,
}

// org.bukkit.material.Diode
declare interface Diode extends MaterialData, Directional, Redstone {
    setFacingDirection(blockFace: BlockFace): void;
    getDelay(): number;
    setDelay(i: number): void;
    getFacing(): BlockFace;
    isPowered(): boolean;
}

// org.bukkit.inventory.InventoryHolder
declare interface InventoryHolder {
    getInventory(): Inventory;
}

// org.bukkit.event.vehicle.VehicleCreateEvent
declare interface VehicleCreateEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.permissions.Permission
declare interface Permission {
    getName(): string;
    getDefault(): PermissionDefault;
    setDefault(permissionDefault: PermissionDefault): void;
    getChildren(): Map;
    getDescription(): string;
    setDescription(s: string): void;
    getPermissibles(): Set;
    addParent(permission: Permission, b: boolean): void;
    addParent(s: string, b: boolean): Permission;
    loadPermissions(map: Map, s: string, permissionDefault: PermissionDefault): List;
    loadPermission(s: string, map: Map): Permission;
    loadPermission(s: string, map: Map, permissionDefault: PermissionDefault, list: List): Permission;
    recalculatePermissibles(): void;
    DEFAULT_PERMISSION: PermissionDefault;
}

// org.bukkit.entity.SmallFireball
declare interface SmallFireball extends SizedFireball {
}

// org.bukkit.event.block.BlockCanBuildEvent
declare interface BlockCanBuildEvent extends BlockEvent {
    getHandlers(): HandlerList;
    isBuildable(): boolean;
    getHandlerList(): HandlerList;
    setBuildable(b: boolean): void;
    getPlayer(): Player;
    getBlockData(): BlockData;
    getMaterial(): Material;
}

// org.bukkit.material.Torch
declare interface Torch extends SimpleAttachableMaterialData {
    setFacingDirection(blockFace: BlockFace): void;
    getAttachedFace(): BlockFace;
}

// org.bukkit.util.Vector
declare interface Vector extends Cloneable, ConfigurationSerializable {
    add(vector: Vector): Vector;
    length(): number;
    dot(vector: Vector): number;
    copy(vector: Vector): Vector;
    zero(): Vector;
    normalize(): Vector;
    distance(vector: Vector): number;
    divide(vector: Vector): Vector;
    multiply(vector: Vector): Vector;
    multiply(f: number): Vector;
    multiply(d: number): Vector;
    multiply(i: number): Vector;
    isNormalized(): boolean;
    serialize(): Map;
    deserialize(map: Map): Vector;
    subtract(vector: Vector): Vector;
    lengthSquared(): number;
    checkFinite(): void;
    distanceSquared(vector: Vector): number;
    getBlockX(): number;
    getY(): number;
    getBlockY(): number;
    setY(d: number): Vector;
    setY(i: number): Vector;
    setY(f: number): Vector;
    setZ(d: number): Vector;
    setZ(i: number): Vector;
    setZ(f: number): Vector;
    getBlockZ(): number;
    setX(d: number): Vector;
    setX(i: number): Vector;
    setX(f: number): Vector;
    getX(): number;
    getZ(): number;
    angle(vector: Vector): number;
    isInSphere(vector: Vector, d: number): boolean;
    midpoint(vector: Vector): Vector;
    toLocation(world: World): Location;
    toLocation(world: World, f: number, f: number): Location;
    rotateAroundX(d: number): Vector;
    rotateAroundZ(d: number): Vector;
    getMidpoint(vector: Vector): Vector;
    rotateAroundY(d: number): Vector;
    isInAABB(vector: Vector, vector: Vector): boolean;
    rotateAroundAxis(vector: Vector, d: number): Vector;
    getMinimum(vector: Vector, vector: Vector): Vector;
    crossProduct(vector: Vector): Vector;
    getCrossProduct(vector: Vector): Vector;
    getEpsilon(): number;
    toBlockVector(): BlockVector;
    getMaximum(vector: Vector, vector: Vector): Vector;
    getRandom(): Vector;
    rotateAroundNonUnitAxis(vector: Vector, d: number): Vector;
}

// org.bukkit.entity.MagmaCube
declare interface MagmaCube extends Slime {
}

// org.bukkit.event.player.PlayerRiptideEvent
declare interface PlayerRiptideEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getItem(): ItemStack;
}

// org.bukkit.event.player.PlayerEditBookEvent
declare interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
    getSlot(): number;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getPreviousBookMeta(): BookMeta;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setSigning(b: boolean): void;
    isSigning(): boolean;
    getNewBookMeta(): BookMeta;
    setNewBookMeta(bookMeta: BookMeta): void;
}

// org.bukkit.block.data.type.Lantern
declare interface Lantern extends Waterlogged {
    isHanging(): boolean;
    setHanging(b: boolean): void;
}

// org.bukkit.event.inventory.FurnaceExtractEvent
declare interface FurnaceExtractEvent extends BlockExpEvent {
    getPlayer(): Player;
    getItemAmount(): number;
    getItemType(): Material;
}

// org.bukkit.block.EnderChest
declare interface EnderChest extends TileState {
}

// org.bukkit.block.data.type.RedstoneWire
declare interface RedstoneWire extends AnaloguePowerable {
    getFace(blockFace: BlockFace): Connection;
    setFace(blockFace: BlockFace, connection: Connection): void;
    getAllowedFaces(): Set;
}

// org.bukkit.event.entity.VillagerCareerChangeEvent
declare interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getReason(): ChangeReason;
    isCancelled(): boolean;
    getProfession(): Profession;
    setProfession(profession: Profession): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.Rotatable
declare interface Rotatable extends BlockData {
    getRotation(): BlockFace;
    setRotation(blockFace: BlockFace): void;
}

// org.bukkit.event.server.PluginEvent
declare interface PluginEvent extends ServerEvent {
    getPlugin(): Plugin;
}

// org.bukkit.event.server.ServiceUnregisterEvent
declare interface ServiceUnregisterEvent extends ServiceEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// java.net.http.HttpClient
declare interface HttpClient {
    version(): Version;
    proxy(): Optional;
    executor(): Optional;
    connectTimeout(): Optional;
    newWebSocketBuilder(): Builder;
    newBuilder(): Builder;
    followRedirects(): Redirect;
    sslContext(): SSLContext;
    send(httpRequest: HttpRequest, bodyHandler: BodyHandler): HttpResponse;
    newHttpClient(): HttpClient;
    cookieHandler(): Optional;
    authenticator(): Optional;
    sendAsync(httpRequest: HttpRequest, bodyHandler: BodyHandler, pushPromiseHandler: PushPromiseHandler): CompletableFuture;
    sendAsync(httpRequest: HttpRequest, bodyHandler: BodyHandler): CompletableFuture;
    sslParameters(): SSLParameters;
}

// org.bukkit.generator.ChunkGenerator
declare interface ChunkGenerator {
    getDefaultPopulators(world: World): List;
    getFixedSpawnLocation(world: World, random: Random): Location;
    shouldGenerateNoise(): boolean;
    shouldGenerateSurface(): boolean;
    shouldGenerateBedrock(): boolean;
    shouldGenerateDecorations(): boolean;
    shouldGenerateStructures(): boolean;
    shouldGenerateCaves(): boolean;
    getDefaultBiomeProvider(worldInfo: WorldInfo): BiomeProvider;
    generateSurface(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    getBaseHeight(worldInfo: WorldInfo, random: Random, i: number, i: number, heightMap: HeightMap): number;
    generateNoise(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    shouldGenerateMobs(): boolean;
    generateBedrock(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    generateChunkData(world: World, random: Random, i: number, i: number, biomeGrid: BiomeGrid): ChunkData;
    generateCaves(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    isParallelCapable(): boolean;
    canSpawn(world: World, i: number, i: number): boolean;
}

// org.bukkit.Note
declare interface Note {
    getId(): number;
    natural(i: number, tone: Tone): Note;
    sharped(): Note;
    sharp(i: number, tone: Tone): Note;
    getOctave(): number;
    flat(i: number, tone: Tone): Note;
    getTone(): Tone;
    isSharped(): boolean;
    flattened(): Note;
}

// org.bukkit.block.Block
declare interface Block extends Metadatable {
    isEmpty(): boolean;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getState(): BlockState;
    getType(): Material;
    getData(): number;
    setType(material: Material, b: boolean): void;
    setType(material: Material): void;
    getChunk(): Chunk;
    getY(): number;
    getWorld(): World;
    getBiome(): Biome;
    getX(): number;
    getZ(): number;
    setBlockData(blockData: BlockData): void;
    setBlockData(blockData: BlockData, b: boolean): void;
    getBlockData(): BlockData;
    rayTrace(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    getHumidity(): number;
    getTemperature(): number;
    getLightLevel(): number;
    getRelative(blockFace: BlockFace, i: number): Block;
    getRelative(blockFace: BlockFace): Block;
    getRelative(i: number, i: number, i: number): Block;
    isBlockFacePowered(blockFace: BlockFace): boolean;
    applyBoneMeal(blockFace: BlockFace): boolean;
    getBreakSpeed(player: Player): number;
    getLightFromSky(): number;
    breakNaturally(itemStack: ItemStack): boolean;
    breakNaturally(): boolean;
    getDrops(itemStack: ItemStack): Collection;
    getDrops(itemStack: ItemStack, entity: Entity): Collection;
    getDrops(): Collection;
    isPreferredTool(itemStack: ItemStack): boolean;
    isPassable(): boolean;
    getBlockPower(blockFace: BlockFace): number;
    getBlockPower(): number;
    isBlockPowered(): boolean;
    isLiquid(): boolean;
    getFace(block: Block): BlockFace;
    getLightFromBlocks(): number;
    getBoundingBox(): BoundingBox;
    getCollisionShape(): VoxelShape;
    setBiome(biome: Biome): void;
    getPistonMoveReaction(): PistonMoveReaction;
    isBlockIndirectlyPowered(): boolean;
    isBlockFaceIndirectlyPowered(blockFace: BlockFace): boolean;
}

// org.bukkit.block.Skull
declare interface Skull extends TileState {
    getOwner(): string;
    setOwner(s: string): boolean;
    hasOwner(): boolean;
    setSkullType(skullType: SkullType): void;
    getRotation(): BlockFace;
    getOwningPlayer(): OfflinePlayer;
    setRotation(blockFace: BlockFace): void;
    getSkullType(): SkullType;
    setOwningPlayer(offlinePlayer: OfflinePlayer): void;
}

// org.bukkit.boss.BarColor
declare enum BarColor {
    PINK,
    BLUE,
    RED,
    GREEN,
    YELLOW,
    PURPLE,
    WHITE,
}

// org.bukkit.event.entity.EntityPlaceEvent
declare interface EntityPlaceEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getBlockFace(): BlockFace;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getPlayer(): Player;
    getBlock(): Block;
}

// org.bukkit.inventory.BlastingRecipe
declare interface BlastingRecipe extends CookingRecipe {
}

// org.bukkit.event.world.ChunkUnloadEvent
declare interface ChunkUnloadEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    isSaveChunk(): boolean;
    setSaveChunk(b: boolean): void;
}

// org.bukkit.block.banner.Pattern
declare interface Pattern extends ConfigurationSerializable {
    serialize(): Map;
    getColor(): DyeColor;
    getPattern(): PatternType;
}

// org.bukkit.block.data.type.CommandBlock
declare interface CommandBlock extends Directional {
    setConditional(b: boolean): void;
    isConditional(): boolean;
}

// org.bukkit.block.data.type.Slab
declare interface Slab extends Waterlogged {
    getType(): Type;
    setType(type: Type): void;
}

// org.bukkit.entity.Sittable
declare interface Sittable {
    isSitting(): boolean;
    setSitting(b: boolean): void;
}

// org.bukkit.event.entity.PlayerDeathEvent
declare interface PlayerDeathEvent extends EntityDeathEvent {
    setNewLevel(i: number): void;
    getNewLevel(): number;
    getKeepInventory(): boolean;
    getKeepLevel(): boolean;
    getNewTotalExp(): number;
    getDeathMessage(): string;
    getNewExp(): number;
    setKeepInventory(b: boolean): void;
    setNewTotalExp(i: number): void;
    setKeepLevel(b: boolean): void;
    setNewExp(i: number): void;
    setDeathMessage(s: string): void;
}

// org.bukkit.util.ChatPaginator
declare interface ChatPaginator {
    paginate(s: string, i: number, i: number, i: number): ChatPage;
    paginate(s: string, i: number): ChatPage;
    wordWrap(s: string, i: number): string[];
    GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH: number;
    AVERAGE_CHAT_PAGE_WIDTH: number;
    UNBOUNDED_PAGE_WIDTH: number;
    OPEN_CHAT_PAGE_HEIGHT: number;
    CLOSED_CHAT_PAGE_HEIGHT: number;
    UNBOUNDED_PAGE_HEIGHT: number;
}

// org.bukkit.entity.Witch
declare interface Witch extends Raider {
}

// org.bukkit.entity.EnderCrystal
declare interface EnderCrystal extends Entity {
    setBeamTarget(location: Location): void;
    getBeamTarget(): Location;
    isShowingBottom(): boolean;
    setShowingBottom(b: boolean): void;
}

// org.bukkit.Particle
declare enum Particle {
    EXPLOSION_NORMAL,
    EXPLOSION_LARGE,
    EXPLOSION_HUGE,
    FIREWORKS_SPARK,
    WATER_BUBBLE,
    WATER_SPLASH,
    WATER_WAKE,
    SUSPENDED,
    SUSPENDED_DEPTH,
    CRIT,
    CRIT_MAGIC,
    SMOKE_NORMAL,
    SMOKE_LARGE,
    SPELL,
    SPELL_INSTANT,
    SPELL_MOB,
    SPELL_MOB_AMBIENT,
    SPELL_WITCH,
    DRIP_WATER,
    DRIP_LAVA,
    VILLAGER_ANGRY,
    VILLAGER_HAPPY,
    TOWN_AURA,
    NOTE,
    PORTAL,
    ENCHANTMENT_TABLE,
    FLAME,
    LAVA,
    CLOUD,
    REDSTONE,
    SNOWBALL,
    SNOW_SHOVEL,
    SLIME,
    HEART,
    BARRIER,
    ITEM_CRACK,
    BLOCK_CRACK,
    BLOCK_DUST,
    WATER_DROP,
    MOB_APPEARANCE,
    DRAGON_BREATH,
    END_ROD,
    DAMAGE_INDICATOR,
    SWEEP_ATTACK,
    FALLING_DUST,
    TOTEM,
    SPIT,
    SQUID_INK,
    BUBBLE_POP,
    CURRENT_DOWN,
    BUBBLE_COLUMN_UP,
    NAUTILUS,
    DOLPHIN,
    SNEEZE,
    CAMPFIRE_COSY_SMOKE,
    CAMPFIRE_SIGNAL_SMOKE,
    COMPOSTER,
    FLASH,
    FALLING_LAVA,
    LANDING_LAVA,
    FALLING_WATER,
    DRIPPING_HONEY,
    FALLING_HONEY,
    LANDING_HONEY,
    FALLING_NECTAR,
    SOUL_FIRE_FLAME,
    ASH,
    CRIMSON_SPORE,
    WARPED_SPORE,
    SOUL,
    DRIPPING_OBSIDIAN_TEAR,
    FALLING_OBSIDIAN_TEAR,
    LANDING_OBSIDIAN_TEAR,
    REVERSE_PORTAL,
    WHITE_ASH,
    LIGHT,
    DUST_COLOR_TRANSITION,
    VIBRATION,
    FALLING_SPORE_BLOSSOM,
    SPORE_BLOSSOM_AIR,
    SMALL_FLAME,
    SNOWFLAKE,
    DRIPPING_DRIPSTONE_LAVA,
    FALLING_DRIPSTONE_LAVA,
    DRIPPING_DRIPSTONE_WATER,
    FALLING_DRIPSTONE_WATER,
    GLOW_SQUID_INK,
    GLOW,
    WAX_ON,
    WAX_OFF,
    ELECTRIC_SPARK,
    SCRAPE,
    LEGACY_BLOCK_CRACK,
    LEGACY_BLOCK_DUST,
    LEGACY_FALLING_DUST,
}

// org.bukkit.map.MapCanvas
declare interface MapCanvas {
    getMapView(): MapView;
    getPixel(i: number, i: number): number;
    getBasePixel(i: number, i: number): number;
    drawText(i: number, i: number, mapFont: MapFont, s: string): void;
    getCursors(): MapCursorCollection;
    setCursors(mapCursorCollection: MapCursorCollection): void;
    setPixel(i: number, i: number, b: number): void;
    drawImage(i: number, i: number, image: Image): void;
}

// org.bukkit.block.Biome
declare enum Biome {
    OCEAN,
    PLAINS,
    DESERT,
    MOUNTAINS,
    FOREST,
    TAIGA,
    SWAMP,
    RIVER,
    NETHER_WASTES,
    THE_END,
    FROZEN_OCEAN,
    FROZEN_RIVER,
    SNOWY_TUNDRA,
    SNOWY_MOUNTAINS,
    MUSHROOM_FIELDS,
    MUSHROOM_FIELD_SHORE,
    BEACH,
    DESERT_HILLS,
    WOODED_HILLS,
    TAIGA_HILLS,
    MOUNTAIN_EDGE,
    JUNGLE,
    JUNGLE_HILLS,
    JUNGLE_EDGE,
    DEEP_OCEAN,
    STONE_SHORE,
    SNOWY_BEACH,
    BIRCH_FOREST,
    BIRCH_FOREST_HILLS,
    DARK_FOREST,
    SNOWY_TAIGA,
    SNOWY_TAIGA_HILLS,
    GIANT_TREE_TAIGA,
    GIANT_TREE_TAIGA_HILLS,
    WOODED_MOUNTAINS,
    SAVANNA,
    SAVANNA_PLATEAU,
    BADLANDS,
    WOODED_BADLANDS_PLATEAU,
    BADLANDS_PLATEAU,
    SMALL_END_ISLANDS,
    END_MIDLANDS,
    END_HIGHLANDS,
    END_BARRENS,
    WARM_OCEAN,
    LUKEWARM_OCEAN,
    COLD_OCEAN,
    DEEP_WARM_OCEAN,
    DEEP_LUKEWARM_OCEAN,
    DEEP_COLD_OCEAN,
    DEEP_FROZEN_OCEAN,
    THE_VOID,
    SUNFLOWER_PLAINS,
    DESERT_LAKES,
    GRAVELLY_MOUNTAINS,
    FLOWER_FOREST,
    TAIGA_MOUNTAINS,
    SWAMP_HILLS,
    ICE_SPIKES,
    MODIFIED_JUNGLE,
    MODIFIED_JUNGLE_EDGE,
    TALL_BIRCH_FOREST,
    TALL_BIRCH_HILLS,
    DARK_FOREST_HILLS,
    SNOWY_TAIGA_MOUNTAINS,
    GIANT_SPRUCE_TAIGA,
    GIANT_SPRUCE_TAIGA_HILLS,
    MODIFIED_GRAVELLY_MOUNTAINS,
    SHATTERED_SAVANNA,
    SHATTERED_SAVANNA_PLATEAU,
    ERODED_BADLANDS,
    MODIFIED_WOODED_BADLANDS_PLATEAU,
    MODIFIED_BADLANDS_PLATEAU,
    BAMBOO_JUNGLE,
    BAMBOO_JUNGLE_HILLS,
    SOUL_SAND_VALLEY,
    CRIMSON_FOREST,
    WARPED_FOREST,
    BASALT_DELTAS,
    DRIPSTONE_CAVES,
    LUSH_CAVES,
    CUSTOM,
}

// org.bukkit.entity.Bat
declare interface Bat extends Ambient {
    setAwake(b: boolean): void;
    isAwake(): boolean;
}

// org.bukkit.entity.Illager
declare interface Illager extends Raider {
}

// org.bukkit.inventory.PlayerInventory
declare interface PlayerInventory extends Inventory {
    setItem(i: number, itemStack: ItemStack): void;
    setItem(equipmentSlot: EquipmentSlot, itemStack: ItemStack): void;
    getItem(equipmentSlot: EquipmentSlot): ItemStack;
    setChestplate(itemStack: ItemStack): void;
    getBoots(): ItemStack;
    getItemInHand(): ItemStack;
    setHelmet(itemStack: ItemStack): void;
    setLeggings(itemStack: ItemStack): void;
    setBoots(itemStack: ItemStack): void;
    setItemInHand(itemStack: ItemStack): void;
    getLeggings(): ItemStack;
    getHelmet(): ItemStack;
    getChestplate(): ItemStack;
    getHolder(): HumanEntity;
    getHolder(): InventoryHolder;
    getArmorContents(): ItemStack[];
    setArmorContents(itemStack: ItemStack): void;
    setItemInMainHand(itemStack: ItemStack): void;
    getItemInOffHand(): ItemStack;
    getItemInMainHand(): ItemStack;
    setItemInOffHand(itemStack: ItemStack): void;
    getExtraContents(): ItemStack[];
    setHeldItemSlot(i: number): void;
    setExtraContents(itemStack: ItemStack): void;
    getHeldItemSlot(): number;
}

// org.bukkit.entity.Painting
declare interface Painting extends Hanging {
    setArt(art: Art): boolean;
    setArt(art: Art, b: boolean): boolean;
    getArt(): Art;
}

// eu.okaeri.poly.api.bukkit.BukkitScriptHelper
declare interface BukkitScriptHelper extends ScriptHelper {
    listen(eventClass: Class, priority: EventPriority, consumer: Consumer): void;
    listen(eventClass: Class, priority: EventPriority, ignoreCancelled: boolean, consumer: Consumer): void;
    listen(eventClass: Class, consumer: Consumer): void;
    command(label: string, consumer: BiConsumer): void;
    getPlugin(): Plugin;
    runEvery(ticks: number, runnable: Runnable): void;
    runEveryAsync(ticks: number, runnable: Runnable): void;
    runLater(ticks: number, runnable: Runnable): void;
    runLaterAsync(ticks: number, runnable: Runnable): void;
    runNowAsync(runnable: Runnable): void;
    runNow(runnable: Runnable): void;
    listenChannel(name: string, pluginMessageListener: PluginMessageListener): void;
    getScriptTasks(): List;
    getScriptCommands(): List;
    registerOutgoingPluginChannel(name: string): void;
    getScriptChannelListeners(): List;
    getScriptEventListener(): Listener;
}

// org.bukkit.event.player.PlayerQuitEvent
declare interface PlayerQuitEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setQuitMessage(s: string): void;
    getQuitMessage(): string;
}

// org.bukkit.material.Stairs
declare interface Stairs extends MaterialData, Directional {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
    setInverted(b: boolean): void;
    isInverted(): boolean;
    getAscendingDirection(): BlockFace;
    getDescendingDirection(): BlockFace;
}

// org.bukkit.command.BlockCommandSender
declare interface BlockCommandSender extends CommandSender {
    getBlock(): Block;
}

// org.bukkit.event.entity.LingeringPotionSplashEvent
declare interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getAreaEffectCloud(): AreaEffectCloud;
}

// org.bukkit.event.entity.EntityPortalEvent
declare interface EntityPortalEvent extends EntityTeleportEvent {
    getSearchRadius(): number;
    setSearchRadius(i: number): void;
}

// org.bukkit.event.world.WorldInitEvent
declare interface WorldInitEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.TrapDoor
declare interface TrapDoor extends Bisected, Directional, Openable, Powerable, Waterlogged {
}

// org.bukkit.inventory.meta.AxolotlBucketMeta
declare interface AxolotlBucketMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): AxolotlBucketMeta;
    getVariant(): Variant;
    setVariant(variant: Variant): void;
    hasVariant(): boolean;
}

// org.bukkit.enchantments.Enchantment
declare interface Enchantment extends Keyed {
    values(): Enchantment[];
    getName(): string;
    getKey(): NamespacedKey;
    getByName(s: string): Enchantment;
    getByKey(namespacedKey: NamespacedKey): Enchantment;
    isTreasure(): boolean;
    conflictsWith(enchantment: Enchantment): boolean;
    getItemTarget(): EnchantmentTarget;
    isCursed(): boolean;
    canEnchantItem(itemStack: ItemStack): boolean;
    getMaxLevel(): number;
    getStartLevel(): number;
    stopAcceptingRegistrations(): void;
    registerEnchantment(enchantment: Enchantment): void;
    isAcceptingRegistrations(): boolean;
    PROTECTION_ENVIRONMENTAL: Enchantment;
    PROTECTION_FIRE: Enchantment;
    PROTECTION_FALL: Enchantment;
    PROTECTION_EXPLOSIONS: Enchantment;
    PROTECTION_PROJECTILE: Enchantment;
    OXYGEN: Enchantment;
    WATER_WORKER: Enchantment;
    THORNS: Enchantment;
    DEPTH_STRIDER: Enchantment;
    FROST_WALKER: Enchantment;
    BINDING_CURSE: Enchantment;
    DAMAGE_ALL: Enchantment;
    DAMAGE_UNDEAD: Enchantment;
    DAMAGE_ARTHROPODS: Enchantment;
    KNOCKBACK: Enchantment;
    FIRE_ASPECT: Enchantment;
    LOOT_BONUS_MOBS: Enchantment;
    SWEEPING_EDGE: Enchantment;
    DIG_SPEED: Enchantment;
    SILK_TOUCH: Enchantment;
    DURABILITY: Enchantment;
    LOOT_BONUS_BLOCKS: Enchantment;
    ARROW_DAMAGE: Enchantment;
    ARROW_KNOCKBACK: Enchantment;
    ARROW_FIRE: Enchantment;
    ARROW_INFINITE: Enchantment;
    LUCK: Enchantment;
    LURE: Enchantment;
    LOYALTY: Enchantment;
    IMPALING: Enchantment;
    RIPTIDE: Enchantment;
    CHANNELING: Enchantment;
    MULTISHOT: Enchantment;
    QUICK_CHARGE: Enchantment;
    PIERCING: Enchantment;
    MENDING: Enchantment;
    VANISHING_CURSE: Enchantment;
    SOUL_SPEED: Enchantment;
}

// org.bukkit.configuration.file.FileConfiguration
declare interface FileConfiguration extends MemoryConfiguration {
    load(reader: Reader): void;
    load(file: File): void;
    load(s: string): void;
    save(file: File): void;
    save(s: string): void;
    saveToString(): string;
    loadFromString(s: string): void;
}

// org.bukkit.event.entity.EntityPortalExitEvent
declare interface EntityPortalExitEvent extends EntityTeleportEvent {
    getBefore(): Vector;
    getAfter(): Vector;
    setAfter(vector: Vector): void;
}

// org.bukkit.material.Ladder
declare interface Ladder extends SimpleAttachableMaterialData {
    setFacingDirection(blockFace: BlockFace): void;
    getAttachedFace(): BlockFace;
}

// org.bukkit.event.player.PlayerPortalEvent
declare interface PlayerPortalEvent extends PlayerTeleportEvent {
    getSearchRadius(): number;
    setSearchRadius(i: number): void;
    setCanCreatePortal(b: boolean): void;
    setCreationRadius(i: number): void;
    getCreationRadius(): number;
    getCanCreatePortal(): boolean;
}

// org.bukkit.event.vehicle.VehicleBlockCollisionEvent
declare interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getBlock(): Block;
}

// org.bukkit.block.Bed
declare interface Bed extends TileState, Colorable {
}

// org.bukkit.entity.Squid
declare interface Squid extends WaterMob {
}

// org.bukkit.potion.PotionData
declare interface PotionData {
    getType(): PotionType;
    isExtended(): boolean;
    isUpgraded(): boolean;
}

// org.bukkit.Server
declare interface Server extends PluginMessageRecipient {
    shutdown(): void;
    getName(): string;
    getUnsafe(): UnsafeValues;
    getLogger(): Logger;
    getPort(): number;
    getMap(i: number): MapView;
    createMap(world: World): MapView;
    getVersion(): string;
    getTags(s: string, clazz: Class): Iterable;
    reload(): void;
    getTag(s: string, namespacedKey: NamespacedKey, clazz: Class): Tag;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getGenerateStructures(): boolean;
    isWhitelistEnforced(): boolean;
    setWhitelistEnforced(b: boolean): void;
    getWhitelistedPlayers(): Set;
    getUpdateFolderFile(): File;
    getConnectionThrottle(): number;
    getTicksPerAnimalSpawns(): number;
    getScoreboardManager(): ScoreboardManager;
    getTicksPerAmbientSpawns(): number;
    getMonsterSpawnLimit(): number;
    getStructureManager(): StructureManager;
    getTicksPerMonsterSpawns(): number;
    getWaterAmbientSpawnLimit(): number;
    getTicksPerWaterAmbientSpawns(): number;
    advancementIterator(): Iterator;
    getTicksPerWaterSpawns(): number;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getServicesManager(): ServicesManager;
    broadcastMessage(s: string): number;
    getPluginManager(): PluginManager;
    unloadWorld(s: string, b: boolean): boolean;
    unloadWorld(world: World, b: boolean): boolean;
    savePlayers(): void;
    reloadWhitelist(): void;
    hasWhitelist(): boolean;
    getScheduler(): BukkitScheduler;
    reloadData(): void;
    getAllowEnd(): boolean;
    getUpdateFolder(): string;
    matchPlayer(s: string): List;
    createWorld(worldCreator: WorldCreator): World;
    getAllowNether(): boolean;
    getMaxWorldSize(): number;
    setWhitelist(b: boolean): void;
    getWorlds(): List;
    createExplorerMap(world: World, location: Location, structureType: StructureType, i: number, b: boolean): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
    getPlayerExact(s: string): Player;
    getPluginCommand(s: string): PluginCommand;
    getWorldType(): string;
    getPlayer(uUID: UUID): Player;
    getPlayer(s: string): Player;
    getWorld(uUID: UUID): World;
    getWorld(s: string): World;
    getMaxPlayers(): number;
    getViewDistance(): number;
    getIp(): string;
    getBukkitVersion(): string;
    getOnlinePlayers(): Collection;
    getRecipesFor(itemStack: ItemStack): List;
    getCommandAliases(): Map;
    getSpawnRadius(): number;
    clearRecipes(): void;
    setSpawnRadius(i: number): void;
    getOnlineMode(): boolean;
    resetRecipes(): void;
    getRecipe(namespacedKey: NamespacedKey): Recipe;
    getAllowFlight(): boolean;
    isHardcore(): boolean;
    broadcast(s: string, s: string): number;
    getCraftingRecipe(itemStack: ItemStack, world: World): Recipe;
    getOfflinePlayer(uUID: UUID): OfflinePlayer;
    getOfflinePlayer(s: string): OfflinePlayer;
    getIPBans(): Set;
    unbanIP(s: string): void;
    getBannedPlayers(): Set;
    getBanList(type: Type): BanList;
    banIP(s: string): void;
    craftItem(itemStack: ItemStack, world: World, player: Player): ItemStack;
    addRecipe(recipe: Recipe): boolean;
    recipeIterator(): Iterator;
    dispatchCommand(commandSender: CommandSender, s: string): boolean;
    removeRecipe(namespacedKey: NamespacedKey): boolean;
    getAdvancement(namespacedKey: NamespacedKey): Advancement;
    createBlockData(material: Material): BlockData;
    createBlockData(material: Material, s: string): BlockData;
    createBlockData(s: string): BlockData;
    createBlockData(material: Material, consumer: Consumer): BlockData;
    getServerIcon(): CachedServerIcon;
    loadServerIcon(file: File): CachedServerIcon;
    loadServerIcon(bufferedImage: BufferedImage): CachedServerIcon;
    getOperators(): Set;
    getHelpMap(): HelpMap;
    getIdleTimeout(): number;
    getBossBars(): Iterator;
    getMessenger(): Messenger;
    createChunkData(world: World): ChunkData;
    getBossBar(namespacedKey: NamespacedKey): KeyedBossBar;
    getEntity(uUID: UUID): Entity;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number): Inventory;
    getItemFactory(): ItemFactory;
    isPrimaryThread(): boolean;
    setIdleTimeout(i: number): void;
    createBossBar(namespacedKey: NamespacedKey, s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): KeyedBossBar;
    createBossBar(s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): BossBar;
    getConsoleSender(): ConsoleCommandSender;
    getMotd(): string;
    getWorldContainer(): File;
    setDefaultGameMode(gameMode: GameMode): void;
    createMerchant(s: string): Merchant;
    getDefaultGameMode(): GameMode;
    getOfflinePlayers(): OfflinePlayer[];
    getWarningState(): WarningState;
    removeBossBar(namespacedKey: NamespacedKey): boolean;
    getShutdownMessage(): string;
    spigot(): Spigot;
    selectEntities(commandSender: CommandSender, s: string): List;
    getLootTable(namespacedKey: NamespacedKey): LootTable;
    BROADCAST_CHANNEL_ADMINISTRATIVE: string;
    BROADCAST_CHANNEL_USERS: string;
}

// org.bukkit.entity.Zombie
declare interface Zombie extends Monster, Ageable {
    getConversionTime(): number;
    setConversionTime(i: number): void;
    isConverting(): boolean;
    setVillager(b: boolean): void;
    isBaby(): boolean;
    isVillager(): boolean;
    setBaby(b: boolean): void;
    setVillagerProfession(profession: Profession): void;
    getVillagerProfession(): Profession;
}

// org.bukkit.command.MultipleCommandAlias
declare interface MultipleCommandAlias extends Command {
    getCommands(): Command[];
}

// org.bukkit.entity.Horse
declare interface Horse extends AbstractHorse {
    getColor(): Color;
    getInventory(): AbstractHorseInventory;
    getInventory(): HorseInventory;
    getInventory(): Inventory;
    setColor(color: Color): void;
    isCarryingChest(): boolean;
    setCarryingChest(b: boolean): void;
    setStyle(style: Style): void;
    getStyle(): Style;
}

// org.bukkit.material.Tripwire
declare interface Tripwire extends MaterialData {
    isObjectTriggering(): boolean;
    isActivated(): boolean;
    setActivated(b: boolean): void;
    setObjectTriggering(b: boolean): void;
}

// org.bukkit.configuration.MemorySection
declare interface MemorySection extends ConfigurationSection {
    get(s: string, object: any): any;
    get(s: string): any;
    getObject(s: string, clazz: Class): any;
    getObject(s: string, clazz: Class, object: any): any;
    getBoolean(s: string): boolean;
    getBoolean(s: string, b: boolean): boolean;
    getInt(s: string): number;
    getInt(s: string, i: number): number;
    getLong(s: string): number;
    getLong(s: string, l: number): number;
    getDouble(s: string, d: number): number;
    getDouble(s: string): number;
    getName(): string;
    contains(s: string, b: boolean): boolean;
    contains(s: string): boolean;
    getParent(): ConfigurationSection;
    set(s: string, object: any): void;
    getLocation(s: string): Location;
    getLocation(s: string, location: Location): Location;
    isSet(s: string): boolean;
    getRoot(): Configuration;
    getKeys(b: boolean): Set;
    getString(s: string): string;
    getString(s: string, s: string): string;
    isColor(s: string): boolean;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(s: string, offlinePlayer: OfflinePlayer): OfflinePlayer;
    getColor(s: string): Color;
    getColor(s: string, color: Color): Color;
    getValues(b: boolean): Map;
    isBoolean(s: string): boolean;
    getList(s: string): List;
    getList(s: string, list: List): List;
    addDefault(s: string, object: any): void;
    isInt(s: string): boolean;
    createSection(s: string, map: Map): ConfigurationSection;
    createSection(s: string): ConfigurationSection;
    isLong(s: string): boolean;
    isList(s: string): boolean;
    getIntegerList(s: string): List;
    getFloatList(s: string): List;
    getStringList(s: string): List;
    getCurrentPath(): string;
    isDouble(s: string): boolean;
    getBooleanList(s: string): List;
    getByteList(s: string): List;
    getCharacterList(s: string): List;
    getShortList(s: string): List;
    getDoubleList(s: string): List;
    getLongList(s: string): List;
    isString(s: string): boolean;
    getMapList(s: string): List;
    getVector(s: string, vector: Vector): Vector;
    getVector(s: string): Vector;
    getItemStack(s: string): ItemStack;
    getItemStack(s: string, itemStack: ItemStack): ItemStack;
    createPath(configurationSection: ConfigurationSection, s: string): string;
    createPath(configurationSection: ConfigurationSection, s: string, configurationSection: ConfigurationSection): string;
    isVector(s: string): boolean;
    getSerializable(s: string, clazz: Class, configurationSerializable: ConfigurationSerializable): ConfigurationSerializable;
    getSerializable(s: string, clazz: Class): ConfigurationSerializable;
    isItemStack(s: string): boolean;
    getDefaultSection(): ConfigurationSection;
    isLocation(s: string): boolean;
    isOfflinePlayer(s: string): boolean;
    isConfigurationSection(s: string): boolean;
    getConfigurationSection(s: string): ConfigurationSection;
}

// org.bukkit.event.player.PlayerInteractEvent
declare interface PlayerInteractEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setUseInteractedBlock(result: Result): void;
    getBlockFace(): BlockFace;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getHand(): EquipmentSlot;
    getItem(): ItemStack;
    getMaterial(): Material;
    getAction(): Action;
    isBlockInHand(): boolean;
    hasItem(): boolean;
    hasBlock(): boolean;
    useInteractedBlock(): Result;
    getClickedBlock(): Block;
    setUseItemInHand(result: Result): void;
    useItemInHand(): Result;
}

// org.bukkit.event.inventory.InventoryCreativeEvent
declare interface InventoryCreativeEvent extends InventoryClickEvent {
}

// org.bukkit.command.PluginCommand
declare interface PluginCommand extends Command, PluginIdentifiableCommand {
    getExecutor(): CommandExecutor;
    getPlugin(): Plugin;
    setTabCompleter(tabCompleter: TabCompleter): void;
    setExecutor(commandExecutor: CommandExecutor): void;
    getTabCompleter(): TabCompleter;
}

// org.bukkit.event.inventory.InventoryClickEvent
declare interface InventoryClickEvent extends InventoryInteractEvent {
    getSlot(): number;
    getHandlers(): HandlerList;
    getClickedInventory(): Inventory;
    getHandlerList(): HandlerList;
    getAction(): InventoryAction;
    isLeftClick(): boolean;
    getSlotType(): SlotType;
    setCursor(itemStack: ItemStack): void;
    getHotbarButton(): number;
    getCurrentItem(): ItemStack;
    setCurrentItem(itemStack: ItemStack): void;
    isRightClick(): boolean;
    isShiftClick(): boolean;
    getRawSlot(): number;
    getCursor(): ItemStack;
    getClick(): ClickType;
}

// org.bukkit.block.Barrel
declare interface Barrel extends Container, Lootable, Lidded {
}

// org.bukkit.plugin.PluginAwareness
declare interface PluginAwareness {
}

// org.bukkit.SkullType
declare enum SkullType {
    SKELETON,
    WITHER,
    ZOMBIE,
    PLAYER,
    CREEPER,
    DRAGON,
}

// org.bukkit.event.server.RemoteServerCommandEvent
declare interface RemoteServerCommandEvent extends ServerCommandEvent {
}

// org.bukkit.permissions.PermissionDefault
declare enum PermissionDefault {
    TRUE,
    FALSE,
    OP,
    NOT_OP,
}

// org.bukkit.metadata.LazyMetadataValue
declare interface LazyMetadataValue extends MetadataValueAdapter {
    value(): any;
    invalidate(): void;
}

// org.bukkit.configuration.InvalidConfigurationException
declare interface InvalidConfigurationException extends Exception {
}

// org.bukkit.potion.PotionType
declare enum PotionType {
    UNCRAFTABLE,
    WATER,
    MUNDANE,
    THICK,
    AWKWARD,
    NIGHT_VISION,
    INVISIBILITY,
    JUMP,
    FIRE_RESISTANCE,
    SPEED,
    SLOWNESS,
    WATER_BREATHING,
    INSTANT_HEAL,
    INSTANT_DAMAGE,
    POISON,
    REGEN,
    STRENGTH,
    WEAKNESS,
    LUCK,
    TURTLE_MASTER,
    SLOW_FALLING,
}

// org.bukkit.entity.DragonFireball
declare interface DragonFireball extends Fireball {
}

// org.bukkit.entity.Creeper
declare interface Creeper extends Monster {
    explode(): void;
    ignite(): void;
    setFuseTicks(i: number): void;
    getMaxFuseTicks(): number;
    setMaxFuseTicks(i: number): void;
    getFuseTicks(): number;
    setExplosionRadius(i: number): void;
    getExplosionRadius(): number;
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.event.server.ServerCommandEvent
declare interface ServerCommandEvent extends ServerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setCommand(s: string): void;
    getCommand(): string;
    getSender(): CommandSender;
}

// org.bukkit.event.player.PlayerAnimationEvent
declare interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getAnimationType(): PlayerAnimationType;
}

// org.bukkit.util.io.Wrapper
declare interface Wrapper extends Serializable {
}

// org.bukkit.inventory.EquipmentSlot
declare enum EquipmentSlot {
    HAND,
    OFF_HAND,
    FEET,
    LEGS,
    CHEST,
    HEAD,
}

// org.bukkit.conversations.PluginNameConversationPrefix
declare interface PluginNameConversationPrefix extends ConversationPrefix {
    getPrefix(conversationContext: ConversationContext): string;
}

// org.bukkit.entity.EnderDragon
declare interface EnderDragon extends ComplexLivingEntity, Boss {
    getDragonBattle(): DragonBattle;
    getPhase(): Phase;
    setPhase(phase: Phase): void;
    getDeathAnimationTicks(): number;
}

// org.bukkit.entity.Stray
declare interface Stray extends AbstractSkeleton {
}

// org.bukkit.event.inventory.ClickType
declare enum ClickType {
    LEFT,
    SHIFT_LEFT,
    RIGHT,
    SHIFT_RIGHT,
    WINDOW_BORDER_LEFT,
    WINDOW_BORDER_RIGHT,
    MIDDLE,
    NUMBER_KEY,
    DOUBLE_CLICK,
    DROP,
    CONTROL_DROP,
    CREATIVE,
    SWAP_OFFHAND,
    UNKNOWN,
}

// org.bukkit.entity.Sheep
declare interface Sheep extends Animals, Colorable {
    setSheared(b: boolean): void;
    isSheared(): boolean;
}

// org.bukkit.block.data.type.Sapling
declare interface Sapling extends BlockData {
    getStage(): number;
    setStage(i: number): void;
    getMaximumStage(): number;
}

// org.bukkit.event.entity.BatToggleSleepEvent
declare interface BatToggleSleepEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    isAwake(): boolean;
}

// org.bukkit.configuration.file.FileConfigurationOptions
declare interface FileConfigurationOptions extends MemoryConfigurationOptions {
    header(): string;
    header(s: string): FileConfigurationOptions;
    copyHeader(b: boolean): FileConfigurationOptions;
    copyHeader(): boolean;
}

// org.bukkit.conversations.Conversation
declare interface Conversation {
    begin(): void;
    getContext(): ConversationContext;
    getState(): ConversationState;
    getPrefix(): ConversationPrefix;
    acceptInput(s: string): void;
    getForWhom(): Conversable;
    isLocalEchoEnabled(): boolean;
    outputNextPrompt(): void;
    abandon(): void;
    abandon(conversationAbandonedEvent: ConversationAbandonedEvent): void;
    isModal(): boolean;
    getCancellers(): List;
    removeConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): void;
    addConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): void;
    setLocalEchoEnabled(b: boolean): void;
}

// org.bukkit.attribute.AttributeModifier
declare interface AttributeModifier extends ConfigurationSerializable {
    getName(): string;
    getSlot(): EquipmentSlot;
    getUniqueId(): UUID;
    serialize(): Map;
    deserialize(map: Map): AttributeModifier;
    getAmount(): number;
    getOperation(): Operation;
}

// org.bukkit.event.vehicle.VehicleDamageEvent
declare interface VehicleDamageEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getDamage(): number;
    setDamage(d: number): void;
    getAttacker(): Entity;
}

// org.bukkit.attribute.AttributeInstance
declare interface AttributeInstance {
    getModifiers(): Collection;
    getValue(): number;
    getDefaultValue(): number;
    getAttribute(): Attribute;
    setBaseValue(d: number): void;
    removeModifier(attributeModifier: AttributeModifier): void;
    addModifier(attributeModifier: AttributeModifier): void;
    getBaseValue(): number;
}

// org.bukkit.loot.Lootable
declare interface Lootable {
    getLootTable(): LootTable;
    getSeed(): number;
    setLootTable(lootTable: LootTable): void;
    setSeed(l: number): void;
}

// org.bukkit.entity.Vehicle
declare interface Vehicle extends Entity {
    getVelocity(): Vector;
    setVelocity(vector: Vector): void;
}

// org.bukkit.permissions.ServerOperator
declare interface ServerOperator {
    setOp(b: boolean): void;
    isOp(): boolean;
}

// org.bukkit.scoreboard.RenderType
declare enum RenderType {
    INTEGER,
    HEARTS,
}

// org.bukkit.event.player.PlayerItemBreakEvent
declare interface PlayerItemBreakEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getBrokenItem(): ItemStack;
}

// org.bukkit.help.HelpTopicFactory
declare interface HelpTopicFactory {
    createTopic(command: Command): HelpTopic;
}

// org.bukkit.projectiles.ProjectileSource
declare interface ProjectileSource {
    launchProjectile(clazz: Class): Projectile;
    launchProjectile(clazz: Class, vector: Vector): Projectile;
}

// org.bukkit.entity.LargeFireball
declare interface LargeFireball extends SizedFireball {
}

// org.bukkit.metadata.MetadataStoreBase
declare interface MetadataStoreBase {
    invalidateAll(plugin: Plugin): void;
    getMetadata(object: any, s: string): List;
    hasMetadata(object: any, s: string): boolean;
    removeMetadata(object: any, s: string, plugin: Plugin): void;
    setMetadata(object: any, s: string, metadataValue: MetadataValue): void;
}

// org.bukkit.generator.BlockPopulator
declare interface BlockPopulator {
    populate(world: World, random: Random, chunk: Chunk): void;
    populate(worldInfo: WorldInfo, random: Random, i: number, i: number, limitedRegion: LimitedRegion): void;
}

// org.bukkit.event.player.PlayerEggThrowEvent
declare interface PlayerEggThrowEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getEgg(): Egg;
    setNumHatches(b: number): void;
    isHatching(): boolean;
    getHatchingType(): EntityType;
    getNumHatches(): number;
    setHatchingType(entityType: EntityType): void;
    setHatching(b: boolean): void;
}

// org.bukkit.material.Vine
declare interface Vine extends MaterialData {
    isOnFace(blockFace: BlockFace): boolean;
    putOnFace(blockFace: BlockFace): void;
    removeFromFace(blockFace: BlockFace): void;
}

// org.bukkit.event.player.PlayerDropItemEvent
declare interface PlayerDropItemEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getItemDrop(): Item;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.command.ConsoleCommandSender
declare interface ConsoleCommandSender extends CommandSender, Conversable {
}

// org.bukkit.block.EnchantingTable
declare interface EnchantingTable extends TileState, Nameable {
}

// org.bukkit.entity.Hoglin
declare interface Hoglin extends Animals {
    setIsAbleToBeHunted(b: boolean): void;
    getConversionTime(): number;
    setConversionTime(i: number): void;
    isConverting(): boolean;
    isAbleToBeHunted(): boolean;
    setImmuneToZombification(b: boolean): void;
    isImmuneToZombification(): boolean;
}

// org.bukkit.block.data.type.Observer
declare interface Observer extends Directional, Powerable {
}

// org.bukkit.event.entity.EntityBreedEvent
declare interface EntityBreedEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getExperience(): number;
    setExperience(i: number): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBreeder(): LivingEntity;
    getBredWith(): ItemStack;
    getFather(): LivingEntity;
    getMother(): LivingEntity;
}

// org.bukkit.block.data.Rail
declare interface Rail extends Waterlogged {
    getShapes(): Set;
    setShape(shape: Shape): void;
    getShape(): Shape;
}

// org.bukkit.event.entity.EntityChangeBlockEvent
declare interface EntityChangeBlockEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getTo(): Material;
    getBlock(): Block;
    getBlockData(): BlockData;
}

// org.bukkit.event.entity.EntityShootBowEvent
declare interface EntityShootBowEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getHand(): EquipmentSlot;
    getForce(): number;
    shouldConsumeItem(): boolean;
    setProjectile(entity: Entity): void;
    setConsumeItem(b: boolean): void;
    getBow(): ItemStack;
    getProjectile(): Entity;
    getConsumable(): ItemStack;
}

// org.bukkit.entity.minecart.SpawnerMinecart
declare interface SpawnerMinecart extends Minecart {
}

// org.bukkit.material.Observer
declare interface Observer extends MaterialData, Directional, Redstone {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
    isPowered(): boolean;
}

// org.bukkit.entity.minecart.PoweredMinecart
declare interface PoweredMinecart extends Minecart {
    setFuel(i: number): void;
    getFuel(): number;
}

// org.bukkit.event.world.ChunkEvent
declare interface ChunkEvent extends WorldEvent {
    getChunk(): Chunk;
}

// org.bukkit.map.MinecraftFont
declare interface MinecraftFont extends MapFont {
    Font: MinecraftFont;
}

// org.bukkit.material.Mushroom
declare interface Mushroom extends MaterialData {
    getBlockTexture(): MushroomBlockTexture;
    getPaintedFaces(): Set;
    setFacePainted(blockFace: BlockFace, b: boolean): void;
    isStem(): boolean;
    setStem(): void;
    setBlockTexture(mushroomBlockTexture: MushroomBlockTexture): void;
    isFacePainted(blockFace: BlockFace): boolean;
}

// org.bukkit.scoreboard.DisplaySlot
declare enum DisplaySlot {
    BELOW_NAME,
    PLAYER_LIST,
    SIDEBAR,
}

// org.bukkit.block.data.type.Bamboo
declare interface Bamboo extends Ageable, Sapling {
    getLeaves(): Leaves;
    setLeaves(leaves: Leaves): void;
}

// org.bukkit.event.player.PlayerItemConsumeEvent
declare interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
}

// org.bukkit.plugin.IllegalPluginAccessException
declare interface IllegalPluginAccessException extends RuntimeException {
}

// org.bukkit.entity.memory.MemoryKey
declare interface MemoryKey extends Keyed {
    values(): Set;
    getKey(): NamespacedKey;
    getMemoryClass(): Class;
    getByKey(namespacedKey: NamespacedKey): MemoryKey;
    HOME: MemoryKey;
    POTENTIAL_JOB_SITE: MemoryKey;
    JOB_SITE: MemoryKey;
    MEETING_POINT: MemoryKey;
    GOLEM_DETECTED_RECENTLY: MemoryKey;
    LAST_SLEPT: MemoryKey;
    LAST_WOKEN: MemoryKey;
    LAST_WORKED_AT_POI: MemoryKey;
    UNIVERSAL_ANGER: MemoryKey;
    ANGRY_AT: MemoryKey;
    ADMIRING_ITEM: MemoryKey;
    ADMIRING_DISABLED: MemoryKey;
    HUNTED_RECENTLY: MemoryKey;
    PLAY_DEAD_TICKS: MemoryKey;
    TEMPTATION_COOLDOWN_TICKS: MemoryKey;
    IS_TEMPTED: MemoryKey;
    LONG_JUMP_COOLING_DOWN: MemoryKey;
    HAS_HUNTING_COOLDOWN: MemoryKey;
    RAM_COOLDOWN_TICKS: MemoryKey;
}

// org.bukkit.event.entity.EntityRegainHealthEvent
declare interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setAmount(d: number): void;
    getAmount(): number;
    getRegainReason(): RegainReason;
}

// org.bukkit.event.entity.EntityTeleportEvent
declare interface EntityTeleportEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getFrom(): Location;
    setFrom(location: Location): void;
    setTo(location: Location): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getTo(): Location;
}

// org.bukkit.persistence.PersistentDataAdapterContext
declare interface PersistentDataAdapterContext {
    newPersistentDataContainer(): PersistentDataContainer;
}

// org.bukkit.block.data.type.Dripleaf
declare interface Dripleaf extends Directional, Waterlogged {
}

// org.bukkit.block.Beacon
declare interface Beacon extends TileState, Lockable, Nameable {
    getEntitiesInRange(): Collection;
    getTier(): number;
    getSecondaryEffect(): PotionEffect;
    setPrimaryEffect(potionEffectType: PotionEffectType): void;
    setSecondaryEffect(potionEffectType: PotionEffectType): void;
    getPrimaryEffect(): PotionEffect;
}

// org.bukkit.plugin.PluginLoader
declare interface PluginLoader {
    loadPlugin(file: File): Plugin;
    enablePlugin(plugin: Plugin): void;
    disablePlugin(plugin: Plugin): void;
    createRegisteredListeners(listener: Listener, plugin: Plugin): Map;
    getPluginDescription(file: File): PluginDescriptionFile;
    getPluginFileFilters(): Pattern[];
}

// org.bukkit.Sound
declare enum Sound {
    AMBIENT_BASALT_DELTAS_ADDITIONS,
    AMBIENT_BASALT_DELTAS_LOOP,
    AMBIENT_BASALT_DELTAS_MOOD,
    AMBIENT_CAVE,
    AMBIENT_CRIMSON_FOREST_ADDITIONS,
    AMBIENT_CRIMSON_FOREST_LOOP,
    AMBIENT_CRIMSON_FOREST_MOOD,
    AMBIENT_NETHER_WASTES_ADDITIONS,
    AMBIENT_NETHER_WASTES_LOOP,
    AMBIENT_NETHER_WASTES_MOOD,
    AMBIENT_SOUL_SAND_VALLEY_ADDITIONS,
    AMBIENT_SOUL_SAND_VALLEY_LOOP,
    AMBIENT_SOUL_SAND_VALLEY_MOOD,
    AMBIENT_UNDERWATER_ENTER,
    AMBIENT_UNDERWATER_EXIT,
    AMBIENT_UNDERWATER_LOOP,
    AMBIENT_UNDERWATER_LOOP_ADDITIONS,
    AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE,
    AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE,
    AMBIENT_WARPED_FOREST_ADDITIONS,
    AMBIENT_WARPED_FOREST_LOOP,
    AMBIENT_WARPED_FOREST_MOOD,
    BLOCK_AMETHYST_BLOCK_BREAK,
    BLOCK_AMETHYST_BLOCK_CHIME,
    BLOCK_AMETHYST_BLOCK_FALL,
    BLOCK_AMETHYST_BLOCK_HIT,
    BLOCK_AMETHYST_BLOCK_PLACE,
    BLOCK_AMETHYST_BLOCK_STEP,
    BLOCK_AMETHYST_CLUSTER_BREAK,
    BLOCK_AMETHYST_CLUSTER_FALL,
    BLOCK_AMETHYST_CLUSTER_HIT,
    BLOCK_AMETHYST_CLUSTER_PLACE,
    BLOCK_AMETHYST_CLUSTER_STEP,
    BLOCK_ANCIENT_DEBRIS_BREAK,
    BLOCK_ANCIENT_DEBRIS_FALL,
    BLOCK_ANCIENT_DEBRIS_HIT,
    BLOCK_ANCIENT_DEBRIS_PLACE,
    BLOCK_ANCIENT_DEBRIS_STEP,
    BLOCK_ANVIL_BREAK,
    BLOCK_ANVIL_DESTROY,
    BLOCK_ANVIL_FALL,
    BLOCK_ANVIL_HIT,
    BLOCK_ANVIL_LAND,
    BLOCK_ANVIL_PLACE,
    BLOCK_ANVIL_STEP,
    BLOCK_ANVIL_USE,
    BLOCK_AZALEA_BREAK,
    BLOCK_AZALEA_FALL,
    BLOCK_AZALEA_HIT,
    BLOCK_AZALEA_LEAVES_BREAK,
    BLOCK_AZALEA_LEAVES_FALL,
    BLOCK_AZALEA_LEAVES_HIT,
    BLOCK_AZALEA_LEAVES_PLACE,
    BLOCK_AZALEA_LEAVES_STEP,
    BLOCK_AZALEA_PLACE,
    BLOCK_AZALEA_STEP,
    BLOCK_BAMBOO_BREAK,
    BLOCK_BAMBOO_FALL,
    BLOCK_BAMBOO_HIT,
    BLOCK_BAMBOO_PLACE,
    BLOCK_BAMBOO_SAPLING_BREAK,
    BLOCK_BAMBOO_SAPLING_HIT,
    BLOCK_BAMBOO_SAPLING_PLACE,
    BLOCK_BAMBOO_STEP,
    BLOCK_BARREL_CLOSE,
    BLOCK_BARREL_OPEN,
    BLOCK_BASALT_BREAK,
    BLOCK_BASALT_FALL,
    BLOCK_BASALT_HIT,
    BLOCK_BASALT_PLACE,
    BLOCK_BASALT_STEP,
    BLOCK_BEACON_ACTIVATE,
    BLOCK_BEACON_AMBIENT,
    BLOCK_BEACON_DEACTIVATE,
    BLOCK_BEACON_POWER_SELECT,
    BLOCK_BEEHIVE_DRIP,
    BLOCK_BEEHIVE_ENTER,
    BLOCK_BEEHIVE_EXIT,
    BLOCK_BEEHIVE_SHEAR,
    BLOCK_BEEHIVE_WORK,
    BLOCK_BELL_RESONATE,
    BLOCK_BELL_USE,
    BLOCK_BIG_DRIPLEAF_BREAK,
    BLOCK_BIG_DRIPLEAF_FALL,
    BLOCK_BIG_DRIPLEAF_HIT,
    BLOCK_BIG_DRIPLEAF_PLACE,
    BLOCK_BIG_DRIPLEAF_STEP,
    BLOCK_BIG_DRIPLEAF_TILT_DOWN,
    BLOCK_BIG_DRIPLEAF_TILT_UP,
    BLOCK_BLASTFURNACE_FIRE_CRACKLE,
    BLOCK_BONE_BLOCK_BREAK,
    BLOCK_BONE_BLOCK_FALL,
    BLOCK_BONE_BLOCK_HIT,
    BLOCK_BONE_BLOCK_PLACE,
    BLOCK_BONE_BLOCK_STEP,
    BLOCK_BREWING_STAND_BREW,
    BLOCK_BUBBLE_COLUMN_BUBBLE_POP,
    BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT,
    BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE,
    BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT,
    BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE,
    BLOCK_CAKE_ADD_CANDLE,
    BLOCK_CALCITE_BREAK,
    BLOCK_CALCITE_FALL,
    BLOCK_CALCITE_HIT,
    BLOCK_CALCITE_PLACE,
    BLOCK_CALCITE_STEP,
    BLOCK_CAMPFIRE_CRACKLE,
    BLOCK_CANDLE_AMBIENT,
    BLOCK_CANDLE_BREAK,
    BLOCK_CANDLE_EXTINGUISH,
    BLOCK_CANDLE_FALL,
    BLOCK_CANDLE_HIT,
    BLOCK_CANDLE_PLACE,
    BLOCK_CANDLE_STEP,
    BLOCK_CAVE_VINES_BREAK,
    BLOCK_CAVE_VINES_FALL,
    BLOCK_CAVE_VINES_HIT,
    BLOCK_CAVE_VINES_PICK_BERRIES,
    BLOCK_CAVE_VINES_PLACE,
    BLOCK_CAVE_VINES_STEP,
    BLOCK_CHAIN_BREAK,
    BLOCK_CHAIN_FALL,
    BLOCK_CHAIN_HIT,
    BLOCK_CHAIN_PLACE,
    BLOCK_CHAIN_STEP,
    BLOCK_CHEST_CLOSE,
    BLOCK_CHEST_LOCKED,
    BLOCK_CHEST_OPEN,
    BLOCK_CHORUS_FLOWER_DEATH,
    BLOCK_CHORUS_FLOWER_GROW,
    BLOCK_COMPARATOR_CLICK,
    BLOCK_COMPOSTER_EMPTY,
    BLOCK_COMPOSTER_FILL,
    BLOCK_COMPOSTER_FILL_SUCCESS,
    BLOCK_COMPOSTER_READY,
    BLOCK_CONDUIT_ACTIVATE,
    BLOCK_CONDUIT_AMBIENT,
    BLOCK_CONDUIT_AMBIENT_SHORT,
    BLOCK_CONDUIT_ATTACK_TARGET,
    BLOCK_CONDUIT_DEACTIVATE,
    BLOCK_COPPER_BREAK,
    BLOCK_COPPER_FALL,
    BLOCK_COPPER_HIT,
    BLOCK_COPPER_PLACE,
    BLOCK_COPPER_STEP,
    BLOCK_CORAL_BLOCK_BREAK,
    BLOCK_CORAL_BLOCK_FALL,
    BLOCK_CORAL_BLOCK_HIT,
    BLOCK_CORAL_BLOCK_PLACE,
    BLOCK_CORAL_BLOCK_STEP,
    BLOCK_CROP_BREAK,
    BLOCK_DEEPSLATE_BREAK,
    BLOCK_DEEPSLATE_BRICKS_BREAK,
    BLOCK_DEEPSLATE_BRICKS_FALL,
    BLOCK_DEEPSLATE_BRICKS_HIT,
    BLOCK_DEEPSLATE_BRICKS_PLACE,
    BLOCK_DEEPSLATE_BRICKS_STEP,
    BLOCK_DEEPSLATE_FALL,
    BLOCK_DEEPSLATE_HIT,
    BLOCK_DEEPSLATE_PLACE,
    BLOCK_DEEPSLATE_STEP,
    BLOCK_DEEPSLATE_TILES_BREAK,
    BLOCK_DEEPSLATE_TILES_FALL,
    BLOCK_DEEPSLATE_TILES_HIT,
    BLOCK_DEEPSLATE_TILES_PLACE,
    BLOCK_DEEPSLATE_TILES_STEP,
    BLOCK_DISPENSER_DISPENSE,
    BLOCK_DISPENSER_FAIL,
    BLOCK_DISPENSER_LAUNCH,
    BLOCK_DRIPSTONE_BLOCK_BREAK,
    BLOCK_DRIPSTONE_BLOCK_FALL,
    BLOCK_DRIPSTONE_BLOCK_HIT,
    BLOCK_DRIPSTONE_BLOCK_PLACE,
    BLOCK_DRIPSTONE_BLOCK_STEP,
    BLOCK_ENCHANTMENT_TABLE_USE,
    BLOCK_ENDER_CHEST_CLOSE,
    BLOCK_ENDER_CHEST_OPEN,
    BLOCK_END_GATEWAY_SPAWN,
    BLOCK_END_PORTAL_FRAME_FILL,
    BLOCK_END_PORTAL_SPAWN,
    BLOCK_FENCE_GATE_CLOSE,
    BLOCK_FENCE_GATE_OPEN,
    BLOCK_FIRE_AMBIENT,
    BLOCK_FIRE_EXTINGUISH,
    BLOCK_FLOWERING_AZALEA_BREAK,
    BLOCK_FLOWERING_AZALEA_FALL,
    BLOCK_FLOWERING_AZALEA_HIT,
    BLOCK_FLOWERING_AZALEA_PLACE,
    BLOCK_FLOWERING_AZALEA_STEP,
    BLOCK_FUNGUS_BREAK,
    BLOCK_FUNGUS_FALL,
    BLOCK_FUNGUS_HIT,
    BLOCK_FUNGUS_PLACE,
    BLOCK_FUNGUS_STEP,
    BLOCK_FURNACE_FIRE_CRACKLE,
    BLOCK_GILDED_BLACKSTONE_BREAK,
    BLOCK_GILDED_BLACKSTONE_FALL,
    BLOCK_GILDED_BLACKSTONE_HIT,
    BLOCK_GILDED_BLACKSTONE_PLACE,
    BLOCK_GILDED_BLACKSTONE_STEP,
    BLOCK_GLASS_BREAK,
    BLOCK_GLASS_FALL,
    BLOCK_GLASS_HIT,
    BLOCK_GLASS_PLACE,
    BLOCK_GLASS_STEP,
    BLOCK_GRASS_BREAK,
    BLOCK_GRASS_FALL,
    BLOCK_GRASS_HIT,
    BLOCK_GRASS_PLACE,
    BLOCK_GRASS_STEP,
    BLOCK_GRAVEL_BREAK,
    BLOCK_GRAVEL_FALL,
    BLOCK_GRAVEL_HIT,
    BLOCK_GRAVEL_PLACE,
    BLOCK_GRAVEL_STEP,
    BLOCK_GRINDSTONE_USE,
    BLOCK_HANGING_ROOTS_BREAK,
    BLOCK_HANGING_ROOTS_FALL,
    BLOCK_HANGING_ROOTS_HIT,
    BLOCK_HANGING_ROOTS_PLACE,
    BLOCK_HANGING_ROOTS_STEP,
    BLOCK_HONEY_BLOCK_BREAK,
    BLOCK_HONEY_BLOCK_FALL,
    BLOCK_HONEY_BLOCK_HIT,
    BLOCK_HONEY_BLOCK_PLACE,
    BLOCK_HONEY_BLOCK_SLIDE,
    BLOCK_HONEY_BLOCK_STEP,
    BLOCK_IRON_DOOR_CLOSE,
    BLOCK_IRON_DOOR_OPEN,
    BLOCK_IRON_TRAPDOOR_CLOSE,
    BLOCK_IRON_TRAPDOOR_OPEN,
    BLOCK_LADDER_BREAK,
    BLOCK_LADDER_FALL,
    BLOCK_LADDER_HIT,
    BLOCK_LADDER_PLACE,
    BLOCK_LADDER_STEP,
    BLOCK_LANTERN_BREAK,
    BLOCK_LANTERN_FALL,
    BLOCK_LANTERN_HIT,
    BLOCK_LANTERN_PLACE,
    BLOCK_LANTERN_STEP,
    BLOCK_LARGE_AMETHYST_BUD_BREAK,
    BLOCK_LARGE_AMETHYST_BUD_PLACE,
    BLOCK_LAVA_AMBIENT,
    BLOCK_LAVA_EXTINGUISH,
    BLOCK_LAVA_POP,
    BLOCK_LEVER_CLICK,
    BLOCK_LILY_PAD_PLACE,
    BLOCK_LODESTONE_BREAK,
    BLOCK_LODESTONE_FALL,
    BLOCK_LODESTONE_HIT,
    BLOCK_LODESTONE_PLACE,
    BLOCK_LODESTONE_STEP,
    BLOCK_MEDIUM_AMETHYST_BUD_BREAK,
    BLOCK_MEDIUM_AMETHYST_BUD_PLACE,
    BLOCK_METAL_BREAK,
    BLOCK_METAL_FALL,
    BLOCK_METAL_HIT,
    BLOCK_METAL_PLACE,
    BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF,
    BLOCK_METAL_PRESSURE_PLATE_CLICK_ON,
    BLOCK_METAL_STEP,
    BLOCK_MOSS_BREAK,
    BLOCK_MOSS_CARPET_BREAK,
    BLOCK_MOSS_CARPET_FALL,
    BLOCK_MOSS_CARPET_HIT,
    BLOCK_MOSS_CARPET_PLACE,
    BLOCK_MOSS_CARPET_STEP,
    BLOCK_MOSS_FALL,
    BLOCK_MOSS_HIT,
    BLOCK_MOSS_PLACE,
    BLOCK_MOSS_STEP,
    BLOCK_NETHERITE_BLOCK_BREAK,
    BLOCK_NETHERITE_BLOCK_FALL,
    BLOCK_NETHERITE_BLOCK_HIT,
    BLOCK_NETHERITE_BLOCK_PLACE,
    BLOCK_NETHERITE_BLOCK_STEP,
    BLOCK_NETHERRACK_BREAK,
    BLOCK_NETHERRACK_FALL,
    BLOCK_NETHERRACK_HIT,
    BLOCK_NETHERRACK_PLACE,
    BLOCK_NETHERRACK_STEP,
    BLOCK_NETHER_BRICKS_BREAK,
    BLOCK_NETHER_BRICKS_FALL,
    BLOCK_NETHER_BRICKS_HIT,
    BLOCK_NETHER_BRICKS_PLACE,
    BLOCK_NETHER_BRICKS_STEP,
    BLOCK_NETHER_GOLD_ORE_BREAK,
    BLOCK_NETHER_GOLD_ORE_FALL,
    BLOCK_NETHER_GOLD_ORE_HIT,
    BLOCK_NETHER_GOLD_ORE_PLACE,
    BLOCK_NETHER_GOLD_ORE_STEP,
    BLOCK_NETHER_ORE_BREAK,
    BLOCK_NETHER_ORE_FALL,
    BLOCK_NETHER_ORE_HIT,
    BLOCK_NETHER_ORE_PLACE,
    BLOCK_NETHER_ORE_STEP,
    BLOCK_NETHER_SPROUTS_BREAK,
    BLOCK_NETHER_SPROUTS_FALL,
    BLOCK_NETHER_SPROUTS_HIT,
    BLOCK_NETHER_SPROUTS_PLACE,
    BLOCK_NETHER_SPROUTS_STEP,
    BLOCK_NETHER_WART_BREAK,
    BLOCK_NOTE_BLOCK_BANJO,
    BLOCK_NOTE_BLOCK_BASEDRUM,
    BLOCK_NOTE_BLOCK_BASS,
    BLOCK_NOTE_BLOCK_BELL,
    BLOCK_NOTE_BLOCK_BIT,
    BLOCK_NOTE_BLOCK_CHIME,
    BLOCK_NOTE_BLOCK_COW_BELL,
    BLOCK_NOTE_BLOCK_DIDGERIDOO,
    BLOCK_NOTE_BLOCK_FLUTE,
    BLOCK_NOTE_BLOCK_GUITAR,
    BLOCK_NOTE_BLOCK_HARP,
    BLOCK_NOTE_BLOCK_HAT,
    BLOCK_NOTE_BLOCK_IRON_XYLOPHONE,
    BLOCK_NOTE_BLOCK_PLING,
    BLOCK_NOTE_BLOCK_SNARE,
    BLOCK_NOTE_BLOCK_XYLOPHONE,
    BLOCK_NYLIUM_BREAK,
    BLOCK_NYLIUM_FALL,
    BLOCK_NYLIUM_HIT,
    BLOCK_NYLIUM_PLACE,
    BLOCK_NYLIUM_STEP,
    BLOCK_PISTON_CONTRACT,
    BLOCK_PISTON_EXTEND,
    BLOCK_POINTED_DRIPSTONE_BREAK,
    BLOCK_POINTED_DRIPSTONE_DRIP_LAVA,
    BLOCK_POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON,
    BLOCK_POINTED_DRIPSTONE_DRIP_WATER,
    BLOCK_POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON,
    BLOCK_POINTED_DRIPSTONE_FALL,
    BLOCK_POINTED_DRIPSTONE_HIT,
    BLOCK_POINTED_DRIPSTONE_LAND,
    BLOCK_POINTED_DRIPSTONE_PLACE,
    BLOCK_POINTED_DRIPSTONE_STEP,
    BLOCK_POLISHED_DEEPSLATE_BREAK,
    BLOCK_POLISHED_DEEPSLATE_FALL,
    BLOCK_POLISHED_DEEPSLATE_HIT,
    BLOCK_POLISHED_DEEPSLATE_PLACE,
    BLOCK_POLISHED_DEEPSLATE_STEP,
    BLOCK_PORTAL_AMBIENT,
    BLOCK_PORTAL_TRAVEL,
    BLOCK_PORTAL_TRIGGER,
    BLOCK_POWDER_SNOW_BREAK,
    BLOCK_POWDER_SNOW_FALL,
    BLOCK_POWDER_SNOW_HIT,
    BLOCK_POWDER_SNOW_PLACE,
    BLOCK_POWDER_SNOW_STEP,
    BLOCK_PUMPKIN_CARVE,
    BLOCK_REDSTONE_TORCH_BURNOUT,
    BLOCK_RESPAWN_ANCHOR_AMBIENT,
    BLOCK_RESPAWN_ANCHOR_CHARGE,
    BLOCK_RESPAWN_ANCHOR_DEPLETE,
    BLOCK_RESPAWN_ANCHOR_SET_SPAWN,
    BLOCK_ROOTED_DIRT_BREAK,
    BLOCK_ROOTED_DIRT_FALL,
    BLOCK_ROOTED_DIRT_HIT,
    BLOCK_ROOTED_DIRT_PLACE,
    BLOCK_ROOTED_DIRT_STEP,
    BLOCK_ROOTS_BREAK,
    BLOCK_ROOTS_FALL,
    BLOCK_ROOTS_HIT,
    BLOCK_ROOTS_PLACE,
    BLOCK_ROOTS_STEP,
    BLOCK_SAND_BREAK,
    BLOCK_SAND_FALL,
    BLOCK_SAND_HIT,
    BLOCK_SAND_PLACE,
    BLOCK_SAND_STEP,
    BLOCK_SCAFFOLDING_BREAK,
    BLOCK_SCAFFOLDING_FALL,
    BLOCK_SCAFFOLDING_HIT,
    BLOCK_SCAFFOLDING_PLACE,
    BLOCK_SCAFFOLDING_STEP,
    BLOCK_SCULK_SENSOR_BREAK,
    BLOCK_SCULK_SENSOR_CLICKING,
    BLOCK_SCULK_SENSOR_CLICKING_STOP,
    BLOCK_SCULK_SENSOR_FALL,
    BLOCK_SCULK_SENSOR_HIT,
    BLOCK_SCULK_SENSOR_PLACE,
    BLOCK_SCULK_SENSOR_STEP,
    BLOCK_SHROOMLIGHT_BREAK,
    BLOCK_SHROOMLIGHT_FALL,
    BLOCK_SHROOMLIGHT_HIT,
    BLOCK_SHROOMLIGHT_PLACE,
    BLOCK_SHROOMLIGHT_STEP,
    BLOCK_SHULKER_BOX_CLOSE,
    BLOCK_SHULKER_BOX_OPEN,
    BLOCK_SLIME_BLOCK_BREAK,
    BLOCK_SLIME_BLOCK_FALL,
    BLOCK_SLIME_BLOCK_HIT,
    BLOCK_SLIME_BLOCK_PLACE,
    BLOCK_SLIME_BLOCK_STEP,
    BLOCK_SMALL_AMETHYST_BUD_BREAK,
    BLOCK_SMALL_AMETHYST_BUD_PLACE,
    BLOCK_SMALL_DRIPLEAF_BREAK,
    BLOCK_SMALL_DRIPLEAF_FALL,
    BLOCK_SMALL_DRIPLEAF_HIT,
    BLOCK_SMALL_DRIPLEAF_PLACE,
    BLOCK_SMALL_DRIPLEAF_STEP,
    BLOCK_SMITHING_TABLE_USE,
    BLOCK_SMOKER_SMOKE,
    BLOCK_SNOW_BREAK,
    BLOCK_SNOW_FALL,
    BLOCK_SNOW_HIT,
    BLOCK_SNOW_PLACE,
    BLOCK_SNOW_STEP,
    BLOCK_SOUL_SAND_BREAK,
    BLOCK_SOUL_SAND_FALL,
    BLOCK_SOUL_SAND_HIT,
    BLOCK_SOUL_SAND_PLACE,
    BLOCK_SOUL_SAND_STEP,
    BLOCK_SOUL_SOIL_BREAK,
    BLOCK_SOUL_SOIL_FALL,
    BLOCK_SOUL_SOIL_HIT,
    BLOCK_SOUL_SOIL_PLACE,
    BLOCK_SOUL_SOIL_STEP,
    BLOCK_SPORE_BLOSSOM_BREAK,
    BLOCK_SPORE_BLOSSOM_FALL,
    BLOCK_SPORE_BLOSSOM_HIT,
    BLOCK_SPORE_BLOSSOM_PLACE,
    BLOCK_SPORE_BLOSSOM_STEP,
    BLOCK_STEM_BREAK,
    BLOCK_STEM_FALL,
    BLOCK_STEM_HIT,
    BLOCK_STEM_PLACE,
    BLOCK_STEM_STEP,
    BLOCK_STONE_BREAK,
    BLOCK_STONE_BUTTON_CLICK_OFF,
    BLOCK_STONE_BUTTON_CLICK_ON,
    BLOCK_STONE_FALL,
    BLOCK_STONE_HIT,
    BLOCK_STONE_PLACE,
    BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF,
    BLOCK_STONE_PRESSURE_PLATE_CLICK_ON,
    BLOCK_STONE_STEP,
    BLOCK_SWEET_BERRY_BUSH_BREAK,
    BLOCK_SWEET_BERRY_BUSH_PICK_BERRIES,
    BLOCK_SWEET_BERRY_BUSH_PLACE,
    BLOCK_TRIPWIRE_ATTACH,
    BLOCK_TRIPWIRE_CLICK_OFF,
    BLOCK_TRIPWIRE_CLICK_ON,
    BLOCK_TRIPWIRE_DETACH,
    BLOCK_TUFF_BREAK,
    BLOCK_TUFF_FALL,
    BLOCK_TUFF_HIT,
    BLOCK_TUFF_PLACE,
    BLOCK_TUFF_STEP,
    BLOCK_VINE_BREAK,
    BLOCK_VINE_FALL,
    BLOCK_VINE_HIT,
    BLOCK_VINE_PLACE,
    BLOCK_VINE_STEP,
    BLOCK_WART_BLOCK_BREAK,
    BLOCK_WART_BLOCK_FALL,
    BLOCK_WART_BLOCK_HIT,
    BLOCK_WART_BLOCK_PLACE,
    BLOCK_WART_BLOCK_STEP,
    BLOCK_WATER_AMBIENT,
    BLOCK_WEEPING_VINES_BREAK,
    BLOCK_WEEPING_VINES_FALL,
    BLOCK_WEEPING_VINES_HIT,
    BLOCK_WEEPING_VINES_PLACE,
    BLOCK_WEEPING_VINES_STEP,
    BLOCK_WET_GRASS_BREAK,
    BLOCK_WET_GRASS_FALL,
    BLOCK_WET_GRASS_HIT,
    BLOCK_WET_GRASS_PLACE,
    BLOCK_WET_GRASS_STEP,
    BLOCK_WOODEN_BUTTON_CLICK_OFF,
    BLOCK_WOODEN_BUTTON_CLICK_ON,
    BLOCK_WOODEN_DOOR_CLOSE,
    BLOCK_WOODEN_DOOR_OPEN,
    BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF,
    BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON,
    BLOCK_WOODEN_TRAPDOOR_CLOSE,
    BLOCK_WOODEN_TRAPDOOR_OPEN,
    BLOCK_WOOD_BREAK,
    BLOCK_WOOD_FALL,
    BLOCK_WOOD_HIT,
    BLOCK_WOOD_PLACE,
    BLOCK_WOOD_STEP,
    BLOCK_WOOL_BREAK,
    BLOCK_WOOL_FALL,
    BLOCK_WOOL_HIT,
    BLOCK_WOOL_PLACE,
    BLOCK_WOOL_STEP,
    ENCHANT_THORNS_HIT,
    ENTITY_ARMOR_STAND_BREAK,
    ENTITY_ARMOR_STAND_FALL,
    ENTITY_ARMOR_STAND_HIT,
    ENTITY_ARMOR_STAND_PLACE,
    ENTITY_ARROW_HIT,
    ENTITY_ARROW_HIT_PLAYER,
    ENTITY_ARROW_SHOOT,
    ENTITY_AXOLOTL_ATTACK,
    ENTITY_AXOLOTL_DEATH,
    ENTITY_AXOLOTL_HURT,
    ENTITY_AXOLOTL_IDLE_AIR,
    ENTITY_AXOLOTL_IDLE_WATER,
    ENTITY_AXOLOTL_SPLASH,
    ENTITY_AXOLOTL_SWIM,
    ENTITY_BAT_AMBIENT,
    ENTITY_BAT_DEATH,
    ENTITY_BAT_HURT,
    ENTITY_BAT_LOOP,
    ENTITY_BAT_TAKEOFF,
    ENTITY_BEE_DEATH,
    ENTITY_BEE_HURT,
    ENTITY_BEE_LOOP,
    ENTITY_BEE_LOOP_AGGRESSIVE,
    ENTITY_BEE_POLLINATE,
    ENTITY_BEE_STING,
    ENTITY_BLAZE_AMBIENT,
    ENTITY_BLAZE_BURN,
    ENTITY_BLAZE_DEATH,
    ENTITY_BLAZE_HURT,
    ENTITY_BLAZE_SHOOT,
    ENTITY_BOAT_PADDLE_LAND,
    ENTITY_BOAT_PADDLE_WATER,
    ENTITY_CAT_AMBIENT,
    ENTITY_CAT_BEG_FOR_FOOD,
    ENTITY_CAT_DEATH,
    ENTITY_CAT_EAT,
    ENTITY_CAT_HISS,
    ENTITY_CAT_HURT,
    ENTITY_CAT_PURR,
    ENTITY_CAT_PURREOW,
    ENTITY_CAT_STRAY_AMBIENT,
    ENTITY_CHICKEN_AMBIENT,
    ENTITY_CHICKEN_DEATH,
    ENTITY_CHICKEN_EGG,
    ENTITY_CHICKEN_HURT,
    ENTITY_CHICKEN_STEP,
    ENTITY_COD_AMBIENT,
    ENTITY_COD_DEATH,
    ENTITY_COD_FLOP,
    ENTITY_COD_HURT,
    ENTITY_COW_AMBIENT,
    ENTITY_COW_DEATH,
    ENTITY_COW_HURT,
    ENTITY_COW_MILK,
    ENTITY_COW_STEP,
    ENTITY_CREEPER_DEATH,
    ENTITY_CREEPER_HURT,
    ENTITY_CREEPER_PRIMED,
    ENTITY_DOLPHIN_AMBIENT,
    ENTITY_DOLPHIN_AMBIENT_WATER,
    ENTITY_DOLPHIN_ATTACK,
    ENTITY_DOLPHIN_DEATH,
    ENTITY_DOLPHIN_EAT,
    ENTITY_DOLPHIN_HURT,
    ENTITY_DOLPHIN_JUMP,
    ENTITY_DOLPHIN_PLAY,
    ENTITY_DOLPHIN_SPLASH,
    ENTITY_DOLPHIN_SWIM,
    ENTITY_DONKEY_AMBIENT,
    ENTITY_DONKEY_ANGRY,
    ENTITY_DONKEY_CHEST,
    ENTITY_DONKEY_DEATH,
    ENTITY_DONKEY_EAT,
    ENTITY_DONKEY_HURT,
    ENTITY_DRAGON_FIREBALL_EXPLODE,
    ENTITY_DROWNED_AMBIENT,
    ENTITY_DROWNED_AMBIENT_WATER,
    ENTITY_DROWNED_DEATH,
    ENTITY_DROWNED_DEATH_WATER,
    ENTITY_DROWNED_HURT,
    ENTITY_DROWNED_HURT_WATER,
    ENTITY_DROWNED_SHOOT,
    ENTITY_DROWNED_STEP,
    ENTITY_DROWNED_SWIM,
    ENTITY_EGG_THROW,
    ENTITY_ELDER_GUARDIAN_AMBIENT,
    ENTITY_ELDER_GUARDIAN_AMBIENT_LAND,
    ENTITY_ELDER_GUARDIAN_CURSE,
    ENTITY_ELDER_GUARDIAN_DEATH,
    ENTITY_ELDER_GUARDIAN_DEATH_LAND,
    ENTITY_ELDER_GUARDIAN_FLOP,
    ENTITY_ELDER_GUARDIAN_HURT,
    ENTITY_ELDER_GUARDIAN_HURT_LAND,
    ENTITY_ENDERMAN_AMBIENT,
    ENTITY_ENDERMAN_DEATH,
    ENTITY_ENDERMAN_HURT,
    ENTITY_ENDERMAN_SCREAM,
    ENTITY_ENDERMAN_STARE,
    ENTITY_ENDERMAN_TELEPORT,
    ENTITY_ENDERMITE_AMBIENT,
    ENTITY_ENDERMITE_DEATH,
    ENTITY_ENDERMITE_HURT,
    ENTITY_ENDERMITE_STEP,
    ENTITY_ENDER_DRAGON_AMBIENT,
    ENTITY_ENDER_DRAGON_DEATH,
    ENTITY_ENDER_DRAGON_FLAP,
    ENTITY_ENDER_DRAGON_GROWL,
    ENTITY_ENDER_DRAGON_HURT,
    ENTITY_ENDER_DRAGON_SHOOT,
    ENTITY_ENDER_EYE_DEATH,
    ENTITY_ENDER_EYE_LAUNCH,
    ENTITY_ENDER_PEARL_THROW,
    ENTITY_EVOKER_AMBIENT,
    ENTITY_EVOKER_CAST_SPELL,
    ENTITY_EVOKER_CELEBRATE,
    ENTITY_EVOKER_DEATH,
    ENTITY_EVOKER_FANGS_ATTACK,
    ENTITY_EVOKER_HURT,
    ENTITY_EVOKER_PREPARE_ATTACK,
    ENTITY_EVOKER_PREPARE_SUMMON,
    ENTITY_EVOKER_PREPARE_WOLOLO,
    ENTITY_EXPERIENCE_BOTTLE_THROW,
    ENTITY_EXPERIENCE_ORB_PICKUP,
    ENTITY_FIREWORK_ROCKET_BLAST,
    ENTITY_FIREWORK_ROCKET_BLAST_FAR,
    ENTITY_FIREWORK_ROCKET_LARGE_BLAST,
    ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR,
    ENTITY_FIREWORK_ROCKET_LAUNCH,
    ENTITY_FIREWORK_ROCKET_SHOOT,
    ENTITY_FIREWORK_ROCKET_TWINKLE,
    ENTITY_FIREWORK_ROCKET_TWINKLE_FAR,
    ENTITY_FISHING_BOBBER_RETRIEVE,
    ENTITY_FISHING_BOBBER_SPLASH,
    ENTITY_FISHING_BOBBER_THROW,
    ENTITY_FISH_SWIM,
    ENTITY_FOX_AGGRO,
    ENTITY_FOX_AMBIENT,
    ENTITY_FOX_BITE,
    ENTITY_FOX_DEATH,
    ENTITY_FOX_EAT,
    ENTITY_FOX_HURT,
    ENTITY_FOX_SCREECH,
    ENTITY_FOX_SLEEP,
    ENTITY_FOX_SNIFF,
    ENTITY_FOX_SPIT,
    ENTITY_FOX_TELEPORT,
    ENTITY_GENERIC_BIG_FALL,
    ENTITY_GENERIC_BURN,
    ENTITY_GENERIC_DEATH,
    ENTITY_GENERIC_DRINK,
    ENTITY_GENERIC_EAT,
    ENTITY_GENERIC_EXPLODE,
    ENTITY_GENERIC_EXTINGUISH_FIRE,
    ENTITY_GENERIC_HURT,
    ENTITY_GENERIC_SMALL_FALL,
    ENTITY_GENERIC_SPLASH,
    ENTITY_GENERIC_SWIM,
    ENTITY_GHAST_AMBIENT,
    ENTITY_GHAST_DEATH,
    ENTITY_GHAST_HURT,
    ENTITY_GHAST_SCREAM,
    ENTITY_GHAST_SHOOT,
    ENTITY_GHAST_WARN,
    ENTITY_GLOW_ITEM_FRAME_ADD_ITEM,
    ENTITY_GLOW_ITEM_FRAME_BREAK,
    ENTITY_GLOW_ITEM_FRAME_PLACE,
    ENTITY_GLOW_ITEM_FRAME_REMOVE_ITEM,
    ENTITY_GLOW_ITEM_FRAME_ROTATE_ITEM,
    ENTITY_GLOW_SQUID_AMBIENT,
    ENTITY_GLOW_SQUID_DEATH,
    ENTITY_GLOW_SQUID_HURT,
    ENTITY_GLOW_SQUID_SQUIRT,
    ENTITY_GOAT_AMBIENT,
    ENTITY_GOAT_DEATH,
    ENTITY_GOAT_EAT,
    ENTITY_GOAT_HURT,
    ENTITY_GOAT_LONG_JUMP,
    ENTITY_GOAT_MILK,
    ENTITY_GOAT_PREPARE_RAM,
    ENTITY_GOAT_RAM_IMPACT,
    ENTITY_GOAT_SCREAMING_AMBIENT,
    ENTITY_GOAT_SCREAMING_DEATH,
    ENTITY_GOAT_SCREAMING_EAT,
    ENTITY_GOAT_SCREAMING_HURT,
    ENTITY_GOAT_SCREAMING_LONG_JUMP,
    ENTITY_GOAT_SCREAMING_MILK,
    ENTITY_GOAT_SCREAMING_PREPARE_RAM,
    ENTITY_GOAT_SCREAMING_RAM_IMPACT,
    ENTITY_GOAT_STEP,
    ENTITY_GUARDIAN_AMBIENT,
    ENTITY_GUARDIAN_AMBIENT_LAND,
    ENTITY_GUARDIAN_ATTACK,
    ENTITY_GUARDIAN_DEATH,
    ENTITY_GUARDIAN_DEATH_LAND,
    ENTITY_GUARDIAN_FLOP,
    ENTITY_GUARDIAN_HURT,
    ENTITY_GUARDIAN_HURT_LAND,
    ENTITY_HOGLIN_AMBIENT,
    ENTITY_HOGLIN_ANGRY,
    ENTITY_HOGLIN_ATTACK,
    ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED,
    ENTITY_HOGLIN_DEATH,
    ENTITY_HOGLIN_HURT,
    ENTITY_HOGLIN_RETREAT,
    ENTITY_HOGLIN_STEP,
    ENTITY_HORSE_AMBIENT,
    ENTITY_HORSE_ANGRY,
    ENTITY_HORSE_ARMOR,
    ENTITY_HORSE_BREATHE,
    ENTITY_HORSE_DEATH,
    ENTITY_HORSE_EAT,
    ENTITY_HORSE_GALLOP,
    ENTITY_HORSE_HURT,
    ENTITY_HORSE_JUMP,
    ENTITY_HORSE_LAND,
    ENTITY_HORSE_SADDLE,
    ENTITY_HORSE_STEP,
    ENTITY_HORSE_STEP_WOOD,
    ENTITY_HOSTILE_BIG_FALL,
    ENTITY_HOSTILE_DEATH,
    ENTITY_HOSTILE_HURT,
    ENTITY_HOSTILE_SMALL_FALL,
    ENTITY_HOSTILE_SPLASH,
    ENTITY_HOSTILE_SWIM,
    ENTITY_HUSK_AMBIENT,
    ENTITY_HUSK_CONVERTED_TO_ZOMBIE,
    ENTITY_HUSK_DEATH,
    ENTITY_HUSK_HURT,
    ENTITY_HUSK_STEP,
    ENTITY_ILLUSIONER_AMBIENT,
    ENTITY_ILLUSIONER_CAST_SPELL,
    ENTITY_ILLUSIONER_DEATH,
    ENTITY_ILLUSIONER_HURT,
    ENTITY_ILLUSIONER_MIRROR_MOVE,
    ENTITY_ILLUSIONER_PREPARE_BLINDNESS,
    ENTITY_ILLUSIONER_PREPARE_MIRROR,
    ENTITY_IRON_GOLEM_ATTACK,
    ENTITY_IRON_GOLEM_DAMAGE,
    ENTITY_IRON_GOLEM_DEATH,
    ENTITY_IRON_GOLEM_HURT,
    ENTITY_IRON_GOLEM_REPAIR,
    ENTITY_IRON_GOLEM_STEP,
    ENTITY_ITEM_BREAK,
    ENTITY_ITEM_FRAME_ADD_ITEM,
    ENTITY_ITEM_FRAME_BREAK,
    ENTITY_ITEM_FRAME_PLACE,
    ENTITY_ITEM_FRAME_REMOVE_ITEM,
    ENTITY_ITEM_FRAME_ROTATE_ITEM,
    ENTITY_ITEM_PICKUP,
    ENTITY_LEASH_KNOT_BREAK,
    ENTITY_LEASH_KNOT_PLACE,
    ENTITY_LIGHTNING_BOLT_IMPACT,
    ENTITY_LIGHTNING_BOLT_THUNDER,
    ENTITY_LINGERING_POTION_THROW,
    ENTITY_LLAMA_AMBIENT,
    ENTITY_LLAMA_ANGRY,
    ENTITY_LLAMA_CHEST,
    ENTITY_LLAMA_DEATH,
    ENTITY_LLAMA_EAT,
    ENTITY_LLAMA_HURT,
    ENTITY_LLAMA_SPIT,
    ENTITY_LLAMA_STEP,
    ENTITY_LLAMA_SWAG,
    ENTITY_MAGMA_CUBE_DEATH,
    ENTITY_MAGMA_CUBE_DEATH_SMALL,
    ENTITY_MAGMA_CUBE_HURT,
    ENTITY_MAGMA_CUBE_HURT_SMALL,
    ENTITY_MAGMA_CUBE_JUMP,
    ENTITY_MAGMA_CUBE_SQUISH,
    ENTITY_MAGMA_CUBE_SQUISH_SMALL,
    ENTITY_MINECART_INSIDE,
    ENTITY_MINECART_INSIDE_UNDERWATER,
    ENTITY_MINECART_RIDING,
    ENTITY_MOOSHROOM_CONVERT,
    ENTITY_MOOSHROOM_EAT,
    ENTITY_MOOSHROOM_MILK,
    ENTITY_MOOSHROOM_SHEAR,
    ENTITY_MOOSHROOM_SUSPICIOUS_MILK,
    ENTITY_MULE_AMBIENT,
    ENTITY_MULE_ANGRY,
    ENTITY_MULE_CHEST,
    ENTITY_MULE_DEATH,
    ENTITY_MULE_EAT,
    ENTITY_MULE_HURT,
    ENTITY_OCELOT_AMBIENT,
    ENTITY_OCELOT_DEATH,
    ENTITY_OCELOT_HURT,
    ENTITY_PAINTING_BREAK,
    ENTITY_PAINTING_PLACE,
    ENTITY_PANDA_AGGRESSIVE_AMBIENT,
    ENTITY_PANDA_AMBIENT,
    ENTITY_PANDA_BITE,
    ENTITY_PANDA_CANT_BREED,
    ENTITY_PANDA_DEATH,
    ENTITY_PANDA_EAT,
    ENTITY_PANDA_HURT,
    ENTITY_PANDA_PRE_SNEEZE,
    ENTITY_PANDA_SNEEZE,
    ENTITY_PANDA_STEP,
    ENTITY_PANDA_WORRIED_AMBIENT,
    ENTITY_PARROT_AMBIENT,
    ENTITY_PARROT_DEATH,
    ENTITY_PARROT_EAT,
    ENTITY_PARROT_FLY,
    ENTITY_PARROT_HURT,
    ENTITY_PARROT_IMITATE_BLAZE,
    ENTITY_PARROT_IMITATE_CREEPER,
    ENTITY_PARROT_IMITATE_DROWNED,
    ENTITY_PARROT_IMITATE_ELDER_GUARDIAN,
    ENTITY_PARROT_IMITATE_ENDERMITE,
    ENTITY_PARROT_IMITATE_ENDER_DRAGON,
    ENTITY_PARROT_IMITATE_EVOKER,
    ENTITY_PARROT_IMITATE_GHAST,
    ENTITY_PARROT_IMITATE_GUARDIAN,
    ENTITY_PARROT_IMITATE_HOGLIN,
    ENTITY_PARROT_IMITATE_HUSK,
    ENTITY_PARROT_IMITATE_ILLUSIONER,
    ENTITY_PARROT_IMITATE_MAGMA_CUBE,
    ENTITY_PARROT_IMITATE_PHANTOM,
    ENTITY_PARROT_IMITATE_PIGLIN,
    ENTITY_PARROT_IMITATE_PIGLIN_BRUTE,
    ENTITY_PARROT_IMITATE_PILLAGER,
    ENTITY_PARROT_IMITATE_RAVAGER,
    ENTITY_PARROT_IMITATE_SHULKER,
    ENTITY_PARROT_IMITATE_SILVERFISH,
    ENTITY_PARROT_IMITATE_SKELETON,
    ENTITY_PARROT_IMITATE_SLIME,
    ENTITY_PARROT_IMITATE_SPIDER,
    ENTITY_PARROT_IMITATE_STRAY,
    ENTITY_PARROT_IMITATE_VEX,
    ENTITY_PARROT_IMITATE_VINDICATOR,
    ENTITY_PARROT_IMITATE_WITCH,
    ENTITY_PARROT_IMITATE_WITHER,
    ENTITY_PARROT_IMITATE_WITHER_SKELETON,
    ENTITY_PARROT_IMITATE_ZOGLIN,
    ENTITY_PARROT_IMITATE_ZOMBIE,
    ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER,
    ENTITY_PARROT_STEP,
    ENTITY_PHANTOM_AMBIENT,
    ENTITY_PHANTOM_BITE,
    ENTITY_PHANTOM_DEATH,
    ENTITY_PHANTOM_FLAP,
    ENTITY_PHANTOM_HURT,
    ENTITY_PHANTOM_SWOOP,
    ENTITY_PIGLIN_ADMIRING_ITEM,
    ENTITY_PIGLIN_AMBIENT,
    ENTITY_PIGLIN_ANGRY,
    ENTITY_PIGLIN_BRUTE_AMBIENT,
    ENTITY_PIGLIN_BRUTE_ANGRY,
    ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED,
    ENTITY_PIGLIN_BRUTE_DEATH,
    ENTITY_PIGLIN_BRUTE_HURT,
    ENTITY_PIGLIN_BRUTE_STEP,
    ENTITY_PIGLIN_CELEBRATE,
    ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED,
    ENTITY_PIGLIN_DEATH,
    ENTITY_PIGLIN_HURT,
    ENTITY_PIGLIN_JEALOUS,
    ENTITY_PIGLIN_RETREAT,
    ENTITY_PIGLIN_STEP,
    ENTITY_PIG_AMBIENT,
    ENTITY_PIG_DEATH,
    ENTITY_PIG_HURT,
    ENTITY_PIG_SADDLE,
    ENTITY_PIG_STEP,
    ENTITY_PILLAGER_AMBIENT,
    ENTITY_PILLAGER_CELEBRATE,
    ENTITY_PILLAGER_DEATH,
    ENTITY_PILLAGER_HURT,
    ENTITY_PLAYER_ATTACK_CRIT,
    ENTITY_PLAYER_ATTACK_KNOCKBACK,
    ENTITY_PLAYER_ATTACK_NODAMAGE,
    ENTITY_PLAYER_ATTACK_STRONG,
    ENTITY_PLAYER_ATTACK_SWEEP,
    ENTITY_PLAYER_ATTACK_WEAK,
    ENTITY_PLAYER_BIG_FALL,
    ENTITY_PLAYER_BREATH,
    ENTITY_PLAYER_BURP,
    ENTITY_PLAYER_DEATH,
    ENTITY_PLAYER_HURT,
    ENTITY_PLAYER_HURT_DROWN,
    ENTITY_PLAYER_HURT_FREEZE,
    ENTITY_PLAYER_HURT_ON_FIRE,
    ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH,
    ENTITY_PLAYER_LEVELUP,
    ENTITY_PLAYER_SMALL_FALL,
    ENTITY_PLAYER_SPLASH,
    ENTITY_PLAYER_SPLASH_HIGH_SPEED,
    ENTITY_PLAYER_SWIM,
    ENTITY_POLAR_BEAR_AMBIENT,
    ENTITY_POLAR_BEAR_AMBIENT_BABY,
    ENTITY_POLAR_BEAR_DEATH,
    ENTITY_POLAR_BEAR_HURT,
    ENTITY_POLAR_BEAR_STEP,
    ENTITY_POLAR_BEAR_WARNING,
    ENTITY_PUFFER_FISH_AMBIENT,
    ENTITY_PUFFER_FISH_BLOW_OUT,
    ENTITY_PUFFER_FISH_BLOW_UP,
    ENTITY_PUFFER_FISH_DEATH,
    ENTITY_PUFFER_FISH_FLOP,
    ENTITY_PUFFER_FISH_HURT,
    ENTITY_PUFFER_FISH_STING,
    ENTITY_RABBIT_AMBIENT,
    ENTITY_RABBIT_ATTACK,
    ENTITY_RABBIT_DEATH,
    ENTITY_RABBIT_HURT,
    ENTITY_RABBIT_JUMP,
    ENTITY_RAVAGER_AMBIENT,
    ENTITY_RAVAGER_ATTACK,
    ENTITY_RAVAGER_CELEBRATE,
    ENTITY_RAVAGER_DEATH,
    ENTITY_RAVAGER_HURT,
    ENTITY_RAVAGER_ROAR,
    ENTITY_RAVAGER_STEP,
    ENTITY_RAVAGER_STUNNED,
    ENTITY_SALMON_AMBIENT,
    ENTITY_SALMON_DEATH,
    ENTITY_SALMON_FLOP,
    ENTITY_SALMON_HURT,
    ENTITY_SHEEP_AMBIENT,
    ENTITY_SHEEP_DEATH,
    ENTITY_SHEEP_HURT,
    ENTITY_SHEEP_SHEAR,
    ENTITY_SHEEP_STEP,
    ENTITY_SHULKER_AMBIENT,
    ENTITY_SHULKER_BULLET_HIT,
    ENTITY_SHULKER_BULLET_HURT,
    ENTITY_SHULKER_CLOSE,
    ENTITY_SHULKER_DEATH,
    ENTITY_SHULKER_HURT,
    ENTITY_SHULKER_HURT_CLOSED,
    ENTITY_SHULKER_OPEN,
    ENTITY_SHULKER_SHOOT,
    ENTITY_SHULKER_TELEPORT,
    ENTITY_SILVERFISH_AMBIENT,
    ENTITY_SILVERFISH_DEATH,
    ENTITY_SILVERFISH_HURT,
    ENTITY_SILVERFISH_STEP,
    ENTITY_SKELETON_AMBIENT,
    ENTITY_SKELETON_CONVERTED_TO_STRAY,
    ENTITY_SKELETON_DEATH,
    ENTITY_SKELETON_HORSE_AMBIENT,
    ENTITY_SKELETON_HORSE_AMBIENT_WATER,
    ENTITY_SKELETON_HORSE_DEATH,
    ENTITY_SKELETON_HORSE_GALLOP_WATER,
    ENTITY_SKELETON_HORSE_HURT,
    ENTITY_SKELETON_HORSE_JUMP_WATER,
    ENTITY_SKELETON_HORSE_STEP_WATER,
    ENTITY_SKELETON_HORSE_SWIM,
    ENTITY_SKELETON_HURT,
    ENTITY_SKELETON_SHOOT,
    ENTITY_SKELETON_STEP,
    ENTITY_SLIME_ATTACK,
    ENTITY_SLIME_DEATH,
    ENTITY_SLIME_DEATH_SMALL,
    ENTITY_SLIME_HURT,
    ENTITY_SLIME_HURT_SMALL,
    ENTITY_SLIME_JUMP,
    ENTITY_SLIME_JUMP_SMALL,
    ENTITY_SLIME_SQUISH,
    ENTITY_SLIME_SQUISH_SMALL,
    ENTITY_SNOWBALL_THROW,
    ENTITY_SNOW_GOLEM_AMBIENT,
    ENTITY_SNOW_GOLEM_DEATH,
    ENTITY_SNOW_GOLEM_HURT,
    ENTITY_SNOW_GOLEM_SHEAR,
    ENTITY_SNOW_GOLEM_SHOOT,
    ENTITY_SPIDER_AMBIENT,
    ENTITY_SPIDER_DEATH,
    ENTITY_SPIDER_HURT,
    ENTITY_SPIDER_STEP,
    ENTITY_SPLASH_POTION_BREAK,
    ENTITY_SPLASH_POTION_THROW,
    ENTITY_SQUID_AMBIENT,
    ENTITY_SQUID_DEATH,
    ENTITY_SQUID_HURT,
    ENTITY_SQUID_SQUIRT,
    ENTITY_STRAY_AMBIENT,
    ENTITY_STRAY_DEATH,
    ENTITY_STRAY_HURT,
    ENTITY_STRAY_STEP,
    ENTITY_STRIDER_AMBIENT,
    ENTITY_STRIDER_DEATH,
    ENTITY_STRIDER_EAT,
    ENTITY_STRIDER_HAPPY,
    ENTITY_STRIDER_HURT,
    ENTITY_STRIDER_RETREAT,
    ENTITY_STRIDER_SADDLE,
    ENTITY_STRIDER_STEP,
    ENTITY_STRIDER_STEP_LAVA,
    ENTITY_TNT_PRIMED,
    ENTITY_TROPICAL_FISH_AMBIENT,
    ENTITY_TROPICAL_FISH_DEATH,
    ENTITY_TROPICAL_FISH_FLOP,
    ENTITY_TROPICAL_FISH_HURT,
    ENTITY_TURTLE_AMBIENT_LAND,
    ENTITY_TURTLE_DEATH,
    ENTITY_TURTLE_DEATH_BABY,
    ENTITY_TURTLE_EGG_BREAK,
    ENTITY_TURTLE_EGG_CRACK,
    ENTITY_TURTLE_EGG_HATCH,
    ENTITY_TURTLE_HURT,
    ENTITY_TURTLE_HURT_BABY,
    ENTITY_TURTLE_LAY_EGG,
    ENTITY_TURTLE_SHAMBLE,
    ENTITY_TURTLE_SHAMBLE_BABY,
    ENTITY_TURTLE_SWIM,
    ENTITY_VEX_AMBIENT,
    ENTITY_VEX_CHARGE,
    ENTITY_VEX_DEATH,
    ENTITY_VEX_HURT,
    ENTITY_VILLAGER_AMBIENT,
    ENTITY_VILLAGER_CELEBRATE,
    ENTITY_VILLAGER_DEATH,
    ENTITY_VILLAGER_HURT,
    ENTITY_VILLAGER_NO,
    ENTITY_VILLAGER_TRADE,
    ENTITY_VILLAGER_WORK_ARMORER,
    ENTITY_VILLAGER_WORK_BUTCHER,
    ENTITY_VILLAGER_WORK_CARTOGRAPHER,
    ENTITY_VILLAGER_WORK_CLERIC,
    ENTITY_VILLAGER_WORK_FARMER,
    ENTITY_VILLAGER_WORK_FISHERMAN,
    ENTITY_VILLAGER_WORK_FLETCHER,
    ENTITY_VILLAGER_WORK_LEATHERWORKER,
    ENTITY_VILLAGER_WORK_LIBRARIAN,
    ENTITY_VILLAGER_WORK_MASON,
    ENTITY_VILLAGER_WORK_SHEPHERD,
    ENTITY_VILLAGER_WORK_TOOLSMITH,
    ENTITY_VILLAGER_WORK_WEAPONSMITH,
    ENTITY_VILLAGER_YES,
    ENTITY_VINDICATOR_AMBIENT,
    ENTITY_VINDICATOR_CELEBRATE,
    ENTITY_VINDICATOR_DEATH,
    ENTITY_VINDICATOR_HURT,
    ENTITY_WANDERING_TRADER_AMBIENT,
    ENTITY_WANDERING_TRADER_DEATH,
    ENTITY_WANDERING_TRADER_DISAPPEARED,
    ENTITY_WANDERING_TRADER_DRINK_MILK,
    ENTITY_WANDERING_TRADER_DRINK_POTION,
    ENTITY_WANDERING_TRADER_HURT,
    ENTITY_WANDERING_TRADER_NO,
    ENTITY_WANDERING_TRADER_REAPPEARED,
    ENTITY_WANDERING_TRADER_TRADE,
    ENTITY_WANDERING_TRADER_YES,
    ENTITY_WITCH_AMBIENT,
    ENTITY_WITCH_CELEBRATE,
    ENTITY_WITCH_DEATH,
    ENTITY_WITCH_DRINK,
    ENTITY_WITCH_HURT,
    ENTITY_WITCH_THROW,
    ENTITY_WITHER_AMBIENT,
    ENTITY_WITHER_BREAK_BLOCK,
    ENTITY_WITHER_DEATH,
    ENTITY_WITHER_HURT,
    ENTITY_WITHER_SHOOT,
    ENTITY_WITHER_SKELETON_AMBIENT,
    ENTITY_WITHER_SKELETON_DEATH,
    ENTITY_WITHER_SKELETON_HURT,
    ENTITY_WITHER_SKELETON_STEP,
    ENTITY_WITHER_SPAWN,
    ENTITY_WOLF_AMBIENT,
    ENTITY_WOLF_DEATH,
    ENTITY_WOLF_GROWL,
    ENTITY_WOLF_HOWL,
    ENTITY_WOLF_HURT,
    ENTITY_WOLF_PANT,
    ENTITY_WOLF_SHAKE,
    ENTITY_WOLF_STEP,
    ENTITY_WOLF_WHINE,
    ENTITY_ZOGLIN_AMBIENT,
    ENTITY_ZOGLIN_ANGRY,
    ENTITY_ZOGLIN_ATTACK,
    ENTITY_ZOGLIN_DEATH,
    ENTITY_ZOGLIN_HURT,
    ENTITY_ZOGLIN_STEP,
    ENTITY_ZOMBIE_AMBIENT,
    ENTITY_ZOMBIE_ATTACK_IRON_DOOR,
    ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR,
    ENTITY_ZOMBIE_BREAK_WOODEN_DOOR,
    ENTITY_ZOMBIE_CONVERTED_TO_DROWNED,
    ENTITY_ZOMBIE_DEATH,
    ENTITY_ZOMBIE_DESTROY_EGG,
    ENTITY_ZOMBIE_HORSE_AMBIENT,
    ENTITY_ZOMBIE_HORSE_DEATH,
    ENTITY_ZOMBIE_HORSE_HURT,
    ENTITY_ZOMBIE_HURT,
    ENTITY_ZOMBIE_INFECT,
    ENTITY_ZOMBIE_STEP,
    ENTITY_ZOMBIE_VILLAGER_AMBIENT,
    ENTITY_ZOMBIE_VILLAGER_CONVERTED,
    ENTITY_ZOMBIE_VILLAGER_CURE,
    ENTITY_ZOMBIE_VILLAGER_DEATH,
    ENTITY_ZOMBIE_VILLAGER_HURT,
    ENTITY_ZOMBIE_VILLAGER_STEP,
    ENTITY_ZOMBIFIED_PIGLIN_AMBIENT,
    ENTITY_ZOMBIFIED_PIGLIN_ANGRY,
    ENTITY_ZOMBIFIED_PIGLIN_DEATH,
    ENTITY_ZOMBIFIED_PIGLIN_HURT,
    EVENT_RAID_HORN,
    ITEM_ARMOR_EQUIP_CHAIN,
    ITEM_ARMOR_EQUIP_DIAMOND,
    ITEM_ARMOR_EQUIP_ELYTRA,
    ITEM_ARMOR_EQUIP_GENERIC,
    ITEM_ARMOR_EQUIP_GOLD,
    ITEM_ARMOR_EQUIP_IRON,
    ITEM_ARMOR_EQUIP_LEATHER,
    ITEM_ARMOR_EQUIP_NETHERITE,
    ITEM_ARMOR_EQUIP_TURTLE,
    ITEM_AXE_SCRAPE,
    ITEM_AXE_STRIP,
    ITEM_AXE_WAX_OFF,
    ITEM_BONE_MEAL_USE,
    ITEM_BOOK_PAGE_TURN,
    ITEM_BOOK_PUT,
    ITEM_BOTTLE_EMPTY,
    ITEM_BOTTLE_FILL,
    ITEM_BOTTLE_FILL_DRAGONBREATH,
    ITEM_BUCKET_EMPTY,
    ITEM_BUCKET_EMPTY_AXOLOTL,
    ITEM_BUCKET_EMPTY_FISH,
    ITEM_BUCKET_EMPTY_LAVA,
    ITEM_BUCKET_EMPTY_POWDER_SNOW,
    ITEM_BUCKET_FILL,
    ITEM_BUCKET_FILL_AXOLOTL,
    ITEM_BUCKET_FILL_FISH,
    ITEM_BUCKET_FILL_LAVA,
    ITEM_BUCKET_FILL_POWDER_SNOW,
    ITEM_CHORUS_FRUIT_TELEPORT,
    ITEM_CROP_PLANT,
    ITEM_CROSSBOW_HIT,
    ITEM_CROSSBOW_LOADING_END,
    ITEM_CROSSBOW_LOADING_MIDDLE,
    ITEM_CROSSBOW_LOADING_START,
    ITEM_CROSSBOW_QUICK_CHARGE_1,
    ITEM_CROSSBOW_QUICK_CHARGE_2,
    ITEM_CROSSBOW_QUICK_CHARGE_3,
    ITEM_CROSSBOW_SHOOT,
    ITEM_DYE_USE,
    ITEM_ELYTRA_FLYING,
    ITEM_FIRECHARGE_USE,
    ITEM_FLINTANDSTEEL_USE,
    ITEM_GLOW_INK_SAC_USE,
    ITEM_HOE_TILL,
    ITEM_HONEYCOMB_WAX_ON,
    ITEM_HONEY_BOTTLE_DRINK,
    ITEM_INK_SAC_USE,
    ITEM_LODESTONE_COMPASS_LOCK,
    ITEM_NETHER_WART_PLANT,
    ITEM_SHIELD_BLOCK,
    ITEM_SHIELD_BREAK,
    ITEM_SHOVEL_FLATTEN,
    ITEM_SPYGLASS_STOP_USING,
    ITEM_SPYGLASS_USE,
    ITEM_TOTEM_USE,
    ITEM_TRIDENT_HIT,
    ITEM_TRIDENT_HIT_GROUND,
    ITEM_TRIDENT_RETURN,
    ITEM_TRIDENT_RIPTIDE_1,
    ITEM_TRIDENT_RIPTIDE_2,
    ITEM_TRIDENT_RIPTIDE_3,
    ITEM_TRIDENT_THROW,
    ITEM_TRIDENT_THUNDER,
    MUSIC_CREATIVE,
    MUSIC_CREDITS,
    MUSIC_DISC_11,
    MUSIC_DISC_13,
    MUSIC_DISC_BLOCKS,
    MUSIC_DISC_CAT,
    MUSIC_DISC_CHIRP,
    MUSIC_DISC_FAR,
    MUSIC_DISC_MALL,
    MUSIC_DISC_MELLOHI,
    MUSIC_DISC_PIGSTEP,
    MUSIC_DISC_STAL,
    MUSIC_DISC_STRAD,
    MUSIC_DISC_WAIT,
    MUSIC_DISC_WARD,
    MUSIC_DRAGON,
    MUSIC_END,
    MUSIC_GAME,
    MUSIC_MENU,
    MUSIC_NETHER_BASALT_DELTAS,
    MUSIC_NETHER_CRIMSON_FOREST,
    MUSIC_NETHER_NETHER_WASTES,
    MUSIC_NETHER_SOUL_SAND_VALLEY,
    MUSIC_NETHER_WARPED_FOREST,
    MUSIC_UNDER_WATER,
    PARTICLE_SOUL_ESCAPE,
    UI_BUTTON_CLICK,
    UI_CARTOGRAPHY_TABLE_TAKE_RESULT,
    UI_LOOM_SELECT_PATTERN,
    UI_LOOM_TAKE_RESULT,
    UI_STONECUTTER_SELECT_RECIPE,
    UI_STONECUTTER_TAKE_RESULT,
    UI_TOAST_CHALLENGE_COMPLETE,
    UI_TOAST_IN,
    UI_TOAST_OUT,
    WEATHER_RAIN,
    WEATHER_RAIN_ABOVE,
}

// org.bukkit.boss.BarStyle
declare enum BarStyle {
    SOLID,
    SEGMENTED_6,
    SEGMENTED_10,
    SEGMENTED_12,
    SEGMENTED_20,
}

// org.bukkit.entity.Enderman
declare interface Enderman extends Monster {
    getCarriedMaterial(): MaterialData;
    getCarriedBlock(): BlockData;
    setCarriedBlock(blockData: BlockData): void;
    setCarriedMaterial(materialData: MaterialData): void;
}

// org.bukkit.event.world.ChunkPopulateEvent
declare interface ChunkPopulateEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.CookingRecipe
declare interface CookingRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    getInput(): ItemStack;
    setInput(material: Material): CookingRecipe;
    getExperience(): number;
    setExperience(f: number): void;
    getCookingTime(): number;
    getGroup(): string;
    getInputChoice(): RecipeChoice;
    setGroup(s: string): void;
    setInputChoice(recipeChoice: RecipeChoice): CookingRecipe;
    setCookingTime(i: number): void;
}

// org.bukkit.Raid
declare interface Raid {
    getLocation(): Location;
    getStatus(): RaidStatus;
    setBadOmenLevel(i: number): void;
    getSpawnedGroups(): number;
    getTotalGroups(): number;
    getTotalWaves(): number;
    getTotalHealth(): number;
    getRaiders(): List;
    getBadOmenLevel(): number;
    getHeroes(): Set;
    isStarted(): boolean;
    getActiveTicks(): number;
}

// org.bukkit.block.data.type.GlowLichen
declare interface GlowLichen extends MultipleFacing, Waterlogged {
}

// org.bukkit.entity.Pig
declare interface Pig extends Steerable, Vehicle {
}

// org.bukkit.UndefinedNullability
declare interface UndefinedNullability extends Annotation {
    value(): string;
}

// org.bukkit.block.data.Lightable
declare interface Lightable extends BlockData {
    isLit(): boolean;
    setLit(b: boolean): void;
}

// org.bukkit.block.Beehive
declare interface Beehive extends EntityBlockStorage {
    isSedated(): boolean;
    setFlower(location: Location): void;
    getFlower(): Location;
}

// org.bukkit.event.entity.PlayerLeashEntityEvent
declare interface PlayerLeashEntityEvent extends Event, Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getPlayer(): Player;
    getEntity(): Entity;
    getLeashHolder(): Entity;
}

// org.bukkit.block.data.Powerable
declare interface Powerable extends BlockData {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.entity.TNTPrimed
declare interface TNTPrimed extends Explosive {
    getSource(): Entity;
    setSource(entity: Entity): void;
    setFuseTicks(i: number): void;
    getFuseTicks(): number;
}

// org.bukkit.conversations.StringPrompt
declare interface StringPrompt extends Prompt {
    blocksForInput(conversationContext: ConversationContext): boolean;
}

// org.bukkit.material.Directional
declare interface Directional {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
}

// org.bukkit.entity.ShulkerBullet
declare interface ShulkerBullet extends Projectile {
    getTarget(): Entity;
    setTarget(entity: Entity): void;
}

// org.bukkit.event.vehicle.VehicleDestroyEvent
declare interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getAttacker(): Entity;
}

// org.bukkit.entity.TippedArrow
declare interface TippedArrow extends Arrow {
}

// org.bukkit.event.entity.EntityBreakDoorEvent
declare interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
    getEntity(): LivingEntity;
    getEntity(): Entity;
}

// org.bukkit.conversations.RegexPrompt
declare interface RegexPrompt extends ValidatingPrompt {
}

// org.bukkit.event.enchantment.EnchantItemEvent
declare interface EnchantItemEvent extends InventoryEvent, Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getEnchantsToAdd(): Map;
    getEnchanter(): Player;
    getExpLevelCost(): number;
    whichButton(): number;
    getEnchantBlock(): Block;
    setExpLevelCost(i: number): void;
    getItem(): ItemStack;
}

// org.bukkit.event.block.NotePlayEvent
declare interface NotePlayEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setNote(note: Note): void;
    getNote(): Note;
    setInstrument(instrument: Instrument): void;
    getInstrument(): Instrument;
}

// org.bukkit.metadata.MetadataValueAdapter
declare interface MetadataValueAdapter extends MetadataValue {
    asString(): string;
    asLong(): number;
    asDouble(): number;
    getOwningPlugin(): Plugin;
    asFloat(): number;
    asBoolean(): boolean;
    asShort(): number;
    asByte(): number;
    asInt(): number;
}

// org.bukkit.SoundCategory
declare enum SoundCategory {
    MASTER,
    MUSIC,
    RECORDS,
    WEATHER,
    BLOCKS,
    HOSTILE,
    NEUTRAL,
    PLAYERS,
    AMBIENT,
    VOICE,
}

// org.bukkit.util.BoundingBox
declare interface BoundingBox extends Cloneable, ConfigurationSerializable {
    contains(vector: Vector): boolean;
    contains(d: number, d: number, d: number): boolean;
    contains(boundingBox: BoundingBox): boolean;
    contains(vector: Vector, vector: Vector): boolean;
    of(vector: Vector, vector: Vector): BoundingBox;
    of(vector: Vector, d: number, d: number, d: number): BoundingBox;
    of(block: Block): BoundingBox;
    of(block: Block, block: Block): BoundingBox;
    of(location: Location, location: Location): BoundingBox;
    of(location: Location, d: number, d: number, d: number): BoundingBox;
    copy(boundingBox: BoundingBox): BoundingBox;
    expand(d: number, d: number, d: number, d: number, d: number, d: number): BoundingBox;
    expand(blockFace: BlockFace, d: number): BoundingBox;
    expand(d: number, d: number, d: number): BoundingBox;
    expand(vector: Vector): BoundingBox;
    expand(vector: Vector, d: number): BoundingBox;
    expand(d: number): BoundingBox;
    expand(d: number, d: number, d: number, d: number): BoundingBox;
    shift(d: number, d: number, d: number): BoundingBox;
    shift(location: Location): BoundingBox;
    shift(vector: Vector): BoundingBox;
    resize(d: number, d: number, d: number, d: number, d: number, d: number): BoundingBox;
    union(d: number, d: number, d: number): BoundingBox;
    union(vector: Vector): BoundingBox;
    union(location: Location): BoundingBox;
    union(boundingBox: BoundingBox): BoundingBox;
    serialize(): Map;
    deserialize(map: Map): BoundingBox;
    getHeight(): number;
    getVolume(): number;
    rayTrace(vector: Vector, vector: Vector, d: number): RayTraceResult;
    getCenter(): Vector;
    getCenterX(): number;
    getCenterZ(): number;
    getMin(): Vector;
    getWidthX(): number;
    getMaxZ(): number;
    intersection(boundingBox: BoundingBox): BoundingBox;
    getMaxY(): number;
    expandDirectional(vector: Vector): BoundingBox;
    expandDirectional(d: number, d: number, d: number): BoundingBox;
    getCenterY(): number;
    getMinZ(): number;
    getMaxX(): number;
    overlaps(boundingBox: BoundingBox): boolean;
    overlaps(vector: Vector, vector: Vector): boolean;
    getMinX(): number;
    getMinY(): number;
    getMax(): Vector;
    getWidthZ(): number;
}

// org.bukkit.block.Comparator
declare interface Comparator extends TileState {
}

// org.bukkit.event.player.PlayerMoveEvent
declare interface PlayerMoveEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getFrom(): Location;
    setFrom(location: Location): void;
    setTo(location: Location): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getTo(): Location;
}

// org.bukkit.material.CocoaPlant
declare interface CocoaPlant extends MaterialData, Directional, Attachable {
    getSize(): CocoaPlantSize;
    setSize(cocoaPlantSize: CocoaPlantSize): void;
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
    getAttachedFace(): BlockFace;
}

// org.bukkit.entity.Animals
declare interface Animals extends Breedable {
    getLoveModeTicks(): number;
    isBreedItem(itemStack: ItemStack): boolean;
    isBreedItem(material: Material): boolean;
    getBreedCause(): UUID;
    setLoveModeTicks(i: number): void;
    setBreedCause(uUID: UUID): void;
    isLoveMode(): boolean;
}

// org.bukkit.event.entity.EntityPotionEffectEvent
declare interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
    getCause(): Cause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getAction(): Action;
    setOverride(b: boolean): void;
    getModifiedType(): PotionEffectType;
    getOldEffect(): PotionEffect;
    isOverride(): boolean;
    getNewEffect(): PotionEffect;
}

// org.bukkit.material.types.MushroomBlockTexture
declare enum MushroomBlockTexture {
    ALL_PORES,
    CAP_NORTH_WEST,
    CAP_NORTH,
    CAP_NORTH_EAST,
    CAP_WEST,
    CAP_TOP,
    CAP_EAST,
    CAP_SOUTH_WEST,
    CAP_SOUTH,
    CAP_SOUTH_EAST,
    STEM_SIDES,
    ALL_CAP,
    ALL_STEM,
}

// org.bukkit.material.PistonBaseMaterial
declare interface PistonBaseMaterial extends MaterialData, Directional, Redstone {
    setFacingDirection(blockFace: BlockFace): void;
    isSticky(): boolean;
    getFacing(): BlockFace;
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.entity.Endermite
declare interface Endermite extends Monster {
    isPlayerSpawned(): boolean;
    setPlayerSpawned(b: boolean): void;
}

// org.bukkit.event.block.BlockDispenseArmorEvent
declare interface BlockDispenseArmorEvent extends BlockDispenseEvent {
    getTargetEntity(): LivingEntity;
}

// org.bukkit.help.HelpTopic
declare interface HelpTopic {
    getName(): string;
    canSee(commandSender: CommandSender): boolean;
    getFullText(commandSender: CommandSender): string;
    amendCanSee(s: string): void;
    getShortText(): string;
    amendTopic(s: string, s: string): void;
}

// org.bukkit.entity.GlowItemFrame
declare interface GlowItemFrame extends ItemFrame {
}

// org.bukkit.event.player.PlayerBedLeaveEvent
declare interface PlayerBedLeaveEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    shouldSetSpawnLocation(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setSpawnLocation(b: boolean): void;
    getBed(): Block;
}

// org.bukkit.block.data.type.PointedDripstone
declare interface PointedDripstone extends Waterlogged {
    setThickness(thickness: Thickness): void;
    getThickness(): Thickness;
    getVerticalDirection(): BlockFace;
    getVerticalDirections(): Set;
    setVerticalDirection(blockFace: BlockFace): void;
}

// org.bukkit.event.entity.ArrowBodyCountChangeEvent
declare interface ArrowBodyCountChangeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getOldAmount(): number;
    getNewAmount(): number;
    setNewAmount(i: number): void;
    isReset(): boolean;
}

// org.bukkit.event.inventory.InventoryEvent
declare interface InventoryEvent extends Event {
    getHandlerList(): HandlerList;
    getViewers(): List;
    getView(): InventoryView;
    getInventory(): Inventory;
}

// org.bukkit.DyeColor
declare enum DyeColor {
    WHITE,
    ORANGE,
    MAGENTA,
    LIGHT_BLUE,
    YELLOW,
    LIME,
    PINK,
    GRAY,
    LIGHT_GRAY,
    CYAN,
    PURPLE,
    BLUE,
    BROWN,
    GREEN,
    RED,
    BLACK,
}

// org.bukkit.event.player.PlayerResourcePackStatusEvent
declare interface PlayerResourcePackStatusEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getStatus(): Status;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.vehicle.VehicleEnterEvent
declare interface VehicleEnterEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getEntered(): Entity;
}

// org.bukkit.inventory.meta.FireworkEffectMeta
declare interface FireworkEffectMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): FireworkEffectMeta;
    setEffect(fireworkEffect: FireworkEffect): void;
    hasEffect(): boolean;
    getEffect(): FireworkEffect;
}

// org.bukkit.event.EventPriority
declare enum EventPriority {
    LOWEST,
    LOW,
    NORMAL,
    HIGH,
    HIGHEST,
    MONITOR,
}

// org.bukkit.event.entity.EntityCombustByBlockEvent
declare interface EntityCombustByBlockEvent extends EntityCombustEvent {
    getCombuster(): Block;
}

// org.bukkit.block.data.Ageable
declare interface Ageable extends BlockData {
    setAge(i: number): void;
    getAge(): number;
    getMaximumAge(): number;
}

// org.bukkit.entity.TraderLlama
declare interface TraderLlama extends Llama {
}

// org.bukkit.material.SmoothBrick
declare interface SmoothBrick extends TexturedMaterial {
}

// org.bukkit.plugin.RegisteredListener
declare interface RegisteredListener {
    getPriority(): EventPriority;
    getListener(): Listener;
    getPlugin(): Plugin;
    isIgnoringCancelled(): boolean;
    callEvent(event: Event): void;
}

// org.bukkit.block.data.type.BubbleColumn
declare interface BubbleColumn extends BlockData {
    setDrag(b: boolean): void;
    isDrag(): boolean;
}

// org.bukkit.entity.Chicken
declare interface Chicken extends Animals {
}

// org.bukkit.event.entity.VillagerAcquireTradeEvent
declare interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRecipe(): MerchantRecipe;
    setRecipe(merchantRecipe: MerchantRecipe): void;
}

// org.bukkit.inventory.meta.Repairable
declare interface Repairable {
    clone(): any;
    clone(): Repairable;
    getRepairCost(): number;
    setRepairCost(i: number): void;
    hasRepairCost(): boolean;
}

// org.bukkit.FireworkEffect
declare interface FireworkEffect extends ConfigurationSerializable {
    builder(): Builder;
    getType(): Type;
    serialize(): Map;
    deserialize(map: Map): ConfigurationSerializable;
    hasTrail(): boolean;
    hasFlicker(): boolean;
    getFadeColors(): List;
    getColors(): List;
}

// org.bukkit.entity.Vex
declare interface Vex extends Monster {
    isCharging(): boolean;
    setCharging(b: boolean): void;
}

// org.bukkit.event.world.TimeSkipEvent
declare interface TimeSkipEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getSkipReason(): SkipReason;
    getSkipAmount(): number;
    setSkipAmount(l: number): void;
}

// org.bukkit.material.Sapling
declare interface Sapling extends Wood {
    isInstantGrowable(): boolean;
    setIsInstantGrowable(b: boolean): void;
}

// org.bukkit.block.data.type.RedstoneRail
declare interface RedstoneRail extends Powerable, Rail {
}

// org.bukkit.block.data.Openable
declare interface Openable extends BlockData {
    isOpen(): boolean;
    setOpen(b: boolean): void;
}

// org.bukkit.enchantments.EnchantmentTarget
declare enum EnchantmentTarget {
    ALL,
    ARMOR,
    ARMOR_FEET,
    ARMOR_LEGS,
    ARMOR_TORSO,
    ARMOR_HEAD,
    WEAPON,
    TOOL,
    BOW,
    FISHING_ROD,
    BREAKABLE,
    WEARABLE,
    TRIDENT,
    CROSSBOW,
    VANISHABLE,
}

// org.bukkit.persistence.PersistentDataType
declare interface PersistentDataType {
    getPrimitiveType(): Class;
    toPrimitive(object: any, persistentDataAdapterContext: PersistentDataAdapterContext): any;
    getComplexType(): Class;
    fromPrimitive(object: any, persistentDataAdapterContext: PersistentDataAdapterContext): any;
    BYTE: PersistentDataType;
    SHORT: PersistentDataType;
    INTEGER: PersistentDataType;
    LONG: PersistentDataType;
    FLOAT: PersistentDataType;
    DOUBLE: PersistentDataType;
    STRING: PersistentDataType;
    BYTE_ARRAY: PersistentDataType;
    INTEGER_ARRAY: PersistentDataType;
    LONG_ARRAY: PersistentDataType;
    TAG_CONTAINER_ARRAY: PersistentDataType;
    TAG_CONTAINER: PersistentDataType;
}

// org.bukkit.block.data.type.Dispenser
declare interface Dispenser extends Directional {
    isTriggered(): boolean;
    setTriggered(b: boolean): void;
}

// org.bukkit.block.data.type.Lectern
declare interface Lectern extends Directional, Powerable {
    hasBook(): boolean;
}

// org.bukkit.entity.EntityType
declare enum EntityType {
    DROPPED_ITEM,
    EXPERIENCE_ORB,
    AREA_EFFECT_CLOUD,
    ELDER_GUARDIAN,
    WITHER_SKELETON,
    STRAY,
    EGG,
    LEASH_HITCH,
    PAINTING,
    ARROW,
    SNOWBALL,
    FIREBALL,
    SMALL_FIREBALL,
    ENDER_PEARL,
    ENDER_SIGNAL,
    SPLASH_POTION,
    THROWN_EXP_BOTTLE,
    ITEM_FRAME,
    WITHER_SKULL,
    PRIMED_TNT,
    FALLING_BLOCK,
    FIREWORK,
    HUSK,
    SPECTRAL_ARROW,
    SHULKER_BULLET,
    DRAGON_FIREBALL,
    ZOMBIE_VILLAGER,
    SKELETON_HORSE,
    ZOMBIE_HORSE,
    ARMOR_STAND,
    DONKEY,
    MULE,
    EVOKER_FANGS,
    EVOKER,
    VEX,
    VINDICATOR,
    ILLUSIONER,
    MINECART_COMMAND,
    BOAT,
    MINECART,
    MINECART_CHEST,
    MINECART_FURNACE,
    MINECART_TNT,
    MINECART_HOPPER,
    MINECART_MOB_SPAWNER,
    CREEPER,
    SKELETON,
    SPIDER,
    GIANT,
    ZOMBIE,
    SLIME,
    GHAST,
    ZOMBIFIED_PIGLIN,
    ENDERMAN,
    CAVE_SPIDER,
    SILVERFISH,
    BLAZE,
    MAGMA_CUBE,
    ENDER_DRAGON,
    WITHER,
    BAT,
    WITCH,
    ENDERMITE,
    GUARDIAN,
    SHULKER,
    PIG,
    SHEEP,
    COW,
    CHICKEN,
    SQUID,
    WOLF,
    MUSHROOM_COW,
    SNOWMAN,
    OCELOT,
    IRON_GOLEM,
    HORSE,
    RABBIT,
    POLAR_BEAR,
    LLAMA,
    LLAMA_SPIT,
    PARROT,
    VILLAGER,
    ENDER_CRYSTAL,
    TURTLE,
    PHANTOM,
    TRIDENT,
    COD,
    SALMON,
    PUFFERFISH,
    TROPICAL_FISH,
    DROWNED,
    DOLPHIN,
    CAT,
    PANDA,
    PILLAGER,
    RAVAGER,
    TRADER_LLAMA,
    WANDERING_TRADER,
    FOX,
    BEE,
    HOGLIN,
    PIGLIN,
    STRIDER,
    ZOGLIN,
    PIGLIN_BRUTE,
    AXOLOTL,
    GLOW_ITEM_FRAME,
    GLOW_SQUID,
    GOAT,
    MARKER,
    FISHING_HOOK,
    LIGHTNING,
    PLAYER,
    UNKNOWN,
}

// org.bukkit.inventory.meta.BannerMeta
declare interface BannerMeta extends ItemMeta {
    getBaseColor(): DyeColor;
    setBaseColor(dyeColor: DyeColor): void;
    getPatterns(): List;
    removePattern(i: number): Pattern;
    setPattern(i: number, pattern: Pattern): void;
    addPattern(pattern: Pattern): void;
    getPattern(i: number): Pattern;
    numberOfPatterns(): number;
    setPatterns(list: List): void;
}

// org.bukkit.GameEvent
declare interface GameEvent extends Keyed {
    values(): Collection;
    getKey(): NamespacedKey;
    getByKey(namespacedKey: NamespacedKey): GameEvent;
    BLOCK_ATTACH: GameEvent;
    BLOCK_CHANGE: GameEvent;
    BLOCK_CLOSE: GameEvent;
    BLOCK_DESTROY: GameEvent;
    BLOCK_DETACH: GameEvent;
    BLOCK_OPEN: GameEvent;
    BLOCK_PLACE: GameEvent;
    BLOCK_PRESS: GameEvent;
    BLOCK_SWITCH: GameEvent;
    BLOCK_UNPRESS: GameEvent;
    BLOCK_UNSWITCH: GameEvent;
    CONTAINER_CLOSE: GameEvent;
    CONTAINER_OPEN: GameEvent;
    DISPENSE_FAIL: GameEvent;
    DRINKING_FINISH: GameEvent;
    EAT: GameEvent;
    ELYTRA_FREE_FALL: GameEvent;
    ENTITY_DAMAGED: GameEvent;
    ENTITY_KILLED: GameEvent;
    ENTITY_PLACE: GameEvent;
    EQUIP: GameEvent;
    EXPLODE: GameEvent;
    FISHING_ROD_CAST: GameEvent;
    FISHING_ROD_REEL_IN: GameEvent;
    FLAP: GameEvent;
    FLUID_PICKUP: GameEvent;
    FLUID_PLACE: GameEvent;
    HIT_GROUND: GameEvent;
    LIGHTNING_STRIKE: GameEvent;
    MINECART_MOVING: GameEvent;
    MOB_INTERACT: GameEvent;
    PISTON_CONTRACT: GameEvent;
    PISTON_EXTEND: GameEvent;
    PRIME_FUSE: GameEvent;
    PROJECTILE_LAND: GameEvent;
    PROJECTILE_SHOOT: GameEvent;
    RAVAGER_ROAR: GameEvent;
    RING_BELL: GameEvent;
    SHEAR: GameEvent;
    SHULKER_CLOSE: GameEvent;
    SHULKER_OPEN: GameEvent;
    SPLASH: GameEvent;
    STEP: GameEvent;
    SWIM: GameEvent;
    WOLF_SHAKING: GameEvent;
}

// org.bukkit.event.entity.EntityEnterLoveModeEvent
declare interface EntityEnterLoveModeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getHumanEntity(): HumanEntity;
    setTicksInLove(i: number): void;
    getTicksInLove(): number;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.player.PlayerUnregisterChannelEvent
declare interface PlayerUnregisterChannelEvent extends PlayerChannelEvent {
}

// org.bukkit.block.data.type.RedstoneWallTorch
declare interface RedstoneWallTorch extends Directional, Lightable {
}

// org.bukkit.event.EventHandler
declare interface EventHandler extends Annotation {
    priority(): EventPriority;
    ignoreCancelled(): boolean;
}

// org.bukkit.entity.Boat
declare interface Boat extends Vehicle {
    getWoodType(): TreeSpecies;
    setWoodType(treeSpecies: TreeSpecies): void;
    setMaxSpeed(d: number): void;
    setWorkOnLand(b: boolean): void;
    getWorkOnLand(): boolean;
    getMaxSpeed(): number;
    setOccupiedDeceleration(d: number): void;
    getOccupiedDeceleration(): number;
    getUnoccupiedDeceleration(): number;
    setUnoccupiedDeceleration(d: number): void;
}

// org.bukkit.event.player.PlayerToggleSneakEvent
declare interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isSneaking(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.Sign
declare interface Sign extends TileState, Colorable {
    getLine(i: number): string;
    setLine(i: number, s: string): void;
    isEditable(): boolean;
    setEditable(b: boolean): void;
    isGlowingText(): boolean;
    setGlowingText(b: boolean): void;
    getLines(): string[];
}

// org.bukkit.material.Furnace
declare interface Furnace extends FurnaceAndDispenser {
}

// org.bukkit.event.entity.StriderTemperatureChangeEvent
declare interface StriderTemperatureChangeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isShivering(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.Candle
declare interface Candle extends Lightable, Waterlogged {
    getMaximumCandles(): number;
    setCandles(i: number): void;
    getCandles(): number;
}

// org.bukkit.plugin.messaging.PluginMessageListener
declare interface PluginMessageListener {
    onPluginMessageReceived(s: string, player: Player, b: number): void;
}

// org.bukkit.material.Dispenser
declare interface Dispenser extends FurnaceAndDispenser {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
}

// org.bukkit.entity.ChestedHorse
declare interface ChestedHorse extends AbstractHorse {
    isCarryingChest(): boolean;
    setCarryingChest(b: boolean): void;
}

// org.bukkit.scoreboard.ScoreboardManager
declare interface ScoreboardManager {
    getMainScoreboard(): Scoreboard;
    getNewScoreboard(): Scoreboard;
}

// org.bukkit.entity.Tameable
declare interface Tameable extends Animals {
    getOwner(): AnimalTamer;
    setOwner(animalTamer: AnimalTamer): void;
    setTamed(b: boolean): void;
    isTamed(): boolean;
}

// org.bukkit.HeightMap
declare enum HeightMap {
    MOTION_BLOCKING,
    MOTION_BLOCKING_NO_LEAVES,
    OCEAN_FLOOR,
    OCEAN_FLOOR_WG,
    WORLD_SURFACE,
    WORLD_SURFACE_WG,
}

// org.bukkit.Keyed
declare interface Keyed {
    getKey(): NamespacedKey;
}

// org.bukkit.event.world.GenericGameEvent
declare interface GenericGameEvent extends WorldEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getEntity(): Entity;
    getEvent(): GameEvent;
    getRadius(): number;
    setRadius(i: number): void;
}

// org.bukkit.block.data.type.Cocoa
declare interface Cocoa extends Ageable, Directional {
}

// org.bukkit.entity.SizedFireball
declare interface SizedFireball extends Fireball {
    getDisplayItem(): ItemStack;
    setDisplayItem(itemStack: ItemStack): void;
}

// org.bukkit.event.player.PlayerFishEvent
declare interface PlayerFishEvent extends PlayerEvent, Cancellable {
    getState(): State;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setExpToDrop(i: number): void;
    getExpToDrop(): number;
    getHandlerList(): HandlerList;
    getCaught(): Entity;
    getHook(): FishHook;
}

// org.bukkit.material.WoodenStep
declare interface WoodenStep extends Wood {
    setInverted(b: boolean): void;
    isInverted(): boolean;
}

// org.bukkit.block.DaylightDetector
declare interface DaylightDetector extends TileState {
}

// org.bukkit.event.player.PlayerStatisticIncrementEvent
declare interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getEntityType(): EntityType;
    getMaterial(): Material;
    getStatistic(): Statistic;
    getPreviousValue(): number;
    getNewValue(): number;
}

// org.bukkit.material.Dye
declare interface Dye extends MaterialData, Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

// org.bukkit.event.entity.EntityPoseChangeEvent
declare interface EntityPoseChangeEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getPose(): Pose;
}

// org.bukkit.block.data.type.Wall
declare interface Wall extends Waterlogged {
    isUp(): boolean;
    getHeight(blockFace: BlockFace): Height;
    setUp(b: boolean): void;
    setHeight(blockFace: BlockFace, height: Height): void;
}

// org.bukkit.inventory.meta.BlockDataMeta
declare interface BlockDataMeta extends ItemMeta {
    setBlockData(blockData: BlockData): void;
    getBlockData(material: Material): BlockData;
    hasBlockData(): boolean;
}

// org.bukkit.event.inventory.PrepareItemCraftEvent
declare interface PrepareItemCraftEvent extends InventoryEvent {
    getRecipe(): Recipe;
    isRepair(): boolean;
}

// org.bukkit.StructureType
declare interface StructureType {
    getName(): string;
    getStructureTypes(): Map;
    getMapIcon(): Type;
    MINESHAFT: StructureType;
    VILLAGE: StructureType;
    NETHER_FORTRESS: StructureType;
    STRONGHOLD: StructureType;
    JUNGLE_PYRAMID: StructureType;
    OCEAN_RUIN: StructureType;
    DESERT_PYRAMID: StructureType;
    IGLOO: StructureType;
    SWAMP_HUT: StructureType;
    OCEAN_MONUMENT: StructureType;
    END_CITY: StructureType;
    WOODLAND_MANSION: StructureType;
    BURIED_TREASURE: StructureType;
    SHIPWRECK: StructureType;
    PILLAGER_OUTPOST: StructureType;
    NETHER_FOSSIL: StructureType;
    RUINED_PORTAL: StructureType;
    BASTION_REMNANT: StructureType;
}

// org.bukkit.inventory.meta.BookMeta
declare interface BookMeta extends ItemMeta {
    clone(): BookMeta;
    clone(): ItemMeta;
    clone(): any;
    spigot(): Spigot;
    getTitle(): string;
    setTitle(s: string): boolean;
    getPage(i: number): string;
    setPage(i: number, s: string): void;
    getAuthor(): string;
    setAuthor(s: string): void;
    setGeneration(generation: Generation): void;
    getGeneration(): Generation;
    getPageCount(): number;
    setPages(s: string): void;
    setPages(list: List): void;
    hasAuthor(): boolean;
    getPages(): List;
    hasGeneration(): boolean;
    hasPages(): boolean;
    hasTitle(): boolean;
    addPage(s: string): void;
}

// org.bukkit.block.data.type.Fire
declare interface Fire extends Ageable, MultipleFacing {
}

// org.bukkit.entity.Husk
declare interface Husk extends Zombie {
    getConversionTime(): number;
    setConversionTime(i: number): void;
    isConverting(): boolean;
}

// org.bukkit.inventory.meta.PotionMeta
declare interface PotionMeta extends ItemMeta {
    clone(): PotionMeta;
    clone(): ItemMeta;
    clone(): any;
    getColor(): Color;
    setColor(color: Color): void;
    setBasePotionData(potionData: PotionData): void;
    getBasePotionData(): PotionData;
    hasCustomEffects(): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    clearCustomEffects(): boolean;
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    getCustomEffects(): List;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    setMainEffect(potionEffectType: PotionEffectType): boolean;
    hasColor(): boolean;
}

// org.bukkit.util.Consumer
declare interface Consumer {
    accept(object: any): void;
}

// org.bukkit.command.defaults.HelpCommand
declare interface HelpCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

// org.bukkit.block.Structure
declare interface Structure extends TileState {
    getSeed(): number;
    getMetadata(): string;
    setMetadata(s: string): void;
    setSeed(l: number): void;
    getStructureName(): string;
    getAuthor(): string;
    setIgnoreEntities(b: boolean): void;
    getIntegrity(): number;
    setMirror(mirror: Mirror): void;
    getStructureSize(): BlockVector;
    getMirror(): Mirror;
    getRotation(): StructureRotation;
    setRotation(structureRotation: StructureRotation): void;
    setAuthor(s: string): void;
    setAuthor(livingEntity: LivingEntity): void;
    setStructureName(s: string): void;
    isIgnoreEntities(): boolean;
    setShowAir(b: boolean): void;
    getUsageMode(): UsageMode;
    setStructureSize(blockVector: BlockVector): void;
    isShowAir(): boolean;
    setUsageMode(usageMode: UsageMode): void;
    setIntegrity(f: number): void;
    setRelativePosition(blockVector: BlockVector): void;
    isBoundingBoxVisible(): boolean;
    getRelativePosition(): BlockVector;
    setBoundingBoxVisible(b: boolean): void;
}

// org.bukkit.event.player.PlayerItemHeldEvent
declare interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getNewSlot(): number;
    getPreviousSlot(): number;
}

// org.bukkit.block.Lidded
declare interface Lidded {
    close(): void;
    open(): void;
}

// org.bukkit.inventory.meta.SuspiciousStewMeta
declare interface SuspiciousStewMeta extends ItemMeta {
    clone(): SuspiciousStewMeta;
    clone(): ItemMeta;
    clone(): any;
    hasCustomEffects(): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    clearCustomEffects(): boolean;
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    getCustomEffects(): List;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
}

// org.bukkit.block.data.type.Campfire
declare interface Campfire extends Directional, Lightable, Waterlogged {
    setSignalFire(b: boolean): void;
    isSignalFire(): boolean;
}

// org.bukkit.block.data.type.TripwireHook
declare interface TripwireHook extends Attachable, Directional, Powerable {
}

// org.bukkit.event.player.PlayerTeleportEvent
declare interface PlayerTeleportEvent extends PlayerMoveEvent {
    getCause(): TeleportCause;
}

// org.bukkit.boss.DragonBattle
declare interface DragonBattle {
    getBossBar(): BossBar;
    setRespawnPhase(respawnPhase: RespawnPhase): boolean;
    getRespawnPhase(): RespawnPhase;
    resetCrystals(): void;
    getEnderDragon(): EnderDragon;
    generateEndPortal(b: boolean): boolean;
    initiateRespawn(): void;
    hasBeenPreviouslyKilled(): boolean;
    getEndPortalLocation(): Location;
}

// org.bukkit.event.player.PlayerKickEvent
declare interface PlayerKickEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getReason(): string;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setReason(s: string): void;
    getLeaveMessage(): string;
    setLeaveMessage(s: string): void;
}

// org.bukkit.inventory.meta.MapMeta
declare interface MapMeta extends ItemMeta {
    clone(): MapMeta;
    clone(): ItemMeta;
    clone(): any;
    getColor(): Color;
    setColor(color: Color): void;
    hasMapView(): boolean;
    setMapView(mapView: MapView): void;
    isScaling(): boolean;
    setScaling(b: boolean): void;
    getMapView(): MapView;
    setMapId(i: number): void;
    getLocationName(): string;
    hasLocationName(): boolean;
    hasColor(): boolean;
    getMapId(): number;
    hasMapId(): boolean;
    setLocationName(s: string): void;
}

// org.bukkit.entity.minecart.ExplosiveMinecart
declare interface ExplosiveMinecart extends Minecart {
}

// org.bukkit.inventory.FurnaceInventory
declare interface FurnaceInventory extends Inventory {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
    setFuel(itemStack: ItemStack): void;
    getFuel(): ItemStack;
    getHolder(): Furnace;
    getHolder(): InventoryHolder;
    setSmelting(itemStack: ItemStack): void;
    getSmelting(): ItemStack;
}

// org.bukkit.inventory.LlamaInventory
declare interface LlamaInventory extends AbstractHorseInventory {
    getDecor(): ItemStack;
    setDecor(itemStack: ItemStack): void;
}

// org.bukkit.event.entity.ItemDespawnEvent
declare interface ItemDespawnEvent extends EntityEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.entity.Steerable
declare interface Steerable extends Animals {
    setCurrentBoostTicks(i: number): void;
    getCurrentBoostTicks(): number;
    getBoostTicks(): number;
    setBoostTicks(i: number): void;
    hasSaddle(): boolean;
    getSteerMaterial(): Material;
    setSaddle(b: boolean): void;
}

// org.bukkit.event.world.WorldSaveEvent
declare interface WorldSaveEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.entity.NPC
declare interface NPC extends Creature {
}

// org.bukkit.block.data.type.Comparator
declare interface Comparator extends Directional, Powerable {
    getMode(): Mode;
    setMode(mode: Mode): void;
}

// org.bukkit.entity.WanderingTrader
declare interface WanderingTrader extends AbstractVillager {
    setDespawnDelay(i: number): void;
    getDespawnDelay(): number;
}

// org.bukkit.Nameable
declare interface Nameable {
    getCustomName(): string;
    setCustomName(s: string): void;
}

// org.bukkit.material.PoweredRail
declare interface PoweredRail extends ExtendedRails, Redstone {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.permissions.PermissibleBase
declare interface PermissibleBase extends Permissible {
    setOp(b: boolean): void;
    isOp(): boolean;
    removeAttachment(permissionAttachment: PermissionAttachment): void;
    hasPermission(s: string): boolean;
    hasPermission(permission: Permission): boolean;
    isPermissionSet(permission: Permission): boolean;
    isPermissionSet(s: string): boolean;
    addAttachment(plugin: Plugin, s: string, b: boolean, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean): PermissionAttachment;
    recalculatePermissions(): void;
    getEffectivePermissions(): Set;
    clearPermissions(): void;
}

// org.bukkit.block.data.Snowable
declare interface Snowable extends BlockData {
    isSnowy(): boolean;
    setSnowy(b: boolean): void;
}

// org.bukkit.enchantments.EnchantmentOffer
declare interface EnchantmentOffer {
    setCost(i: number): void;
    getCost(): number;
    getEnchantment(): Enchantment;
    setEnchantment(enchantment: Enchantment): void;
    getEnchantmentLevel(): number;
    setEnchantmentLevel(i: number): void;
}

// org.bukkit.inventory.BlockInventoryHolder
declare interface BlockInventoryHolder extends InventoryHolder {
    getBlock(): Block;
}

// org.bukkit.event.entity.EntityToggleGlideEvent
declare interface EntityToggleGlideEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    isGliding(): boolean;
}

// org.bukkit.conversations.ConversationAbandonedEvent
declare interface ConversationAbandonedEvent extends EventObject {
    getContext(): ConversationContext;
    gracefulExit(): boolean;
    getCanceller(): ConversationCanceller;
}

// org.bukkit.event.inventory.FurnaceSmeltEvent
declare interface FurnaceSmeltEvent extends BlockCookEvent {
}

// org.bukkit.event.entity.EntityToggleSwimEvent
declare interface EntityToggleSwimEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    isSwimming(): boolean;
}

// org.bukkit.entity.ThrownExpBottle
declare interface ThrownExpBottle extends ThrowableProjectile {
}

// org.bukkit.entity.Wither
declare interface Wither extends Monster, Boss {
}

// org.bukkit.material.Skull
declare interface Skull extends MaterialData, Directional {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
}

// org.bukkit.entity.SkeletonHorse
declare interface SkeletonHorse extends AbstractHorse {
}

// org.bukkit.entity.AbstractHorse
declare interface AbstractHorse extends Vehicle, InventoryHolder, Tameable {
    getVariant(): Variant;
    setVariant(variant: Variant): void;
    getInventory(): Inventory;
    getInventory(): AbstractHorseInventory;
    setJumpStrength(d: number): void;
    getDomestication(): number;
    setDomestication(i: number): void;
    getJumpStrength(): number;
    setMaxDomestication(i: number): void;
    getMaxDomestication(): number;
}

// org.bukkit.entity.LightningStrike
declare interface LightningStrike extends Entity {
    isEffect(): boolean;
    spigot(): Spigot;
    spigot(): Spigot;
    spigot(): Spigot;
}

// org.bukkit.material.PressureSensor
declare interface PressureSensor {
    isPressed(): boolean;
}

// org.bukkit.entity.Llama
declare interface Llama extends ChestedHorse {
    getStrength(): number;
    setStrength(i: number): void;
    getColor(): Color;
    getInventory(): AbstractHorseInventory;
    getInventory(): LlamaInventory;
    getInventory(): Inventory;
    setColor(color: Color): void;
}

// org.bukkit.command.defaults.VersionCommand
declare interface VersionCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

// org.bukkit.event.player.PlayerCommandSendEvent
declare interface PlayerCommandSendEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getCommands(): Collection;
}

// org.bukkit.entity.Piglin
declare interface Piglin extends PiglinAbstract, InventoryHolder {
    removeMaterialOfInterest(material: Material): boolean;
    addMaterialOfInterest(material: Material): boolean;
    removeBarterMaterial(material: Material): boolean;
    setIsAbleToHunt(b: boolean): void;
    getInterestList(): Set;
    isAbleToHunt(): boolean;
    addBarterMaterial(material: Material): boolean;
    getBarterList(): Set;
}

// org.bukkit.event.block.FluidLevelChangeEvent
declare interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setNewData(blockData: BlockData): void;
    getNewData(): BlockData;
}

// org.bukkit.Location
declare interface Location extends Cloneable, ConfigurationSerializable {
    add(vector: Vector): Location;
    add(location: Location): Location;
    add(d: number, d: number, d: number): Location;
    length(): number;
    zero(): Location;
    distance(location: Location): number;
    multiply(d: number): Location;
    serialize(): Map;
    deserialize(map: Map): Location;
    normalizeYaw(f: number): number;
    getPitch(): number;
    subtract(location: Location): Location;
    subtract(d: number, d: number, d: number): Location;
    subtract(vector: Vector): Location;
    setDirection(vector: Vector): Location;
    lengthSquared(): number;
    checkFinite(): void;
    getDirection(): Vector;
    normalizePitch(f: number): number;
    toVector(): Vector;
    distanceSquared(location: Location): number;
    getChunk(): Chunk;
    getBlockX(): number;
    locToBlock(d: number): number;
    setWorld(world: World): void;
    getY(): number;
    getBlockY(): number;
    setY(d: number): void;
    setZ(d: number): void;
    isWorldLoaded(): boolean;
    getBlockZ(): number;
    getYaw(): number;
    setYaw(f: number): void;
    setPitch(f: number): void;
    setX(d: number): void;
    getWorld(): World;
    getX(): number;
    getZ(): number;
    getBlock(): Block;
}

// org.bukkit.event.player.PlayerBucketFillEvent
declare interface PlayerBucketFillEvent extends PlayerBucketEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.entity.EntityUnleashEvent
declare interface EntityUnleashEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getReason(): UnleashReason;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.Light
declare interface Light extends Levelled, Waterlogged {
}

// org.bukkit.command.PluginIdentifiableCommand
declare interface PluginIdentifiableCommand {
    getPlugin(): Plugin;
}

// org.bukkit.command.defaults.ReloadCommand
declare interface ReloadCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

// org.bukkit.entity.Snowman
declare interface Snowman extends Golem {
    isDerp(): boolean;
    setDerp(b: boolean): void;
}

// org.bukkit.plugin.messaging.ChannelNameTooLongException
declare interface ChannelNameTooLongException extends RuntimeException {
}

// org.bukkit.entity.Drowned
declare interface Drowned extends Zombie {
}

// org.bukkit.command.FormattedCommandAlias
declare interface FormattedCommandAlias extends Command {
}

// org.bukkit.entity.WitherSkeleton
declare interface WitherSkeleton extends AbstractSkeleton {
}

// org.bukkit.inventory.MerchantRecipe
declare interface MerchantRecipe extends Recipe {
    getResult(): ItemStack;
    setVillagerExperience(i: number): void;
    getVillagerExperience(): number;
    hasExperienceReward(): boolean;
    setExperienceReward(b: boolean): void;
    getUses(): number;
    setMaxUses(i: number): void;
    addIngredient(itemStack: ItemStack): void;
    setIngredients(list: List): void;
    getIngredients(): List;
    getMaxUses(): number;
    setUses(i: number): void;
    setPriceMultiplier(f: number): void;
    removeIngredient(i: number): void;
    getPriceMultiplier(): number;
}

// org.bukkit.event.inventory.BrewEvent
declare interface BrewEvent extends BlockEvent, Cancellable {
    getContents(): BrewerInventory;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getFuelLevel(): number;
}

// eu.okaeri.poly.api.Poly
declare interface Poly {
    getDefaultBindings(scriptHelper: ScriptHelper): Map;
    getScriptManager(): ScriptManager;
}

// org.bukkit.block.TileState
declare interface TileState extends BlockState, PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}

// org.bukkit.material.MaterialData
declare interface MaterialData extends Cloneable {
    getData(): number;
    setData(b: number): void;
    getItemType(): Material;
    toItemStack(i: number): ItemStack;
    toItemStack(): ItemStack;
}

// org.bukkit.plugin.messaging.PluginMessageListenerRegistration
declare interface PluginMessageListenerRegistration {
    getChannel(): string;
    isValid(): boolean;
    getListener(): PluginMessageListener;
    getPlugin(): Plugin;
}

// org.bukkit.event.world.PortalCreateEvent
declare interface PortalCreateEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    getReason(): CreateReason;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlocks(): List;
    getEntity(): Entity;
}

// org.bukkit.attribute.Attribute
declare enum Attribute {
    GENERIC_MAX_HEALTH,
    GENERIC_FOLLOW_RANGE,
    GENERIC_KNOCKBACK_RESISTANCE,
    GENERIC_MOVEMENT_SPEED,
    GENERIC_FLYING_SPEED,
    GENERIC_ATTACK_DAMAGE,
    GENERIC_ATTACK_KNOCKBACK,
    GENERIC_ATTACK_SPEED,
    GENERIC_ARMOR,
    GENERIC_ARMOR_TOUGHNESS,
    GENERIC_LUCK,
    HORSE_JUMP_STRENGTH,
    ZOMBIE_SPAWN_REINFORCEMENTS,
}

// org.bukkit.block.data.type.RespawnAnchor
declare interface RespawnAnchor extends BlockData {
    getCharges(): number;
    getMaximumCharges(): number;
    setCharges(i: number): void;
}

// org.bukkit.event.raid.RaidTriggerEvent
declare interface RaidTriggerEvent extends RaidEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getPlayer(): Player;
}

// org.bukkit.inventory.meta.tags.CustomItemTagContainer
declare interface CustomItemTagContainer {
    isEmpty(): boolean;
    removeCustomTag(namespacedKey: NamespacedKey): void;
    hasCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType): boolean;
    getCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType): any;
    getAdapterContext(): ItemTagAdapterContext;
    setCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType, object: any): void;
}

// org.bukkit.event.block.BlockCookEvent
declare interface BlockCookEvent extends BlockEvent, Cancellable {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
    getSource(): ItemStack;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.ShapedRecipe
declare interface ShapedRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    shape(s: string): ShapedRecipe;
    getShape(): string[];
    getGroup(): string;
    setIngredient(c: string, material: Material, i: number): ShapedRecipe;
    setIngredient(c: string, material: Material): ShapedRecipe;
    setIngredient(c: string, recipeChoice: RecipeChoice): ShapedRecipe;
    setIngredient(c: string, materialData: MaterialData): ShapedRecipe;
    setGroup(s: string): void;
    getChoiceMap(): Map;
    getIngredientMap(): Map;
}

// org.bukkit.entity.ComplexEntityPart
declare interface ComplexEntityPart extends Entity {
    getParent(): ComplexLivingEntity;
}

// org.bukkit.material.RedstoneTorch
declare interface RedstoneTorch extends Torch, Redstone {
    toString(): string;
    isPowered(): boolean;
}

// org.bukkit.material.Chest
declare interface Chest extends DirectionalContainer {
}

// org.bukkit.configuration.serialization.ConfigurationSerializable
declare interface ConfigurationSerializable {
    serialize(): Map;
}

// org.bukkit.scoreboard.NameTagVisibility
declare enum NameTagVisibility {
    ALWAYS,
    NEVER,
    HIDE_FOR_OTHER_TEAMS,
    HIDE_FOR_OWN_TEAM,
}

// org.bukkit.entity.AbstractVillager
declare interface AbstractVillager extends Breedable, NPC, InventoryHolder, Merchant {
    getInventory(): Inventory;
}

// org.bukkit.plugin.java.JavaPlugin
declare interface JavaPlugin extends PluginBase {
    toString(): string;
    getResource(s: string): InputStream;
    getLogger(): Logger;
    isEnabled(): boolean;
    getServer(): Server;
    getDescription(): PluginDescriptionFile;
    getPlugin(clazz: Class): JavaPlugin;
    getCommand(s: string): PluginCommand;
    onCommand(commandSender: CommandSender, command: Command, s: string, s: string): boolean;
    onTabComplete(commandSender: CommandSender, command: Command, s: string, s: string): List;
    getConfig(): FileConfiguration;
    getDefaultWorldGenerator(s: string, s: string): ChunkGenerator;
    getDefaultBiomeProvider(s: string, s: string): BiomeProvider;
    saveConfig(): void;
    saveDefaultConfig(): void;
    saveResource(s: string, b: boolean): void;
    reloadConfig(): void;
    getPluginLoader(): PluginLoader;
    onDisable(): void;
    onLoad(): void;
    onEnable(): void;
    isNaggable(): boolean;
    getDataFolder(): File;
    getProvidingPlugin(clazz: Class): JavaPlugin;
    setNaggable(b: boolean): void;
}

// org.bukkit.block.SculkSensor
declare interface SculkSensor extends TileState {
    getLastVibrationFrequency(): number;
    setLastVibrationFrequency(i: number): void;
}

// org.bukkit.material.Bed
declare interface Bed extends MaterialData, Directional {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
    isHeadOfBed(): boolean;
    setHeadOfBed(b: boolean): void;
}

// org.bukkit.block.Banner
declare interface Banner extends TileState {
    getBaseColor(): DyeColor;
    setBaseColor(dyeColor: DyeColor): void;
    getPatterns(): List;
    removePattern(i: number): Pattern;
    setPattern(i: number, pattern: Pattern): void;
    addPattern(pattern: Pattern): void;
    getPattern(i: number): Pattern;
    numberOfPatterns(): number;
    setPatterns(list: List): void;
}

// java.net.http.HttpResponse$BodyHandlers
declare interface BodyHandlers {
    ofByteArrayConsumer(consumer: Consumer): BodyHandler;
    fromSubscriber(subscriber: Subscriber): BodyHandler;
    fromSubscriber(subscriber: Subscriber, func: Function): BodyHandler;
    ofString(): BodyHandler;
    ofString(charset: Charset): BodyHandler;
    ofPublisher(): BodyHandler;
    ofFile(path: Path): BodyHandler;
    ofFile(path: Path, openOption: OpenOption): BodyHandler;
    discarding(): BodyHandler;
    fromLineSubscriber(subscriber: Subscriber): BodyHandler;
    fromLineSubscriber(subscriber: Subscriber, func: Function, s: string): BodyHandler;
    replacing(object: any): BodyHandler;
    ofInputStream(): BodyHandler;
    ofByteArray(): BodyHandler;
    ofLines(): BodyHandler;
    buffering(bodyHandler: BodyHandler, i: number): BodyHandler;
    ofFileDownload(path: Path, openOption: OpenOption): BodyHandler;
}

// org.bukkit.event.hanging.HangingEvent
declare interface HangingEvent extends Event {
    getEntity(): Hanging;
}

// org.bukkit.plugin.messaging.StandardMessenger
declare interface StandardMessenger extends Messenger {
    validateChannel(s: string): void;
    isReservedChannel(s: string): boolean;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): void;
    registerOutgoingPluginChannel(plugin: Plugin, s: string): void;
    getOutgoingChannels(plugin: Plugin): Set;
    getOutgoingChannels(): Set;
    isRegistrationValid(pluginMessageListenerRegistration: PluginMessageListenerRegistration): boolean;
    validatePluginMessage(messenger: Messenger, plugin: Plugin, s: string, b: number): void;
    validateAndCorrectChannel(s: string): string;
    dispatchIncomingMessage(player: Player, s: string, b: number): void;
    registerIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): PluginMessageListenerRegistration;
    isOutgoingChannelRegistered(plugin: Plugin, s: string): boolean;
    getIncomingChannels(plugin: Plugin): Set;
    getIncomingChannels(): Set;
    getIncomingChannelRegistrations(plugin: Plugin, s: string): Set;
    getIncomingChannelRegistrations(plugin: Plugin): Set;
    getIncomingChannelRegistrations(s: string): Set;
    isIncomingChannelRegistered(plugin: Plugin, s: string): boolean;
}

// org.bukkit.configuration.file.YamlRepresenter
declare interface YamlRepresenter extends Representer {
}

// org.bukkit.event.block.BlockExplodeEvent
declare interface BlockExplodeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getYield(): number;
    setYield(f: number): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    blockList(): List;
}

// org.bukkit.event.block.BlockPhysicsEvent
declare interface BlockPhysicsEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getSourceBlock(): Block;
    getChangedType(): Material;
}

// org.bukkit.Statistic
declare enum Statistic {
    DAMAGE_DEALT,
    DAMAGE_TAKEN,
    DEATHS,
    MOB_KILLS,
    PLAYER_KILLS,
    FISH_CAUGHT,
    ANIMALS_BRED,
    LEAVE_GAME,
    JUMP,
    DROP_COUNT,
    DROP,
    PICKUP,
    PLAY_ONE_MINUTE,
    TOTAL_WORLD_TIME,
    WALK_ONE_CM,
    WALK_ON_WATER_ONE_CM,
    FALL_ONE_CM,
    SNEAK_TIME,
    CLIMB_ONE_CM,
    FLY_ONE_CM,
    WALK_UNDER_WATER_ONE_CM,
    MINECART_ONE_CM,
    BOAT_ONE_CM,
    PIG_ONE_CM,
    HORSE_ONE_CM,
    SPRINT_ONE_CM,
    CROUCH_ONE_CM,
    AVIATE_ONE_CM,
    MINE_BLOCK,
    USE_ITEM,
    BREAK_ITEM,
    CRAFT_ITEM,
    KILL_ENTITY,
    ENTITY_KILLED_BY,
    TIME_SINCE_DEATH,
    TALKED_TO_VILLAGER,
    TRADED_WITH_VILLAGER,
    CAKE_SLICES_EATEN,
    CAULDRON_FILLED,
    CAULDRON_USED,
    ARMOR_CLEANED,
    BANNER_CLEANED,
    BREWINGSTAND_INTERACTION,
    BEACON_INTERACTION,
    DROPPER_INSPECTED,
    HOPPER_INSPECTED,
    DISPENSER_INSPECTED,
    NOTEBLOCK_PLAYED,
    NOTEBLOCK_TUNED,
    FLOWER_POTTED,
    TRAPPED_CHEST_TRIGGERED,
    ENDERCHEST_OPENED,
    ITEM_ENCHANTED,
    RECORD_PLAYED,
    FURNACE_INTERACTION,
    CRAFTING_TABLE_INTERACTION,
    CHEST_OPENED,
    SLEEP_IN_BED,
    SHULKER_BOX_OPENED,
    TIME_SINCE_REST,
    SWIM_ONE_CM,
    DAMAGE_DEALT_ABSORBED,
    DAMAGE_DEALT_RESISTED,
    DAMAGE_BLOCKED_BY_SHIELD,
    DAMAGE_ABSORBED,
    DAMAGE_RESISTED,
    CLEAN_SHULKER_BOX,
    OPEN_BARREL,
    INTERACT_WITH_BLAST_FURNACE,
    INTERACT_WITH_SMOKER,
    INTERACT_WITH_LECTERN,
    INTERACT_WITH_CAMPFIRE,
    INTERACT_WITH_CARTOGRAPHY_TABLE,
    INTERACT_WITH_LOOM,
    INTERACT_WITH_STONECUTTER,
    BELL_RING,
    RAID_TRIGGER,
    RAID_WIN,
    INTERACT_WITH_ANVIL,
    INTERACT_WITH_GRINDSTONE,
    TARGET_HIT,
    INTERACT_WITH_SMITHING_TABLE,
    STRIDER_ONE_CM,
}

// org.bukkit.block.data.Orientable
declare interface Orientable extends BlockData {
    setAxis(axis: Axis): void;
    getAxes(): Set;
    getAxis(): Axis;
}

// org.bukkit.event.raid.RaidEvent
declare interface RaidEvent extends WorldEvent {
    getRaid(): Raid;
}

// org.bukkit.event.vehicle.VehicleExitEvent
declare interface VehicleExitEvent extends VehicleEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getExited(): LivingEntity;
}

// org.bukkit.scheduler.BukkitTask
declare interface BukkitTask {
    getOwner(): Plugin;
    cancel(): void;
    isCancelled(): boolean;
    isSync(): boolean;
    getTaskId(): number;
}

// org.bukkit.event.block.BlockPlaceEvent
declare interface BlockPlaceEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getBlockReplacedState(): BlockState;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlockPlaced(): Block;
    canBuild(): boolean;
    setBuild(b: boolean): void;
    getBlockAgainst(): Block;
    getHand(): EquipmentSlot;
    getPlayer(): Player;
    getItemInHand(): ItemStack;
}

// org.bukkit.block.Smoker
declare interface Smoker extends Furnace {
}

// org.bukkit.entity.HumanEntity
declare interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
    getName(): string;
    sleep(location: Location, b: boolean): boolean;
    hasDiscoveredRecipe(namespacedKey: NamespacedKey): boolean;
    setShoulderEntityLeft(entity: Entity): void;
    setUnsaturatedRegenRate(i: number): void;
    setSaturatedRegenRate(i: number): void;
    getShoulderEntityLeft(): Entity;
    getUnsaturatedRegenRate(): number;
    getSaturatedRegenRate(): number;
    setShoulderEntityRight(entity: Entity): void;
    getDiscoveredRecipes(): Set;
    getShoulderEntityRight(): Entity;
    openMerchant(villager: Villager, b: boolean): InventoryView;
    openMerchant(merchant: Merchant, b: boolean): InventoryView;
    closeInventory(): void;
    hasCooldown(material: Material): boolean;
    getEnderChest(): Inventory;
    getOpenInventory(): InventoryView;
    getMainHand(): MainHand;
    setWindowProperty(property: Property, i: number): boolean;
    openWorkbench(location: Location, b: boolean): InventoryView;
    openEnchanting(location: Location, b: boolean): InventoryView;
    getItemOnCursor(): ItemStack;
    openInventory(inventory: Inventory): InventoryView;
    openInventory(inventoryView: InventoryView): void;
    setItemOnCursor(itemStack: ItemStack): void;
    undiscoverRecipe(namespacedKey: NamespacedKey): boolean;
    discoverRecipe(namespacedKey: NamespacedKey): boolean;
    wakeup(b: boolean): void;
    getItemInUse(): ItemStack;
    setGameMode(gameMode: GameMode): void;
    getSaturation(): number;
    setSaturation(f: number): void;
    isBlocking(): boolean;
    getFoodLevel(): number;
    setExhaustion(f: number): void;
    setCooldown(material: Material, i: number): void;
    getSleepTicks(): number;
    getExpToLevel(): number;
    discoverRecipes(collection: Collection): number;
    isHandRaised(): boolean;
    getGameMode(): GameMode;
    undiscoverRecipes(collection: Collection): number;
    getStarvationRate(): number;
    getAttackCooldown(): number;
    getBedLocation(): Location;
    getExhaustion(): number;
    setFoodLevel(i: number): void;
    getCooldown(material: Material): number;
    setStarvationRate(i: number): void;
    dropItem(b: boolean): boolean;
    getInventory(): Inventory;
    getInventory(): PlayerInventory;
    getItemInHand(): ItemStack;
    setItemInHand(itemStack: ItemStack): void;
}

// org.bukkit.material.Gate
declare interface Gate extends MaterialData, Directional, Openable {
    isOpen(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
    setOpen(b: boolean): void;
}

// org.bukkit.util.io.BukkitObjectInputStream
declare interface BukkitObjectInputStream extends ObjectInputStream {
}

// org.bukkit.event.vehicle.VehicleMoveEvent
declare interface VehicleMoveEvent extends VehicleEvent {
    getHandlers(): HandlerList;
    getFrom(): Location;
    getHandlerList(): HandlerList;
    getTo(): Location;
}

// org.bukkit.material.Cake
declare interface Cake extends MaterialData {
    setSlicesRemaining(i: number): void;
    getSlicesEaten(): number;
    getSlicesRemaining(): number;
    setSlicesEaten(i: number): void;
}

// org.bukkit.material.Lever
declare interface Lever extends SimpleAttachableMaterialData, Redstone {
    setFacingDirection(blockFace: BlockFace): void;
    getAttachedFace(): BlockFace;
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.block.data.type.Tripwire
declare interface Tripwire extends Attachable, MultipleFacing, Powerable {
    isDisarmed(): boolean;
    setDisarmed(b: boolean): void;
}

// org.bukkit.event.server.PluginEnableEvent
declare interface PluginEnableEvent extends PluginEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.util.FileUtil
declare interface FileUtil {
    copy(file: File, file: File): boolean;
}

// org.bukkit.event.entity.EntityResurrectEvent
declare interface EntityResurrectEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.util.noise.PerlinNoiseGenerator
declare interface PerlinNoiseGenerator extends NoiseGenerator {
    getInstance(): PerlinNoiseGenerator;
    getNoise(d: number, d: number, d: number, i: number, d: number, d: number): number;
    getNoise(d: number, d: number, i: number, d: number, d: number): number;
    getNoise(d: number, i: number, d: number, d: number): number;
    getNoise(d: number, d: number, d: number): number;
    getNoise(d: number, d: number): number;
    getNoise(d: number): number;
}

// java.util.logging.Logger
declare interface Logger {
    log(level: Level, throwable: Throwable, supplier: Supplier): void;
    log(level: Level, s: string): void;
    log(logRecord: LogRecord): void;
    log(level: Level, s: string, throwable: Throwable): void;
    log(level: Level, supplier: Supplier): void;
    log(level: Level, s: string, object: any): void;
    log(level: Level, s: string, object: any): void;
    getName(): string;
    info(s: string): void;
    info(supplier: Supplier): void;
    getParent(): Logger;
    getLogger(s: string, s: string): Logger;
    getLogger(s: string): Logger;
    setParent(logger: Logger): void;
    getFilter(): Filter;
    config(s: string): void;
    config(supplier: Supplier): void;
    warning(s: string): void;
    warning(supplier: Supplier): void;
    getGlobal(): Logger;
    getAnonymousLogger(): Logger;
    getAnonymousLogger(s: string): Logger;
    setFilter(filter: Filter): void;
    logp(level: Level, s: string, s: string, supplier: Supplier): void;
    logp(level: Level, s: string, s: string, s: string): void;
    logp(level: Level, s: string, s: string, s: string, object: any): void;
    logp(level: Level, s: string, s: string, throwable: Throwable, supplier: Supplier): void;
    logp(level: Level, s: string, s: string, s: string, throwable: Throwable): void;
    logp(level: Level, s: string, s: string, s: string, object: any): void;
    logrb(level: Level, resourceBundle: ResourceBundle, s: string, throwable: Throwable): void;
    logrb(level: Level, s: string, s: string, s: string, s: string): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, object: any): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, throwable: Throwable): void;
    logrb(level: Level, s: string, s: string, resourceBundle: ResourceBundle, s: string, object: any): void;
    logrb(level: Level, resourceBundle: ResourceBundle, s: string, object: any): void;
    logrb(level: Level, s: string, s: string, resourceBundle: ResourceBundle, s: string, throwable: Throwable): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, object: any): void;
    entering(s: string, s: string, object: any): void;
    entering(s: string, s: string): void;
    entering(s: string, s: string, object: any): void;
    exiting(s: string, s: string): void;
    exiting(s: string, s: string, object: any): void;
    throwing(s: string, s: string, throwable: Throwable): void;
    severe(supplier: Supplier): void;
    severe(s: string): void;
    fine(supplier: Supplier): void;
    fine(s: string): void;
    finer(supplier: Supplier): void;
    finer(s: string): void;
    finest(supplier: Supplier): void;
    finest(s: string): void;
    setLevel(level: Level): void;
    getLevel(): Level;
    addHandler(handler: Handler): void;
    removeHandler(handler: Handler): void;
    getHandlers(): Handler[];
    setUseParentHandlers(b: boolean): void;
    getUseParentHandlers(): boolean;
    getResourceBundleName(): string;
    isLoggable(level: Level): boolean;
    setResourceBundle(resourceBundle: ResourceBundle): void;
    getResourceBundle(): ResourceBundle;
    GLOBAL_LOGGER_NAME: string;
    global: Logger;
}

// org.bukkit.util.RayTraceResult
declare interface RayTraceResult {
    getHitBlock(): Block;
    getHitEntity(): Entity;
    getHitBlockFace(): BlockFace;
    getHitPosition(): Vector;
}

// org.bukkit.RegionAccessor
declare interface RegionAccessor {
    getType(location: Location): Material;
    getType(i: number, i: number, i: number): Material;
    setType(location: Location, material: Material): void;
    setType(i: number, i: number, i: number, material: Material): void;
    getEntitiesByClasses(clazz: Class): Collection;
    getBiome(location: Location): Biome;
    getBiome(i: number, i: number, i: number): Biome;
    getEntities(): List;
    setBlockData(location: Location, blockData: BlockData): void;
    setBlockData(i: number, i: number, i: number, blockData: BlockData): void;
    getBlockData(location: Location): BlockData;
    getBlockData(i: number, i: number, i: number): BlockData;
    generateTree(location: Location, random: Random, treeType: TreeType, consumer: Consumer): boolean;
    generateTree(location: Location, random: Random, treeType: TreeType): boolean;
    getLivingEntities(): List;
    spawn(location: Location, clazz: Class, b: boolean, consumer: Consumer): Entity;
    spawn(location: Location, clazz: Class): Entity;
    spawn(location: Location, clazz: Class, consumer: Consumer): Entity;
    getBlockState(i: number, i: number, i: number): BlockState;
    getBlockState(location: Location): BlockState;
    spawnEntity(location: Location, entityType: EntityType): Entity;
    spawnEntity(location: Location, entityType: EntityType, b: boolean): Entity;
    getEntitiesByClass(clazz: Class): Collection;
    setBiome(location: Location, biome: Biome): void;
    setBiome(i: number, i: number, i: number, biome: Biome): void;
}

// org.bukkit.block.Campfire
declare interface Campfire extends TileState {
    getSize(): number;
    setCookTime(i: number, i: number): void;
    getCookTime(i: number): number;
    getCookTimeTotal(i: number): number;
    setCookTimeTotal(i: number, i: number): void;
    setItem(i: number, itemStack: ItemStack): void;
    getItem(i: number): ItemStack;
}

// org.bukkit.block.Lectern
declare interface Lectern extends TileState, BlockInventoryHolder {
    getInventory(): Inventory;
    getPage(): number;
    setPage(i: number): void;
    getSnapshotInventory(): Inventory;
}

// org.bukkit.block.data.MultipleFacing
declare interface MultipleFacing extends BlockData {
    getFaces(): Set;
    setFace(blockFace: BlockFace, b: boolean): void;
    getAllowedFaces(): Set;
    hasFace(blockFace: BlockFace): boolean;
}

// org.bukkit.event.Cancellable
declare interface Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.player.PlayerPickupArrowEvent
declare interface PlayerPickupArrowEvent extends PlayerPickupItemEvent {
    getArrow(): AbstractArrow;
}

// org.bukkit.plugin.PluginLoadOrder
declare enum PluginLoadOrder {
    STARTUP,
    POSTWORLD,
}

// org.bukkit.util.CachedServerIcon
declare interface CachedServerIcon {
}

// org.bukkit.material.Crops
declare interface Crops extends MaterialData {
    getState(): CropState;
    setState(cropState: CropState): void;
}

// org.bukkit.block.DoubleChest
declare interface DoubleChest extends InventoryHolder {
    getLocation(): Location;
    getY(): number;
    getWorld(): World;
    getX(): number;
    getZ(): number;
    getInventory(): Inventory;
    getLeftSide(): InventoryHolder;
    getRightSide(): InventoryHolder;
}

// org.bukkit.event.server.ServerListPingEvent
declare interface ServerListPingEvent extends ServerEvent, Iterable {
    iterator(): Iterator;
    getAddress(): InetAddress;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getMaxPlayers(): number;
    getMotd(): string;
    setMotd(s: string): void;
    getNumPlayers(): number;
    setServerIcon(cachedServerIcon: CachedServerIcon): void;
    setMaxPlayers(i: number): void;
}

// org.bukkit.Utility
declare interface Utility extends Annotation {
}

// org.bukkit.event.entity.ItemSpawnEvent
declare interface ItemSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): Item;
}

// org.bukkit.command.CommandException
declare interface CommandException extends RuntimeException {
}

// org.bukkit.event.entity.ItemMergeEvent
declare interface ItemMergeEvent extends EntityEvent, Cancellable {
    getTarget(): Item;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.metadata.Metadatable
declare interface Metadatable {
    getMetadata(s: string): List;
    hasMetadata(s: string): boolean;
    removeMetadata(s: string, plugin: Plugin): void;
    setMetadata(s: string, metadataValue: MetadataValue): void;
}

// org.bukkit.persistence.PersistentDataHolder
declare interface PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}

// org.bukkit.util.noise.OctaveGenerator
declare interface OctaveGenerator {
    setScale(d: number): void;
    setXScale(d: number): void;
    getZScale(): number;
    getOctaves(): NoiseGenerator[];
    noise(d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number, d: number, b: boolean): number;
    getYScale(): number;
    setYScale(d: number): void;
    setZScale(d: number): void;
    getXScale(): number;
}

// org.bukkit.event.player.PlayerCommandPreprocessEvent
declare interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
    getMessage(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRecipients(): Set;
    setMessage(s: string): void;
    setPlayer(player: Player): void;
}

// org.bukkit.material.ExtendedRails
declare interface ExtendedRails extends Rails {
}

// org.bukkit.event.block.BlockBurnEvent
declare interface BlockBurnEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getIgnitingBlock(): Block;
}

// org.bukkit.block.EndGateway
declare interface EndGateway extends TileState {
    setAge(l: number): void;
    getExitLocation(): Location;
    setExitLocation(location: Location): void;
    isExactTeleport(): boolean;
    setExactTeleport(b: boolean): void;
    getAge(): number;
}

// org.bukkit.inventory.meta.tags.ItemTagAdapterContext
declare interface ItemTagAdapterContext {
    newTagContainer(): CustomItemTagContainer;
}

// org.bukkit.util.noise.SimplexNoiseGenerator
declare interface SimplexNoiseGenerator extends PerlinNoiseGenerator {
    noise(d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number): number;
    getNoise(d: number, d: number, d: number, d: number): number;
}

// org.bukkit.entity.Spellcaster
declare interface Spellcaster extends Illager {
    getSpell(): Spell;
    setSpell(spell: Spell): void;
}

// org.bukkit.event.entity.EntitySpellCastEvent
declare interface EntitySpellCastEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getSpell(): Spell;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.entity.PigZombieAngerEvent
declare interface PigZombieAngerEvent extends EntityEvent, Cancellable {
    getTarget(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getNewAnger(): number;
    setNewAnger(i: number): void;
}

// org.bukkit.WorldType
declare enum WorldType {
    NORMAL,
    FLAT,
    LARGE_BIOMES,
    AMPLIFIED,
}

// org.bukkit.event.entity.VillagerReplenishTradeEvent
declare interface VillagerReplenishTradeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getRecipe(): MerchantRecipe;
    setRecipe(merchantRecipe: MerchantRecipe): void;
    getBonus(): number;
    setBonus(i: number): void;
}

// org.bukkit.scoreboard.Team
declare interface Team {
    getName(): string;
    addEntry(s: string): void;
    getSize(): number;
    getEntries(): Set;
    unregister(): void;
    setPrefix(s: string): void;
    getPrefix(): string;
    getDisplayName(): string;
    removeEntry(s: string): boolean;
    setOption(option: Option, optionStatus: OptionStatus): void;
    getOption(option: Option): OptionStatus;
    setDisplayName(s: string): void;
    getScoreboard(): Scoreboard;
    getColor(): ChatColor;
    getPlayers(): Set;
    setColor(chatColor: ChatColor): void;
    addPlayer(offlinePlayer: OfflinePlayer): void;
    removePlayer(offlinePlayer: OfflinePlayer): boolean;
    getSuffix(): string;
    setSuffix(s: string): void;
    hasPlayer(offlinePlayer: OfflinePlayer): boolean;
    hasEntry(s: string): boolean;
    allowFriendlyFire(): boolean;
    canSeeFriendlyInvisibles(): boolean;
    setCanSeeFriendlyInvisibles(b: boolean): void;
    getNameTagVisibility(): NameTagVisibility;
    setNameTagVisibility(nameTagVisibility: NameTagVisibility): void;
    setAllowFriendlyFire(b: boolean): void;
}

// org.bukkit.UnsafeValues
declare interface UnsafeValues {
    toLegacy(material: Material): Material;
    processClass(pluginDescriptionFile: PluginDescriptionFile, s: string, b: number): number[];
    loadAdvancement(namespacedKey: NamespacedKey, s: string): Advancement;
    removeAdvancement(namespacedKey: NamespacedKey): boolean;
    getDataVersion(): number;
    checkSupported(pluginDescriptionFile: PluginDescriptionFile): void;
    modifyItemStack(itemStack: ItemStack, s: string): ItemStack;
    getMaterial(s: string, i: number): Material;
    fromLegacy(material: Material): Material;
    fromLegacy(material: Material, b: number): BlockData;
    fromLegacy(materialData: MaterialData): Material;
    fromLegacy(materialData: MaterialData, b: boolean): Material;
}

// org.bukkit.event.entity.EntityTargetLivingEntityEvent
declare interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
}

// org.bukkit.block.Jigsaw
declare interface Jigsaw extends TileState {
}

// org.bukkit.event.entity.EntityDeathEvent
declare interface EntityDeathEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getDroppedExp(): number;
    setDroppedExp(i: number): void;
    getHandlerList(): HandlerList;
    getDrops(): List;
}

// org.bukkit.event.block.BlockDropItemEvent
declare interface BlockDropItemEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getItems(): List;
    getHandlerList(): HandlerList;
    getPlayer(): Player;
    getBlockState(): BlockState;
}

// org.bukkit.structure.StructureManager
declare interface StructureManager {
    copy(structure: Structure): Structure;
    registerStructure(namespacedKey: NamespacedKey, structure: Structure): Structure;
    saveStructure(namespacedKey: NamespacedKey): void;
    saveStructure(namespacedKey: NamespacedKey, structure: Structure): void;
    saveStructure(outputStream: OutputStream, structure: Structure): void;
    saveStructure(file: File, structure: Structure): void;
    loadStructure(inputStream: InputStream): Structure;
    loadStructure(file: File): Structure;
    loadStructure(namespacedKey: NamespacedKey): Structure;
    loadStructure(namespacedKey: NamespacedKey, b: boolean): Structure;
    deleteStructure(namespacedKey: NamespacedKey): void;
    deleteStructure(namespacedKey: NamespacedKey, b: boolean): void;
    getStructures(): Map;
    getStructureFile(namespacedKey: NamespacedKey): File;
    getStructure(namespacedKey: NamespacedKey): Structure;
    createStructure(): Structure;
    unregisterStructure(namespacedKey: NamespacedKey): Structure;
}

// org.bukkit.block.data.type.WallSign
declare interface WallSign extends Directional, Waterlogged {
}

// org.bukkit.entity.AreaEffectCloud
declare interface AreaEffectCloud extends Entity {
    getSource(): ProjectileSource;
    getDuration(): number;
    setSource(projectileSource: ProjectileSource): void;
    getColor(): Color;
    setColor(color: Color): void;
    setDuration(i: number): void;
    getDurationOnUse(): number;
    setDurationOnUse(i: number): void;
    getRadius(): number;
    setRadius(f: number): void;
    getRadiusOnUse(): number;
    getRadiusPerTick(): number;
    setRadiusPerTick(f: number): void;
    setRadiusOnUse(f: number): void;
    getParticle(): Particle;
    setParticle(particle: Particle, object: any): void;
    setParticle(particle: Particle): void;
    setBasePotionData(potionData: PotionData): void;
    getBasePotionData(): PotionData;
    hasCustomEffects(): boolean;
    setWaitTime(i: number): void;
    getWaitTime(): number;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    clearCustomEffects(): void;
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    getCustomEffects(): List;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    setReapplicationDelay(i: number): void;
    getReapplicationDelay(): number;
}

// org.bukkit.material.Attachable
declare interface Attachable extends Directional {
    getAttachedFace(): BlockFace;
}

// org.bukkit.block.Dispenser
declare interface Dispenser extends Container, Nameable, Lootable {
    dispense(): boolean;
    getBlockProjectileSource(): BlockProjectileSource;
}

// org.bukkit.command.Command
declare interface Command {
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    setName(s: string): boolean;
    setPermission(s: string): void;
    getPermission(): string;
    unregister(commandMap: CommandMap): boolean;
    getDescription(): string;
    setUsage(s: string): Command;
    getLabel(): string;
    testPermission(commandSender: CommandSender): boolean;
    setLabel(s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string, location: Location): List;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
    getUsage(): string;
    setAliases(list: List): Command;
    setDescription(s: string): Command;
    getAliases(): List;
    testPermissionSilent(commandSender: CommandSender): boolean;
    setPermissionMessage(s: string): Command;
    broadcastCommandMessage(commandSender: CommandSender, s: string, b: boolean): void;
    broadcastCommandMessage(commandSender: CommandSender, s: string): void;
    getPermissionMessage(): string;
    timings: CustomTimingsHandler;
}

// org.bukkit.event.server.ServiceRegisterEvent
declare interface ServiceRegisterEvent extends ServiceEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.material.FlowerPot
declare interface FlowerPot extends MaterialData {
    getContents(): MaterialData;
    setContents(materialData: MaterialData): void;
}

// org.bukkit.permissions.PermissionAttachment
declare interface PermissionAttachment {
    remove(): boolean;
    getPermissions(): Map;
    setPermission(permission: Permission, b: boolean): void;
    setPermission(s: string, b: boolean): void;
    getRemovalCallback(): PermissionRemovedExecutor;
    getPlugin(): Plugin;
    unsetPermission(permission: Permission): void;
    unsetPermission(s: string): void;
    setRemovalCallback(permissionRemovedExecutor: PermissionRemovedExecutor): void;
    getPermissible(): Permissible;
}

// org.bukkit.command.TabExecutor
declare interface TabExecutor extends TabCompleter, CommandExecutor {
}

// org.bukkit.block.data.type.Furnace
declare interface Furnace extends Directional, Lightable {
}

// org.bukkit.plugin.messaging.PluginMessageRecipient
declare interface PluginMessageRecipient {
    getListeningPluginChannels(): Set;
    sendPluginMessage(plugin: Plugin, s: string, b: number): void;
}

// org.bukkit.event.entity.EntityExhaustionEvent
declare interface EntityExhaustionEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getExhaustionReason(): ExhaustionReason;
    setExhaustion(f: number): void;
    getExhaustion(): number;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.entity.EntitySpawnEvent
declare interface EntitySpawnEvent extends EntityEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.EnchantingInventory
declare interface EnchantingInventory extends Inventory {
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
    setSecondary(itemStack: ItemStack): void;
    getSecondary(): ItemStack;
}

// org.bukkit.BanList
declare interface BanList {
    isBanned(s: string): boolean;
    addBan(s: string, s: string, date: Date, s: string): BanEntry;
    getBanEntries(): Set;
    pardon(s: string): void;
    getBanEntry(s: string): BanEntry;
}

// org.bukkit.event.entity.CreatureSpawnEvent
declare interface CreatureSpawnEvent extends EntitySpawnEvent {
    getSpawnReason(): SpawnReason;
    getEntity(): LivingEntity;
    getEntity(): Entity;
}

// org.bukkit.Registry
declare interface Registry extends Iterable {
    get(namespacedKey: NamespacedKey): Keyed;
    ADVANCEMENT: Registry;
    ART: Registry;
    ATTRIBUTE: Registry;
    BIOME: Registry;
    BOSS_BARS: Registry;
    ENCHANTMENT: Registry;
    ENTITY_TYPE: Registry;
    LOOT_TABLES: Registry;
    MATERIAL: Registry;
    STATISTIC: Registry;
    SOUNDS: Registry;
    VILLAGER_PROFESSION: Registry;
    VILLAGER_TYPE: Registry;
    MEMORY_MODULE_TYPE: Registry;
    FLUID: Registry;
    GAME_EVENT: Registry;
}

// org.bukkit.conversations.NullConversationPrefix
declare interface NullConversationPrefix extends ConversationPrefix {
    getPrefix(conversationContext: ConversationContext): string;
}

// org.bukkit.event.player.PlayerTakeLecternBookEvent
declare interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBook(): ItemStack;
    getLectern(): Lectern;
}

// org.bukkit.Instrument
declare enum Instrument {
    PIANO,
    BASS_DRUM,
    SNARE_DRUM,
    STICKS,
    BASS_GUITAR,
    FLUTE,
    BELL,
    GUITAR,
    CHIME,
    XYLOPHONE,
    IRON_XYLOPHONE,
    COW_BELL,
    DIDGERIDOO,
    BIT,
    BANJO,
    PLING,
}

// org.bukkit.entity.Ambient
declare interface Ambient extends Mob {
}

// org.bukkit.material.Hopper
declare interface Hopper extends MaterialData, Directional, Redstone {
    isActive(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setActive(b: boolean): void;
    getFacing(): BlockFace;
    isPowered(): boolean;
}

// org.bukkit.entity.WitherSkull
declare interface WitherSkull extends Fireball {
    isCharged(): boolean;
    setCharged(b: boolean): void;
}

// org.bukkit.material.RedstoneWire
declare interface RedstoneWire extends MaterialData, Redstone {
    isPowered(): boolean;
}

// org.bukkit.event.entity.ExpBottleEvent
declare interface ExpBottleEvent extends ProjectileHitEvent {
    getExperience(): number;
    setExperience(i: number): void;
    getShowEffect(): boolean;
    setShowEffect(b: boolean): void;
}

// org.bukkit.event.player.PlayerBedEnterEvent
declare interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    useBed(): Result;
    getBedEnterResult(): BedEnterResult;
    getBed(): Block;
    setUseBed(result: Result): void;
}

// org.bukkit.block.data.type.CaveVines
declare interface CaveVines extends Ageable, CaveVinesPlant {
}

// org.bukkit.potion.PotionEffectType
declare interface PotionEffectType {
    values(): PotionEffectType[];
    getName(): string;
    getId(): number;
    getByName(s: string): PotionEffectType;
    getById(i: number): PotionEffectType;
    getColor(): Color;
    stopAcceptingRegistrations(): void;
    createEffect(i: number, i: number): PotionEffect;
    isInstant(): boolean;
    registerPotionEffectType(potionEffectType: PotionEffectType): void;
    getDurationModifier(): number;
    SPEED: PotionEffectType;
    SLOW: PotionEffectType;
    FAST_DIGGING: PotionEffectType;
    SLOW_DIGGING: PotionEffectType;
    INCREASE_DAMAGE: PotionEffectType;
    HEAL: PotionEffectType;
    HARM: PotionEffectType;
    JUMP: PotionEffectType;
    CONFUSION: PotionEffectType;
    REGENERATION: PotionEffectType;
    DAMAGE_RESISTANCE: PotionEffectType;
    FIRE_RESISTANCE: PotionEffectType;
    WATER_BREATHING: PotionEffectType;
    INVISIBILITY: PotionEffectType;
    BLINDNESS: PotionEffectType;
    NIGHT_VISION: PotionEffectType;
    HUNGER: PotionEffectType;
    WEAKNESS: PotionEffectType;
    POISON: PotionEffectType;
    WITHER: PotionEffectType;
    HEALTH_BOOST: PotionEffectType;
    ABSORPTION: PotionEffectType;
    SATURATION: PotionEffectType;
    GLOWING: PotionEffectType;
    LEVITATION: PotionEffectType;
    LUCK: PotionEffectType;
    UNLUCK: PotionEffectType;
    SLOW_FALLING: PotionEffectType;
    CONDUIT_POWER: PotionEffectType;
    DOLPHINS_GRACE: PotionEffectType;
    BAD_OMEN: PotionEffectType;
    HERO_OF_THE_VILLAGE: PotionEffectType;
}

// org.bukkit.conversations.ManuallyAbandonedConversationCanceller
declare interface ManuallyAbandonedConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

// org.bukkit.inventory.meta.CrossbowMeta
declare interface CrossbowMeta extends ItemMeta {
    getChargedProjectiles(): List;
    addChargedProjectile(itemStack: ItemStack): void;
    hasChargedProjectiles(): boolean;
    setChargedProjectiles(list: List): void;
}

// org.bukkit.metadata.MetadataConversionException
declare interface MetadataConversionException extends RuntimeException {
}

// org.bukkit.event.EventException
declare interface EventException extends Exception {
    getCause(): Throwable;
}

// org.bukkit.WorldBorder
declare interface WorldBorder {
    getSize(): number;
    reset(): void;
    setSize(d: number, l: number): void;
    setSize(d: number): void;
    getDamageAmount(): number;
    setDamageAmount(d: number): void;
    setWarningTime(i: number): void;
    setWarningDistance(i: number): void;
    setCenter(location: Location): void;
    setCenter(d: number, d: number): void;
    setDamageBuffer(d: number): void;
    getDamageBuffer(): number;
    getWarningTime(): number;
    getWarningDistance(): number;
    isInside(location: Location): boolean;
    getCenter(): Location;
}

// org.bukkit.event.entity.EntityCombustByEntityEvent
declare interface EntityCombustByEntityEvent extends EntityCombustEvent {
    getCombuster(): Entity;
}

// org.bukkit.plugin.InvalidDescriptionException
declare interface InvalidDescriptionException extends Exception {
}

// org.bukkit.ChunkSnapshot
declare interface ChunkSnapshot {
    contains(blockData: BlockData): boolean;
    getData(i: number, i: number, i: number): number;
    getRawBiomeTemperature(i: number, i: number): number;
    getRawBiomeTemperature(i: number, i: number, i: number): number;
    getBlockEmittedLight(i: number, i: number, i: number): number;
    getHighestBlockYAt(i: number, i: number): number;
    getCaptureFullTime(): number;
    getBlockType(i: number, i: number, i: number): Material;
    getBiome(i: number, i: number, i: number): Biome;
    getBiome(i: number, i: number): Biome;
    getWorldName(): string;
    isSectionEmpty(i: number): boolean;
    getBlockSkyLight(i: number, i: number, i: number): number;
    getX(): number;
    getZ(): number;
    getBlockData(i: number, i: number, i: number): BlockData;
}

// org.bukkit.plugin.Plugin
declare interface Plugin extends TabExecutor {
    getName(): string;
    getResource(s: string): InputStream;
    getLogger(): Logger;
    isEnabled(): boolean;
    getServer(): Server;
    getDescription(): PluginDescriptionFile;
    getConfig(): FileConfiguration;
    getDefaultWorldGenerator(s: string, s: string): ChunkGenerator;
    getDefaultBiomeProvider(s: string, s: string): BiomeProvider;
    saveConfig(): void;
    saveDefaultConfig(): void;
    saveResource(s: string, b: boolean): void;
    reloadConfig(): void;
    getPluginLoader(): PluginLoader;
    onDisable(): void;
    onLoad(): void;
    onEnable(): void;
    isNaggable(): boolean;
    getDataFolder(): File;
    setNaggable(b: boolean): void;
}

// org.bukkit.util.NumberConversions
declare interface NumberConversions {
    floor(d: number): number;
    ceil(d: number): number;
    isFinite(f: number): boolean;
    isFinite(d: number): boolean;
    round(d: number): number;
    square(d: number): number;
    checkFinite(d: number, s: string): void;
    checkFinite(f: number, s: string): void;
    toFloat(object: any): number;
    toDouble(object: any): number;
    toShort(object: any): number;
    toByte(object: any): number;
    toInt(object: any): number;
    toLong(object: any): number;
}

// org.bukkit.entity.SpectralArrow
declare interface SpectralArrow extends AbstractArrow {
    setGlowingTicks(i: number): void;
    getGlowingTicks(): number;
}

// org.bukkit.event.player.PlayerChangedWorldEvent
declare interface PlayerChangedWorldEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getFrom(): World;
    getHandlerList(): HandlerList;
}

// org.bukkit.advancement.Advancement
declare interface Advancement extends Keyed {
    getCriteria(): Collection;
}

// org.bukkit.inventory.EntityEquipment
declare interface EntityEquipment {
    clear(): void;
    getChestplateDropChance(): number;
    setItemInHandDropChance(f: number): void;
    getItemInHandDropChance(): number;
    setLeggingsDropChance(f: number): void;
    getLeggingsDropChance(): number;
    setHelmetDropChance(f: number): void;
    getItemInMainHandDropChance(): number;
    setChestplateDropChance(f: number): void;
    setItemInOffHandDropChance(f: number): void;
    setItemInMainHandDropChance(f: number): void;
    getItemInOffHandDropChance(): number;
    getHelmetDropChance(): number;
    setItem(equipmentSlot: EquipmentSlot, itemStack: ItemStack, b: boolean): void;
    setItem(equipmentSlot: EquipmentSlot, itemStack: ItemStack): void;
    getItem(equipmentSlot: EquipmentSlot): ItemStack;
    setChestplate(itemStack: ItemStack, b: boolean): void;
    setChestplate(itemStack: ItemStack): void;
    getBoots(): ItemStack;
    getItemInHand(): ItemStack;
    setHelmet(itemStack: ItemStack): void;
    setHelmet(itemStack: ItemStack, b: boolean): void;
    setLeggings(itemStack: ItemStack, b: boolean): void;
    setLeggings(itemStack: ItemStack): void;
    setBoots(itemStack: ItemStack, b: boolean): void;
    setBoots(itemStack: ItemStack): void;
    setItemInHand(itemStack: ItemStack): void;
    getLeggings(): ItemStack;
    getHelmet(): ItemStack;
    getChestplate(): ItemStack;
    getHolder(): Entity;
    getArmorContents(): ItemStack[];
    setBootsDropChance(f: number): void;
    setArmorContents(itemStack: ItemStack): void;
    setItemInMainHand(itemStack: ItemStack, b: boolean): void;
    setItemInMainHand(itemStack: ItemStack): void;
    getItemInOffHand(): ItemStack;
    getItemInMainHand(): ItemStack;
    getBootsDropChance(): number;
    setItemInOffHand(itemStack: ItemStack, b: boolean): void;
    setItemInOffHand(itemStack: ItemStack): void;
}

// org.bukkit.event.player.PlayerJoinEvent
declare interface PlayerJoinEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setJoinMessage(s: string): void;
    getJoinMessage(): string;
}

// org.bukkit.conversations.FixedSetPrompt
declare interface FixedSetPrompt extends ValidatingPrompt {
}

// org.bukkit.conversations.ValidatingPrompt
declare interface ValidatingPrompt extends Prompt {
    blocksForInput(conversationContext: ConversationContext): boolean;
    acceptInput(conversationContext: ConversationContext, s: string): Prompt;
}

// org.bukkit.configuration.serialization.ConfigurationSerialization
declare interface ConfigurationSerialization {
    deserialize(map: Map): ConfigurationSerializable;
    getClassByAlias(s: string): Class;
    getAlias(clazz: Class): string;
    unregisterClass(clazz: Class): void;
    unregisterClass(s: string): void;
    registerClass(clazz: Class, s: string): void;
    registerClass(clazz: Class): void;
    deserializeObject(map: Map, clazz: Class): ConfigurationSerializable;
    deserializeObject(map: Map): ConfigurationSerializable;
    SERIALIZED_TYPE_KEY: string;
}

// org.bukkit.potion.PotionEffectTypeWrapper
declare interface PotionEffectTypeWrapper extends PotionEffectType {
    getType(): PotionEffectType;
}

// org.bukkit.Tag
declare interface Tag extends Keyed {
    isTagged(keyed: Keyed): boolean;
    getValues(): Set;
    REGISTRY_BLOCKS: string;
    WOOL: Tag;
    PLANKS: Tag;
    STONE_BRICKS: Tag;
    WOODEN_BUTTONS: Tag;
    BUTTONS: Tag;
    CARPETS: Tag;
    WOODEN_DOORS: Tag;
    WOODEN_STAIRS: Tag;
    WOODEN_SLABS: Tag;
    WOODEN_FENCES: Tag;
    PRESSURE_PLATES: Tag;
    WOODEN_PRESSURE_PLATES: Tag;
    STONE_PRESSURE_PLATES: Tag;
    WOODEN_TRAPDOORS: Tag;
    DOORS: Tag;
    SAPLINGS: Tag;
    LOGS_THAT_BURN: Tag;
    LOGS: Tag;
    DARK_OAK_LOGS: Tag;
    OAK_LOGS: Tag;
    BIRCH_LOGS: Tag;
    ACACIA_LOGS: Tag;
    JUNGLE_LOGS: Tag;
    SPRUCE_LOGS: Tag;
    CRIMSON_STEMS: Tag;
    WARPED_STEMS: Tag;
    BANNERS: Tag;
    SAND: Tag;
    STAIRS: Tag;
    SLABS: Tag;
    WALLS: Tag;
    ANVIL: Tag;
    RAILS: Tag;
    LEAVES: Tag;
    TRAPDOORS: Tag;
    FLOWER_POTS: Tag;
    SMALL_FLOWERS: Tag;
    BEDS: Tag;
    FENCES: Tag;
    TALL_FLOWERS: Tag;
    FLOWERS: Tag;
    PIGLIN_REPELLENTS: Tag;
    GOLD_ORES: Tag;
    IRON_ORES: Tag;
    DIAMOND_ORES: Tag;
    REDSTONE_ORES: Tag;
    LAPIS_ORES: Tag;
    COAL_ORES: Tag;
    EMERALD_ORES: Tag;
    COPPER_ORES: Tag;
    NON_FLAMMABLE_WOOD: Tag;
    CANDLES: Tag;
    DIRT: Tag;
    ENDERMAN_HOLDABLE: Tag;
    ICE: Tag;
    VALID_SPAWN: Tag;
    IMPERMEABLE: Tag;
    UNDERWATER_BONEMEALS: Tag;
    CORAL_BLOCKS: Tag;
    WALL_CORALS: Tag;
    CORAL_PLANTS: Tag;
    CORALS: Tag;
    BAMBOO_PLANTABLE_ON: Tag;
    STANDING_SIGNS: Tag;
    WALL_SIGNS: Tag;
    SIGNS: Tag;
    DRAGON_IMMUNE: Tag;
    WITHER_IMMUNE: Tag;
    WITHER_SUMMON_BASE_BLOCKS: Tag;
    BEEHIVES: Tag;
    CROPS: Tag;
    BEE_GROWABLES: Tag;
    PORTALS: Tag;
    FIRE: Tag;
    NYLIUM: Tag;
    WART_BLOCKS: Tag;
    BEACON_BASE_BLOCKS: Tag;
    SOUL_SPEED_BLOCKS: Tag;
    WALL_POST_OVERRIDE: Tag;
    CLIMBABLE: Tag;
    SHULKER_BOXES: Tag;
    HOGLIN_REPELLENTS: Tag;
    SOUL_FIRE_BASE_BLOCKS: Tag;
    STRIDER_WARM_BLOCKS: Tag;
    CAMPFIRES: Tag;
    GUARDED_BY_PIGLINS: Tag;
    PREVENT_MOB_SPAWNING_INSIDE: Tag;
    FENCE_GATES: Tag;
    UNSTABLE_BOTTOM_CENTER: Tag;
    MUSHROOM_GROW_BLOCK: Tag;
    INFINIBURN_OVERWORLD: Tag;
    INFINIBURN_NETHER: Tag;
    INFINIBURN_END: Tag;
    BASE_STONE_OVERWORLD: Tag;
    STONE_ORE_REPLACEABLES: Tag;
    DEEPSLATE_ORE_REPLACEABLES: Tag;
    BASE_STONE_NETHER: Tag;
    CANDLE_CAKES: Tag;
    CAULDRONS: Tag;
    CRYSTAL_SOUND_BLOCKS: Tag;
    INSIDE_STEP_SOUND_BLOCKS: Tag;
    OCCLUDES_VIBRATION_SIGNALS: Tag;
    DRIPSTONE_REPLACEABLE: Tag;
    CAVE_VINES: Tag;
    MOSS_REPLACEABLE: Tag;
    LUSH_GROUND_REPLACEABLE: Tag;
    SMALL_DRIPLEAF_PLACEABLE: Tag;
    SNOW: Tag;
    MINEABLE_AXE: Tag;
    MINEABLE_HOE: Tag;
    MINEABLE_PICKAXE: Tag;
    MINEABLE_SHOVEL: Tag;
    NEEDS_DIAMOND_TOOL: Tag;
    NEEDS_IRON_TOOL: Tag;
    NEEDS_STONE_TOOL: Tag;
    FEATURES_CANNOT_REPLACE: Tag;
    LAVA_POOL_STONE_CANNOT_REPLACE: Tag;
    GEODE_INVALID_BLOCKS: Tag;
    REGISTRY_ITEMS: string;
    ITEMS_PIGLIN_LOVED: Tag;
    IGNORED_BY_PIGLIN_BABIES: Tag;
    PIGLIN_FOOD: Tag;
    FOX_FOOD: Tag;
    ITEMS_BANNERS: Tag;
    ITEMS_BOATS: Tag;
    ITEMS_FISHES: Tag;
    ITEMS_MUSIC_DISCS: Tag;
    ITEMS_CREEPER_DROP_MUSIC_DISCS: Tag;
    ITEMS_COALS: Tag;
    ITEMS_ARROWS: Tag;
    ITEMS_LECTERN_BOOKS: Tag;
    ITEMS_BEACON_PAYMENT_ITEMS: Tag;
    ITEMS_STONE_TOOL_MATERIALS: Tag;
    ITEMS_FURNACE_MATERIALS: Tag;
    FREEZE_IMMUNE_WEARABLES: Tag;
    AXOLOTL_TEMPT_ITEMS: Tag;
    CLUSTER_MAX_HARVESTABLES: Tag;
    REGISTRY_FLUIDS: string;
    FLUIDS_LAVA: Tag;
    FLUIDS_WATER: Tag;
    REGISTRY_ENTITY_TYPES: string;
    ENTITY_TYPES_SKELETONS: Tag;
    ENTITY_TYPES_RAIDERS: Tag;
    ENTITY_TYPES_BEEHIVE_INHABITORS: Tag;
    ENTITY_TYPES_ARROWS: Tag;
    ENTITY_TYPES_IMPACT_PROJECTILES: Tag;
    ENTITY_TYPES_POWDER_SNOW_WALKABLE_MOBS: Tag;
    ENTITY_TYPES_AXOLOTL_ALWAYS_HOSTILES: Tag;
    ENTITY_TYPES_AXOLOTL_HUNT_TARGETS: Tag;
    ENTITY_TYPES_FREEZE_IMMUNE_ENTITY_TYPES: Tag;
    ENTITY_TYPES_FREEZE_HURTS_EXTRA_TYPES: Tag;
}

// org.bukkit.event.inventory.InventoryPickupItemEvent
declare interface InventoryPickupItemEvent extends Event, Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getInventory(): Inventory;
    getItem(): Item;
}

// org.bukkit.TreeType
declare enum TreeType {
    TREE,
    BIG_TREE,
    REDWOOD,
    TALL_REDWOOD,
    BIRCH,
    JUNGLE,
    SMALL_JUNGLE,
    COCOA_TREE,
    JUNGLE_BUSH,
    RED_MUSHROOM,
    BROWN_MUSHROOM,
    SWAMP,
    ACACIA,
    DARK_OAK,
    MEGA_REDWOOD,
    TALL_BIRCH,
    CHORUS_PLANT,
    CRIMSON_FUNGUS,
    WARPED_FUNGUS,
    AZALEA,
}

// org.bukkit.event.inventory.SmithItemEvent
declare interface SmithItemEvent extends InventoryClickEvent {
    getInventory(): Inventory;
    getInventory(): SmithingInventory;
}

// org.bukkit.inventory.BrewerInventory
declare interface BrewerInventory extends Inventory {
    setFuel(itemStack: ItemStack): void;
    getFuel(): ItemStack;
    getHolder(): BrewingStand;
    getHolder(): InventoryHolder;
    setIngredient(itemStack: ItemStack): void;
    getIngredient(): ItemStack;
}

// org.bukkit.PortalType
declare enum PortalType {
    NETHER,
    ENDER,
    CUSTOM,
}

// org.bukkit.event.block.BlockPistonEvent
declare interface BlockPistonEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getDirection(): BlockFace;
    setCancelled(b: boolean): void;
    isSticky(): boolean;
}

// org.bukkit.material.TexturedMaterial
declare interface TexturedMaterial extends MaterialData {
    getMaterial(): Material;
    setMaterial(material: Material): void;
    getTextures(): List;
}

// org.bukkit.entity.Silverfish
declare interface Silverfish extends Monster {
}

// org.bukkit.event.hanging.HangingPlaceEvent
declare interface HangingPlaceEvent extends HangingEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getBlockFace(): BlockFace;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getPlayer(): Player;
    getBlock(): Block;
    getItemStack(): ItemStack;
}

// org.bukkit.event.inventory.FurnaceStartSmeltEvent
declare interface FurnaceStartSmeltEvent extends BlockEvent {
    getSource(): ItemStack;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getRecipe(): CookingRecipe;
    setTotalCookTime(i: number): void;
    getTotalCookTime(): number;
}

// org.bukkit.event.entity.SheepDyeWoolEvent
declare interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getPlayer(): Player;
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

// org.bukkit.Fluid
declare enum Fluid {
    WATER,
    FLOWING_WATER,
    LAVA,
    FLOWING_LAVA,
}

// org.bukkit.World
declare interface World extends RegionAccessor, WorldInfo, PluginMessageRecipient, Metadatable {
    save(): void;
    getTime(): number;
    setTime(l: number): void;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getTicksPerAnimalSpawns(): number;
    getTicksPerAmbientSpawns(): number;
    getMonsterSpawnLimit(): number;
    getTicksPerMonsterSpawns(): number;
    getWaterAmbientSpawnLimit(): number;
    getTicksPerWaterAmbientSpawns(): number;
    getTicksPerWaterSpawns(): number;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getPluginChunkTickets(i: number, i: number): Collection;
    getPluginChunkTickets(): Map;
    removePluginChunkTicket(i: number, i: number, plugin: Plugin): boolean;
    addPluginChunkTicket(i: number, i: number, plugin: Plugin): boolean;
    getEntitiesByClasses(clazz: Class): Collection;
    getChunkAt(block: Block): Chunk;
    getChunkAt(i: number, i: number): Chunk;
    getChunkAt(location: Location): Chunk;
    getBlockAt(i: number, i: number, i: number): Block;
    getBlockAt(location: Location): Block;
    getWorldType(): WorldType;
    getHighestBlockYAt(location: Location, heightMap: HeightMap): number;
    getHighestBlockYAt(i: number, i: number): number;
    getHighestBlockYAt(location: Location): number;
    getHighestBlockYAt(i: number, i: number, heightMap: HeightMap): number;
    getBiome(i: number, i: number): Biome;
    getEntities(): List;
    getViewDistance(): number;
    isHardcore(): boolean;
    spigot(): Spigot;
    getHighestBlockAt(location: Location): Block;
    getHighestBlockAt(i: number, i: number): Block;
    getHighestBlockAt(i: number, i: number, heightMap: HeightMap): Block;
    getHighestBlockAt(location: Location, heightMap: HeightMap): Block;
    isChunkLoaded(chunk: Chunk): boolean;
    isChunkLoaded(i: number, i: number): boolean;
    isChunkGenerated(i: number, i: number): boolean;
    getLoadedChunks(): Chunk[];
    isChunkInUse(i: number, i: number): boolean;
    unloadChunk(i: number, i: number, b: boolean): boolean;
    unloadChunk(i: number, i: number): boolean;
    unloadChunk(chunk: Chunk): boolean;
    loadChunk(i: number, i: number): void;
    loadChunk(chunk: Chunk): void;
    loadChunk(i: number, i: number, b: boolean): boolean;
    unloadChunkRequest(i: number, i: number): boolean;
    playSound(location: Location, s: string, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(location: Location, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(location: Location, sound: Sound, f: number, f: number): void;
    playSound(location: Location, s: string, f: number, f: number): void;
    rayTraceBlocks(location: Location, vector: Vector, d: number): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode, b: boolean): RayTraceResult;
    dropItemNaturally(location: Location, itemStack: ItemStack): Item;
    dropItemNaturally(location: Location, itemStack: ItemStack, consumer: Consumer): Item;
    spawnFallingBlock(location: Location, material: Material, b: number): FallingBlock;
    spawnFallingBlock(location: Location, materialData: MaterialData): FallingBlock;
    spawnFallingBlock(location: Location, blockData: BlockData): FallingBlock;
    setSpawnFlags(b: boolean, b: boolean): void;
    playEffect(location: Location, effect: Effect, object: any, i: number): void;
    playEffect(location: Location, effect: Effect, i: number): void;
    playEffect(location: Location, effect: Effect, object: any): void;
    playEffect(location: Location, effect: Effect, i: number, i: number): void;
    isBedWorks(): boolean;
    hasSkyLight(): boolean;
    refreshChunk(i: number, i: number): boolean;
    rayTraceEntities(location: Location, vector: Vector, d: number, predicate: Predicate): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, d: number): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, d: number, predicate: Predicate): RayTraceResult;
    rayTrace(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode, b: boolean, d: number, predicate: Predicate): RayTraceResult;
    getFullTime(): number;
    regenerateChunk(i: number, i: number): boolean;
    setPVP(b: boolean): void;
    getBiomeProvider(): BiomeProvider;
    isClearWeather(): boolean;
    getHumidity(i: number, i: number, i: number): number;
    getHumidity(i: number, i: number): number;
    isPiglinSafe(): boolean;
    hasRaids(): boolean;
    getSeaLevel(): number;
    isAutoSave(): boolean;
    getPVP(): boolean;
    getDifficulty(): Difficulty;
    getAllowAnimals(): boolean;
    setHardcore(b: boolean): void;
    setDifficulty(difficulty: Difficulty): void;
    getGameRules(): string[];
    setThunderDuration(i: number): void;
    strikeLightning(location: Location): LightningStrike;
    getWeatherDuration(): number;
    hasStorm(): boolean;
    createExplosion(d: number, d: number, d: number, f: number): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean, b: boolean, entity: Entity): boolean;
    createExplosion(location: Location, f: number): boolean;
    createExplosion(location: Location, f: number, b: boolean, b: boolean, entity: Entity): boolean;
    createExplosion(location: Location, f: number, b: boolean): boolean;
    createExplosion(location: Location, f: number, b: boolean, b: boolean): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean, b: boolean): boolean;
    isThundering(): boolean;
    getGenerator(): ChunkGenerator;
    setAutoSave(b: boolean): void;
    getThunderDuration(): number;
    getNearbyEntities(boundingBox: BoundingBox): Collection;
    getNearbyEntities(location: Location, d: number, d: number, d: number, predicate: Predicate): Collection;
    getNearbyEntities(boundingBox: BoundingBox, predicate: Predicate): Collection;
    getNearbyEntities(location: Location, d: number, d: number, d: number): Collection;
    isNatural(): boolean;
    getLogicalHeight(): number;
    hasCeiling(): boolean;
    getWorldFolder(): File;
    setThundering(b: boolean): void;
    getGameRuleValue(s: string): string;
    getGameRuleValue(gameRule: GameRule): any;
    spawnArrow(location: Location, vector: Vector, f: number, f: number): Arrow;
    spawnArrow(location: Location, vector: Vector, f: number, f: number, clazz: Class): AbstractArrow;
    getGameTime(): number;
    setFullTime(l: number): void;
    setWeatherDuration(i: number): void;
    getPopulators(): List;
    isUltraWarm(): boolean;
    setGameRuleValue(s: string, s: string): boolean;
    isGameRule(s: string): boolean;
    setSpawnLocation(i: number, i: number, i: number, f: number): boolean;
    setSpawnLocation(location: Location): boolean;
    setSpawnLocation(i: number, i: number, i: number): boolean;
    getGameRuleDefault(gameRule: GameRule): any;
    setStorm(b: boolean): void;
    isChunkForceLoaded(i: number, i: number): boolean;
    dropItem(location: Location, itemStack: ItemStack, consumer: Consumer): Item;
    dropItem(location: Location, itemStack: ItemStack): Item;
    getSpawnLocation(): Location;
    getAllowMonsters(): boolean;
    getTemperature(i: number, i: number, i: number): number;
    getTemperature(i: number, i: number): number;
    getPlayers(): List;
    getRaids(): List;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any, b: boolean): void;
    spawnParticle(particle: Particle, location: Location, i: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any, b: boolean): void;
    getWorldBorder(): WorldBorder;
    locateNearestRaid(location: Location, i: number): Raid;
    setGameRule(gameRule: GameRule, object: any): boolean;
    generateTree(location: Location, treeType: TreeType): boolean;
    generateTree(location: Location, treeType: TreeType, blockChangeDelegate: BlockChangeDelegate): boolean;
    getLivingEntities(): List;
    getEntitiesByClass(clazz: Class): Collection;
    getEntitiesByClass(clazz: Class): Collection;
    setBiome(i: number, i: number, biome: Biome): void;
    setWaterUndergroundCreatureSpawnLimit(i: number): void;
    setTicksPerWaterUndergroundCreatureSpawns(i: number): void;
    getClearWeatherDuration(): number;
    removePluginChunkTickets(plugin: Plugin): void;
    getEmptyChunkSnapshot(i: number, i: number, b: boolean, b: boolean): ChunkSnapshot;
    getKeepSpawnInMemory(): boolean;
    setTicksPerWaterSpawns(i: number): void;
    setAnimalSpawnLimit(i: number): void;
    setClearWeatherDuration(i: number): void;
    setKeepSpawnInMemory(b: boolean): void;
    locateNearestStructure(location: Location, structureType: StructureType, i: number, b: boolean): Location;
    getEnderDragonBattle(): DragonBattle;
    strikeLightningEffect(location: Location): LightningStrike;
    getForceLoadedChunks(): Collection;
    isRespawnAnchorWorks(): boolean;
    setAmbientSpawnLimit(i: number): void;
    setChunkForceLoaded(i: number, i: number, b: boolean): void;
    setTicksPerWaterAmbientSpawns(i: number): void;
    setWaterAmbientSpawnLimit(i: number): void;
    setTicksPerAnimalSpawns(i: number): void;
    setTicksPerMonsterSpawns(i: number): void;
    setTicksPerAmbientSpawns(i: number): void;
    setMonsterSpawnLimit(i: number): void;
    canGenerateStructures(): boolean;
    setWaterAnimalSpawnLimit(i: number): void;
}

// org.bukkit.event.block.BlockFadeEvent
declare interface BlockFadeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getNewState(): BlockState;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.entity.SheepRegrowWoolEvent
declare interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.plugin.messaging.ReservedChannelException
declare interface ReservedChannelException extends RuntimeException {
}

// org.bukkit.entity.Zoglin
declare interface Zoglin extends Monster, Ageable {
    isBaby(): boolean;
    setBaby(b: boolean): void;
}

// org.bukkit.entity.ZombieHorse
declare interface ZombieHorse extends AbstractHorse {
}

// org.bukkit.material.Banner
declare interface Banner extends MaterialData, Attachable {
    setFacingDirection(blockFace: BlockFace): void;
    getFacing(): BlockFace;
    getAttachedFace(): BlockFace;
    isWallBanner(): boolean;
}

// org.bukkit.metadata.FixedMetadataValue
declare interface FixedMetadataValue extends LazyMetadataValue {
}

// org.bukkit.material.MonsterEggs
declare interface MonsterEggs extends TexturedMaterial {
}

// org.bukkit.inventory.ItemFactory
declare interface ItemFactory {
    equals(itemMeta: ItemMeta, itemMeta: ItemMeta): boolean;
    getDefaultLeatherColor(): Color;
    isApplicable(itemMeta: ItemMeta, itemStack: ItemStack): boolean;
    isApplicable(itemMeta: ItemMeta, material: Material): boolean;
    asMetaFor(itemMeta: ItemMeta, material: Material): ItemMeta;
    asMetaFor(itemMeta: ItemMeta, itemStack: ItemStack): ItemMeta;
    updateMaterial(itemMeta: ItemMeta, material: Material): Material;
    getItemMeta(material: Material): ItemMeta;
}

// org.bukkit.scoreboard.Objective
declare interface Objective {
    getName(): string;
    unregister(): void;
    getDisplayName(): string;
    setDisplayName(s: string): void;
    getScoreboard(): Scoreboard;
    getCriteria(): string;
    getScore(offlinePlayer: OfflinePlayer): Score;
    getScore(s: string): Score;
    isModifiable(): boolean;
    getDisplaySlot(): DisplaySlot;
    setDisplaySlot(displaySlot: DisplaySlot): void;
    getRenderType(): RenderType;
    setRenderType(renderType: RenderType): void;
}

// org.bukkit.event.player.PlayerAnimationType
declare enum PlayerAnimationType {
    ARM_SWING,
}

// org.bukkit.event.weather.WeatherChangeEvent
declare interface WeatherChangeEvent extends WeatherEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    toWeatherState(): boolean;
}

// org.bukkit.block.data.type.Beehive
declare interface Beehive extends Directional {
    setHoneyLevel(i: number): void;
    getHoneyLevel(): number;
    getMaximumHoneyLevel(): number;
}

// org.bukkit.block.Jukebox
declare interface Jukebox extends TileState {
    getRecord(): ItemStack;
    isPlaying(): boolean;
    eject(): boolean;
    getPlaying(): Material;
    setRecord(itemStack: ItemStack): void;
    stopPlaying(): void;
    setPlaying(material: Material): void;
}

// org.bukkit.configuration.ConfigurationSection
declare interface ConfigurationSection {
    get(s: string, object: any): any;
    get(s: string): any;
    getObject(s: string, clazz: Class): any;
    getObject(s: string, clazz: Class, object: any): any;
    getBoolean(s: string): boolean;
    getBoolean(s: string, b: boolean): boolean;
    getInt(s: string): number;
    getInt(s: string, i: number): number;
    getLong(s: string): number;
    getLong(s: string, l: number): number;
    getDouble(s: string): number;
    getDouble(s: string, d: number): number;
    getName(): string;
    contains(s: string): boolean;
    contains(s: string, b: boolean): boolean;
    getParent(): ConfigurationSection;
    set(s: string, object: any): void;
    getLocation(s: string, location: Location): Location;
    getLocation(s: string): Location;
    isSet(s: string): boolean;
    getRoot(): Configuration;
    getKeys(b: boolean): Set;
    getString(s: string, s: string): string;
    getString(s: string): string;
    isColor(s: string): boolean;
    getOfflinePlayer(s: string, offlinePlayer: OfflinePlayer): OfflinePlayer;
    getOfflinePlayer(s: string): OfflinePlayer;
    getColor(s: string, color: Color): Color;
    getColor(s: string): Color;
    getValues(b: boolean): Map;
    isBoolean(s: string): boolean;
    getList(s: string): List;
    getList(s: string, list: List): List;
    addDefault(s: string, object: any): void;
    isInt(s: string): boolean;
    createSection(s: string, map: Map): ConfigurationSection;
    createSection(s: string): ConfigurationSection;
    isLong(s: string): boolean;
    isList(s: string): boolean;
    getIntegerList(s: string): List;
    getFloatList(s: string): List;
    getStringList(s: string): List;
    getCurrentPath(): string;
    isDouble(s: string): boolean;
    getBooleanList(s: string): List;
    getByteList(s: string): List;
    getCharacterList(s: string): List;
    getShortList(s: string): List;
    getDoubleList(s: string): List;
    getLongList(s: string): List;
    isString(s: string): boolean;
    getMapList(s: string): List;
    getVector(s: string): Vector;
    getVector(s: string, vector: Vector): Vector;
    getItemStack(s: string): ItemStack;
    getItemStack(s: string, itemStack: ItemStack): ItemStack;
    isVector(s: string): boolean;
    getSerializable(s: string, clazz: Class, configurationSerializable: ConfigurationSerializable): ConfigurationSerializable;
    getSerializable(s: string, clazz: Class): ConfigurationSerializable;
    isItemStack(s: string): boolean;
    getDefaultSection(): ConfigurationSection;
    isLocation(s: string): boolean;
    isOfflinePlayer(s: string): boolean;
    isConfigurationSection(s: string): boolean;
    getConfigurationSection(s: string): ConfigurationSection;
}

// org.bukkit.CropState
declare enum CropState {
    SEEDED,
    GERMINATED,
    VERY_SMALL,
    SMALL,
    MEDIUM,
    TALL,
    VERY_TALL,
    RIPE,
}

// org.bukkit.entity.Minecart
declare interface Minecart extends Vehicle {
    setDisplayBlockData(blockData: BlockData): void;
    getDisplayBlockOffset(): number;
    setDisplayBlockOffset(i: number): void;
    getDerailedVelocityMod(): Vector;
    setFlyingVelocityMod(vector: Vector): void;
    setDerailedVelocityMod(vector: Vector): void;
    getDisplayBlockData(): BlockData;
    getFlyingVelocityMod(): Vector;
    setDisplayBlock(materialData: MaterialData): void;
    setSlowWhenEmpty(b: boolean): void;
    isSlowWhenEmpty(): boolean;
    getDisplayBlock(): MaterialData;
    setMaxSpeed(d: number): void;
    getMaxSpeed(): number;
    getDamage(): number;
    setDamage(d: number): void;
}

// org.bukkit.entity.ArmorStand
declare interface ArmorStand extends LivingEntity {
    isSmall(): boolean;
    getLeftLegPose(): EulerAngle;
    getLeftArmPose(): EulerAngle;
    addEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): void;
    setLeftLegPose(eulerAngle: EulerAngle): void;
    setRightArmPose(eulerAngle: EulerAngle): void;
    setHeadPose(eulerAngle: EulerAngle): void;
    setChestplate(itemStack: ItemStack): void;
    setArms(b: boolean): void;
    getBoots(): ItemStack;
    getItemInHand(): ItemStack;
    setMarker(b: boolean): void;
    setHelmet(itemStack: ItemStack): void;
    hasArms(): boolean;
    setLeggings(itemStack: ItemStack): void;
    getRightArmPose(): EulerAngle;
    getHeadPose(): EulerAngle;
    hasBasePlate(): boolean;
    setBoots(itemStack: ItemStack): void;
    setItemInHand(itemStack: ItemStack): void;
    getLeggings(): ItemStack;
    getHelmet(): ItemStack;
    setLeftArmPose(eulerAngle: EulerAngle): void;
    getChestplate(): ItemStack;
    setBodyPose(eulerAngle: EulerAngle): void;
    getRightLegPose(): EulerAngle;
    setRightLegPose(eulerAngle: EulerAngle): void;
    setSmall(b: boolean): void;
    getBodyPose(): EulerAngle;
    isMarker(): boolean;
    hasEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): boolean;
    setBasePlate(b: boolean): void;
    setVisible(b: boolean): void;
    isVisible(): boolean;
    removeEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): void;
}

// org.bukkit.plugin.ServicePriority
declare enum ServicePriority {
    Lowest,
    Low,
    Normal,
    High,
    Highest,
}

// org.bukkit.material.TripwireHook
declare interface TripwireHook extends SimpleAttachableMaterialData, Redstone {
    setConnected(b: boolean): void;
    isConnected(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    isActivated(): boolean;
    setActivated(b: boolean): void;
    getAttachedFace(): BlockFace;
    isPowered(): boolean;
}

// org.bukkit.entity.AbstractArrow
declare interface AbstractArrow extends Projectile {
    getDamage(): number;
    setDamage(d: number): void;
    getPierceLevel(): number;
    setPierceLevel(i: number): void;
    isCritical(): boolean;
    setCritical(b: boolean): void;
    setPickupStatus(pickupStatus: PickupStatus): void;
    isShotFromCrossbow(): boolean;
    isInBlock(): boolean;
    getAttachedBlock(): Block;
    getPickupStatus(): PickupStatus;
    setKnockbackStrength(i: number): void;
    setShotFromCrossbow(b: boolean): void;
    getKnockbackStrength(): number;
}

// org.bukkit.map.MapCursor
declare interface MapCursor {
    getType(): Type;
    getRawType(): number;
    setType(type: Type): void;
    setDirection(b: number): void;
    getDirection(): number;
    getY(): number;
    setY(b: number): void;
    setX(b: number): void;
    getX(): number;
    setVisible(b: boolean): void;
    isVisible(): boolean;
    getCaption(): string;
    setRawType(b: number): void;
    setCaption(s: string): void;
}

// org.bukkit.event.block.Action
declare enum Action {
    LEFT_CLICK_BLOCK,
    RIGHT_CLICK_BLOCK,
    LEFT_CLICK_AIR,
    RIGHT_CLICK_AIR,
    PHYSICAL,
}

// org.bukkit.metadata.MetadataEvaluationException
declare interface MetadataEvaluationException extends RuntimeException {
}

// org.bukkit.Rotation
declare enum Rotation {
    NONE,
    CLOCKWISE_45,
    CLOCKWISE,
    CLOCKWISE_135,
    FLIPPED,
    FLIPPED_45,
    COUNTER_CLOCKWISE,
    COUNTER_CLOCKWISE_45,
}

// org.bukkit.block.data.type.Jukebox
declare interface Jukebox extends BlockData {
    hasRecord(): boolean;
}

// org.bukkit.conversations.PlayerNamePrompt
declare interface PlayerNamePrompt extends ValidatingPrompt {
}

// org.bukkit.material.NetherWarts
declare interface NetherWarts extends MaterialData {
    getState(): NetherWartsState;
    setState(netherWartsState: NetherWartsState): void;
}

// org.bukkit.inventory.meta.SkullMeta
declare interface SkullMeta extends ItemMeta {
    clone(): SkullMeta;
    clone(): ItemMeta;
    clone(): any;
    getOwner(): string;
    setOwner(s: string): boolean;
    hasOwner(): boolean;
    getOwningPlayer(): OfflinePlayer;
    setOwningPlayer(offlinePlayer: OfflinePlayer): boolean;
}

// org.bukkit.event.world.WorldUnloadEvent
declare interface WorldUnloadEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.material.Coal
declare interface Coal extends MaterialData {
    getType(): CoalType;
    setType(coalType: CoalType): void;
}

// org.bukkit.event.entity.ProjectileHitEvent
declare interface ProjectileHitEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getHitBlock(): Block;
    getHitEntity(): Entity;
    getHitBlockFace(): BlockFace;
}

// org.bukkit.util.VoxelShape
declare interface VoxelShape {
    getBoundingBoxes(): Collection;
    overlaps(boundingBox: BoundingBox): boolean;
}

// org.bukkit.configuration.MemoryConfiguration
declare interface MemoryConfiguration extends MemorySection, Configuration {
    options(): ConfigurationOptions;
    options(): MemoryConfigurationOptions;
    getDefaults(): Configuration;
    setDefaults(configuration: Configuration): void;
    addDefaults(configuration: Configuration): void;
    addDefaults(map: Map): void;
}

// org.bukkit.block.data.BlockData
declare interface BlockData extends Cloneable {
    clone(): any;
    clone(): BlockData;
    matches(blockData: BlockData): boolean;
    merge(blockData: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(b: boolean): string;
    getAsString(): string;
    getSoundGroup(): SoundGroup;
}

// org.bukkit.entity.EnderDragonPart
declare interface EnderDragonPart extends ComplexEntityPart, Damageable {
    getParent(): EnderDragon;
    getParent(): ComplexLivingEntity;
}

// org.bukkit.entity.Fireball
declare interface Fireball extends Projectile, Explosive {
    setDirection(vector: Vector): void;
    getDirection(): Vector;
}

// org.bukkit.inventory.ShapelessRecipe
declare interface ShapelessRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    getGroup(): string;
    setGroup(s: string): void;
    getIngredientList(): List;
    addIngredient(materialData: MaterialData): ShapelessRecipe;
    addIngredient(i: number, materialData: MaterialData): ShapelessRecipe;
    addIngredient(material: Material): ShapelessRecipe;
    addIngredient(material: Material, i: number): ShapelessRecipe;
    addIngredient(i: number, material: Material): ShapelessRecipe;
    addIngredient(recipeChoice: RecipeChoice): ShapelessRecipe;
    addIngredient(i: number, material: Material, i: number): ShapelessRecipe;
    removeIngredient(i: number, material: Material, i: number): ShapelessRecipe;
    removeIngredient(materialData: MaterialData): ShapelessRecipe;
    removeIngredient(recipeChoice: RecipeChoice): ShapelessRecipe;
    removeIngredient(material: Material): ShapelessRecipe;
    removeIngredient(i: number, material: Material): ShapelessRecipe;
    removeIngredient(i: number, materialData: MaterialData): ShapelessRecipe;
    removeIngredient(material: Material, i: number): ShapelessRecipe;
    getChoiceList(): List;
}

// org.bukkit.event.player.PlayerLevelChangeEvent
declare interface PlayerLevelChangeEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getNewLevel(): number;
    getOldLevel(): number;
}

// org.bukkit.inventory.meta.CompassMeta
declare interface CompassMeta extends ItemMeta {
    clone(): CompassMeta;
    clone(): ItemMeta;
    clone(): any;
    setLodestoneTracked(b: boolean): void;
    hasLodestone(): boolean;
    setLodestone(location: Location): void;
    isLodestoneTracked(): boolean;
    getLodestone(): Location;
}

// org.bukkit.event.block.LeavesDecayEvent
declare interface LeavesDecayEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.material.Door
declare interface Door extends MaterialData, Directional, Openable {
    isOpen(): boolean;
    getWoodDoorOfSpecies(treeSpecies: TreeSpecies): Material;
    setFacingDirection(blockFace: BlockFace): void;
    isTopHalf(): boolean;
    getHingeCorner(): BlockFace;
    setTopHalf(b: boolean): void;
    getFacing(): BlockFace;
    setOpen(b: boolean): void;
    getHinge(): boolean;
    setHinge(b: boolean): void;
}

// org.bukkit.block.BlastFurnace
declare interface BlastFurnace extends Furnace {
}

// org.bukkit.event.entity.EntityInteractEvent
declare interface EntityInteractEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getBlock(): Block;
}

// org.bukkit.event.inventory.InventoryMoveItemEvent
declare interface InventoryMoveItemEvent extends Event, Cancellable {
    getSource(): Inventory;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getDestination(): Inventory;
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
    getInitiator(): Inventory;
}

// org.bukkit.metadata.MetadataStore
declare interface MetadataStore {
    invalidateAll(plugin: Plugin): void;
    getMetadata(object: any, s: string): List;
    hasMetadata(object: any, s: string): boolean;
    removeMetadata(object: any, s: string, plugin: Plugin): void;
    setMetadata(object: any, s: string, metadataValue: MetadataValue): void;
}

// org.bukkit.material.EnderChest
declare interface EnderChest extends DirectionalContainer {
}

// org.bukkit.entity.Breedable
declare interface Breedable extends Ageable {
    setBreed(b: boolean): void;
    canBreed(): boolean;
    setAgeLock(b: boolean): void;
    getAgeLock(): boolean;
}

// org.bukkit.event.entity.EntityCombustEvent
declare interface EntityCombustEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getDuration(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    setDuration(i: number): void;
}

// org.bukkit.event.vehicle.VehicleEvent
declare interface VehicleEvent extends Event {
    getVehicle(): Vehicle;
}

// org.bukkit.material.DetectorRail
declare interface DetectorRail extends ExtendedRails, PressureSensor {
    isPressed(): boolean;
    setPressed(b: boolean): void;
}

// org.bukkit.permissions.Permissible
declare interface Permissible extends ServerOperator {
    removeAttachment(permissionAttachment: PermissionAttachment): void;
    hasPermission(s: string): boolean;
    hasPermission(permission: Permission): boolean;
    isPermissionSet(s: string): boolean;
    isPermissionSet(permission: Permission): boolean;
    addAttachment(plugin: Plugin, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean): PermissionAttachment;
    recalculatePermissions(): void;
    getEffectivePermissions(): Set;
}

// org.bukkit.entity.ThrowableProjectile
declare interface ThrowableProjectile extends Projectile {
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
}

// org.bukkit.event.inventory.PrepareAnvilEvent
declare interface PrepareAnvilEvent extends InventoryEvent {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
}

// org.bukkit.event.block.SignChangeEvent
declare interface SignChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getLine(i: number): string;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getPlayer(): Player;
    setLine(i: number, s: string): void;
    getLines(): string[];
}

// org.bukkit.material.Comparator
declare interface Comparator extends MaterialData, Directional, Redstone {
    setFacingDirection(blockFace: BlockFace): void;
    setSubtractionMode(b: boolean): void;
    isBeingPowered(): boolean;
    isSubtractionMode(): boolean;
    getFacing(): BlockFace;
    isPowered(): boolean;
}

// org.bukkit.projectiles.BlockProjectileSource
declare interface BlockProjectileSource extends ProjectileSource {
    getBlock(): Block;
}

// org.bukkit.ChatColor
declare enum ChatColor {
    BLACK,
    DARK_BLUE,
    DARK_GREEN,
    DARK_AQUA,
    DARK_RED,
    DARK_PURPLE,
    GOLD,
    GRAY,
    DARK_GRAY,
    BLUE,
    GREEN,
    AQUA,
    RED,
    LIGHT_PURPLE,
    YELLOW,
    WHITE,
    MAGIC,
    BOLD,
    STRIKETHROUGH,
    UNDERLINE,
    ITALIC,
    RESET,
}

// org.bukkit.entity.ThrownPotion
declare interface ThrownPotion extends Projectile {
    getEffects(): Collection;
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
}

// org.bukkit.event.player.PlayerToggleFlightEvent
declare interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isFlying(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.inventory.PrepareSmithingEvent
declare interface PrepareSmithingEvent extends InventoryEvent {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
}

// org.bukkit.plugin.PluginLogger
declare interface PluginLogger extends Logger {
}

// org.bukkit.command.CommandMap
declare interface CommandMap {
    dispatch(commandSender: CommandSender, s: string): boolean;
    register(s: string, s: string, command: Command): boolean;
    register(s: string, command: Command): boolean;
    getCommand(s: string): Command;
    clearCommands(): void;
    registerAll(s: string, list: List): void;
    tabComplete(commandSender: CommandSender, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, location: Location): List;
}

// org.bukkit.event.block.BlockShearEntityEvent
declare interface BlockShearEntityEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getTool(): ItemStack;
    getEntity(): Entity;
}

// org.bukkit.event.vehicle.VehicleEntityCollisionEvent
declare interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isCollisionCancelled(): boolean;
    setCollisionCancelled(b: boolean): void;
    setCancelled(b: boolean): void;
    getHandlerList(): HandlerList;
    getEntity(): Entity;
    setPickupCancelled(b: boolean): void;
    isPickupCancelled(): boolean;
}

// org.bukkit.WorldCreator
declare interface WorldCreator {
    name(): string;
    name(s: string): WorldCreator;
    type(): WorldType;
    type(worldType: WorldType): WorldCreator;
    copy(worldCreator: WorldCreator): WorldCreator;
    copy(world: World): WorldCreator;
    generator(): ChunkGenerator;
    generator(s: string, commandSender: CommandSender): WorldCreator;
    generator(s: string): WorldCreator;
    generator(chunkGenerator: ChunkGenerator): WorldCreator;
    environment(environment: Environment): WorldCreator;
    environment(): Environment;
    seed(l: number): WorldCreator;
    seed(): number;
    createWorld(): World;
    generatorSettings(): string;
    generatorSettings(s: string): WorldCreator;
    biomeProvider(): BiomeProvider;
    biomeProvider(biomeProvider: BiomeProvider): WorldCreator;
    biomeProvider(s: string, commandSender: CommandSender): WorldCreator;
    biomeProvider(s: string): WorldCreator;
    generateStructures(): boolean;
    generateStructures(b: boolean): WorldCreator;
    hardcore(): boolean;
    hardcore(b: boolean): WorldCreator;
    getGeneratorForName(s: string, s: string, commandSender: CommandSender): ChunkGenerator;
    getBiomeProviderForName(s: string, s: string, commandSender: CommandSender): BiomeProvider;
}

// org.bukkit.material.Pumpkin
declare interface Pumpkin extends MaterialData, Directional {
    setFacingDirection(blockFace: BlockFace): void;
    isLit(): boolean;
    getFacing(): BlockFace;
}

// org.bukkit.entity.Snowball
declare interface Snowball extends ThrowableProjectile {
}

// org.bukkit.inventory.AbstractHorseInventory
declare interface AbstractHorseInventory extends Inventory {
    setSaddle(itemStack: ItemStack): void;
    getSaddle(): ItemStack;
}

// org.bukkit.entity.Damageable
declare interface Damageable extends Entity {
    resetMaxHealth(): void;
    getMaxHealth(): number;
    setMaxHealth(d: number): void;
    setHealth(d: number): void;
    damage(d: number): void;
    damage(d: number, entity: Entity): void;
    getHealth(): number;
    getAbsorptionAmount(): number;
    setAbsorptionAmount(d: number): void;
}

// org.bukkit.event.world.WorldLoadEvent
declare interface WorldLoadEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.ItemFlag
declare enum ItemFlag {
    HIDE_ENCHANTS,
    HIDE_ATTRIBUTES,
    HIDE_UNBREAKABLE,
    HIDE_DESTROYS,
    HIDE_PLACED_ON,
    HIDE_POTION_EFFECTS,
    HIDE_DYE,
}

// org.bukkit.inventory.StonecuttingRecipe
declare interface StonecuttingRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    getInput(): ItemStack;
    setInput(material: Material): StonecuttingRecipe;
    getGroup(): string;
    getInputChoice(): RecipeChoice;
    setGroup(s: string): void;
    setInputChoice(recipeChoice: RecipeChoice): StonecuttingRecipe;
}

// org.bukkit.block.data.type.Sign
declare interface Sign extends Rotatable, Waterlogged {
}

// org.bukkit.scoreboard.Criterias
declare interface Criterias {
    HEALTH: string;
    PLAYER_KILLS: string;
    TOTAL_KILLS: string;
    DEATHS: string;
}

// org.bukkit.block.data.type.Grindstone
declare interface Grindstone extends Directional, FaceAttachable {
}

// org.bukkit.entity.EnderPearl
declare interface EnderPearl extends ThrowableProjectile {
}

// org.bukkit.attribute.Attributable
declare interface Attributable {
    getAttribute(attribute: Attribute): AttributeInstance;
}

// org.bukkit.event.raid.RaidFinishEvent
declare interface RaidFinishEvent extends RaidEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    getWinners(): List;
}

// org.bukkit.event.inventory.InventoryInteractEvent
declare interface InventoryInteractEvent extends InventoryEvent, Cancellable {
    getResult(): Result;
    setResult(result: Result): void;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getWhoClicked(): HumanEntity;
}

// org.bukkit.util.EulerAngle
declare interface EulerAngle {
    add(d: number, d: number, d: number): EulerAngle;
    subtract(d: number, d: number, d: number): EulerAngle;
    getY(): number;
    setY(d: number): EulerAngle;
    setZ(d: number): EulerAngle;
    setX(d: number): EulerAngle;
    getX(): number;
    getZ(): number;
    ZERO: EulerAngle;
}

// org.bukkit.block.Hopper
declare interface Hopper extends Container, Lootable {
}

// org.bukkit.entity.Entity
declare interface Entity extends Metadatable, CommandSender, Nameable, PersistentDataHolder {
    remove(): void;
    isEmpty(): boolean;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getType(): EntityType;
    isFrozen(): boolean;
    getUniqueId(): UUID;
    isValid(): boolean;
    getWorld(): World;
    getHeight(): number;
    getServer(): Server;
    spigot(): Spigot;
    spigot(): Spigot;
    playEffect(entityEffect: EntityEffect): void;
    getNearbyEntities(d: number, d: number, d: number): List;
    getBoundingBox(): BoundingBox;
    hasGravity(): boolean;
    getPose(): Pose;
    getFireTicks(): number;
    isDead(): boolean;
    addPassenger(entity: Entity): boolean;
    isInsideVehicle(): boolean;
    isOnGround(): boolean;
    setLastDamageCause(entityDamageEvent: EntityDamageEvent): void;
    addScoreboardTag(s: string): boolean;
    leaveVehicle(): boolean;
    getMaxFireTicks(): number;
    setPassenger(entity: Entity): boolean;
    getVehicle(): Entity;
    getPassenger(): Entity;
    isVisualFire(): boolean;
    setSilent(b: boolean): void;
    getMaxFreezeTicks(): number;
    getWidth(): number;
    isGlowing(): boolean;
    setGravity(b: boolean): void;
    setFreezeTicks(i: number): void;
    setFallDistance(f: number): void;
    getTicksLived(): number;
    setInvulnerable(b: boolean): void;
    setGlowing(b: boolean): void;
    isSilent(): boolean;
    getPortalCooldown(): number;
    getVelocity(): Vector;
    setVelocity(vector: Vector): void;
    teleport(location: Location, teleportCause: TeleportCause): boolean;
    teleport(entity: Entity, teleportCause: TeleportCause): boolean;
    teleport(entity: Entity): boolean;
    teleport(location: Location): boolean;
    getFreezeTicks(): number;
    isInvulnerable(): boolean;
    getLastDamageCause(): EntityDamageEvent;
    setPortalCooldown(i: number): void;
    getEntityId(): number;
    setVisualFire(b: boolean): void;
    getFallDistance(): number;
    getPassengers(): List;
    setTicksLived(i: number): void;
    setFireTicks(i: number): void;
    removePassenger(entity: Entity): boolean;
    isInWater(): boolean;
    getScoreboardTags(): Set;
    eject(): boolean;
    setRotation(f: number, f: number): void;
    getFacing(): BlockFace;
    isPersistent(): boolean;
    setPersistent(b: boolean): void;
    getPistonMoveReaction(): PistonMoveReaction;
    removeScoreboardTag(s: string): boolean;
    setCustomNameVisible(b: boolean): void;
    isCustomNameVisible(): boolean;
}

// org.bukkit.entity.ElderGuardian
declare interface ElderGuardian extends Guardian {
}

// org.bukkit.FluidCollisionMode
declare enum FluidCollisionMode {
    NEVER,
    SOURCE_ONLY,
    ALWAYS,
}

// org.bukkit.inventory.meta.BundleMeta
declare interface BundleMeta extends ItemMeta {
    getItems(): List;
    addItem(itemStack: ItemStack): void;
    hasItems(): boolean;
    setItems(list: List): void;
}

// org.bukkit.Effect
declare enum Effect {
    CLICK2,
    CLICK1,
    BOW_FIRE,
    DOOR_TOGGLE,
    IRON_DOOR_TOGGLE,
    TRAPDOOR_TOGGLE,
    IRON_TRAPDOOR_TOGGLE,
    FENCE_GATE_TOGGLE,
    DOOR_CLOSE,
    IRON_DOOR_CLOSE,
    TRAPDOOR_CLOSE,
    IRON_TRAPDOOR_CLOSE,
    FENCE_GATE_CLOSE,
    EXTINGUISH,
    RECORD_PLAY,
    GHAST_SHRIEK,
    GHAST_SHOOT,
    BLAZE_SHOOT,
    ZOMBIE_CHEW_WOODEN_DOOR,
    ZOMBIE_CHEW_IRON_DOOR,
    ZOMBIE_DESTROY_DOOR,
    SMOKE,
    STEP_SOUND,
    POTION_BREAK,
    INSTANT_POTION_BREAK,
    ENDER_SIGNAL,
    MOBSPAWNER_FLAMES,
    BREWING_STAND_BREW,
    CHORUS_FLOWER_GROW,
    CHORUS_FLOWER_DEATH,
    PORTAL_TRAVEL,
    ENDEREYE_LAUNCH,
    FIREWORK_SHOOT,
    VILLAGER_PLANT_GROW,
    DRAGON_BREATH,
    ANVIL_BREAK,
    ANVIL_USE,
    ANVIL_LAND,
    ENDERDRAGON_SHOOT,
    WITHER_BREAK_BLOCK,
    WITHER_SHOOT,
    ZOMBIE_INFECT,
    ZOMBIE_CONVERTED_VILLAGER,
    BAT_TAKEOFF,
    END_GATEWAY_SPAWN,
    ENDERDRAGON_GROWL,
    PHANTOM_BITE,
    ZOMBIE_CONVERTED_TO_DROWNED,
    HUSK_CONVERTED_TO_ZOMBIE,
    GRINDSTONE_USE,
    BOOK_PAGE_TURN,
    SMITHING_TABLE_USE,
    POINTED_DRIPSTONE_LAND,
    POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON,
    POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON,
    SKELETON_CONVERTED_TO_STRAY,
    COMPOSTER_FILL_ATTEMPT,
    LAVA_INTERACT,
    REDSTONE_TORCH_BURNOUT,
    END_PORTAL_FRAME_FILL,
    DRIPPING_DRIPSTONE,
    BONE_MEAL_USE,
    ENDER_DRAGON_DESTROY_BLOCK,
    SPONGE_DRY,
    ELECTRIC_SPARK,
    COPPER_WAX_ON,
    COPPER_WAX_OFF,
    OXIDISED_COPPER_SCRAPE,
}

// org.bukkit.entity.Fox
declare interface Fox extends Animals, Sittable {
    isCrouching(): boolean;
    setFoxType(type: Type): void;
    setSleeping(b: boolean): void;
    getFoxType(): Type;
    setCrouching(b: boolean): void;
    setSecondTrustedPlayer(animalTamer: AnimalTamer): void;
    setFirstTrustedPlayer(animalTamer: AnimalTamer): void;
    getSecondTrustedPlayer(): AnimalTamer;
    getFirstTrustedPlayer(): AnimalTamer;
}

// org.bukkit.block.structure.Mirror
declare enum Mirror {
    NONE,
    LEFT_RIGHT,
    FRONT_BACK,
}

// org.bukkit.entity.PiglinAbstract
declare interface PiglinAbstract extends Monster, Ageable {
    getConversionTime(): number;
    setConversionTime(i: number): void;
    isConverting(): boolean;
    isBaby(): boolean;
    setBaby(b: boolean): void;
    setImmuneToZombification(b: boolean): void;
    isImmuneToZombification(): boolean;
}

// org.bukkit.material.Rails
declare interface Rails extends MaterialData {
    setDirection(blockFace: BlockFace, b: boolean): void;
    getDirection(): BlockFace;
    isOnSlope(): boolean;
    isCurve(): boolean;
}

// org.bukkit.advancement.AdvancementProgress
declare interface AdvancementProgress {
    isDone(): boolean;
    getAdvancement(): Advancement;
    awardCriteria(s: string): boolean;
    revokeCriteria(s: string): boolean;
    getDateAwarded(s: string): Date;
    getAwardedCriteria(): Collection;
    getRemainingCriteria(): Collection;
}

// org.bukkit.Material
declare enum Material {
    AIR,
    STONE,
    GRANITE,
    POLISHED_GRANITE,
    DIORITE,
    POLISHED_DIORITE,
    ANDESITE,
    POLISHED_ANDESITE,
    DEEPSLATE,
    COBBLED_DEEPSLATE,
    POLISHED_DEEPSLATE,
    CALCITE,
    TUFF,
    DRIPSTONE_BLOCK,
    GRASS_BLOCK,
    DIRT,
    COARSE_DIRT,
    PODZOL,
    ROOTED_DIRT,
    CRIMSON_NYLIUM,
    WARPED_NYLIUM,
    COBBLESTONE,
    OAK_PLANKS,
    SPRUCE_PLANKS,
    BIRCH_PLANKS,
    JUNGLE_PLANKS,
    ACACIA_PLANKS,
    DARK_OAK_PLANKS,
    CRIMSON_PLANKS,
    WARPED_PLANKS,
    OAK_SAPLING,
    SPRUCE_SAPLING,
    BIRCH_SAPLING,
    JUNGLE_SAPLING,
    ACACIA_SAPLING,
    DARK_OAK_SAPLING,
    BEDROCK,
    SAND,
    RED_SAND,
    GRAVEL,
    COAL_ORE,
    DEEPSLATE_COAL_ORE,
    IRON_ORE,
    DEEPSLATE_IRON_ORE,
    COPPER_ORE,
    DEEPSLATE_COPPER_ORE,
    GOLD_ORE,
    DEEPSLATE_GOLD_ORE,
    REDSTONE_ORE,
    DEEPSLATE_REDSTONE_ORE,
    EMERALD_ORE,
    DEEPSLATE_EMERALD_ORE,
    LAPIS_ORE,
    DEEPSLATE_LAPIS_ORE,
    DIAMOND_ORE,
    DEEPSLATE_DIAMOND_ORE,
    NETHER_GOLD_ORE,
    NETHER_QUARTZ_ORE,
    ANCIENT_DEBRIS,
    COAL_BLOCK,
    RAW_IRON_BLOCK,
    RAW_COPPER_BLOCK,
    RAW_GOLD_BLOCK,
    AMETHYST_BLOCK,
    BUDDING_AMETHYST,
    IRON_BLOCK,
    COPPER_BLOCK,
    GOLD_BLOCK,
    DIAMOND_BLOCK,
    NETHERITE_BLOCK,
    EXPOSED_COPPER,
    WEATHERED_COPPER,
    OXIDIZED_COPPER,
    CUT_COPPER,
    EXPOSED_CUT_COPPER,
    WEATHERED_CUT_COPPER,
    OXIDIZED_CUT_COPPER,
    CUT_COPPER_STAIRS,
    EXPOSED_CUT_COPPER_STAIRS,
    WEATHERED_CUT_COPPER_STAIRS,
    OXIDIZED_CUT_COPPER_STAIRS,
    CUT_COPPER_SLAB,
    EXPOSED_CUT_COPPER_SLAB,
    WEATHERED_CUT_COPPER_SLAB,
    OXIDIZED_CUT_COPPER_SLAB,
    WAXED_COPPER_BLOCK,
    WAXED_EXPOSED_COPPER,
    WAXED_WEATHERED_COPPER,
    WAXED_OXIDIZED_COPPER,
    WAXED_CUT_COPPER,
    WAXED_EXPOSED_CUT_COPPER,
    WAXED_WEATHERED_CUT_COPPER,
    WAXED_OXIDIZED_CUT_COPPER,
    WAXED_CUT_COPPER_STAIRS,
    WAXED_EXPOSED_CUT_COPPER_STAIRS,
    WAXED_WEATHERED_CUT_COPPER_STAIRS,
    WAXED_OXIDIZED_CUT_COPPER_STAIRS,
    WAXED_CUT_COPPER_SLAB,
    WAXED_EXPOSED_CUT_COPPER_SLAB,
    WAXED_WEATHERED_CUT_COPPER_SLAB,
    WAXED_OXIDIZED_CUT_COPPER_SLAB,
    OAK_LOG,
    SPRUCE_LOG,
    BIRCH_LOG,
    JUNGLE_LOG,
    ACACIA_LOG,
    DARK_OAK_LOG,
    CRIMSON_STEM,
    WARPED_STEM,
    STRIPPED_OAK_LOG,
    STRIPPED_SPRUCE_LOG,
    STRIPPED_BIRCH_LOG,
    STRIPPED_JUNGLE_LOG,
    STRIPPED_ACACIA_LOG,
    STRIPPED_DARK_OAK_LOG,
    STRIPPED_CRIMSON_STEM,
    STRIPPED_WARPED_STEM,
    STRIPPED_OAK_WOOD,
    STRIPPED_SPRUCE_WOOD,
    STRIPPED_BIRCH_WOOD,
    STRIPPED_JUNGLE_WOOD,
    STRIPPED_ACACIA_WOOD,
    STRIPPED_DARK_OAK_WOOD,
    STRIPPED_CRIMSON_HYPHAE,
    STRIPPED_WARPED_HYPHAE,
    OAK_WOOD,
    SPRUCE_WOOD,
    BIRCH_WOOD,
    JUNGLE_WOOD,
    ACACIA_WOOD,
    DARK_OAK_WOOD,
    CRIMSON_HYPHAE,
    WARPED_HYPHAE,
    OAK_LEAVES,
    SPRUCE_LEAVES,
    BIRCH_LEAVES,
    JUNGLE_LEAVES,
    ACACIA_LEAVES,
    DARK_OAK_LEAVES,
    AZALEA_LEAVES,
    FLOWERING_AZALEA_LEAVES,
    SPONGE,
    WET_SPONGE,
    GLASS,
    TINTED_GLASS,
    LAPIS_BLOCK,
    SANDSTONE,
    CHISELED_SANDSTONE,
    CUT_SANDSTONE,
    COBWEB,
    GRASS,
    FERN,
    AZALEA,
    FLOWERING_AZALEA,
    DEAD_BUSH,
    SEAGRASS,
    SEA_PICKLE,
    WHITE_WOOL,
    ORANGE_WOOL,
    MAGENTA_WOOL,
    LIGHT_BLUE_WOOL,
    YELLOW_WOOL,
    LIME_WOOL,
    PINK_WOOL,
    GRAY_WOOL,
    LIGHT_GRAY_WOOL,
    CYAN_WOOL,
    PURPLE_WOOL,
    BLUE_WOOL,
    BROWN_WOOL,
    GREEN_WOOL,
    RED_WOOL,
    BLACK_WOOL,
    DANDELION,
    POPPY,
    BLUE_ORCHID,
    ALLIUM,
    AZURE_BLUET,
    RED_TULIP,
    ORANGE_TULIP,
    WHITE_TULIP,
    PINK_TULIP,
    OXEYE_DAISY,
    CORNFLOWER,
    LILY_OF_THE_VALLEY,
    WITHER_ROSE,
    SPORE_BLOSSOM,
    BROWN_MUSHROOM,
    RED_MUSHROOM,
    CRIMSON_FUNGUS,
    WARPED_FUNGUS,
    CRIMSON_ROOTS,
    WARPED_ROOTS,
    NETHER_SPROUTS,
    WEEPING_VINES,
    TWISTING_VINES,
    SUGAR_CANE,
    KELP,
    MOSS_CARPET,
    MOSS_BLOCK,
    HANGING_ROOTS,
    BIG_DRIPLEAF,
    SMALL_DRIPLEAF,
    BAMBOO,
    OAK_SLAB,
    SPRUCE_SLAB,
    BIRCH_SLAB,
    JUNGLE_SLAB,
    ACACIA_SLAB,
    DARK_OAK_SLAB,
    CRIMSON_SLAB,
    WARPED_SLAB,
    STONE_SLAB,
    SMOOTH_STONE_SLAB,
    SANDSTONE_SLAB,
    CUT_SANDSTONE_SLAB,
    PETRIFIED_OAK_SLAB,
    COBBLESTONE_SLAB,
    BRICK_SLAB,
    STONE_BRICK_SLAB,
    NETHER_BRICK_SLAB,
    QUARTZ_SLAB,
    RED_SANDSTONE_SLAB,
    CUT_RED_SANDSTONE_SLAB,
    PURPUR_SLAB,
    PRISMARINE_SLAB,
    PRISMARINE_BRICK_SLAB,
    DARK_PRISMARINE_SLAB,
    SMOOTH_QUARTZ,
    SMOOTH_RED_SANDSTONE,
    SMOOTH_SANDSTONE,
    SMOOTH_STONE,
    BRICKS,
    BOOKSHELF,
    MOSSY_COBBLESTONE,
    OBSIDIAN,
    TORCH,
    END_ROD,
    CHORUS_PLANT,
    CHORUS_FLOWER,
    PURPUR_BLOCK,
    PURPUR_PILLAR,
    PURPUR_STAIRS,
    SPAWNER,
    OAK_STAIRS,
    CHEST,
    CRAFTING_TABLE,
    FARMLAND,
    FURNACE,
    LADDER,
    COBBLESTONE_STAIRS,
    SNOW,
    ICE,
    SNOW_BLOCK,
    CACTUS,
    CLAY,
    JUKEBOX,
    OAK_FENCE,
    SPRUCE_FENCE,
    BIRCH_FENCE,
    JUNGLE_FENCE,
    ACACIA_FENCE,
    DARK_OAK_FENCE,
    CRIMSON_FENCE,
    WARPED_FENCE,
    PUMPKIN,
    CARVED_PUMPKIN,
    JACK_O_LANTERN,
    NETHERRACK,
    SOUL_SAND,
    SOUL_SOIL,
    BASALT,
    POLISHED_BASALT,
    SMOOTH_BASALT,
    SOUL_TORCH,
    GLOWSTONE,
    INFESTED_STONE,
    INFESTED_COBBLESTONE,
    INFESTED_STONE_BRICKS,
    INFESTED_MOSSY_STONE_BRICKS,
    INFESTED_CRACKED_STONE_BRICKS,
    INFESTED_CHISELED_STONE_BRICKS,
    INFESTED_DEEPSLATE,
    STONE_BRICKS,
    MOSSY_STONE_BRICKS,
    CRACKED_STONE_BRICKS,
    CHISELED_STONE_BRICKS,
    DEEPSLATE_BRICKS,
    CRACKED_DEEPSLATE_BRICKS,
    DEEPSLATE_TILES,
    CRACKED_DEEPSLATE_TILES,
    CHISELED_DEEPSLATE,
    BROWN_MUSHROOM_BLOCK,
    RED_MUSHROOM_BLOCK,
    MUSHROOM_STEM,
    IRON_BARS,
    CHAIN,
    GLASS_PANE,
    MELON,
    VINE,
    GLOW_LICHEN,
    BRICK_STAIRS,
    STONE_BRICK_STAIRS,
    MYCELIUM,
    LILY_PAD,
    NETHER_BRICKS,
    CRACKED_NETHER_BRICKS,
    CHISELED_NETHER_BRICKS,
    NETHER_BRICK_FENCE,
    NETHER_BRICK_STAIRS,
    ENCHANTING_TABLE,
    END_PORTAL_FRAME,
    END_STONE,
    END_STONE_BRICKS,
    DRAGON_EGG,
    SANDSTONE_STAIRS,
    ENDER_CHEST,
    EMERALD_BLOCK,
    SPRUCE_STAIRS,
    BIRCH_STAIRS,
    JUNGLE_STAIRS,
    CRIMSON_STAIRS,
    WARPED_STAIRS,
    COMMAND_BLOCK,
    BEACON,
    COBBLESTONE_WALL,
    MOSSY_COBBLESTONE_WALL,
    BRICK_WALL,
    PRISMARINE_WALL,
    RED_SANDSTONE_WALL,
    MOSSY_STONE_BRICK_WALL,
    GRANITE_WALL,
    STONE_BRICK_WALL,
    NETHER_BRICK_WALL,
    ANDESITE_WALL,
    RED_NETHER_BRICK_WALL,
    SANDSTONE_WALL,
    END_STONE_BRICK_WALL,
    DIORITE_WALL,
    BLACKSTONE_WALL,
    POLISHED_BLACKSTONE_WALL,
    POLISHED_BLACKSTONE_BRICK_WALL,
    COBBLED_DEEPSLATE_WALL,
    POLISHED_DEEPSLATE_WALL,
    DEEPSLATE_BRICK_WALL,
    DEEPSLATE_TILE_WALL,
    ANVIL,
    CHIPPED_ANVIL,
    DAMAGED_ANVIL,
    CHISELED_QUARTZ_BLOCK,
    QUARTZ_BLOCK,
    QUARTZ_BRICKS,
    QUARTZ_PILLAR,
    QUARTZ_STAIRS,
    WHITE_TERRACOTTA,
    ORANGE_TERRACOTTA,
    MAGENTA_TERRACOTTA,
    LIGHT_BLUE_TERRACOTTA,
    YELLOW_TERRACOTTA,
    LIME_TERRACOTTA,
    PINK_TERRACOTTA,
    GRAY_TERRACOTTA,
    LIGHT_GRAY_TERRACOTTA,
    CYAN_TERRACOTTA,
    PURPLE_TERRACOTTA,
    BLUE_TERRACOTTA,
    BROWN_TERRACOTTA,
    GREEN_TERRACOTTA,
    RED_TERRACOTTA,
    BLACK_TERRACOTTA,
    BARRIER,
    LIGHT,
    HAY_BLOCK,
    WHITE_CARPET,
    ORANGE_CARPET,
    MAGENTA_CARPET,
    LIGHT_BLUE_CARPET,
    YELLOW_CARPET,
    LIME_CARPET,
    PINK_CARPET,
    GRAY_CARPET,
    LIGHT_GRAY_CARPET,
    CYAN_CARPET,
    PURPLE_CARPET,
    BLUE_CARPET,
    BROWN_CARPET,
    GREEN_CARPET,
    RED_CARPET,
    BLACK_CARPET,
    TERRACOTTA,
    PACKED_ICE,
    ACACIA_STAIRS,
    DARK_OAK_STAIRS,
    DIRT_PATH,
    SUNFLOWER,
    LILAC,
    ROSE_BUSH,
    PEONY,
    TALL_GRASS,
    LARGE_FERN,
    WHITE_STAINED_GLASS,
    ORANGE_STAINED_GLASS,
    MAGENTA_STAINED_GLASS,
    LIGHT_BLUE_STAINED_GLASS,
    YELLOW_STAINED_GLASS,
    LIME_STAINED_GLASS,
    PINK_STAINED_GLASS,
    GRAY_STAINED_GLASS,
    LIGHT_GRAY_STAINED_GLASS,
    CYAN_STAINED_GLASS,
    PURPLE_STAINED_GLASS,
    BLUE_STAINED_GLASS,
    BROWN_STAINED_GLASS,
    GREEN_STAINED_GLASS,
    RED_STAINED_GLASS,
    BLACK_STAINED_GLASS,
    WHITE_STAINED_GLASS_PANE,
    ORANGE_STAINED_GLASS_PANE,
    MAGENTA_STAINED_GLASS_PANE,
    LIGHT_BLUE_STAINED_GLASS_PANE,
    YELLOW_STAINED_GLASS_PANE,
    LIME_STAINED_GLASS_PANE,
    PINK_STAINED_GLASS_PANE,
    GRAY_STAINED_GLASS_PANE,
    LIGHT_GRAY_STAINED_GLASS_PANE,
    CYAN_STAINED_GLASS_PANE,
    PURPLE_STAINED_GLASS_PANE,
    BLUE_STAINED_GLASS_PANE,
    BROWN_STAINED_GLASS_PANE,
    GREEN_STAINED_GLASS_PANE,
    RED_STAINED_GLASS_PANE,
    BLACK_STAINED_GLASS_PANE,
    PRISMARINE,
    PRISMARINE_BRICKS,
    DARK_PRISMARINE,
    PRISMARINE_STAIRS,
    PRISMARINE_BRICK_STAIRS,
    DARK_PRISMARINE_STAIRS,
    SEA_LANTERN,
    RED_SANDSTONE,
    CHISELED_RED_SANDSTONE,
    CUT_RED_SANDSTONE,
    RED_SANDSTONE_STAIRS,
    REPEATING_COMMAND_BLOCK,
    CHAIN_COMMAND_BLOCK,
    MAGMA_BLOCK,
    NETHER_WART_BLOCK,
    WARPED_WART_BLOCK,
    RED_NETHER_BRICKS,
    BONE_BLOCK,
    STRUCTURE_VOID,
    SHULKER_BOX,
    WHITE_SHULKER_BOX,
    ORANGE_SHULKER_BOX,
    MAGENTA_SHULKER_BOX,
    LIGHT_BLUE_SHULKER_BOX,
    YELLOW_SHULKER_BOX,
    LIME_SHULKER_BOX,
    PINK_SHULKER_BOX,
    GRAY_SHULKER_BOX,
    LIGHT_GRAY_SHULKER_BOX,
    CYAN_SHULKER_BOX,
    PURPLE_SHULKER_BOX,
    BLUE_SHULKER_BOX,
    BROWN_SHULKER_BOX,
    GREEN_SHULKER_BOX,
    RED_SHULKER_BOX,
    BLACK_SHULKER_BOX,
    WHITE_GLAZED_TERRACOTTA,
    ORANGE_GLAZED_TERRACOTTA,
    MAGENTA_GLAZED_TERRACOTTA,
    LIGHT_BLUE_GLAZED_TERRACOTTA,
    YELLOW_GLAZED_TERRACOTTA,
    LIME_GLAZED_TERRACOTTA,
    PINK_GLAZED_TERRACOTTA,
    GRAY_GLAZED_TERRACOTTA,
    LIGHT_GRAY_GLAZED_TERRACOTTA,
    CYAN_GLAZED_TERRACOTTA,
    PURPLE_GLAZED_TERRACOTTA,
    BLUE_GLAZED_TERRACOTTA,
    BROWN_GLAZED_TERRACOTTA,
    GREEN_GLAZED_TERRACOTTA,
    RED_GLAZED_TERRACOTTA,
    BLACK_GLAZED_TERRACOTTA,
    WHITE_CONCRETE,
    ORANGE_CONCRETE,
    MAGENTA_CONCRETE,
    LIGHT_BLUE_CONCRETE,
    YELLOW_CONCRETE,
    LIME_CONCRETE,
    PINK_CONCRETE,
    GRAY_CONCRETE,
    LIGHT_GRAY_CONCRETE,
    CYAN_CONCRETE,
    PURPLE_CONCRETE,
    BLUE_CONCRETE,
    BROWN_CONCRETE,
    GREEN_CONCRETE,
    RED_CONCRETE,
    BLACK_CONCRETE,
    WHITE_CONCRETE_POWDER,
    ORANGE_CONCRETE_POWDER,
    MAGENTA_CONCRETE_POWDER,
    LIGHT_BLUE_CONCRETE_POWDER,
    YELLOW_CONCRETE_POWDER,
    LIME_CONCRETE_POWDER,
    PINK_CONCRETE_POWDER,
    GRAY_CONCRETE_POWDER,
    LIGHT_GRAY_CONCRETE_POWDER,
    CYAN_CONCRETE_POWDER,
    PURPLE_CONCRETE_POWDER,
    BLUE_CONCRETE_POWDER,
    BROWN_CONCRETE_POWDER,
    GREEN_CONCRETE_POWDER,
    RED_CONCRETE_POWDER,
    BLACK_CONCRETE_POWDER,
    TURTLE_EGG,
    DEAD_TUBE_CORAL_BLOCK,
    DEAD_BRAIN_CORAL_BLOCK,
    DEAD_BUBBLE_CORAL_BLOCK,
    DEAD_FIRE_CORAL_BLOCK,
    DEAD_HORN_CORAL_BLOCK,
    TUBE_CORAL_BLOCK,
    BRAIN_CORAL_BLOCK,
    BUBBLE_CORAL_BLOCK,
    FIRE_CORAL_BLOCK,
    HORN_CORAL_BLOCK,
    TUBE_CORAL,
    BRAIN_CORAL,
    BUBBLE_CORAL,
    FIRE_CORAL,
    HORN_CORAL,
    DEAD_BRAIN_CORAL,
    DEAD_BUBBLE_CORAL,
    DEAD_FIRE_CORAL,
    DEAD_HORN_CORAL,
    DEAD_TUBE_CORAL,
    TUBE_CORAL_FAN,
    BRAIN_CORAL_FAN,
    BUBBLE_CORAL_FAN,
    FIRE_CORAL_FAN,
    HORN_CORAL_FAN,
    DEAD_TUBE_CORAL_FAN,
    DEAD_BRAIN_CORAL_FAN,
    DEAD_BUBBLE_CORAL_FAN,
    DEAD_FIRE_CORAL_FAN,
    DEAD_HORN_CORAL_FAN,
    BLUE_ICE,
    CONDUIT,
    POLISHED_GRANITE_STAIRS,
    SMOOTH_RED_SANDSTONE_STAIRS,
    MOSSY_STONE_BRICK_STAIRS,
    POLISHED_DIORITE_STAIRS,
    MOSSY_COBBLESTONE_STAIRS,
    END_STONE_BRICK_STAIRS,
    STONE_STAIRS,
    SMOOTH_SANDSTONE_STAIRS,
    SMOOTH_QUARTZ_STAIRS,
    GRANITE_STAIRS,
    ANDESITE_STAIRS,
    RED_NETHER_BRICK_STAIRS,
    POLISHED_ANDESITE_STAIRS,
    DIORITE_STAIRS,
    COBBLED_DEEPSLATE_STAIRS,
    POLISHED_DEEPSLATE_STAIRS,
    DEEPSLATE_BRICK_STAIRS,
    DEEPSLATE_TILE_STAIRS,
    POLISHED_GRANITE_SLAB,
    SMOOTH_RED_SANDSTONE_SLAB,
    MOSSY_STONE_BRICK_SLAB,
    POLISHED_DIORITE_SLAB,
    MOSSY_COBBLESTONE_SLAB,
    END_STONE_BRICK_SLAB,
    SMOOTH_SANDSTONE_SLAB,
    SMOOTH_QUARTZ_SLAB,
    GRANITE_SLAB,
    ANDESITE_SLAB,
    RED_NETHER_BRICK_SLAB,
    POLISHED_ANDESITE_SLAB,
    DIORITE_SLAB,
    COBBLED_DEEPSLATE_SLAB,
    POLISHED_DEEPSLATE_SLAB,
    DEEPSLATE_BRICK_SLAB,
    DEEPSLATE_TILE_SLAB,
    SCAFFOLDING,
    REDSTONE,
    REDSTONE_TORCH,
    REDSTONE_BLOCK,
    REPEATER,
    COMPARATOR,
    PISTON,
    STICKY_PISTON,
    SLIME_BLOCK,
    HONEY_BLOCK,
    OBSERVER,
    HOPPER,
    DISPENSER,
    DROPPER,
    LECTERN,
    TARGET,
    LEVER,
    LIGHTNING_ROD,
    DAYLIGHT_DETECTOR,
    SCULK_SENSOR,
    TRIPWIRE_HOOK,
    TRAPPED_CHEST,
    TNT,
    REDSTONE_LAMP,
    NOTE_BLOCK,
    STONE_BUTTON,
    POLISHED_BLACKSTONE_BUTTON,
    OAK_BUTTON,
    SPRUCE_BUTTON,
    BIRCH_BUTTON,
    JUNGLE_BUTTON,
    ACACIA_BUTTON,
    DARK_OAK_BUTTON,
    CRIMSON_BUTTON,
    WARPED_BUTTON,
    STONE_PRESSURE_PLATE,
    POLISHED_BLACKSTONE_PRESSURE_PLATE,
    LIGHT_WEIGHTED_PRESSURE_PLATE,
    HEAVY_WEIGHTED_PRESSURE_PLATE,
    OAK_PRESSURE_PLATE,
    SPRUCE_PRESSURE_PLATE,
    BIRCH_PRESSURE_PLATE,
    JUNGLE_PRESSURE_PLATE,
    ACACIA_PRESSURE_PLATE,
    DARK_OAK_PRESSURE_PLATE,
    CRIMSON_PRESSURE_PLATE,
    WARPED_PRESSURE_PLATE,
    IRON_DOOR,
    OAK_DOOR,
    SPRUCE_DOOR,
    BIRCH_DOOR,
    JUNGLE_DOOR,
    ACACIA_DOOR,
    DARK_OAK_DOOR,
    CRIMSON_DOOR,
    WARPED_DOOR,
    IRON_TRAPDOOR,
    OAK_TRAPDOOR,
    SPRUCE_TRAPDOOR,
    BIRCH_TRAPDOOR,
    JUNGLE_TRAPDOOR,
    ACACIA_TRAPDOOR,
    DARK_OAK_TRAPDOOR,
    CRIMSON_TRAPDOOR,
    WARPED_TRAPDOOR,
    OAK_FENCE_GATE,
    SPRUCE_FENCE_GATE,
    BIRCH_FENCE_GATE,
    JUNGLE_FENCE_GATE,
    ACACIA_FENCE_GATE,
    DARK_OAK_FENCE_GATE,
    CRIMSON_FENCE_GATE,
    WARPED_FENCE_GATE,
    POWERED_RAIL,
    DETECTOR_RAIL,
    RAIL,
    ACTIVATOR_RAIL,
    SADDLE,
    MINECART,
    CHEST_MINECART,
    FURNACE_MINECART,
    TNT_MINECART,
    HOPPER_MINECART,
    CARROT_ON_A_STICK,
    WARPED_FUNGUS_ON_A_STICK,
    ELYTRA,
    OAK_BOAT,
    SPRUCE_BOAT,
    BIRCH_BOAT,
    JUNGLE_BOAT,
    ACACIA_BOAT,
    DARK_OAK_BOAT,
    STRUCTURE_BLOCK,
    JIGSAW,
    TURTLE_HELMET,
    SCUTE,
    FLINT_AND_STEEL,
    APPLE,
    BOW,
    ARROW,
    COAL,
    CHARCOAL,
    DIAMOND,
    EMERALD,
    LAPIS_LAZULI,
    QUARTZ,
    AMETHYST_SHARD,
    RAW_IRON,
    IRON_INGOT,
    RAW_COPPER,
    COPPER_INGOT,
    RAW_GOLD,
    GOLD_INGOT,
    NETHERITE_INGOT,
    NETHERITE_SCRAP,
    WOODEN_SWORD,
    WOODEN_SHOVEL,
    WOODEN_PICKAXE,
    WOODEN_AXE,
    WOODEN_HOE,
    STONE_SWORD,
    STONE_SHOVEL,
    STONE_PICKAXE,
    STONE_AXE,
    STONE_HOE,
    GOLDEN_SWORD,
    GOLDEN_SHOVEL,
    GOLDEN_PICKAXE,
    GOLDEN_AXE,
    GOLDEN_HOE,
    IRON_SWORD,
    IRON_SHOVEL,
    IRON_PICKAXE,
    IRON_AXE,
    IRON_HOE,
    DIAMOND_SWORD,
    DIAMOND_SHOVEL,
    DIAMOND_PICKAXE,
    DIAMOND_AXE,
    DIAMOND_HOE,
    NETHERITE_SWORD,
    NETHERITE_SHOVEL,
    NETHERITE_PICKAXE,
    NETHERITE_AXE,
    NETHERITE_HOE,
    STICK,
    BOWL,
    MUSHROOM_STEW,
    STRING,
    FEATHER,
    GUNPOWDER,
    WHEAT_SEEDS,
    WHEAT,
    BREAD,
    LEATHER_HELMET,
    LEATHER_CHESTPLATE,
    LEATHER_LEGGINGS,
    LEATHER_BOOTS,
    CHAINMAIL_HELMET,
    CHAINMAIL_CHESTPLATE,
    CHAINMAIL_LEGGINGS,
    CHAINMAIL_BOOTS,
    IRON_HELMET,
    IRON_CHESTPLATE,
    IRON_LEGGINGS,
    IRON_BOOTS,
    DIAMOND_HELMET,
    DIAMOND_CHESTPLATE,
    DIAMOND_LEGGINGS,
    DIAMOND_BOOTS,
    GOLDEN_HELMET,
    GOLDEN_CHESTPLATE,
    GOLDEN_LEGGINGS,
    GOLDEN_BOOTS,
    NETHERITE_HELMET,
    NETHERITE_CHESTPLATE,
    NETHERITE_LEGGINGS,
    NETHERITE_BOOTS,
    FLINT,
    PORKCHOP,
    COOKED_PORKCHOP,
    PAINTING,
    GOLDEN_APPLE,
    ENCHANTED_GOLDEN_APPLE,
    OAK_SIGN,
    SPRUCE_SIGN,
    BIRCH_SIGN,
    JUNGLE_SIGN,
    ACACIA_SIGN,
    DARK_OAK_SIGN,
    CRIMSON_SIGN,
    WARPED_SIGN,
    BUCKET,
    WATER_BUCKET,
    LAVA_BUCKET,
    POWDER_SNOW_BUCKET,
    SNOWBALL,
    LEATHER,
    MILK_BUCKET,
    PUFFERFISH_BUCKET,
    SALMON_BUCKET,
    COD_BUCKET,
    TROPICAL_FISH_BUCKET,
    AXOLOTL_BUCKET,
    BRICK,
    CLAY_BALL,
    DRIED_KELP_BLOCK,
    PAPER,
    BOOK,
    SLIME_BALL,
    EGG,
    COMPASS,
    BUNDLE,
    FISHING_ROD,
    CLOCK,
    SPYGLASS,
    GLOWSTONE_DUST,
    COD,
    SALMON,
    TROPICAL_FISH,
    PUFFERFISH,
    COOKED_COD,
    COOKED_SALMON,
    INK_SAC,
    GLOW_INK_SAC,
    COCOA_BEANS,
    WHITE_DYE,
    ORANGE_DYE,
    MAGENTA_DYE,
    LIGHT_BLUE_DYE,
    YELLOW_DYE,
    LIME_DYE,
    PINK_DYE,
    GRAY_DYE,
    LIGHT_GRAY_DYE,
    CYAN_DYE,
    PURPLE_DYE,
    BLUE_DYE,
    BROWN_DYE,
    GREEN_DYE,
    RED_DYE,
    BLACK_DYE,
    BONE_MEAL,
    BONE,
    SUGAR,
    CAKE,
    WHITE_BED,
    ORANGE_BED,
    MAGENTA_BED,
    LIGHT_BLUE_BED,
    YELLOW_BED,
    LIME_BED,
    PINK_BED,
    GRAY_BED,
    LIGHT_GRAY_BED,
    CYAN_BED,
    PURPLE_BED,
    BLUE_BED,
    BROWN_BED,
    GREEN_BED,
    RED_BED,
    BLACK_BED,
    COOKIE,
    FILLED_MAP,
    SHEARS,
    MELON_SLICE,
    DRIED_KELP,
    PUMPKIN_SEEDS,
    MELON_SEEDS,
    BEEF,
    COOKED_BEEF,
    CHICKEN,
    COOKED_CHICKEN,
    ROTTEN_FLESH,
    ENDER_PEARL,
    BLAZE_ROD,
    GHAST_TEAR,
    GOLD_NUGGET,
    NETHER_WART,
    POTION,
    GLASS_BOTTLE,
    SPIDER_EYE,
    FERMENTED_SPIDER_EYE,
    BLAZE_POWDER,
    MAGMA_CREAM,
    BREWING_STAND,
    CAULDRON,
    ENDER_EYE,
    GLISTERING_MELON_SLICE,
    AXOLOTL_SPAWN_EGG,
    BAT_SPAWN_EGG,
    BEE_SPAWN_EGG,
    BLAZE_SPAWN_EGG,
    CAT_SPAWN_EGG,
    CAVE_SPIDER_SPAWN_EGG,
    CHICKEN_SPAWN_EGG,
    COD_SPAWN_EGG,
    COW_SPAWN_EGG,
    CREEPER_SPAWN_EGG,
    DOLPHIN_SPAWN_EGG,
    DONKEY_SPAWN_EGG,
    DROWNED_SPAWN_EGG,
    ELDER_GUARDIAN_SPAWN_EGG,
    ENDERMAN_SPAWN_EGG,
    ENDERMITE_SPAWN_EGG,
    EVOKER_SPAWN_EGG,
    FOX_SPAWN_EGG,
    GHAST_SPAWN_EGG,
    GLOW_SQUID_SPAWN_EGG,
    GOAT_SPAWN_EGG,
    GUARDIAN_SPAWN_EGG,
    HOGLIN_SPAWN_EGG,
    HORSE_SPAWN_EGG,
    HUSK_SPAWN_EGG,
    LLAMA_SPAWN_EGG,
    MAGMA_CUBE_SPAWN_EGG,
    MOOSHROOM_SPAWN_EGG,
    MULE_SPAWN_EGG,
    OCELOT_SPAWN_EGG,
    PANDA_SPAWN_EGG,
    PARROT_SPAWN_EGG,
    PHANTOM_SPAWN_EGG,
    PIG_SPAWN_EGG,
    PIGLIN_SPAWN_EGG,
    PIGLIN_BRUTE_SPAWN_EGG,
    PILLAGER_SPAWN_EGG,
    POLAR_BEAR_SPAWN_EGG,
    PUFFERFISH_SPAWN_EGG,
    RABBIT_SPAWN_EGG,
    RAVAGER_SPAWN_EGG,
    SALMON_SPAWN_EGG,
    SHEEP_SPAWN_EGG,
    SHULKER_SPAWN_EGG,
    SILVERFISH_SPAWN_EGG,
    SKELETON_SPAWN_EGG,
    SKELETON_HORSE_SPAWN_EGG,
    SLIME_SPAWN_EGG,
    SPIDER_SPAWN_EGG,
    SQUID_SPAWN_EGG,
    STRAY_SPAWN_EGG,
    STRIDER_SPAWN_EGG,
    TRADER_LLAMA_SPAWN_EGG,
    TROPICAL_FISH_SPAWN_EGG,
    TURTLE_SPAWN_EGG,
    VEX_SPAWN_EGG,
    VILLAGER_SPAWN_EGG,
    VINDICATOR_SPAWN_EGG,
    WANDERING_TRADER_SPAWN_EGG,
    WITCH_SPAWN_EGG,
    WITHER_SKELETON_SPAWN_EGG,
    WOLF_SPAWN_EGG,
    ZOGLIN_SPAWN_EGG,
    ZOMBIE_SPAWN_EGG,
    ZOMBIE_HORSE_SPAWN_EGG,
    ZOMBIE_VILLAGER_SPAWN_EGG,
    ZOMBIFIED_PIGLIN_SPAWN_EGG,
    EXPERIENCE_BOTTLE,
    FIRE_CHARGE,
    WRITABLE_BOOK,
    WRITTEN_BOOK,
    ITEM_FRAME,
    GLOW_ITEM_FRAME,
    FLOWER_POT,
    CARROT,
    POTATO,
    BAKED_POTATO,
    POISONOUS_POTATO,
    MAP,
    GOLDEN_CARROT,
    SKELETON_SKULL,
    WITHER_SKELETON_SKULL,
    PLAYER_HEAD,
    ZOMBIE_HEAD,
    CREEPER_HEAD,
    DRAGON_HEAD,
    NETHER_STAR,
    PUMPKIN_PIE,
    FIREWORK_ROCKET,
    FIREWORK_STAR,
    ENCHANTED_BOOK,
    NETHER_BRICK,
    PRISMARINE_SHARD,
    PRISMARINE_CRYSTALS,
    RABBIT,
    COOKED_RABBIT,
    RABBIT_STEW,
    RABBIT_FOOT,
    RABBIT_HIDE,
    ARMOR_STAND,
    IRON_HORSE_ARMOR,
    GOLDEN_HORSE_ARMOR,
    DIAMOND_HORSE_ARMOR,
    LEATHER_HORSE_ARMOR,
    LEAD,
    NAME_TAG,
    COMMAND_BLOCK_MINECART,
    MUTTON,
    COOKED_MUTTON,
    WHITE_BANNER,
    ORANGE_BANNER,
    MAGENTA_BANNER,
    LIGHT_BLUE_BANNER,
    YELLOW_BANNER,
    LIME_BANNER,
    PINK_BANNER,
    GRAY_BANNER,
    LIGHT_GRAY_BANNER,
    CYAN_BANNER,
    PURPLE_BANNER,
    BLUE_BANNER,
    BROWN_BANNER,
    GREEN_BANNER,
    RED_BANNER,
    BLACK_BANNER,
    END_CRYSTAL,
    CHORUS_FRUIT,
    POPPED_CHORUS_FRUIT,
    BEETROOT,
    BEETROOT_SEEDS,
    BEETROOT_SOUP,
    DRAGON_BREATH,
    SPLASH_POTION,
    SPECTRAL_ARROW,
    TIPPED_ARROW,
    LINGERING_POTION,
    SHIELD,
    TOTEM_OF_UNDYING,
    SHULKER_SHELL,
    IRON_NUGGET,
    KNOWLEDGE_BOOK,
    DEBUG_STICK,
    MUSIC_DISC_13,
    MUSIC_DISC_CAT,
    MUSIC_DISC_BLOCKS,
    MUSIC_DISC_CHIRP,
    MUSIC_DISC_FAR,
    MUSIC_DISC_MALL,
    MUSIC_DISC_MELLOHI,
    MUSIC_DISC_STAL,
    MUSIC_DISC_STRAD,
    MUSIC_DISC_WARD,
    MUSIC_DISC_11,
    MUSIC_DISC_WAIT,
    MUSIC_DISC_PIGSTEP,
    TRIDENT,
    PHANTOM_MEMBRANE,
    NAUTILUS_SHELL,
    HEART_OF_THE_SEA,
    CROSSBOW,
    SUSPICIOUS_STEW,
    LOOM,
    FLOWER_BANNER_PATTERN,
    CREEPER_BANNER_PATTERN,
    SKULL_BANNER_PATTERN,
    MOJANG_BANNER_PATTERN,
    GLOBE_BANNER_PATTERN,
    PIGLIN_BANNER_PATTERN,
    COMPOSTER,
    BARREL,
    SMOKER,
    BLAST_FURNACE,
    CARTOGRAPHY_TABLE,
    FLETCHING_TABLE,
    GRINDSTONE,
    SMITHING_TABLE,
    STONECUTTER,
    BELL,
    LANTERN,
    SOUL_LANTERN,
    SWEET_BERRIES,
    GLOW_BERRIES,
    CAMPFIRE,
    SOUL_CAMPFIRE,
    SHROOMLIGHT,
    HONEYCOMB,
    BEE_NEST,
    BEEHIVE,
    HONEY_BOTTLE,
    HONEYCOMB_BLOCK,
    LODESTONE,
    CRYING_OBSIDIAN,
    BLACKSTONE,
    BLACKSTONE_SLAB,
    BLACKSTONE_STAIRS,
    GILDED_BLACKSTONE,
    POLISHED_BLACKSTONE,
    POLISHED_BLACKSTONE_SLAB,
    POLISHED_BLACKSTONE_STAIRS,
    CHISELED_POLISHED_BLACKSTONE,
    POLISHED_BLACKSTONE_BRICKS,
    POLISHED_BLACKSTONE_BRICK_SLAB,
    POLISHED_BLACKSTONE_BRICK_STAIRS,
    CRACKED_POLISHED_BLACKSTONE_BRICKS,
    RESPAWN_ANCHOR,
    CANDLE,
    WHITE_CANDLE,
    ORANGE_CANDLE,
    MAGENTA_CANDLE,
    LIGHT_BLUE_CANDLE,
    YELLOW_CANDLE,
    LIME_CANDLE,
    PINK_CANDLE,
    GRAY_CANDLE,
    LIGHT_GRAY_CANDLE,
    CYAN_CANDLE,
    PURPLE_CANDLE,
    BLUE_CANDLE,
    BROWN_CANDLE,
    GREEN_CANDLE,
    RED_CANDLE,
    BLACK_CANDLE,
    SMALL_AMETHYST_BUD,
    MEDIUM_AMETHYST_BUD,
    LARGE_AMETHYST_BUD,
    AMETHYST_CLUSTER,
    POINTED_DRIPSTONE,
    WATER,
    LAVA,
    TALL_SEAGRASS,
    PISTON_HEAD,
    MOVING_PISTON,
    WALL_TORCH,
    FIRE,
    SOUL_FIRE,
    REDSTONE_WIRE,
    OAK_WALL_SIGN,
    SPRUCE_WALL_SIGN,
    BIRCH_WALL_SIGN,
    ACACIA_WALL_SIGN,
    JUNGLE_WALL_SIGN,
    DARK_OAK_WALL_SIGN,
    REDSTONE_WALL_TORCH,
    SOUL_WALL_TORCH,
    NETHER_PORTAL,
    ATTACHED_PUMPKIN_STEM,
    ATTACHED_MELON_STEM,
    PUMPKIN_STEM,
    MELON_STEM,
    WATER_CAULDRON,
    LAVA_CAULDRON,
    POWDER_SNOW_CAULDRON,
    END_PORTAL,
    COCOA,
    TRIPWIRE,
    POTTED_OAK_SAPLING,
    POTTED_SPRUCE_SAPLING,
    POTTED_BIRCH_SAPLING,
    POTTED_JUNGLE_SAPLING,
    POTTED_ACACIA_SAPLING,
    POTTED_DARK_OAK_SAPLING,
    POTTED_FERN,
    POTTED_DANDELION,
    POTTED_POPPY,
    POTTED_BLUE_ORCHID,
    POTTED_ALLIUM,
    POTTED_AZURE_BLUET,
    POTTED_RED_TULIP,
    POTTED_ORANGE_TULIP,
    POTTED_WHITE_TULIP,
    POTTED_PINK_TULIP,
    POTTED_OXEYE_DAISY,
    POTTED_CORNFLOWER,
    POTTED_LILY_OF_THE_VALLEY,
    POTTED_WITHER_ROSE,
    POTTED_RED_MUSHROOM,
    POTTED_BROWN_MUSHROOM,
    POTTED_DEAD_BUSH,
    POTTED_CACTUS,
    CARROTS,
    POTATOES,
    SKELETON_WALL_SKULL,
    WITHER_SKELETON_WALL_SKULL,
    ZOMBIE_WALL_HEAD,
    PLAYER_WALL_HEAD,
    CREEPER_WALL_HEAD,
    DRAGON_WALL_HEAD,
    WHITE_WALL_BANNER,
    ORANGE_WALL_BANNER,
    MAGENTA_WALL_BANNER,
    LIGHT_BLUE_WALL_BANNER,
    YELLOW_WALL_BANNER,
    LIME_WALL_BANNER,
    PINK_WALL_BANNER,
    GRAY_WALL_BANNER,
    LIGHT_GRAY_WALL_BANNER,
    CYAN_WALL_BANNER,
    PURPLE_WALL_BANNER,
    BLUE_WALL_BANNER,
    BROWN_WALL_BANNER,
    GREEN_WALL_BANNER,
    RED_WALL_BANNER,
    BLACK_WALL_BANNER,
    BEETROOTS,
    END_GATEWAY,
    FROSTED_ICE,
    KELP_PLANT,
    DEAD_TUBE_CORAL_WALL_FAN,
    DEAD_BRAIN_CORAL_WALL_FAN,
    DEAD_BUBBLE_CORAL_WALL_FAN,
    DEAD_FIRE_CORAL_WALL_FAN,
    DEAD_HORN_CORAL_WALL_FAN,
    TUBE_CORAL_WALL_FAN,
    BRAIN_CORAL_WALL_FAN,
    BUBBLE_CORAL_WALL_FAN,
    FIRE_CORAL_WALL_FAN,
    HORN_CORAL_WALL_FAN,
    BAMBOO_SAPLING,
    POTTED_BAMBOO,
    VOID_AIR,
    CAVE_AIR,
    BUBBLE_COLUMN,
    SWEET_BERRY_BUSH,
    WEEPING_VINES_PLANT,
    TWISTING_VINES_PLANT,
    CRIMSON_WALL_SIGN,
    WARPED_WALL_SIGN,
    POTTED_CRIMSON_FUNGUS,
    POTTED_WARPED_FUNGUS,
    POTTED_CRIMSON_ROOTS,
    POTTED_WARPED_ROOTS,
    CANDLE_CAKE,
    WHITE_CANDLE_CAKE,
    ORANGE_CANDLE_CAKE,
    MAGENTA_CANDLE_CAKE,
    LIGHT_BLUE_CANDLE_CAKE,
    YELLOW_CANDLE_CAKE,
    LIME_CANDLE_CAKE,
    PINK_CANDLE_CAKE,
    GRAY_CANDLE_CAKE,
    LIGHT_GRAY_CANDLE_CAKE,
    CYAN_CANDLE_CAKE,
    PURPLE_CANDLE_CAKE,
    BLUE_CANDLE_CAKE,
    BROWN_CANDLE_CAKE,
    GREEN_CANDLE_CAKE,
    RED_CANDLE_CAKE,
    BLACK_CANDLE_CAKE,
    POWDER_SNOW,
    CAVE_VINES,
    CAVE_VINES_PLANT,
    BIG_DRIPLEAF_STEM,
    POTTED_AZALEA_BUSH,
    POTTED_FLOWERING_AZALEA_BUSH,
    LEGACY_AIR,
    LEGACY_STONE,
    LEGACY_GRASS,
    LEGACY_DIRT,
    LEGACY_COBBLESTONE,
    LEGACY_WOOD,
    LEGACY_SAPLING,
    LEGACY_BEDROCK,
    LEGACY_WATER,
    LEGACY_STATIONARY_WATER,
    LEGACY_LAVA,
    LEGACY_STATIONARY_LAVA,
    LEGACY_SAND,
    LEGACY_GRAVEL,
    LEGACY_GOLD_ORE,
    LEGACY_IRON_ORE,
    LEGACY_COAL_ORE,
    LEGACY_LOG,
    LEGACY_LEAVES,
    LEGACY_SPONGE,
    LEGACY_GLASS,
    LEGACY_LAPIS_ORE,
    LEGACY_LAPIS_BLOCK,
    LEGACY_DISPENSER,
    LEGACY_SANDSTONE,
    LEGACY_NOTE_BLOCK,
    LEGACY_BED_BLOCK,
    LEGACY_POWERED_RAIL,
    LEGACY_DETECTOR_RAIL,
    LEGACY_PISTON_STICKY_BASE,
    LEGACY_WEB,
    LEGACY_LONG_GRASS,
    LEGACY_DEAD_BUSH,
    LEGACY_PISTON_BASE,
    LEGACY_PISTON_EXTENSION,
    LEGACY_WOOL,
    LEGACY_PISTON_MOVING_PIECE,
    LEGACY_YELLOW_FLOWER,
    LEGACY_RED_ROSE,
    LEGACY_BROWN_MUSHROOM,
    LEGACY_RED_MUSHROOM,
    LEGACY_GOLD_BLOCK,
    LEGACY_IRON_BLOCK,
    LEGACY_DOUBLE_STEP,
    LEGACY_STEP,
    LEGACY_BRICK,
    LEGACY_TNT,
    LEGACY_BOOKSHELF,
    LEGACY_MOSSY_COBBLESTONE,
    LEGACY_OBSIDIAN,
    LEGACY_TORCH,
    LEGACY_FIRE,
    LEGACY_MOB_SPAWNER,
    LEGACY_WOOD_STAIRS,
    LEGACY_CHEST,
    LEGACY_REDSTONE_WIRE,
    LEGACY_DIAMOND_ORE,
    LEGACY_DIAMOND_BLOCK,
    LEGACY_WORKBENCH,
    LEGACY_CROPS,
    LEGACY_SOIL,
    LEGACY_FURNACE,
    LEGACY_BURNING_FURNACE,
    LEGACY_SIGN_POST,
    LEGACY_WOODEN_DOOR,
    LEGACY_LADDER,
    LEGACY_RAILS,
    LEGACY_COBBLESTONE_STAIRS,
    LEGACY_WALL_SIGN,
    LEGACY_LEVER,
    LEGACY_STONE_PLATE,
    LEGACY_IRON_DOOR_BLOCK,
    LEGACY_WOOD_PLATE,
    LEGACY_REDSTONE_ORE,
    LEGACY_GLOWING_REDSTONE_ORE,
    LEGACY_REDSTONE_TORCH_OFF,
    LEGACY_REDSTONE_TORCH_ON,
    LEGACY_STONE_BUTTON,
    LEGACY_SNOW,
    LEGACY_ICE,
    LEGACY_SNOW_BLOCK,
    LEGACY_CACTUS,
    LEGACY_CLAY,
    LEGACY_SUGAR_CANE_BLOCK,
    LEGACY_JUKEBOX,
    LEGACY_FENCE,
    LEGACY_PUMPKIN,
    LEGACY_NETHERRACK,
    LEGACY_SOUL_SAND,
    LEGACY_GLOWSTONE,
    LEGACY_PORTAL,
    LEGACY_JACK_O_LANTERN,
    LEGACY_CAKE_BLOCK,
    LEGACY_DIODE_BLOCK_OFF,
    LEGACY_DIODE_BLOCK_ON,
    LEGACY_STAINED_GLASS,
    LEGACY_TRAP_DOOR,
    LEGACY_MONSTER_EGGS,
    LEGACY_SMOOTH_BRICK,
    LEGACY_HUGE_MUSHROOM_1,
    LEGACY_HUGE_MUSHROOM_2,
    LEGACY_IRON_FENCE,
    LEGACY_THIN_GLASS,
    LEGACY_MELON_BLOCK,
    LEGACY_PUMPKIN_STEM,
    LEGACY_MELON_STEM,
    LEGACY_VINE,
    LEGACY_FENCE_GATE,
    LEGACY_BRICK_STAIRS,
    LEGACY_SMOOTH_STAIRS,
    LEGACY_MYCEL,
    LEGACY_WATER_LILY,
    LEGACY_NETHER_BRICK,
    LEGACY_NETHER_FENCE,
    LEGACY_NETHER_BRICK_STAIRS,
    LEGACY_NETHER_WARTS,
    LEGACY_ENCHANTMENT_TABLE,
    LEGACY_BREWING_STAND,
    LEGACY_CAULDRON,
    LEGACY_ENDER_PORTAL,
    LEGACY_ENDER_PORTAL_FRAME,
    LEGACY_ENDER_STONE,
    LEGACY_DRAGON_EGG,
    LEGACY_REDSTONE_LAMP_OFF,
    LEGACY_REDSTONE_LAMP_ON,
    LEGACY_WOOD_DOUBLE_STEP,
    LEGACY_WOOD_STEP,
    LEGACY_COCOA,
    LEGACY_SANDSTONE_STAIRS,
    LEGACY_EMERALD_ORE,
    LEGACY_ENDER_CHEST,
    LEGACY_TRIPWIRE_HOOK,
    LEGACY_TRIPWIRE,
    LEGACY_EMERALD_BLOCK,
    LEGACY_SPRUCE_WOOD_STAIRS,
    LEGACY_BIRCH_WOOD_STAIRS,
    LEGACY_JUNGLE_WOOD_STAIRS,
    LEGACY_COMMAND,
    LEGACY_BEACON,
    LEGACY_COBBLE_WALL,
    LEGACY_FLOWER_POT,
    LEGACY_CARROT,
    LEGACY_POTATO,
    LEGACY_WOOD_BUTTON,
    LEGACY_SKULL,
    LEGACY_ANVIL,
    LEGACY_TRAPPED_CHEST,
    LEGACY_GOLD_PLATE,
    LEGACY_IRON_PLATE,
    LEGACY_REDSTONE_COMPARATOR_OFF,
    LEGACY_REDSTONE_COMPARATOR_ON,
    LEGACY_DAYLIGHT_DETECTOR,
    LEGACY_REDSTONE_BLOCK,
    LEGACY_QUARTZ_ORE,
    LEGACY_HOPPER,
    LEGACY_QUARTZ_BLOCK,
    LEGACY_QUARTZ_STAIRS,
    LEGACY_ACTIVATOR_RAIL,
    LEGACY_DROPPER,
    LEGACY_STAINED_CLAY,
    LEGACY_STAINED_GLASS_PANE,
    LEGACY_LEAVES_2,
    LEGACY_LOG_2,
    LEGACY_ACACIA_STAIRS,
    LEGACY_DARK_OAK_STAIRS,
    LEGACY_SLIME_BLOCK,
    LEGACY_BARRIER,
    LEGACY_IRON_TRAPDOOR,
    LEGACY_PRISMARINE,
    LEGACY_SEA_LANTERN,
    LEGACY_HAY_BLOCK,
    LEGACY_CARPET,
    LEGACY_HARD_CLAY,
    LEGACY_COAL_BLOCK,
    LEGACY_PACKED_ICE,
    LEGACY_DOUBLE_PLANT,
    LEGACY_STANDING_BANNER,
    LEGACY_WALL_BANNER,
    LEGACY_DAYLIGHT_DETECTOR_INVERTED,
    LEGACY_RED_SANDSTONE,
    LEGACY_RED_SANDSTONE_STAIRS,
    LEGACY_DOUBLE_STONE_SLAB2,
    LEGACY_STONE_SLAB2,
    LEGACY_SPRUCE_FENCE_GATE,
    LEGACY_BIRCH_FENCE_GATE,
    LEGACY_JUNGLE_FENCE_GATE,
    LEGACY_DARK_OAK_FENCE_GATE,
    LEGACY_ACACIA_FENCE_GATE,
    LEGACY_SPRUCE_FENCE,
    LEGACY_BIRCH_FENCE,
    LEGACY_JUNGLE_FENCE,
    LEGACY_DARK_OAK_FENCE,
    LEGACY_ACACIA_FENCE,
    LEGACY_SPRUCE_DOOR,
    LEGACY_BIRCH_DOOR,
    LEGACY_JUNGLE_DOOR,
    LEGACY_ACACIA_DOOR,
    LEGACY_DARK_OAK_DOOR,
    LEGACY_END_ROD,
    LEGACY_CHORUS_PLANT,
    LEGACY_CHORUS_FLOWER,
    LEGACY_PURPUR_BLOCK,
    LEGACY_PURPUR_PILLAR,
    LEGACY_PURPUR_STAIRS,
    LEGACY_PURPUR_DOUBLE_SLAB,
    LEGACY_PURPUR_SLAB,
    LEGACY_END_BRICKS,
    LEGACY_BEETROOT_BLOCK,
    LEGACY_GRASS_PATH,
    LEGACY_END_GATEWAY,
    LEGACY_COMMAND_REPEATING,
    LEGACY_COMMAND_CHAIN,
    LEGACY_FROSTED_ICE,
    LEGACY_MAGMA,
    LEGACY_NETHER_WART_BLOCK,
    LEGACY_RED_NETHER_BRICK,
    LEGACY_BONE_BLOCK,
    LEGACY_STRUCTURE_VOID,
    LEGACY_OBSERVER,
    LEGACY_WHITE_SHULKER_BOX,
    LEGACY_ORANGE_SHULKER_BOX,
    LEGACY_MAGENTA_SHULKER_BOX,
    LEGACY_LIGHT_BLUE_SHULKER_BOX,
    LEGACY_YELLOW_SHULKER_BOX,
    LEGACY_LIME_SHULKER_BOX,
    LEGACY_PINK_SHULKER_BOX,
    LEGACY_GRAY_SHULKER_BOX,
    LEGACY_SILVER_SHULKER_BOX,
    LEGACY_CYAN_SHULKER_BOX,
    LEGACY_PURPLE_SHULKER_BOX,
    LEGACY_BLUE_SHULKER_BOX,
    LEGACY_BROWN_SHULKER_BOX,
    LEGACY_GREEN_SHULKER_BOX,
    LEGACY_RED_SHULKER_BOX,
    LEGACY_BLACK_SHULKER_BOX,
    LEGACY_WHITE_GLAZED_TERRACOTTA,
    LEGACY_ORANGE_GLAZED_TERRACOTTA,
    LEGACY_MAGENTA_GLAZED_TERRACOTTA,
    LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA,
    LEGACY_YELLOW_GLAZED_TERRACOTTA,
    LEGACY_LIME_GLAZED_TERRACOTTA,
    LEGACY_PINK_GLAZED_TERRACOTTA,
    LEGACY_GRAY_GLAZED_TERRACOTTA,
    LEGACY_SILVER_GLAZED_TERRACOTTA,
    LEGACY_CYAN_GLAZED_TERRACOTTA,
    LEGACY_PURPLE_GLAZED_TERRACOTTA,
    LEGACY_BLUE_GLAZED_TERRACOTTA,
    LEGACY_BROWN_GLAZED_TERRACOTTA,
    LEGACY_GREEN_GLAZED_TERRACOTTA,
    LEGACY_RED_GLAZED_TERRACOTTA,
    LEGACY_BLACK_GLAZED_TERRACOTTA,
    LEGACY_CONCRETE,
    LEGACY_CONCRETE_POWDER,
    LEGACY_STRUCTURE_BLOCK,
    LEGACY_IRON_SPADE,
    LEGACY_IRON_PICKAXE,
    LEGACY_IRON_AXE,
    LEGACY_FLINT_AND_STEEL,
    LEGACY_APPLE,
    LEGACY_BOW,
    LEGACY_ARROW,
    LEGACY_COAL,
    LEGACY_DIAMOND,
    LEGACY_IRON_INGOT,
    LEGACY_GOLD_INGOT,
    LEGACY_IRON_SWORD,
    LEGACY_WOOD_SWORD,
    LEGACY_WOOD_SPADE,
    LEGACY_WOOD_PICKAXE,
    LEGACY_WOOD_AXE,
    LEGACY_STONE_SWORD,
    LEGACY_STONE_SPADE,
    LEGACY_STONE_PICKAXE,
    LEGACY_STONE_AXE,
    LEGACY_DIAMOND_SWORD,
    LEGACY_DIAMOND_SPADE,
    LEGACY_DIAMOND_PICKAXE,
    LEGACY_DIAMOND_AXE,
    LEGACY_STICK,
    LEGACY_BOWL,
    LEGACY_MUSHROOM_SOUP,
    LEGACY_GOLD_SWORD,
    LEGACY_GOLD_SPADE,
    LEGACY_GOLD_PICKAXE,
    LEGACY_GOLD_AXE,
    LEGACY_STRING,
    LEGACY_FEATHER,
    LEGACY_SULPHUR,
    LEGACY_WOOD_HOE,
    LEGACY_STONE_HOE,
    LEGACY_IRON_HOE,
    LEGACY_DIAMOND_HOE,
    LEGACY_GOLD_HOE,
    LEGACY_SEEDS,
    LEGACY_WHEAT,
    LEGACY_BREAD,
    LEGACY_LEATHER_HELMET,
    LEGACY_LEATHER_CHESTPLATE,
    LEGACY_LEATHER_LEGGINGS,
    LEGACY_LEATHER_BOOTS,
    LEGACY_CHAINMAIL_HELMET,
    LEGACY_CHAINMAIL_CHESTPLATE,
    LEGACY_CHAINMAIL_LEGGINGS,
    LEGACY_CHAINMAIL_BOOTS,
    LEGACY_IRON_HELMET,
    LEGACY_IRON_CHESTPLATE,
    LEGACY_IRON_LEGGINGS,
    LEGACY_IRON_BOOTS,
    LEGACY_DIAMOND_HELMET,
    LEGACY_DIAMOND_CHESTPLATE,
    LEGACY_DIAMOND_LEGGINGS,
    LEGACY_DIAMOND_BOOTS,
    LEGACY_GOLD_HELMET,
    LEGACY_GOLD_CHESTPLATE,
    LEGACY_GOLD_LEGGINGS,
    LEGACY_GOLD_BOOTS,
    LEGACY_FLINT,
    LEGACY_PORK,
    LEGACY_GRILLED_PORK,
    LEGACY_PAINTING,
    LEGACY_GOLDEN_APPLE,
    LEGACY_SIGN,
    LEGACY_WOOD_DOOR,
    LEGACY_BUCKET,
    LEGACY_WATER_BUCKET,
    LEGACY_LAVA_BUCKET,
    LEGACY_MINECART,
    LEGACY_SADDLE,
    LEGACY_IRON_DOOR,
    LEGACY_REDSTONE,
    LEGACY_SNOW_BALL,
    LEGACY_BOAT,
    LEGACY_LEATHER,
    LEGACY_MILK_BUCKET,
    LEGACY_CLAY_BRICK,
    LEGACY_CLAY_BALL,
    LEGACY_SUGAR_CANE,
    LEGACY_PAPER,
    LEGACY_BOOK,
    LEGACY_SLIME_BALL,
    LEGACY_STORAGE_MINECART,
    LEGACY_POWERED_MINECART,
    LEGACY_EGG,
    LEGACY_COMPASS,
    LEGACY_FISHING_ROD,
    LEGACY_WATCH,
    LEGACY_GLOWSTONE_DUST,
    LEGACY_RAW_FISH,
    LEGACY_COOKED_FISH,
    LEGACY_INK_SACK,
    LEGACY_BONE,
    LEGACY_SUGAR,
    LEGACY_CAKE,
    LEGACY_BED,
    LEGACY_DIODE,
    LEGACY_COOKIE,
    LEGACY_MAP,
    LEGACY_SHEARS,
    LEGACY_MELON,
    LEGACY_PUMPKIN_SEEDS,
    LEGACY_MELON_SEEDS,
    LEGACY_RAW_BEEF,
    LEGACY_COOKED_BEEF,
    LEGACY_RAW_CHICKEN,
    LEGACY_COOKED_CHICKEN,
    LEGACY_ROTTEN_FLESH,
    LEGACY_ENDER_PEARL,
    LEGACY_BLAZE_ROD,
    LEGACY_GHAST_TEAR,
    LEGACY_GOLD_NUGGET,
    LEGACY_NETHER_STALK,
    LEGACY_POTION,
    LEGACY_GLASS_BOTTLE,
    LEGACY_SPIDER_EYE,
    LEGACY_FERMENTED_SPIDER_EYE,
    LEGACY_BLAZE_POWDER,
    LEGACY_MAGMA_CREAM,
    LEGACY_BREWING_STAND_ITEM,
    LEGACY_CAULDRON_ITEM,
    LEGACY_EYE_OF_ENDER,
    LEGACY_SPECKLED_MELON,
    LEGACY_MONSTER_EGG,
    LEGACY_EXP_BOTTLE,
    LEGACY_FIREBALL,
    LEGACY_BOOK_AND_QUILL,
    LEGACY_WRITTEN_BOOK,
    LEGACY_EMERALD,
    LEGACY_ITEM_FRAME,
    LEGACY_FLOWER_POT_ITEM,
    LEGACY_CARROT_ITEM,
    LEGACY_POTATO_ITEM,
    LEGACY_BAKED_POTATO,
    LEGACY_POISONOUS_POTATO,
    LEGACY_EMPTY_MAP,
    LEGACY_GOLDEN_CARROT,
    LEGACY_SKULL_ITEM,
    LEGACY_CARROT_STICK,
    LEGACY_NETHER_STAR,
    LEGACY_PUMPKIN_PIE,
    LEGACY_FIREWORK,
    LEGACY_FIREWORK_CHARGE,
    LEGACY_ENCHANTED_BOOK,
    LEGACY_REDSTONE_COMPARATOR,
    LEGACY_NETHER_BRICK_ITEM,
    LEGACY_QUARTZ,
    LEGACY_EXPLOSIVE_MINECART,
    LEGACY_HOPPER_MINECART,
    LEGACY_PRISMARINE_SHARD,
    LEGACY_PRISMARINE_CRYSTALS,
    LEGACY_RABBIT,
    LEGACY_COOKED_RABBIT,
    LEGACY_RABBIT_STEW,
    LEGACY_RABBIT_FOOT,
    LEGACY_RABBIT_HIDE,
    LEGACY_ARMOR_STAND,
    LEGACY_IRON_BARDING,
    LEGACY_GOLD_BARDING,
    LEGACY_DIAMOND_BARDING,
    LEGACY_LEASH,
    LEGACY_NAME_TAG,
    LEGACY_COMMAND_MINECART,
    LEGACY_MUTTON,
    LEGACY_COOKED_MUTTON,
    LEGACY_BANNER,
    LEGACY_END_CRYSTAL,
    LEGACY_SPRUCE_DOOR_ITEM,
    LEGACY_BIRCH_DOOR_ITEM,
    LEGACY_JUNGLE_DOOR_ITEM,
    LEGACY_ACACIA_DOOR_ITEM,
    LEGACY_DARK_OAK_DOOR_ITEM,
    LEGACY_CHORUS_FRUIT,
    LEGACY_CHORUS_FRUIT_POPPED,
    LEGACY_BEETROOT,
    LEGACY_BEETROOT_SEEDS,
    LEGACY_BEETROOT_SOUP,
    LEGACY_DRAGONS_BREATH,
    LEGACY_SPLASH_POTION,
    LEGACY_SPECTRAL_ARROW,
    LEGACY_TIPPED_ARROW,
    LEGACY_LINGERING_POTION,
    LEGACY_SHIELD,
    LEGACY_ELYTRA,
    LEGACY_BOAT_SPRUCE,
    LEGACY_BOAT_BIRCH,
    LEGACY_BOAT_JUNGLE,
    LEGACY_BOAT_ACACIA,
    LEGACY_BOAT_DARK_OAK,
    LEGACY_TOTEM,
    LEGACY_SHULKER_SHELL,
    LEGACY_IRON_NUGGET,
    LEGACY_KNOWLEDGE_BOOK,
    LEGACY_GOLD_RECORD,
    LEGACY_GREEN_RECORD,
    LEGACY_RECORD_3,
    LEGACY_RECORD_4,
    LEGACY_RECORD_5,
    LEGACY_RECORD_6,
    LEGACY_RECORD_7,
    LEGACY_RECORD_8,
    LEGACY_RECORD_9,
    LEGACY_RECORD_10,
    LEGACY_RECORD_11,
    LEGACY_RECORD_12,
}

// org.bukkit.inventory.MerchantInventory
declare interface MerchantInventory extends Inventory {
    getSelectedRecipeIndex(): number;
    getMerchant(): Merchant;
    getSelectedRecipe(): MerchantRecipe;
}

// org.bukkit.boss.BarFlag
declare enum BarFlag {
    DARKEN_SKY,
    PLAY_BOSS_MUSIC,
    CREATE_FOG,
}

// org.bukkit.event.inventory.BrewingStandFuelEvent
declare interface BrewingStandFuelEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    getFuel(): ItemStack;
    getHandlerList(): HandlerList;
    setConsuming(b: boolean): void;
    setFuelPower(i: number): void;
    getFuelPower(): number;
    isConsuming(): boolean;
}

// org.bukkit.block.data.type.Jigsaw
declare interface Jigsaw extends BlockData {
    getOrientation(): Orientation;
    setOrientation(orientation: Orientation): void;
}

// org.bukkit.entity.Item
declare interface Item extends Entity {
    getOwner(): UUID;
    setOwner(uUID: UUID): void;
    setPickupDelay(i: number): void;
    setThrower(uUID: UUID): void;
    setItemStack(itemStack: ItemStack): void;
    getThrower(): UUID;
    getPickupDelay(): number;
    getItemStack(): ItemStack;
}

// org.bukkit.event.server.ServerEvent
declare interface ServerEvent extends Event {
}

// org.bukkit.event.vehicle.VehicleCollisionEvent
declare interface VehicleCollisionEvent extends VehicleEvent {
}

// org.bukkit.entity.Golem
declare interface Golem extends Creature {
}

// org.bukkit.event.player.PlayerEvent
declare interface PlayerEvent extends Event {
    getPlayer(): Player;
}

// org.bukkit.block.data.Bisected$Half
declare enum Half {
    TOP,
    BOTTOM,
}

// java.util.concurrent.Flow$Subscriber
declare interface Subscriber {
    onSubscribe(subscription: Subscription): void;
    onNext(object: any): void;
    onComplete(): void;
    onError(throwable: Throwable): void;
}

// org.bukkit.inventory.meta.BookMeta$Spigot
declare interface Spigot {
    getPage(i: number): BaseComponent[];
    setPage(i: number, baseComponent: BaseComponent): void;
    setPages(baseComponent: BaseComponent): void;
    setPages(list: List): void;
    getPages(): List;
    addPage(baseComponent: BaseComponent): void;
}

// org.bukkit.FireworkEffect$Builder
declare interface Builder {
    build(): FireworkEffect;
    with(type: Type): Builder;
    trail(b: boolean): Builder;
    withColor(color: Color): Builder;
    withColor(iterable: Iterable): Builder;
    withColor(color: Color): Builder;
    withFade(color: Color): Builder;
    withFade(iterable: Iterable): Builder;
    withFade(color: Color): Builder;
    flicker(b: boolean): Builder;
    withTrail(): Builder;
    withFlicker(): Builder;
}

// java.lang.String
declare interface String extends Serializable, Comparable, CharSequence {
    length(): number;
    getChars(i: number, i: number, c: string, i: number): void;
    compareTo(s: string): number;
    compareTo(object: any): number;
    indexOf(s: string, i: number): number;
    indexOf(i: number): number;
    indexOf(i: number, i: number): number;
    indexOf(s: string): number;
    valueOf(i: number): string;
    valueOf(f: number): string;
    valueOf(b: boolean): string;
    valueOf(l: number): string;
    valueOf(d: number): string;
    valueOf(object: any): string;
    valueOf(c: string): string;
    valueOf(c: string): string;
    valueOf(c: string, i: number, i: number): string;
    codePoints(): IntStream;
    isEmpty(): boolean;
    charAt(i: number): string;
    codePointAt(i: number): number;
    codePointBefore(i: number): number;
    codePointCount(i: number, i: number): number;
    offsetByCodePoints(i: number, i: number): number;
    getBytes(charset: Charset): number[];
    getBytes(i: number, i: number, b: number, i: number): void;
    getBytes(s: string): number[];
    getBytes(): number[];
    contentEquals(s: string): boolean;
    contentEquals(s: string): boolean;
    equalsIgnoreCase(s: string): boolean;
    compareToIgnoreCase(s: string): number;
    regionMatches(b: boolean, i: number, s: string, i: number, i: number): boolean;
    regionMatches(i: number, s: string, i: number, i: number): boolean;
    startsWith(s: string): boolean;
    startsWith(s: string, i: number): boolean;
    endsWith(s: string): boolean;
    lastIndexOf(i: number): number;
    lastIndexOf(s: string, i: number): number;
    lastIndexOf(s: string): number;
    lastIndexOf(i: number, i: number): number;
    substring(i: number, i: number): string;
    substring(i: number): string;
    subSequence(i: number, i: number): string;
    concat(s: string): string;
    replace(s: string, s: string): string;
    replace(c: string, c: string): string;
    matches(s: string): boolean;
    contains(s: string): boolean;
    replaceFirst(s: string, s: string): string;
    replaceAll(s: string, s: string): string;
    split(s: string): string[];
    split(s: string, i: number): string[];
    join(s: string, s: string): string;
    join(s: string, iterable: Iterable): string;
    toLowerCase(): string;
    toLowerCase(locale: Locale): string;
    toUpperCase(locale: Locale): string;
    toUpperCase(): string;
    trim(): string;
    strip(): string;
    stripLeading(): string;
    stripTrailing(): string;
    isBlank(): boolean;
    lines(): Stream;
    chars(): IntStream;
    toCharArray(): string[];
    format(s: string, object: any): string;
    format(locale: Locale, s: string, object: any): string;
    copyValueOf(c: string, i: number, i: number): string;
    copyValueOf(c: string): string;
    intern(): string;
    repeat(i: number): string;
    CASE_INSENSITIVE_ORDER: Comparator;
}

// org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason
declare enum ChangeReason {
    BUCKET_FILL,
    BUCKET_EMPTY,
    BOTTLE_FILL,
    BOTTLE_EMPTY,
    BANNER_WASH,
    ARMOR_WASH,
    SHULKER_WASH,
    EXTINGUISH,
    EVAPORATE,
    NATURAL_FILL,
    UNKNOWN,
}

// org.bukkit.block.data.type.Bamboo$Leaves
declare enum Leaves {
    NONE,
    SMALL,
    LARGE,
}

// java.io.ObjectOutputStream
declare interface ObjectOutputStream extends OutputStream, ObjectOutput, ObjectStreamConstants {
    writeObject(object: any): void;
    defaultWriteObject(): void;
    writeInt(i: number): void;
    putFields(): PutField;
    writeFields(): void;
    reset(): void;
    writeBytes(s: string): void;
    writeUTF(s: string): void;
    writeFloat(f: number): void;
    writeChar(i: number): void;
    useProtocolVersion(i: number): void;
    writeUnshared(object: any): void;
    writeBoolean(b: boolean): void;
    writeByte(i: number): void;
    writeShort(i: number): void;
    writeLong(l: number): void;
    writeDouble(d: number): void;
    writeChars(s: string): void;
}

// java.net.http.HttpClient$Builder
declare interface Builder {
    priority(i: number): Builder;
    version(version: Version): Builder;
    proxy(proxySelector: ProxySelector): Builder;
    build(): HttpClient;
    executor(executor: Executor): Builder;
    connectTimeout(duration: Duration): Builder;
    followRedirects(redirect: Redirect): Builder;
    sslContext(sSLContext: SSLContext): Builder;
    cookieHandler(cookieHandler: CookieHandler): Builder;
    authenticator(authenticator: Authenticator): Builder;
    sslParameters(sSLParameters: SSLParameters): Builder;
    NO_PROXY: ProxySelector;
}

// org.bukkit.scoreboard.Team$OptionStatus
declare enum OptionStatus {
    ALWAYS,
    NEVER,
    FOR_OTHER_TEAMS,
    FOR_OWN_TEAM,
}

// javax.net.ssl.SSLParameters
declare interface SSLParameters {
    getCipherSuites(): string[];
    setCipherSuites(s: string): void;
    getProtocols(): string[];
    setProtocols(s: string): void;
    getWantClientAuth(): boolean;
    setWantClientAuth(b: boolean): void;
    getNeedClientAuth(): boolean;
    setNeedClientAuth(b: boolean): void;
    getAlgorithmConstraints(): AlgorithmConstraints;
    setAlgorithmConstraints(algorithmConstraints: AlgorithmConstraints): void;
    getEndpointIdentificationAlgorithm(): string;
    setEndpointIdentificationAlgorithm(s: string): void;
    setServerNames(list: List): void;
    getServerNames(): List;
    setSNIMatchers(collection: Collection): void;
    getSNIMatchers(): Collection;
    setUseCipherSuitesOrder(b: boolean): void;
    getUseCipherSuitesOrder(): boolean;
    setEnableRetransmissions(b: boolean): void;
    getEnableRetransmissions(): boolean;
    setMaximumPacketSize(i: number): void;
    getMaximumPacketSize(): number;
    getApplicationProtocols(): string[];
    setApplicationProtocols(s: string): void;
}

// org.bukkit.event.hanging.HangingBreakEvent$RemoveCause
declare enum RemoveCause {
    ENTITY,
    EXPLOSION,
    OBSTRUCTION,
    PHYSICS,
    DEFAULT,
}

// org.bukkit.boss.DragonBattle$RespawnPhase
declare enum RespawnPhase {
    START,
    PREPARING_TO_SUMMON_PILLARS,
    SUMMONING_PILLARS,
    SUMMONING_DRAGON,
    END,
    NONE,
}

// org.bukkit.map.MapCursor$Type
declare enum Type {
    WHITE_POINTER,
    GREEN_POINTER,
    RED_POINTER,
    BLUE_POINTER,
    WHITE_CROSS,
    RED_MARKER,
    WHITE_CIRCLE,
    SMALL_WHITE_CIRCLE,
    MANSION,
    TEMPLE,
    BANNER_WHITE,
    BANNER_ORANGE,
    BANNER_MAGENTA,
    BANNER_LIGHT_BLUE,
    BANNER_YELLOW,
    BANNER_LIME,
    BANNER_PINK,
    BANNER_GRAY,
    BANNER_LIGHT_GRAY,
    BANNER_CYAN,
    BANNER_PURPLE,
    BANNER_BLUE,
    BANNER_BROWN,
    BANNER_GREEN,
    BANNER_RED,
    BANNER_BLACK,
    RED_X,
}

// org.bukkit.entity.Horse$Style
declare enum Style {
    NONE,
    WHITE,
    WHITEFIELD,
    WHITE_DOTS,
    BLACK_DOTS,
}

// java.util.concurrent.Future
declare interface Future {
    get(l: number, timeUnit: TimeUnit): any;
    get(): any;
    isDone(): boolean;
    cancel(b: boolean): boolean;
    isCancelled(): boolean;
}

// java.util.Enumeration
declare interface Enumeration {
    asIterator(): Iterator;
    hasMoreElements(): boolean;
    nextElement(): any;
}

// java.nio.file.OpenOption
declare interface OpenOption {
}

// org.bukkit.map.MapFont$CharacterSprite
declare interface CharacterSprite {
    get(i: number, i: number): boolean;
    getHeight(): number;
    getWidth(): number;
}

// java.util.List
declare interface List extends Collection {
    add(i: number, object: any): void;
    add(object: any): boolean;
    remove(object: any): boolean;
    remove(i: number): any;
    get(i: number): any;
    equals(object: any): boolean;
    hashCode(): number;
    copyOf(collection: Collection): List;
    indexOf(object: any): number;
    clear(): void;
    isEmpty(): boolean;
    lastIndexOf(object: any): number;
    contains(object: any): boolean;
    replaceAll(func: UnaryOperator): void;
    size(): number;
    subList(i: number, i: number): List;
    toArray(): any[];
    toArray(object: any): any[];
    iterator(): Iterator;
    spliterator(): Spliterator;
    addAll(i: number, collection: Collection): boolean;
    addAll(collection: Collection): boolean;
    set(i: number, object: any): any;
    of(object: any, object: any): List;
    of(object: any): List;
    of(object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(): List;
    containsAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    removeAll(collection: Collection): boolean;
    sort(comparator: Comparator): void;
    listIterator(): ListIterator;
    listIterator(i: number): ListIterator;
}

// java.util.function.Predicate
declare interface Predicate {
    test(object: any): boolean;
    or(predicate: Predicate): Predicate;
    and(predicate: Predicate): Predicate;
    negate(): Predicate;
    isEqual(object: any): Predicate;
    not(predicate: Predicate): Predicate;
}

// org.bukkit.event.entity.EntityPotionEffectEvent$Action
declare enum Action {
    ADDED,
    CHANGED,
    CLEARED,
    REMOVED,
}

// java.util.Collection
declare interface Collection extends Iterable {
    add(object: any): boolean;
    remove(object: any): boolean;
    equals(object: any): boolean;
    hashCode(): number;
    clear(): void;
    isEmpty(): boolean;
    contains(object: any): boolean;
    size(): number;
    toArray(intFunction: IntFunction): any[];
    toArray(): any[];
    toArray(object: any): any[];
    iterator(): Iterator;
    spliterator(): Spliterator;
    addAll(collection: Collection): boolean;
    stream(): Stream;
    containsAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    removeAll(collection: Collection): boolean;
    removeIf(predicate: Predicate): boolean;
    parallelStream(): Stream;
}

// java.util.function.BiConsumer
declare interface BiConsumer {
    accept(object: any, object: any): void;
    andThen(biConsumer: BiConsumer): BiConsumer;
}

// java.lang.Integer
declare interface Integer extends Number, Comparable {
    numberOfLeadingZeros(i: number): number;
    numberOfTrailingZeros(i: number): number;
    bitCount(i: number): number;
    equals(object: any): boolean;
    toString(i: number): string;
    toString(i: number, i: number): string;
    toString(): string;
    hashCode(i: number): number;
    hashCode(): number;
    min(i: number, i: number): number;
    max(i: number, i: number): number;
    signum(i: number): number;
    reverseBytes(i: number): number;
    compareTo(object: any): number;
    compareTo(integer: Integer): number;
    valueOf(s: string): Integer;
    valueOf(i: number): Integer;
    valueOf(s: string, i: number): Integer;
    toHexString(i: number): string;
    decode(s: string): Integer;
    compare(i: number, i: number): number;
    reverse(i: number): number;
    toUnsignedLong(i: number): number;
    parseInt(s: string, i: number): number;
    parseInt(s: string): number;
    parseInt(s: string, i: number, i: number, i: number): number;
    sum(i: number, i: number): number;
    compareUnsigned(i: number, i: number): number;
    toUnsignedString(i: number, i: number): string;
    toUnsignedString(i: number): string;
    toOctalString(i: number): string;
    toBinaryString(i: number): string;
    parseUnsignedInt(s: string, i: number): number;
    parseUnsignedInt(s: string): number;
    parseUnsignedInt(s: string, i: number, i: number, i: number): number;
    getInteger(s: string, i: number): Integer;
    getInteger(s: string): Integer;
    getInteger(s: string, integer: Integer): Integer;
    divideUnsigned(i: number, i: number): number;
    remainderUnsigned(i: number, i: number): number;
    highestOneBit(i: number): number;
    lowestOneBit(i: number): number;
    rotateLeft(i: number, i: number): number;
    rotateRight(i: number, i: number): number;
    MIN_VALUE: number;
    MAX_VALUE: number;
    TYPE: Class;
    SIZE: number;
    BYTES: number;
}

// org.bukkit.block.data.type.Comparator$Mode
declare enum Mode {
    COMPARE,
    SUBTRACT,
}

// org.bukkit.scoreboard.Team$Option
declare enum Option {
    NAME_TAG_VISIBILITY,
    DEATH_MESSAGE_VISIBILITY,
    COLLISION_RULE,
}

// org.bukkit.Server$Spigot
declare interface Spigot {
    broadcast(baseComponent: BaseComponent): void;
    broadcast(baseComponent: BaseComponent): void;
    getConfig(): YamlConfiguration;
    restart(): void;
}

// org.bukkit.entity.Cat$Type
declare enum Type {
    TABBY,
    BLACK,
    RED,
    SIAMESE,
    BRITISH_SHORTHAIR,
    CALICO,
    PERSIAN,
    RAGDOLL,
    WHITE,
    JELLIE,
    ALL_BLACK,
}

// org.bukkit.block.data.type.Door$Hinge
declare enum Hinge {
    LEFT,
    RIGHT,
}

// java.util.Set
declare interface Set extends Collection {
    add(object: any): boolean;
    remove(object: any): boolean;
    equals(object: any): boolean;
    hashCode(): number;
    copyOf(collection: Collection): Set;
    clear(): void;
    isEmpty(): boolean;
    contains(object: any): boolean;
    size(): number;
    toArray(object: any): any[];
    toArray(): any[];
    iterator(): Iterator;
    spliterator(): Spliterator;
    addAll(collection: Collection): boolean;
    of(object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any): Set;
    of(): Set;
    of(object: any, object: any): Set;
    of(object: any): Set;
    of(object: any, object: any, object: any, object: any): Set;
    containsAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    removeAll(collection: Collection): boolean;
}

// org.bukkit.block.data.type.Wall$Height
declare enum Height {
    NONE,
    LOW,
    TALL,
}

// org.bukkit.entity.Player$Spigot
declare interface Spigot extends Spigot {
    sendMessage(chatMessageType: ChatMessageType, baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, uUID: UUID, baseComponent: BaseComponent): void;
    setCollidesWithEntities(b: boolean): void;
    getCollidesWithEntities(): boolean;
    getRawAddress(): InetSocketAddress;
    respawn(): void;
    getHiddenPlayers(): Set;
}

// java.net.InetSocketAddress
declare interface InetSocketAddress extends SocketAddress {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    getAddress(): InetAddress;
    getPort(): number;
    isUnresolved(): boolean;
    getHostName(): string;
    createUnresolved(s: string, i: number): InetSocketAddress;
    getHostString(): string;
}

// org.bukkit.entity.FishHook$HookState
declare enum HookState {
    UNHOOKED,
    HOOKED_ENTITY,
    BOBBING,
}

// java.io.ObjectInputStream
declare interface ObjectInputStream extends InputStream, ObjectInput, ObjectStreamConstants {
    readObject(): any;
    defaultReadObject(): void;
    readLine(): string;
    readInt(): number;
    readFields(): GetField;
    readUTF(): string;
    readFloat(): number;
    readChar(): string;
    readUnshared(): any;
    registerValidation(objectInputValidation: ObjectInputValidation, i: number): void;
    getObjectInputFilter(): ObjectInputFilter;
    setObjectInputFilter(objectInputFilter: ObjectInputFilter): void;
    skipBytes(i: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readUnsignedByte(): number;
    readShort(): number;
    readUnsignedShort(): number;
    readLong(): number;
    readDouble(): number;
    readFully(b: number): void;
    readFully(b: number, i: number, i: number): void;
}

// java.util.logging.Filter
declare interface Filter {
    isLoggable(logRecord: LogRecord): boolean;
}

// org.bukkit.entity.Spellcaster$Spell
declare enum Spell {
    NONE,
    SUMMON_VEX,
    FANGS,
    WOLOLO,
    DISAPPEAR,
    BLINDNESS,
}

// java.io.Serializable
declare interface Serializable {
}

// java.lang.Class
declare interface Class extends Serializable, GenericDeclaration, Type, AnnotatedElement {
    forName(s: string, b: boolean, classLoader: ClassLoader): Class;
    forName(module: Module, s: string): Class;
    forName(s: string): Class;
    getModule(): Module;
    getProtectionDomain(): ProtectionDomain;
    isAssignableFrom(clazz: Class): boolean;
    isInstance(object: any): boolean;
    getModifiers(): number;
    isInterface(): boolean;
    isArray(): boolean;
    isPrimitive(): boolean;
    getSuperclass(): Class;
    cast(object: any): any;
    getName(): string;
    toGenericString(): string;
    newInstance(): any;
    isAnnotation(): boolean;
    isSynthetic(): boolean;
    getClassLoader(): ClassLoader;
    getTypeParameters(): TypeVariable[];
    getGenericSuperclass(): Type;
    getPackage(): Package;
    getPackageName(): string;
    getInterfaces(): Class[];
    getGenericInterfaces(): Type[];
    getComponentType(): Class;
    getSigners(): any[];
    getEnclosingMethod(): Method;
    getEnclosingConstructor(): Constructor;
    getDeclaringClass(): Class;
    getEnclosingClass(): Class;
    getSimpleName(): string;
    getTypeName(): string;
    getCanonicalName(): string;
    isAnonymousClass(): boolean;
    isLocalClass(): boolean;
    isMemberClass(): boolean;
    getClasses(): Class[];
    getFields(): Field[];
    getMethods(): Method[];
    getConstructors(): Constructor[];
    getField(s: string): Field;
    getMethod(s: string, clazz: Class): Method;
    getConstructor(clazz: Class): Constructor;
    getDeclaredClasses(): Class[];
    getDeclaredFields(): Field[];
    getDeclaredMethods(): Method[];
    getDeclaredConstructors(): Constructor[];
    getDeclaredField(s: string): Field;
    getDeclaredMethod(s: string, clazz: Class): Method;
    getDeclaredConstructor(clazz: Class): Constructor;
    getResourceAsStream(s: string): InputStream;
    getResource(s: string): URL;
    desiredAssertionStatus(): boolean;
    isEnum(): boolean;
    getEnumConstants(): any[];
    asSubclass(clazz: Class): Class;
    getAnnotation(clazz: Class): Annotation;
    isAnnotationPresent(clazz: Class): boolean;
    getAnnotationsByType(clazz: Class): Annotation[];
    getAnnotations(): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getAnnotatedSuperclass(): AnnotatedType;
    getAnnotatedInterfaces(): AnnotatedType[];
    getNestHost(): Class;
    isNestmateOf(clazz: Class): boolean;
    getNestMembers(): Class[];
}

// java.util.Random
declare interface Random extends Serializable {
    nextInt(): number;
    nextInt(i: number): number;
    nextDouble(): number;
    longs(l: number): LongStream;
    longs(l: number, l: number): LongStream;
    longs(l: number, l: number, l: number): LongStream;
    longs(): LongStream;
    nextBytes(b: number): void;
    nextBoolean(): boolean;
    nextFloat(): number;
    nextGaussian(): number;
    ints(l: number): IntStream;
    ints(): IntStream;
    ints(i: number, i: number): IntStream;
    ints(l: number, i: number, i: number): IntStream;
    doubles(l: number, d: number, d: number): DoubleStream;
    doubles(d: number, d: number): DoubleStream;
    doubles(l: number): DoubleStream;
    doubles(): DoubleStream;
    nextLong(): number;
    setSeed(l: number): void;
}

// java.net.http.HttpClient$Redirect
declare enum Redirect {
    NEVER,
    ALWAYS,
    NORMAL,
}

// org.bukkit.event.entity.EntityDamageEvent$DamageCause
declare enum DamageCause {
    CONTACT,
    ENTITY_ATTACK,
    ENTITY_SWEEP_ATTACK,
    PROJECTILE,
    SUFFOCATION,
    FALL,
    FIRE,
    FIRE_TICK,
    MELTING,
    LAVA,
    DROWNING,
    BLOCK_EXPLOSION,
    ENTITY_EXPLOSION,
    VOID,
    LIGHTNING,
    SUICIDE,
    STARVATION,
    POISON,
    MAGIC,
    WITHER,
    FALLING_BLOCK,
    THORNS,
    DRAGON_BREATH,
    CUSTOM,
    FLY_INTO_WALL,
    HOT_FLOOR,
    CRAMMING,
    DRYOUT,
    FREEZE,
}

// org.bukkit.command.CommandSender$Spigot
declare interface Spigot {
    sendMessage(uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
}

// org.bukkit.event.block.BlockIgniteEvent$IgniteCause
declare enum IgniteCause {
    LAVA,
    FLINT_AND_STEEL,
    SPREAD,
    LIGHTNING,
    FIREBALL,
    ENDER_CRYSTAL,
    EXPLOSION,
    ARROW,
}

// org.bukkit.event.entity.EntityExhaustionEvent$ExhaustionReason
declare enum ExhaustionReason {
    BLOCK_MINED,
    HUNGER_EFFECT,
    DAMAGED,
    ATTACK,
    JUMP_SPRINT,
    JUMP,
    SWIM,
    WALK_UNDERWATER,
    WALK_ON_WATER,
    SPRINT,
    CROUCH,
    WALK,
    REGEN,
    UNKNOWN,
}

// org.bukkit.Warning$WarningState
declare enum WarningState {
    ON,
    OFF,
    DEFAULT,
}

// java.util.UUID
declare interface UUID extends Serializable, Comparable {
    version(): number;
    compareTo(object: any): number;
    compareTo(uUID: UUID): number;
    timestamp(): number;
    node(): number;
    variant(): number;
    nameUUIDFromBytes(b: number): UUID;
    getLeastSignificantBits(): number;
    getMostSignificantBits(): number;
    clockSequence(): number;
    fromString(s: string): UUID;
    randomUUID(): UUID;
}

// org.bukkit.event.entity.EntityTargetEvent$TargetReason
declare enum TargetReason {
    TARGET_DIED,
    CLOSEST_PLAYER,
    TARGET_ATTACKED_ENTITY,
    PIG_ZOMBIE_TARGET,
    FORGOT_TARGET,
    TARGET_ATTACKED_OWNER,
    OWNER_ATTACKED_TARGET,
    RANDOM_TARGET,
    DEFEND_VILLAGE,
    TARGET_ATTACKED_NEARBY_ENTITY,
    REINFORCEMENT_TARGET,
    COLLISION,
    CUSTOM,
    CLOSEST_ENTITY,
    FOLLOW_LEADER,
    TEMPT,
    UNKNOWN,
}

// java.lang.Object
declare interface Object {
    wait(l: number): void;
    wait(l: number, i: number): void;
    wait(): void;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    getClass(): Class;
    notify(): void;
    notifyAll(): void;
}

// com.google.common.collect.Multimap
declare interface Multimap {
    remove(object: any, object: any): boolean;
    get(object: any): Collection;
    put(object: any, object: any): boolean;
    equals(object: any): boolean;
    values(): Collection;
    hashCode(): number;
    clear(): void;
    isEmpty(): boolean;
    size(): number;
    putAll(multimap: Multimap): boolean;
    putAll(object: any, iterable: Iterable): boolean;
    forEach(biConsumer: BiConsumer): void;
    containsKey(object: any): boolean;
    keys(): Multiset;
    containsValue(object: any): boolean;
    keySet(): Set;
    entries(): Collection;
    removeAll(object: any): Collection;
    asMap(): Map;
    replaceValues(object: any, iterable: Iterable): Collection;
    containsEntry(object: any, object: any): boolean;
}

// org.bukkit.event.inventory.InventoryType$SlotType
declare enum SlotType {
    RESULT,
    CRAFTING,
    ARMOR,
    CONTAINER,
    QUICKBAR,
    OUTSIDE,
    FUEL,
}

// org.bukkit.entity.Villager$Profession
declare enum Profession {
    NONE,
    ARMORER,
    BUTCHER,
    CARTOGRAPHER,
    CLERIC,
    FARMER,
    FISHERMAN,
    FLETCHER,
    LEATHERWORKER,
    LIBRARIAN,
    MASON,
    NITWIT,
    SHEPHERD,
    TOOLSMITH,
    WEAPONSMITH,
}

// org.bukkit.entity.Parrot$Variant
declare enum Variant {
    RED,
    BLUE,
    GREEN,
    CYAN,
    GRAY,
}

// org.bukkit.entity.Villager$Type
declare enum Type {
    DESERT,
    JUNGLE,
    PLAINS,
    SAVANNA,
    SNOW,
    SWAMP,
    TAIGA,
}

// java.nio.file.Path
declare interface Path extends Comparable, Iterable, Watchable {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(path: Path): number;
    compareTo(object: any): number;
    getName(i: number): Path;
    startsWith(s: string): boolean;
    startsWith(path: Path): boolean;
    endsWith(s: string): boolean;
    endsWith(path: Path): boolean;
    iterator(): Iterator;
    resolve(s: string): Path;
    resolve(path: Path): Path;
    getParent(): Path;
    isAbsolute(): boolean;
    register(watchService: WatchService, kind: Kind): WatchKey;
    register(watchService: WatchService, kind: Kind, modifier: Modifier): WatchKey;
    of(s: string, s: string): Path;
    of(uRI: URI): Path;
    getRoot(): Path;
    normalize(): Path;
    toRealPath(linkOption: LinkOption): Path;
    toFile(): File;
    getFileName(): Path;
    getFileSystem(): FileSystem;
    relativize(path: Path): Path;
    getNameCount(): number;
    subpath(i: number, i: number): Path;
    resolveSibling(path: Path): Path;
    resolveSibling(s: string): Path;
    toUri(): URI;
    toAbsolutePath(): Path;
}

// org.bukkit.block.data.type.Slab$Type
declare enum Type {
    TOP,
    BOTTOM,
    DOUBLE,
}

// java.util.function.Function
declare interface Function {
    apply(object: any): any;
    identity(): Function;
    compose(func: Function): Function;
    andThen(func: Function): Function;
}

// org.bukkit.entity.Llama$Color
declare enum Color {
    CREAMY,
    WHITE,
    BROWN,
    GRAY,
}

// org.bukkit.block.data.type.PointedDripstone$Thickness
declare enum Thickness {
    TIP_MERGE,
    TIP,
    FRUSTUM,
    MIDDLE,
    BASE,
}

// org.bukkit.entity.AbstractArrow$PickupStatus
declare enum PickupStatus {
    DISALLOWED,
    ALLOWED,
    CREATIVE_ONLY,
}

// org.yaml.snakeyaml.constructor.SafeConstructor
declare interface SafeConstructor extends BaseConstructor {
    undefinedConstructor: ConstructUndefined;
}

// java.util.concurrent.CompletableFuture
declare interface CompletableFuture extends Future, CompletionStage {
    get(l: number, timeUnit: TimeUnit): any;
    get(): any;
    join(): any;
    copy(): CompletableFuture;
    handle(biFunction: BiFunction): CompletionStage;
    handle(biFunction: BiFunction): CompletableFuture;
    complete(object: any): boolean;
    allOf(completableFuture: CompletableFuture): CompletableFuture;
    isDone(): boolean;
    cancel(b: boolean): boolean;
    isCancelled(): boolean;
    completedFuture(object: any): CompletableFuture;
    anyOf(completableFuture: CompletableFuture): CompletableFuture;
    supplyAsync(supplier: Supplier): CompletableFuture;
    supplyAsync(supplier: Supplier, executor: Executor): CompletableFuture;
    runAsync(runnable: Runnable, executor: Executor): CompletableFuture;
    runAsync(runnable: Runnable): CompletableFuture;
    getNow(object: any): any;
    completeExceptionally(throwable: Throwable): boolean;
    thenApply(func: Function): CompletionStage;
    thenApply(func: Function): CompletableFuture;
    thenApplyAsync(func: Function): CompletionStage;
    thenApplyAsync(func: Function, executor: Executor): CompletionStage;
    thenApplyAsync(func: Function, executor: Executor): CompletableFuture;
    thenApplyAsync(func: Function): CompletableFuture;
    thenAccept(consumer: Consumer): CompletionStage;
    thenAccept(consumer: Consumer): CompletableFuture;
    thenAcceptAsync(consumer: Consumer): CompletionStage;
    thenAcceptAsync(consumer: Consumer): CompletableFuture;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletableFuture;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletionStage;
    thenRun(runnable: Runnable): CompletionStage;
    thenRun(runnable: Runnable): CompletableFuture;
    thenRunAsync(runnable: Runnable): CompletableFuture;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletionStage;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletableFuture;
    thenRunAsync(runnable: Runnable): CompletionStage;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletableFuture;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletableFuture;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletableFuture;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletionStage;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletableFuture;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletableFuture;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletableFuture;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletionStage;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletableFuture;
    applyToEither(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEither(completionStage: CompletionStage, func: Function): CompletableFuture;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletableFuture;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletableFuture;
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletableFuture;
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletableFuture;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletableFuture;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletableFuture;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    thenCompose(func: Function): CompletableFuture;
    thenCompose(func: Function): CompletionStage;
    thenComposeAsync(func: Function, executor: Executor): CompletionStage;
    thenComposeAsync(func: Function): CompletionStage;
    thenComposeAsync(func: Function, executor: Executor): CompletableFuture;
    thenComposeAsync(func: Function): CompletableFuture;
    whenComplete(biConsumer: BiConsumer): CompletionStage;
    whenComplete(biConsumer: BiConsumer): CompletableFuture;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletableFuture;
    whenCompleteAsync(biConsumer: BiConsumer): CompletableFuture;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer): CompletionStage;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletableFuture;
    handleAsync(biFunction: BiFunction): CompletableFuture;
    handleAsync(biFunction: BiFunction): CompletionStage;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletionStage;
    toCompletableFuture(): CompletableFuture;
    exceptionally(func: Function): CompletableFuture;
    exceptionally(func: Function): CompletionStage;
    isCompletedExceptionally(): boolean;
    obtrudeValue(object: any): void;
    obtrudeException(throwable: Throwable): void;
    getNumberOfDependents(): number;
    newIncompleteFuture(): CompletableFuture;
    defaultExecutor(): Executor;
    minimalCompletionStage(): CompletionStage;
    completeAsync(supplier: Supplier, executor: Executor): CompletableFuture;
    completeAsync(supplier: Supplier): CompletableFuture;
    orTimeout(l: number, timeUnit: TimeUnit): CompletableFuture;
    completeOnTimeout(object: any, l: number, timeUnit: TimeUnit): CompletableFuture;
    delayedExecutor(l: number, timeUnit: TimeUnit, executor: Executor): Executor;
    delayedExecutor(l: number, timeUnit: TimeUnit): Executor;
    completedStage(object: any): CompletionStage;
    failedFuture(throwable: Throwable): CompletableFuture;
    failedStage(throwable: Throwable): CompletionStage;
}

// org.bukkit.inventory.InventoryView$Property
declare enum Property {
    BREW_TIME,
    FUEL_TIME,
    BURN_TIME,
    TICKS_FOR_CURRENT_FUEL,
    COOK_TIME,
    TICKS_FOR_CURRENT_SMELTING,
    ENCHANT_BUTTON1,
    ENCHANT_BUTTON2,
    ENCHANT_BUTTON3,
    ENCHANT_XP_SEED,
    ENCHANT_ID1,
    ENCHANT_ID2,
    ENCHANT_ID3,
    ENCHANT_LEVEL1,
    ENCHANT_LEVEL2,
    ENCHANT_LEVEL3,
    LEVELS,
    PRIMARY_EFFECT,
    SECONDARY_EFFECT,
    REPAIR_COST,
    BOOK_PAGE,
}

// java.lang.annotation.Annotation
declare interface Annotation {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    annotationType(): Class;
}

// org.bukkit.generator.ChunkGenerator$BiomeGrid
declare interface BiomeGrid {
    getBiome(i: number, i: number): Biome;
    getBiome(i: number, i: number, i: number): Biome;
    setBiome(i: number, i: number, i: number, biome: Biome): void;
    setBiome(i: number, i: number, biome: Biome): void;
}

// java.io.OutputStream
declare interface OutputStream extends Closeable, Flushable {
    write(b: number, i: number, i: number): void;
    write(b: number): void;
    write(i: number): void;
    flush(): void;
    close(): void;
    nullOutputStream(): OutputStream;
}

// org.bukkit.entity.EnderDragon$Phase
declare enum Phase {
    CIRCLING,
    STRAFING,
    FLY_TO_PORTAL,
    LAND_ON_PORTAL,
    LEAVE_PORTAL,
    BREATH_ATTACK,
    SEARCH_FOR_BREATH_ATTACK_TARGET,
    ROAR_BEFORE_ATTACK,
    CHARGE_PLAYER,
    DYING,
    HOVER,
}

// org.bukkit.entity.Evoker$Spell
declare enum Spell {
    NONE,
    SUMMON,
    FANGS,
    WOLOLO,
    DISAPPEAR,
    BLINDNESS,
}

// javax.net.ssl.SSLContext
declare interface SSLContext {
    getDefault(): SSLContext;
    getInstance(s: string, s: string): SSLContext;
    getInstance(s: string, provider: Provider): SSLContext;
    getInstance(s: string): SSLContext;
    init(keyManager: KeyManager, trustManager: TrustManager, secureRandom: SecureRandom): void;
    getProtocol(): string;
    setDefault(sSLContext: SSLContext): void;
    getProvider(): Provider;
    getSocketFactory(): SSLSocketFactory;
    getServerSocketFactory(): SSLServerSocketFactory;
    createSSLEngine(s: string, i: number): SSLEngine;
    createSSLEngine(): SSLEngine;
    getServerSessionContext(): SSLSessionContext;
    getClientSessionContext(): SSLSessionContext;
    getDefaultSSLParameters(): SSLParameters;
    getSupportedSSLParameters(): SSLParameters;
}

// java.util.regex.Pattern
declare interface Pattern extends Serializable {
    flags(): number;
    matches(s: string, s: string): boolean;
    split(s: string, i: number): string[];
    split(s: string): string[];
    compile(s: string): Pattern;
    compile(s: string, i: number): Pattern;
    matcher(s: string): Matcher;
    quote(s: string): string;
    asPredicate(): Predicate;
    asMatchPredicate(): Predicate;
    splitAsStream(s: string): Stream;
    pattern(): string;
    UNIX_LINES: number;
    CASE_INSENSITIVE: number;
    COMMENTS: number;
    MULTILINE: number;
    LITERAL: number;
    DOTALL: number;
    UNICODE_CASE: number;
    CANON_EQ: number;
    UNICODE_CHARACTER_CLASS: number;
}

// org.bukkit.event.server.ServerLoadEvent$LoadType
declare enum LoadType {
    STARTUP,
    RELOAD,
}

// java.lang.Thread
declare interface Thread extends Runnable {
    run(): void;
    isInterrupted(): boolean;
    currentThread(): Thread;
    onSpinWait(): void;
    getName(): string;
    join(): void;
    join(l: number, i: number): void;
    join(l: number): void;
    getThreadGroup(): ThreadGroup;
    setContextClassLoader(classLoader: ClassLoader): void;
    getStackTrace(): StackTraceElement[];
    holdsLock(object: any): boolean;
    checkAccess(): void;
    dumpStack(): void;
    setPriority(i: number): void;
    setDaemon(b: boolean): void;
    start(): void;
    yield(): void;
    sleep(l: number, i: number): void;
    sleep(l: number): void;
    stop(): void;
    interrupt(): void;
    interrupted(): boolean;
    isAlive(): boolean;
    suspend(): void;
    resume(): void;
    getPriority(): number;
    setName(s: string): void;
    activeCount(): number;
    enumerate(thread: Thread): number;
    countStackFrames(): number;
    isDaemon(): boolean;
    getContextClassLoader(): ClassLoader;
    getAllStackTraces(): Map;
    getId(): number;
    getState(): State;
    setDefaultUncaughtExceptionHandler(uncaughtExceptionHandler: UncaughtExceptionHandler): void;
    getDefaultUncaughtExceptionHandler(): UncaughtExceptionHandler;
    getUncaughtExceptionHandler(): UncaughtExceptionHandler;
    setUncaughtExceptionHandler(uncaughtExceptionHandler: UncaughtExceptionHandler): void;
    MIN_PRIORITY: number;
    NORM_PRIORITY: number;
    MAX_PRIORITY: number;
}

// java.util.ResourceBundle
declare interface ResourceBundle {
    getObject(s: string): any;
    containsKey(s: string): boolean;
    keySet(): Set;
    getKeys(): Enumeration;
    getStringArray(s: string): string[];
    getBundle(s: string, locale: Locale, module: Module): ResourceBundle;
    getBundle(s: string, locale: Locale, control: Control): ResourceBundle;
    getBundle(s: string, locale: Locale, classLoader: ClassLoader): ResourceBundle;
    getBundle(s: string, locale: Locale, classLoader: ClassLoader, control: Control): ResourceBundle;
    getBundle(s: string): ResourceBundle;
    getBundle(s: string, control: Control): ResourceBundle;
    getBundle(s: string, locale: Locale): ResourceBundle;
    getBundle(s: string, module: Module): ResourceBundle;
    getLocale(): Locale;
    getBaseBundleName(): string;
    getString(s: string): string;
    clearCache(classLoader: ClassLoader): void;
    clearCache(): void;
}

// java.lang.Cloneable
declare interface Cloneable {
}

// org.bukkit.attribute.AttributeModifier$Operation
declare enum Operation {
    ADD_NUMBER,
    ADD_SCALAR,
    MULTIPLY_SCALAR_1,
}

// java.net.http.HttpResponse$BodyHandler
declare interface BodyHandler {
    apply(responseInfo: ResponseInfo): BodySubscriber;
}

// org.bukkit.inventory.meta.BookMeta$Generation
declare enum Generation {
    ORIGINAL,
    COPY_OF_ORIGINAL,
    COPY_OF_COPY,
    TATTERED,
}

// org.bukkit.event.player.PlayerFishEvent$State
declare enum State {
    FISHING,
    CAUGHT_FISH,
    CAUGHT_ENTITY,
    IN_GROUND,
    FAILED_ATTEMPT,
    REEL_IN,
    BITE,
}

// java.lang.Runnable
declare interface Runnable {
    run(): void;
}

// org.bukkit.FireworkEffect$Type
declare enum Type {
    BALL,
    BALL_LARGE,
    STAR,
    BURST,
    CREEPER,
}

// java.lang.Exception
declare interface Exception extends Throwable {
}

// java.util.ListIterator
declare interface ListIterator extends Iterator {
    add(object: any): void;
    remove(): void;
    next(): any;
    hasNext(): boolean;
    set(object: any): void;
    nextIndex(): number;
    previous(): any;
    previousIndex(): number;
    hasPrevious(): boolean;
}

// java.net.http.HttpClient$Version
declare enum Version {
    HTTP_1_1,
    HTTP_2,
}

// java.util.Comparator
declare interface Comparator {
    equals(object: any): boolean;
    compare(object: any, object: any): number;
    reversed(): Comparator;
    thenComparing(func: Function): Comparator;
    thenComparing(func: Function, comparator: Comparator): Comparator;
    thenComparing(comparator: Comparator): Comparator;
    thenComparingInt(toIntFunction: ToIntFunction): Comparator;
    thenComparingLong(toLongFunction: ToLongFunction): Comparator;
    thenComparingDouble(toDoubleFunction: ToDoubleFunction): Comparator;
    reverseOrder(): Comparator;
    naturalOrder(): Comparator;
    nullsFirst(comparator: Comparator): Comparator;
    nullsLast(comparator: Comparator): Comparator;
    comparing(func: Function, comparator: Comparator): Comparator;
    comparing(func: Function): Comparator;
    comparingInt(toIntFunction: ToIntFunction): Comparator;
    comparingLong(toLongFunction: ToLongFunction): Comparator;
    comparingDouble(toDoubleFunction: ToDoubleFunction): Comparator;
}

// org.bukkit.entity.Horse$Variant
declare enum Variant {
    HORSE,
    DONKEY,
    MULE,
    UNDEAD_HORSE,
    SKELETON_HORSE,
    LLAMA,
}

// java.util.concurrent.Callable
declare interface Callable {
    call(): any;
}

// org.bukkit.event.entity.EntityPotionEffectEvent$Cause
declare enum Cause {
    AREA_EFFECT_CLOUD,
    ARROW,
    ATTACK,
    AXOLOTL,
    BEACON,
    COMMAND,
    CONDUIT,
    CONVERSION,
    DEATH,
    DOLPHIN,
    EXPIRATION,
    FOOD,
    ILLUSION,
    MILK,
    PATROL_CAPTAIN,
    PLUGIN,
    POTION_DRINK,
    POTION_SPLASH,
    SPIDER_SPAWN,
    TOTEM,
    TURTLE_HELMET,
    UNKNOWN,
    VILLAGER_TRADE,
    WITHER_ROSE,
}

// java.nio.charset.Charset
declare interface Charset extends Comparable {
    name(): string;
    forName(s: string): Charset;
    compareTo(charset: Charset): number;
    compareTo(object: any): number;
    contains(charset: Charset): boolean;
    decode(byteBuffer: ByteBuffer): string;
    encode(s: string): ByteBuffer;
    encode(s: string): ByteBuffer;
    canEncode(): boolean;
    isRegistered(): boolean;
    defaultCharset(): Charset;
    aliases(): Set;
    isSupported(s: string): boolean;
    availableCharsets(): SortedMap;
    displayName(locale: Locale): string;
    displayName(): string;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
}

// org.bukkit.entity.Entity$Spigot
declare interface Spigot extends Spigot {
}

// java.lang.RuntimeException
declare interface RuntimeException extends Exception {
}

// org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason
declare enum SpawnReason {
    NATURAL,
    JOCKEY,
    CHUNK_GEN,
    SPAWNER,
    EGG,
    SPAWNER_EGG,
    LIGHTNING,
    BUILD_SNOWMAN,
    BUILD_IRONGOLEM,
    BUILD_WITHER,
    VILLAGE_DEFENSE,
    VILLAGE_INVASION,
    BREEDING,
    SLIME_SPLIT,
    REINFORCEMENTS,
    NETHER_PORTAL,
    DISPENSE_EGG,
    INFECTION,
    CURED,
    OCELOT_BABY,
    SILVERFISH_BLOCK,
    MOUNT,
    TRAP,
    ENDER_PEARL,
    SHOULDER_ENTITY,
    DROWNED,
    SHEARED,
    EXPLOSION,
    RAID,
    PATROL,
    BEEHIVE,
    PIGLIN_ZOMBIFIED,
    FROZEN,
    COMMAND,
    CUSTOM,
    DEFAULT,
}

// org.bukkit.block.data.type.RedstoneWire$Connection
declare enum Connection {
    UP,
    SIDE,
    NONE,
}

// org.bukkit.BanList$Type
declare enum Type {
    NAME,
    IP,
}

// java.io.Reader
declare interface Reader extends Readable, Closeable {
    read(c: string): number;
    read(c: string, i: number, i: number): number;
    read(s: string): number;
    read(): number;
    close(): void;
    mark(i: number): void;
    transferTo(writer: Writer): number;
    skip(l: number): number;
    markSupported(): boolean;
    reset(): void;
    nullReader(): Reader;
    ready(): boolean;
}

// java.net.http.HttpResponse
declare interface HttpResponse {
    version(): Version;
    uri(): URI;
    request(): HttpRequest;
    body(): any;
    headers(): HttpHeaders;
    sslSession(): Optional;
    statusCode(): number;
    previousResponse(): Optional;
}

// java.awt.image.BufferedImage
declare interface BufferedImage extends Image, WritableRenderedImage, Transparency {
    getProperty(s: string): any;
    toString(): string;
    getType(): number;
    getData(): Raster;
    getData(rectangle: Rectangle): Raster;
    getSources(): Vector;
    getColorModel(): ColorModel;
    getRaster(): WritableRaster;
    getAlphaRaster(): WritableRaster;
    setRGB(i: number, i: number, i: number, i: number, i: number, i: number, i: number): void;
    setRGB(i: number, i: number, i: number): void;
    getSubimage(i: number, i: number, i: number, i: number): BufferedImage;
    isAlphaPremultiplied(): boolean;
    coerceData(b: boolean): void;
    getPropertyNames(): string[];
    getSampleModel(): SampleModel;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getTileWidth(): number;
    getTileHeight(): number;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTile(i: number, i: number): Raster;
    copyData(writableRaster: WritableRaster): WritableRaster;
    addTileObserver(tileObserver: TileObserver): void;
    removeTileObserver(tileObserver: TileObserver): void;
    isTileWritable(i: number, i: number): boolean;
    getWritableTileIndices(): Point[];
    hasTileWriters(): boolean;
    getWritableTile(i: number, i: number): WritableRaster;
    releaseWritableTile(i: number, i: number): void;
    getTransparency(): number;
    getHeight(): number;
    setData(raster: Raster): void;
    getWidth(): number;
    createGraphics(): Graphics2D;
    getRGB(i: number, i: number): number;
    getRGB(i: number, i: number, i: number, i: number, i: number, i: number, i: number): number[];
    getMinX(): number;
    getMinY(): number;
    TYPE_CUSTOM: number;
    TYPE_INT_RGB: number;
    TYPE_INT_ARGB: number;
    TYPE_INT_ARGB_PRE: number;
    TYPE_INT_BGR: number;
    TYPE_3BYTE_BGR: number;
    TYPE_4BYTE_ABGR: number;
    TYPE_4BYTE_ABGR_PRE: number;
    TYPE_USHORT_565_RGB: number;
    TYPE_USHORT_555_RGB: number;
    TYPE_BYTE_GRAY: number;
    TYPE_USHORT_GRAY: number;
    TYPE_BYTE_BINARY: number;
    TYPE_BYTE_INDEXED: number;
}

// org.bukkit.block.data.FaceAttachable$AttachedFace
declare enum AttachedFace {
    FLOOR,
    WALL,
    CEILING,
}

// org.bukkit.util.ChatPaginator$ChatPage
declare interface ChatPage {
    getPageNumber(): number;
    getTotalPages(): number;
    getLines(): string[];
}

// org.bukkit.event.player.PlayerLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

// org.bukkit.block.data.type.Bell$Attachment
declare enum Attachment {
    FLOOR,
    CEILING,
    SINGLE_WALL,
    DOUBLE_WALL,
}

// org.bukkit.block.data.type.Chest$Type
declare enum Type {
    SINGLE,
    LEFT,
    RIGHT,
}

// org.bukkit.event.raid.RaidStopEvent$Reason
declare enum Reason {
    PEACE,
    TIMEOUT,
    FINISHED,
    UNSPAWNABLE,
    NOT_IN_VILLAGE,
}

// org.bukkit.entity.Horse$Color
declare enum Color {
    WHITE,
    CREAMY,
    CHESTNUT,
    BROWN,
    BLACK,
    GRAY,
    DARK_BROWN,
}

// java.util.Optional
declare interface Optional {
    get(): any;
    isEmpty(): boolean;
    empty(): Optional;
    filter(predicate: Predicate): Optional;
    stream(): Stream;
    map(func: Function): Optional;
    of(object: any): Optional;
    flatMap(func: Function): Optional;
    isPresent(): boolean;
    orElse(object: any): any;
    orElseThrow(supplier: Supplier): any;
    orElseThrow(): any;
    ofNullable(object: any): Optional;
    ifPresent(consumer: Consumer): void;
    ifPresentOrElse(consumer: Consumer, runnable: Runnable): void;
    or(supplier: Supplier): Optional;
    orElseGet(supplier: Supplier): any;
}

// java.util.Date
declare interface Date extends Serializable, Cloneable, Comparable {
    compareTo(date: Date): number;
    compareTo(object: any): number;
    from(instant: Instant): Date;
    parse(s: string): number;
    before(date: Date): boolean;
    after(date: Date): boolean;
    getSeconds(): number;
    toInstant(): Instant;
    UTC(i: number, i: number, i: number, i: number, i: number, i: number): number;
    getYear(): number;
    getTime(): number;
    setTime(l: number): void;
    setYear(i: number): void;
    getMonth(): number;
    setMonth(i: number): void;
    setDate(i: number): void;
    getDay(): number;
    getHours(): number;
    setHours(i: number): void;
    getMinutes(): number;
    setMinutes(i: number): void;
    setSeconds(i: number): void;
    toLocaleString(): string;
    toGMTString(): string;
    getTimezoneOffset(): number;
    getDate(): number;
}

// java.net.http.HttpRequest
declare interface HttpRequest {
    method(): string;
    version(): Optional;
    uri(): URI;
    timeout(): Optional;
    newBuilder(uRI: URI): Builder;
    newBuilder(): Builder;
    headers(): HttpHeaders;
    bodyPublisher(): Optional;
    expectContinue(): boolean;
}

// org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

// java.util.EventListener
declare interface EventListener {
}

// org.bukkit.event.Event$Result
declare enum Result {
    DENY,
    DEFAULT,
    ALLOW,
}

// org.bukkit.material.CocoaPlant$CocoaPlantSize
declare enum CocoaPlantSize {
    SMALL,
    MEDIUM,
    LARGE,
}

// org.bukkit.generator.ChunkGenerator$ChunkData
declare interface ChunkData {
    getType(i: number, i: number, i: number): Material;
    getData(i: number, i: number, i: number): number;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, materialData: MaterialData): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, material: Material): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, blockData: BlockData): void;
    getBiome(i: number, i: number, i: number): Biome;
    getBlockData(i: number, i: number, i: number): BlockData;
    getMaxHeight(): number;
    getMinHeight(): number;
    setBlock(i: number, i: number, i: number, blockData: BlockData): void;
    setBlock(i: number, i: number, i: number, materialData: MaterialData): void;
    setBlock(i: number, i: number, i: number, material: Material): void;
    getTypeAndData(i: number, i: number, i: number): MaterialData;
}

// org.spigotmc.CustomTimingsHandler
declare interface CustomTimingsHandler {
    reset(): void;
    reload(): void;
    startTiming(): void;
    stopTiming(): void;
    printTimings(printStream: PrintStream): void;
    tick(): void;
}

// org.bukkit.Vibration$Destination
declare interface Destination {
}

// java.awt.Image
declare interface Image {
    getProperty(s: string, imageObserver: ImageObserver): any;
    flush(): void;
    getSource(): ImageProducer;
    getGraphics(): Graphics;
    getScaledInstance(i: number, i: number, i: number): Image;
    getCapabilities(graphicsConfiguration: GraphicsConfiguration): ImageCapabilities;
    setAccelerationPriority(f: number): void;
    getAccelerationPriority(): number;
    getHeight(imageObserver: ImageObserver): number;
    getWidth(imageObserver: ImageObserver): number;
    UndefinedProperty: any;
    SCALE_DEFAULT: number;
    SCALE_FAST: number;
    SCALE_SMOOTH: number;
    SCALE_REPLICATE: number;
    SCALE_AREA_AVERAGING: number;
}

// java.net.http.HttpResponse$PushPromiseHandler
declare interface PushPromiseHandler {
    of(func: Function, concurrentMap: ConcurrentMap): PushPromiseHandler;
    applyPushPromise(httpRequest: HttpRequest, httpRequest: HttpRequest, func: Function): void;
}

// org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason
declare enum ChangeReason {
    LOSING_JOB,
    EMPLOYED,
}

// java.io.File
declare interface File extends Serializable, Comparable {
    length(): number;
    compareTo(object: any): number;
    compareTo(file: File): number;
    getName(): string;
    list(filenameFilter: FilenameFilter): string[];
    list(): string[];
    getParent(): string;
    isAbsolute(): boolean;
    delete(): boolean;
    setReadOnly(): boolean;
    canRead(): boolean;
    getPath(): string;
    toURI(): URI;
    toURL(): URL;
    getParentFile(): File;
    getAbsolutePath(): string;
    getAbsoluteFile(): File;
    getCanonicalPath(): string;
    getCanonicalFile(): File;
    isDirectory(): boolean;
    canWrite(): boolean;
    exists(): boolean;
    isFile(): boolean;
    isHidden(): boolean;
    lastModified(): number;
    createNewFile(): boolean;
    deleteOnExit(): void;
    listFiles(fileFilter: FileFilter): File[];
    listFiles(): File[];
    listFiles(filenameFilter: FilenameFilter): File[];
    mkdir(): boolean;
    mkdirs(): boolean;
    renameTo(file: File): boolean;
    setLastModified(l: number): boolean;
    setWritable(b: boolean): boolean;
    setWritable(b: boolean, b: boolean): boolean;
    setReadable(b: boolean): boolean;
    setReadable(b: boolean, b: boolean): boolean;
    setExecutable(b: boolean, b: boolean): boolean;
    setExecutable(b: boolean): boolean;
    canExecute(): boolean;
    listRoots(): File[];
    getTotalSpace(): number;
    getFreeSpace(): number;
    getUsableSpace(): number;
    createTempFile(s: string, s: string, file: File): File;
    createTempFile(s: string, s: string): File;
    toPath(): Path;
    separatorChar: string;
    separator: string;
    pathSeparatorChar: string;
    pathSeparator: string;
}

// java.net.URL
declare interface URL extends Serializable {
    openStream(): InputStream;
    getQuery(): string;
    getPath(): string;
    getUserInfo(): string;
    getAuthority(): string;
    getPort(): number;
    getDefaultPort(): number;
    getProtocol(): string;
    getHost(): string;
    getFile(): string;
    getRef(): string;
    sameFile(uRL: URL): boolean;
    toExternalForm(): string;
    toURI(): URI;
    openConnection(): URLConnection;
    openConnection(proxy: Proxy): URLConnection;
    getContent(): any;
    getContent(clazz: Class): any;
    setURLStreamHandlerFactory(uRLStreamHandlerFactory: URLStreamHandlerFactory): void;
}

// org.bukkit.Raid$RaidStatus
declare enum RaidStatus {
    ONGOING,
    VICTORY,
    LOSS,
    STOPPED,
}

// java.io.InputStream
declare interface InputStream extends Closeable {
    read(b: number, i: number, i: number): number;
    read(b: number): number;
    read(): number;
    close(): void;
    mark(i: number): void;
    readAllBytes(): number[];
    readNBytes(b: number, i: number, i: number): number;
    readNBytes(i: number): number[];
    transferTo(outputStream: OutputStream): number;
    skip(l: number): number;
    available(): number;
    markSupported(): boolean;
    reset(): void;
    nullInputStream(): InputStream;
}

// java.awt.Color
declare interface Color extends Paint, Serializable {
    decode(s: string): Color;
    getTransparency(): number;
    getColorSpace(): ColorSpace;
    getBlue(): number;
    getColor(s: string, color: Color): Color;
    getColor(s: string, i: number): Color;
    getColor(s: string): Color;
    getGreen(): number;
    getRed(): number;
    getRGB(): number;
    getAlpha(): number;
    brighter(): Color;
    darker(): Color;
    HSBtoRGB(f: number, f: number, f: number): number;
    RGBtoHSB(i: number, i: number, i: number, f: number): number[];
    getHSBColor(f: number, f: number, f: number): Color;
    getRGBComponents(f: number): number[];
    getRGBColorComponents(f: number): number[];
    getComponents(colorSpace: ColorSpace, f: number): number[];
    getComponents(f: number): number[];
    getColorComponents(f: number): number[];
    getColorComponents(colorSpace: ColorSpace, f: number): number[];
    createContext(colorModel: ColorModel, rectangle: Rectangle, rectangle2D: Rectangle2D, affineTransform: AffineTransform, renderingHints: RenderingHints): PaintContext;
    white: Color;
    WHITE: Color;
    lightGray: Color;
    LIGHT_GRAY: Color;
    gray: Color;
    GRAY: Color;
    darkGray: Color;
    DARK_GRAY: Color;
    black: Color;
    BLACK: Color;
    red: Color;
    RED: Color;
    pink: Color;
    PINK: Color;
    orange: Color;
    ORANGE: Color;
    yellow: Color;
    YELLOW: Color;
    green: Color;
    GREEN: Color;
    magenta: Color;
    MAGENTA: Color;
    cyan: Color;
    CYAN: Color;
    blue: Color;
    BLUE: Color;
}

// java.util.logging.Handler
declare interface Handler {
    flush(): void;
    close(): void;
    getEncoding(): string;
    publish(logRecord: LogRecord): void;
    getFilter(): Filter;
    setFilter(filter: Filter): void;
    setLevel(level: Level): void;
    getLevel(): Level;
    setFormatter(formatter: Formatter): void;
    getFormatter(): Formatter;
    setEncoding(s: string): void;
    setErrorManager(errorManager: ErrorManager): void;
    getErrorManager(): ErrorManager;
    isLoggable(logRecord: LogRecord): boolean;
}

// org.bukkit.event.world.PortalCreateEvent$CreateReason
declare enum CreateReason {
    FIRE,
    NETHER_PAIR,
    END_PLATFORM,
}

// org.bukkit.entity.ArmorStand$LockType
declare enum LockType {
    ADDING_OR_CHANGING,
    REMOVING_OR_CHANGING,
    ADDING,
}

// org.bukkit.event.world.TimeSkipEvent$SkipReason
declare enum SkipReason {
    COMMAND,
    CUSTOM,
    NIGHT_SKIP,
}

// java.util.HashMap
declare interface HashMap extends AbstractMap, Map, Cloneable, Serializable {
    remove(object: any, object: any): boolean;
    replace(object: any, object: any, object: any): boolean;
    replace(object: any, object: any): any;
    replaceAll(biFunction: BiFunction): void;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putIfAbsent(object: any, object: any): any;
    compute(object: any, biFunction: BiFunction): any;
    forEach(biConsumer: BiConsumer): void;
    computeIfAbsent(object: any, func: Function): any;
    getOrDefault(object: any, object: any): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
}

// org.bukkit.block.data.type.Switch$Face
declare enum Face {
    FLOOR,
    WALL,
    CEILING,
}

// org.bukkit.block.data.type.Bed$Part
declare enum Part {
    HEAD,
    FOOT,
}

// org.bukkit.entity.MushroomCow$Variant
declare enum Variant {
    RED,
    BROWN,
}

// org.bukkit.help.HelpTopicComparator$TopicNameComparator
declare interface TopicNameComparator extends Comparator {
    compare(s: string, s: string): number;
    compare(object: any, object: any): number;
}

// org.bukkit.entity.LightningStrike$Spigot
declare interface Spigot extends Spigot {
    isSilent(): boolean;
}

// org.bukkit.block.data.type.SculkSensor$Phase
declare enum Phase {
    INACTIVE,
    ACTIVE,
    COOLDOWN,
}

// org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult
declare enum BedEnterResult {
    OK,
    NOT_POSSIBLE_HERE,
    NOT_POSSIBLE_NOW,
    TOO_FAR_AWAY,
    NOT_SAFE,
    OTHER_PROBLEM,
}

// org.bukkit.block.data.type.Stairs$Shape
declare enum Shape {
    STRAIGHT,
    INNER_LEFT,
    INNER_RIGHT,
    OUTER_LEFT,
    OUTER_RIGHT,
}

// java.util.Iterator
declare interface Iterator {
    remove(): void;
    forEachRemaining(consumer: Consumer): void;
    next(): any;
    hasNext(): boolean;
}

// java.util.logging.LogRecord
declare interface LogRecord extends Serializable {
    getMessage(): string;
    getParameters(): any[];
    setLevel(level: Level): void;
    getLevel(): Level;
    setParameters(object: any): void;
    getLoggerName(): string;
    setResourceBundleName(s: string): void;
    setSourceMethodName(s: string): void;
    getResourceBundleName(): string;
    setLoggerName(s: string): void;
    setResourceBundle(resourceBundle: ResourceBundle): void;
    setThrown(throwable: Throwable): void;
    setSourceClassName(s: string): void;
    getResourceBundle(): ResourceBundle;
    getMillis(): number;
    getSequenceNumber(): number;
    setSequenceNumber(l: number): void;
    getSourceClassName(): string;
    getSourceMethodName(): string;
    getThreadID(): number;
    setThreadID(i: number): void;
    setMillis(l: number): void;
    getInstant(): Instant;
    setInstant(instant: Instant): void;
    getThrown(): Throwable;
    setMessage(s: string): void;
}

// org.bukkit.block.data.type.TechnicalPiston$Type
declare enum Type {
    NORMAL,
    STICKY,
}

// org.bukkit.block.data.type.Jigsaw$Orientation
declare enum Orientation {
    DOWN_EAST,
    DOWN_NORTH,
    DOWN_SOUTH,
    DOWN_WEST,
    UP_EAST,
    UP_NORTH,
    UP_SOUTH,
    UP_WEST,
    WEST_UP,
    EAST_UP,
    NORTH_UP,
    SOUTH_UP,
}

// org.bukkit.event.weather.LightningStrikeEvent$Cause
declare enum Cause {
    COMMAND,
    CUSTOM,
    SPAWNER,
    TRIDENT,
    TRAP,
    WEATHER,
    UNKNOWN,
}

// org.bukkit.event.entity.CreeperPowerEvent$PowerCause
declare enum PowerCause {
    LIGHTNING,
    SET_ON,
    SET_OFF,
}

// org.bukkit.entity.Axolotl$Variant
declare enum Variant {
    LUCY,
    WILD,
    GOLD,
    CYAN,
    BLUE,
}

// org.bukkit.entity.Fox$Type
declare enum Type {
    RED,
    SNOW,
}

// java.io.Writer
declare interface Writer extends Appendable, Closeable, Flushable {
    append(s: string, i: number, i: number): Writer;
    append(c: string): Writer;
    append(s: string): Appendable;
    append(c: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    append(s: string): Writer;
    write(i: number): void;
    write(c: string): void;
    write(c: string, i: number, i: number): void;
    write(s: string): void;
    write(s: string, i: number, i: number): void;
    flush(): void;
    close(): void;
    nullWriter(): Writer;
}

// org.bukkit.World$Spigot
declare interface Spigot {
    strikeLightning(location: Location, b: boolean): LightningStrike;
    strikeLightningEffect(location: Location, b: boolean): LightningStrike;
}

// org.bukkit.block.data.type.BigDripleaf$Tilt
declare enum Tilt {
    NONE,
    UNSTABLE,
    PARTIAL,
    FULL,
}

// java.lang.Throwable
declare interface Throwable extends Serializable {
    printStackTrace(): void;
    printStackTrace(printWriter: PrintWriter): void;
    printStackTrace(printStream: PrintStream): void;
    fillInStackTrace(): Throwable;
    getCause(): Throwable;
    initCause(throwable: Throwable): Throwable;
    getMessage(): string;
    getSuppressed(): Throwable[];
    getLocalizedMessage(): string;
    getStackTrace(): StackTraceElement[];
    setStackTrace(stackTraceElement: StackTraceElement): void;
    addSuppressed(throwable: Throwable): void;
}

// java.util.function.Supplier
declare interface Supplier {
    get(): any;
}

// org.bukkit.event.player.PlayerPreLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

// java.net.InetAddress
declare interface InetAddress extends Serializable {
    getHostAddress(): string;
    getAddress(): number[];
    getByName(s: string): InetAddress;
    getHostName(): string;
    isAnyLocalAddress(): boolean;
    getLoopbackAddress(): InetAddress;
    isMulticastAddress(): boolean;
    isLoopbackAddress(): boolean;
    isLinkLocalAddress(): boolean;
    isSiteLocalAddress(): boolean;
    isMCGlobal(): boolean;
    isMCNodeLocal(): boolean;
    isMCLinkLocal(): boolean;
    isMCSiteLocal(): boolean;
    isMCOrgLocal(): boolean;
    isReachable(i: number): boolean;
    isReachable(networkInterface: NetworkInterface, i: number, i: number): boolean;
    getCanonicalHostName(): string;
    getByAddress(b: number): InetAddress;
    getByAddress(s: string, b: number): InetAddress;
    getAllByName(s: string): InetAddress[];
    getLocalHost(): InetAddress;
}

// org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason
declare enum RegainReason {
    REGEN,
    SATIATED,
    EATING,
    ENDER_CRYSTAL,
    MAGIC,
    MAGIC_REGEN,
    WITHER_SPAWN,
    WITHER,
    CUSTOM,
}

// java.net.http.WebSocket$Builder
declare interface Builder {
    header(s: string, s: string): Builder;
    connectTimeout(duration: Duration): Builder;
    buildAsync(uRI: URI, listener: Listener): CompletableFuture;
    subprotocols(s: string, s: string): Builder;
}

// java.net.URLClassLoader
declare interface URLClassLoader extends SecureClassLoader, Closeable {
    newInstance(uRL: URL, classLoader: ClassLoader): URLClassLoader;
    newInstance(uRL: URL): URLClassLoader;
    getResourceAsStream(s: string): InputStream;
    findResource(s: string): URL;
    findResources(s: string): Enumeration;
    close(): void;
    getURLs(): URL[];
}

// java.util.EventObject
declare interface EventObject extends Serializable {
    getSource(): any;
}

// org.bukkit.entity.Panda$Gene
declare enum Gene {
    NORMAL,
    LAZY,
    WORRIED,
    PLAYFUL,
    BROWN,
    WEAK,
    AGGRESSIVE,
}

// org.bukkit.event.entity.EntityTransformEvent$TransformReason
declare enum TransformReason {
    CURED,
    FROZEN,
    INFECTION,
    DROWNED,
    SHEARED,
    LIGHTNING,
    SPLIT,
    PIGLIN_ZOMBIFIED,
    UNKNOWN,
}

// java.lang.Comparable
declare interface Comparable {
    compareTo(object: any): number;
}

// org.bukkit.entity.TropicalFish$Pattern
declare enum Pattern {
    KOB,
    SUNSTREAK,
    SNOOPER,
    DASHER,
    BRINELY,
    SPOTTY,
    FLOPPER,
    STRIPEY,
    GLITTER,
    BLOCKFISH,
    BETTY,
    CLAYFISH,
}

// org.bukkit.event.entity.EntityDamageEvent$DamageModifier
declare enum DamageModifier {
    BASE,
    HARD_HAT,
    BLOCKING,
    ARMOR,
    RESISTANCE,
    MAGIC,
    ABSORPTION,
}

// org.bukkit.Note$Tone
declare enum Tone {
    G,
    A,
    B,
    C,
    D,
    E,
    F,
}

// java.util.logging.Level
declare interface Level extends Serializable {
    intValue(): number;
    getName(): string;
    parse(s: string): Level;
    getLocalizedName(): string;
    getResourceBundleName(): string;
    OFF: Level;
    SEVERE: Level;
    WARNING: Level;
    INFO: Level;
    CONFIG: Level;
    FINE: Level;
    FINER: Level;
    FINEST: Level;
    ALL: Level;
}

// org.bukkit.event.entity.EntityUnleashEvent$UnleashReason
declare enum UnleashReason {
    HOLDER_GONE,
    PLAYER_UNLEASH,
    DISTANCE,
    UNKNOWN,
}

// org.bukkit.block.data.Rail$Shape
declare enum Shape {
    NORTH_SOUTH,
    EAST_WEST,
    ASCENDING_EAST,
    ASCENDING_WEST,
    ASCENDING_NORTH,
    ASCENDING_SOUTH,
    SOUTH_EAST,
    SOUTH_WEST,
    NORTH_WEST,
    NORTH_EAST,
}

// java.util.function.Consumer
declare interface Consumer {
    accept(object: any): void;
    andThen(consumer: Consumer): Consumer;
}

// org.bukkit.entity.Rabbit$Type
declare enum Type {
    BROWN,
    WHITE,
    BLACK,
    BLACK_AND_WHITE,
    GOLD,
    SALT_AND_PEPPER,
    THE_KILLER_BUNNY,
}

// org.bukkit.event.player.PlayerResourcePackStatusEvent$Status
declare enum Status {
    SUCCESSFULLY_LOADED,
    DECLINED,
    FAILED_DOWNLOAD,
    ACCEPTED,
}

// org.bukkit.World$Environment
declare enum Environment {
    NORMAL,
    NETHER,
    THE_END,
    CUSTOM,
}

// org.bukkit.block.data.type.StructureBlock$Mode
declare enum Mode {
    SAVE,
    LOAD,
    CORNER,
    DATA,
}

// org.bukkit.event.player.PlayerTeleportEvent$TeleportCause
declare enum TeleportCause {
    ENDER_PEARL,
    COMMAND,
    PLUGIN,
    NETHER_PORTAL,
    END_PORTAL,
    SPECTATE,
    END_GATEWAY,
    CHORUS_FRUIT,
    UNKNOWN,
}

// org.yaml.snakeyaml.representer.Representer
declare interface Representer extends SafeRepresenter {
    addTypeDescription(typeDescription: TypeDescription): TypeDescription;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
}

// org.bukkit.map.MapView$Scale
declare enum Scale {
    CLOSEST,
    CLOSE,
    NORMAL,
    FAR,
    FARTHEST,
}

// org.bukkit.entity.Skeleton$SkeletonType
declare enum SkeletonType {
    NORMAL,
    WITHER,
    STRAY,
}

// org.bukkit.entity.Ocelot$Type
declare enum Type {
    WILD_OCELOT,
    BLACK_CAT,
    RED_CAT,
    SIAMESE_CAT,
}

// java.util.Map
declare interface Map {
    remove(object: any): any;
    remove(object: any, object: any): boolean;
    get(object: any): any;
    put(object: any, object: any): any;
    equals(object: any): boolean;
    values(): Collection;
    hashCode(): number;
    copyOf(map: Map): Map;
    clear(): void;
    isEmpty(): boolean;
    replace(object: any, object: any): any;
    replace(object: any, object: any, object: any): boolean;
    replaceAll(biFunction: BiFunction): void;
    size(): number;
    merge(object: any, object: any, biFunction: BiFunction): any;
    entrySet(): Set;
    putAll(map: Map): void;
    entry(object: any, object: any): Entry;
    putIfAbsent(object: any, object: any): any;
    compute(object: any, biFunction: BiFunction): any;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any): Map;
    of(): Map;
    forEach(biConsumer: BiConsumer): void;
    containsKey(object: any): boolean;
    computeIfAbsent(object: any, func: Function): any;
    containsValue(object: any): boolean;
    keySet(): Set;
    getOrDefault(object: any, object: any): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    ofEntries(entry: Entry): Map;
}

// org.bukkit.conversations.Conversation$ConversationState
declare enum ConversationState {
    UNSTARTED,
    STARTED,
    ABANDONED,
}

// java.lang.Iterable
declare interface Iterable {
    iterator(): Iterator;
    spliterator(): Spliterator;
    forEach(consumer: Consumer): void;
}

// java.util.ArrayList
declare interface ArrayList extends AbstractList, List, RandomAccess, Cloneable, Serializable {
    remove(object: any): boolean;
    clone(): any;
    isEmpty(): boolean;
    contains(object: any): boolean;
    replaceAll(func: UnaryOperator): void;
    size(): number;
    toArray(object: any): any[];
    toArray(): any[];
    spliterator(): Spliterator;
    addAll(collection: Collection): boolean;
    forEach(consumer: Consumer): void;
    ensureCapacity(i: number): void;
    trimToSize(): void;
    retainAll(collection: Collection): boolean;
    removeAll(collection: Collection): boolean;
    removeIf(predicate: Predicate): boolean;
    sort(comparator: Comparator): void;
}

// java.net.URLConnection
declare interface URLConnection {
    connect(): void;
    getContent(clazz: Class): any;
    getContent(): any;
    getInputStream(): InputStream;
    getPermission(): Permission;
    setUseCaches(b: boolean): void;
    setRequestProperty(s: string, s: string): void;
    getURL(): URL;
    getLastModified(): number;
    getContentLength(): number;
    getOutputStream(): OutputStream;
    getContentLengthLong(): number;
    getContentType(): string;
    getHeaderField(i: number): string;
    getHeaderField(s: string): string;
    getRequestProperty(s: string): string;
    addRequestProperty(s: string, s: string): void;
    getRequestProperties(): Map;
    setAllowUserInteraction(b: boolean): void;
    getAllowUserInteraction(): boolean;
    getUseCaches(): boolean;
    setIfModifiedSince(l: number): void;
    setDefaultUseCaches(s: string, b: boolean): void;
    setDefaultUseCaches(b: boolean): void;
    getDefaultUseCaches(s: string): boolean;
    getDefaultUseCaches(): boolean;
    guessContentTypeFromStream(inputStream: InputStream): string;
    guessContentTypeFromName(s: string): string;
    getFileNameMap(): FileNameMap;
    setFileNameMap(fileNameMap: FileNameMap): void;
    setConnectTimeout(i: number): void;
    getConnectTimeout(): number;
    setReadTimeout(i: number): void;
    getReadTimeout(): number;
    getContentEncoding(): string;
    getExpiration(): number;
    getDate(): number;
    getHeaderFields(): Map;
    getHeaderFieldInt(s: string, i: number): number;
    getHeaderFieldLong(s: string, l: number): number;
    getHeaderFieldDate(s: string, l: number): number;
    getHeaderFieldKey(i: number): string;
    setDoInput(b: boolean): void;
    getDoInput(): boolean;
    setDoOutput(b: boolean): void;
    getDoOutput(): boolean;
    setDefaultAllowUserInteraction(b: boolean): void;
    getDefaultAllowUserInteraction(): boolean;
    getIfModifiedSince(): number;
    setDefaultRequestProperty(s: string, s: string): void;
    getDefaultRequestProperty(s: string): string;
    setContentHandlerFactory(contentHandlerFactory: ContentHandlerFactory): void;
}

// java.lang.Number
declare interface Number extends Serializable {
    byteValue(): number;
    shortValue(): number;
    intValue(): number;
    longValue(): number;
    floatValue(): number;
    doubleValue(): number;
}

// java.lang.reflect.TypeVariable
declare interface TypeVariable extends Type, AnnotatedElement {
    getName(): string;
    getBounds(): Type[];
    getGenericDeclaration(): GenericDeclaration;
    getAnnotatedBounds(): AnnotatedType[];
}

// java.awt.image.Raster
declare interface Raster {
    getParent(): Raster;
    getBounds(): Rectangle;
    getSampleModel(): SampleModel;
    createCompatibleWritableRaster(i: number, i: number, i: number, i: number): WritableRaster;
    createCompatibleWritableRaster(i: number, i: number): WritableRaster;
    createCompatibleWritableRaster(rectangle: Rectangle): WritableRaster;
    createCompatibleWritableRaster(): WritableRaster;
    createInterleavedRaster(i: number, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createInterleavedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createInterleavedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, point: Point): WritableRaster;
    getNumBands(): number;
    getDataElements(i: number, i: number, i: number, i: number, object: any): any;
    getDataElements(i: number, i: number, object: any): any;
    getDataBuffer(): DataBuffer;
    getSampleModelTranslateX(): number;
    getSampleModelTranslateY(): number;
    createWritableRaster(sampleModel: SampleModel, dataBuffer: DataBuffer, point: Point): WritableRaster;
    createWritableRaster(sampleModel: SampleModel, point: Point): WritableRaster;
    getPixels(i: number, i: number, i: number, i: number, i: number): number[];
    getPixels(i: number, i: number, i: number, i: number, f: number): number[];
    getPixels(i: number, i: number, i: number, i: number, d: number): number[];
    createBandedRaster(i: number, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createBandedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createBandedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createRaster(sampleModel: SampleModel, dataBuffer: DataBuffer, point: Point): Raster;
    createTranslatedChild(i: number, i: number): Raster;
    createChild(i: number, i: number, i: number, i: number, i: number, i: number, i: number): Raster;
    getNumDataElements(): number;
    getTransferType(): number;
    getSample(i: number, i: number, i: number): number;
    getSampleFloat(i: number, i: number, i: number): number;
    getSampleDouble(i: number, i: number, i: number): number;
    getSamples(i: number, i: number, i: number, i: number, i: number, f: number): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, i: number): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, d: number): number[];
    getHeight(): number;
    getWidth(): number;
    getPixel(i: number, i: number, i: number): number[];
    getPixel(i: number, i: number, f: number): number[];
    getPixel(i: number, i: number, d: number): number[];
    getMinX(): number;
    getMinY(): number;
}

// java.util.AbstractList
declare interface AbstractList extends AbstractCollection, List {
    add(i: number, object: any): void;
    remove(i: number): any;
    get(i: number): any;
    equals(object: any): boolean;
    hashCode(): number;
    indexOf(object: any): number;
    lastIndexOf(object: any): number;
    subList(i: number, i: number): List;
    addAll(i: number, collection: Collection): boolean;
    set(i: number, object: any): any;
    listIterator(): ListIterator;
    listIterator(i: number): ListIterator;
}

// java.awt.geom.Rectangle2D
declare interface Rectangle2D extends RectangularShape {
    add(d: number, d: number): void;
    add(point2D: Point2D): void;
    add(rectangle2D: Rectangle2D): void;
    equals(object: any): boolean;
    hashCode(): number;
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    union(rectangle2D: Rectangle2D, rectangle2D: Rectangle2D, rectangle2D: Rectangle2D): void;
    intersect(rectangle2D: Rectangle2D, rectangle2D: Rectangle2D, rectangle2D: Rectangle2D): void;
    getBounds2D(): Rectangle2D;
    setRect(rectangle2D: Rectangle2D): void;
    setRect(d: number, d: number, d: number, d: number): void;
    outcode(d: number, d: number): number;
    outcode(point2D: Point2D): number;
    createIntersection(rectangle2D: Rectangle2D): Rectangle2D;
    createUnion(rectangle2D: Rectangle2D): Rectangle2D;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    intersectsLine(d: number, d: number, d: number, d: number): boolean;
    intersectsLine(line2D: Line2D): boolean;
    OUT_LEFT: number;
    OUT_TOP: number;
    OUT_RIGHT: number;
    OUT_BOTTOM: number;
}

// java.util.Map$Entry
declare interface Entry {
    equals(object: any): boolean;
    hashCode(): number;
    getValue(): any;
    getKey(): any;
    setValue(object: any): any;
    comparingByKey(comparator: Comparator): Comparator;
    comparingByKey(): Comparator;
    comparingByValue(): Comparator;
    comparingByValue(comparator: Comparator): Comparator;
}

// java.util.function.IntFunction
declare interface IntFunction {
    apply(i: number): any;
}

// java.net.URI
declare interface URI extends Comparable, Serializable {
    compareTo(object: any): number;
    compareTo(uRI: URI): number;
    resolve(s: string): URI;
    resolve(uRI: URI): URI;
    isAbsolute(): boolean;
    normalize(): URI;
    getQuery(): string;
    getPath(): string;
    getUserInfo(): string;
    getAuthority(): string;
    getPort(): number;
    getHost(): string;
    getScheme(): string;
    isOpaque(): boolean;
    getRawFragment(): string;
    getRawQuery(): string;
    getRawPath(): string;
    create(s: string): URI;
    toURL(): URL;
    getRawAuthority(): string;
    relativize(uRI: URI): URI;
    parseServerAuthority(): URI;
    getRawSchemeSpecificPart(): string;
    getSchemeSpecificPart(): string;
    getRawUserInfo(): string;
    getFragment(): string;
    toASCIIString(): string;
}

// java.security.AlgorithmConstraints
declare interface AlgorithmConstraints {
    permits(set: Set, s: string, algorithmParameters: AlgorithmParameters): boolean;
    permits(set: Set, key: Key): boolean;
    permits(set: Set, s: string, key: Key, algorithmParameters: AlgorithmParameters): boolean;
}

// java.net.http.WebSocket$Listener
declare interface Listener {
    onClose(webSocket: WebSocket, i: number, s: string): CompletionStage;
    onBinary(webSocket: WebSocket, byteBuffer: ByteBuffer, b: boolean): CompletionStage;
    onPong(webSocket: WebSocket, byteBuffer: ByteBuffer): CompletionStage;
    onError(webSocket: WebSocket, throwable: Throwable): void;
    onPing(webSocket: WebSocket, byteBuffer: ByteBuffer): CompletionStage;
    onText(webSocket: WebSocket, s: string, b: boolean): CompletionStage;
    onOpen(webSocket: WebSocket): void;
}

// java.awt.image.WritableRaster
declare interface WritableRaster extends Raster {
    setDataElements(i: number, i: number, object: any): void;
    setDataElements(i: number, i: number, raster: Raster): void;
    setDataElements(i: number, i: number, i: number, i: number, object: any): void;
    createWritableChild(i: number, i: number, i: number, i: number, i: number, i: number, i: number): WritableRaster;
    setPixels(i: number, i: number, i: number, i: number, i: number): void;
    setPixels(i: number, i: number, i: number, i: number, d: number): void;
    setPixels(i: number, i: number, i: number, i: number, f: number): void;
    setRect(i: number, i: number, raster: Raster): void;
    setRect(raster: Raster): void;
    getWritableParent(): WritableRaster;
    createWritableTranslatedChild(i: number, i: number): WritableRaster;
    setSample(i: number, i: number, i: number, i: number): void;
    setSample(i: number, i: number, i: number, f: number): void;
    setSample(i: number, i: number, i: number, d: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, i: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, f: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, d: number): void;
    setPixel(i: number, i: number, i: number): void;
    setPixel(i: number, i: number, d: number): void;
    setPixel(i: number, i: number, f: number): void;
}

// java.awt.ImageCapabilities
declare interface ImageCapabilities extends Cloneable {
    isAccelerated(): boolean;
    isTrueVolatile(): boolean;
}

// java.lang.CharSequence
declare interface CharSequence {
    length(): number;
    toString(): string;
    codePoints(): IntStream;
    charAt(i: number): string;
    subSequence(i: number, i: number): string;
    chars(): IntStream;
    compare(s: string, s: string): number;
}

// java.util.concurrent.Flow$Subscription
declare interface Subscription {
    request(l: number): void;
    cancel(): void;
}

// java.lang.reflect.Method
declare interface Method extends Executable {
    invoke(object: any, object: any): any;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    getReturnType(): Class;
    setAccessible(b: boolean): void;
    getGenericReturnType(): Type;
    isBridge(): boolean;
    isDefault(): boolean;
    getDefaultValue(): any;
}

// java.util.function.UnaryOperator
declare interface UnaryOperator extends Function {
    identity(): UnaryOperator;
}

// java.lang.reflect.AnnotatedElement
declare interface AnnotatedElement {
    getAnnotation(clazz: Class): Annotation;
    isAnnotationPresent(clazz: Class): boolean;
    getAnnotationsByType(clazz: Class): Annotation[];
    getAnnotations(): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
}

// org.yaml.snakeyaml.constructor.SafeConstructor$ConstructUndefined
declare interface ConstructUndefined extends AbstractConstruct {
    construct(node: Node): any;
}

// java.io.ObjectInputValidation
declare interface ObjectInputValidation {
    validateObject(): void;
}

// java.nio.file.WatchEvent$Modifier
declare interface Modifier {
    name(): string;
}

// java.net.Authenticator
declare interface Authenticator {
    getDefault(): Authenticator;
    setDefault(authenticator: Authenticator): void;
    requestPasswordAuthentication(inetAddress: InetAddress, i: number, s: string, s: string, s: string): PasswordAuthentication;
    requestPasswordAuthentication(authenticator: Authenticator, s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    requestPasswordAuthentication(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    requestPasswordAuthentication(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string): PasswordAuthentication;
    requestPasswordAuthenticationInstance(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
}

// java.awt.image.WritableRenderedImage
declare interface WritableRenderedImage extends RenderedImage {
    addTileObserver(tileObserver: TileObserver): void;
    removeTileObserver(tileObserver: TileObserver): void;
    isTileWritable(i: number, i: number): boolean;
    getWritableTileIndices(): Point[];
    hasTileWriters(): boolean;
    getWritableTile(i: number, i: number): WritableRaster;
    releaseWritableTile(i: number, i: number): void;
    setData(raster: Raster): void;
}

// java.nio.file.FileSystem
declare interface FileSystem extends Closeable {
    isOpen(): boolean;
    provider(): FileSystemProvider;
    close(): void;
    getPath(s: string, s: string): Path;
    isReadOnly(): boolean;
    getSeparator(): string;
    supportedFileAttributeViews(): Set;
    getRootDirectories(): Iterable;
    getFileStores(): Iterable;
    getUserPrincipalLookupService(): UserPrincipalLookupService;
    getPathMatcher(s: string): PathMatcher;
    newWatchService(): WatchService;
}

// java.security.SecureClassLoader
declare interface SecureClassLoader extends ClassLoader {
}

// java.awt.image.ImageProducer
declare interface ImageProducer {
    addConsumer(imageConsumer: ImageConsumer): void;
    isConsumer(imageConsumer: ImageConsumer): boolean;
    removeConsumer(imageConsumer: ImageConsumer): void;
    startProduction(imageConsumer: ImageConsumer): void;
    requestTopDownLeftRightResend(imageConsumer: ImageConsumer): void;
}

// java.lang.reflect.AnnotatedType
declare interface AnnotatedType extends AnnotatedElement {
    getType(): Type;
    getAnnotatedOwnerType(): AnnotatedType;
}

// com.google.common.collect.Multiset
declare interface Multiset extends Collection {
    add(object: any, i: number): number;
    add(object: any): boolean;
    remove(object: any, i: number): number;
    remove(object: any): boolean;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    count(object: any): number;
    contains(object: any): boolean;
    size(): number;
    iterator(): Iterator;
    spliterator(): Spliterator;
    entrySet(): Set;
    forEach(consumer: Consumer): void;
    containsAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    removeAll(collection: Collection): boolean;
    forEachEntry(objIntConsumer: ObjIntConsumer): void;
    setCount(object: any, i: number, i: number): boolean;
    setCount(object: any, i: number): number;
    elementSet(): Set;
}

// java.lang.Thread$State
declare enum State {
    NEW,
    RUNNABLE,
    BLOCKED,
    WAITING,
    TIMED_WAITING,
    TERMINATED,
}

// java.awt.GraphicsConfiguration
declare interface GraphicsConfiguration {
    getBounds(): Rectangle;
    getColorModel(): ColorModel;
    getColorModel(i: number): ColorModel;
    getDevice(): GraphicsDevice;
    createCompatibleImage(i: number, i: number, i: number): BufferedImage;
    createCompatibleImage(i: number, i: number): BufferedImage;
    createCompatibleVolatileImage(i: number, i: number): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, i: number): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities, i: number): VolatileImage;
    getDefaultTransform(): AffineTransform;
    getNormalizingTransform(): AffineTransform;
    getBufferCapabilities(): BufferCapabilities;
    getImageCapabilities(): ImageCapabilities;
    isTranslucencyCapable(): boolean;
}

// javax.net.ssl.SSLSocketFactory
declare interface SSLSocketFactory extends SocketFactory {
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
    createSocket(socket: Socket, inputStream: InputStream, b: boolean): Socket;
    createSocket(socket: Socket, s: string, i: number, b: boolean): Socket;
}

// java.net.http.HttpResponse$ResponseInfo
declare interface ResponseInfo {
    version(): Version;
    headers(): HttpHeaders;
    statusCode(): number;
}

// java.io.ObjectStreamConstants
declare interface ObjectStreamConstants {
    STREAM_MAGIC: number;
    STREAM_VERSION: number;
    TC_BASE: number;
    TC_NULL: number;
    TC_REFERENCE: number;
    TC_CLASSDESC: number;
    TC_OBJECT: number;
    TC_STRING: number;
    TC_ARRAY: number;
    TC_CLASS: number;
    TC_BLOCKDATA: number;
    TC_ENDBLOCKDATA: number;
    TC_RESET: number;
    TC_BLOCKDATALONG: number;
    TC_EXCEPTION: number;
    TC_LONGSTRING: number;
    TC_PROXYCLASSDESC: number;
    TC_ENUM: number;
    TC_MAX: number;
    baseWireHandle: number;
    SC_WRITE_METHOD: number;
    SC_BLOCK_DATA: number;
    SC_SERIALIZABLE: number;
    SC_EXTERNALIZABLE: number;
    SC_ENUM: number;
    SUBSTITUTION_PERMISSION: SerializablePermission;
    SUBCLASS_IMPLEMENTATION_PERMISSION: SerializablePermission;
    SERIAL_FILTER_PERMISSION: SerializablePermission;
    PROTOCOL_VERSION_1: number;
    PROTOCOL_VERSION_2: number;
}

// java.util.concurrent.Executor
declare interface Executor {
    execute(runnable: Runnable): void;
}

// java.awt.Graphics2D
declare interface Graphics2D extends Graphics {
    fill(shape: Shape): void;
    scale(d: number, d: number): void;
    rotate(d: number, d: number, d: number): void;
    rotate(d: number): void;
    transform(affineTransform: AffineTransform): void;
    clip(shape: Shape): void;
    translate(d: number, d: number): void;
    drawString(s: string, f: number, f: number): void;
    drawString(attributedCharacterIterator: AttributedCharacterIterator, f: number, f: number): void;
    draw(shape: Shape): void;
    drawRenderedImage(renderedImage: RenderedImage, affineTransform: AffineTransform): void;
    drawRenderableImage(renderableImage: RenderableImage, affineTransform: AffineTransform): void;
    drawGlyphVector(glyphVector: GlyphVector, f: number, f: number): void;
    getDeviceConfiguration(): GraphicsConfiguration;
    setComposite(composite: Composite): void;
    setPaint(paint: Paint): void;
    setStroke(stroke: Stroke): void;
    setRenderingHint(key: Key, object: any): void;
    getRenderingHint(key: Key): any;
    setRenderingHints(map: Map): void;
    addRenderingHints(map: Map): void;
    getRenderingHints(): RenderingHints;
    setTransform(affineTransform: AffineTransform): void;
    getTransform(): AffineTransform;
    getPaint(): Paint;
    getComposite(): Composite;
    setBackground(color: Color): void;
    getBackground(): Color;
    getStroke(): Stroke;
    getFontRenderContext(): FontRenderContext;
    shear(d: number, d: number): void;
    hit(rectangle: Rectangle, shape: Shape, b: boolean): boolean;
    drawImage(bufferedImage: BufferedImage, bufferedImageOp: BufferedImageOp, i: number, i: number): void;
    drawImage(image: Image, affineTransform: AffineTransform, imageObserver: ImageObserver): boolean;
}

// java.util.function.BiFunction
declare interface BiFunction {
    apply(object: any, object: any): any;
    andThen(func: Function): BiFunction;
}

// java.lang.reflect.GenericDeclaration
declare interface GenericDeclaration extends AnnotatedElement {
    getTypeParameters(): TypeVariable[];
}

// java.util.SortedMap
declare interface SortedMap extends Map {
    values(): Collection;
    entrySet(): Set;
    keySet(): Set;
    comparator(): Comparator;
    firstKey(): any;
    lastKey(): any;
    subMap(object: any, object: any): SortedMap;
    headMap(object: any): SortedMap;
    tailMap(object: any): SortedMap;
}

// java.io.Closeable
declare interface Closeable extends AutoCloseable {
    close(): void;
}

// java.nio.CharBuffer
declare interface CharBuffer extends Buffer, Comparable, Appendable, CharSequence, Readable {
    get(c: string): string;
    get(i: number): string;
    get(): string;
    get(c: string, i: number, i: number): string;
    put(c: string, i: number, i: number): string;
    put(s: string): string;
    put(c: string): string;
    put(i: number, c: string): string;
    put(s: string): string;
    put(s: string, i: number, i: number): string;
    put(c: string): string;
    equals(object: any): boolean;
    length(): number;
    toString(): string;
    append(s: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    append(s: string): string;
    append(c: string): Appendable;
    append(s: string, i: number, i: number): string;
    append(c: string): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(s: string): number;
    charAt(i: number): string;
    subSequence(i: number, i: number): string;
    subSequence(i: number, i: number): string;
    chars(): IntStream;
    read(s: string): number;
    wrap(s: string): string;
    wrap(c: string): string;
    wrap(s: string, i: number, i: number): string;
    wrap(c: string, i: number, i: number): string;
    allocate(i: number): string;
    mismatch(s: string): number;
    asReadOnlyBuffer(): string;
    compact(): string;
    order(): ByteOrder;
}

// java.util.AbstractMap
declare interface AbstractMap extends Map {
    remove(object: any): any;
    get(object: any): any;
    put(object: any, object: any): any;
    values(): Collection;
    clear(): void;
    isEmpty(): boolean;
    size(): number;
    entrySet(): Set;
    putAll(map: Map): void;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    keySet(): Set;
}

// java.util.stream.LongStream
declare interface LongStream extends BaseStream {
    min(): OptionalLong;
    max(): OptionalLong;
    count(): number;
    builder(): Builder;
    concat(longStream: LongStream, longStream: LongStream): LongStream;
    limit(l: number): LongStream;
    toArray(): number[];
    iterator(): Iterator;
    iterator(): OfLong;
    spliterator(): Spliterator;
    spliterator(): OfLong;
    empty(): LongStream;
    filter(longPredicate: LongPredicate): LongStream;
    collect(supplier: Supplier, objLongConsumer: ObjLongConsumer, biConsumer: BiConsumer): any;
    map(longUnaryOperator: LongUnaryOperator): LongStream;
    of(l: number): LongStream;
    of(l: number): LongStream;
    flatMap(longFunction: LongFunction): LongStream;
    forEach(longConsumer: LongConsumer): void;
    findAny(): OptionalLong;
    skip(l: number): LongStream;
    peek(longConsumer: LongConsumer): LongStream;
    sum(): number;
    reduce(longBinaryOperator: LongBinaryOperator): OptionalLong;
    reduce(l: number, longBinaryOperator: LongBinaryOperator): number;
    iterate(l: number, longPredicate: LongPredicate, longUnaryOperator: LongUnaryOperator): LongStream;
    iterate(l: number, longUnaryOperator: LongUnaryOperator): LongStream;
    range(l: number, l: number): LongStream;
    parallel(): LongStream;
    parallel(): BaseStream;
    mapToObj(longFunction: LongFunction): Stream;
    forEachOrdered(longConsumer: LongConsumer): void;
    mapToInt(longToIntFunction: LongToIntFunction): IntStream;
    mapToDouble(longToDoubleFunction: LongToDoubleFunction): DoubleStream;
    sorted(): LongStream;
    takeWhile(longPredicate: LongPredicate): LongStream;
    dropWhile(longPredicate: LongPredicate): LongStream;
    anyMatch(longPredicate: LongPredicate): boolean;
    allMatch(longPredicate: LongPredicate): boolean;
    noneMatch(longPredicate: LongPredicate): boolean;
    findFirst(): OptionalLong;
    sequential(): BaseStream;
    sequential(): LongStream;
    generate(longSupplier: LongSupplier): LongStream;
    distinct(): LongStream;
    average(): OptionalDouble;
    summaryStatistics(): LongSummaryStatistics;
    asDoubleStream(): DoubleStream;
    boxed(): Stream;
    rangeClosed(l: number, l: number): LongStream;
}

// java.io.ObjectInput
declare interface ObjectInput extends DataInput, AutoCloseable {
    readObject(): any;
    read(b: number, i: number, i: number): number;
    read(b: number): number;
    read(): number;
    close(): void;
    skip(l: number): number;
    available(): number;
}

// java.io.ObjectOutput
declare interface ObjectOutput extends DataOutput, AutoCloseable {
    write(b: number): void;
    write(i: number): void;
    write(b: number, i: number, i: number): void;
    writeObject(object: any): void;
    flush(): void;
    close(): void;
}

// java.lang.Appendable
declare interface Appendable {
    append(s: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    append(c: string): Appendable;
}

// java.util.stream.IntStream
declare interface IntStream extends BaseStream {
    min(): OptionalInt;
    max(): OptionalInt;
    count(): number;
    builder(): Builder;
    concat(intStream: IntStream, intStream: IntStream): IntStream;
    limit(l: number): IntStream;
    toArray(): number[];
    iterator(): Iterator;
    iterator(): OfInt;
    spliterator(): Spliterator;
    spliterator(): OfInt;
    empty(): IntStream;
    filter(intPredicate: IntPredicate): IntStream;
    collect(supplier: Supplier, objIntConsumer: ObjIntConsumer, biConsumer: BiConsumer): any;
    map(intUnaryOperator: IntUnaryOperator): IntStream;
    of(i: number): IntStream;
    of(i: number): IntStream;
    flatMap(intFunction: IntFunction): IntStream;
    forEach(intConsumer: IntConsumer): void;
    findAny(): OptionalInt;
    skip(l: number): IntStream;
    peek(intConsumer: IntConsumer): IntStream;
    sum(): number;
    reduce(i: number, intBinaryOperator: IntBinaryOperator): number;
    reduce(intBinaryOperator: IntBinaryOperator): OptionalInt;
    iterate(i: number, intUnaryOperator: IntUnaryOperator): IntStream;
    iterate(i: number, intPredicate: IntPredicate, intUnaryOperator: IntUnaryOperator): IntStream;
    range(i: number, i: number): IntStream;
    parallel(): IntStream;
    parallel(): BaseStream;
    mapToObj(intFunction: IntFunction): Stream;
    forEachOrdered(intConsumer: IntConsumer): void;
    mapToLong(intToLongFunction: IntToLongFunction): LongStream;
    mapToDouble(intToDoubleFunction: IntToDoubleFunction): DoubleStream;
    sorted(): IntStream;
    takeWhile(intPredicate: IntPredicate): IntStream;
    dropWhile(intPredicate: IntPredicate): IntStream;
    anyMatch(intPredicate: IntPredicate): boolean;
    allMatch(intPredicate: IntPredicate): boolean;
    noneMatch(intPredicate: IntPredicate): boolean;
    findFirst(): OptionalInt;
    sequential(): BaseStream;
    sequential(): IntStream;
    generate(intSupplier: IntSupplier): IntStream;
    distinct(): IntStream;
    average(): OptionalDouble;
    summaryStatistics(): IntSummaryStatistics;
    asLongStream(): LongStream;
    asDoubleStream(): DoubleStream;
    boxed(): Stream;
    rangeClosed(i: number, i: number): IntStream;
}

// java.lang.reflect.Type
declare interface Type {
    getTypeName(): string;
}

// java.nio.file.WatchService
declare interface WatchService extends Closeable {
    poll(l: number, timeUnit: TimeUnit): WatchKey;
    poll(): WatchKey;
    close(): void;
    take(): WatchKey;
}

// java.io.PrintWriter
declare interface PrintWriter extends Writer {
    println(c: string): void;
    println(d: number): void;
    println(f: number): void;
    println(s: string): void;
    println(object: any): void;
    println(i: number): void;
    println(c: string): void;
    println(b: boolean): void;
    println(): void;
    println(l: number): void;
    format(locale: Locale, s: string, object: any): PrintWriter;
    format(s: string, object: any): PrintWriter;
    print(f: number): void;
    print(l: number): void;
    print(i: number): void;
    print(c: string): void;
    print(b: boolean): void;
    print(object: any): void;
    print(s: string): void;
    print(c: string): void;
    print(d: number): void;
    checkError(): boolean;
    printf(locale: Locale, s: string, object: any): PrintWriter;
    printf(s: string, object: any): PrintWriter;
}

// org.yaml.snakeyaml.TypeDescription
declare interface TypeDescription {
    getProperty(s: string): Property;
    newInstance(node: Node): any;
    newInstance(s: string, node: Node): any;
    getProperties(): Set;
    setProperty(object: any, s: string, object: any): boolean;
    getType(): Class;
    getTag(): Tag;
    setTag(s: string): void;
    setTag(tag: Tag): void;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
    finalizeConstruction(object: any): any;
    putMapPropertyType(s: string, clazz: Class, clazz: Class): void;
    getMapKeyType(s: string): Class;
    getMapValueType(s: string): Class;
    substituteProperty(s: string, clazz: Class, s: string, s: string, clazz: Class): void;
    substituteProperty(propertySubstitute: PropertySubstitute): void;
    putListPropertyType(s: string, clazz: Class): void;
    addPropertyParameters(s: string, clazz: Class): void;
    getListPropertyType(s: string): Class;
    setupPropertyType(s: string, node: Node): boolean;
    setExcludes(s: string): void;
    setIncludes(s: string): void;
}

// javax.net.ssl.SSLEngine
declare interface SSLEngine {
    wrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, i: number, i: number, byteBuffer: ByteBuffer): SSLEngineResult;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer, i: number, i: number): SSLEngineResult;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    getSupportedCipherSuites(): string[];
    getPeerHost(): string;
    getPeerPort(): number;
    getDelegatedTask(): Runnable;
    closeInbound(): void;
    isInboundDone(): boolean;
    closeOutbound(): void;
    isOutboundDone(): boolean;
    getEnabledCipherSuites(): string[];
    setEnabledCipherSuites(s: string): void;
    getSupportedProtocols(): string[];
    getEnabledProtocols(): string[];
    setEnabledProtocols(s: string): void;
    getSession(): SSLSession;
    getHandshakeSession(): SSLSession;
    beginHandshake(): void;
    getHandshakeStatus(): HandshakeStatus;
    setUseClientMode(b: boolean): void;
    getUseClientMode(): boolean;
    setEnableSessionCreation(b: boolean): void;
    getEnableSessionCreation(): boolean;
    getSSLParameters(): SSLParameters;
    setSSLParameters(sSLParameters: SSLParameters): void;
    getApplicationProtocol(): string;
    getHandshakeApplicationProtocol(): string;
    setHandshakeApplicationProtocolSelector(biFunction: BiFunction): void;
    getHandshakeApplicationProtocolSelector(): BiFunction;
    getWantClientAuth(): boolean;
    setWantClientAuth(b: boolean): void;
    getNeedClientAuth(): boolean;
    setNeedClientAuth(b: boolean): void;
}

// java.util.stream.DoubleStream
declare interface DoubleStream extends BaseStream {
    min(): OptionalDouble;
    max(): OptionalDouble;
    count(): number;
    builder(): Builder;
    concat(doubleStream: DoubleStream, doubleStream: DoubleStream): DoubleStream;
    limit(l: number): DoubleStream;
    toArray(): number[];
    iterator(): Iterator;
    iterator(): OfDouble;
    spliterator(): Spliterator;
    spliterator(): OfDouble;
    empty(): DoubleStream;
    filter(doublePredicate: DoublePredicate): DoubleStream;
    collect(supplier: Supplier, objDoubleConsumer: ObjDoubleConsumer, biConsumer: BiConsumer): any;
    map(doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    of(d: number): DoubleStream;
    of(d: number): DoubleStream;
    flatMap(doubleFunction: DoubleFunction): DoubleStream;
    forEach(doubleConsumer: DoubleConsumer): void;
    findAny(): OptionalDouble;
    skip(l: number): DoubleStream;
    peek(doubleConsumer: DoubleConsumer): DoubleStream;
    sum(): number;
    reduce(d: number, doubleBinaryOperator: DoubleBinaryOperator): number;
    reduce(doubleBinaryOperator: DoubleBinaryOperator): OptionalDouble;
    iterate(d: number, doublePredicate: DoublePredicate, doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    iterate(d: number, doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    parallel(): DoubleStream;
    parallel(): BaseStream;
    mapToObj(doubleFunction: DoubleFunction): Stream;
    forEachOrdered(doubleConsumer: DoubleConsumer): void;
    mapToInt(doubleToIntFunction: DoubleToIntFunction): IntStream;
    mapToLong(doubleToLongFunction: DoubleToLongFunction): LongStream;
    sorted(): DoubleStream;
    takeWhile(doublePredicate: DoublePredicate): DoubleStream;
    dropWhile(doublePredicate: DoublePredicate): DoubleStream;
    anyMatch(doublePredicate: DoublePredicate): boolean;
    allMatch(doublePredicate: DoublePredicate): boolean;
    noneMatch(doublePredicate: DoublePredicate): boolean;
    findFirst(): OptionalDouble;
    sequential(): BaseStream;
    sequential(): DoubleStream;
    generate(doubleSupplier: DoubleSupplier): DoubleStream;
    distinct(): DoubleStream;
    average(): OptionalDouble;
    summaryStatistics(): DoubleSummaryStatistics;
    boxed(): Stream;
}

// java.net.NetworkInterface
declare interface NetworkInterface {
    getName(): string;
    getParent(): NetworkInterface;
    getByName(s: string): NetworkInterface;
    getIndex(): number;
    inetAddresses(): Stream;
    getInterfaceAddresses(): List;
    getSubInterfaces(): Enumeration;
    subInterfaces(): Stream;
    getByIndex(i: number): NetworkInterface;
    getByInetAddress(inetAddress: InetAddress): NetworkInterface;
    getNetworkInterfaces(): Enumeration;
    networkInterfaces(): Stream;
    isUp(): boolean;
    isLoopback(): boolean;
    isPointToPoint(): boolean;
    supportsMulticast(): boolean;
    getHardwareAddress(): number[];
    getMTU(): number;
    isVirtual(): boolean;
    getDisplayName(): string;
    getInetAddresses(): Enumeration;
}

// java.nio.file.Watchable
declare interface Watchable {
    register(watchService: WatchService, kind: Kind, modifier: Modifier): WatchKey;
    register(watchService: WatchService, kind: Kind): WatchKey;
}

// java.lang.Readable
declare interface Readable {
    read(s: string): number;
}

// java.util.regex.Matcher
declare interface Matcher extends MatchResult {
    group(s: string): string;
    group(): string;
    group(i: number): string;
    matches(): boolean;
    replaceFirst(s: string): string;
    replaceFirst(func: Function): string;
    replaceAll(func: Function): string;
    replaceAll(s: string): string;
    end(): number;
    end(s: string): number;
    end(i: number): number;
    start(s: string): number;
    start(): number;
    start(i: number): number;
    reset(): Matcher;
    reset(s: string): Matcher;
    find(i: number): boolean;
    find(): boolean;
    requireEnd(): boolean;
    toMatchResult(): MatchResult;
    usePattern(pattern: Pattern): Matcher;
    lookingAt(): boolean;
    quoteReplacement(s: string): string;
    results(): Stream;
    regionStart(): number;
    regionEnd(): number;
    hasTransparentBounds(): boolean;
    useTransparentBounds(b: boolean): Matcher;
    hasAnchoringBounds(): boolean;
    useAnchoringBounds(b: boolean): Matcher;
    region(i: number, i: number): Matcher;
    pattern(): Pattern;
    hitEnd(): boolean;
    groupCount(): number;
    appendReplacement(s: string, s: string): Matcher;
    appendReplacement(s: string, s: string): Matcher;
    appendTail(s: string): string;
    appendTail(s: string): string;
}

// java.util.Spliterator
declare interface Spliterator {
    forEachRemaining(consumer: Consumer): void;
    characteristics(): number;
    tryAdvance(consumer: Consumer): boolean;
    trySplit(): Spliterator;
    estimateSize(): number;
    getExactSizeIfKnown(): number;
    hasCharacteristics(i: number): boolean;
    getComparator(): Comparator;
    ORDERED: number;
    DISTINCT: number;
    SORTED: number;
    SIZED: number;
    NONNULL: number;
    IMMUTABLE: number;
    CONCURRENT: number;
    SUBSIZED: number;
}

// org.yaml.snakeyaml.introspector.PropertyUtils
declare interface PropertyUtils {
    getProperty(clazz: Class, s: string): Property;
    getProperty(clazz: Class, s: string, beanAccess: BeanAccess): Property;
    getProperties(clazz: Class): Set;
    getProperties(clazz: Class, beanAccess: BeanAccess): Set;
    setAllowReadOnlyProperties(b: boolean): void;
    isAllowReadOnlyProperties(): boolean;
    isSkipMissingProperties(): boolean;
    setSkipMissingProperties(b: boolean): void;
    setBeanAccess(beanAccess: BeanAccess): void;
}

// java.nio.ByteBuffer
declare interface ByteBuffer extends Buffer, Comparable {
    get(b: number, i: number, i: number): ByteBuffer;
    get(i: number): number;
    get(): number;
    get(b: number): ByteBuffer;
    put(byteBuffer: ByteBuffer): ByteBuffer;
    put(b: number): ByteBuffer;
    put(i: number, b: number): ByteBuffer;
    put(b: number, i: number, i: number): ByteBuffer;
    put(b: number): ByteBuffer;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(byteBuffer: ByteBuffer): number;
    compareTo(object: any): number;
    getShort(): number;
    getShort(i: number): number;
    putShort(i: number, s: number): ByteBuffer;
    putShort(s: number): ByteBuffer;
    getChar(): string;
    getChar(i: number): string;
    putChar(i: number, c: string): ByteBuffer;
    putChar(c: string): ByteBuffer;
    getInt(i: number): number;
    getInt(): number;
    putInt(i: number): ByteBuffer;
    putInt(i: number, i: number): ByteBuffer;
    getLong(i: number): number;
    getLong(): number;
    putLong(i: number, l: number): ByteBuffer;
    putLong(l: number): ByteBuffer;
    getFloat(): number;
    getFloat(i: number): number;
    putFloat(i: number, f: number): ByteBuffer;
    putFloat(f: number): ByteBuffer;
    getDouble(i: number): number;
    getDouble(): number;
    putDouble(i: number, d: number): ByteBuffer;
    putDouble(d: number): ByteBuffer;
    wrap(b: number): ByteBuffer;
    wrap(b: number, i: number, i: number): ByteBuffer;
    allocate(i: number): ByteBuffer;
    mismatch(byteBuffer: ByteBuffer): number;
    allocateDirect(i: number): ByteBuffer;
    asReadOnlyBuffer(): ByteBuffer;
    compact(): ByteBuffer;
    order(byteOrder: ByteOrder): ByteBuffer;
    order(): ByteOrder;
    alignmentOffset(i: number, i: number): number;
    alignedSlice(i: number): ByteBuffer;
    asCharBuffer(): string;
    asShortBuffer(): ShortBuffer;
    asIntBuffer(): IntBuffer;
    asLongBuffer(): LongBuffer;
    asFloatBuffer(): FloatBuffer;
    asDoubleBuffer(): DoubleBuffer;
}

// java.nio.file.LinkOption
declare enum LinkOption {
    NOFOLLOW_LINKS,
}

// java.awt.image.SampleModel
declare interface SampleModel {
    getNumBands(): number;
    getDataElements(i: number, i: number, i: number, i: number, object: any, dataBuffer: DataBuffer): any;
    getDataElements(i: number, i: number, object: any, dataBuffer: DataBuffer): any;
    setDataElements(i: number, i: number, i: number, i: number, object: any, dataBuffer: DataBuffer): void;
    setDataElements(i: number, i: number, object: any, dataBuffer: DataBuffer): void;
    createCompatibleSampleModel(i: number, i: number): SampleModel;
    getPixels(i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    setPixels(i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    getNumDataElements(): number;
    getTransferType(): number;
    getSample(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getSampleFloat(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getSampleDouble(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getSamples(i: number, i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getSampleSize(): number[];
    getSampleSize(i: number): number;
    createDataBuffer(): DataBuffer;
    createSubsetSampleModel(i: number): SampleModel;
    setSample(i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    getHeight(): number;
    getDataType(): number;
    getWidth(): number;
    getPixel(i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getPixel(i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getPixel(i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    setPixel(i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, f: number, dataBuffer: DataBuffer): void;
}

// java.awt.image.ColorModel
declare interface ColorModel extends Transparency {
    getAlphaRaster(writableRaster: WritableRaster): WritableRaster;
    isAlphaPremultiplied(): boolean;
    coerceData(writableRaster: WritableRaster, b: boolean): ColorModel;
    getTransparency(): number;
    createCompatibleWritableRaster(i: number, i: number): WritableRaster;
    getRGBdefault(): ColorModel;
    hasAlpha(): boolean;
    isCompatibleRaster(raster: Raster): boolean;
    getColorSpace(): ColorSpace;
    getComponentSize(i: number): number;
    getComponentSize(): number[];
    getPixelSize(): number;
    getNumComponents(): number;
    getDataElements(i: number, i: number, object: any): any;
    getDataElements(i: number, object: any): any;
    getDataElements(f: number, i: number, object: any): any;
    createCompatibleSampleModel(i: number, i: number): SampleModel;
    getTransferType(): number;
    getNumColorComponents(): number;
    getUnnormalizedComponents(f: number, i: number, i: number, i: number): number[];
    getNormalizedComponents(object: any, f: number, i: number): number[];
    getNormalizedComponents(i: number, i: number, f: number, i: number): number[];
    getDataElement(f: number, i: number): number;
    getDataElement(i: number, i: number): number;
    isCompatibleSampleModel(sampleModel: SampleModel): boolean;
    getBlue(object: any): number;
    getBlue(i: number): number;
    getGreen(object: any): number;
    getGreen(i: number): number;
    getRed(object: any): number;
    getRed(i: number): number;
    getRGB(i: number): number;
    getRGB(object: any): number;
    getAlpha(i: number): number;
    getAlpha(object: any): number;
    getComponents(object: any, i: number, i: number): number[];
    getComponents(i: number, i: number, i: number): number[];
}

// java.util.function.ToDoubleFunction
declare interface ToDoubleFunction {
    applyAsDouble(object: any): number;
}

// java.util.RandomAccess
declare interface RandomAccess {
}

// java.time.Instant
declare interface Instant extends Temporal, TemporalAdjuster, Comparable, Serializable {
    get(temporalField: TemporalField): number;
    compareTo(instant: Instant): number;
    compareTo(object: any): number;
    getLong(temporalField: TemporalField): number;
    from(temporalAccessor: TemporalAccessor): Instant;
    now(): Instant;
    now(clock: Clock): Instant;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    parse(s: string): Instant;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    atOffset(zoneOffset: ZoneOffset): OffsetDateTime;
    atZone(zoneId: ZoneId): ZonedDateTime;
    isAfter(instant: Instant): boolean;
    isBefore(instant: Instant): boolean;
    getNano(): number;
    getEpochSecond(): number;
    ofEpochSecond(l: number, l: number): Instant;
    ofEpochSecond(l: number): Instant;
    ofEpochMilli(l: number): Instant;
    with(temporalAdjuster: TemporalAdjuster): Instant;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): Instant;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    toEpochMilli(): number;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Instant;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): Instant;
    plusMillis(l: number): Instant;
    plusNanos(l: number): Instant;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Instant;
    minus(temporalAmount: TemporalAmount): Instant;
    minusSeconds(l: number): Instant;
    minusMillis(l: number): Instant;
    minusNanos(l: number): Instant;
    truncatedTo(temporalUnit: TemporalUnit): Instant;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    plusSeconds(l: number): Instant;
    EPOCH: Instant;
    MIN: Instant;
    MAX: Instant;
}

// java.util.function.ToIntFunction
declare interface ToIntFunction {
    applyAsInt(object: any): number;
}

// java.awt.image.ImageObserver
declare interface ImageObserver {
    imageUpdate(image: Image, i: number, i: number, i: number, i: number, i: number): boolean;
    WIDTH: number;
    HEIGHT: number;
    PROPERTIES: number;
    SOMEBITS: number;
    FRAMEBITS: number;
    ALLBITS: number;
    ERROR: number;
    ABORT: number;
}

// java.net.http.HttpHeaders
declare interface HttpHeaders {
    map(): Map;
    of(map: Map, biPredicate: BiPredicate): HttpHeaders;
    firstValue(s: string): Optional;
    firstValueAsLong(s: string): OptionalLong;
    allValues(s: string): List;
}

// javax.net.ssl.SSLSessionContext
declare interface SSLSessionContext {
    getSession(b: number): SSLSession;
    getIds(): Enumeration;
    setSessionTimeout(i: number): void;
    getSessionTimeout(): number;
    setSessionCacheSize(i: number): void;
    getSessionCacheSize(): number;
}

// java.lang.reflect.Field
declare interface Field extends AccessibleObject, Member {
    get(object: any): any;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    getModifiers(): number;
    getBoolean(object: any): boolean;
    getByte(object: any): number;
    getShort(object: any): number;
    getChar(object: any): string;
    getInt(object: any): number;
    getLong(object: any): number;
    getFloat(object: any): number;
    getDouble(object: any): number;
    getName(): string;
    toGenericString(): string;
    isSynthetic(): boolean;
    getDeclaringClass(): Class;
    set(object: any, object: any): void;
    isEnumConstant(): boolean;
    getType(): Class;
    getGenericType(): Type;
    setBoolean(object: any, b: boolean): void;
    setByte(object: any, b: number): void;
    setChar(object: any, c: string): void;
    setShort(object: any, s: number): void;
    setInt(object: any, i: number): void;
    setLong(object: any, l: number): void;
    setFloat(object: any, f: number): void;
    setDouble(object: any, d: number): void;
    getAnnotatedType(): AnnotatedType;
}

// java.awt.color.ColorSpace
declare interface ColorSpace extends Serializable {
    getName(i: number): string;
    getInstance(i: number): ColorSpace;
    getType(): number;
    isCS_sRGB(): boolean;
    getMinValue(i: number): number;
    getMaxValue(i: number): number;
    getNumComponents(): number;
    fromRGB(f: number): number[];
    toRGB(f: number): number[];
    toCIEXYZ(f: number): number[];
    fromCIEXYZ(f: number): number[];
    TYPE_XYZ: number;
    TYPE_Lab: number;
    TYPE_Luv: number;
    TYPE_YCbCr: number;
    TYPE_Yxy: number;
    TYPE_RGB: number;
    TYPE_GRAY: number;
    TYPE_HSV: number;
    TYPE_HLS: number;
    TYPE_CMYK: number;
    TYPE_CMY: number;
    TYPE_2CLR: number;
    TYPE_3CLR: number;
    TYPE_4CLR: number;
    TYPE_5CLR: number;
    TYPE_6CLR: number;
    TYPE_7CLR: number;
    TYPE_8CLR: number;
    TYPE_9CLR: number;
    TYPE_ACLR: number;
    TYPE_BCLR: number;
    TYPE_CCLR: number;
    TYPE_DCLR: number;
    TYPE_ECLR: number;
    TYPE_FCLR: number;
    CS_sRGB: number;
    CS_LINEAR_RGB: number;
    CS_CIEXYZ: number;
    CS_PYCC: number;
    CS_GRAY: number;
}

// java.security.SecureRandom
declare interface SecureRandom extends Random {
    toString(): string;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters, s: string): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters, provider: Provider): SecureRandom;
    getInstance(s: string): SecureRandom;
    getInstance(s: string, s: string): SecureRandom;
    getInstance(s: string, provider: Provider): SecureRandom;
    getParameters(): SecureRandomParameters;
    getProvider(): Provider;
    nextBytes(b: number, secureRandomParameters: SecureRandomParameters): void;
    getAlgorithm(): string;
    generateSeed(i: number): number[];
    getInstanceStrong(): SecureRandom;
    reseed(): void;
    reseed(secureRandomParameters: SecureRandomParameters): void;
    getSeed(i: number): number[];
    setSeed(b: number): void;
}

// java.util.logging.Formatter
declare interface Formatter {
    format(logRecord: LogRecord): string;
    getHead(handler: Handler): string;
    getTail(handler: Handler): string;
    formatMessage(logRecord: LogRecord): string;
}

// java.security.Provider
declare interface Provider extends Properties {
    getName(): string;
    getVersion(): number;
    configure(s: string): Provider;
    isConfigured(): boolean;
    getVersionStr(): string;
    getInfo(): string;
    getServices(): Set;
    getService(s: string, s: string): Service;
}

// org.yaml.snakeyaml.constructor.BaseConstructor
declare interface BaseConstructor {
    getData(): any;
    checkData(): boolean;
    addTypeDescription(typeDescription: TypeDescription): TypeDescription;
    setComposer(composer: Composer): void;
    getSingleData(clazz: Class): any;
    getPropertyUtils(): PropertyUtils;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
    isExplicitPropertyUtils(): boolean;
    isWrappedToRootException(): boolean;
    setEnumCaseSensitive(b: boolean): void;
    setWrappedToRootException(b: boolean): void;
    isEnumCaseSensitive(): boolean;
    isAllowDuplicateKeys(): boolean;
    setAllowDuplicateKeys(b: boolean): void;
}

// java.lang.Thread$UncaughtExceptionHandler
declare interface UncaughtExceptionHandler {
    uncaughtException(thread: Thread, throwable: Throwable): void;
}

// java.lang.ThreadGroup
declare interface ThreadGroup extends UncaughtExceptionHandler {
    getName(): string;
    list(): void;
    getParent(): ThreadGroup;
    checkAccess(): void;
    setDaemon(b: boolean): void;
    stop(): void;
    interrupt(): void;
    suspend(): void;
    resume(): void;
    activeCount(): number;
    enumerate(threadGroup: ThreadGroup, b: boolean): number;
    enumerate(thread: Thread, b: boolean): number;
    enumerate(threadGroup: ThreadGroup): number;
    enumerate(thread: Thread): number;
    isDaemon(): boolean;
    getMaxPriority(): number;
    uncaughtException(thread: Thread, throwable: Throwable): void;
    isDestroyed(): boolean;
    setMaxPriority(i: number): void;
    parentOf(threadGroup: ThreadGroup): boolean;
    activeGroupCount(): number;
    destroy(): void;
    allowThreadSuspension(b: boolean): boolean;
}

// java.nio.charset.CharsetEncoder
declare interface CharsetEncoder {
    charset(): Charset;
    replacement(): number[];
    encode(s: string): ByteBuffer;
    encode(s: string, byteBuffer: ByteBuffer, b: boolean): CoderResult;
    canEncode(c: string): boolean;
    canEncode(s: string): boolean;
    flush(byteBuffer: ByteBuffer): CoderResult;
    reset(): CharsetEncoder;
    onMalformedInput(codingErrorAction: CodingErrorAction): CharsetEncoder;
    onUnmappableCharacter(codingErrorAction: CodingErrorAction): CharsetEncoder;
    isLegalReplacement(b: number): boolean;
    averageBytesPerChar(): number;
    maxBytesPerChar(): number;
    malformedInputAction(): CodingErrorAction;
    unmappableCharacterAction(): CodingErrorAction;
    replaceWith(b: number): CharsetEncoder;
}

// java.awt.PaintContext
declare interface PaintContext {
    dispose(): void;
    getColorModel(): ColorModel;
    getRaster(i: number, i: number, i: number, i: number): Raster;
}

// java.net.Proxy
declare interface Proxy {
    type(): Type;
    address(): SocketAddress;
    NO_PROXY: Proxy;
}

// org.yaml.snakeyaml.representer.SafeRepresenter
declare interface SafeRepresenter extends BaseRepresenter {
    getTimeZone(): TimeZone;
    setTimeZone(timeZone: TimeZone): void;
    addClassTag(clazz: Class, tag: Tag): Tag;
}

// java.io.ObjectInputFilter
declare interface ObjectInputFilter {
    checkInput(filterInfo: FilterInfo): Status;
}

// java.io.PrintStream
declare interface PrintStream extends FilterOutputStream, Appendable, Closeable {
    println(d: number): void;
    println(f: number): void;
    println(l: number): void;
    println(object: any): void;
    println(c: string): void;
    println(s: string): void;
    println(): void;
    println(b: boolean): void;
    println(c: string): void;
    println(i: number): void;
    append(s: string): Appendable;
    append(c: string): Appendable;
    append(c: string): PrintStream;
    append(s: string, i: number, i: number): Appendable;
    append(s: string, i: number, i: number): PrintStream;
    append(s: string): PrintStream;
    format(locale: Locale, s: string, object: any): PrintStream;
    format(s: string, object: any): PrintStream;
    print(b: boolean): void;
    print(i: number): void;
    print(d: number): void;
    print(f: number): void;
    print(object: any): void;
    print(s: string): void;
    print(c: string): void;
    print(c: string): void;
    print(l: number): void;
    checkError(): boolean;
    printf(s: string, object: any): PrintStream;
    printf(locale: Locale, s: string, object: any): PrintStream;
}

// java.net.ProxySelector
declare interface ProxySelector {
    getDefault(): ProxySelector;
    of(inetSocketAddress: InetSocketAddress): ProxySelector;
    select(uRI: URI): List;
    connectFailed(uRI: URI, socketAddress: SocketAddress, iOException: IOException): void;
    setDefault(proxySelector: ProxySelector): void;
}

// java.lang.StringBuffer
declare interface StringBuffer extends AbstractStringBuilder, Serializable, Comparable, CharSequence {
    compareTo(s: string): number;
    compareTo(object: any): number;
}

// java.util.concurrent.CompletionStage
declare interface CompletionStage {
    handle(biFunction: BiFunction): CompletionStage;
    thenApply(func: Function): CompletionStage;
    thenApplyAsync(func: Function, executor: Executor): CompletionStage;
    thenApplyAsync(func: Function): CompletionStage;
    thenAccept(consumer: Consumer): CompletionStage;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletionStage;
    thenAcceptAsync(consumer: Consumer): CompletionStage;
    thenRun(runnable: Runnable): CompletionStage;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletionStage;
    thenRunAsync(runnable: Runnable): CompletionStage;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletionStage;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    applyToEither(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletionStage;
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletionStage;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    thenCompose(func: Function): CompletionStage;
    thenComposeAsync(func: Function, executor: Executor): CompletionStage;
    thenComposeAsync(func: Function): CompletionStage;
    whenComplete(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer): CompletionStage;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletionStage;
    handleAsync(biFunction: BiFunction): CompletionStage;
    toCompletableFuture(): CompletableFuture;
    exceptionally(func: Function): CompletionStage;
}

// java.awt.image.TileObserver
declare interface TileObserver {
    tileUpdate(writableRenderedImage: WritableRenderedImage, i: number, i: number, b: boolean): void;
}

// java.io.Flushable
declare interface Flushable {
    flush(): void;
}

// java.time.Duration
declare interface Duration extends TemporalAmount, Comparable, Serializable {
    get(temporalUnit: TemporalUnit): number;
    abs(): Duration;
    compareTo(object: any): number;
    compareTo(duration: Duration): number;
    from(temporalAmount: TemporalAmount): Duration;
    of(l: number, temporalUnit: TemporalUnit): Duration;
    toNanos(): number;
    parse(s: string): Duration;
    toSeconds(): number;
    toMinutes(): number;
    toHours(): number;
    toDays(): number;
    getSeconds(): number;
    getNano(): number;
    toMillis(): number;
    isZero(): boolean;
    ofDays(l: number): Duration;
    ofHours(l: number): Duration;
    ofMinutes(l: number): Duration;
    ofSeconds(l: number, l: number): Duration;
    ofSeconds(l: number): Duration;
    ofMillis(l: number): Duration;
    ofNanos(l: number): Duration;
    between(temporal: Temporal, temporal: Temporal): Duration;
    getUnits(): List;
    isNegative(): boolean;
    withSeconds(l: number): Duration;
    withNanos(i: number): Duration;
    plus(l: number, temporalUnit: TemporalUnit): Duration;
    plus(duration: Duration): Duration;
    plusDays(l: number): Duration;
    plusHours(l: number): Duration;
    plusMinutes(l: number): Duration;
    plusMillis(l: number): Duration;
    plusNanos(l: number): Duration;
    minus(l: number, temporalUnit: TemporalUnit): Duration;
    minus(duration: Duration): Duration;
    minusDays(l: number): Duration;
    minusHours(l: number): Duration;
    minusMinutes(l: number): Duration;
    minusSeconds(l: number): Duration;
    minusMillis(l: number): Duration;
    minusNanos(l: number): Duration;
    multipliedBy(l: number): Duration;
    dividedBy(duration: Duration): number;
    dividedBy(l: number): Duration;
    negated(): Duration;
    subtractFrom(temporal: Temporal): Temporal;
    toDaysPart(): number;
    toHoursPart(): number;
    toMinutesPart(): number;
    toSecondsPart(): number;
    toMillisPart(): number;
    toNanosPart(): number;
    truncatedTo(temporalUnit: TemporalUnit): Duration;
    addTo(temporal: Temporal): Temporal;
    plusSeconds(l: number): Duration;
    ZERO: Duration;
}

// java.util.function.ToLongFunction
declare interface ToLongFunction {
    applyAsLong(object: any): number;
}

// java.net.URLStreamHandlerFactory
declare interface URLStreamHandlerFactory {
    createURLStreamHandler(s: string): URLStreamHandler;
}

// java.io.FileFilter
declare interface FileFilter {
    accept(file: File): boolean;
}

// java.net.http.HttpResponse$BodySubscriber
declare interface BodySubscriber extends Subscriber {
    getBody(): CompletionStage;
}

// java.util.ResourceBundle$Control
declare interface Control {
    getControl(list: List): Control;
    getCandidateLocales(s: string, locale: Locale): List;
    getNoFallbackControl(list: List): Control;
    getFormats(s: string): List;
    getFallbackLocale(s: string, locale: Locale): Locale;
    newBundle(s: string, locale: Locale, s: string, classLoader: ClassLoader, b: boolean): ResourceBundle;
    getTimeToLive(s: string, locale: Locale): number;
    needsReload(s: string, locale: Locale, s: string, classLoader: ClassLoader, resourceBundle: ResourceBundle, l: number): boolean;
    toBundleName(s: string, locale: Locale): string;
    toResourceName(s: string, s: string): string;
    FORMAT_DEFAULT: List;
    FORMAT_CLASS: List;
    FORMAT_PROPERTIES: List;
    TTL_DONT_CACHE: number;
    TTL_NO_EXPIRATION_CONTROL: number;
}

// java.util.logging.ErrorManager
declare interface ErrorManager {
    error(s: string, exception: Exception, i: number): void;
    GENERIC_FAILURE: number;
    WRITE_FAILURE: number;
    FLUSH_FAILURE: number;
    CLOSE_FAILURE: number;
    OPEN_FAILURE: number;
    FORMAT_FAILURE: number;
}

// java.lang.Module
declare interface Module extends AnnotatedElement {
    addReads(module: Module): Module;
    addExports(s: string, module: Module): Module;
    addOpens(s: string, module: Module): Module;
    addUses(clazz: Class): Module;
    getName(): string;
    getClassLoader(): ClassLoader;
    getResourceAsStream(s: string): InputStream;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getDescriptor(): ModuleDescriptor;
    isNamed(): boolean;
    isOpen(s: string): boolean;
    isOpen(s: string, module: Module): boolean;
    getPackages(): Set;
    getLayer(): ModuleLayer;
    canRead(module: Module): boolean;
    isExported(s: string): boolean;
    isExported(s: string, module: Module): boolean;
    canUse(clazz: Class): boolean;
}

// javax.net.ssl.SSLServerSocketFactory
declare interface SSLServerSocketFactory extends ServerSocketFactory {
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
}

// java.nio.file.WatchEvent$Kind
declare interface Kind {
    name(): string;
    type(): Class;
}

// java.io.FilenameFilter
declare interface FilenameFilter {
    accept(file: File, s: string): boolean;
}

// java.lang.Package
declare interface Package extends NamedPackage, AnnotatedElement {
    toString(): string;
    hashCode(): number;
    getName(): string;
    getPackage(s: string): Package;
    getAnnotation(clazz: Class): Annotation;
    isAnnotationPresent(clazz: Class): boolean;
    getAnnotationsByType(clazz: Class): Annotation[];
    getAnnotations(): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getPackages(): Package[];
    isSealed(uRL: URL): boolean;
    isSealed(): boolean;
    getSpecificationTitle(): string;
    getSpecificationVersion(): string;
    getSpecificationVendor(): string;
    getImplementationTitle(): string;
    getImplementationVersion(): string;
    getImplementationVendor(): string;
    isCompatibleWith(s: string): boolean;
}

// java.nio.charset.CharsetDecoder
declare interface CharsetDecoder {
    charset(): Charset;
    replacement(): string;
    decode(byteBuffer: ByteBuffer): string;
    decode(byteBuffer: ByteBuffer, s: string, b: boolean): CoderResult;
    flush(s: string): CoderResult;
    reset(): CharsetDecoder;
    onMalformedInput(codingErrorAction: CodingErrorAction): CharsetDecoder;
    onUnmappableCharacter(codingErrorAction: CodingErrorAction): CharsetDecoder;
    malformedInputAction(): CodingErrorAction;
    unmappableCharacterAction(): CodingErrorAction;
    replaceWith(s: string): CharsetDecoder;
    maxCharsPerByte(): number;
    averageCharsPerByte(): number;
    isAutoDetecting(): boolean;
    isCharsetDetected(): boolean;
    detectedCharset(): Charset;
}

// java.lang.reflect.Constructor
declare interface Constructor extends Executable {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    newInstance(object: any): any;
    setAccessible(b: boolean): void;
}

// java.net.CookieHandler
declare interface CookieHandler {
    get(uRI: URI, map: Map): Map;
    put(uRI: URI, map: Map): void;
    getDefault(): CookieHandler;
    setDefault(cookieHandler: CookieHandler): void;
}

// java.security.ProtectionDomain
declare interface ProtectionDomain {
    getClassLoader(): ClassLoader;
    getCodeSource(): CodeSource;
    getPrincipals(): Principal[];
    getPermissions(): PermissionCollection;
    staticPermissionsOnly(): boolean;
    implies(permission: Permission): boolean;
}

// javax.net.ssl.KeyManager
declare interface KeyManager {
}

// java.util.concurrent.ConcurrentMap
declare interface ConcurrentMap extends Map {
    remove(object: any, object: any): boolean;
    replace(object: any, object: any, object: any): boolean;
    replace(object: any, object: any): any;
    replaceAll(biFunction: BiFunction): void;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putIfAbsent(object: any, object: any): any;
    compute(object: any, biFunction: BiFunction): any;
    forEach(biConsumer: BiConsumer): void;
    computeIfAbsent(object: any, func: Function): any;
    getOrDefault(object: any, object: any): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
}

// net.md_5.bungee.api.chat.BaseComponent
declare interface BaseComponent {
    duplicate(): BaseComponent;
    setExtra(list: List): void;
    getExtra(): List;
    getColor(): ChatColor;
    setColor(chatColor: ChatColor): void;
    duplicateWithoutFormatting(): BaseComponent;
    isUnderlined(): boolean;
    isUnderlinedRaw(): Boolean;
    isStrikethrough(): boolean;
    getFont(): string;
    setItalic(boolean: Boolean): void;
    isItalicRaw(): Boolean;
    setObfuscated(boolean: Boolean): void;
    isStrikethroughRaw(): Boolean;
    isObfuscatedRaw(): Boolean;
    setFont(s: string): void;
    toLegacyText(baseComponent: BaseComponent): string;
    toLegacyText(): string;
    isItalic(): boolean;
    getFontRaw(): string;
    setStrikethrough(boolean: Boolean): void;
    getColorRaw(): ChatColor;
    isBoldRaw(): Boolean;
    hasFormatting(): boolean;
    retain(formatRetention: FormatRetention): void;
    setBold(boolean: Boolean): void;
    copyFormatting(baseComponent: BaseComponent, b: boolean): void;
    copyFormatting(baseComponent: BaseComponent): void;
    copyFormatting(baseComponent: BaseComponent, formatRetention: FormatRetention, b: boolean): void;
    setInsertion(s: string): void;
    toPlainText(): string;
    toPlainText(baseComponent: BaseComponent): string;
    isBold(): boolean;
    setClickEvent(clickEvent: ClickEvent): void;
    setHoverEvent(hoverEvent: HoverEvent): void;
    setUnderlined(boolean: Boolean): void;
    isObfuscated(): boolean;
    addExtra(s: string): void;
    addExtra(baseComponent: BaseComponent): void;
    getClickEvent(): ClickEvent;
    getHoverEvent(): HoverEvent;
    getInsertion(): string;
}

// java.util.Vector
declare interface Vector extends AbstractList, List, RandomAccess, Cloneable, Serializable {
    remove(object: any): boolean;
    toString(): string;
    clone(): any;
    indexOf(object: any, i: number): number;
    isEmpty(): boolean;
    lastIndexOf(object: any, i: number): number;
    contains(object: any): boolean;
    replaceAll(func: UnaryOperator): void;
    elements(): Enumeration;
    size(): number;
    toArray(object: any): any[];
    toArray(): any[];
    spliterator(): Spliterator;
    addAll(collection: Collection): boolean;
    addElement(object: any): void;
    forEach(consumer: Consumer): void;
    capacity(): number;
    ensureCapacity(i: number): void;
    trimToSize(): void;
    containsAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    removeAll(collection: Collection): boolean;
    removeIf(predicate: Predicate): boolean;
    sort(comparator: Comparator): void;
    elementAt(i: number): any;
    copyInto(object: any): void;
    setSize(i: number): void;
    firstElement(): any;
    lastElement(): any;
    setElementAt(object: any, i: number): void;
    removeElementAt(i: number): void;
    insertElementAt(object: any, i: number): void;
    removeElement(object: any): boolean;
    removeAllElements(): void;
}

// java.io.ObjectOutputStream$PutField
declare interface PutField {
    put(s: string, f: number): void;
    put(s: string, l: number): void;
    put(s: string, i: number): void;
    put(s: string, d: number): void;
    put(s: string, object: any): void;
    put(s: string, b: boolean): void;
    put(s: string, b: number): void;
    put(s: string, c: string): void;
    put(s: string, s: number): void;
    write(objectOutput: ObjectOutput): void;
}

// java.awt.Rectangle
declare interface Rectangle extends Rectangle2D, Shape, Serializable {
    add(rectangle: Rectangle): void;
    add(point: Point): void;
    add(i: number, i: number): void;
    toString(): string;
    isEmpty(): boolean;
    contains(point: Point): boolean;
    contains(i: number, i: number): boolean;
    contains(rectangle: Rectangle): boolean;
    contains(i: number, i: number, i: number, i: number): boolean;
    getLocation(): Point;
    getSize(): Dimension;
    resize(i: number, i: number): void;
    intersects(rectangle: Rectangle): boolean;
    grow(i: number, i: number): void;
    setSize(i: number, i: number): void;
    setSize(dimension: Dimension): void;
    union(rectangle: Rectangle): Rectangle;
    getBounds(): Rectangle;
    move(i: number, i: number): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setBounds(rectangle: Rectangle): void;
    reshape(i: number, i: number, i: number, i: number): void;
    setLocation(point: Point): void;
    setLocation(i: number, i: number): void;
    translate(i: number, i: number): void;
    inside(i: number, i: number): boolean;
    getY(): number;
    getX(): number;
    getHeight(): number;
    getWidth(): number;
    intersection(rectangle: Rectangle): Rectangle;
    x: number;
    y: number;
    width: number;
    height: number;
}

// java.net.http.HttpRequest$Builder
declare interface Builder {
    method(s: string, bodyPublisher: BodyPublisher): Builder;
    version(version: Version): Builder;
    uri(uRI: URI): Builder;
    copy(): Builder;
    GET(): Builder;
    build(): HttpRequest;
    timeout(duration: Duration): Builder;
    DELETE(): Builder;
    header(s: string, s: string): Builder;
    headers(s: string): Builder;
    expectContinue(b: boolean): Builder;
    setHeader(s: string, s: string): Builder;
    POST(bodyPublisher: BodyPublisher): Builder;
    PUT(bodyPublisher: BodyPublisher): Builder;
}

// java.awt.RenderingHints
declare interface RenderingHints extends Map, Cloneable {
    add(renderingHints: RenderingHints): void;
    remove(object: any): any;
    get(object: any): any;
    put(object: any, object: any): any;
    values(): Collection;
    clear(): void;
    isEmpty(): boolean;
    size(): number;
    entrySet(): Set;
    putAll(map: Map): void;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    keySet(): Set;
    KEY_ANTIALIASING: Key;
    VALUE_ANTIALIAS_ON: any;
    VALUE_ANTIALIAS_OFF: any;
    VALUE_ANTIALIAS_DEFAULT: any;
    KEY_RENDERING: Key;
    VALUE_RENDER_SPEED: any;
    VALUE_RENDER_QUALITY: any;
    VALUE_RENDER_DEFAULT: any;
    KEY_DITHERING: Key;
    VALUE_DITHER_DISABLE: any;
    VALUE_DITHER_ENABLE: any;
    VALUE_DITHER_DEFAULT: any;
    KEY_TEXT_ANTIALIASING: Key;
    VALUE_TEXT_ANTIALIAS_ON: any;
    VALUE_TEXT_ANTIALIAS_OFF: any;
    VALUE_TEXT_ANTIALIAS_DEFAULT: any;
    VALUE_TEXT_ANTIALIAS_GASP: any;
    VALUE_TEXT_ANTIALIAS_LCD_HRGB: any;
    VALUE_TEXT_ANTIALIAS_LCD_HBGR: any;
    VALUE_TEXT_ANTIALIAS_LCD_VRGB: any;
    VALUE_TEXT_ANTIALIAS_LCD_VBGR: any;
    KEY_TEXT_LCD_CONTRAST: Key;
    KEY_FRACTIONALMETRICS: Key;
    VALUE_FRACTIONALMETRICS_OFF: any;
    VALUE_FRACTIONALMETRICS_ON: any;
    VALUE_FRACTIONALMETRICS_DEFAULT: any;
    KEY_INTERPOLATION: Key;
    VALUE_INTERPOLATION_NEAREST_NEIGHBOR: any;
    VALUE_INTERPOLATION_BILINEAR: any;
    VALUE_INTERPOLATION_BICUBIC: any;
    KEY_ALPHA_INTERPOLATION: Key;
    VALUE_ALPHA_INTERPOLATION_SPEED: any;
    VALUE_ALPHA_INTERPOLATION_QUALITY: any;
    VALUE_ALPHA_INTERPOLATION_DEFAULT: any;
    KEY_COLOR_RENDERING: Key;
    VALUE_COLOR_RENDER_SPEED: any;
    VALUE_COLOR_RENDER_QUALITY: any;
    VALUE_COLOR_RENDER_DEFAULT: any;
    KEY_STROKE_CONTROL: Key;
    VALUE_STROKE_DEFAULT: any;
    VALUE_STROKE_NORMALIZE: any;
    VALUE_STROKE_PURE: any;
    KEY_RESOLUTION_VARIANT: Key;
    VALUE_RESOLUTION_VARIANT_DEFAULT: any;
    VALUE_RESOLUTION_VARIANT_BASE: any;
    VALUE_RESOLUTION_VARIANT_SIZE_FIT: any;
    VALUE_RESOLUTION_VARIANT_DPI_FIT: any;
}

// java.net.SocketAddress
declare interface SocketAddress extends Serializable {
}

// java.lang.ClassLoader
declare interface ClassLoader {
    loadClass(s: string): Class;
    getPlatformClassLoader(): ClassLoader;
    getSystemClassLoader(): ClassLoader;
    getName(): string;
    getResourceAsStream(s: string): InputStream;
    getResource(s: string): URL;
    getSystemResourceAsStream(s: string): InputStream;
    getSystemResource(s: string): URL;
    getResources(s: string): Enumeration;
    resources(s: string): Stream;
    isRegisteredAsParallelCapable(): boolean;
    getSystemResources(s: string): Enumeration;
    getParent(): ClassLoader;
    getUnnamedModule(): Module;
    getDefinedPackage(s: string): Package;
    getDefinedPackages(): Package[];
    setDefaultAssertionStatus(b: boolean): void;
    setPackageAssertionStatus(s: string, b: boolean): void;
    setClassAssertionStatus(s: string, b: boolean): void;
    clearAssertionStatus(): void;
}

// net.md_5.bungee.api.ChatMessageType
declare enum ChatMessageType {
    CHAT,
    SYSTEM,
    ACTION_BAR,
}

// java.awt.geom.AffineTransform
declare interface AffineTransform extends Cloneable, Serializable {
    getType(): number;
    isIdentity(): boolean;
    scale(d: number, d: number): void;
    rotate(d: number, d: number, d: number, d: number): void;
    rotate(d: number, d: number): void;
    rotate(d: number, d: number, d: number): void;
    rotate(d: number): void;
    transform(f: number, i: number, d: number, i: number, i: number): void;
    transform(d: number, i: number, d: number, i: number, i: number): void;
    transform(d: number, i: number, f: number, i: number, i: number): void;
    transform(point2D: Point2D, i: number, point2D: Point2D, i: number, i: number): void;
    transform(point2D: Point2D, point2D: Point2D): Point2D;
    transform(f: number, i: number, f: number, i: number, i: number): void;
    getTranslateInstance(d: number, d: number): AffineTransform;
    getRotateInstance(d: number): AffineTransform;
    getRotateInstance(d: number, d: number, d: number): AffineTransform;
    getRotateInstance(d: number, d: number): AffineTransform;
    getRotateInstance(d: number, d: number, d: number, d: number): AffineTransform;
    getQuadrantRotateInstance(i: number): AffineTransform;
    getQuadrantRotateInstance(i: number, d: number, d: number): AffineTransform;
    getScaleInstance(d: number, d: number): AffineTransform;
    getShearInstance(d: number, d: number): AffineTransform;
    getDeterminant(): number;
    getScaleX(): number;
    getScaleY(): number;
    getShearX(): number;
    getShearY(): number;
    getTranslateX(): number;
    getTranslateY(): number;
    quadrantRotate(i: number): void;
    quadrantRotate(i: number, d: number, d: number): void;
    setToIdentity(): void;
    setToTranslation(d: number, d: number): void;
    setToRotation(d: number): void;
    setToRotation(d: number, d: number): void;
    setToRotation(d: number, d: number, d: number): void;
    setToRotation(d: number, d: number, d: number, d: number): void;
    setToQuadrantRotation(i: number, d: number, d: number): void;
    setToQuadrantRotation(i: number): void;
    setToScale(d: number, d: number): void;
    setToShear(d: number, d: number): void;
    concatenate(affineTransform: AffineTransform): void;
    preConcatenate(affineTransform: AffineTransform): void;
    createInverse(): AffineTransform;
    inverseTransform(d: number, i: number, d: number, i: number, i: number): void;
    inverseTransform(point2D: Point2D, point2D: Point2D): Point2D;
    deltaTransform(point2D: Point2D, point2D: Point2D): Point2D;
    deltaTransform(d: number, i: number, d: number, i: number, i: number): void;
    createTransformedShape(shape: Shape): Shape;
    translate(d: number, d: number): void;
    setTransform(d: number, d: number, d: number, d: number, d: number, d: number): void;
    setTransform(affineTransform: AffineTransform): void;
    shear(d: number, d: number): void;
    getMatrix(d: number): void;
    invert(): void;
    TYPE_IDENTITY: number;
    TYPE_TRANSLATION: number;
    TYPE_UNIFORM_SCALE: number;
    TYPE_GENERAL_SCALE: number;
    TYPE_MASK_SCALE: number;
    TYPE_FLIP: number;
    TYPE_QUADRANT_ROTATION: number;
    TYPE_GENERAL_ROTATION: number;
    TYPE_MASK_ROTATION: number;
    TYPE_GENERAL_TRANSFORM: number;
}

// java.awt.Point
declare interface Point extends Point2D, Serializable {
    toString(): string;
    getLocation(): Point;
    move(i: number, i: number): void;
    setLocation(point: Point): void;
    setLocation(i: number, i: number): void;
    translate(i: number, i: number): void;
    x: number;
    y: number;
}

// java.awt.Graphics
declare interface Graphics {
    create(): Graphics;
    create(i: number, i: number, i: number, i: number): Graphics;
    dispose(): void;
    translate(i: number, i: number): void;
    setPaintMode(): void;
    setXORMode(color: Color): void;
    getFontMetrics(): FontMetrics;
    getFontMetrics(font: Font): FontMetrics;
    getClipBounds(rectangle: Rectangle): Rectangle;
    getClipBounds(): Rectangle;
    clipRect(i: number, i: number, i: number, i: number): void;
    setClip(shape: Shape): void;
    setClip(i: number, i: number, i: number, i: number): void;
    getClip(): Shape;
    copyArea(i: number, i: number, i: number, i: number, i: number, i: number): void;
    drawLine(i: number, i: number, i: number, i: number): void;
    fillRect(i: number, i: number, i: number, i: number): void;
    drawRect(i: number, i: number, i: number, i: number): void;
    clearRect(i: number, i: number, i: number, i: number): void;
    drawRoundRect(i: number, i: number, i: number, i: number, i: number, i: number): void;
    fillRoundRect(i: number, i: number, i: number, i: number, i: number, i: number): void;
    draw3DRect(i: number, i: number, i: number, i: number, b: boolean): void;
    fill3DRect(i: number, i: number, i: number, i: number, b: boolean): void;
    drawOval(i: number, i: number, i: number, i: number): void;
    fillOval(i: number, i: number, i: number, i: number): void;
    drawArc(i: number, i: number, i: number, i: number, i: number, i: number): void;
    fillArc(i: number, i: number, i: number, i: number, i: number, i: number): void;
    drawPolyline(i: number, i: number, i: number): void;
    drawPolygon(polygon: Polygon): void;
    drawPolygon(i: number, i: number, i: number): void;
    fillPolygon(polygon: Polygon): void;
    fillPolygon(i: number, i: number, i: number): void;
    drawString(attributedCharacterIterator: AttributedCharacterIterator, i: number, i: number): void;
    drawString(s: string, i: number, i: number): void;
    drawChars(c: string, i: number, i: number, i: number, i: number): void;
    drawBytes(b: number, i: number, i: number, i: number, i: number): void;
    getClipRect(): Rectangle;
    hitClip(i: number, i: number, i: number, i: number): boolean;
    getColor(): Color;
    setColor(color: Color): void;
    drawImage(image: Image, i: number, i: number, i: number, i: number, i: number, i: number, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, i: number, i: number, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    getFont(): Font;
    setFont(font: Font): void;
}

// java.util.Locale
declare interface Locale extends Cloneable, Serializable {
    getDefault(category: Category): Locale;
    getDefault(): Locale;
    filter(list: List, collection: Collection, filteringMode: FilteringMode): List;
    filter(list: List, collection: Collection): List;
    lookup(list: List, collection: Collection): Locale;
    getLanguage(): string;
    setDefault(category: Category, locale: Locale): void;
    setDefault(locale: Locale): void;
    getAvailableLocales(): Locale[];
    getISOCountries(isoCountryCode: IsoCountryCode): Set;
    getISOCountries(): string[];
    getISOLanguages(): string[];
    getScript(): string;
    getCountry(): string;
    getVariant(): string;
    hasExtensions(): boolean;
    stripExtensions(): Locale;
    getExtension(c: string): string;
    getExtensionKeys(): Set;
    getUnicodeLocaleAttributes(): Set;
    getUnicodeLocaleType(s: string): string;
    getUnicodeLocaleKeys(): Set;
    toLanguageTag(): string;
    forLanguageTag(s: string): Locale;
    getISO3Language(): string;
    getISO3Country(): string;
    getDisplayLanguage(): string;
    getDisplayLanguage(locale: Locale): string;
    getDisplayScript(): string;
    getDisplayScript(locale: Locale): string;
    getDisplayCountry(locale: Locale): string;
    getDisplayCountry(): string;
    getDisplayVariant(): string;
    getDisplayVariant(locale: Locale): string;
    getDisplayName(): string;
    getDisplayName(locale: Locale): string;
    filterTags(list: List, collection: Collection): List;
    filterTags(list: List, collection: Collection, filteringMode: FilteringMode): List;
    lookupTag(list: List, collection: Collection): string;
    ENGLISH: Locale;
    FRENCH: Locale;
    GERMAN: Locale;
    ITALIAN: Locale;
    JAPANESE: Locale;
    KOREAN: Locale;
    CHINESE: Locale;
    SIMPLIFIED_CHINESE: Locale;
    TRADITIONAL_CHINESE: Locale;
    FRANCE: Locale;
    GERMANY: Locale;
    ITALY: Locale;
    JAPAN: Locale;
    KOREA: Locale;
    CHINA: Locale;
    PRC: Locale;
    TAIWAN: Locale;
    UK: Locale;
    US: Locale;
    CANADA: Locale;
    CANADA_FRENCH: Locale;
    ROOT: Locale;
    PRIVATE_USE_EXTENSION: string;
    UNICODE_LOCALE_EXTENSION: string;
}

// java.io.ObjectInputStream$GetField
declare interface GetField {
    get(s: string, l: number): number;
    get(s: string, i: number): number;
    get(s: string, s: number): number;
    get(s: string, f: number): number;
    get(s: string, d: number): number;
    get(s: string, object: any): any;
    get(s: string, b: boolean): boolean;
    get(s: string, b: number): number;
    get(s: string, c: string): string;
    defaulted(s: string): boolean;
    getObjectStreamClass(): ObjectStreamClass;
}

// java.awt.Transparency
declare interface Transparency {
    getTransparency(): number;
    OPAQUE: number;
    BITMASK: number;
    TRANSLUCENT: number;
}

// java.util.concurrent.TimeUnit
declare enum TimeUnit {
    NANOSECONDS,
    MICROSECONDS,
    MILLISECONDS,
    SECONDS,
    MINUTES,
    HOURS,
    DAYS,
}

// java.lang.StackTraceElement
declare interface StackTraceElement extends Serializable {
    getFileName(): string;
    getLineNumber(): number;
    getModuleName(): string;
    getModuleVersion(): string;
    getClassLoaderName(): string;
    getClassName(): string;
    getMethodName(): string;
    isNativeMethod(): boolean;
}

// javax.net.ssl.TrustManager
declare interface TrustManager {
}

// java.nio.file.WatchKey
declare interface WatchKey {
    reset(): boolean;
    isValid(): boolean;
    pollEvents(): List;
    watchable(): Watchable;
    cancel(): void;
}

// java.util.stream.Stream
declare interface Stream extends BaseStream {
    min(comparator: Comparator): Optional;
    max(comparator: Comparator): Optional;
    count(): number;
    builder(): Builder;
    concat(stream: Stream, stream: Stream): Stream;
    limit(l: number): Stream;
    toArray(): any[];
    toArray(intFunction: IntFunction): any[];
    empty(): Stream;
    filter(predicate: Predicate): Stream;
    collect(collector: Collector): any;
    collect(supplier: Supplier, biConsumer: BiConsumer, biConsumer: BiConsumer): any;
    map(func: Function): Stream;
    of(object: any): Stream;
    of(object: any): Stream;
    flatMap(func: Function): Stream;
    forEach(consumer: Consumer): void;
    findAny(): Optional;
    skip(l: number): Stream;
    peek(consumer: Consumer): Stream;
    reduce(object: any, binaryOperator: BinaryOperator): any;
    reduce(object: any, biFunction: BiFunction, binaryOperator: BinaryOperator): any;
    reduce(binaryOperator: BinaryOperator): Optional;
    iterate(object: any, predicate: Predicate, func: UnaryOperator): Stream;
    iterate(object: any, func: UnaryOperator): Stream;
    forEachOrdered(consumer: Consumer): void;
    mapToInt(toIntFunction: ToIntFunction): IntStream;
    mapToLong(toLongFunction: ToLongFunction): LongStream;
    mapToDouble(toDoubleFunction: ToDoubleFunction): DoubleStream;
    flatMapToInt(func: Function): IntStream;
    flatMapToDouble(func: Function): DoubleStream;
    flatMapToLong(func: Function): LongStream;
    sorted(): Stream;
    sorted(comparator: Comparator): Stream;
    takeWhile(predicate: Predicate): Stream;
    dropWhile(predicate: Predicate): Stream;
    anyMatch(predicate: Predicate): boolean;
    allMatch(predicate: Predicate): boolean;
    noneMatch(predicate: Predicate): boolean;
    findFirst(): Optional;
    generate(supplier: Supplier): Stream;
    distinct(): Stream;
    ofNullable(object: any): Stream;
}

// java.awt.Paint
declare interface Paint extends Transparency {
    createContext(colorModel: ColorModel, rectangle: Rectangle, rectangle2D: Rectangle2D, affineTransform: AffineTransform, renderingHints: RenderingHints): PaintContext;
}

// javax.net.ssl.SSLEngineResult$HandshakeStatus
declare enum HandshakeStatus {
    NOT_HANDSHAKING,
    FINISHED,
    NEED_TASK,
    NEED_WRAP,
    NEED_UNWRAP,
    NEED_UNWRAP_AGAIN,
}

// java.security.SecureRandomParameters
declare interface SecureRandomParameters {
}

// java.awt.image.RenderedImage
declare interface RenderedImage {
    getProperty(s: string): any;
    getData(): Raster;
    getData(rectangle: Rectangle): Raster;
    getSources(): Vector;
    getColorModel(): ColorModel;
    getPropertyNames(): string[];
    getSampleModel(): SampleModel;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getTileWidth(): number;
    getTileHeight(): number;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTile(i: number, i: number): Raster;
    copyData(writableRaster: WritableRaster): WritableRaster;
    getHeight(): number;
    getWidth(): number;
    getMinX(): number;
    getMinY(): number;
}

// org.yaml.snakeyaml.introspector.BeanAccess
declare enum BeanAccess {
    DEFAULT,
    FIELD,
    PROPERTY,
}

// java.io.ObjectInputFilter$Status
declare enum Status {
    UNDECIDED,
    ALLOWED,
    REJECTED,
}

// java.time.temporal.TemporalAdjuster
declare interface TemporalAdjuster {
    adjustInto(temporal: Temporal): Temporal;
}

// java.nio.DoubleBuffer
declare interface DoubleBuffer extends Buffer, Comparable {
    get(d: number, i: number, i: number): DoubleBuffer;
    get(i: number): number;
    get(): number;
    get(d: number): DoubleBuffer;
    put(d: number): DoubleBuffer;
    put(d: number, i: number, i: number): DoubleBuffer;
    put(doubleBuffer: DoubleBuffer): DoubleBuffer;
    put(i: number, d: number): DoubleBuffer;
    put(d: number): DoubleBuffer;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(doubleBuffer: DoubleBuffer): number;
    wrap(d: number): DoubleBuffer;
    wrap(d: number, i: number, i: number): DoubleBuffer;
    allocate(i: number): DoubleBuffer;
    mismatch(doubleBuffer: DoubleBuffer): number;
    asReadOnlyBuffer(): DoubleBuffer;
    compact(): DoubleBuffer;
    order(): ByteOrder;
}

// java.util.Properties
declare interface Properties extends Hashtable {
    getProperty(s: string): string;
    getProperty(s: string, s: string): string;
    list(printStream: PrintStream): void;
    list(printWriter: PrintWriter): void;
    setProperty(s: string, s: string): any;
    load(reader: Reader): void;
    load(inputStream: InputStream): void;
    save(outputStream: OutputStream, s: string): void;
    store(outputStream: OutputStream, s: string): void;
    store(writer: Writer, s: string): void;
    loadFromXML(inputStream: InputStream): void;
    storeToXML(outputStream: OutputStream, s: string): void;
    storeToXML(outputStream: OutputStream, s: string, charset: Charset): void;
    storeToXML(outputStream: OutputStream, s: string, s: string): void;
    propertyNames(): Enumeration;
    stringPropertyNames(): Set;
}

// java.time.temporal.TemporalAmount
declare interface TemporalAmount {
    get(temporalUnit: TemporalUnit): number;
    getUnits(): List;
    subtractFrom(temporal: Temporal): Temporal;
    addTo(temporal: Temporal): Temporal;
}

// java.lang.AbstractStringBuilder
declare interface AbstractStringBuilder extends Appendable, CharSequence {
    length(): number;
    append(c: string): string;
    append(s: string, i: number, i: number): string;
    append(s: string): string;
    append(object: any): string;
    append(s: string): string;
    append(s: string): string;
    append(i: number): string;
    append(l: number): string;
    append(f: number): string;
    append(d: number): string;
    append(c: string): string;
    append(b: boolean): string;
    append(c: string, i: number, i: number): string;
    append(c: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    append(s: string): Appendable;
    getChars(i: number, i: number, c: string, i: number): void;
    indexOf(s: string, i: number): number;
    indexOf(s: string): number;
    codePoints(): IntStream;
    charAt(i: number): string;
    codePointAt(i: number): number;
    codePointBefore(i: number): number;
    codePointCount(i: number, i: number): number;
    offsetByCodePoints(i: number, i: number): number;
    lastIndexOf(s: string, i: number): number;
    lastIndexOf(s: string): number;
    substring(i: number, i: number): string;
    substring(i: number): string;
    subSequence(i: number, i: number): string;
    replace(i: number, i: number, s: string): string;
    chars(): IntStream;
    delete(i: number, i: number): string;
    setLength(i: number): void;
    insert(i: number, d: number): string;
    insert(i: number, f: number): string;
    insert(i: number, i: number): string;
    insert(i: number, b: boolean): string;
    insert(i: number, s: string, i: number, i: number): string;
    insert(i: number, s: string): string;
    insert(i: number, c: string): string;
    insert(i: number, s: string): string;
    insert(i: number, object: any): string;
    insert(i: number, c: string, i: number, i: number): string;
    insert(i: number, l: number): string;
    insert(i: number, c: string): string;
    capacity(): number;
    ensureCapacity(i: number): void;
    trimToSize(): void;
    setCharAt(i: number, c: string): void;
    appendCodePoint(i: number): string;
    deleteCharAt(i: number): string;
    reverse(): string;
}

// java.awt.geom.RectangularShape
declare interface RectangularShape extends Shape, Cloneable {
    isEmpty(): boolean;
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    getBounds(): Rectangle;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    setFrame(d: number, d: number, d: number, d: number): void;
    setFrame(rectangle2D: Rectangle2D): void;
    setFrame(point2D: Point2D, dimension2D: Dimension2D): void;
    setFrameFromDiagonal(point2D: Point2D, point2D: Point2D): void;
    setFrameFromDiagonal(d: number, d: number, d: number, d: number): void;
    getFrame(): Rectangle2D;
    setFrameFromCenter(d: number, d: number, d: number, d: number): void;
    setFrameFromCenter(point2D: Point2D, point2D: Point2D): void;
    getY(): number;
    getX(): number;
    getHeight(): number;
    getWidth(): number;
    getCenterX(): number;
    getMaxY(): number;
    getCenterY(): number;
    getMaxX(): number;
    getMinX(): number;
    getMinY(): number;
}

// java.lang.module.ModuleDescriptor
declare interface ModuleDescriptor extends Comparable {
    modifiers(): Set;
    name(): string;
    version(): Optional;
    compareTo(moduleDescriptor: ModuleDescriptor): number;
    compareTo(object: any): number;
    packages(): Set;
    isOpen(): boolean;
    read(inputStream: InputStream): ModuleDescriptor;
    read(inputStream: InputStream, supplier: Supplier): ModuleDescriptor;
    read(byteBuffer: ByteBuffer): ModuleDescriptor;
    read(byteBuffer: ByteBuffer, supplier: Supplier): ModuleDescriptor;
    exports(): Set;
    opens(): Set;
    isAutomatic(): boolean;
    uses(): Set;
    provides(): Set;
    requires(): Set;
    mainClass(): Optional;
    rawVersion(): Optional;
    toNameAndVersion(): string;
    newModule(s: string, set: Set): Builder;
    newModule(s: string): Builder;
    newOpenModule(s: string): Builder;
    newAutomaticModule(s: string): Builder;
}

// java.time.temporal.TemporalField
declare interface TemporalField {
    toString(): string;
    resolve(map: Map, temporalAccessor: TemporalAccessor, resolverStyle: ResolverStyle): TemporalAccessor;
    range(): ValueRange;
    adjustInto(temporal: Temporal, l: number): Temporal;
    isSupportedBy(temporalAccessor: TemporalAccessor): boolean;
    isTimeBased(): boolean;
    rangeRefinedBy(temporalAccessor: TemporalAccessor): ValueRange;
    getBaseUnit(): TemporalUnit;
    getRangeUnit(): TemporalUnit;
    isDateBased(): boolean;
    getDisplayName(locale: Locale): string;
    getFrom(temporalAccessor: TemporalAccessor): number;
}

// java.nio.charset.CodingErrorAction
declare interface CodingErrorAction {
    IGNORE: CodingErrorAction;
    REPLACE: CodingErrorAction;
    REPORT: CodingErrorAction;
}

// java.util.function.LongToDoubleFunction
declare interface LongToDoubleFunction {
    applyAsDouble(l: number): number;
}

// org.yaml.snakeyaml.representer.BaseRepresenter
declare interface BaseRepresenter {
    getPropertyUtils(): PropertyUtils;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
    represent(object: any): Node;
    setDefaultFlowStyle(flowStyle: FlowStyle): void;
    getDefaultFlowStyle(): FlowStyle;
    isExplicitPropertyUtils(): boolean;
    setDefaultScalarStyle(scalarStyle: ScalarStyle): void;
    getDefaultScalarStyle(): ScalarStyle;
}

// java.awt.RenderingHints$Key
declare interface Key {
    isCompatibleValue(object: any): boolean;
}

// java.util.function.LongPredicate
declare interface LongPredicate {
    test(l: number): boolean;
    or(longPredicate: LongPredicate): LongPredicate;
    and(longPredicate: LongPredicate): LongPredicate;
    negate(): LongPredicate;
}

// java.net.ContentHandlerFactory
declare interface ContentHandlerFactory {
    createContentHandler(s: string): ContentHandler;
}

// java.util.OptionalLong
declare interface OptionalLong {
    isEmpty(): boolean;
    empty(): OptionalLong;
    stream(): LongStream;
    of(l: number): OptionalLong;
    isPresent(): boolean;
    orElse(l: number): number;
    orElseThrow(supplier: Supplier): number;
    orElseThrow(): number;
    ifPresent(longConsumer: LongConsumer): void;
    ifPresentOrElse(longConsumer: LongConsumer, runnable: Runnable): void;
    orElseGet(longSupplier: LongSupplier): number;
    getAsLong(): number;
}

// net.md_5.bungee.api.ChatColor
declare interface ChatColor {
    name(): string;
    values(): ChatColor[];
    valueOf(s: string): ChatColor;
    getName(): string;
    of(color: Color): ChatColor;
    of(s: string): ChatColor;
    ordinal(): number;
    translateAlternateColorCodes(c: string, s: string): string;
    getByChar(c: string): ChatColor;
    stripColor(s: string): string;
    getColor(): Color;
    COLOR_CHAR: string;
    ALL_CODES: string;
    STRIP_COLOR_PATTERN: Pattern;
    BLACK: ChatColor;
    DARK_BLUE: ChatColor;
    DARK_GREEN: ChatColor;
    DARK_AQUA: ChatColor;
    DARK_RED: ChatColor;
    DARK_PURPLE: ChatColor;
    GOLD: ChatColor;
    GRAY: ChatColor;
    DARK_GRAY: ChatColor;
    BLUE: ChatColor;
    GREEN: ChatColor;
    AQUA: ChatColor;
    RED: ChatColor;
    LIGHT_PURPLE: ChatColor;
    YELLOW: ChatColor;
    WHITE: ChatColor;
    MAGIC: ChatColor;
    BOLD: ChatColor;
    STRIKETHROUGH: ChatColor;
    UNDERLINE: ChatColor;
    ITALIC: ChatColor;
    RESET: ChatColor;
}

// java.lang.NamedPackage
declare interface NamedPackage {
}

// java.util.function.DoubleToIntFunction
declare interface DoubleToIntFunction {
    applyAsInt(d: number): number;
}

// org.yaml.snakeyaml.nodes.Node
declare interface Node {
    getType(): Class;
    isResolved(): boolean;
    setType(clazz: Class): void;
    getTag(): Tag;
    getStartMark(): Mark;
    getNodeId(): NodeId;
    setTag(tag: Tag): void;
    useClassConstructor(): boolean;
    isTwoStepsConstruction(): boolean;
    setUseClassConstructor(boolean: Boolean): void;
    setTwoStepsConstruction(b: boolean): void;
    getAnchor(): string;
    setInLineComments(list: List): void;
    getBlockComments(): List;
    getEndMark(): Mark;
    setAnchor(s: string): void;
    getInLineComments(): List;
    setBlockComments(list: List): void;
    getEndComments(): List;
    setEndComments(list: List): void;
}

// java.util.function.IntPredicate
declare interface IntPredicate {
    test(i: number): boolean;
    or(intPredicate: IntPredicate): IntPredicate;
    and(intPredicate: IntPredicate): IntPredicate;
    negate(): IntPredicate;
}

// java.nio.IntBuffer
declare interface IntBuffer extends Buffer, Comparable {
    get(i: number, i: number, i: number): IntBuffer;
    get(i: number): number;
    get(): number;
    get(i: number): IntBuffer;
    put(i: number): IntBuffer;
    put(i: number, i: number, i: number): IntBuffer;
    put(intBuffer: IntBuffer): IntBuffer;
    put(i: number, i: number): IntBuffer;
    put(i: number): IntBuffer;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(intBuffer: IntBuffer): number;
    wrap(i: number): IntBuffer;
    wrap(i: number, i: number, i: number): IntBuffer;
    allocate(i: number): IntBuffer;
    mismatch(intBuffer: IntBuffer): number;
    asReadOnlyBuffer(): IntBuffer;
    compact(): IntBuffer;
    order(): ByteOrder;
}

// org.yaml.snakeyaml.introspector.PropertySubstitute
declare interface PropertySubstitute extends Property {
    setDelegate(property: Property): void;
    setActualTypeArguments(clazz: Class): void;
    setTargetType(clazz: Class): void;
}

// java.time.Clock
declare interface Clock {
    offset(clock: Clock, duration: Duration): Clock;
    millis(): number;
    system(zoneId: ZoneId): Clock;
    fixed(instant: Instant, zoneId: ZoneId): Clock;
    systemUTC(): Clock;
    instant(): Instant;
    systemDefaultZone(): Clock;
    tickMillis(zoneId: ZoneId): Clock;
    tickSeconds(zoneId: ZoneId): Clock;
    tickMinutes(zoneId: ZoneId): Clock;
    withZone(zoneId: ZoneId): Clock;
    getZone(): ZoneId;
    tick(clock: Clock, duration: Duration): Clock;
}

// java.awt.GraphicsDevice
declare interface GraphicsDevice {
    getType(): number;
    getIDstring(): string;
    getConfigurations(): GraphicsConfiguration[];
    getDefaultConfiguration(): GraphicsConfiguration;
    getBestConfiguration(graphicsConfigTemplate: GraphicsConfigTemplate): GraphicsConfiguration;
    isFullScreenSupported(): boolean;
    setFullScreenWindow(window: Window): void;
    getFullScreenWindow(): Window;
    isDisplayChangeSupported(): boolean;
    setDisplayMode(displayMode: DisplayMode): void;
    getDisplayMode(): DisplayMode;
    getDisplayModes(): DisplayMode[];
    getAvailableAcceleratedMemory(): number;
    isWindowTranslucencySupported(windowTranslucency: WindowTranslucency): boolean;
    TYPE_RASTER_SCREEN: number;
    TYPE_PRINTER: number;
    TYPE_IMAGE_BUFFER: number;
}

// java.io.DataOutput
declare interface DataOutput {
    write(b: number, i: number, i: number): void;
    write(b: number): void;
    write(i: number): void;
    writeInt(i: number): void;
    writeBytes(s: string): void;
    writeUTF(s: string): void;
    writeFloat(f: number): void;
    writeChar(i: number): void;
    writeBoolean(b: boolean): void;
    writeByte(i: number): void;
    writeShort(i: number): void;
    writeLong(l: number): void;
    writeDouble(d: number): void;
    writeChars(s: string): void;
}

// java.lang.reflect.Executable
declare interface Executable extends AccessibleObject, Member, GenericDeclaration {
    getModifiers(): number;
    getName(): string;
    toGenericString(): string;
    isSynthetic(): boolean;
    getTypeParameters(): TypeVariable[];
    getDeclaringClass(): Class;
    getParameterTypes(): Class[];
    isVarArgs(): boolean;
    getAnnotatedParameterTypes(): AnnotatedType[];
    getParameterCount(): number;
    getParameterAnnotations(): Annotation[][];
    getGenericParameterTypes(): Type[];
    getExceptionTypes(): Class[];
    getGenericExceptionTypes(): Type[];
    getAnnotatedReturnType(): AnnotatedType;
    getParameters(): Parameter[];
    getAnnotatedReceiverType(): AnnotatedType;
    getAnnotatedExceptionTypes(): AnnotatedType[];
}

// java.io.ObjectStreamClass
declare interface ObjectStreamClass extends Serializable {
    getName(): string;
    getFields(): ObjectStreamField[];
    getField(s: string): ObjectStreamField;
    lookup(clazz: Class): ObjectStreamClass;
    lookupAny(clazz: Class): ObjectStreamClass;
    getSerialVersionUID(): number;
    forClass(): Class;
    NO_FIELDS: ObjectStreamField[];
}

// java.util.AbstractCollection
declare interface AbstractCollection extends Collection {
    add(object: any): boolean;
    remove(object: any): boolean;
    clear(): void;
    isEmpty(): boolean;
    contains(object: any): boolean;
    size(): number;
    toArray(object: any): any[];
    toArray(): any[];
    iterator(): Iterator;
    addAll(collection: Collection): boolean;
    containsAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    removeAll(collection: Collection): boolean;
}

// java.util.OptionalDouble
declare interface OptionalDouble {
    isEmpty(): boolean;
    empty(): OptionalDouble;
    stream(): DoubleStream;
    of(d: number): OptionalDouble;
    isPresent(): boolean;
    orElse(d: number): number;
    orElseThrow(supplier: Supplier): number;
    orElseThrow(): number;
    ifPresent(doubleConsumer: DoubleConsumer): void;
    ifPresentOrElse(doubleConsumer: DoubleConsumer, runnable: Runnable): void;
    orElseGet(doubleSupplier: DoubleSupplier): number;
    getAsDouble(): number;
}

// java.util.function.DoubleFunction
declare interface DoubleFunction {
    apply(d: number): any;
}

// java.lang.Boolean
declare interface Boolean extends Serializable, Comparable {
    toString(b: boolean): string;
    hashCode(b: boolean): number;
    compareTo(boolean: Boolean): number;
    compareTo(object: any): number;
    getBoolean(s: string): boolean;
    booleanValue(): boolean;
    valueOf(s: string): Boolean;
    valueOf(b: boolean): Boolean;
    compare(b: boolean, b: boolean): number;
    parseBoolean(s: string): boolean;
    logicalAnd(b: boolean, b: boolean): boolean;
    logicalOr(b: boolean, b: boolean): boolean;
    logicalXor(b: boolean, b: boolean): boolean;
    TRUE: Boolean;
    FALSE: Boolean;
    TYPE: Class;
}

// java.io.SerializablePermission
declare interface SerializablePermission extends BasicPermission {
}

// java.util.function.LongSupplier
declare interface LongSupplier {
    getAsLong(): number;
}

// java.time.ZoneOffset
declare interface ZoneOffset extends ZoneId, TemporalAccessor, TemporalAdjuster, Comparable, Serializable {
    get(temporalField: TemporalField): number;
    compareTo(zoneOffset: ZoneOffset): number;
    compareTo(object: any): number;
    getLong(temporalField: TemporalField): number;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalField: TemporalField): boolean;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    ofHoursMinutes(i: number, i: number): ZoneOffset;
    ofHoursMinutesSeconds(i: number, i: number, i: number): ZoneOffset;
    ofHours(i: number): ZoneOffset;
    ofTotalSeconds(i: number): ZoneOffset;
    getTotalSeconds(): number;
    UTC: ZoneOffset;
    MIN: ZoneOffset;
    MAX: ZoneOffset;
}

// java.awt.image.BufferedImageOp
declare interface BufferedImageOp {
    filter(bufferedImage: BufferedImage, bufferedImage: BufferedImage): BufferedImage;
    createCompatibleDestImage(bufferedImage: BufferedImage, colorModel: ColorModel): BufferedImage;
    getPoint2D(point2D: Point2D, point2D: Point2D): Point2D;
    getBounds2D(bufferedImage: BufferedImage): Rectangle2D;
    getRenderingHints(): RenderingHints;
}

// java.nio.charset.CoderResult
declare interface CoderResult {
    length(): number;
    throwException(): void;
    isUnderflow(): boolean;
    isOverflow(): boolean;
    isError(): boolean;
    malformedForLength(i: number): CoderResult;
    isMalformed(): boolean;
    isUnmappable(): boolean;
    unmappableForLength(i: number): CoderResult;
    UNDERFLOW: CoderResult;
    OVERFLOW: CoderResult;
}

// java.util.function.IntConsumer
declare interface IntConsumer {
    accept(i: number): void;
    andThen(intConsumer: IntConsumer): IntConsumer;
}

// java.time.OffsetDateTime
declare interface OffsetDateTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    get(temporalField: TemporalField): number;
    compareTo(object: any): number;
    compareTo(offsetDateTime: OffsetDateTime): number;
    getLong(temporalField: TemporalField): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): OffsetDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): OffsetDateTime;
    of(localDateTime: LocalDateTime, zoneOffset: ZoneOffset): OffsetDateTime;
    of(localDate: LocalDate, localTime: LocalTime, zoneOffset: ZoneOffset): OffsetDateTime;
    now(clock: Clock): OffsetDateTime;
    now(zoneId: ZoneId): OffsetDateTime;
    now(): OffsetDateTime;
    query(temporalQuery: TemporalQuery): any;
    getOffset(): ZoneOffset;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): OffsetDateTime;
    parse(s: string): OffsetDateTime;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    isAfter(offsetDateTime: OffsetDateTime): boolean;
    isBefore(offsetDateTime: OffsetDateTime): boolean;
    isEqual(offsetDateTime: OffsetDateTime): boolean;
    getNano(): number;
    toInstant(): Instant;
    getYear(): number;
    getMonthValue(): number;
    getDayOfMonth(): number;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    timeLineOrder(): Comparator;
    withOffsetSameLocal(zoneOffset: ZoneOffset): OffsetDateTime;
    withOffsetSameInstant(zoneOffset: ZoneOffset): OffsetDateTime;
    toLocalDateTime(): LocalDateTime;
    toLocalDate(): LocalDate;
    withYear(i: number): OffsetDateTime;
    withMonth(i: number): OffsetDateTime;
    withDayOfMonth(i: number): OffsetDateTime;
    withDayOfYear(i: number): OffsetDateTime;
    withHour(i: number): OffsetDateTime;
    withMinute(i: number): OffsetDateTime;
    withSecond(i: number): OffsetDateTime;
    withNano(i: number): OffsetDateTime;
    plusYears(l: number): OffsetDateTime;
    plusMonths(l: number): OffsetDateTime;
    plusWeeks(l: number): OffsetDateTime;
    minusYears(l: number): OffsetDateTime;
    minusMonths(l: number): OffsetDateTime;
    minusWeeks(l: number): OffsetDateTime;
    atZoneSameInstant(zoneId: ZoneId): ZonedDateTime;
    atZoneSimilarLocal(zoneId: ZoneId): ZonedDateTime;
    toOffsetTime(): OffsetTime;
    toZonedDateTime(): ZonedDateTime;
    toEpochSecond(): number;
    ofInstant(instant: Instant, zoneId: ZoneId): OffsetDateTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalAdjuster: TemporalAdjuster): OffsetDateTime;
    with(temporalField: TemporalField, l: number): OffsetDateTime;
    getMonth(): Month;
    getDayOfWeek(): DayOfWeek;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): OffsetDateTime;
    plus(temporalAmount: TemporalAmount): OffsetDateTime;
    plusDays(l: number): OffsetDateTime;
    plusHours(l: number): OffsetDateTime;
    plusMinutes(l: number): OffsetDateTime;
    plusNanos(l: number): OffsetDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(temporalAmount: TemporalAmount): OffsetDateTime;
    minus(l: number, temporalUnit: TemporalUnit): OffsetDateTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minusDays(l: number): OffsetDateTime;
    minusHours(l: number): OffsetDateTime;
    minusMinutes(l: number): OffsetDateTime;
    minusSeconds(l: number): OffsetDateTime;
    minusNanos(l: number): OffsetDateTime;
    truncatedTo(temporalUnit: TemporalUnit): OffsetDateTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    getDayOfYear(): number;
    plusSeconds(l: number): OffsetDateTime;
    toLocalTime(): LocalTime;
    MIN: OffsetDateTime;
    MAX: OffsetDateTime;
}

// java.util.function.DoubleSupplier
declare interface DoubleSupplier {
    getAsDouble(): number;
}

// java.lang.ModuleLayer
declare interface ModuleLayer {
    empty(): ModuleLayer;
    boot(): ModuleLayer;
    modules(): Set;
    defineModules(configuration: Configuration, func: Function): ModuleLayer;
    defineModules(configuration: Configuration, list: List, func: Function): Controller;
    findModule(s: string): Optional;
    parents(): List;
    configuration(): Configuration;
    defineModulesWithOneLoader(configuration: Configuration, classLoader: ClassLoader): ModuleLayer;
    defineModulesWithOneLoader(configuration: Configuration, list: List, classLoader: ClassLoader): Controller;
    defineModulesWithManyLoaders(configuration: Configuration, list: List, classLoader: ClassLoader): Controller;
    defineModulesWithManyLoaders(configuration: Configuration, classLoader: ClassLoader): ModuleLayer;
    findLoader(s: string): ClassLoader;
}

// org.yaml.snakeyaml.constructor.AbstractConstruct
declare interface AbstractConstruct extends Construct {
    construct2ndStep(node: Node, object: any): void;
}

// java.util.Locale$FilteringMode
declare enum FilteringMode {
    AUTOSELECT_FILTERING,
    EXTENDED_FILTERING,
    IGNORE_EXTENDED_RANGES,
    MAP_EXTENDED_RANGES,
    REJECT_EXTENDED_RANGES,
}

// java.util.stream.IntStream$Builder
declare interface Builder extends IntConsumer {
    add(i: number): Builder;
    accept(i: number): void;
    build(): IntStream;
}

// java.awt.font.FontRenderContext
declare interface FontRenderContext {
    equals(fontRenderContext: FontRenderContext): boolean;
    isAntiAliased(): boolean;
    usesFractionalMetrics(): boolean;
    isTransformed(): boolean;
    getTransformType(): number;
    getAntiAliasingHint(): any;
    getFractionalMetricsHint(): any;
    getTransform(): AffineTransform;
}

// javax.net.ssl.SSLSession
declare interface SSLSession {
    getValue(s: string): any;
    getId(): number[];
    getProtocol(): string;
    getSessionContext(): SSLSessionContext;
    getLastAccessedTime(): number;
    removeValue(s: string): void;
    getValueNames(): string[];
    getPeerCertificates(): Certificate[];
    getLocalCertificates(): Certificate[];
    getPeerCertificateChain(): X509Certificate[];
    getPeerPrincipal(): Principal;
    getLocalPrincipal(): Principal;
    getCipherSuite(): string;
    getPacketBufferSize(): number;
    getApplicationBufferSize(): number;
    isValid(): boolean;
    getCreationTime(): number;
    putValue(s: string, object: any): void;
    getPeerHost(): string;
    getPeerPort(): number;
    invalidate(): void;
}

// java.awt.geom.PathIterator
declare interface PathIterator {
    next(): void;
    getWindingRule(): number;
    currentSegment(f: number): number;
    currentSegment(d: number): number;
    isDone(): boolean;
    WIND_EVEN_ODD: number;
    WIND_NON_ZERO: number;
    SEG_MOVETO: number;
    SEG_LINETO: number;
    SEG_QUADTO: number;
    SEG_CUBICTO: number;
    SEG_CLOSE: number;
}

// java.util.Locale$Category
declare enum Category {
    DISPLAY,
    FORMAT,
}

// java.util.function.LongFunction
declare interface LongFunction {
    apply(l: number): any;
}

// java.nio.LongBuffer
declare interface LongBuffer extends Buffer, Comparable {
    get(l: number, i: number, i: number): LongBuffer;
    get(i: number): number;
    get(): number;
    get(l: number): LongBuffer;
    put(l: number): LongBuffer;
    put(l: number, i: number, i: number): LongBuffer;
    put(longBuffer: LongBuffer): LongBuffer;
    put(i: number, l: number): LongBuffer;
    put(l: number): LongBuffer;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(longBuffer: LongBuffer): number;
    wrap(l: number): LongBuffer;
    wrap(l: number, i: number, i: number): LongBuffer;
    allocate(i: number): LongBuffer;
    mismatch(longBuffer: LongBuffer): number;
    asReadOnlyBuffer(): LongBuffer;
    compact(): LongBuffer;
    order(): ByteOrder;
}

// java.awt.Composite
declare interface Composite {
    createContext(colorModel: ColorModel, colorModel: ColorModel, renderingHints: RenderingHints): CompositeContext;
}

// java.net.URLStreamHandler
declare interface URLStreamHandler {
}

// java.time.temporal.TemporalUnit
declare interface TemporalUnit {
    toString(): string;
    isSupportedBy(temporal: Temporal): boolean;
    isTimeBased(): boolean;
    isDateBased(): boolean;
    getDuration(): Duration;
    between(temporal: Temporal, temporal: Temporal): number;
    isDurationEstimated(): boolean;
    addTo(temporal: Temporal, l: number): Temporal;
}

// java.util.PrimitiveIterator$OfDouble
declare interface OfDouble extends PrimitiveIterator {
    forEachRemaining(object: any): void;
    forEachRemaining(doubleConsumer: DoubleConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    next(): any;
    next(): Double;
    nextDouble(): number;
}

// java.nio.FloatBuffer
declare interface FloatBuffer extends Buffer, Comparable {
    get(f: number, i: number, i: number): FloatBuffer;
    get(i: number): number;
    get(): number;
    get(f: number): FloatBuffer;
    put(f: number): FloatBuffer;
    put(f: number, i: number, i: number): FloatBuffer;
    put(floatBuffer: FloatBuffer): FloatBuffer;
    put(i: number, f: number): FloatBuffer;
    put(f: number): FloatBuffer;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(floatBuffer: FloatBuffer): number;
    wrap(f: number): FloatBuffer;
    wrap(f: number, i: number, i: number): FloatBuffer;
    allocate(i: number): FloatBuffer;
    mismatch(floatBuffer: FloatBuffer): number;
    asReadOnlyBuffer(): FloatBuffer;
    compact(): FloatBuffer;
    order(): ByteOrder;
}

// java.nio.ByteOrder
declare interface ByteOrder {
    nativeOrder(): ByteOrder;
    BIG_ENDIAN: ByteOrder;
    LITTLE_ENDIAN: ByteOrder;
}

// java.time.temporal.Temporal
declare interface Temporal extends TemporalAccessor {
    isSupported(temporalUnit: TemporalUnit): boolean;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
}

// java.awt.Polygon
declare interface Polygon extends Shape, Serializable {
    contains(i: number, i: number): boolean;
    contains(d: number, d: number): boolean;
    contains(point: Point): boolean;
    contains(point2D: Point2D): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    reset(): void;
    intersects(d: number, d: number, d: number, d: number): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    getBounds(): Rectangle;
    addPoint(i: number, i: number): void;
    getBounds2D(): Rectangle2D;
    translate(i: number, i: number): void;
    inside(i: number, i: number): boolean;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    invalidate(): void;
    getBoundingBox(): Rectangle;
    npoints: number;
    xpoints: number[];
    ypoints: number[];
}

// java.nio.ShortBuffer
declare interface ShortBuffer extends Buffer, Comparable {
    get(s: number, i: number, i: number): ShortBuffer;
    get(i: number): number;
    get(): number;
    get(s: number): ShortBuffer;
    put(s: number): ShortBuffer;
    put(s: number, i: number, i: number): ShortBuffer;
    put(shortBuffer: ShortBuffer): ShortBuffer;
    put(i: number, s: number): ShortBuffer;
    put(s: number): ShortBuffer;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(shortBuffer: ShortBuffer): number;
    wrap(s: number): ShortBuffer;
    wrap(s: number, i: number, i: number): ShortBuffer;
    allocate(i: number): ShortBuffer;
    mismatch(shortBuffer: ShortBuffer): number;
    asReadOnlyBuffer(): ShortBuffer;
    compact(): ShortBuffer;
    order(): ByteOrder;
}

// java.util.DoubleSummaryStatistics
declare interface DoubleSummaryStatistics extends DoubleConsumer {
    accept(d: number): void;
    combine(doubleSummaryStatistics: DoubleSummaryStatistics): void;
    getCount(): number;
    getSum(): number;
    getAverage(): number;
    getMin(): number;
    getMax(): number;
}

// java.security.CodeSource
declare interface CodeSource extends Serializable {
    getLocation(): URL;
    getCertificates(): Certificate[];
    implies(codeSource: CodeSource): boolean;
    getCodeSigners(): CodeSigner[];
}

// java.awt.Stroke
declare interface Stroke {
    createStrokedShape(shape: Shape): Shape;
}

// java.awt.image.renderable.RenderableImage
declare interface RenderableImage {
    getProperty(s: string): any;
    isDynamic(): boolean;
    createScaledRendering(i: number, i: number, renderingHints: RenderingHints): RenderedImage;
    createDefaultRendering(): RenderedImage;
    createRendering(renderContext: RenderContext): RenderedImage;
    getSources(): Vector;
    getPropertyNames(): string[];
    getHeight(): number;
    getWidth(): number;
    getMinX(): number;
    getMinY(): number;
    HINTS_OBSERVED: string;
}

// java.util.stream.LongStream$Builder
declare interface Builder extends LongConsumer {
    add(l: number): Builder;
    accept(l: number): void;
    build(): LongStream;
}

// java.util.regex.MatchResult
declare interface MatchResult {
    group(): string;
    group(i: number): string;
    end(i: number): number;
    end(): number;
    start(): number;
    start(i: number): number;
    groupCount(): number;
}

// java.awt.image.DataBuffer
declare interface DataBuffer {
    getSize(): number;
    getOffset(): number;
    getElem(i: number, i: number): number;
    getElem(i: number): number;
    setElem(i: number, i: number, i: number): void;
    setElem(i: number, i: number): void;
    getElemFloat(i: number): number;
    getElemFloat(i: number, i: number): number;
    setElemFloat(i: number, f: number): void;
    setElemFloat(i: number, i: number, f: number): void;
    getElemDouble(i: number): number;
    getElemDouble(i: number, i: number): number;
    setElemDouble(i: number, d: number): void;
    setElemDouble(i: number, i: number, d: number): void;
    getOffsets(): number[];
    getDataTypeSize(i: number): number;
    getNumBanks(): number;
    getDataType(): number;
    TYPE_BYTE: number;
    TYPE_USHORT: number;
    TYPE_SHORT: number;
    TYPE_INT: number;
    TYPE_FLOAT: number;
    TYPE_DOUBLE: number;
    TYPE_UNDEFINED: number;
}

// java.util.stream.DoubleStream$Builder
declare interface Builder extends DoubleConsumer {
    add(d: number): Builder;
    accept(d: number): void;
    build(): DoubleStream;
}

// org.yaml.snakeyaml.composer.Composer
declare interface Composer {
    getNode(): Node;
    getSingleNode(): Node;
    checkNode(): boolean;
}

// java.util.function.LongBinaryOperator
declare interface LongBinaryOperator {
    applyAsLong(l: number, l: number): number;
}

// org.yaml.snakeyaml.introspector.Property
declare interface Property extends Comparable {
    get(object: any): any;
    compareTo(object: any): number;
    compareTo(property: Property): number;
    getName(): string;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): List;
    set(object: any, object: any): void;
    getType(): Class;
    getActualTypeArguments(): Class[];
    isReadable(): boolean;
    isWritable(): boolean;
}

// java.time.ZonedDateTime
declare interface ZonedDateTime extends Temporal, ChronoZonedDateTime, Serializable {
    get(temporalField: TemporalField): number;
    getLong(temporalField: TemporalField): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ZonedDateTime;
    of(localDateTime: LocalDateTime, zoneId: ZoneId): ZonedDateTime;
    of(localDate: LocalDate, localTime: LocalTime, zoneId: ZoneId): ZonedDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number, zoneId: ZoneId): ZonedDateTime;
    now(): ZonedDateTime;
    now(clock: Clock): ZonedDateTime;
    now(zoneId: ZoneId): ZonedDateTime;
    query(temporalQuery: TemporalQuery): any;
    getOffset(): ZoneOffset;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    parse(s: string): ZonedDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): ZonedDateTime;
    range(temporalField: TemporalField): ValueRange;
    getNano(): number;
    getYear(): number;
    getMonthValue(): number;
    getDayOfMonth(): number;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    toLocalDateTime(): ChronoLocalDateTime;
    toLocalDateTime(): LocalDateTime;
    toLocalDate(): ChronoLocalDate;
    toLocalDate(): LocalDate;
    withYear(i: number): ZonedDateTime;
    withMonth(i: number): ZonedDateTime;
    withDayOfMonth(i: number): ZonedDateTime;
    withDayOfYear(i: number): ZonedDateTime;
    withHour(i: number): ZonedDateTime;
    withMinute(i: number): ZonedDateTime;
    withSecond(i: number): ZonedDateTime;
    withNano(i: number): ZonedDateTime;
    plusYears(l: number): ZonedDateTime;
    plusMonths(l: number): ZonedDateTime;
    plusWeeks(l: number): ZonedDateTime;
    minusYears(l: number): ZonedDateTime;
    minusMonths(l: number): ZonedDateTime;
    minusWeeks(l: number): ZonedDateTime;
    ofLocal(localDateTime: LocalDateTime, zoneId: ZoneId, zoneOffset: ZoneOffset): ZonedDateTime;
    ofStrict(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneId: ZoneId): ZonedDateTime;
    withEarlierOffsetAtOverlap(): ZonedDateTime;
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime;
    withLaterOffsetAtOverlap(): ZonedDateTime;
    withLaterOffsetAtOverlap(): ChronoZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ZonedDateTime;
    withFixedOffsetZone(): ZonedDateTime;
    toOffsetDateTime(): OffsetDateTime;
    ofInstant(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneId: ZoneId): ZonedDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): ZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): ChronoZonedDateTime;
    with(temporalField: TemporalField, l: number): ChronoZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): ZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): ZonedDateTime;
    getMonth(): Month;
    getDayOfWeek(): DayOfWeek;
    getZone(): ZoneId;
    plus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    plus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): ZonedDateTime;
    plus(l: number, temporalUnit: TemporalUnit): ZonedDateTime;
    plusDays(l: number): ZonedDateTime;
    plusHours(l: number): ZonedDateTime;
    plusMinutes(l: number): ZonedDateTime;
    plusNanos(l: number): ZonedDateTime;
    minus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ZonedDateTime;
    minus(temporalAmount: TemporalAmount): ZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minusDays(l: number): ZonedDateTime;
    minusHours(l: number): ZonedDateTime;
    minusMinutes(l: number): ZonedDateTime;
    minusSeconds(l: number): ZonedDateTime;
    minusNanos(l: number): ZonedDateTime;
    truncatedTo(temporalUnit: TemporalUnit): ZonedDateTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    getDayOfYear(): number;
    plusSeconds(l: number): ZonedDateTime;
    toLocalTime(): LocalTime;
}

// java.net.Proxy$Type
declare enum Type {
    DIRECT,
    HTTP,
    SOCKS,
}

// java.time.ZoneId
declare interface ZoneId extends Serializable {
    from(temporalAccessor: TemporalAccessor): ZoneId;
    of(s: string, map: Map): ZoneId;
    of(s: string): ZoneId;
    getId(): string;
    normalized(): ZoneId;
    getAvailableZoneIds(): Set;
    ofOffset(s: string, zoneOffset: ZoneOffset): ZoneId;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    systemDefault(): ZoneId;
    getRules(): ZoneRules;
    SHORT_IDS: Map;
}

// java.awt.geom.Line2D
declare interface Line2D extends Shape, Cloneable {
    contains(d: number, d: number, d: number, d: number): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    contains(d: number, d: number): boolean;
    contains(point2D: Point2D): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    getP1(): Point2D;
    getP2(): Point2D;
    relativeCCW(d: number, d: number): number;
    relativeCCW(point2D: Point2D): number;
    relativeCCW(d: number, d: number, d: number, d: number, d: number, d: number): number;
    linesIntersect(d: number, d: number, d: number, d: number, d: number, d: number, d: number, d: number): boolean;
    ptSegDistSq(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptSegDistSq(d: number, d: number): number;
    ptSegDistSq(point2D: Point2D): number;
    ptSegDist(d: number, d: number): number;
    ptSegDist(point2D: Point2D): number;
    ptSegDist(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptLineDistSq(d: number, d: number): number;
    ptLineDistSq(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptLineDistSq(point2D: Point2D): number;
    ptLineDist(d: number, d: number): number;
    ptLineDist(point2D: Point2D): number;
    ptLineDist(d: number, d: number, d: number, d: number, d: number, d: number): number;
    getBounds(): Rectangle;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    intersectsLine(line2D: Line2D): boolean;
    intersectsLine(d: number, d: number, d: number, d: number): boolean;
    getX1(): number;
    getY1(): number;
    getX2(): number;
    getY2(): number;
    setLine(d: number, d: number, d: number, d: number): void;
    setLine(line2D: Line2D): void;
    setLine(point2D: Point2D, point2D: Point2D): void;
}

// java.awt.FontMetrics
declare interface FontMetrics extends Serializable {
    getLeading(): number;
    getAscent(): number;
    getDescent(): number;
    getMaxAscent(): number;
    getMaxDescent(): number;
    getMaxDecent(): number;
    getMaxAdvance(): number;
    charWidth(c: string): number;
    charWidth(i: number): number;
    stringWidth(s: string): number;
    charsWidth(c: string, i: number, i: number): number;
    bytesWidth(b: number, i: number, i: number): number;
    getWidths(): number[];
    hasUniformLineMetrics(): boolean;
    getLineMetrics(characterIterator: CharacterIterator, i: number, i: number, graphics: Graphics): LineMetrics;
    getLineMetrics(c: string, i: number, i: number, graphics: Graphics): LineMetrics;
    getLineMetrics(s: string, i: number, i: number, graphics: Graphics): LineMetrics;
    getLineMetrics(s: string, graphics: Graphics): LineMetrics;
    getStringBounds(c: string, i: number, i: number, graphics: Graphics): Rectangle2D;
    getStringBounds(characterIterator: CharacterIterator, i: number, i: number, graphics: Graphics): Rectangle2D;
    getStringBounds(s: string, i: number, i: number, graphics: Graphics): Rectangle2D;
    getStringBounds(s: string, graphics: Graphics): Rectangle2D;
    getMaxCharBounds(graphics: Graphics): Rectangle2D;
    getFontRenderContext(): FontRenderContext;
    getHeight(): number;
    getFont(): Font;
}

// javax.net.ssl.SSLEngineResult
declare interface SSLEngineResult {
    bytesConsumed(): number;
    bytesProduced(): number;
    getStatus(): Status;
    getHandshakeStatus(): HandshakeStatus;
    sequenceNumber(): number;
}

// java.util.stream.Stream$Builder
declare interface Builder extends Consumer {
    add(object: any): Builder;
    accept(object: any): void;
    build(): Stream;
}

// java.net.PasswordAuthentication
declare interface PasswordAuthentication {
    getPassword(): string[];
    getUserName(): string;
}

// javax.net.ServerSocketFactory
declare interface ServerSocketFactory {
    getDefault(): ServerSocketFactory;
    createServerSocket(i: number, i: number): ServerSocket;
    createServerSocket(i: number, i: number, inetAddress: InetAddress): ServerSocket;
    createServerSocket(i: number): ServerSocket;
    createServerSocket(): ServerSocket;
}

// java.security.Key
declare interface Key extends Serializable {
    getEncoded(): number[];
    getFormat(): string;
    getAlgorithm(): string;
    serialVersionUID: number;
}

// java.net.Authenticator$RequestorType
declare enum RequestorType {
    PROXY,
    SERVER,
}

// java.util.function.BiPredicate
declare interface BiPredicate {
    test(object: any, object: any): boolean;
    or(biPredicate: BiPredicate): BiPredicate;
    and(biPredicate: BiPredicate): BiPredicate;
    negate(): BiPredicate;
}

// java.util.function.DoubleConsumer
declare interface DoubleConsumer {
    accept(d: number): void;
    andThen(doubleConsumer: DoubleConsumer): DoubleConsumer;
}

// java.util.PrimitiveIterator$OfLong
declare interface OfLong extends PrimitiveIterator {
    forEachRemaining(object: any): void;
    forEachRemaining(longConsumer: LongConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    next(): any;
    next(): Long;
    nextLong(): number;
}

// java.util.function.IntToLongFunction
declare interface IntToLongFunction {
    applyAsLong(i: number): number;
}

// java.lang.AutoCloseable
declare interface AutoCloseable {
    close(): void;
}

// java.util.function.ObjIntConsumer
declare interface ObjIntConsumer {
    accept(object: any, i: number): void;
}

// java.awt.Font
declare interface Font extends Serializable {
    getName(): string;
    decode(s: string): Font;
    getSize(): number;
    getAttributes(): Map;
    getNumGlyphs(): number;
    isTransformed(): boolean;
    hasUniformLineMetrics(): boolean;
    getLineMetrics(characterIterator: CharacterIterator, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(c: string, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(s: string, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(s: string, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getStringBounds(c: string, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(s: string, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(characterIterator: CharacterIterator, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(s: string, fontRenderContext: FontRenderContext): Rectangle2D;
    getMaxCharBounds(fontRenderContext: FontRenderContext): Rectangle2D;
    hasLayoutAttributes(): boolean;
    textRequiresLayout(c: string, i: number, i: number): boolean;
    createFonts(inputStream: InputStream): Font[];
    createFonts(file: File): Font[];
    createFont(i: number, file: File): Font;
    createFont(i: number, inputStream: InputStream): Font;
    getPSName(): string;
    getFontName(): string;
    getFontName(locale: Locale): string;
    getSize2D(): number;
    getMissingGlyphCode(): number;
    getBaselineFor(c: string): number;
    getAvailableAttributes(): Attribute[];
    deriveFont(map: Map): Font;
    deriveFont(i: number): Font;
    deriveFont(i: number, affineTransform: AffineTransform): Font;
    deriveFont(i: number, f: number): Font;
    deriveFont(f: number): Font;
    deriveFont(affineTransform: AffineTransform): Font;
    canDisplay(i: number): boolean;
    canDisplay(c: string): boolean;
    canDisplayUpTo(characterIterator: CharacterIterator, i: number, i: number): number;
    canDisplayUpTo(c: string, i: number, i: number): number;
    canDisplayUpTo(s: string): number;
    getItalicAngle(): number;
    createGlyphVector(fontRenderContext: FontRenderContext, characterIterator: CharacterIterator): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, c: string): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, s: string): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, i: number): GlyphVector;
    layoutGlyphVector(fontRenderContext: FontRenderContext, c: string, i: number, i: number, i: number): GlyphVector;
    getFamily(): string;
    getFamily(locale: Locale): string;
    getTransform(): AffineTransform;
    isPlain(): boolean;
    getStyle(): number;
    getFont(s: string, font: Font): Font;
    getFont(s: string): Font;
    getFont(map: Map): Font;
    isItalic(): boolean;
    isBold(): boolean;
    DIALOG: string;
    DIALOG_INPUT: string;
    SANS_SERIF: string;
    SERIF: string;
    MONOSPACED: string;
    PLAIN: number;
    BOLD: number;
    ITALIC: number;
    ROMAN_BASELINE: number;
    CENTER_BASELINE: number;
    HANGING_BASELINE: number;
    TRUETYPE_FONT: number;
    TYPE1_FONT: number;
    LAYOUT_LEFT_TO_RIGHT: number;
    LAYOUT_RIGHT_TO_LEFT: number;
    LAYOUT_NO_START_CONTEXT: number;
    LAYOUT_NO_LIMIT_CONTEXT: number;
}

// java.text.AttributedCharacterIterator
declare interface AttributedCharacterIterator extends CharacterIterator {
    getAttributes(): Map;
    getRunStart(set: Set): number;
    getRunStart(attribute: Attribute): number;
    getRunStart(): number;
    getRunLimit(set: Set): number;
    getRunLimit(attribute: Attribute): number;
    getRunLimit(): number;
    getAllAttributeKeys(): Set;
    getAttribute(attribute: Attribute): any;
}

// java.util.function.IntUnaryOperator
declare interface IntUnaryOperator {
    identity(): IntUnaryOperator;
    applyAsInt(i: number): number;
    compose(intUnaryOperator: IntUnaryOperator): IntUnaryOperator;
    andThen(intUnaryOperator: IntUnaryOperator): IntUnaryOperator;
}

// java.util.PrimitiveIterator$OfInt
declare interface OfInt extends PrimitiveIterator {
    forEachRemaining(object: any): void;
    forEachRemaining(intConsumer: IntConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    next(): any;
    next(): Integer;
    nextInt(): number;
}

// java.util.IntSummaryStatistics
declare interface IntSummaryStatistics extends IntConsumer {
    accept(i: number): void;
    combine(intSummaryStatistics: IntSummaryStatistics): void;
    getCount(): number;
    getSum(): number;
    getAverage(): number;
    getMin(): number;
    getMax(): number;
}

// java.util.function.DoublePredicate
declare interface DoublePredicate {
    test(d: number): boolean;
    or(doublePredicate: DoublePredicate): DoublePredicate;
    and(doublePredicate: DoublePredicate): DoublePredicate;
    negate(): DoublePredicate;
}

// java.io.IOException
declare interface IOException extends Exception {
}

// java.io.DataInput
declare interface DataInput {
    readLine(): string;
    readInt(): number;
    readUTF(): string;
    readFloat(): number;
    readChar(): string;
    skipBytes(i: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readUnsignedByte(): number;
    readShort(): number;
    readUnsignedShort(): number;
    readLong(): number;
    readDouble(): number;
    readFully(b: number, i: number, i: number): void;
    readFully(b: number): void;
}

// java.net.http.HttpRequest$BodyPublisher
declare interface BodyPublisher extends Publisher {
    contentLength(): number;
}

// java.util.OptionalInt
declare interface OptionalInt {
    isEmpty(): boolean;
    empty(): OptionalInt;
    stream(): IntStream;
    of(i: number): OptionalInt;
    isPresent(): boolean;
    orElse(i: number): number;
    orElseThrow(supplier: Supplier): number;
    orElseThrow(): number;
    ifPresent(intConsumer: IntConsumer): void;
    ifPresentOrElse(intConsumer: IntConsumer, runnable: Runnable): void;
    orElseGet(intSupplier: IntSupplier): number;
    getAsInt(): number;
}

// java.security.Provider$Service
declare interface Service {
    newInstance(object: any): any;
    getType(): string;
    getClassName(): string;
    getAttribute(s: string): string;
    getProvider(): Provider;
    getAlgorithm(): string;
    supportsParameter(object: any): boolean;
}

// java.nio.file.attribute.UserPrincipalLookupService
declare interface UserPrincipalLookupService {
    lookupPrincipalByName(s: string): UserPrincipal;
    lookupPrincipalByGroupName(s: string): GroupPrincipal;
}

// net.md_5.bungee.api.chat.HoverEvent
declare interface HoverEvent {
    getClass(action: Action, b: boolean): Class;
    getValue(): BaseComponent[];
    getContents(): List;
    isLegacy(): boolean;
    getAction(): Action;
    addContent(content: Content): void;
    setLegacy(b: boolean): void;
}

// java.io.ObjectInputFilter$FilterInfo
declare interface FilterInfo {
    depth(): number;
    arrayLength(): number;
    streamBytes(): number;
    serialClass(): Class;
    references(): number;
}

// java.util.function.DoubleBinaryOperator
declare interface DoubleBinaryOperator {
    applyAsDouble(d: number, d: number): number;
}

// java.util.function.IntToDoubleFunction
declare interface IntToDoubleFunction {
    applyAsDouble(i: number): number;
}

// java.util.Spliterator$OfDouble
declare interface OfDouble extends OfPrimitive {
    forEachRemaining(object: any): void;
    forEachRemaining(doubleConsumer: DoubleConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    tryAdvance(object: any): boolean;
    tryAdvance(consumer: Consumer): boolean;
    tryAdvance(doubleConsumer: DoubleConsumer): boolean;
    trySplit(): OfPrimitive;
    trySplit(): Spliterator;
    trySplit(): OfDouble;
}

// java.util.stream.Collector
declare interface Collector {
    characteristics(): Set;
    of(supplier: Supplier, biConsumer: BiConsumer, binaryOperator: BinaryOperator, func: Function, characteristics: Characteristics): Collector;
    of(supplier: Supplier, biConsumer: BiConsumer, binaryOperator: BinaryOperator, characteristics: Characteristics): Collector;
    combiner(): BinaryOperator;
    supplier(): Supplier;
    accumulator(): BiConsumer;
    finisher(): Function;
}

// java.util.LongSummaryStatistics
declare interface LongSummaryStatistics extends LongConsumer, IntConsumer {
    accept(i: number): void;
    accept(l: number): void;
    combine(longSummaryStatistics: LongSummaryStatistics): void;
    getCount(): number;
    getSum(): number;
    getAverage(): number;
    getMin(): number;
    getMax(): number;
}

// java.security.Principal
declare interface Principal {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    getName(): string;
    implies(subject: Subject): boolean;
}

// java.util.TimeZone
declare interface TimeZone extends Serializable, Cloneable {
    getDefault(): TimeZone;
    getOffset(i: number, i: number, i: number, i: number, i: number, i: number): number;
    getOffset(l: number): number;
    getTimeZone(zoneId: ZoneId): TimeZone;
    getTimeZone(s: string): TimeZone;
    setDefault(timeZone: TimeZone): void;
    getDisplayName(): string;
    getDisplayName(locale: Locale): string;
    getDisplayName(b: boolean, i: number, locale: Locale): string;
    getDisplayName(b: boolean, i: number): string;
    getID(): string;
    getAvailableIDs(i: number): string[];
    getAvailableIDs(): string[];
    setRawOffset(i: number): void;
    getRawOffset(): number;
    setID(s: string): void;
    getDSTSavings(): number;
    useDaylightTime(): boolean;
    observesDaylightTime(): boolean;
    inDaylightTime(date: Date): boolean;
    toZoneId(): ZoneId;
    hasSameRules(timeZone: TimeZone): boolean;
    SHORT: number;
    LONG: number;
}

// java.net.Socket
declare interface Socket extends Closeable {
    connect(socketAddress: SocketAddress): void;
    connect(socketAddress: SocketAddress, i: number): void;
    close(): void;
    getPort(): number;
    getInputStream(): InputStream;
    getChannel(): SocketChannel;
    bind(socketAddress: SocketAddress): void;
    getInetAddress(): InetAddress;
    getLocalAddress(): InetAddress;
    getLocalPort(): number;
    getRemoteSocketAddress(): SocketAddress;
    getLocalSocketAddress(): SocketAddress;
    getOutputStream(): OutputStream;
    setTcpNoDelay(b: boolean): void;
    getTcpNoDelay(): boolean;
    setSoLinger(b: boolean, i: number): void;
    getSoLinger(): number;
    sendUrgentData(i: number): void;
    setOOBInline(b: boolean): void;
    getOOBInline(): boolean;
    setSoTimeout(i: number): void;
    getSoTimeout(): number;
    setSendBufferSize(i: number): void;
    getSendBufferSize(): number;
    setReceiveBufferSize(i: number): void;
    getReceiveBufferSize(): number;
    setKeepAlive(b: boolean): void;
    getKeepAlive(): boolean;
    setTrafficClass(i: number): void;
    getTrafficClass(): number;
    setReuseAddress(b: boolean): void;
    getReuseAddress(): boolean;
    shutdownInput(): void;
    shutdownOutput(): void;
    isConnected(): boolean;
    isBound(): boolean;
    isClosed(): boolean;
    isInputShutdown(): boolean;
    isOutputShutdown(): boolean;
    setSocketImplFactory(socketImplFactory: SocketImplFactory): void;
    setPerformancePreferences(i: number, i: number, i: number): void;
    setOption(socketOption: SocketOption, object: any): Socket;
    getOption(socketOption: SocketOption): any;
    supportedOptions(): Set;
}

// java.security.Permission
declare interface Permission extends Guard, Serializable {
    getName(): string;
    implies(permission: Permission): boolean;
    getActions(): string;
    newPermissionCollection(): PermissionCollection;
    checkGuard(object: any): void;
}

// java.net.FileNameMap
declare interface FileNameMap {
    getContentTypeFor(s: string): string;
}

// java.util.Locale$IsoCountryCode
declare enum IsoCountryCode {
    PART1_ALPHA2,
    PART1_ALPHA3,
    PART3,
}

// java.util.Spliterator$OfLong
declare interface OfLong extends OfPrimitive {
    forEachRemaining(object: any): void;
    forEachRemaining(longConsumer: LongConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    tryAdvance(object: any): boolean;
    tryAdvance(consumer: Consumer): boolean;
    tryAdvance(longConsumer: LongConsumer): boolean;
    trySplit(): OfPrimitive;
    trySplit(): Spliterator;
    trySplit(): OfLong;
}

// java.awt.BufferCapabilities
declare interface BufferCapabilities extends Cloneable {
    getFrontBufferCapabilities(): ImageCapabilities;
    getBackBufferCapabilities(): ImageCapabilities;
    isPageFlipping(): boolean;
    getFlipContents(): FlipContents;
    isFullScreenRequired(): boolean;
    isMultiBufferAvailable(): boolean;
}

// java.awt.image.ImageConsumer
declare interface ImageConsumer {
    setProperties(hashtable: Hashtable): void;
    setDimensions(i: number, i: number): void;
    setColorModel(colorModel: ColorModel): void;
    setHints(i: number): void;
    imageComplete(i: number): void;
    setPixels(i: number, i: number, i: number, i: number, colorModel: ColorModel, i: number, i: number, i: number): void;
    setPixels(i: number, i: number, i: number, i: number, colorModel: ColorModel, b: number, i: number, i: number): void;
    RANDOMPIXELORDER: number;
    TOPDOWNLEFTRIGHT: number;
    COMPLETESCANLINES: number;
    SINGLEPASS: number;
    SINGLEFRAME: number;
    IMAGEERROR: number;
    SINGLEFRAMEDONE: number;
    STATICIMAGEDONE: number;
    IMAGEABORTED: number;
}

// java.net.http.WebSocket
declare interface WebSocket {
    request(l: number): void;
    abort(): void;
    sendPong(byteBuffer: ByteBuffer): CompletableFuture;
    sendClose(i: number, s: string): CompletableFuture;
    isInputClosed(): boolean;
    sendText(s: string, b: boolean): CompletableFuture;
    isOutputClosed(): boolean;
    sendBinary(byteBuffer: ByteBuffer, b: boolean): CompletableFuture;
    sendPing(byteBuffer: ByteBuffer): CompletableFuture;
    getSubprotocol(): string;
    NORMAL_CLOSURE: number;
}

// java.security.AlgorithmParameters
declare interface AlgorithmParameters {
    getInstance(s: string, provider: Provider): AlgorithmParameters;
    getInstance(s: string, s: string): AlgorithmParameters;
    getInstance(s: string): AlgorithmParameters;
    init(b: number): void;
    init(b: number, s: string): void;
    init(algorithmParameterSpec: AlgorithmParameterSpec): void;
    getEncoded(): number[];
    getEncoded(s: string): number[];
    getParameterSpec(clazz: Class): AlgorithmParameterSpec;
    getProvider(): Provider;
    getAlgorithm(): string;
}

// java.util.function.BinaryOperator
declare interface BinaryOperator extends BiFunction {
    maxBy(comparator: Comparator): BinaryOperator;
    minBy(comparator: Comparator): BinaryOperator;
}

// java.io.FilterOutputStream
declare interface FilterOutputStream extends OutputStream {
}

// java.lang.StringBuilder
declare interface StringBuilder extends AbstractStringBuilder, Serializable, Comparable, CharSequence {
    compareTo(object: any): number;
    compareTo(s: string): number;
}

// java.util.function.LongUnaryOperator
declare interface LongUnaryOperator {
    identity(): LongUnaryOperator;
    applyAsLong(l: number): number;
    compose(longUnaryOperator: LongUnaryOperator): LongUnaryOperator;
    andThen(longUnaryOperator: LongUnaryOperator): LongUnaryOperator;
}

// java.util.function.DoubleUnaryOperator
declare interface DoubleUnaryOperator {
    identity(): DoubleUnaryOperator;
    applyAsDouble(d: number): number;
    compose(doubleUnaryOperator: DoubleUnaryOperator): DoubleUnaryOperator;
    andThen(doubleUnaryOperator: DoubleUnaryOperator): DoubleUnaryOperator;
}

// java.util.function.LongConsumer
declare interface LongConsumer {
    accept(l: number): void;
    andThen(longConsumer: LongConsumer): LongConsumer;
}

// java.nio.file.spi.FileSystemProvider
declare interface FileSystemProvider {
    checkAccess(path: Path, accessMode: AccessMode): void;
    delete(path: Path): void;
    copy(path: Path, path: Path, copyOption: CopyOption): void;
    getPath(uRI: URI): Path;
    getScheme(): string;
    isHidden(path: Path): boolean;
    createDirectory(path: Path, fileAttribute: FileAttribute): void;
    getFileSystem(uRI: URI): FileSystem;
    installedProviders(): List;
    readAttributes(path: Path, s: string, linkOption: LinkOption): Map;
    readAttributes(path: Path, clazz: Class, linkOption: LinkOption): BasicFileAttributes;
    newFileSystem(path: Path, map: Map): FileSystem;
    newFileSystem(uRI: URI, map: Map): FileSystem;
    newFileChannel(path: Path, set: Set, fileAttribute: FileAttribute): FileChannel;
    newAsynchronousFileChannel(path: Path, set: Set, executorService: ExecutorService, fileAttribute: FileAttribute): AsynchronousFileChannel;
    getFileAttributeView(path: Path, clazz: Class, linkOption: LinkOption): FileAttributeView;
    newByteChannel(path: Path, set: Set, fileAttribute: FileAttribute): SeekableByteChannel;
    move(path: Path, path: Path, copyOption: CopyOption): void;
    isSameFile(path: Path, path: Path): boolean;
    getFileStore(path: Path): FileStore;
    newDirectoryStream(path: Path, filter: Filter): DirectoryStream;
    createSymbolicLink(path: Path, path: Path, fileAttribute: FileAttribute): void;
    createLink(path: Path, path: Path): void;
    readSymbolicLink(path: Path): Path;
    setAttribute(path: Path, s: string, object: any, linkOption: LinkOption): void;
    deleteIfExists(path: Path): boolean;
    newInputStream(path: Path, openOption: OpenOption): InputStream;
    newOutputStream(path: Path, openOption: OpenOption): OutputStream;
}

// java.util.function.ObjDoubleConsumer
declare interface ObjDoubleConsumer {
    accept(object: any, d: number): void;
}

// java.awt.font.GlyphVector
declare interface GlyphVector extends Cloneable {
    equals(glyphVector: GlyphVector): boolean;
    performDefaultLayout(): void;
    getNumGlyphs(): number;
    getGlyphCode(i: number): number;
    getGlyphCodes(i: number, i: number, i: number): number[];
    getGlyphCharIndex(i: number): number;
    getGlyphCharIndices(i: number, i: number, i: number): number[];
    getLogicalBounds(): Rectangle2D;
    getVisualBounds(): Rectangle2D;
    getPixelBounds(fontRenderContext: FontRenderContext, f: number, f: number): Rectangle;
    getOutline(): Shape;
    getOutline(f: number, f: number): Shape;
    getGlyphOutline(i: number): Shape;
    getGlyphOutline(i: number, f: number, f: number): Shape;
    getGlyphPosition(i: number): Point2D;
    setGlyphPosition(i: number, point2D: Point2D): void;
    getGlyphTransform(i: number): AffineTransform;
    setGlyphTransform(i: number, affineTransform: AffineTransform): void;
    getLayoutFlags(): number;
    getGlyphPositions(i: number, i: number, f: number): number[];
    getGlyphLogicalBounds(i: number): Shape;
    getGlyphVisualBounds(i: number): Shape;
    getGlyphPixelBounds(i: number, fontRenderContext: FontRenderContext, f: number, f: number): Rectangle;
    getGlyphMetrics(i: number): GlyphMetrics;
    getGlyphJustificationInfo(i: number): GlyphJustificationInfo;
    getFontRenderContext(): FontRenderContext;
    getFont(): Font;
    FLAG_HAS_TRANSFORMS: number;
    FLAG_HAS_POSITION_ADJUSTMENTS: number;
    FLAG_RUN_RTL: number;
    FLAG_COMPLEX_GLYPHS: number;
    FLAG_MASK: number;
}

// java.util.function.ObjLongConsumer
declare interface ObjLongConsumer {
    accept(object: any, l: number): void;
}

// java.security.PermissionCollection
declare interface PermissionCollection extends Serializable {
    add(permission: Permission): void;
    elements(): Enumeration;
    implies(permission: Permission): boolean;
    setReadOnly(): void;
    isReadOnly(): boolean;
    elementsAsStream(): Stream;
}

// java.util.function.IntBinaryOperator
declare interface IntBinaryOperator {
    applyAsInt(i: number, i: number): number;
}

// java.util.function.DoubleToLongFunction
declare interface DoubleToLongFunction {
    applyAsLong(d: number): number;
}

// java.time.temporal.ValueRange
declare interface ValueRange extends Serializable {
    of(l: number, l: number): ValueRange;
    of(l: number, l: number, l: number, l: number): ValueRange;
    of(l: number, l: number, l: number): ValueRange;
    checkValidValue(l: number, temporalField: TemporalField): number;
    isIntValue(): boolean;
    isValidValue(l: number): boolean;
    getLargestMinimum(): number;
    getSmallestMaximum(): number;
    isValidIntValue(l: number): boolean;
    checkValidIntValue(l: number, temporalField: TemporalField): number;
    isFixed(): boolean;
    getMinimum(): number;
    getMaximum(): number;
}

// java.util.stream.BaseStream
declare interface BaseStream extends AutoCloseable {
    iterator(): Iterator;
    spliterator(): Spliterator;
    close(): void;
    parallel(): BaseStream;
    unordered(): BaseStream;
    isParallel(): boolean;
    onClose(runnable: Runnable): BaseStream;
    sequential(): BaseStream;
}

// org.yaml.snakeyaml.nodes.Tag
declare interface Tag {
    startsWith(s: string): boolean;
    matches(clazz: Class): boolean;
    getValue(): string;
    getClassName(): string;
    isCompatible(clazz: Class): boolean;
    isSecondary(): boolean;
    PREFIX: string;
    YAML: Tag;
    MERGE: Tag;
    SET: Tag;
    PAIRS: Tag;
    OMAP: Tag;
    BINARY: Tag;
    INT: Tag;
    FLOAT: Tag;
    TIMESTAMP: Tag;
    BOOL: Tag;
    NULL: Tag;
    STR: Tag;
    SEQ: Tag;
    MAP: Tag;
    COMMENT: Tag;
}

// java.nio.file.PathMatcher
declare interface PathMatcher {
    matches(path: Path): boolean;
}

// java.awt.geom.Point2D
declare interface Point2D extends Cloneable {
    distance(point2D: Point2D): number;
    distance(d: number, d: number): number;
    distance(d: number, d: number, d: number, d: number): number;
    setLocation(d: number, d: number): void;
    setLocation(point2D: Point2D): void;
    distanceSq(point2D: Point2D): number;
    distanceSq(d: number, d: number, d: number, d: number): number;
    distanceSq(d: number, d: number): number;
    getY(): number;
    getX(): number;
}

// net.md_5.bungee.api.chat.ClickEvent
declare interface ClickEvent {
    getValue(): string;
    getAction(): Action;
}

// java.nio.Buffer
declare interface Buffer {
    clear(): Buffer;
    limit(i: number): Buffer;
    limit(): number;
    remaining(): number;
    isDirect(): boolean;
    hasArray(): boolean;
    array(): any;
    position(i: number): Buffer;
    position(): number;
    arrayOffset(): number;
    capacity(): number;
    mark(): Buffer;
    reset(): Buffer;
    flip(): Buffer;
    rewind(): Buffer;
    hasRemaining(): boolean;
    isReadOnly(): boolean;
    slice(): Buffer;
    duplicate(): Buffer;
}

// java.awt.image.VolatileImage
declare interface VolatileImage extends Image, Transparency {
    validate(graphicsConfiguration: GraphicsConfiguration): number;
    getSnapshot(): BufferedImage;
    contentsLost(): boolean;
    getTransparency(): number;
    getCapabilities(): ImageCapabilities;
    getHeight(): number;
    getWidth(): number;
    createGraphics(): Graphics2D;
    IMAGE_OK: number;
    IMAGE_RESTORED: number;
    IMAGE_INCOMPATIBLE: number;
}

// java.time.temporal.TemporalAccessor
declare interface TemporalAccessor {
    get(temporalField: TemporalField): number;
    getLong(temporalField: TemporalField): number;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalField: TemporalField): boolean;
    range(temporalField: TemporalField): ValueRange;
}

// java.lang.reflect.AccessibleObject
declare interface AccessibleObject extends AnnotatedElement {
    getAnnotation(clazz: Class): Annotation;
    isAnnotationPresent(clazz: Class): boolean;
    getAnnotationsByType(clazz: Class): Annotation[];
    getAnnotations(): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    setAccessible(accessibleObject: AccessibleObject, b: boolean): void;
    setAccessible(b: boolean): void;
    trySetAccessible(): boolean;
    isAccessible(): boolean;
    canAccess(object: any): boolean;
}

// java.util.function.IntSupplier
declare interface IntSupplier {
    getAsInt(): number;
}

// java.time.temporal.TemporalQuery
declare interface TemporalQuery {
    queryFrom(temporalAccessor: TemporalAccessor): any;
}

// java.lang.reflect.Member
declare interface Member {
    getModifiers(): number;
    getName(): string;
    isSynthetic(): boolean;
    getDeclaringClass(): Class;
    PUBLIC: number;
    DECLARED: number;
}

// java.awt.Shape
declare interface Shape {
    contains(d: number, d: number, d: number, d: number): boolean;
    contains(d: number, d: number): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    contains(point2D: Point2D): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
}

// java.util.Spliterator$OfInt
declare interface OfInt extends OfPrimitive {
    forEachRemaining(object: any): void;
    forEachRemaining(intConsumer: IntConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    tryAdvance(object: any): boolean;
    tryAdvance(consumer: Consumer): boolean;
    tryAdvance(intConsumer: IntConsumer): boolean;
    trySplit(): OfPrimitive;
    trySplit(): Spliterator;
    trySplit(): OfInt;
}

// net.md_5.bungee.api.chat.ComponentBuilder$FormatRetention
declare enum FormatRetention {
    NONE,
    FORMATTING,
    EVENTS,
    ALL,
}

// javax.net.SocketFactory
declare interface SocketFactory {
    getDefault(): SocketFactory;
    createSocket(inetAddress: InetAddress, i: number): Socket;
    createSocket(s: string, i: number, inetAddress: InetAddress, i: number): Socket;
    createSocket(inetAddress: InetAddress, i: number, inetAddress: InetAddress, i: number): Socket;
    createSocket(s: string, i: number): Socket;
    createSocket(): Socket;
}

// java.util.function.LongToIntFunction
declare interface LongToIntFunction {
    applyAsInt(l: number): number;
}

// java.awt.Dimension
declare interface Dimension extends Dimension2D, Serializable {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    getSize(): Dimension;
    setSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    width: number;
    height: number;
}

// java.util.PrimitiveIterator
declare interface PrimitiveIterator extends Iterator {
    forEachRemaining(object: any): void;
}

// java.nio.file.attribute.UserPrincipal
declare interface UserPrincipal extends Principal {
}

// java.nio.file.attribute.FileAttribute
declare interface FileAttribute {
    name(): string;
    value(): any;
}

// java.time.chrono.ChronoZonedDateTime
declare interface ChronoZonedDateTime extends Temporal, Comparable {
    get(temporalField: TemporalField): number;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(chronoZonedDateTime: ChronoZonedDateTime): number;
    getLong(temporalField: TemporalField): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    query(temporalQuery: TemporalQuery): any;
    getOffset(): ZoneOffset;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    range(temporalField: TemporalField): ValueRange;
    isAfter(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isBefore(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isEqual(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    toInstant(): Instant;
    timeLineOrder(): Comparator;
    toLocalDateTime(): ChronoLocalDateTime;
    toLocalDate(): ChronoLocalDate;
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime;
    withLaterOffsetAtOverlap(): ChronoZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ChronoZonedDateTime;
    getChronology(): Chronology;
    toEpochSecond(): number;
    with(temporalField: TemporalField, l: number): ChronoZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): ChronoZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    getZone(): ZoneId;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    plus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    minus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    toLocalTime(): LocalTime;
}

// java.awt.font.GlyphJustificationInfo
declare interface GlyphJustificationInfo {
    PRIORITY_KASHIDA: number;
    PRIORITY_WHITESPACE: number;
    PRIORITY_INTERCHAR: number;
    PRIORITY_NONE: number;
    weight: number;
    growPriority: number;
    growAbsorb: boolean;
    growLeftLimit: number;
    growRightLimit: number;
    shrinkPriority: number;
    shrinkAbsorb: boolean;
    shrinkLeftLimit: number;
    shrinkRightLimit: number;
}

// java.time.format.ResolverStyle
declare enum ResolverStyle {
    STRICT,
    SMART,
    LENIENT,
}

// javax.security.auth.Subject
declare interface Subject extends Serializable {
    getPrincipals(clazz: Class): Set;
    getPrincipals(): Set;
    setReadOnly(): void;
    isReadOnly(): boolean;
    getSubject(accessControlContext: AccessControlContext): Subject;
    doAs(subject: Subject, privilegedAction: PrivilegedAction): any;
    doAs(subject: Subject, privilegedExceptionAction: PrivilegedExceptionAction): any;
    doAsPrivileged(subject: Subject, privilegedAction: PrivilegedAction, accessControlContext: AccessControlContext): any;
    doAsPrivileged(subject: Subject, privilegedExceptionAction: PrivilegedExceptionAction, accessControlContext: AccessControlContext): any;
    getPublicCredentials(): Set;
    getPublicCredentials(clazz: Class): Set;
    getPrivateCredentials(): Set;
    getPrivateCredentials(clazz: Class): Set;
}

// org.yaml.snakeyaml.nodes.NodeId
declare enum NodeId {
    scalar,
    sequence,
    mapping,
    anchor,
}

// java.awt.image.renderable.RenderContext
declare interface RenderContext extends Cloneable {
    preConcatenateTransform(affineTransform: AffineTransform): void;
    preConcetenateTransform(affineTransform: AffineTransform): void;
    concatenateTransform(affineTransform: AffineTransform): void;
    concetenateTransform(affineTransform: AffineTransform): void;
    setAreaOfInterest(shape: Shape): void;
    getAreaOfInterest(): Shape;
    setRenderingHints(renderingHints: RenderingHints): void;
    getRenderingHints(): RenderingHints;
    setTransform(affineTransform: AffineTransform): void;
    getTransform(): AffineTransform;
}

// java.time.zone.ZoneRules
declare interface ZoneRules extends Serializable {
    of(zoneOffset: ZoneOffset, zoneOffset: ZoneOffset, list: List, list: List, list: List): ZoneRules;
    of(zoneOffset: ZoneOffset): ZoneRules;
    getOffset(localDateTime: LocalDateTime): ZoneOffset;
    getOffset(instant: Instant): ZoneOffset;
    isFixedOffset(): boolean;
    getValidOffsets(localDateTime: LocalDateTime): List;
    getTransition(localDateTime: LocalDateTime): ZoneOffsetTransition;
    isValidOffset(localDateTime: LocalDateTime, zoneOffset: ZoneOffset): boolean;
    isDaylightSavings(instant: Instant): boolean;
    getStandardOffset(instant: Instant): ZoneOffset;
    getDaylightSavings(instant: Instant): Duration;
    nextTransition(instant: Instant): ZoneOffsetTransition;
    previousTransition(instant: Instant): ZoneOffsetTransition;
    getTransitions(): List;
    getTransitionRules(): List;
}

// org.yaml.snakeyaml.constructor.Construct
declare interface Construct {
    construct(node: Node): any;
    construct2ndStep(node: Node, object: any): void;
}

// java.security.cert.Certificate
declare interface Certificate extends Serializable {
    getType(): string;
    getEncoded(): number[];
    verify(publicKey: PublicKey): void;
    verify(publicKey: PublicKey, s: string): void;
    verify(publicKey: PublicKey, provider: Provider): void;
    getPublicKey(): PublicKey;
}

// java.nio.file.attribute.FileAttributeView
declare interface FileAttributeView extends AttributeView {
}

// java.text.CharacterIterator
declare interface CharacterIterator extends Cloneable {
    clone(): any;
    last(): string;
    next(): string;
    first(): string;
    current(): string;
    getIndex(): number;
    previous(): string;
    setIndex(i: number): string;
    getBeginIndex(): number;
    getEndIndex(): number;
    DONE: string;
}

// java.nio.channels.AsynchronousFileChannel
declare interface AsynchronousFileChannel extends AsynchronousChannel {
    lock(l: number, l: number, b: boolean): Future;
    lock(object: any, completionHandler: CompletionHandler): void;
    lock(l: number, l: number, b: boolean, object: any, completionHandler: CompletionHandler): void;
    lock(): Future;
    size(): number;
    write(byteBuffer: ByteBuffer, l: number, object: any, completionHandler: CompletionHandler): void;
    write(byteBuffer: ByteBuffer, l: number): Future;
    read(byteBuffer: ByteBuffer, l: number, object: any, completionHandler: CompletionHandler): void;
    read(byteBuffer: ByteBuffer, l: number): Future;
    open(path: Path, openOption: OpenOption): AsynchronousFileChannel;
    open(path: Path, set: Set, executorService: ExecutorService, fileAttribute: FileAttribute): AsynchronousFileChannel;
    truncate(l: number): AsynchronousFileChannel;
    tryLock(): FileLock;
    tryLock(l: number, l: number, b: boolean): FileLock;
    force(b: boolean): void;
}

// java.awt.font.GlyphMetrics
declare interface GlyphMetrics {
    isWhitespace(): boolean;
    getType(): number;
    getAdvance(): number;
    isStandard(): boolean;
    getBounds2D(): Rectangle2D;
    getAdvanceX(): number;
    getAdvanceY(): number;
    getLSB(): number;
    getRSB(): number;
    isLigature(): boolean;
    isCombining(): boolean;
    isComponent(): boolean;
    STANDARD: number;
    LIGATURE: number;
    COMBINING: number;
    COMPONENT: number;
    WHITESPACE: number;
}

// org.yaml.snakeyaml.DumperOptions$FlowStyle
declare enum FlowStyle {
    FLOW,
    BLOCK,
    AUTO,
}

// java.awt.GraphicsConfigTemplate
declare interface GraphicsConfigTemplate extends Serializable {
    getBestConfiguration(graphicsConfiguration: GraphicsConfiguration): GraphicsConfiguration;
    isGraphicsConfigSupported(graphicsConfiguration: GraphicsConfiguration): boolean;
    REQUIRED: number;
    PREFERRED: number;
    UNNECESSARY: number;
}

// java.lang.Double
declare interface Double extends Number, Comparable {
    equals(object: any): boolean;
    toString(d: number): string;
    toString(): string;
    hashCode(): number;
    hashCode(d: number): number;
    min(d: number, d: number): number;
    max(d: number, d: number): number;
    doubleToRawLongBits(d: number): number;
    doubleToLongBits(d: number): number;
    longBitsToDouble(l: number): number;
    compareTo(object: any): number;
    compareTo(double: Double): number;
    valueOf(s: string): Double;
    valueOf(d: number): Double;
    toHexString(d: number): string;
    compare(d: number, d: number): number;
    isNaN(d: number): boolean;
    isNaN(): boolean;
    isInfinite(d: number): boolean;
    isInfinite(): boolean;
    isFinite(d: number): boolean;
    sum(d: number, d: number): number;
    parseDouble(s: string): number;
    POSITIVE_INFINITY: number;
    NEGATIVE_INFINITY: number;
    NaN: number;
    MAX_VALUE: number;
    MIN_NORMAL: number;
    MIN_VALUE: number;
    MAX_EXPONENT: number;
    MIN_EXPONENT: number;
    SIZE: number;
    BYTES: number;
    TYPE: Class;
}

// java.io.ObjectStreamField
declare interface ObjectStreamField extends Comparable {
    isPrimitive(): boolean;
    compareTo(object: any): number;
    getName(): string;
    getType(): Class;
    getTypeCode(): string;
    getTypeString(): string;
    getOffset(): number;
    isUnshared(): boolean;
}

// org.yaml.snakeyaml.DumperOptions$ScalarStyle
declare enum ScalarStyle {
    DOUBLE_QUOTED,
    SINGLE_QUOTED,
    LITERAL,
    FOLDED,
    PLAIN,
}

// net.md_5.bungee.api.chat.HoverEvent$Action
declare enum Action {
    SHOW_TEXT,
    SHOW_ITEM,
    SHOW_ENTITY,
    SHOW_ACHIEVEMENT,
}

// java.nio.file.AccessMode
declare enum AccessMode {
    READ,
    WRITE,
    EXECUTE,
}

// java.time.LocalDateTime
declare interface LocalDateTime extends Temporal, TemporalAdjuster, ChronoLocalDateTime, Serializable {
    get(temporalField: TemporalField): number;
    compareTo(chronoLocalDateTime: ChronoLocalDateTime): number;
    compareTo(object: any): number;
    getLong(temporalField: TemporalField): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(localDate: LocalDate, localTime: LocalTime): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    now(): LocalDateTime;
    now(clock: Clock): LocalDateTime;
    now(zoneId: ZoneId): LocalDateTime;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    parse(s: string): LocalDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): LocalDateTime;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    atOffset(zoneOffset: ZoneOffset): OffsetDateTime;
    atZone(zoneId: ZoneId): ZonedDateTime;
    atZone(zoneId: ZoneId): ChronoZonedDateTime;
    isAfter(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isBefore(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isEqual(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    getNano(): number;
    ofEpochSecond(l: number, i: number, zoneOffset: ZoneOffset): LocalDateTime;
    getYear(): number;
    getMonthValue(): number;
    getDayOfMonth(): number;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    toLocalDate(): LocalDate;
    toLocalDate(): ChronoLocalDate;
    withYear(i: number): LocalDateTime;
    withMonth(i: number): LocalDateTime;
    withDayOfMonth(i: number): LocalDateTime;
    withDayOfYear(i: number): LocalDateTime;
    withHour(i: number): LocalDateTime;
    withMinute(i: number): LocalDateTime;
    withSecond(i: number): LocalDateTime;
    withNano(i: number): LocalDateTime;
    plusYears(l: number): LocalDateTime;
    plusMonths(l: number): LocalDateTime;
    plusWeeks(l: number): LocalDateTime;
    minusYears(l: number): LocalDateTime;
    minusMonths(l: number): LocalDateTime;
    minusWeeks(l: number): LocalDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): LocalDateTime;
    with(temporalField: TemporalField, l: number): ChronoLocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDateTime;
    with(temporalField: TemporalField, l: number): LocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): LocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    getMonth(): Month;
    getDayOfWeek(): DayOfWeek;
    plus(temporalAmount: TemporalAmount): LocalDateTime;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): LocalDateTime;
    plusDays(l: number): LocalDateTime;
    plusHours(l: number): LocalDateTime;
    plusMinutes(l: number): LocalDateTime;
    plusNanos(l: number): LocalDateTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): LocalDateTime;
    minus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    minus(temporalAmount: TemporalAmount): LocalDateTime;
    minusDays(l: number): LocalDateTime;
    minusHours(l: number): LocalDateTime;
    minusMinutes(l: number): LocalDateTime;
    minusSeconds(l: number): LocalDateTime;
    minusNanos(l: number): LocalDateTime;
    truncatedTo(temporalUnit: TemporalUnit): LocalDateTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    getDayOfYear(): number;
    plusSeconds(l: number): LocalDateTime;
    toLocalTime(): LocalTime;
    MIN: LocalDateTime;
    MAX: LocalDateTime;
}

// java.nio.channels.SeekableByteChannel
declare interface SeekableByteChannel extends ByteChannel {
    size(): number;
    position(l: number): SeekableByteChannel;
    position(): number;
    write(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    truncate(l: number): SeekableByteChannel;
}

// net.md_5.bungee.api.chat.hover.content.Content
declare interface Content {
    assertAction(action: Action): void;
    requiredAction(): Action;
}

// java.nio.file.DirectoryStream
declare interface DirectoryStream extends Closeable, Iterable {
    iterator(): Iterator;
}

// java.time.chrono.ChronoLocalDate
declare interface ChronoLocalDate extends Temporal, TemporalAdjuster, Comparable {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(object: any): number;
    compareTo(chronoLocalDate: ChronoLocalDate): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    adjustInto(temporal: Temporal): Temporal;
    isAfter(chronoLocalDate: ChronoLocalDate): boolean;
    isBefore(chronoLocalDate: ChronoLocalDate): boolean;
    isEqual(chronoLocalDate: ChronoLocalDate): boolean;
    timeLineOrder(): Comparator;
    getChronology(): Chronology;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDate;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): ChronoLocalDate;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    getEra(): Era;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    plus(temporalAmount: TemporalAmount): ChronoLocalDate;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(temporalAmount: TemporalAmount): ChronoLocalDate;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    until(chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    isLeapYear(): boolean;
    lengthOfMonth(): number;
    toEpochDay(): number;
    lengthOfYear(): number;
    atTime(localTime: LocalTime): ChronoLocalDateTime;
}

// java.time.LocalTime
declare interface LocalTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    get(temporalField: TemporalField): number;
    compareTo(localTime: LocalTime): number;
    compareTo(object: any): number;
    getLong(temporalField: TemporalField): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): LocalTime;
    of(i: number, i: number, i: number): LocalTime;
    of(i: number, i: number): LocalTime;
    of(i: number, i: number, i: number, i: number): LocalTime;
    now(): LocalTime;
    now(zoneId: ZoneId): LocalTime;
    now(clock: Clock): LocalTime;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): LocalTime;
    parse(s: string): LocalTime;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    atOffset(zoneOffset: ZoneOffset): OffsetTime;
    isAfter(localTime: LocalTime): boolean;
    isBefore(localTime: LocalTime): boolean;
    ofSecondOfDay(l: number): LocalTime;
    atDate(localDate: LocalDate): LocalDateTime;
    getNano(): number;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    withHour(i: number): LocalTime;
    withMinute(i: number): LocalTime;
    withSecond(i: number): LocalTime;
    withNano(i: number): LocalTime;
    toNanoOfDay(): number;
    toEpochSecond(localDate: LocalDate, zoneOffset: ZoneOffset): number;
    ofInstant(instant: Instant, zoneId: ZoneId): LocalTime;
    with(temporalAdjuster: TemporalAdjuster): LocalTime;
    with(temporalField: TemporalField, l: number): LocalTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    plus(temporalAmount: TemporalAmount): LocalTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): LocalTime;
    plusHours(l: number): LocalTime;
    plusMinutes(l: number): LocalTime;
    plusNanos(l: number): LocalTime;
    minus(l: number, temporalUnit: TemporalUnit): LocalTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(temporalAmount: TemporalAmount): LocalTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minusHours(l: number): LocalTime;
    minusMinutes(l: number): LocalTime;
    minusSeconds(l: number): LocalTime;
    minusNanos(l: number): LocalTime;
    truncatedTo(temporalUnit: TemporalUnit): LocalTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    plusSeconds(l: number): LocalTime;
    toSecondOfDay(): number;
    ofNanoOfDay(l: number): LocalTime;
    MIN: LocalTime;
    MAX: LocalTime;
    MIDNIGHT: LocalTime;
    NOON: LocalTime;
}

// java.util.Hashtable
declare interface Hashtable extends Dictionary, Map, Cloneable, Serializable {
    remove(object: any, object: any): boolean;
    equals(object: any): boolean;
    toString(): string;
    values(): Collection;
    hashCode(): number;
    clone(): any;
    clear(): void;
    replace(object: any, object: any): any;
    replace(object: any, object: any, object: any): boolean;
    contains(object: any): boolean;
    replaceAll(biFunction: BiFunction): void;
    merge(object: any, object: any, biFunction: BiFunction): any;
    entrySet(): Set;
    putAll(map: Map): void;
    putIfAbsent(object: any, object: any): any;
    compute(object: any, biFunction: BiFunction): any;
    forEach(biConsumer: BiConsumer): void;
    containsKey(object: any): boolean;
    computeIfAbsent(object: any, func: Function): any;
    containsValue(object: any): boolean;
    keySet(): Set;
    getOrDefault(object: any, object: any): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
}

// java.util.concurrent.Flow$Publisher
declare interface Publisher {
    subscribe(subscriber: Subscriber): void;
}

// java.security.CodeSigner
declare interface CodeSigner extends Serializable {
    getSignerCertPath(): CertPath;
    getTimestamp(): Timestamp;
}

// java.awt.Window
declare interface Window extends Container, Accessible {
    getType(): Type;
    isOpaque(): boolean;
    isActive(): boolean;
    getOwner(): Window;
    setAlwaysOnTop(b: boolean): void;
    isAlwaysOnTopSupported(): boolean;
    isAlwaysOnTop(): boolean;
    getFocusOwner(): Component;
    getMostRecentFocusOwner(): Component;
    isFocused(): boolean;
    getFocusCycleRootAncestor(): Container;
    isFocusableWindow(): boolean;
    getFocusableWindowState(): boolean;
    setFocusableWindowState(b: boolean): void;
    setAutoRequestFocus(b: boolean): void;
    isAutoRequestFocus(): boolean;
    postEvent(event: Event): boolean;
    isShowing(): boolean;
    applyResourceBundle(resourceBundle: ResourceBundle): void;
    applyResourceBundle(s: string): void;
    getAccessibleContext(): AccessibleContext;
    setLocationRelativeTo(component: Component): void;
    createBufferStrategy(i: number, bufferCapabilities: BufferCapabilities): void;
    createBufferStrategy(i: number): void;
    getBufferStrategy(): BufferStrategy;
    setLocationByPlatform(b: boolean): void;
    isLocationByPlatform(): boolean;
    pack(): void;
    getOpacity(): number;
    setOpacity(f: number): void;
    toFront(): void;
    setSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    setType(type: Type): void;
    getLocale(): Locale;
    dispose(): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setBounds(rectangle: Rectangle): void;
    reshape(i: number, i: number, i: number, i: number): void;
    setLocation(i: number, i: number): void;
    setLocation(point: Point): void;
    setBackground(color: Color): void;
    getBackground(): Color;
    setVisible(b: boolean): void;
    show(): void;
    hide(): void;
    setShape(shape: Shape): void;
    getShape(): Shape;
    setCursor(cursor: Cursor): void;
    getIconImages(): List;
    setIconImages(list: List): void;
    setIconImage(image: Image): void;
    setMinimumSize(dimension: Dimension): void;
    toBack(): void;
    getToolkit(): Toolkit;
    getWarningString(): string;
    getInputContext(): InputContext;
    getOwnedWindows(): Window[];
    getWindows(): Window[];
    getOwnerlessWindows(): Window[];
    setModalExclusionType(modalExclusionType: ModalExclusionType): void;
    getModalExclusionType(): ModalExclusionType;
    addWindowListener(windowListener: WindowListener): void;
    addWindowStateListener(windowStateListener: WindowStateListener): void;
    addWindowFocusListener(windowFocusListener: WindowFocusListener): void;
    removeWindowListener(windowListener: WindowListener): void;
    removeWindowStateListener(windowStateListener: WindowStateListener): void;
    removeWindowFocusListener(windowFocusListener: WindowFocusListener): void;
    getWindowListeners(): WindowListener[];
    getWindowFocusListeners(): WindowFocusListener[];
    getWindowStateListeners(): WindowStateListener[];
}

// java.nio.file.FileStore
declare interface FileStore {
    name(): string;
    type(): string;
    isReadOnly(): boolean;
    getTotalSpace(): number;
    getUsableSpace(): number;
    getBlockSize(): number;
    getUnallocatedSpace(): number;
    supportsFileAttributeView(s: string): boolean;
    supportsFileAttributeView(clazz: Class): boolean;
    getAttribute(s: string): any;
    getFileStoreAttributeView(clazz: Class): FileStoreAttributeView;
}

// java.text.AttributedCharacterIterator$Attribute
declare interface Attribute extends Serializable {
    LANGUAGE: Attribute;
    READING: Attribute;
    INPUT_METHOD_SEGMENT: Attribute;
}

// java.awt.BufferCapabilities$FlipContents
declare interface FlipContents extends AttributeValue {
    UNDEFINED: FlipContents;
    BACKGROUND: FlipContents;
    PRIOR: FlipContents;
    COPIED: FlipContents;
}

// java.nio.channels.SocketChannel
declare interface SocketChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, NetworkChannel {
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
    write(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    connect(socketAddress: SocketAddress): boolean;
    open(): SocketChannel;
    open(socketAddress: SocketAddress): SocketChannel;
    bind(socketAddress: SocketAddress): NetworkChannel;
    bind(socketAddress: SocketAddress): SocketChannel;
    validOps(): number;
    isConnectionPending(): boolean;
    finishConnect(): boolean;
    getRemoteAddress(): SocketAddress;
    getLocalAddress(): SocketAddress;
    socket(): Socket;
    shutdownInput(): SocketChannel;
    shutdownOutput(): SocketChannel;
    isConnected(): boolean;
    setOption(socketOption: SocketOption, object: any): SocketChannel;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
}

// java.time.format.TextStyle
declare enum TextStyle {
    FULL,
    FULL_STANDALONE,
    SHORT,
    SHORT_STANDALONE,
    NARROW,
    NARROW_STANDALONE,
}

// java.net.SocketOption
declare interface SocketOption {
    name(): string;
    type(): Class;
}

// java.util.stream.Collector$Characteristics
declare enum Characteristics {
    CONCURRENT,
    UNORDERED,
    IDENTITY_FINISH,
}

// java.security.Guard
declare interface Guard {
    checkGuard(object: any): void;
}

// java.net.ServerSocket
declare interface ServerSocket extends Closeable {
    accept(): Socket;
    close(): void;
    getChannel(): ServerSocketChannel;
    bind(socketAddress: SocketAddress, i: number): void;
    bind(socketAddress: SocketAddress): void;
    getInetAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): SocketAddress;
    setSoTimeout(i: number): void;
    getSoTimeout(): number;
    setReceiveBufferSize(i: number): void;
    getReceiveBufferSize(): number;
    setReuseAddress(b: boolean): void;
    getReuseAddress(): boolean;
    isBound(): boolean;
    isClosed(): boolean;
    setPerformancePreferences(i: number, i: number, i: number): void;
    setOption(socketOption: SocketOption, object: any): ServerSocket;
    getOption(socketOption: SocketOption): any;
    supportedOptions(): Set;
    setSocketFactory(socketImplFactory: SocketImplFactory): void;
}

// javax.net.ssl.SSLEngineResult$Status
declare enum Status {
    BUFFER_UNDERFLOW,
    BUFFER_OVERFLOW,
    OK,
    CLOSED,
}

// java.util.concurrent.ExecutorService
declare interface ExecutorService extends Executor {
    shutdown(): void;
    isShutdown(): boolean;
    shutdownNow(): List;
    isTerminated(): boolean;
    awaitTermination(l: number, timeUnit: TimeUnit): boolean;
    invokeAny(collection: Collection): any;
    invokeAny(collection: Collection, l: number, timeUnit: TimeUnit): any;
    invokeAll(collection: Collection, l: number, timeUnit: TimeUnit): List;
    invokeAll(collection: Collection): List;
    submit(callable: Callable): Future;
    submit(runnable: Runnable, object: any): Future;
    submit(runnable: Runnable): Future;
}

// java.lang.reflect.Parameter
declare interface Parameter extends AnnotatedElement {
    getModifiers(): number;
    getName(): string;
    isSynthetic(): boolean;
    getAnnotation(clazz: Class): Annotation;
    getAnnotationsByType(clazz: Class): Annotation[];
    getAnnotations(): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getType(): Class;
    getAnnotatedType(): AnnotatedType;
    isNamePresent(): boolean;
    getDeclaringExecutable(): Executable;
    getParameterizedType(): Type;
    isImplicit(): boolean;
    isVarArgs(): boolean;
}

// org.yaml.snakeyaml.error.Mark
declare interface Mark extends Serializable {
    getName(): string;
    getIndex(): number;
    getBuffer(): number[];
    getLine(): number;
    getColumn(): number;
    get_snippet(): string;
    get_snippet(i: number, i: number): string;
    getPointer(): number;
}

// java.awt.geom.Dimension2D
declare interface Dimension2D extends Cloneable {
    setSize(d: number, d: number): void;
    setSize(dimension2D: Dimension2D): void;
    getHeight(): number;
    getWidth(): number;
}

// java.time.Month
declare enum Month {
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER,
}

// java.time.LocalDate
declare interface LocalDate extends Temporal, TemporalAdjuster, ChronoLocalDate, Serializable {
    get(temporalField: TemporalField): number;
    compareTo(object: any): number;
    compareTo(chronoLocalDate: ChronoLocalDate): number;
    getLong(temporalField: TemporalField): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): LocalDate;
    of(i: number, i: number, i: number): LocalDate;
    of(i: number, month: Month, i: number): LocalDate;
    now(): LocalDate;
    now(clock: Clock): LocalDate;
    now(zoneId: ZoneId): LocalDate;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    parse(s: string): LocalDate;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): LocalDate;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    isAfter(chronoLocalDate: ChronoLocalDate): boolean;
    isBefore(chronoLocalDate: ChronoLocalDate): boolean;
    isEqual(chronoLocalDate: ChronoLocalDate): boolean;
    getYear(): number;
    getMonthValue(): number;
    getDayOfMonth(): number;
    withYear(i: number): LocalDate;
    withMonth(i: number): LocalDate;
    withDayOfMonth(i: number): LocalDate;
    withDayOfYear(i: number): LocalDate;
    plusYears(l: number): LocalDate;
    plusMonths(l: number): LocalDate;
    plusWeeks(l: number): LocalDate;
    minusYears(l: number): LocalDate;
    minusMonths(l: number): LocalDate;
    minusWeeks(l: number): LocalDate;
    getChronology(): Chronology;
    getChronology(): IsoChronology;
    toEpochSecond(localTime: LocalTime, zoneOffset: ZoneOffset): number;
    ofInstant(instant: Instant, zoneId: ZoneId): LocalDate;
    with(temporalAdjuster: TemporalAdjuster): LocalDate;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDate;
    with(temporalField: TemporalField, l: number): ChronoLocalDate;
    with(temporalField: TemporalField, l: number): LocalDate;
    getMonth(): Month;
    getDayOfWeek(): DayOfWeek;
    getEra(): IsoEra;
    getEra(): Era;
    plus(temporalAmount: TemporalAmount): ChronoLocalDate;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    plus(temporalAmount: TemporalAmount): LocalDate;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): LocalDate;
    plusDays(l: number): LocalDate;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): LocalDate;
    minus(temporalAmount: TemporalAmount): ChronoLocalDate;
    minus(temporalAmount: TemporalAmount): LocalDate;
    minusDays(l: number): LocalDate;
    until(chronoLocalDate: ChronoLocalDate): Period;
    until(chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    getDayOfYear(): number;
    isLeapYear(): boolean;
    lengthOfMonth(): number;
    toEpochDay(): number;
    ofEpochDay(l: number): LocalDate;
    ofYearDay(i: number, i: number): LocalDate;
    lengthOfYear(): number;
    datesUntil(localDate: LocalDate): Stream;
    datesUntil(localDate: LocalDate, period: Period): Stream;
    atTime(i: number, i: number, i: number): LocalDateTime;
    atTime(localTime: LocalTime): ChronoLocalDateTime;
    atTime(localTime: LocalTime): LocalDateTime;
    atTime(i: number, i: number): LocalDateTime;
    atTime(i: number, i: number, i: number, i: number): LocalDateTime;
    atTime(offsetTime: OffsetTime): OffsetDateTime;
    atStartOfDay(zoneId: ZoneId): ZonedDateTime;
    atStartOfDay(): LocalDateTime;
    MIN: LocalDate;
    MAX: LocalDate;
    EPOCH: LocalDate;
}

// java.time.DayOfWeek
declare enum DayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}

// java.awt.DisplayMode
declare interface DisplayMode {
    equals(displayMode: DisplayMode): boolean;
    getHeight(): number;
    getWidth(): number;
    getBitDepth(): number;
    getRefreshRate(): number;
    BIT_DEPTH_MULTI: number;
    REFRESH_RATE_UNKNOWN: number;
}

// javax.security.cert.X509Certificate
declare interface X509Certificate extends Certificate {
    getInstance(inputStream: InputStream): X509Certificate;
    getInstance(b: number): X509Certificate;
    checkValidity(): void;
    checkValidity(date: Date): void;
    getSerialNumber(): BigInteger;
    getNotBefore(): Date;
    getNotAfter(): Date;
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSigAlgParams(): number[];
    getVersion(): number;
    getIssuerDN(): Principal;
    getSubjectDN(): Principal;
}

// java.security.spec.AlgorithmParameterSpec
declare interface AlgorithmParameterSpec {
}

// java.lang.module.Configuration
declare interface Configuration {
    empty(): Configuration;
    resolve(moduleFinder: ModuleFinder, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    resolve(moduleFinder: ModuleFinder, list: List, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    modules(): Set;
    findModule(s: string): Optional;
    parents(): List;
    resolveAndBind(moduleFinder: ModuleFinder, list: List, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    resolveAndBind(moduleFinder: ModuleFinder, moduleFinder: ModuleFinder, collection: Collection): Configuration;
}

// java.nio.file.attribute.GroupPrincipal
declare interface GroupPrincipal extends UserPrincipal {
}

// java.net.ContentHandler
declare interface ContentHandler {
    getContent(uRLConnection: URLConnection): any;
    getContent(uRLConnection: URLConnection, clazz: Class): any;
}

// java.lang.ModuleLayer$Controller
declare interface Controller {
    addReads(module: Module, module: Module): Controller;
    addExports(module: Module, s: string, module: Module): Controller;
    addOpens(module: Module, s: string, module: Module): Controller;
    layer(): ModuleLayer;
}

// java.time.OffsetTime
declare interface OffsetTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    get(temporalField: TemporalField): number;
    compareTo(object: any): number;
    compareTo(offsetTime: OffsetTime): number;
    getLong(temporalField: TemporalField): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): OffsetTime;
    of(i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): OffsetTime;
    of(localTime: LocalTime, zoneOffset: ZoneOffset): OffsetTime;
    now(): OffsetTime;
    now(zoneId: ZoneId): OffsetTime;
    now(clock: Clock): OffsetTime;
    query(temporalQuery: TemporalQuery): any;
    getOffset(): ZoneOffset;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): OffsetTime;
    parse(s: string): OffsetTime;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    isAfter(offsetTime: OffsetTime): boolean;
    isBefore(offsetTime: OffsetTime): boolean;
    isEqual(offsetTime: OffsetTime): boolean;
    atDate(localDate: LocalDate): OffsetDateTime;
    getNano(): number;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    withOffsetSameLocal(zoneOffset: ZoneOffset): OffsetTime;
    withOffsetSameInstant(zoneOffset: ZoneOffset): OffsetTime;
    withHour(i: number): OffsetTime;
    withMinute(i: number): OffsetTime;
    withSecond(i: number): OffsetTime;
    withNano(i: number): OffsetTime;
    toEpochSecond(localDate: LocalDate): number;
    ofInstant(instant: Instant, zoneId: ZoneId): OffsetTime;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): OffsetTime;
    with(temporalField: TemporalField, l: number): OffsetTime;
    plus(l: number, temporalUnit: TemporalUnit): OffsetTime;
    plus(temporalAmount: TemporalAmount): OffsetTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plusHours(l: number): OffsetTime;
    plusMinutes(l: number): OffsetTime;
    plusNanos(l: number): OffsetTime;
    minus(l: number, temporalUnit: TemporalUnit): OffsetTime;
    minus(temporalAmount: TemporalAmount): OffsetTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minusHours(l: number): OffsetTime;
    minusMinutes(l: number): OffsetTime;
    minusSeconds(l: number): OffsetTime;
    minusNanos(l: number): OffsetTime;
    truncatedTo(temporalUnit: TemporalUnit): OffsetTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    plusSeconds(l: number): OffsetTime;
    toLocalTime(): LocalTime;
    MIN: OffsetTime;
    MAX: OffsetTime;
}

// java.lang.Long
declare interface Long extends Number, Comparable {
    numberOfLeadingZeros(l: number): number;
    numberOfTrailingZeros(l: number): number;
    bitCount(l: number): number;
    equals(object: any): boolean;
    toString(l: number): string;
    toString(l: number, i: number): string;
    toString(): string;
    hashCode(l: number): number;
    hashCode(): number;
    min(l: number, l: number): number;
    max(l: number, l: number): number;
    signum(l: number): number;
    reverseBytes(l: number): number;
    compareTo(object: any): number;
    compareTo(long: Long): number;
    getLong(s: string): Long;
    getLong(s: string, l: number): Long;
    getLong(s: string, long: Long): Long;
    valueOf(s: string): Long;
    valueOf(s: string, i: number): Long;
    valueOf(l: number): Long;
    toHexString(l: number): string;
    decode(s: string): Long;
    compare(l: number, l: number): number;
    reverse(l: number): number;
    sum(l: number, l: number): number;
    compareUnsigned(l: number, l: number): number;
    toUnsignedString(l: number, i: number): string;
    toUnsignedString(l: number): string;
    toOctalString(l: number): string;
    toBinaryString(l: number): string;
    divideUnsigned(l: number, l: number): number;
    remainderUnsigned(l: number, l: number): number;
    highestOneBit(l: number): number;
    lowestOneBit(l: number): number;
    rotateLeft(l: number, i: number): number;
    rotateRight(l: number, i: number): number;
    parseLong(s: string, i: number, i: number, i: number): number;
    parseLong(s: string, i: number): number;
    parseLong(s: string): number;
    parseUnsignedLong(s: string, i: number): number;
    parseUnsignedLong(s: string): number;
    parseUnsignedLong(s: string, i: number, i: number, i: number): number;
    MIN_VALUE: number;
    MAX_VALUE: number;
    TYPE: Class;
    SIZE: number;
    BYTES: number;
}

// java.time.format.DateTimeFormatter
declare interface DateTimeFormatter {
    format(temporalAccessor: TemporalAccessor): string;
    parse(s: string): TemporalAccessor;
    parse(s: string, temporalQuery: TemporalQuery): any;
    parse(s: string, parsePosition: ParsePosition): TemporalAccessor;
    withZone(zoneId: ZoneId): DateTimeFormatter;
    getChronology(): Chronology;
    formatTo(temporalAccessor: TemporalAccessor, appendable: Appendable): void;
    getLocale(): Locale;
    getZone(): ZoneId;
    ofPattern(s: string): DateTimeFormatter;
    ofPattern(s: string, locale: Locale): DateTimeFormatter;
    ofLocalizedDate(formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedTime(formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedDateTime(formatStyle: FormatStyle, formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedDateTime(formatStyle: FormatStyle): DateTimeFormatter;
    parsedExcessDays(): TemporalQuery;
    parsedLeapSecond(): TemporalQuery;
    withLocale(locale: Locale): DateTimeFormatter;
    localizedBy(locale: Locale): DateTimeFormatter;
    getDecimalStyle(): DecimalStyle;
    withDecimalStyle(decimalStyle: DecimalStyle): DateTimeFormatter;
    withChronology(chronology: Chronology): DateTimeFormatter;
    getResolverStyle(): ResolverStyle;
    withResolverStyle(resolverStyle: ResolverStyle): DateTimeFormatter;
    getResolverFields(): Set;
    withResolverFields(temporalField: TemporalField): DateTimeFormatter;
    withResolverFields(set: Set): DateTimeFormatter;
    parseBest(s: string, temporalQuery: TemporalQuery): TemporalAccessor;
    parseUnresolved(s: string, parsePosition: ParsePosition): TemporalAccessor;
    toFormat(): Format;
    toFormat(temporalQuery: TemporalQuery): Format;
    ISO_LOCAL_DATE: DateTimeFormatter;
    ISO_OFFSET_DATE: DateTimeFormatter;
    ISO_DATE: DateTimeFormatter;
    ISO_LOCAL_TIME: DateTimeFormatter;
    ISO_OFFSET_TIME: DateTimeFormatter;
    ISO_TIME: DateTimeFormatter;
    ISO_LOCAL_DATE_TIME: DateTimeFormatter;
    ISO_OFFSET_DATE_TIME: DateTimeFormatter;
    ISO_ZONED_DATE_TIME: DateTimeFormatter;
    ISO_DATE_TIME: DateTimeFormatter;
    ISO_ORDINAL_DATE: DateTimeFormatter;
    ISO_WEEK_DATE: DateTimeFormatter;
    ISO_INSTANT: DateTimeFormatter;
    BASIC_ISO_DATE: DateTimeFormatter;
    RFC_1123_DATE_TIME: DateTimeFormatter;
}

// java.nio.file.CopyOption
declare interface CopyOption {
}

// java.nio.file.attribute.BasicFileAttributes
declare interface BasicFileAttributes {
    size(): number;
    isDirectory(): boolean;
    isRegularFile(): boolean;
    isOther(): boolean;
    lastAccessTime(): FileTime;
    creationTime(): FileTime;
    isSymbolicLink(): boolean;
    lastModifiedTime(): FileTime;
    fileKey(): any;
}

// java.awt.GraphicsDevice$WindowTranslucency
declare enum WindowTranslucency {
    PERPIXEL_TRANSPARENT,
    TRANSLUCENT,
    PERPIXEL_TRANSLUCENT,
}

// java.awt.font.LineMetrics
declare interface LineMetrics {
    getLeading(): number;
    getAscent(): number;
    getDescent(): number;
    getNumChars(): number;
    getBaselineIndex(): number;
    getBaselineOffsets(): number[];
    getStrikethroughOffset(): number;
    getStrikethroughThickness(): number;
    getUnderlineOffset(): number;
    getUnderlineThickness(): number;
    getHeight(): number;
}

// java.security.BasicPermission
declare interface BasicPermission extends Permission, Serializable {
}

// java.nio.file.DirectoryStream$Filter
declare interface Filter {
    accept(object: any): boolean;
}

// java.util.Spliterator$OfPrimitive
declare interface OfPrimitive extends Spliterator {
    forEachRemaining(object: any): void;
    tryAdvance(object: any): boolean;
    trySplit(): Spliterator;
    trySplit(): OfPrimitive;
}

// java.net.SocketImplFactory
declare interface SocketImplFactory {
    createSocketImpl(): SocketImpl;
}

// java.lang.module.ModuleDescriptor$Builder
declare interface Builder {
    version(s: string): Builder;
    version(version: Version): Builder;
    packages(set: Set): Builder;
    exports(s: string): Builder;
    exports(set: Set, s: string, set: Set): Builder;
    exports(s: string, set: Set): Builder;
    exports(set: Set, s: string): Builder;
    exports(exports: Exports): Builder;
    opens(s: string): Builder;
    opens(set: Set, s: string, set: Set): Builder;
    opens(s: string, set: Set): Builder;
    opens(opens: Opens): Builder;
    opens(set: Set, s: string): Builder;
    uses(s: string): Builder;
    provides(provides: Provides): Builder;
    provides(s: string, list: List): Builder;
    build(): ModuleDescriptor;
    requires(requires: Requires): Builder;
    requires(set: Set, s: string, version: Version): Builder;
    requires(s: string): Builder;
    requires(set: Set, s: string): Builder;
    mainClass(s: string): Builder;
}

// net.md_5.bungee.api.chat.ClickEvent$Action
declare enum Action {
    OPEN_URL,
    OPEN_FILE,
    RUN_COMMAND,
    SUGGEST_COMMAND,
    CHANGE_PAGE,
    COPY_TO_CLIPBOARD,
}

// java.time.chrono.ChronoLocalDateTime
declare interface ChronoLocalDateTime extends Temporal, TemporalAdjuster, Comparable {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(chronoLocalDateTime: ChronoLocalDateTime): number;
    compareTo(object: any): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    adjustInto(temporal: Temporal): Temporal;
    atZone(zoneId: ZoneId): ChronoZonedDateTime;
    isAfter(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isBefore(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isEqual(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    toInstant(zoneOffset: ZoneOffset): Instant;
    timeLineOrder(): Comparator;
    toLocalDate(): ChronoLocalDate;
    getChronology(): Chronology;
    toEpochSecond(zoneOffset: ZoneOffset): number;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): ChronoLocalDateTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    plus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    minus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    toLocalTime(): LocalTime;
}

// java.awt.CompositeContext
declare interface CompositeContext {
    compose(raster: Raster, raster: Raster, writableRaster: WritableRaster): void;
    dispose(): void;
}

// java.nio.channels.FileChannel
declare interface FileChannel extends AbstractInterruptibleChannel, SeekableByteChannel, GatheringByteChannel, ScatteringByteChannel {
    lock(): FileLock;
    lock(l: number, l: number, b: boolean): FileLock;
    size(): number;
    map(mapMode: MapMode, l: number, l: number): MappedByteBuffer;
    position(l: number): FileChannel;
    position(): number;
    position(l: number): SeekableByteChannel;
    write(byteBuffer: ByteBuffer, l: number): number;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
    write(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, l: number): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    open(path: Path, set: Set, fileAttribute: FileAttribute): FileChannel;
    open(path: Path, openOption: OpenOption): FileChannel;
    transferTo(l: number, l: number, writableByteChannel: WritableByteChannel): number;
    truncate(l: number): FileChannel;
    truncate(l: number): SeekableByteChannel;
    tryLock(): FileLock;
    tryLock(l: number, l: number, b: boolean): FileLock;
    transferFrom(readableByteChannel: ReadableByteChannel, l: number, l: number): number;
    force(b: boolean): void;
}

// java.lang.module.ModuleDescriptor$Exports
declare interface Exports extends Comparable {
    modifiers(): Set;
    compareTo(exports: Exports): number;
    compareTo(object: any): number;
    source(): string;
    isQualified(): boolean;
    targets(): Set;
}

// java.lang.module.ModuleDescriptor$Provides
declare interface Provides extends Comparable {
    compareTo(object: any): number;
    compareTo(provides: Provides): number;
    service(): string;
    providers(): List;
}

// java.time.chrono.Era
declare interface Era extends TemporalAccessor, TemporalAdjuster {
    get(temporalField: TemporalField): number;
    getLong(temporalField: TemporalField): number;
    getValue(): number;
    query(temporalQuery: TemporalQuery): any;
    isSupported(temporalField: TemporalField): boolean;
    range(temporalField: TemporalField): ValueRange;
    adjustInto(temporal: Temporal): Temporal;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
}

// javax.accessibility.AccessibleContext
declare interface AccessibleContext {
    firePropertyChange(s: string, object: any, object: any): void;
    getAccessibleChildrenCount(): number;
    getAccessibleChild(i: number): Accessible;
    getAccessibleComponent(): AccessibleComponent;
    addPropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    getLocale(): Locale;
    getAccessibleName(): string;
    setAccessibleName(s: string): void;
    getAccessibleDescription(): string;
    setAccessibleDescription(s: string): void;
    getAccessibleRole(): AccessibleRole;
    setAccessibleParent(accessible: Accessible): void;
    getAccessibleAction(): AccessibleAction;
    getAccessibleText(): AccessibleText;
    getAccessibleEditableText(): AccessibleEditableText;
    getAccessibleValue(): AccessibleValue;
    getAccessibleIcon(): AccessibleIcon[];
    getAccessibleRelationSet(): AccessibleRelationSet;
    getAccessibleTable(): AccessibleTable;
    removePropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    getAccessibleIndexInParent(): number;
    getAccessibleStateSet(): AccessibleStateSet;
    getAccessibleParent(): Accessible;
    getAccessibleSelection(): AccessibleSelection;
    ACCESSIBLE_NAME_PROPERTY: string;
    ACCESSIBLE_DESCRIPTION_PROPERTY: string;
    ACCESSIBLE_STATE_PROPERTY: string;
    ACCESSIBLE_VALUE_PROPERTY: string;
    ACCESSIBLE_SELECTION_PROPERTY: string;
    ACCESSIBLE_CARET_PROPERTY: string;
    ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
    ACCESSIBLE_CHILD_PROPERTY: string;
    ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
    ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
    ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
    ACCESSIBLE_TABLE_MODEL_CHANGED: string;
    ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
    ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
    ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
    ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
    ACCESSIBLE_ACTION_PROPERTY: string;
    ACCESSIBLE_HYPERTEXT_OFFSET: string;
    ACCESSIBLE_TEXT_PROPERTY: string;
    ACCESSIBLE_INVALIDATE_CHILDREN: string;
    ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
    ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
}

// java.nio.file.attribute.FileTime
declare interface FileTime extends Comparable {
    compareTo(fileTime: FileTime): number;
    compareTo(object: any): number;
    to(timeUnit: TimeUnit): number;
    from(instant: Instant): FileTime;
    from(l: number, timeUnit: TimeUnit): FileTime;
    fromMillis(l: number): FileTime;
    toInstant(): Instant;
    toMillis(): number;
}

// java.nio.channels.AsynchronousChannel
declare interface AsynchronousChannel extends Channel {
    close(): void;
}

// java.awt.event.WindowStateListener
declare interface WindowStateListener extends EventListener {
    windowStateChanged(windowEvent: WindowEvent): void;
}

// java.security.Timestamp
declare interface Timestamp extends Serializable {
    getSignerCertPath(): CertPath;
    getTimestamp(): Date;
}

// java.nio.MappedByteBuffer
declare interface MappedByteBuffer extends ByteBuffer {
    load(): MappedByteBuffer;
    force(): MappedByteBuffer;
    isLoaded(): boolean;
}

// java.awt.AttributeValue
declare interface AttributeValue {
}

// java.awt.Window$Type
declare enum Type {
    NORMAL,
    UTILITY,
    POPUP,
}

// java.nio.channels.spi.AbstractInterruptibleChannel
declare interface AbstractInterruptibleChannel extends Channel, InterruptibleChannel {
    isOpen(): boolean;
    close(): void;
}

// java.net.SocketImpl
declare interface SocketImpl extends SocketOptions {
}

// java.lang.module.ModuleDescriptor$Opens
declare interface Opens extends Comparable {
    modifiers(): Set;
    compareTo(opens: Opens): number;
    compareTo(object: any): number;
    source(): string;
    isQualified(): boolean;
    targets(): Set;
}

// java.security.PrivilegedExceptionAction
declare interface PrivilegedExceptionAction {
    run(): any;
}

// java.nio.channels.ScatteringByteChannel
declare interface ScatteringByteChannel extends ReadableByteChannel {
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    read(byteBuffer: ByteBuffer): number;
}

// java.awt.im.InputContext
declare interface InputContext {
    getInstance(): InputContext;
    dispatchEvent(aWTEvent: AWTEvent): void;
    getLocale(): Locale;
    dispose(): void;
    selectInputMethod(locale: Locale): boolean;
    setCharacterSubsets(subset: Subset): void;
    setCompositionEnabled(b: boolean): void;
    isCompositionEnabled(): boolean;
    reconvert(): void;
    getInputMethodControlObject(): any;
    removeNotify(component: Component): void;
    endComposition(): void;
}

// java.nio.channels.WritableByteChannel
declare interface WritableByteChannel extends Channel {
    write(byteBuffer: ByteBuffer): number;
}

// java.text.Format
declare interface Format extends Serializable, Cloneable {
    format(object: any): string;
    format(object: any, s: string, fieldPosition: FieldPosition): string;
    formatToCharacterIterator(object: any): AttributedCharacterIterator;
    parseObject(s: string): any;
    parseObject(s: string, parsePosition: ParsePosition): any;
}

// java.nio.channels.spi.AbstractSelectableChannel
declare interface AbstractSelectableChannel extends SelectableChannel {
}

// java.nio.channels.FileChannel$MapMode
declare interface MapMode {
    READ_ONLY: MapMode;
    READ_WRITE: MapMode;
    PRIVATE: MapMode;
}

// java.awt.event.WindowListener
declare interface WindowListener extends EventListener {
    windowOpened(windowEvent: WindowEvent): void;
    windowClosing(windowEvent: WindowEvent): void;
    windowClosed(windowEvent: WindowEvent): void;
    windowIconified(windowEvent: WindowEvent): void;
    windowDeiconified(windowEvent: WindowEvent): void;
    windowActivated(windowEvent: WindowEvent): void;
    windowDeactivated(windowEvent: WindowEvent): void;
}

// java.time.Period
declare interface Period extends ChronoPeriod, Serializable {
    get(temporalUnit: TemporalUnit): number;
    from(temporalAmount: TemporalAmount): Period;
    of(i: number, i: number, i: number): Period;
    parse(s: string): Period;
    normalized(): Period;
    normalized(): ChronoPeriod;
    toTotalMonths(): number;
    getDays(): number;
    plusYears(l: number): Period;
    plusMonths(l: number): Period;
    minusYears(l: number): Period;
    minusMonths(l: number): Period;
    getChronology(): IsoChronology;
    getChronology(): Chronology;
    getMonths(): number;
    isZero(): boolean;
    ofDays(i: number): Period;
    between(localDate: LocalDate, localDate: LocalDate): Period;
    getUnits(): List;
    isNegative(): boolean;
    plus(temporalAmount: TemporalAmount): ChronoPeriod;
    plus(temporalAmount: TemporalAmount): Period;
    plusDays(l: number): Period;
    minus(temporalAmount: TemporalAmount): Period;
    minus(temporalAmount: TemporalAmount): ChronoPeriod;
    minusDays(l: number): Period;
    multipliedBy(i: number): ChronoPeriod;
    multipliedBy(i: number): Period;
    negated(): ChronoPeriod;
    negated(): Period;
    subtractFrom(temporal: Temporal): Temporal;
    addTo(temporal: Temporal): Temporal;
    ofYears(i: number): Period;
    ofMonths(i: number): Period;
    ofWeeks(i: number): Period;
    getYears(): number;
    withYears(i: number): Period;
    withMonths(i: number): Period;
    withDays(i: number): Period;
    ZERO: Period;
}

// java.security.PublicKey
declare interface PublicKey extends Key {
    serialVersionUID: number;
}

// java.nio.channels.ByteChannel
declare interface ByteChannel extends ReadableByteChannel, WritableByteChannel {
}

// java.time.chrono.IsoChronology
declare interface IsoChronology extends AbstractChronology, Serializable {
    getId(): string;
    range(chronoField: ChronoField): ValueRange;
    eraOf(i: number): Era;
    eraOf(i: number): IsoEra;
    localDateTime(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    localDateTime(temporalAccessor: TemporalAccessor): LocalDateTime;
    zonedDateTime(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ChronoZonedDateTime;
    zonedDateTime(temporalAccessor: TemporalAccessor): ZonedDateTime;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ZonedDateTime;
    getCalendarType(): string;
    date(era: Era, i: number, i: number, i: number): ChronoLocalDate;
    date(i: number, i: number, i: number): ChronoLocalDate;
    date(i: number, i: number, i: number): LocalDate;
    date(era: Era, i: number, i: number, i: number): LocalDate;
    date(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    date(temporalAccessor: TemporalAccessor): LocalDate;
    isLeapYear(l: number): boolean;
    eras(): List;
    epochSecond(i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    period(i: number, i: number, i: number): Period;
    period(i: number, i: number, i: number): ChronoPeriod;
    dateYearDay(era: Era, i: number, i: number): ChronoLocalDate;
    dateYearDay(i: number, i: number): LocalDate;
    dateYearDay(era: Era, i: number, i: number): LocalDate;
    dateYearDay(i: number, i: number): ChronoLocalDate;
    dateEpochDay(l: number): ChronoLocalDate;
    dateEpochDay(l: number): LocalDate;
    dateNow(): ChronoLocalDate;
    dateNow(zoneId: ZoneId): ChronoLocalDate;
    dateNow(clock: Clock): LocalDate;
    dateNow(zoneId: ZoneId): LocalDate;
    dateNow(): LocalDate;
    dateNow(clock: Clock): ChronoLocalDate;
    prolepticYear(era: Era, i: number): number;
    INSTANCE: IsoChronology;
}

// java.time.format.DecimalStyle
declare interface DecimalStyle {
    of(locale: Locale): DecimalStyle;
    getAvailableLocales(): Set;
    getZeroDigit(): string;
    getDecimalSeparator(): string;
    ofDefaultLocale(): DecimalStyle;
    withZeroDigit(c: string): DecimalStyle;
    getPositiveSign(): string;
    withPositiveSign(c: string): DecimalStyle;
    getNegativeSign(): string;
    withNegativeSign(c: string): DecimalStyle;
    withDecimalSeparator(c: string): DecimalStyle;
    STANDARD: DecimalStyle;
}

// java.nio.channels.ServerSocketChannel
declare interface ServerSocketChannel extends AbstractSelectableChannel, NetworkChannel {
    accept(): SocketChannel;
    open(): ServerSocketChannel;
    bind(socketAddress: SocketAddress): NetworkChannel;
    bind(socketAddress: SocketAddress, i: number): ServerSocketChannel;
    bind(socketAddress: SocketAddress): ServerSocketChannel;
    validOps(): number;
    getLocalAddress(): SocketAddress;
    socket(): ServerSocket;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): ServerSocketChannel;
}

// java.nio.channels.CompletionHandler
declare interface CompletionHandler {
    failed(throwable: Throwable, object: any): void;
    completed(object: any, object: any): void;
}

// javax.security.cert.Certificate
declare interface Certificate {
    getEncoded(): number[];
    verify(publicKey: PublicKey, s: string): void;
    verify(publicKey: PublicKey): void;
    getPublicKey(): PublicKey;
}

// java.lang.module.ModuleDescriptor$Version
declare interface Version extends Comparable {
    compareTo(version: Version): number;
    compareTo(object: any): number;
    parse(s: string): Version;
}

// java.nio.channels.ReadableByteChannel
declare interface ReadableByteChannel extends Channel {
    read(byteBuffer: ByteBuffer): number;
}

// java.awt.image.BufferStrategy
declare interface BufferStrategy {
    contentsLost(): boolean;
    dispose(): void;
    getCapabilities(): BufferCapabilities;
    show(): void;
    getDrawGraphics(): Graphics;
    contentsRestored(): boolean;
}

// java.security.PrivilegedAction
declare interface PrivilegedAction {
    run(): any;
}

// java.time.chrono.ChronoPeriod
declare interface ChronoPeriod extends TemporalAmount {
    get(temporalUnit: TemporalUnit): number;
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    normalized(): ChronoPeriod;
    getChronology(): Chronology;
    isZero(): boolean;
    between(chronoLocalDate: ChronoLocalDate, chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    getUnits(): List;
    isNegative(): boolean;
    plus(temporalAmount: TemporalAmount): ChronoPeriod;
    minus(temporalAmount: TemporalAmount): ChronoPeriod;
    multipliedBy(i: number): ChronoPeriod;
    negated(): ChronoPeriod;
    subtractFrom(temporal: Temporal): Temporal;
    addTo(temporal: Temporal): Temporal;
}

// java.awt.Dialog$ModalExclusionType
declare enum ModalExclusionType {
    NO_EXCLUDE,
    APPLICATION_EXCLUDE,
    TOOLKIT_EXCLUDE,
}

// java.nio.channels.NetworkChannel
declare interface NetworkChannel extends Channel {
    bind(socketAddress: SocketAddress): NetworkChannel;
    getLocalAddress(): SocketAddress;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    getOption(socketOption: SocketOption): any;
    supportedOptions(): Set;
}

// java.security.AccessControlContext
declare interface AccessControlContext {
    checkPermission(permission: Permission): void;
    getDomainCombiner(): DomainCombiner;
}

// java.awt.Container
declare interface Container extends Component {
    add(component: Component): Component;
    add(s: string, component: Component): Component;
    add(component: Component, object: any): void;
    add(component: Component, i: number): Component;
    add(component: Component, object: any, i: number): void;
    remove(component: Component): void;
    remove(i: number): void;
    removeAll(): void;
    setFocusCycleRoot(b: boolean): void;
    isFocusCycleRoot(): boolean;
    isValidateRoot(): boolean;
    setLayout(layoutManager: LayoutManager): void;
    getFocusTraversalPolicy(): FocusTraversalPolicy;
    getComponentCount(): number;
    countComponents(): number;
    getInsets(): Insets;
    insets(): Insets;
    setComponentZOrder(component: Component, i: number): void;
    getComponentZOrder(component: Component): number;
    getLayout(): LayoutManager;
    paintComponents(graphics: Graphics): void;
    printComponents(graphics: Graphics): void;
    addContainerListener(containerListener: ContainerListener): void;
    removeContainerListener(containerListener: ContainerListener): void;
    getContainerListeners(): ContainerListener[];
    getMousePosition(b: boolean): Point;
    findComponentAt(i: number, i: number): Component;
    findComponentAt(point: Point): Component;
    isAncestorOf(component: Component): boolean;
    setFocusTraversalPolicy(focusTraversalPolicy: FocusTraversalPolicy): void;
    isFocusTraversalPolicySet(): boolean;
    setFocusTraversalPolicyProvider(b: boolean): void;
    isFocusTraversalPolicyProvider(): boolean;
    transferFocusDownCycle(): void;
    getComponents(): Component[];
    getComponent(i: number): Component;
}

// java.time.format.FormatStyle
declare enum FormatStyle {
    FULL,
    LONG,
    MEDIUM,
    SHORT,
}

// java.lang.module.ModuleDescriptor$Requires
declare interface Requires extends Comparable {
    modifiers(): Set;
    name(): string;
    compareTo(object: any): number;
    compareTo(requires: Requires): number;
    compiledVersion(): Optional;
    rawCompiledVersion(): Optional;
}

// java.security.cert.CertPath
declare interface CertPath extends Serializable {
    getCertificates(): List;
    getType(): string;
    getEncoded(s: string): number[];
    getEncoded(): number[];
    getEncodings(): Iterator;
}

// java.awt.Toolkit
declare interface Toolkit {
    getProperty(s: string, s: string): string;
    sync(): void;
    isAlwaysOnTopSupported(): boolean;
    getScreenInsets(graphicsConfiguration: GraphicsConfiguration): Insets;
    isModalExclusionTypeSupported(modalExclusionType: ModalExclusionType): boolean;
    prepareImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    checkImage(image: Image, i: number, i: number, imageObserver: ImageObserver): number;
    mapInputMethodHighlight(inputMethodHighlight: InputMethodHighlight): Map;
    addPropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    getColorModel(): ColorModel;
    getDefaultToolkit(): Toolkit;
    createImage(b: number): Image;
    createImage(imageProducer: ImageProducer): Image;
    createImage(uRL: URL): Image;
    createImage(s: string): Image;
    createImage(b: number, i: number, i: number): Image;
    getFontMetrics(font: Font): FontMetrics;
    createCustomCursor(image: Image, point: Point, s: string): Cursor;
    setDynamicLayout(b: boolean): void;
    isDynamicLayoutActive(): boolean;
    getScreenSize(): Dimension;
    getScreenResolution(): number;
    getFontList(): string[];
    getImage(s: string): Image;
    getImage(uRL: URL): Image;
    getPrintJob(frame: Frame, s: string, jobAttributes: JobAttributes, pageAttributes: PageAttributes): PrintJob;
    getPrintJob(frame: Frame, s: string, properties: Properties): PrintJob;
    beep(): void;
    getSystemClipboard(): Clipboard;
    getSystemSelection(): Clipboard;
    getMenuShortcutKeyMask(): number;
    getMenuShortcutKeyMaskEx(): number;
    getLockingKeyState(i: number): boolean;
    setLockingKeyState(i: number, b: boolean): void;
    getBestCursorSize(i: number, i: number): Dimension;
    getMaximumCursorColors(): number;
    isFrameStateSupported(i: number): boolean;
    getSystemEventQueue(): EventQueue;
    createDragGestureRecognizer(clazz: Class, dragSource: DragSource, component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    getDesktopProperty(s: string): any;
    isModalityTypeSupported(modalityType: ModalityType): boolean;
    addAWTEventListener(aWTEventListener: AWTEventListener, l: number): void;
    removeAWTEventListener(aWTEventListener: AWTEventListener): void;
    getAWTEventListeners(l: number): AWTEventListener[];
    getAWTEventListeners(): AWTEventListener[];
    areExtraMouseButtonsEnabled(): boolean;
    removePropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    getPropertyChangeListeners(s: string): PropertyChangeListener[];
    getPropertyChangeListeners(): PropertyChangeListener[];
}

// java.nio.channels.FileLock
declare interface FileLock extends AutoCloseable {
    size(): number;
    position(): number;
    close(): void;
    release(): void;
    channel(): FileChannel;
    isValid(): boolean;
    isShared(): boolean;
    overlaps(l: number, l: number): boolean;
    acquiredBy(): Channel;
}

// java.awt.Event
declare interface Event extends Serializable {
    translate(i: number, i: number): void;
    shiftDown(): boolean;
    controlDown(): boolean;
    metaDown(): boolean;
    SHIFT_MASK: number;
    CTRL_MASK: number;
    META_MASK: number;
    ALT_MASK: number;
    HOME: number;
    END: number;
    PGUP: number;
    PGDN: number;
    UP: number;
    DOWN: number;
    LEFT: number;
    RIGHT: number;
    F1: number;
    F2: number;
    F3: number;
    F4: number;
    F5: number;
    F6: number;
    F7: number;
    F8: number;
    F9: number;
    F10: number;
    F11: number;
    F12: number;
    PRINT_SCREEN: number;
    SCROLL_LOCK: number;
    CAPS_LOCK: number;
    NUM_LOCK: number;
    PAUSE: number;
    INSERT: number;
    ENTER: number;
    BACK_SPACE: number;
    TAB: number;
    ESCAPE: number;
    DELETE: number;
    WINDOW_DESTROY: number;
    WINDOW_EXPOSE: number;
    WINDOW_ICONIFY: number;
    WINDOW_DEICONIFY: number;
    WINDOW_MOVED: number;
    KEY_PRESS: number;
    KEY_RELEASE: number;
    KEY_ACTION: number;
    KEY_ACTION_RELEASE: number;
    MOUSE_DOWN: number;
    MOUSE_UP: number;
    MOUSE_MOVE: number;
    MOUSE_ENTER: number;
    MOUSE_EXIT: number;
    MOUSE_DRAG: number;
    SCROLL_LINE_UP: number;
    SCROLL_LINE_DOWN: number;
    SCROLL_PAGE_UP: number;
    SCROLL_PAGE_DOWN: number;
    SCROLL_ABSOLUTE: number;
    SCROLL_BEGIN: number;
    SCROLL_END: number;
    LIST_SELECT: number;
    LIST_DESELECT: number;
    ACTION_EVENT: number;
    LOAD_FILE: number;
    SAVE_FILE: number;
    GOT_FOCUS: number;
    LOST_FOCUS: number;
    target: any;
    when: number;
    id: number;
    x: number;
    y: number;
    key: number;
    modifiers: number;
    clickCount: number;
    arg: any;
    evt: Event;
}

// java.math.BigInteger
declare interface BigInteger extends Number, Comparable {
    add(bigInteger: BigInteger): BigInteger;
    bitCount(): number;
    equals(object: any): boolean;
    toString(): string;
    toString(i: number): string;
    hashCode(): number;
    abs(): BigInteger;
    sqrt(): BigInteger;
    pow(i: number): BigInteger;
    min(bigInteger: BigInteger): BigInteger;
    max(bigInteger: BigInteger): BigInteger;
    signum(): number;
    compareTo(object: any): number;
    compareTo(bigInteger: BigInteger): number;
    valueOf(l: number): BigInteger;
    toByteArray(): number[];
    mod(bigInteger: BigInteger): BigInteger;
    shiftLeft(i: number): BigInteger;
    divide(bigInteger: BigInteger): BigInteger;
    remainder(bigInteger: BigInteger): BigInteger;
    multiply(bigInteger: BigInteger): BigInteger;
    xor(bigInteger: BigInteger): BigInteger;
    andNot(bigInteger: BigInteger): BigInteger;
    setBit(i: number): BigInteger;
    or(bigInteger: BigInteger): BigInteger;
    and(bigInteger: BigInteger): BigInteger;
    negate(): BigInteger;
    not(): BigInteger;
    bitLength(): number;
    probablePrime(i: number, random: Random): BigInteger;
    nextProbablePrime(): BigInteger;
    divideAndRemainder(bigInteger: BigInteger): BigInteger[];
    sqrtAndRemainder(): BigInteger[];
    modPow(bigInteger: BigInteger, bigInteger: BigInteger): BigInteger;
    modInverse(bigInteger: BigInteger): BigInteger;
    shiftRight(i: number): BigInteger;
    testBit(i: number): boolean;
    clearBit(i: number): BigInteger;
    flipBit(i: number): BigInteger;
    getLowestSetBit(): number;
    isProbablePrime(i: number): boolean;
    longValueExact(): number;
    intValueExact(): number;
    shortValueExact(): number;
    byteValueExact(): number;
    subtract(bigInteger: BigInteger): BigInteger;
    gcd(bigInteger: BigInteger): BigInteger;
    ZERO: BigInteger;
    ONE: BigInteger;
    TWO: BigInteger;
    TEN: BigInteger;
}

// java.awt.Cursor
declare interface Cursor extends Serializable {
    getName(): string;
    getType(): number;
    getPredefinedCursor(i: number): Cursor;
    getSystemCustomCursor(s: string): Cursor;
    getDefaultCursor(): Cursor;
    DEFAULT_CURSOR: number;
    CROSSHAIR_CURSOR: number;
    TEXT_CURSOR: number;
    WAIT_CURSOR: number;
    SW_RESIZE_CURSOR: number;
    SE_RESIZE_CURSOR: number;
    NW_RESIZE_CURSOR: number;
    NE_RESIZE_CURSOR: number;
    N_RESIZE_CURSOR: number;
    S_RESIZE_CURSOR: number;
    W_RESIZE_CURSOR: number;
    E_RESIZE_CURSOR: number;
    HAND_CURSOR: number;
    MOVE_CURSOR: number;
    CUSTOM_CURSOR: number;
}

// java.nio.file.attribute.FileStoreAttributeView
declare interface FileStoreAttributeView extends AttributeView {
}

// java.time.chrono.IsoEra
declare enum IsoEra {
    BCE,
    CE,
}

// java.time.chrono.Chronology
declare interface Chronology extends Comparable {
    equals(object: any): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(chronology: Chronology): number;
    compareTo(object: any): number;
    from(temporalAccessor: TemporalAccessor): Chronology;
    of(s: string): Chronology;
    getId(): string;
    range(chronoField: ChronoField): ValueRange;
    eraOf(i: number): Era;
    localDateTime(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    zonedDateTime(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ChronoZonedDateTime;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    getCalendarType(): string;
    date(era: Era, i: number, i: number, i: number): ChronoLocalDate;
    date(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    date(i: number, i: number, i: number): ChronoLocalDate;
    isLeapYear(l: number): boolean;
    eras(): List;
    epochSecond(era: Era, i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    epochSecond(i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    period(i: number, i: number, i: number): ChronoPeriod;
    getAvailableChronologies(): Set;
    dateYearDay(i: number, i: number): ChronoLocalDate;
    dateYearDay(era: Era, i: number, i: number): ChronoLocalDate;
    dateEpochDay(l: number): ChronoLocalDate;
    dateNow(zoneId: ZoneId): ChronoLocalDate;
    dateNow(): ChronoLocalDate;
    dateNow(clock: Clock): ChronoLocalDate;
    prolepticYear(era: Era, i: number): number;
    resolveDate(map: Map, resolverStyle: ResolverStyle): ChronoLocalDate;
    ofLocale(locale: Locale): Chronology;
}

// java.nio.file.attribute.AttributeView
declare interface AttributeView {
    name(): string;
}

// java.text.ParsePosition
declare interface ParsePosition {
    getIndex(): number;
    setIndex(i: number): void;
    getErrorIndex(): number;
    setErrorIndex(i: number): void;
}

// java.awt.Component
declare interface Component extends ImageObserver, MenuContainer, Serializable {
    add(popupMenu: PopupMenu): void;
    remove(menuComponent: MenuComponent): void;
    update(graphics: Graphics): void;
    getName(): string;
    contains(i: number, i: number): boolean;
    contains(point: Point): boolean;
    list(): void;
    list(printStream: PrintStream): void;
    list(printStream: PrintStream, i: number): void;
    list(printWriter: PrintWriter, i: number): void;
    list(printWriter: PrintWriter): void;
    size(): Dimension;
    validate(): void;
    getParent(): Container;
    getLocation(): Point;
    getLocation(point: Point): Point;
    setName(s: string): void;
    print(graphics: Graphics): void;
    action(event: Event, object: any): boolean;
    location(): Point;
    getSize(): Dimension;
    getSize(dimension: Dimension): Dimension;
    isOpaque(): boolean;
    resize(dimension: Dimension): void;
    resize(i: number, i: number): void;
    getFocusTraversalKeys(i: number): Set;
    isFocusCycleRoot(container: Container): boolean;
    getFocusCycleRootAncestor(): Container;
    postEvent(event: Event): boolean;
    isShowing(): boolean;
    getAccessibleContext(): AccessibleContext;
    paint(graphics: Graphics): void;
    firePropertyChange(s: string, f: number, f: number): void;
    firePropertyChange(s: string, b: number, b: number): void;
    firePropertyChange(s: string, s: number, s: number): void;
    firePropertyChange(s: string, c: string, c: string): void;
    firePropertyChange(s: string, l: number, l: number): void;
    firePropertyChange(s: string, d: number, d: number): void;
    getTreeLock(): any;
    getPreferredSize(): Dimension;
    isMinimumSizeSet(): boolean;
    getMinimumSize(): Dimension;
    isDisplayable(): boolean;
    requestFocus(): void;
    requestFocus(cause: Cause): void;
    handleEvent(event: Event): boolean;
    applyComponentOrientation(componentOrientation: ComponentOrientation): void;
    getLocationOnScreen(): Point;
    doLayout(): void;
    preferredSize(): Dimension;
    getMaximumSize(): Dimension;
    getAlignmentX(): number;
    getAlignmentY(): number;
    deliverEvent(event: Event): void;
    getComponentAt(i: number, i: number): Component;
    getComponentAt(point: Point): Component;
    locate(i: number, i: number): Component;
    getMousePosition(): Point;
    setFocusTraversalKeys(i: number, set: Set): void;
    areFocusTraversalKeysSet(i: number): boolean;
    isLightweight(): boolean;
    dispatchEvent(aWTEvent: AWTEvent): void;
    isFocusable(): boolean;
    isFocusOwner(): boolean;
    transferFocus(): void;
    isPreferredSizeSet(): boolean;
    isMaximumSizeSet(): boolean;
    transferFocusBackward(): void;
    setDropTarget(dropTarget: DropTarget): void;
    getDropTarget(): DropTarget;
    disable(): void;
    isDoubleBuffered(): boolean;
    enableInputMethods(b: boolean): void;
    getForeground(): Color;
    setForeground(color: Color): void;
    isForegroundSet(): boolean;
    isBackgroundSet(): boolean;
    isFontSet(): boolean;
    setPreferredSize(dimension: Dimension): void;
    setMaximumSize(dimension: Dimension): void;
    getBaseline(i: number, i: number): number;
    getBaselineResizeBehavior(): BaselineResizeBehavior;
    revalidate(): void;
    isCursorSet(): boolean;
    paintAll(graphics: Graphics): void;
    repaint(l: number): void;
    repaint(): void;
    repaint(i: number, i: number, i: number, i: number): void;
    repaint(l: number, i: number, i: number, i: number, i: number): void;
    printAll(graphics: Graphics): void;
    createVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities): VolatileImage;
    createVolatileImage(i: number, i: number): VolatileImage;
    prepareImage(image: Image, imageObserver: ImageObserver): boolean;
    prepareImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    checkImage(image: Image, i: number, i: number, imageObserver: ImageObserver): number;
    checkImage(image: Image, imageObserver: ImageObserver): number;
    setIgnoreRepaint(b: boolean): void;
    getIgnoreRepaint(): boolean;
    addComponentListener(componentListener: ComponentListener): void;
    removeComponentListener(componentListener: ComponentListener): void;
    getComponentListeners(): ComponentListener[];
    addFocusListener(focusListener: FocusListener): void;
    removeFocusListener(focusListener: FocusListener): void;
    getFocusListeners(): FocusListener[];
    addHierarchyListener(hierarchyListener: HierarchyListener): void;
    removeHierarchyListener(hierarchyListener: HierarchyListener): void;
    getHierarchyListeners(): HierarchyListener[];
    addHierarchyBoundsListener(hierarchyBoundsListener: HierarchyBoundsListener): void;
    removeHierarchyBoundsListener(hierarchyBoundsListener: HierarchyBoundsListener): void;
    getHierarchyBoundsListeners(): HierarchyBoundsListener[];
    addKeyListener(keyListener: KeyListener): void;
    removeKeyListener(keyListener: KeyListener): void;
    getKeyListeners(): KeyListener[];
    addMouseListener(mouseListener: MouseListener): void;
    removeMouseListener(mouseListener: MouseListener): void;
    getMouseListeners(): MouseListener[];
    addMouseMotionListener(mouseMotionListener: MouseMotionListener): void;
    removeMouseMotionListener(mouseMotionListener: MouseMotionListener): void;
    getMouseMotionListeners(): MouseMotionListener[];
    addMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
    removeMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
    getMouseWheelListeners(): MouseWheelListener[];
    addInputMethodListener(inputMethodListener: InputMethodListener): void;
    removeInputMethodListener(inputMethodListener: InputMethodListener): void;
    getInputMethodListeners(): InputMethodListener[];
    getInputMethodRequests(): InputMethodRequests;
    mouseDown(event: Event, i: number, i: number): boolean;
    mouseDrag(event: Event, i: number, i: number): boolean;
    mouseUp(event: Event, i: number, i: number): boolean;
    mouseMove(event: Event, i: number, i: number): boolean;
    mouseEnter(event: Event, i: number, i: number): boolean;
    mouseExit(event: Event, i: number, i: number): boolean;
    keyDown(event: Event, i: number): boolean;
    keyUp(event: Event, i: number): boolean;
    gotFocus(event: Event, object: any): boolean;
    lostFocus(event: Event, object: any): boolean;
    isFocusTraversable(): boolean;
    setFocusable(b: boolean): void;
    setFocusTraversalKeysEnabled(b: boolean): void;
    getFocusTraversalKeysEnabled(): boolean;
    requestFocusInWindow(cause: Cause): boolean;
    requestFocusInWindow(): boolean;
    enable(): void;
    enable(b: boolean): void;
    getGraphicsConfiguration(): GraphicsConfiguration;
    setSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    bounds(): Rectangle;
    getBounds(rectangle: Rectangle): Rectangle;
    getBounds(): Rectangle;
    layout(): void;
    addPropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    addPropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    move(i: number, i: number): void;
    isValid(): boolean;
    setLocale(locale: Locale): void;
    getLocale(): Locale;
    getColorModel(): ColorModel;
    getGraphics(): Graphics;
    createImage(i: number, i: number): Image;
    createImage(imageProducer: ImageProducer): Image;
    isEnabled(): boolean;
    getListeners(clazz: Class): EventListener[];
    imageUpdate(image: Image, i: number, i: number, i: number, i: number, i: number): boolean;
    setBounds(rectangle: Rectangle): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    reshape(i: number, i: number, i: number, i: number): void;
    setLocation(point: Point): void;
    setLocation(i: number, i: number): void;
    inside(i: number, i: number): boolean;
    getFontMetrics(font: Font): FontMetrics;
    setBackground(color: Color): void;
    getBackground(): Color;
    getY(): number;
    getX(): number;
    getHeight(): number;
    invalidate(): void;
    getWidth(): number;
    setVisible(b: boolean): void;
    show(b: boolean): void;
    show(): void;
    hide(): void;
    isVisible(): boolean;
    setEnabled(b: boolean): void;
    setCursor(cursor: Cursor): void;
    getCursor(): Cursor;
    getFont(): Font;
    setFont(font: Font): void;
    addNotify(): void;
    removeNotify(): void;
    setMinimumSize(dimension: Dimension): void;
    minimumSize(): Dimension;
    getToolkit(): Toolkit;
    getInputContext(): InputContext;
    nextFocus(): void;
    transferFocusUpCycle(): void;
    hasFocus(): boolean;
    removePropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    removePropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    getPropertyChangeListeners(s: string): PropertyChangeListener[];
    getPropertyChangeListeners(): PropertyChangeListener[];
    setComponentOrientation(componentOrientation: ComponentOrientation): void;
    getComponentOrientation(): ComponentOrientation;
    setMixingCutoutShape(shape: Shape): void;
    TOP_ALIGNMENT: number;
    CENTER_ALIGNMENT: number;
    BOTTOM_ALIGNMENT: number;
    LEFT_ALIGNMENT: number;
    RIGHT_ALIGNMENT: number;
}

// javax.accessibility.Accessible
declare interface Accessible {
    getAccessibleContext(): AccessibleContext;
}

// java.time.zone.ZoneOffsetTransition
declare interface ZoneOffsetTransition extends Comparable, Serializable {
    compareTo(object: any): number;
    compareTo(zoneOffsetTransition: ZoneOffsetTransition): number;
    of(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneOffset: ZoneOffset): ZoneOffsetTransition;
    getOffsetAfter(): ZoneOffset;
    isValidOffset(zoneOffset: ZoneOffset): boolean;
    isGap(): boolean;
    isOverlap(): boolean;
    getOffsetBefore(): ZoneOffset;
    toEpochSecond(): number;
    getDuration(): Duration;
    getInstant(): Instant;
    getDateTimeBefore(): LocalDateTime;
    getDateTimeAfter(): LocalDateTime;
}

// java.awt.event.WindowFocusListener
declare interface WindowFocusListener extends EventListener {
    windowGainedFocus(windowEvent: WindowEvent): void;
    windowLostFocus(windowEvent: WindowEvent): void;
}

// java.nio.channels.GatheringByteChannel
declare interface GatheringByteChannel extends WritableByteChannel {
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
    write(byteBuffer: ByteBuffer): number;
}

// java.lang.module.ModuleFinder
declare interface ModuleFinder {
    of(path: Path): ModuleFinder;
    find(s: string): Optional;
    ofSystem(): ModuleFinder;
    compose(moduleFinder: ModuleFinder): ModuleFinder;
    findAll(): Set;
}

// java.util.Dictionary
declare interface Dictionary {
    remove(object: any): any;
    get(object: any): any;
    put(object: any, object: any): any;
    isEmpty(): boolean;
    elements(): Enumeration;
    size(): number;
    keys(): Enumeration;
}

// java.awt.PrintJob
declare interface PrintJob {
    end(): void;
    getGraphics(): Graphics;
    getPageDimension(): Dimension;
    getPageResolution(): number;
    lastPageFirst(): boolean;
}

// java.text.FieldPosition
declare interface FieldPosition {
    getField(): number;
    getBeginIndex(): number;
    getEndIndex(): number;
    getFieldAttribute(): Field;
    setBeginIndex(i: number): void;
    setEndIndex(i: number): void;
}

// java.nio.channels.InterruptibleChannel
declare interface InterruptibleChannel extends Channel {
    close(): void;
}

// java.awt.event.MouseMotionListener
declare interface MouseMotionListener extends EventListener {
    mouseMoved(mouseEvent: MouseEvent): void;
    mouseDragged(mouseEvent: MouseEvent): void;
}

// java.lang.Character$Subset
declare interface Subset {
}

// javax.accessibility.AccessibleAction
declare interface AccessibleAction {
    getAccessibleActionCount(): number;
    getAccessibleActionDescription(i: number): string;
    doAccessibleAction(i: number): boolean;
    TOGGLE_EXPAND: string;
    INCREMENT: string;
    DECREMENT: string;
    CLICK: string;
    TOGGLE_POPUP: string;
}

// java.awt.event.AWTEventListener
declare interface AWTEventListener extends EventListener {
    eventDispatched(aWTEvent: AWTEvent): void;
}

// java.awt.dnd.DropTarget
declare interface DropTarget extends DropTargetListener, Serializable {
    isActive(): boolean;
    setActive(b: boolean): void;
    drop(dropTargetDropEvent: DropTargetDropEvent): void;
    getComponent(): Component;
    getFlavorMap(): FlavorMap;
    setFlavorMap(flavorMap: FlavorMap): void;
    getDropTargetContext(): DropTargetContext;
    addNotify(): void;
    removeNotify(): void;
    setDefaultActions(i: number): void;
    getDefaultActions(): number;
    addDropTargetListener(dropTargetListener: DropTargetListener): void;
    removeDropTargetListener(dropTargetListener: DropTargetListener): void;
    dragEnter(dropTargetDragEvent: DropTargetDragEvent): void;
    dragOver(dropTargetDragEvent: DropTargetDragEvent): void;
    dropActionChanged(dropTargetDragEvent: DropTargetDragEvent): void;
    dragExit(dropTargetEvent: DropTargetEvent): void;
    setComponent(component: Component): void;
}

// java.awt.datatransfer.Clipboard
declare interface Clipboard {
    getName(): string;
    getData(dataFlavor: DataFlavor): any;
    getContents(object: any): Transferable;
    setContents(transferable: Transferable, clipboardOwner: ClipboardOwner): void;
    getAvailableDataFlavors(): DataFlavor[];
    isDataFlavorAvailable(dataFlavor: DataFlavor): boolean;
    addFlavorListener(flavorListener: FlavorListener): void;
    removeFlavorListener(flavorListener: FlavorListener): void;
    getFlavorListeners(): FlavorListener[];
}

// java.awt.Dialog$ModalityType
declare enum ModalityType {
    MODELESS,
    DOCUMENT_MODAL,
    APPLICATION_MODAL,
    TOOLKIT_MODAL,
}

// java.time.chrono.AbstractChronology
declare interface AbstractChronology extends Chronology {
    compareTo(chronology: Chronology): number;
    compareTo(object: any): number;
    resolveDate(map: Map, resolverStyle: ResolverStyle): ChronoLocalDate;
}

// java.awt.im.InputMethodHighlight
declare interface InputMethodHighlight {
    getState(): number;
    getStyle(): Map;
    isSelected(): boolean;
    getVariation(): number;
    RAW_TEXT: number;
    CONVERTED_TEXT: number;
    UNSELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
    SELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
    UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
    SELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
}

// java.awt.JobAttributes
declare interface JobAttributes extends Cloneable {
    set(jobAttributes: JobAttributes): void;
    getFileName(): string;
    setPrinter(s: string): void;
    getDestination(): DestinationType;
    getCopies(): number;
    setCopies(i: number): void;
    setCopiesToDefault(): void;
    getDefaultSelection(): DefaultSelectionType;
    setDefaultSelection(defaultSelectionType: DefaultSelectionType): void;
    setDestination(destinationType: DestinationType): void;
    getDialog(): DialogType;
    setDialog(dialogType: DialogType): void;
    setFileName(s: string): void;
    getFromPage(): number;
    setFromPage(i: number): void;
    getMaxPage(): number;
    setMaxPage(i: number): void;
    getMinPage(): number;
    setMinPage(i: number): void;
    getMultipleDocumentHandling(): MultipleDocumentHandlingType;
    setMultipleDocumentHandling(multipleDocumentHandlingType: MultipleDocumentHandlingType): void;
    setMultipleDocumentHandlingToDefault(): void;
    getPageRanges(): number[][];
    setPageRanges(i: number): void;
    getPrinter(): string;
    getSides(): SidesType;
    setSides(sidesType: SidesType): void;
    setSidesToDefault(): void;
    getToPage(): number;
    setToPage(i: number): void;
}

// java.net.SocketOptions
declare interface SocketOptions {
    setOption(i: number, object: any): void;
    getOption(i: number): any;
    TCP_NODELAY: number;
    SO_BINDADDR: number;
    SO_REUSEADDR: number;
    SO_REUSEPORT: number;
    SO_BROADCAST: number;
    IP_MULTICAST_IF: number;
    IP_MULTICAST_IF2: number;
    IP_MULTICAST_LOOP: number;
    IP_TOS: number;
    SO_LINGER: number;
    SO_TIMEOUT: number;
    SO_SNDBUF: number;
    SO_RCVBUF: number;
    SO_KEEPALIVE: number;
    SO_OOBINLINE: number;
}

// java.awt.Insets
declare interface Insets extends Cloneable, Serializable {
    set(i: number, i: number, i: number, i: number): void;
    top: number;
    left: number;
    bottom: number;
    right: number;
}

// java.awt.event.KeyListener
declare interface KeyListener extends EventListener {
    keyTyped(keyEvent: KeyEvent): void;
    keyPressed(keyEvent: KeyEvent): void;
    keyReleased(keyEvent: KeyEvent): void;
}

// java.awt.MenuContainer
declare interface MenuContainer {
    remove(menuComponent: MenuComponent): void;
    postEvent(event: Event): boolean;
    getFont(): Font;
}

// java.awt.dnd.DragGestureRecognizer
declare interface DragGestureRecognizer extends Serializable {
    getComponent(): Component;
    getDragSource(): DragSource;
    getSourceActions(): number;
    setSourceActions(i: number): void;
    getTriggerEvent(): InputEvent;
    resetRecognizer(): void;
    addDragGestureListener(dragGestureListener: DragGestureListener): void;
    removeDragGestureListener(dragGestureListener: DragGestureListener): void;
    setComponent(component: Component): void;
}

// javax.accessibility.AccessibleText
declare interface AccessibleText {
    getIndexAtPoint(point: Point): number;
    getCharacterBounds(i: number): Rectangle;
    getCharCount(): number;
    getCaretPosition(): number;
    getAtIndex(i: number, i: number): string;
    getAfterIndex(i: number, i: number): string;
    getBeforeIndex(i: number, i: number): string;
    getCharacterAttribute(i: number): AttributeSet;
    getSelectionStart(): number;
    getSelectionEnd(): number;
    getSelectedText(): string;
    CHARACTER: number;
    WORD: number;
    SENTENCE: number;
}

// javax.accessibility.AccessibleSelection
declare interface AccessibleSelection {
    getAccessibleSelectionCount(): number;
    addAccessibleSelection(i: number): void;
    removeAccessibleSelection(i: number): void;
    clearAccessibleSelection(): void;
    selectAllAccessibleSelection(): void;
    getAccessibleSelection(i: number): Accessible;
    isAccessibleChildSelected(i: number): boolean;
}

// java.awt.EventQueue
declare interface EventQueue {
    postEvent(aWTEvent: AWTEvent): void;
    isDispatchThread(): boolean;
    invokeAndWait(runnable: Runnable): void;
    invokeLater(runnable: Runnable): void;
    push(eventQueue: EventQueue): void;
    createSecondaryLoop(): SecondaryLoop;
    peekEvent(i: number): AWTEvent;
    peekEvent(): AWTEvent;
    getMostRecentEventTime(): number;
    getNextEvent(): AWTEvent;
    getCurrentEvent(): AWTEvent;
}

// java.awt.FocusTraversalPolicy
declare interface FocusTraversalPolicy {
    getInitialComponent(window: Window): Component;
    getDefaultComponent(container: Container): Component;
    getFirstComponent(container: Container): Component;
    getLastComponent(container: Container): Component;
    getComponentAfter(container: Container, component: Component): Component;
    getComponentBefore(container: Container, component: Component): Component;
}

// java.awt.ComponentOrientation
declare interface ComponentOrientation extends Serializable {
    getOrientation(resourceBundle: ResourceBundle): ComponentOrientation;
    getOrientation(locale: Locale): ComponentOrientation;
    isHorizontal(): boolean;
    isLeftToRight(): boolean;
    LEFT_TO_RIGHT: ComponentOrientation;
    RIGHT_TO_LEFT: ComponentOrientation;
    UNKNOWN: ComponentOrientation;
}

// java.awt.Frame
declare interface Frame extends Window, MenuContainer {
    remove(menuComponent: MenuComponent): void;
    getState(): number;
    setState(i: number): void;
    getTitle(): string;
    setTitle(s: string): void;
    setCursor(i: number): void;
    isResizable(): boolean;
    setResizable(b: boolean): void;
    setUndecorated(b: boolean): void;
    isUndecorated(): boolean;
    getIconImage(): Image;
    getMenuBar(): MenuBar;
    setMenuBar(menuBar: MenuBar): void;
    setExtendedState(i: number): void;
    getExtendedState(): number;
    setMaximizedBounds(rectangle: Rectangle): void;
    getMaximizedBounds(): Rectangle;
    getCursorType(): number;
    getFrames(): Frame[];
    DEFAULT_CURSOR: number;
    CROSSHAIR_CURSOR: number;
    TEXT_CURSOR: number;
    WAIT_CURSOR: number;
    SW_RESIZE_CURSOR: number;
    SE_RESIZE_CURSOR: number;
    NW_RESIZE_CURSOR: number;
    NE_RESIZE_CURSOR: number;
    N_RESIZE_CURSOR: number;
    S_RESIZE_CURSOR: number;
    W_RESIZE_CURSOR: number;
    E_RESIZE_CURSOR: number;
    HAND_CURSOR: number;
    MOVE_CURSOR: number;
    NORMAL: number;
    ICONIFIED: number;
    MAXIMIZED_HORIZ: number;
    MAXIMIZED_VERT: number;
    MAXIMIZED_BOTH: number;
}

// java.security.DomainCombiner
declare interface DomainCombiner {
    combine(protectionDomain: ProtectionDomain, protectionDomain: ProtectionDomain): ProtectionDomain[];
}

// java.awt.event.WindowEvent
declare interface WindowEvent extends ComponentEvent {
    getNewState(): number;
    getWindow(): Window;
    getOppositeWindow(): Window;
    getOldState(): number;
    WINDOW_FIRST: number;
    WINDOW_OPENED: number;
    WINDOW_CLOSING: number;
    WINDOW_CLOSED: number;
    WINDOW_ICONIFIED: number;
    WINDOW_DEICONIFIED: number;
    WINDOW_ACTIVATED: number;
    WINDOW_DEACTIVATED: number;
    WINDOW_GAINED_FOCUS: number;
    WINDOW_LOST_FOCUS: number;
    WINDOW_STATE_CHANGED: number;
    WINDOW_LAST: number;
}

// java.awt.event.HierarchyBoundsListener
declare interface HierarchyBoundsListener extends EventListener {
    ancestorMoved(hierarchyEvent: HierarchyEvent): void;
    ancestorResized(hierarchyEvent: HierarchyEvent): void;
}

// java.awt.dnd.DragSource
declare interface DragSource extends Serializable {
    getListeners(clazz: Class): EventListener[];
    createDragGestureRecognizer(clazz: Class, component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    getFlavorMap(): FlavorMap;
    getDefaultDragSource(): DragSource;
    isDragImageSupported(): boolean;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener, flavorMap: FlavorMap): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener, flavorMap: FlavorMap): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    createDefaultDragGestureRecognizer(component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    addDragSourceListener(dragSourceListener: DragSourceListener): void;
    removeDragSourceListener(dragSourceListener: DragSourceListener): void;
    getDragSourceListeners(): DragSourceListener[];
    addDragSourceMotionListener(dragSourceMotionListener: DragSourceMotionListener): void;
    removeDragSourceMotionListener(dragSourceMotionListener: DragSourceMotionListener): void;
    getDragSourceMotionListeners(): DragSourceMotionListener[];
    getDragThreshold(): number;
    DefaultCopyDrop: Cursor;
    DefaultMoveDrop: Cursor;
    DefaultLinkDrop: Cursor;
    DefaultCopyNoDrop: Cursor;
    DefaultMoveNoDrop: Cursor;
    DefaultLinkNoDrop: Cursor;
}

// java.time.temporal.ChronoField
declare enum ChronoField {
    NANO_OF_SECOND,
    NANO_OF_DAY,
    MICRO_OF_SECOND,
    MICRO_OF_DAY,
    MILLI_OF_SECOND,
    MILLI_OF_DAY,
    SECOND_OF_MINUTE,
    SECOND_OF_DAY,
    MINUTE_OF_HOUR,
    MINUTE_OF_DAY,
    HOUR_OF_AMPM,
    CLOCK_HOUR_OF_AMPM,
    HOUR_OF_DAY,
    CLOCK_HOUR_OF_DAY,
    AMPM_OF_DAY,
    DAY_OF_WEEK,
    ALIGNED_DAY_OF_WEEK_IN_MONTH,
    ALIGNED_DAY_OF_WEEK_IN_YEAR,
    DAY_OF_MONTH,
    DAY_OF_YEAR,
    EPOCH_DAY,
    ALIGNED_WEEK_OF_MONTH,
    ALIGNED_WEEK_OF_YEAR,
    MONTH_OF_YEAR,
    PROLEPTIC_MONTH,
    YEAR_OF_ERA,
    YEAR,
    ERA,
    INSTANT_SECONDS,
    OFFSET_SECONDS,
}

// javax.accessibility.AccessibleValue
declare interface AccessibleValue {
    getCurrentAccessibleValue(): Number;
    setCurrentAccessibleValue(number: Number): boolean;
    getMinimumAccessibleValue(): Number;
    getMaximumAccessibleValue(): Number;
}

// java.awt.Component$BaselineResizeBehavior
declare enum BaselineResizeBehavior {
    CONSTANT_ASCENT,
    CONSTANT_DESCENT,
    CENTER_OFFSET,
    OTHER,
}

// java.awt.PopupMenu
declare interface PopupMenu extends Menu {
    getParent(): MenuContainer;
    show(component: Component, i: number, i: number): void;
}

// java.awt.AWTEvent
declare interface AWTEvent extends EventObject {
    paramString(): string;
    getID(): number;
    setSource(object: any): void;
    COMPONENT_EVENT_MASK: number;
    CONTAINER_EVENT_MASK: number;
    FOCUS_EVENT_MASK: number;
    KEY_EVENT_MASK: number;
    MOUSE_EVENT_MASK: number;
    MOUSE_MOTION_EVENT_MASK: number;
    WINDOW_EVENT_MASK: number;
    ACTION_EVENT_MASK: number;
    ADJUSTMENT_EVENT_MASK: number;
    ITEM_EVENT_MASK: number;
    TEXT_EVENT_MASK: number;
    INPUT_METHOD_EVENT_MASK: number;
    PAINT_EVENT_MASK: number;
    INVOCATION_EVENT_MASK: number;
    HIERARCHY_EVENT_MASK: number;
    HIERARCHY_BOUNDS_EVENT_MASK: number;
    MOUSE_WHEEL_EVENT_MASK: number;
    WINDOW_STATE_EVENT_MASK: number;
    WINDOW_FOCUS_EVENT_MASK: number;
    RESERVED_ID_MAX: number;
}

// javax.accessibility.AccessibleIcon
declare interface AccessibleIcon {
    getAccessibleIconDescription(): string;
    setAccessibleIconDescription(s: string): void;
    getAccessibleIconWidth(): number;
    getAccessibleIconHeight(): number;
}

// javax.accessibility.AccessibleComponent
declare interface AccessibleComponent {
    contains(point: Point): boolean;
    getLocation(): Point;
    getSize(): Dimension;
    isShowing(): boolean;
    requestFocus(): void;
    getLocationOnScreen(): Point;
    getAccessibleAt(point: Point): Accessible;
    getForeground(): Color;
    setForeground(color: Color): void;
    addFocusListener(focusListener: FocusListener): void;
    removeFocusListener(focusListener: FocusListener): void;
    isFocusTraversable(): boolean;
    setSize(dimension: Dimension): void;
    getBounds(): Rectangle;
    isEnabled(): boolean;
    setBounds(rectangle: Rectangle): void;
    setLocation(point: Point): void;
    getFontMetrics(font: Font): FontMetrics;
    setBackground(color: Color): void;
    getBackground(): Color;
    setVisible(b: boolean): void;
    isVisible(): boolean;
    setEnabled(b: boolean): void;
    setCursor(cursor: Cursor): void;
    getCursor(): Cursor;
    getFont(): Font;
    setFont(font: Font): void;
}

// java.awt.event.MouseListener
declare interface MouseListener extends EventListener {
    mousePressed(mouseEvent: MouseEvent): void;
    mouseReleased(mouseEvent: MouseEvent): void;
    mouseClicked(mouseEvent: MouseEvent): void;
    mouseExited(mouseEvent: MouseEvent): void;
    mouseEntered(mouseEvent: MouseEvent): void;
}

// java.awt.LayoutManager
declare interface LayoutManager {
    removeLayoutComponent(component: Component): void;
    addLayoutComponent(s: string, component: Component): void;
    layoutContainer(container: Container): void;
    preferredLayoutSize(container: Container): Dimension;
    minimumLayoutSize(container: Container): Dimension;
}

// java.awt.event.FocusEvent$Cause
declare enum Cause {
    UNKNOWN,
    MOUSE_EVENT,
    TRAVERSAL,
    TRAVERSAL_UP,
    TRAVERSAL_DOWN,
    TRAVERSAL_FORWARD,
    TRAVERSAL_BACKWARD,
    ROLLBACK,
    UNEXPECTED,
    ACTIVATION,
    CLEAR_GLOBAL_FOCUS_OWNER,
}

// java.beans.PropertyChangeListener
declare interface PropertyChangeListener extends EventListener {
    propertyChange(propertyChangeEvent: PropertyChangeEvent): void;
}

// java.nio.channels.Channel
declare interface Channel extends Closeable {
    isOpen(): boolean;
    close(): void;
}

// java.nio.channels.SelectableChannel
declare interface SelectableChannel extends AbstractInterruptibleChannel, Channel {
    isRegistered(): boolean;
    register(selector: Selector, i: number): SelectionKey;
    register(selector: Selector, i: number, object: any): SelectionKey;
    provider(): SelectorProvider;
    configureBlocking(b: boolean): SelectableChannel;
    validOps(): number;
    keyFor(selector: Selector): SelectionKey;
    blockingLock(): any;
    isBlocking(): boolean;
}

// javax.accessibility.AccessibleTable
declare interface AccessibleTable {
    getAccessibleAt(i: number, i: number): Accessible;
    getAccessibleCaption(): Accessible;
    setAccessibleCaption(accessible: Accessible): void;
    getAccessibleSummary(): Accessible;
    setAccessibleSummary(accessible: Accessible): void;
    getAccessibleRowCount(): number;
    getAccessibleColumnCount(): number;
    getAccessibleRowExtentAt(i: number, i: number): number;
    getAccessibleColumnExtentAt(i: number, i: number): number;
    getAccessibleRowHeader(): AccessibleTable;
    setAccessibleRowHeader(accessibleTable: AccessibleTable): void;
    getAccessibleColumnHeader(): AccessibleTable;
    setAccessibleColumnHeader(accessibleTable: AccessibleTable): void;
    getAccessibleRowDescription(i: number): Accessible;
    setAccessibleRowDescription(i: number, accessible: Accessible): void;
    getAccessibleColumnDescription(i: number): Accessible;
    setAccessibleColumnDescription(i: number, accessible: Accessible): void;
    isAccessibleSelected(i: number, i: number): boolean;
    isAccessibleRowSelected(i: number): boolean;
    isAccessibleColumnSelected(i: number): boolean;
    getSelectedAccessibleRows(): number[];
    getSelectedAccessibleColumns(): number[];
}

// java.awt.event.HierarchyListener
declare interface HierarchyListener extends EventListener {
    hierarchyChanged(hierarchyEvent: HierarchyEvent): void;
}

// javax.accessibility.AccessibleRole
declare interface AccessibleRole extends AccessibleBundle {
    ALERT: AccessibleRole;
    COLUMN_HEADER: AccessibleRole;
    CANVAS: AccessibleRole;
    COMBO_BOX: AccessibleRole;
    DESKTOP_ICON: AccessibleRole;
    HTML_CONTAINER: AccessibleRole;
    INTERNAL_FRAME: AccessibleRole;
    DESKTOP_PANE: AccessibleRole;
    OPTION_PANE: AccessibleRole;
    WINDOW: AccessibleRole;
    FRAME: AccessibleRole;
    DIALOG: AccessibleRole;
    COLOR_CHOOSER: AccessibleRole;
    DIRECTORY_PANE: AccessibleRole;
    FILE_CHOOSER: AccessibleRole;
    FILLER: AccessibleRole;
    HYPERLINK: AccessibleRole;
    ICON: AccessibleRole;
    LABEL: AccessibleRole;
    ROOT_PANE: AccessibleRole;
    GLASS_PANE: AccessibleRole;
    LAYERED_PANE: AccessibleRole;
    LIST: AccessibleRole;
    LIST_ITEM: AccessibleRole;
    MENU_BAR: AccessibleRole;
    POPUP_MENU: AccessibleRole;
    MENU: AccessibleRole;
    MENU_ITEM: AccessibleRole;
    SEPARATOR: AccessibleRole;
    PAGE_TAB_LIST: AccessibleRole;
    PAGE_TAB: AccessibleRole;
    PANEL: AccessibleRole;
    PROGRESS_BAR: AccessibleRole;
    PASSWORD_TEXT: AccessibleRole;
    PUSH_BUTTON: AccessibleRole;
    TOGGLE_BUTTON: AccessibleRole;
    CHECK_BOX: AccessibleRole;
    RADIO_BUTTON: AccessibleRole;
    ROW_HEADER: AccessibleRole;
    SCROLL_PANE: AccessibleRole;
    SCROLL_BAR: AccessibleRole;
    VIEWPORT: AccessibleRole;
    SLIDER: AccessibleRole;
    SPLIT_PANE: AccessibleRole;
    TABLE: AccessibleRole;
    TEXT: AccessibleRole;
    TREE: AccessibleRole;
    TOOL_BAR: AccessibleRole;
    TOOL_TIP: AccessibleRole;
    AWT_COMPONENT: AccessibleRole;
    SWING_COMPONENT: AccessibleRole;
    UNKNOWN: AccessibleRole;
    STATUS_BAR: AccessibleRole;
    DATE_EDITOR: AccessibleRole;
    SPIN_BOX: AccessibleRole;
    FONT_CHOOSER: AccessibleRole;
    GROUP_BOX: AccessibleRole;
    HEADER: AccessibleRole;
    FOOTER: AccessibleRole;
    PARAGRAPH: AccessibleRole;
    RULER: AccessibleRole;
    EDITBAR: AccessibleRole;
    PROGRESS_MONITOR: AccessibleRole;
}

// javax.accessibility.AccessibleEditableText
declare interface AccessibleEditableText extends AccessibleText {
    delete(i: number, i: number): void;
    paste(i: number): void;
    setTextContents(s: string): void;
    insertTextAtIndex(i: number, s: string): void;
    getTextRange(i: number, i: number): string;
    cut(i: number, i: number): void;
    replaceText(i: number, i: number, s: string): void;
    selectText(i: number, i: number): void;
    setAttributes(i: number, i: number, attributeSet: AttributeSet): void;
}

// javax.accessibility.AccessibleRelationSet
declare interface AccessibleRelationSet {
    add(accessibleRelation: AccessibleRelation): boolean;
    remove(accessibleRelation: AccessibleRelation): boolean;
    get(s: string): AccessibleRelation;
    clear(): void;
    contains(s: string): boolean;
    size(): number;
    toArray(): AccessibleRelation[];
    addAll(accessibleRelation: AccessibleRelation): void;
}

// javax.accessibility.AccessibleStateSet
declare interface AccessibleStateSet {
    add(accessibleState: AccessibleState): boolean;
    remove(accessibleState: AccessibleState): boolean;
    clear(): void;
    contains(accessibleState: AccessibleState): boolean;
    toArray(): AccessibleState[];
    addAll(accessibleState: AccessibleState): void;
}

// java.awt.event.ContainerListener
declare interface ContainerListener extends EventListener {
    componentAdded(containerEvent: ContainerEvent): void;
    componentRemoved(containerEvent: ContainerEvent): void;
}

// java.awt.PageAttributes
declare interface PageAttributes extends Cloneable {
    set(pageAttributes: PageAttributes): void;
    getColor(): ColorType;
    getOrigin(): OriginType;
    setColor(colorType: ColorType): void;
    getMedia(): MediaType;
    setMedia(mediaType: MediaType): void;
    setMediaToDefault(): void;
    getOrientationRequested(): OrientationRequestedType;
    setOrientationRequested(i: number): void;
    setOrientationRequested(orientationRequestedType: OrientationRequestedType): void;
    setOrientationRequestedToDefault(): void;
    setOrigin(originType: OriginType): void;
    getPrintQuality(): PrintQualityType;
    setPrintQuality(printQualityType: PrintQualityType): void;
    setPrintQuality(i: number): void;
    setPrintQualityToDefault(): void;
    getPrinterResolution(): number[];
    setPrinterResolution(i: number): void;
    setPrinterResolution(i: number): void;
    setPrinterResolutionToDefault(): void;
}

// java.awt.im.InputMethodRequests
declare interface InputMethodRequests {
    getSelectedText(attribute: Attribute): AttributedCharacterIterator;
    getTextLocation(textHitInfo: TextHitInfo): Rectangle;
    getLocationOffset(i: number, i: number): TextHitInfo;
    getInsertPositionOffset(): number;
    getCommittedText(i: number, i: number, attribute: Attribute): AttributedCharacterIterator;
    getCommittedTextLength(): number;
    cancelLatestCommittedText(attribute: Attribute): AttributedCharacterIterator;
}

// java.awt.event.ComponentListener
declare interface ComponentListener extends EventListener {
    componentResized(componentEvent: ComponentEvent): void;
    componentMoved(componentEvent: ComponentEvent): void;
    componentShown(componentEvent: ComponentEvent): void;
    componentHidden(componentEvent: ComponentEvent): void;
}

// java.awt.event.FocusListener
declare interface FocusListener extends EventListener {
    focusGained(focusEvent: FocusEvent): void;
    focusLost(focusEvent: FocusEvent): void;
}

// java.awt.dnd.DragGestureListener
declare interface DragGestureListener extends EventListener {
    dragGestureRecognized(dragGestureEvent: DragGestureEvent): void;
}

// java.awt.MenuComponent
declare interface MenuComponent extends Serializable {
    getName(): string;
    getParent(): MenuContainer;
    setName(s: string): void;
    postEvent(event: Event): boolean;
    getAccessibleContext(): AccessibleContext;
    dispatchEvent(aWTEvent: AWTEvent): void;
    getFont(): Font;
    setFont(font: Font): void;
    removeNotify(): void;
}

// java.awt.event.InputMethodListener
declare interface InputMethodListener extends EventListener {
    inputMethodTextChanged(inputMethodEvent: InputMethodEvent): void;
    caretPositionChanged(inputMethodEvent: InputMethodEvent): void;
}

// java.awt.event.MouseWheelListener
declare interface MouseWheelListener extends EventListener {
    mouseWheelMoved(mouseWheelEvent: MouseWheelEvent): void;
}

// java.awt.datatransfer.Transferable
declare interface Transferable {
    getTransferDataFlavors(): DataFlavor[];
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    getTransferData(dataFlavor: DataFlavor): any;
}

// java.text.Format$Field
declare interface Field extends Attribute {
}

// java.awt.event.InputMethodEvent
declare interface InputMethodEvent extends AWTEvent {
    getText(): AttributedCharacterIterator;
    getCommittedCharacterCount(): number;
    getCaret(): TextHitInfo;
    getVisiblePosition(): TextHitInfo;
    getWhen(): number;
    INPUT_METHOD_FIRST: number;
    INPUT_METHOD_TEXT_CHANGED: number;
    CARET_POSITION_CHANGED: number;
    INPUT_METHOD_LAST: number;
}

// java.awt.event.FocusEvent
declare interface FocusEvent extends ComponentEvent {
    getCause(): Cause;
    isTemporary(): boolean;
    getOppositeComponent(): Component;
    FOCUS_FIRST: number;
    FOCUS_LAST: number;
    FOCUS_GAINED: number;
    FOCUS_LOST: number;
}

// java.awt.dnd.DropTargetDropEvent
declare interface DropTargetDropEvent extends DropTargetEvent {
    getLocation(): Point;
    rejectDrop(): void;
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    getSourceActions(): number;
    getCurrentDataFlavors(): DataFlavor[];
    getCurrentDataFlavorsAsList(): List;
    getDropAction(): number;
    getTransferable(): Transferable;
    acceptDrop(i: number): void;
    dropComplete(b: boolean): void;
    isLocalTransfer(): boolean;
}

// javax.accessibility.AccessibleBundle
declare interface AccessibleBundle {
    toDisplayString(): string;
    toDisplayString(locale: Locale): string;
}

// java.awt.dnd.DragSourceListener
declare interface DragSourceListener extends EventListener {
    dragDropEnd(dragSourceDropEvent: DragSourceDropEvent): void;
    dragEnter(dragSourceDragEvent: DragSourceDragEvent): void;
    dragOver(dragSourceDragEvent: DragSourceDragEvent): void;
    dropActionChanged(dragSourceDragEvent: DragSourceDragEvent): void;
    dragExit(dragSourceEvent: DragSourceEvent): void;
}

// java.awt.event.InputEvent
declare interface InputEvent extends ComponentEvent {
    getModifiers(): number;
    isControlDown(): boolean;
    isShiftDown(): boolean;
    consume(): void;
    getModifiersEx(): number;
    getModifiersExText(i: number): string;
    getMaskForButton(i: number): number;
    isMetaDown(): boolean;
    isAltDown(): boolean;
    isAltGraphDown(): boolean;
    isConsumed(): boolean;
    getWhen(): number;
    SHIFT_MASK: number;
    CTRL_MASK: number;
    META_MASK: number;
    ALT_MASK: number;
    ALT_GRAPH_MASK: number;
    BUTTON1_MASK: number;
    BUTTON2_MASK: number;
    BUTTON3_MASK: number;
    SHIFT_DOWN_MASK: number;
    CTRL_DOWN_MASK: number;
    META_DOWN_MASK: number;
    ALT_DOWN_MASK: number;
    BUTTON1_DOWN_MASK: number;
    BUTTON2_DOWN_MASK: number;
    BUTTON3_DOWN_MASK: number;
    ALT_GRAPH_DOWN_MASK: number;
}

// java.awt.Menu
declare interface Menu extends MenuItem, MenuContainer, Accessible {
    add(menuItem: MenuItem): MenuItem;
    add(s: string): void;
    remove(i: number): void;
    remove(menuComponent: MenuComponent): void;
    insert(menuItem: MenuItem, i: number): void;
    insert(s: string, i: number): void;
    removeAll(): void;
    getItem(i: number): MenuItem;
    removeNotify(): void;
    getItemCount(): number;
    isTearOff(): boolean;
    countItems(): number;
    addSeparator(): void;
    insertSeparator(i: number): void;
}

// java.awt.JobAttributes$DialogType
declare interface DialogType extends AttributeValue {
    COMMON: DialogType;
    NATIVE: DialogType;
    NONE: DialogType;
}

// java.nio.channels.spi.SelectorProvider
declare interface SelectorProvider {
    inheritedChannel(): Channel;
    provider(): SelectorProvider;
    openSocketChannel(): SocketChannel;
    openSelector(): AbstractSelector;
    openDatagramChannel(protocolFamily: ProtocolFamily): DatagramChannel;
    openDatagramChannel(): DatagramChannel;
    openPipe(): Pipe;
    openServerSocketChannel(): ServerSocketChannel;
}

// java.awt.dnd.DragSourceMotionListener
declare interface DragSourceMotionListener extends EventListener {
    dragMouseMoved(dragSourceDragEvent: DragSourceDragEvent): void;
}

// java.awt.JobAttributes$MultipleDocumentHandlingType
declare interface MultipleDocumentHandlingType extends AttributeValue {
    SEPARATE_DOCUMENTS_COLLATED_COPIES: MultipleDocumentHandlingType;
    SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: MultipleDocumentHandlingType;
}

// java.awt.event.ContainerEvent
declare interface ContainerEvent extends ComponentEvent {
    getContainer(): Container;
    getChild(): Component;
    CONTAINER_FIRST: number;
    CONTAINER_LAST: number;
    COMPONENT_ADDED: number;
    COMPONENT_REMOVED: number;
}

// javax.swing.text.AttributeSet
declare interface AttributeSet {
    isDefined(object: any): boolean;
    isEqual(attributeSet: AttributeSet): boolean;
    getAttribute(object: any): any;
    getAttributeCount(): number;
    copyAttributes(): AttributeSet;
    getAttributeNames(): Enumeration;
    containsAttribute(object: any, object: any): boolean;
    containsAttributes(attributeSet: AttributeSet): boolean;
    getResolveParent(): AttributeSet;
    NameAttribute: any;
    ResolveAttribute: any;
}

// java.awt.JobAttributes$SidesType
declare interface SidesType extends AttributeValue {
    ONE_SIDED: SidesType;
    TWO_SIDED_LONG_EDGE: SidesType;
    TWO_SIDED_SHORT_EDGE: SidesType;
}

// java.awt.JobAttributes$DestinationType
declare interface DestinationType extends AttributeValue {
    FILE: DestinationType;
    PRINTER: DestinationType;
}

// java.awt.dnd.DropTargetContext
declare interface DropTargetContext extends Serializable {
    getDropTarget(): DropTarget;
    getComponent(): Component;
    dropComplete(b: boolean): void;
}

// java.awt.JobAttributes$DefaultSelectionType
declare interface DefaultSelectionType extends AttributeValue {
    ALL: DefaultSelectionType;
    RANGE: DefaultSelectionType;
    SELECTION: DefaultSelectionType;
}

// java.awt.datatransfer.ClipboardOwner
declare interface ClipboardOwner {
    lostOwnership(clipboard: Clipboard, transferable: Transferable): void;
}

// java.awt.SecondaryLoop
declare interface SecondaryLoop {
    exit(): boolean;
    enter(): boolean;
}

// java.awt.PageAttributes$MediaType
declare interface MediaType extends AttributeValue {
    ISO_4A0: MediaType;
    ISO_2A0: MediaType;
    ISO_A0: MediaType;
    ISO_A1: MediaType;
    ISO_A2: MediaType;
    ISO_A3: MediaType;
    ISO_A4: MediaType;
    ISO_A5: MediaType;
    ISO_A6: MediaType;
    ISO_A7: MediaType;
    ISO_A8: MediaType;
    ISO_A9: MediaType;
    ISO_A10: MediaType;
    ISO_B0: MediaType;
    ISO_B1: MediaType;
    ISO_B2: MediaType;
    ISO_B3: MediaType;
    ISO_B4: MediaType;
    ISO_B5: MediaType;
    ISO_B6: MediaType;
    ISO_B7: MediaType;
    ISO_B8: MediaType;
    ISO_B9: MediaType;
    ISO_B10: MediaType;
    JIS_B0: MediaType;
    JIS_B1: MediaType;
    JIS_B2: MediaType;
    JIS_B3: MediaType;
    JIS_B4: MediaType;
    JIS_B5: MediaType;
    JIS_B6: MediaType;
    JIS_B7: MediaType;
    JIS_B8: MediaType;
    JIS_B9: MediaType;
    JIS_B10: MediaType;
    ISO_C0: MediaType;
    ISO_C1: MediaType;
    ISO_C2: MediaType;
    ISO_C3: MediaType;
    ISO_C4: MediaType;
    ISO_C5: MediaType;
    ISO_C6: MediaType;
    ISO_C7: MediaType;
    ISO_C8: MediaType;
    ISO_C9: MediaType;
    ISO_C10: MediaType;
    ISO_DESIGNATED_LONG: MediaType;
    EXECUTIVE: MediaType;
    FOLIO: MediaType;
    INVOICE: MediaType;
    LEDGER: MediaType;
    NA_LETTER: MediaType;
    NA_LEGAL: MediaType;
    QUARTO: MediaType;
    A: MediaType;
    B: MediaType;
    C: MediaType;
    D: MediaType;
    E: MediaType;
    NA_10X15_ENVELOPE: MediaType;
    NA_10X14_ENVELOPE: MediaType;
    NA_10X13_ENVELOPE: MediaType;
    NA_9X12_ENVELOPE: MediaType;
    NA_9X11_ENVELOPE: MediaType;
    NA_7X9_ENVELOPE: MediaType;
    NA_6X9_ENVELOPE: MediaType;
    NA_NUMBER_9_ENVELOPE: MediaType;
    NA_NUMBER_10_ENVELOPE: MediaType;
    NA_NUMBER_11_ENVELOPE: MediaType;
    NA_NUMBER_12_ENVELOPE: MediaType;
    NA_NUMBER_14_ENVELOPE: MediaType;
    INVITE_ENVELOPE: MediaType;
    ITALY_ENVELOPE: MediaType;
    MONARCH_ENVELOPE: MediaType;
    PERSONAL_ENVELOPE: MediaType;
    A0: MediaType;
    A1: MediaType;
    A2: MediaType;
    A3: MediaType;
    A4: MediaType;
    A5: MediaType;
    A6: MediaType;
    A7: MediaType;
    A8: MediaType;
    A9: MediaType;
    A10: MediaType;
    B0: MediaType;
    B1: MediaType;
    B2: MediaType;
    B3: MediaType;
    B4: MediaType;
    ISO_B4_ENVELOPE: MediaType;
    B5: MediaType;
    ISO_B5_ENVELOPE: MediaType;
    B6: MediaType;
    B7: MediaType;
    B8: MediaType;
    B9: MediaType;
    B10: MediaType;
    C0: MediaType;
    ISO_C0_ENVELOPE: MediaType;
    C1: MediaType;
    ISO_C1_ENVELOPE: MediaType;
    C2: MediaType;
    ISO_C2_ENVELOPE: MediaType;
    C3: MediaType;
    ISO_C3_ENVELOPE: MediaType;
    C4: MediaType;
    ISO_C4_ENVELOPE: MediaType;
    C5: MediaType;
    ISO_C5_ENVELOPE: MediaType;
    C6: MediaType;
    ISO_C6_ENVELOPE: MediaType;
    C7: MediaType;
    ISO_C7_ENVELOPE: MediaType;
    C8: MediaType;
    ISO_C8_ENVELOPE: MediaType;
    C9: MediaType;
    ISO_C9_ENVELOPE: MediaType;
    C10: MediaType;
    ISO_C10_ENVELOPE: MediaType;
    ISO_DESIGNATED_LONG_ENVELOPE: MediaType;
    STATEMENT: MediaType;
    TABLOID: MediaType;
    LETTER: MediaType;
    NOTE: MediaType;
    LEGAL: MediaType;
    ENV_10X15: MediaType;
    ENV_10X14: MediaType;
    ENV_10X13: MediaType;
    ENV_9X12: MediaType;
    ENV_9X11: MediaType;
    ENV_7X9: MediaType;
    ENV_6X9: MediaType;
    ENV_9: MediaType;
    ENV_10: MediaType;
    ENV_11: MediaType;
    ENV_12: MediaType;
    ENV_14: MediaType;
    ENV_INVITE: MediaType;
    ENV_ITALY: MediaType;
    ENV_MONARCH: MediaType;
    ENV_PERSONAL: MediaType;
    INVITE: MediaType;
    ITALY: MediaType;
    MONARCH: MediaType;
    PERSONAL: MediaType;
}

// java.awt.PageAttributes$ColorType
declare interface ColorType extends AttributeValue {
    COLOR: ColorType;
    MONOCHROME: ColorType;
}

// java.awt.PageAttributes$PrintQualityType
declare interface PrintQualityType extends AttributeValue {
    HIGH: PrintQualityType;
    NORMAL: PrintQualityType;
    DRAFT: PrintQualityType;
}

// java.nio.channels.Selector
declare interface Selector extends Closeable {
    isOpen(): boolean;
    provider(): SelectorProvider;
    keys(): Set;
    close(): void;
    open(): Selector;
    select(consumer: Consumer, l: number): number;
    select(): number;
    select(consumer: Consumer): number;
    select(l: number): number;
    wakeup(): Selector;
    selectedKeys(): Set;
    selectNow(): number;
    selectNow(consumer: Consumer): number;
}

// java.nio.channels.SelectionKey
declare interface SelectionKey {
    channel(): SelectableChannel;
    attach(object: any): any;
    interestOps(): number;
    interestOps(i: number): SelectionKey;
    isReadable(): boolean;
    isWritable(): boolean;
    isValid(): boolean;
    attachment(): any;
    selector(): Selector;
    cancel(): void;
    interestOpsOr(i: number): number;
    interestOpsAnd(i: number): number;
    readyOps(): number;
    isConnectable(): boolean;
    isAcceptable(): boolean;
    OP_READ: number;
    OP_WRITE: number;
    OP_CONNECT: number;
    OP_ACCEPT: number;
}

// java.awt.event.MouseWheelEvent
declare interface MouseWheelEvent extends MouseEvent {
    getUnitsToScroll(): number;
    getScrollType(): number;
    getScrollAmount(): number;
    getWheelRotation(): number;
    getPreciseWheelRotation(): number;
    WHEEL_UNIT_SCROLL: number;
    WHEEL_BLOCK_SCROLL: number;
}

// java.awt.MenuBar
declare interface MenuBar extends MenuComponent, MenuContainer, Accessible {
    add(menu: Menu): Menu;
    remove(i: number): void;
    remove(menuComponent: MenuComponent): void;
    getHelpMenu(): Menu;
    setHelpMenu(menu: Menu): void;
    getMenuCount(): number;
    countMenus(): number;
    getMenu(i: number): Menu;
    addNotify(): void;
    getShortcutMenuItem(menuShortcut: MenuShortcut): MenuItem;
    shortcuts(): Enumeration;
    deleteShortcut(menuShortcut: MenuShortcut): void;
}

// java.awt.dnd.DropTargetListener
declare interface DropTargetListener extends EventListener {
    drop(dropTargetDropEvent: DropTargetDropEvent): void;
    dragEnter(dropTargetDragEvent: DropTargetDragEvent): void;
    dragOver(dropTargetDragEvent: DropTargetDragEvent): void;
    dropActionChanged(dropTargetDragEvent: DropTargetDragEvent): void;
    dragExit(dropTargetEvent: DropTargetEvent): void;
}

// javax.accessibility.AccessibleRelation
declare interface AccessibleRelation extends AccessibleBundle {
    getKey(): string;
    getTarget(): any[];
    setTarget(object: any): void;
    setTarget(object: any): void;
    LABEL_FOR: string;
    LABELED_BY: string;
    MEMBER_OF: string;
    CONTROLLER_FOR: string;
    CONTROLLED_BY: string;
    FLOWS_TO: string;
    FLOWS_FROM: string;
    SUBWINDOW_OF: string;
    PARENT_WINDOW_OF: string;
    EMBEDS: string;
    EMBEDDED_BY: string;
    CHILD_NODE_OF: string;
    LABEL_FOR_PROPERTY: string;
    LABELED_BY_PROPERTY: string;
    MEMBER_OF_PROPERTY: string;
    CONTROLLER_FOR_PROPERTY: string;
    CONTROLLED_BY_PROPERTY: string;
    FLOWS_TO_PROPERTY: string;
    FLOWS_FROM_PROPERTY: string;
    SUBWINDOW_OF_PROPERTY: string;
    PARENT_WINDOW_OF_PROPERTY: string;
    EMBEDS_PROPERTY: string;
    EMBEDDED_BY_PROPERTY: string;
    CHILD_NODE_OF_PROPERTY: string;
}

// java.awt.event.ComponentEvent
declare interface ComponentEvent extends AWTEvent {
    getComponent(): Component;
    COMPONENT_FIRST: number;
    COMPONENT_LAST: number;
    COMPONENT_MOVED: number;
    COMPONENT_RESIZED: number;
    COMPONENT_SHOWN: number;
    COMPONENT_HIDDEN: number;
}

// java.awt.datatransfer.FlavorListener
declare interface FlavorListener extends EventListener {
    flavorsChanged(flavorEvent: FlavorEvent): void;
}

// java.awt.datatransfer.FlavorMap
declare interface FlavorMap {
    getNativesForFlavors(dataFlavor: DataFlavor): Map;
    getFlavorsForNatives(s: string): Map;
}

// java.awt.datatransfer.DataFlavor
declare interface DataFlavor extends Externalizable, Cloneable {
    equals(s: string): boolean;
    equals(dataFlavor: DataFlavor): boolean;
    match(dataFlavor: DataFlavor): boolean;
    writeExternal(objectOutput: ObjectOutput): void;
    readExternal(objectInput: ObjectInput): void;
    getParameter(s: string): string;
    getTextPlainUnicodeFlavor(): DataFlavor;
    selectBestTextFlavor(dataFlavor: DataFlavor): DataFlavor;
    getReaderForText(transferable: Transferable): Reader;
    getMimeType(): string;
    getRepresentationClass(): Class;
    getHumanPresentableName(): string;
    getPrimaryType(): string;
    getSubType(): string;
    setHumanPresentableName(s: string): void;
    isMimeTypeEqual(dataFlavor: DataFlavor): boolean;
    isMimeTypeEqual(s: string): boolean;
    isMimeTypeSerializedObject(): boolean;
    getDefaultRepresentationClass(): Class;
    getDefaultRepresentationClassAsString(): string;
    isRepresentationClassInputStream(): boolean;
    isRepresentationClassReader(): boolean;
    isRepresentationClassCharBuffer(): boolean;
    isRepresentationClassByteBuffer(): boolean;
    isRepresentationClassSerializable(): boolean;
    isRepresentationClassRemote(): boolean;
    isFlavorSerializedObjectType(): boolean;
    isFlavorRemoteObjectType(): boolean;
    isFlavorJavaFileListType(): boolean;
    isFlavorTextType(): boolean;
    stringFlavor: DataFlavor;
    imageFlavor: DataFlavor;
    plainTextFlavor: DataFlavor;
    javaSerializedObjectMimeType: string;
    javaFileListFlavor: DataFlavor;
    javaJVMLocalObjectMimeType: string;
    javaRemoteObjectMimeType: string;
    selectionHtmlFlavor: DataFlavor;
    fragmentHtmlFlavor: DataFlavor;
    allHtmlFlavor: DataFlavor;
}

// java.awt.PageAttributes$OrientationRequestedType
declare interface OrientationRequestedType extends AttributeValue {
    PORTRAIT: OrientationRequestedType;
    LANDSCAPE: OrientationRequestedType;
}

// java.beans.PropertyChangeEvent
declare interface PropertyChangeEvent extends EventObject {
    getNewValue(): any;
    setPropagationId(object: any): void;
    getPropagationId(): any;
    getPropertyName(): string;
    getOldValue(): any;
}

// java.awt.dnd.DragGestureEvent
declare interface DragGestureEvent extends EventObject {
    toArray(object: any): any[];
    toArray(): any[];
    iterator(): Iterator;
    getSourceAsDragGestureRecognizer(): DragGestureRecognizer;
    getDragOrigin(): Point;
    getDragAction(): number;
    getComponent(): Component;
    startDrag(cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(cursor: Cursor, transferable: Transferable): void;
    getDragSource(): DragSource;
    getTriggerEvent(): InputEvent;
}

// java.awt.font.TextHitInfo
declare interface TextHitInfo {
    equals(textHitInfo: TextHitInfo): boolean;
    leading(i: number): TextHitInfo;
    isLeadingEdge(): boolean;
    getCharIndex(): number;
    getInsertionIndex(): number;
    trailing(i: number): TextHitInfo;
    beforeOffset(i: number): TextHitInfo;
    afterOffset(i: number): TextHitInfo;
    getOtherHit(): TextHitInfo;
    getOffsetHit(i: number): TextHitInfo;
}

// java.awt.dnd.DropTargetEvent
declare interface DropTargetEvent extends EventObject {
    getDropTargetContext(): DropTargetContext;
}

// java.awt.PageAttributes$OriginType
declare interface OriginType extends AttributeValue {
    PHYSICAL: OriginType;
    PRINTABLE: OriginType;
}

// java.awt.event.HierarchyEvent
declare interface HierarchyEvent extends AWTEvent {
    getComponent(): Component;
    getChanged(): Component;
    getChangedParent(): Container;
    getChangeFlags(): number;
    HIERARCHY_FIRST: number;
    HIERARCHY_CHANGED: number;
    ANCESTOR_MOVED: number;
    ANCESTOR_RESIZED: number;
    HIERARCHY_LAST: number;
    PARENT_CHANGED: number;
    DISPLAYABILITY_CHANGED: number;
    SHOWING_CHANGED: number;
}

// java.awt.event.KeyEvent
declare interface KeyEvent extends InputEvent {
    paramString(): string;
    isActionKey(): boolean;
    getKeyCode(): number;
    setKeyCode(i: number): void;
    getKeyLocation(): number;
    getKeyText(i: number): string;
    getKeyModifiersText(i: number): string;
    getExtendedKeyCode(): number;
    getExtendedKeyCodeForChar(i: number): number;
    setKeyChar(c: string): void;
    setModifiers(i: number): void;
    getKeyChar(): string;
    KEY_FIRST: number;
    KEY_LAST: number;
    KEY_TYPED: number;
    KEY_PRESSED: number;
    KEY_RELEASED: number;
    VK_ENTER: number;
    VK_BACK_SPACE: number;
    VK_TAB: number;
    VK_CANCEL: number;
    VK_CLEAR: number;
    VK_SHIFT: number;
    VK_CONTROL: number;
    VK_ALT: number;
    VK_PAUSE: number;
    VK_CAPS_LOCK: number;
    VK_ESCAPE: number;
    VK_SPACE: number;
    VK_PAGE_UP: number;
    VK_PAGE_DOWN: number;
    VK_END: number;
    VK_HOME: number;
    VK_LEFT: number;
    VK_UP: number;
    VK_RIGHT: number;
    VK_DOWN: number;
    VK_COMMA: number;
    VK_MINUS: number;
    VK_PERIOD: number;
    VK_SLASH: number;
    VK_0: number;
    VK_1: number;
    VK_2: number;
    VK_3: number;
    VK_4: number;
    VK_5: number;
    VK_6: number;
    VK_7: number;
    VK_8: number;
    VK_9: number;
    VK_SEMICOLON: number;
    VK_EQUALS: number;
    VK_A: number;
    VK_B: number;
    VK_C: number;
    VK_D: number;
    VK_E: number;
    VK_F: number;
    VK_G: number;
    VK_H: number;
    VK_I: number;
    VK_J: number;
    VK_K: number;
    VK_L: number;
    VK_M: number;
    VK_N: number;
    VK_O: number;
    VK_P: number;
    VK_Q: number;
    VK_R: number;
    VK_S: number;
    VK_T: number;
    VK_U: number;
    VK_V: number;
    VK_W: number;
    VK_X: number;
    VK_Y: number;
    VK_Z: number;
    VK_OPEN_BRACKET: number;
    VK_BACK_SLASH: number;
    VK_CLOSE_BRACKET: number;
    VK_NUMPAD0: number;
    VK_NUMPAD1: number;
    VK_NUMPAD2: number;
    VK_NUMPAD3: number;
    VK_NUMPAD4: number;
    VK_NUMPAD5: number;
    VK_NUMPAD6: number;
    VK_NUMPAD7: number;
    VK_NUMPAD8: number;
    VK_NUMPAD9: number;
    VK_MULTIPLY: number;
    VK_ADD: number;
    VK_SEPARATER: number;
    VK_SEPARATOR: number;
    VK_SUBTRACT: number;
    VK_DECIMAL: number;
    VK_DIVIDE: number;
    VK_DELETE: number;
    VK_NUM_LOCK: number;
    VK_SCROLL_LOCK: number;
    VK_F1: number;
    VK_F2: number;
    VK_F3: number;
    VK_F4: number;
    VK_F5: number;
    VK_F6: number;
    VK_F7: number;
    VK_F8: number;
    VK_F9: number;
    VK_F10: number;
    VK_F11: number;
    VK_F12: number;
    VK_F13: number;
    VK_F14: number;
    VK_F15: number;
    VK_F16: number;
    VK_F17: number;
    VK_F18: number;
    VK_F19: number;
    VK_F20: number;
    VK_F21: number;
    VK_F22: number;
    VK_F23: number;
    VK_F24: number;
    VK_PRINTSCREEN: number;
    VK_INSERT: number;
    VK_HELP: number;
    VK_META: number;
    VK_BACK_QUOTE: number;
    VK_QUOTE: number;
    VK_KP_UP: number;
    VK_KP_DOWN: number;
    VK_KP_LEFT: number;
    VK_KP_RIGHT: number;
    VK_DEAD_GRAVE: number;
    VK_DEAD_ACUTE: number;
    VK_DEAD_CIRCUMFLEX: number;
    VK_DEAD_TILDE: number;
    VK_DEAD_MACRON: number;
    VK_DEAD_BREVE: number;
    VK_DEAD_ABOVEDOT: number;
    VK_DEAD_DIAERESIS: number;
    VK_DEAD_ABOVERING: number;
    VK_DEAD_DOUBLEACUTE: number;
    VK_DEAD_CARON: number;
    VK_DEAD_CEDILLA: number;
    VK_DEAD_OGONEK: number;
    VK_DEAD_IOTA: number;
    VK_DEAD_VOICED_SOUND: number;
    VK_DEAD_SEMIVOICED_SOUND: number;
    VK_AMPERSAND: number;
    VK_ASTERISK: number;
    VK_QUOTEDBL: number;
    VK_LESS: number;
    VK_GREATER: number;
    VK_BRACELEFT: number;
    VK_BRACERIGHT: number;
    VK_AT: number;
    VK_COLON: number;
    VK_CIRCUMFLEX: number;
    VK_DOLLAR: number;
    VK_EURO_SIGN: number;
    VK_EXCLAMATION_MARK: number;
    VK_INVERTED_EXCLAMATION_MARK: number;
    VK_LEFT_PARENTHESIS: number;
    VK_NUMBER_SIGN: number;
    VK_PLUS: number;
    VK_RIGHT_PARENTHESIS: number;
    VK_UNDERSCORE: number;
    VK_WINDOWS: number;
    VK_CONTEXT_MENU: number;
    VK_FINAL: number;
    VK_CONVERT: number;
    VK_NONCONVERT: number;
    VK_ACCEPT: number;
    VK_MODECHANGE: number;
    VK_KANA: number;
    VK_KANJI: number;
    VK_ALPHANUMERIC: number;
    VK_KATAKANA: number;
    VK_HIRAGANA: number;
    VK_FULL_WIDTH: number;
    VK_HALF_WIDTH: number;
    VK_ROMAN_CHARACTERS: number;
    VK_ALL_CANDIDATES: number;
    VK_PREVIOUS_CANDIDATE: number;
    VK_CODE_INPUT: number;
    VK_JAPANESE_KATAKANA: number;
    VK_JAPANESE_HIRAGANA: number;
    VK_JAPANESE_ROMAN: number;
    VK_KANA_LOCK: number;
    VK_INPUT_METHOD_ON_OFF: number;
    VK_CUT: number;
    VK_COPY: number;
    VK_PASTE: number;
    VK_UNDO: number;
    VK_AGAIN: number;
    VK_FIND: number;
    VK_PROPS: number;
    VK_STOP: number;
    VK_COMPOSE: number;
    VK_ALT_GRAPH: number;
    VK_BEGIN: number;
    VK_UNDEFINED: number;
    CHAR_UNDEFINED: string;
    KEY_LOCATION_UNKNOWN: number;
    KEY_LOCATION_STANDARD: number;
    KEY_LOCATION_LEFT: number;
    KEY_LOCATION_RIGHT: number;
    KEY_LOCATION_NUMPAD: number;
}

// java.awt.event.MouseEvent
declare interface MouseEvent extends InputEvent {
    paramString(): string;
    getLocationOnScreen(): Point;
    getY(): number;
    getX(): number;
    getPoint(): Point;
    translatePoint(i: number, i: number): void;
    getButton(): number;
    getMouseModifiersText(i: number): string;
    getXOnScreen(): number;
    getYOnScreen(): number;
    getClickCount(): number;
    isPopupTrigger(): boolean;
    MOUSE_FIRST: number;
    MOUSE_LAST: number;
    MOUSE_CLICKED: number;
    MOUSE_PRESSED: number;
    MOUSE_RELEASED: number;
    MOUSE_MOVED: number;
    MOUSE_ENTERED: number;
    MOUSE_EXITED: number;
    MOUSE_DRAGGED: number;
    MOUSE_WHEEL: number;
    NOBUTTON: number;
    BUTTON1: number;
    BUTTON2: number;
    BUTTON3: number;
}

// java.awt.dnd.DropTargetDragEvent
declare interface DropTargetDragEvent extends DropTargetEvent {
    getLocation(): Point;
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    getSourceActions(): number;
    getCurrentDataFlavors(): DataFlavor[];
    getCurrentDataFlavorsAsList(): List;
    getDropAction(): number;
    getTransferable(): Transferable;
    acceptDrag(i: number): void;
    rejectDrag(): void;
}

// javax.accessibility.AccessibleState
declare interface AccessibleState extends AccessibleBundle {
    ACTIVE: AccessibleState;
    PRESSED: AccessibleState;
    ARMED: AccessibleState;
    BUSY: AccessibleState;
    CHECKED: AccessibleState;
    EDITABLE: AccessibleState;
    EXPANDABLE: AccessibleState;
    COLLAPSED: AccessibleState;
    EXPANDED: AccessibleState;
    ENABLED: AccessibleState;
    FOCUSABLE: AccessibleState;
    FOCUSED: AccessibleState;
    ICONIFIED: AccessibleState;
    MODAL: AccessibleState;
    OPAQUE: AccessibleState;
    RESIZABLE: AccessibleState;
    MULTISELECTABLE: AccessibleState;
    SELECTABLE: AccessibleState;
    SELECTED: AccessibleState;
    SHOWING: AccessibleState;
    VISIBLE: AccessibleState;
    VERTICAL: AccessibleState;
    HORIZONTAL: AccessibleState;
    SINGLE_LINE: AccessibleState;
    MULTI_LINE: AccessibleState;
    TRANSIENT: AccessibleState;
    MANAGES_DESCENDANTS: AccessibleState;
    INDETERMINATE: AccessibleState;
    TRUNCATED: AccessibleState;
}

// java.awt.dnd.DragSourceEvent
declare interface DragSourceEvent extends EventObject {
    getLocation(): Point;
    getY(): number;
    getX(): number;
    getDragSourceContext(): DragSourceContext;
}

// java.net.ProtocolFamily
declare interface ProtocolFamily {
    name(): string;
}

// java.io.Externalizable
declare interface Externalizable extends Serializable {
    writeExternal(objectOutput: ObjectOutput): void;
    readExternal(objectInput: ObjectInput): void;
}

// java.nio.channels.Pipe
declare interface Pipe {
    source(): SourceChannel;
    open(): Pipe;
    sink(): SinkChannel;
}

// java.awt.datatransfer.FlavorEvent
declare interface FlavorEvent extends EventObject {
}

// java.awt.dnd.DragSourceDragEvent
declare interface DragSourceDragEvent extends DragSourceEvent {
    getGestureModifiers(): number;
    getGestureModifiersEx(): number;
    getUserAction(): number;
    getDropAction(): number;
    getTargetActions(): number;
}

// java.awt.MenuItem
declare interface MenuItem extends MenuComponent, Accessible {
    disable(): void;
    enable(b: boolean): void;
    enable(): void;
    isEnabled(): boolean;
    getListeners(clazz: Class): EventListener[];
    getLabel(): string;
    setLabel(s: string): void;
    setEnabled(b: boolean): void;
    getActionCommand(): string;
    addNotify(): void;
    deleteShortcut(): void;
    getShortcut(): MenuShortcut;
    setShortcut(menuShortcut: MenuShortcut): void;
    setActionCommand(s: string): void;
    addActionListener(actionListener: ActionListener): void;
    removeActionListener(actionListener: ActionListener): void;
    getActionListeners(): ActionListener[];
}

// java.awt.dnd.DragSourceDropEvent
declare interface DragSourceDropEvent extends DragSourceEvent {
    getDropSuccess(): boolean;
    getDropAction(): number;
}

// java.nio.channels.DatagramChannel
declare interface DatagramChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, MulticastChannel {
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
    write(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    connect(socketAddress: SocketAddress): DatagramChannel;
    open(protocolFamily: ProtocolFamily): DatagramChannel;
    open(): DatagramChannel;
    bind(socketAddress: SocketAddress): NetworkChannel;
    bind(socketAddress: SocketAddress): DatagramChannel;
    validOps(): number;
    getRemoteAddress(): SocketAddress;
    getLocalAddress(): SocketAddress;
    socket(): DatagramSocket;
    isConnected(): boolean;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): DatagramChannel;
    send(byteBuffer: ByteBuffer, socketAddress: SocketAddress): number;
    disconnect(): DatagramChannel;
    receive(byteBuffer: ByteBuffer): SocketAddress;
}

// java.nio.channels.spi.AbstractSelector
declare interface AbstractSelector extends Selector {
}

// java.awt.MenuShortcut
declare interface MenuShortcut extends Serializable {
    equals(menuShortcut: MenuShortcut): boolean;
    getKey(): number;
    usesShiftModifier(): boolean;
}

// java.awt.dnd.DragSourceContext
declare interface DragSourceContext extends DragSourceListener, DragSourceMotionListener, Serializable {
    setCursor(cursor: Cursor): void;
    getCursor(): Cursor;
    getTrigger(): DragGestureEvent;
    transferablesFlavorsChanged(): void;
    getComponent(): Component;
    addDragSourceListener(dragSourceListener: DragSourceListener): void;
    removeDragSourceListener(dragSourceListener: DragSourceListener): void;
    dragDropEnd(dragSourceDropEvent: DragSourceDropEvent): void;
    dragMouseMoved(dragSourceDragEvent: DragSourceDragEvent): void;
    getDragSource(): DragSource;
    getSourceActions(): number;
    getTransferable(): Transferable;
    dragEnter(dragSourceDragEvent: DragSourceDragEvent): void;
    dragOver(dragSourceDragEvent: DragSourceDragEvent): void;
    dropActionChanged(dragSourceDragEvent: DragSourceDragEvent): void;
    dragExit(dragSourceEvent: DragSourceEvent): void;
}

// java.nio.channels.MulticastChannel
declare interface MulticastChannel extends NetworkChannel {
    join(inetAddress: InetAddress, networkInterface: NetworkInterface): MembershipKey;
    join(inetAddress: InetAddress, networkInterface: NetworkInterface, inetAddress: InetAddress): MembershipKey;
    close(): void;
}

// java.awt.event.ActionListener
declare interface ActionListener extends EventListener {
    actionPerformed(actionEvent: ActionEvent): void;
}

// java.nio.channels.Pipe$SourceChannel
declare interface SourceChannel extends AbstractSelectableChannel, ReadableByteChannel, ScatteringByteChannel {
    validOps(): number;
}

// java.nio.channels.Pipe$SinkChannel
declare interface SinkChannel extends AbstractSelectableChannel, WritableByteChannel, GatheringByteChannel {
    validOps(): number;
}

// java.net.DatagramSocket
declare interface DatagramSocket extends Closeable {
    connect(inetAddress: InetAddress, i: number): void;
    connect(socketAddress: SocketAddress): void;
    close(): void;
    getPort(): number;
    getChannel(): DatagramChannel;
    bind(socketAddress: SocketAddress): void;
    getInetAddress(): InetAddress;
    getLocalAddress(): InetAddress;
    getLocalPort(): number;
    getRemoteSocketAddress(): SocketAddress;
    getLocalSocketAddress(): SocketAddress;
    setSoTimeout(i: number): void;
    getSoTimeout(): number;
    setSendBufferSize(i: number): void;
    getSendBufferSize(): number;
    setReceiveBufferSize(i: number): void;
    getReceiveBufferSize(): number;
    setTrafficClass(i: number): void;
    getTrafficClass(): number;
    setReuseAddress(b: boolean): void;
    getReuseAddress(): boolean;
    isConnected(): boolean;
    isBound(): boolean;
    isClosed(): boolean;
    setOption(socketOption: SocketOption, object: any): DatagramSocket;
    getOption(socketOption: SocketOption): any;
    supportedOptions(): Set;
    send(datagramPacket: DatagramPacket): void;
    disconnect(): void;
    receive(datagramPacket: DatagramPacket): void;
    setBroadcast(b: boolean): void;
    getBroadcast(): boolean;
    setDatagramSocketImplFactory(datagramSocketImplFactory: DatagramSocketImplFactory): void;
}

// java.awt.event.ActionEvent
declare interface ActionEvent extends AWTEvent {
    getModifiers(): number;
    getActionCommand(): string;
    getWhen(): number;
    SHIFT_MASK: number;
    CTRL_MASK: number;
    META_MASK: number;
    ALT_MASK: number;
    ACTION_FIRST: number;
    ACTION_LAST: number;
    ACTION_PERFORMED: number;
}

// java.net.DatagramSocketImplFactory
declare interface DatagramSocketImplFactory {
    createDatagramSocketImpl(): DatagramSocketImpl;
}

// java.net.DatagramPacket
declare interface DatagramPacket {
    getLength(): number;
    setLength(i: number): void;
    getAddress(): InetAddress;
    getPort(): number;
    getOffset(): number;
    getData(): number[];
    setAddress(inetAddress: InetAddress): void;
    setPort(i: number): void;
    setData(b: number): void;
    setData(b: number, i: number, i: number): void;
    setSocketAddress(socketAddress: SocketAddress): void;
    getSocketAddress(): SocketAddress;
}

// java.nio.channels.MembershipKey
declare interface MembershipKey {
    group(): InetAddress;
    block(inetAddress: InetAddress): MembershipKey;
    channel(): MulticastChannel;
    isValid(): boolean;
    drop(): void;
    unblock(inetAddress: InetAddress): MembershipKey;
    networkInterface(): NetworkInterface;
    sourceAddress(): InetAddress;
}

// java.net.DatagramSocketImpl
declare interface DatagramSocketImpl extends SocketOptions {
}

