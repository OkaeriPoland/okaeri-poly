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
    isCancelled(): boolean;
    getRightClicked(): Entity;
    getHandlers(): HandlerList;
    getHand(): EquipmentSlot;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.Raider
declare interface Raider extends Monster {
    isCanJoinRaid(): boolean;
    isPatrolLeader(): boolean;
    getPatrolTarget(): Block;
    setCanJoinRaid(b: boolean): void;
    setPatrolLeader(b: boolean): void;
    setPatrolTarget(block: Block): void;
}

// org.bukkit.entity.Shulker
declare interface Shulker extends Golem, Colorable {
    getPeek(): number;
    getAttachedFace(): BlockFace;
    setAttachedFace(blockFace: BlockFace): void;
    setPeek(f: number): void;
}

// org.bukkit.block.ShulkerBox
declare interface ShulkerBox extends Container, Lootable, Lidded {
    getColor(): DyeColor;
}

// org.bukkit.entity.Rabbit
declare interface Rabbit extends Animals {
    getRabbitType(): Type;
    setRabbitType(type: Type): void;
}

// org.bukkit.command.RemoteConsoleCommandSender
declare interface RemoteConsoleCommandSender extends CommandSender {
}

// org.bukkit.inventory.LoomInventory
declare interface LoomInventory extends Inventory {
}

// org.bukkit.map.MapRenderer
declare interface MapRenderer {
    render(mapView: MapView, mapCanvas: MapCanvas, player: Player): void;
    isContextual(): boolean;
    initialize(mapView: MapView): void;
}

// org.bukkit.entity.Ageable
declare interface Ageable extends Creature {
    canBreed(): boolean;
    getAgeLock(): boolean;
    isAdult(): boolean;
    getAge(): number;
    setAdult(): void;
    setAge(i: number): void;
    setAgeLock(b: boolean): void;
    setBaby(): void;
    setBreed(b: boolean): void;
}

// org.bukkit.block.CommandBlock
declare interface CommandBlock extends TileState {
    getCommand(): string;
    getName(): string;
    setCommand(s: string): void;
    setName(s: string): void;
}

// org.bukkit.event.block.BlockIgniteEvent
declare interface BlockIgniteEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getIgnitingBlock(): Block;
    getIgnitingEntity(): Entity;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getCause(): IgniteCause;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.Fish
declare interface Fish extends WaterMob {
}

// org.bukkit.util.permissions.DefaultPermissions
declare interface DefaultPermissions {
    registerPermission(s: string, s: string): Permission;
    registerPermission(s: string, s: string, permission: Permission): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, map: Map): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, map: Map, permission: Permission): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, permission: Permission): Permission;
    registerPermission(permission: Permission): Permission;
    registerPermission(permission: Permission, b: boolean): Permission;
    registerPermission(permission: Permission, permission: Permission): Permission;
    registerCorePermissions(): void;
}

// eu.okaeri.poly.api.script.ScriptManager
declare interface ScriptManager {
    unload(name: string): boolean;
    load(name: string, source: string): ScriptHelper;
    load(path: Path): ScriptHelper;
    register(extension: string, scriptService: ScriptService): ScriptManager;
    eval(extension: string, source: string): any;
    getServices(): Map;
    listLoaded(): Set;
}

// org.bukkit.inventory.GrindstoneInventory
declare interface GrindstoneInventory extends Inventory {
}

// org.bukkit.entity.Projectile
declare interface Projectile extends Entity {
    doesBounce(): boolean;
    getShooter(): ProjectileSource;
    setBounce(b: boolean): void;
    setShooter(projectileSource: ProjectileSource): void;
}

// org.bukkit.event.block.BlockPistonRetractEvent
declare interface BlockPistonRetractEvent extends BlockPistonEvent {
    getBlocks(): List;
    getRetractLocation(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.meta.ItemMeta
declare interface ItemMeta extends Cloneable, ConfigurationSerializable, PersistentDataHolder {
    addAttributeModifier(attribute: Attribute, attributeModifier: AttributeModifier): boolean;
    addEnchant(enchantment: Enchantment, i: number, b: boolean): boolean;
    hasAttributeModifiers(): boolean;
    hasConflictingEnchant(enchantment: Enchantment): boolean;
    hasCustomModelData(): boolean;
    hasDisplayName(): boolean;
    hasEnchant(enchantment: Enchantment): boolean;
    hasEnchants(): boolean;
    hasItemFlag(itemFlag: ItemFlag): boolean;
    hasLocalizedName(): boolean;
    hasLore(): boolean;
    isUnbreakable(): boolean;
    removeAttributeModifier(attribute: Attribute): boolean;
    removeAttributeModifier(attribute: Attribute, attributeModifier: AttributeModifier): boolean;
    removeAttributeModifier(equipmentSlot: EquipmentSlot): boolean;
    removeEnchant(enchantment: Enchantment): boolean;
    getAttributeModifiers(): Multimap;
    getAttributeModifiers(equipmentSlot: EquipmentSlot): Multimap;
    getCustomModelData(): number;
    getEnchantLevel(enchantment: Enchantment): number;
    getDisplayName(): string;
    getLocalizedName(): string;
    getAttributeModifiers(attribute: Attribute): Collection;
    getLore(): List;
    getEnchants(): Map;
    getItemFlags(): Set;
    clone(): ItemMeta;
    getCustomTagContainer(): CustomItemTagContainer;
    addItemFlags(itemFlag: ItemFlag): void;
    removeItemFlags(itemFlag: ItemFlag): void;
    setAttributeModifiers(multimap: Multimap): void;
    setCustomModelData(integer: Integer): void;
    setDisplayName(s: string): void;
    setLocalizedName(s: string): void;
    setLore(list: List): void;
    setUnbreakable(b: boolean): void;
    setVersion(i: number): void;
    clone(): any;
}

// org.bukkit.plugin.java.PluginClassLoader
declare interface PluginClassLoader extends URLClassLoader {
    getResource(s: string): URL;
    getResources(s: string): Enumeration;
}

// org.bukkit.block.data.AnaloguePowerable
declare interface AnaloguePowerable extends BlockData {
    getMaximumPower(): number;
    getPower(): number;
    setPower(i: number): void;
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
    getEntityCount(): number;
    getPaletteCount(): number;
    getEntities(): List;
    getPalettes(): List;
    getSize(): BlockVector;
    fill(location: Location, location: Location, b: boolean): void;
    fill(location: Location, blockVector: BlockVector, b: boolean): void;
    place(location: Location, b: boolean, structureRotation: StructureRotation, mirror: Mirror, i: number, f: number, random: Random): void;
    place(regionAccessor: RegionAccessor, blockVector: BlockVector, b: boolean, structureRotation: StructureRotation, mirror: Mirror, i: number, f: number, random: Random): void;
}

// org.bukkit.block.data.FaceAttachable
declare interface FaceAttachable extends BlockData {
    getAttachedFace(): AttachedFace;
    setAttachedFace(attachedFace: AttachedFace): void;
}

// org.bukkit.scheduler.BukkitRunnable
declare interface BukkitRunnable extends Runnable {
    isCancelled(): boolean;
    getTaskId(): number;
    runTask(plugin: Plugin): BukkitTask;
    runTaskAsynchronously(plugin: Plugin): BukkitTask;
    runTaskLater(plugin: Plugin, l: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, l: number, l: number): BukkitTask;
    cancel(): void;
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
    isCancelled(): boolean;
    getLightning(): LightningStrike;
    getHandlers(): HandlerList;
    getCause(): Cause;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    hasBottle(i: number): boolean;
    getMaximumBottles(): number;
    getBottles(): Set;
    setBottle(i: number, b: boolean): void;
}

// org.bukkit.event.player.PlayerSwapHandItemsEvent
declare interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getMainHandItem(): ItemStack;
    getOffHandItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setMainHandItem(itemStack: ItemStack): void;
    setOffHandItem(itemStack: ItemStack): void;
}

// org.bukkit.block.data.type.TNT
declare interface TNT extends BlockData {
    isUnstable(): boolean;
    setUnstable(b: boolean): void;
}

// org.bukkit.event.entity.PotionSplashEvent
declare interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getIntensity(livingEntity: LivingEntity): number;
    getAffectedEntities(): Collection;
    getPotion(): ThrownPotion;
    setIntensity(livingEntity: LivingEntity, d: number): void;
}

// org.bukkit.map.MapCursorCollection
declare interface MapCursorCollection {
    removeCursor(mapCursor: MapCursor): boolean;
    size(): number;
    addCursor(i: number, i: number, b: number): MapCursor;
    addCursor(i: number, i: number, b: number, b: number): MapCursor;
    addCursor(i: number, i: number, b: number, b: number, b: boolean): MapCursor;
    addCursor(i: number, i: number, b: number, b: number, b: boolean, s: string): MapCursor;
    addCursor(mapCursor: MapCursor): MapCursor;
    getCursor(i: number): MapCursor;
}

// org.bukkit.material.Wool
declare interface Wool extends MaterialData, Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

// org.bukkit.generator.BiomeProvider
declare interface BiomeProvider {
    getBiomes(worldInfo: WorldInfo): List;
    getBiome(worldInfo: WorldInfo, i: number, i: number, i: number): Biome;
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
    getPlayer(): HumanEntity;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.LeashHitch
declare interface LeashHitch extends Hanging {
}

// org.bukkit.plugin.PluginManager
declare interface PluginManager {
    isPluginEnabled(s: string): boolean;
    isPluginEnabled(plugin: Plugin): boolean;
    useTimings(): boolean;
    getDefaultPermSubscriptions(b: boolean): Set;
    getDefaultPermissions(b: boolean): Set;
    getPermissionSubscriptions(s: string): Set;
    getPermissions(): Set;
    getPermission(s: string): Permission;
    getPlugin(s: string): Plugin;
    loadPlugin(file: File): Plugin;
    getPlugins(): Plugin[];
    loadPlugins(file: File): Plugin[];
    addPermission(permission: Permission): void;
    callEvent(event: Event): void;
    clearPlugins(): void;
    disablePlugin(plugin: Plugin): void;
    disablePlugins(): void;
    enablePlugin(plugin: Plugin): void;
    recalculatePermissionDefaults(permission: Permission): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin, b: boolean): void;
    registerEvents(listener: Listener, plugin: Plugin): void;
    registerInterface(clazz: Class): void;
    removePermission(s: string): void;
    removePermission(permission: Permission): void;
    subscribeToDefaultPerms(b: boolean, permissible: Permissible): void;
    subscribeToPermission(s: string, permissible: Permissible): void;
    unsubscribeFromDefaultPerms(b: boolean, permissible: Permissible): void;
    unsubscribeFromPermission(s: string, permissible: Permissible): void;
}

// org.bukkit.entity.Panda
declare interface Panda extends Animals {
    getHiddenGene(): Gene;
    getMainGene(): Gene;
    setHiddenGene(gene: Gene): void;
    setMainGene(gene: Gene): void;
}

// org.bukkit.event.Event
declare interface Event {
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}

// org.bukkit.conversations.ConversationContext
declare interface ConversationContext {
    getSessionData(object: any): any;
    getAllSessionData(): Map;
    getForWhom(): Conversable;
    getPlugin(): Plugin;
    setSessionData(object: any, object: any): void;
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
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    getCustomEffects(): List;
    getColor(): Color;
    getBasePotionData(): PotionData;
    clearCustomEffects(): void;
    setBasePotionData(potionData: PotionData): void;
    setColor(color: Color): void;
}

// org.bukkit.block.data.type.Bed
declare interface Bed extends Directional {
    isOccupied(): boolean;
    getPart(): Part;
    setPart(part: Part): void;
}

// org.bukkit.inventory.RecipeChoice
declare interface RecipeChoice extends Predicate, Cloneable {
    test(itemStack: ItemStack): boolean;
    getItemStack(): ItemStack;
    clone(): RecipeChoice;
    test(object: any): boolean;
    clone(): any;
}

// org.bukkit.potion.PotionBrewer
declare interface PotionBrewer {
    getEffects(potionType: PotionType, b: boolean, b: boolean): Collection;
    getEffectsFromDamage(i: number): Collection;
    createEffect(potionEffectType: PotionEffectType, i: number, i: number): PotionEffect;
}

// org.bukkit.entity.Cod
declare interface Cod extends Fish {
}

// org.bukkit.event.player.PlayerHarvestBlockEvent
declare interface PlayerHarvestBlockEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getItemsHarvested(): List;
    getHarvestedBlock(): Block;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.command.TabCompleter
declare interface TabCompleter {
    onTabComplete(commandSender: CommandSender, command: Command, s: string, s: string): List;
}

// org.bukkit.entity.LivingEntity
declare interface LivingEntity extends Attributable, Damageable, ProjectileSource {
    addPotionEffect(potionEffect: PotionEffect): boolean;
    addPotionEffect(potionEffect: PotionEffect, b: boolean): boolean;
    addPotionEffects(collection: Collection): boolean;
    getCanPickupItems(): boolean;
    getRemoveWhenFarAway(): boolean;
    hasAI(): boolean;
    hasLineOfSight(entity: Entity): boolean;
    hasPotionEffect(potionEffectType: PotionEffectType): boolean;
    isClimbing(): boolean;
    isCollidable(): boolean;
    isGliding(): boolean;
    isInvisible(): boolean;
    isLeashed(): boolean;
    isRiptiding(): boolean;
    isSleeping(): boolean;
    isSwimming(): boolean;
    setLeashHolder(entity: Entity): boolean;
    getEyeHeight(): number;
    getEyeHeight(b: boolean): number;
    getLastDamage(): number;
    getArrowCooldown(): number;
    getArrowsInBody(): number;
    getMaximumAir(): number;
    getMaximumNoDamageTicks(): number;
    getNoDamageTicks(): number;
    getRemainingAir(): number;
    getMemory(memoryKey: MemoryKey): any;
    getActivePotionEffects(): Collection;
    getLastTwoTargetBlocks(set: Set, i: number): List;
    getLineOfSight(set: Set, i: number): List;
    getCollidableExemptions(): Set;
    getEyeLocation(): Location;
    getTargetBlock(set: Set, i: number): Block;
    getTargetBlockExact(i: number): Block;
    getTargetBlockExact(i: number, fluidCollisionMode: FluidCollisionMode): Block;
    getLeashHolder(): Entity;
    getCategory(): EntityCategory;
    getKiller(): Player;
    getEquipment(): EntityEquipment;
    getPotionEffect(potionEffectType: PotionEffectType): PotionEffect;
    rayTraceBlocks(d: number): RayTraceResult;
    rayTraceBlocks(d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    attack(entity: Entity): void;
    removePotionEffect(potionEffectType: PotionEffectType): void;
    setAI(b: boolean): void;
    setArrowCooldown(i: number): void;
    setArrowsInBody(i: number): void;
    setCanPickupItems(b: boolean): void;
    setCollidable(b: boolean): void;
    setGliding(b: boolean): void;
    setInvisible(b: boolean): void;
    setLastDamage(d: number): void;
    setMaximumAir(i: number): void;
    setMaximumNoDamageTicks(i: number): void;
    setMemory(memoryKey: MemoryKey, object: any): void;
    setNoDamageTicks(i: number): void;
    setRemainingAir(i: number): void;
    setRemoveWhenFarAway(b: boolean): void;
    setSwimming(b: boolean): void;
    swingMainHand(): void;
    swingOffHand(): void;
}

// org.bukkit.event.hanging.HangingBreakEvent
declare interface HangingBreakEvent extends HangingEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getCause(): RemoveCause;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.Skeleton
declare interface Skeleton extends AbstractSkeleton {
    isConverting(): boolean;
    getConversionTime(): number;
    setConversionTime(i: number): void;
}

// org.bukkit.util.BlockVector
declare interface BlockVector extends Vector {
}

// org.bukkit.entity.Dolphin
declare interface Dolphin extends WaterMob {
}

// org.bukkit.material.PistonExtensionMaterial
declare interface PistonExtensionMaterial extends MaterialData, Attachable {
    isSticky(): boolean;
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
    setSticky(b: boolean): void;
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
    getHostname(): string;
    getKickMessage(): string;
    getAddress(): InetAddress;
    getRealAddress(): InetAddress;
    getHandlers(): HandlerList;
    getResult(): Result;
    getHandlerList(): HandlerList;
    allow(): void;
    disallow(result: Result, s: string): void;
    setKickMessage(s: string): void;
    setResult(result: Result): void;
}

// org.bukkit.material.Wood
declare interface Wood extends MaterialData {
    getSpecies(): TreeSpecies;
    setSpecies(treeSpecies: TreeSpecies): void;
}

// org.bukkit.help.GenericCommandHelpTopic
declare interface GenericCommandHelpTopic extends HelpTopic {
}

// org.bukkit.block.data.type.Farmland
declare interface Farmland extends BlockData {
    getMaximumMoisture(): number;
    getMoisture(): number;
    setMoisture(i: number): void;
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
    copyDefaults(): boolean;
    pathSeparator(): string;
    configuration(): Configuration;
    copyDefaults(b: boolean): ConfigurationOptions;
    pathSeparator(c: string): ConfigurationOptions;
}

// org.bukkit.event.player.PlayerItemDamageEvent
declare interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getDamage(): number;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setDamage(i: number): void;
}

// org.bukkit.SoundGroup
declare interface SoundGroup {
    getPitch(): number;
    getVolume(): number;
    getBreakSound(): Sound;
    getFallSound(): Sound;
    getHitSound(): Sound;
    getPlaceSound(): Sound;
    getStepSound(): Sound;
}

// org.bukkit.entity.Trident
declare interface Trident extends AbstractArrow, ThrowableProjectile {
}

// org.bukkit.GameRule
declare interface GameRule {
    getType(): Class;
    getName(): string;
    getByName(s: string): GameRule;
    values(): GameRule[];
    ANNOUNCE_ADVANCEMENTS: GameRule;
    COMMAND_BLOCK_OUTPUT: GameRule;
    DISABLE_ELYTRA_MOVEMENT_CHECK: GameRule;
    DISABLE_RAIDS: GameRule;
    DO_DAYLIGHT_CYCLE: GameRule;
    DO_ENTITY_DROPS: GameRule;
    DO_FIRE_TICK: GameRule;
    DO_IMMEDIATE_RESPAWN: GameRule;
    DO_INSOMNIA: GameRule;
    DO_LIMITED_CRAFTING: GameRule;
    DO_MOB_LOOT: GameRule;
    DO_MOB_SPAWNING: GameRule;
    DO_PATROL_SPAWNING: GameRule;
    DO_TILE_DROPS: GameRule;
    DO_TRADER_SPAWNING: GameRule;
    DO_WEATHER_CYCLE: GameRule;
    DROWNING_DAMAGE: GameRule;
    FALL_DAMAGE: GameRule;
    FIRE_DAMAGE: GameRule;
    FORGIVE_DEAD_PLAYERS: GameRule;
    FREEZE_DAMAGE: GameRule;
    KEEP_INVENTORY: GameRule;
    LOG_ADMIN_COMMANDS: GameRule;
    MAX_COMMAND_CHAIN_LENGTH: GameRule;
    MAX_ENTITY_CRAMMING: GameRule;
    MOB_GRIEFING: GameRule;
    NATURAL_REGENERATION: GameRule;
    PLAYERS_SLEEPING_PERCENTAGE: GameRule;
    RANDOM_TICK_SPEED: GameRule;
    REDUCED_DEBUG_INFO: GameRule;
    SEND_COMMAND_FEEDBACK: GameRule;
    SHOW_DEATH_MESSAGES: GameRule;
    SPAWN_RADIUS: GameRule;
    SPECTATORS_GENERATE_CHUNKS: GameRule;
    UNIVERSAL_ANGER: GameRule;
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
    isLocked(): boolean;
    isTrackingPosition(): boolean;
    isUnlimitedTracking(): boolean;
    isVirtual(): boolean;
    removeRenderer(mapRenderer: MapRenderer): boolean;
    getCenterX(): number;
    getCenterZ(): number;
    getId(): number;
    getRenderers(): List;
    getWorld(): World;
    getScale(): Scale;
    addRenderer(mapRenderer: MapRenderer): void;
    setCenterX(i: number): void;
    setCenterZ(i: number): void;
    setLocked(b: boolean): void;
    setScale(scale: Scale): void;
    setTrackingPosition(b: boolean): void;
    setUnlimitedTracking(b: boolean): void;
    setWorld(world: World): void;
}

// org.bukkit.block.data.Directional
declare interface Directional extends BlockData {
    getFaces(): Set;
    getFacing(): BlockFace;
    setFacing(blockFace: BlockFace): void;
}

// org.bukkit.material.LongGrass
declare interface LongGrass extends MaterialData {
    getSpecies(): GrassSpecies;
    setSpecies(grassSpecies: GrassSpecies): void;
}

// org.bukkit.material.Command
declare interface Command extends MaterialData, Redstone {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.block.BrewingStand
declare interface BrewingStand extends Container {
    getBrewingTime(): number;
    getFuelLevel(): number;
    getInventory(): BrewerInventory;
    getSnapshotInventory(): BrewerInventory;
    setBrewingTime(i: number): void;
    setFuelLevel(i: number): void;
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
}

// org.bukkit.event.block.BlockGrowEvent
declare interface BlockGrowEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getNewState(): BlockState;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.inventory.meta.TropicalFishBucketMeta
declare interface TropicalFishBucketMeta extends ItemMeta {
    hasVariant(): boolean;
    getBodyColor(): DyeColor;
    getPatternColor(): DyeColor;
    getPattern(): Pattern;
    clone(): TropicalFishBucketMeta;
    setBodyColor(dyeColor: DyeColor): void;
    setPattern(pattern: Pattern): void;
    setPatternColor(dyeColor: DyeColor): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.util.noise.PerlinOctaveGenerator
declare interface PerlinOctaveGenerator extends OctaveGenerator {
}

// org.bukkit.event.entity.EntityDropItemEvent
declare interface EntityDropItemEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getItemDrop(): Item;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.util.BlockIterator
declare interface BlockIterator extends Iterator {
    hasNext(): boolean;
    next(): any;
    next(): Block;
    remove(): void;
}

// org.bukkit.command.defaults.BukkitCommand
declare interface BukkitCommand extends Command {
}

// org.bukkit.event.server.TabCompleteEvent
declare interface TabCompleteEvent extends Event, Cancellable {
    isCancelled(): boolean;
    getBuffer(): string;
    getCompletions(): List;
    getSender(): CommandSender;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getCookTimeTotal(): number;
    getInventory(): FurnaceInventory;
    getSnapshotInventory(): FurnaceInventory;
    getBurnTime(): number;
    getCookTime(): number;
    setBurnTime(s: number): void;
    setCookTime(s: number): void;
    setCookTimeTotal(i: number): void;
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
}

// org.bukkit.entity.Guardian
declare interface Guardian extends Monster {
    hasLaser(): boolean;
    isElder(): boolean;
    setLaser(b: boolean): boolean;
    setElder(b: boolean): void;
}

// org.bukkit.event.block.BlockPistonExtendEvent
declare interface BlockPistonExtendEvent extends BlockPistonEvent {
    getLength(): number;
    getBlocks(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
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
    isInverted(): boolean;
    setInverted(b: boolean): void;
}

// org.bukkit.OfflinePlayer
declare interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
    hasPlayedBefore(): boolean;
    isBanned(): boolean;
    isOnline(): boolean;
    isWhitelisted(): boolean;
    getStatistic(statistic: Statistic): number;
    getStatistic(statistic: Statistic, material: Material): number;
    getStatistic(statistic: Statistic, entityType: EntityType): number;
    getName(): string;
    getUniqueId(): UUID;
    getFirstPlayed(): number;
    getLastPlayed(): number;
    getBedSpawnLocation(): Location;
    getPlayer(): Player;
    decrementStatistic(statistic: Statistic): void;
    decrementStatistic(statistic: Statistic, i: number): void;
    decrementStatistic(statistic: Statistic, material: Material): void;
    decrementStatistic(statistic: Statistic, material: Material, i: number): void;
    decrementStatistic(statistic: Statistic, entityType: EntityType): void;
    decrementStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    incrementStatistic(statistic: Statistic): void;
    incrementStatistic(statistic: Statistic, i: number): void;
    incrementStatistic(statistic: Statistic, material: Material): void;
    incrementStatistic(statistic: Statistic, material: Material, i: number): void;
    incrementStatistic(statistic: Statistic, entityType: EntityType): void;
    incrementStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    setStatistic(statistic: Statistic, i: number): void;
    setStatistic(statistic: Statistic, material: Material, i: number): void;
    setStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    setWhitelisted(b: boolean): void;
}

// org.bukkit.plugin.RegisteredServiceProvider
declare interface RegisteredServiceProvider extends Comparable {
    compareTo(object: any): number;
    compareTo(registeredServiceProvider: RegisteredServiceProvider): number;
    getService(): Class;
    getProvider(): any;
    getPlugin(): Plugin;
    getPriority(): ServicePriority;
}

// org.bukkit.block.EntityBlockStorage
declare interface EntityBlockStorage extends TileState {
    isFull(): boolean;
    getEntityCount(): number;
    getMaxEntities(): number;
    releaseEntities(): List;
    addEntity(entity: Entity): void;
    setMaxEntities(i: number): void;
}

// org.bukkit.event.player.PlayerShearEntityEvent
declare interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getHand(): EquipmentSlot;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.weather.WeatherEvent
declare interface WeatherEvent extends Event {
    getWorld(): World;
}

// org.bukkit.event.server.MapInitializeEvent
declare interface MapInitializeEvent extends ServerEvent {
    getHandlers(): HandlerList;
    getMap(): MapView;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.SmallDripleaf
declare interface SmallDripleaf extends Dripleaf, Bisected {
}

// org.bukkit.event.entity.EntityTransformEvent
declare interface EntityTransformEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getTransformedEntities(): List;
    getTransformedEntity(): Entity;
    getHandlers(): HandlerList;
    getTransformReason(): TransformReason;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.loot.LootContext
declare interface LootContext {
    getLuck(): number;
    getLootingModifier(): number;
    getLocation(): Location;
    getLootedEntity(): Entity;
    getKiller(): HumanEntity;
    DEFAULT_LOOT_MODIFIER: number;
}

// org.bukkit.conversations.Conversable
declare interface Conversable {
    beginConversation(conversation: Conversation): boolean;
    isConversing(): boolean;
    abandonConversation(conversation: Conversation): void;
    abandonConversation(conversation: Conversation, conversationAbandonedEvent: ConversationAbandonedEvent): void;
    acceptConversationInput(s: string): void;
    sendRawMessage(s: string): void;
    sendRawMessage(uUID: UUID, s: string): void;
}

// org.bukkit.configuration.file.YamlConfiguration
declare interface YamlConfiguration extends FileConfiguration {
    loadConfiguration(file: File): YamlConfiguration;
    loadConfiguration(reader: Reader): YamlConfiguration;
}

// org.bukkit.event.player.PlayerPickupItemEvent
declare interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getRemaining(): number;
    getItem(): Item;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    isCancelled(): boolean;
    getOwner(): AnimalTamer;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getFishBucket(): ItemStack;
    getWaterBucket(): ItemStack;
}

// org.bukkit.material.Cauldron
declare interface Cauldron extends MaterialData {
    isEmpty(): boolean;
    isFull(): boolean;
}

// org.bukkit.event.block.BlockFromToEvent
declare interface BlockFromToEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getToBlock(): Block;
    getFace(): BlockFace;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    indent(): number;
    indent(i: number): YamlConfigurationOptions;
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
    hasExtendedDuration(): boolean;
    isSplash(): boolean;
    getLevel(): number;
    getNameId(): number;
    getEffects(): Collection;
    toItemStack(i: number): ItemStack;
    extend(): Potion;
    splash(): Potion;
    getType(): PotionType;
    toDamageValue(): number;
    fromDamage(i: number): Potion;
    fromItemStack(itemStack: ItemStack): Potion;
    getBrewer(): PotionBrewer;
    setPotionBrewer(potionBrewer: PotionBrewer): void;
    apply(livingEntity: LivingEntity): void;
    apply(itemStack: ItemStack): void;
    setHasExtendedDuration(b: boolean): void;
    setLevel(i: number): void;
    setSplash(b: boolean): void;
    setType(potionType: PotionType): void;
}

// org.bukkit.inventory.StonecutterInventory
declare interface StonecutterInventory extends Inventory {
}

// org.bukkit.persistence.PersistentDataContainer
declare interface PersistentDataContainer {
    has(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType): boolean;
    isEmpty(): boolean;
    get(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType): any;
    getOrDefault(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType, object: any): any;
    getKeys(): Set;
    getAdapterContext(): PersistentDataAdapterContext;
    remove(namespacedKey: NamespacedKey): void;
    set(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType, object: any): void;
}

// org.bukkit.block.Container
declare interface Container extends TileState, BlockInventoryHolder, Lockable, Nameable {
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
}

// org.bukkit.inventory.meta.BlockStateMeta
declare interface BlockStateMeta extends ItemMeta {
    hasBlockState(): boolean;
    getBlockState(): BlockState;
    setBlockState(blockState: BlockState): void;
}

// org.bukkit.boss.KeyedBossBar
declare interface KeyedBossBar extends BossBar, Keyed {
}

// org.bukkit.event.block.BlockFertilizeEvent
declare interface BlockFertilizeEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getBlocks(): List;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    breakBlock(block: Block): boolean;
    canSee(player: Player): boolean;
    getAllowFlight(): boolean;
    isFlying(): boolean;
    isHealthScaled(): boolean;
    isOnGround(): boolean;
    isPlayerTimeRelative(): boolean;
    isSleepingIgnored(): boolean;
    isSneaking(): boolean;
    isSprinting(): boolean;
    performCommand(s: string): boolean;
    sendChunkChange(location: Location, i: number, i: number, i: number, b: number): boolean;
    getHealthScale(): number;
    getExp(): number;
    getFlySpeed(): number;
    getWalkSpeed(): number;
    getClientViewDistance(): number;
    getLevel(): number;
    getPing(): number;
    getTotalExperience(): number;
    getDisplayName(): string;
    getLocale(): string;
    getPlayerListFooter(): string;
    getPlayerListHeader(): string;
    getPlayerListName(): string;
    getAddress(): InetSocketAddress;
    getPlayerTime(): number;
    getPlayerTimeOffset(): number;
    getBedSpawnLocation(): Location;
    getCompassTarget(): Location;
    getPlayerWeather(): WeatherType;
    getAdvancementProgress(advancement: Advancement): AdvancementProgress;
    getSpectatorTarget(): Entity;
    spigot(): Spigot;
    getScoreboard(): Scoreboard;
    chat(s: string): void;
    giveExp(i: number): void;
    giveExpLevels(i: number): void;
    hidePlayer(player: Player): void;
    hidePlayer(plugin: Plugin, player: Player): void;
    kickPlayer(s: string): void;
    loadData(): void;
    openBook(itemStack: ItemStack): void;
    playEffect(location: Location, effect: Effect, i: number): void;
    playEffect(location: Location, effect: Effect, object: any): void;
    playNote(location: Location, b: number, b: number): void;
    playNote(location: Location, instrument: Instrument, note: Note): void;
    playSound(location: Location, s: string, f: number, f: number): void;
    playSound(location: Location, s: string, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(location: Location, sound: Sound, f: number, f: number): void;
    playSound(location: Location, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    resetPlayerTime(): void;
    resetPlayerWeather(): void;
    resetTitle(): void;
    saveData(): void;
    sendBlockChange(location: Location, material: Material, b: number): void;
    sendBlockChange(location: Location, blockData: BlockData): void;
    sendBlockDamage(location: Location, f: number): void;
    sendExperienceChange(f: number): void;
    sendExperienceChange(f: number, i: number): void;
    sendMap(mapView: MapView): void;
    sendRawMessage(s: string): void;
    sendSignChange(location: Location, s: string): void;
    sendSignChange(location: Location, s: string, dyeColor: DyeColor): void;
    sendSignChange(location: Location, s: string, dyeColor: DyeColor, b: boolean): void;
    sendTitle(s: string, s: string): void;
    sendTitle(s: string, s: string, i: number, i: number, i: number): void;
    setAllowFlight(b: boolean): void;
    setBedSpawnLocation(location: Location): void;
    setBedSpawnLocation(location: Location, b: boolean): void;
    setCompassTarget(location: Location): void;
    setDisplayName(s: string): void;
    setExp(f: number): void;
    setFlySpeed(f: number): void;
    setFlying(b: boolean): void;
    setHealthScale(d: number): void;
    setHealthScaled(b: boolean): void;
    setLevel(i: number): void;
    setPlayerListFooter(s: string): void;
    setPlayerListHeader(s: string): void;
    setPlayerListHeaderFooter(s: string, s: string): void;
    setPlayerListName(s: string): void;
    setPlayerTime(l: number, b: boolean): void;
    setPlayerWeather(weatherType: WeatherType): void;
    setResourcePack(s: string): void;
    setResourcePack(s: string, b: number): void;
    setScoreboard(scoreboard: Scoreboard): void;
    setSleepingIgnored(b: boolean): void;
    setSneaking(b: boolean): void;
    setSpectatorTarget(entity: Entity): void;
    setSprinting(b: boolean): void;
    setTexturePack(s: string): void;
    setTotalExperience(i: number): void;
    setWalkSpeed(f: number): void;
    showPlayer(player: Player): void;
    showPlayer(plugin: Plugin, player: Player): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, object: any): void;
    stopSound(s: string): void;
    stopSound(s: string, soundCategory: SoundCategory): void;
    stopSound(sound: Sound): void;
    stopSound(sound: Sound, soundCategory: SoundCategory): void;
    updateCommands(): void;
    updateInventory(): void;
    spigot(): Spigot;
    spigot(): Spigot;
}

// org.bukkit.inventory.AnvilInventory
declare interface AnvilInventory extends Inventory {
    getMaximumRepairCost(): number;
    getRepairCost(): number;
    getRenameText(): string;
    setMaximumRepairCost(i: number): void;
    setRepairCost(i: number): void;
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
    isCancelled(): boolean;
    getMessage(): string;
    getRecipients(): Set;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setMessage(s: string): void;
}

// org.bukkit.event.weather.ThunderChangeEvent
declare interface ThunderChangeEvent extends WeatherEvent, Cancellable {
    isCancelled(): boolean;
    toThunderState(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.data.type.SeaPickle
declare interface SeaPickle extends Waterlogged {
    getMaximumPickles(): number;
    getMinimumPickles(): number;
    getPickles(): number;
    setPickles(i: number): void;
}

// org.bukkit.inventory.DoubleChestInventory
declare interface DoubleChestInventory extends Inventory {
    getHolder(): DoubleChest;
    getLeftSide(): Inventory;
    getRightSide(): Inventory;
    getHolder(): InventoryHolder;
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
    getRaiders(): List;
    getPatrolLeader(): Raider;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.entity.EntityAirChangeEvent
declare interface EntityAirChangeEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getAmount(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setAmount(i: number): void;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.ItemFrame
declare interface ItemFrame extends Hanging {
    isFixed(): boolean;
    isVisible(): boolean;
    getItemDropChance(): number;
    getRotation(): Rotation;
    getItem(): ItemStack;
    setFixed(b: boolean): void;
    setItem(itemStack: ItemStack): void;
    setItem(itemStack: ItemStack, b: boolean): void;
    setItemDropChance(f: number): void;
    setRotation(rotation: Rotation): void;
    setVisible(b: boolean): void;
}

// org.bukkit.inventory.Inventory
declare interface Inventory extends Iterable {
    contains(material: Material): boolean;
    contains(material: Material, i: number): boolean;
    contains(itemStack: ItemStack): boolean;
    contains(itemStack: ItemStack, i: number): boolean;
    containsAtLeast(itemStack: ItemStack, i: number): boolean;
    isEmpty(): boolean;
    first(material: Material): number;
    first(itemStack: ItemStack): number;
    firstEmpty(): number;
    getMaxStackSize(): number;
    getSize(): number;
    addItem(itemStack: ItemStack): HashMap;
    all(material: Material): HashMap;
    all(itemStack: ItemStack): HashMap;
    removeItem(itemStack: ItemStack): HashMap;
    getViewers(): List;
    iterator(): ListIterator;
    iterator(i: number): ListIterator;
    getLocation(): Location;
    getType(): InventoryType;
    getHolder(): InventoryHolder;
    getItem(i: number): ItemStack;
    getContents(): ItemStack[];
    getStorageContents(): ItemStack[];
    clear(): void;
    clear(i: number): void;
    remove(material: Material): void;
    remove(itemStack: ItemStack): void;
    setContents(itemStack: ItemStack): void;
    setItem(i: number, itemStack: ItemStack): void;
    setMaxStackSize(i: number): void;
    setStorageContents(itemStack: ItemStack): void;
    iterator(): Iterator;
}

// org.bukkit.event.world.ChunkLoadEvent
declare interface ChunkLoadEvent extends ChunkEvent {
    isNewChunk(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.help.HelpTopicComparator
declare interface HelpTopicComparator extends Comparator {
    compare(object: any, object: any): number;
    compare(helpTopic: HelpTopic, helpTopic: HelpTopic): number;
    helpTopicComparatorInstance(): HelpTopicComparator;
    topicNameComparatorInstance(): TopicNameComparator;
}

// org.bukkit.map.MapFont
declare interface MapFont {
    isValid(s: string): boolean;
    getHeight(): number;
    getWidth(s: string): number;
    getChar(c: string): CharacterSprite;
    setChar(c: string, characterSprite: CharacterSprite): void;
}

// org.bukkit.block.data.type.Leaves
declare interface Leaves extends BlockData {
    isPersistent(): boolean;
    getDistance(): number;
    setDistance(i: number): void;
    setPersistent(b: boolean): void;
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
    getEnchantBlock(): Block;
    getOffers(): EnchantmentOffer[];
    getEnchanter(): Player;
    getItem(): ItemStack;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.data.type.Ladder
declare interface Ladder extends Directional, Waterlogged {
}

// org.bukkit.conversations.Prompt
declare interface Prompt extends Cloneable {
    blocksForInput(conversationContext: ConversationContext): boolean;
    getPromptText(conversationContext: ConversationContext): string;
    acceptInput(conversationContext: ConversationContext, s: string): Prompt;
    END_OF_CONVERSATION: Prompt;
}

// org.bukkit.Bukkit
declare interface Bukkit {
    addRecipe(recipe: Recipe): boolean;
    dispatchCommand(commandSender: CommandSender, s: string): boolean;
    getAllowEnd(): boolean;
    getAllowFlight(): boolean;
    getAllowNether(): boolean;
    getGenerateStructures(): boolean;
    getOnlineMode(): boolean;
    hasWhitelist(): boolean;
    isHardcore(): boolean;
    isPrimaryThread(): boolean;
    isWhitelistEnforced(): boolean;
    removeBossBar(namespacedKey: NamespacedKey): boolean;
    removeRecipe(namespacedKey: NamespacedKey): boolean;
    unloadWorld(s: string, b: boolean): boolean;
    unloadWorld(world: World, b: boolean): boolean;
    broadcast(s: string, s: string): number;
    broadcastMessage(s: string): number;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getIdleTimeout(): number;
    getMaxPlayers(): number;
    getMaxWorldSize(): number;
    getMonsterSpawnLimit(): number;
    getPort(): number;
    getSpawnRadius(): number;
    getTicksPerAmbientSpawns(): number;
    getTicksPerAnimalSpawns(): number;
    getTicksPerMonsterSpawns(): number;
    getTicksPerWaterAmbientSpawns(): number;
    getTicksPerWaterSpawns(): number;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getViewDistance(): number;
    getWaterAmbientSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getUpdateFolderFile(): File;
    getWorldContainer(): File;
    getTags(s: string, clazz: Class): Iterable;
    getBukkitVersion(): string;
    getIp(): string;
    getMotd(): string;
    getName(): string;
    getShutdownMessage(): string;
    getUpdateFolder(): string;
    getVersion(): string;
    getWorldType(): string;
    getOnlinePlayers(): Collection;
    advancementIterator(): Iterator;
    getBossBars(): Iterator;
    recipeIterator(): Iterator;
    getRecipesFor(itemStack: ItemStack): List;
    getWorlds(): List;
    matchPlayer(s: string): List;
    selectEntities(commandSender: CommandSender, s: string): List;
    getCommandAliases(): Map;
    getBannedPlayers(): Set;
    getIPBans(): Set;
    getOperators(): Set;
    getWhitelistedPlayers(): Set;
    getLogger(): Logger;
    getConnectionThrottle(): number;
    getBanList(type: Type): BanList;
    getDefaultGameMode(): GameMode;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(uUID: UUID): OfflinePlayer;
    getOfflinePlayers(): OfflinePlayer[];
    getServer(): Server;
    spigot(): Spigot;
    getTag(s: string, namespacedKey: NamespacedKey, clazz: Class): Tag;
    getUnsafe(): UnsafeValues;
    getWarningState(): WarningState;
    createWorld(worldCreator: WorldCreator): World;
    getWorld(s: string): World;
    getWorld(uUID: UUID): World;
    getAdvancement(namespacedKey: NamespacedKey): Advancement;
    createBlockData(s: string): BlockData;
    createBlockData(material: Material): BlockData;
    createBlockData(material: Material, s: string): BlockData;
    createBlockData(material: Material, consumer: Consumer): BlockData;
    createBossBar(s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): BossBar;
    createBossBar(namespacedKey: NamespacedKey, s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): KeyedBossBar;
    getBossBar(namespacedKey: NamespacedKey): KeyedBossBar;
    getConsoleSender(): ConsoleCommandSender;
    getPluginCommand(s: string): PluginCommand;
    getEntity(uUID: UUID): Entity;
    getPlayer(s: string): Player;
    getPlayer(uUID: UUID): Player;
    getPlayerExact(s: string): Player;
    createChunkData(world: World): ChunkData;
    getHelpMap(): HelpMap;
    createInventory(inventoryHolder: InventoryHolder, i: number): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType, s: string): Inventory;
    getItemFactory(): ItemFactory;
    craftItem(itemStack: ItemStack, world: World, player: Player): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType, i: number, b: boolean): ItemStack;
    createMerchant(s: string): Merchant;
    getCraftingRecipe(itemStack: ItemStack, world: World): Recipe;
    getRecipe(namespacedKey: NamespacedKey): Recipe;
    getLootTable(namespacedKey: NamespacedKey): LootTable;
    createMap(world: World): MapView;
    getMap(i: number): MapView;
    getPluginManager(): PluginManager;
    getServicesManager(): ServicesManager;
    getMessenger(): Messenger;
    getScheduler(): BukkitScheduler;
    getScoreboardManager(): ScoreboardManager;
    getStructureManager(): StructureManager;
    getServerIcon(): CachedServerIcon;
    loadServerIcon(bufferedImage: BufferedImage): CachedServerIcon;
    loadServerIcon(file: File): CachedServerIcon;
    banIP(s: string): void;
    clearRecipes(): void;
    reload(): void;
    reloadData(): void;
    reloadWhitelist(): void;
    resetRecipes(): void;
    savePlayers(): void;
    setDefaultGameMode(gameMode: GameMode): void;
    setIdleTimeout(i: number): void;
    setServer(server: Server): void;
    setSpawnRadius(i: number): void;
    setWhitelist(b: boolean): void;
    setWhitelistEnforced(b: boolean): void;
    shutdown(): void;
    unbanIP(s: string): void;
}

// org.bukkit.plugin.PluginDescriptionFile
declare interface PluginDescriptionFile {
    getAPIVersion(): string;
    getClassLoaderOf(): string;
    getDescription(): string;
    getFullName(): string;
    getMain(): string;
    getName(): string;
    getPrefix(): string;
    getRawName(): string;
    getVersion(): string;
    getWebsite(): string;
    getAuthors(): List;
    getContributors(): List;
    getDepend(): List;
    getLibraries(): List;
    getLoadBefore(): List;
    getPermissions(): List;
    getProvides(): List;
    getSoftDepend(): List;
    getCommands(): Map;
    getAwareness(): Set;
    getPermissionDefault(): PermissionDefault;
    getLoad(): PluginLoadOrder;
    save(writer: Writer): void;
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
    getMaximumLayers(): number;
    getMinimumLayers(): number;
    setLayers(i: number): void;
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
    getExpToDrop(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setExpToDrop(i: number): void;
}

// org.bukkit.inventory.SmithingRecipe
declare interface SmithingRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    getAddition(): RecipeChoice;
    getBase(): RecipeChoice;
}

// org.bukkit.entity.FishHook
declare interface FishHook extends Projectile {
    getApplyLure(): boolean;
    isInOpenWater(): boolean;
    pullHookedEntity(): boolean;
    getBiteChance(): number;
    getMaxWaitTime(): number;
    getMinWaitTime(): number;
    getHookedEntity(): Entity;
    getState(): HookState;
    setApplyLure(b: boolean): void;
    setBiteChance(d: number): void;
    setHookedEntity(entity: Entity): void;
    setMaxWaitTime(i: number): void;
    setMinWaitTime(i: number): void;
}

// org.bukkit.inventory.ItemStack
declare interface ItemStack extends Cloneable, ConfigurationSerializable {
    containsEnchantment(enchantment: Enchantment): boolean;
    hasItemMeta(): boolean;
    isSimilar(itemStack: ItemStack): boolean;
    setItemMeta(itemMeta: ItemMeta): boolean;
    getAmount(): number;
    getEnchantmentLevel(enchantment: Enchantment): number;
    getMaxStackSize(): number;
    removeEnchantment(enchantment: Enchantment): number;
    getEnchantments(): Map;
    serialize(): Map;
    getType(): Material;
    getItemMeta(): ItemMeta;
    getData(): MaterialData;
    getDurability(): number;
    deserialize(map: Map): ItemStack;
    addEnchantment(enchantment: Enchantment, i: number): void;
    addEnchantments(map: Map): void;
    addUnsafeEnchantment(enchantment: Enchantment, i: number): void;
    addUnsafeEnchantments(map: Map): void;
    setAmount(i: number): void;
    setData(materialData: MaterialData): void;
    setDurability(s: number): void;
    setType(material: Material): void;
}

// org.bukkit.entity.minecart.CommandMinecart
declare interface CommandMinecart extends Minecart {
    getCommand(): string;
    setCommand(s: string): void;
    setName(s: string): void;
}

// org.bukkit.configuration.serialization.SerializableAs
declare interface SerializableAs extends Annotation {
    value(): string;
}

// org.bukkit.event.player.PlayerBucketEntityEvent
declare interface PlayerBucketEntityEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getEntityBucket(): ItemStack;
    getOriginalBucket(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    sendMessage(s: string): void;
    sendMessage(uUID: UUID, s: string): void;
    sendMessage(uUID: UUID, s: string): void;
}

// org.bukkit.inventory.SmokingRecipe
declare interface SmokingRecipe extends CookingRecipe {
}

// org.bukkit.entity.Ocelot
declare interface Ocelot extends Animals {
    isTrusting(): boolean;
    getCatType(): Type;
    setCatType(type: Type): void;
    setTrusting(b: boolean): void;
}

// org.bukkit.inventory.Merchant
declare interface Merchant {
    isTrading(): boolean;
    getRecipeCount(): number;
    getRecipes(): List;
    getTrader(): HumanEntity;
    getRecipe(i: number): MerchantRecipe;
    setRecipe(i: number, merchantRecipe: MerchantRecipe): void;
    setRecipes(list: List): void;
}

// org.bukkit.event.player.PlayerExpChangeEvent
declare interface PlayerExpChangeEvent extends PlayerEvent {
    getAmount(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setAmount(i: number): void;
}

// org.bukkit.block.data.Bisected
declare interface Bisected extends BlockData {
    getHalf(): Half;
    setHalf(half: Half): void;
}

// org.bukkit.entity.Villager
declare interface Villager extends AbstractVillager {
    sleep(location: Location): boolean;
    getVillagerExperience(): number;
    getVillagerLevel(): number;
    getProfession(): Profession;
    getVillagerType(): Type;
    setProfession(profession: Profession): void;
    setVillagerExperience(i: number): void;
    setVillagerLevel(i: number): void;
    setVillagerType(type: Type): void;
    shakeHead(): void;
    wakeup(): void;
}

// org.bukkit.block.data.type.StructureBlock
declare interface StructureBlock extends BlockData {
    getMode(): Mode;
    setMode(mode: Mode): void;
}

// org.bukkit.block.BlockState
declare interface BlockState extends Metadatable {
    isPlaced(): boolean;
    update(): boolean;
    update(b: boolean): boolean;
    update(b: boolean, b: boolean): boolean;
    getLightLevel(): number;
    getRawData(): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    getChunk(): Chunk;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getType(): Material;
    getWorld(): World;
    getBlock(): Block;
    getBlockData(): BlockData;
    getData(): MaterialData;
    setBlockData(blockData: BlockData): void;
    setData(materialData: MaterialData): void;
    setRawData(b: number): void;
    setType(material: Material): void;
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
    startsWithIgnoreCase(s: string, s: string): boolean;
    copyPartialMatches(s: string, iterable: Iterable, collection: Collection): Collection;
}

// org.bukkit.boss.BossBar
declare interface BossBar {
    hasFlag(barFlag: BarFlag): boolean;
    isVisible(): boolean;
    getProgress(): number;
    getTitle(): string;
    getPlayers(): List;
    getColor(): BarColor;
    getStyle(): BarStyle;
    addFlag(barFlag: BarFlag): void;
    addPlayer(player: Player): void;
    hide(): void;
    removeAll(): void;
    removeFlag(barFlag: BarFlag): void;
    removePlayer(player: Player): void;
    setColor(barColor: BarColor): void;
    setProgress(d: number): void;
    setStyle(barStyle: BarStyle): void;
    setTitle(s: string): void;
    setVisible(b: boolean): void;
    show(): void;
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
    getCollarColor(): DyeColor;
    setAngry(b: boolean): void;
    setCollarColor(dyeColor: DyeColor): void;
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
    createRegisteredListeners(listener: Listener, plugin: Plugin): Map;
    getPluginFileFilters(): Pattern[];
    loadPlugin(file: File): Plugin;
    getPluginDescription(file: File): PluginDescriptionFile;
    disablePlugin(plugin: Plugin): void;
    enablePlugin(plugin: Plugin): void;
    pluginParentTimer: CustomTimingsHandler;
}

// org.bukkit.permissions.PermissionAttachmentInfo
declare interface PermissionAttachmentInfo {
    getValue(): boolean;
    getPermission(): string;
    getPermissible(): Permissible;
    getAttachment(): PermissionAttachment;
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
    addPluginChunkTicket(plugin: Plugin): boolean;
    contains(blockData: BlockData): boolean;
    isEntitiesLoaded(): boolean;
    isForceLoaded(): boolean;
    isLoaded(): boolean;
    isSlimeChunk(): boolean;
    load(): boolean;
    load(b: boolean): boolean;
    removePluginChunkTicket(plugin: Plugin): boolean;
    unload(): boolean;
    unload(b: boolean): boolean;
    getX(): number;
    getZ(): number;
    getPluginChunkTickets(): Collection;
    getInhabitedTime(): number;
    getChunkSnapshot(): ChunkSnapshot;
    getChunkSnapshot(b: boolean, b: boolean, b: boolean): ChunkSnapshot;
    getWorld(): World;
    getBlock(i: number, i: number, i: number): Block;
    getTileEntities(): BlockState[];
    getEntities(): Entity[];
    setForceLoaded(b: boolean): void;
    setInhabitedTime(l: number): void;
}

// org.bukkit.inventory.meta.tags.ItemTagType
declare interface ItemTagType {
    getComplexType(): Class;
    getPrimitiveType(): Class;
    fromPrimitive(object: any, itemTagAdapterContext: ItemTagAdapterContext): any;
    toPrimitive(object: any, itemTagAdapterContext: ItemTagAdapterContext): any;
    BYTE: ItemTagType;
    BYTE_ARRAY: ItemTagType;
    DOUBLE: ItemTagType;
    FLOAT: ItemTagType;
    INTEGER: ItemTagType;
    INTEGER_ARRAY: ItemTagType;
    LONG: ItemTagType;
    LONG_ARRAY: ItemTagType;
    SHORT: ItemTagType;
    STRING: ItemTagType;
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
    isCancelled(): boolean;
    getFormat(): string;
    getMessage(): string;
    getRecipients(): Set;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setFormat(s: string): void;
    setMessage(s: string): void;
    setPlayer(player: Player): void;
}

// org.bukkit.event.entity.HorseJumpEvent
declare interface HorseJumpEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getPower(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setPower(f: number): void;
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
    isBurning(): boolean;
    isCancelled(): boolean;
    getBurnTime(): number;
    getHandlers(): HandlerList;
    getFuel(): ItemStack;
    getHandlerList(): HandlerList;
    setBurnTime(i: number): void;
    setBurning(b: boolean): void;
    setCancelled(b: boolean): void;
}

// org.bukkit.plugin.messaging.ChannelNotRegisteredException
declare interface ChannelNotRegisteredException extends RuntimeException {
}

// org.bukkit.event.entity.EntityDamageEvent
declare interface EntityDamageEvent extends EntityEvent, Cancellable {
    isApplicable(damageModifier: DamageModifier): boolean;
    isCancelled(): boolean;
    getDamage(): number;
    getDamage(damageModifier: DamageModifier): number;
    getOriginalDamage(damageModifier: DamageModifier): number;
    getFinalDamage(): number;
    getHandlers(): HandlerList;
    getCause(): DamageCause;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setDamage(d: number): void;
    setDamage(damageModifier: DamageModifier, d: number): void;
}

// org.bukkit.conversations.ConversationFactory
declare interface ConversationFactory {
    buildConversation(conversable: Conversable): Conversation;
    addConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): ConversationFactory;
    thatExcludesNonPlayersWithMessage(s: string): ConversationFactory;
    withConversationCanceller(conversationCanceller: ConversationCanceller): ConversationFactory;
    withEscapeSequence(s: string): ConversationFactory;
    withFirstPrompt(prompt: Prompt): ConversationFactory;
    withInitialSessionData(map: Map): ConversationFactory;
    withLocalEcho(b: boolean): ConversationFactory;
    withModality(b: boolean): ConversationFactory;
    withPrefix(conversationPrefix: ConversationPrefix): ConversationFactory;
    withTimeout(i: number): ConversationFactory;
}

// org.bukkit.event.player.PlayerAdvancementDoneEvent
declare interface PlayerAdvancementDoneEvent extends PlayerEvent {
    getAdvancement(): Advancement;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.DaylightDetector
declare interface DaylightDetector extends AnaloguePowerable {
    isInverted(): boolean;
    setInverted(b: boolean): void;
}

// org.bukkit.event.player.PlayerInteractAtEntityEvent
declare interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
    getClickedPosition(): Vector;
}

// org.bukkit.event.entity.EntityEvent
declare interface EntityEvent extends Event {
    getEntity(): Entity;
    getEntityType(): EntityType;
}

// org.bukkit.event.player.PlayerGameModeChangeEvent
declare interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getNewGameMode(): GameMode;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.Blaze
declare interface Blaze extends Monster {
}

// org.bukkit.event.entity.EntityCreatePortalEvent
declare interface EntityCreatePortalEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getBlocks(): List;
    getPortalType(): PortalType;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.PolarBear
declare interface PolarBear extends Animals {
}

// org.bukkit.generator.WorldInfo
declare interface WorldInfo {
    getMaxHeight(): number;
    getMinHeight(): number;
    getName(): string;
    getUID(): UUID;
    getSeed(): number;
    getEnvironment(): Environment;
}

// org.bukkit.event.player.PlayerRespawnEvent
declare interface PlayerRespawnEvent extends PlayerEvent {
    isAnchorSpawn(): boolean;
    isBedSpawn(): boolean;
    getRespawnLocation(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setRespawnLocation(location: Location): void;
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
    getInventory(): Inventory;
    getMerchant(): Merchant;
    getInventory(): MerchantInventory;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.player.PlayerItemMendEvent
declare interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getRepairAmount(): number;
    getExperienceOrb(): ExperienceOrb;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setRepairAmount(i: number): void;
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
    canHurtEntities(): boolean;
    getDropItem(): boolean;
    getMaterial(): Material;
    getBlockData(): BlockData;
    setDropItem(b: boolean): void;
    setHurtEntities(b: boolean): void;
}

// org.bukkit.block.data.type.NoteBlock
declare interface NoteBlock extends Powerable {
    getInstrument(): Instrument;
    getNote(): Note;
    setInstrument(instrument: Instrument): void;
    setNote(note: Note): void;
}

// org.bukkit.event.world.SpawnChangeEvent
declare interface SpawnChangeEvent extends WorldEvent {
    getPreviousLocation(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.meta.SpawnEggMeta
declare interface SpawnEggMeta extends ItemMeta {
    getSpawnedType(): EntityType;
    clone(): SpawnEggMeta;
    setSpawnedType(entityType: EntityType): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.metadata.MetadataValue
declare interface MetadataValue {
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    value(): any;
    asString(): string;
    asLong(): number;
    getOwningPlugin(): Plugin;
    asShort(): number;
    invalidate(): void;
}

// org.bukkit.event.player.PlayerToggleSprintEvent
declare interface PlayerToggleSprintEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    isSprinting(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getInventory(): CraftingInventory;
    getInventory(): Inventory;
    getRecipe(): Recipe;
}

// org.bukkit.plugin.TimedRegisteredListener
declare interface TimedRegisteredListener extends RegisteredListener {
    hasMultiple(): boolean;
    getCount(): number;
    getEventClass(): Class;
    getTotalTime(): number;
    reset(): void;
}

// org.bukkit.event.player.PlayerVelocityEvent
declare interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getVelocity(): Vector;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setVelocity(vector: Vector): void;
}

// org.bukkit.NamespacedKey
declare interface NamespacedKey {
    getKey(): string;
    getNamespace(): string;
    fromString(s: string): NamespacedKey;
    fromString(s: string, plugin: Plugin): NamespacedKey;
    minecraft(s: string): NamespacedKey;
    randomKey(): NamespacedKey;
    BUKKIT: string;
    MINECRAFT: string;
}

// org.bukkit.event.player.PlayerRecipeDiscoverEvent
declare interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getRecipe(): NamespacedKey;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.data.type.Stairs
declare interface Stairs extends Bisected, Directional, Waterlogged {
    getShape(): Shape;
    setShape(shape: Shape): void;
}

// org.bukkit.event.block.BlockBreakEvent
declare interface BlockBreakEvent extends BlockExpEvent, Cancellable {
    isCancelled(): boolean;
    isDropItems(): boolean;
    getPlayer(): Player;
    setCancelled(b: boolean): void;
    setDropItems(b: boolean): void;
}

// org.bukkit.loot.LootTable
declare interface LootTable extends Keyed {
    populateLoot(random: Random, lootContext: LootContext): Collection;
    fillInventory(inventory: Inventory, random: Random, lootContext: LootContext): void;
}

// org.bukkit.block.data.type.Switch
declare interface Switch extends Directional, FaceAttachable, Powerable {
    getFace(): Face;
    setFace(face: Face): void;
}

// org.bukkit.block.data.type.CaveVinesPlant
declare interface CaveVinesPlant extends BlockData {
    isBerries(): boolean;
    setBerries(b: boolean): void;
}

// org.bukkit.entity.Explosive
declare interface Explosive extends Entity {
    isIncendiary(): boolean;
    getYield(): number;
    setIsIncendiary(b: boolean): void;
    setYield(f: number): void;
}

// org.bukkit.entity.Salmon
declare interface Salmon extends Fish {
}

// org.bukkit.event.inventory.InventoryDragEvent
declare interface InventoryDragEvent extends InventoryInteractEvent {
    getNewItems(): Map;
    getInventorySlots(): Set;
    getRawSlots(): Set;
    getHandlers(): HandlerList;
    getType(): DragType;
    getCursor(): ItemStack;
    getOldCursor(): ItemStack;
    getHandlerList(): HandlerList;
    setCursor(itemStack: ItemStack): void;
}

// org.bukkit.inventory.meta.KnowledgeBookMeta
declare interface KnowledgeBookMeta extends ItemMeta {
    hasRecipes(): boolean;
    getRecipes(): List;
    clone(): KnowledgeBookMeta;
    addRecipe(namespacedKey: NamespacedKey): void;
    setRecipes(list: List): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.CoalType
declare enum CoalType {
    COAL,
    CHARCOAL,
}

// org.bukkit.entity.Bee
declare interface Bee extends Animals {
    hasNectar(): boolean;
    hasStung(): boolean;
    getAnger(): number;
    getCannotEnterHiveTicks(): number;
    getFlower(): Location;
    getHive(): Location;
    setAnger(i: number): void;
    setCannotEnterHiveTicks(i: number): void;
    setFlower(location: Location): void;
    setHasNectar(b: boolean): void;
    setHasStung(b: boolean): void;
    setHive(location: Location): void;
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
    getEntities(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.scheduler.BukkitScheduler
declare interface BukkitScheduler {
    isCurrentlyRunning(i: number): boolean;
    isQueued(i: number): boolean;
    scheduleAsyncDelayedTask(plugin: Plugin, runnable: Runnable): number;
    scheduleAsyncDelayedTask(plugin: Plugin, runnable: Runnable, l: number): number;
    scheduleAsyncRepeatingTask(plugin: Plugin, runnable: Runnable, l: number, l: number): number;
    scheduleSyncDelayedTask(plugin: Plugin, runnable: Runnable): number;
    scheduleSyncDelayedTask(plugin: Plugin, runnable: Runnable, l: number): number;
    scheduleSyncDelayedTask(plugin: Plugin, bukkitRunnable: BukkitRunnable): number;
    scheduleSyncDelayedTask(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): number;
    scheduleSyncRepeatingTask(plugin: Plugin, runnable: Runnable, l: number, l: number): number;
    scheduleSyncRepeatingTask(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): number;
    getActiveWorkers(): List;
    getPendingTasks(): List;
    callSyncMethod(plugin: Plugin, callable: Callable): Future;
    runTask(plugin: Plugin, runnable: Runnable): BukkitTask;
    runTask(plugin: Plugin, bukkitRunnable: BukkitRunnable): BukkitTask;
    runTaskAsynchronously(plugin: Plugin, runnable: Runnable): BukkitTask;
    runTaskAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable): BukkitTask;
    runTaskLater(plugin: Plugin, runnable: Runnable, l: number): BukkitTask;
    runTaskLater(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, runnable: Runnable, l: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, runnable: Runnable, l: number, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, runnable: Runnable, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): BukkitTask;
    cancelTask(i: number): void;
    cancelTasks(plugin: Plugin): void;
    runTask(plugin: Plugin, consumer: Consumer): void;
    runTaskAsynchronously(plugin: Plugin, consumer: Consumer): void;
    runTaskLater(plugin: Plugin, consumer: Consumer, l: number): void;
    runTaskLaterAsynchronously(plugin: Plugin, consumer: Consumer, l: number): void;
    runTaskTimer(plugin: Plugin, consumer: Consumer, l: number, l: number): void;
    runTaskTimerAsynchronously(plugin: Plugin, consumer: Consumer, l: number, l: number): void;
}

// org.bukkit.material.Tree
declare interface Tree extends Wood {
    getDirection(): BlockFace;
    setDirection(blockFace: BlockFace): void;
}

// org.bukkit.command.ProxiedCommandSender
declare interface ProxiedCommandSender extends CommandSender {
    getCallee(): CommandSender;
    getCaller(): CommandSender;
}

// org.bukkit.entity.minecart.HopperMinecart
declare interface HopperMinecart extends Minecart, InventoryHolder, Lootable {
    isEnabled(): boolean;
    setEnabled(b: boolean): void;
}

// org.bukkit.event.entity.PiglinBarterEvent
declare interface PiglinBarterEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getOutcome(): List;
    getHandlers(): HandlerList;
    getInput(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.block.EntityBlockFormEvent
declare interface EntityBlockFormEvent extends BlockFormEvent {
    getEntity(): Entity;
}

// org.bukkit.block.data.type.PistonHead
declare interface PistonHead extends TechnicalPiston {
    isShort(): boolean;
    setShort(b: boolean): void;
}

// org.bukkit.entity.AbstractSkeleton
declare interface AbstractSkeleton extends Monster {
    getSkeletonType(): SkeletonType;
    setSkeletonType(skeletonType: SkeletonType): void;
}

// org.bukkit.potion.PotionEffect
declare interface PotionEffect extends ConfigurationSerializable {
    apply(livingEntity: LivingEntity): boolean;
    hasIcon(): boolean;
    hasParticles(): boolean;
    isAmbient(): boolean;
    getAmplifier(): number;
    getDuration(): number;
    serialize(): Map;
    getColor(): Color;
    getType(): PotionEffectType;
}

// org.bukkit.block.data.Attachable
declare interface Attachable extends BlockData {
    isAttached(): boolean;
    setAttached(b: boolean): void;
}

// org.bukkit.event.entity.CreeperPowerEvent
declare interface CreeperPowerEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getLightning(): LightningStrike;
    getHandlers(): HandlerList;
    getCause(): PowerCause;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getRecipe(): Recipe;
    setResult(itemStack: ItemStack): void;
}

// org.bukkit.block.CreatureSpawner
declare interface CreatureSpawner extends TileState {
    getDelay(): number;
    getMaxNearbyEntities(): number;
    getMaxSpawnDelay(): number;
    getMinSpawnDelay(): number;
    getRequiredPlayerRange(): number;
    getSpawnCount(): number;
    getSpawnRange(): number;
    getCreatureTypeName(): string;
    getSpawnedType(): EntityType;
    setCreatureTypeByName(s: string): void;
    setDelay(i: number): void;
    setMaxNearbyEntities(i: number): void;
    setMaxSpawnDelay(i: number): void;
    setMinSpawnDelay(i: number): void;
    setRequiredPlayerRange(i: number): void;
    setSpawnCount(i: number): void;
    setSpawnRange(i: number): void;
    setSpawnedType(entityType: EntityType): void;
}

// org.bukkit.block.data.type.Scaffolding
declare interface Scaffolding extends Waterlogged {
    isBottom(): boolean;
    getDistance(): number;
    getMaximumDistance(): number;
    setBottom(b: boolean): void;
    setDistance(i: number): void;
}

// org.bukkit.plugin.ServicesManager
declare interface ServicesManager {
    isProvidedFor(clazz: Class): boolean;
    load(clazz: Class): any;
    getKnownServices(): Collection;
    getRegistrations(clazz: Class): Collection;
    getRegistrations(plugin: Plugin): List;
    getRegistration(clazz: Class): RegisteredServiceProvider;
    register(clazz: Class, object: any, plugin: Plugin, servicePriority: ServicePriority): void;
    unregister(clazz: Class, object: any): void;
    unregister(object: any): void;
    unregisterAll(plugin: Plugin): void;
}

// org.bukkit.event.world.WorldEvent
declare interface WorldEvent extends Event {
    getWorld(): World;
}

// org.bukkit.command.SimpleCommandMap
declare interface SimpleCommandMap extends CommandMap {
    dispatch(commandSender: CommandSender, s: string): boolean;
    register(s: string, s: string, command: Command): boolean;
    register(s: string, command: Command): boolean;
    getCommands(): Collection;
    tabComplete(commandSender: CommandSender, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, location: Location): List;
    getCommand(s: string): Command;
    clearCommands(): void;
    registerAll(s: string, list: List): void;
    registerServerAliases(): void;
    setFallbackCommands(): void;
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
    isCancelled(): boolean;
    getTarget(): Entity;
    getHandlers(): HandlerList;
    getReason(): TargetReason;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setTarget(entity: Entity): void;
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
    addStoredEnchant(enchantment: Enchantment, i: number, b: boolean): boolean;
    hasConflictingStoredEnchant(enchantment: Enchantment): boolean;
    hasStoredEnchant(enchantment: Enchantment): boolean;
    hasStoredEnchants(): boolean;
    removeStoredEnchant(enchantment: Enchantment): boolean;
    getStoredEnchantLevel(enchantment: Enchantment): number;
    getStoredEnchants(): Map;
    clone(): EnchantmentStorageMeta;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.event.block.SpongeAbsorbEvent
declare interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getBlocks(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getTaskId(): number;
    getThread(): Thread;
    getOwner(): Plugin;
}

// org.bukkit.entity.LingeringPotion
declare interface LingeringPotion extends ThrownPotion {
}

// org.bukkit.event.server.ServerLoadEvent
declare interface ServerLoadEvent extends ServerEvent {
    getHandlers(): HandlerList;
    getType(): LoadType;
    getHandlerList(): HandlerList;
}

// org.bukkit.scoreboard.Scoreboard
declare interface Scoreboard {
    getEntries(): Set;
    getObjectives(): Set;
    getObjectivesByCriteria(s: string): Set;
    getPlayers(): Set;
    getScores(s: string): Set;
    getScores(offlinePlayer: OfflinePlayer): Set;
    getTeams(): Set;
    getObjective(s: string): Objective;
    getObjective(displaySlot: DisplaySlot): Objective;
    registerNewObjective(s: string, s: string): Objective;
    registerNewObjective(s: string, s: string, s: string): Objective;
    registerNewObjective(s: string, s: string, s: string, renderType: RenderType): Objective;
    getEntryTeam(s: string): Team;
    getPlayerTeam(offlinePlayer: OfflinePlayer): Team;
    getTeam(s: string): Team;
    registerNewTeam(s: string): Team;
    clearSlot(displaySlot: DisplaySlot): void;
    resetScores(s: string): void;
    resetScores(offlinePlayer: OfflinePlayer): void;
}

// org.bukkit.material.Button
declare interface Button extends SimpleAttachableMaterialData, Redstone {
    isPowered(): boolean;
    getAttachedFace(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
    setPowered(b: boolean): void;
}

// org.bukkit.event.player.PlayerBucketEvent
declare interface PlayerBucketEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getBlock(): Block;
    getBucket(): Material;
    getBlockClicked(): Block;
    getBlockFace(): BlockFace;
    getItemStack(): ItemStack;
    setCancelled(b: boolean): void;
    setItemStack(itemStack: ItemStack): void;
}

// org.bukkit.block.data.Levelled
declare interface Levelled extends BlockData {
    getLevel(): number;
    getMaximumLevel(): number;
    setLevel(i: number): void;
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
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getVelocity(): Vector;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setItem(itemStack: ItemStack): void;
    setVelocity(vector: Vector): void;
}

// org.bukkit.block.data.type.TurtleEgg
declare interface TurtleEgg extends BlockData {
    getEggs(): number;
    getHatch(): number;
    getMaximumEggs(): number;
    getMaximumHatch(): number;
    getMinimumEggs(): number;
    setEggs(i: number): void;
    setHatch(i: number): void;
}

// org.bukkit.plugin.PluginBase
declare interface PluginBase extends Plugin {
    getName(): string;
}

// org.bukkit.entity.TropicalFish
declare interface TropicalFish extends Fish {
    getBodyColor(): DyeColor;
    getPatternColor(): DyeColor;
    getPattern(): Pattern;
    setBodyColor(dyeColor: DyeColor): void;
    setPattern(pattern: Pattern): void;
    setPatternColor(dyeColor: DyeColor): void;
}

// org.bukkit.plugin.SimpleServicesManager
declare interface SimpleServicesManager extends ServicesManager {
    isProvidedFor(clazz: Class): boolean;
    load(clazz: Class): any;
    getKnownServices(): Collection;
    getRegistrations(clazz: Class): Collection;
    getRegistrations(clazz: Class): List;
    getRegistrations(plugin: Plugin): List;
    getKnownServices(): Set;
    getRegistration(clazz: Class): RegisteredServiceProvider;
    register(clazz: Class, object: any, plugin: Plugin, servicePriority: ServicePriority): void;
    unregister(clazz: Class, object: any): void;
    unregister(object: any): void;
    unregisterAll(plugin: Plugin): void;
}

// org.bukkit.structure.Palette
declare interface Palette {
    getBlockCount(): number;
    getBlocks(): List;
}

// org.bukkit.material.Sign
declare interface Sign extends MaterialData, Attachable {
    isWallSign(): boolean;
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.event.block.BlockDamageEvent
declare interface BlockDamageEvent extends BlockEvent, Cancellable {
    getInstaBreak(): boolean;
    isCancelled(): boolean;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getItemInHand(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setInstaBreak(b: boolean): void;
}

// org.bukkit.event.entity.FireworkExplodeEvent
declare interface FireworkExplodeEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.entity.EnderDragonChangePhaseEvent
declare interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getCurrentPhase(): Phase;
    getNewPhase(): Phase;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setNewPhase(phase: Phase): void;
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
    isCancelled(): boolean;
    getRemaining(): number;
    getItem(): Item;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.generator.LimitedRegion
declare interface LimitedRegion extends RegionAccessor {
    isInRegion(i: number, i: number, i: number): boolean;
    isInRegion(location: Location): boolean;
    getBuffer(): number;
    getTileEntities(): List;
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
    isIncomingChannelRegistered(plugin: Plugin, s: string): boolean;
    isOutgoingChannelRegistered(plugin: Plugin, s: string): boolean;
    isRegistrationValid(pluginMessageListenerRegistration: PluginMessageListenerRegistration): boolean;
    isReservedChannel(s: string): boolean;
    getIncomingChannelRegistrations(s: string): Set;
    getIncomingChannelRegistrations(plugin: Plugin): Set;
    getIncomingChannelRegistrations(plugin: Plugin, s: string): Set;
    getIncomingChannels(): Set;
    getIncomingChannels(plugin: Plugin): Set;
    getOutgoingChannels(): Set;
    getOutgoingChannels(plugin: Plugin): Set;
    registerIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): PluginMessageListenerRegistration;
    dispatchIncomingMessage(player: Player, s: string, b: number): void;
    registerOutgoingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): void;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, s: string): void;
    MAX_CHANNEL_SIZE: number;
    MAX_MESSAGE_SIZE: number;
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
    isInverted(): boolean;
    isOpen(): boolean;
    getAttachedFace(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
    setInverted(b: boolean): void;
    setOpen(b: boolean): void;
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
    getAttachment(): Attachment;
    setAttachment(attachment: Attachment): void;
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
    asBGR(): number;
    asRGB(): number;
    getBlue(): number;
    getGreen(): number;
    getRed(): number;
    serialize(): Map;
    mixColors(color: Color): Color;
    mixDyes(dyeColor: DyeColor): Color;
    setBlue(i: number): Color;
    setGreen(i: number): Color;
    setRed(i: number): Color;
    deserialize(map: Map): Color;
    fromBGR(i: number): Color;
    fromBGR(i: number, i: number, i: number): Color;
    fromRGB(i: number): Color;
    fromRGB(i: number, i: number, i: number): Color;
    AQUA: Color;
    BLACK: Color;
    BLUE: Color;
    FUCHSIA: Color;
    GRAY: Color;
    GREEN: Color;
    LIME: Color;
    MAROON: Color;
    NAVY: Color;
    OLIVE: Color;
    ORANGE: Color;
    PURPLE: Color;
    RED: Color;
    SILVER: Color;
    TEAL: Color;
    WHITE: Color;
    YELLOW: Color;
}

// org.bukkit.entity.Strider
declare interface Strider extends Steerable, Vehicle {
    isShivering(): boolean;
    setShivering(b: boolean): void;
}

// org.bukkit.event.entity.SlimeSplitEvent
declare interface SlimeSplitEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getCount(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setCount(i: number): void;
}

// org.bukkit.event.player.PlayerPreLoginEvent
declare interface PlayerPreLoginEvent extends Event {
    getKickMessage(): string;
    getName(): string;
    getAddress(): InetAddress;
    getUniqueId(): UUID;
    getResult(): Result;
    getHandlerList(): HandlerList;
    allow(): void;
    disallow(result: Result, s: string): void;
    setKickMessage(s: string): void;
    setResult(result: Result): void;
}

// org.bukkit.event.player.PlayerBucketEmptyEvent
declare interface PlayerBucketEmptyEvent extends PlayerBucketEvent {
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.entity.Axolotl
declare interface Axolotl extends Animals {
    isPlayingDead(): boolean;
    getVariant(): Variant;
    setPlayingDead(b: boolean): void;
    setVariant(variant: Variant): void;
}

// org.bukkit.entity.Cat
declare interface Cat extends Tameable, Sittable {
    getCollarColor(): DyeColor;
    getCatType(): Type;
    setCatType(type: Type): void;
    setCollarColor(dyeColor: DyeColor): void;
}

// org.bukkit.util.io.BukkitObjectOutputStream
declare interface BukkitObjectOutputStream extends ObjectOutputStream {
}

// org.bukkit.conversations.BooleanPrompt
declare interface BooleanPrompt extends ValidatingPrompt {
}

// org.bukkit.block.data.type.BigDripleaf
declare interface BigDripleaf extends Dripleaf {
    getTilt(): Tilt;
    setTilt(tilt: Tilt): void;
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
    getMaximumDelay(): number;
    getMinimumDelay(): number;
    setDelay(i: number): void;
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
    getEntity(): Entity;
    getLightning(): LightningStrike;
    getEntity(): Pig;
    getPigZombie(): PigZombie;
}

// org.bukkit.event.player.AsyncPlayerPreLoginEvent
declare interface AsyncPlayerPreLoginEvent extends Event {
    getKickMessage(): string;
    getName(): string;
    getAddress(): InetAddress;
    getUniqueId(): UUID;
    getLoginResult(): Result;
    getResult(): Result;
    getHandlerList(): HandlerList;
    allow(): void;
    disallow(result: Result, s: string): void;
    disallow(result: Result, s: string): void;
    setKickMessage(s: string): void;
    setLoginResult(result: Result): void;
    setResult(result: Result): void;
}

// org.bukkit.entity.ZombieVillager
declare interface ZombieVillager extends Zombie {
    isConverting(): boolean;
    getConversionTime(): number;
    getConversionPlayer(): OfflinePlayer;
    getVillagerProfession(): Profession;
    getVillagerType(): Type;
    setConversionPlayer(offlinePlayer: OfflinePlayer): void;
    setConversionTime(i: number): void;
    setVillagerProfession(profession: Profession): void;
    setVillagerType(type: Type): void;
}

// org.bukkit.event.entity.ExplosionPrimeEvent
declare interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
    getFire(): boolean;
    isCancelled(): boolean;
    getRadius(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setFire(b: boolean): void;
    setRadius(f: number): void;
}

// org.bukkit.conversations.NumericPrompt
declare interface NumericPrompt extends ValidatingPrompt {
}

// org.bukkit.entity.EnderSignal
declare interface EnderSignal extends Entity {
    getDropItem(): boolean;
    getDespawnTimer(): number;
    getTargetLocation(): Location;
    getItem(): ItemStack;
    setDespawnTimer(i: number): void;
    setDropItem(b: boolean): void;
    setItem(itemStack: ItemStack): void;
    setTargetLocation(location: Location): void;
}

// org.bukkit.event.block.BlockFormEvent
declare interface BlockFormEvent extends BlockGrowEvent {
}

// org.bukkit.BanEntry
declare interface BanEntry {
    getReason(): string;
    getSource(): string;
    getTarget(): string;
    getCreated(): Date;
    getExpiration(): Date;
    save(): void;
    setCreated(date: Date): void;
    setExpiration(date: Date): void;
    setReason(s: string): void;
    setSource(s: string): void;
}

// org.bukkit.event.world.EntitiesUnloadEvent
declare interface EntitiesUnloadEvent extends ChunkEvent {
    getEntities(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.meta.FireworkMeta
declare interface FireworkMeta extends ItemMeta {
    hasEffects(): boolean;
    getEffectsSize(): number;
    getPower(): number;
    getEffects(): List;
    clone(): FireworkMeta;
    addEffect(fireworkEffect: FireworkEffect): void;
    addEffects(iterable: Iterable): void;
    addEffects(fireworkEffect: FireworkEffect): void;
    clearEffects(): void;
    removeEffect(i: number): void;
    setPower(i: number): void;
    clone(): any;
    clone(): ItemMeta;
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
    isCancelled(): boolean;
    getFormat(): string;
    getMessage(): string;
    getRecipients(): Set;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setFormat(s: string): void;
    setMessage(s: string): void;
}

// org.bukkit.material.Sandstone
declare interface Sandstone extends MaterialData {
    getType(): SandstoneType;
    setType(sandstoneType: SandstoneType): void;
}

// org.bukkit.entity.Firework
declare interface Firework extends Projectile {
    isShotAtAngle(): boolean;
    getFireworkMeta(): FireworkMeta;
    detonate(): void;
    setFireworkMeta(fireworkMeta: FireworkMeta): void;
    setShotAtAngle(b: boolean): void;
}

// org.bukkit.entity.Phantom
declare interface Phantom extends Flying {
    getSize(): number;
    setSize(i: number): void;
}

// org.bukkit.plugin.SimplePluginManager
declare interface SimplePluginManager extends PluginManager {
    isPluginEnabled(s: string): boolean;
    isPluginEnabled(plugin: Plugin): boolean;
    isTransitiveDepend(pluginDescriptionFile: PluginDescriptionFile, pluginDescriptionFile: PluginDescriptionFile): boolean;
    useTimings(): boolean;
    getDefaultPermSubscriptions(b: boolean): Set;
    getDefaultPermissions(b: boolean): Set;
    getPermissionSubscriptions(s: string): Set;
    getPermissions(): Set;
    getPermission(s: string): Permission;
    loadPlugins(file: File): Plugin[];
    getPlugin(s: string): Plugin;
    loadPlugin(file: File): Plugin;
    getPlugins(): Plugin[];
    addPermission(permission: Permission): void;
    addPermission(permission: Permission, b: boolean): void;
    callEvent(event: Event): void;
    clearPlugins(): void;
    dirtyPermissibles(): void;
    disablePlugin(plugin: Plugin): void;
    disablePlugins(): void;
    enablePlugin(plugin: Plugin): void;
    recalculatePermissionDefaults(permission: Permission): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin, b: boolean): void;
    registerEvents(listener: Listener, plugin: Plugin): void;
    registerInterface(clazz: Class): void;
    removePermission(s: string): void;
    removePermission(permission: Permission): void;
    subscribeToDefaultPerms(b: boolean, permissible: Permissible): void;
    subscribeToPermission(s: string, permissible: Permissible): void;
    unsubscribeFromDefaultPerms(b: boolean, permissible: Permissible): void;
    unsubscribeFromPermission(s: string, permissible: Permissible): void;
    useTimings(b: boolean): void;
}

// org.bukkit.plugin.EventExecutor
declare interface EventExecutor {
    execute(listener: Listener, event: Event): void;
}

// eu.okaeri.poly.api.script.ScriptHelper
declare interface ScriptHelper {
    getName(): string;
    callOnLoad(): void;
    callOnUnload(): void;
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
    isCancelled(): boolean;
    getAffectedEntities(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.HandlerList
declare interface HandlerList {
    getRegisteredListeners(): RegisteredListener[];
    getHandlerLists(): ArrayList;
    getRegisteredListeners(plugin: Plugin): ArrayList;
    bakeAll(): void;
    unregisterAll(): void;
    unregisterAll(listener: Listener): void;
    unregisterAll(plugin: Plugin): void;
    bake(): void;
    register(registeredListener: RegisteredListener): void;
    unregister(listener: Listener): void;
    unregister(plugin: Plugin): void;
    unregister(registeredListener: RegisteredListener): void;
    registerAll(collection: Collection): void;
}

// org.bukkit.conversations.ConversationCanceller
declare interface ConversationCanceller extends Cloneable {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    clone(): ConversationCanceller;
    setConversation(conversation: Conversation): void;
    clone(): any;
}

// org.bukkit.block.data.type.Gate
declare interface Gate extends Directional, Openable, Powerable {
    isInWall(): boolean;
    setInWall(b: boolean): void;
}

// org.bukkit.material.DirectionalContainer
declare interface DirectionalContainer extends MaterialData, Directional {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.event.entity.FoodLevelChangeEvent
declare interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getFoodLevel(): number;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setFoodLevel(i: number): void;
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
    isCancelled(): boolean;
    getBlock(): Block;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.entity.ProjectileLaunchEvent
declare interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Projectile;
}

// org.bukkit.event.player.PlayerChatTabCompleteEvent
declare interface PlayerChatTabCompleteEvent extends PlayerEvent {
    getChatMessage(): string;
    getLastToken(): string;
    getTabCompletions(): Collection;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.world.StructureGrowEvent
declare interface StructureGrowEvent extends WorldEvent, Cancellable {
    isCancelled(): boolean;
    isFromBonemeal(): boolean;
    getBlocks(): List;
    getLocation(): Location;
    getSpecies(): TreeType;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.Conduit
declare interface Conduit extends TileState {
}

// org.bukkit.event.player.PlayerArmorStandManipulateEvent
declare interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
    getSlot(): EquipmentSlot;
    getArmorStandItem(): ItemStack;
    getPlayerItem(): ItemStack;
}

// org.bukkit.entity.IronGolem
declare interface IronGolem extends Golem {
    isPlayerCreated(): boolean;
    setPlayerCreated(b: boolean): void;
}

// org.bukkit.block.data.type.Fence
declare interface Fence extends MultipleFacing, Waterlogged {
}

// org.bukkit.util.noise.SimplexOctaveGenerator
declare interface SimplexOctaveGenerator extends OctaveGenerator {
    getWScale(): number;
    noise(d: number, d: number, d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number, d: number, d: number, b: boolean): number;
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
    getArrivalTime(): number;
    getOrigin(): Location;
    getDestination(): Destination;
}

// org.bukkit.entity.minecart.RideableMinecart
declare interface RideableMinecart extends Minecart {
}

// org.bukkit.help.HelpMap
declare interface HelpMap {
    getHelpTopics(): Collection;
    getIgnoredPlugins(): List;
    getHelpTopic(s: string): HelpTopic;
    addTopic(helpTopic: HelpTopic): void;
    clear(): void;
    registerHelpTopicFactory(clazz: Class, helpTopicFactory: HelpTopicFactory): void;
}

// org.bukkit.inventory.BeaconInventory
declare interface BeaconInventory extends Inventory {
    getItem(): ItemStack;
    setItem(itemStack: ItemStack): void;
}

// org.bukkit.inventory.meta.LeatherArmorMeta
declare interface LeatherArmorMeta extends ItemMeta {
    getColor(): Color;
    clone(): LeatherArmorMeta;
    setColor(color: Color): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.util.noise.NoiseGenerator
declare interface NoiseGenerator {
    noise(d: number, d: number, d: number): number;
    noise(d: number): number;
    noise(d: number, d: number): number;
    noise(d: number, d: number, d: number, i: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, i: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, i: number, d: number, d: number): number;
    noise(d: number, d: number, i: number, d: number, d: number, b: boolean): number;
    noise(d: number, i: number, d: number, d: number): number;
    noise(d: number, i: number, d: number, d: number, b: boolean): number;
    floor(d: number): number;
}

// org.bukkit.entity.Mob
declare interface Mob extends LivingEntity, Lootable {
    isAware(): boolean;
    getTarget(): LivingEntity;
    setAware(b: boolean): void;
    setTarget(livingEntity: LivingEntity): void;
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
    getTitle(): string;
    getPlayer(): HumanEntity;
    getType(): InventoryType;
    getBottomInventory(): Inventory;
    getTopInventory(): Inventory;
    setProperty(property: Property, i: number): boolean;
    convertSlot(i: number): number;
    countSlots(): number;
    getSlotType(i: number): SlotType;
    getInventory(i: number): Inventory;
    getCursor(): ItemStack;
    close(): void;
    setCursor(itemStack: ItemStack): void;
    getItem(i: number): ItemStack;
    setItem(i: number, itemStack: ItemStack): void;
    OUTSIDE: number;
}

// org.bukkit.event.block.BlockRedstoneEvent
declare interface BlockRedstoneEvent extends BlockEvent {
    getNewCurrent(): number;
    getOldCurrent(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setNewCurrent(i: number): void;
}

// org.bukkit.map.MapPalette
declare interface MapPalette {
    matchColor(i: number, i: number, i: number): number;
    matchColor(color: Color): number;
    imageToBytes(image: Image): number[];
    getColor(b: number): Color;
    resizeImage(image: Image): BufferedImage;
    BLUE: number;
    BROWN: number;
    DARK_BROWN: number;
    DARK_GRAY: number;
    DARK_GREEN: number;
    GRAY_1: number;
    GRAY_2: number;
    LIGHT_BROWN: number;
    LIGHT_GRAY: number;
    LIGHT_GREEN: number;
    PALE_BLUE: number;
    RED: number;
    TRANSPARENT: number;
    WHITE: number;
}

// org.bukkit.inventory.meta.Damageable
declare interface Damageable extends ItemMeta {
    hasDamage(): boolean;
    getDamage(): number;
    clone(): Damageable;
    setDamage(i: number): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.block.data.type.Piston
declare interface Piston extends Directional {
    isExtended(): boolean;
    setExtended(b: boolean): void;
}

// org.bukkit.event.block.MoistureChangeEvent
declare interface MoistureChangeEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getNewState(): BlockState;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// eu.okaeri.poly.api.script.ScriptService
declare interface ScriptService {
    unload(name: string): boolean;
    exec(name: string, source: string): ScriptHelper;
    load(name: string, source: string): ScriptHelper;
    eval(source: string): any;
    getDefaultBindings(scriptHelper: ScriptHelper): Map;
    listLoaded(): Set;
}

// org.bukkit.event.world.LootGenerateEvent
declare interface LootGenerateEvent extends WorldEvent, Cancellable {
    isCancelled(): boolean;
    isPlugin(): boolean;
    getLoot(): List;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getInventoryHolder(): InventoryHolder;
    getLootContext(): LootContext;
    getLootTable(): LootTable;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setLoot(collection: Collection): void;
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
    getDefaults(): Configuration;
    options(): ConfigurationOptions;
    addDefault(s: string, object: any): void;
    addDefaults(map: Map): void;
    addDefaults(configuration: Configuration): void;
    setDefaults(configuration: Configuration): void;
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
    isCancelled(): boolean;
    getYield(): number;
    blockList(): List;
    getLocation(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setYield(f: number): void;
}

// org.bukkit.event.block.BlockReceiveGameEvent
declare interface BlockReceiveGameEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getEvent(): GameEvent;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.data.type.LightningRod
declare interface LightningRod extends Directional, Powerable, Waterlogged {
}

// org.bukkit.material.Leaves
declare interface Leaves extends Wood {
    isDecayable(): boolean;
    isDecaying(): boolean;
    setDecayable(b: boolean): void;
    setDecaying(b: boolean): void;
}

// org.bukkit.entity.PigZombie
declare interface PigZombie extends Zombie {
    isAngry(): boolean;
    isConverting(): boolean;
    getAnger(): number;
    getConversionTime(): number;
    setAnger(i: number): void;
    setAngry(b: boolean): void;
    setConversionTime(i: number): void;
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
    isScoreSet(): boolean;
    getScore(): number;
    getEntry(): string;
    getPlayer(): OfflinePlayer;
    getObjective(): Objective;
    getScoreboard(): Scoreboard;
    setScore(i: number): void;
}

// org.bukkit.inventory.CraftingInventory
declare interface CraftingInventory extends Inventory {
    getResult(): ItemStack;
    getMatrix(): ItemStack[];
    getRecipe(): Recipe;
    setMatrix(itemStack: ItemStack): void;
    setResult(itemStack: ItemStack): void;
}

// org.bukkit.event.block.CauldronLevelChangeEvent
declare interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getNewLevel(): number;
    getOldLevel(): number;
    getNewState(): BlockState;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getReason(): ChangeReason;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setNewLevel(i: number): void;
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
    getPlayer(): Player;
    setCancelled(b: boolean): void;
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
    isPowered(): boolean;
    getDelay(): number;
    getFacing(): BlockFace;
    setDelay(i: number): void;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.inventory.InventoryHolder
declare interface InventoryHolder {
    getInventory(): Inventory;
}

// org.bukkit.event.vehicle.VehicleCreateEvent
declare interface VehicleCreateEvent extends VehicleEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.permissions.Permission
declare interface Permission {
    getDescription(): string;
    getName(): string;
    getChildren(): Map;
    getPermissibles(): Set;
    addParent(s: string, b: boolean): Permission;
    getDefault(): PermissionDefault;
    loadPermissions(map: Map, s: string, permissionDefault: PermissionDefault): List;
    loadPermission(s: string, map: Map): Permission;
    loadPermission(s: string, map: Map, permissionDefault: PermissionDefault, list: List): Permission;
    addParent(permission: Permission, b: boolean): void;
    recalculatePermissibles(): void;
    setDefault(permissionDefault: PermissionDefault): void;
    setDescription(s: string): void;
    DEFAULT_PERMISSION: PermissionDefault;
}

// org.bukkit.entity.SmallFireball
declare interface SmallFireball extends SizedFireball {
}

// org.bukkit.event.block.BlockCanBuildEvent
declare interface BlockCanBuildEvent extends BlockEvent {
    isBuildable(): boolean;
    getMaterial(): Material;
    getBlockData(): BlockData;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setBuildable(b: boolean): void;
}

// org.bukkit.material.Torch
declare interface Torch extends SimpleAttachableMaterialData {
    getAttachedFace(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.util.Vector
declare interface Vector extends Cloneable, ConfigurationSerializable {
    isInAABB(vector: Vector, vector: Vector): boolean;
    isInSphere(vector: Vector, d: number): boolean;
    isNormalized(): boolean;
    distance(vector: Vector): number;
    distanceSquared(vector: Vector): number;
    dot(vector: Vector): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    length(): number;
    lengthSquared(): number;
    angle(vector: Vector): number;
    getBlockX(): number;
    getBlockY(): number;
    getBlockZ(): number;
    serialize(): Map;
    toLocation(world: World): Location;
    toLocation(world: World, f: number, f: number): Location;
    toBlockVector(): BlockVector;
    add(vector: Vector): Vector;
    copy(vector: Vector): Vector;
    crossProduct(vector: Vector): Vector;
    divide(vector: Vector): Vector;
    getCrossProduct(vector: Vector): Vector;
    getMidpoint(vector: Vector): Vector;
    midpoint(vector: Vector): Vector;
    multiply(d: number): Vector;
    multiply(f: number): Vector;
    multiply(i: number): Vector;
    multiply(vector: Vector): Vector;
    normalize(): Vector;
    rotateAroundAxis(vector: Vector, d: number): Vector;
    rotateAroundNonUnitAxis(vector: Vector, d: number): Vector;
    rotateAroundX(d: number): Vector;
    rotateAroundY(d: number): Vector;
    rotateAroundZ(d: number): Vector;
    setX(d: number): Vector;
    setX(f: number): Vector;
    setX(i: number): Vector;
    setY(d: number): Vector;
    setY(f: number): Vector;
    setY(i: number): Vector;
    setZ(d: number): Vector;
    setZ(f: number): Vector;
    setZ(i: number): Vector;
    subtract(vector: Vector): Vector;
    zero(): Vector;
    getEpsilon(): number;
    deserialize(map: Map): Vector;
    getMaximum(vector: Vector, vector: Vector): Vector;
    getMinimum(vector: Vector, vector: Vector): Vector;
    getRandom(): Vector;
    checkFinite(): void;
}

// org.bukkit.entity.MagmaCube
declare interface MagmaCube extends Slime {
}

// org.bukkit.event.player.PlayerRiptideEvent
declare interface PlayerRiptideEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.player.PlayerEditBookEvent
declare interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    isSigning(): boolean;
    getSlot(): number;
    getHandlers(): HandlerList;
    getNewBookMeta(): BookMeta;
    getPreviousBookMeta(): BookMeta;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setNewBookMeta(bookMeta: BookMeta): void;
    setSigning(b: boolean): void;
}

// org.bukkit.block.data.type.Lantern
declare interface Lantern extends Waterlogged {
    isHanging(): boolean;
    setHanging(b: boolean): void;
}

// org.bukkit.event.inventory.FurnaceExtractEvent
declare interface FurnaceExtractEvent extends BlockExpEvent {
    getItemAmount(): number;
    getItemType(): Material;
    getPlayer(): Player;
}

// org.bukkit.block.EnderChest
declare interface EnderChest extends TileState {
}

// org.bukkit.block.data.type.RedstoneWire
declare interface RedstoneWire extends AnaloguePowerable {
    getAllowedFaces(): Set;
    getFace(blockFace: BlockFace): Connection;
    setFace(blockFace: BlockFace, connection: Connection): void;
}

// org.bukkit.event.entity.VillagerCareerChangeEvent
declare interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getProfession(): Profession;
    getHandlers(): HandlerList;
    getReason(): ChangeReason;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setProfession(profession: Profession): void;
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
    followRedirects(): Redirect;
    version(): Version;
    send(httpRequest: HttpRequest, bodyHandler: BodyHandler): HttpResponse;
    authenticator(): Optional;
    connectTimeout(): Optional;
    cookieHandler(): Optional;
    executor(): Optional;
    proxy(): Optional;
    sendAsync(httpRequest: HttpRequest, bodyHandler: BodyHandler): CompletableFuture;
    sendAsync(httpRequest: HttpRequest, bodyHandler: BodyHandler, pushPromiseHandler: PushPromiseHandler): CompletableFuture;
    sslContext(): SSLContext;
    sslParameters(): SSLParameters;
    newWebSocketBuilder(): Builder;
    newHttpClient(): HttpClient;
    newBuilder(): Builder;
}

// org.bukkit.generator.ChunkGenerator
declare interface ChunkGenerator {
    canSpawn(world: World, i: number, i: number): boolean;
    isParallelCapable(): boolean;
    shouldGenerateBedrock(): boolean;
    shouldGenerateCaves(): boolean;
    shouldGenerateDecorations(): boolean;
    shouldGenerateMobs(): boolean;
    shouldGenerateNoise(): boolean;
    shouldGenerateStructures(): boolean;
    shouldGenerateSurface(): boolean;
    getBaseHeight(worldInfo: WorldInfo, random: Random, i: number, i: number, heightMap: HeightMap): number;
    getDefaultPopulators(world: World): List;
    getFixedSpawnLocation(world: World, random: Random): Location;
    getDefaultBiomeProvider(worldInfo: WorldInfo): BiomeProvider;
    generateChunkData(world: World, random: Random, i: number, i: number, biomeGrid: BiomeGrid): ChunkData;
    generateBedrock(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    generateCaves(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    generateNoise(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    generateSurface(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
}

// org.bukkit.Note
declare interface Note {
    isSharped(): boolean;
    getId(): number;
    getOctave(): number;
    flattened(): Note;
    sharped(): Note;
    getTone(): Tone;
    flat(i: number, tone: Tone): Note;
    natural(i: number, tone: Tone): Note;
    sharp(i: number, tone: Tone): Note;
}

// org.bukkit.block.Block
declare interface Block extends Metadatable {
    applyBoneMeal(blockFace: BlockFace): boolean;
    breakNaturally(): boolean;
    breakNaturally(itemStack: ItemStack): boolean;
    isBlockFaceIndirectlyPowered(blockFace: BlockFace): boolean;
    isBlockFacePowered(blockFace: BlockFace): boolean;
    isBlockIndirectlyPowered(): boolean;
    isBlockPowered(): boolean;
    isEmpty(): boolean;
    isLiquid(): boolean;
    isPassable(): boolean;
    isPreferredTool(itemStack: ItemStack): boolean;
    getData(): number;
    getLightFromBlocks(): number;
    getLightFromSky(): number;
    getLightLevel(): number;
    getHumidity(): number;
    getTemperature(): number;
    getBreakSpeed(player: Player): number;
    getBlockPower(): number;
    getBlockPower(blockFace: BlockFace): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    getDrops(): Collection;
    getDrops(itemStack: ItemStack): Collection;
    getDrops(itemStack: ItemStack, entity: Entity): Collection;
    getChunk(): Chunk;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getType(): Material;
    getWorld(): World;
    getBiome(): Biome;
    getRelative(i: number, i: number, i: number): Block;
    getRelative(blockFace: BlockFace): Block;
    getRelative(blockFace: BlockFace, i: number): Block;
    getFace(block: Block): BlockFace;
    getState(): BlockState;
    getPistonMoveReaction(): PistonMoveReaction;
    getBlockData(): BlockData;
    getBoundingBox(): BoundingBox;
    rayTrace(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    getCollisionShape(): VoxelShape;
    setBiome(biome: Biome): void;
    setBlockData(blockData: BlockData): void;
    setBlockData(blockData: BlockData, b: boolean): void;
    setType(material: Material): void;
    setType(material: Material, b: boolean): void;
}

// org.bukkit.block.Skull
declare interface Skull extends TileState {
    hasOwner(): boolean;
    setOwner(s: string): boolean;
    getOwner(): string;
    getOwningPlayer(): OfflinePlayer;
    getSkullType(): SkullType;
    getRotation(): BlockFace;
    setOwningPlayer(offlinePlayer: OfflinePlayer): void;
    setRotation(blockFace: BlockFace): void;
    setSkullType(skullType: SkullType): void;
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
    isCancelled(): boolean;
    getBlock(): Block;
    getBlockFace(): BlockFace;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.inventory.BlastingRecipe
declare interface BlastingRecipe extends CookingRecipe {
}

// org.bukkit.event.world.ChunkUnloadEvent
declare interface ChunkUnloadEvent extends ChunkEvent {
    isSaveChunk(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
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
    isConditional(): boolean;
    setConditional(b: boolean): void;
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
    getKeepInventory(): boolean;
    getKeepLevel(): boolean;
    getNewExp(): number;
    getNewLevel(): number;
    getNewTotalExp(): number;
    getDeathMessage(): string;
    setDeathMessage(s: string): void;
    setKeepInventory(b: boolean): void;
    setKeepLevel(b: boolean): void;
    setNewExp(i: number): void;
    setNewLevel(i: number): void;
    setNewTotalExp(i: number): void;
}

// org.bukkit.util.ChatPaginator
declare interface ChatPaginator {
    wordWrap(s: string, i: number): string[];
    paginate(s: string, i: number): ChatPage;
    paginate(s: string, i: number, i: number, i: number): ChatPage;
    AVERAGE_CHAT_PAGE_WIDTH: number;
    CLOSED_CHAT_PAGE_HEIGHT: number;
    GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH: number;
    OPEN_CHAT_PAGE_HEIGHT: number;
    UNBOUNDED_PAGE_HEIGHT: number;
    UNBOUNDED_PAGE_WIDTH: number;
}

// org.bukkit.entity.Witch
declare interface Witch extends Raider {
}

// org.bukkit.entity.EnderCrystal
declare interface EnderCrystal extends Entity {
    isShowingBottom(): boolean;
    getBeamTarget(): Location;
    setBeamTarget(location: Location): void;
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
    getBasePixel(i: number, i: number): number;
    getPixel(i: number, i: number): number;
    getCursors(): MapCursorCollection;
    getMapView(): MapView;
    drawImage(i: number, i: number, image: Image): void;
    drawText(i: number, i: number, mapFont: MapFont, s: string): void;
    setCursors(mapCursorCollection: MapCursorCollection): void;
    setPixel(i: number, i: number, b: number): void;
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
    isAwake(): boolean;
    setAwake(b: boolean): void;
}

// org.bukkit.entity.Illager
declare interface Illager extends Raider {
}

// org.bukkit.inventory.PlayerInventory
declare interface PlayerInventory extends Inventory {
    getHeldItemSlot(): number;
    getHolder(): HumanEntity;
    getBoots(): ItemStack;
    getChestplate(): ItemStack;
    getHelmet(): ItemStack;
    getItem(equipmentSlot: EquipmentSlot): ItemStack;
    getItemInHand(): ItemStack;
    getItemInMainHand(): ItemStack;
    getItemInOffHand(): ItemStack;
    getLeggings(): ItemStack;
    getArmorContents(): ItemStack[];
    getExtraContents(): ItemStack[];
    setArmorContents(itemStack: ItemStack): void;
    setBoots(itemStack: ItemStack): void;
    setChestplate(itemStack: ItemStack): void;
    setExtraContents(itemStack: ItemStack): void;
    setHeldItemSlot(i: number): void;
    setHelmet(itemStack: ItemStack): void;
    setItem(i: number, itemStack: ItemStack): void;
    setItem(equipmentSlot: EquipmentSlot, itemStack: ItemStack): void;
    setItemInHand(itemStack: ItemStack): void;
    setItemInMainHand(itemStack: ItemStack): void;
    setItemInOffHand(itemStack: ItemStack): void;
    setLeggings(itemStack: ItemStack): void;
    getHolder(): InventoryHolder;
}

// org.bukkit.entity.Painting
declare interface Painting extends Hanging {
    setArt(art: Art): boolean;
    setArt(art: Art, b: boolean): boolean;
    getArt(): Art;
}

// eu.okaeri.poly.api.bukkit.BukkitScriptHelper
declare interface BukkitScriptHelper extends ScriptHelper {
    getScriptChannelListeners(): List;
    getScriptCommands(): List;
    getScriptTasks(): List;
    getScriptEventListener(): Listener;
    getPlugin(): Plugin;
    command(label: string, consumer: BiConsumer): void;
    listen(eventClass: Class, consumer: Consumer): void;
    listen(eventClass: Class, priority: EventPriority, ignoreCancelled: boolean, consumer: Consumer): void;
    listen(eventClass: Class, priority: EventPriority, consumer: Consumer): void;
    listenChannel(name: string, pluginMessageListener: PluginMessageListener): void;
    onLoad(runnable: Runnable): void;
    onUnload(runnable: Runnable): void;
    registerOutgoingPluginChannel(name: string): void;
    runEvery(ticks: number, runnable: Runnable): void;
    runEveryAsync(ticks: number, runnable: Runnable): void;
    runLater(ticks: number, runnable: Runnable): void;
    runLaterAsync(ticks: number, runnable: Runnable): void;
    runNow(runnable: Runnable): void;
    runNowAsync(runnable: Runnable): void;
}

// org.bukkit.event.player.PlayerQuitEvent
declare interface PlayerQuitEvent extends PlayerEvent {
    getQuitMessage(): string;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setQuitMessage(s: string): void;
}

// org.bukkit.material.Stairs
declare interface Stairs extends MaterialData, Directional {
    isInverted(): boolean;
    getAscendingDirection(): BlockFace;
    getDescendingDirection(): BlockFace;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
    setInverted(b: boolean): void;
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
    hasVariant(): boolean;
    getVariant(): Variant;
    clone(): AxolotlBucketMeta;
    setVariant(variant: Variant): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.enchantments.Enchantment
declare interface Enchantment extends Keyed {
    canEnchantItem(itemStack: ItemStack): boolean;
    conflictsWith(enchantment: Enchantment): boolean;
    isCursed(): boolean;
    isTreasure(): boolean;
    getMaxLevel(): number;
    getStartLevel(): number;
    getName(): string;
    getItemTarget(): EnchantmentTarget;
    getKey(): NamespacedKey;
    isAcceptingRegistrations(): boolean;
    getByKey(namespacedKey: NamespacedKey): Enchantment;
    getByName(s: string): Enchantment;
    values(): Enchantment[];
    registerEnchantment(enchantment: Enchantment): void;
    stopAcceptingRegistrations(): void;
    ARROW_DAMAGE: Enchantment;
    ARROW_FIRE: Enchantment;
    ARROW_INFINITE: Enchantment;
    ARROW_KNOCKBACK: Enchantment;
    BINDING_CURSE: Enchantment;
    CHANNELING: Enchantment;
    DAMAGE_ALL: Enchantment;
    DAMAGE_ARTHROPODS: Enchantment;
    DAMAGE_UNDEAD: Enchantment;
    DEPTH_STRIDER: Enchantment;
    DIG_SPEED: Enchantment;
    DURABILITY: Enchantment;
    FIRE_ASPECT: Enchantment;
    FROST_WALKER: Enchantment;
    IMPALING: Enchantment;
    KNOCKBACK: Enchantment;
    LOOT_BONUS_BLOCKS: Enchantment;
    LOOT_BONUS_MOBS: Enchantment;
    LOYALTY: Enchantment;
    LUCK: Enchantment;
    LURE: Enchantment;
    MENDING: Enchantment;
    MULTISHOT: Enchantment;
    OXYGEN: Enchantment;
    PIERCING: Enchantment;
    PROTECTION_ENVIRONMENTAL: Enchantment;
    PROTECTION_EXPLOSIONS: Enchantment;
    PROTECTION_FALL: Enchantment;
    PROTECTION_FIRE: Enchantment;
    PROTECTION_PROJECTILE: Enchantment;
    QUICK_CHARGE: Enchantment;
    RIPTIDE: Enchantment;
    SILK_TOUCH: Enchantment;
    SOUL_SPEED: Enchantment;
    SWEEPING_EDGE: Enchantment;
    THORNS: Enchantment;
    VANISHING_CURSE: Enchantment;
    WATER_WORKER: Enchantment;
}

// org.bukkit.configuration.file.FileConfiguration
declare interface FileConfiguration extends MemoryConfiguration {
    saveToString(): string;
    loadFromString(s: string): void;
    load(file: File): void;
    load(reader: Reader): void;
    load(s: string): void;
    save(file: File): void;
    save(s: string): void;
}

// org.bukkit.event.entity.EntityPortalExitEvent
declare interface EntityPortalExitEvent extends EntityTeleportEvent {
    getAfter(): Vector;
    getBefore(): Vector;
    setAfter(vector: Vector): void;
}

// org.bukkit.material.Ladder
declare interface Ladder extends SimpleAttachableMaterialData {
    getAttachedFace(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.event.player.PlayerPortalEvent
declare interface PlayerPortalEvent extends PlayerTeleportEvent {
    getCanCreatePortal(): boolean;
    getCreationRadius(): number;
    getSearchRadius(): number;
    setCanCreatePortal(b: boolean): void;
    setCreationRadius(i: number): void;
    setSearchRadius(i: number): void;
}

// org.bukkit.event.vehicle.VehicleBlockCollisionEvent
declare interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
    getBlock(): Block;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.Bed
declare interface Bed extends TileState, Colorable {
}

// org.bukkit.entity.Squid
declare interface Squid extends WaterMob {
}

// org.bukkit.potion.PotionData
declare interface PotionData {
    isExtended(): boolean;
    isUpgraded(): boolean;
    getType(): PotionType;
}

// org.bukkit.Server
declare interface Server extends PluginMessageRecipient {
    addRecipe(recipe: Recipe): boolean;
    dispatchCommand(commandSender: CommandSender, s: string): boolean;
    getAllowEnd(): boolean;
    getAllowFlight(): boolean;
    getAllowNether(): boolean;
    getGenerateStructures(): boolean;
    getOnlineMode(): boolean;
    hasWhitelist(): boolean;
    isHardcore(): boolean;
    isPrimaryThread(): boolean;
    isWhitelistEnforced(): boolean;
    removeBossBar(namespacedKey: NamespacedKey): boolean;
    removeRecipe(namespacedKey: NamespacedKey): boolean;
    unloadWorld(s: string, b: boolean): boolean;
    unloadWorld(world: World, b: boolean): boolean;
    broadcast(s: string, s: string): number;
    broadcastMessage(s: string): number;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getIdleTimeout(): number;
    getMaxPlayers(): number;
    getMaxWorldSize(): number;
    getMonsterSpawnLimit(): number;
    getPort(): number;
    getSpawnRadius(): number;
    getTicksPerAmbientSpawns(): number;
    getTicksPerAnimalSpawns(): number;
    getTicksPerMonsterSpawns(): number;
    getTicksPerWaterAmbientSpawns(): number;
    getTicksPerWaterSpawns(): number;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getViewDistance(): number;
    getWaterAmbientSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getUpdateFolderFile(): File;
    getWorldContainer(): File;
    getTags(s: string, clazz: Class): Iterable;
    getBukkitVersion(): string;
    getIp(): string;
    getMotd(): string;
    getName(): string;
    getShutdownMessage(): string;
    getUpdateFolder(): string;
    getVersion(): string;
    getWorldType(): string;
    getOnlinePlayers(): Collection;
    advancementIterator(): Iterator;
    getBossBars(): Iterator;
    recipeIterator(): Iterator;
    getRecipesFor(itemStack: ItemStack): List;
    getWorlds(): List;
    matchPlayer(s: string): List;
    selectEntities(commandSender: CommandSender, s: string): List;
    getCommandAliases(): Map;
    getBannedPlayers(): Set;
    getIPBans(): Set;
    getOperators(): Set;
    getWhitelistedPlayers(): Set;
    getLogger(): Logger;
    getConnectionThrottle(): number;
    getBanList(type: Type): BanList;
    getDefaultGameMode(): GameMode;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(uUID: UUID): OfflinePlayer;
    getOfflinePlayers(): OfflinePlayer[];
    spigot(): Spigot;
    getTag(s: string, namespacedKey: NamespacedKey, clazz: Class): Tag;
    getUnsafe(): UnsafeValues;
    getWarningState(): WarningState;
    createWorld(worldCreator: WorldCreator): World;
    getWorld(s: string): World;
    getWorld(uUID: UUID): World;
    getAdvancement(namespacedKey: NamespacedKey): Advancement;
    createBlockData(s: string): BlockData;
    createBlockData(material: Material): BlockData;
    createBlockData(material: Material, s: string): BlockData;
    createBlockData(material: Material, consumer: Consumer): BlockData;
    createBossBar(s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): BossBar;
    createBossBar(namespacedKey: NamespacedKey, s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): KeyedBossBar;
    getBossBar(namespacedKey: NamespacedKey): KeyedBossBar;
    getConsoleSender(): ConsoleCommandSender;
    getPluginCommand(s: string): PluginCommand;
    getEntity(uUID: UUID): Entity;
    getPlayer(s: string): Player;
    getPlayer(uUID: UUID): Player;
    getPlayerExact(s: string): Player;
    createChunkData(world: World): ChunkData;
    getHelpMap(): HelpMap;
    createInventory(inventoryHolder: InventoryHolder, i: number): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType, s: string): Inventory;
    getItemFactory(): ItemFactory;
    craftItem(itemStack: ItemStack, world: World, player: Player): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType, i: number, b: boolean): ItemStack;
    createMerchant(s: string): Merchant;
    getCraftingRecipe(itemStack: ItemStack, world: World): Recipe;
    getRecipe(namespacedKey: NamespacedKey): Recipe;
    getLootTable(namespacedKey: NamespacedKey): LootTable;
    createMap(world: World): MapView;
    getMap(i: number): MapView;
    getPluginManager(): PluginManager;
    getServicesManager(): ServicesManager;
    getMessenger(): Messenger;
    getScheduler(): BukkitScheduler;
    getScoreboardManager(): ScoreboardManager;
    getStructureManager(): StructureManager;
    getServerIcon(): CachedServerIcon;
    loadServerIcon(bufferedImage: BufferedImage): CachedServerIcon;
    loadServerIcon(file: File): CachedServerIcon;
    banIP(s: string): void;
    clearRecipes(): void;
    reload(): void;
    reloadData(): void;
    reloadWhitelist(): void;
    resetRecipes(): void;
    savePlayers(): void;
    setDefaultGameMode(gameMode: GameMode): void;
    setIdleTimeout(i: number): void;
    setSpawnRadius(i: number): void;
    setWhitelist(b: boolean): void;
    setWhitelistEnforced(b: boolean): void;
    shutdown(): void;
    unbanIP(s: string): void;
    BROADCAST_CHANNEL_ADMINISTRATIVE: string;
    BROADCAST_CHANNEL_USERS: string;
}

// org.bukkit.entity.Zombie
declare interface Zombie extends Monster, Ageable {
    isBaby(): boolean;
    isConverting(): boolean;
    isVillager(): boolean;
    getConversionTime(): number;
    getVillagerProfession(): Profession;
    setBaby(b: boolean): void;
    setConversionTime(i: number): void;
    setVillager(b: boolean): void;
    setVillagerProfession(profession: Profession): void;
}

// org.bukkit.command.MultipleCommandAlias
declare interface MultipleCommandAlias extends Command {
    getCommands(): Command[];
}

// org.bukkit.entity.Horse
declare interface Horse extends AbstractHorse {
    isCarryingChest(): boolean;
    getColor(): Color;
    getStyle(): Style;
    getInventory(): HorseInventory;
    setCarryingChest(b: boolean): void;
    setColor(color: Color): void;
    setStyle(style: Style): void;
    getInventory(): AbstractHorseInventory;
    getInventory(): Inventory;
}

// org.bukkit.material.Tripwire
declare interface Tripwire extends MaterialData {
    isActivated(): boolean;
    isObjectTriggering(): boolean;
    setActivated(b: boolean): void;
    setObjectTriggering(b: boolean): void;
}

// org.bukkit.configuration.MemorySection
declare interface MemorySection extends ConfigurationSection {
    contains(s: string): boolean;
    contains(s: string, b: boolean): boolean;
    getBoolean(s: string): boolean;
    getBoolean(s: string, b: boolean): boolean;
    isBoolean(s: string): boolean;
    isColor(s: string): boolean;
    isConfigurationSection(s: string): boolean;
    isDouble(s: string): boolean;
    isInt(s: string): boolean;
    isItemStack(s: string): boolean;
    isList(s: string): boolean;
    isLocation(s: string): boolean;
    isLong(s: string): boolean;
    isOfflinePlayer(s: string): boolean;
    isSet(s: string): boolean;
    isString(s: string): boolean;
    isVector(s: string): boolean;
    getDouble(s: string): number;
    getDouble(s: string, d: number): number;
    getInt(s: string): number;
    getInt(s: string, i: number): number;
    get(s: string): any;
    get(s: string, object: any): any;
    getObject(s: string, clazz: Class): any;
    getObject(s: string, clazz: Class, object: any): any;
    getCurrentPath(): string;
    getName(): string;
    getString(s: string): string;
    getString(s: string, s: string): string;
    getBooleanList(s: string): List;
    getByteList(s: string): List;
    getCharacterList(s: string): List;
    getDoubleList(s: string): List;
    getFloatList(s: string): List;
    getIntegerList(s: string): List;
    getList(s: string): List;
    getList(s: string, list: List): List;
    getLongList(s: string): List;
    getMapList(s: string): List;
    getShortList(s: string): List;
    getStringList(s: string): List;
    getValues(b: boolean): Map;
    getKeys(b: boolean): Set;
    getLong(s: string): number;
    getLong(s: string, l: number): number;
    getColor(s: string): Color;
    getColor(s: string, color: Color): Color;
    getLocation(s: string): Location;
    getLocation(s: string, location: Location): Location;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(s: string, offlinePlayer: OfflinePlayer): OfflinePlayer;
    getRoot(): Configuration;
    createSection(s: string): ConfigurationSection;
    createSection(s: string, map: Map): ConfigurationSection;
    getConfigurationSection(s: string): ConfigurationSection;
    getDefaultSection(): ConfigurationSection;
    getParent(): ConfigurationSection;
    getSerializable(s: string, clazz: Class): ConfigurationSerializable;
    getSerializable(s: string, clazz: Class, configurationSerializable: ConfigurationSerializable): ConfigurationSerializable;
    getItemStack(s: string): ItemStack;
    getItemStack(s: string, itemStack: ItemStack): ItemStack;
    getVector(s: string): Vector;
    getVector(s: string, vector: Vector): Vector;
    createPath(configurationSection: ConfigurationSection, s: string): string;
    createPath(configurationSection: ConfigurationSection, s: string, configurationSection: ConfigurationSection): string;
    addDefault(s: string, object: any): void;
    set(s: string, object: any): void;
}

// org.bukkit.event.player.PlayerInteractEvent
declare interface PlayerInteractEvent extends PlayerEvent, Cancellable {
    hasBlock(): boolean;
    hasItem(): boolean;
    isBlockInHand(): boolean;
    isCancelled(): boolean;
    getMaterial(): Material;
    getClickedBlock(): Block;
    getBlockFace(): BlockFace;
    useInteractedBlock(): Result;
    useItemInHand(): Result;
    getHandlers(): HandlerList;
    getAction(): Action;
    getHand(): EquipmentSlot;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setUseInteractedBlock(result: Result): void;
    setUseItemInHand(result: Result): void;
}

// org.bukkit.event.inventory.InventoryCreativeEvent
declare interface InventoryCreativeEvent extends InventoryClickEvent {
}

// org.bukkit.command.PluginCommand
declare interface PluginCommand extends Command, PluginIdentifiableCommand {
    getExecutor(): CommandExecutor;
    getTabCompleter(): TabCompleter;
    getPlugin(): Plugin;
    setExecutor(commandExecutor: CommandExecutor): void;
    setTabCompleter(tabCompleter: TabCompleter): void;
}

// org.bukkit.event.inventory.InventoryClickEvent
declare interface InventoryClickEvent extends InventoryInteractEvent {
    isLeftClick(): boolean;
    isRightClick(): boolean;
    isShiftClick(): boolean;
    getHotbarButton(): number;
    getRawSlot(): number;
    getSlot(): number;
    getHandlers(): HandlerList;
    getClick(): ClickType;
    getAction(): InventoryAction;
    getSlotType(): SlotType;
    getClickedInventory(): Inventory;
    getCurrentItem(): ItemStack;
    getCursor(): ItemStack;
    getHandlerList(): HandlerList;
    setCurrentItem(itemStack: ItemStack): void;
    setCursor(itemStack: ItemStack): void;
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
    isPowered(): boolean;
    getExplosionRadius(): number;
    getFuseTicks(): number;
    getMaxFuseTicks(): number;
    explode(): void;
    ignite(): void;
    setExplosionRadius(i: number): void;
    setFuseTicks(i: number): void;
    setMaxFuseTicks(i: number): void;
    setPowered(b: boolean): void;
}

// org.bukkit.event.server.ServerCommandEvent
declare interface ServerCommandEvent extends ServerEvent, Cancellable {
    isCancelled(): boolean;
    getCommand(): string;
    getSender(): CommandSender;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setCommand(s: string): void;
}

// org.bukkit.event.player.PlayerAnimationEvent
declare interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getAnimationType(): PlayerAnimationType;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getDeathAnimationTicks(): number;
    getDragonBattle(): DragonBattle;
    getPhase(): Phase;
    setPhase(phase: Phase): void;
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
    isSheared(): boolean;
    setSheared(b: boolean): void;
}

// org.bukkit.block.data.type.Sapling
declare interface Sapling extends BlockData {
    getMaximumStage(): number;
    getStage(): number;
    setStage(i: number): void;
}

// org.bukkit.event.entity.BatToggleSleepEvent
declare interface BatToggleSleepEvent extends EntityEvent, Cancellable {
    isAwake(): boolean;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.configuration.file.FileConfigurationOptions
declare interface FileConfigurationOptions extends MemoryConfigurationOptions {
    copyHeader(): boolean;
    header(): string;
    copyHeader(b: boolean): FileConfigurationOptions;
    header(s: string): FileConfigurationOptions;
}

// org.bukkit.conversations.Conversation
declare interface Conversation {
    isLocalEchoEnabled(): boolean;
    isModal(): boolean;
    getCancellers(): List;
    getForWhom(): Conversable;
    getState(): ConversationState;
    getContext(): ConversationContext;
    getPrefix(): ConversationPrefix;
    abandon(conversationAbandonedEvent: ConversationAbandonedEvent): void;
    addConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): void;
    removeConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): void;
    abandon(): void;
    acceptInput(s: string): void;
    begin(): void;
    outputNextPrompt(): void;
    setLocalEchoEnabled(b: boolean): void;
}

// org.bukkit.attribute.AttributeModifier
declare interface AttributeModifier extends ConfigurationSerializable {
    getAmount(): number;
    getName(): string;
    serialize(): Map;
    getUniqueId(): UUID;
    getOperation(): Operation;
    getSlot(): EquipmentSlot;
    deserialize(map: Map): AttributeModifier;
}

// org.bukkit.event.vehicle.VehicleDamageEvent
declare interface VehicleDamageEvent extends VehicleEvent, Cancellable {
    isCancelled(): boolean;
    getDamage(): number;
    getAttacker(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setDamage(d: number): void;
}

// org.bukkit.attribute.AttributeInstance
declare interface AttributeInstance {
    getBaseValue(): number;
    getDefaultValue(): number;
    getValue(): number;
    getModifiers(): Collection;
    getAttribute(): Attribute;
    addModifier(attributeModifier: AttributeModifier): void;
    removeModifier(attributeModifier: AttributeModifier): void;
    setBaseValue(d: number): void;
}

// org.bukkit.loot.Lootable
declare interface Lootable {
    getSeed(): number;
    getLootTable(): LootTable;
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
    isOp(): boolean;
    setOp(b: boolean): void;
}

// org.bukkit.scoreboard.RenderType
declare enum RenderType {
    INTEGER,
    HEARTS,
}

// org.bukkit.event.player.PlayerItemBreakEvent
declare interface PlayerItemBreakEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getBrokenItem(): ItemStack;
    getHandlerList(): HandlerList;
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
    hasMetadata(object: any, s: string): boolean;
    getMetadata(object: any, s: string): List;
    invalidateAll(plugin: Plugin): void;
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
    isHatching(): boolean;
    getNumHatches(): number;
    getEgg(): Egg;
    getHatchingType(): EntityType;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setHatching(b: boolean): void;
    setHatchingType(entityType: EntityType): void;
    setNumHatches(b: number): void;
}

// org.bukkit.material.Vine
declare interface Vine extends MaterialData {
    isOnFace(blockFace: BlockFace): boolean;
    putOnFace(blockFace: BlockFace): void;
    removeFromFace(blockFace: BlockFace): void;
}

// org.bukkit.event.player.PlayerDropItemEvent
declare interface PlayerDropItemEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getItemDrop(): Item;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.command.ConsoleCommandSender
declare interface ConsoleCommandSender extends CommandSender, Conversable {
}

// org.bukkit.block.EnchantingTable
declare interface EnchantingTable extends TileState, Nameable {
}

// org.bukkit.entity.Hoglin
declare interface Hoglin extends Animals {
    isAbleToBeHunted(): boolean;
    isConverting(): boolean;
    isImmuneToZombification(): boolean;
    getConversionTime(): number;
    setConversionTime(i: number): void;
    setImmuneToZombification(b: boolean): void;
    setIsAbleToBeHunted(b: boolean): void;
}

// org.bukkit.block.data.type.Observer
declare interface Observer extends Directional, Powerable {
}

// org.bukkit.event.entity.EntityBreedEvent
declare interface EntityBreedEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getExperience(): number;
    getBreeder(): LivingEntity;
    getFather(): LivingEntity;
    getMother(): LivingEntity;
    getHandlers(): HandlerList;
    getBredWith(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setExperience(i: number): void;
}

// org.bukkit.block.data.Rail
declare interface Rail extends Waterlogged {
    getShapes(): Set;
    getShape(): Shape;
    setShape(shape: Shape): void;
}

// org.bukkit.event.entity.EntityChangeBlockEvent
declare interface EntityChangeBlockEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getTo(): Material;
    getBlock(): Block;
    getBlockData(): BlockData;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.entity.EntityShootBowEvent
declare interface EntityShootBowEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    shouldConsumeItem(): boolean;
    getForce(): number;
    getProjectile(): Entity;
    getHandlers(): HandlerList;
    getHand(): EquipmentSlot;
    getBow(): ItemStack;
    getConsumable(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setConsumeItem(b: boolean): void;
    setProjectile(entity: Entity): void;
}

// org.bukkit.entity.minecart.SpawnerMinecart
declare interface SpawnerMinecart extends Minecart {
}

// org.bukkit.material.Observer
declare interface Observer extends MaterialData, Directional, Redstone {
    isPowered(): boolean;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.entity.minecart.PoweredMinecart
declare interface PoweredMinecart extends Minecart {
    getFuel(): number;
    setFuel(i: number): void;
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
    isFacePainted(blockFace: BlockFace): boolean;
    isStem(): boolean;
    getPaintedFaces(): Set;
    getBlockTexture(): MushroomBlockTexture;
    setBlockTexture(mushroomBlockTexture: MushroomBlockTexture): void;
    setFacePainted(blockFace: BlockFace, b: boolean): void;
    setStem(): void;
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
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setItem(itemStack: ItemStack): void;
}

// org.bukkit.plugin.IllegalPluginAccessException
declare interface IllegalPluginAccessException extends RuntimeException {
}

// org.bukkit.entity.memory.MemoryKey
declare interface MemoryKey extends Keyed {
    getMemoryClass(): Class;
    getKey(): NamespacedKey;
    values(): Set;
    getByKey(namespacedKey: NamespacedKey): MemoryKey;
    ADMIRING_DISABLED: MemoryKey;
    ADMIRING_ITEM: MemoryKey;
    ANGRY_AT: MemoryKey;
    GOLEM_DETECTED_RECENTLY: MemoryKey;
    HAS_HUNTING_COOLDOWN: MemoryKey;
    HOME: MemoryKey;
    HUNTED_RECENTLY: MemoryKey;
    IS_TEMPTED: MemoryKey;
    JOB_SITE: MemoryKey;
    LAST_SLEPT: MemoryKey;
    LAST_WOKEN: MemoryKey;
    LAST_WORKED_AT_POI: MemoryKey;
    LONG_JUMP_COOLING_DOWN: MemoryKey;
    MEETING_POINT: MemoryKey;
    PLAY_DEAD_TICKS: MemoryKey;
    POTENTIAL_JOB_SITE: MemoryKey;
    RAM_COOLDOWN_TICKS: MemoryKey;
    TEMPTATION_COOLDOWN_TICKS: MemoryKey;
    UNIVERSAL_ANGER: MemoryKey;
}

// org.bukkit.event.entity.EntityRegainHealthEvent
declare interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getAmount(): number;
    getHandlers(): HandlerList;
    getRegainReason(): RegainReason;
    getHandlerList(): HandlerList;
    setAmount(d: number): void;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.entity.EntityTeleportEvent
declare interface EntityTeleportEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getFrom(): Location;
    getTo(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setFrom(location: Location): void;
    setTo(location: Location): void;
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
    getTier(): number;
    getEntitiesInRange(): Collection;
    getPrimaryEffect(): PotionEffect;
    getSecondaryEffect(): PotionEffect;
    setPrimaryEffect(potionEffectType: PotionEffectType): void;
    setSecondaryEffect(potionEffectType: PotionEffectType): void;
}

// org.bukkit.plugin.PluginLoader
declare interface PluginLoader {
    createRegisteredListeners(listener: Listener, plugin: Plugin): Map;
    getPluginFileFilters(): Pattern[];
    loadPlugin(file: File): Plugin;
    getPluginDescription(file: File): PluginDescriptionFile;
    disablePlugin(plugin: Plugin): void;
    enablePlugin(plugin: Plugin): void;
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
    getCarriedBlock(): BlockData;
    getCarriedMaterial(): MaterialData;
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
    getExperience(): number;
    getCookingTime(): number;
    getGroup(): string;
    getKey(): NamespacedKey;
    setInput(material: Material): CookingRecipe;
    setInputChoice(recipeChoice: RecipeChoice): CookingRecipe;
    getInput(): ItemStack;
    getResult(): ItemStack;
    getInputChoice(): RecipeChoice;
    setCookingTime(i: number): void;
    setExperience(f: number): void;
    setGroup(s: string): void;
}

// org.bukkit.Raid
declare interface Raid {
    isStarted(): boolean;
    getTotalHealth(): number;
    getBadOmenLevel(): number;
    getSpawnedGroups(): number;
    getTotalGroups(): number;
    getTotalWaves(): number;
    getRaiders(): List;
    getHeroes(): Set;
    getActiveTicks(): number;
    getLocation(): Location;
    getStatus(): RaidStatus;
    setBadOmenLevel(i: number): void;
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
    getFlower(): Location;
    setFlower(location: Location): void;
}

// org.bukkit.event.entity.PlayerLeashEntityEvent
declare interface PlayerLeashEntityEvent extends Event, Cancellable {
    isCancelled(): boolean;
    getPlayer(): Player;
    getEntity(): Entity;
    getLeashHolder(): Entity;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.data.Powerable
declare interface Powerable extends BlockData {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

// org.bukkit.entity.TNTPrimed
declare interface TNTPrimed extends Explosive {
    getFuseTicks(): number;
    getSource(): Entity;
    setFuseTicks(i: number): void;
    setSource(entity: Entity): void;
}

// org.bukkit.conversations.StringPrompt
declare interface StringPrompt extends Prompt {
    blocksForInput(conversationContext: ConversationContext): boolean;
}

// org.bukkit.material.Directional
declare interface Directional {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.entity.ShulkerBullet
declare interface ShulkerBullet extends Projectile {
    getTarget(): Entity;
    setTarget(entity: Entity): void;
}

// org.bukkit.event.vehicle.VehicleDestroyEvent
declare interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
    isCancelled(): boolean;
    getAttacker(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.TippedArrow
declare interface TippedArrow extends Arrow {
}

// org.bukkit.event.entity.EntityBreakDoorEvent
declare interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
}

// org.bukkit.conversations.RegexPrompt
declare interface RegexPrompt extends ValidatingPrompt {
}

// org.bukkit.event.enchantment.EnchantItemEvent
declare interface EnchantItemEvent extends InventoryEvent, Cancellable {
    isCancelled(): boolean;
    getExpLevelCost(): number;
    whichButton(): number;
    getEnchantsToAdd(): Map;
    getEnchantBlock(): Block;
    getEnchanter(): Player;
    getItem(): ItemStack;
    setCancelled(b: boolean): void;
    setExpLevelCost(i: number): void;
}

// org.bukkit.event.block.NotePlayEvent
declare interface NotePlayEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getInstrument(): Instrument;
    getNote(): Note;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setInstrument(instrument: Instrument): void;
    setNote(note: Note): void;
}

// org.bukkit.metadata.MetadataValueAdapter
declare interface MetadataValueAdapter extends MetadataValue {
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asString(): string;
    asLong(): number;
    getOwningPlugin(): Plugin;
    asShort(): number;
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
    contains(d: number, d: number, d: number): boolean;
    contains(boundingBox: BoundingBox): boolean;
    contains(vector: Vector): boolean;
    contains(vector: Vector, vector: Vector): boolean;
    overlaps(boundingBox: BoundingBox): boolean;
    overlaps(vector: Vector, vector: Vector): boolean;
    getCenterX(): number;
    getCenterY(): number;
    getCenterZ(): number;
    getHeight(): number;
    getMaxX(): number;
    getMaxY(): number;
    getMaxZ(): number;
    getMinX(): number;
    getMinY(): number;
    getMinZ(): number;
    getVolume(): number;
    getWidthX(): number;
    getWidthZ(): number;
    serialize(): Map;
    copy(boundingBox: BoundingBox): BoundingBox;
    expand(d: number): BoundingBox;
    expand(d: number, d: number, d: number): BoundingBox;
    expand(d: number, d: number, d: number, d: number): BoundingBox;
    expand(d: number, d: number, d: number, d: number, d: number, d: number): BoundingBox;
    expand(blockFace: BlockFace, d: number): BoundingBox;
    expand(vector: Vector): BoundingBox;
    expand(vector: Vector, d: number): BoundingBox;
    expandDirectional(d: number, d: number, d: number): BoundingBox;
    expandDirectional(vector: Vector): BoundingBox;
    intersection(boundingBox: BoundingBox): BoundingBox;
    resize(d: number, d: number, d: number, d: number, d: number, d: number): BoundingBox;
    shift(d: number, d: number, d: number): BoundingBox;
    shift(location: Location): BoundingBox;
    shift(vector: Vector): BoundingBox;
    union(d: number, d: number, d: number): BoundingBox;
    union(location: Location): BoundingBox;
    union(boundingBox: BoundingBox): BoundingBox;
    union(vector: Vector): BoundingBox;
    rayTrace(vector: Vector, vector: Vector, d: number): RayTraceResult;
    getCenter(): Vector;
    getMax(): Vector;
    getMin(): Vector;
    deserialize(map: Map): BoundingBox;
    of(location: Location, d: number, d: number, d: number): BoundingBox;
    of(location: Location, location: Location): BoundingBox;
    of(block: Block): BoundingBox;
    of(block: Block, block: Block): BoundingBox;
    of(vector: Vector, d: number, d: number, d: number): BoundingBox;
    of(vector: Vector, vector: Vector): BoundingBox;
}

// org.bukkit.block.Comparator
declare interface Comparator extends TileState {
}

// org.bukkit.event.player.PlayerMoveEvent
declare interface PlayerMoveEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getFrom(): Location;
    getTo(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setFrom(location: Location): void;
    setTo(location: Location): void;
}

// org.bukkit.material.CocoaPlant
declare interface CocoaPlant extends MaterialData, Directional, Attachable {
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    getSize(): CocoaPlantSize;
    setFacingDirection(blockFace: BlockFace): void;
    setSize(cocoaPlantSize: CocoaPlantSize): void;
}

// org.bukkit.entity.Animals
declare interface Animals extends Breedable {
    isBreedItem(material: Material): boolean;
    isBreedItem(itemStack: ItemStack): boolean;
    isLoveMode(): boolean;
    getLoveModeTicks(): number;
    getBreedCause(): UUID;
    setBreedCause(uUID: UUID): void;
    setLoveModeTicks(i: number): void;
}

// org.bukkit.event.entity.EntityPotionEffectEvent
declare interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    isOverride(): boolean;
    getHandlers(): HandlerList;
    getAction(): Action;
    getCause(): Cause;
    getNewEffect(): PotionEffect;
    getOldEffect(): PotionEffect;
    getModifiedType(): PotionEffectType;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setOverride(b: boolean): void;
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
    isPowered(): boolean;
    isSticky(): boolean;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
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
    canSee(commandSender: CommandSender): boolean;
    getFullText(commandSender: CommandSender): string;
    getName(): string;
    getShortText(): string;
    amendCanSee(s: string): void;
    amendTopic(s: string, s: string): void;
}

// org.bukkit.entity.GlowItemFrame
declare interface GlowItemFrame extends ItemFrame {
}

// org.bukkit.event.player.PlayerBedLeaveEvent
declare interface PlayerBedLeaveEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    shouldSetSpawnLocation(): boolean;
    getBed(): Block;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setSpawnLocation(b: boolean): void;
}

// org.bukkit.block.data.type.PointedDripstone
declare interface PointedDripstone extends Waterlogged {
    getVerticalDirections(): Set;
    getVerticalDirection(): BlockFace;
    getThickness(): Thickness;
    setThickness(thickness: Thickness): void;
    setVerticalDirection(blockFace: BlockFace): void;
}

// org.bukkit.event.entity.ArrowBodyCountChangeEvent
declare interface ArrowBodyCountChangeEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    isReset(): boolean;
    getNewAmount(): number;
    getOldAmount(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setNewAmount(i: number): void;
}

// org.bukkit.event.inventory.InventoryEvent
declare interface InventoryEvent extends Event {
    getViewers(): List;
    getInventory(): Inventory;
    getView(): InventoryView;
    getHandlerList(): HandlerList;
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
    isCancelled(): boolean;
    getEntered(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.inventory.meta.FireworkEffectMeta
declare interface FireworkEffectMeta extends ItemMeta {
    hasEffect(): boolean;
    getEffect(): FireworkEffect;
    clone(): FireworkEffectMeta;
    setEffect(fireworkEffect: FireworkEffect): void;
    clone(): any;
    clone(): ItemMeta;
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
    getAge(): number;
    getMaximumAge(): number;
    setAge(i: number): void;
}

// org.bukkit.entity.TraderLlama
declare interface TraderLlama extends Llama {
}

// org.bukkit.material.SmoothBrick
declare interface SmoothBrick extends TexturedMaterial {
}

// org.bukkit.plugin.RegisteredListener
declare interface RegisteredListener {
    isIgnoringCancelled(): boolean;
    getPriority(): EventPriority;
    getListener(): Listener;
    getPlugin(): Plugin;
    callEvent(event: Event): void;
}

// org.bukkit.block.data.type.BubbleColumn
declare interface BubbleColumn extends BlockData {
    isDrag(): boolean;
    setDrag(b: boolean): void;
}

// org.bukkit.entity.Chicken
declare interface Chicken extends Animals {
}

// org.bukkit.event.entity.VillagerAcquireTradeEvent
declare interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getRecipe(): MerchantRecipe;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setRecipe(merchantRecipe: MerchantRecipe): void;
}

// org.bukkit.inventory.meta.Repairable
declare interface Repairable {
    hasRepairCost(): boolean;
    getRepairCost(): number;
    clone(): Repairable;
    setRepairCost(i: number): void;
    clone(): any;
}

// org.bukkit.FireworkEffect
declare interface FireworkEffect extends ConfigurationSerializable {
    hasFlicker(): boolean;
    hasTrail(): boolean;
    getColors(): List;
    getFadeColors(): List;
    serialize(): Map;
    getType(): Type;
    builder(): Builder;
    deserialize(map: Map): ConfigurationSerializable;
}

// org.bukkit.entity.Vex
declare interface Vex extends Monster {
    isCharging(): boolean;
    setCharging(b: boolean): void;
}

// org.bukkit.event.world.TimeSkipEvent
declare interface TimeSkipEvent extends WorldEvent, Cancellable {
    isCancelled(): boolean;
    getSkipAmount(): number;
    getHandlers(): HandlerList;
    getSkipReason(): SkipReason;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getComplexType(): Class;
    getPrimitiveType(): Class;
    fromPrimitive(object: any, persistentDataAdapterContext: PersistentDataAdapterContext): any;
    toPrimitive(object: any, persistentDataAdapterContext: PersistentDataAdapterContext): any;
    BYTE: PersistentDataType;
    BYTE_ARRAY: PersistentDataType;
    DOUBLE: PersistentDataType;
    FLOAT: PersistentDataType;
    INTEGER: PersistentDataType;
    INTEGER_ARRAY: PersistentDataType;
    LONG: PersistentDataType;
    LONG_ARRAY: PersistentDataType;
    SHORT: PersistentDataType;
    STRING: PersistentDataType;
    TAG_CONTAINER: PersistentDataType;
    TAG_CONTAINER_ARRAY: PersistentDataType;
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
    numberOfPatterns(): number;
    getPatterns(): List;
    getBaseColor(): DyeColor;
    getPattern(i: number): Pattern;
    removePattern(i: number): Pattern;
    addPattern(pattern: Pattern): void;
    setBaseColor(dyeColor: DyeColor): void;
    setPattern(i: number, pattern: Pattern): void;
    setPatterns(list: List): void;
}

// org.bukkit.GameEvent
declare interface GameEvent extends Keyed {
    getKey(): NamespacedKey;
    values(): Collection;
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
    isCancelled(): boolean;
    getTicksInLove(): number;
    getHumanEntity(): HumanEntity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setTicksInLove(i: number): void;
}

// org.bukkit.event.player.PlayerUnregisterChannelEvent
declare interface PlayerUnregisterChannelEvent extends PlayerChannelEvent {
}

// org.bukkit.block.data.type.RedstoneWallTorch
declare interface RedstoneWallTorch extends Directional, Lightable {
}

// org.bukkit.event.EventHandler
declare interface EventHandler extends Annotation {
    ignoreCancelled(): boolean;
    priority(): EventPriority;
}

// org.bukkit.entity.Boat
declare interface Boat extends Vehicle {
    getWorkOnLand(): boolean;
    getMaxSpeed(): number;
    getOccupiedDeceleration(): number;
    getUnoccupiedDeceleration(): number;
    getWoodType(): TreeSpecies;
    setMaxSpeed(d: number): void;
    setOccupiedDeceleration(d: number): void;
    setUnoccupiedDeceleration(d: number): void;
    setWoodType(treeSpecies: TreeSpecies): void;
    setWorkOnLand(b: boolean): void;
}

// org.bukkit.event.player.PlayerToggleSneakEvent
declare interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    isSneaking(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.Sign
declare interface Sign extends TileState, Colorable {
    isEditable(): boolean;
    isGlowingText(): boolean;
    getLine(i: number): string;
    getLines(): string[];
    setEditable(b: boolean): void;
    setGlowingText(b: boolean): void;
    setLine(i: number, s: string): void;
}

// org.bukkit.material.Furnace
declare interface Furnace extends FurnaceAndDispenser {
}

// org.bukkit.event.entity.StriderTemperatureChangeEvent
declare interface StriderTemperatureChangeEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    isShivering(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.data.type.Candle
declare interface Candle extends Lightable, Waterlogged {
    getCandles(): number;
    getMaximumCandles(): number;
    setCandles(i: number): void;
}

// org.bukkit.plugin.messaging.PluginMessageListener
declare interface PluginMessageListener {
    onPluginMessageReceived(s: string, player: Player, b: number): void;
}

// org.bukkit.material.Dispenser
declare interface Dispenser extends FurnaceAndDispenser {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
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
    isTamed(): boolean;
    getOwner(): AnimalTamer;
    setOwner(animalTamer: AnimalTamer): void;
    setTamed(b: boolean): void;
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
    isCancelled(): boolean;
    getRadius(): number;
    getEvent(): GameEvent;
    getLocation(): Location;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    isCancelled(): boolean;
    getExpToDrop(): number;
    getCaught(): Entity;
    getHook(): FishHook;
    getHandlers(): HandlerList;
    getState(): State;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setExpToDrop(i: number): void;
}

// org.bukkit.material.WoodenStep
declare interface WoodenStep extends Wood {
    isInverted(): boolean;
    setInverted(b: boolean): void;
}

// org.bukkit.block.DaylightDetector
declare interface DaylightDetector extends TileState {
}

// org.bukkit.event.player.PlayerStatisticIncrementEvent
declare interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getNewValue(): number;
    getPreviousValue(): number;
    getMaterial(): Material;
    getStatistic(): Statistic;
    getEntityType(): EntityType;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.material.Dye
declare interface Dye extends MaterialData, Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

// org.bukkit.event.entity.EntityPoseChangeEvent
declare interface EntityPoseChangeEvent extends EntityEvent {
    getPose(): Pose;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.block.data.type.Wall
declare interface Wall extends Waterlogged {
    isUp(): boolean;
    getHeight(blockFace: BlockFace): Height;
    setHeight(blockFace: BlockFace, height: Height): void;
    setUp(b: boolean): void;
}

// org.bukkit.inventory.meta.BlockDataMeta
declare interface BlockDataMeta extends ItemMeta {
    hasBlockData(): boolean;
    getBlockData(material: Material): BlockData;
    setBlockData(blockData: BlockData): void;
}

// org.bukkit.event.inventory.PrepareItemCraftEvent
declare interface PrepareItemCraftEvent extends InventoryEvent {
    isRepair(): boolean;
    getRecipe(): Recipe;
}

// org.bukkit.StructureType
declare interface StructureType {
    getName(): string;
    getMapIcon(): Type;
    getStructureTypes(): Map;
    BASTION_REMNANT: StructureType;
    BURIED_TREASURE: StructureType;
    DESERT_PYRAMID: StructureType;
    END_CITY: StructureType;
    IGLOO: StructureType;
    JUNGLE_PYRAMID: StructureType;
    MINESHAFT: StructureType;
    NETHER_FORTRESS: StructureType;
    NETHER_FOSSIL: StructureType;
    OCEAN_MONUMENT: StructureType;
    OCEAN_RUIN: StructureType;
    PILLAGER_OUTPOST: StructureType;
    RUINED_PORTAL: StructureType;
    SHIPWRECK: StructureType;
    STRONGHOLD: StructureType;
    SWAMP_HUT: StructureType;
    VILLAGE: StructureType;
    WOODLAND_MANSION: StructureType;
}

// org.bukkit.inventory.meta.BookMeta
declare interface BookMeta extends ItemMeta {
    hasAuthor(): boolean;
    hasGeneration(): boolean;
    hasPages(): boolean;
    hasTitle(): boolean;
    setTitle(s: string): boolean;
    getPageCount(): number;
    getAuthor(): string;
    getPage(i: number): string;
    getTitle(): string;
    getPages(): List;
    clone(): BookMeta;
    getGeneration(): Generation;
    spigot(): Spigot;
    addPage(s: string): void;
    setAuthor(s: string): void;
    setGeneration(generation: Generation): void;
    setPage(i: number, s: string): void;
    setPages(s: string): void;
    setPages(list: List): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.block.data.type.Fire
declare interface Fire extends Ageable, MultipleFacing {
}

// org.bukkit.entity.Husk
declare interface Husk extends Zombie {
    isConverting(): boolean;
    getConversionTime(): number;
    setConversionTime(i: number): void;
}

// org.bukkit.inventory.meta.PotionMeta
declare interface PotionMeta extends ItemMeta {
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    clearCustomEffects(): boolean;
    hasColor(): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    setMainEffect(potionEffectType: PotionEffectType): boolean;
    getCustomEffects(): List;
    getColor(): Color;
    clone(): PotionMeta;
    getBasePotionData(): PotionData;
    setBasePotionData(potionData: PotionData): void;
    setColor(color: Color): void;
    clone(): any;
    clone(): ItemMeta;
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
    isBoundingBoxVisible(): boolean;
    isIgnoreEntities(): boolean;
    isShowAir(): boolean;
    getIntegrity(): number;
    getAuthor(): string;
    getMetadata(): string;
    getStructureName(): string;
    getSeed(): number;
    getMirror(): Mirror;
    getRotation(): StructureRotation;
    getUsageMode(): UsageMode;
    getRelativePosition(): BlockVector;
    getStructureSize(): BlockVector;
    setAuthor(s: string): void;
    setAuthor(livingEntity: LivingEntity): void;
    setBoundingBoxVisible(b: boolean): void;
    setIgnoreEntities(b: boolean): void;
    setIntegrity(f: number): void;
    setMetadata(s: string): void;
    setMirror(mirror: Mirror): void;
    setRelativePosition(blockVector: BlockVector): void;
    setRotation(structureRotation: StructureRotation): void;
    setSeed(l: number): void;
    setShowAir(b: boolean): void;
    setStructureName(s: string): void;
    setStructureSize(blockVector: BlockVector): void;
    setUsageMode(usageMode: UsageMode): void;
}

// org.bukkit.event.player.PlayerItemHeldEvent
declare interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getNewSlot(): number;
    getPreviousSlot(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.Lidded
declare interface Lidded {
    close(): void;
    open(): void;
}

// org.bukkit.inventory.meta.SuspiciousStewMeta
declare interface SuspiciousStewMeta extends ItemMeta {
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    clearCustomEffects(): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    getCustomEffects(): List;
    clone(): SuspiciousStewMeta;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.block.data.type.Campfire
declare interface Campfire extends Directional, Lightable, Waterlogged {
    isSignalFire(): boolean;
    setSignalFire(b: boolean): void;
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
    generateEndPortal(b: boolean): boolean;
    hasBeenPreviouslyKilled(): boolean;
    setRespawnPhase(respawnPhase: RespawnPhase): boolean;
    getEndPortalLocation(): Location;
    getBossBar(): BossBar;
    getRespawnPhase(): RespawnPhase;
    getEnderDragon(): EnderDragon;
    initiateRespawn(): void;
    resetCrystals(): void;
}

// org.bukkit.event.player.PlayerKickEvent
declare interface PlayerKickEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getLeaveMessage(): string;
    getReason(): string;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setLeaveMessage(s: string): void;
    setReason(s: string): void;
}

// org.bukkit.inventory.meta.MapMeta
declare interface MapMeta extends ItemMeta {
    hasColor(): boolean;
    hasLocationName(): boolean;
    hasMapId(): boolean;
    hasMapView(): boolean;
    isScaling(): boolean;
    getMapId(): number;
    getLocationName(): string;
    getColor(): Color;
    clone(): MapMeta;
    getMapView(): MapView;
    setColor(color: Color): void;
    setLocationName(s: string): void;
    setMapId(i: number): void;
    setMapView(mapView: MapView): void;
    setScaling(b: boolean): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.entity.minecart.ExplosiveMinecart
declare interface ExplosiveMinecart extends Minecart {
}

// org.bukkit.inventory.FurnaceInventory
declare interface FurnaceInventory extends Inventory {
    getHolder(): Furnace;
    getFuel(): ItemStack;
    getResult(): ItemStack;
    getSmelting(): ItemStack;
    setFuel(itemStack: ItemStack): void;
    setResult(itemStack: ItemStack): void;
    setSmelting(itemStack: ItemStack): void;
    getHolder(): InventoryHolder;
}

// org.bukkit.inventory.LlamaInventory
declare interface LlamaInventory extends AbstractHorseInventory {
    getDecor(): ItemStack;
    setDecor(itemStack: ItemStack): void;
}

// org.bukkit.event.entity.ItemDespawnEvent
declare interface ItemDespawnEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getLocation(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.Steerable
declare interface Steerable extends Animals {
    hasSaddle(): boolean;
    getBoostTicks(): number;
    getCurrentBoostTicks(): number;
    getSteerMaterial(): Material;
    setBoostTicks(i: number): void;
    setCurrentBoostTicks(i: number): void;
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
    getDespawnDelay(): number;
    setDespawnDelay(i: number): void;
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
    hasPermission(s: string): boolean;
    hasPermission(permission: Permission): boolean;
    isOp(): boolean;
    isPermissionSet(s: string): boolean;
    isPermissionSet(permission: Permission): boolean;
    getEffectivePermissions(): Set;
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean, i: number): PermissionAttachment;
    clearPermissions(): void;
    recalculatePermissions(): void;
    removeAttachment(permissionAttachment: PermissionAttachment): void;
    setOp(b: boolean): void;
}

// org.bukkit.block.data.Snowable
declare interface Snowable extends BlockData {
    isSnowy(): boolean;
    setSnowy(b: boolean): void;
}

// org.bukkit.enchantments.EnchantmentOffer
declare interface EnchantmentOffer {
    getCost(): number;
    getEnchantmentLevel(): number;
    getEnchantment(): Enchantment;
    setCost(i: number): void;
    setEnchantment(enchantment: Enchantment): void;
    setEnchantmentLevel(i: number): void;
}

// org.bukkit.inventory.BlockInventoryHolder
declare interface BlockInventoryHolder extends InventoryHolder {
    getBlock(): Block;
}

// org.bukkit.event.entity.EntityToggleGlideEvent
declare interface EntityToggleGlideEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    isGliding(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.conversations.ConversationAbandonedEvent
declare interface ConversationAbandonedEvent extends EventObject {
    gracefulExit(): boolean;
    getCanceller(): ConversationCanceller;
    getContext(): ConversationContext;
}

// org.bukkit.event.inventory.FurnaceSmeltEvent
declare interface FurnaceSmeltEvent extends BlockCookEvent {
}

// org.bukkit.event.entity.EntityToggleSwimEvent
declare interface EntityToggleSwimEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    isSwimming(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.entity.ThrownExpBottle
declare interface ThrownExpBottle extends ThrowableProjectile {
}

// org.bukkit.entity.Wither
declare interface Wither extends Monster, Boss {
}

// org.bukkit.material.Skull
declare interface Skull extends MaterialData, Directional {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.entity.SkeletonHorse
declare interface SkeletonHorse extends AbstractHorse {
}

// org.bukkit.entity.AbstractHorse
declare interface AbstractHorse extends Vehicle, InventoryHolder, Tameable {
    getJumpStrength(): number;
    getDomestication(): number;
    getMaxDomestication(): number;
    getVariant(): Variant;
    getInventory(): AbstractHorseInventory;
    setDomestication(i: number): void;
    setJumpStrength(d: number): void;
    setMaxDomestication(i: number): void;
    setVariant(variant: Variant): void;
    getInventory(): Inventory;
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
    getColor(): Color;
    getInventory(): LlamaInventory;
    setColor(color: Color): void;
    setStrength(i: number): void;
    getInventory(): AbstractHorseInventory;
    getInventory(): Inventory;
}

// org.bukkit.command.defaults.VersionCommand
declare interface VersionCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

// org.bukkit.event.player.PlayerCommandSendEvent
declare interface PlayerCommandSendEvent extends PlayerEvent {
    getCommands(): Collection;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.entity.Piglin
declare interface Piglin extends PiglinAbstract, InventoryHolder {
    addBarterMaterial(material: Material): boolean;
    addMaterialOfInterest(material: Material): boolean;
    isAbleToHunt(): boolean;
    removeBarterMaterial(material: Material): boolean;
    removeMaterialOfInterest(material: Material): boolean;
    getBarterList(): Set;
    getInterestList(): Set;
    setIsAbleToHunt(b: boolean): void;
}

// org.bukkit.event.block.FluidLevelChangeEvent
declare interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getNewData(): BlockData;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setNewData(blockData: BlockData): void;
}

// org.bukkit.Location
declare interface Location extends Cloneable, ConfigurationSerializable {
    isWorldLoaded(): boolean;
    distance(location: Location): number;
    distanceSquared(location: Location): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    length(): number;
    lengthSquared(): number;
    getPitch(): number;
    getYaw(): number;
    getBlockX(): number;
    getBlockY(): number;
    getBlockZ(): number;
    serialize(): Map;
    getChunk(): Chunk;
    add(d: number, d: number, d: number): Location;
    add(location: Location): Location;
    add(vector: Vector): Location;
    multiply(d: number): Location;
    setDirection(vector: Vector): Location;
    subtract(d: number, d: number, d: number): Location;
    subtract(location: Location): Location;
    subtract(vector: Vector): Location;
    zero(): Location;
    getWorld(): World;
    getBlock(): Block;
    getDirection(): Vector;
    toVector(): Vector;
    normalizePitch(f: number): number;
    normalizeYaw(f: number): number;
    locToBlock(d: number): number;
    deserialize(map: Map): Location;
    checkFinite(): void;
    setPitch(f: number): void;
    setWorld(world: World): void;
    setX(d: number): void;
    setY(d: number): void;
    setYaw(f: number): void;
    setZ(d: number): void;
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
    hasExperienceReward(): boolean;
    getPriceMultiplier(): number;
    getMaxUses(): number;
    getUses(): number;
    getVillagerExperience(): number;
    getIngredients(): List;
    getResult(): ItemStack;
    addIngredient(itemStack: ItemStack): void;
    removeIngredient(i: number): void;
    setExperienceReward(b: boolean): void;
    setIngredients(list: List): void;
    setMaxUses(i: number): void;
    setPriceMultiplier(f: number): void;
    setUses(i: number): void;
    setVillagerExperience(i: number): void;
}

// org.bukkit.event.inventory.BrewEvent
declare interface BrewEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getFuelLevel(): number;
    getHandlers(): HandlerList;
    getContents(): BrewerInventory;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// eu.okaeri.poly.api.Poly
declare interface Poly {
    getScriptManager(): ScriptManager;
    getDefaultBindings(scriptHelper: ScriptHelper): Map;
}

// org.bukkit.block.TileState
declare interface TileState extends BlockState, PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}

// org.bukkit.material.MaterialData
declare interface MaterialData extends Cloneable {
    getData(): number;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(i: number): ItemStack;
    setData(b: number): void;
}

// org.bukkit.plugin.messaging.PluginMessageListenerRegistration
declare interface PluginMessageListenerRegistration {
    isValid(): boolean;
    getChannel(): string;
    getPlugin(): Plugin;
    getListener(): PluginMessageListener;
}

// org.bukkit.event.world.PortalCreateEvent
declare interface PortalCreateEvent extends WorldEvent, Cancellable {
    isCancelled(): boolean;
    getBlocks(): List;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getReason(): CreateReason;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    isCancelled(): boolean;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.inventory.meta.tags.CustomItemTagContainer
declare interface CustomItemTagContainer {
    hasCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType): boolean;
    isEmpty(): boolean;
    getCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType): any;
    getAdapterContext(): ItemTagAdapterContext;
    removeCustomTag(namespacedKey: NamespacedKey): void;
    setCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType, object: any): void;
}

// org.bukkit.event.block.BlockCookEvent
declare interface BlockCookEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getResult(): ItemStack;
    getSource(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setResult(itemStack: ItemStack): void;
}

// org.bukkit.inventory.ShapedRecipe
declare interface ShapedRecipe extends Recipe, Keyed {
    getGroup(): string;
    getShape(): string[];
    getChoiceMap(): Map;
    getIngredientMap(): Map;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    setIngredient(c: string, material: Material): ShapedRecipe;
    setIngredient(c: string, material: Material, i: number): ShapedRecipe;
    setIngredient(c: string, recipeChoice: RecipeChoice): ShapedRecipe;
    setIngredient(c: string, materialData: MaterialData): ShapedRecipe;
    shape(s: string): ShapedRecipe;
    setGroup(s: string): void;
}

// org.bukkit.entity.ComplexEntityPart
declare interface ComplexEntityPart extends Entity {
    getParent(): ComplexLivingEntity;
}

// org.bukkit.material.RedstoneTorch
declare interface RedstoneTorch extends Torch, Redstone {
    isPowered(): boolean;
    toString(): string;
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
    onCommand(commandSender: CommandSender, command: Command, s: string, s: string): boolean;
    isEnabled(): boolean;
    isNaggable(): boolean;
    getDataFolder(): File;
    getServer(): Server;
    getDescription(): PluginDescriptionFile;
    getPluginLoader(): PluginLoader;
    setNaggable(b: boolean): void;
    getResource(s: string): InputStream;
    toString(): string;
    onTabComplete(commandSender: CommandSender, command: Command, s: string, s: string): List;
    getLogger(): Logger;
    getCommand(s: string): PluginCommand;
    getConfig(): FileConfiguration;
    getDefaultBiomeProvider(s: string, s: string): BiomeProvider;
    getDefaultWorldGenerator(s: string, s: string): ChunkGenerator;
    getPlugin(clazz: Class): JavaPlugin;
    getProvidingPlugin(clazz: Class): JavaPlugin;
    onDisable(): void;
    onEnable(): void;
    onLoad(): void;
    reloadConfig(): void;
    saveConfig(): void;
    saveDefaultConfig(): void;
    saveResource(s: string, b: boolean): void;
}

// org.bukkit.block.SculkSensor
declare interface SculkSensor extends TileState {
    getLastVibrationFrequency(): number;
    setLastVibrationFrequency(i: number): void;
}

// org.bukkit.material.Bed
declare interface Bed extends MaterialData, Directional {
    isHeadOfBed(): boolean;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
    setHeadOfBed(b: boolean): void;
}

// org.bukkit.block.Banner
declare interface Banner extends TileState {
    numberOfPatterns(): number;
    getPatterns(): List;
    getBaseColor(): DyeColor;
    getPattern(i: number): Pattern;
    removePattern(i: number): Pattern;
    addPattern(pattern: Pattern): void;
    setBaseColor(dyeColor: DyeColor): void;
    setPattern(i: number, pattern: Pattern): void;
    setPatterns(list: List): void;
}

// java.net.http.HttpResponse$BodyHandlers
declare interface BodyHandlers {
    buffering(bodyHandler: BodyHandler, i: number): BodyHandler;
    discarding(): BodyHandler;
    fromLineSubscriber(subscriber: Subscriber): BodyHandler;
    fromLineSubscriber(subscriber: Subscriber, func: Function, s: string): BodyHandler;
    fromSubscriber(subscriber: Subscriber): BodyHandler;
    fromSubscriber(subscriber: Subscriber, func: Function): BodyHandler;
    ofByteArray(): BodyHandler;
    ofByteArrayConsumer(consumer: Consumer): BodyHandler;
    ofFile(path: Path): BodyHandler;
    ofFile(path: Path, openOption: OpenOption): BodyHandler;
    ofFileDownload(path: Path, openOption: OpenOption): BodyHandler;
    ofInputStream(): BodyHandler;
    ofLines(): BodyHandler;
    ofPublisher(): BodyHandler;
    ofString(): BodyHandler;
    ofString(charset: Charset): BodyHandler;
    replacing(object: any): BodyHandler;
}

// org.bukkit.event.hanging.HangingEvent
declare interface HangingEvent extends Event {
    getEntity(): Hanging;
}

// org.bukkit.plugin.messaging.StandardMessenger
declare interface StandardMessenger extends Messenger {
    isIncomingChannelRegistered(plugin: Plugin, s: string): boolean;
    isOutgoingChannelRegistered(plugin: Plugin, s: string): boolean;
    isRegistrationValid(pluginMessageListenerRegistration: PluginMessageListenerRegistration): boolean;
    isReservedChannel(s: string): boolean;
    getIncomingChannelRegistrations(s: string): Set;
    getIncomingChannelRegistrations(plugin: Plugin): Set;
    getIncomingChannelRegistrations(plugin: Plugin, s: string): Set;
    getIncomingChannels(): Set;
    getIncomingChannels(plugin: Plugin): Set;
    getOutgoingChannels(): Set;
    getOutgoingChannels(plugin: Plugin): Set;
    registerIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): PluginMessageListenerRegistration;
    validateAndCorrectChannel(s: string): string;
    validateChannel(s: string): void;
    validatePluginMessage(messenger: Messenger, plugin: Plugin, s: string, b: number): void;
    dispatchIncomingMessage(player: Player, s: string, b: number): void;
    registerOutgoingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): void;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, s: string): void;
}

// org.bukkit.configuration.file.YamlRepresenter
declare interface YamlRepresenter extends Representer {
}

// org.bukkit.event.block.BlockExplodeEvent
declare interface BlockExplodeEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getYield(): number;
    blockList(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setYield(f: number): void;
}

// org.bukkit.event.block.BlockPhysicsEvent
declare interface BlockPhysicsEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getChangedType(): Material;
    getSourceBlock(): Block;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getAxes(): Set;
    getAxis(): Axis;
    setAxis(axis: Axis): void;
}

// org.bukkit.event.raid.RaidEvent
declare interface RaidEvent extends WorldEvent {
    getRaid(): Raid;
}

// org.bukkit.event.vehicle.VehicleExitEvent
declare interface VehicleExitEvent extends VehicleEvent, Cancellable {
    isCancelled(): boolean;
    getExited(): LivingEntity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.scheduler.BukkitTask
declare interface BukkitTask {
    isCancelled(): boolean;
    isSync(): boolean;
    getTaskId(): number;
    getOwner(): Plugin;
    cancel(): void;
}

// org.bukkit.event.block.BlockPlaceEvent
declare interface BlockPlaceEvent extends BlockEvent, Cancellable {
    canBuild(): boolean;
    isCancelled(): boolean;
    getBlockAgainst(): Block;
    getBlockPlaced(): Block;
    getBlockReplacedState(): BlockState;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHand(): EquipmentSlot;
    getItemInHand(): ItemStack;
    getHandlerList(): HandlerList;
    setBuild(b: boolean): void;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.Smoker
declare interface Smoker extends Furnace {
}

// org.bukkit.entity.HumanEntity
declare interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
    discoverRecipe(namespacedKey: NamespacedKey): boolean;
    dropItem(b: boolean): boolean;
    hasCooldown(material: Material): boolean;
    hasDiscoveredRecipe(namespacedKey: NamespacedKey): boolean;
    isBlocking(): boolean;
    isHandRaised(): boolean;
    setWindowProperty(property: Property, i: number): boolean;
    sleep(location: Location, b: boolean): boolean;
    undiscoverRecipe(namespacedKey: NamespacedKey): boolean;
    getAttackCooldown(): number;
    getExhaustion(): number;
    getSaturation(): number;
    discoverRecipes(collection: Collection): number;
    getCooldown(material: Material): number;
    getExpToLevel(): number;
    getFoodLevel(): number;
    getSaturatedRegenRate(): number;
    getSleepTicks(): number;
    getStarvationRate(): number;
    getUnsaturatedRegenRate(): number;
    undiscoverRecipes(collection: Collection): number;
    getName(): string;
    getDiscoveredRecipes(): Set;
    getGameMode(): GameMode;
    getBedLocation(): Location;
    getShoulderEntityLeft(): Entity;
    getShoulderEntityRight(): Entity;
    getEnderChest(): Inventory;
    getOpenInventory(): InventoryView;
    openEnchanting(location: Location, b: boolean): InventoryView;
    openInventory(inventory: Inventory): InventoryView;
    openMerchant(villager: Villager, b: boolean): InventoryView;
    openMerchant(merchant: Merchant, b: boolean): InventoryView;
    openWorkbench(location: Location, b: boolean): InventoryView;
    getItemInHand(): ItemStack;
    getItemInUse(): ItemStack;
    getItemOnCursor(): ItemStack;
    getMainHand(): MainHand;
    getInventory(): PlayerInventory;
    closeInventory(): void;
    openInventory(inventoryView: InventoryView): void;
    setCooldown(material: Material, i: number): void;
    setExhaustion(f: number): void;
    setFoodLevel(i: number): void;
    setGameMode(gameMode: GameMode): void;
    setItemInHand(itemStack: ItemStack): void;
    setItemOnCursor(itemStack: ItemStack): void;
    setSaturatedRegenRate(i: number): void;
    setSaturation(f: number): void;
    setShoulderEntityLeft(entity: Entity): void;
    setShoulderEntityRight(entity: Entity): void;
    setStarvationRate(i: number): void;
    setUnsaturatedRegenRate(i: number): void;
    wakeup(b: boolean): void;
    getInventory(): Inventory;
}

// org.bukkit.material.Gate
declare interface Gate extends MaterialData, Directional, Openable {
    isOpen(): boolean;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
    setOpen(b: boolean): void;
}

// org.bukkit.util.io.BukkitObjectInputStream
declare interface BukkitObjectInputStream extends ObjectInputStream {
}

// org.bukkit.event.vehicle.VehicleMoveEvent
declare interface VehicleMoveEvent extends VehicleEvent {
    getFrom(): Location;
    getTo(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.material.Cake
declare interface Cake extends MaterialData {
    getSlicesEaten(): number;
    getSlicesRemaining(): number;
    setSlicesEaten(i: number): void;
    setSlicesRemaining(i: number): void;
}

// org.bukkit.material.Lever
declare interface Lever extends SimpleAttachableMaterialData, Redstone {
    isPowered(): boolean;
    getAttachedFace(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
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
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.util.noise.PerlinNoiseGenerator
declare interface PerlinNoiseGenerator extends NoiseGenerator {
    getNoise(d: number): number;
    getNoise(d: number, d: number): number;
    getNoise(d: number, d: number, d: number): number;
    getNoise(d: number, d: number, d: number, i: number, d: number, d: number): number;
    getNoise(d: number, d: number, i: number, d: number, d: number): number;
    getNoise(d: number, i: number, d: number, d: number): number;
    getInstance(): PerlinNoiseGenerator;
}

// java.util.logging.Logger
declare interface Logger {
    getUseParentHandlers(): boolean;
    isLoggable(level: Level): boolean;
    getName(): string;
    getResourceBundleName(): string;
    getResourceBundle(): ResourceBundle;
    getFilter(): Filter;
    getHandlers(): Handler[];
    getLevel(): Level;
    getParent(): Logger;
    getGlobal(): Logger;
    getAnonymousLogger(): Logger;
    getAnonymousLogger(s: string): Logger;
    getLogger(s: string): Logger;
    getLogger(s: string, s: string): Logger;
    addHandler(handler: Handler): void;
    config(s: string): void;
    config(supplier: Supplier): void;
    entering(s: string, s: string): void;
    entering(s: string, s: string, object: any): void;
    entering(s: string, s: string, object: any): void;
    exiting(s: string, s: string): void;
    exiting(s: string, s: string, object: any): void;
    fine(s: string): void;
    fine(supplier: Supplier): void;
    finer(s: string): void;
    finer(supplier: Supplier): void;
    finest(s: string): void;
    finest(supplier: Supplier): void;
    info(s: string): void;
    info(supplier: Supplier): void;
    log(level: Level, s: string): void;
    log(level: Level, s: string, object: any): void;
    log(level: Level, s: string, object: any): void;
    log(level: Level, s: string, throwable: Throwable): void;
    log(level: Level, throwable: Throwable, supplier: Supplier): void;
    log(level: Level, supplier: Supplier): void;
    log(logRecord: LogRecord): void;
    logp(level: Level, s: string, s: string, s: string): void;
    logp(level: Level, s: string, s: string, s: string, object: any): void;
    logp(level: Level, s: string, s: string, s: string, object: any): void;
    logp(level: Level, s: string, s: string, s: string, throwable: Throwable): void;
    logp(level: Level, s: string, s: string, throwable: Throwable, supplier: Supplier): void;
    logp(level: Level, s: string, s: string, supplier: Supplier): void;
    logrb(level: Level, s: string, s: string, s: string, s: string): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, object: any): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, object: any): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, throwable: Throwable): void;
    logrb(level: Level, s: string, s: string, resourceBundle: ResourceBundle, s: string, object: any): void;
    logrb(level: Level, s: string, s: string, resourceBundle: ResourceBundle, s: string, throwable: Throwable): void;
    logrb(level: Level, resourceBundle: ResourceBundle, s: string, object: any): void;
    logrb(level: Level, resourceBundle: ResourceBundle, s: string, throwable: Throwable): void;
    removeHandler(handler: Handler): void;
    setFilter(filter: Filter): void;
    setLevel(level: Level): void;
    setParent(logger: Logger): void;
    setResourceBundle(resourceBundle: ResourceBundle): void;
    setUseParentHandlers(b: boolean): void;
    severe(s: string): void;
    severe(supplier: Supplier): void;
    throwing(s: string, s: string, throwable: Throwable): void;
    warning(s: string): void;
    warning(supplier: Supplier): void;
    GLOBAL_LOGGER_NAME: string;
    global: Logger;
}

// org.bukkit.util.RayTraceResult
declare interface RayTraceResult {
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitPosition(): Vector;
}

// org.bukkit.RegionAccessor
declare interface RegionAccessor {
    generateTree(location: Location, random: Random, treeType: TreeType): boolean;
    generateTree(location: Location, random: Random, treeType: TreeType, consumer: Consumer): boolean;
    getEntitiesByClass(clazz: Class): Collection;
    getEntitiesByClasses(clazz: Class): Collection;
    getEntities(): List;
    getLivingEntities(): List;
    getType(i: number, i: number, i: number): Material;
    getType(location: Location): Material;
    getBiome(i: number, i: number, i: number): Biome;
    getBiome(location: Location): Biome;
    getBlockState(i: number, i: number, i: number): BlockState;
    getBlockState(location: Location): BlockState;
    getBlockData(i: number, i: number, i: number): BlockData;
    getBlockData(location: Location): BlockData;
    spawn(location: Location, clazz: Class): Entity;
    spawn(location: Location, clazz: Class, b: boolean, consumer: Consumer): Entity;
    spawn(location: Location, clazz: Class, consumer: Consumer): Entity;
    spawnEntity(location: Location, entityType: EntityType): Entity;
    spawnEntity(location: Location, entityType: EntityType, b: boolean): Entity;
    setBiome(i: number, i: number, i: number, biome: Biome): void;
    setBiome(location: Location, biome: Biome): void;
    setBlockData(i: number, i: number, i: number, blockData: BlockData): void;
    setBlockData(location: Location, blockData: BlockData): void;
    setType(i: number, i: number, i: number, material: Material): void;
    setType(location: Location, material: Material): void;
}

// org.bukkit.block.Campfire
declare interface Campfire extends TileState {
    getCookTime(i: number): number;
    getCookTimeTotal(i: number): number;
    getSize(): number;
    getItem(i: number): ItemStack;
    setCookTime(i: number, i: number): void;
    setCookTimeTotal(i: number, i: number): void;
    setItem(i: number, itemStack: ItemStack): void;
}

// org.bukkit.block.Lectern
declare interface Lectern extends TileState, BlockInventoryHolder {
    getPage(): number;
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
    setPage(i: number): void;
}

// org.bukkit.block.data.MultipleFacing
declare interface MultipleFacing extends BlockData {
    hasFace(blockFace: BlockFace): boolean;
    getAllowedFaces(): Set;
    getFaces(): Set;
    setFace(blockFace: BlockFace, b: boolean): void;
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
    getX(): number;
    getY(): number;
    getZ(): number;
    getLocation(): Location;
    getWorld(): World;
    getInventory(): Inventory;
    getLeftSide(): InventoryHolder;
    getRightSide(): InventoryHolder;
}

// org.bukkit.event.server.ServerListPingEvent
declare interface ServerListPingEvent extends ServerEvent, Iterable {
    getMaxPlayers(): number;
    getNumPlayers(): number;
    getMotd(): string;
    getAddress(): InetAddress;
    iterator(): Iterator;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setMaxPlayers(i: number): void;
    setMotd(s: string): void;
    setServerIcon(cachedServerIcon: CachedServerIcon): void;
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
    isCancelled(): boolean;
    getTarget(): Item;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.metadata.Metadatable
declare interface Metadatable {
    hasMetadata(s: string): boolean;
    getMetadata(s: string): List;
    removeMetadata(s: string, plugin: Plugin): void;
    setMetadata(s: string, metadataValue: MetadataValue): void;
}

// org.bukkit.persistence.PersistentDataHolder
declare interface PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}

// org.bukkit.util.noise.OctaveGenerator
declare interface OctaveGenerator {
    getXScale(): number;
    getYScale(): number;
    getZScale(): number;
    noise(d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number, d: number, b: boolean): number;
    getOctaves(): NoiseGenerator[];
    setScale(d: number): void;
    setXScale(d: number): void;
    setYScale(d: number): void;
    setZScale(d: number): void;
}

// org.bukkit.event.player.PlayerCommandPreprocessEvent
declare interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getMessage(): string;
    getRecipients(): Set;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setMessage(s: string): void;
    setPlayer(player: Player): void;
}

// org.bukkit.material.ExtendedRails
declare interface ExtendedRails extends Rails {
}

// org.bukkit.event.block.BlockBurnEvent
declare interface BlockBurnEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getIgnitingBlock(): Block;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.EndGateway
declare interface EndGateway extends TileState {
    isExactTeleport(): boolean;
    getAge(): number;
    getExitLocation(): Location;
    setAge(l: number): void;
    setExactTeleport(b: boolean): void;
    setExitLocation(location: Location): void;
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
    isCancelled(): boolean;
    getSpell(): Spell;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.entity.PigZombieAngerEvent
declare interface PigZombieAngerEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getNewAnger(): number;
    getTarget(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    isCancelled(): boolean;
    getBonus(): number;
    getHandlers(): HandlerList;
    getRecipe(): MerchantRecipe;
    getHandlerList(): HandlerList;
    setBonus(i: number): void;
    setCancelled(b: boolean): void;
    setRecipe(merchantRecipe: MerchantRecipe): void;
}

// org.bukkit.scoreboard.Team
declare interface Team {
    allowFriendlyFire(): boolean;
    canSeeFriendlyInvisibles(): boolean;
    hasEntry(s: string): boolean;
    hasPlayer(offlinePlayer: OfflinePlayer): boolean;
    removeEntry(s: string): boolean;
    removePlayer(offlinePlayer: OfflinePlayer): boolean;
    getSize(): number;
    getDisplayName(): string;
    getName(): string;
    getPrefix(): string;
    getSuffix(): string;
    getEntries(): Set;
    getPlayers(): Set;
    getColor(): ChatColor;
    getNameTagVisibility(): NameTagVisibility;
    getScoreboard(): Scoreboard;
    getOption(option: Option): OptionStatus;
    addEntry(s: string): void;
    addPlayer(offlinePlayer: OfflinePlayer): void;
    setAllowFriendlyFire(b: boolean): void;
    setCanSeeFriendlyInvisibles(b: boolean): void;
    setColor(chatColor: ChatColor): void;
    setDisplayName(s: string): void;
    setNameTagVisibility(nameTagVisibility: NameTagVisibility): void;
    setOption(option: Option, optionStatus: OptionStatus): void;
    setPrefix(s: string): void;
    setSuffix(s: string): void;
    unregister(): void;
}

// org.bukkit.UnsafeValues
declare interface UnsafeValues {
    removeAdvancement(namespacedKey: NamespacedKey): boolean;
    processClass(pluginDescriptionFile: PluginDescriptionFile, s: string, b: number): number[];
    getDataVersion(): number;
    fromLegacy(material: Material): Material;
    fromLegacy(materialData: MaterialData): Material;
    fromLegacy(materialData: MaterialData, b: boolean): Material;
    getMaterial(s: string, i: number): Material;
    toLegacy(material: Material): Material;
    loadAdvancement(namespacedKey: NamespacedKey, s: string): Advancement;
    fromLegacy(material: Material, b: number): BlockData;
    modifyItemStack(itemStack: ItemStack, s: string): ItemStack;
    checkSupported(pluginDescriptionFile: PluginDescriptionFile): void;
}

// org.bukkit.event.entity.EntityTargetLivingEntityEvent
declare interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
}

// org.bukkit.block.Jigsaw
declare interface Jigsaw extends TileState {
}

// org.bukkit.event.entity.EntityDeathEvent
declare interface EntityDeathEvent extends EntityEvent {
    getDroppedExp(): number;
    getDrops(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setDroppedExp(i: number): void;
}

// org.bukkit.event.block.BlockDropItemEvent
declare interface BlockDropItemEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getItems(): List;
    getBlockState(): BlockState;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.structure.StructureManager
declare interface StructureManager {
    getStructureFile(namespacedKey: NamespacedKey): File;
    getStructures(): Map;
    copy(structure: Structure): Structure;
    createStructure(): Structure;
    getStructure(namespacedKey: NamespacedKey): Structure;
    loadStructure(file: File): Structure;
    loadStructure(inputStream: InputStream): Structure;
    loadStructure(namespacedKey: NamespacedKey): Structure;
    loadStructure(namespacedKey: NamespacedKey, b: boolean): Structure;
    registerStructure(namespacedKey: NamespacedKey, structure: Structure): Structure;
    unregisterStructure(namespacedKey: NamespacedKey): Structure;
    deleteStructure(namespacedKey: NamespacedKey): void;
    deleteStructure(namespacedKey: NamespacedKey, b: boolean): void;
    saveStructure(file: File, structure: Structure): void;
    saveStructure(outputStream: OutputStream, structure: Structure): void;
    saveStructure(namespacedKey: NamespacedKey): void;
    saveStructure(namespacedKey: NamespacedKey, structure: Structure): void;
}

// org.bukkit.block.data.type.WallSign
declare interface WallSign extends Directional, Waterlogged {
}

// org.bukkit.entity.AreaEffectCloud
declare interface AreaEffectCloud extends Entity {
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    getRadius(): number;
    getRadiusOnUse(): number;
    getRadiusPerTick(): number;
    getDuration(): number;
    getDurationOnUse(): number;
    getReapplicationDelay(): number;
    getWaitTime(): number;
    getCustomEffects(): List;
    getColor(): Color;
    getParticle(): Particle;
    getBasePotionData(): PotionData;
    getSource(): ProjectileSource;
    clearCustomEffects(): void;
    setBasePotionData(potionData: PotionData): void;
    setColor(color: Color): void;
    setDuration(i: number): void;
    setDurationOnUse(i: number): void;
    setParticle(particle: Particle): void;
    setParticle(particle: Particle, object: any): void;
    setRadius(f: number): void;
    setRadiusOnUse(f: number): void;
    setRadiusPerTick(f: number): void;
    setReapplicationDelay(i: number): void;
    setSource(projectileSource: ProjectileSource): void;
    setWaitTime(i: number): void;
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
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setLabel(s: string): boolean;
    setName(s: string): boolean;
    testPermission(commandSender: CommandSender): boolean;
    testPermissionSilent(commandSender: CommandSender): boolean;
    unregister(commandMap: CommandMap): boolean;
    getDescription(): string;
    getLabel(): string;
    getName(): string;
    getPermission(): string;
    getPermissionMessage(): string;
    getUsage(): string;
    getAliases(): List;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, s: string, location: Location): List;
    setAliases(list: List): Command;
    setDescription(s: string): Command;
    setPermissionMessage(s: string): Command;
    setUsage(s: string): Command;
    broadcastCommandMessage(commandSender: CommandSender, s: string): void;
    broadcastCommandMessage(commandSender: CommandSender, s: string, b: boolean): void;
    setPermission(s: string): void;
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
    getPermissible(): Permissible;
    getRemovalCallback(): PermissionRemovedExecutor;
    getPlugin(): Plugin;
    setPermission(s: string, b: boolean): void;
    setPermission(permission: Permission, b: boolean): void;
    setRemovalCallback(permissionRemovedExecutor: PermissionRemovedExecutor): void;
    unsetPermission(s: string): void;
    unsetPermission(permission: Permission): void;
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
    isCancelled(): boolean;
    getExhaustion(): number;
    getHandlers(): HandlerList;
    getExhaustionReason(): ExhaustionReason;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setExhaustion(f: number): void;
}

// org.bukkit.event.entity.EntitySpawnEvent
declare interface EntitySpawnEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getLocation(): Location;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.inventory.EnchantingInventory
declare interface EnchantingInventory extends Inventory {
    getItem(): ItemStack;
    getSecondary(): ItemStack;
    setItem(itemStack: ItemStack): void;
    setSecondary(itemStack: ItemStack): void;
}

// org.bukkit.BanList
declare interface BanList {
    isBanned(s: string): boolean;
    getBanEntries(): Set;
    addBan(s: string, s: string, date: Date, s: string): BanEntry;
    getBanEntry(s: string): BanEntry;
    pardon(s: string): void;
}

// org.bukkit.event.entity.CreatureSpawnEvent
declare interface CreatureSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getSpawnReason(): SpawnReason;
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
    FLUID: Registry;
    GAME_EVENT: Registry;
    LOOT_TABLES: Registry;
    MATERIAL: Registry;
    MEMORY_MODULE_TYPE: Registry;
    SOUNDS: Registry;
    STATISTIC: Registry;
    VILLAGER_PROFESSION: Registry;
    VILLAGER_TYPE: Registry;
}

// org.bukkit.conversations.NullConversationPrefix
declare interface NullConversationPrefix extends ConversationPrefix {
    getPrefix(conversationContext: ConversationContext): string;
}

// org.bukkit.event.player.PlayerTakeLecternBookEvent
declare interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getLectern(): Lectern;
    getHandlers(): HandlerList;
    getBook(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    isPowered(): boolean;
    getFacing(): BlockFace;
    setActive(b: boolean): void;
    setFacingDirection(blockFace: BlockFace): void;
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
    getShowEffect(): boolean;
    getExperience(): number;
    setExperience(i: number): void;
    setShowEffect(b: boolean): void;
}

// org.bukkit.event.player.PlayerBedEnterEvent
declare interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    getBed(): Block;
    useBed(): Result;
    getHandlers(): HandlerList;
    getBedEnterResult(): BedEnterResult;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setUseBed(result: Result): void;
}

// org.bukkit.block.data.type.CaveVines
declare interface CaveVines extends Ageable, CaveVinesPlant {
}

// org.bukkit.potion.PotionEffectType
declare interface PotionEffectType {
    isInstant(): boolean;
    getDurationModifier(): number;
    getName(): string;
    getColor(): Color;
    getId(): number;
    createEffect(i: number, i: number): PotionEffect;
    getById(i: number): PotionEffectType;
    getByName(s: string): PotionEffectType;
    values(): PotionEffectType[];
    registerPotionEffectType(potionEffectType: PotionEffectType): void;
    stopAcceptingRegistrations(): void;
    ABSORPTION: PotionEffectType;
    BAD_OMEN: PotionEffectType;
    BLINDNESS: PotionEffectType;
    CONDUIT_POWER: PotionEffectType;
    CONFUSION: PotionEffectType;
    DAMAGE_RESISTANCE: PotionEffectType;
    DOLPHINS_GRACE: PotionEffectType;
    FAST_DIGGING: PotionEffectType;
    FIRE_RESISTANCE: PotionEffectType;
    GLOWING: PotionEffectType;
    HARM: PotionEffectType;
    HEAL: PotionEffectType;
    HEALTH_BOOST: PotionEffectType;
    HERO_OF_THE_VILLAGE: PotionEffectType;
    HUNGER: PotionEffectType;
    INCREASE_DAMAGE: PotionEffectType;
    INVISIBILITY: PotionEffectType;
    JUMP: PotionEffectType;
    LEVITATION: PotionEffectType;
    LUCK: PotionEffectType;
    NIGHT_VISION: PotionEffectType;
    POISON: PotionEffectType;
    REGENERATION: PotionEffectType;
    SATURATION: PotionEffectType;
    SLOW: PotionEffectType;
    SLOW_DIGGING: PotionEffectType;
    SLOW_FALLING: PotionEffectType;
    SPEED: PotionEffectType;
    UNLUCK: PotionEffectType;
    WATER_BREATHING: PotionEffectType;
    WEAKNESS: PotionEffectType;
    WITHER: PotionEffectType;
}

// org.bukkit.conversations.ManuallyAbandonedConversationCanceller
declare interface ManuallyAbandonedConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

// org.bukkit.inventory.meta.CrossbowMeta
declare interface CrossbowMeta extends ItemMeta {
    hasChargedProjectiles(): boolean;
    getChargedProjectiles(): List;
    addChargedProjectile(itemStack: ItemStack): void;
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
    isInside(location: Location): boolean;
    getDamageAmount(): number;
    getDamageBuffer(): number;
    getSize(): number;
    getWarningDistance(): number;
    getWarningTime(): number;
    getCenter(): Location;
    reset(): void;
    setCenter(d: number, d: number): void;
    setCenter(location: Location): void;
    setDamageAmount(d: number): void;
    setDamageBuffer(d: number): void;
    setSize(d: number): void;
    setSize(d: number, l: number): void;
    setWarningDistance(i: number): void;
    setWarningTime(i: number): void;
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
    isSectionEmpty(i: number): boolean;
    getRawBiomeTemperature(i: number, i: number): number;
    getRawBiomeTemperature(i: number, i: number, i: number): number;
    getBlockEmittedLight(i: number, i: number, i: number): number;
    getBlockSkyLight(i: number, i: number, i: number): number;
    getData(i: number, i: number, i: number): number;
    getHighestBlockYAt(i: number, i: number): number;
    getX(): number;
    getZ(): number;
    getWorldName(): string;
    getCaptureFullTime(): number;
    getBlockType(i: number, i: number, i: number): Material;
    getBiome(i: number, i: number): Biome;
    getBiome(i: number, i: number, i: number): Biome;
    getBlockData(i: number, i: number, i: number): BlockData;
}

// org.bukkit.plugin.Plugin
declare interface Plugin extends TabExecutor {
    isEnabled(): boolean;
    isNaggable(): boolean;
    getDataFolder(): File;
    getResource(s: string): InputStream;
    getName(): string;
    getLogger(): Logger;
    getServer(): Server;
    getConfig(): FileConfiguration;
    getDefaultBiomeProvider(s: string, s: string): BiomeProvider;
    getDefaultWorldGenerator(s: string, s: string): ChunkGenerator;
    getDescription(): PluginDescriptionFile;
    getPluginLoader(): PluginLoader;
    onDisable(): void;
    onEnable(): void;
    onLoad(): void;
    reloadConfig(): void;
    saveConfig(): void;
    saveDefaultConfig(): void;
    saveResource(s: string, b: boolean): void;
    setNaggable(b: boolean): void;
}

// org.bukkit.util.NumberConversions
declare interface NumberConversions {
    isFinite(d: number): boolean;
    isFinite(f: number): boolean;
    toByte(object: any): number;
    square(d: number): number;
    toDouble(object: any): number;
    toFloat(object: any): number;
    ceil(d: number): number;
    floor(d: number): number;
    round(d: number): number;
    toInt(object: any): number;
    toLong(object: any): number;
    toShort(object: any): number;
    checkFinite(d: number, s: string): void;
    checkFinite(f: number, s: string): void;
}

// org.bukkit.entity.SpectralArrow
declare interface SpectralArrow extends AbstractArrow {
    getGlowingTicks(): number;
    setGlowingTicks(i: number): void;
}

// org.bukkit.event.player.PlayerChangedWorldEvent
declare interface PlayerChangedWorldEvent extends PlayerEvent {
    getFrom(): World;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.advancement.Advancement
declare interface Advancement extends Keyed {
    getCriteria(): Collection;
}

// org.bukkit.inventory.EntityEquipment
declare interface EntityEquipment {
    getBootsDropChance(): number;
    getChestplateDropChance(): number;
    getHelmetDropChance(): number;
    getItemInHandDropChance(): number;
    getItemInMainHandDropChance(): number;
    getItemInOffHandDropChance(): number;
    getLeggingsDropChance(): number;
    getHolder(): Entity;
    getBoots(): ItemStack;
    getChestplate(): ItemStack;
    getHelmet(): ItemStack;
    getItem(equipmentSlot: EquipmentSlot): ItemStack;
    getItemInHand(): ItemStack;
    getItemInMainHand(): ItemStack;
    getItemInOffHand(): ItemStack;
    getLeggings(): ItemStack;
    getArmorContents(): ItemStack[];
    clear(): void;
    setArmorContents(itemStack: ItemStack): void;
    setBoots(itemStack: ItemStack): void;
    setBoots(itemStack: ItemStack, b: boolean): void;
    setBootsDropChance(f: number): void;
    setChestplate(itemStack: ItemStack): void;
    setChestplate(itemStack: ItemStack, b: boolean): void;
    setChestplateDropChance(f: number): void;
    setHelmet(itemStack: ItemStack): void;
    setHelmet(itemStack: ItemStack, b: boolean): void;
    setHelmetDropChance(f: number): void;
    setItem(equipmentSlot: EquipmentSlot, itemStack: ItemStack): void;
    setItem(equipmentSlot: EquipmentSlot, itemStack: ItemStack, b: boolean): void;
    setItemInHand(itemStack: ItemStack): void;
    setItemInHandDropChance(f: number): void;
    setItemInMainHand(itemStack: ItemStack): void;
    setItemInMainHand(itemStack: ItemStack, b: boolean): void;
    setItemInMainHandDropChance(f: number): void;
    setItemInOffHand(itemStack: ItemStack): void;
    setItemInOffHand(itemStack: ItemStack, b: boolean): void;
    setItemInOffHandDropChance(f: number): void;
    setLeggings(itemStack: ItemStack): void;
    setLeggings(itemStack: ItemStack, b: boolean): void;
    setLeggingsDropChance(f: number): void;
}

// org.bukkit.event.player.PlayerJoinEvent
declare interface PlayerJoinEvent extends PlayerEvent {
    getJoinMessage(): string;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setJoinMessage(s: string): void;
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
    deserializeObject(map: Map): ConfigurationSerializable;
    deserializeObject(map: Map, clazz: Class): ConfigurationSerializable;
    registerClass(clazz: Class): void;
    registerClass(clazz: Class, s: string): void;
    unregisterClass(clazz: Class): void;
    unregisterClass(s: string): void;
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
    REGISTRY_ENTITY_TYPES: string;
    REGISTRY_FLUIDS: string;
    REGISTRY_ITEMS: string;
    ACACIA_LOGS: Tag;
    ANVIL: Tag;
    AXOLOTL_TEMPT_ITEMS: Tag;
    BAMBOO_PLANTABLE_ON: Tag;
    BANNERS: Tag;
    BASE_STONE_NETHER: Tag;
    BASE_STONE_OVERWORLD: Tag;
    BEACON_BASE_BLOCKS: Tag;
    BEDS: Tag;
    BEEHIVES: Tag;
    BEE_GROWABLES: Tag;
    BIRCH_LOGS: Tag;
    BUTTONS: Tag;
    CAMPFIRES: Tag;
    CANDLES: Tag;
    CANDLE_CAKES: Tag;
    CARPETS: Tag;
    CAULDRONS: Tag;
    CAVE_VINES: Tag;
    CLIMBABLE: Tag;
    CLUSTER_MAX_HARVESTABLES: Tag;
    COAL_ORES: Tag;
    COPPER_ORES: Tag;
    CORALS: Tag;
    CORAL_BLOCKS: Tag;
    CORAL_PLANTS: Tag;
    CRIMSON_STEMS: Tag;
    CROPS: Tag;
    CRYSTAL_SOUND_BLOCKS: Tag;
    DARK_OAK_LOGS: Tag;
    DEEPSLATE_ORE_REPLACEABLES: Tag;
    DIAMOND_ORES: Tag;
    DIRT: Tag;
    DOORS: Tag;
    DRAGON_IMMUNE: Tag;
    DRIPSTONE_REPLACEABLE: Tag;
    EMERALD_ORES: Tag;
    ENDERMAN_HOLDABLE: Tag;
    ENTITY_TYPES_ARROWS: Tag;
    ENTITY_TYPES_AXOLOTL_ALWAYS_HOSTILES: Tag;
    ENTITY_TYPES_AXOLOTL_HUNT_TARGETS: Tag;
    ENTITY_TYPES_BEEHIVE_INHABITORS: Tag;
    ENTITY_TYPES_FREEZE_HURTS_EXTRA_TYPES: Tag;
    ENTITY_TYPES_FREEZE_IMMUNE_ENTITY_TYPES: Tag;
    ENTITY_TYPES_IMPACT_PROJECTILES: Tag;
    ENTITY_TYPES_POWDER_SNOW_WALKABLE_MOBS: Tag;
    ENTITY_TYPES_RAIDERS: Tag;
    ENTITY_TYPES_SKELETONS: Tag;
    FEATURES_CANNOT_REPLACE: Tag;
    FENCES: Tag;
    FENCE_GATES: Tag;
    FIRE: Tag;
    FLOWERS: Tag;
    FLOWER_POTS: Tag;
    FLUIDS_LAVA: Tag;
    FLUIDS_WATER: Tag;
    FOX_FOOD: Tag;
    FREEZE_IMMUNE_WEARABLES: Tag;
    GEODE_INVALID_BLOCKS: Tag;
    GOLD_ORES: Tag;
    GUARDED_BY_PIGLINS: Tag;
    HOGLIN_REPELLENTS: Tag;
    ICE: Tag;
    IGNORED_BY_PIGLIN_BABIES: Tag;
    IMPERMEABLE: Tag;
    INFINIBURN_END: Tag;
    INFINIBURN_NETHER: Tag;
    INFINIBURN_OVERWORLD: Tag;
    INSIDE_STEP_SOUND_BLOCKS: Tag;
    IRON_ORES: Tag;
    ITEMS_ARROWS: Tag;
    ITEMS_BANNERS: Tag;
    ITEMS_BEACON_PAYMENT_ITEMS: Tag;
    ITEMS_BOATS: Tag;
    ITEMS_COALS: Tag;
    ITEMS_CREEPER_DROP_MUSIC_DISCS: Tag;
    ITEMS_FISHES: Tag;
    ITEMS_FURNACE_MATERIALS: Tag;
    ITEMS_LECTERN_BOOKS: Tag;
    ITEMS_MUSIC_DISCS: Tag;
    ITEMS_PIGLIN_LOVED: Tag;
    ITEMS_STONE_TOOL_MATERIALS: Tag;
    JUNGLE_LOGS: Tag;
    LAPIS_ORES: Tag;
    LAVA_POOL_STONE_CANNOT_REPLACE: Tag;
    LEAVES: Tag;
    LOGS: Tag;
    LOGS_THAT_BURN: Tag;
    LUSH_GROUND_REPLACEABLE: Tag;
    MINEABLE_AXE: Tag;
    MINEABLE_HOE: Tag;
    MINEABLE_PICKAXE: Tag;
    MINEABLE_SHOVEL: Tag;
    MOSS_REPLACEABLE: Tag;
    MUSHROOM_GROW_BLOCK: Tag;
    NEEDS_DIAMOND_TOOL: Tag;
    NEEDS_IRON_TOOL: Tag;
    NEEDS_STONE_TOOL: Tag;
    NON_FLAMMABLE_WOOD: Tag;
    NYLIUM: Tag;
    OAK_LOGS: Tag;
    OCCLUDES_VIBRATION_SIGNALS: Tag;
    PIGLIN_FOOD: Tag;
    PIGLIN_REPELLENTS: Tag;
    PLANKS: Tag;
    PORTALS: Tag;
    PRESSURE_PLATES: Tag;
    PREVENT_MOB_SPAWNING_INSIDE: Tag;
    RAILS: Tag;
    REDSTONE_ORES: Tag;
    SAND: Tag;
    SAPLINGS: Tag;
    SHULKER_BOXES: Tag;
    SIGNS: Tag;
    SLABS: Tag;
    SMALL_DRIPLEAF_PLACEABLE: Tag;
    SMALL_FLOWERS: Tag;
    SNOW: Tag;
    SOUL_FIRE_BASE_BLOCKS: Tag;
    SOUL_SPEED_BLOCKS: Tag;
    SPRUCE_LOGS: Tag;
    STAIRS: Tag;
    STANDING_SIGNS: Tag;
    STONE_BRICKS: Tag;
    STONE_ORE_REPLACEABLES: Tag;
    STONE_PRESSURE_PLATES: Tag;
    STRIDER_WARM_BLOCKS: Tag;
    TALL_FLOWERS: Tag;
    TRAPDOORS: Tag;
    UNDERWATER_BONEMEALS: Tag;
    UNSTABLE_BOTTOM_CENTER: Tag;
    VALID_SPAWN: Tag;
    WALLS: Tag;
    WALL_CORALS: Tag;
    WALL_POST_OVERRIDE: Tag;
    WALL_SIGNS: Tag;
    WARPED_STEMS: Tag;
    WART_BLOCKS: Tag;
    WITHER_IMMUNE: Tag;
    WITHER_SUMMON_BASE_BLOCKS: Tag;
    WOODEN_BUTTONS: Tag;
    WOODEN_DOORS: Tag;
    WOODEN_FENCES: Tag;
    WOODEN_PRESSURE_PLATES: Tag;
    WOODEN_SLABS: Tag;
    WOODEN_STAIRS: Tag;
    WOODEN_TRAPDOORS: Tag;
    WOOL: Tag;
}

// org.bukkit.event.inventory.InventoryPickupItemEvent
declare interface InventoryPickupItemEvent extends Event, Cancellable {
    isCancelled(): boolean;
    getItem(): Item;
    getInventory(): Inventory;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    getHolder(): BrewingStand;
    getFuel(): ItemStack;
    getIngredient(): ItemStack;
    setFuel(itemStack: ItemStack): void;
    setIngredient(itemStack: ItemStack): void;
    getHolder(): InventoryHolder;
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
    isSticky(): boolean;
    getDirection(): BlockFace;
    setCancelled(b: boolean): void;
}

// org.bukkit.material.TexturedMaterial
declare interface TexturedMaterial extends MaterialData {
    getTextures(): List;
    getMaterial(): Material;
    setMaterial(material: Material): void;
}

// org.bukkit.entity.Silverfish
declare interface Silverfish extends Monster {
}

// org.bukkit.event.hanging.HangingPlaceEvent
declare interface HangingPlaceEvent extends HangingEvent, Cancellable {
    isCancelled(): boolean;
    getBlock(): Block;
    getBlockFace(): BlockFace;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getItemStack(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.inventory.FurnaceStartSmeltEvent
declare interface FurnaceStartSmeltEvent extends BlockEvent {
    getTotalCookTime(): number;
    getHandlers(): HandlerList;
    getRecipe(): CookingRecipe;
    getSource(): ItemStack;
    getHandlerList(): HandlerList;
    setTotalCookTime(i: number): void;
}

// org.bukkit.event.entity.SheepDyeWoolEvent
declare interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getColor(): DyeColor;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    addPluginChunkTicket(i: number, i: number, plugin: Plugin): boolean;
    canGenerateStructures(): boolean;
    createExplosion(d: number, d: number, d: number, f: number): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean, b: boolean): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean, b: boolean, entity: Entity): boolean;
    createExplosion(location: Location, f: number): boolean;
    createExplosion(location: Location, f: number, b: boolean): boolean;
    createExplosion(location: Location, f: number, b: boolean, b: boolean): boolean;
    createExplosion(location: Location, f: number, b: boolean, b: boolean, entity: Entity): boolean;
    generateTree(location: Location, treeType: TreeType): boolean;
    generateTree(location: Location, treeType: TreeType, blockChangeDelegate: BlockChangeDelegate): boolean;
    getAllowAnimals(): boolean;
    getAllowMonsters(): boolean;
    getKeepSpawnInMemory(): boolean;
    getPVP(): boolean;
    hasCeiling(): boolean;
    hasRaids(): boolean;
    hasSkyLight(): boolean;
    hasStorm(): boolean;
    isAutoSave(): boolean;
    isBedWorks(): boolean;
    isChunkForceLoaded(i: number, i: number): boolean;
    isChunkGenerated(i: number, i: number): boolean;
    isChunkInUse(i: number, i: number): boolean;
    isChunkLoaded(i: number, i: number): boolean;
    isChunkLoaded(chunk: Chunk): boolean;
    isClearWeather(): boolean;
    isGameRule(s: string): boolean;
    isHardcore(): boolean;
    isNatural(): boolean;
    isPiglinSafe(): boolean;
    isRespawnAnchorWorks(): boolean;
    isThundering(): boolean;
    isUltraWarm(): boolean;
    loadChunk(i: number, i: number, b: boolean): boolean;
    refreshChunk(i: number, i: number): boolean;
    regenerateChunk(i: number, i: number): boolean;
    removePluginChunkTicket(i: number, i: number, plugin: Plugin): boolean;
    setGameRule(gameRule: GameRule, object: any): boolean;
    setGameRuleValue(s: string, s: string): boolean;
    setSpawnLocation(i: number, i: number, i: number): boolean;
    setSpawnLocation(i: number, i: number, i: number, f: number): boolean;
    setSpawnLocation(location: Location): boolean;
    unloadChunk(i: number, i: number): boolean;
    unloadChunk(i: number, i: number, b: boolean): boolean;
    unloadChunk(chunk: Chunk): boolean;
    unloadChunkRequest(i: number, i: number): boolean;
    getHumidity(i: number, i: number): number;
    getHumidity(i: number, i: number, i: number): number;
    getTemperature(i: number, i: number): number;
    getTemperature(i: number, i: number, i: number): number;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getClearWeatherDuration(): number;
    getHighestBlockYAt(i: number, i: number): number;
    getHighestBlockYAt(i: number, i: number, heightMap: HeightMap): number;
    getHighestBlockYAt(location: Location): number;
    getHighestBlockYAt(location: Location, heightMap: HeightMap): number;
    getLogicalHeight(): number;
    getMonsterSpawnLimit(): number;
    getSeaLevel(): number;
    getThunderDuration(): number;
    getViewDistance(): number;
    getWaterAmbientSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getWeatherDuration(): number;
    getWorldFolder(): File;
    getGameRuleDefault(gameRule: GameRule): any;
    getGameRuleValue(gameRule: GameRule): any;
    getGameRuleValue(s: string): string;
    getGameRules(): string[];
    getEntitiesByClass(clazz: Class): Collection;
    getEntitiesByClass(clazz: Class): Collection;
    getEntitiesByClasses(clazz: Class): Collection;
    getForceLoadedChunks(): Collection;
    getNearbyEntities(location: Location, d: number, d: number, d: number): Collection;
    getNearbyEntities(location: Location, d: number, d: number, d: number, predicate: Predicate): Collection;
    getNearbyEntities(boundingBox: BoundingBox): Collection;
    getNearbyEntities(boundingBox: BoundingBox, predicate: Predicate): Collection;
    getPluginChunkTickets(i: number, i: number): Collection;
    getEntities(): List;
    getLivingEntities(): List;
    getPlayers(): List;
    getPopulators(): List;
    getRaids(): List;
    getPluginChunkTickets(): Map;
    getFullTime(): number;
    getGameTime(): number;
    getTicksPerAmbientSpawns(): number;
    getTicksPerAnimalSpawns(): number;
    getTicksPerMonsterSpawns(): number;
    getTicksPerWaterAmbientSpawns(): number;
    getTicksPerWaterSpawns(): number;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getTime(): number;
    getChunkAt(i: number, i: number): Chunk;
    getChunkAt(location: Location): Chunk;
    getChunkAt(block: Block): Chunk;
    getEmptyChunkSnapshot(i: number, i: number, b: boolean, b: boolean): ChunkSnapshot;
    getLoadedChunks(): Chunk[];
    getDifficulty(): Difficulty;
    getSpawnLocation(): Location;
    locateNearestStructure(location: Location, structureType: StructureType, i: number, b: boolean): Location;
    locateNearestRaid(location: Location, i: number): Raid;
    spigot(): Spigot;
    getWorldBorder(): WorldBorder;
    getWorldType(): WorldType;
    getBiome(i: number, i: number): Biome;
    getBlockAt(i: number, i: number, i: number): Block;
    getBlockAt(location: Location): Block;
    getHighestBlockAt(i: number, i: number): Block;
    getHighestBlockAt(i: number, i: number, heightMap: HeightMap): Block;
    getHighestBlockAt(location: Location): Block;
    getHighestBlockAt(location: Location, heightMap: HeightMap): Block;
    getEnderDragonBattle(): DragonBattle;
    spawnArrow(location: Location, vector: Vector, f: number, f: number, clazz: Class): AbstractArrow;
    spawnArrow(location: Location, vector: Vector, f: number, f: number): Arrow;
    spawnFallingBlock(location: Location, material: Material, b: number): FallingBlock;
    spawnFallingBlock(location: Location, blockData: BlockData): FallingBlock;
    spawnFallingBlock(location: Location, materialData: MaterialData): FallingBlock;
    dropItem(location: Location, itemStack: ItemStack): Item;
    dropItem(location: Location, itemStack: ItemStack, consumer: Consumer): Item;
    dropItemNaturally(location: Location, itemStack: ItemStack): Item;
    dropItemNaturally(location: Location, itemStack: ItemStack, consumer: Consumer): Item;
    strikeLightning(location: Location): LightningStrike;
    strikeLightningEffect(location: Location): LightningStrike;
    getBiomeProvider(): BiomeProvider;
    getGenerator(): ChunkGenerator;
    rayTrace(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode, b: boolean, d: number, predicate: Predicate): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode, b: boolean): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, d: number): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, d: number, predicate: Predicate): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, predicate: Predicate): RayTraceResult;
    loadChunk(i: number, i: number): void;
    loadChunk(chunk: Chunk): void;
    playEffect(location: Location, effect: Effect, i: number): void;
    playEffect(location: Location, effect: Effect, i: number, i: number): void;
    playEffect(location: Location, effect: Effect, object: any): void;
    playEffect(location: Location, effect: Effect, object: any, i: number): void;
    playSound(location: Location, s: string, f: number, f: number): void;
    playSound(location: Location, s: string, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(location: Location, sound: Sound, f: number, f: number): void;
    playSound(location: Location, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    removePluginChunkTickets(plugin: Plugin): void;
    save(): void;
    setAmbientSpawnLimit(i: number): void;
    setAnimalSpawnLimit(i: number): void;
    setAutoSave(b: boolean): void;
    setBiome(i: number, i: number, biome: Biome): void;
    setChunkForceLoaded(i: number, i: number, b: boolean): void;
    setClearWeatherDuration(i: number): void;
    setDifficulty(difficulty: Difficulty): void;
    setFullTime(l: number): void;
    setHardcore(b: boolean): void;
    setKeepSpawnInMemory(b: boolean): void;
    setMonsterSpawnLimit(i: number): void;
    setPVP(b: boolean): void;
    setSpawnFlags(b: boolean, b: boolean): void;
    setStorm(b: boolean): void;
    setThunderDuration(i: number): void;
    setThundering(b: boolean): void;
    setTicksPerAmbientSpawns(i: number): void;
    setTicksPerAnimalSpawns(i: number): void;
    setTicksPerMonsterSpawns(i: number): void;
    setTicksPerWaterAmbientSpawns(i: number): void;
    setTicksPerWaterSpawns(i: number): void;
    setTicksPerWaterUndergroundCreatureSpawns(i: number): void;
    setTime(l: number): void;
    setWaterAmbientSpawnLimit(i: number): void;
    setWaterAnimalSpawnLimit(i: number): void;
    setWaterUndergroundCreatureSpawnLimit(i: number): void;
    setWeatherDuration(i: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any, b: boolean): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any, b: boolean): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, object: any): void;
}

// org.bukkit.event.block.BlockFadeEvent
declare interface BlockFadeEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getNewState(): BlockState;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.entity.SheepRegrowWoolEvent
declare interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    isWallBanner(): boolean;
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
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
    isApplicable(itemMeta: ItemMeta, material: Material): boolean;
    isApplicable(itemMeta: ItemMeta, itemStack: ItemStack): boolean;
    getDefaultLeatherColor(): Color;
    updateMaterial(itemMeta: ItemMeta, material: Material): Material;
    asMetaFor(itemMeta: ItemMeta, material: Material): ItemMeta;
    asMetaFor(itemMeta: ItemMeta, itemStack: ItemStack): ItemMeta;
    getItemMeta(material: Material): ItemMeta;
}

// org.bukkit.scoreboard.Objective
declare interface Objective {
    isModifiable(): boolean;
    getCriteria(): string;
    getDisplayName(): string;
    getName(): string;
    getDisplaySlot(): DisplaySlot;
    getRenderType(): RenderType;
    getScore(s: string): Score;
    getScore(offlinePlayer: OfflinePlayer): Score;
    getScoreboard(): Scoreboard;
    setDisplayName(s: string): void;
    setDisplaySlot(displaySlot: DisplaySlot): void;
    setRenderType(renderType: RenderType): void;
    unregister(): void;
}

// org.bukkit.event.player.PlayerAnimationType
declare enum PlayerAnimationType {
    ARM_SWING,
}

// org.bukkit.event.weather.WeatherChangeEvent
declare interface WeatherChangeEvent extends WeatherEvent, Cancellable {
    isCancelled(): boolean;
    toWeatherState(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.block.data.type.Beehive
declare interface Beehive extends Directional {
    getHoneyLevel(): number;
    getMaximumHoneyLevel(): number;
    setHoneyLevel(i: number): void;
}

// org.bukkit.block.Jukebox
declare interface Jukebox extends TileState {
    eject(): boolean;
    isPlaying(): boolean;
    getPlaying(): Material;
    getRecord(): ItemStack;
    setPlaying(material: Material): void;
    setRecord(itemStack: ItemStack): void;
    stopPlaying(): void;
}

// org.bukkit.configuration.ConfigurationSection
declare interface ConfigurationSection {
    contains(s: string): boolean;
    contains(s: string, b: boolean): boolean;
    getBoolean(s: string): boolean;
    getBoolean(s: string, b: boolean): boolean;
    isBoolean(s: string): boolean;
    isColor(s: string): boolean;
    isConfigurationSection(s: string): boolean;
    isDouble(s: string): boolean;
    isInt(s: string): boolean;
    isItemStack(s: string): boolean;
    isList(s: string): boolean;
    isLocation(s: string): boolean;
    isLong(s: string): boolean;
    isOfflinePlayer(s: string): boolean;
    isSet(s: string): boolean;
    isString(s: string): boolean;
    isVector(s: string): boolean;
    getDouble(s: string): number;
    getDouble(s: string, d: number): number;
    getInt(s: string): number;
    getInt(s: string, i: number): number;
    get(s: string): any;
    get(s: string, object: any): any;
    getObject(s: string, clazz: Class): any;
    getObject(s: string, clazz: Class, object: any): any;
    getCurrentPath(): string;
    getName(): string;
    getString(s: string): string;
    getString(s: string, s: string): string;
    getBooleanList(s: string): List;
    getByteList(s: string): List;
    getCharacterList(s: string): List;
    getDoubleList(s: string): List;
    getFloatList(s: string): List;
    getIntegerList(s: string): List;
    getList(s: string): List;
    getList(s: string, list: List): List;
    getLongList(s: string): List;
    getMapList(s: string): List;
    getShortList(s: string): List;
    getStringList(s: string): List;
    getValues(b: boolean): Map;
    getKeys(b: boolean): Set;
    getLong(s: string): number;
    getLong(s: string, l: number): number;
    getColor(s: string): Color;
    getColor(s: string, color: Color): Color;
    getLocation(s: string): Location;
    getLocation(s: string, location: Location): Location;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(s: string, offlinePlayer: OfflinePlayer): OfflinePlayer;
    getRoot(): Configuration;
    createSection(s: string): ConfigurationSection;
    createSection(s: string, map: Map): ConfigurationSection;
    getConfigurationSection(s: string): ConfigurationSection;
    getDefaultSection(): ConfigurationSection;
    getParent(): ConfigurationSection;
    getSerializable(s: string, clazz: Class): ConfigurationSerializable;
    getSerializable(s: string, clazz: Class, configurationSerializable: ConfigurationSerializable): ConfigurationSerializable;
    getItemStack(s: string): ItemStack;
    getItemStack(s: string, itemStack: ItemStack): ItemStack;
    getVector(s: string): Vector;
    getVector(s: string, vector: Vector): Vector;
    addDefault(s: string, object: any): void;
    set(s: string, object: any): void;
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
    isSlowWhenEmpty(): boolean;
    getDamage(): number;
    getMaxSpeed(): number;
    getDisplayBlockOffset(): number;
    getDisplayBlockData(): BlockData;
    getDisplayBlock(): MaterialData;
    getDerailedVelocityMod(): Vector;
    getFlyingVelocityMod(): Vector;
    setDamage(d: number): void;
    setDerailedVelocityMod(vector: Vector): void;
    setDisplayBlock(materialData: MaterialData): void;
    setDisplayBlockData(blockData: BlockData): void;
    setDisplayBlockOffset(i: number): void;
    setFlyingVelocityMod(vector: Vector): void;
    setMaxSpeed(d: number): void;
    setSlowWhenEmpty(b: boolean): void;
}

// org.bukkit.entity.ArmorStand
declare interface ArmorStand extends LivingEntity {
    hasArms(): boolean;
    hasBasePlate(): boolean;
    hasEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): boolean;
    isMarker(): boolean;
    isSmall(): boolean;
    isVisible(): boolean;
    getBoots(): ItemStack;
    getChestplate(): ItemStack;
    getHelmet(): ItemStack;
    getItemInHand(): ItemStack;
    getLeggings(): ItemStack;
    getBodyPose(): EulerAngle;
    getHeadPose(): EulerAngle;
    getLeftArmPose(): EulerAngle;
    getLeftLegPose(): EulerAngle;
    getRightArmPose(): EulerAngle;
    getRightLegPose(): EulerAngle;
    addEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): void;
    removeEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): void;
    setArms(b: boolean): void;
    setBasePlate(b: boolean): void;
    setBodyPose(eulerAngle: EulerAngle): void;
    setBoots(itemStack: ItemStack): void;
    setChestplate(itemStack: ItemStack): void;
    setHeadPose(eulerAngle: EulerAngle): void;
    setHelmet(itemStack: ItemStack): void;
    setItemInHand(itemStack: ItemStack): void;
    setLeftArmPose(eulerAngle: EulerAngle): void;
    setLeftLegPose(eulerAngle: EulerAngle): void;
    setLeggings(itemStack: ItemStack): void;
    setMarker(b: boolean): void;
    setRightArmPose(eulerAngle: EulerAngle): void;
    setRightLegPose(eulerAngle: EulerAngle): void;
    setSmall(b: boolean): void;
    setVisible(b: boolean): void;
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
    isActivated(): boolean;
    isConnected(): boolean;
    isPowered(): boolean;
    getAttachedFace(): BlockFace;
    setActivated(b: boolean): void;
    setConnected(b: boolean): void;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.entity.AbstractArrow
declare interface AbstractArrow extends Projectile {
    isCritical(): boolean;
    isInBlock(): boolean;
    isShotFromCrossbow(): boolean;
    getDamage(): number;
    getKnockbackStrength(): number;
    getPierceLevel(): number;
    getAttachedBlock(): Block;
    getPickupStatus(): PickupStatus;
    setCritical(b: boolean): void;
    setDamage(d: number): void;
    setKnockbackStrength(i: number): void;
    setPickupStatus(pickupStatus: PickupStatus): void;
    setPierceLevel(i: number): void;
    setShotFromCrossbow(b: boolean): void;
}

// org.bukkit.map.MapCursor
declare interface MapCursor {
    isVisible(): boolean;
    getDirection(): number;
    getRawType(): number;
    getX(): number;
    getY(): number;
    getCaption(): string;
    getType(): Type;
    setCaption(s: string): void;
    setDirection(b: number): void;
    setRawType(b: number): void;
    setType(type: Type): void;
    setVisible(b: boolean): void;
    setX(b: number): void;
    setY(b: number): void;
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
    hasOwner(): boolean;
    setOwner(s: string): boolean;
    setOwningPlayer(offlinePlayer: OfflinePlayer): boolean;
    getOwner(): string;
    getOwningPlayer(): OfflinePlayer;
    clone(): SkullMeta;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.event.world.WorldUnloadEvent
declare interface WorldUnloadEvent extends WorldEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.material.Coal
declare interface Coal extends MaterialData {
    getType(): CoalType;
    setType(coalType: CoalType): void;
}

// org.bukkit.event.entity.ProjectileHitEvent
declare interface ProjectileHitEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.util.VoxelShape
declare interface VoxelShape {
    overlaps(boundingBox: BoundingBox): boolean;
    getBoundingBoxes(): Collection;
}

// org.bukkit.configuration.MemoryConfiguration
declare interface MemoryConfiguration extends MemorySection, Configuration {
    getDefaults(): Configuration;
    options(): ConfigurationOptions;
    options(): MemoryConfigurationOptions;
    addDefaults(map: Map): void;
    addDefaults(configuration: Configuration): void;
    setDefaults(configuration: Configuration): void;
}

// org.bukkit.block.data.BlockData
declare interface BlockData extends Cloneable {
    matches(blockData: BlockData): boolean;
    getAsString(): string;
    getAsString(b: boolean): string;
    getMaterial(): Material;
    getSoundGroup(): SoundGroup;
    clone(): BlockData;
    merge(blockData: BlockData): BlockData;
    clone(): any;
}

// org.bukkit.entity.EnderDragonPart
declare interface EnderDragonPart extends ComplexEntityPart, Damageable {
    getParent(): EnderDragon;
    getParent(): ComplexLivingEntity;
}

// org.bukkit.entity.Fireball
declare interface Fireball extends Projectile, Explosive {
    getDirection(): Vector;
    setDirection(vector: Vector): void;
}

// org.bukkit.inventory.ShapelessRecipe
declare interface ShapelessRecipe extends Recipe, Keyed {
    getGroup(): string;
    getChoiceList(): List;
    getIngredientList(): List;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    addIngredient(i: number, material: Material): ShapelessRecipe;
    addIngredient(i: number, material: Material, i: number): ShapelessRecipe;
    addIngredient(i: number, materialData: MaterialData): ShapelessRecipe;
    addIngredient(material: Material): ShapelessRecipe;
    addIngredient(material: Material, i: number): ShapelessRecipe;
    addIngredient(recipeChoice: RecipeChoice): ShapelessRecipe;
    addIngredient(materialData: MaterialData): ShapelessRecipe;
    removeIngredient(i: number, material: Material): ShapelessRecipe;
    removeIngredient(i: number, material: Material, i: number): ShapelessRecipe;
    removeIngredient(i: number, materialData: MaterialData): ShapelessRecipe;
    removeIngredient(material: Material): ShapelessRecipe;
    removeIngredient(material: Material, i: number): ShapelessRecipe;
    removeIngredient(recipeChoice: RecipeChoice): ShapelessRecipe;
    removeIngredient(materialData: MaterialData): ShapelessRecipe;
    setGroup(s: string): void;
}

// org.bukkit.event.player.PlayerLevelChangeEvent
declare interface PlayerLevelChangeEvent extends PlayerEvent {
    getNewLevel(): number;
    getOldLevel(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.inventory.meta.CompassMeta
declare interface CompassMeta extends ItemMeta {
    hasLodestone(): boolean;
    isLodestoneTracked(): boolean;
    getLodestone(): Location;
    clone(): CompassMeta;
    setLodestone(location: Location): void;
    setLodestoneTracked(b: boolean): void;
    clone(): any;
    clone(): ItemMeta;
}

// org.bukkit.event.block.LeavesDecayEvent
declare interface LeavesDecayEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.material.Door
declare interface Door extends MaterialData, Directional, Openable {
    getHinge(): boolean;
    isOpen(): boolean;
    isTopHalf(): boolean;
    getFacing(): BlockFace;
    getHingeCorner(): BlockFace;
    getWoodDoorOfSpecies(treeSpecies: TreeSpecies): Material;
    setFacingDirection(blockFace: BlockFace): void;
    setHinge(b: boolean): void;
    setOpen(b: boolean): void;
    setTopHalf(b: boolean): void;
}

// org.bukkit.block.BlastFurnace
declare interface BlastFurnace extends Furnace {
}

// org.bukkit.event.entity.EntityInteractEvent
declare interface EntityInteractEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getBlock(): Block;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.inventory.InventoryMoveItemEvent
declare interface InventoryMoveItemEvent extends Event, Cancellable {
    isCancelled(): boolean;
    getDestination(): Inventory;
    getInitiator(): Inventory;
    getSource(): Inventory;
    getItem(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setItem(itemStack: ItemStack): void;
}

// org.bukkit.metadata.MetadataStore
declare interface MetadataStore {
    hasMetadata(object: any, s: string): boolean;
    getMetadata(object: any, s: string): List;
    invalidateAll(plugin: Plugin): void;
    removeMetadata(object: any, s: string, plugin: Plugin): void;
    setMetadata(object: any, s: string, metadataValue: MetadataValue): void;
}

// org.bukkit.material.EnderChest
declare interface EnderChest extends DirectionalContainer {
}

// org.bukkit.entity.Breedable
declare interface Breedable extends Ageable {
    canBreed(): boolean;
    getAgeLock(): boolean;
    setAgeLock(b: boolean): void;
    setBreed(b: boolean): void;
}

// org.bukkit.event.entity.EntityCombustEvent
declare interface EntityCombustEvent extends EntityEvent, Cancellable {
    isCancelled(): boolean;
    getDuration(): number;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    hasPermission(s: string): boolean;
    hasPermission(permission: Permission): boolean;
    isPermissionSet(s: string): boolean;
    isPermissionSet(permission: Permission): boolean;
    getEffectivePermissions(): Set;
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean, i: number): PermissionAttachment;
    recalculatePermissions(): void;
    removeAttachment(permissionAttachment: PermissionAttachment): void;
}

// org.bukkit.entity.ThrowableProjectile
declare interface ThrowableProjectile extends Projectile {
    getItem(): ItemStack;
    setItem(itemStack: ItemStack): void;
}

// org.bukkit.event.inventory.PrepareAnvilEvent
declare interface PrepareAnvilEvent extends InventoryEvent {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
}

// org.bukkit.event.block.SignChangeEvent
declare interface SignChangeEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getLine(i: number): string;
    getLines(): string[];
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setLine(i: number, s: string): void;
}

// org.bukkit.material.Comparator
declare interface Comparator extends MaterialData, Directional, Redstone {
    isBeingPowered(): boolean;
    isPowered(): boolean;
    isSubtractionMode(): boolean;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
    setSubtractionMode(b: boolean): void;
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
    getItem(): ItemStack;
    setItem(itemStack: ItemStack): void;
}

// org.bukkit.event.player.PlayerToggleFlightEvent
declare interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
    isCancelled(): boolean;
    isFlying(): boolean;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
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
    tabComplete(commandSender: CommandSender, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, location: Location): List;
    getCommand(s: string): Command;
    clearCommands(): void;
    registerAll(s: string, list: List): void;
}

// org.bukkit.event.block.BlockShearEntityEvent
declare interface BlockShearEntityEvent extends BlockEvent, Cancellable {
    isCancelled(): boolean;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getTool(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
}

// org.bukkit.event.vehicle.VehicleEntityCollisionEvent
declare interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
    isCancelled(): boolean;
    isCollisionCancelled(): boolean;
    isPickupCancelled(): boolean;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setCollisionCancelled(b: boolean): void;
    setPickupCancelled(b: boolean): void;
}

// org.bukkit.WorldCreator
declare interface WorldCreator {
    generateStructures(): boolean;
    hardcore(): boolean;
    generatorSettings(): string;
    name(): string;
    seed(): number;
    createWorld(): World;
    environment(): Environment;
    biomeProvider(s: string): WorldCreator;
    biomeProvider(s: string, commandSender: CommandSender): WorldCreator;
    biomeProvider(biomeProvider: BiomeProvider): WorldCreator;
    copy(world: World): WorldCreator;
    copy(worldCreator: WorldCreator): WorldCreator;
    environment(environment: Environment): WorldCreator;
    generateStructures(b: boolean): WorldCreator;
    generator(s: string): WorldCreator;
    generator(s: string, commandSender: CommandSender): WorldCreator;
    generator(chunkGenerator: ChunkGenerator): WorldCreator;
    generatorSettings(s: string): WorldCreator;
    hardcore(b: boolean): WorldCreator;
    seed(l: number): WorldCreator;
    type(worldType: WorldType): WorldCreator;
    type(): WorldType;
    biomeProvider(): BiomeProvider;
    generator(): ChunkGenerator;
    name(s: string): WorldCreator;
    getBiomeProviderForName(s: string, s: string, commandSender: CommandSender): BiomeProvider;
    getGeneratorForName(s: string, s: string, commandSender: CommandSender): ChunkGenerator;
}

// org.bukkit.material.Pumpkin
declare interface Pumpkin extends MaterialData, Directional {
    isLit(): boolean;
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

// org.bukkit.entity.Snowball
declare interface Snowball extends ThrowableProjectile {
}

// org.bukkit.inventory.AbstractHorseInventory
declare interface AbstractHorseInventory extends Inventory {
    getSaddle(): ItemStack;
    setSaddle(itemStack: ItemStack): void;
}

// org.bukkit.entity.Damageable
declare interface Damageable extends Entity {
    getAbsorptionAmount(): number;
    getHealth(): number;
    getMaxHealth(): number;
    damage(d: number): void;
    damage(d: number, entity: Entity): void;
    resetMaxHealth(): void;
    setAbsorptionAmount(d: number): void;
    setHealth(d: number): void;
    setMaxHealth(d: number): void;
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
    getGroup(): string;
    getKey(): NamespacedKey;
    getInput(): ItemStack;
    getResult(): ItemStack;
    getInputChoice(): RecipeChoice;
    setInput(material: Material): StonecuttingRecipe;
    setInputChoice(recipeChoice: RecipeChoice): StonecuttingRecipe;
    setGroup(s: string): void;
}

// org.bukkit.block.data.type.Sign
declare interface Sign extends Rotatable, Waterlogged {
}

// org.bukkit.scoreboard.Criterias
declare interface Criterias {
    DEATHS: string;
    HEALTH: string;
    PLAYER_KILLS: string;
    TOTAL_KILLS: string;
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
    getWinners(): List;
    getHandlers(): HandlerList;
    getHandlerList(): HandlerList;
}

// org.bukkit.event.inventory.InventoryInteractEvent
declare interface InventoryInteractEvent extends InventoryEvent, Cancellable {
    isCancelled(): boolean;
    getWhoClicked(): HumanEntity;
    getResult(): Result;
    setCancelled(b: boolean): void;
    setResult(result: Result): void;
}

// org.bukkit.util.EulerAngle
declare interface EulerAngle {
    getX(): number;
    getY(): number;
    getZ(): number;
    add(d: number, d: number, d: number): EulerAngle;
    setX(d: number): EulerAngle;
    setY(d: number): EulerAngle;
    setZ(d: number): EulerAngle;
    subtract(d: number, d: number, d: number): EulerAngle;
    ZERO: EulerAngle;
}

// org.bukkit.block.Hopper
declare interface Hopper extends Container, Lootable {
}

// org.bukkit.entity.Entity
declare interface Entity extends Metadatable, CommandSender, Nameable, PersistentDataHolder {
    addPassenger(entity: Entity): boolean;
    addScoreboardTag(s: string): boolean;
    eject(): boolean;
    hasGravity(): boolean;
    isCustomNameVisible(): boolean;
    isDead(): boolean;
    isEmpty(): boolean;
    isFrozen(): boolean;
    isGlowing(): boolean;
    isInWater(): boolean;
    isInsideVehicle(): boolean;
    isInvulnerable(): boolean;
    isOnGround(): boolean;
    isPersistent(): boolean;
    isSilent(): boolean;
    isValid(): boolean;
    isVisualFire(): boolean;
    leaveVehicle(): boolean;
    removePassenger(entity: Entity): boolean;
    removeScoreboardTag(s: string): boolean;
    setPassenger(entity: Entity): boolean;
    teleport(location: Location): boolean;
    teleport(location: Location, teleportCause: TeleportCause): boolean;
    teleport(entity: Entity): boolean;
    teleport(entity: Entity, teleportCause: TeleportCause): boolean;
    getHeight(): number;
    getWidth(): number;
    getFallDistance(): number;
    getEntityId(): number;
    getFireTicks(): number;
    getFreezeTicks(): number;
    getMaxFireTicks(): number;
    getMaxFreezeTicks(): number;
    getPortalCooldown(): number;
    getTicksLived(): number;
    getNearbyEntities(d: number, d: number, d: number): List;
    getPassengers(): List;
    getScoreboardTags(): Set;
    getUniqueId(): UUID;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getServer(): Server;
    getWorld(): World;
    getFacing(): BlockFace;
    getPistonMoveReaction(): PistonMoveReaction;
    getPassenger(): Entity;
    getVehicle(): Entity;
    spigot(): Spigot;
    getType(): EntityType;
    getPose(): Pose;
    getLastDamageCause(): EntityDamageEvent;
    getBoundingBox(): BoundingBox;
    getVelocity(): Vector;
    playEffect(entityEffect: EntityEffect): void;
    remove(): void;
    setCustomNameVisible(b: boolean): void;
    setFallDistance(f: number): void;
    setFireTicks(i: number): void;
    setFreezeTicks(i: number): void;
    setGlowing(b: boolean): void;
    setGravity(b: boolean): void;
    setInvulnerable(b: boolean): void;
    setLastDamageCause(entityDamageEvent: EntityDamageEvent): void;
    setPersistent(b: boolean): void;
    setPortalCooldown(i: number): void;
    setRotation(f: number, f: number): void;
    setSilent(b: boolean): void;
    setTicksLived(i: number): void;
    setVelocity(vector: Vector): void;
    setVisualFire(b: boolean): void;
    spigot(): Spigot;
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
    hasItems(): boolean;
    getItems(): List;
    addItem(itemStack: ItemStack): void;
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
    getFirstTrustedPlayer(): AnimalTamer;
    getSecondTrustedPlayer(): AnimalTamer;
    getFoxType(): Type;
    setCrouching(b: boolean): void;
    setFirstTrustedPlayer(animalTamer: AnimalTamer): void;
    setFoxType(type: Type): void;
    setSecondTrustedPlayer(animalTamer: AnimalTamer): void;
    setSleeping(b: boolean): void;
}

// org.bukkit.block.structure.Mirror
declare enum Mirror {
    NONE,
    LEFT_RIGHT,
    FRONT_BACK,
}

// org.bukkit.entity.PiglinAbstract
declare interface PiglinAbstract extends Monster, Ageable {
    isBaby(): boolean;
    isConverting(): boolean;
    isImmuneToZombification(): boolean;
    getConversionTime(): number;
    setBaby(b: boolean): void;
    setConversionTime(i: number): void;
    setImmuneToZombification(b: boolean): void;
}

// org.bukkit.material.Rails
declare interface Rails extends MaterialData {
    isCurve(): boolean;
    isOnSlope(): boolean;
    getDirection(): BlockFace;
    setDirection(blockFace: BlockFace, b: boolean): void;
}

// org.bukkit.advancement.AdvancementProgress
declare interface AdvancementProgress {
    awardCriteria(s: string): boolean;
    isDone(): boolean;
    revokeCriteria(s: string): boolean;
    getAwardedCriteria(): Collection;
    getRemainingCriteria(): Collection;
    getDateAwarded(s: string): Date;
    getAdvancement(): Advancement;
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
    isCancelled(): boolean;
    isConsuming(): boolean;
    getFuelPower(): number;
    getHandlers(): HandlerList;
    getFuel(): ItemStack;
    getHandlerList(): HandlerList;
    setCancelled(b: boolean): void;
    setConsuming(b: boolean): void;
    setFuelPower(i: number): void;
}

// org.bukkit.block.data.type.Jigsaw
declare interface Jigsaw extends BlockData {
    getOrientation(): Orientation;
    setOrientation(orientation: Orientation): void;
}

// org.bukkit.entity.Item
declare interface Item extends Entity {
    getPickupDelay(): number;
    getOwner(): UUID;
    getThrower(): UUID;
    getItemStack(): ItemStack;
    setItemStack(itemStack: ItemStack): void;
    setOwner(uUID: UUID): void;
    setPickupDelay(i: number): void;
    setThrower(uUID: UUID): void;
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

// org.bukkit.block.data.type.Door$Hinge
declare enum Hinge {
    LEFT,
    RIGHT,
}

// org.bukkit.event.world.PortalCreateEvent$CreateReason
declare enum CreateReason {
    FIRE,
    NETHER_PAIR,
    END_PLATFORM,
}

// org.bukkit.World$Environment
declare enum Environment {
    NORMAL,
    NETHER,
    THE_END,
    CUSTOM,
}

// org.bukkit.material.CocoaPlant$CocoaPlantSize
declare enum CocoaPlantSize {
    SMALL,
    MEDIUM,
    LARGE,
}

// java.lang.String
declare interface String extends Serializable, Comparable, CharSequence {
    contains(s: string): boolean;
    contentEquals(s: string): boolean;
    contentEquals(s: string): boolean;
    endsWith(s: string): boolean;
    equalsIgnoreCase(s: string): boolean;
    isBlank(): boolean;
    isEmpty(): boolean;
    matches(s: string): boolean;
    regionMatches(b: boolean, i: number, s: string, i: number, i: number): boolean;
    regionMatches(i: number, s: string, i: number, i: number): boolean;
    startsWith(s: string): boolean;
    startsWith(s: string, i: number): boolean;
    getBytes(): number[];
    getBytes(s: string): number[];
    getBytes(charset: Charset): number[];
    charAt(i: number): string;
    toCharArray(): string[];
    codePointAt(i: number): number;
    codePointBefore(i: number): number;
    codePointCount(i: number, i: number): number;
    compareTo(object: any): number;
    compareTo(s: string): number;
    compareToIgnoreCase(s: string): number;
    indexOf(i: number): number;
    indexOf(i: number, i: number): number;
    indexOf(s: string): number;
    indexOf(s: string, i: number): number;
    lastIndexOf(i: number): number;
    lastIndexOf(i: number, i: number): number;
    lastIndexOf(s: string): number;
    lastIndexOf(s: string, i: number): number;
    length(): number;
    offsetByCodePoints(i: number, i: number): number;
    subSequence(i: number, i: number): string;
    concat(s: string): string;
    repeat(i: number): string;
    replace(c: string, c: string): string;
    replace(s: string, s: string): string;
    replaceAll(s: string, s: string): string;
    replaceFirst(s: string, s: string): string;
    strip(): string;
    stripLeading(): string;
    stripTrailing(): string;
    substring(i: number): string;
    substring(i: number, i: number): string;
    toLowerCase(): string;
    toLowerCase(locale: Locale): string;
    toUpperCase(): string;
    toUpperCase(locale: Locale): string;
    trim(): string;
    split(s: string): string[];
    split(s: string, i: number): string[];
    chars(): IntStream;
    codePoints(): IntStream;
    lines(): Stream;
    intern(): string;
    copyValueOf(c: string): string;
    copyValueOf(c: string, i: number, i: number): string;
    format(s: string, object: any): string;
    format(locale: Locale, s: string, object: any): string;
    join(s: string, s: string): string;
    join(s: string, iterable: Iterable): string;
    valueOf(b: boolean): string;
    valueOf(c: string): string;
    valueOf(c: string): string;
    valueOf(c: string, i: number, i: number): string;
    valueOf(d: number): string;
    valueOf(f: number): string;
    valueOf(i: number): string;
    valueOf(object: any): string;
    valueOf(l: number): string;
    getBytes(i: number, i: number, b: number, i: number): void;
    getChars(i: number, i: number, c: string, i: number): void;
    CASE_INSENSITIVE_ORDER: Comparator;
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

// java.net.http.HttpClient$Version
declare enum Version {
    HTTP_1_1,
    HTTP_2,
}

// org.bukkit.scoreboard.Team$Option
declare enum Option {
    NAME_TAG_VISIBILITY,
    DEATH_MESSAGE_VISIBILITY,
    COLLISION_RULE,
}

// java.net.http.WebSocket$Builder
declare interface Builder {
    connectTimeout(duration: Duration): Builder;
    header(s: string, s: string): Builder;
    subprotocols(s: string, s: string): Builder;
    buildAsync(uRI: URI, listener: Listener): CompletableFuture;
}

// org.yaml.snakeyaml.representer.Representer
declare interface Representer extends SafeRepresenter {
    addTypeDescription(typeDescription: TypeDescription): TypeDescription;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
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

// org.bukkit.entity.ArmorStand$LockType
declare enum LockType {
    ADDING_OR_CHANGING,
    REMOVING_OR_CHANGING,
    ADDING,
}

// org.bukkit.entity.Entity$Spigot
declare interface Spigot extends Spigot {
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

// org.bukkit.map.MapFont$CharacterSprite
declare interface CharacterSprite {
    get(i: number, i: number): boolean;
    getHeight(): number;
    getWidth(): number;
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

// java.util.Enumeration
declare interface Enumeration {
    hasMoreElements(): boolean;
    nextElement(): any;
    asIterator(): Iterator;
}

// java.nio.file.OpenOption
declare interface OpenOption {
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

// java.util.List
declare interface List extends Collection {
    add(object: any): boolean;
    addAll(i: number, collection: Collection): boolean;
    addAll(collection: Collection): boolean;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    equals(object: any): boolean;
    isEmpty(): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    hashCode(): number;
    indexOf(object: any): number;
    lastIndexOf(object: any): number;
    size(): number;
    get(i: number): any;
    remove(i: number): any;
    set(i: number, object: any): any;
    toArray(): any[];
    toArray(object: any): any[];
    iterator(): Iterator;
    subList(i: number, i: number): List;
    listIterator(): ListIterator;
    listIterator(i: number): ListIterator;
    add(i: number, object: any): void;
    clear(): void;
    spliterator(): Spliterator;
    replaceAll(func: UnaryOperator): void;
    sort(comparator: Comparator): void;
    copyOf(collection: Collection): List;
    of(): List;
    of(object: any): List;
    of(object: any, object: any): List;
    of(object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): List;
    of(object: any): List;
}

// java.util.function.Predicate
declare interface Predicate {
    test(object: any): boolean;
    and(predicate: Predicate): Predicate;
    negate(): Predicate;
    or(predicate: Predicate): Predicate;
    isEqual(object: any): Predicate;
    not(predicate: Predicate): Predicate;
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
    addAll(collection: Collection): boolean;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    equals(object: any): boolean;
    isEmpty(): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    hashCode(): number;
    size(): number;
    toArray(): any[];
    toArray(object: any): any[];
    iterator(): Iterator;
    clear(): void;
    removeIf(predicate: Predicate): boolean;
    toArray(intFunction: IntFunction): any[];
    spliterator(): Spliterator;
    parallelStream(): Stream;
    stream(): Stream;
}

// org.bukkit.entity.Ocelot$Type
declare enum Type {
    WILD_OCELOT,
    BLACK_CAT,
    RED_CAT,
    SIAMESE_CAT,
}

// java.util.function.BiConsumer
declare interface BiConsumer {
    accept(object: any, object: any): void;
    andThen(biConsumer: BiConsumer): BiConsumer;
}

// org.bukkit.block.data.type.Wall$Height
declare enum Height {
    NONE,
    LOW,
    TALL,
}

// org.bukkit.block.data.type.Chest$Type
declare enum Type {
    SINGLE,
    LEFT,
    RIGHT,
}

// java.lang.Integer
declare interface Integer extends Number, Comparable {
    equals(object: any): boolean;
    compareTo(integer: Integer): number;
    compareTo(object: any): number;
    hashCode(): number;
    toString(): string;
    bitCount(i: number): number;
    compare(i: number, i: number): number;
    compareUnsigned(i: number, i: number): number;
    divideUnsigned(i: number, i: number): number;
    hashCode(i: number): number;
    highestOneBit(i: number): number;
    lowestOneBit(i: number): number;
    max(i: number, i: number): number;
    min(i: number, i: number): number;
    numberOfLeadingZeros(i: number): number;
    numberOfTrailingZeros(i: number): number;
    parseInt(s: string, i: number, i: number, i: number): number;
    parseInt(s: string): number;
    parseInt(s: string, i: number): number;
    parseUnsignedInt(s: string, i: number, i: number, i: number): number;
    parseUnsignedInt(s: string): number;
    parseUnsignedInt(s: string, i: number): number;
    remainderUnsigned(i: number, i: number): number;
    reverse(i: number): number;
    reverseBytes(i: number): number;
    rotateLeft(i: number, i: number): number;
    rotateRight(i: number, i: number): number;
    signum(i: number): number;
    sum(i: number, i: number): number;
    decode(s: string): Integer;
    getInteger(s: string): Integer;
    getInteger(s: string, i: number): Integer;
    getInteger(s: string, integer: Integer): Integer;
    valueOf(i: number): Integer;
    valueOf(s: string): Integer;
    valueOf(s: string, i: number): Integer;
    toBinaryString(i: number): string;
    toHexString(i: number): string;
    toOctalString(i: number): string;
    toString(i: number): string;
    toString(i: number, i: number): string;
    toUnsignedString(i: number): string;
    toUnsignedString(i: number, i: number): string;
    toUnsignedLong(i: number): number;
    BYTES: number;
    MAX_VALUE: number;
    MIN_VALUE: number;
    SIZE: number;
    TYPE: Class;
}

// org.bukkit.attribute.AttributeModifier$Operation
declare enum Operation {
    ADD_NUMBER,
    ADD_SCALAR,
    MULTIPLY_SCALAR_1,
}

// org.bukkit.scoreboard.Team$OptionStatus
declare enum OptionStatus {
    ALWAYS,
    NEVER,
    FOR_OTHER_TEAMS,
    FOR_OWN_TEAM,
}

// java.util.EventObject
declare interface EventObject extends Serializable {
    getSource(): any;
}

// org.bukkit.generator.ChunkGenerator$BiomeGrid
declare interface BiomeGrid {
    getBiome(i: number, i: number): Biome;
    getBiome(i: number, i: number, i: number): Biome;
    setBiome(i: number, i: number, i: number, biome: Biome): void;
    setBiome(i: number, i: number, biome: Biome): void;
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

// java.util.Set
declare interface Set extends Collection {
    add(object: any): boolean;
    addAll(collection: Collection): boolean;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    equals(object: any): boolean;
    isEmpty(): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    hashCode(): number;
    size(): number;
    toArray(): any[];
    toArray(object: any): any[];
    iterator(): Iterator;
    clear(): void;
    spliterator(): Spliterator;
    copyOf(collection: Collection): Set;
    of(): Set;
    of(object: any): Set;
    of(object: any, object: any): Set;
    of(object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Set;
    of(object: any): Set;
}

// org.bukkit.help.HelpTopicComparator$TopicNameComparator
declare interface TopicNameComparator extends Comparator {
    compare(object: any, object: any): number;
    compare(s: string, s: string): number;
}

// org.bukkit.map.MapView$Scale
declare enum Scale {
    CLOSEST,
    CLOSE,
    NORMAL,
    FAR,
    FARTHEST,
}

// org.bukkit.event.Event$Result
declare enum Result {
    DENY,
    DEFAULT,
    ALLOW,
}

// org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

// java.io.ObjectOutputStream
declare interface ObjectOutputStream extends OutputStream, ObjectOutput, ObjectStreamConstants {
    writeObject(object: any): void;
    putFields(): PutField;
    defaultWriteObject(): void;
    reset(): void;
    useProtocolVersion(i: number): void;
    writeBoolean(b: boolean): void;
    writeByte(i: number): void;
    writeBytes(s: string): void;
    writeChar(i: number): void;
    writeChars(s: string): void;
    writeDouble(d: number): void;
    writeFields(): void;
    writeFloat(f: number): void;
    writeInt(i: number): void;
    writeLong(l: number): void;
    writeShort(i: number): void;
    writeUTF(s: string): void;
    writeUnshared(object: any): void;
}

// java.net.InetAddress
declare interface InetAddress extends Serializable {
    isAnyLocalAddress(): boolean;
    isLinkLocalAddress(): boolean;
    isLoopbackAddress(): boolean;
    isMCGlobal(): boolean;
    isMCLinkLocal(): boolean;
    isMCNodeLocal(): boolean;
    isMCOrgLocal(): boolean;
    isMCSiteLocal(): boolean;
    isMulticastAddress(): boolean;
    isReachable(i: number): boolean;
    isReachable(networkInterface: NetworkInterface, i: number, i: number): boolean;
    isSiteLocalAddress(): boolean;
    getAddress(): number[];
    getCanonicalHostName(): string;
    getHostAddress(): string;
    getHostName(): string;
    getByAddress(b: number): InetAddress;
    getByAddress(s: string, b: number): InetAddress;
    getByName(s: string): InetAddress;
    getLocalHost(): InetAddress;
    getLoopbackAddress(): InetAddress;
    getAllByName(s: string): InetAddress[];
}

// java.util.logging.Filter
declare interface Filter {
    isLoggable(logRecord: LogRecord): boolean;
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

// java.io.Serializable
declare interface Serializable {
}

// java.lang.Class
declare interface Class extends Serializable, GenericDeclaration, Type, AnnotatedElement {
    desiredAssertionStatus(): boolean;
    isAnnotation(): boolean;
    isAnnotationPresent(clazz: Class): boolean;
    isAnonymousClass(): boolean;
    isEnum(): boolean;
    isLocalClass(): boolean;
    isMemberClass(): boolean;
    isNestmateOf(clazz: Class): boolean;
    isSynthetic(): boolean;
    getResourceAsStream(s: string): InputStream;
    asSubclass(clazz: Class): Class;
    getComponentType(): Class;
    getDeclaringClass(): Class;
    getEnclosingClass(): Class;
    getNestHost(): Class;
    getClassLoader(): ClassLoader;
    getClasses(): Class[];
    getDeclaredClasses(): Class[];
    getInterfaces(): Class[];
    getNestMembers(): Class[];
    getModule(): Module;
    cast(object: any): any;
    newInstance(): any;
    getEnumConstants(): any[];
    getPackage(): Package;
    getCanonicalName(): string;
    getName(): string;
    getPackageName(): string;
    getSimpleName(): string;
    getTypeName(): string;
    toGenericString(): string;
    getAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getAnnotatedSuperclass(): AnnotatedType;
    getAnnotatedInterfaces(): AnnotatedType[];
    getConstructor(clazz: Class): Constructor;
    getDeclaredConstructor(clazz: Class): Constructor;
    getEnclosingConstructor(): Constructor;
    getConstructors(): Constructor[];
    getDeclaredConstructors(): Constructor[];
    getDeclaredField(s: string): Field;
    getField(s: string): Field;
    getDeclaredFields(): Field[];
    getFields(): Field[];
    getDeclaredMethod(s: string, clazz: Class): Method;
    getEnclosingMethod(): Method;
    getMethod(s: string, clazz: Class): Method;
    getDeclaredMethods(): Method[];
    getMethods(): Method[];
    getGenericSuperclass(): Type;
    getTypeParameters(): TypeVariable[];
    getGenericInterfaces(): Type[];
    getResource(s: string): URL;
    getProtectionDomain(): ProtectionDomain;
    isArray(): boolean;
    isAssignableFrom(clazz: Class): boolean;
    isInstance(object: any): boolean;
    isInterface(): boolean;
    isPrimitive(): boolean;
    getModifiers(): number;
    getSuperclass(): Class;
    getSigners(): any[];
    forName(module: Module, s: string): Class;
    forName(s: string): Class;
    forName(s: string, b: boolean, classLoader: ClassLoader): Class;
}

// com.google.common.collect.Multimap
declare interface Multimap {
    containsEntry(object: any, object: any): boolean;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    equals(object: any): boolean;
    isEmpty(): boolean;
    put(object: any, object: any): boolean;
    putAll(multimap: Multimap): boolean;
    putAll(object: any, iterable: Iterable): boolean;
    remove(object: any, object: any): boolean;
    keys(): Multiset;
    hashCode(): number;
    size(): number;
    entries(): Collection;
    get(object: any): Collection;
    removeAll(object: any): Collection;
    replaceValues(object: any, iterable: Iterable): Collection;
    values(): Collection;
    asMap(): Map;
    keySet(): Set;
    clear(): void;
    forEach(biConsumer: BiConsumer): void;
}

// java.net.http.HttpRequest
declare interface HttpRequest {
    expectContinue(): boolean;
    method(): string;
    uri(): URI;
    headers(): HttpHeaders;
    bodyPublisher(): Optional;
    timeout(): Optional;
    version(): Optional;
    newBuilder(): Builder;
    newBuilder(uRI: URI): Builder;
}

// org.bukkit.block.data.type.RedstoneWire$Connection
declare enum Connection {
    UP,
    SIDE,
    NONE,
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

// java.io.ObjectInputStream
declare interface ObjectInputStream extends InputStream, ObjectInput, ObjectStreamConstants {
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    getObjectInputFilter(): ObjectInputFilter;
    readObject(): any;
    setObjectInputFilter(objectInputFilter: ObjectInputFilter): void;
    readFloat(): number;
    readInt(): number;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    skipBytes(i: number): number;
    readFields(): GetField;
    readUnshared(): any;
    readLine(): string;
    readUTF(): string;
    readLong(): number;
    readShort(): number;
    defaultReadObject(): void;
    readFully(b: number): void;
    readFully(b: number, i: number, i: number): void;
    registerValidation(objectInputValidation: ObjectInputValidation, i: number): void;
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

// java.lang.Object
declare interface Object {
    equals(object: any): boolean;
    getClass(): Class;
    notify(): void;
    notifyAll(): void;
    wait(l: number): void;
    wait(): void;
    wait(l: number, i: number): void;
    toString(): string;
    hashCode(): number;
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

// java.awt.image.BufferedImage
declare interface BufferedImage extends Image, WritableRenderedImage, Transparency {
    hasTileWriters(): boolean;
    isAlphaPremultiplied(): boolean;
    isTileWritable(i: number, i: number): boolean;
    getHeight(): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getMinX(): number;
    getMinY(): number;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getRGB(i: number, i: number): number;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTileHeight(): number;
    getTileWidth(): number;
    getTransparency(): number;
    getType(): number;
    getWidth(): number;
    getRGB(i: number, i: number, i: number, i: number, i: number, i: number, i: number): number[];
    createGraphics(): Graphics2D;
    getWritableTileIndices(): Point[];
    getSubimage(i: number, i: number, i: number, i: number): BufferedImage;
    getColorModel(): ColorModel;
    getData(): Raster;
    getData(rectangle: Rectangle): Raster;
    getTile(i: number, i: number): Raster;
    getSampleModel(): SampleModel;
    copyData(writableRaster: WritableRaster): WritableRaster;
    getAlphaRaster(): WritableRaster;
    getRaster(): WritableRaster;
    getWritableTile(i: number, i: number): WritableRaster;
    getProperty(s: string): any;
    toString(): string;
    getPropertyNames(): string[];
    getSources(): Vector;
    addTileObserver(tileObserver: TileObserver): void;
    coerceData(b: boolean): void;
    releaseWritableTile(i: number, i: number): void;
    removeTileObserver(tileObserver: TileObserver): void;
    setData(raster: Raster): void;
    setRGB(i: number, i: number, i: number): void;
    setRGB(i: number, i: number, i: number, i: number, i: number, i: number, i: number): void;
    TYPE_3BYTE_BGR: number;
    TYPE_4BYTE_ABGR: number;
    TYPE_4BYTE_ABGR_PRE: number;
    TYPE_BYTE_BINARY: number;
    TYPE_BYTE_GRAY: number;
    TYPE_BYTE_INDEXED: number;
    TYPE_CUSTOM: number;
    TYPE_INT_ARGB: number;
    TYPE_INT_ARGB_PRE: number;
    TYPE_INT_BGR: number;
    TYPE_INT_RGB: number;
    TYPE_USHORT_555_RGB: number;
    TYPE_USHORT_565_RGB: number;
    TYPE_USHORT_GRAY: number;
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

// java.util.EventListener
declare interface EventListener {
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

// org.bukkit.block.data.type.SculkSensor$Phase
declare enum Phase {
    INACTIVE,
    ACTIVE,
    COOLDOWN,
}

// java.io.Reader
declare interface Reader extends Readable, Closeable {
    read(c: string, i: number, i: number): number;
    close(): void;
    markSupported(): boolean;
    ready(): boolean;
    read(): number;
    read(c: string): number;
    read(s: string): number;
    skip(l: number): number;
    transferTo(writer: Writer): number;
    nullReader(): Reader;
    mark(i: number): void;
    reset(): void;
}

// org.bukkit.block.data.type.Stairs$Shape
declare enum Shape {
    STRAIGHT,
    INNER_LEFT,
    INNER_RIGHT,
    OUTER_LEFT,
    OUTER_RIGHT,
}

// java.awt.Image
declare interface Image {
    getHeight(imageObserver: ImageObserver): number;
    getWidth(imageObserver: ImageObserver): number;
    getGraphics(): Graphics;
    getSource(): ImageProducer;
    getProperty(s: string, imageObserver: ImageObserver): any;
    getAccelerationPriority(): number;
    getScaledInstance(i: number, i: number, i: number): Image;
    getCapabilities(graphicsConfiguration: GraphicsConfiguration): ImageCapabilities;
    flush(): void;
    setAccelerationPriority(f: number): void;
    SCALE_AREA_AVERAGING: number;
    SCALE_DEFAULT: number;
    SCALE_FAST: number;
    SCALE_REPLICATE: number;
    SCALE_SMOOTH: number;
    UndefinedProperty: any;
}

// java.nio.file.Path
declare interface Path extends Comparable, Iterable, Watchable {
    endsWith(path: Path): boolean;
    equals(object: any): boolean;
    isAbsolute(): boolean;
    startsWith(path: Path): boolean;
    compareTo(path: Path): number;
    getNameCount(): number;
    hashCode(): number;
    toString(): string;
    toUri(): URI;
    getFileSystem(): FileSystem;
    getFileName(): Path;
    getName(i: number): Path;
    getParent(): Path;
    getRoot(): Path;
    normalize(): Path;
    relativize(path: Path): Path;
    resolve(path: Path): Path;
    subpath(i: number, i: number): Path;
    toAbsolutePath(): Path;
    toRealPath(linkOption: LinkOption): Path;
    register(watchService: WatchService, kind: Kind, modifier: Modifier): WatchKey;
    endsWith(s: string): boolean;
    startsWith(s: string): boolean;
    compareTo(object: any): number;
    toFile(): File;
    resolve(s: string): Path;
    resolveSibling(s: string): Path;
    resolveSibling(path: Path): Path;
    register(watchService: WatchService, kind: Kind): WatchKey;
    iterator(): Iterator;
    of(s: string, s: string): Path;
    of(uRI: URI): Path;
}

// org.bukkit.block.data.type.PointedDripstone$Thickness
declare enum Thickness {
    TIP_MERGE,
    TIP,
    FRUSTUM,
    MIDDLE,
    BASE,
}

// org.bukkit.Vibration$Destination
declare interface Destination {
}

// java.util.Random
declare interface Random extends Serializable {
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextInt(): number;
    nextInt(i: number): number;
    doubles(): DoubleStream;
    doubles(d: number, d: number): DoubleStream;
    doubles(l: number): DoubleStream;
    doubles(l: number, d: number, d: number): DoubleStream;
    ints(): IntStream;
    ints(i: number, i: number): IntStream;
    ints(l: number): IntStream;
    ints(l: number, i: number, i: number): IntStream;
    longs(): LongStream;
    longs(l: number): LongStream;
    longs(l: number, l: number): LongStream;
    longs(l: number, l: number, l: number): LongStream;
    nextLong(): number;
    nextGaussian(): number;
    setSeed(l: number): void;
    nextBytes(b: number): void;
}

// java.util.function.Function
declare interface Function {
    apply(object: any): any;
    andThen(func: Function): Function;
    compose(func: Function): Function;
    identity(): Function;
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

// javax.net.ssl.SSLParameters
declare interface SSLParameters {
    getEnableRetransmissions(): boolean;
    getNeedClientAuth(): boolean;
    getWantClientAuth(): boolean;
    getUseCipherSuitesOrder(): boolean;
    getSNIMatchers(): Collection;
    getServerNames(): List;
    setSNIMatchers(collection: Collection): void;
    setServerNames(list: List): void;
    setUseCipherSuitesOrder(b: boolean): void;
    getMaximumPacketSize(): number;
    getEndpointIdentificationAlgorithm(): string;
    getApplicationProtocols(): string[];
    getCipherSuites(): string[];
    getProtocols(): string[];
    getAlgorithmConstraints(): AlgorithmConstraints;
    setAlgorithmConstraints(algorithmConstraints: AlgorithmConstraints): void;
    setApplicationProtocols(s: string): void;
    setCipherSuites(s: string): void;
    setEnableRetransmissions(b: boolean): void;
    setEndpointIdentificationAlgorithm(s: string): void;
    setMaximumPacketSize(i: number): void;
    setNeedClientAuth(b: boolean): void;
    setProtocols(s: string): void;
    setWantClientAuth(b: boolean): void;
}

// java.lang.annotation.Annotation
declare interface Annotation {
    equals(object: any): boolean;
    hashCode(): number;
    annotationType(): Class;
    toString(): string;
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

// java.net.http.HttpClient$Builder
declare interface Builder {
    build(): HttpClient;
    authenticator(authenticator: Authenticator): Builder;
    connectTimeout(duration: Duration): Builder;
    cookieHandler(cookieHandler: CookieHandler): Builder;
    executor(executor: Executor): Builder;
    followRedirects(redirect: Redirect): Builder;
    priority(i: number): Builder;
    proxy(proxySelector: ProxySelector): Builder;
    sslContext(sSLContext: SSLContext): Builder;
    sslParameters(sSLParameters: SSLParameters): Builder;
    version(version: Version): Builder;
    NO_PROXY: ProxySelector;
}

// java.io.OutputStream
declare interface OutputStream extends Closeable, Flushable {
    write(i: number): void;
    nullOutputStream(): OutputStream;
    close(): void;
    flush(): void;
    write(b: number): void;
    write(b: number, i: number, i: number): void;
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

// org.bukkit.event.player.PlayerPreLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

// java.net.http.HttpResponse$BodyHandler
declare interface BodyHandler {
    apply(responseInfo: ResponseInfo): BodySubscriber;
}

// java.util.regex.Pattern
declare interface Pattern extends Serializable {
    flags(): number;
    pattern(): string;
    split(s: string): string[];
    split(s: string, i: number): string[];
    asMatchPredicate(): Predicate;
    asPredicate(): Predicate;
    matcher(s: string): Matcher;
    splitAsStream(s: string): Stream;
    matches(s: string, s: string): boolean;
    quote(s: string): string;
    compile(s: string): Pattern;
    compile(s: string, i: number): Pattern;
    CANON_EQ: number;
    CASE_INSENSITIVE: number;
    COMMENTS: number;
    DOTALL: number;
    LITERAL: number;
    MULTILINE: number;
    UNICODE_CASE: number;
    UNICODE_CHARACTER_CLASS: number;
    UNIX_LINES: number;
}

// java.net.URLClassLoader
declare interface URLClassLoader extends SecureClassLoader, Closeable {
    getResourceAsStream(s: string): InputStream;
    findResource(s: string): URL;
    getURLs(): URL[];
    findResources(s: string): Enumeration;
    newInstance(uRL: URL): URLClassLoader;
    newInstance(uRL: URL, classLoader: ClassLoader): URLClassLoader;
    close(): void;
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

// java.lang.Thread
declare interface Thread extends Runnable {
    isInterrupted(): boolean;
    isDaemon(): boolean;
    getPriority(): number;
    getName(): string;
    getThreadGroup(): ThreadGroup;
    isAlive(): boolean;
    join(l: number): void;
    join(l: number, i: number): void;
    setName(s: string): void;
    checkAccess(): void;
    join(): void;
    resume(): void;
    setDaemon(b: boolean): void;
    setPriority(i: number): void;
    stop(): void;
    suspend(): void;
    getContextClassLoader(): ClassLoader;
    getStackTrace(): StackTraceElement[];
    getState(): State;
    getUncaughtExceptionHandler(): UncaughtExceptionHandler;
    getId(): number;
    countStackFrames(): number;
    interrupted(): boolean;
    activeCount(): number;
    enumerate(thread: Thread): number;
    getDefaultUncaughtExceptionHandler(): UncaughtExceptionHandler;
    getAllStackTraces(): Map;
    holdsLock(object: any): boolean;
    currentThread(): Thread;
    sleep(l: number): void;
    yield(): void;
    dumpStack(): void;
    onSpinWait(): void;
    setDefaultUncaughtExceptionHandler(uncaughtExceptionHandler: UncaughtExceptionHandler): void;
    sleep(l: number, i: number): void;
    start(): void;
    interrupt(): void;
    run(): void;
    setContextClassLoader(classLoader: ClassLoader): void;
    setUncaughtExceptionHandler(uncaughtExceptionHandler: UncaughtExceptionHandler): void;
    MAX_PRIORITY: number;
    MIN_PRIORITY: number;
    NORM_PRIORITY: number;
}

// java.util.ResourceBundle
declare interface ResourceBundle {
    getKeys(): Enumeration;
    containsKey(s: string): boolean;
    getObject(s: string): any;
    getString(s: string): string;
    getStringArray(s: string): string[];
    getBaseBundleName(): string;
    getLocale(): Locale;
    keySet(): Set;
    getBundle(s: string): ResourceBundle;
    getBundle(s: string, locale: Locale): ResourceBundle;
    getBundle(s: string, locale: Locale, control: Control): ResourceBundle;
    getBundle(s: string, control: Control): ResourceBundle;
    clearCache(): void;
    clearCache(classLoader: ClassLoader): void;
    getBundle(s: string, module: Module): ResourceBundle;
    getBundle(s: string, locale: Locale, classLoader: ClassLoader): ResourceBundle;
    getBundle(s: string, locale: Locale, classLoader: ClassLoader, control: Control): ResourceBundle;
    getBundle(s: string, locale: Locale, module: Module): ResourceBundle;
}

// java.lang.Cloneable
declare interface Cloneable {
}

// java.util.concurrent.CompletableFuture
declare interface CompletableFuture extends Future, CompletionStage {
    cancel(b: boolean): boolean;
    complete(object: any): boolean;
    completeExceptionally(throwable: Throwable): boolean;
    isCancelled(): boolean;
    isCompletedExceptionally(): boolean;
    isDone(): boolean;
    getNumberOfDependents(): number;
    get(): any;
    get(l: number, timeUnit: TimeUnit): any;
    getNow(object: any): any;
    join(): any;
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletableFuture;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletableFuture;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletableFuture;
    applyToEither(completionStage: CompletionStage, func: Function): CompletableFuture;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletableFuture;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletableFuture;
    completeAsync(supplier: Supplier): CompletableFuture;
    completeAsync(supplier: Supplier, executor: Executor): CompletableFuture;
    completeOnTimeout(object: any, l: number, timeUnit: TimeUnit): CompletableFuture;
    copy(): CompletableFuture;
    exceptionally(func: Function): CompletableFuture;
    handle(biFunction: BiFunction): CompletableFuture;
    handleAsync(biFunction: BiFunction): CompletableFuture;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletableFuture;
    newIncompleteFuture(): CompletableFuture;
    orTimeout(l: number, timeUnit: TimeUnit): CompletableFuture;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletableFuture;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletableFuture;
    thenAccept(consumer: Consumer): CompletableFuture;
    thenAcceptAsync(consumer: Consumer): CompletableFuture;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletableFuture;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletableFuture;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletableFuture;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletableFuture;
    thenApply(func: Function): CompletableFuture;
    thenApplyAsync(func: Function): CompletableFuture;
    thenApplyAsync(func: Function, executor: Executor): CompletableFuture;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletableFuture;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletableFuture;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletableFuture;
    thenCompose(func: Function): CompletableFuture;
    thenComposeAsync(func: Function): CompletableFuture;
    thenComposeAsync(func: Function, executor: Executor): CompletableFuture;
    thenRun(runnable: Runnable): CompletableFuture;
    thenRunAsync(runnable: Runnable): CompletableFuture;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletableFuture;
    toCompletableFuture(): CompletableFuture;
    whenComplete(biConsumer: BiConsumer): CompletableFuture;
    whenCompleteAsync(biConsumer: BiConsumer): CompletableFuture;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletableFuture;
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletionStage;
    applyToEither(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletionStage;
    exceptionally(func: Function): CompletionStage;
    handle(biFunction: BiFunction): CompletionStage;
    handleAsync(biFunction: BiFunction): CompletionStage;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletionStage;
    minimalCompletionStage(): CompletionStage;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    thenAccept(consumer: Consumer): CompletionStage;
    thenAcceptAsync(consumer: Consumer): CompletionStage;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletionStage;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletionStage;
    thenApply(func: Function): CompletionStage;
    thenApplyAsync(func: Function): CompletionStage;
    thenApplyAsync(func: Function, executor: Executor): CompletionStage;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletionStage;
    thenCompose(func: Function): CompletionStage;
    thenComposeAsync(func: Function): CompletionStage;
    thenComposeAsync(func: Function, executor: Executor): CompletionStage;
    thenRun(runnable: Runnable): CompletionStage;
    thenRunAsync(runnable: Runnable): CompletionStage;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletionStage;
    whenComplete(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletionStage;
    defaultExecutor(): Executor;
    allOf(completableFuture: CompletableFuture): CompletableFuture;
    anyOf(completableFuture: CompletableFuture): CompletableFuture;
    completedFuture(object: any): CompletableFuture;
    failedFuture(throwable: Throwable): CompletableFuture;
    runAsync(runnable: Runnable): CompletableFuture;
    runAsync(runnable: Runnable, executor: Executor): CompletableFuture;
    supplyAsync(supplier: Supplier): CompletableFuture;
    supplyAsync(supplier: Supplier, executor: Executor): CompletableFuture;
    completedStage(object: any): CompletionStage;
    failedStage(throwable: Throwable): CompletionStage;
    delayedExecutor(l: number, timeUnit: TimeUnit): Executor;
    delayedExecutor(l: number, timeUnit: TimeUnit, executor: Executor): Executor;
    obtrudeException(throwable: Throwable): void;
    obtrudeValue(object: any): void;
}

// org.bukkit.inventory.meta.BookMeta$Generation
declare enum Generation {
    ORIGINAL,
    COPY_OF_ORIGINAL,
    COPY_OF_COPY,
    TATTERED,
}

// java.lang.Runnable
declare interface Runnable {
    run(): void;
}

// org.bukkit.entity.FishHook$HookState
declare enum HookState {
    UNHOOKED,
    HOOKED_ENTITY,
    BOBBING,
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

// org.bukkit.generator.ChunkGenerator$ChunkData
declare interface ChunkData {
    getData(i: number, i: number, i: number): number;
    getMaxHeight(): number;
    getMinHeight(): number;
    getType(i: number, i: number, i: number): Material;
    getBiome(i: number, i: number, i: number): Biome;
    getBlockData(i: number, i: number, i: number): BlockData;
    getTypeAndData(i: number, i: number, i: number): MaterialData;
    setBlock(i: number, i: number, i: number, material: Material): void;
    setBlock(i: number, i: number, i: number, blockData: BlockData): void;
    setBlock(i: number, i: number, i: number, materialData: MaterialData): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, material: Material): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, blockData: BlockData): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, materialData: MaterialData): void;
}

// java.util.ListIterator
declare interface ListIterator extends Iterator {
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextIndex(): number;
    previousIndex(): number;
    next(): any;
    previous(): any;
    add(object: any): void;
    remove(): void;
    set(object: any): void;
}

// org.bukkit.command.CommandSender$Spigot
declare interface Spigot {
    sendMessage(uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
}

// java.net.InetSocketAddress
declare interface InetSocketAddress extends SocketAddress {
    equals(object: any): boolean;
    isUnresolved(): boolean;
    getPort(): number;
    hashCode(): number;
    getHostName(): string;
    getHostString(): string;
    getAddress(): InetAddress;
    toString(): string;
    createUnresolved(s: string, i: number): InetSocketAddress;
}

// org.bukkit.entity.Parrot$Variant
declare enum Variant {
    RED,
    BLUE,
    GREEN,
    CYAN,
    GRAY,
}

// org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason
declare enum ChangeReason {
    LOSING_JOB,
    EMPLOYED,
}

// java.util.Comparator
declare interface Comparator {
    equals(object: any): boolean;
    compare(object: any, object: any): number;
    reversed(): Comparator;
    thenComparing(comparator: Comparator): Comparator;
    thenComparing(func: Function): Comparator;
    thenComparing(func: Function, comparator: Comparator): Comparator;
    thenComparingDouble(toDoubleFunction: ToDoubleFunction): Comparator;
    thenComparingInt(toIntFunction: ToIntFunction): Comparator;
    thenComparingLong(toLongFunction: ToLongFunction): Comparator;
    comparing(func: Function): Comparator;
    comparing(func: Function, comparator: Comparator): Comparator;
    comparingDouble(toDoubleFunction: ToDoubleFunction): Comparator;
    comparingInt(toIntFunction: ToIntFunction): Comparator;
    comparingLong(toLongFunction: ToLongFunction): Comparator;
    naturalOrder(): Comparator;
    nullsFirst(comparator: Comparator): Comparator;
    nullsLast(comparator: Comparator): Comparator;
    reverseOrder(): Comparator;
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

// org.bukkit.event.hanging.HangingBreakEvent$RemoveCause
declare enum RemoveCause {
    ENTITY,
    EXPLOSION,
    OBSTRUCTION,
    PHYSICS,
    DEFAULT,
}

// java.util.concurrent.Callable
declare interface Callable {
    call(): any;
}

// org.yaml.snakeyaml.constructor.SafeConstructor
declare interface SafeConstructor extends BaseConstructor {
    undefinedConstructor: ConstructUndefined;
}

// org.bukkit.block.data.type.BigDripleaf$Tilt
declare enum Tilt {
    NONE,
    UNSTABLE,
    PARTIAL,
    FULL,
}

// org.bukkit.block.data.type.Switch$Face
declare enum Face {
    FLOOR,
    WALL,
    CEILING,
}

// org.bukkit.conversations.Conversation$ConversationState
declare enum ConversationState {
    UNSTARTED,
    STARTED,
    ABANDONED,
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

// java.nio.charset.Charset
declare interface Charset extends Comparable {
    contains(charset: Charset): boolean;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
    canEncode(): boolean;
    isRegistered(): boolean;
    compareTo(charset: Charset): number;
    name(): string;
    encode(s: string): ByteBuffer;
    encode(s: string): ByteBuffer;
    decode(byteBuffer: ByteBuffer): string;
    aliases(): Set;
    compareTo(object: any): number;
    displayName(): string;
    displayName(locale: Locale): string;
    isSupported(s: string): boolean;
    defaultCharset(): Charset;
    forName(s: string): Charset;
    availableCharsets(): SortedMap;
}

// org.bukkit.entity.Player$Spigot
declare interface Spigot extends Spigot {
    getCollidesWithEntities(): boolean;
    getRawAddress(): InetSocketAddress;
    getHiddenPlayers(): Set;
    respawn(): void;
    sendMessage(chatMessageType: ChatMessageType, uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    setCollidesWithEntities(b: boolean): void;
}

// org.bukkit.entity.Skeleton$SkeletonType
declare enum SkeletonType {
    NORMAL,
    WITHER,
    STRAY,
}

// java.lang.RuntimeException
declare interface RuntimeException extends Exception {
}

// org.bukkit.block.data.type.Bell$Attachment
declare enum Attachment {
    FLOOR,
    CEILING,
    SINGLE_WALL,
    DOUBLE_WALL,
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

// org.bukkit.event.player.PlayerLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

// org.spigotmc.CustomTimingsHandler
declare interface CustomTimingsHandler {
    printTimings(printStream: PrintStream): void;
    reload(): void;
    tick(): void;
    reset(): void;
    startTiming(): void;
    stopTiming(): void;
}

// org.bukkit.block.data.type.Bamboo$Leaves
declare enum Leaves {
    NONE,
    SMALL,
    LARGE,
}

// java.net.http.HttpResponse$PushPromiseHandler
declare interface PushPromiseHandler {
    applyPushPromise(httpRequest: HttpRequest, httpRequest: HttpRequest, func: Function): void;
    of(func: Function, concurrentMap: ConcurrentMap): PushPromiseHandler;
}

// java.util.concurrent.Future
declare interface Future {
    cancel(b: boolean): boolean;
    isCancelled(): boolean;
    isDone(): boolean;
    get(): any;
    get(l: number, timeUnit: TimeUnit): any;
}

// org.bukkit.block.data.Bisected$Half
declare enum Half {
    TOP,
    BOTTOM,
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

// org.bukkit.entity.LightningStrike$Spigot
declare interface Spigot extends Spigot {
    isSilent(): boolean;
}

// org.bukkit.event.server.ServerLoadEvent$LoadType
declare enum LoadType {
    STARTUP,
    RELOAD,
}

// org.bukkit.block.data.type.StructureBlock$Mode
declare enum Mode {
    SAVE,
    LOAD,
    CORNER,
    DATA,
}

// org.bukkit.block.data.type.Bed$Part
declare enum Part {
    HEAD,
    FOOT,
}

// java.util.Optional
declare interface Optional {
    isEmpty(): boolean;
    isPresent(): boolean;
    get(): any;
    orElse(object: any): any;
    orElseGet(supplier: Supplier): any;
    orElseThrow(): any;
    orElseThrow(supplier: Supplier): any;
    filter(predicate: Predicate): Optional;
    flatMap(func: Function): Optional;
    map(func: Function): Optional;
    or(supplier: Supplier): Optional;
    stream(): Stream;
    empty(): Optional;
    of(object: any): Optional;
    ofNullable(object: any): Optional;
    ifPresent(consumer: Consumer): void;
    ifPresentOrElse(consumer: Consumer, runnable: Runnable): void;
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

// java.net.http.HttpResponse
declare interface HttpResponse {
    statusCode(): number;
    body(): any;
    uri(): URI;
    version(): Version;
    headers(): HttpHeaders;
    request(): HttpRequest;
    previousResponse(): Optional;
    sslSession(): Optional;
}

// org.bukkit.entity.Horse$Style
declare enum Style {
    NONE,
    WHITE,
    WHITEFIELD,
    WHITE_DOTS,
    BLACK_DOTS,
}

// org.bukkit.Warning$WarningState
declare enum WarningState {
    ON,
    OFF,
    DEFAULT,
}

// org.bukkit.util.ChatPaginator$ChatPage
declare interface ChatPage {
    getPageNumber(): number;
    getTotalPages(): number;
    getLines(): string[];
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

// org.bukkit.event.entity.CreeperPowerEvent$PowerCause
declare enum PowerCause {
    LIGHTNING,
    SET_ON,
    SET_OFF,
}

// java.util.UUID
declare interface UUID extends Serializable, Comparable {
    clockSequence(): number;
    compareTo(object: any): number;
    compareTo(uUID: UUID): number;
    variant(): number;
    version(): number;
    getLeastSignificantBits(): number;
    getMostSignificantBits(): number;
    node(): number;
    timestamp(): number;
    fromString(s: string): UUID;
    nameUUIDFromBytes(b: number): UUID;
    randomUUID(): UUID;
}

// java.awt.Color
declare interface Color extends Paint, Serializable {
    getColorComponents(f: number): number[];
    getColorComponents(colorSpace: ColorSpace, f: number): number[];
    getComponents(f: number): number[];
    getComponents(colorSpace: ColorSpace, f: number): number[];
    getRGBColorComponents(f: number): number[];
    getRGBComponents(f: number): number[];
    getAlpha(): number;
    getBlue(): number;
    getGreen(): number;
    getRGB(): number;
    getRed(): number;
    getTransparency(): number;
    brighter(): Color;
    darker(): Color;
    getColorSpace(): ColorSpace;
    RGBtoHSB(i: number, i: number, i: number, f: number): number[];
    HSBtoRGB(f: number, f: number, f: number): number;
    decode(s: string): Color;
    getColor(s: string): Color;
    getColor(s: string, i: number): Color;
    getColor(s: string, color: Color): Color;
    getHSBColor(f: number, f: number, f: number): Color;
    createContext(colorModel: ColorModel, rectangle: Rectangle, rectangle2D: Rectangle2D, affineTransform: AffineTransform, renderingHints: RenderingHints): PaintContext;
    BLACK: Color;
    BLUE: Color;
    CYAN: Color;
    DARK_GRAY: Color;
    GRAY: Color;
    GREEN: Color;
    LIGHT_GRAY: Color;
    MAGENTA: Color;
    ORANGE: Color;
    PINK: Color;
    RED: Color;
    WHITE: Color;
    YELLOW: Color;
    black: Color;
    blue: Color;
    cyan: Color;
    darkGray: Color;
    gray: Color;
    green: Color;
    lightGray: Color;
    magenta: Color;
    orange: Color;
    pink: Color;
    red: Color;
    white: Color;
    yellow: Color;
}

// javax.net.ssl.SSLContext
declare interface SSLContext {
    getProtocol(): string;
    getProvider(): Provider;
    createSSLEngine(): SSLEngine;
    createSSLEngine(s: string, i: number): SSLEngine;
    getDefaultSSLParameters(): SSLParameters;
    getSupportedSSLParameters(): SSLParameters;
    getServerSocketFactory(): SSLServerSocketFactory;
    getClientSessionContext(): SSLSessionContext;
    getServerSessionContext(): SSLSessionContext;
    getSocketFactory(): SSLSocketFactory;
    init(keyManager: KeyManager, trustManager: TrustManager, secureRandom: SecureRandom): void;
    getInstance(s: string): SSLContext;
    getInstance(s: string, s: string): SSLContext;
    getInstance(s: string, provider: Provider): SSLContext;
    getDefault(): SSLContext;
    setDefault(sSLContext: SSLContext): void;
}

// org.bukkit.block.data.type.Slab$Type
declare enum Type {
    TOP,
    BOTTOM,
    DOUBLE,
}

// java.io.File
declare interface File extends Serializable, Comparable {
    canExecute(): boolean;
    canRead(): boolean;
    canWrite(): boolean;
    createNewFile(): boolean;
    delete(): boolean;
    exists(): boolean;
    isAbsolute(): boolean;
    isDirectory(): boolean;
    isFile(): boolean;
    isHidden(): boolean;
    mkdir(): boolean;
    mkdirs(): boolean;
    renameTo(file: File): boolean;
    setExecutable(b: boolean): boolean;
    setExecutable(b: boolean, b: boolean): boolean;
    setLastModified(l: number): boolean;
    setReadOnly(): boolean;
    setReadable(b: boolean): boolean;
    setReadable(b: boolean, b: boolean): boolean;
    setWritable(b: boolean): boolean;
    setWritable(b: boolean, b: boolean): boolean;
    compareTo(file: File): number;
    compareTo(object: any): number;
    getAbsoluteFile(): File;
    getCanonicalFile(): File;
    getParentFile(): File;
    listFiles(): File[];
    listFiles(fileFilter: FileFilter): File[];
    listFiles(filenameFilter: FilenameFilter): File[];
    getAbsolutePath(): string;
    getCanonicalPath(): string;
    getName(): string;
    getParent(): string;
    getPath(): string;
    list(): string[];
    list(filenameFilter: FilenameFilter): string[];
    toURI(): URI;
    toURL(): URL;
    toPath(): Path;
    getFreeSpace(): number;
    getTotalSpace(): number;
    getUsableSpace(): number;
    lastModified(): number;
    length(): number;
    createTempFile(s: string, s: string): File;
    createTempFile(s: string, s: string, file: File): File;
    listRoots(): File[];
    deleteOnExit(): void;
    pathSeparatorChar: string;
    separatorChar: string;
    pathSeparator: string;
    separator: string;
}

// java.net.URL
declare interface URL extends Serializable {
    sameFile(uRL: URL): boolean;
    openStream(): InputStream;
    getContent(): any;
    getContent(clazz: Class): any;
    getDefaultPort(): number;
    getPort(): number;
    getAuthority(): string;
    getFile(): string;
    getHost(): string;
    getPath(): string;
    getProtocol(): string;
    getQuery(): string;
    getRef(): string;
    getUserInfo(): string;
    toExternalForm(): string;
    toURI(): URI;
    openConnection(): URLConnection;
    openConnection(proxy: Proxy): URLConnection;
    setURLStreamHandlerFactory(uRLStreamHandlerFactory: URLStreamHandlerFactory): void;
}

// java.io.InputStream
declare interface InputStream extends Closeable {
    read(): number;
    markSupported(): boolean;
    readAllBytes(): number[];
    readNBytes(i: number): number[];
    available(): number;
    read(b: number): number;
    read(b: number, i: number, i: number): number;
    readNBytes(b: number, i: number, i: number): number;
    skip(l: number): number;
    transferTo(outputStream: OutputStream): number;
    nullInputStream(): InputStream;
    mark(i: number): void;
    reset(): void;
    close(): void;
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

// java.util.logging.Handler
declare interface Handler {
    close(): void;
    flush(): void;
    publish(logRecord: LogRecord): void;
    isLoggable(logRecord: LogRecord): boolean;
    getEncoding(): string;
    getErrorManager(): ErrorManager;
    getFilter(): Filter;
    getFormatter(): Formatter;
    getLevel(): Level;
    setEncoding(s: string): void;
    setErrorManager(errorManager: ErrorManager): void;
    setFilter(filter: Filter): void;
    setFormatter(formatter: Formatter): void;
    setLevel(level: Level): void;
}

// org.bukkit.Server$Spigot
declare interface Spigot {
    getConfig(): YamlConfiguration;
    broadcast(baseComponent: BaseComponent): void;
    broadcast(baseComponent: BaseComponent): void;
    restart(): void;
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
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    getOrDefault(object: any, object: any): any;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putIfAbsent(object: any, object: any): any;
    replace(object: any, object: any): any;
    forEach(biConsumer: BiConsumer): void;
    replaceAll(biFunction: BiFunction): void;
}

// org.bukkit.block.data.type.TechnicalPiston$Type
declare enum Type {
    NORMAL,
    STICKY,
}

// org.bukkit.entity.Axolotl$Variant
declare enum Variant {
    LUCY,
    WILD,
    GOLD,
    CYAN,
    BLUE,
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

// org.bukkit.BanList$Type
declare enum Type {
    NAME,
    IP,
}

// org.bukkit.entity.MushroomCow$Variant
declare enum Variant {
    RED,
    BROWN,
}

// java.util.logging.LogRecord
declare interface LogRecord extends Serializable {
    getThreadID(): number;
    getParameters(): any[];
    getLoggerName(): string;
    getMessage(): string;
    getResourceBundleName(): string;
    getSourceClassName(): string;
    getSourceMethodName(): string;
    getThrown(): Throwable;
    getInstant(): Instant;
    getResourceBundle(): ResourceBundle;
    getLevel(): Level;
    getMillis(): number;
    getSequenceNumber(): number;
    setInstant(instant: Instant): void;
    setLevel(level: Level): void;
    setLoggerName(s: string): void;
    setMessage(s: string): void;
    setMillis(l: number): void;
    setParameters(object: any): void;
    setResourceBundle(resourceBundle: ResourceBundle): void;
    setResourceBundleName(s: string): void;
    setSequenceNumber(l: number): void;
    setSourceClassName(s: string): void;
    setSourceMethodName(s: string): void;
    setThreadID(i: number): void;
    setThrown(throwable: Throwable): void;
}

// java.util.Date
declare interface Date extends Serializable, Cloneable, Comparable {
    after(date: Date): boolean;
    before(date: Date): boolean;
    compareTo(object: any): number;
    compareTo(date: Date): number;
    getDate(): number;
    getDay(): number;
    getHours(): number;
    getMinutes(): number;
    getMonth(): number;
    getSeconds(): number;
    getTimezoneOffset(): number;
    getYear(): number;
    toGMTString(): string;
    toLocaleString(): string;
    toInstant(): Instant;
    getTime(): number;
    from(instant: Instant): Date;
    UTC(i: number, i: number, i: number, i: number, i: number, i: number): number;
    parse(s: string): number;
    setDate(i: number): void;
    setHours(i: number): void;
    setMinutes(i: number): void;
    setMonth(i: number): void;
    setSeconds(i: number): void;
    setTime(l: number): void;
    setYear(i: number): void;
}

// java.util.Iterator
declare interface Iterator {
    hasNext(): boolean;
    next(): any;
    forEachRemaining(consumer: Consumer): void;
    remove(): void;
}

// org.bukkit.event.raid.RaidStopEvent$Reason
declare enum Reason {
    PEACE,
    TIMEOUT,
    FINISHED,
    UNSPAWNABLE,
    NOT_IN_VILLAGE,
}

// org.bukkit.FireworkEffect$Builder
declare interface Builder {
    build(): FireworkEffect;
    flicker(b: boolean): Builder;
    trail(b: boolean): Builder;
    with(type: Type): Builder;
    withColor(iterable: Iterable): Builder;
    withColor(color: Color): Builder;
    withColor(color: Color): Builder;
    withFade(iterable: Iterable): Builder;
    withFade(color: Color): Builder;
    withFade(color: Color): Builder;
    withFlicker(): Builder;
    withTrail(): Builder;
}

// java.io.Writer
declare interface Writer extends Appendable, Closeable, Flushable {
    close(): void;
    flush(): void;
    write(c: string, i: number, i: number): void;
    append(c: string): Writer;
    append(s: string): Writer;
    append(s: string, i: number, i: number): Writer;
    append(c: string): Appendable;
    append(s: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    nullWriter(): Writer;
    write(c: string): void;
    write(i: number): void;
    write(s: string): void;
    write(s: string, i: number, i: number): void;
}

// org.bukkit.Raid$RaidStatus
declare enum RaidStatus {
    ONGOING,
    VICTORY,
    LOSS,
    STOPPED,
}

// java.lang.Throwable
declare interface Throwable extends Serializable {
    getSuppressed(): Throwable[];
    addSuppressed(throwable: Throwable): void;
    getStackTrace(): StackTraceElement[];
    getLocalizedMessage(): string;
    getMessage(): string;
    fillInStackTrace(): Throwable;
    getCause(): Throwable;
    initCause(throwable: Throwable): Throwable;
    printStackTrace(): void;
    printStackTrace(printStream: PrintStream): void;
    printStackTrace(printWriter: PrintWriter): void;
    setStackTrace(stackTraceElement: StackTraceElement): void;
}

// java.util.function.Supplier
declare interface Supplier {
    get(): any;
}

// java.net.http.HttpClient$Redirect
declare enum Redirect {
    NEVER,
    ALWAYS,
    NORMAL,
}

// org.bukkit.block.data.type.Comparator$Mode
declare enum Mode {
    COMPARE,
    SUBTRACT,
}

// java.lang.Comparable
declare interface Comparable {
    compareTo(object: any): number;
}

// org.bukkit.entity.Fox$Type
declare enum Type {
    RED,
    SNOW,
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

// org.bukkit.World$Spigot
declare interface Spigot {
    strikeLightning(location: Location, b: boolean): LightningStrike;
    strikeLightningEffect(location: Location, b: boolean): LightningStrike;
}

// java.util.logging.Level
declare interface Level extends Serializable {
    intValue(): number;
    getLocalizedName(): string;
    getName(): string;
    getResourceBundleName(): string;
    parse(s: string): Level;
    ALL: Level;
    CONFIG: Level;
    FINE: Level;
    FINER: Level;
    FINEST: Level;
    INFO: Level;
    OFF: Level;
    SEVERE: Level;
    WARNING: Level;
}

// org.bukkit.block.data.FaceAttachable$AttachedFace
declare enum AttachedFace {
    FLOOR,
    WALL,
    CEILING,
}

// java.util.function.Consumer
declare interface Consumer {
    accept(object: any): void;
    andThen(consumer: Consumer): Consumer;
}

// org.bukkit.event.entity.EntityUnleashEvent$UnleashReason
declare enum UnleashReason {
    HOLDER_GONE,
    PLAYER_UNLEASH,
    DISTANCE,
    UNKNOWN,
}

// org.bukkit.entity.AbstractArrow$PickupStatus
declare enum PickupStatus {
    DISALLOWED,
    ALLOWED,
    CREATIVE_ONLY,
}

// org.bukkit.inventory.meta.BookMeta$Spigot
declare interface Spigot {
    getPages(): List;
    getPage(i: number): BaseComponent[];
    addPage(baseComponent: BaseComponent): void;
    setPage(i: number, baseComponent: BaseComponent): void;
    setPages(list: List): void;
    setPages(baseComponent: BaseComponent): void;
}

// java.util.concurrent.Flow$Subscriber
declare interface Subscriber {
    onComplete(): void;
    onError(throwable: Throwable): void;
    onNext(object: any): void;
    onSubscribe(subscription: Subscription): void;
}

// org.bukkit.event.player.PlayerResourcePackStatusEvent$Status
declare enum Status {
    SUCCESSFULLY_LOADED,
    DECLINED,
    FAILED_DOWNLOAD,
    ACCEPTED,
}

// org.bukkit.entity.Llama$Color
declare enum Color {
    CREAMY,
    WHITE,
    BROWN,
    GRAY,
}

// java.util.Map
declare interface Map {
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    equals(object: any): boolean;
    isEmpty(): boolean;
    hashCode(): number;
    size(): number;
    get(object: any): any;
    put(object: any, object: any): any;
    remove(object: any): any;
    values(): Collection;
    entrySet(): Set;
    keySet(): Set;
    clear(): void;
    putAll(map: Map): void;
    remove(object: any, object: any): boolean;
    replace(object: any, object: any, object: any): boolean;
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    getOrDefault(object: any, object: any): any;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putIfAbsent(object: any, object: any): any;
    replace(object: any, object: any): any;
    forEach(biConsumer: BiConsumer): void;
    replaceAll(biFunction: BiFunction): void;
    copyOf(map: Map): Map;
    of(): Map;
    of(object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    of(object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any, object: any): Map;
    ofEntries(entry: Entry): Map;
    entry(object: any, object: any): Entry;
}

// java.lang.Iterable
declare interface Iterable {
    iterator(): Iterator;
    spliterator(): Spliterator;
    forEach(consumer: Consumer): void;
}

// java.util.ArrayList
declare interface ArrayList extends AbstractList, List, RandomAccess, Cloneable, Serializable {
    addAll(collection: Collection): boolean;
    contains(object: any): boolean;
    isEmpty(): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    removeIf(predicate: Predicate): boolean;
    retainAll(collection: Collection): boolean;
    size(): number;
    clone(): any;
    toArray(): any[];
    toArray(object: any): any[];
    spliterator(): Spliterator;
    ensureCapacity(i: number): void;
    forEach(consumer: Consumer): void;
    replaceAll(func: UnaryOperator): void;
    sort(comparator: Comparator): void;
    trimToSize(): void;
}

// java.net.URLConnection
declare interface URLConnection {
    connect(): void;
    getAllowUserInteraction(): boolean;
    getDefaultUseCaches(): boolean;
    getDoInput(): boolean;
    getDoOutput(): boolean;
    getUseCaches(): boolean;
    getConnectTimeout(): number;
    getContentLength(): number;
    getHeaderFieldInt(s: string, i: number): number;
    getReadTimeout(): number;
    getInputStream(): InputStream;
    getOutputStream(): OutputStream;
    getContent(): any;
    getContent(clazz: Class): any;
    getContentEncoding(): string;
    getContentType(): string;
    getHeaderField(i: number): string;
    getHeaderField(s: string): string;
    getHeaderFieldKey(i: number): string;
    getRequestProperty(s: string): string;
    getURL(): URL;
    getPermission(): Permission;
    getHeaderFields(): Map;
    getRequestProperties(): Map;
    getContentLengthLong(): number;
    getDate(): number;
    getExpiration(): number;
    getHeaderFieldDate(s: string, l: number): number;
    getHeaderFieldLong(s: string, l: number): number;
    getIfModifiedSince(): number;
    getLastModified(): number;
    getDefaultAllowUserInteraction(): boolean;
    getDefaultUseCaches(s: string): boolean;
    getDefaultRequestProperty(s: string): string;
    guessContentTypeFromName(s: string): string;
    guessContentTypeFromStream(inputStream: InputStream): string;
    getFileNameMap(): FileNameMap;
    setContentHandlerFactory(contentHandlerFactory: ContentHandlerFactory): void;
    setDefaultAllowUserInteraction(b: boolean): void;
    setDefaultRequestProperty(s: string, s: string): void;
    setDefaultUseCaches(s: string, b: boolean): void;
    setFileNameMap(fileNameMap: FileNameMap): void;
    addRequestProperty(s: string, s: string): void;
    setAllowUserInteraction(b: boolean): void;
    setConnectTimeout(i: number): void;
    setDefaultUseCaches(b: boolean): void;
    setDoInput(b: boolean): void;
    setDoOutput(b: boolean): void;
    setIfModifiedSince(l: number): void;
    setReadTimeout(i: number): void;
    setRequestProperty(s: string, s: string): void;
    setUseCaches(b: boolean): void;
}

// java.lang.Number
declare interface Number extends Serializable {
    doubleValue(): number;
    floatValue(): number;
    intValue(): number;
    longValue(): number;
    byteValue(): number;
    shortValue(): number;
}

// java.io.ObjectInputValidation
declare interface ObjectInputValidation {
    validateObject(): void;
}

// java.util.AbstractList
declare interface AbstractList extends AbstractCollection, List {
    get(i: number): any;
    addAll(i: number, collection: Collection): boolean;
    equals(object: any): boolean;
    hashCode(): number;
    indexOf(object: any): number;
    lastIndexOf(object: any): number;
    remove(i: number): any;
    set(i: number, object: any): any;
    subList(i: number, i: number): List;
    listIterator(): ListIterator;
    listIterator(i: number): ListIterator;
    add(i: number, object: any): void;
}

// javax.net.ssl.SSLSessionContext
declare interface SSLSessionContext {
    getSessionCacheSize(): number;
    getSessionTimeout(): number;
    getIds(): Enumeration;
    getSession(b: number): SSLSession;
    setSessionCacheSize(i: number): void;
    setSessionTimeout(i: number): void;
}

// java.util.Map$Entry
declare interface Entry {
    equals(object: any): boolean;
    hashCode(): number;
    getKey(): any;
    getValue(): any;
    setValue(object: any): any;
    comparingByKey(): Comparator;
    comparingByKey(comparator: Comparator): Comparator;
    comparingByValue(): Comparator;
    comparingByValue(comparator: Comparator): Comparator;
}

// java.net.URI
declare interface URI extends Comparable, Serializable {
    isAbsolute(): boolean;
    isOpaque(): boolean;
    compareTo(object: any): number;
    compareTo(uRI: URI): number;
    getPort(): number;
    getAuthority(): string;
    getFragment(): string;
    getHost(): string;
    getPath(): string;
    getQuery(): string;
    getRawAuthority(): string;
    getRawFragment(): string;
    getRawPath(): string;
    getRawQuery(): string;
    getRawSchemeSpecificPart(): string;
    getRawUserInfo(): string;
    getScheme(): string;
    getSchemeSpecificPart(): string;
    getUserInfo(): string;
    toASCIIString(): string;
    normalize(): URI;
    parseServerAuthority(): URI;
    relativize(uRI: URI): URI;
    resolve(s: string): URI;
    resolve(uRI: URI): URI;
    toURL(): URL;
    create(s: string): URI;
}

// java.lang.reflect.AnnotatedType
declare interface AnnotatedType extends AnnotatedElement {
    getType(): Type;
    getAnnotatedOwnerType(): AnnotatedType;
}

// java.util.logging.Formatter
declare interface Formatter {
    format(logRecord: LogRecord): string;
    formatMessage(logRecord: LogRecord): string;
    getHead(handler: Handler): string;
    getTail(handler: Handler): string;
}

// java.util.function.ToLongFunction
declare interface ToLongFunction {
    applyAsLong(object: any): number;
}

// java.awt.image.ImageObserver
declare interface ImageObserver {
    imageUpdate(image: Image, i: number, i: number, i: number, i: number, i: number): boolean;
    ABORT: number;
    ALLBITS: number;
    ERROR: number;
    FRAMEBITS: number;
    HEIGHT: number;
    PROPERTIES: number;
    SOMEBITS: number;
    WIDTH: number;
}

// java.awt.RenderingHints
declare interface RenderingHints extends Map, Cloneable {
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    isEmpty(): boolean;
    size(): number;
    get(object: any): any;
    put(object: any, object: any): any;
    remove(object: any): any;
    values(): Collection;
    entrySet(): Set;
    keySet(): Set;
    add(renderingHints: RenderingHints): void;
    clear(): void;
    putAll(map: Map): void;
    KEY_ALPHA_INTERPOLATION: Key;
    KEY_ANTIALIASING: Key;
    KEY_COLOR_RENDERING: Key;
    KEY_DITHERING: Key;
    KEY_FRACTIONALMETRICS: Key;
    KEY_INTERPOLATION: Key;
    KEY_RENDERING: Key;
    KEY_RESOLUTION_VARIANT: Key;
    KEY_STROKE_CONTROL: Key;
    KEY_TEXT_ANTIALIASING: Key;
    KEY_TEXT_LCD_CONTRAST: Key;
    VALUE_ALPHA_INTERPOLATION_DEFAULT: any;
    VALUE_ALPHA_INTERPOLATION_QUALITY: any;
    VALUE_ALPHA_INTERPOLATION_SPEED: any;
    VALUE_ANTIALIAS_DEFAULT: any;
    VALUE_ANTIALIAS_OFF: any;
    VALUE_ANTIALIAS_ON: any;
    VALUE_COLOR_RENDER_DEFAULT: any;
    VALUE_COLOR_RENDER_QUALITY: any;
    VALUE_COLOR_RENDER_SPEED: any;
    VALUE_DITHER_DEFAULT: any;
    VALUE_DITHER_DISABLE: any;
    VALUE_DITHER_ENABLE: any;
    VALUE_FRACTIONALMETRICS_DEFAULT: any;
    VALUE_FRACTIONALMETRICS_OFF: any;
    VALUE_FRACTIONALMETRICS_ON: any;
    VALUE_INTERPOLATION_BICUBIC: any;
    VALUE_INTERPOLATION_BILINEAR: any;
    VALUE_INTERPOLATION_NEAREST_NEIGHBOR: any;
    VALUE_RENDER_DEFAULT: any;
    VALUE_RENDER_QUALITY: any;
    VALUE_RENDER_SPEED: any;
    VALUE_RESOLUTION_VARIANT_BASE: any;
    VALUE_RESOLUTION_VARIANT_DEFAULT: any;
    VALUE_RESOLUTION_VARIANT_DPI_FIT: any;
    VALUE_RESOLUTION_VARIANT_SIZE_FIT: any;
    VALUE_STROKE_DEFAULT: any;
    VALUE_STROKE_NORMALIZE: any;
    VALUE_STROKE_PURE: any;
    VALUE_TEXT_ANTIALIAS_DEFAULT: any;
    VALUE_TEXT_ANTIALIAS_GASP: any;
    VALUE_TEXT_ANTIALIAS_LCD_HBGR: any;
    VALUE_TEXT_ANTIALIAS_LCD_HRGB: any;
    VALUE_TEXT_ANTIALIAS_LCD_VBGR: any;
    VALUE_TEXT_ANTIALIAS_LCD_VRGB: any;
    VALUE_TEXT_ANTIALIAS_OFF: any;
    VALUE_TEXT_ANTIALIAS_ON: any;
}

// java.lang.CharSequence
declare interface CharSequence {
    charAt(i: number): string;
    length(): number;
    subSequence(i: number, i: number): string;
    toString(): string;
    chars(): IntStream;
    codePoints(): IntStream;
    compare(s: string, s: string): number;
}

// java.lang.reflect.Method
declare interface Method extends Executable {
    equals(object: any): boolean;
    isBridge(): boolean;
    isDefault(): boolean;
    hashCode(): number;
    getReturnType(): Class;
    getDefaultValue(): any;
    invoke(object: any, object: any): any;
    toString(): string;
    getGenericReturnType(): Type;
    setAccessible(b: boolean): void;
}

// java.lang.reflect.TypeVariable
declare interface TypeVariable extends Type, AnnotatedElement {
    getName(): string;
    getAnnotatedBounds(): AnnotatedType[];
    getGenericDeclaration(): GenericDeclaration;
    getBounds(): Type[];
}

// java.lang.reflect.AnnotatedElement
declare interface AnnotatedElement {
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    isAnnotationPresent(clazz: Class): boolean;
    getDeclaredAnnotation(clazz: Class): Annotation;
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
}

// java.awt.image.ImageProducer
declare interface ImageProducer {
    isConsumer(imageConsumer: ImageConsumer): boolean;
    addConsumer(imageConsumer: ImageConsumer): void;
    removeConsumer(imageConsumer: ImageConsumer): void;
    requestTopDownLeftRightResend(imageConsumer: ImageConsumer): void;
    startProduction(imageConsumer: ImageConsumer): void;
}

// java.io.ObjectInputFilter
declare interface ObjectInputFilter {
    checkInput(filterInfo: FilterInfo): Status;
}

// java.awt.image.WritableRaster
declare interface WritableRaster extends Raster {
    createWritableChild(i: number, i: number, i: number, i: number, i: number, i: number, i: number): WritableRaster;
    createWritableTranslatedChild(i: number, i: number): WritableRaster;
    getWritableParent(): WritableRaster;
    setDataElements(i: number, i: number, i: number, i: number, object: any): void;
    setDataElements(i: number, i: number, raster: Raster): void;
    setDataElements(i: number, i: number, object: any): void;
    setPixel(i: number, i: number, d: number): void;
    setPixel(i: number, i: number, f: number): void;
    setPixel(i: number, i: number, i: number): void;
    setPixels(i: number, i: number, i: number, i: number, d: number): void;
    setPixels(i: number, i: number, i: number, i: number, f: number): void;
    setPixels(i: number, i: number, i: number, i: number, i: number): void;
    setRect(i: number, i: number, raster: Raster): void;
    setRect(raster: Raster): void;
    setSample(i: number, i: number, i: number, d: number): void;
    setSample(i: number, i: number, i: number, f: number): void;
    setSample(i: number, i: number, i: number, i: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, d: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, f: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, i: number): void;
}

// java.net.NetworkInterface
declare interface NetworkInterface {
    isLoopback(): boolean;
    isPointToPoint(): boolean;
    isUp(): boolean;
    isVirtual(): boolean;
    supportsMulticast(): boolean;
    getHardwareAddress(): number[];
    getIndex(): number;
    getMTU(): number;
    getDisplayName(): string;
    getName(): string;
    getParent(): NetworkInterface;
    getInetAddresses(): Enumeration;
    getSubInterfaces(): Enumeration;
    getInterfaceAddresses(): List;
    inetAddresses(): Stream;
    subInterfaces(): Stream;
    getByIndex(i: number): NetworkInterface;
    getByInetAddress(inetAddress: InetAddress): NetworkInterface;
    getByName(s: string): NetworkInterface;
    getNetworkInterfaces(): Enumeration;
    networkInterfaces(): Stream;
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

// org.yaml.snakeyaml.constructor.BaseConstructor
declare interface BaseConstructor {
    checkData(): boolean;
    isAllowDuplicateKeys(): boolean;
    isEnumCaseSensitive(): boolean;
    isWrappedToRootException(): boolean;
    isExplicitPropertyUtils(): boolean;
    getPropertyUtils(): PropertyUtils;
    getData(): any;
    getSingleData(clazz: Class): any;
    addTypeDescription(typeDescription: TypeDescription): TypeDescription;
    setAllowDuplicateKeys(b: boolean): void;
    setComposer(composer: Composer): void;
    setEnumCaseSensitive(b: boolean): void;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
    setWrappedToRootException(b: boolean): void;
}

// java.nio.file.FileSystem
declare interface FileSystem extends Closeable {
    isOpen(): boolean;
    isReadOnly(): boolean;
    getFileStores(): Iterable;
    getRootDirectories(): Iterable;
    getSeparator(): string;
    getPath(s: string, s: string): Path;
    getPathMatcher(s: string): PathMatcher;
    newWatchService(): WatchService;
    getUserPrincipalLookupService(): UserPrincipalLookupService;
    provider(): FileSystemProvider;
    supportedFileAttributeViews(): Set;
    close(): void;
}

// com.google.common.collect.Multiset
declare interface Multiset extends Collection {
    add(object: any): boolean;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    equals(object: any): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    setCount(object: any, i: number, i: number): boolean;
    add(object: any, i: number): number;
    count(object: any): number;
    hashCode(): number;
    remove(object: any, i: number): number;
    setCount(object: any, i: number): number;
    size(): number;
    toString(): string;
    iterator(): Iterator;
    elementSet(): Set;
    entrySet(): Set;
    spliterator(): Spliterator;
    forEach(consumer: Consumer): void;
    forEachEntry(objIntConsumer: ObjIntConsumer): void;
}

// java.security.SecureClassLoader
declare interface SecureClassLoader extends ClassLoader {
}

// java.awt.color.ColorSpace
declare interface ColorSpace extends Serializable {
    fromCIEXYZ(f: number): number[];
    fromRGB(f: number): number[];
    toCIEXYZ(f: number): number[];
    toRGB(f: number): number[];
    isCS_sRGB(): boolean;
    getMaxValue(i: number): number;
    getMinValue(i: number): number;
    getNumComponents(): number;
    getType(): number;
    getName(i: number): string;
    getInstance(i: number): ColorSpace;
    CS_CIEXYZ: number;
    CS_GRAY: number;
    CS_LINEAR_RGB: number;
    CS_PYCC: number;
    CS_sRGB: number;
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
    TYPE_CMY: number;
    TYPE_CMYK: number;
    TYPE_DCLR: number;
    TYPE_ECLR: number;
    TYPE_FCLR: number;
    TYPE_GRAY: number;
    TYPE_HLS: number;
    TYPE_HSV: number;
    TYPE_Lab: number;
    TYPE_Luv: number;
    TYPE_RGB: number;
    TYPE_XYZ: number;
    TYPE_YCbCr: number;
    TYPE_Yxy: number;
}

// java.awt.image.WritableRenderedImage
declare interface WritableRenderedImage extends RenderedImage {
    hasTileWriters(): boolean;
    isTileWritable(i: number, i: number): boolean;
    getWritableTileIndices(): Point[];
    getWritableTile(i: number, i: number): WritableRaster;
    addTileObserver(tileObserver: TileObserver): void;
    releaseWritableTile(i: number, i: number): void;
    removeTileObserver(tileObserver: TileObserver): void;
    setData(raster: Raster): void;
}

// java.awt.image.ColorModel
declare interface ColorModel extends Transparency {
    getAlpha(i: number): number;
    getBlue(i: number): number;
    getGreen(i: number): number;
    getRed(i: number): number;
    isCompatibleRaster(raster: Raster): boolean;
    isCompatibleSampleModel(sampleModel: SampleModel): boolean;
    hasAlpha(): boolean;
    isAlphaPremultiplied(): boolean;
    getTransferType(): number;
    getColorSpace(): ColorSpace;
    getNormalizedComponents(i: number, i: number, f: number, i: number): number[];
    getNormalizedComponents(object: any, f: number, i: number): number[];
    getAlpha(object: any): number;
    getBlue(object: any): number;
    getComponentSize(i: number): number;
    getDataElement(f: number, i: number): number;
    getDataElement(i: number, i: number): number;
    getGreen(object: any): number;
    getNumColorComponents(): number;
    getNumComponents(): number;
    getPixelSize(): number;
    getRGB(i: number): number;
    getRGB(object: any): number;
    getRed(object: any): number;
    getTransparency(): number;
    getComponentSize(): number[];
    getComponents(i: number, i: number, i: number): number[];
    getComponents(object: any, i: number, i: number): number[];
    getUnnormalizedComponents(f: number, i: number, i: number, i: number): number[];
    coerceData(writableRaster: WritableRaster, b: boolean): ColorModel;
    createCompatibleSampleModel(i: number, i: number): SampleModel;
    createCompatibleWritableRaster(i: number, i: number): WritableRaster;
    getAlphaRaster(writableRaster: WritableRaster): WritableRaster;
    getDataElements(f: number, i: number, object: any): any;
    getDataElements(i: number, object: any): any;
    getDataElements(i: number, i: number, object: any): any;
    getRGBdefault(): ColorModel;
}

// java.net.Authenticator
declare interface Authenticator {
    requestPasswordAuthenticationInstance(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    getDefault(): Authenticator;
    requestPasswordAuthentication(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string): PasswordAuthentication;
    requestPasswordAuthentication(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    requestPasswordAuthentication(authenticator: Authenticator, s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    requestPasswordAuthentication(inetAddress: InetAddress, i: number, s: string, s: string, s: string): PasswordAuthentication;
    setDefault(authenticator: Authenticator): void;
}

// java.awt.geom.AffineTransform
declare interface AffineTransform extends Cloneable, Serializable {
    isIdentity(): boolean;
    getDeterminant(): number;
    getScaleX(): number;
    getScaleY(): number;
    getShearX(): number;
    getShearY(): number;
    getTranslateX(): number;
    getTranslateY(): number;
    getType(): number;
    createTransformedShape(shape: Shape): Shape;
    createInverse(): AffineTransform;
    deltaTransform(point2D: Point2D, point2D: Point2D): Point2D;
    inverseTransform(point2D: Point2D, point2D: Point2D): Point2D;
    transform(point2D: Point2D, point2D: Point2D): Point2D;
    getQuadrantRotateInstance(i: number): AffineTransform;
    getQuadrantRotateInstance(i: number, d: number, d: number): AffineTransform;
    getRotateInstance(d: number): AffineTransform;
    getRotateInstance(d: number, d: number): AffineTransform;
    getRotateInstance(d: number, d: number, d: number): AffineTransform;
    getRotateInstance(d: number, d: number, d: number, d: number): AffineTransform;
    getScaleInstance(d: number, d: number): AffineTransform;
    getShearInstance(d: number, d: number): AffineTransform;
    getTranslateInstance(d: number, d: number): AffineTransform;
    concatenate(affineTransform: AffineTransform): void;
    deltaTransform(d: number, i: number, d: number, i: number, i: number): void;
    getMatrix(d: number): void;
    inverseTransform(d: number, i: number, d: number, i: number, i: number): void;
    invert(): void;
    preConcatenate(affineTransform: AffineTransform): void;
    quadrantRotate(i: number): void;
    quadrantRotate(i: number, d: number, d: number): void;
    rotate(d: number): void;
    rotate(d: number, d: number): void;
    rotate(d: number, d: number, d: number): void;
    rotate(d: number, d: number, d: number, d: number): void;
    scale(d: number, d: number): void;
    setToIdentity(): void;
    setToQuadrantRotation(i: number): void;
    setToQuadrantRotation(i: number, d: number, d: number): void;
    setToRotation(d: number): void;
    setToRotation(d: number, d: number): void;
    setToRotation(d: number, d: number, d: number): void;
    setToRotation(d: number, d: number, d: number, d: number): void;
    setToScale(d: number, d: number): void;
    setToShear(d: number, d: number): void;
    setToTranslation(d: number, d: number): void;
    setTransform(d: number, d: number, d: number, d: number, d: number, d: number): void;
    setTransform(affineTransform: AffineTransform): void;
    shear(d: number, d: number): void;
    transform(d: number, i: number, d: number, i: number, i: number): void;
    transform(d: number, i: number, f: number, i: number, i: number): void;
    transform(f: number, i: number, d: number, i: number, i: number): void;
    transform(f: number, i: number, f: number, i: number, i: number): void;
    transform(point2D: Point2D, i: number, point2D: Point2D, i: number, i: number): void;
    translate(d: number, d: number): void;
    TYPE_FLIP: number;
    TYPE_GENERAL_ROTATION: number;
    TYPE_GENERAL_SCALE: number;
    TYPE_GENERAL_TRANSFORM: number;
    TYPE_IDENTITY: number;
    TYPE_MASK_ROTATION: number;
    TYPE_MASK_SCALE: number;
    TYPE_QUADRANT_ROTATION: number;
    TYPE_TRANSLATION: number;
    TYPE_UNIFORM_SCALE: number;
}

// java.nio.file.WatchEvent$Modifier
declare interface Modifier {
    name(): string;
}

// java.net.CookieHandler
declare interface CookieHandler {
    get(uRI: URI, map: Map): Map;
    put(uRI: URI, map: Map): void;
    getDefault(): CookieHandler;
    setDefault(cookieHandler: CookieHandler): void;
}

// java.util.function.UnaryOperator
declare interface UnaryOperator extends Function {
    identity(): UnaryOperator;
}

// java.awt.Graphics2D
declare interface Graphics2D extends Graphics {
    drawImage(image: Image, affineTransform: AffineTransform, imageObserver: ImageObserver): boolean;
    hit(rectangle: Rectangle, shape: Shape, b: boolean): boolean;
    getBackground(): Color;
    getComposite(): Composite;
    getDeviceConfiguration(): GraphicsConfiguration;
    getPaint(): Paint;
    getRenderingHints(): RenderingHints;
    getStroke(): Stroke;
    getFontRenderContext(): FontRenderContext;
    getTransform(): AffineTransform;
    getRenderingHint(key: Key): any;
    addRenderingHints(map: Map): void;
    clip(shape: Shape): void;
    draw(shape: Shape): void;
    drawGlyphVector(glyphVector: GlyphVector, f: number, f: number): void;
    drawImage(bufferedImage: BufferedImage, bufferedImageOp: BufferedImageOp, i: number, i: number): void;
    drawRenderableImage(renderableImage: RenderableImage, affineTransform: AffineTransform): void;
    drawRenderedImage(renderedImage: RenderedImage, affineTransform: AffineTransform): void;
    drawString(s: string, f: number, f: number): void;
    drawString(attributedCharacterIterator: AttributedCharacterIterator, f: number, f: number): void;
    fill(shape: Shape): void;
    rotate(d: number): void;
    rotate(d: number, d: number, d: number): void;
    scale(d: number, d: number): void;
    setBackground(color: Color): void;
    setComposite(composite: Composite): void;
    setPaint(paint: Paint): void;
    setRenderingHint(key: Key, object: any): void;
    setRenderingHints(map: Map): void;
    setStroke(stroke: Stroke): void;
    setTransform(affineTransform: AffineTransform): void;
    shear(d: number, d: number): void;
    transform(affineTransform: AffineTransform): void;
    translate(d: number, d: number): void;
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

// java.io.ObjectStreamConstants
declare interface ObjectStreamConstants {
    SC_BLOCK_DATA: number;
    SC_ENUM: number;
    SC_EXTERNALIZABLE: number;
    SC_SERIALIZABLE: number;
    SC_WRITE_METHOD: number;
    TC_ARRAY: number;
    TC_BASE: number;
    TC_BLOCKDATA: number;
    TC_BLOCKDATALONG: number;
    TC_CLASS: number;
    TC_CLASSDESC: number;
    TC_ENDBLOCKDATA: number;
    TC_ENUM: number;
    TC_EXCEPTION: number;
    TC_LONGSTRING: number;
    TC_MAX: number;
    TC_NULL: number;
    TC_OBJECT: number;
    TC_PROXYCLASSDESC: number;
    TC_REFERENCE: number;
    TC_RESET: number;
    TC_STRING: number;
    PROTOCOL_VERSION_1: number;
    PROTOCOL_VERSION_2: number;
    baseWireHandle: number;
    SERIAL_FILTER_PERMISSION: SerializablePermission;
    SUBCLASS_IMPLEMENTATION_PERMISSION: SerializablePermission;
    SUBSTITUTION_PERMISSION: SerializablePermission;
    STREAM_MAGIC: number;
    STREAM_VERSION: number;
}

// java.io.Closeable
declare interface Closeable extends AutoCloseable {
    close(): void;
}

// java.net.SocketAddress
declare interface SocketAddress extends Serializable {
}

// java.util.AbstractMap
declare interface AbstractMap extends Map {
    entrySet(): Set;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    isEmpty(): boolean;
    size(): number;
    get(object: any): any;
    put(object: any, object: any): any;
    remove(object: any): any;
    values(): Collection;
    keySet(): Set;
    clear(): void;
    putAll(map: Map): void;
}

// java.awt.Transparency
declare interface Transparency {
    getTransparency(): number;
    BITMASK: number;
    OPAQUE: number;
    TRANSLUCENT: number;
}

// java.lang.Appendable
declare interface Appendable {
    append(c: string): Appendable;
    append(s: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
}

// java.net.http.WebSocket$Listener
declare interface Listener {
    onBinary(webSocket: WebSocket, byteBuffer: ByteBuffer, b: boolean): CompletionStage;
    onClose(webSocket: WebSocket, i: number, s: string): CompletionStage;
    onPing(webSocket: WebSocket, byteBuffer: ByteBuffer): CompletionStage;
    onPong(webSocket: WebSocket, byteBuffer: ByteBuffer): CompletionStage;
    onText(webSocket: WebSocket, s: string, b: boolean): CompletionStage;
    onError(webSocket: WebSocket, throwable: Throwable): void;
    onOpen(webSocket: WebSocket): void;
}

// java.lang.reflect.Type
declare interface Type {
    getTypeName(): string;
}

// java.awt.image.Raster
declare interface Raster {
    getSampleDouble(i: number, i: number, i: number): number;
    getPixel(i: number, i: number, d: number): number[];
    getPixels(i: number, i: number, i: number, i: number, d: number): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, d: number): number[];
    getHeight(): number;
    getMinX(): number;
    getMinY(): number;
    getNumBands(): number;
    getNumDataElements(): number;
    getSampleModelTranslateX(): number;
    getSampleModelTranslateY(): number;
    getTransferType(): number;
    getWidth(): number;
    getSampleFloat(i: number, i: number, i: number): number;
    getPixel(i: number, i: number, f: number): number[];
    getPixels(i: number, i: number, i: number, i: number, f: number): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, f: number): number[];
    getSample(i: number, i: number, i: number): number;
    getPixel(i: number, i: number, i: number): number[];
    getPixels(i: number, i: number, i: number, i: number, i: number): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, i: number): number[];
    getBounds(): Rectangle;
    getDataBuffer(): DataBuffer;
    createChild(i: number, i: number, i: number, i: number, i: number, i: number, i: number): Raster;
    createTranslatedChild(i: number, i: number): Raster;
    getParent(): Raster;
    getSampleModel(): SampleModel;
    createCompatibleWritableRaster(): WritableRaster;
    createCompatibleWritableRaster(i: number, i: number): WritableRaster;
    createCompatibleWritableRaster(i: number, i: number, i: number, i: number): WritableRaster;
    createCompatibleWritableRaster(rectangle: Rectangle): WritableRaster;
    getDataElements(i: number, i: number, i: number, i: number, object: any): any;
    getDataElements(i: number, i: number, object: any): any;
    createRaster(sampleModel: SampleModel, dataBuffer: DataBuffer, point: Point): Raster;
    createBandedRaster(i: number, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createBandedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createBandedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createInterleavedRaster(i: number, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createInterleavedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createInterleavedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, point: Point): WritableRaster;
    createWritableRaster(sampleModel: SampleModel, point: Point): WritableRaster;
    createWritableRaster(sampleModel: SampleModel, dataBuffer: DataBuffer, point: Point): WritableRaster;
}

// java.io.FilenameFilter
declare interface FilenameFilter {
    accept(file: File, s: string): boolean;
}

// java.time.Instant
declare interface Instant extends Temporal, TemporalAdjuster, Comparable, Serializable {
    isAfter(instant: Instant): boolean;
    isBefore(instant: Instant): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(instant: Instant): number;
    get(temporalField: TemporalField): number;
    getNano(): number;
    query(temporalQuery: TemporalQuery): any;
    minus(temporalAmount: TemporalAmount): Instant;
    minus(l: number, temporalUnit: TemporalUnit): Instant;
    minusMillis(l: number): Instant;
    minusNanos(l: number): Instant;
    minusSeconds(l: number): Instant;
    plus(temporalAmount: TemporalAmount): Instant;
    plus(l: number, temporalUnit: TemporalUnit): Instant;
    plusMillis(l: number): Instant;
    plusNanos(l: number): Instant;
    plusSeconds(l: number): Instant;
    truncatedTo(temporalUnit: TemporalUnit): Instant;
    with(temporalAdjuster: TemporalAdjuster): Instant;
    with(temporalField: TemporalField, l: number): Instant;
    atOffset(zoneOffset: ZoneOffset): OffsetDateTime;
    atZone(zoneId: ZoneId): ZonedDateTime;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getEpochSecond(): number;
    getLong(temporalField: TemporalField): number;
    toEpochMilli(): number;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    from(temporalAccessor: TemporalAccessor): Instant;
    now(): Instant;
    now(clock: Clock): Instant;
    ofEpochMilli(l: number): Instant;
    ofEpochSecond(l: number): Instant;
    ofEpochSecond(l: number, l: number): Instant;
    parse(s: string): Instant;
    EPOCH: Instant;
    MAX: Instant;
    MIN: Instant;
}

// java.util.stream.DoubleStream
declare interface DoubleStream extends BaseStream {
    allMatch(doublePredicate: DoublePredicate): boolean;
    anyMatch(doublePredicate: DoublePredicate): boolean;
    noneMatch(doublePredicate: DoublePredicate): boolean;
    reduce(d: number, doubleBinaryOperator: DoubleBinaryOperator): number;
    sum(): number;
    toArray(): number[];
    collect(supplier: Supplier, objDoubleConsumer: ObjDoubleConsumer, biConsumer: BiConsumer): any;
    summaryStatistics(): DoubleSummaryStatistics;
    average(): OptionalDouble;
    findAny(): OptionalDouble;
    findFirst(): OptionalDouble;
    max(): OptionalDouble;
    min(): OptionalDouble;
    reduce(doubleBinaryOperator: DoubleBinaryOperator): OptionalDouble;
    iterator(): OfDouble;
    spliterator(): OfDouble;
    distinct(): DoubleStream;
    filter(doublePredicate: DoublePredicate): DoubleStream;
    flatMap(doubleFunction: DoubleFunction): DoubleStream;
    limit(l: number): DoubleStream;
    map(doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    parallel(): DoubleStream;
    peek(doubleConsumer: DoubleConsumer): DoubleStream;
    sequential(): DoubleStream;
    skip(l: number): DoubleStream;
    sorted(): DoubleStream;
    mapToInt(doubleToIntFunction: DoubleToIntFunction): IntStream;
    mapToLong(doubleToLongFunction: DoubleToLongFunction): LongStream;
    boxed(): Stream;
    mapToObj(doubleFunction: DoubleFunction): Stream;
    count(): number;
    forEach(doubleConsumer: DoubleConsumer): void;
    forEachOrdered(doubleConsumer: DoubleConsumer): void;
    iterator(): Iterator;
    spliterator(): Spliterator;
    parallel(): BaseStream;
    sequential(): BaseStream;
    dropWhile(doublePredicate: DoublePredicate): DoubleStream;
    takeWhile(doublePredicate: DoublePredicate): DoubleStream;
    concat(doubleStream: DoubleStream, doubleStream: DoubleStream): DoubleStream;
    empty(): DoubleStream;
    generate(doubleSupplier: DoubleSupplier): DoubleStream;
    iterate(d: number, doublePredicate: DoublePredicate, doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    iterate(d: number, doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    of(d: number): DoubleStream;
    of(d: number): DoubleStream;
    builder(): Builder;
}

// java.util.logging.ErrorManager
declare interface ErrorManager {
    error(s: string, exception: Exception, i: number): void;
    CLOSE_FAILURE: number;
    FLUSH_FAILURE: number;
    FORMAT_FAILURE: number;
    GENERIC_FAILURE: number;
    OPEN_FAILURE: number;
    WRITE_FAILURE: number;
}

// java.nio.file.Watchable
declare interface Watchable {
    register(watchService: WatchService, kind: Kind): WatchKey;
    register(watchService: WatchService, kind: Kind, modifier: Modifier): WatchKey;
}

// java.io.ObjectOutput
declare interface ObjectOutput extends DataOutput, AutoCloseable {
    close(): void;
    flush(): void;
    write(b: number): void;
    write(b: number, i: number, i: number): void;
    write(i: number): void;
    writeObject(object: any): void;
}

// java.util.SortedMap
declare interface SortedMap extends Map {
    firstKey(): any;
    lastKey(): any;
    values(): Collection;
    comparator(): Comparator;
    entrySet(): Set;
    keySet(): Set;
    headMap(object: any): SortedMap;
    subMap(object: any, object: any): SortedMap;
    tailMap(object: any): SortedMap;
}

// java.util.regex.Matcher
declare interface Matcher extends MatchResult {
    find(): boolean;
    find(i: number): boolean;
    hasAnchoringBounds(): boolean;
    hasTransparentBounds(): boolean;
    hitEnd(): boolean;
    lookingAt(): boolean;
    matches(): boolean;
    requireEnd(): boolean;
    end(): number;
    end(i: number): number;
    end(s: string): number;
    groupCount(): number;
    regionEnd(): number;
    regionStart(): number;
    start(): number;
    start(i: number): number;
    start(s: string): number;
    group(): string;
    group(i: number): string;
    group(s: string): string;
    replaceAll(s: string): string;
    replaceAll(func: Function): string;
    replaceFirst(s: string): string;
    replaceFirst(func: Function): string;
    appendTail(s: string): string;
    appendTail(s: string): string;
    toMatchResult(): MatchResult;
    appendReplacement(s: string, s: string): Matcher;
    appendReplacement(s: string, s: string): Matcher;
    region(i: number, i: number): Matcher;
    reset(): Matcher;
    reset(s: string): Matcher;
    useAnchoringBounds(b: boolean): Matcher;
    usePattern(pattern: Pattern): Matcher;
    useTransparentBounds(b: boolean): Matcher;
    pattern(): Pattern;
    results(): Stream;
    quoteReplacement(s: string): string;
}

// java.util.Spliterator
declare interface Spliterator {
    tryAdvance(consumer: Consumer): boolean;
    characteristics(): number;
    trySplit(): Spliterator;
    estimateSize(): number;
    hasCharacteristics(i: number): boolean;
    getComparator(): Comparator;
    getExactSizeIfKnown(): number;
    forEachRemaining(consumer: Consumer): void;
    CONCURRENT: number;
    DISTINCT: number;
    IMMUTABLE: number;
    NONNULL: number;
    ORDERED: number;
    SIZED: number;
    SORTED: number;
    SUBSIZED: number;
}

// java.io.PrintWriter
declare interface PrintWriter extends Writer {
    checkError(): boolean;
    format(s: string, object: any): PrintWriter;
    format(locale: Locale, s: string, object: any): PrintWriter;
    printf(s: string, object: any): PrintWriter;
    printf(locale: Locale, s: string, object: any): PrintWriter;
    print(b: boolean): void;
    print(c: string): void;
    print(c: string): void;
    print(d: number): void;
    print(f: number): void;
    print(i: number): void;
    print(object: any): void;
    print(s: string): void;
    print(l: number): void;
    println(): void;
    println(b: boolean): void;
    println(c: string): void;
    println(c: string): void;
    println(d: number): void;
    println(f: number): void;
    println(i: number): void;
    println(object: any): void;
    println(s: string): void;
    println(l: number): void;
}

// java.nio.ByteBuffer
declare interface ByteBuffer extends Buffer, Comparable {
    get(): number;
    get(i: number): number;
    getChar(): string;
    getChar(i: number): string;
    getDouble(): number;
    getDouble(i: number): number;
    getFloat(): number;
    getFloat(i: number): number;
    getInt(): number;
    getInt(i: number): number;
    asReadOnlyBuffer(): ByteBuffer;
    compact(): ByteBuffer;
    put(b: number): ByteBuffer;
    put(i: number, b: number): ByteBuffer;
    putChar(c: string): ByteBuffer;
    putChar(i: number, c: string): ByteBuffer;
    putDouble(d: number): ByteBuffer;
    putDouble(i: number, d: number): ByteBuffer;
    putFloat(f: number): ByteBuffer;
    putFloat(i: number, f: number): ByteBuffer;
    putInt(i: number): ByteBuffer;
    putInt(i: number, i: number): ByteBuffer;
    putLong(i: number, l: number): ByteBuffer;
    putLong(l: number): ByteBuffer;
    putShort(i: number, s: number): ByteBuffer;
    putShort(s: number): ByteBuffer;
    asCharBuffer(): string;
    asDoubleBuffer(): DoubleBuffer;
    asFloatBuffer(): FloatBuffer;
    asIntBuffer(): IntBuffer;
    asLongBuffer(): LongBuffer;
    asShortBuffer(): ShortBuffer;
    getLong(): number;
    getLong(i: number): number;
    getShort(): number;
    getShort(i: number): number;
    equals(object: any): boolean;
    alignmentOffset(i: number, i: number): number;
    alignedSlice(i: number): ByteBuffer;
    order(byteOrder: ByteOrder): ByteBuffer;
    put(b: number): ByteBuffer;
    order(): ByteOrder;
    compareTo(object: any): number;
    compareTo(byteBuffer: ByteBuffer): number;
    hashCode(): number;
    mismatch(byteBuffer: ByteBuffer): number;
    toString(): string;
    get(b: number): ByteBuffer;
    get(b: number, i: number, i: number): ByteBuffer;
    put(b: number, i: number, i: number): ByteBuffer;
    put(byteBuffer: ByteBuffer): ByteBuffer;
    allocate(i: number): ByteBuffer;
    allocateDirect(i: number): ByteBuffer;
    wrap(b: number): ByteBuffer;
    wrap(b: number, i: number, i: number): ByteBuffer;
}

// java.awt.image.TileObserver
declare interface TileObserver {
    tileUpdate(writableRenderedImage: WritableRenderedImage, i: number, i: number, b: boolean): void;
}

// java.lang.Readable
declare interface Readable {
    read(s: string): number;
}

// java.util.function.ToDoubleFunction
declare interface ToDoubleFunction {
    applyAsDouble(object: any): number;
}

// java.net.http.HttpResponse$BodySubscriber
declare interface BodySubscriber extends Subscriber {
    getBody(): CompletionStage;
}

// java.util.RandomAccess
declare interface RandomAccess {
}

// java.util.function.ToIntFunction
declare interface ToIntFunction {
    applyAsInt(object: any): number;
}

// java.awt.Paint
declare interface Paint extends Transparency {
    createContext(colorModel: ColorModel, rectangle: Rectangle, rectangle2D: Rectangle2D, affineTransform: AffineTransform, renderingHints: RenderingHints): PaintContext;
}

// java.lang.StackTraceElement
declare interface StackTraceElement extends Serializable {
    isNativeMethod(): boolean;
    getLineNumber(): number;
    getClassLoaderName(): string;
    getClassName(): string;
    getFileName(): string;
    getMethodName(): string;
    getModuleName(): string;
    getModuleVersion(): string;
}

// java.util.stream.LongStream
declare interface LongStream extends BaseStream {
    allMatch(longPredicate: LongPredicate): boolean;
    anyMatch(longPredicate: LongPredicate): boolean;
    noneMatch(longPredicate: LongPredicate): boolean;
    collect(supplier: Supplier, objLongConsumer: ObjLongConsumer, biConsumer: BiConsumer): any;
    summaryStatistics(): LongSummaryStatistics;
    average(): OptionalDouble;
    findAny(): OptionalLong;
    findFirst(): OptionalLong;
    max(): OptionalLong;
    min(): OptionalLong;
    reduce(longBinaryOperator: LongBinaryOperator): OptionalLong;
    iterator(): OfLong;
    spliterator(): OfLong;
    asDoubleStream(): DoubleStream;
    mapToDouble(longToDoubleFunction: LongToDoubleFunction): DoubleStream;
    mapToInt(longToIntFunction: LongToIntFunction): IntStream;
    distinct(): LongStream;
    filter(longPredicate: LongPredicate): LongStream;
    flatMap(longFunction: LongFunction): LongStream;
    limit(l: number): LongStream;
    map(longUnaryOperator: LongUnaryOperator): LongStream;
    parallel(): LongStream;
    peek(longConsumer: LongConsumer): LongStream;
    sequential(): LongStream;
    skip(l: number): LongStream;
    sorted(): LongStream;
    boxed(): Stream;
    mapToObj(longFunction: LongFunction): Stream;
    count(): number;
    reduce(l: number, longBinaryOperator: LongBinaryOperator): number;
    sum(): number;
    toArray(): number[];
    forEach(longConsumer: LongConsumer): void;
    forEachOrdered(longConsumer: LongConsumer): void;
    iterator(): Iterator;
    spliterator(): Spliterator;
    parallel(): BaseStream;
    sequential(): BaseStream;
    dropWhile(longPredicate: LongPredicate): LongStream;
    takeWhile(longPredicate: LongPredicate): LongStream;
    concat(longStream: LongStream, longStream: LongStream): LongStream;
    empty(): LongStream;
    generate(longSupplier: LongSupplier): LongStream;
    iterate(l: number, longPredicate: LongPredicate, longUnaryOperator: LongUnaryOperator): LongStream;
    iterate(l: number, longUnaryOperator: LongUnaryOperator): LongStream;
    of(l: number): LongStream;
    of(l: number): LongStream;
    range(l: number, l: number): LongStream;
    rangeClosed(l: number, l: number): LongStream;
    builder(): Builder;
}

// java.lang.reflect.Field
declare interface Field extends AccessibleObject, Member {
    equals(object: any): boolean;
    getBoolean(object: any): boolean;
    isEnumConstant(): boolean;
    isSynthetic(): boolean;
    getByte(object: any): number;
    getChar(object: any): string;
    getDouble(object: any): number;
    getFloat(object: any): number;
    getInt(object: any): number;
    getModifiers(): number;
    hashCode(): number;
    getDeclaringClass(): Class;
    getType(): Class;
    get(object: any): any;
    getName(): string;
    toGenericString(): string;
    toString(): string;
    getAnnotatedType(): AnnotatedType;
    getGenericType(): Type;
    getLong(object: any): number;
    getShort(object: any): number;
    set(object: any, object: any): void;
    setBoolean(object: any, b: boolean): void;
    setByte(object: any, b: number): void;
    setChar(object: any, c: string): void;
    setDouble(object: any, d: number): void;
    setFloat(object: any, f: number): void;
    setInt(object: any, i: number): void;
    setLong(object: any, l: number): void;
    setShort(object: any, s: number): void;
}

// javax.net.ssl.SSLServerSocketFactory
declare interface SSLServerSocketFactory extends ServerSocketFactory {
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
}

// java.nio.file.WatchEvent$Kind
declare interface Kind {
    type(): Class;
    name(): string;
}

// org.yaml.snakeyaml.representer.SafeRepresenter
declare interface SafeRepresenter extends BaseRepresenter {
    getTimeZone(): TimeZone;
    addClassTag(clazz: Class, tag: Tag): Tag;
    setTimeZone(timeZone: TimeZone): void;
}

// java.security.SecureRandom
declare interface SecureRandom extends Random {
    generateSeed(i: number): number[];
    getProvider(): Provider;
    getAlgorithm(): string;
    toString(): string;
    getParameters(): SecureRandomParameters;
    getSeed(i: number): number[];
    getInstance(s: string): SecureRandom;
    getInstance(s: string, s: string): SecureRandom;
    getInstance(s: string, provider: Provider): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters, s: string): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters, provider: Provider): SecureRandom;
    getInstanceStrong(): SecureRandom;
    nextBytes(b: number, secureRandomParameters: SecureRandomParameters): void;
    reseed(): void;
    reseed(secureRandomParameters: SecureRandomParameters): void;
    setSeed(b: number): void;
}

// java.awt.ImageCapabilities
declare interface ImageCapabilities extends Cloneable {
    isAccelerated(): boolean;
    isTrueVolatile(): boolean;
}

// java.lang.Thread$UncaughtExceptionHandler
declare interface UncaughtExceptionHandler {
    uncaughtException(thread: Thread, throwable: Throwable): void;
}

// java.lang.ThreadGroup
declare interface ThreadGroup extends UncaughtExceptionHandler {
    allowThreadSuspension(b: boolean): boolean;
    isDaemon(): boolean;
    parentOf(threadGroup: ThreadGroup): boolean;
    getMaxPriority(): number;
    getName(): string;
    getParent(): ThreadGroup;
    checkAccess(): void;
    destroy(): void;
    interrupt(): void;
    resume(): void;
    setDaemon(b: boolean): void;
    setMaxPriority(i: number): void;
    stop(): void;
    suspend(): void;
    activeCount(): number;
    activeGroupCount(): number;
    enumerate(threadGroup: ThreadGroup): number;
    enumerate(threadGroup: ThreadGroup, b: boolean): number;
    enumerate(thread: Thread): number;
    enumerate(thread: Thread, b: boolean): number;
    isDestroyed(): boolean;
    list(): void;
    uncaughtException(thread: Thread, throwable: Throwable): void;
}

// java.nio.charset.CharsetEncoder
declare interface CharsetEncoder {
    canEncode(c: string): boolean;
    canEncode(s: string): boolean;
    isLegalReplacement(b: number): boolean;
    replacement(): number[];
    averageBytesPerChar(): number;
    maxBytesPerChar(): number;
    encode(s: string): ByteBuffer;
    charset(): Charset;
    onMalformedInput(codingErrorAction: CodingErrorAction): CharsetEncoder;
    onUnmappableCharacter(codingErrorAction: CodingErrorAction): CharsetEncoder;
    replaceWith(b: number): CharsetEncoder;
    reset(): CharsetEncoder;
    encode(s: string, byteBuffer: ByteBuffer, b: boolean): CoderResult;
    flush(byteBuffer: ByteBuffer): CoderResult;
    malformedInputAction(): CodingErrorAction;
    unmappableCharacterAction(): CodingErrorAction;
}

// javax.net.ssl.TrustManager
declare interface TrustManager {
}

// java.io.ObjectInputStream$GetField
declare interface GetField {
    defaulted(s: string): boolean;
    get(s: string, b: boolean): boolean;
    get(s: string, b: number): number;
    get(s: string, c: string): string;
    get(s: string, d: number): number;
    get(s: string, f: number): number;
    get(s: string, i: number): number;
    getObjectStreamClass(): ObjectStreamClass;
    get(s: string, object: any): any;
    get(s: string, l: number): number;
    get(s: string, s: number): number;
}

// java.io.PrintStream
declare interface PrintStream extends FilterOutputStream, Appendable, Closeable {
    checkError(): boolean;
    append(c: string): PrintStream;
    append(s: string): PrintStream;
    append(s: string, i: number, i: number): PrintStream;
    format(s: string, object: any): PrintStream;
    format(locale: Locale, s: string, object: any): PrintStream;
    printf(s: string, object: any): PrintStream;
    printf(locale: Locale, s: string, object: any): PrintStream;
    append(c: string): Appendable;
    append(s: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    print(b: boolean): void;
    print(c: string): void;
    print(c: string): void;
    print(d: number): void;
    print(f: number): void;
    print(i: number): void;
    print(object: any): void;
    print(s: string): void;
    print(l: number): void;
    println(): void;
    println(b: boolean): void;
    println(c: string): void;
    println(c: string): void;
    println(d: number): void;
    println(f: number): void;
    println(i: number): void;
    println(object: any): void;
    println(s: string): void;
    println(l: number): void;
}

// org.yaml.snakeyaml.TypeDescription
declare interface TypeDescription {
    setProperty(object: any, s: string, object: any): boolean;
    setupPropertyType(s: string, node: Node): boolean;
    getListPropertyType(s: string): Class;
    getMapKeyType(s: string): Class;
    getMapValueType(s: string): Class;
    getType(): Class;
    finalizeConstruction(object: any): any;
    newInstance(s: string, node: Node): any;
    newInstance(node: Node): any;
    getProperties(): Set;
    getProperty(s: string): Property;
    getTag(): Tag;
    addPropertyParameters(s: string, clazz: Class): void;
    putListPropertyType(s: string, clazz: Class): void;
    putMapPropertyType(s: string, clazz: Class, clazz: Class): void;
    setExcludes(s: string): void;
    setIncludes(s: string): void;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
    setTag(s: string): void;
    setTag(tag: Tag): void;
    substituteProperty(s: string, clazz: Class, s: string, s: string, clazz: Class): void;
    substituteProperty(propertySubstitute: PropertySubstitute): void;
}

// java.nio.CharBuffer
declare interface CharBuffer extends Buffer, Comparable, Appendable, CharSequence, Readable {
    get(): string;
    get(i: number): string;
    order(): ByteOrder;
    asReadOnlyBuffer(): string;
    compact(): string;
    put(c: string): string;
    put(i: number, c: string): string;
    subSequence(i: number, i: number): string;
    equals(object: any): boolean;
    charAt(i: number): string;
    length(): number;
    put(c: string): string;
    put(s: string): string;
    compareTo(object: any): number;
    compareTo(s: string): number;
    hashCode(): number;
    mismatch(s: string): number;
    read(s: string): number;
    append(c: string): Appendable;
    append(s: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    subSequence(i: number, i: number): string;
    toString(): string;
    append(c: string): string;
    append(s: string): string;
    append(s: string, i: number, i: number): string;
    get(c: string): string;
    get(c: string, i: number, i: number): string;
    put(c: string, i: number, i: number): string;
    put(s: string, i: number, i: number): string;
    put(s: string): string;
    chars(): IntStream;
    allocate(i: number): string;
    wrap(c: string): string;
    wrap(c: string, i: number, i: number): string;
    wrap(s: string): string;
    wrap(s: string, i: number, i: number): string;
}

// java.awt.GraphicsConfiguration
declare interface GraphicsConfiguration {
    getDevice(): GraphicsDevice;
    getBounds(): Rectangle;
    getDefaultTransform(): AffineTransform;
    getNormalizingTransform(): AffineTransform;
    getColorModel(): ColorModel;
    getColorModel(i: number): ColorModel;
    isTranslucencyCapable(): boolean;
    getBufferCapabilities(): BufferCapabilities;
    getImageCapabilities(): ImageCapabilities;
    createCompatibleImage(i: number, i: number): BufferedImage;
    createCompatibleImage(i: number, i: number, i: number): BufferedImage;
    createCompatibleVolatileImage(i: number, i: number): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, i: number): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities, i: number): VolatileImage;
}

// java.net.Proxy
declare interface Proxy {
    type(): Type;
    address(): SocketAddress;
    NO_PROXY: Proxy;
}

// java.io.Flushable
declare interface Flushable {
    flush(): void;
}

// java.util.function.IntFunction
declare interface IntFunction {
    apply(i: number): any;
}

// java.net.http.HttpResponse$ResponseInfo
declare interface ResponseInfo {
    statusCode(): number;
    version(): Version;
    headers(): HttpHeaders;
}

// java.util.concurrent.Flow$Subscription
declare interface Subscription {
    cancel(): void;
    request(l: number): void;
}

// java.net.URLStreamHandlerFactory
declare interface URLStreamHandlerFactory {
    createURLStreamHandler(s: string): URLStreamHandler;
}

// java.security.Provider
declare interface Provider extends Properties {
    isConfigured(): boolean;
    getVersion(): number;
    getInfo(): string;
    getName(): string;
    getVersionStr(): string;
    configure(s: string): Provider;
    getService(s: string, s: string): Service;
    getServices(): Set;
}

// java.awt.Graphics
declare interface Graphics {
    drawImage(image: Image, i: number, i: number, i: number, i: number, i: number, i: number, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, i: number, i: number, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    getColor(): Color;
    getFont(): Font;
    getFontMetrics(font: Font): FontMetrics;
    create(): Graphics;
    getClipBounds(): Rectangle;
    getClip(): Shape;
    clearRect(i: number, i: number, i: number, i: number): void;
    clipRect(i: number, i: number, i: number, i: number): void;
    copyArea(i: number, i: number, i: number, i: number, i: number, i: number): void;
    dispose(): void;
    drawArc(i: number, i: number, i: number, i: number, i: number, i: number): void;
    drawLine(i: number, i: number, i: number, i: number): void;
    drawOval(i: number, i: number, i: number, i: number): void;
    drawPolygon(i: number, i: number, i: number): void;
    drawPolyline(i: number, i: number, i: number): void;
    drawRoundRect(i: number, i: number, i: number, i: number, i: number, i: number): void;
    drawString(s: string, i: number, i: number): void;
    drawString(attributedCharacterIterator: AttributedCharacterIterator, i: number, i: number): void;
    fillArc(i: number, i: number, i: number, i: number, i: number, i: number): void;
    fillOval(i: number, i: number, i: number, i: number): void;
    fillPolygon(i: number, i: number, i: number): void;
    fillRect(i: number, i: number, i: number, i: number): void;
    fillRoundRect(i: number, i: number, i: number, i: number, i: number, i: number): void;
    setClip(i: number, i: number, i: number, i: number): void;
    setClip(shape: Shape): void;
    setColor(color: Color): void;
    setFont(font: Font): void;
    setPaintMode(): void;
    setXORMode(color: Color): void;
    translate(i: number, i: number): void;
    hitClip(i: number, i: number, i: number, i: number): boolean;
    getFontMetrics(): FontMetrics;
    create(i: number, i: number, i: number, i: number): Graphics;
    getClipBounds(rectangle: Rectangle): Rectangle;
    getClipRect(): Rectangle;
    draw3DRect(i: number, i: number, i: number, i: number, b: boolean): void;
    drawBytes(b: number, i: number, i: number, i: number, i: number): void;
    drawChars(c: string, i: number, i: number, i: number, i: number): void;
    drawPolygon(polygon: Polygon): void;
    drawRect(i: number, i: number, i: number, i: number): void;
    fill3DRect(i: number, i: number, i: number, i: number, b: boolean): void;
    fillPolygon(polygon: Polygon): void;
}

// java.util.concurrent.Executor
declare interface Executor {
    execute(runnable: Runnable): void;
}

// java.util.ResourceBundle$Control
declare interface Control {
    needsReload(s: string, locale: Locale, s: string, classLoader: ClassLoader, resourceBundle: ResourceBundle, l: number): boolean;
    toResourceName(s: string, s: string): string;
    toBundleName(s: string, locale: Locale): string;
    getCandidateLocales(s: string, locale: Locale): List;
    getFormats(s: string): List;
    getFallbackLocale(s: string, locale: Locale): Locale;
    newBundle(s: string, locale: Locale, s: string, classLoader: ClassLoader, b: boolean): ResourceBundle;
    getTimeToLive(s: string, locale: Locale): number;
    getControl(list: List): Control;
    getNoFallbackControl(list: List): Control;
    FORMAT_CLASS: List;
    FORMAT_DEFAULT: List;
    FORMAT_PROPERTIES: List;
    TTL_DONT_CACHE: number;
    TTL_NO_EXPIRATION_CONTROL: number;
}

// java.io.FileFilter
declare interface FileFilter {
    accept(file: File): boolean;
}

// java.lang.Module
declare interface Module extends AnnotatedElement {
    canRead(module: Module): boolean;
    canUse(clazz: Class): boolean;
    isExported(s: string): boolean;
    isExported(s: string, module: Module): boolean;
    isNamed(): boolean;
    isOpen(s: string): boolean;
    isOpen(s: string, module: Module): boolean;
    getResourceAsStream(s: string): InputStream;
    getClassLoader(): ClassLoader;
    addExports(s: string, module: Module): Module;
    addOpens(s: string, module: Module): Module;
    addReads(module: Module): Module;
    addUses(clazz: Class): Module;
    getLayer(): ModuleLayer;
    getName(): string;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getDescriptor(): ModuleDescriptor;
    getPackages(): Set;
}

// java.nio.file.WatchKey
declare interface WatchKey {
    isValid(): boolean;
    reset(): boolean;
    watchable(): Watchable;
    pollEvents(): List;
    cancel(): void;
}

// java.awt.Rectangle
declare interface Rectangle extends Rectangle2D, Shape, Serializable {
    contains(i: number, i: number): boolean;
    contains(i: number, i: number, i: number, i: number): boolean;
    contains(point: Point): boolean;
    contains(rectangle: Rectangle): boolean;
    inside(i: number, i: number): boolean;
    intersects(rectangle: Rectangle): boolean;
    isEmpty(): boolean;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    getSize(): Dimension;
    getLocation(): Point;
    getBounds(): Rectangle;
    intersection(rectangle: Rectangle): Rectangle;
    union(rectangle: Rectangle): Rectangle;
    toString(): string;
    add(i: number, i: number): void;
    add(point: Point): void;
    add(rectangle: Rectangle): void;
    grow(i: number, i: number): void;
    move(i: number, i: number): void;
    reshape(i: number, i: number, i: number, i: number): void;
    resize(i: number, i: number): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setBounds(rectangle: Rectangle): void;
    setLocation(i: number, i: number): void;
    setLocation(point: Point): void;
    setSize(i: number, i: number): void;
    setSize(dimension: Dimension): void;
    translate(i: number, i: number): void;
    height: number;
    width: number;
    x: number;
    y: number;
}

// java.awt.PaintContext
declare interface PaintContext {
    getColorModel(): ColorModel;
    getRaster(i: number, i: number, i: number, i: number): Raster;
    dispose(): void;
}

// java.lang.Package
declare interface Package extends NamedPackage, AnnotatedElement {
    isAnnotationPresent(clazz: Class): boolean;
    isCompatibleWith(s: string): boolean;
    isSealed(): boolean;
    isSealed(uRL: URL): boolean;
    hashCode(): number;
    getImplementationTitle(): string;
    getImplementationVendor(): string;
    getImplementationVersion(): string;
    getName(): string;
    getSpecificationTitle(): string;
    getSpecificationVendor(): string;
    getSpecificationVersion(): string;
    toString(): string;
    getAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getPackage(s: string): Package;
    getPackages(): Package[];
}

// java.nio.charset.CharsetDecoder
declare interface CharsetDecoder {
    isAutoDetecting(): boolean;
    isCharsetDetected(): boolean;
    averageCharsPerByte(): number;
    maxCharsPerByte(): number;
    replacement(): string;
    decode(byteBuffer: ByteBuffer): string;
    charset(): Charset;
    onMalformedInput(codingErrorAction: CodingErrorAction): CharsetDecoder;
    onUnmappableCharacter(codingErrorAction: CodingErrorAction): CharsetDecoder;
    replaceWith(s: string): CharsetDecoder;
    reset(): CharsetDecoder;
    decode(byteBuffer: ByteBuffer, s: string, b: boolean): CoderResult;
    flush(s: string): CoderResult;
    detectedCharset(): Charset;
    malformedInputAction(): CodingErrorAction;
    unmappableCharacterAction(): CodingErrorAction;
}

// java.lang.reflect.Constructor
declare interface Constructor extends Executable {
    equals(object: any): boolean;
    hashCode(): number;
    newInstance(object: any): any;
    toString(): string;
    setAccessible(b: boolean): void;
}

// java.io.ObjectOutputStream$PutField
declare interface PutField {
    put(s: string, b: boolean): void;
    put(s: string, b: number): void;
    put(s: string, c: string): void;
    put(s: string, d: number): void;
    put(s: string, f: number): void;
    put(s: string, i: number): void;
    put(s: string, object: any): void;
    put(s: string, l: number): void;
    put(s: string, s: number): void;
    write(objectOutput: ObjectOutput): void;
}

// java.security.ProtectionDomain
declare interface ProtectionDomain {
    implies(permission: Permission): boolean;
    staticPermissionsOnly(): boolean;
    getClassLoader(): ClassLoader;
    getCodeSource(): CodeSource;
    getPermissions(): PermissionCollection;
    getPrincipals(): Principal[];
}

// java.nio.file.LinkOption
declare enum LinkOption {
    NOFOLLOW_LINKS,
}

// java.util.concurrent.ConcurrentMap
declare interface ConcurrentMap extends Map {
    remove(object: any, object: any): boolean;
    replace(object: any, object: any, object: any): boolean;
    putIfAbsent(object: any, object: any): any;
    replace(object: any, object: any): any;
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    getOrDefault(object: any, object: any): any;
    merge(object: any, object: any, biFunction: BiFunction): any;
    forEach(biConsumer: BiConsumer): void;
    replaceAll(biFunction: BiFunction): void;
}

// java.io.ObjectInput
declare interface ObjectInput extends DataInput, AutoCloseable {
    available(): number;
    read(): number;
    read(b: number): number;
    read(b: number, i: number, i: number): number;
    readObject(): any;
    skip(l: number): number;
    close(): void;
}

// java.net.ProxySelector
declare interface ProxySelector {
    select(uRI: URI): List;
    connectFailed(uRI: URI, socketAddress: SocketAddress, iOException: IOException): void;
    getDefault(): ProxySelector;
    of(inetSocketAddress: InetSocketAddress): ProxySelector;
    setDefault(proxySelector: ProxySelector): void;
}

// java.time.Duration
declare interface Duration extends TemporalAmount, Comparable, Serializable {
    isNegative(): boolean;
    isZero(): boolean;
    compareTo(object: any): number;
    compareTo(duration: Duration): number;
    getNano(): number;
    toHoursPart(): number;
    toMillisPart(): number;
    toMinutesPart(): number;
    toNanosPart(): number;
    toSecondsPart(): number;
    abs(): Duration;
    dividedBy(l: number): Duration;
    minus(duration: Duration): Duration;
    minus(l: number, temporalUnit: TemporalUnit): Duration;
    minusDays(l: number): Duration;
    minusHours(l: number): Duration;
    minusMillis(l: number): Duration;
    minusMinutes(l: number): Duration;
    minusNanos(l: number): Duration;
    minusSeconds(l: number): Duration;
    multipliedBy(l: number): Duration;
    negated(): Duration;
    plus(duration: Duration): Duration;
    plus(l: number, temporalUnit: TemporalUnit): Duration;
    plusDays(l: number): Duration;
    plusHours(l: number): Duration;
    plusMillis(l: number): Duration;
    plusMinutes(l: number): Duration;
    plusNanos(l: number): Duration;
    plusSeconds(l: number): Duration;
    truncatedTo(temporalUnit: TemporalUnit): Duration;
    withNanos(i: number): Duration;
    withSeconds(l: number): Duration;
    addTo(temporal: Temporal): Temporal;
    subtractFrom(temporal: Temporal): Temporal;
    getUnits(): List;
    dividedBy(duration: Duration): number;
    get(temporalUnit: TemporalUnit): number;
    getSeconds(): number;
    toDays(): number;
    toDaysPart(): number;
    toHours(): number;
    toMillis(): number;
    toMinutes(): number;
    toNanos(): number;
    toSeconds(): number;
    between(temporal: Temporal, temporal: Temporal): Duration;
    from(temporalAmount: TemporalAmount): Duration;
    of(l: number, temporalUnit: TemporalUnit): Duration;
    ofDays(l: number): Duration;
    ofHours(l: number): Duration;
    ofMillis(l: number): Duration;
    ofMinutes(l: number): Duration;
    ofNanos(l: number): Duration;
    ofSeconds(l: number): Duration;
    ofSeconds(l: number, l: number): Duration;
    parse(s: string): Duration;
    ZERO: Duration;
}

// java.util.Vector
declare interface Vector extends AbstractList, List, RandomAccess, Cloneable, Serializable {
    addAll(collection: Collection): boolean;
    contains(object: any): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    removeIf(predicate: Predicate): boolean;
    retainAll(collection: Collection): boolean;
    elements(): Enumeration;
    spliterator(): Spliterator;
    containsAll(collection: Collection): boolean;
    isEmpty(): boolean;
    removeElement(object: any): boolean;
    capacity(): number;
    indexOf(object: any, i: number): number;
    lastIndexOf(object: any, i: number): number;
    size(): number;
    clone(): any;
    elementAt(i: number): any;
    firstElement(): any;
    lastElement(): any;
    toArray(): any[];
    toArray(object: any): any[];
    toString(): string;
    addElement(object: any): void;
    copyInto(object: any): void;
    ensureCapacity(i: number): void;
    forEach(consumer: Consumer): void;
    insertElementAt(object: any, i: number): void;
    removeAllElements(): void;
    removeElementAt(i: number): void;
    replaceAll(func: UnaryOperator): void;
    setElementAt(object: any, i: number): void;
    setSize(i: number): void;
    sort(comparator: Comparator): void;
    trimToSize(): void;
}

// org.yaml.snakeyaml.introspector.PropertyUtils
declare interface PropertyUtils {
    isAllowReadOnlyProperties(): boolean;
    isSkipMissingProperties(): boolean;
    getProperties(clazz: Class): Set;
    getProperties(clazz: Class, beanAccess: BeanAccess): Set;
    getProperty(clazz: Class, s: string): Property;
    getProperty(clazz: Class, s: string, beanAccess: BeanAccess): Property;
    setAllowReadOnlyProperties(b: boolean): void;
    setBeanAccess(beanAccess: BeanAccess): void;
    setSkipMissingProperties(b: boolean): void;
}

// net.md_5.bungee.api.chat.BaseComponent
declare interface BaseComponent {
    duplicate(): BaseComponent;
    hasFormatting(): boolean;
    isBold(): boolean;
    isItalic(): boolean;
    isObfuscated(): boolean;
    isStrikethrough(): boolean;
    isUnderlined(): boolean;
    isBoldRaw(): Boolean;
    isItalicRaw(): Boolean;
    isObfuscatedRaw(): Boolean;
    isStrikethroughRaw(): Boolean;
    isUnderlinedRaw(): Boolean;
    getFont(): string;
    getFontRaw(): string;
    getInsertion(): string;
    toLegacyText(): string;
    toPlainText(): string;
    getExtra(): List;
    getColor(): ChatColor;
    getColorRaw(): ChatColor;
    duplicateWithoutFormatting(): BaseComponent;
    getClickEvent(): ClickEvent;
    getHoverEvent(): HoverEvent;
    toLegacyText(baseComponent: BaseComponent): string;
    toPlainText(baseComponent: BaseComponent): string;
    addExtra(s: string): void;
    addExtra(baseComponent: BaseComponent): void;
    copyFormatting(baseComponent: BaseComponent): void;
    copyFormatting(baseComponent: BaseComponent, b: boolean): void;
    copyFormatting(baseComponent: BaseComponent, formatRetention: FormatRetention, b: boolean): void;
    retain(formatRetention: FormatRetention): void;
    setBold(boolean: Boolean): void;
    setClickEvent(clickEvent: ClickEvent): void;
    setColor(chatColor: ChatColor): void;
    setExtra(list: List): void;
    setFont(s: string): void;
    setHoverEvent(hoverEvent: HoverEvent): void;
    setInsertion(s: string): void;
    setItalic(boolean: Boolean): void;
    setObfuscated(boolean: Boolean): void;
    setStrikethrough(boolean: Boolean): void;
    setUnderlined(boolean: Boolean): void;
}

// net.md_5.bungee.api.ChatMessageType
declare enum ChatMessageType {
    CHAT,
    SYSTEM,
    ACTION_BAR,
}

// javax.net.ssl.KeyManager
declare interface KeyManager {
}

// java.lang.ClassLoader
declare interface ClassLoader {
    isRegisteredAsParallelCapable(): boolean;
    getParent(): ClassLoader;
    getUnnamedModule(): Module;
    getDefinedPackage(s: string): Package;
    getDefinedPackages(): Package[];
    getResourceAsStream(s: string): InputStream;
    loadClass(s: string): Class;
    getName(): string;
    getResource(s: string): URL;
    getResources(s: string): Enumeration;
    resources(s: string): Stream;
    getSystemResourceAsStream(s: string): InputStream;
    getPlatformClassLoader(): ClassLoader;
    getSystemClassLoader(): ClassLoader;
    getSystemResource(s: string): URL;
    getSystemResources(s: string): Enumeration;
    clearAssertionStatus(): void;
    setClassAssertionStatus(s: string, b: boolean): void;
    setDefaultAssertionStatus(b: boolean): void;
    setPackageAssertionStatus(s: string, b: boolean): void;
}

// java.net.http.HttpHeaders
declare interface HttpHeaders {
    allValues(s: string): List;
    map(): Map;
    firstValue(s: string): Optional;
    firstValueAsLong(s: string): OptionalLong;
    of(map: Map, biPredicate: BiPredicate): HttpHeaders;
}

// javax.net.ssl.SSLSocketFactory
declare interface SSLSocketFactory extends SocketFactory {
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
    createSocket(socket: Socket, s: string, i: number, b: boolean): Socket;
    createSocket(socket: Socket, inputStream: InputStream, b: boolean): Socket;
}

// java.lang.StringBuffer
declare interface StringBuffer extends AbstractStringBuilder, Serializable, Comparable, CharSequence {
    compareTo(object: any): number;
    compareTo(s: string): number;
}

// org.yaml.snakeyaml.constructor.SafeConstructor$ConstructUndefined
declare interface ConstructUndefined extends AbstractConstruct {
    construct(node: Node): any;
}

// java.awt.geom.Rectangle2D
declare interface Rectangle2D extends RectangularShape {
    outcode(d: number, d: number): number;
    createIntersection(rectangle2D: Rectangle2D): Rectangle2D;
    createUnion(rectangle2D: Rectangle2D): Rectangle2D;
    setRect(d: number, d: number, d: number, d: number): void;
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    equals(object: any): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    intersectsLine(d: number, d: number, d: number, d: number): boolean;
    intersectsLine(line2D: Line2D): boolean;
    hashCode(): number;
    outcode(point2D: Point2D): number;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getBounds2D(): Rectangle2D;
    intersect(rectangle2D: Rectangle2D, rectangle2D: Rectangle2D, rectangle2D: Rectangle2D): void;
    union(rectangle2D: Rectangle2D, rectangle2D: Rectangle2D, rectangle2D: Rectangle2D): void;
    add(d: number, d: number): void;
    add(point2D: Point2D): void;
    add(rectangle2D: Rectangle2D): void;
    setRect(rectangle2D: Rectangle2D): void;
    OUT_BOTTOM: number;
    OUT_LEFT: number;
    OUT_RIGHT: number;
    OUT_TOP: number;
}

// java.util.Locale
declare interface Locale extends Cloneable, Serializable {
    hasExtensions(): boolean;
    getDisplayCountry(): string;
    getDisplayLanguage(): string;
    getDisplayName(): string;
    getDisplayVariant(): string;
    getCountry(): string;
    getDisplayCountry(locale: Locale): string;
    getDisplayLanguage(locale: Locale): string;
    getDisplayName(locale: Locale): string;
    getDisplayScript(): string;
    getDisplayScript(locale: Locale): string;
    getDisplayVariant(locale: Locale): string;
    getExtension(c: string): string;
    getISO3Country(): string;
    getISO3Language(): string;
    getLanguage(): string;
    getScript(): string;
    getUnicodeLocaleType(s: string): string;
    getVariant(): string;
    toLanguageTag(): string;
    stripExtensions(): Locale;
    getExtensionKeys(): Set;
    getUnicodeLocaleAttributes(): Set;
    getUnicodeLocaleKeys(): Set;
    lookupTag(list: List, collection: Collection): string;
    getISOCountries(): string[];
    getISOLanguages(): string[];
    filter(list: List, collection: Collection): List;
    filter(list: List, collection: Collection, filteringMode: FilteringMode): List;
    filterTags(list: List, collection: Collection): List;
    filterTags(list: List, collection: Collection, filteringMode: FilteringMode): List;
    forLanguageTag(s: string): Locale;
    getDefault(): Locale;
    getDefault(category: Category): Locale;
    lookup(list: List, collection: Collection): Locale;
    getAvailableLocales(): Locale[];
    getISOCountries(isoCountryCode: IsoCountryCode): Set;
    setDefault(category: Category, locale: Locale): void;
    setDefault(locale: Locale): void;
    PRIVATE_USE_EXTENSION: string;
    UNICODE_LOCALE_EXTENSION: string;
    CANADA: Locale;
    CANADA_FRENCH: Locale;
    CHINA: Locale;
    CHINESE: Locale;
    ENGLISH: Locale;
    FRANCE: Locale;
    FRENCH: Locale;
    GERMAN: Locale;
    GERMANY: Locale;
    ITALIAN: Locale;
    ITALY: Locale;
    JAPAN: Locale;
    JAPANESE: Locale;
    KOREA: Locale;
    KOREAN: Locale;
    PRC: Locale;
    ROOT: Locale;
    SIMPLIFIED_CHINESE: Locale;
    TAIWAN: Locale;
    TRADITIONAL_CHINESE: Locale;
    UK: Locale;
    US: Locale;
}

// java.net.http.HttpRequest$Builder
declare interface Builder {
    build(): HttpRequest;
    DELETE(): Builder;
    GET(): Builder;
    POST(bodyPublisher: BodyPublisher): Builder;
    PUT(bodyPublisher: BodyPublisher): Builder;
    copy(): Builder;
    expectContinue(b: boolean): Builder;
    header(s: string, s: string): Builder;
    headers(s: string): Builder;
    method(s: string, bodyPublisher: BodyPublisher): Builder;
    setHeader(s: string, s: string): Builder;
    timeout(duration: Duration): Builder;
    uri(uRI: URI): Builder;
    version(version: Version): Builder;
}

// java.util.concurrent.CompletionStage
declare interface CompletionStage {
    toCompletableFuture(): CompletableFuture;
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletionStage;
    applyToEither(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletionStage;
    exceptionally(func: Function): CompletionStage;
    handle(biFunction: BiFunction): CompletionStage;
    handleAsync(biFunction: BiFunction): CompletionStage;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletionStage;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    thenAccept(consumer: Consumer): CompletionStage;
    thenAcceptAsync(consumer: Consumer): CompletionStage;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletionStage;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletionStage;
    thenApply(func: Function): CompletionStage;
    thenApplyAsync(func: Function): CompletionStage;
    thenApplyAsync(func: Function, executor: Executor): CompletionStage;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletionStage;
    thenCompose(func: Function): CompletionStage;
    thenComposeAsync(func: Function): CompletionStage;
    thenComposeAsync(func: Function, executor: Executor): CompletionStage;
    thenRun(runnable: Runnable): CompletionStage;
    thenRunAsync(runnable: Runnable): CompletionStage;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletionStage;
    whenComplete(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletionStage;
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

// java.security.AlgorithmConstraints
declare interface AlgorithmConstraints {
    permits(set: Set, s: string, algorithmParameters: AlgorithmParameters): boolean;
    permits(set: Set, s: string, key: Key, algorithmParameters: AlgorithmParameters): boolean;
    permits(set: Set, key: Key): boolean;
}

// java.nio.file.WatchService
declare interface WatchService extends Closeable {
    poll(): WatchKey;
    poll(l: number, timeUnit: TimeUnit): WatchKey;
    take(): WatchKey;
    close(): void;
}

// java.util.stream.IntStream
declare interface IntStream extends BaseStream {
    allMatch(intPredicate: IntPredicate): boolean;
    anyMatch(intPredicate: IntPredicate): boolean;
    noneMatch(intPredicate: IntPredicate): boolean;
    reduce(i: number, intBinaryOperator: IntBinaryOperator): number;
    sum(): number;
    toArray(): number[];
    collect(supplier: Supplier, objIntConsumer: ObjIntConsumer, biConsumer: BiConsumer): any;
    summaryStatistics(): IntSummaryStatistics;
    average(): OptionalDouble;
    findAny(): OptionalInt;
    findFirst(): OptionalInt;
    max(): OptionalInt;
    min(): OptionalInt;
    reduce(intBinaryOperator: IntBinaryOperator): OptionalInt;
    iterator(): OfInt;
    spliterator(): OfInt;
    asDoubleStream(): DoubleStream;
    mapToDouble(intToDoubleFunction: IntToDoubleFunction): DoubleStream;
    distinct(): IntStream;
    filter(intPredicate: IntPredicate): IntStream;
    flatMap(intFunction: IntFunction): IntStream;
    limit(l: number): IntStream;
    map(intUnaryOperator: IntUnaryOperator): IntStream;
    parallel(): IntStream;
    peek(intConsumer: IntConsumer): IntStream;
    sequential(): IntStream;
    skip(l: number): IntStream;
    sorted(): IntStream;
    asLongStream(): LongStream;
    mapToLong(intToLongFunction: IntToLongFunction): LongStream;
    boxed(): Stream;
    mapToObj(intFunction: IntFunction): Stream;
    count(): number;
    forEach(intConsumer: IntConsumer): void;
    forEachOrdered(intConsumer: IntConsumer): void;
    iterator(): Iterator;
    spliterator(): Spliterator;
    parallel(): BaseStream;
    sequential(): BaseStream;
    dropWhile(intPredicate: IntPredicate): IntStream;
    takeWhile(intPredicate: IntPredicate): IntStream;
    concat(intStream: IntStream, intStream: IntStream): IntStream;
    empty(): IntStream;
    generate(intSupplier: IntSupplier): IntStream;
    iterate(i: number, intPredicate: IntPredicate, intUnaryOperator: IntUnaryOperator): IntStream;
    iterate(i: number, intUnaryOperator: IntUnaryOperator): IntStream;
    of(i: number): IntStream;
    of(i: number): IntStream;
    range(i: number, i: number): IntStream;
    rangeClosed(i: number, i: number): IntStream;
    builder(): Builder;
}

// java.awt.image.SampleModel
declare interface SampleModel {
    getNumDataElements(): number;
    getSample(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getSampleSize(i: number): number;
    getSampleSize(): number[];
    createDataBuffer(): DataBuffer;
    createCompatibleSampleModel(i: number, i: number): SampleModel;
    createSubsetSampleModel(i: number): SampleModel;
    getDataElements(i: number, i: number, object: any, dataBuffer: DataBuffer): any;
    setDataElements(i: number, i: number, object: any, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    getSampleDouble(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getPixel(i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getDataType(): number;
    getHeight(): number;
    getNumBands(): number;
    getWidth(): number;
    getSampleFloat(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getPixel(i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getTransferType(): number;
    getPixel(i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getDataElements(i: number, i: number, i: number, i: number, object: any, dataBuffer: DataBuffer): any;
    setDataElements(i: number, i: number, i: number, i: number, object: any, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
}

// java.util.stream.Stream
declare interface Stream extends BaseStream {
    allMatch(predicate: Predicate): boolean;
    anyMatch(predicate: Predicate): boolean;
    noneMatch(predicate: Predicate): boolean;
    collect(supplier: Supplier, biConsumer: BiConsumer, biConsumer: BiConsumer): any;
    collect(collector: Collector): any;
    reduce(object: any, biFunction: BiFunction, binaryOperator: BinaryOperator): any;
    reduce(object: any, binaryOperator: BinaryOperator): any;
    toArray(): any[];
    toArray(intFunction: IntFunction): any[];
    findAny(): Optional;
    findFirst(): Optional;
    max(comparator: Comparator): Optional;
    min(comparator: Comparator): Optional;
    reduce(binaryOperator: BinaryOperator): Optional;
    flatMapToDouble(func: Function): DoubleStream;
    mapToDouble(toDoubleFunction: ToDoubleFunction): DoubleStream;
    flatMapToInt(func: Function): IntStream;
    mapToInt(toIntFunction: ToIntFunction): IntStream;
    flatMapToLong(func: Function): LongStream;
    mapToLong(toLongFunction: ToLongFunction): LongStream;
    distinct(): Stream;
    filter(predicate: Predicate): Stream;
    flatMap(func: Function): Stream;
    limit(l: number): Stream;
    map(func: Function): Stream;
    peek(consumer: Consumer): Stream;
    skip(l: number): Stream;
    sorted(): Stream;
    sorted(comparator: Comparator): Stream;
    count(): number;
    forEach(consumer: Consumer): void;
    forEachOrdered(consumer: Consumer): void;
    dropWhile(predicate: Predicate): Stream;
    takeWhile(predicate: Predicate): Stream;
    concat(stream: Stream, stream: Stream): Stream;
    empty(): Stream;
    generate(supplier: Supplier): Stream;
    iterate(object: any, predicate: Predicate, func: UnaryOperator): Stream;
    iterate(object: any, func: UnaryOperator): Stream;
    of(object: any): Stream;
    of(object: any): Stream;
    ofNullable(object: any): Stream;
    builder(): Builder;
}

// javax.net.ssl.SSLEngine
declare interface SSLEngine {
    getEnableSessionCreation(): boolean;
    getNeedClientAuth(): boolean;
    getUseClientMode(): boolean;
    getWantClientAuth(): boolean;
    isInboundDone(): boolean;
    isOutboundDone(): boolean;
    getDelegatedTask(): Runnable;
    getEnabledCipherSuites(): string[];
    getEnabledProtocols(): string[];
    getSupportedCipherSuites(): string[];
    getSupportedProtocols(): string[];
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer, i: number, i: number): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, i: number, i: number, byteBuffer: ByteBuffer): SSLEngineResult;
    getHandshakeStatus(): HandshakeStatus;
    getSession(): SSLSession;
    beginHandshake(): void;
    closeInbound(): void;
    closeOutbound(): void;
    setEnableSessionCreation(b: boolean): void;
    setEnabledCipherSuites(s: string): void;
    setEnabledProtocols(s: string): void;
    setNeedClientAuth(b: boolean): void;
    setUseClientMode(b: boolean): void;
    setWantClientAuth(b: boolean): void;
    getPeerPort(): number;
    getApplicationProtocol(): string;
    getHandshakeApplicationProtocol(): string;
    getPeerHost(): string;
    getHandshakeApplicationProtocolSelector(): BiFunction;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    getSSLParameters(): SSLParameters;
    getHandshakeSession(): SSLSession;
    setHandshakeApplicationProtocolSelector(biFunction: BiFunction): void;
    setSSLParameters(sSLParameters: SSLParameters): void;
}

// java.awt.Point
declare interface Point extends Point2D, Serializable {
    getLocation(): Point;
    toString(): string;
    move(i: number, i: number): void;
    setLocation(i: number, i: number): void;
    setLocation(point: Point): void;
    translate(i: number, i: number): void;
    x: number;
    y: number;
}

// java.util.function.LongFunction
declare interface LongFunction {
    apply(l: number): any;
}

// net.md_5.bungee.api.chat.HoverEvent
declare interface HoverEvent {
    isLegacy(): boolean;
    getContents(): List;
    getValue(): BaseComponent[];
    getAction(): Action;
    getClass(action: Action, b: boolean): Class;
    addContent(content: Content): void;
    setLegacy(b: boolean): void;
}

// java.awt.GraphicsDevice
declare interface GraphicsDevice {
    getType(): number;
    getDefaultConfiguration(): GraphicsConfiguration;
    getConfigurations(): GraphicsConfiguration[];
    getIDstring(): string;
    isDisplayChangeSupported(): boolean;
    isFullScreenSupported(): boolean;
    isWindowTranslucencySupported(windowTranslucency: WindowTranslucency): boolean;
    getAvailableAcceleratedMemory(): number;
    getDisplayMode(): DisplayMode;
    getDisplayModes(): DisplayMode[];
    getBestConfiguration(graphicsConfigTemplate: GraphicsConfigTemplate): GraphicsConfiguration;
    getFullScreenWindow(): Window;
    setDisplayMode(displayMode: DisplayMode): void;
    setFullScreenWindow(window: Window): void;
    TYPE_IMAGE_BUFFER: number;
    TYPE_PRINTER: number;
    TYPE_RASTER_SCREEN: number;
}

// java.awt.Polygon
declare interface Polygon extends Shape, Serializable {
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    contains(i: number, i: number): boolean;
    contains(point: Point): boolean;
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    inside(i: number, i: number): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    getBoundingBox(): Rectangle;
    getBounds(): Rectangle;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    getBounds2D(): Rectangle2D;
    addPoint(i: number, i: number): void;
    invalidate(): void;
    reset(): void;
    translate(i: number, i: number): void;
    npoints: number;
    xpoints: number[];
    ypoints: number[];
}

// java.security.Provider$Service
declare interface Service {
    supportsParameter(object: any): boolean;
    getAlgorithm(): string;
    getAttribute(s: string): string;
    getClassName(): string;
    getType(): string;
    getProvider(): Provider;
    newInstance(object: any): any;
}

// java.util.Properties
declare interface Properties extends Hashtable {
    getProperty(s: string): string;
    getProperty(s: string, s: string): string;
    propertyNames(): Enumeration;
    stringPropertyNames(): Set;
    setProperty(s: string, s: string): any;
    load(inputStream: InputStream): void;
    load(reader: Reader): void;
    loadFromXML(inputStream: InputStream): void;
    list(printStream: PrintStream): void;
    list(printWriter: PrintWriter): void;
    save(outputStream: OutputStream, s: string): void;
    store(outputStream: OutputStream, s: string): void;
    store(writer: Writer, s: string): void;
    storeToXML(outputStream: OutputStream, s: string): void;
    storeToXML(outputStream: OutputStream, s: string, s: string): void;
    storeToXML(outputStream: OutputStream, s: string, charset: Charset): void;
}

// java.lang.AbstractStringBuilder
declare interface AbstractStringBuilder extends Appendable, CharSequence {
    charAt(i: number): string;
    capacity(): number;
    codePointAt(i: number): number;
    codePointBefore(i: number): number;
    codePointCount(i: number, i: number): number;
    indexOf(s: string): number;
    indexOf(s: string, i: number): number;
    lastIndexOf(s: string): number;
    lastIndexOf(s: string, i: number): number;
    length(): number;
    offsetByCodePoints(i: number, i: number): number;
    append(b: boolean): string;
    append(c: string): string;
    append(c: string): string;
    append(c: string, i: number, i: number): string;
    append(d: number): string;
    append(f: number): string;
    append(i: number): string;
    append(s: string): string;
    append(s: string, i: number, i: number): string;
    append(object: any): string;
    append(s: string): string;
    append(s: string): string;
    append(l: number): string;
    appendCodePoint(i: number): string;
    delete(i: number, i: number): string;
    deleteCharAt(i: number): string;
    insert(i: number, b: boolean): string;
    insert(i: number, c: string): string;
    insert(i: number, c: string): string;
    insert(i: number, c: string, i: number, i: number): string;
    insert(i: number, d: number): string;
    insert(i: number, f: number): string;
    insert(i: number, i: number): string;
    insert(i: number, s: string): string;
    insert(i: number, s: string, i: number, i: number): string;
    insert(i: number, object: any): string;
    insert(i: number, s: string): string;
    insert(i: number, l: number): string;
    replace(i: number, i: number, s: string): string;
    reverse(): string;
    append(c: string): Appendable;
    append(s: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
    subSequence(i: number, i: number): string;
    substring(i: number): string;
    substring(i: number, i: number): string;
    chars(): IntStream;
    codePoints(): IntStream;
    ensureCapacity(i: number): void;
    getChars(i: number, i: number, c: string, i: number): void;
    setCharAt(i: number, c: string): void;
    setLength(i: number): void;
    trimToSize(): void;
}

// java.security.AlgorithmParameters
declare interface AlgorithmParameters {
    getEncoded(): number[];
    getEncoded(s: string): number[];
    getAlgorithm(): string;
    getProvider(): Provider;
    getParameterSpec(clazz: Class): AlgorithmParameterSpec;
    init(b: number): void;
    init(b: number, s: string): void;
    init(algorithmParameterSpec: AlgorithmParameterSpec): void;
    getInstance(s: string): AlgorithmParameters;
    getInstance(s: string, s: string): AlgorithmParameters;
    getInstance(s: string, provider: Provider): AlgorithmParameters;
}

// javax.net.ssl.SSLSession
declare interface SSLSession {
    isValid(): boolean;
    getId(): number[];
    getApplicationBufferSize(): number;
    getPacketBufferSize(): number;
    getPeerPort(): number;
    getValue(s: string): any;
    getCipherSuite(): string;
    getPeerHost(): string;
    getProtocol(): string;
    getValueNames(): string[];
    getLocalPrincipal(): Principal;
    getPeerPrincipal(): Principal;
    getLocalCertificates(): Certificate[];
    getPeerCertificates(): Certificate[];
    getSessionContext(): SSLSessionContext;
    getPeerCertificateChain(): X509Certificate[];
    getCreationTime(): number;
    getLastAccessedTime(): number;
    invalidate(): void;
    putValue(s: string, object: any): void;
    removeValue(s: string): void;
}

// java.lang.module.ModuleDescriptor
declare interface ModuleDescriptor extends Comparable {
    isAutomatic(): boolean;
    isOpen(): boolean;
    compareTo(object: any): number;
    compareTo(moduleDescriptor: ModuleDescriptor): number;
    name(): string;
    toNameAndVersion(): string;
    mainClass(): Optional;
    rawVersion(): Optional;
    version(): Optional;
    exports(): Set;
    modifiers(): Set;
    opens(): Set;
    packages(): Set;
    provides(): Set;
    requires(): Set;
    uses(): Set;
    read(inputStream: InputStream): ModuleDescriptor;
    read(inputStream: InputStream, supplier: Supplier): ModuleDescriptor;
    read(byteBuffer: ByteBuffer): ModuleDescriptor;
    read(byteBuffer: ByteBuffer, supplier: Supplier): ModuleDescriptor;
    newAutomaticModule(s: string): Builder;
    newModule(s: string): Builder;
    newModule(s: string, set: Set): Builder;
    newOpenModule(s: string): Builder;
}

// java.awt.Dimension
declare interface Dimension extends Dimension2D, Serializable {
    equals(object: any): boolean;
    hashCode(): number;
    getSize(): Dimension;
    toString(): string;
    setSize(i: number, i: number): void;
    setSize(dimension: Dimension): void;
    height: number;
    width: number;
}

// java.nio.charset.CodingErrorAction
declare interface CodingErrorAction {
    IGNORE: CodingErrorAction;
    REPLACE: CodingErrorAction;
    REPORT: CodingErrorAction;
}

// java.nio.file.attribute.UserPrincipalLookupService
declare interface UserPrincipalLookupService {
    lookupPrincipalByGroupName(s: string): GroupPrincipal;
    lookupPrincipalByName(s: string): UserPrincipal;
}

// java.util.function.ObjDoubleConsumer
declare interface ObjDoubleConsumer {
    accept(object: any, d: number): void;
}

// java.time.temporal.TemporalAccessor
declare interface TemporalAccessor {
    isSupported(temporalField: TemporalField): boolean;
    getLong(temporalField: TemporalField): number;
    get(temporalField: TemporalField): number;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
}

// java.time.OffsetDateTime
declare interface OffsetDateTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    isAfter(offsetDateTime: OffsetDateTime): boolean;
    isBefore(offsetDateTime: OffsetDateTime): boolean;
    isEqual(offsetDateTime: OffsetDateTime): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(offsetDateTime: OffsetDateTime): number;
    get(temporalField: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfYear(): number;
    getHour(): number;
    getMinute(): number;
    getMonthValue(): number;
    getNano(): number;
    getSecond(): number;
    getYear(): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    getDayOfWeek(): DayOfWeek;
    toInstant(): Instant;
    toLocalDate(): LocalDate;
    toLocalDateTime(): LocalDateTime;
    toLocalTime(): LocalTime;
    getMonth(): Month;
    minus(temporalAmount: TemporalAmount): OffsetDateTime;
    minus(l: number, temporalUnit: TemporalUnit): OffsetDateTime;
    minusDays(l: number): OffsetDateTime;
    minusHours(l: number): OffsetDateTime;
    minusMinutes(l: number): OffsetDateTime;
    minusMonths(l: number): OffsetDateTime;
    minusNanos(l: number): OffsetDateTime;
    minusSeconds(l: number): OffsetDateTime;
    minusWeeks(l: number): OffsetDateTime;
    minusYears(l: number): OffsetDateTime;
    plus(temporalAmount: TemporalAmount): OffsetDateTime;
    plus(l: number, temporalUnit: TemporalUnit): OffsetDateTime;
    plusDays(l: number): OffsetDateTime;
    plusHours(l: number): OffsetDateTime;
    plusMinutes(l: number): OffsetDateTime;
    plusMonths(l: number): OffsetDateTime;
    plusNanos(l: number): OffsetDateTime;
    plusSeconds(l: number): OffsetDateTime;
    plusWeeks(l: number): OffsetDateTime;
    plusYears(l: number): OffsetDateTime;
    truncatedTo(temporalUnit: TemporalUnit): OffsetDateTime;
    with(temporalAdjuster: TemporalAdjuster): OffsetDateTime;
    with(temporalField: TemporalField, l: number): OffsetDateTime;
    withDayOfMonth(i: number): OffsetDateTime;
    withDayOfYear(i: number): OffsetDateTime;
    withHour(i: number): OffsetDateTime;
    withMinute(i: number): OffsetDateTime;
    withMonth(i: number): OffsetDateTime;
    withNano(i: number): OffsetDateTime;
    withOffsetSameInstant(zoneOffset: ZoneOffset): OffsetDateTime;
    withOffsetSameLocal(zoneOffset: ZoneOffset): OffsetDateTime;
    withSecond(i: number): OffsetDateTime;
    withYear(i: number): OffsetDateTime;
    toOffsetTime(): OffsetTime;
    getOffset(): ZoneOffset;
    atZoneSameInstant(zoneId: ZoneId): ZonedDateTime;
    atZoneSimilarLocal(zoneId: ZoneId): ZonedDateTime;
    toZonedDateTime(): ZonedDateTime;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
    toEpochSecond(): number;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    from(temporalAccessor: TemporalAccessor): OffsetDateTime;
    now(): OffsetDateTime;
    now(clock: Clock): OffsetDateTime;
    now(zoneId: ZoneId): OffsetDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): OffsetDateTime;
    of(localDate: LocalDate, localTime: LocalTime, zoneOffset: ZoneOffset): OffsetDateTime;
    of(localDateTime: LocalDateTime, zoneOffset: ZoneOffset): OffsetDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): OffsetDateTime;
    parse(s: string): OffsetDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): OffsetDateTime;
    timeLineOrder(): Comparator;
    MAX: OffsetDateTime;
    MIN: OffsetDateTime;
}

// java.net.FileNameMap
declare interface FileNameMap {
    getContentTypeFor(s: string): string;
}

// java.time.temporal.TemporalQuery
declare interface TemporalQuery {
    queryFrom(temporalAccessor: TemporalAccessor): any;
}

// java.net.http.HttpRequest$BodyPublisher
declare interface BodyPublisher extends Publisher {
    contentLength(): number;
}

// java.lang.NamedPackage
declare interface NamedPackage {
}

// java.util.function.DoubleToIntFunction
declare interface DoubleToIntFunction {
    applyAsInt(d: number): number;
}

// java.nio.IntBuffer
declare interface IntBuffer extends Buffer, Comparable {
    get(): number;
    get(i: number): number;
    order(): ByteOrder;
    asReadOnlyBuffer(): IntBuffer;
    compact(): IntBuffer;
    put(i: number): IntBuffer;
    put(i: number, i: number): IntBuffer;
    equals(object: any): boolean;
    put(i: number): IntBuffer;
    compareTo(object: any): number;
    compareTo(intBuffer: IntBuffer): number;
    hashCode(): number;
    mismatch(intBuffer: IntBuffer): number;
    toString(): string;
    get(i: number): IntBuffer;
    get(i: number, i: number, i: number): IntBuffer;
    put(i: number, i: number, i: number): IntBuffer;
    put(intBuffer: IntBuffer): IntBuffer;
    allocate(i: number): IntBuffer;
    wrap(i: number): IntBuffer;
    wrap(i: number, i: number, i: number): IntBuffer;
}

// java.util.PrimitiveIterator$OfLong
declare interface OfLong extends PrimitiveIterator {
    nextLong(): number;
    next(): Long;
    next(): any;
    forEachRemaining(object: any): void;
    forEachRemaining(consumer: Consumer): void;
    forEachRemaining(longConsumer: LongConsumer): void;
}

// java.security.Principal
declare interface Principal {
    equals(object: any): boolean;
    hashCode(): number;
    getName(): string;
    toString(): string;
    implies(subject: Subject): boolean;
}

// java.awt.font.FontRenderContext
declare interface FontRenderContext {
    equals(fontRenderContext: FontRenderContext): boolean;
    isAntiAliased(): boolean;
    isTransformed(): boolean;
    usesFractionalMetrics(): boolean;
    getTransformType(): number;
    getTransform(): AffineTransform;
    getAntiAliasingHint(): any;
    getFractionalMetricsHint(): any;
}

// java.io.DataOutput
declare interface DataOutput {
    write(b: number): void;
    write(b: number, i: number, i: number): void;
    write(i: number): void;
    writeBoolean(b: boolean): void;
    writeByte(i: number): void;
    writeBytes(s: string): void;
    writeChar(i: number): void;
    writeChars(s: string): void;
    writeDouble(d: number): void;
    writeFloat(f: number): void;
    writeInt(i: number): void;
    writeLong(l: number): void;
    writeShort(i: number): void;
    writeUTF(s: string): void;
}

// java.lang.reflect.Executable
declare interface Executable extends AccessibleObject, Member, GenericDeclaration {
    getModifiers(): number;
    getDeclaringClass(): Class;
    getExceptionTypes(): Class[];
    getParameterTypes(): Class[];
    getName(): string;
    toGenericString(): string;
    getParameterAnnotations(): Annotation[][];
    getAnnotatedReturnType(): AnnotatedType;
    getTypeParameters(): TypeVariable[];
    isSynthetic(): boolean;
    isVarArgs(): boolean;
    getParameterCount(): number;
    getAnnotatedReceiverType(): AnnotatedType;
    getAnnotatedExceptionTypes(): AnnotatedType[];
    getAnnotatedParameterTypes(): AnnotatedType[];
    getParameters(): Parameter[];
    getGenericExceptionTypes(): Type[];
    getGenericParameterTypes(): Type[];
}

// java.io.ObjectStreamClass
declare interface ObjectStreamClass extends Serializable {
    getField(s: string): ObjectStreamField;
    getFields(): ObjectStreamField[];
    forClass(): Class;
    getName(): string;
    getSerialVersionUID(): number;
    lookup(clazz: Class): ObjectStreamClass;
    lookupAny(clazz: Class): ObjectStreamClass;
    NO_FIELDS: ObjectStreamField[];
}

// java.util.AbstractCollection
declare interface AbstractCollection extends Collection {
    size(): number;
    iterator(): Iterator;
    add(object: any): boolean;
    addAll(collection: Collection): boolean;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    isEmpty(): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    toArray(): any[];
    toArray(object: any): any[];
    clear(): void;
}

// java.util.OptionalDouble
declare interface OptionalDouble {
    isEmpty(): boolean;
    isPresent(): boolean;
    getAsDouble(): number;
    orElse(d: number): number;
    orElseGet(doubleSupplier: DoubleSupplier): number;
    orElseThrow(): number;
    orElseThrow(supplier: Supplier): number;
    stream(): DoubleStream;
    empty(): OptionalDouble;
    of(d: number): OptionalDouble;
    ifPresent(doubleConsumer: DoubleConsumer): void;
    ifPresentOrElse(doubleConsumer: DoubleConsumer, runnable: Runnable): void;
}

// java.util.function.IntBinaryOperator
declare interface IntBinaryOperator {
    applyAsInt(i: number, i: number): number;
}

// java.lang.Boolean
declare interface Boolean extends Serializable, Comparable {
    booleanValue(): boolean;
    compareTo(boolean: Boolean): number;
    compareTo(object: any): number;
    getBoolean(s: string): boolean;
    logicalAnd(b: boolean, b: boolean): boolean;
    logicalOr(b: boolean, b: boolean): boolean;
    logicalXor(b: boolean, b: boolean): boolean;
    parseBoolean(s: string): boolean;
    compare(b: boolean, b: boolean): number;
    hashCode(b: boolean): number;
    valueOf(b: boolean): Boolean;
    valueOf(s: string): Boolean;
    toString(b: boolean): string;
    FALSE: Boolean;
    TRUE: Boolean;
    TYPE: Class;
}

// java.text.AttributedCharacterIterator
declare interface AttributedCharacterIterator extends CharacterIterator {
    getRunLimit(): number;
    getRunLimit(attribute: Attribute): number;
    getRunLimit(set: Set): number;
    getRunStart(): number;
    getRunStart(attribute: Attribute): number;
    getRunStart(set: Set): number;
    getAttribute(attribute: Attribute): any;
    getAttributes(): Map;
    getAllAttributeKeys(): Set;
}

// java.util.DoubleSummaryStatistics
declare interface DoubleSummaryStatistics extends DoubleConsumer {
    getAverage(): number;
    getMax(): number;
    getMin(): number;
    getSum(): number;
    getCount(): number;
    accept(d: number): void;
    combine(doubleSummaryStatistics: DoubleSummaryStatistics): void;
}

// java.security.Key
declare interface Key extends Serializable {
    getEncoded(): number[];
    getAlgorithm(): string;
    getFormat(): string;
    serialVersionUID: number;
}

// java.time.temporal.TemporalUnit
declare interface TemporalUnit {
    isDateBased(): boolean;
    isDurationEstimated(): boolean;
    isTimeBased(): boolean;
    toString(): string;
    getDuration(): Duration;
    addTo(temporal: Temporal, l: number): Temporal;
    between(temporal: Temporal, temporal: Temporal): number;
    isSupportedBy(temporal: Temporal): boolean;
}

// java.util.function.DoubleSupplier
declare interface DoubleSupplier {
    getAsDouble(): number;
}

// org.yaml.snakeyaml.constructor.AbstractConstruct
declare interface AbstractConstruct extends Construct {
    construct2ndStep(node: Node, object: any): void;
}

// java.security.SecureRandomParameters
declare interface SecureRandomParameters {
}

// org.yaml.snakeyaml.representer.BaseRepresenter
declare interface BaseRepresenter {
    isExplicitPropertyUtils(): boolean;
    getPropertyUtils(): PropertyUtils;
    getDefaultFlowStyle(): FlowStyle;
    getDefaultScalarStyle(): ScalarStyle;
    represent(object: any): Node;
    setDefaultFlowStyle(flowStyle: FlowStyle): void;
    setDefaultScalarStyle(scalarStyle: ScalarStyle): void;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
}

// java.lang.ModuleLayer
declare interface ModuleLayer {
    findLoader(s: string): ClassLoader;
    defineModules(configuration: Configuration, func: Function): ModuleLayer;
    defineModulesWithManyLoaders(configuration: Configuration, classLoader: ClassLoader): ModuleLayer;
    defineModulesWithOneLoader(configuration: Configuration, classLoader: ClassLoader): ModuleLayer;
    configuration(): Configuration;
    parents(): List;
    findModule(s: string): Optional;
    modules(): Set;
    boot(): ModuleLayer;
    empty(): ModuleLayer;
    defineModules(configuration: Configuration, list: List, func: Function): Controller;
    defineModulesWithManyLoaders(configuration: Configuration, list: List, classLoader: ClassLoader): Controller;
    defineModulesWithOneLoader(configuration: Configuration, list: List, classLoader: ClassLoader): Controller;
}

// java.nio.file.PathMatcher
declare interface PathMatcher {
    matches(path: Path): boolean;
}

// java.util.stream.IntStream$Builder
declare interface Builder extends IntConsumer {
    build(): IntStream;
    accept(i: number): void;
    add(i: number): Builder;
}

// java.util.function.DoubleUnaryOperator
declare interface DoubleUnaryOperator {
    applyAsDouble(d: number): number;
    andThen(doubleUnaryOperator: DoubleUnaryOperator): DoubleUnaryOperator;
    compose(doubleUnaryOperator: DoubleUnaryOperator): DoubleUnaryOperator;
    identity(): DoubleUnaryOperator;
}

// java.time.temporal.TemporalField
declare interface TemporalField {
    isDateBased(): boolean;
    isSupportedBy(temporalAccessor: TemporalAccessor): boolean;
    isTimeBased(): boolean;
    toString(): string;
    adjustInto(temporal: Temporal, l: number): Temporal;
    getBaseUnit(): TemporalUnit;
    getRangeUnit(): TemporalUnit;
    range(): ValueRange;
    rangeRefinedBy(temporalAccessor: TemporalAccessor): ValueRange;
    getFrom(temporalAccessor: TemporalAccessor): number;
    getDisplayName(locale: Locale): string;
    resolve(map: Map, temporalAccessor: TemporalAccessor, resolverStyle: ResolverStyle): TemporalAccessor;
}

// java.util.function.LongToIntFunction
declare interface LongToIntFunction {
    applyAsInt(l: number): number;
}

// java.io.ObjectInputFilter$FilterInfo
declare interface FilterInfo {
    serialClass(): Class;
    arrayLength(): number;
    depth(): number;
    references(): number;
    streamBytes(): number;
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

// java.util.Locale$Category
declare enum Category {
    DISPLAY,
    FORMAT,
}

// java.time.temporal.ValueRange
declare interface ValueRange extends Serializable {
    isFixed(): boolean;
    isIntValue(): boolean;
    isValidIntValue(l: number): boolean;
    isValidValue(l: number): boolean;
    checkValidIntValue(l: number, temporalField: TemporalField): number;
    checkValidValue(l: number, temporalField: TemporalField): number;
    getLargestMinimum(): number;
    getMaximum(): number;
    getMinimum(): number;
    getSmallestMaximum(): number;
    of(l: number, l: number): ValueRange;
    of(l: number, l: number, l: number): ValueRange;
    of(l: number, l: number, l: number, l: number): ValueRange;
}

// java.nio.LongBuffer
declare interface LongBuffer extends Buffer, Comparable {
    order(): ByteOrder;
    asReadOnlyBuffer(): LongBuffer;
    compact(): LongBuffer;
    put(i: number, l: number): LongBuffer;
    put(l: number): LongBuffer;
    get(): number;
    get(i: number): number;
    equals(object: any): boolean;
    put(l: number): LongBuffer;
    compareTo(object: any): number;
    compareTo(longBuffer: LongBuffer): number;
    hashCode(): number;
    mismatch(longBuffer: LongBuffer): number;
    toString(): string;
    get(l: number): LongBuffer;
    get(l: number, i: number, i: number): LongBuffer;
    put(longBuffer: LongBuffer): LongBuffer;
    put(l: number, i: number, i: number): LongBuffer;
    allocate(i: number): LongBuffer;
    wrap(l: number): LongBuffer;
    wrap(l: number, i: number, i: number): LongBuffer;
}

// java.time.temporal.Temporal
declare interface Temporal extends TemporalAccessor {
    isSupported(temporalUnit: TemporalUnit): boolean;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
}

// java.net.URLStreamHandler
declare interface URLStreamHandler {
}

// java.io.IOException
declare interface IOException extends Exception {
}

// java.util.function.LongConsumer
declare interface LongConsumer {
    accept(l: number): void;
    andThen(longConsumer: LongConsumer): LongConsumer;
}

// java.awt.image.VolatileImage
declare interface VolatileImage extends Image, Transparency {
    contentsLost(): boolean;
    getHeight(): number;
    getWidth(): number;
    validate(graphicsConfiguration: GraphicsConfiguration): number;
    createGraphics(): Graphics2D;
    getCapabilities(): ImageCapabilities;
    getSnapshot(): BufferedImage;
    getTransparency(): number;
    IMAGE_INCOMPATIBLE: number;
    IMAGE_OK: number;
    IMAGE_RESTORED: number;
}

// java.nio.ByteOrder
declare interface ByteOrder {
    nativeOrder(): ByteOrder;
    BIG_ENDIAN: ByteOrder;
    LITTLE_ENDIAN: ByteOrder;
}

// java.awt.FontMetrics
declare interface FontMetrics extends Serializable {
    hasUniformLineMetrics(): boolean;
    bytesWidth(b: number, i: number, i: number): number;
    charWidth(c: string): number;
    charWidth(i: number): number;
    charsWidth(c: string, i: number, i: number): number;
    getAscent(): number;
    getDescent(): number;
    getHeight(): number;
    getLeading(): number;
    getMaxAdvance(): number;
    getMaxAscent(): number;
    getMaxDecent(): number;
    getMaxDescent(): number;
    stringWidth(s: string): number;
    getWidths(): number[];
    getFont(): Font;
    getFontRenderContext(): FontRenderContext;
    getLineMetrics(c: string, i: number, i: number, graphics: Graphics): LineMetrics;
    getLineMetrics(s: string, i: number, i: number, graphics: Graphics): LineMetrics;
    getLineMetrics(s: string, graphics: Graphics): LineMetrics;
    getLineMetrics(characterIterator: CharacterIterator, i: number, i: number, graphics: Graphics): LineMetrics;
    getMaxCharBounds(graphics: Graphics): Rectangle2D;
    getStringBounds(c: string, i: number, i: number, graphics: Graphics): Rectangle2D;
    getStringBounds(s: string, i: number, i: number, graphics: Graphics): Rectangle2D;
    getStringBounds(s: string, graphics: Graphics): Rectangle2D;
    getStringBounds(characterIterator: CharacterIterator, i: number, i: number, graphics: Graphics): Rectangle2D;
}

// java.util.function.IntSupplier
declare interface IntSupplier {
    getAsInt(): number;
}

// java.awt.BufferCapabilities
declare interface BufferCapabilities extends Cloneable {
    isFullScreenRequired(): boolean;
    isMultiBufferAvailable(): boolean;
    isPageFlipping(): boolean;
    getFlipContents(): FlipContents;
    getBackBufferCapabilities(): ImageCapabilities;
    getFrontBufferCapabilities(): ImageCapabilities;
}

// java.security.CodeSource
declare interface CodeSource extends Serializable {
    implies(codeSource: CodeSource): boolean;
    getLocation(): URL;
    getCodeSigners(): CodeSigner[];
    getCertificates(): Certificate[];
}

// java.time.temporal.TemporalAdjuster
declare interface TemporalAdjuster {
    adjustInto(temporal: Temporal): Temporal;
}

// java.nio.charset.CoderResult
declare interface CoderResult {
    isError(): boolean;
    isMalformed(): boolean;
    isOverflow(): boolean;
    isUnderflow(): boolean;
    isUnmappable(): boolean;
    length(): number;
    malformedForLength(i: number): CoderResult;
    unmappableForLength(i: number): CoderResult;
    throwException(): void;
    OVERFLOW: CoderResult;
    UNDERFLOW: CoderResult;
}

// javax.net.SocketFactory
declare interface SocketFactory {
    createSocket(s: string, i: number): Socket;
    createSocket(s: string, i: number, inetAddress: InetAddress, i: number): Socket;
    createSocket(inetAddress: InetAddress, i: number): Socket;
    createSocket(inetAddress: InetAddress, i: number, inetAddress: InetAddress, i: number): Socket;
    createSocket(): Socket;
    getDefault(): SocketFactory;
}

// java.net.http.WebSocket
declare interface WebSocket {
    isInputClosed(): boolean;
    isOutputClosed(): boolean;
    getSubprotocol(): string;
    sendBinary(byteBuffer: ByteBuffer, b: boolean): CompletableFuture;
    sendClose(i: number, s: string): CompletableFuture;
    sendPing(byteBuffer: ByteBuffer): CompletableFuture;
    sendPong(byteBuffer: ByteBuffer): CompletableFuture;
    sendText(s: string, b: boolean): CompletableFuture;
    abort(): void;
    request(l: number): void;
    NORMAL_CLOSURE: number;
}

// java.time.temporal.TemporalAmount
declare interface TemporalAmount {
    addTo(temporal: Temporal): Temporal;
    subtractFrom(temporal: Temporal): Temporal;
    getUnits(): List;
    get(temporalUnit: TemporalUnit): number;
}

// java.util.regex.MatchResult
declare interface MatchResult {
    end(): number;
    end(i: number): number;
    groupCount(): number;
    start(): number;
    start(i: number): number;
    group(): string;
    group(i: number): string;
}

// java.net.ContentHandlerFactory
declare interface ContentHandlerFactory {
    createContentHandler(s: string): ContentHandler;
}

// java.awt.image.RenderedImage
declare interface RenderedImage {
    getHeight(): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getMinX(): number;
    getMinY(): number;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTileHeight(): number;
    getTileWidth(): number;
    getWidth(): number;
    getColorModel(): ColorModel;
    getData(): Raster;
    getData(rectangle: Rectangle): Raster;
    getTile(i: number, i: number): Raster;
    getSampleModel(): SampleModel;
    copyData(writableRaster: WritableRaster): WritableRaster;
    getProperty(s: string): any;
    getPropertyNames(): string[];
    getSources(): Vector;
}

// java.util.function.LongUnaryOperator
declare interface LongUnaryOperator {
    applyAsLong(l: number): number;
    andThen(longUnaryOperator: LongUnaryOperator): LongUnaryOperator;
    compose(longUnaryOperator: LongUnaryOperator): LongUnaryOperator;
    identity(): LongUnaryOperator;
}

// java.awt.geom.Point2D
declare interface Point2D extends Cloneable {
    getX(): number;
    getY(): number;
    setLocation(d: number, d: number): void;
    distance(d: number, d: number): number;
    distance(point2D: Point2D): number;
    distanceSq(d: number, d: number): number;
    distanceSq(point2D: Point2D): number;
    distance(d: number, d: number, d: number, d: number): number;
    distanceSq(d: number, d: number, d: number, d: number): number;
    setLocation(point2D: Point2D): void;
}

// org.yaml.snakeyaml.nodes.Node
declare interface Node {
    getNodeId(): NodeId;
    isResolved(): boolean;
    isTwoStepsConstruction(): boolean;
    useClassConstructor(): boolean;
    getType(): Class;
    getAnchor(): string;
    getBlockComments(): List;
    getEndComments(): List;
    getInLineComments(): List;
    getEndMark(): Mark;
    getStartMark(): Mark;
    getTag(): Tag;
    setAnchor(s: string): void;
    setBlockComments(list: List): void;
    setEndComments(list: List): void;
    setInLineComments(list: List): void;
    setTag(tag: Tag): void;
    setTwoStepsConstruction(b: boolean): void;
    setType(clazz: Class): void;
    setUseClassConstructor(boolean: Boolean): void;
}

// java.util.function.DoublePredicate
declare interface DoublePredicate {
    test(d: number): boolean;
    and(doublePredicate: DoublePredicate): DoublePredicate;
    negate(): DoublePredicate;
    or(doublePredicate: DoublePredicate): DoublePredicate;
}

// java.util.OptionalLong
declare interface OptionalLong {
    isEmpty(): boolean;
    isPresent(): boolean;
    stream(): LongStream;
    getAsLong(): number;
    orElse(l: number): number;
    orElseGet(longSupplier: LongSupplier): number;
    orElseThrow(): number;
    orElseThrow(supplier: Supplier): number;
    empty(): OptionalLong;
    of(l: number): OptionalLong;
    ifPresent(longConsumer: LongConsumer): void;
    ifPresentOrElse(longConsumer: LongConsumer, runnable: Runnable): void;
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

// java.util.function.IntConsumer
declare interface IntConsumer {
    accept(i: number): void;
    andThen(intConsumer: IntConsumer): IntConsumer;
}

// java.util.function.LongToDoubleFunction
declare interface LongToDoubleFunction {
    applyAsDouble(l: number): number;
}

// java.util.stream.Stream$Builder
declare interface Builder extends Consumer {
    build(): Stream;
    accept(object: any): void;
    add(object: any): Builder;
}

// java.util.LongSummaryStatistics
declare interface LongSummaryStatistics extends LongConsumer, IntConsumer {
    getAverage(): number;
    getCount(): number;
    getMax(): number;
    getMin(): number;
    getSum(): number;
    accept(i: number): void;
    accept(l: number): void;
    combine(longSummaryStatistics: LongSummaryStatistics): void;
}

// java.util.function.ObjIntConsumer
declare interface ObjIntConsumer {
    accept(object: any, i: number): void;
}

// java.time.ZoneOffset
declare interface ZoneOffset extends ZoneId, TemporalAccessor, TemporalAdjuster, Comparable, Serializable {
    isSupported(temporalField: TemporalField): boolean;
    compareTo(object: any): number;
    compareTo(zoneOffset: ZoneOffset): number;
    get(temporalField: TemporalField): number;
    getTotalSeconds(): number;
    query(temporalQuery: TemporalQuery): any;
    adjustInto(temporal: Temporal): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
    ofHours(i: number): ZoneOffset;
    ofHoursMinutes(i: number, i: number): ZoneOffset;
    ofHoursMinutesSeconds(i: number, i: number, i: number): ZoneOffset;
    ofTotalSeconds(i: number): ZoneOffset;
    MAX: ZoneOffset;
    MIN: ZoneOffset;
    UTC: ZoneOffset;
}

// java.nio.DoubleBuffer
declare interface DoubleBuffer extends Buffer, Comparable {
    get(): number;
    get(i: number): number;
    order(): ByteOrder;
    asReadOnlyBuffer(): DoubleBuffer;
    compact(): DoubleBuffer;
    put(d: number): DoubleBuffer;
    put(i: number, d: number): DoubleBuffer;
    equals(object: any): boolean;
    put(d: number): DoubleBuffer;
    compareTo(object: any): number;
    compareTo(doubleBuffer: DoubleBuffer): number;
    hashCode(): number;
    mismatch(doubleBuffer: DoubleBuffer): number;
    toString(): string;
    get(d: number): DoubleBuffer;
    get(d: number, i: number, i: number): DoubleBuffer;
    put(d: number, i: number, i: number): DoubleBuffer;
    put(doubleBuffer: DoubleBuffer): DoubleBuffer;
    allocate(i: number): DoubleBuffer;
    wrap(d: number): DoubleBuffer;
    wrap(d: number, i: number, i: number): DoubleBuffer;
}

// java.lang.AutoCloseable
declare interface AutoCloseable {
    close(): void;
}

// java.awt.Stroke
declare interface Stroke {
    createStrokedShape(shape: Shape): Shape;
}

// java.util.function.IntToLongFunction
declare interface IntToLongFunction {
    applyAsLong(i: number): number;
}

// java.util.Locale$IsoCountryCode
declare enum IsoCountryCode {
    PART1_ALPHA2,
    PART1_ALPHA3,
    PART3,
}

// java.io.SerializablePermission
declare interface SerializablePermission extends BasicPermission {
}

// java.util.function.DoubleToLongFunction
declare interface DoubleToLongFunction {
    applyAsLong(d: number): number;
}

// java.util.function.DoubleConsumer
declare interface DoubleConsumer {
    accept(d: number): void;
    andThen(doubleConsumer: DoubleConsumer): DoubleConsumer;
}

// java.awt.Composite
declare interface Composite {
    createContext(colorModel: ColorModel, colorModel: ColorModel, renderingHints: RenderingHints): CompositeContext;
}

// java.util.Locale$FilteringMode
declare enum FilteringMode {
    AUTOSELECT_FILTERING,
    EXTENDED_FILTERING,
    IGNORE_EXTENDED_RANGES,
    MAP_EXTENDED_RANGES,
    REJECT_EXTENDED_RANGES,
}

// java.util.function.LongPredicate
declare interface LongPredicate {
    test(l: number): boolean;
    and(longPredicate: LongPredicate): LongPredicate;
    negate(): LongPredicate;
    or(longPredicate: LongPredicate): LongPredicate;
}

// java.util.function.LongSupplier
declare interface LongSupplier {
    getAsLong(): number;
}

// java.io.DataInput
declare interface DataInput {
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readInt(): number;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    skipBytes(i: number): number;
    readLine(): string;
    readUTF(): string;
    readLong(): number;
    readShort(): number;
    readFully(b: number): void;
    readFully(b: number, i: number, i: number): void;
}

// java.util.function.IntUnaryOperator
declare interface IntUnaryOperator {
    applyAsInt(i: number): number;
    andThen(intUnaryOperator: IntUnaryOperator): IntUnaryOperator;
    compose(intUnaryOperator: IntUnaryOperator): IntUnaryOperator;
    identity(): IntUnaryOperator;
}

// java.util.function.DoubleFunction
declare interface DoubleFunction {
    apply(d: number): any;
}

// java.util.function.ObjLongConsumer
declare interface ObjLongConsumer {
    accept(object: any, l: number): void;
}

// java.net.Authenticator$RequestorType
declare enum RequestorType {
    PROXY,
    SERVER,
}

// java.util.PrimitiveIterator$OfInt
declare interface OfInt extends PrimitiveIterator {
    nextInt(): number;
    next(): Integer;
    next(): any;
    forEachRemaining(object: any): void;
    forEachRemaining(consumer: Consumer): void;
    forEachRemaining(intConsumer: IntConsumer): void;
}

// org.yaml.snakeyaml.introspector.PropertySubstitute
declare interface PropertySubstitute extends Property {
    setActualTypeArguments(clazz: Class): void;
    setDelegate(property: Property): void;
    setTargetType(clazz: Class): void;
}

// java.nio.FloatBuffer
declare interface FloatBuffer extends Buffer, Comparable {
    get(): number;
    get(i: number): number;
    order(): ByteOrder;
    asReadOnlyBuffer(): FloatBuffer;
    compact(): FloatBuffer;
    put(f: number): FloatBuffer;
    put(i: number, f: number): FloatBuffer;
    equals(object: any): boolean;
    put(f: number): FloatBuffer;
    compareTo(object: any): number;
    compareTo(floatBuffer: FloatBuffer): number;
    hashCode(): number;
    mismatch(floatBuffer: FloatBuffer): number;
    toString(): string;
    get(f: number): FloatBuffer;
    get(f: number, i: number, i: number): FloatBuffer;
    put(f: number, i: number, i: number): FloatBuffer;
    put(floatBuffer: FloatBuffer): FloatBuffer;
    allocate(i: number): FloatBuffer;
    wrap(f: number): FloatBuffer;
    wrap(f: number, i: number, i: number): FloatBuffer;
}

// java.util.Spliterator$OfDouble
declare interface OfDouble extends OfPrimitive {
    tryAdvance(doubleConsumer: DoubleConsumer): boolean;
    trySplit(): OfDouble;
    tryAdvance(object: any): boolean;
    tryAdvance(consumer: Consumer): boolean;
    trySplit(): Spliterator;
    trySplit(): OfPrimitive;
    forEachRemaining(object: any): void;
    forEachRemaining(consumer: Consumer): void;
    forEachRemaining(doubleConsumer: DoubleConsumer): void;
}

// java.util.stream.Collector
declare interface Collector {
    characteristics(): Set;
    accumulator(): BiConsumer;
    combiner(): BinaryOperator;
    finisher(): Function;
    supplier(): Supplier;
    of(supplier: Supplier, biConsumer: BiConsumer, binaryOperator: BinaryOperator, func: Function, characteristics: Characteristics): Collector;
    of(supplier: Supplier, biConsumer: BiConsumer, binaryOperator: BinaryOperator, characteristics: Characteristics): Collector;
}

// java.util.PrimitiveIterator$OfDouble
declare interface OfDouble extends PrimitiveIterator {
    nextDouble(): number;
    next(): Double;
    next(): any;
    forEachRemaining(object: any): void;
    forEachRemaining(consumer: Consumer): void;
    forEachRemaining(doubleConsumer: DoubleConsumer): void;
}

// net.md_5.bungee.api.chat.ComponentBuilder$FormatRetention
declare enum FormatRetention {
    NONE,
    FORMATTING,
    EVENTS,
    ALL,
}

// java.util.TimeZone
declare interface TimeZone extends Serializable, Cloneable {
    inDaylightTime(date: Date): boolean;
    useDaylightTime(): boolean;
    getOffset(i: number, i: number, i: number, i: number, i: number, i: number): number;
    getRawOffset(): number;
    setRawOffset(i: number): void;
    hasSameRules(timeZone: TimeZone): boolean;
    observesDaylightTime(): boolean;
    getDisplayName(): string;
    getDisplayName(b: boolean, i: number): string;
    getDisplayName(locale: Locale): string;
    getDSTSavings(): number;
    getOffset(l: number): number;
    getDisplayName(b: boolean, i: number, locale: Locale): string;
    getID(): string;
    toZoneId(): ZoneId;
    getDefault(): TimeZone;
    getTimeZone(zoneId: ZoneId): TimeZone;
    getAvailableIDs(): string[];
    getAvailableIDs(i: number): string[];
    getTimeZone(s: string): TimeZone;
    setDefault(timeZone: TimeZone): void;
    setID(s: string): void;
    LONG: number;
    SHORT: number;
}

// java.util.function.IntPredicate
declare interface IntPredicate {
    test(i: number): boolean;
    and(intPredicate: IntPredicate): IntPredicate;
    negate(): IntPredicate;
    or(intPredicate: IntPredicate): IntPredicate;
}

// java.security.Permission
declare interface Permission extends Guard, Serializable {
    implies(permission: Permission): boolean;
    getActions(): string;
    getName(): string;
    newPermissionCollection(): PermissionCollection;
    checkGuard(object: any): void;
}

// net.md_5.bungee.api.chat.ClickEvent
declare interface ClickEvent {
    getValue(): string;
    getAction(): Action;
}

// javax.net.ssl.SSLEngineResult
declare interface SSLEngineResult {
    bytesConsumed(): number;
    bytesProduced(): number;
    getHandshakeStatus(): HandshakeStatus;
    getStatus(): Status;
    sequenceNumber(): number;
}

// java.util.Spliterator$OfLong
declare interface OfLong extends OfPrimitive {
    tryAdvance(longConsumer: LongConsumer): boolean;
    trySplit(): OfLong;
    tryAdvance(object: any): boolean;
    tryAdvance(consumer: Consumer): boolean;
    trySplit(): Spliterator;
    trySplit(): OfPrimitive;
    forEachRemaining(object: any): void;
    forEachRemaining(consumer: Consumer): void;
    forEachRemaining(longConsumer: LongConsumer): void;
}

// java.awt.image.BufferedImageOp
declare interface BufferedImageOp {
    getRenderingHints(): RenderingHints;
    getPoint2D(point2D: Point2D, point2D: Point2D): Point2D;
    getBounds2D(bufferedImage: BufferedImage): Rectangle2D;
    createCompatibleDestImage(bufferedImage: BufferedImage, colorModel: ColorModel): BufferedImage;
    filter(bufferedImage: BufferedImage, bufferedImage: BufferedImage): BufferedImage;
}

// java.awt.Shape
declare interface Shape {
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    getBounds(): Rectangle;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    getBounds2D(): Rectangle2D;
}

// org.yaml.snakeyaml.composer.Composer
declare interface Composer {
    checkNode(): boolean;
    getNode(): Node;
    getSingleNode(): Node;
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

// java.time.ZonedDateTime
declare interface ZonedDateTime extends Temporal, ChronoZonedDateTime, Serializable {
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    get(temporalField: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfYear(): number;
    getHour(): number;
    getMinute(): number;
    getMonthValue(): number;
    getNano(): number;
    getSecond(): number;
    getYear(): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    getDayOfWeek(): DayOfWeek;
    toLocalDate(): LocalDate;
    toLocalDateTime(): LocalDateTime;
    toLocalTime(): LocalTime;
    getMonth(): Month;
    toOffsetDateTime(): OffsetDateTime;
    getZone(): ZoneId;
    getOffset(): ZoneOffset;
    minus(temporalAmount: TemporalAmount): ZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ZonedDateTime;
    minusDays(l: number): ZonedDateTime;
    minusHours(l: number): ZonedDateTime;
    minusMinutes(l: number): ZonedDateTime;
    minusMonths(l: number): ZonedDateTime;
    minusNanos(l: number): ZonedDateTime;
    minusSeconds(l: number): ZonedDateTime;
    minusWeeks(l: number): ZonedDateTime;
    minusYears(l: number): ZonedDateTime;
    plus(temporalAmount: TemporalAmount): ZonedDateTime;
    plus(l: number, temporalUnit: TemporalUnit): ZonedDateTime;
    plusDays(l: number): ZonedDateTime;
    plusHours(l: number): ZonedDateTime;
    plusMinutes(l: number): ZonedDateTime;
    plusMonths(l: number): ZonedDateTime;
    plusNanos(l: number): ZonedDateTime;
    plusSeconds(l: number): ZonedDateTime;
    plusWeeks(l: number): ZonedDateTime;
    plusYears(l: number): ZonedDateTime;
    truncatedTo(temporalUnit: TemporalUnit): ZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): ZonedDateTime;
    with(temporalField: TemporalField, l: number): ZonedDateTime;
    withDayOfMonth(i: number): ZonedDateTime;
    withDayOfYear(i: number): ZonedDateTime;
    withEarlierOffsetAtOverlap(): ZonedDateTime;
    withFixedOffsetZone(): ZonedDateTime;
    withHour(i: number): ZonedDateTime;
    withLaterOffsetAtOverlap(): ZonedDateTime;
    withMinute(i: number): ZonedDateTime;
    withMonth(i: number): ZonedDateTime;
    withNano(i: number): ZonedDateTime;
    withSecond(i: number): ZonedDateTime;
    withYear(i: number): ZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ZonedDateTime;
    toLocalDate(): ChronoLocalDate;
    toLocalDateTime(): ChronoLocalDateTime;
    minus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    plus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    plus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): ChronoZonedDateTime;
    with(temporalField: TemporalField, l: number): ChronoZonedDateTime;
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime;
    withLaterOffsetAtOverlap(): ChronoZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ChronoZonedDateTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    from(temporalAccessor: TemporalAccessor): ZonedDateTime;
    now(): ZonedDateTime;
    now(clock: Clock): ZonedDateTime;
    now(zoneId: ZoneId): ZonedDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number, zoneId: ZoneId): ZonedDateTime;
    of(localDate: LocalDate, localTime: LocalTime, zoneId: ZoneId): ZonedDateTime;
    of(localDateTime: LocalDateTime, zoneId: ZoneId): ZonedDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): ZonedDateTime;
    ofInstant(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneId: ZoneId): ZonedDateTime;
    ofLocal(localDateTime: LocalDateTime, zoneId: ZoneId, zoneOffset: ZoneOffset): ZonedDateTime;
    ofStrict(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneId: ZoneId): ZonedDateTime;
    parse(s: string): ZonedDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): ZonedDateTime;
}

// javax.net.ServerSocketFactory
declare interface ServerSocketFactory {
    createServerSocket(i: number): ServerSocket;
    createServerSocket(i: number, i: number): ServerSocket;
    createServerSocket(i: number, i: number, inetAddress: InetAddress): ServerSocket;
    createServerSocket(): ServerSocket;
    getDefault(): ServerSocketFactory;
}

// java.time.Clock
declare interface Clock {
    withZone(zoneId: ZoneId): Clock;
    instant(): Instant;
    getZone(): ZoneId;
    millis(): number;
    fixed(instant: Instant, zoneId: ZoneId): Clock;
    offset(clock: Clock, duration: Duration): Clock;
    system(zoneId: ZoneId): Clock;
    systemDefaultZone(): Clock;
    systemUTC(): Clock;
    tick(clock: Clock, duration: Duration): Clock;
    tickMillis(zoneId: ZoneId): Clock;
    tickMinutes(zoneId: ZoneId): Clock;
    tickSeconds(zoneId: ZoneId): Clock;
}

// java.nio.file.spi.FileSystemProvider
declare interface FileSystemProvider {
    isHidden(path: Path): boolean;
    isSameFile(path: Path, path: Path): boolean;
    getScheme(): string;
    newByteChannel(path: Path, set: Set, fileAttribute: FileAttribute): SeekableByteChannel;
    newDirectoryStream(path: Path, filter: Filter): DirectoryStream;
    getFileStore(path: Path): FileStore;
    getFileSystem(uRI: URI): FileSystem;
    newFileSystem(uRI: URI, map: Map): FileSystem;
    getPath(uRI: URI): Path;
    readAttributes(path: Path, clazz: Class, linkOption: LinkOption): BasicFileAttributes;
    getFileAttributeView(path: Path, clazz: Class, linkOption: LinkOption): FileAttributeView;
    readAttributes(path: Path, s: string, linkOption: LinkOption): Map;
    checkAccess(path: Path, accessMode: AccessMode): void;
    copy(path: Path, path: Path, copyOption: CopyOption): void;
    createDirectory(path: Path, fileAttribute: FileAttribute): void;
    delete(path: Path): void;
    move(path: Path, path: Path, copyOption: CopyOption): void;
    setAttribute(path: Path, s: string, object: any, linkOption: LinkOption): void;
    deleteIfExists(path: Path): boolean;
    newInputStream(path: Path, openOption: OpenOption): InputStream;
    newOutputStream(path: Path, openOption: OpenOption): OutputStream;
    newAsynchronousFileChannel(path: Path, set: Set, executorService: ExecutorService, fileAttribute: FileAttribute): AsynchronousFileChannel;
    newFileChannel(path: Path, set: Set, fileAttribute: FileAttribute): FileChannel;
    newFileSystem(path: Path, map: Map): FileSystem;
    readSymbolicLink(path: Path): Path;
    installedProviders(): List;
    createLink(path: Path, path: Path): void;
    createSymbolicLink(path: Path, path: Path, fileAttribute: FileAttribute): void;
}

// java.util.stream.LongStream$Builder
declare interface Builder extends LongConsumer {
    build(): LongStream;
    accept(l: number): void;
    add(l: number): Builder;
}

// java.awt.image.DataBuffer
declare interface DataBuffer {
    getElem(i: number, i: number): number;
    setElem(i: number, i: number, i: number): void;
    getElemDouble(i: number): number;
    getElemDouble(i: number, i: number): number;
    getElemFloat(i: number): number;
    getElemFloat(i: number, i: number): number;
    getDataType(): number;
    getElem(i: number): number;
    getNumBanks(): number;
    getOffset(): number;
    getSize(): number;
    getOffsets(): number[];
    getDataTypeSize(i: number): number;
    setElem(i: number, i: number): void;
    setElemDouble(i: number, d: number): void;
    setElemDouble(i: number, i: number, d: number): void;
    setElemFloat(i: number, f: number): void;
    setElemFloat(i: number, i: number, f: number): void;
    TYPE_BYTE: number;
    TYPE_DOUBLE: number;
    TYPE_FLOAT: number;
    TYPE_INT: number;
    TYPE_SHORT: number;
    TYPE_UNDEFINED: number;
    TYPE_USHORT: number;
}

// java.time.ZoneId
declare interface ZoneId extends Serializable {
    getId(): string;
    getRules(): ZoneRules;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    normalized(): ZoneId;
    from(temporalAccessor: TemporalAccessor): ZoneId;
    of(s: string): ZoneId;
    of(s: string, map: Map): ZoneId;
    ofOffset(s: string, zoneOffset: ZoneOffset): ZoneId;
    systemDefault(): ZoneId;
    getAvailableZoneIds(): Set;
    SHORT_IDS: Map;
}

// java.security.PermissionCollection
declare interface PermissionCollection extends Serializable {
    implies(permission: Permission): boolean;
    elements(): Enumeration;
    add(permission: Permission): void;
    isReadOnly(): boolean;
    elementsAsStream(): Stream;
    setReadOnly(): void;
}

// java.util.stream.DoubleStream$Builder
declare interface Builder extends DoubleConsumer {
    build(): DoubleStream;
    accept(d: number): void;
    add(d: number): Builder;
}

// org.yaml.snakeyaml.nodes.Tag
declare interface Tag {
    isCompatible(clazz: Class): boolean;
    isSecondary(): boolean;
    matches(clazz: Class): boolean;
    startsWith(s: string): boolean;
    getClassName(): string;
    getValue(): string;
    PREFIX: string;
    BINARY: Tag;
    BOOL: Tag;
    COMMENT: Tag;
    FLOAT: Tag;
    INT: Tag;
    MAP: Tag;
    MERGE: Tag;
    NULL: Tag;
    OMAP: Tag;
    PAIRS: Tag;
    SEQ: Tag;
    SET: Tag;
    STR: Tag;
    TIMESTAMP: Tag;
    YAML: Tag;
}

// java.util.stream.BaseStream
declare interface BaseStream extends AutoCloseable {
    isParallel(): boolean;
    iterator(): Iterator;
    spliterator(): Spliterator;
    onClose(runnable: Runnable): BaseStream;
    parallel(): BaseStream;
    sequential(): BaseStream;
    unordered(): BaseStream;
    close(): void;
}

// java.util.function.LongBinaryOperator
declare interface LongBinaryOperator {
    applyAsLong(l: number, l: number): number;
}

// java.awt.geom.PathIterator
declare interface PathIterator {
    isDone(): boolean;
    currentSegment(d: number): number;
    currentSegment(f: number): number;
    getWindingRule(): number;
    next(): void;
    SEG_CLOSE: number;
    SEG_CUBICTO: number;
    SEG_LINETO: number;
    SEG_MOVETO: number;
    SEG_QUADTO: number;
    WIND_EVEN_ODD: number;
    WIND_NON_ZERO: number;
}

// net.md_5.bungee.api.ChatColor
declare interface ChatColor {
    ordinal(): number;
    getColor(): Color;
    getName(): string;
    name(): string;
    stripColor(s: string): string;
    translateAlternateColorCodes(c: string, s: string): string;
    getByChar(c: string): ChatColor;
    of(color: Color): ChatColor;
    of(s: string): ChatColor;
    valueOf(s: string): ChatColor;
    values(): ChatColor[];
    COLOR_CHAR: string;
    ALL_CODES: string;
    STRIP_COLOR_PATTERN: Pattern;
    AQUA: ChatColor;
    BLACK: ChatColor;
    BLUE: ChatColor;
    BOLD: ChatColor;
    DARK_AQUA: ChatColor;
    DARK_BLUE: ChatColor;
    DARK_GRAY: ChatColor;
    DARK_GREEN: ChatColor;
    DARK_PURPLE: ChatColor;
    DARK_RED: ChatColor;
    GOLD: ChatColor;
    GRAY: ChatColor;
    GREEN: ChatColor;
    ITALIC: ChatColor;
    LIGHT_PURPLE: ChatColor;
    MAGIC: ChatColor;
    RED: ChatColor;
    RESET: ChatColor;
    STRIKETHROUGH: ChatColor;
    UNDERLINE: ChatColor;
    WHITE: ChatColor;
    YELLOW: ChatColor;
}

// java.net.PasswordAuthentication
declare interface PasswordAuthentication {
    getPassword(): string[];
    getUserName(): string;
}

// java.awt.image.ImageConsumer
declare interface ImageConsumer {
    imageComplete(i: number): void;
    setColorModel(colorModel: ColorModel): void;
    setDimensions(i: number, i: number): void;
    setHints(i: number): void;
    setPixels(i: number, i: number, i: number, i: number, colorModel: ColorModel, b: number, i: number, i: number): void;
    setPixels(i: number, i: number, i: number, i: number, colorModel: ColorModel, i: number, i: number, i: number): void;
    setProperties(hashtable: Hashtable): void;
    COMPLETESCANLINES: number;
    IMAGEABORTED: number;
    IMAGEERROR: number;
    RANDOMPIXELORDER: number;
    SINGLEFRAME: number;
    SINGLEFRAMEDONE: number;
    SINGLEPASS: number;
    STATICIMAGEDONE: number;
    TOPDOWNLEFTRIGHT: number;
}

// java.util.OptionalInt
declare interface OptionalInt {
    isEmpty(): boolean;
    isPresent(): boolean;
    getAsInt(): number;
    orElse(i: number): number;
    orElseGet(intSupplier: IntSupplier): number;
    orElseThrow(): number;
    orElseThrow(supplier: Supplier): number;
    stream(): IntStream;
    empty(): OptionalInt;
    of(i: number): OptionalInt;
    ifPresent(intConsumer: IntConsumer): void;
    ifPresentOrElse(intConsumer: IntConsumer, runnable: Runnable): void;
}

// org.yaml.snakeyaml.introspector.Property
declare interface Property extends Comparable {
    getActualTypeArguments(): Class[];
    get(object: any): any;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): List;
    set(object: any, object: any): void;
    isReadable(): boolean;
    isWritable(): boolean;
    compareTo(object: any): number;
    compareTo(property: Property): number;
    getType(): Class;
    getName(): string;
}

// java.nio.Buffer
declare interface Buffer {
    hasArray(): boolean;
    isDirect(): boolean;
    isReadOnly(): boolean;
    arrayOffset(): number;
    array(): any;
    duplicate(): Buffer;
    slice(): Buffer;
    hasRemaining(): boolean;
    capacity(): number;
    limit(): number;
    position(): number;
    remaining(): number;
    clear(): Buffer;
    flip(): Buffer;
    limit(i: number): Buffer;
    mark(): Buffer;
    position(i: number): Buffer;
    reset(): Buffer;
    rewind(): Buffer;
}

// java.awt.font.GlyphVector
declare interface GlyphVector extends Cloneable {
    equals(glyphVector: GlyphVector): boolean;
    getGlyphPositions(i: number, i: number, f: number): number[];
    getGlyphCode(i: number): number;
    getNumGlyphs(): number;
    getGlyphCodes(i: number, i: number, i: number): number[];
    getFont(): Font;
    getGlyphLogicalBounds(i: number): Shape;
    getGlyphOutline(i: number): Shape;
    getGlyphVisualBounds(i: number): Shape;
    getOutline(): Shape;
    getOutline(f: number, f: number): Shape;
    getFontRenderContext(): FontRenderContext;
    getGlyphJustificationInfo(i: number): GlyphJustificationInfo;
    getGlyphMetrics(i: number): GlyphMetrics;
    getGlyphTransform(i: number): AffineTransform;
    getGlyphPosition(i: number): Point2D;
    getLogicalBounds(): Rectangle2D;
    getVisualBounds(): Rectangle2D;
    performDefaultLayout(): void;
    setGlyphPosition(i: number, point2D: Point2D): void;
    setGlyphTransform(i: number, affineTransform: AffineTransform): void;
    getGlyphCharIndex(i: number): number;
    getLayoutFlags(): number;
    getGlyphCharIndices(i: number, i: number, i: number): number[];
    getGlyphPixelBounds(i: number, fontRenderContext: FontRenderContext, f: number, f: number): Rectangle;
    getPixelBounds(fontRenderContext: FontRenderContext, f: number, f: number): Rectangle;
    getGlyphOutline(i: number, f: number, f: number): Shape;
    FLAG_COMPLEX_GLYPHS: number;
    FLAG_HAS_POSITION_ADJUSTMENTS: number;
    FLAG_HAS_TRANSFORMS: number;
    FLAG_MASK: number;
    FLAG_RUN_RTL: number;
}

// java.awt.geom.RectangularShape
declare interface RectangularShape extends Shape, Cloneable {
    isEmpty(): boolean;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    setFrame(d: number, d: number, d: number, d: number): void;
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    getCenterX(): number;
    getCenterY(): number;
    getMaxX(): number;
    getMaxY(): number;
    getMinX(): number;
    getMinY(): number;
    getBounds(): Rectangle;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    getFrame(): Rectangle2D;
    setFrame(point2D: Point2D, dimension2D: Dimension2D): void;
    setFrame(rectangle2D: Rectangle2D): void;
    setFrameFromCenter(d: number, d: number, d: number, d: number): void;
    setFrameFromCenter(point2D: Point2D, point2D: Point2D): void;
    setFrameFromDiagonal(d: number, d: number, d: number, d: number): void;
    setFrameFromDiagonal(point2D: Point2D, point2D: Point2D): void;
}

// java.awt.Font
declare interface Font extends Serializable {
    canDisplay(c: string): boolean;
    canDisplay(i: number): boolean;
    hasLayoutAttributes(): boolean;
    hasUniformLineMetrics(): boolean;
    isBold(): boolean;
    isItalic(): boolean;
    isPlain(): boolean;
    isTransformed(): boolean;
    getBaselineFor(c: string): number;
    getItalicAngle(): number;
    getSize2D(): number;
    canDisplayUpTo(c: string, i: number, i: number): number;
    canDisplayUpTo(s: string): number;
    canDisplayUpTo(characterIterator: CharacterIterator, i: number, i: number): number;
    getMissingGlyphCode(): number;
    getNumGlyphs(): number;
    getSize(): number;
    getStyle(): number;
    deriveFont(f: number): Font;
    deriveFont(i: number): Font;
    deriveFont(i: number, f: number): Font;
    deriveFont(i: number, affineTransform: AffineTransform): Font;
    deriveFont(affineTransform: AffineTransform): Font;
    deriveFont(map: Map): Font;
    createGlyphVector(fontRenderContext: FontRenderContext, c: string): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, i: number): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, s: string): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, characterIterator: CharacterIterator): GlyphVector;
    layoutGlyphVector(fontRenderContext: FontRenderContext, c: string, i: number, i: number, i: number): GlyphVector;
    getLineMetrics(c: string, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(s: string, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(s: string, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(characterIterator: CharacterIterator, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getTransform(): AffineTransform;
    getMaxCharBounds(fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(c: string, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(s: string, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(s: string, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(characterIterator: CharacterIterator, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getFamily(): string;
    getFamily(locale: Locale): string;
    getFontName(): string;
    getFontName(locale: Locale): string;
    getName(): string;
    getPSName(): string;
    getAvailableAttributes(): Attribute[];
    getAttributes(): Map;
    textRequiresLayout(c: string, i: number, i: number): boolean;
    createFont(i: number, file: File): Font;
    createFont(i: number, inputStream: InputStream): Font;
    decode(s: string): Font;
    getFont(s: string): Font;
    getFont(s: string, font: Font): Font;
    getFont(map: Map): Font;
    createFonts(file: File): Font[];
    createFonts(inputStream: InputStream): Font[];
    BOLD: number;
    CENTER_BASELINE: number;
    HANGING_BASELINE: number;
    ITALIC: number;
    LAYOUT_LEFT_TO_RIGHT: number;
    LAYOUT_NO_LIMIT_CONTEXT: number;
    LAYOUT_NO_START_CONTEXT: number;
    LAYOUT_RIGHT_TO_LEFT: number;
    PLAIN: number;
    ROMAN_BASELINE: number;
    TRUETYPE_FONT: number;
    TYPE1_FONT: number;
    DIALOG: string;
    DIALOG_INPUT: string;
    MONOSPACED: string;
    SANS_SERIF: string;
    SERIF: string;
}

// java.lang.reflect.AccessibleObject
declare interface AccessibleObject extends AnnotatedElement {
    isAccessible(): boolean;
    isAnnotationPresent(clazz: Class): boolean;
    canAccess(object: any): boolean;
    trySetAccessible(): boolean;
    getAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    setAccessible(accessibleObject: AccessibleObject, b: boolean): void;
    setAccessible(b: boolean): void;
}

// java.nio.ShortBuffer
declare interface ShortBuffer extends Buffer, Comparable {
    order(): ByteOrder;
    asReadOnlyBuffer(): ShortBuffer;
    compact(): ShortBuffer;
    put(i: number, s: number): ShortBuffer;
    put(s: number): ShortBuffer;
    get(): number;
    get(i: number): number;
    equals(object: any): boolean;
    put(s: number): ShortBuffer;
    compareTo(object: any): number;
    compareTo(shortBuffer: ShortBuffer): number;
    hashCode(): number;
    mismatch(shortBuffer: ShortBuffer): number;
    toString(): string;
    get(s: number): ShortBuffer;
    get(s: number, i: number, i: number): ShortBuffer;
    put(shortBuffer: ShortBuffer): ShortBuffer;
    put(s: number, i: number, i: number): ShortBuffer;
    allocate(i: number): ShortBuffer;
    wrap(s: number): ShortBuffer;
    wrap(s: number, i: number, i: number): ShortBuffer;
}

// java.lang.reflect.Member
declare interface Member {
    isSynthetic(): boolean;
    getModifiers(): number;
    getDeclaringClass(): Class;
    getName(): string;
    DECLARED: number;
    PUBLIC: number;
}

// java.awt.RenderingHints$Key
declare interface Key {
    isCompatibleValue(object: any): boolean;
}

// java.util.Spliterator$OfInt
declare interface OfInt extends OfPrimitive {
    tryAdvance(intConsumer: IntConsumer): boolean;
    trySplit(): OfInt;
    tryAdvance(object: any): boolean;
    tryAdvance(consumer: Consumer): boolean;
    trySplit(): Spliterator;
    trySplit(): OfPrimitive;
    forEachRemaining(object: any): void;
    forEachRemaining(consumer: Consumer): void;
    forEachRemaining(intConsumer: IntConsumer): void;
}

// java.util.IntSummaryStatistics
declare interface IntSummaryStatistics extends IntConsumer {
    getAverage(): number;
    getMax(): number;
    getMin(): number;
    getCount(): number;
    getSum(): number;
    accept(i: number): void;
    combine(intSummaryStatistics: IntSummaryStatistics): void;
}

// java.net.Proxy$Type
declare enum Type {
    DIRECT,
    HTTP,
    SOCKS,
}

// java.awt.image.renderable.RenderableImage
declare interface RenderableImage {
    isDynamic(): boolean;
    getHeight(): number;
    getMinX(): number;
    getMinY(): number;
    getWidth(): number;
    createDefaultRendering(): RenderedImage;
    createRendering(renderContext: RenderContext): RenderedImage;
    createScaledRendering(i: number, i: number, renderingHints: RenderingHints): RenderedImage;
    getProperty(s: string): any;
    getPropertyNames(): string[];
    getSources(): Vector;
    HINTS_OBSERVED: string;
}

// java.util.function.DoubleBinaryOperator
declare interface DoubleBinaryOperator {
    applyAsDouble(d: number, d: number): number;
}

// java.util.function.IntToDoubleFunction
declare interface IntToDoubleFunction {
    applyAsDouble(i: number): number;
}

// java.net.Socket
declare interface Socket extends Closeable {
    getKeepAlive(): boolean;
    getOOBInline(): boolean;
    getReuseAddress(): boolean;
    getTcpNoDelay(): boolean;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    isInputShutdown(): boolean;
    isOutputShutdown(): boolean;
    getLocalPort(): number;
    getPort(): number;
    getSoLinger(): number;
    getTrafficClass(): number;
    getInputStream(): InputStream;
    getOutputStream(): OutputStream;
    getOption(socketOption: SocketOption): any;
    getInetAddress(): InetAddress;
    getLocalAddress(): InetAddress;
    setOption(socketOption: SocketOption, object: any): Socket;
    getLocalSocketAddress(): SocketAddress;
    getRemoteSocketAddress(): SocketAddress;
    getChannel(): SocketChannel;
    supportedOptions(): Set;
    setSocketImplFactory(socketImplFactory: SocketImplFactory): void;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getSoTimeout(): number;
    close(): void;
    setReceiveBufferSize(i: number): void;
    setSendBufferSize(i: number): void;
    setSoTimeout(i: number): void;
    bind(socketAddress: SocketAddress): void;
    connect(socketAddress: SocketAddress): void;
    connect(socketAddress: SocketAddress, i: number): void;
    sendUrgentData(i: number): void;
    setKeepAlive(b: boolean): void;
    setOOBInline(b: boolean): void;
    setPerformancePreferences(i: number, i: number, i: number): void;
    setReuseAddress(b: boolean): void;
    setSoLinger(b: boolean, i: number): void;
    setTcpNoDelay(b: boolean): void;
    setTrafficClass(i: number): void;
    shutdownInput(): void;
    shutdownOutput(): void;
}

// java.awt.geom.Line2D
declare interface Line2D extends Shape, Cloneable {
    getX1(): number;
    getX2(): number;
    getY1(): number;
    getY2(): number;
    getP1(): Point2D;
    getP2(): Point2D;
    setLine(d: number, d: number, d: number, d: number): void;
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    intersectsLine(d: number, d: number, d: number, d: number): boolean;
    intersectsLine(line2D: Line2D): boolean;
    ptLineDist(d: number, d: number): number;
    ptLineDist(point2D: Point2D): number;
    ptLineDistSq(d: number, d: number): number;
    ptLineDistSq(point2D: Point2D): number;
    ptSegDist(d: number, d: number): number;
    ptSegDist(point2D: Point2D): number;
    ptSegDistSq(d: number, d: number): number;
    ptSegDistSq(point2D: Point2D): number;
    relativeCCW(d: number, d: number): number;
    relativeCCW(point2D: Point2D): number;
    getBounds(): Rectangle;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    linesIntersect(d: number, d: number, d: number, d: number, d: number, d: number, d: number, d: number): boolean;
    ptLineDist(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptLineDistSq(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptSegDist(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptSegDistSq(d: number, d: number, d: number, d: number, d: number, d: number): number;
    relativeCCW(d: number, d: number, d: number, d: number, d: number, d: number): number;
    setLine(line2D: Line2D): void;
    setLine(point2D: Point2D, point2D: Point2D): void;
}

// java.util.function.BiPredicate
declare interface BiPredicate {
    test(object: any, object: any): boolean;
    and(biPredicate: BiPredicate): BiPredicate;
    negate(): BiPredicate;
    or(biPredicate: BiPredicate): BiPredicate;
}

// java.lang.module.ModuleDescriptor$Builder
declare interface Builder {
    build(): ModuleDescriptor;
    exports(s: string): Builder;
    exports(s: string, set: Set): Builder;
    exports(exports: Exports): Builder;
    exports(set: Set, s: string): Builder;
    exports(set: Set, s: string, set: Set): Builder;
    mainClass(s: string): Builder;
    opens(s: string): Builder;
    opens(s: string, set: Set): Builder;
    opens(opens: Opens): Builder;
    opens(set: Set, s: string): Builder;
    opens(set: Set, s: string, set: Set): Builder;
    packages(set: Set): Builder;
    provides(s: string, list: List): Builder;
    provides(provides: Provides): Builder;
    requires(s: string): Builder;
    requires(requires: Requires): Builder;
    requires(set: Set, s: string): Builder;
    requires(set: Set, s: string, version: Version): Builder;
    uses(s: string): Builder;
    version(s: string): Builder;
    version(version: Version): Builder;
}

// org.yaml.snakeyaml.error.Mark
declare interface Mark extends Serializable {
    getColumn(): number;
    getIndex(): number;
    getLine(): number;
    getPointer(): number;
    getBuffer(): number[];
    getName(): string;
    get_snippet(): string;
    get_snippet(i: number, i: number): string;
}

// java.nio.file.DirectoryStream$Filter
declare interface Filter {
    accept(object: any): boolean;
}

// org.yaml.snakeyaml.DumperOptions$ScalarStyle
declare enum ScalarStyle {
    DOUBLE_QUOTED,
    SINGLE_QUOTED,
    LITERAL,
    FOLDED,
    PLAIN,
}

// java.awt.font.GlyphJustificationInfo
declare interface GlyphJustificationInfo {
    growAbsorb: boolean;
    shrinkAbsorb: boolean;
    growLeftLimit: number;
    growRightLimit: number;
    shrinkLeftLimit: number;
    shrinkRightLimit: number;
    weight: number;
    growPriority: number;
    shrinkPriority: number;
    PRIORITY_INTERCHAR: number;
    PRIORITY_KASHIDA: number;
    PRIORITY_NONE: number;
    PRIORITY_WHITESPACE: number;
}

// java.awt.GraphicsConfigTemplate
declare interface GraphicsConfigTemplate extends Serializable {
    isGraphicsConfigSupported(graphicsConfiguration: GraphicsConfiguration): boolean;
    getBestConfiguration(graphicsConfiguration: GraphicsConfiguration): GraphicsConfiguration;
    PREFERRED: number;
    REQUIRED: number;
    UNNECESSARY: number;
}

// javax.net.ssl.SSLEngineResult$Status
declare enum Status {
    BUFFER_UNDERFLOW,
    BUFFER_OVERFLOW,
    OK,
    CLOSED,
}

// org.yaml.snakeyaml.DumperOptions$FlowStyle
declare enum FlowStyle {
    FLOW,
    BLOCK,
    AUTO,
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

// java.security.CodeSigner
declare interface CodeSigner extends Serializable {
    getTimestamp(): Timestamp;
    getSignerCertPath(): CertPath;
}

// java.nio.file.attribute.UserPrincipal
declare interface UserPrincipal extends Principal {
}

// java.awt.GraphicsDevice$WindowTranslucency
declare enum WindowTranslucency {
    PERPIXEL_TRANSPARENT,
    TRANSLUCENT,
    PERPIXEL_TRANSLUCENT,
}

// java.nio.file.attribute.FileAttributeView
declare interface FileAttributeView extends AttributeView {
}

// java.net.ContentHandler
declare interface ContentHandler {
    getContent(uRLConnection: URLConnection): any;
    getContent(uRLConnection: URLConnection, clazz: Class): any;
}

// java.nio.file.AccessMode
declare enum AccessMode {
    READ,
    WRITE,
    EXECUTE,
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

// java.security.spec.AlgorithmParameterSpec
declare interface AlgorithmParameterSpec {
}

// java.time.LocalDate
declare interface LocalDate extends Temporal, TemporalAdjuster, ChronoLocalDate, Serializable {
    isAfter(chronoLocalDate: ChronoLocalDate): boolean;
    isBefore(chronoLocalDate: ChronoLocalDate): boolean;
    isEqual(chronoLocalDate: ChronoLocalDate): boolean;
    isLeapYear(): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(chronoLocalDate: ChronoLocalDate): number;
    get(temporalField: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfYear(): number;
    getMonthValue(): number;
    getYear(): number;
    lengthOfMonth(): number;
    lengthOfYear(): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    getDayOfWeek(): DayOfWeek;
    minus(temporalAmount: TemporalAmount): LocalDate;
    minus(l: number, temporalUnit: TemporalUnit): LocalDate;
    minusDays(l: number): LocalDate;
    minusMonths(l: number): LocalDate;
    minusWeeks(l: number): LocalDate;
    minusYears(l: number): LocalDate;
    plus(temporalAmount: TemporalAmount): LocalDate;
    plus(l: number, temporalUnit: TemporalUnit): LocalDate;
    plusDays(l: number): LocalDate;
    plusMonths(l: number): LocalDate;
    plusWeeks(l: number): LocalDate;
    plusYears(l: number): LocalDate;
    with(temporalAdjuster: TemporalAdjuster): LocalDate;
    with(temporalField: TemporalField, l: number): LocalDate;
    withDayOfMonth(i: number): LocalDate;
    withDayOfYear(i: number): LocalDate;
    withMonth(i: number): LocalDate;
    withYear(i: number): LocalDate;
    atStartOfDay(): LocalDateTime;
    atTime(i: number, i: number): LocalDateTime;
    atTime(i: number, i: number, i: number): LocalDateTime;
    atTime(i: number, i: number, i: number, i: number): LocalDateTime;
    atTime(localTime: LocalTime): LocalDateTime;
    getMonth(): Month;
    atTime(offsetTime: OffsetTime): OffsetDateTime;
    until(chronoLocalDate: ChronoLocalDate): Period;
    atStartOfDay(zoneId: ZoneId): ZonedDateTime;
    minus(temporalAmount: TemporalAmount): ChronoLocalDate;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    plus(temporalAmount: TemporalAmount): ChronoLocalDate;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDate;
    with(temporalField: TemporalField, l: number): ChronoLocalDate;
    atTime(localTime: LocalTime): ChronoLocalDateTime;
    until(chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    getChronology(): Chronology;
    getEra(): Era;
    getChronology(): IsoChronology;
    getEra(): IsoEra;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    datesUntil(localDate: LocalDate): Stream;
    datesUntil(localDate: LocalDate, period: Period): Stream;
    getLong(temporalField: TemporalField): number;
    toEpochDay(): number;
    toEpochSecond(localTime: LocalTime, zoneOffset: ZoneOffset): number;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    from(temporalAccessor: TemporalAccessor): LocalDate;
    now(): LocalDate;
    now(clock: Clock): LocalDate;
    now(zoneId: ZoneId): LocalDate;
    of(i: number, i: number, i: number): LocalDate;
    of(i: number, month: Month, i: number): LocalDate;
    ofEpochDay(l: number): LocalDate;
    ofInstant(instant: Instant, zoneId: ZoneId): LocalDate;
    ofYearDay(i: number, i: number): LocalDate;
    parse(s: string): LocalDate;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): LocalDate;
    EPOCH: LocalDate;
    MAX: LocalDate;
    MIN: LocalDate;
}

// java.lang.Double
declare interface Double extends Number, Comparable {
    equals(object: any): boolean;
    isInfinite(): boolean;
    isNaN(): boolean;
    compareTo(double: Double): number;
    compareTo(object: any): number;
    hashCode(): number;
    toString(): string;
    isFinite(d: number): boolean;
    isInfinite(d: number): boolean;
    isNaN(d: number): boolean;
    max(d: number, d: number): number;
    min(d: number, d: number): number;
    parseDouble(s: string): number;
    sum(d: number, d: number): number;
    compare(d: number, d: number): number;
    hashCode(d: number): number;
    valueOf(d: number): Double;
    valueOf(s: string): Double;
    toHexString(d: number): string;
    toString(d: number): string;
    doubleToLongBits(d: number): number;
    longBitsToDouble(l: number): number;
    doubleToRawLongBits(d: number): number;
    MAX_VALUE: number;
    MIN_NORMAL: number;
    MIN_VALUE: number;
    NEGATIVE_INFINITY: number;
    NaN: number;
    POSITIVE_INFINITY: number;
    BYTES: number;
    MAX_EXPONENT: number;
    MIN_EXPONENT: number;
    SIZE: number;
    TYPE: Class;
}

// java.io.ObjectStreamField
declare interface ObjectStreamField extends Comparable {
    isPrimitive(): boolean;
    isUnshared(): boolean;
    getTypeCode(): string;
    compareTo(object: any): number;
    getOffset(): number;
    getType(): Class;
    getName(): string;
    getTypeString(): string;
}

// java.security.cert.Certificate
declare interface Certificate extends Serializable {
    getEncoded(): number[];
    getPublicKey(): PublicKey;
    verify(publicKey: PublicKey): void;
    verify(publicKey: PublicKey, s: string): void;
    getType(): string;
    verify(publicKey: PublicKey, provider: Provider): void;
}

// java.nio.channels.SeekableByteChannel
declare interface SeekableByteChannel extends ByteChannel {
    read(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    position(l: number): SeekableByteChannel;
    truncate(l: number): SeekableByteChannel;
    position(): number;
    size(): number;
}

// java.util.concurrent.Flow$Publisher
declare interface Publisher {
    subscribe(subscriber: Subscriber): void;
}

// org.yaml.snakeyaml.constructor.Construct
declare interface Construct {
    construct(node: Node): any;
    construct2ndStep(node: Node, object: any): void;
}

// java.net.SocketOption
declare interface SocketOption {
    type(): Class;
    name(): string;
}

// java.util.concurrent.ExecutorService
declare interface ExecutorService extends Executor {
    awaitTermination(l: number, timeUnit: TimeUnit): boolean;
    isShutdown(): boolean;
    isTerminated(): boolean;
    invokeAny(collection: Collection): any;
    invokeAny(collection: Collection, l: number, timeUnit: TimeUnit): any;
    invokeAll(collection: Collection): List;
    invokeAll(collection: Collection, l: number, timeUnit: TimeUnit): List;
    shutdownNow(): List;
    submit(runnable: Runnable): Future;
    submit(runnable: Runnable, object: any): Future;
    submit(callable: Callable): Future;
    shutdown(): void;
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

// java.awt.DisplayMode
declare interface DisplayMode {
    equals(displayMode: DisplayMode): boolean;
    getBitDepth(): number;
    getHeight(): number;
    getRefreshRate(): number;
    getWidth(): number;
    BIT_DEPTH_MULTI: number;
    REFRESH_RATE_UNKNOWN: number;
}

// java.time.zone.ZoneRules
declare interface ZoneRules extends Serializable {
    isDaylightSavings(instant: Instant): boolean;
    isFixedOffset(): boolean;
    isValidOffset(localDateTime: LocalDateTime, zoneOffset: ZoneOffset): boolean;
    getDaylightSavings(instant: Instant): Duration;
    getOffset(instant: Instant): ZoneOffset;
    getOffset(localDateTime: LocalDateTime): ZoneOffset;
    getStandardOffset(instant: Instant): ZoneOffset;
    getTransition(localDateTime: LocalDateTime): ZoneOffsetTransition;
    nextTransition(instant: Instant): ZoneOffsetTransition;
    previousTransition(instant: Instant): ZoneOffsetTransition;
    getTransitionRules(): List;
    getTransitions(): List;
    getValidOffsets(localDateTime: LocalDateTime): List;
    of(zoneOffset: ZoneOffset): ZoneRules;
    of(zoneOffset: ZoneOffset, zoneOffset: ZoneOffset, list: List, list: List, list: List): ZoneRules;
}

// net.md_5.bungee.api.chat.HoverEvent$Action
declare enum Action {
    SHOW_TEXT,
    SHOW_ITEM,
    SHOW_ENTITY,
    SHOW_ACHIEVEMENT,
}

// java.awt.font.LineMetrics
declare interface LineMetrics {
    getAscent(): number;
    getDescent(): number;
    getHeight(): number;
    getLeading(): number;
    getStrikethroughOffset(): number;
    getStrikethroughThickness(): number;
    getUnderlineOffset(): number;
    getUnderlineThickness(): number;
    getBaselineOffsets(): number[];
    getBaselineIndex(): number;
    getNumChars(): number;
}

// javax.security.auth.Subject
declare interface Subject extends Serializable {
    isReadOnly(): boolean;
    getPrincipals(): Set;
    getPrincipals(clazz: Class): Set;
    getPrivateCredentials(): Set;
    getPrivateCredentials(clazz: Class): Set;
    getPublicCredentials(): Set;
    getPublicCredentials(clazz: Class): Set;
    doAs(subject: Subject, privilegedAction: PrivilegedAction): any;
    doAs(subject: Subject, privilegedExceptionAction: PrivilegedExceptionAction): any;
    doAsPrivileged(subject: Subject, privilegedAction: PrivilegedAction, accessControlContext: AccessControlContext): any;
    doAsPrivileged(subject: Subject, privilegedExceptionAction: PrivilegedExceptionAction, accessControlContext: AccessControlContext): any;
    getSubject(accessControlContext: AccessControlContext): Subject;
    setReadOnly(): void;
}

// java.util.Hashtable
declare interface Hashtable extends Dictionary, Map, Cloneable, Serializable {
    containsValue(object: any): boolean;
    values(): Collection;
    entrySet(): Set;
    keySet(): Set;
    contains(object: any): boolean;
    containsKey(object: any): boolean;
    equals(object: any): boolean;
    remove(object: any, object: any): boolean;
    replace(object: any, object: any, object: any): boolean;
    hashCode(): number;
    clone(): any;
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    getOrDefault(object: any, object: any): any;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putIfAbsent(object: any, object: any): any;
    replace(object: any, object: any): any;
    toString(): string;
    clear(): void;
    forEach(biConsumer: BiConsumer): void;
    putAll(map: Map): void;
    replaceAll(biFunction: BiFunction): void;
}

// org.yaml.snakeyaml.nodes.NodeId
declare enum NodeId {
    scalar,
    sequence,
    mapping,
    anchor,
}

// java.time.LocalDateTime
declare interface LocalDateTime extends Temporal, TemporalAdjuster, ChronoLocalDateTime, Serializable {
    isAfter(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isBefore(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isEqual(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(chronoLocalDateTime: ChronoLocalDateTime): number;
    get(temporalField: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfYear(): number;
    getHour(): number;
    getMinute(): number;
    getMonthValue(): number;
    getNano(): number;
    getSecond(): number;
    getYear(): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    getDayOfWeek(): DayOfWeek;
    toLocalDate(): LocalDate;
    minus(temporalAmount: TemporalAmount): LocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): LocalDateTime;
    minusDays(l: number): LocalDateTime;
    minusHours(l: number): LocalDateTime;
    minusMinutes(l: number): LocalDateTime;
    minusMonths(l: number): LocalDateTime;
    minusNanos(l: number): LocalDateTime;
    minusSeconds(l: number): LocalDateTime;
    minusWeeks(l: number): LocalDateTime;
    minusYears(l: number): LocalDateTime;
    plus(temporalAmount: TemporalAmount): LocalDateTime;
    plus(l: number, temporalUnit: TemporalUnit): LocalDateTime;
    plusDays(l: number): LocalDateTime;
    plusHours(l: number): LocalDateTime;
    plusMinutes(l: number): LocalDateTime;
    plusMonths(l: number): LocalDateTime;
    plusNanos(l: number): LocalDateTime;
    plusSeconds(l: number): LocalDateTime;
    plusWeeks(l: number): LocalDateTime;
    plusYears(l: number): LocalDateTime;
    truncatedTo(temporalUnit: TemporalUnit): LocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): LocalDateTime;
    with(temporalField: TemporalField, l: number): LocalDateTime;
    withDayOfMonth(i: number): LocalDateTime;
    withDayOfYear(i: number): LocalDateTime;
    withHour(i: number): LocalDateTime;
    withMinute(i: number): LocalDateTime;
    withMonth(i: number): LocalDateTime;
    withNano(i: number): LocalDateTime;
    withSecond(i: number): LocalDateTime;
    withYear(i: number): LocalDateTime;
    toLocalTime(): LocalTime;
    getMonth(): Month;
    atOffset(zoneOffset: ZoneOffset): OffsetDateTime;
    atZone(zoneId: ZoneId): ZonedDateTime;
    toLocalDate(): ChronoLocalDate;
    minus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    plus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDateTime;
    with(temporalField: TemporalField, l: number): ChronoLocalDateTime;
    atZone(zoneId: ZoneId): ChronoZonedDateTime;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    from(temporalAccessor: TemporalAccessor): LocalDateTime;
    now(): LocalDateTime;
    now(clock: Clock): LocalDateTime;
    now(zoneId: ZoneId): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(localDate: LocalDate, localTime: LocalTime): LocalDateTime;
    ofEpochSecond(l: number, i: number, zoneOffset: ZoneOffset): LocalDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): LocalDateTime;
    parse(s: string): LocalDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): LocalDateTime;
    MAX: LocalDateTime;
    MIN: LocalDateTime;
}

// java.nio.channels.AsynchronousFileChannel
declare interface AsynchronousFileChannel extends AsynchronousChannel {
    truncate(l: number): AsynchronousFileChannel;
    tryLock(l: number, l: number, b: boolean): FileLock;
    lock(l: number, l: number, b: boolean): Future;
    read(byteBuffer: ByteBuffer, l: number): Future;
    write(byteBuffer: ByteBuffer, l: number): Future;
    size(): number;
    force(b: boolean): void;
    lock(l: number, l: number, b: boolean, object: any, completionHandler: CompletionHandler): void;
    read(byteBuffer: ByteBuffer, l: number, object: any, completionHandler: CompletionHandler): void;
    write(byteBuffer: ByteBuffer, l: number, object: any, completionHandler: CompletionHandler): void;
    tryLock(): FileLock;
    lock(): Future;
    lock(object: any, completionHandler: CompletionHandler): void;
    open(path: Path, openOption: OpenOption): AsynchronousFileChannel;
    open(path: Path, set: Set, executorService: ExecutorService, fileAttribute: FileAttribute): AsynchronousFileChannel;
}

// java.net.ServerSocket
declare interface ServerSocket extends Closeable {
    getReuseAddress(): boolean;
    isBound(): boolean;
    isClosed(): boolean;
    getLocalPort(): number;
    getOption(socketOption: SocketOption): any;
    getInetAddress(): InetAddress;
    setOption(socketOption: SocketOption, object: any): ServerSocket;
    accept(): Socket;
    getLocalSocketAddress(): SocketAddress;
    getChannel(): ServerSocketChannel;
    supportedOptions(): Set;
    setSocketFactory(socketImplFactory: SocketImplFactory): void;
    getReceiveBufferSize(): number;
    getSoTimeout(): number;
    setReceiveBufferSize(i: number): void;
    setSoTimeout(i: number): void;
    bind(socketAddress: SocketAddress): void;
    bind(socketAddress: SocketAddress, i: number): void;
    close(): void;
    setPerformancePreferences(i: number, i: number, i: number): void;
    setReuseAddress(b: boolean): void;
}

// java.awt.BufferCapabilities$FlipContents
declare interface FlipContents extends AttributeValue {
    BACKGROUND: FlipContents;
    COPIED: FlipContents;
    PRIOR: FlipContents;
    UNDEFINED: FlipContents;
}

// java.awt.image.renderable.RenderContext
declare interface RenderContext extends Cloneable {
    getRenderingHints(): RenderingHints;
    getAreaOfInterest(): Shape;
    getTransform(): AffineTransform;
    concatenateTransform(affineTransform: AffineTransform): void;
    concetenateTransform(affineTransform: AffineTransform): void;
    preConcatenateTransform(affineTransform: AffineTransform): void;
    preConcetenateTransform(affineTransform: AffineTransform): void;
    setAreaOfInterest(shape: Shape): void;
    setRenderingHints(renderingHints: RenderingHints): void;
    setTransform(affineTransform: AffineTransform): void;
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

// java.awt.CompositeContext
declare interface CompositeContext {
    compose(raster: Raster, raster: Raster, writableRaster: WritableRaster): void;
    dispose(): void;
}

// java.awt.geom.Dimension2D
declare interface Dimension2D extends Cloneable {
    getHeight(): number;
    getWidth(): number;
    setSize(d: number, d: number): void;
    setSize(dimension2D: Dimension2D): void;
}

// java.nio.file.FileStore
declare interface FileStore {
    isReadOnly(): boolean;
    supportsFileAttributeView(clazz: Class): boolean;
    supportsFileAttributeView(s: string): boolean;
    getAttribute(s: string): any;
    name(): string;
    type(): string;
    getFileStoreAttributeView(clazz: Class): FileStoreAttributeView;
    getTotalSpace(): number;
    getUnallocatedSpace(): number;
    getUsableSpace(): number;
    getBlockSize(): number;
}

// java.time.chrono.ChronoZonedDateTime
declare interface ChronoZonedDateTime extends Temporal, Comparable {
    equals(object: any): boolean;
    isSupported(temporalField: TemporalField): boolean;
    hashCode(): number;
    toString(): string;
    getZone(): ZoneId;
    getOffset(): ZoneOffset;
    toLocalDateTime(): ChronoLocalDateTime;
    plus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    with(temporalField: TemporalField, l: number): ChronoZonedDateTime;
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime;
    withLaterOffsetAtOverlap(): ChronoZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ChronoZonedDateTime;
    isAfter(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isBefore(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isEqual(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(chronoZonedDateTime: ChronoZonedDateTime): number;
    get(temporalField: TemporalField): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    toInstant(): Instant;
    toLocalTime(): LocalTime;
    toLocalDate(): ChronoLocalDate;
    minus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    plus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): ChronoZonedDateTime;
    getChronology(): Chronology;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
    toEpochSecond(): number;
    from(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    timeLineOrder(): Comparator;
}

// java.lang.reflect.Parameter
declare interface Parameter extends AnnotatedElement {
    isImplicit(): boolean;
    isNamePresent(): boolean;
    isSynthetic(): boolean;
    isVarArgs(): boolean;
    getModifiers(): number;
    getType(): Class;
    getName(): string;
    getAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getAnnotatedType(): AnnotatedType;
    getDeclaringExecutable(): Executable;
    getParameterizedType(): Type;
}

// java.time.format.DateTimeFormatter
declare interface DateTimeFormatter {
    parse(s: string, temporalQuery: TemporalQuery): any;
    format(temporalAccessor: TemporalAccessor): string;
    toFormat(): Format;
    toFormat(temporalQuery: TemporalQuery): Format;
    getZone(): ZoneId;
    getChronology(): Chronology;
    localizedBy(locale: Locale): DateTimeFormatter;
    withChronology(chronology: Chronology): DateTimeFormatter;
    withDecimalStyle(decimalStyle: DecimalStyle): DateTimeFormatter;
    withLocale(locale: Locale): DateTimeFormatter;
    withResolverFields(temporalField: TemporalField): DateTimeFormatter;
    withResolverFields(set: Set): DateTimeFormatter;
    withResolverStyle(resolverStyle: ResolverStyle): DateTimeFormatter;
    withZone(zoneId: ZoneId): DateTimeFormatter;
    getDecimalStyle(): DecimalStyle;
    getResolverStyle(): ResolverStyle;
    parse(s: string): TemporalAccessor;
    parse(s: string, parsePosition: ParsePosition): TemporalAccessor;
    parseBest(s: string, temporalQuery: TemporalQuery): TemporalAccessor;
    parseUnresolved(s: string, parsePosition: ParsePosition): TemporalAccessor;
    getLocale(): Locale;
    getResolverFields(): Set;
    parsedExcessDays(): TemporalQuery;
    parsedLeapSecond(): TemporalQuery;
    ofLocalizedDate(formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedDateTime(formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedDateTime(formatStyle: FormatStyle, formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedTime(formatStyle: FormatStyle): DateTimeFormatter;
    ofPattern(s: string): DateTimeFormatter;
    ofPattern(s: string, locale: Locale): DateTimeFormatter;
    formatTo(temporalAccessor: TemporalAccessor, appendable: Appendable): void;
    BASIC_ISO_DATE: DateTimeFormatter;
    ISO_DATE: DateTimeFormatter;
    ISO_DATE_TIME: DateTimeFormatter;
    ISO_INSTANT: DateTimeFormatter;
    ISO_LOCAL_DATE: DateTimeFormatter;
    ISO_LOCAL_DATE_TIME: DateTimeFormatter;
    ISO_LOCAL_TIME: DateTimeFormatter;
    ISO_OFFSET_DATE: DateTimeFormatter;
    ISO_OFFSET_DATE_TIME: DateTimeFormatter;
    ISO_OFFSET_TIME: DateTimeFormatter;
    ISO_ORDINAL_DATE: DateTimeFormatter;
    ISO_TIME: DateTimeFormatter;
    ISO_WEEK_DATE: DateTimeFormatter;
    ISO_ZONED_DATE_TIME: DateTimeFormatter;
    RFC_1123_DATE_TIME: DateTimeFormatter;
}

// java.text.AttributedCharacterIterator$Attribute
declare interface Attribute extends Serializable {
    INPUT_METHOD_SEGMENT: Attribute;
    LANGUAGE: Attribute;
    READING: Attribute;
}

// net.md_5.bungee.api.chat.hover.content.Content
declare interface Content {
    requiredAction(): Action;
    assertAction(action: Action): void;
}

// java.util.PrimitiveIterator
declare interface PrimitiveIterator extends Iterator {
    forEachRemaining(object: any): void;
}

// java.time.LocalTime
declare interface LocalTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    isAfter(localTime: LocalTime): boolean;
    isBefore(localTime: LocalTime): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(localTime: LocalTime): number;
    get(temporalField: TemporalField): number;
    getHour(): number;
    getMinute(): number;
    getNano(): number;
    getSecond(): number;
    toSecondOfDay(): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    atDate(localDate: LocalDate): LocalDateTime;
    minus(temporalAmount: TemporalAmount): LocalTime;
    minus(l: number, temporalUnit: TemporalUnit): LocalTime;
    minusHours(l: number): LocalTime;
    minusMinutes(l: number): LocalTime;
    minusNanos(l: number): LocalTime;
    minusSeconds(l: number): LocalTime;
    plus(temporalAmount: TemporalAmount): LocalTime;
    plus(l: number, temporalUnit: TemporalUnit): LocalTime;
    plusHours(l: number): LocalTime;
    plusMinutes(l: number): LocalTime;
    plusNanos(l: number): LocalTime;
    plusSeconds(l: number): LocalTime;
    truncatedTo(temporalUnit: TemporalUnit): LocalTime;
    with(temporalAdjuster: TemporalAdjuster): LocalTime;
    with(temporalField: TemporalField, l: number): LocalTime;
    withHour(i: number): LocalTime;
    withMinute(i: number): LocalTime;
    withNano(i: number): LocalTime;
    withSecond(i: number): LocalTime;
    atOffset(zoneOffset: ZoneOffset): OffsetTime;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
    toEpochSecond(localDate: LocalDate, zoneOffset: ZoneOffset): number;
    toNanoOfDay(): number;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    from(temporalAccessor: TemporalAccessor): LocalTime;
    now(): LocalTime;
    now(clock: Clock): LocalTime;
    now(zoneId: ZoneId): LocalTime;
    of(i: number, i: number): LocalTime;
    of(i: number, i: number, i: number): LocalTime;
    of(i: number, i: number, i: number, i: number): LocalTime;
    ofInstant(instant: Instant, zoneId: ZoneId): LocalTime;
    ofNanoOfDay(l: number): LocalTime;
    ofSecondOfDay(l: number): LocalTime;
    parse(s: string): LocalTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): LocalTime;
    MAX: LocalTime;
    MIDNIGHT: LocalTime;
    MIN: LocalTime;
    NOON: LocalTime;
}

// java.time.chrono.ChronoLocalDate
declare interface ChronoLocalDate extends Temporal, TemporalAdjuster, Comparable {
    equals(object: any): boolean;
    hashCode(): number;
    lengthOfMonth(): number;
    toString(): string;
    until(chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    getChronology(): Chronology;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    isAfter(chronoLocalDate: ChronoLocalDate): boolean;
    isBefore(chronoLocalDate: ChronoLocalDate): boolean;
    isEqual(chronoLocalDate: ChronoLocalDate): boolean;
    isLeapYear(): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(chronoLocalDate: ChronoLocalDate): number;
    lengthOfYear(): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    minus(temporalAmount: TemporalAmount): ChronoLocalDate;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    plus(temporalAmount: TemporalAmount): ChronoLocalDate;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDate;
    with(temporalField: TemporalField, l: number): ChronoLocalDate;
    atTime(localTime: LocalTime): ChronoLocalDateTime;
    getEra(): Era;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    toEpochDay(): number;
    from(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    timeLineOrder(): Comparator;
}

// java.nio.file.attribute.FileAttribute
declare interface FileAttribute {
    value(): any;
    name(): string;
}

// java.lang.module.Configuration
declare interface Configuration {
    resolve(moduleFinder: ModuleFinder, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    resolveAndBind(moduleFinder: ModuleFinder, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    parents(): List;
    findModule(s: string): Optional;
    modules(): Set;
    empty(): Configuration;
    resolve(moduleFinder: ModuleFinder, list: List, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    resolveAndBind(moduleFinder: ModuleFinder, list: List, moduleFinder: ModuleFinder, collection: Collection): Configuration;
}

// java.nio.file.attribute.GroupPrincipal
declare interface GroupPrincipal extends UserPrincipal {
}

// javax.security.cert.X509Certificate
declare interface X509Certificate extends Certificate {
    getSigAlgParams(): number[];
    getVersion(): number;
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSerialNumber(): BigInteger;
    getIssuerDN(): Principal;
    getSubjectDN(): Principal;
    getNotAfter(): Date;
    getNotBefore(): Date;
    checkValidity(): void;
    checkValidity(date: Date): void;
    getInstance(b: number): X509Certificate;
    getInstance(inputStream: InputStream): X509Certificate;
}

// java.lang.ModuleLayer$Controller
declare interface Controller {
    layer(): ModuleLayer;
    addExports(module: Module, s: string, module: Module): Controller;
    addOpens(module: Module, s: string, module: Module): Controller;
    addReads(module: Module, module: Module): Controller;
}

// java.text.CharacterIterator
declare interface CharacterIterator extends Cloneable {
    current(): string;
    first(): string;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(i: number): string;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    clone(): any;
    DONE: string;
}

// java.lang.Long
declare interface Long extends Number, Comparable {
    equals(object: any): boolean;
    compareTo(long: Long): number;
    compareTo(object: any): number;
    hashCode(): number;
    toString(): string;
    bitCount(l: number): number;
    compare(l: number, l: number): number;
    compareUnsigned(l: number, l: number): number;
    hashCode(l: number): number;
    numberOfLeadingZeros(l: number): number;
    numberOfTrailingZeros(l: number): number;
    signum(l: number): number;
    decode(s: string): Long;
    getLong(s: string): Long;
    getLong(s: string, long: Long): Long;
    getLong(s: string, l: number): Long;
    valueOf(s: string): Long;
    valueOf(s: string, i: number): Long;
    valueOf(l: number): Long;
    toBinaryString(l: number): string;
    toHexString(l: number): string;
    toOctalString(l: number): string;
    toString(l: number): string;
    toString(l: number, i: number): string;
    toUnsignedString(l: number): string;
    toUnsignedString(l: number, i: number): string;
    divideUnsigned(l: number, l: number): number;
    highestOneBit(l: number): number;
    lowestOneBit(l: number): number;
    max(l: number, l: number): number;
    min(l: number, l: number): number;
    parseLong(s: string, i: number, i: number, i: number): number;
    parseLong(s: string): number;
    parseLong(s: string, i: number): number;
    parseUnsignedLong(s: string, i: number, i: number, i: number): number;
    parseUnsignedLong(s: string): number;
    parseUnsignedLong(s: string, i: number): number;
    remainderUnsigned(l: number, l: number): number;
    reverse(l: number): number;
    reverseBytes(l: number): number;
    rotateLeft(l: number, i: number): number;
    rotateRight(l: number, i: number): number;
    sum(l: number, l: number): number;
    BYTES: number;
    SIZE: number;
    TYPE: Class;
    MAX_VALUE: number;
    MIN_VALUE: number;
}

// java.time.OffsetTime
declare interface OffsetTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    isAfter(offsetTime: OffsetTime): boolean;
    isBefore(offsetTime: OffsetTime): boolean;
    isEqual(offsetTime: OffsetTime): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(offsetTime: OffsetTime): number;
    get(temporalField: TemporalField): number;
    getHour(): number;
    getMinute(): number;
    getNano(): number;
    getSecond(): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    toLocalTime(): LocalTime;
    atDate(localDate: LocalDate): OffsetDateTime;
    minus(temporalAmount: TemporalAmount): OffsetTime;
    minus(l: number, temporalUnit: TemporalUnit): OffsetTime;
    minusHours(l: number): OffsetTime;
    minusMinutes(l: number): OffsetTime;
    minusNanos(l: number): OffsetTime;
    minusSeconds(l: number): OffsetTime;
    plus(temporalAmount: TemporalAmount): OffsetTime;
    plus(l: number, temporalUnit: TemporalUnit): OffsetTime;
    plusHours(l: number): OffsetTime;
    plusMinutes(l: number): OffsetTime;
    plusNanos(l: number): OffsetTime;
    plusSeconds(l: number): OffsetTime;
    truncatedTo(temporalUnit: TemporalUnit): OffsetTime;
    with(temporalAdjuster: TemporalAdjuster): OffsetTime;
    with(temporalField: TemporalField, l: number): OffsetTime;
    withHour(i: number): OffsetTime;
    withMinute(i: number): OffsetTime;
    withNano(i: number): OffsetTime;
    withOffsetSameInstant(zoneOffset: ZoneOffset): OffsetTime;
    withOffsetSameLocal(zoneOffset: ZoneOffset): OffsetTime;
    withSecond(i: number): OffsetTime;
    getOffset(): ZoneOffset;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
    toEpochSecond(localDate: LocalDate): number;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    from(temporalAccessor: TemporalAccessor): OffsetTime;
    now(): OffsetTime;
    now(clock: Clock): OffsetTime;
    now(zoneId: ZoneId): OffsetTime;
    of(i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): OffsetTime;
    of(localTime: LocalTime, zoneOffset: ZoneOffset): OffsetTime;
    ofInstant(instant: Instant, zoneId: ZoneId): OffsetTime;
    parse(s: string): OffsetTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): OffsetTime;
    MAX: OffsetTime;
    MIN: OffsetTime;
}

// java.awt.font.GlyphMetrics
declare interface GlyphMetrics {
    isCombining(): boolean;
    isComponent(): boolean;
    isLigature(): boolean;
    isStandard(): boolean;
    isWhitespace(): boolean;
    getAdvance(): number;
    getAdvanceX(): number;
    getAdvanceY(): number;
    getLSB(): number;
    getRSB(): number;
    getType(): number;
    getBounds2D(): Rectangle2D;
    COMBINING: number;
    COMPONENT: number;
    LIGATURE: number;
    STANDARD: number;
    WHITESPACE: number;
}

// java.nio.file.attribute.BasicFileAttributes
declare interface BasicFileAttributes {
    isDirectory(): boolean;
    isOther(): boolean;
    isRegularFile(): boolean;
    isSymbolicLink(): boolean;
    fileKey(): any;
    creationTime(): FileTime;
    lastAccessTime(): FileTime;
    lastModifiedTime(): FileTime;
    size(): number;
}

// java.nio.file.CopyOption
declare interface CopyOption {
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

// java.security.BasicPermission
declare interface BasicPermission extends Permission, Serializable {
}

// java.nio.channels.FileChannel
declare interface FileChannel extends AbstractInterruptibleChannel, SeekableByteChannel, GatheringByteChannel, ScatteringByteChannel {
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, l: number): number;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, l: number): number;
    map(mapMode: MapMode, l: number, l: number): MappedByteBuffer;
    position(l: number): FileChannel;
    truncate(l: number): FileChannel;
    lock(l: number, l: number, b: boolean): FileLock;
    tryLock(l: number, l: number, b: boolean): FileLock;
    position(): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    size(): number;
    transferFrom(readableByteChannel: ReadableByteChannel, l: number, l: number): number;
    transferTo(l: number, l: number, writableByteChannel: WritableByteChannel): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
    force(b: boolean): void;
    lock(): FileLock;
    tryLock(): FileLock;
    read(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    position(l: number): SeekableByteChannel;
    truncate(l: number): SeekableByteChannel;
    open(path: Path, openOption: OpenOption): FileChannel;
    open(path: Path, set: Set, fileAttribute: FileAttribute): FileChannel;
}

// java.awt.Window
declare interface Window extends Container, Accessible {
    getFocusableWindowState(): boolean;
    isActive(): boolean;
    isAlwaysOnTopSupported(): boolean;
    isAutoRequestFocus(): boolean;
    isFocused(): boolean;
    isLocationByPlatform(): boolean;
    isOpaque(): boolean;
    isShowing(): boolean;
    postEvent(event: Event): boolean;
    isAlwaysOnTop(): boolean;
    isFocusableWindow(): boolean;
    getFocusCycleRootAncestor(): Container;
    getWarningString(): string;
    setAlwaysOnTop(b: boolean): void;
    getOpacity(): number;
    getBackground(): Color;
    getFocusOwner(): Component;
    getMostRecentFocusOwner(): Component;
    getModalExclusionType(): ModalExclusionType;
    getShape(): Shape;
    getToolkit(): Toolkit;
    getOwner(): Window;
    getType(): Type;
    getOwnedWindows(): Window[];
    getInputContext(): InputContext;
    getBufferStrategy(): BufferStrategy;
    getIconImages(): List;
    getLocale(): Locale;
    getAccessibleContext(): AccessibleContext;
    getOwnerlessWindows(): Window[];
    getWindows(): Window[];
    getWindowFocusListeners(): WindowFocusListener[];
    getWindowListeners(): WindowListener[];
    getWindowStateListeners(): WindowStateListener[];
    addWindowFocusListener(windowFocusListener: WindowFocusListener): void;
    addWindowListener(windowListener: WindowListener): void;
    addWindowStateListener(windowStateListener: WindowStateListener): void;
    removeWindowFocusListener(windowFocusListener: WindowFocusListener): void;
    removeWindowListener(windowListener: WindowListener): void;
    removeWindowStateListener(windowStateListener: WindowStateListener): void;
    setIconImages(list: List): void;
    applyResourceBundle(s: string): void;
    applyResourceBundle(resourceBundle: ResourceBundle): void;
    createBufferStrategy(i: number): void;
    createBufferStrategy(i: number, bufferCapabilities: BufferCapabilities): void;
    dispose(): void;
    hide(): void;
    pack(): void;
    reshape(i: number, i: number, i: number, i: number): void;
    setAutoRequestFocus(b: boolean): void;
    setBackground(color: Color): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setBounds(rectangle: Rectangle): void;
    setCursor(cursor: Cursor): void;
    setFocusableWindowState(b: boolean): void;
    setIconImage(image: Image): void;
    setLocation(i: number, i: number): void;
    setLocation(point: Point): void;
    setLocationByPlatform(b: boolean): void;
    setLocationRelativeTo(component: Component): void;
    setMinimumSize(dimension: Dimension): void;
    setModalExclusionType(modalExclusionType: ModalExclusionType): void;
    setOpacity(f: number): void;
    setShape(shape: Shape): void;
    setSize(i: number, i: number): void;
    setSize(dimension: Dimension): void;
    setType(type: Type): void;
    setVisible(b: boolean): void;
    show(): void;
    toBack(): void;
    toFront(): void;
}

// java.util.Spliterator$OfPrimitive
declare interface OfPrimitive extends Spliterator {
    tryAdvance(object: any): boolean;
    trySplit(): OfPrimitive;
    trySplit(): Spliterator;
    forEachRemaining(object: any): void;
}

// java.nio.channels.SocketChannel
declare interface SocketChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, NetworkChannel {
    connect(socketAddress: SocketAddress): boolean;
    finishConnect(): boolean;
    isConnected(): boolean;
    isConnectionPending(): boolean;
    read(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    socket(): Socket;
    getLocalAddress(): SocketAddress;
    getRemoteAddress(): SocketAddress;
    bind(socketAddress: SocketAddress): SocketChannel;
    setOption(socketOption: SocketOption, object: any): SocketChannel;
    shutdownInput(): SocketChannel;
    shutdownOutput(): SocketChannel;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
    validOps(): number;
    read(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    bind(socketAddress: SocketAddress): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    open(): SocketChannel;
    open(socketAddress: SocketAddress): SocketChannel;
}

// java.time.format.ResolverStyle
declare enum ResolverStyle {
    STRICT,
    SMART,
    LENIENT,
}

// java.net.SocketImplFactory
declare interface SocketImplFactory {
    createSocketImpl(): SocketImpl;
}

// java.time.chrono.ChronoLocalDateTime
declare interface ChronoLocalDateTime extends Temporal, TemporalAdjuster, Comparable {
    equals(object: any): boolean;
    isSupported(temporalField: TemporalField): boolean;
    hashCode(): number;
    toString(): string;
    toLocalTime(): LocalTime;
    toLocalDate(): ChronoLocalDate;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    with(temporalField: TemporalField, l: number): ChronoLocalDateTime;
    atZone(zoneId: ZoneId): ChronoZonedDateTime;
    isAfter(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isBefore(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isEqual(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    compareTo(object: any): number;
    compareTo(chronoLocalDateTime: ChronoLocalDateTime): number;
    query(temporalQuery: TemporalQuery): any;
    format(dateTimeFormatter: DateTimeFormatter): string;
    toInstant(zoneOffset: ZoneOffset): Instant;
    minus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    plus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDateTime;
    getChronology(): Chronology;
    adjustInto(temporal: Temporal): Temporal;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
    toEpochSecond(zoneOffset: ZoneOffset): number;
    from(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    timeLineOrder(): Comparator;
}

// java.nio.file.DirectoryStream
declare interface DirectoryStream extends Closeable, Iterable {
    iterator(): Iterator;
}

// java.lang.module.ModuleDescriptor$Exports
declare interface Exports extends Comparable {
    isQualified(): boolean;
    compareTo(object: any): number;
    compareTo(exports: Exports): number;
    source(): string;
    modifiers(): Set;
    targets(): Set;
}

// java.lang.module.ModuleDescriptor$Provides
declare interface Provides extends Comparable {
    compareTo(object: any): number;
    compareTo(provides: Provides): number;
    service(): string;
    providers(): List;
}

// java.nio.channels.ByteChannel
declare interface ByteChannel extends ReadableByteChannel, WritableByteChannel {
}

// java.nio.file.attribute.FileStoreAttributeView
declare interface FileStoreAttributeView extends AttributeView {
}

// java.awt.Component
declare interface Component extends ImageObserver, MenuContainer, Serializable {
    action(event: Event, object: any): boolean;
    areFocusTraversalKeysSet(i: number): boolean;
    contains(i: number, i: number): boolean;
    contains(point: Point): boolean;
    getFocusTraversalKeysEnabled(): boolean;
    getIgnoreRepaint(): boolean;
    gotFocus(event: Event, object: any): boolean;
    handleEvent(event: Event): boolean;
    hasFocus(): boolean;
    imageUpdate(image: Image, i: number, i: number, i: number, i: number, i: number): boolean;
    inside(i: number, i: number): boolean;
    isBackgroundSet(): boolean;
    isCursorSet(): boolean;
    isDisplayable(): boolean;
    isDoubleBuffered(): boolean;
    isEnabled(): boolean;
    isFocusCycleRoot(container: Container): boolean;
    isFocusOwner(): boolean;
    isFocusTraversable(): boolean;
    isFocusable(): boolean;
    isFontSet(): boolean;
    isForegroundSet(): boolean;
    isLightweight(): boolean;
    isMaximumSizeSet(): boolean;
    isMinimumSizeSet(): boolean;
    isOpaque(): boolean;
    isPreferredSizeSet(): boolean;
    isShowing(): boolean;
    isValid(): boolean;
    isVisible(): boolean;
    keyDown(event: Event, i: number): boolean;
    keyUp(event: Event, i: number): boolean;
    lostFocus(event: Event, object: any): boolean;
    mouseDown(event: Event, i: number, i: number): boolean;
    mouseDrag(event: Event, i: number, i: number): boolean;
    mouseEnter(event: Event, i: number, i: number): boolean;
    mouseExit(event: Event, i: number, i: number): boolean;
    mouseMove(event: Event, i: number, i: number): boolean;
    mouseUp(event: Event, i: number, i: number): boolean;
    postEvent(event: Event): boolean;
    prepareImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    prepareImage(image: Image, imageObserver: ImageObserver): boolean;
    requestFocusInWindow(): boolean;
    requestFocusInWindow(cause: Cause): boolean;
    getTreeLock(): any;
    dispatchEvent(aWTEvent: AWTEvent): void;
    getAlignmentX(): number;
    getAlignmentY(): number;
    checkImage(image: Image, i: number, i: number, imageObserver: ImageObserver): number;
    checkImage(image: Image, imageObserver: ImageObserver): number;
    getBaseline(i: number, i: number): number;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    getBackground(): Color;
    getForeground(): Color;
    getComponentAt(i: number, i: number): Component;
    getComponentAt(point: Point): Component;
    locate(i: number, i: number): Component;
    getBaselineResizeBehavior(): BaselineResizeBehavior;
    getComponentOrientation(): ComponentOrientation;
    getFocusCycleRootAncestor(): Container;
    getParent(): Container;
    getCursor(): Cursor;
    getMaximumSize(): Dimension;
    getMinimumSize(): Dimension;
    getPreferredSize(): Dimension;
    getSize(): Dimension;
    getSize(dimension: Dimension): Dimension;
    minimumSize(): Dimension;
    preferredSize(): Dimension;
    size(): Dimension;
    getFont(): Font;
    getFontMetrics(font: Font): FontMetrics;
    getGraphics(): Graphics;
    getGraphicsConfiguration(): GraphicsConfiguration;
    createImage(i: number, i: number): Image;
    createImage(imageProducer: ImageProducer): Image;
    getLocation(): Point;
    getLocation(point: Point): Point;
    getLocationOnScreen(): Point;
    getMousePosition(): Point;
    location(): Point;
    bounds(): Rectangle;
    getBounds(): Rectangle;
    getBounds(rectangle: Rectangle): Rectangle;
    getToolkit(): Toolkit;
    getInputContext(): InputContext;
    getInputMethodRequests(): InputMethodRequests;
    getColorModel(): ColorModel;
    createVolatileImage(i: number, i: number): VolatileImage;
    createVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities): VolatileImage;
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(s: string): PropertyChangeListener[];
    getName(): string;
    getListeners(clazz: Class): EventListener[];
    getLocale(): Locale;
    getFocusTraversalKeys(i: number): Set;
    getAccessibleContext(): AccessibleContext;
    getDropTarget(): DropTarget;
    getComponentListeners(): ComponentListener[];
    getFocusListeners(): FocusListener[];
    getHierarchyBoundsListeners(): HierarchyBoundsListener[];
    getHierarchyListeners(): HierarchyListener[];
    getInputMethodListeners(): InputMethodListener[];
    getKeyListeners(): KeyListener[];
    getMouseListeners(): MouseListener[];
    getMouseMotionListeners(): MouseMotionListener[];
    getMouseWheelListeners(): MouseWheelListener[];
    addComponentListener(componentListener: ComponentListener): void;
    addFocusListener(focusListener: FocusListener): void;
    addInputMethodListener(inputMethodListener: InputMethodListener): void;
    addKeyListener(keyListener: KeyListener): void;
    addMouseListener(mouseListener: MouseListener): void;
    addMouseMotionListener(mouseMotionListener: MouseMotionListener): void;
    addMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
    removeComponentListener(componentListener: ComponentListener): void;
    removeFocusListener(focusListener: FocusListener): void;
    removeInputMethodListener(inputMethodListener: InputMethodListener): void;
    removeKeyListener(keyListener: KeyListener): void;
    removeMouseListener(mouseListener: MouseListener): void;
    removeMouseMotionListener(mouseMotionListener: MouseMotionListener): void;
    removeMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
    setDropTarget(dropTarget: DropTarget): void;
    add(popupMenu: PopupMenu): void;
    addHierarchyBoundsListener(hierarchyBoundsListener: HierarchyBoundsListener): void;
    addHierarchyListener(hierarchyListener: HierarchyListener): void;
    addNotify(): void;
    addPropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    addPropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    applyComponentOrientation(componentOrientation: ComponentOrientation): void;
    deliverEvent(event: Event): void;
    disable(): void;
    doLayout(): void;
    enable(): void;
    enable(b: boolean): void;
    enableInputMethods(b: boolean): void;
    firePropertyChange(s: string, b: number, b: number): void;
    firePropertyChange(s: string, c: string, c: string): void;
    firePropertyChange(s: string, d: number, d: number): void;
    firePropertyChange(s: string, f: number, f: number): void;
    firePropertyChange(s: string, l: number, l: number): void;
    firePropertyChange(s: string, s: number, s: number): void;
    hide(): void;
    invalidate(): void;
    layout(): void;
    list(): void;
    list(printStream: PrintStream): void;
    list(printStream: PrintStream, i: number): void;
    list(printWriter: PrintWriter): void;
    list(printWriter: PrintWriter, i: number): void;
    move(i: number, i: number): void;
    nextFocus(): void;
    paint(graphics: Graphics): void;
    paintAll(graphics: Graphics): void;
    print(graphics: Graphics): void;
    printAll(graphics: Graphics): void;
    remove(menuComponent: MenuComponent): void;
    removeHierarchyBoundsListener(hierarchyBoundsListener: HierarchyBoundsListener): void;
    removeHierarchyListener(hierarchyListener: HierarchyListener): void;
    removeNotify(): void;
    removePropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    removePropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    repaint(): void;
    repaint(i: number, i: number, i: number, i: number): void;
    repaint(l: number): void;
    repaint(l: number, i: number, i: number, i: number, i: number): void;
    requestFocus(): void;
    requestFocus(cause: Cause): void;
    reshape(i: number, i: number, i: number, i: number): void;
    resize(i: number, i: number): void;
    resize(dimension: Dimension): void;
    revalidate(): void;
    setBackground(color: Color): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setBounds(rectangle: Rectangle): void;
    setComponentOrientation(componentOrientation: ComponentOrientation): void;
    setCursor(cursor: Cursor): void;
    setEnabled(b: boolean): void;
    setFocusTraversalKeys(i: number, set: Set): void;
    setFocusTraversalKeysEnabled(b: boolean): void;
    setFocusable(b: boolean): void;
    setFont(font: Font): void;
    setForeground(color: Color): void;
    setIgnoreRepaint(b: boolean): void;
    setLocale(locale: Locale): void;
    setLocation(i: number, i: number): void;
    setLocation(point: Point): void;
    setMaximumSize(dimension: Dimension): void;
    setMinimumSize(dimension: Dimension): void;
    setMixingCutoutShape(shape: Shape): void;
    setName(s: string): void;
    setPreferredSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    setSize(dimension: Dimension): void;
    setVisible(b: boolean): void;
    show(): void;
    show(b: boolean): void;
    transferFocus(): void;
    transferFocusBackward(): void;
    transferFocusUpCycle(): void;
    update(graphics: Graphics): void;
    validate(): void;
    BOTTOM_ALIGNMENT: number;
    CENTER_ALIGNMENT: number;
    LEFT_ALIGNMENT: number;
    RIGHT_ALIGNMENT: number;
    TOP_ALIGNMENT: number;
}

// java.nio.file.attribute.FileTime
declare interface FileTime extends Comparable {
    compareTo(object: any): number;
    compareTo(fileTime: FileTime): number;
    toInstant(): Instant;
    to(timeUnit: TimeUnit): number;
    toMillis(): number;
    from(instant: Instant): FileTime;
    from(l: number, timeUnit: TimeUnit): FileTime;
    fromMillis(l: number): FileTime;
}

// java.time.Period
declare interface Period extends ChronoPeriod, Serializable {
    isNegative(): boolean;
    isZero(): boolean;
    getDays(): number;
    getMonths(): number;
    getYears(): number;
    minus(temporalAmount: TemporalAmount): Period;
    minusDays(l: number): Period;
    minusMonths(l: number): Period;
    minusYears(l: number): Period;
    multipliedBy(i: number): Period;
    negated(): Period;
    normalized(): Period;
    plus(temporalAmount: TemporalAmount): Period;
    plusDays(l: number): Period;
    plusMonths(l: number): Period;
    plusYears(l: number): Period;
    withDays(i: number): Period;
    withMonths(i: number): Period;
    withYears(i: number): Period;
    minus(temporalAmount: TemporalAmount): ChronoPeriod;
    multipliedBy(i: number): ChronoPeriod;
    negated(): ChronoPeriod;
    normalized(): ChronoPeriod;
    plus(temporalAmount: TemporalAmount): ChronoPeriod;
    getChronology(): Chronology;
    getChronology(): IsoChronology;
    addTo(temporal: Temporal): Temporal;
    subtractFrom(temporal: Temporal): Temporal;
    getUnits(): List;
    get(temporalUnit: TemporalUnit): number;
    toTotalMonths(): number;
    between(localDate: LocalDate, localDate: LocalDate): Period;
    from(temporalAmount: TemporalAmount): Period;
    of(i: number, i: number, i: number): Period;
    ofDays(i: number): Period;
    ofMonths(i: number): Period;
    ofWeeks(i: number): Period;
    ofYears(i: number): Period;
    parse(s: string): Period;
    ZERO: Period;
}

// java.nio.channels.spi.AbstractInterruptibleChannel
declare interface AbstractInterruptibleChannel extends Channel, InterruptibleChannel {
    isOpen(): boolean;
    close(): void;
}

// java.nio.channels.WritableByteChannel
declare interface WritableByteChannel extends Channel {
    write(byteBuffer: ByteBuffer): number;
}

// java.nio.MappedByteBuffer
declare interface MappedByteBuffer extends ByteBuffer {
    isLoaded(): boolean;
    force(): MappedByteBuffer;
    load(): MappedByteBuffer;
}

// java.nio.channels.ServerSocketChannel
declare interface ServerSocketChannel extends AbstractSelectableChannel, NetworkChannel {
    socket(): ServerSocket;
    getLocalAddress(): SocketAddress;
    bind(socketAddress: SocketAddress, i: number): ServerSocketChannel;
    setOption(socketOption: SocketOption, object: any): ServerSocketChannel;
    accept(): SocketChannel;
    validOps(): number;
    bind(socketAddress: SocketAddress): ServerSocketChannel;
    bind(socketAddress: SocketAddress): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    open(): ServerSocketChannel;
}

// java.awt.Event
declare interface Event extends Serializable {
    controlDown(): boolean;
    metaDown(): boolean;
    shiftDown(): boolean;
    translate(i: number, i: number): void;
    clickCount: number;
    id: number;
    key: number;
    modifiers: number;
    x: number;
    y: number;
    evt: Event;
    arg: any;
    target: any;
    when: number;
    ACTION_EVENT: number;
    ALT_MASK: number;
    BACK_SPACE: number;
    CAPS_LOCK: number;
    CTRL_MASK: number;
    DELETE: number;
    DOWN: number;
    END: number;
    ENTER: number;
    ESCAPE: number;
    F1: number;
    F10: number;
    F11: number;
    F12: number;
    F2: number;
    F3: number;
    F4: number;
    F5: number;
    F6: number;
    F7: number;
    F8: number;
    F9: number;
    GOT_FOCUS: number;
    HOME: number;
    INSERT: number;
    KEY_ACTION: number;
    KEY_ACTION_RELEASE: number;
    KEY_PRESS: number;
    KEY_RELEASE: number;
    LEFT: number;
    LIST_DESELECT: number;
    LIST_SELECT: number;
    LOAD_FILE: number;
    LOST_FOCUS: number;
    META_MASK: number;
    MOUSE_DOWN: number;
    MOUSE_DRAG: number;
    MOUSE_ENTER: number;
    MOUSE_EXIT: number;
    MOUSE_MOVE: number;
    MOUSE_UP: number;
    NUM_LOCK: number;
    PAUSE: number;
    PGDN: number;
    PGUP: number;
    PRINT_SCREEN: number;
    RIGHT: number;
    SAVE_FILE: number;
    SCROLL_ABSOLUTE: number;
    SCROLL_BEGIN: number;
    SCROLL_END: number;
    SCROLL_LINE_DOWN: number;
    SCROLL_LINE_UP: number;
    SCROLL_LOCK: number;
    SCROLL_PAGE_DOWN: number;
    SCROLL_PAGE_UP: number;
    SHIFT_MASK: number;
    TAB: number;
    UP: number;
    WINDOW_DEICONIFY: number;
    WINDOW_DESTROY: number;
    WINDOW_EXPOSE: number;
    WINDOW_ICONIFY: number;
    WINDOW_MOVED: number;
}

// java.lang.module.ModuleDescriptor$Opens
declare interface Opens extends Comparable {
    isQualified(): boolean;
    compareTo(object: any): number;
    compareTo(opens: Opens): number;
    source(): string;
    modifiers(): Set;
    targets(): Set;
}

// java.security.PrivilegedExceptionAction
declare interface PrivilegedExceptionAction {
    run(): any;
}

// java.awt.Container
declare interface Container extends Component {
    isAncestorOf(component: Component): boolean;
    isFocusCycleRoot(): boolean;
    isFocusTraversalPolicySet(): boolean;
    isValidateRoot(): boolean;
    isFocusTraversalPolicyProvider(): boolean;
    setFocusTraversalPolicyProvider(b: boolean): void;
    countComponents(): number;
    getComponentCount(): number;
    getComponentZOrder(component: Component): number;
    add(component: Component): Component;
    add(component: Component, i: number): Component;
    add(s: string, component: Component): Component;
    findComponentAt(i: number, i: number): Component;
    findComponentAt(point: Point): Component;
    getComponent(i: number): Component;
    getComponents(): Component[];
    getFocusTraversalPolicy(): FocusTraversalPolicy;
    getInsets(): Insets;
    insets(): Insets;
    getLayout(): LayoutManager;
    getMousePosition(b: boolean): Point;
    getContainerListeners(): ContainerListener[];
    addContainerListener(containerListener: ContainerListener): void;
    removeContainerListener(containerListener: ContainerListener): void;
    add(component: Component, object: any): void;
    add(component: Component, object: any, i: number): void;
    paintComponents(graphics: Graphics): void;
    printComponents(graphics: Graphics): void;
    remove(i: number): void;
    remove(component: Component): void;
    removeAll(): void;
    setComponentZOrder(component: Component, i: number): void;
    setFocusCycleRoot(b: boolean): void;
    setFocusTraversalPolicy(focusTraversalPolicy: FocusTraversalPolicy): void;
    setLayout(layoutManager: LayoutManager): void;
    transferFocusDownCycle(): void;
}

// java.time.format.FormatStyle
declare enum FormatStyle {
    FULL,
    LONG,
    MEDIUM,
    SHORT,
}

// java.security.PublicKey
declare interface PublicKey extends Key {
    serialVersionUID: number;
}

// java.nio.channels.spi.AbstractSelectableChannel
declare interface AbstractSelectableChannel extends SelectableChannel {
}

// java.nio.channels.FileLock
declare interface FileLock extends AutoCloseable {
    isValid(): boolean;
    release(): void;
    isShared(): boolean;
    overlaps(l: number, l: number): boolean;
    channel(): FileChannel;
    position(): number;
    size(): number;
    close(): void;
    acquiredBy(): Channel;
}

// java.nio.channels.FileChannel$MapMode
declare interface MapMode {
    PRIVATE: MapMode;
    READ_ONLY: MapMode;
    READ_WRITE: MapMode;
}

// java.nio.channels.NetworkChannel
declare interface NetworkChannel extends Channel {
    getOption(socketOption: SocketOption): any;
    getLocalAddress(): SocketAddress;
    bind(socketAddress: SocketAddress): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    supportedOptions(): Set;
}

// java.math.BigInteger
declare interface BigInteger extends Number, Comparable {
    equals(object: any): boolean;
    isProbablePrime(i: number): boolean;
    testBit(i: number): boolean;
    byteValueExact(): number;
    toByteArray(): number[];
    bitCount(): number;
    bitLength(): number;
    compareTo(object: any): number;
    compareTo(bigInteger: BigInteger): number;
    getLowestSetBit(): number;
    hashCode(): number;
    intValueExact(): number;
    signum(): number;
    toString(): string;
    toString(i: number): string;
    abs(): BigInteger;
    add(bigInteger: BigInteger): BigInteger;
    and(bigInteger: BigInteger): BigInteger;
    andNot(bigInteger: BigInteger): BigInteger;
    clearBit(i: number): BigInteger;
    divide(bigInteger: BigInteger): BigInteger;
    flipBit(i: number): BigInteger;
    gcd(bigInteger: BigInteger): BigInteger;
    max(bigInteger: BigInteger): BigInteger;
    min(bigInteger: BigInteger): BigInteger;
    mod(bigInteger: BigInteger): BigInteger;
    modInverse(bigInteger: BigInteger): BigInteger;
    modPow(bigInteger: BigInteger, bigInteger: BigInteger): BigInteger;
    multiply(bigInteger: BigInteger): BigInteger;
    negate(): BigInteger;
    nextProbablePrime(): BigInteger;
    not(): BigInteger;
    or(bigInteger: BigInteger): BigInteger;
    pow(i: number): BigInteger;
    remainder(bigInteger: BigInteger): BigInteger;
    setBit(i: number): BigInteger;
    shiftLeft(i: number): BigInteger;
    shiftRight(i: number): BigInteger;
    sqrt(): BigInteger;
    subtract(bigInteger: BigInteger): BigInteger;
    xor(bigInteger: BigInteger): BigInteger;
    divideAndRemainder(bigInteger: BigInteger): BigInteger[];
    sqrtAndRemainder(): BigInteger[];
    longValueExact(): number;
    shortValueExact(): number;
    probablePrime(i: number, random: Random): BigInteger;
    valueOf(l: number): BigInteger;
    ONE: BigInteger;
    TEN: BigInteger;
    TWO: BigInteger;
    ZERO: BigInteger;
}

// java.awt.image.BufferStrategy
declare interface BufferStrategy {
    contentsLost(): boolean;
    contentsRestored(): boolean;
    getCapabilities(): BufferCapabilities;
    getDrawGraphics(): Graphics;
    show(): void;
    dispose(): void;
}

// java.security.cert.CertPath
declare interface CertPath extends Serializable {
    getEncoded(): number[];
    getEncoded(s: string): number[];
    getEncodings(): Iterator;
    getCertificates(): List;
    getType(): string;
}

// java.time.chrono.IsoChronology
declare interface IsoChronology extends AbstractChronology, Serializable {
    isLeapYear(l: number): boolean;
    prolepticYear(era: Era, i: number): number;
    getCalendarType(): string;
    getId(): string;
    date(i: number, i: number, i: number): LocalDate;
    date(era: Era, i: number, i: number, i: number): LocalDate;
    date(temporalAccessor: TemporalAccessor): LocalDate;
    dateEpochDay(l: number): LocalDate;
    dateNow(): LocalDate;
    dateNow(clock: Clock): LocalDate;
    dateNow(zoneId: ZoneId): LocalDate;
    dateYearDay(i: number, i: number): LocalDate;
    dateYearDay(era: Era, i: number, i: number): LocalDate;
    localDateTime(temporalAccessor: TemporalAccessor): LocalDateTime;
    period(i: number, i: number, i: number): Period;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ZonedDateTime;
    zonedDateTime(temporalAccessor: TemporalAccessor): ZonedDateTime;
    date(i: number, i: number, i: number): ChronoLocalDate;
    date(era: Era, i: number, i: number, i: number): ChronoLocalDate;
    date(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    dateEpochDay(l: number): ChronoLocalDate;
    dateNow(): ChronoLocalDate;
    dateNow(clock: Clock): ChronoLocalDate;
    dateNow(zoneId: ZoneId): ChronoLocalDate;
    dateYearDay(i: number, i: number): ChronoLocalDate;
    dateYearDay(era: Era, i: number, i: number): ChronoLocalDate;
    localDateTime(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    period(i: number, i: number, i: number): ChronoPeriod;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ChronoZonedDateTime;
    zonedDateTime(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    eraOf(i: number): Era;
    eraOf(i: number): IsoEra;
    range(chronoField: ChronoField): ValueRange;
    eras(): List;
    epochSecond(i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    INSTANCE: IsoChronology;
}

// java.awt.Window$Type
declare enum Type {
    NORMAL,
    UTILITY,
    POPUP,
}

// java.awt.Cursor
declare interface Cursor extends Serializable {
    getType(): number;
    getName(): string;
    getDefaultCursor(): Cursor;
    getPredefinedCursor(i: number): Cursor;
    getSystemCustomCursor(s: string): Cursor;
    CROSSHAIR_CURSOR: number;
    CUSTOM_CURSOR: number;
    DEFAULT_CURSOR: number;
    E_RESIZE_CURSOR: number;
    HAND_CURSOR: number;
    MOVE_CURSOR: number;
    NE_RESIZE_CURSOR: number;
    NW_RESIZE_CURSOR: number;
    N_RESIZE_CURSOR: number;
    SE_RESIZE_CURSOR: number;
    SW_RESIZE_CURSOR: number;
    S_RESIZE_CURSOR: number;
    TEXT_CURSOR: number;
    WAIT_CURSOR: number;
    W_RESIZE_CURSOR: number;
}

// java.awt.Toolkit
declare interface Toolkit {
    isModalExclusionTypeSupported(modalExclusionType: ModalExclusionType): boolean;
    isModalityTypeSupported(modalityType: ModalityType): boolean;
    prepareImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    checkImage(image: Image, i: number, i: number, imageObserver: ImageObserver): number;
    getScreenResolution(): number;
    getScreenSize(): Dimension;
    getFontMetrics(font: Font): FontMetrics;
    createImage(b: number, i: number, i: number): Image;
    createImage(imageProducer: ImageProducer): Image;
    createImage(s: string): Image;
    createImage(uRL: URL): Image;
    getImage(s: string): Image;
    getImage(uRL: URL): Image;
    getPrintJob(frame: Frame, s: string, properties: Properties): PrintJob;
    getSystemClipboard(): Clipboard;
    getColorModel(): ColorModel;
    getFontList(): string[];
    mapInputMethodHighlight(inputMethodHighlight: InputMethodHighlight): Map;
    beep(): void;
    sync(): void;
    areExtraMouseButtonsEnabled(): boolean;
    getLockingKeyState(i: number): boolean;
    isAlwaysOnTopSupported(): boolean;
    isDynamicLayoutActive(): boolean;
    isFrameStateSupported(i: number): boolean;
    getSystemEventQueue(): EventQueue;
    getDesktopProperty(s: string): any;
    getMaximumCursorColors(): number;
    getMenuShortcutKeyMask(): number;
    getMenuShortcutKeyMaskEx(): number;
    createCustomCursor(image: Image, point: Point, s: string): Cursor;
    getBestCursorSize(i: number, i: number): Dimension;
    createImage(b: number): Image;
    getScreenInsets(graphicsConfiguration: GraphicsConfiguration): Insets;
    getPrintJob(frame: Frame, s: string, jobAttributes: JobAttributes, pageAttributes: PageAttributes): PrintJob;
    getSystemSelection(): Clipboard;
    createDragGestureRecognizer(clazz: Class, dragSource: DragSource, component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    getAWTEventListeners(): AWTEventListener[];
    getAWTEventListeners(l: number): AWTEventListener[];
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(s: string): PropertyChangeListener[];
    getProperty(s: string, s: string): string;
    getDefaultToolkit(): Toolkit;
    addAWTEventListener(aWTEventListener: AWTEventListener, l: number): void;
    addPropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    removeAWTEventListener(aWTEventListener: AWTEventListener): void;
    removePropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    setDynamicLayout(b: boolean): void;
    setLockingKeyState(i: number, b: boolean): void;
}

// java.time.chrono.Chronology
declare interface Chronology extends Comparable {
    equals(object: any): boolean;
    isLeapYear(l: number): boolean;
    compareTo(chronology: Chronology): number;
    hashCode(): number;
    prolepticYear(era: Era, i: number): number;
    getCalendarType(): string;
    getId(): string;
    toString(): string;
    date(i: number, i: number, i: number): ChronoLocalDate;
    date(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    dateEpochDay(l: number): ChronoLocalDate;
    dateYearDay(i: number, i: number): ChronoLocalDate;
    resolveDate(map: Map, resolverStyle: ResolverStyle): ChronoLocalDate;
    eraOf(i: number): Era;
    range(chronoField: ChronoField): ValueRange;
    eras(): List;
    compareTo(object: any): number;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    date(era: Era, i: number, i: number, i: number): ChronoLocalDate;
    dateNow(): ChronoLocalDate;
    dateNow(clock: Clock): ChronoLocalDate;
    dateNow(zoneId: ZoneId): ChronoLocalDate;
    dateYearDay(era: Era, i: number, i: number): ChronoLocalDate;
    localDateTime(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    period(i: number, i: number, i: number): ChronoPeriod;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ChronoZonedDateTime;
    zonedDateTime(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    epochSecond(i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    epochSecond(era: Era, i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    from(temporalAccessor: TemporalAccessor): Chronology;
    of(s: string): Chronology;
    ofLocale(locale: Locale): Chronology;
    getAvailableChronologies(): Set;
}

// javax.accessibility.AccessibleContext
declare interface AccessibleContext {
    getAccessibleChildrenCount(): number;
    getAccessibleIndexInParent(): number;
    getLocale(): Locale;
    getAccessibleChild(i: number): Accessible;
    getAccessibleRole(): AccessibleRole;
    getAccessibleStateSet(): AccessibleStateSet;
    getAccessibleDescription(): string;
    getAccessibleName(): string;
    getAccessibleParent(): Accessible;
    getAccessibleAction(): AccessibleAction;
    getAccessibleComponent(): AccessibleComponent;
    getAccessibleEditableText(): AccessibleEditableText;
    getAccessibleIcon(): AccessibleIcon[];
    getAccessibleRelationSet(): AccessibleRelationSet;
    getAccessibleSelection(): AccessibleSelection;
    getAccessibleTable(): AccessibleTable;
    getAccessibleText(): AccessibleText;
    getAccessibleValue(): AccessibleValue;
    addPropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    firePropertyChange(s: string, object: any, object: any): void;
    removePropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    setAccessibleDescription(s: string): void;
    setAccessibleName(s: string): void;
    setAccessibleParent(accessible: Accessible): void;
    ACCESSIBLE_ACTION_PROPERTY: string;
    ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
    ACCESSIBLE_CARET_PROPERTY: string;
    ACCESSIBLE_CHILD_PROPERTY: string;
    ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
    ACCESSIBLE_DESCRIPTION_PROPERTY: string;
    ACCESSIBLE_HYPERTEXT_OFFSET: string;
    ACCESSIBLE_INVALIDATE_CHILDREN: string;
    ACCESSIBLE_NAME_PROPERTY: string;
    ACCESSIBLE_SELECTION_PROPERTY: string;
    ACCESSIBLE_STATE_PROPERTY: string;
    ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
    ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
    ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
    ACCESSIBLE_TABLE_MODEL_CHANGED: string;
    ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
    ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
    ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
    ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
    ACCESSIBLE_TEXT_PROPERTY: string;
    ACCESSIBLE_VALUE_PROPERTY: string;
    ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
}

// java.lang.module.ModuleDescriptor$Version
declare interface Version extends Comparable {
    compareTo(object: any): number;
    compareTo(version: Version): number;
    parse(s: string): Version;
}

// java.time.chrono.IsoEra
declare enum IsoEra {
    BCE,
    CE,
}

// java.text.Format
declare interface Format extends Serializable, Cloneable {
    parseObject(s: string, parsePosition: ParsePosition): any;
    format(object: any, s: string, fieldPosition: FieldPosition): string;
    format(object: any): string;
    parseObject(s: string): any;
    formatToCharacterIterator(object: any): AttributedCharacterIterator;
}

// java.security.PrivilegedAction
declare interface PrivilegedAction {
    run(): any;
}

// javax.security.cert.Certificate
declare interface Certificate {
    getEncoded(): number[];
    getPublicKey(): PublicKey;
    verify(publicKey: PublicKey): void;
    verify(publicKey: PublicKey, s: string): void;
}

// java.security.AccessControlContext
declare interface AccessControlContext {
    getDomainCombiner(): DomainCombiner;
    checkPermission(permission: Permission): void;
}

// java.time.chrono.ChronoPeriod
declare interface ChronoPeriod extends TemporalAmount {
    equals(object: any): boolean;
    hashCode(): number;
    toString(): string;
    minus(temporalAmount: TemporalAmount): ChronoPeriod;
    multipliedBy(i: number): ChronoPeriod;
    normalized(): ChronoPeriod;
    plus(temporalAmount: TemporalAmount): ChronoPeriod;
    getChronology(): Chronology;
    addTo(temporal: Temporal): Temporal;
    subtractFrom(temporal: Temporal): Temporal;
    getUnits(): List;
    get(temporalUnit: TemporalUnit): number;
    isNegative(): boolean;
    isZero(): boolean;
    negated(): ChronoPeriod;
    between(chronoLocalDate: ChronoLocalDate, chronoLocalDate: ChronoLocalDate): ChronoPeriod;
}

// java.time.zone.ZoneOffsetTransition
declare interface ZoneOffsetTransition extends Comparable, Serializable {
    isGap(): boolean;
    isOverlap(): boolean;
    isValidOffset(zoneOffset: ZoneOffset): boolean;
    compareTo(object: any): number;
    compareTo(zoneOffsetTransition: ZoneOffsetTransition): number;
    getDuration(): Duration;
    getInstant(): Instant;
    getDateTimeAfter(): LocalDateTime;
    getDateTimeBefore(): LocalDateTime;
    getOffsetAfter(): ZoneOffset;
    getOffsetBefore(): ZoneOffset;
    toEpochSecond(): number;
    of(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneOffset: ZoneOffset): ZoneOffsetTransition;
}

// java.awt.Dialog$ModalExclusionType
declare enum ModalExclusionType {
    NO_EXCLUDE,
    APPLICATION_EXCLUDE,
    TOOLKIT_EXCLUDE,
}

// java.awt.event.WindowStateListener
declare interface WindowStateListener extends EventListener {
    windowStateChanged(windowEvent: WindowEvent): void;
}

// java.lang.module.ModuleDescriptor$Requires
declare interface Requires extends Comparable {
    compareTo(object: any): number;
    compareTo(requires: Requires): number;
    name(): string;
    compiledVersion(): Optional;
    rawCompiledVersion(): Optional;
    modifiers(): Set;
}

// java.nio.channels.ReadableByteChannel
declare interface ReadableByteChannel extends Channel {
    read(byteBuffer: ByteBuffer): number;
}

// java.text.ParsePosition
declare interface ParsePosition {
    getErrorIndex(): number;
    getIndex(): number;
    setErrorIndex(i: number): void;
    setIndex(i: number): void;
}

// java.time.chrono.Era
declare interface Era extends TemporalAccessor, TemporalAdjuster {
    getValue(): number;
    isSupported(temporalField: TemporalField): boolean;
    get(temporalField: TemporalField): number;
    query(temporalQuery: TemporalQuery): any;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    adjustInto(temporal: Temporal): Temporal;
    range(temporalField: TemporalField): ValueRange;
    getLong(temporalField: TemporalField): number;
}

// java.awt.AttributeValue
declare interface AttributeValue {
}

// java.awt.event.WindowFocusListener
declare interface WindowFocusListener extends EventListener {
    windowGainedFocus(windowEvent: WindowEvent): void;
    windowLostFocus(windowEvent: WindowEvent): void;
}

// java.time.format.DecimalStyle
declare interface DecimalStyle {
    getDecimalSeparator(): string;
    getNegativeSign(): string;
    getPositiveSign(): string;
    getZeroDigit(): string;
    withDecimalSeparator(c: string): DecimalStyle;
    withNegativeSign(c: string): DecimalStyle;
    withPositiveSign(c: string): DecimalStyle;
    withZeroDigit(c: string): DecimalStyle;
    of(locale: Locale): DecimalStyle;
    ofDefaultLocale(): DecimalStyle;
    getAvailableLocales(): Set;
    STANDARD: DecimalStyle;
}

// java.nio.channels.ScatteringByteChannel
declare interface ScatteringByteChannel extends ReadableByteChannel {
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
}

// java.awt.im.InputContext
declare interface InputContext {
    isCompositionEnabled(): boolean;
    selectInputMethod(locale: Locale): boolean;
    getInputMethodControlObject(): any;
    getLocale(): Locale;
    getInstance(): InputContext;
    dispatchEvent(aWTEvent: AWTEvent): void;
    dispose(): void;
    endComposition(): void;
    reconvert(): void;
    removeNotify(component: Component): void;
    setCharacterSubsets(subset: Subset): void;
    setCompositionEnabled(b: boolean): void;
}

// java.nio.file.attribute.AttributeView
declare interface AttributeView {
    name(): string;
}

// java.awt.event.WindowListener
declare interface WindowListener extends EventListener {
    windowActivated(windowEvent: WindowEvent): void;
    windowClosed(windowEvent: WindowEvent): void;
    windowClosing(windowEvent: WindowEvent): void;
    windowDeactivated(windowEvent: WindowEvent): void;
    windowDeiconified(windowEvent: WindowEvent): void;
    windowIconified(windowEvent: WindowEvent): void;
    windowOpened(windowEvent: WindowEvent): void;
}

// java.nio.channels.CompletionHandler
declare interface CompletionHandler {
    completed(object: any, object: any): void;
    failed(throwable: Throwable, object: any): void;
}

// java.nio.channels.AsynchronousChannel
declare interface AsynchronousChannel extends Channel {
    close(): void;
}

// java.security.Timestamp
declare interface Timestamp extends Serializable {
    getSignerCertPath(): CertPath;
    getTimestamp(): Date;
}

// java.nio.channels.GatheringByteChannel
declare interface GatheringByteChannel extends WritableByteChannel {
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
}

// javax.accessibility.Accessible
declare interface Accessible {
    getAccessibleContext(): AccessibleContext;
}

// java.lang.module.ModuleFinder
declare interface ModuleFinder {
    find(s: string): Optional;
    findAll(): Set;
    compose(moduleFinder: ModuleFinder): ModuleFinder;
    of(path: Path): ModuleFinder;
    ofSystem(): ModuleFinder;
}

// java.net.SocketImpl
declare interface SocketImpl extends SocketOptions {
}

// java.util.Dictionary
declare interface Dictionary {
    isEmpty(): boolean;
    size(): number;
    get(object: any): any;
    put(object: any, object: any): any;
    remove(object: any): any;
    elements(): Enumeration;
    keys(): Enumeration;
}

// java.awt.PrintJob
declare interface PrintJob {
    lastPageFirst(): boolean;
    getPageResolution(): number;
    getPageDimension(): Dimension;
    getGraphics(): Graphics;
    end(): void;
}

// java.awt.event.MouseMotionListener
declare interface MouseMotionListener extends EventListener {
    mouseDragged(mouseEvent: MouseEvent): void;
    mouseMoved(mouseEvent: MouseEvent): void;
}

// javax.accessibility.AccessibleValue
declare interface AccessibleValue {
    setCurrentAccessibleValue(number: Number): boolean;
    getCurrentAccessibleValue(): Number;
    getMaximumAccessibleValue(): Number;
    getMinimumAccessibleValue(): Number;
}

// java.awt.event.MouseListener
declare interface MouseListener extends EventListener {
    mouseClicked(mouseEvent: MouseEvent): void;
    mouseEntered(mouseEvent: MouseEvent): void;
    mouseExited(mouseEvent: MouseEvent): void;
    mousePressed(mouseEvent: MouseEvent): void;
    mouseReleased(mouseEvent: MouseEvent): void;
}

// java.awt.Component$BaselineResizeBehavior
declare enum BaselineResizeBehavior {
    CONSTANT_ASCENT,
    CONSTANT_DESCENT,
    CENTER_OFFSET,
    OTHER,
}

// java.awt.dnd.DragGestureListener
declare interface DragGestureListener extends EventListener {
    dragGestureRecognized(dragGestureEvent: DragGestureEvent): void;
}

// java.nio.channels.InterruptibleChannel
declare interface InterruptibleChannel extends Channel {
    close(): void;
}

// javax.accessibility.AccessibleAction
declare interface AccessibleAction {
    doAccessibleAction(i: number): boolean;
    getAccessibleActionCount(): number;
    getAccessibleActionDescription(i: number): string;
    CLICK: string;
    DECREMENT: string;
    INCREMENT: string;
    TOGGLE_EXPAND: string;
    TOGGLE_POPUP: string;
}

// java.awt.datatransfer.Clipboard
declare interface Clipboard {
    isDataFlavorAvailable(dataFlavor: DataFlavor): boolean;
    getAvailableDataFlavors(): DataFlavor[];
    getData(dataFlavor: DataFlavor): any;
    getName(): string;
    getFlavorListeners(): FlavorListener[];
    getContents(object: any): Transferable;
    addFlavorListener(flavorListener: FlavorListener): void;
    removeFlavorListener(flavorListener: FlavorListener): void;
    setContents(transferable: Transferable, clipboardOwner: ClipboardOwner): void;
}

// java.net.SocketOptions
declare interface SocketOptions {
    getOption(i: number): any;
    setOption(i: number, object: any): void;
    IP_MULTICAST_IF: number;
    IP_MULTICAST_IF2: number;
    IP_MULTICAST_LOOP: number;
    IP_TOS: number;
    SO_BINDADDR: number;
    SO_BROADCAST: number;
    SO_KEEPALIVE: number;
    SO_LINGER: number;
    SO_OOBINLINE: number;
    SO_RCVBUF: number;
    SO_REUSEADDR: number;
    SO_REUSEPORT: number;
    SO_SNDBUF: number;
    SO_TIMEOUT: number;
    TCP_NODELAY: number;
}

// java.awt.dnd.DragSource
declare interface DragSource extends Serializable {
    getFlavorMap(): FlavorMap;
    createDefaultDragGestureRecognizer(component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    createDragGestureRecognizer(clazz: Class, component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    getDragSourceListeners(): DragSourceListener[];
    getDragSourceMotionListeners(): DragSourceMotionListener[];
    getListeners(clazz: Class): EventListener[];
    isDragImageSupported(): boolean;
    getDragThreshold(): number;
    getDefaultDragSource(): DragSource;
    addDragSourceListener(dragSourceListener: DragSourceListener): void;
    addDragSourceMotionListener(dragSourceMotionListener: DragSourceMotionListener): void;
    removeDragSourceListener(dragSourceListener: DragSourceListener): void;
    removeDragSourceMotionListener(dragSourceMotionListener: DragSourceMotionListener): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener, flavorMap: FlavorMap): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener, flavorMap: FlavorMap): void;
    DefaultCopyDrop: Cursor;
    DefaultCopyNoDrop: Cursor;
    DefaultLinkDrop: Cursor;
    DefaultLinkNoDrop: Cursor;
    DefaultMoveDrop: Cursor;
    DefaultMoveNoDrop: Cursor;
}

// java.awt.event.MouseWheelListener
declare interface MouseWheelListener extends EventListener {
    mouseWheelMoved(mouseWheelEvent: MouseWheelEvent): void;
}

// java.time.chrono.AbstractChronology
declare interface AbstractChronology extends Chronology {
    compareTo(object: any): number;
    compareTo(chronology: Chronology): number;
    resolveDate(map: Map, resolverStyle: ResolverStyle): ChronoLocalDate;
}

// java.awt.Dialog$ModalityType
declare enum ModalityType {
    MODELESS,
    DOCUMENT_MODAL,
    APPLICATION_MODAL,
    TOOLKIT_MODAL,
}

// java.awt.LayoutManager
declare interface LayoutManager {
    minimumLayoutSize(container: Container): Dimension;
    preferredLayoutSize(container: Container): Dimension;
    addLayoutComponent(s: string, component: Component): void;
    layoutContainer(container: Container): void;
    removeLayoutComponent(component: Component): void;
}

// javax.accessibility.AccessibleTable
declare interface AccessibleTable {
    isAccessibleColumnSelected(i: number): boolean;
    isAccessibleRowSelected(i: number): boolean;
    isAccessibleSelected(i: number, i: number): boolean;
    getAccessibleColumnCount(): number;
    getAccessibleColumnExtentAt(i: number, i: number): number;
    getAccessibleRowCount(): number;
    getAccessibleRowExtentAt(i: number, i: number): number;
    getSelectedAccessibleColumns(): number[];
    getSelectedAccessibleRows(): number[];
    getAccessibleAt(i: number, i: number): Accessible;
    getAccessibleCaption(): Accessible;
    getAccessibleColumnDescription(i: number): Accessible;
    getAccessibleRowDescription(i: number): Accessible;
    getAccessibleSummary(): Accessible;
    getAccessibleColumnHeader(): AccessibleTable;
    getAccessibleRowHeader(): AccessibleTable;
    setAccessibleCaption(accessible: Accessible): void;
    setAccessibleColumnDescription(i: number, accessible: Accessible): void;
    setAccessibleColumnHeader(accessibleTable: AccessibleTable): void;
    setAccessibleRowDescription(i: number, accessible: Accessible): void;
    setAccessibleRowHeader(accessibleTable: AccessibleTable): void;
    setAccessibleSummary(accessible: Accessible): void;
}

// java.awt.PageAttributes
declare interface PageAttributes extends Cloneable {
    getPrinterResolution(): number[];
    getColor(): ColorType;
    getMedia(): MediaType;
    getOrientationRequested(): OrientationRequestedType;
    getOrigin(): OriginType;
    getPrintQuality(): PrintQualityType;
    set(pageAttributes: PageAttributes): void;
    setColor(colorType: ColorType): void;
    setMedia(mediaType: MediaType): void;
    setMediaToDefault(): void;
    setOrientationRequested(i: number): void;
    setOrientationRequested(orientationRequestedType: OrientationRequestedType): void;
    setOrientationRequestedToDefault(): void;
    setOrigin(originType: OriginType): void;
    setPrintQuality(i: number): void;
    setPrintQuality(printQualityType: PrintQualityType): void;
    setPrintQualityToDefault(): void;
    setPrinterResolution(i: number): void;
    setPrinterResolution(i: number): void;
    setPrinterResolutionToDefault(): void;
}

// java.awt.ComponentOrientation
declare interface ComponentOrientation extends Serializable {
    isHorizontal(): boolean;
    isLeftToRight(): boolean;
    getOrientation(locale: Locale): ComponentOrientation;
    getOrientation(resourceBundle: ResourceBundle): ComponentOrientation;
    LEFT_TO_RIGHT: ComponentOrientation;
    RIGHT_TO_LEFT: ComponentOrientation;
    UNKNOWN: ComponentOrientation;
}

// java.awt.event.HierarchyListener
declare interface HierarchyListener extends EventListener {
    hierarchyChanged(hierarchyEvent: HierarchyEvent): void;
}

// java.awt.im.InputMethodHighlight
declare interface InputMethodHighlight {
    isSelected(): boolean;
    getState(): number;
    getVariation(): number;
    getStyle(): Map;
    CONVERTED_TEXT: number;
    RAW_TEXT: number;
    SELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
    SELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
    UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
    UNSELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
}

// java.awt.Insets
declare interface Insets extends Cloneable, Serializable {
    set(i: number, i: number, i: number, i: number): void;
    bottom: number;
    left: number;
    right: number;
    top: number;
}

// javax.accessibility.AccessibleStateSet
declare interface AccessibleStateSet {
    add(accessibleState: AccessibleState): boolean;
    contains(accessibleState: AccessibleState): boolean;
    remove(accessibleState: AccessibleState): boolean;
    toArray(): AccessibleState[];
    addAll(accessibleState: AccessibleState): void;
    clear(): void;
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

// java.lang.Character$Subset
declare interface Subset {
}

// java.awt.MenuComponent
declare interface MenuComponent extends Serializable {
    postEvent(event: Event): boolean;
    dispatchEvent(aWTEvent: AWTEvent): void;
    getFont(): Font;
    getParent(): MenuContainer;
    getName(): string;
    getAccessibleContext(): AccessibleContext;
    removeNotify(): void;
    setFont(font: Font): void;
    setName(s: string): void;
}

// java.awt.event.InputMethodListener
declare interface InputMethodListener extends EventListener {
    caretPositionChanged(inputMethodEvent: InputMethodEvent): void;
    inputMethodTextChanged(inputMethodEvent: InputMethodEvent): void;
}

// javax.accessibility.AccessibleSelection
declare interface AccessibleSelection {
    isAccessibleChildSelected(i: number): boolean;
    getAccessibleSelectionCount(): number;
    getAccessibleSelection(i: number): Accessible;
    addAccessibleSelection(i: number): void;
    clearAccessibleSelection(): void;
    removeAccessibleSelection(i: number): void;
    selectAllAccessibleSelection(): void;
}

// java.awt.EventQueue
declare interface EventQueue {
    getNextEvent(): AWTEvent;
    peekEvent(): AWTEvent;
    peekEvent(i: number): AWTEvent;
    createSecondaryLoop(): SecondaryLoop;
    isDispatchThread(): boolean;
    getCurrentEvent(): AWTEvent;
    getMostRecentEventTime(): number;
    invokeAndWait(runnable: Runnable): void;
    invokeLater(runnable: Runnable): void;
    postEvent(aWTEvent: AWTEvent): void;
    push(eventQueue: EventQueue): void;
}

// java.awt.PopupMenu
declare interface PopupMenu extends Menu {
    getParent(): MenuContainer;
    show(component: Component, i: number, i: number): void;
}

// java.beans.PropertyChangeListener
declare interface PropertyChangeListener extends EventListener {
    propertyChange(propertyChangeEvent: PropertyChangeEvent): void;
}

// javax.accessibility.AccessibleComponent
declare interface AccessibleComponent {
    contains(point: Point): boolean;
    isEnabled(): boolean;
    isFocusTraversable(): boolean;
    isShowing(): boolean;
    isVisible(): boolean;
    getBackground(): Color;
    getForeground(): Color;
    getCursor(): Cursor;
    getSize(): Dimension;
    getFont(): Font;
    getFontMetrics(font: Font): FontMetrics;
    getLocation(): Point;
    getLocationOnScreen(): Point;
    getBounds(): Rectangle;
    getAccessibleAt(point: Point): Accessible;
    addFocusListener(focusListener: FocusListener): void;
    removeFocusListener(focusListener: FocusListener): void;
    requestFocus(): void;
    setBackground(color: Color): void;
    setBounds(rectangle: Rectangle): void;
    setCursor(cursor: Cursor): void;
    setEnabled(b: boolean): void;
    setFont(font: Font): void;
    setForeground(color: Color): void;
    setLocation(point: Point): void;
    setSize(dimension: Dimension): void;
    setVisible(b: boolean): void;
}

// java.awt.dnd.DragGestureRecognizer
declare interface DragGestureRecognizer extends Serializable {
    getDragSource(): DragSource;
    getTriggerEvent(): InputEvent;
    getSourceActions(): number;
    getComponent(): Component;
    addDragGestureListener(dragGestureListener: DragGestureListener): void;
    removeDragGestureListener(dragGestureListener: DragGestureListener): void;
    setComponent(component: Component): void;
    setSourceActions(i: number): void;
    resetRecognizer(): void;
}

// java.awt.event.KeyListener
declare interface KeyListener extends EventListener {
    keyPressed(keyEvent: KeyEvent): void;
    keyReleased(keyEvent: KeyEvent): void;
    keyTyped(keyEvent: KeyEvent): void;
}

// java.awt.dnd.DropTarget
declare interface DropTarget extends DropTargetListener, Serializable {
    isActive(): boolean;
    getDefaultActions(): number;
    getFlavorMap(): FlavorMap;
    getDropTargetContext(): DropTargetContext;
    getComponent(): Component;
    addDropTargetListener(dropTargetListener: DropTargetListener): void;
    dragEnter(dropTargetDragEvent: DropTargetDragEvent): void;
    dragExit(dropTargetEvent: DropTargetEvent): void;
    dragOver(dropTargetDragEvent: DropTargetDragEvent): void;
    drop(dropTargetDropEvent: DropTargetDropEvent): void;
    dropActionChanged(dropTargetDragEvent: DropTargetDragEvent): void;
    removeDropTargetListener(dropTargetListener: DropTargetListener): void;
    setActive(b: boolean): void;
    setComponent(component: Component): void;
    addNotify(): void;
    removeNotify(): void;
    setDefaultActions(i: number): void;
    setFlavorMap(flavorMap: FlavorMap): void;
}

// java.nio.channels.SelectableChannel
declare interface SelectableChannel extends AbstractInterruptibleChannel, Channel {
    isBlocking(): boolean;
    isRegistered(): boolean;
    validOps(): number;
    blockingLock(): any;
    configureBlocking(b: boolean): SelectableChannel;
    keyFor(selector: Selector): SelectionKey;
    register(selector: Selector, i: number, object: any): SelectionKey;
    provider(): SelectorProvider;
    register(selector: Selector, i: number): SelectionKey;
}

// javax.accessibility.AccessibleText
declare interface AccessibleText {
    getCaretPosition(): number;
    getCharCount(): number;
    getIndexAtPoint(point: Point): number;
    getSelectionEnd(): number;
    getSelectionStart(): number;
    getCharacterBounds(i: number): Rectangle;
    getAfterIndex(i: number, i: number): string;
    getAtIndex(i: number, i: number): string;
    getBeforeIndex(i: number, i: number): string;
    getSelectedText(): string;
    getCharacterAttribute(i: number): AttributeSet;
    CHARACTER: number;
    SENTENCE: number;
    WORD: number;
}

// java.awt.FocusTraversalPolicy
declare interface FocusTraversalPolicy {
    getComponentAfter(container: Container, component: Component): Component;
    getComponentBefore(container: Container, component: Component): Component;
    getDefaultComponent(container: Container): Component;
    getFirstComponent(container: Container): Component;
    getLastComponent(container: Container): Component;
    getInitialComponent(window: Window): Component;
}

// javax.accessibility.AccessibleRole
declare interface AccessibleRole extends AccessibleBundle {
    ALERT: AccessibleRole;
    AWT_COMPONENT: AccessibleRole;
    CANVAS: AccessibleRole;
    CHECK_BOX: AccessibleRole;
    COLOR_CHOOSER: AccessibleRole;
    COLUMN_HEADER: AccessibleRole;
    COMBO_BOX: AccessibleRole;
    DATE_EDITOR: AccessibleRole;
    DESKTOP_ICON: AccessibleRole;
    DESKTOP_PANE: AccessibleRole;
    DIALOG: AccessibleRole;
    DIRECTORY_PANE: AccessibleRole;
    EDITBAR: AccessibleRole;
    FILE_CHOOSER: AccessibleRole;
    FILLER: AccessibleRole;
    FONT_CHOOSER: AccessibleRole;
    FOOTER: AccessibleRole;
    FRAME: AccessibleRole;
    GLASS_PANE: AccessibleRole;
    GROUP_BOX: AccessibleRole;
    HEADER: AccessibleRole;
    HTML_CONTAINER: AccessibleRole;
    HYPERLINK: AccessibleRole;
    ICON: AccessibleRole;
    INTERNAL_FRAME: AccessibleRole;
    LABEL: AccessibleRole;
    LAYERED_PANE: AccessibleRole;
    LIST: AccessibleRole;
    LIST_ITEM: AccessibleRole;
    MENU: AccessibleRole;
    MENU_BAR: AccessibleRole;
    MENU_ITEM: AccessibleRole;
    OPTION_PANE: AccessibleRole;
    PAGE_TAB: AccessibleRole;
    PAGE_TAB_LIST: AccessibleRole;
    PANEL: AccessibleRole;
    PARAGRAPH: AccessibleRole;
    PASSWORD_TEXT: AccessibleRole;
    POPUP_MENU: AccessibleRole;
    PROGRESS_BAR: AccessibleRole;
    PROGRESS_MONITOR: AccessibleRole;
    PUSH_BUTTON: AccessibleRole;
    RADIO_BUTTON: AccessibleRole;
    ROOT_PANE: AccessibleRole;
    ROW_HEADER: AccessibleRole;
    RULER: AccessibleRole;
    SCROLL_BAR: AccessibleRole;
    SCROLL_PANE: AccessibleRole;
    SEPARATOR: AccessibleRole;
    SLIDER: AccessibleRole;
    SPIN_BOX: AccessibleRole;
    SPLIT_PANE: AccessibleRole;
    STATUS_BAR: AccessibleRole;
    SWING_COMPONENT: AccessibleRole;
    TABLE: AccessibleRole;
    TEXT: AccessibleRole;
    TOGGLE_BUTTON: AccessibleRole;
    TOOL_BAR: AccessibleRole;
    TOOL_TIP: AccessibleRole;
    TREE: AccessibleRole;
    UNKNOWN: AccessibleRole;
    VIEWPORT: AccessibleRole;
    WINDOW: AccessibleRole;
}

// java.nio.channels.Channel
declare interface Channel extends Closeable {
    isOpen(): boolean;
    close(): void;
}

// java.awt.MenuContainer
declare interface MenuContainer {
    postEvent(event: Event): boolean;
    getFont(): Font;
    remove(menuComponent: MenuComponent): void;
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

// java.awt.event.FocusListener
declare interface FocusListener extends EventListener {
    focusGained(focusEvent: FocusEvent): void;
    focusLost(focusEvent: FocusEvent): void;
}

// javax.accessibility.AccessibleRelationSet
declare interface AccessibleRelationSet {
    add(accessibleRelation: AccessibleRelation): boolean;
    contains(s: string): boolean;
    remove(accessibleRelation: AccessibleRelation): boolean;
    size(): number;
    get(s: string): AccessibleRelation;
    toArray(): AccessibleRelation[];
    addAll(accessibleRelation: AccessibleRelation): void;
    clear(): void;
}

// java.awt.AWTEvent
declare interface AWTEvent extends EventObject {
    getID(): number;
    paramString(): string;
    setSource(object: any): void;
    RESERVED_ID_MAX: number;
    ACTION_EVENT_MASK: number;
    ADJUSTMENT_EVENT_MASK: number;
    COMPONENT_EVENT_MASK: number;
    CONTAINER_EVENT_MASK: number;
    FOCUS_EVENT_MASK: number;
    HIERARCHY_BOUNDS_EVENT_MASK: number;
    HIERARCHY_EVENT_MASK: number;
    INPUT_METHOD_EVENT_MASK: number;
    INVOCATION_EVENT_MASK: number;
    ITEM_EVENT_MASK: number;
    KEY_EVENT_MASK: number;
    MOUSE_EVENT_MASK: number;
    MOUSE_MOTION_EVENT_MASK: number;
    MOUSE_WHEEL_EVENT_MASK: number;
    PAINT_EVENT_MASK: number;
    TEXT_EVENT_MASK: number;
    WINDOW_EVENT_MASK: number;
    WINDOW_FOCUS_EVENT_MASK: number;
    WINDOW_STATE_EVENT_MASK: number;
}

// java.awt.im.InputMethodRequests
declare interface InputMethodRequests {
    getCommittedTextLength(): number;
    getInsertPositionOffset(): number;
    getTextLocation(textHitInfo: TextHitInfo): Rectangle;
    getLocationOffset(i: number, i: number): TextHitInfo;
    cancelLatestCommittedText(attribute: Attribute): AttributedCharacterIterator;
    getCommittedText(i: number, i: number, attribute: Attribute): AttributedCharacterIterator;
    getSelectedText(attribute: Attribute): AttributedCharacterIterator;
}

// java.awt.event.ComponentListener
declare interface ComponentListener extends EventListener {
    componentHidden(componentEvent: ComponentEvent): void;
    componentMoved(componentEvent: ComponentEvent): void;
    componentResized(componentEvent: ComponentEvent): void;
    componentShown(componentEvent: ComponentEvent): void;
}

// java.awt.event.HierarchyBoundsListener
declare interface HierarchyBoundsListener extends EventListener {
    ancestorMoved(hierarchyEvent: HierarchyEvent): void;
    ancestorResized(hierarchyEvent: HierarchyEvent): void;
}

// java.awt.event.ContainerListener
declare interface ContainerListener extends EventListener {
    componentAdded(containerEvent: ContainerEvent): void;
    componentRemoved(containerEvent: ContainerEvent): void;
}

// java.awt.Frame
declare interface Frame extends Window, MenuContainer {
    isResizable(): boolean;
    isUndecorated(): boolean;
    getCursorType(): number;
    getExtendedState(): number;
    getIconImage(): Image;
    getMenuBar(): MenuBar;
    getMaximizedBounds(): Rectangle;
    getTitle(): string;
    getFrames(): Frame[];
    getState(): number;
    setState(i: number): void;
    remove(menuComponent: MenuComponent): void;
    setCursor(i: number): void;
    setExtendedState(i: number): void;
    setMaximizedBounds(rectangle: Rectangle): void;
    setMenuBar(menuBar: MenuBar): void;
    setResizable(b: boolean): void;
    setTitle(s: string): void;
    setUndecorated(b: boolean): void;
    CROSSHAIR_CURSOR: number;
    DEFAULT_CURSOR: number;
    E_RESIZE_CURSOR: number;
    HAND_CURSOR: number;
    ICONIFIED: number;
    MAXIMIZED_BOTH: number;
    MAXIMIZED_HORIZ: number;
    MAXIMIZED_VERT: number;
    MOVE_CURSOR: number;
    NE_RESIZE_CURSOR: number;
    NORMAL: number;
    NW_RESIZE_CURSOR: number;
    N_RESIZE_CURSOR: number;
    SE_RESIZE_CURSOR: number;
    SW_RESIZE_CURSOR: number;
    S_RESIZE_CURSOR: number;
    TEXT_CURSOR: number;
    WAIT_CURSOR: number;
    W_RESIZE_CURSOR: number;
}

// java.awt.event.WindowEvent
declare interface WindowEvent extends ComponentEvent {
    getNewState(): number;
    getOldState(): number;
    getOppositeWindow(): Window;
    getWindow(): Window;
    WINDOW_ACTIVATED: number;
    WINDOW_CLOSED: number;
    WINDOW_CLOSING: number;
    WINDOW_DEACTIVATED: number;
    WINDOW_DEICONIFIED: number;
    WINDOW_FIRST: number;
    WINDOW_GAINED_FOCUS: number;
    WINDOW_ICONIFIED: number;
    WINDOW_LAST: number;
    WINDOW_LOST_FOCUS: number;
    WINDOW_OPENED: number;
    WINDOW_STATE_CHANGED: number;
}

// javax.accessibility.AccessibleEditableText
declare interface AccessibleEditableText extends AccessibleText {
    getTextRange(i: number, i: number): string;
    cut(i: number, i: number): void;
    delete(i: number, i: number): void;
    insertTextAtIndex(i: number, s: string): void;
    paste(i: number): void;
    replaceText(i: number, i: number, s: string): void;
    selectText(i: number, i: number): void;
    setAttributes(i: number, i: number, attributeSet: AttributeSet): void;
    setTextContents(s: string): void;
}

// javax.accessibility.AccessibleIcon
declare interface AccessibleIcon {
    getAccessibleIconHeight(): number;
    getAccessibleIconWidth(): number;
    getAccessibleIconDescription(): string;
    setAccessibleIconDescription(s: string): void;
}

// java.awt.JobAttributes
declare interface JobAttributes extends Cloneable {
    getCopies(): number;
    getFromPage(): number;
    getMaxPage(): number;
    getMinPage(): number;
    getToPage(): number;
    getPageRanges(): number[][];
    getDefaultSelection(): DefaultSelectionType;
    getDestination(): DestinationType;
    getDialog(): DialogType;
    getMultipleDocumentHandling(): MultipleDocumentHandlingType;
    getSides(): SidesType;
    getFileName(): string;
    getPrinter(): string;
    set(jobAttributes: JobAttributes): void;
    setCopies(i: number): void;
    setCopiesToDefault(): void;
    setDefaultSelection(defaultSelectionType: DefaultSelectionType): void;
    setDestination(destinationType: DestinationType): void;
    setDialog(dialogType: DialogType): void;
    setFileName(s: string): void;
    setFromPage(i: number): void;
    setMaxPage(i: number): void;
    setMinPage(i: number): void;
    setMultipleDocumentHandling(multipleDocumentHandlingType: MultipleDocumentHandlingType): void;
    setMultipleDocumentHandlingToDefault(): void;
    setPageRanges(i: number): void;
    setPrinter(s: string): void;
    setSides(sidesType: SidesType): void;
    setSidesToDefault(): void;
    setToPage(i: number): void;
}

// java.awt.event.AWTEventListener
declare interface AWTEventListener extends EventListener {
    eventDispatched(aWTEvent: AWTEvent): void;
}

// java.security.DomainCombiner
declare interface DomainCombiner {
    combine(protectionDomain: ProtectionDomain, protectionDomain: ProtectionDomain): ProtectionDomain[];
}

// java.text.FieldPosition
declare interface FieldPosition {
    getBeginIndex(): number;
    getEndIndex(): number;
    getField(): number;
    getFieldAttribute(): Field;
    setBeginIndex(i: number): void;
    setEndIndex(i: number): void;
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

// java.awt.JobAttributes$DialogType
declare interface DialogType extends AttributeValue {
    COMMON: DialogType;
    NATIVE: DialogType;
    NONE: DialogType;
}

// java.awt.datatransfer.DataFlavor
declare interface DataFlavor extends Externalizable, Cloneable {
    equals(dataFlavor: DataFlavor): boolean;
    equals(s: string): boolean;
    isFlavorJavaFileListType(): boolean;
    isFlavorRemoteObjectType(): boolean;
    isFlavorSerializedObjectType(): boolean;
    isFlavorTextType(): boolean;
    isMimeTypeEqual(s: string): boolean;
    isMimeTypeSerializedObject(): boolean;
    isRepresentationClassByteBuffer(): boolean;
    isRepresentationClassCharBuffer(): boolean;
    isRepresentationClassInputStream(): boolean;
    isRepresentationClassReader(): boolean;
    isRepresentationClassRemote(): boolean;
    isRepresentationClassSerializable(): boolean;
    match(dataFlavor: DataFlavor): boolean;
    isMimeTypeEqual(dataFlavor: DataFlavor): boolean;
    getDefaultRepresentationClass(): Class;
    getDefaultRepresentationClassAsString(): string;
    getReaderForText(transferable: Transferable): Reader;
    getRepresentationClass(): Class;
    getHumanPresentableName(): string;
    getMimeType(): string;
    getParameter(s: string): string;
    getPrimaryType(): string;
    getSubType(): string;
    getTextPlainUnicodeFlavor(): DataFlavor;
    selectBestTextFlavor(dataFlavor: DataFlavor): DataFlavor;
    readExternal(objectInput: ObjectInput): void;
    writeExternal(objectOutput: ObjectOutput): void;
    setHumanPresentableName(s: string): void;
    imageFlavor: DataFlavor;
    javaFileListFlavor: DataFlavor;
    plainTextFlavor: DataFlavor;
    stringFlavor: DataFlavor;
    javaJVMLocalObjectMimeType: string;
    javaRemoteObjectMimeType: string;
    javaSerializedObjectMimeType: string;
    allHtmlFlavor: DataFlavor;
    fragmentHtmlFlavor: DataFlavor;
    selectionHtmlFlavor: DataFlavor;
}

// javax.swing.text.AttributeSet
declare interface AttributeSet {
    containsAttribute(object: any, object: any): boolean;
    containsAttributes(attributeSet: AttributeSet): boolean;
    isDefined(object: any): boolean;
    isEqual(attributeSet: AttributeSet): boolean;
    getAttributeCount(): number;
    getAttribute(object: any): any;
    getAttributeNames(): Enumeration;
    copyAttributes(): AttributeSet;
    getResolveParent(): AttributeSet;
    NameAttribute: any;
    ResolveAttribute: any;
}

// java.awt.event.KeyEvent
declare interface KeyEvent extends InputEvent {
    isActionKey(): boolean;
    getKeyChar(): string;
    getExtendedKeyCode(): number;
    getKeyCode(): number;
    getKeyLocation(): number;
    paramString(): string;
    getExtendedKeyCodeForChar(i: number): number;
    getKeyModifiersText(i: number): string;
    getKeyText(i: number): string;
    setKeyChar(c: string): void;
    setKeyCode(i: number): void;
    setModifiers(i: number): void;
    CHAR_UNDEFINED: string;
    KEY_FIRST: number;
    KEY_LAST: number;
    KEY_LOCATION_LEFT: number;
    KEY_LOCATION_NUMPAD: number;
    KEY_LOCATION_RIGHT: number;
    KEY_LOCATION_STANDARD: number;
    KEY_LOCATION_UNKNOWN: number;
    KEY_PRESSED: number;
    KEY_RELEASED: number;
    KEY_TYPED: number;
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
    VK_A: number;
    VK_ACCEPT: number;
    VK_ADD: number;
    VK_AGAIN: number;
    VK_ALL_CANDIDATES: number;
    VK_ALPHANUMERIC: number;
    VK_ALT: number;
    VK_ALT_GRAPH: number;
    VK_AMPERSAND: number;
    VK_ASTERISK: number;
    VK_AT: number;
    VK_B: number;
    VK_BACK_QUOTE: number;
    VK_BACK_SLASH: number;
    VK_BACK_SPACE: number;
    VK_BEGIN: number;
    VK_BRACELEFT: number;
    VK_BRACERIGHT: number;
    VK_C: number;
    VK_CANCEL: number;
    VK_CAPS_LOCK: number;
    VK_CIRCUMFLEX: number;
    VK_CLEAR: number;
    VK_CLOSE_BRACKET: number;
    VK_CODE_INPUT: number;
    VK_COLON: number;
    VK_COMMA: number;
    VK_COMPOSE: number;
    VK_CONTEXT_MENU: number;
    VK_CONTROL: number;
    VK_CONVERT: number;
    VK_COPY: number;
    VK_CUT: number;
    VK_D: number;
    VK_DEAD_ABOVEDOT: number;
    VK_DEAD_ABOVERING: number;
    VK_DEAD_ACUTE: number;
    VK_DEAD_BREVE: number;
    VK_DEAD_CARON: number;
    VK_DEAD_CEDILLA: number;
    VK_DEAD_CIRCUMFLEX: number;
    VK_DEAD_DIAERESIS: number;
    VK_DEAD_DOUBLEACUTE: number;
    VK_DEAD_GRAVE: number;
    VK_DEAD_IOTA: number;
    VK_DEAD_MACRON: number;
    VK_DEAD_OGONEK: number;
    VK_DEAD_SEMIVOICED_SOUND: number;
    VK_DEAD_TILDE: number;
    VK_DEAD_VOICED_SOUND: number;
    VK_DECIMAL: number;
    VK_DELETE: number;
    VK_DIVIDE: number;
    VK_DOLLAR: number;
    VK_DOWN: number;
    VK_E: number;
    VK_END: number;
    VK_ENTER: number;
    VK_EQUALS: number;
    VK_ESCAPE: number;
    VK_EURO_SIGN: number;
    VK_EXCLAMATION_MARK: number;
    VK_F: number;
    VK_F1: number;
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
    VK_F2: number;
    VK_F20: number;
    VK_F21: number;
    VK_F22: number;
    VK_F23: number;
    VK_F24: number;
    VK_F3: number;
    VK_F4: number;
    VK_F5: number;
    VK_F6: number;
    VK_F7: number;
    VK_F8: number;
    VK_F9: number;
    VK_FINAL: number;
    VK_FIND: number;
    VK_FULL_WIDTH: number;
    VK_G: number;
    VK_GREATER: number;
    VK_H: number;
    VK_HALF_WIDTH: number;
    VK_HELP: number;
    VK_HIRAGANA: number;
    VK_HOME: number;
    VK_I: number;
    VK_INPUT_METHOD_ON_OFF: number;
    VK_INSERT: number;
    VK_INVERTED_EXCLAMATION_MARK: number;
    VK_J: number;
    VK_JAPANESE_HIRAGANA: number;
    VK_JAPANESE_KATAKANA: number;
    VK_JAPANESE_ROMAN: number;
    VK_K: number;
    VK_KANA: number;
    VK_KANA_LOCK: number;
    VK_KANJI: number;
    VK_KATAKANA: number;
    VK_KP_DOWN: number;
    VK_KP_LEFT: number;
    VK_KP_RIGHT: number;
    VK_KP_UP: number;
    VK_L: number;
    VK_LEFT: number;
    VK_LEFT_PARENTHESIS: number;
    VK_LESS: number;
    VK_M: number;
    VK_META: number;
    VK_MINUS: number;
    VK_MODECHANGE: number;
    VK_MULTIPLY: number;
    VK_N: number;
    VK_NONCONVERT: number;
    VK_NUMBER_SIGN: number;
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
    VK_NUM_LOCK: number;
    VK_O: number;
    VK_OPEN_BRACKET: number;
    VK_P: number;
    VK_PAGE_DOWN: number;
    VK_PAGE_UP: number;
    VK_PASTE: number;
    VK_PAUSE: number;
    VK_PERIOD: number;
    VK_PLUS: number;
    VK_PREVIOUS_CANDIDATE: number;
    VK_PRINTSCREEN: number;
    VK_PROPS: number;
    VK_Q: number;
    VK_QUOTE: number;
    VK_QUOTEDBL: number;
    VK_R: number;
    VK_RIGHT: number;
    VK_RIGHT_PARENTHESIS: number;
    VK_ROMAN_CHARACTERS: number;
    VK_S: number;
    VK_SCROLL_LOCK: number;
    VK_SEMICOLON: number;
    VK_SEPARATER: number;
    VK_SEPARATOR: number;
    VK_SHIFT: number;
    VK_SLASH: number;
    VK_SPACE: number;
    VK_STOP: number;
    VK_SUBTRACT: number;
    VK_T: number;
    VK_TAB: number;
    VK_U: number;
    VK_UNDEFINED: number;
    VK_UNDERSCORE: number;
    VK_UNDO: number;
    VK_UP: number;
    VK_V: number;
    VK_W: number;
    VK_WINDOWS: number;
    VK_X: number;
    VK_Y: number;
    VK_Z: number;
}

// java.awt.dnd.DropTargetDragEvent
declare interface DropTargetDragEvent extends DropTargetEvent {
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    getDropAction(): number;
    getSourceActions(): number;
    getLocation(): Point;
    getCurrentDataFlavors(): DataFlavor[];
    getTransferable(): Transferable;
    getCurrentDataFlavorsAsList(): List;
    acceptDrag(i: number): void;
    rejectDrag(): void;
}

// java.awt.PageAttributes$OriginType
declare interface OriginType extends AttributeValue {
    PHYSICAL: OriginType;
    PRINTABLE: OriginType;
}

// java.nio.channels.spi.SelectorProvider
declare interface SelectorProvider {
    openDatagramChannel(): DatagramChannel;
    openDatagramChannel(protocolFamily: ProtocolFamily): DatagramChannel;
    openPipe(): Pipe;
    openServerSocketChannel(): ServerSocketChannel;
    openSocketChannel(): SocketChannel;
    openSelector(): AbstractSelector;
    inheritedChannel(): Channel;
    provider(): SelectorProvider;
}

// java.awt.dnd.DropTargetListener
declare interface DropTargetListener extends EventListener {
    dragEnter(dropTargetDragEvent: DropTargetDragEvent): void;
    dragExit(dropTargetEvent: DropTargetEvent): void;
    dragOver(dropTargetDragEvent: DropTargetDragEvent): void;
    drop(dropTargetDropEvent: DropTargetDropEvent): void;
    dropActionChanged(dropTargetDragEvent: DropTargetDragEvent): void;
}

// java.awt.PageAttributes$PrintQualityType
declare interface PrintQualityType extends AttributeValue {
    DRAFT: PrintQualityType;
    HIGH: PrintQualityType;
    NORMAL: PrintQualityType;
}

// javax.accessibility.AccessibleRelation
declare interface AccessibleRelation extends AccessibleBundle {
    getTarget(): any[];
    getKey(): string;
    setTarget(object: any): void;
    setTarget(object: any): void;
    CHILD_NODE_OF: string;
    CHILD_NODE_OF_PROPERTY: string;
    CONTROLLED_BY: string;
    CONTROLLED_BY_PROPERTY: string;
    CONTROLLER_FOR: string;
    CONTROLLER_FOR_PROPERTY: string;
    EMBEDDED_BY: string;
    EMBEDDED_BY_PROPERTY: string;
    EMBEDS: string;
    EMBEDS_PROPERTY: string;
    FLOWS_FROM: string;
    FLOWS_FROM_PROPERTY: string;
    FLOWS_TO: string;
    FLOWS_TO_PROPERTY: string;
    LABELED_BY: string;
    LABELED_BY_PROPERTY: string;
    LABEL_FOR: string;
    LABEL_FOR_PROPERTY: string;
    MEMBER_OF: string;
    MEMBER_OF_PROPERTY: string;
    PARENT_WINDOW_OF: string;
    PARENT_WINDOW_OF_PROPERTY: string;
    SUBWINDOW_OF: string;
    SUBWINDOW_OF_PROPERTY: string;
}

// java.awt.event.InputMethodEvent
declare interface InputMethodEvent extends AWTEvent {
    getCommittedCharacterCount(): number;
    getCaret(): TextHitInfo;
    getVisiblePosition(): TextHitInfo;
    getText(): AttributedCharacterIterator;
    getWhen(): number;
    CARET_POSITION_CHANGED: number;
    INPUT_METHOD_FIRST: number;
    INPUT_METHOD_LAST: number;
    INPUT_METHOD_TEXT_CHANGED: number;
}

// java.awt.event.HierarchyEvent
declare interface HierarchyEvent extends AWTEvent {
    getChanged(): Component;
    getComponent(): Component;
    getChangedParent(): Container;
    getChangeFlags(): number;
    ANCESTOR_MOVED: number;
    ANCESTOR_RESIZED: number;
    DISPLAYABILITY_CHANGED: number;
    HIERARCHY_CHANGED: number;
    HIERARCHY_FIRST: number;
    HIERARCHY_LAST: number;
    PARENT_CHANGED: number;
    SHOWING_CHANGED: number;
}

// java.awt.PageAttributes$MediaType
declare interface MediaType extends AttributeValue {
    A: MediaType;
    A0: MediaType;
    A1: MediaType;
    A10: MediaType;
    A2: MediaType;
    A3: MediaType;
    A4: MediaType;
    A5: MediaType;
    A6: MediaType;
    A7: MediaType;
    A8: MediaType;
    A9: MediaType;
    B: MediaType;
    B0: MediaType;
    B1: MediaType;
    B10: MediaType;
    B2: MediaType;
    B3: MediaType;
    B4: MediaType;
    B5: MediaType;
    B6: MediaType;
    B7: MediaType;
    B8: MediaType;
    B9: MediaType;
    C: MediaType;
    C0: MediaType;
    C1: MediaType;
    C10: MediaType;
    C2: MediaType;
    C3: MediaType;
    C4: MediaType;
    C5: MediaType;
    C6: MediaType;
    C7: MediaType;
    C8: MediaType;
    C9: MediaType;
    D: MediaType;
    E: MediaType;
    ENV_10: MediaType;
    ENV_10X13: MediaType;
    ENV_10X14: MediaType;
    ENV_10X15: MediaType;
    ENV_11: MediaType;
    ENV_12: MediaType;
    ENV_14: MediaType;
    ENV_6X9: MediaType;
    ENV_7X9: MediaType;
    ENV_9: MediaType;
    ENV_9X11: MediaType;
    ENV_9X12: MediaType;
    ENV_INVITE: MediaType;
    ENV_ITALY: MediaType;
    ENV_MONARCH: MediaType;
    ENV_PERSONAL: MediaType;
    EXECUTIVE: MediaType;
    FOLIO: MediaType;
    INVITE: MediaType;
    INVITE_ENVELOPE: MediaType;
    INVOICE: MediaType;
    ISO_2A0: MediaType;
    ISO_4A0: MediaType;
    ISO_A0: MediaType;
    ISO_A1: MediaType;
    ISO_A10: MediaType;
    ISO_A2: MediaType;
    ISO_A3: MediaType;
    ISO_A4: MediaType;
    ISO_A5: MediaType;
    ISO_A6: MediaType;
    ISO_A7: MediaType;
    ISO_A8: MediaType;
    ISO_A9: MediaType;
    ISO_B0: MediaType;
    ISO_B1: MediaType;
    ISO_B10: MediaType;
    ISO_B2: MediaType;
    ISO_B3: MediaType;
    ISO_B4: MediaType;
    ISO_B4_ENVELOPE: MediaType;
    ISO_B5: MediaType;
    ISO_B5_ENVELOPE: MediaType;
    ISO_B6: MediaType;
    ISO_B7: MediaType;
    ISO_B8: MediaType;
    ISO_B9: MediaType;
    ISO_C0: MediaType;
    ISO_C0_ENVELOPE: MediaType;
    ISO_C1: MediaType;
    ISO_C10: MediaType;
    ISO_C10_ENVELOPE: MediaType;
    ISO_C1_ENVELOPE: MediaType;
    ISO_C2: MediaType;
    ISO_C2_ENVELOPE: MediaType;
    ISO_C3: MediaType;
    ISO_C3_ENVELOPE: MediaType;
    ISO_C4: MediaType;
    ISO_C4_ENVELOPE: MediaType;
    ISO_C5: MediaType;
    ISO_C5_ENVELOPE: MediaType;
    ISO_C6: MediaType;
    ISO_C6_ENVELOPE: MediaType;
    ISO_C7: MediaType;
    ISO_C7_ENVELOPE: MediaType;
    ISO_C8: MediaType;
    ISO_C8_ENVELOPE: MediaType;
    ISO_C9: MediaType;
    ISO_C9_ENVELOPE: MediaType;
    ISO_DESIGNATED_LONG: MediaType;
    ISO_DESIGNATED_LONG_ENVELOPE: MediaType;
    ITALY: MediaType;
    ITALY_ENVELOPE: MediaType;
    JIS_B0: MediaType;
    JIS_B1: MediaType;
    JIS_B10: MediaType;
    JIS_B2: MediaType;
    JIS_B3: MediaType;
    JIS_B4: MediaType;
    JIS_B5: MediaType;
    JIS_B6: MediaType;
    JIS_B7: MediaType;
    JIS_B8: MediaType;
    JIS_B9: MediaType;
    LEDGER: MediaType;
    LEGAL: MediaType;
    LETTER: MediaType;
    MONARCH: MediaType;
    MONARCH_ENVELOPE: MediaType;
    NA_10X13_ENVELOPE: MediaType;
    NA_10X14_ENVELOPE: MediaType;
    NA_10X15_ENVELOPE: MediaType;
    NA_6X9_ENVELOPE: MediaType;
    NA_7X9_ENVELOPE: MediaType;
    NA_9X11_ENVELOPE: MediaType;
    NA_9X12_ENVELOPE: MediaType;
    NA_LEGAL: MediaType;
    NA_LETTER: MediaType;
    NA_NUMBER_10_ENVELOPE: MediaType;
    NA_NUMBER_11_ENVELOPE: MediaType;
    NA_NUMBER_12_ENVELOPE: MediaType;
    NA_NUMBER_14_ENVELOPE: MediaType;
    NA_NUMBER_9_ENVELOPE: MediaType;
    NOTE: MediaType;
    PERSONAL: MediaType;
    PERSONAL_ENVELOPE: MediaType;
    QUARTO: MediaType;
    STATEMENT: MediaType;
    TABLOID: MediaType;
}

// java.awt.datatransfer.Transferable
declare interface Transferable {
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    getTransferDataFlavors(): DataFlavor[];
    getTransferData(dataFlavor: DataFlavor): any;
}

// java.awt.PageAttributes$OrientationRequestedType
declare interface OrientationRequestedType extends AttributeValue {
    LANDSCAPE: OrientationRequestedType;
    PORTRAIT: OrientationRequestedType;
}

// java.awt.event.MouseWheelEvent
declare interface MouseWheelEvent extends MouseEvent {
    getPreciseWheelRotation(): number;
    getScrollAmount(): number;
    getScrollType(): number;
    getUnitsToScroll(): number;
    getWheelRotation(): number;
    WHEEL_BLOCK_SCROLL: number;
    WHEEL_UNIT_SCROLL: number;
}

// java.awt.SecondaryLoop
declare interface SecondaryLoop {
    enter(): boolean;
    exit(): boolean;
}

// java.awt.event.ContainerEvent
declare interface ContainerEvent extends ComponentEvent {
    getChild(): Component;
    getContainer(): Container;
    COMPONENT_ADDED: number;
    COMPONENT_REMOVED: number;
    CONTAINER_FIRST: number;
    CONTAINER_LAST: number;
}

// java.awt.font.TextHitInfo
declare interface TextHitInfo {
    equals(textHitInfo: TextHitInfo): boolean;
    isLeadingEdge(): boolean;
    getCharIndex(): number;
    getInsertionIndex(): number;
    getOffsetHit(i: number): TextHitInfo;
    getOtherHit(): TextHitInfo;
    afterOffset(i: number): TextHitInfo;
    beforeOffset(i: number): TextHitInfo;
    leading(i: number): TextHitInfo;
    trailing(i: number): TextHitInfo;
}

// java.awt.JobAttributes$DefaultSelectionType
declare interface DefaultSelectionType extends AttributeValue {
    ALL: DefaultSelectionType;
    RANGE: DefaultSelectionType;
    SELECTION: DefaultSelectionType;
}

// java.nio.channels.Selector
declare interface Selector extends Closeable {
    isOpen(): boolean;
    select(): number;
    select(l: number): number;
    selectNow(): number;
    wakeup(): Selector;
    provider(): SelectorProvider;
    keys(): Set;
    selectedKeys(): Set;
    close(): void;
    select(consumer: Consumer): number;
    select(consumer: Consumer, l: number): number;
    selectNow(consumer: Consumer): number;
    open(): Selector;
}

// java.nio.channels.SelectionKey
declare interface SelectionKey {
    isValid(): boolean;
    interestOps(): number;
    readyOps(): number;
    channel(): SelectableChannel;
    interestOps(i: number): SelectionKey;
    selector(): Selector;
    cancel(): void;
    isAcceptable(): boolean;
    isConnectable(): boolean;
    isReadable(): boolean;
    isWritable(): boolean;
    attach(object: any): any;
    attachment(): any;
    interestOpsAnd(i: number): number;
    interestOpsOr(i: number): number;
    OP_ACCEPT: number;
    OP_CONNECT: number;
    OP_READ: number;
    OP_WRITE: number;
}

// java.awt.JobAttributes$SidesType
declare interface SidesType extends AttributeValue {
    ONE_SIDED: SidesType;
    TWO_SIDED_LONG_EDGE: SidesType;
    TWO_SIDED_SHORT_EDGE: SidesType;
}

// java.awt.Menu
declare interface Menu extends MenuItem, MenuContainer, Accessible {
    isTearOff(): boolean;
    countItems(): number;
    getItemCount(): number;
    add(menuItem: MenuItem): MenuItem;
    getItem(i: number): MenuItem;
    add(s: string): void;
    addSeparator(): void;
    insert(menuItem: MenuItem, i: number): void;
    insert(s: string, i: number): void;
    insertSeparator(i: number): void;
    remove(i: number): void;
    remove(menuComponent: MenuComponent): void;
    removeAll(): void;
    removeNotify(): void;
}

// java.awt.dnd.DragGestureEvent
declare interface DragGestureEvent extends EventObject {
    getDragAction(): number;
    getComponent(): Component;
    getDragOrigin(): Point;
    getSourceAsDragGestureRecognizer(): DragGestureRecognizer;
    getDragSource(): DragSource;
    getTriggerEvent(): InputEvent;
    toArray(): any[];
    toArray(object: any): any[];
    iterator(): Iterator;
    startDrag(cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(cursor: Cursor, transferable: Transferable): void;
    startDrag(cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener): void;
}

// javax.accessibility.AccessibleBundle
declare interface AccessibleBundle {
    toDisplayString(): string;
    toDisplayString(locale: Locale): string;
}

// java.awt.PageAttributes$ColorType
declare interface ColorType extends AttributeValue {
    COLOR: ColorType;
    MONOCHROME: ColorType;
}

// java.awt.datatransfer.FlavorListener
declare interface FlavorListener extends EventListener {
    flavorsChanged(flavorEvent: FlavorEvent): void;
}

// java.awt.dnd.DropTargetContext
declare interface DropTargetContext extends Serializable {
    getComponent(): Component;
    getDropTarget(): DropTarget;
    dropComplete(b: boolean): void;
}

// java.awt.dnd.DragSourceListener
declare interface DragSourceListener extends EventListener {
    dragDropEnd(dragSourceDropEvent: DragSourceDropEvent): void;
    dragEnter(dragSourceDragEvent: DragSourceDragEvent): void;
    dragExit(dragSourceEvent: DragSourceEvent): void;
    dragOver(dragSourceDragEvent: DragSourceDragEvent): void;
    dropActionChanged(dragSourceDragEvent: DragSourceDragEvent): void;
}

// java.awt.MenuBar
declare interface MenuBar extends MenuComponent, MenuContainer, Accessible {
    countMenus(): number;
    getMenuCount(): number;
    add(menu: Menu): Menu;
    getHelpMenu(): Menu;
    getMenu(i: number): Menu;
    getShortcutMenuItem(menuShortcut: MenuShortcut): MenuItem;
    shortcuts(): Enumeration;
    addNotify(): void;
    deleteShortcut(menuShortcut: MenuShortcut): void;
    remove(i: number): void;
    remove(menuComponent: MenuComponent): void;
    setHelpMenu(menu: Menu): void;
}

// java.awt.dnd.DropTargetDropEvent
declare interface DropTargetDropEvent extends DropTargetEvent {
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    isLocalTransfer(): boolean;
    getDropAction(): number;
    getSourceActions(): number;
    getLocation(): Point;
    getCurrentDataFlavors(): DataFlavor[];
    getTransferable(): Transferable;
    getCurrentDataFlavorsAsList(): List;
    acceptDrop(i: number): void;
    dropComplete(b: boolean): void;
    rejectDrop(): void;
}

// java.awt.event.InputEvent
declare interface InputEvent extends ComponentEvent {
    isAltDown(): boolean;
    isAltGraphDown(): boolean;
    isConsumed(): boolean;
    isControlDown(): boolean;
    isMetaDown(): boolean;
    isShiftDown(): boolean;
    getModifiers(): number;
    getModifiersEx(): number;
    getWhen(): number;
    getMaskForButton(i: number): number;
    getModifiersExText(i: number): string;
    consume(): void;
    ALT_DOWN_MASK: number;
    ALT_GRAPH_DOWN_MASK: number;
    ALT_GRAPH_MASK: number;
    ALT_MASK: number;
    BUTTON1_DOWN_MASK: number;
    BUTTON1_MASK: number;
    BUTTON2_DOWN_MASK: number;
    BUTTON2_MASK: number;
    BUTTON3_DOWN_MASK: number;
    BUTTON3_MASK: number;
    CTRL_DOWN_MASK: number;
    CTRL_MASK: number;
    META_DOWN_MASK: number;
    META_MASK: number;
    SHIFT_DOWN_MASK: number;
    SHIFT_MASK: number;
}

// java.awt.JobAttributes$DestinationType
declare interface DestinationType extends AttributeValue {
    FILE: DestinationType;
    PRINTER: DestinationType;
}

// java.awt.datatransfer.FlavorMap
declare interface FlavorMap {
    getFlavorsForNatives(s: string): Map;
    getNativesForFlavors(dataFlavor: DataFlavor): Map;
}

// java.awt.event.ComponentEvent
declare interface ComponentEvent extends AWTEvent {
    getComponent(): Component;
    COMPONENT_FIRST: number;
    COMPONENT_HIDDEN: number;
    COMPONENT_LAST: number;
    COMPONENT_MOVED: number;
    COMPONENT_RESIZED: number;
    COMPONENT_SHOWN: number;
}

// java.awt.dnd.DropTargetEvent
declare interface DropTargetEvent extends EventObject {
    getDropTargetContext(): DropTargetContext;
}

// java.beans.PropertyChangeEvent
declare interface PropertyChangeEvent extends EventObject {
    getNewValue(): any;
    getOldValue(): any;
    getPropagationId(): any;
    getPropertyName(): string;
    setPropagationId(object: any): void;
}

// javax.accessibility.AccessibleState
declare interface AccessibleState extends AccessibleBundle {
    ACTIVE: AccessibleState;
    ARMED: AccessibleState;
    BUSY: AccessibleState;
    CHECKED: AccessibleState;
    COLLAPSED: AccessibleState;
    EDITABLE: AccessibleState;
    ENABLED: AccessibleState;
    EXPANDABLE: AccessibleState;
    EXPANDED: AccessibleState;
    FOCUSABLE: AccessibleState;
    FOCUSED: AccessibleState;
    HORIZONTAL: AccessibleState;
    ICONIFIED: AccessibleState;
    INDETERMINATE: AccessibleState;
    MANAGES_DESCENDANTS: AccessibleState;
    MODAL: AccessibleState;
    MULTISELECTABLE: AccessibleState;
    MULTI_LINE: AccessibleState;
    OPAQUE: AccessibleState;
    PRESSED: AccessibleState;
    RESIZABLE: AccessibleState;
    SELECTABLE: AccessibleState;
    SELECTED: AccessibleState;
    SHOWING: AccessibleState;
    SINGLE_LINE: AccessibleState;
    TRANSIENT: AccessibleState;
    TRUNCATED: AccessibleState;
    VERTICAL: AccessibleState;
    VISIBLE: AccessibleState;
}

// java.awt.event.MouseEvent
declare interface MouseEvent extends InputEvent {
    isPopupTrigger(): boolean;
    getButton(): number;
    getClickCount(): number;
    getX(): number;
    getXOnScreen(): number;
    getY(): number;
    getYOnScreen(): number;
    getLocationOnScreen(): Point;
    getPoint(): Point;
    paramString(): string;
    getMouseModifiersText(i: number): string;
    translatePoint(i: number, i: number): void;
    BUTTON1: number;
    BUTTON2: number;
    BUTTON3: number;
    MOUSE_CLICKED: number;
    MOUSE_DRAGGED: number;
    MOUSE_ENTERED: number;
    MOUSE_EXITED: number;
    MOUSE_FIRST: number;
    MOUSE_LAST: number;
    MOUSE_MOVED: number;
    MOUSE_PRESSED: number;
    MOUSE_RELEASED: number;
    MOUSE_WHEEL: number;
    NOBUTTON: number;
}

// java.text.Format$Field
declare interface Field extends Attribute {
}

// java.awt.datatransfer.ClipboardOwner
declare interface ClipboardOwner {
    lostOwnership(clipboard: Clipboard, transferable: Transferable): void;
}

// java.awt.event.FocusEvent
declare interface FocusEvent extends ComponentEvent {
    isTemporary(): boolean;
    getCause(): Cause;
    getOppositeComponent(): Component;
    FOCUS_FIRST: number;
    FOCUS_GAINED: number;
    FOCUS_LAST: number;
    FOCUS_LOST: number;
}

// java.awt.MenuShortcut
declare interface MenuShortcut extends Serializable {
    equals(menuShortcut: MenuShortcut): boolean;
    usesShiftModifier(): boolean;
    getKey(): number;
}

// java.io.Externalizable
declare interface Externalizable extends Serializable {
    readExternal(objectInput: ObjectInput): void;
    writeExternal(objectOutput: ObjectOutput): void;
}

// java.net.ProtocolFamily
declare interface ProtocolFamily {
    name(): string;
}

// java.awt.dnd.DragSourceEvent
declare interface DragSourceEvent extends EventObject {
    getX(): number;
    getY(): number;
    getLocation(): Point;
    getDragSourceContext(): DragSourceContext;
}

// java.nio.channels.spi.AbstractSelector
declare interface AbstractSelector extends Selector {
}

// java.awt.dnd.DragSourceDropEvent
declare interface DragSourceDropEvent extends DragSourceEvent {
    getDropSuccess(): boolean;
    getDropAction(): number;
}

// java.awt.dnd.DragSourceDragEvent
declare interface DragSourceDragEvent extends DragSourceEvent {
    getDropAction(): number;
    getGestureModifiers(): number;
    getGestureModifiersEx(): number;
    getTargetActions(): number;
    getUserAction(): number;
}

// java.awt.MenuItem
declare interface MenuItem extends MenuComponent, Accessible {
    isEnabled(): boolean;
    getShortcut(): MenuShortcut;
    getActionCommand(): string;
    getLabel(): string;
    getListeners(clazz: Class): EventListener[];
    getActionListeners(): ActionListener[];
    addActionListener(actionListener: ActionListener): void;
    disable(): void;
    enable(): void;
    removeActionListener(actionListener: ActionListener): void;
    setEnabled(b: boolean): void;
    setLabel(s: string): void;
    addNotify(): void;
    deleteShortcut(): void;
    enable(b: boolean): void;
    setActionCommand(s: string): void;
    setShortcut(menuShortcut: MenuShortcut): void;
}

// java.nio.channels.Pipe
declare interface Pipe {
    sink(): SinkChannel;
    source(): SourceChannel;
    open(): Pipe;
}

// java.nio.channels.DatagramChannel
declare interface DatagramChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, MulticastChannel {
    isConnected(): boolean;
    read(byteBuffer: ByteBuffer): number;
    send(byteBuffer: ByteBuffer, socketAddress: SocketAddress): number;
    write(byteBuffer: ByteBuffer): number;
    socket(): DatagramSocket;
    getLocalAddress(): SocketAddress;
    getRemoteAddress(): SocketAddress;
    receive(byteBuffer: ByteBuffer): SocketAddress;
    bind(socketAddress: SocketAddress): DatagramChannel;
    connect(socketAddress: SocketAddress): DatagramChannel;
    disconnect(): DatagramChannel;
    setOption(socketOption: SocketOption, object: any): DatagramChannel;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
    validOps(): number;
    read(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    bind(socketAddress: SocketAddress): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    open(): DatagramChannel;
    open(protocolFamily: ProtocolFamily): DatagramChannel;
}

// java.awt.datatransfer.FlavorEvent
declare interface FlavorEvent extends EventObject {
}

// java.nio.channels.Pipe$SourceChannel
declare interface SourceChannel extends AbstractSelectableChannel, ReadableByteChannel, ScatteringByteChannel {
    validOps(): number;
}

// java.nio.channels.Pipe$SinkChannel
declare interface SinkChannel extends AbstractSelectableChannel, WritableByteChannel, GatheringByteChannel {
    validOps(): number;
}

// java.awt.dnd.DragSourceContext
declare interface DragSourceContext extends DragSourceListener, DragSourceMotionListener, Serializable {
    getSourceActions(): number;
    getComponent(): Component;
    getCursor(): Cursor;
    getTransferable(): Transferable;
    getTrigger(): DragGestureEvent;
    getDragSource(): DragSource;
    addDragSourceListener(dragSourceListener: DragSourceListener): void;
    removeDragSourceListener(dragSourceListener: DragSourceListener): void;
    setCursor(cursor: Cursor): void;
    dragDropEnd(dragSourceDropEvent: DragSourceDropEvent): void;
    dragEnter(dragSourceDragEvent: DragSourceDragEvent): void;
    dragExit(dragSourceEvent: DragSourceEvent): void;
    dragMouseMoved(dragSourceDragEvent: DragSourceDragEvent): void;
    dragOver(dragSourceDragEvent: DragSourceDragEvent): void;
    dropActionChanged(dragSourceDragEvent: DragSourceDragEvent): void;
    transferablesFlavorsChanged(): void;
}

// java.awt.event.ActionListener
declare interface ActionListener extends EventListener {
    actionPerformed(actionEvent: ActionEvent): void;
}

// java.net.DatagramSocket
declare interface DatagramSocket extends Closeable {
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    getLocalPort(): number;
    getPort(): number;
    getOption(socketOption: SocketOption): any;
    setOption(socketOption: SocketOption, object: any): DatagramSocket;
    getInetAddress(): InetAddress;
    getLocalAddress(): InetAddress;
    getLocalSocketAddress(): SocketAddress;
    getRemoteSocketAddress(): SocketAddress;
    getChannel(): DatagramChannel;
    supportedOptions(): Set;
    setDatagramSocketImplFactory(datagramSocketImplFactory: DatagramSocketImplFactory): void;
    getBroadcast(): boolean;
    getReuseAddress(): boolean;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getSoTimeout(): number;
    getTrafficClass(): number;
    bind(socketAddress: SocketAddress): void;
    receive(datagramPacket: DatagramPacket): void;
    setBroadcast(b: boolean): void;
    setReceiveBufferSize(i: number): void;
    setReuseAddress(b: boolean): void;
    setSendBufferSize(i: number): void;
    setSoTimeout(i: number): void;
    setTrafficClass(i: number): void;
    close(): void;
    connect(inetAddress: InetAddress, i: number): void;
    connect(socketAddress: SocketAddress): void;
    disconnect(): void;
    send(datagramPacket: DatagramPacket): void;
}

// java.nio.channels.MulticastChannel
declare interface MulticastChannel extends NetworkChannel {
    join(inetAddress: InetAddress, networkInterface: NetworkInterface): MembershipKey;
    join(inetAddress: InetAddress, networkInterface: NetworkInterface, inetAddress: InetAddress): MembershipKey;
    close(): void;
}

// java.awt.event.ActionEvent
declare interface ActionEvent extends AWTEvent {
    getModifiers(): number;
    getActionCommand(): string;
    getWhen(): number;
    ACTION_FIRST: number;
    ACTION_LAST: number;
    ACTION_PERFORMED: number;
    ALT_MASK: number;
    CTRL_MASK: number;
    META_MASK: number;
    SHIFT_MASK: number;
}

// java.nio.channels.MembershipKey
declare interface MembershipKey {
    isValid(): boolean;
    group(): InetAddress;
    sourceAddress(): InetAddress;
    networkInterface(): NetworkInterface;
    block(inetAddress: InetAddress): MembershipKey;
    unblock(inetAddress: InetAddress): MembershipKey;
    channel(): MulticastChannel;
    drop(): void;
}

// java.net.DatagramPacket
declare interface DatagramPacket {
    getData(): number[];
    getLength(): number;
    getOffset(): number;
    getPort(): number;
    getAddress(): InetAddress;
    getSocketAddress(): SocketAddress;
    setAddress(inetAddress: InetAddress): void;
    setData(b: number): void;
    setData(b: number, i: number, i: number): void;
    setLength(i: number): void;
    setPort(i: number): void;
    setSocketAddress(socketAddress: SocketAddress): void;
}

// java.net.DatagramSocketImplFactory
declare interface DatagramSocketImplFactory {
    createDatagramSocketImpl(): DatagramSocketImpl;
}

// java.net.DatagramSocketImpl
declare interface DatagramSocketImpl extends SocketOptions {
}

