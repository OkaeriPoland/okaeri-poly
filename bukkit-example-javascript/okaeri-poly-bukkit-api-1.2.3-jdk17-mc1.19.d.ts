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

//java.awt.AWTEvent
declare interface AWTEvent extends EventObject {
    getID(): number;
    paramString(): string;
    setSource(object: any): void;
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
    RESERVED_ID_MAX: number;
    TEXT_EVENT_MASK: number;
    WINDOW_EVENT_MASK: number;
    WINDOW_FOCUS_EVENT_MASK: number;
    WINDOW_STATE_EVENT_MASK: number;
}

//java.awt.event.AWTEventListener
declare interface AWTEventListener extends EventListener {
    eventDispatched(aWTEvent: AWTEvent): void;
}

//org.bukkit.entity.AbstractArrow
declare interface AbstractArrow extends Projectile {
    getAttachedBlock(): Block;
    getDamage(): number;
    getKnockbackStrength(): number;
    getPickupStatus(): PickupStatus;
    getPierceLevel(): number;
    isCritical(): boolean;
    isInBlock(): boolean;
    isShotFromCrossbow(): boolean;
    setCritical(b: boolean): void;
    setDamage(d: number): void;
    setKnockbackStrength(i: number): void;
    setPickupStatus(pickupStatus: PickupStatus): void;
    setPierceLevel(i: number): void;
    setShotFromCrossbow(b: boolean): void;
}

//java.time.chrono.AbstractChronology
declare interface AbstractChronology extends Chronology {
    compareTo(object: any): number;
    compareTo(chronology: Chronology): number;
    resolveDate(map: Map, resolverStyle: ResolverStyle): ChronoLocalDate;
}

//java.util.AbstractCollection
declare interface AbstractCollection extends Collection {
    add(object: any): boolean;
    addAll(collection: Collection): boolean;
    clear(): void;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    isEmpty(): boolean;
    iterator(): Iterator;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    size(): number;
    toArray(): any[];
    toArray(object: any): any[];
}

//org.yaml.snakeyaml.constructor.AbstractConstruct
declare interface AbstractConstruct extends Construct {
    construct2ndStep(node: Node, object: any): void;
}

//org.bukkit.entity.AbstractHorse
declare interface AbstractHorse extends Vehicle, InventoryHolder, Tameable {
    getDomestication(): number;
    getInventory(): Inventory;
    getInventory(): AbstractHorseInventory;
    getJumpStrength(): number;
    getMaxDomestication(): number;
    getVariant(): Variant;
    isEatingHaystack(): boolean;
    setDomestication(i: number): void;
    setEatingHaystack(b: boolean): void;
    setJumpStrength(d: number): void;
    setMaxDomestication(i: number): void;
    setVariant(variant: Variant): void;
}

//org.bukkit.inventory.AbstractHorseInventory
declare interface AbstractHorseInventory extends Inventory {
    getSaddle(): ItemStack;
    setSaddle(itemStack: ItemStack): void;
}

//java.nio.channels.spi.AbstractInterruptibleChannel
declare interface AbstractInterruptibleChannel extends Channel, InterruptibleChannel {
    close(): void;
    isOpen(): boolean;
}

//java.util.AbstractList
declare interface AbstractList extends AbstractCollection, List {
    add(i: number, object: any): void;
    addAll(i: number, collection: Collection): boolean;
    equals(object: any): boolean;
    get(i: number): any;
    hashCode(): number;
    indexOf(object: any): number;
    lastIndexOf(object: any): number;
    listIterator(): ListIterator;
    listIterator(i: number): ListIterator;
    remove(i: number): any;
    set(i: number, object: any): any;
    subList(i: number, i: number): List;
}

//java.util.AbstractMap
declare interface AbstractMap extends Map {
    clear(): void;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    entrySet(): Set;
    get(object: any): any;
    isEmpty(): boolean;
    keySet(): Set;
    put(object: any, object: any): any;
    putAll(map: Map): void;
    remove(object: any): any;
    size(): number;
    values(): Collection;
}

//java.nio.channels.spi.AbstractSelectableChannel
declare interface AbstractSelectableChannel extends SelectableChannel {
}

//java.nio.channels.spi.AbstractSelector
declare interface AbstractSelector extends Selector {
}

//org.bukkit.entity.AbstractSkeleton
declare interface AbstractSkeleton extends Monster {
    getSkeletonType(): SkeletonType;
    setSkeletonType(skeletonType: SkeletonType): void;
}

//java.lang.AbstractStringBuilder
declare interface AbstractStringBuilder extends Appendable, CharSequence {
    append(s: string): string;
    append(c: string): string;
    append(object: any): string;
    append(s: string): string;
    append(s: string): string;
    append(i: number): string;
    append(l: number): string;
    append(f: number): string;
    append(d: number): string;
    append(c: string): string;
    append(b: boolean): string;
    append(s: string): Appendable;
    append(c: string): Appendable;
    append(s: string, i: number, i: number): string;
    append(c: string, i: number, i: number): string;
    append(s: string, i: number, i: number): Appendable;
    appendCodePoint(i: number): string;
    capacity(): number;
    charAt(i: number): string;
    chars(): IntStream;
    codePointAt(i: number): number;
    codePointBefore(i: number): number;
    codePointCount(i: number, i: number): number;
    codePoints(): IntStream;
    delete(i: number, i: number): string;
    deleteCharAt(i: number): string;
    ensureCapacity(i: number): void;
    getChars(i: number, i: number, c: string, i: number): void;
    indexOf(s: string): number;
    indexOf(s: string, i: number): number;
    insert(i: number, s: string): string;
    insert(i: number, s: string): string;
    insert(i: number, c: string): string;
    insert(i: number, object: any): string;
    insert(i: number, b: boolean): string;
    insert(i: number, f: number): string;
    insert(i: number, d: number): string;
    insert(i: number, l: number): string;
    insert(i: number, i: number): string;
    insert(i: number, c: string): string;
    insert(i: number, c: string, i: number, i: number): string;
    insert(i: number, s: string, i: number, i: number): string;
    lastIndexOf(s: string): number;
    lastIndexOf(s: string, i: number): number;
    length(): number;
    offsetByCodePoints(i: number, i: number): number;
    replace(i: number, i: number, s: string): string;
    reverse(): string;
    setCharAt(i: number, c: string): void;
    setLength(i: number): void;
    subSequence(i: number, i: number): string;
    substring(i: number): string;
    substring(i: number, i: number): string;
    trimToSize(): void;
}

//org.bukkit.entity.AbstractVillager
declare interface AbstractVillager extends Breedable, NPC, InventoryHolder, Merchant {
    getInventory(): Inventory;
}

//java.security.AccessControlContext
declare interface AccessControlContext {
    checkPermission(permission: Permission): void;
    getDomainCombiner(): DomainCombiner;
}

//java.lang.invoke.VarHandle$AccessMode
declare enum AccessMode {
    GET,
    SET,
    GET_VOLATILE,
    SET_VOLATILE,
    GET_ACQUIRE,
    SET_RELEASE,
    GET_OPAQUE,
    SET_OPAQUE,
    COMPARE_AND_SET,
    COMPARE_AND_EXCHANGE,
    COMPARE_AND_EXCHANGE_ACQUIRE,
    COMPARE_AND_EXCHANGE_RELEASE,
    WEAK_COMPARE_AND_SET_PLAIN,
    WEAK_COMPARE_AND_SET,
    WEAK_COMPARE_AND_SET_ACQUIRE,
    WEAK_COMPARE_AND_SET_RELEASE,
    GET_AND_SET,
    GET_AND_SET_ACQUIRE,
    GET_AND_SET_RELEASE,
    GET_AND_ADD,
    GET_AND_ADD_ACQUIRE,
    GET_AND_ADD_RELEASE,
    GET_AND_BITWISE_OR,
    GET_AND_BITWISE_OR_RELEASE,
    GET_AND_BITWISE_OR_ACQUIRE,
    GET_AND_BITWISE_AND,
    GET_AND_BITWISE_AND_RELEASE,
    GET_AND_BITWISE_AND_ACQUIRE,
    GET_AND_BITWISE_XOR,
    GET_AND_BITWISE_XOR_RELEASE,
    GET_AND_BITWISE_XOR_ACQUIRE,
}

//java.nio.file.AccessMode
declare enum AccessMode {
    READ,
    WRITE,
    EXECUTE,
}

//javax.accessibility.Accessible
declare interface Accessible {
    getAccessibleContext(): AccessibleContext;
}

//javax.accessibility.AccessibleAction
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

//javax.accessibility.AccessibleBundle
declare interface AccessibleBundle {
    toDisplayString(): string;
    toDisplayString(locale: Locale): string;
}

//javax.accessibility.AccessibleComponent
declare interface AccessibleComponent {
    addFocusListener(focusListener: FocusListener): void;
    contains(point: Point): boolean;
    getAccessibleAt(point: Point): Accessible;
    getBackground(): Color;
    getBounds(): Rectangle;
    getCursor(): Cursor;
    getFont(): Font;
    getFontMetrics(font: Font): FontMetrics;
    getForeground(): Color;
    getLocation(): Point;
    getLocationOnScreen(): Point;
    getSize(): Dimension;
    isEnabled(): boolean;
    isFocusTraversable(): boolean;
    isShowing(): boolean;
    isVisible(): boolean;
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

//javax.accessibility.AccessibleContext
declare interface AccessibleContext {
    addPropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    firePropertyChange(s: string, object: any, object: any): void;
    getAccessibleAction(): AccessibleAction;
    getAccessibleChild(i: number): Accessible;
    getAccessibleChildrenCount(): number;
    getAccessibleComponent(): AccessibleComponent;
    getAccessibleDescription(): string;
    getAccessibleEditableText(): AccessibleEditableText;
    getAccessibleIcon(): AccessibleIcon[];
    getAccessibleIndexInParent(): number;
    getAccessibleName(): string;
    getAccessibleParent(): Accessible;
    getAccessibleRelationSet(): AccessibleRelationSet;
    getAccessibleRole(): AccessibleRole;
    getAccessibleSelection(): AccessibleSelection;
    getAccessibleStateSet(): AccessibleStateSet;
    getAccessibleTable(): AccessibleTable;
    getAccessibleText(): AccessibleText;
    getAccessibleValue(): AccessibleValue;
    getLocale(): Locale;
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

//javax.accessibility.AccessibleEditableText
declare interface AccessibleEditableText extends AccessibleText {
    cut(i: number, i: number): void;
    delete(i: number, i: number): void;
    getTextRange(i: number, i: number): string;
    insertTextAtIndex(i: number, s: string): void;
    paste(i: number): void;
    replaceText(i: number, i: number, s: string): void;
    selectText(i: number, i: number): void;
    setAttributes(i: number, i: number, attributeSet: AttributeSet): void;
    setTextContents(s: string): void;
}

//javax.accessibility.AccessibleIcon
declare interface AccessibleIcon {
    getAccessibleIconDescription(): string;
    getAccessibleIconHeight(): number;
    getAccessibleIconWidth(): number;
    setAccessibleIconDescription(s: string): void;
}

//java.lang.reflect.AccessibleObject
declare interface AccessibleObject extends AnnotatedElement {
    canAccess(object: any): boolean;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    isAccessible(): boolean;
    isAnnotationPresent(clazz: Class): boolean;
    setAccessible(b: boolean): void;
    setAccessible(accessibleObject: AccessibleObject, b: boolean): void;
    trySetAccessible(): boolean;
}

//javax.accessibility.AccessibleRelation
declare interface AccessibleRelation extends AccessibleBundle {
    getKey(): string;
    getTarget(): any[];
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

//javax.accessibility.AccessibleRelationSet
declare interface AccessibleRelationSet {
    add(accessibleRelation: AccessibleRelation): boolean;
    addAll(accessibleRelation: AccessibleRelation): void;
    clear(): void;
    contains(s: string): boolean;
    get(s: string): AccessibleRelation;
    remove(accessibleRelation: AccessibleRelation): boolean;
    size(): number;
    toArray(): AccessibleRelation[];
}

//javax.accessibility.AccessibleRole
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

//javax.accessibility.AccessibleSelection
declare interface AccessibleSelection {
    addAccessibleSelection(i: number): void;
    clearAccessibleSelection(): void;
    getAccessibleSelection(i: number): Accessible;
    getAccessibleSelectionCount(): number;
    isAccessibleChildSelected(i: number): boolean;
    removeAccessibleSelection(i: number): void;
    selectAllAccessibleSelection(): void;
}

//javax.accessibility.AccessibleState
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

//javax.accessibility.AccessibleStateSet
declare interface AccessibleStateSet {
    add(accessibleState: AccessibleState): boolean;
    addAll(accessibleState: AccessibleState): void;
    clear(): void;
    contains(accessibleState: AccessibleState): boolean;
    remove(accessibleState: AccessibleState): boolean;
    toArray(): AccessibleState[];
}

//javax.accessibility.AccessibleTable
declare interface AccessibleTable {
    getAccessibleAt(i: number, i: number): Accessible;
    getAccessibleCaption(): Accessible;
    getAccessibleColumnCount(): number;
    getAccessibleColumnDescription(i: number): Accessible;
    getAccessibleColumnExtentAt(i: number, i: number): number;
    getAccessibleColumnHeader(): AccessibleTable;
    getAccessibleRowCount(): number;
    getAccessibleRowDescription(i: number): Accessible;
    getAccessibleRowExtentAt(i: number, i: number): number;
    getAccessibleRowHeader(): AccessibleTable;
    getAccessibleSummary(): Accessible;
    getSelectedAccessibleColumns(): number[];
    getSelectedAccessibleRows(): number[];
    isAccessibleColumnSelected(i: number): boolean;
    isAccessibleRowSelected(i: number): boolean;
    isAccessibleSelected(i: number, i: number): boolean;
    setAccessibleCaption(accessible: Accessible): void;
    setAccessibleColumnDescription(i: number, accessible: Accessible): void;
    setAccessibleColumnHeader(accessibleTable: AccessibleTable): void;
    setAccessibleRowDescription(i: number, accessible: Accessible): void;
    setAccessibleRowHeader(accessibleTable: AccessibleTable): void;
    setAccessibleSummary(accessible: Accessible): void;
}

//javax.accessibility.AccessibleText
declare interface AccessibleText {
    getAfterIndex(i: number, i: number): string;
    getAtIndex(i: number, i: number): string;
    getBeforeIndex(i: number, i: number): string;
    getCaretPosition(): number;
    getCharCount(): number;
    getCharacterAttribute(i: number): AttributeSet;
    getCharacterBounds(i: number): Rectangle;
    getIndexAtPoint(point: Point): number;
    getSelectedText(): string;
    getSelectionEnd(): number;
    getSelectionStart(): number;
    CHARACTER: number;
    SENTENCE: number;
    WORD: number;
}

//javax.accessibility.AccessibleValue
declare interface AccessibleValue {
    getCurrentAccessibleValue(): Number;
    getMaximumAccessibleValue(): Number;
    getMinimumAccessibleValue(): Number;
    setCurrentAccessibleValue(number: Number): boolean;
}

//org.bukkit.event.block.Action
declare enum Action {
    LEFT_CLICK_BLOCK,
    RIGHT_CLICK_BLOCK,
    LEFT_CLICK_AIR,
    RIGHT_CLICK_AIR,
    PHYSICAL,
}

//org.bukkit.event.entity.EntityPotionEffectEvent$Action
declare enum Action {
    ADDED,
    CHANGED,
    CLEARED,
    REMOVED,
}

//net.md_5.bungee.api.chat.HoverEvent$Action
declare enum Action {
    SHOW_TEXT,
    SHOW_ITEM,
    SHOW_ENTITY,
    SHOW_ACHIEVEMENT,
}

//net.md_5.bungee.api.chat.ClickEvent$Action
declare enum Action {
    OPEN_URL,
    OPEN_FILE,
    RUN_COMMAND,
    SUGGEST_COMMAND,
    CHANGE_PAGE,
    COPY_TO_CLIPBOARD,
}

//java.awt.event.ActionEvent
declare interface ActionEvent extends AWTEvent {
    getActionCommand(): string;
    getModifiers(): number;
    getWhen(): number;
    ACTION_FIRST: number;
    ACTION_LAST: number;
    ACTION_PERFORMED: number;
    ALT_MASK: number;
    CTRL_MASK: number;
    META_MASK: number;
    SHIFT_MASK: number;
}

//java.awt.event.ActionListener
declare interface ActionListener extends EventListener {
    actionPerformed(actionEvent: ActionEvent): void;
}

//org.bukkit.advancement.Advancement
declare interface Advancement extends Keyed {
    getCriteria(): Collection;
    getDisplay(): AdvancementDisplay;
}

//org.bukkit.advancement.AdvancementDisplay
declare interface AdvancementDisplay {
    getDescription(): string;
    getIcon(): ItemStack;
    getTitle(): string;
    getType(): AdvancementDisplayType;
    getX(): number;
    getY(): number;
    isHidden(): boolean;
    shouldAnnounceChat(): boolean;
    shouldShowToast(): boolean;
}

//org.bukkit.advancement.AdvancementDisplayType
declare enum AdvancementDisplayType {
    TASK,
    CHALLENGE,
    GOAL,
}

//org.bukkit.advancement.AdvancementProgress
declare interface AdvancementProgress {
    awardCriteria(s: string): boolean;
    getAdvancement(): Advancement;
    getAwardedCriteria(): Collection;
    getDateAwarded(s: string): Date;
    getRemainingCriteria(): Collection;
    isDone(): boolean;
    revokeCriteria(s: string): boolean;
}

//java.awt.geom.AffineTransform
declare interface AffineTransform extends Cloneable, Serializable {
    concatenate(affineTransform: AffineTransform): void;
    createInverse(): AffineTransform;
    createTransformedShape(shape: Shape): Shape;
    deltaTransform(point2D: Point2D, point2D: Point2D): Point2D;
    deltaTransform(d: number, i: number, d: number, i: number, i: number): void;
    getDeterminant(): number;
    getMatrix(d: number): void;
    getQuadrantRotateInstance(i: number): AffineTransform;
    getQuadrantRotateInstance(i: number, d: number, d: number): AffineTransform;
    getRotateInstance(d: number): AffineTransform;
    getRotateInstance(d: number, d: number): AffineTransform;
    getRotateInstance(d: number, d: number, d: number): AffineTransform;
    getRotateInstance(d: number, d: number, d: number, d: number): AffineTransform;
    getScaleInstance(d: number, d: number): AffineTransform;
    getScaleX(): number;
    getScaleY(): number;
    getShearInstance(d: number, d: number): AffineTransform;
    getShearX(): number;
    getShearY(): number;
    getTranslateInstance(d: number, d: number): AffineTransform;
    getTranslateX(): number;
    getTranslateY(): number;
    getType(): number;
    inverseTransform(point2D: Point2D, point2D: Point2D): Point2D;
    inverseTransform(d: number, i: number, d: number, i: number, i: number): void;
    invert(): void;
    isIdentity(): boolean;
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
    setTransform(affineTransform: AffineTransform): void;
    setTransform(d: number, d: number, d: number, d: number, d: number, d: number): void;
    shear(d: number, d: number): void;
    transform(point2D: Point2D, point2D: Point2D): Point2D;
    transform(f: number, i: number, d: number, i: number, i: number): void;
    transform(d: number, i: number, d: number, i: number, i: number): void;
    transform(f: number, i: number, f: number, i: number, i: number): void;
    transform(point2D: Point2D, i: number, point2D: Point2D, i: number, i: number): void;
    transform(d: number, i: number, f: number, i: number, i: number): void;
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

//org.bukkit.entity.Ageable
declare interface Ageable extends Creature {
    canBreed(): boolean;
    getAge(): number;
    getAgeLock(): boolean;
    isAdult(): boolean;
    setAdult(): void;
    setAge(i: number): void;
    setAgeLock(b: boolean): void;
    setBaby(): void;
    setBreed(b: boolean): void;
}

//org.bukkit.block.data.Ageable
declare interface Ageable extends BlockData {
    getAge(): number;
    getMaximumAge(): number;
    setAge(i: number): void;
}

//java.security.AlgorithmConstraints
declare interface AlgorithmConstraints {
    permits(set: Set, key: Key): boolean;
    permits(set: Set, s: string, algorithmParameters: AlgorithmParameters): boolean;
    permits(set: Set, s: string, key: Key, algorithmParameters: AlgorithmParameters): boolean;
}

//java.security.spec.AlgorithmParameterSpec
declare interface AlgorithmParameterSpec {
}

//java.security.AlgorithmParameters
declare interface AlgorithmParameters {
    getAlgorithm(): string;
    getEncoded(): number[];
    getEncoded(s: string): number[];
    getInstance(s: string): AlgorithmParameters;
    getInstance(s: string, provider: Provider): AlgorithmParameters;
    getInstance(s: string, s: string): AlgorithmParameters;
    getParameterSpec(clazz: Class): AlgorithmParameterSpec;
    getProvider(): Provider;
    init(b: number): void;
    init(algorithmParameterSpec: AlgorithmParameterSpec): void;
    init(b: number, s: string): void;
}

//org.bukkit.entity.Allay
declare interface Allay extends Creature, InventoryHolder {
}

//org.bukkit.entity.Ambient
declare interface Ambient extends Mob {
}

//org.bukkit.block.data.type.AmethystCluster
declare interface AmethystCluster extends Directional, Waterlogged {
}

//org.bukkit.block.data.AnaloguePowerable
declare interface AnaloguePowerable extends BlockData {
    getMaximumPower(): number;
    getPower(): number;
    setPower(i: number): void;
}

//org.bukkit.entity.AnimalTamer
declare interface AnimalTamer {
    getName(): string;
    getUniqueId(): UUID;
}

//org.bukkit.entity.Animals
declare interface Animals extends Breedable {
    getBreedCause(): UUID;
    getLoveModeTicks(): number;
    isBreedItem(itemStack: ItemStack): boolean;
    isBreedItem(material: Material): boolean;
    isLoveMode(): boolean;
    setBreedCause(uUID: UUID): void;
    setLoveModeTicks(i: number): void;
}

//java.lang.reflect.AnnotatedElement
declare interface AnnotatedElement {
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    isAnnotationPresent(clazz: Class): boolean;
}

//java.lang.reflect.AnnotatedType
declare interface AnnotatedType extends AnnotatedElement {
    getAnnotatedOwnerType(): AnnotatedType;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getType(): Type;
}

//java.lang.annotation.Annotation
declare interface Annotation {
    annotationType(): Class;
    equals(object: any): boolean;
    hashCode(): number;
    toString(): string;
}

//org.bukkit.inventory.AnvilInventory
declare interface AnvilInventory extends Inventory {
    getMaximumRepairCost(): number;
    getRenameText(): string;
    getRepairCost(): number;
    getRepairCostAmount(): number;
    setMaximumRepairCost(i: number): void;
    setRepairCost(i: number): void;
    setRepairCostAmount(i: number): void;
}

//java.lang.Appendable
declare interface Appendable {
    append(s: string): Appendable;
    append(c: string): Appendable;
    append(s: string, i: number, i: number): Appendable;
}

//org.bukkit.entity.AreaEffectCloud
declare interface AreaEffectCloud extends Entity {
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    clearCustomEffects(): void;
    getBasePotionData(): PotionData;
    getColor(): Color;
    getCustomEffects(): List;
    getDuration(): number;
    getDurationOnUse(): number;
    getParticle(): Particle;
    getRadius(): number;
    getRadiusOnUse(): number;
    getRadiusPerTick(): number;
    getReapplicationDelay(): number;
    getSource(): ProjectileSource;
    getWaitTime(): number;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
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

//org.bukkit.event.entity.AreaEffectCloudApplyEvent
declare interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
    getAffectedEntities(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.entity.ArmorStand
declare interface ArmorStand extends LivingEntity {
    addEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): void;
    getBodyPose(): EulerAngle;
    getBoots(): ItemStack;
    getChestplate(): ItemStack;
    getHeadPose(): EulerAngle;
    getHelmet(): ItemStack;
    getItemInHand(): ItemStack;
    getLeftArmPose(): EulerAngle;
    getLeftLegPose(): EulerAngle;
    getLeggings(): ItemStack;
    getRightArmPose(): EulerAngle;
    getRightLegPose(): EulerAngle;
    hasArms(): boolean;
    hasBasePlate(): boolean;
    hasEquipmentLock(equipmentSlot: EquipmentSlot, lockType: LockType): boolean;
    isMarker(): boolean;
    isSmall(): boolean;
    isVisible(): boolean;
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

//java.util.ArrayList
declare interface ArrayList extends AbstractList, List, RandomAccess, Cloneable, Serializable {
    addAll(collection: Collection): boolean;
    clone(): any;
    contains(object: any): boolean;
    ensureCapacity(i: number): void;
    forEach(consumer: Consumer): void;
    isEmpty(): boolean;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    removeIf(predicate: Predicate): boolean;
    replaceAll(func: UnaryOperator): void;
    retainAll(collection: Collection): boolean;
    size(): number;
    sort(comparator: Comparator): void;
    spliterator(): Spliterator;
    toArray(): any[];
    toArray(object: any): any[];
    trimToSize(): void;
}

//org.bukkit.entity.Arrow
declare interface Arrow extends AbstractArrow {
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    clearCustomEffects(): void;
    getBasePotionData(): PotionData;
    getColor(): Color;
    getCustomEffects(): List;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    setBasePotionData(potionData: PotionData): void;
    setColor(color: Color): void;
}

//org.bukkit.event.entity.ArrowBodyCountChangeEvent
declare interface ArrowBodyCountChangeEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewAmount(): number;
    getOldAmount(): number;
    isCancelled(): boolean;
    isReset(): boolean;
    setCancelled(b: boolean): void;
    setNewAmount(i: number): void;
}

//org.bukkit.Art
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
    EARTH,
    WIND,
    WATER,
    FIRE,
}

//org.bukkit.event.player.AsyncPlayerChatEvent
declare interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
    getFormat(): string;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMessage(): string;
    getRecipients(): Set;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setFormat(s: string): void;
    setMessage(s: string): void;
}

//org.bukkit.event.player.AsyncPlayerPreLoginEvent
declare interface AsyncPlayerPreLoginEvent extends Event {
    allow(): void;
    disallow(result: Result, s: string): void;
    disallow(result: Result, s: string): void;
    getAddress(): InetAddress;
    getHandlerList(): HandlerList;
    getKickMessage(): string;
    getLoginResult(): Result;
    getName(): string;
    getResult(): Result;
    getUniqueId(): UUID;
    setKickMessage(s: string): void;
    setLoginResult(result: Result): void;
    setResult(result: Result): void;
}

//java.nio.channels.AsynchronousChannel
declare interface AsynchronousChannel extends Channel {
    close(): void;
}

//java.nio.channels.AsynchronousFileChannel
declare interface AsynchronousFileChannel extends AsynchronousChannel {
    force(b: boolean): void;
    lock(): Future;
    lock(object: any, completionHandler: CompletionHandler): void;
    lock(l: number, l: number, b: boolean): Future;
    lock(l: number, l: number, b: boolean, object: any, completionHandler: CompletionHandler): void;
    open(path: Path, openOption: OpenOption): AsynchronousFileChannel;
    open(path: Path, set: Set, executorService: ExecutorService, fileAttribute: FileAttribute): AsynchronousFileChannel;
    read(byteBuffer: ByteBuffer, l: number): Future;
    read(byteBuffer: ByteBuffer, l: number, object: any, completionHandler: CompletionHandler): void;
    size(): number;
    truncate(l: number): AsynchronousFileChannel;
    tryLock(): FileLock;
    tryLock(l: number, l: number, b: boolean): FileLock;
    write(byteBuffer: ByteBuffer, l: number): Future;
    write(byteBuffer: ByteBuffer, l: number, object: any, completionHandler: CompletionHandler): void;
}

//org.bukkit.block.data.Attachable
declare interface Attachable extends BlockData {
    isAttached(): boolean;
    setAttached(b: boolean): void;
}

//org.bukkit.material.Attachable
declare interface Attachable extends Directional {
    getAttachedFace(): BlockFace;
}

//org.bukkit.block.data.FaceAttachable$AttachedFace
declare enum AttachedFace {
    FLOOR,
    WALL,
    CEILING,
}

//org.bukkit.block.data.type.Bell$Attachment
declare enum Attachment {
    FLOOR,
    CEILING,
    SINGLE_WALL,
    DOUBLE_WALL,
}

//org.bukkit.attribute.Attributable
declare interface Attributable {
    getAttribute(attribute: Attribute): AttributeInstance;
}

//org.bukkit.attribute.Attribute
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

//java.text.AttributedCharacterIterator$Attribute
declare interface Attribute extends Serializable {
    INPUT_METHOD_SEGMENT: Attribute;
    LANGUAGE: Attribute;
    READING: Attribute;
}

//org.bukkit.attribute.AttributeInstance
declare interface AttributeInstance {
    addModifier(attributeModifier: AttributeModifier): void;
    getAttribute(): Attribute;
    getBaseValue(): number;
    getDefaultValue(): number;
    getModifiers(): Collection;
    getValue(): number;
    removeModifier(attributeModifier: AttributeModifier): void;
    setBaseValue(d: number): void;
}

//org.bukkit.attribute.AttributeModifier
declare interface AttributeModifier extends ConfigurationSerializable {
    deserialize(map: Map): AttributeModifier;
    getAmount(): number;
    getName(): string;
    getOperation(): Operation;
    getSlot(): EquipmentSlot;
    getUniqueId(): UUID;
    serialize(): Map;
}

//javax.swing.text.AttributeSet
declare interface AttributeSet {
    containsAttribute(object: any, object: any): boolean;
    containsAttributes(attributeSet: AttributeSet): boolean;
    copyAttributes(): AttributeSet;
    getAttribute(object: any): any;
    getAttributeCount(): number;
    getAttributeNames(): Enumeration;
    getResolveParent(): AttributeSet;
    isDefined(object: any): boolean;
    isEqual(attributeSet: AttributeSet): boolean;
    NameAttribute: any;
    ResolveAttribute: any;
}

//java.awt.AttributeValue
declare interface AttributeValue {
}

//java.nio.file.attribute.AttributeView
declare interface AttributeView {
    name(): string;
}

//java.text.AttributedCharacterIterator
declare interface AttributedCharacterIterator extends CharacterIterator {
    getAllAttributeKeys(): Set;
    getAttribute(attribute: Attribute): any;
    getAttributes(): Map;
    getRunLimit(): number;
    getRunLimit(set: Set): number;
    getRunLimit(attribute: Attribute): number;
    getRunStart(): number;
    getRunStart(set: Set): number;
    getRunStart(attribute: Attribute): number;
}

//java.net.Authenticator
declare interface Authenticator {
    getDefault(): Authenticator;
    requestPasswordAuthentication(inetAddress: InetAddress, i: number, s: string, s: string, s: string): PasswordAuthentication;
    requestPasswordAuthentication(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string): PasswordAuthentication;
    requestPasswordAuthentication(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    requestPasswordAuthentication(authenticator: Authenticator, s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    requestPasswordAuthenticationInstance(s: string, inetAddress: InetAddress, i: number, s: string, s: string, s: string, uRL: URL, requestorType: RequestorType): PasswordAuthentication;
    setDefault(authenticator: Authenticator): void;
}

//org.bukkit.plugin.AuthorNagException
declare interface AuthorNagException extends RuntimeException {
    getMessage(): string;
}

//java.lang.AutoCloseable
declare interface AutoCloseable {
    close(): void;
}

//org.bukkit.Axis
declare enum Axis {
    X,
    Y,
    Z,
}

//org.bukkit.entity.Axolotl
declare interface Axolotl extends Animals {
    getVariant(): Variant;
    isPlayingDead(): boolean;
    setPlayingDead(b: boolean): void;
    setVariant(variant: Variant): void;
}

//org.bukkit.inventory.meta.AxolotlBucketMeta
declare interface AxolotlBucketMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): AxolotlBucketMeta;
    getVariant(): Variant;
    hasVariant(): boolean;
    setVariant(variant: Variant): void;
}

//org.bukkit.block.data.type.Bamboo
declare interface Bamboo extends Ageable, Sapling {
    getLeaves(): Leaves;
    setLeaves(leaves: Leaves): void;
}

//org.bukkit.BanEntry
declare interface BanEntry {
    getCreated(): Date;
    getExpiration(): Date;
    getReason(): string;
    getSource(): string;
    getTarget(): string;
    save(): void;
    setCreated(date: Date): void;
    setExpiration(date: Date): void;
    setReason(s: string): void;
    setSource(s: string): void;
}

//org.bukkit.BanList
declare interface BanList {
    addBan(s: string, s: string, date: Date, s: string): BanEntry;
    getBanEntries(): Set;
    getBanEntry(s: string): BanEntry;
    isBanned(s: string): boolean;
    pardon(s: string): void;
}

//org.bukkit.block.Banner
declare interface Banner extends TileState {
    addPattern(pattern: Pattern): void;
    getBaseColor(): DyeColor;
    getPattern(i: number): Pattern;
    getPatterns(): List;
    numberOfPatterns(): number;
    removePattern(i: number): Pattern;
    setBaseColor(dyeColor: DyeColor): void;
    setPattern(i: number, pattern: Pattern): void;
    setPatterns(list: List): void;
}

//org.bukkit.material.Banner
declare interface Banner extends MaterialData, Attachable {
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    isWallBanner(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.inventory.meta.BannerMeta
declare interface BannerMeta extends ItemMeta {
    addPattern(pattern: Pattern): void;
    getBaseColor(): DyeColor;
    getPattern(i: number): Pattern;
    getPatterns(): List;
    numberOfPatterns(): number;
    removePattern(i: number): Pattern;
    setBaseColor(dyeColor: DyeColor): void;
    setPattern(i: number, pattern: Pattern): void;
    setPatterns(list: List): void;
}

//org.bukkit.boss.BarColor
declare enum BarColor {
    PINK,
    BLUE,
    RED,
    GREEN,
    YELLOW,
    PURPLE,
    WHITE,
}

//org.bukkit.boss.BarFlag
declare enum BarFlag {
    DARKEN_SKY,
    PLAY_BOSS_MUSIC,
    CREATE_FOG,
}

//org.bukkit.boss.BarStyle
declare enum BarStyle {
    SOLID,
    SEGMENTED_6,
    SEGMENTED_10,
    SEGMENTED_12,
    SEGMENTED_20,
}

//org.bukkit.block.Barrel
declare interface Barrel extends Container, Lootable, Lidded {
}

//net.md_5.bungee.api.chat.BaseComponent
declare interface BaseComponent {
    addExtra(s: string): void;
    addExtra(baseComponent: BaseComponent): void;
    copyFormatting(baseComponent: BaseComponent): void;
    copyFormatting(baseComponent: BaseComponent, b: boolean): void;
    copyFormatting(baseComponent: BaseComponent, formatRetention: FormatRetention, b: boolean): void;
    duplicate(): BaseComponent;
    duplicateWithoutFormatting(): BaseComponent;
    getClickEvent(): ClickEvent;
    getColor(): ChatColor;
    getColorRaw(): ChatColor;
    getExtra(): List;
    getFont(): string;
    getFontRaw(): string;
    getHoverEvent(): HoverEvent;
    getInsertion(): string;
    hasFormatting(): boolean;
    isBold(): boolean;
    isBoldRaw(): Boolean;
    isItalic(): boolean;
    isItalicRaw(): Boolean;
    isObfuscated(): boolean;
    isObfuscatedRaw(): Boolean;
    isStrikethrough(): boolean;
    isStrikethroughRaw(): Boolean;
    isUnderlined(): boolean;
    isUnderlinedRaw(): Boolean;
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
    toLegacyText(): string;
    toLegacyText(baseComponent: BaseComponent): string;
    toPlainText(): string;
    toPlainText(baseComponent: BaseComponent): string;
}

//org.yaml.snakeyaml.constructor.BaseConstructor
declare interface BaseConstructor {
    addTypeDescription(typeDescription: TypeDescription): TypeDescription;
    checkData(): boolean;
    getData(): any;
    getPropertyUtils(): PropertyUtils;
    getSingleData(clazz: Class): any;
    isAllowDuplicateKeys(): boolean;
    isEnumCaseSensitive(): boolean;
    isExplicitPropertyUtils(): boolean;
    isWrappedToRootException(): boolean;
    setAllowDuplicateKeys(b: boolean): void;
    setComposer(composer: Composer): void;
    setEnumCaseSensitive(b: boolean): void;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
    setWrappedToRootException(b: boolean): void;
}

//org.yaml.snakeyaml.representer.BaseRepresenter
declare interface BaseRepresenter {
    getDefaultFlowStyle(): FlowStyle;
    getDefaultScalarStyle(): ScalarStyle;
    getPropertyUtils(): PropertyUtils;
    isExplicitPropertyUtils(): boolean;
    represent(object: any): Node;
    setDefaultFlowStyle(flowStyle: FlowStyle): void;
    setDefaultScalarStyle(scalarStyle: ScalarStyle): void;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
}

//java.util.stream.BaseStream
declare interface BaseStream extends AutoCloseable {
    close(): void;
    isParallel(): boolean;
    iterator(): Iterator;
    onClose(runnable: Runnable): BaseStream;
    parallel(): BaseStream;
    sequential(): BaseStream;
    spliterator(): Spliterator;
    unordered(): BaseStream;
}

//java.awt.Component$BaselineResizeBehavior
declare enum BaselineResizeBehavior {
    CONSTANT_ASCENT,
    CONSTANT_DESCENT,
    CENTER_OFFSET,
    OTHER,
}

//java.nio.file.attribute.BasicFileAttributes
declare interface BasicFileAttributes {
    creationTime(): FileTime;
    fileKey(): any;
    isDirectory(): boolean;
    isOther(): boolean;
    isRegularFile(): boolean;
    isSymbolicLink(): boolean;
    lastAccessTime(): FileTime;
    lastModifiedTime(): FileTime;
    size(): number;
}

//java.security.BasicPermission
declare interface BasicPermission extends Permission, Serializable {
}

//org.bukkit.entity.Bat
declare interface Bat extends Ambient {
    isAwake(): boolean;
    setAwake(b: boolean): void;
}

//org.bukkit.event.entity.BatToggleSleepEvent
declare interface BatToggleSleepEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isAwake(): boolean;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.block.Beacon
declare interface Beacon extends TileState, Lockable, Nameable {
    getEntitiesInRange(): Collection;
    getPrimaryEffect(): PotionEffect;
    getSecondaryEffect(): PotionEffect;
    getTier(): number;
    setPrimaryEffect(potionEffectType: PotionEffectType): void;
    setSecondaryEffect(potionEffectType: PotionEffectType): void;
}

//org.bukkit.inventory.BeaconInventory
declare interface BeaconInventory extends Inventory {
    getItem(): ItemStack;
    setItem(itemStack: ItemStack): void;
}

//org.yaml.snakeyaml.introspector.BeanAccess
declare enum BeanAccess {
    DEFAULT,
    FIELD,
    PROPERTY,
}

//org.bukkit.block.data.type.Bed
declare interface Bed extends Directional {
    getPart(): Part;
    isOccupied(): boolean;
    setPart(part: Part): void;
}

//org.bukkit.block.Bed
declare interface Bed extends TileState, Colorable {
}

//org.bukkit.material.Bed
declare interface Bed extends MaterialData, Directional {
    getFacing(): BlockFace;
    isHeadOfBed(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setHeadOfBed(b: boolean): void;
}

//org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult
declare enum BedEnterResult {
    OK,
    NOT_POSSIBLE_HERE,
    NOT_POSSIBLE_NOW,
    TOO_FAR_AWAY,
    NOT_SAFE,
    OTHER_PROBLEM,
}

//org.bukkit.entity.Bee
declare interface Bee extends Animals {
    getAnger(): number;
    getCannotEnterHiveTicks(): number;
    getFlower(): Location;
    getHive(): Location;
    hasNectar(): boolean;
    hasStung(): boolean;
    setAnger(i: number): void;
    setCannotEnterHiveTicks(i: number): void;
    setFlower(location: Location): void;
    setHasNectar(b: boolean): void;
    setHasStung(b: boolean): void;
    setHive(location: Location): void;
}

//org.bukkit.block.data.type.Beehive
declare interface Beehive extends Directional {
    getHoneyLevel(): number;
    getMaximumHoneyLevel(): number;
    setHoneyLevel(i: number): void;
}

//org.bukkit.block.Beehive
declare interface Beehive extends EntityBlockStorage {
    getFlower(): Location;
    isSedated(): boolean;
    setFlower(location: Location): void;
}

//org.bukkit.block.Bell
declare interface Bell extends TileState {
}

//org.bukkit.block.data.type.Bell
declare interface Bell extends Directional, Powerable {
    getAttachment(): Attachment;
    setAttachment(attachment: Attachment): void;
}

//java.util.function.BiConsumer
declare interface BiConsumer {
    accept(object: any, object: any): void;
    andThen(biConsumer: BiConsumer): BiConsumer;
}

//java.util.function.BiFunction
declare interface BiFunction {
    andThen(func: Function): BiFunction;
    apply(object: any, object: any): any;
}

//java.util.function.BiPredicate
declare interface BiPredicate {
    and(biPredicate: BiPredicate): BiPredicate;
    negate(): BiPredicate;
    or(biPredicate: BiPredicate): BiPredicate;
    test(object: any, object: any): boolean;
}

//org.bukkit.block.data.type.BigDripleaf
declare interface BigDripleaf extends Dripleaf {
    getTilt(): Tilt;
    setTilt(tilt: Tilt): void;
}

//java.math.BigInteger
declare interface BigInteger extends Number, Comparable {
    abs(): BigInteger;
    add(bigInteger: BigInteger): BigInteger;
    and(bigInteger: BigInteger): BigInteger;
    andNot(bigInteger: BigInteger): BigInteger;
    bitCount(): number;
    bitLength(): number;
    byteValueExact(): number;
    clearBit(i: number): BigInteger;
    compareTo(bigInteger: BigInteger): number;
    compareTo(object: any): number;
    divide(bigInteger: BigInteger): BigInteger;
    divideAndRemainder(bigInteger: BigInteger): BigInteger[];
    equals(object: any): boolean;
    flipBit(i: number): BigInteger;
    gcd(bigInteger: BigInteger): BigInteger;
    getLowestSetBit(): number;
    hashCode(): number;
    intValueExact(): number;
    isProbablePrime(i: number): boolean;
    longValueExact(): number;
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
    probablePrime(i: number, random: Random): BigInteger;
    remainder(bigInteger: BigInteger): BigInteger;
    setBit(i: number): BigInteger;
    shiftLeft(i: number): BigInteger;
    shiftRight(i: number): BigInteger;
    shortValueExact(): number;
    signum(): number;
    sqrt(): BigInteger;
    sqrtAndRemainder(): BigInteger[];
    subtract(bigInteger: BigInteger): BigInteger;
    testBit(i: number): boolean;
    toByteArray(): number[];
    toString(): string;
    toString(i: number): string;
    valueOf(l: number): BigInteger;
    xor(bigInteger: BigInteger): BigInteger;
    ONE: BigInteger;
    TEN: BigInteger;
    TWO: BigInteger;
    ZERO: BigInteger;
}

//java.util.function.BinaryOperator
declare interface BinaryOperator extends BiFunction {
    maxBy(comparator: Comparator): BinaryOperator;
    minBy(comparator: Comparator): BinaryOperator;
}

//org.bukkit.block.Biome
declare enum Biome {
    OCEAN,
    PLAINS,
    DESERT,
    WINDSWEPT_HILLS,
    FOREST,
    TAIGA,
    SWAMP,
    MANGROVE_SWAMP,
    RIVER,
    NETHER_WASTES,
    THE_END,
    FROZEN_OCEAN,
    FROZEN_RIVER,
    SNOWY_PLAINS,
    MUSHROOM_FIELDS,
    BEACH,
    JUNGLE,
    SPARSE_JUNGLE,
    DEEP_OCEAN,
    STONY_SHORE,
    SNOWY_BEACH,
    BIRCH_FOREST,
    DARK_FOREST,
    SNOWY_TAIGA,
    OLD_GROWTH_PINE_TAIGA,
    WINDSWEPT_FOREST,
    SAVANNA,
    SAVANNA_PLATEAU,
    BADLANDS,
    WOODED_BADLANDS,
    SMALL_END_ISLANDS,
    END_MIDLANDS,
    END_HIGHLANDS,
    END_BARRENS,
    WARM_OCEAN,
    LUKEWARM_OCEAN,
    COLD_OCEAN,
    DEEP_LUKEWARM_OCEAN,
    DEEP_COLD_OCEAN,
    DEEP_FROZEN_OCEAN,
    THE_VOID,
    SUNFLOWER_PLAINS,
    WINDSWEPT_GRAVELLY_HILLS,
    FLOWER_FOREST,
    ICE_SPIKES,
    OLD_GROWTH_BIRCH_FOREST,
    OLD_GROWTH_SPRUCE_TAIGA,
    WINDSWEPT_SAVANNA,
    ERODED_BADLANDS,
    BAMBOO_JUNGLE,
    SOUL_SAND_VALLEY,
    CRIMSON_FOREST,
    WARPED_FOREST,
    BASALT_DELTAS,
    DRIPSTONE_CAVES,
    LUSH_CAVES,
    DEEP_DARK,
    MEADOW,
    GROVE,
    SNOWY_SLOPES,
    FROZEN_PEAKS,
    JAGGED_PEAKS,
    STONY_PEAKS,
    CUSTOM,
}

//org.bukkit.generator.ChunkGenerator$BiomeGrid
declare interface BiomeGrid {
    getBiome(i: number, i: number): Biome;
    getBiome(i: number, i: number, i: number): Biome;
    setBiome(i: number, i: number, biome: Biome): void;
    setBiome(i: number, i: number, i: number, biome: Biome): void;
}

//org.bukkit.generator.BiomeProvider
declare interface BiomeProvider {
    getBiome(worldInfo: WorldInfo, i: number, i: number, i: number): Biome;
    getBiomes(worldInfo: WorldInfo): List;
}

//org.bukkit.block.data.Bisected
declare interface Bisected extends BlockData {
    getHalf(): Half;
    setHalf(half: Half): void;
}

//org.bukkit.block.BlastFurnace
declare interface BlastFurnace extends Furnace {
}

//org.bukkit.inventory.BlastingRecipe
declare interface BlastingRecipe extends CookingRecipe {
}

//org.bukkit.entity.Blaze
declare interface Blaze extends Monster {
}

//org.bukkit.block.Block
declare interface Block extends Metadatable {
    applyBoneMeal(blockFace: BlockFace): boolean;
    breakNaturally(): boolean;
    breakNaturally(itemStack: ItemStack): boolean;
    canPlace(blockData: BlockData): boolean;
    getBiome(): Biome;
    getBlockData(): BlockData;
    getBlockPower(): number;
    getBlockPower(blockFace: BlockFace): number;
    getBoundingBox(): BoundingBox;
    getBreakSpeed(player: Player): number;
    getChunk(): Chunk;
    getCollisionShape(): VoxelShape;
    getData(): number;
    getDrops(): Collection;
    getDrops(itemStack: ItemStack): Collection;
    getDrops(itemStack: ItemStack, entity: Entity): Collection;
    getFace(block: Block): BlockFace;
    getHumidity(): number;
    getLightFromBlocks(): number;
    getLightFromSky(): number;
    getLightLevel(): number;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getPistonMoveReaction(): PistonMoveReaction;
    getRelative(blockFace: BlockFace): Block;
    getRelative(blockFace: BlockFace, i: number): Block;
    getRelative(i: number, i: number, i: number): Block;
    getState(): BlockState;
    getTemperature(): number;
    getType(): Material;
    getWorld(): World;
    getX(): number;
    getY(): number;
    getZ(): number;
    isBlockFaceIndirectlyPowered(blockFace: BlockFace): boolean;
    isBlockFacePowered(blockFace: BlockFace): boolean;
    isBlockIndirectlyPowered(): boolean;
    isBlockPowered(): boolean;
    isEmpty(): boolean;
    isLiquid(): boolean;
    isPassable(): boolean;
    isPreferredTool(itemStack: ItemStack): boolean;
    rayTrace(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    setBiome(biome: Biome): void;
    setBlockData(blockData: BlockData): void;
    setBlockData(blockData: BlockData, b: boolean): void;
    setType(material: Material): void;
    setType(material: Material, b: boolean): void;
}

//org.bukkit.event.block.BlockBreakEvent
declare interface BlockBreakEvent extends BlockExpEvent, Cancellable {
    getPlayer(): Player;
    isCancelled(): boolean;
    isDropItems(): boolean;
    setCancelled(b: boolean): void;
    setDropItems(b: boolean): void;
}

//org.bukkit.event.block.BlockBurnEvent
declare interface BlockBurnEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getIgnitingBlock(): Block;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockCanBuildEvent
declare interface BlockCanBuildEvent extends BlockEvent {
    getBlockData(): BlockData;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMaterial(): Material;
    getPlayer(): Player;
    isBuildable(): boolean;
    setBuildable(b: boolean): void;
}

//org.bukkit.BlockChangeDelegate
declare interface BlockChangeDelegate {
    getBlockData(i: number, i: number, i: number): BlockData;
    getHeight(): number;
    isEmpty(i: number, i: number, i: number): boolean;
    setBlockData(i: number, i: number, i: number, blockData: BlockData): boolean;
}

//org.bukkit.command.BlockCommandSender
declare interface BlockCommandSender extends CommandSender {
    getBlock(): Block;
}

//org.bukkit.event.block.BlockCookEvent
declare interface BlockCookEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getResult(): ItemStack;
    getSource(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setResult(itemStack: ItemStack): void;
}

//org.bukkit.event.block.BlockDamageAbortEvent
declare interface BlockDamageAbortEvent extends BlockEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
}

//org.bukkit.event.block.BlockDamageEvent
declare interface BlockDamageEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getInstaBreak(): boolean;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setInstaBreak(b: boolean): void;
}

//org.bukkit.block.data.BlockData
declare interface BlockData extends Cloneable {
    clone(): any;
    clone(): BlockData;
    getAsString(): string;
    getAsString(b: boolean): string;
    getMaterial(): Material;
    getSoundGroup(): SoundGroup;
    matches(blockData: BlockData): boolean;
    merge(blockData: BlockData): BlockData;
}

//org.bukkit.inventory.meta.BlockDataMeta
declare interface BlockDataMeta extends ItemMeta {
    getBlockData(material: Material): BlockData;
    hasBlockData(): boolean;
    setBlockData(blockData: BlockData): void;
}

//org.bukkit.event.block.BlockDispenseArmorEvent
declare interface BlockDispenseArmorEvent extends BlockDispenseEvent {
    getTargetEntity(): LivingEntity;
}

//org.bukkit.event.block.BlockDispenseEvent
declare interface BlockDispenseEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getVelocity(): Vector;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setItem(itemStack: ItemStack): void;
    setVelocity(vector: Vector): void;
}

//org.bukkit.event.block.BlockDropItemEvent
declare interface BlockDropItemEvent extends BlockEvent, Cancellable {
    getBlockState(): BlockState;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItems(): List;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockEvent
declare interface BlockEvent extends Event {
    getBlock(): Block;
}

//org.bukkit.event.block.BlockExpEvent
declare interface BlockExpEvent extends BlockEvent {
    getExpToDrop(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    setExpToDrop(i: number): void;
}

//org.bukkit.event.block.BlockExplodeEvent
declare interface BlockExplodeEvent extends BlockEvent, Cancellable {
    blockList(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getYield(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setYield(f: number): void;
}

//org.bukkit.block.BlockFace
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

//org.bukkit.event.block.BlockFadeEvent
declare interface BlockFadeEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewState(): BlockState;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockFertilizeEvent
declare interface BlockFertilizeEvent extends BlockEvent, Cancellable {
    getBlocks(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockFormEvent
declare interface BlockFormEvent extends BlockGrowEvent {
}

//org.bukkit.event.block.BlockFromToEvent
declare interface BlockFromToEvent extends BlockEvent, Cancellable {
    getFace(): BlockFace;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getToBlock(): Block;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockGrowEvent
declare interface BlockGrowEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewState(): BlockState;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockIgniteEvent
declare interface BlockIgniteEvent extends BlockEvent, Cancellable {
    getCause(): IgniteCause;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getIgnitingBlock(): Block;
    getIgnitingEntity(): Entity;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.inventory.BlockInventoryHolder
declare interface BlockInventoryHolder extends InventoryHolder {
    getBlock(): Block;
}

//org.bukkit.util.BlockIterator
declare interface BlockIterator extends Iterator {
    hasNext(): boolean;
    next(): Block;
    next(): any;
    remove(): void;
}

//org.bukkit.event.block.BlockMultiPlaceEvent
declare interface BlockMultiPlaceEvent extends BlockPlaceEvent {
    getReplacedBlockStates(): List;
}

//org.bukkit.event.block.BlockPhysicsEvent
declare interface BlockPhysicsEvent extends BlockEvent, Cancellable {
    getChangedType(): Material;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getSourceBlock(): Block;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockPistonEvent
declare interface BlockPistonEvent extends BlockEvent, Cancellable {
    getDirection(): BlockFace;
    isCancelled(): boolean;
    isSticky(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockPistonExtendEvent
declare interface BlockPistonExtendEvent extends BlockPistonEvent {
    getBlocks(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLength(): number;
}

//org.bukkit.event.block.BlockPistonRetractEvent
declare interface BlockPistonRetractEvent extends BlockPistonEvent {
    getBlocks(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRetractLocation(): Location;
}

//org.bukkit.event.block.BlockPlaceEvent
declare interface BlockPlaceEvent extends BlockEvent, Cancellable {
    canBuild(): boolean;
    getBlockAgainst(): Block;
    getBlockPlaced(): Block;
    getBlockReplacedState(): BlockState;
    getHand(): EquipmentSlot;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    isCancelled(): boolean;
    setBuild(b: boolean): void;
    setCancelled(b: boolean): void;
}

//org.bukkit.generator.BlockPopulator
declare interface BlockPopulator {
    populate(world: World, random: Random, chunk: Chunk): void;
    populate(worldInfo: WorldInfo, random: Random, i: number, i: number, limitedRegion: LimitedRegion): void;
}

//org.bukkit.projectiles.BlockProjectileSource
declare interface BlockProjectileSource extends ProjectileSource {
    getBlock(): Block;
}

//org.bukkit.event.block.BlockReceiveGameEvent
declare interface BlockReceiveGameEvent extends BlockEvent, Cancellable {
    getEntity(): Entity;
    getEvent(): GameEvent;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockRedstoneEvent
declare interface BlockRedstoneEvent extends BlockEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewCurrent(): number;
    getOldCurrent(): number;
    setNewCurrent(i: number): void;
}

//org.bukkit.event.block.BlockShearEntityEvent
declare interface BlockShearEntityEvent extends BlockEvent, Cancellable {
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getTool(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.BlockSpreadEvent
declare interface BlockSpreadEvent extends BlockFormEvent {
    getSource(): Block;
}

//org.bukkit.block.BlockState
declare interface BlockState extends Metadatable {
    getBlock(): Block;
    getBlockData(): BlockData;
    getChunk(): Chunk;
    getData(): MaterialData;
    getLightLevel(): number;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getRawData(): number;
    getType(): Material;
    getWorld(): World;
    getX(): number;
    getY(): number;
    getZ(): number;
    isPlaced(): boolean;
    setBlockData(blockData: BlockData): void;
    setData(materialData: MaterialData): void;
    setRawData(b: number): void;
    setType(material: Material): void;
    update(): boolean;
    update(b: boolean): boolean;
    update(b: boolean, b: boolean): boolean;
}

//org.bukkit.inventory.meta.BlockStateMeta
declare interface BlockStateMeta extends ItemMeta {
    getBlockState(): BlockState;
    hasBlockState(): boolean;
    setBlockState(blockState: BlockState): void;
}

//org.bukkit.util.BlockVector
declare interface BlockVector extends Vector {
}

//org.bukkit.entity.Boat
declare interface Boat extends Vehicle {
    getMaxSpeed(): number;
    getOccupiedDeceleration(): number;
    getUnoccupiedDeceleration(): number;
    getWoodType(): TreeSpecies;
    getWorkOnLand(): boolean;
    setMaxSpeed(d: number): void;
    setOccupiedDeceleration(d: number): void;
    setUnoccupiedDeceleration(d: number): void;
    setWoodType(treeSpecies: TreeSpecies): void;
    setWorkOnLand(b: boolean): void;
}

//java.net.http.HttpResponse$BodyHandler
declare interface BodyHandler {
    apply(responseInfo: ResponseInfo): BodySubscriber;
}

//java.net.http.HttpResponse$BodyHandlers
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

//java.net.http.HttpRequest$BodyPublisher
declare interface BodyPublisher extends Publisher {
    contentLength(): number;
}

//java.net.http.HttpResponse$BodySubscriber
declare interface BodySubscriber extends Subscriber {
    getBody(): CompletionStage;
}

//org.bukkit.inventory.meta.BookMeta
declare interface BookMeta extends ItemMeta {
    addPage(s: string): void;
    clone(): BookMeta;
    clone(): ItemMeta;
    clone(): any;
    getAuthor(): string;
    getGeneration(): Generation;
    getPage(i: number): string;
    getPageCount(): number;
    getPages(): List;
    getTitle(): string;
    hasAuthor(): boolean;
    hasGeneration(): boolean;
    hasPages(): boolean;
    hasTitle(): boolean;
    setAuthor(s: string): void;
    setGeneration(generation: Generation): void;
    setPage(i: number, s: string): void;
    setPages(list: List): void;
    setPages(s: string): void;
    setTitle(s: string): boolean;
    spigot(): Spigot;
}

//java.lang.Boolean
declare interface Boolean extends Serializable, Comparable, Constable {
    booleanValue(): boolean;
    compare(b: boolean, b: boolean): number;
    compareTo(boolean: Boolean): number;
    compareTo(object: any): number;
    describeConstable(): Optional;
    getBoolean(s: string): boolean;
    hashCode(b: boolean): number;
    logicalAnd(b: boolean, b: boolean): boolean;
    logicalOr(b: boolean, b: boolean): boolean;
    logicalXor(b: boolean, b: boolean): boolean;
    parseBoolean(s: string): boolean;
    toString(b: boolean): string;
    valueOf(s: string): Boolean;
    valueOf(b: boolean): Boolean;
    FALSE: Boolean;
    TRUE: Boolean;
    TYPE: Class;
}

//org.bukkit.conversations.BooleanPrompt
declare interface BooleanPrompt extends ValidatingPrompt {
}

//org.bukkit.entity.Boss
declare interface Boss extends Entity {
    getBossBar(): BossBar;
}

//org.bukkit.boss.BossBar
declare interface BossBar {
    addFlag(barFlag: BarFlag): void;
    addPlayer(player: Player): void;
    getColor(): BarColor;
    getPlayers(): List;
    getProgress(): number;
    getStyle(): BarStyle;
    getTitle(): string;
    hasFlag(barFlag: BarFlag): boolean;
    hide(): void;
    isVisible(): boolean;
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

//org.bukkit.util.BoundingBox
declare interface BoundingBox extends Cloneable, ConfigurationSerializable {
    contains(vector: Vector): boolean;
    contains(boundingBox: BoundingBox): boolean;
    contains(vector: Vector, vector: Vector): boolean;
    contains(d: number, d: number, d: number): boolean;
    copy(boundingBox: BoundingBox): BoundingBox;
    deserialize(map: Map): BoundingBox;
    expand(vector: Vector): BoundingBox;
    expand(d: number): BoundingBox;
    expand(vector: Vector, d: number): BoundingBox;
    expand(blockFace: BlockFace, d: number): BoundingBox;
    expand(d: number, d: number, d: number): BoundingBox;
    expand(d: number, d: number, d: number, d: number): BoundingBox;
    expand(d: number, d: number, d: number, d: number, d: number, d: number): BoundingBox;
    expandDirectional(vector: Vector): BoundingBox;
    expandDirectional(d: number, d: number, d: number): BoundingBox;
    getCenter(): Vector;
    getCenterX(): number;
    getCenterY(): number;
    getCenterZ(): number;
    getHeight(): number;
    getMax(): Vector;
    getMaxX(): number;
    getMaxY(): number;
    getMaxZ(): number;
    getMin(): Vector;
    getMinX(): number;
    getMinY(): number;
    getMinZ(): number;
    getVolume(): number;
    getWidthX(): number;
    getWidthZ(): number;
    intersection(boundingBox: BoundingBox): BoundingBox;
    of(block: Block): BoundingBox;
    of(vector: Vector, vector: Vector): BoundingBox;
    of(block: Block, block: Block): BoundingBox;
    of(location: Location, location: Location): BoundingBox;
    of(vector: Vector, d: number, d: number, d: number): BoundingBox;
    of(location: Location, d: number, d: number, d: number): BoundingBox;
    overlaps(boundingBox: BoundingBox): boolean;
    overlaps(vector: Vector, vector: Vector): boolean;
    rayTrace(vector: Vector, vector: Vector, d: number): RayTraceResult;
    resize(d: number, d: number, d: number, d: number, d: number, d: number): BoundingBox;
    serialize(): Map;
    shift(location: Location): BoundingBox;
    shift(vector: Vector): BoundingBox;
    shift(d: number, d: number, d: number): BoundingBox;
    union(boundingBox: BoundingBox): BoundingBox;
    union(location: Location): BoundingBox;
    union(vector: Vector): BoundingBox;
    union(d: number, d: number, d: number): BoundingBox;
}

//org.bukkit.entity.Breedable
declare interface Breedable extends Ageable {
    canBreed(): boolean;
    getAgeLock(): boolean;
    setAgeLock(b: boolean): void;
    setBreed(b: boolean): void;
}

//org.bukkit.event.inventory.BrewEvent
declare interface BrewEvent extends BlockEvent, Cancellable {
    getContents(): BrewerInventory;
    getFuelLevel(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getResults(): List;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.inventory.BrewerInventory
declare interface BrewerInventory extends Inventory {
    getFuel(): ItemStack;
    getHolder(): InventoryHolder;
    getHolder(): BrewingStand;
    getIngredient(): ItemStack;
    setFuel(itemStack: ItemStack): void;
    setIngredient(itemStack: ItemStack): void;
}

//org.bukkit.block.data.type.BrewingStand
declare interface BrewingStand extends BlockData {
    getBottles(): Set;
    getMaximumBottles(): number;
    hasBottle(i: number): boolean;
    setBottle(i: number, b: boolean): void;
}

//org.bukkit.block.BrewingStand
declare interface BrewingStand extends Container {
    getBrewingTime(): number;
    getFuelLevel(): number;
    getInventory(): Inventory;
    getInventory(): BrewerInventory;
    getSnapshotInventory(): BrewerInventory;
    getSnapshotInventory(): Inventory;
    setBrewingTime(i: number): void;
    setFuelLevel(i: number): void;
}

//org.bukkit.event.inventory.BrewingStandFuelEvent
declare interface BrewingStandFuelEvent extends BlockEvent, Cancellable {
    getFuel(): ItemStack;
    getFuelPower(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isConsuming(): boolean;
    setCancelled(b: boolean): void;
    setConsuming(b: boolean): void;
    setFuelPower(i: number): void;
}

//org.bukkit.event.server.BroadcastMessageEvent
declare interface BroadcastMessageEvent extends ServerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMessage(): string;
    getRecipients(): Set;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setMessage(s: string): void;
}

//org.bukkit.util.permissions.BroadcastPermissions
declare interface BroadcastPermissions {
    registerPermissions(permission: Permission): Permission;
}

//org.bukkit.block.data.type.BubbleColumn
declare interface BubbleColumn extends BlockData {
    isDrag(): boolean;
    setDrag(b: boolean): void;
}

//java.nio.Buffer
declare interface Buffer {
    array(): any;
    arrayOffset(): number;
    capacity(): number;
    clear(): Buffer;
    duplicate(): Buffer;
    flip(): Buffer;
    hasArray(): boolean;
    hasRemaining(): boolean;
    isDirect(): boolean;
    isReadOnly(): boolean;
    limit(): number;
    limit(i: number): Buffer;
    mark(): Buffer;
    position(): number;
    position(i: number): Buffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
    slice(): Buffer;
    slice(i: number, i: number): Buffer;
}

//java.awt.BufferCapabilities
declare interface BufferCapabilities extends Cloneable {
    getBackBufferCapabilities(): ImageCapabilities;
    getFlipContents(): FlipContents;
    getFrontBufferCapabilities(): ImageCapabilities;
    isFullScreenRequired(): boolean;
    isMultiBufferAvailable(): boolean;
    isPageFlipping(): boolean;
}

//java.awt.image.BufferStrategy
declare interface BufferStrategy {
    contentsLost(): boolean;
    contentsRestored(): boolean;
    dispose(): void;
    getCapabilities(): BufferCapabilities;
    getDrawGraphics(): Graphics;
    show(): void;
}

//java.awt.image.BufferedImage
declare interface BufferedImage extends Image, WritableRenderedImage, Transparency {
    addTileObserver(tileObserver: TileObserver): void;
    coerceData(b: boolean): void;
    copyData(writableRaster: WritableRaster): WritableRaster;
    createGraphics(): Graphics2D;
    getAlphaRaster(): WritableRaster;
    getColorModel(): ColorModel;
    getData(): Raster;
    getData(rectangle: Rectangle): Raster;
    getHeight(): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getMinX(): number;
    getMinY(): number;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getProperty(s: string): any;
    getPropertyNames(): string[];
    getRGB(i: number, i: number): number;
    getRGB(i: number, i: number, i: number, i: number, i: number, i: number, i: number): number[];
    getRaster(): WritableRaster;
    getSampleModel(): SampleModel;
    getSources(): Vector;
    getSubimage(i: number, i: number, i: number, i: number): BufferedImage;
    getTile(i: number, i: number): Raster;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTileHeight(): number;
    getTileWidth(): number;
    getTransparency(): number;
    getType(): number;
    getWidth(): number;
    getWritableTile(i: number, i: number): WritableRaster;
    getWritableTileIndices(): Point[];
    hasTileWriters(): boolean;
    isAlphaPremultiplied(): boolean;
    isTileWritable(i: number, i: number): boolean;
    releaseWritableTile(i: number, i: number): void;
    removeTileObserver(tileObserver: TileObserver): void;
    setData(raster: Raster): void;
    setRGB(i: number, i: number, i: number): void;
    setRGB(i: number, i: number, i: number, i: number, i: number, i: number, i: number): void;
    toString(): string;
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

//java.awt.image.BufferedImageOp
declare interface BufferedImageOp {
    createCompatibleDestImage(bufferedImage: BufferedImage, colorModel: ColorModel): BufferedImage;
    filter(bufferedImage: BufferedImage, bufferedImage: BufferedImage): BufferedImage;
    getBounds2D(bufferedImage: BufferedImage): Rectangle2D;
    getPoint2D(point2D: Point2D, point2D: Point2D): Point2D;
    getRenderingHints(): RenderingHints;
}

//java.net.http.HttpClient$Builder
declare interface Builder {
    authenticator(authenticator: Authenticator): Builder;
    build(): HttpClient;
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

//java.net.http.WebSocket$Builder
declare interface Builder {
    buildAsync(uRI: URI, listener: Listener): CompletableFuture;
    connectTimeout(duration: Duration): Builder;
    header(s: string, s: string): Builder;
    subprotocols(s: string, s: string): Builder;
}

//org.bukkit.FireworkEffect$Builder
declare interface Builder {
    build(): FireworkEffect;
    flicker(b: boolean): Builder;
    trail(b: boolean): Builder;
    with(type: Type): Builder;
    withColor(iterable: Iterable): Builder;
    withColor(color: Color): Builder;
    withColor(color: Color): Builder;
    withFade(color: Color): Builder;
    withFade(iterable: Iterable): Builder;
    withFade(color: Color): Builder;
    withFlicker(): Builder;
    withTrail(): Builder;
}

//java.net.http.HttpRequest$Builder
declare interface Builder {
    DELETE(): Builder;
    GET(): Builder;
    POST(bodyPublisher: BodyPublisher): Builder;
    PUT(bodyPublisher: BodyPublisher): Builder;
    build(): HttpRequest;
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

//java.util.stream.LongStream$Builder
declare interface Builder extends LongConsumer {
    accept(l: number): void;
    add(l: number): Builder;
    build(): LongStream;
}

//java.util.stream.DoubleStream$Builder
declare interface Builder extends DoubleConsumer {
    accept(d: number): void;
    add(d: number): Builder;
    build(): DoubleStream;
}

//java.util.stream.IntStream$Builder
declare interface Builder extends IntConsumer {
    accept(i: number): void;
    add(i: number): Builder;
    build(): IntStream;
}

//java.util.stream.Stream$Builder
declare interface Builder extends Consumer {
    accept(object: any): void;
    add(object: any): Builder;
    build(): Stream;
}

//java.lang.module.ModuleDescriptor$Builder
declare interface Builder {
    build(): ModuleDescriptor;
    exports(s: string): Builder;
    exports(exports: Exports): Builder;
    exports(s: string, set: Set): Builder;
    exports(set: Set, s: string): Builder;
    exports(set: Set, s: string, set: Set): Builder;
    mainClass(s: string): Builder;
    opens(s: string): Builder;
    opens(opens: Opens): Builder;
    opens(s: string, set: Set): Builder;
    opens(set: Set, s: string): Builder;
    opens(set: Set, s: string, set: Set): Builder;
    packages(set: Set): Builder;
    provides(provides: Provides): Builder;
    provides(s: string, list: List): Builder;
    requires(requires: Requires): Builder;
    requires(s: string): Builder;
    requires(set: Set, s: string): Builder;
    requires(set: Set, s: string, version: Version): Builder;
    uses(s: string): Builder;
    version(s: string): Builder;
    version(version: Version): Builder;
}

//org.bukkit.Bukkit
declare interface Bukkit {
    addRecipe(recipe: Recipe): boolean;
    advancementIterator(): Iterator;
    banIP(s: string): void;
    broadcast(s: string, s: string): number;
    broadcastMessage(s: string): number;
    clearRecipes(): void;
    craftItem(itemStack: ItemStack, world: World, player: Player): ItemStack;
    createBlockData(s: string): BlockData;
    createBlockData(material: Material): BlockData;
    createBlockData(material: Material, consumer: Consumer): BlockData;
    createBlockData(material: Material, s: string): BlockData;
    createBossBar(s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): BossBar;
    createBossBar(namespacedKey: NamespacedKey, s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): KeyedBossBar;
    createChunkData(world: World): ChunkData;
    createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType, i: number, b: boolean): ItemStack;
    createInventory(inventoryHolder: InventoryHolder, i: number): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number, s: string): Inventory;
    createMap(world: World): MapView;
    createMerchant(s: string): Merchant;
    createPlayerProfile(s: string): PlayerProfile;
    createPlayerProfile(uUID: UUID): PlayerProfile;
    createPlayerProfile(uUID: UUID, s: string): PlayerProfile;
    createWorld(worldCreator: WorldCreator): World;
    createWorldBorder(): WorldBorder;
    dispatchCommand(commandSender: CommandSender, s: string): boolean;
    getAdvancement(namespacedKey: NamespacedKey): Advancement;
    getAllowEnd(): boolean;
    getAllowFlight(): boolean;
    getAllowNether(): boolean;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getBanList(type: Type): BanList;
    getBannedPlayers(): Set;
    getBossBar(namespacedKey: NamespacedKey): KeyedBossBar;
    getBossBars(): Iterator;
    getBukkitVersion(): string;
    getCommandAliases(): Map;
    getConnectionThrottle(): number;
    getConsoleSender(): ConsoleCommandSender;
    getCraftingRecipe(itemStack: ItemStack, world: World): Recipe;
    getDefaultGameMode(): GameMode;
    getEntity(uUID: UUID): Entity;
    getGenerateStructures(): boolean;
    getHelpMap(): HelpMap;
    getHideOnlinePlayers(): boolean;
    getIPBans(): Set;
    getIdleTimeout(): number;
    getIp(): string;
    getItemFactory(): ItemFactory;
    getLogger(): Logger;
    getLootTable(namespacedKey: NamespacedKey): LootTable;
    getMap(i: number): MapView;
    getMaxChainedNeighborUpdates(): number;
    getMaxPlayers(): number;
    getMaxWorldSize(): number;
    getMessenger(): Messenger;
    getMonsterSpawnLimit(): number;
    getMotd(): string;
    getName(): string;
    getOfflinePlayer(uUID: UUID): OfflinePlayer;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayers(): OfflinePlayer[];
    getOnlineMode(): boolean;
    getOnlinePlayers(): Collection;
    getOperators(): Set;
    getPlayer(s: string): Player;
    getPlayer(uUID: UUID): Player;
    getPlayerExact(s: string): Player;
    getPluginCommand(s: string): PluginCommand;
    getPluginManager(): PluginManager;
    getPort(): number;
    getRecipe(namespacedKey: NamespacedKey): Recipe;
    getRecipesFor(itemStack: ItemStack): List;
    getResourcePack(): string;
    getResourcePackHash(): string;
    getResourcePackPrompt(): string;
    getScheduler(): BukkitScheduler;
    getScoreboardManager(): ScoreboardManager;
    getServer(): Server;
    getServerIcon(): CachedServerIcon;
    getServicesManager(): ServicesManager;
    getShutdownMessage(): string;
    getSimulationDistance(): number;
    getSpawnLimit(spawnCategory: SpawnCategory): number;
    getSpawnRadius(): number;
    getStructureManager(): StructureManager;
    getTag(s: string, namespacedKey: NamespacedKey, clazz: Class): Tag;
    getTags(s: string, clazz: Class): Iterable;
    getTicksPerAmbientSpawns(): number;
    getTicksPerAnimalSpawns(): number;
    getTicksPerMonsterSpawns(): number;
    getTicksPerSpawns(spawnCategory: SpawnCategory): number;
    getTicksPerWaterAmbientSpawns(): number;
    getTicksPerWaterSpawns(): number;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getUnsafe(): UnsafeValues;
    getUpdateFolder(): string;
    getUpdateFolderFile(): File;
    getVersion(): string;
    getViewDistance(): number;
    getWarningState(): WarningState;
    getWaterAmbientSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getWhitelistedPlayers(): Set;
    getWorld(uUID: UUID): World;
    getWorld(s: string): World;
    getWorldContainer(): File;
    getWorldType(): string;
    getWorlds(): List;
    hasWhitelist(): boolean;
    isEnforcingSecureProfiles(): boolean;
    isHardcore(): boolean;
    isPrimaryThread(): boolean;
    isResourcePackRequired(): boolean;
    isWhitelistEnforced(): boolean;
    loadServerIcon(file: File): CachedServerIcon;
    loadServerIcon(bufferedImage: BufferedImage): CachedServerIcon;
    matchPlayer(s: string): List;
    recipeIterator(): Iterator;
    reload(): void;
    reloadData(): void;
    reloadWhitelist(): void;
    removeBossBar(namespacedKey: NamespacedKey): boolean;
    removeRecipe(namespacedKey: NamespacedKey): boolean;
    resetRecipes(): void;
    savePlayers(): void;
    selectEntities(commandSender: CommandSender, s: string): List;
    setDefaultGameMode(gameMode: GameMode): void;
    setIdleTimeout(i: number): void;
    setServer(server: Server): void;
    setSpawnRadius(i: number): void;
    setWhitelist(b: boolean): void;
    setWhitelistEnforced(b: boolean): void;
    shouldSendChatPreviews(): boolean;
    shutdown(): void;
    spigot(): Spigot;
    unbanIP(s: string): void;
    unloadWorld(s: string, b: boolean): boolean;
    unloadWorld(world: World, b: boolean): boolean;
}

//org.bukkit.command.defaults.BukkitCommand
declare interface BukkitCommand extends Command {
}

//org.bukkit.util.io.BukkitObjectInputStream
declare interface BukkitObjectInputStream extends ObjectInputStream {
}

//org.bukkit.util.io.BukkitObjectOutputStream
declare interface BukkitObjectOutputStream extends ObjectOutputStream {
}

//org.bukkit.scheduler.BukkitRunnable
declare interface BukkitRunnable extends Runnable {
    cancel(): void;
    getTaskId(): number;
    isCancelled(): boolean;
    runTask(plugin: Plugin): BukkitTask;
    runTaskAsynchronously(plugin: Plugin): BukkitTask;
    runTaskLater(plugin: Plugin, l: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, l: number, l: number): BukkitTask;
}

//org.bukkit.scheduler.BukkitScheduler
declare interface BukkitScheduler {
    callSyncMethod(plugin: Plugin, callable: Callable): Future;
    cancelTask(i: number): void;
    cancelTasks(plugin: Plugin): void;
    getActiveWorkers(): List;
    getPendingTasks(): List;
    isCurrentlyRunning(i: number): boolean;
    isQueued(i: number): boolean;
    runTask(plugin: Plugin, consumer: Consumer): void;
    runTask(plugin: Plugin, runnable: Runnable): BukkitTask;
    runTask(plugin: Plugin, bukkitRunnable: BukkitRunnable): BukkitTask;
    runTaskAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable): BukkitTask;
    runTaskAsynchronously(plugin: Plugin, consumer: Consumer): void;
    runTaskAsynchronously(plugin: Plugin, runnable: Runnable): BukkitTask;
    runTaskLater(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): BukkitTask;
    runTaskLater(plugin: Plugin, consumer: Consumer, l: number): void;
    runTaskLater(plugin: Plugin, runnable: Runnable, l: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, consumer: Consumer, l: number): void;
    runTaskLaterAsynchronously(plugin: Plugin, runnable: Runnable, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, consumer: Consumer, l: number, l: number): void;
    runTaskTimer(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): BukkitTask;
    runTaskTimer(plugin: Plugin, runnable: Runnable, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, consumer: Consumer, l: number, l: number): void;
    runTaskTimerAsynchronously(plugin: Plugin, runnable: Runnable, l: number, l: number): BukkitTask;
    scheduleAsyncDelayedTask(plugin: Plugin, runnable: Runnable): number;
    scheduleAsyncDelayedTask(plugin: Plugin, runnable: Runnable, l: number): number;
    scheduleAsyncRepeatingTask(plugin: Plugin, runnable: Runnable, l: number, l: number): number;
    scheduleSyncDelayedTask(plugin: Plugin, bukkitRunnable: BukkitRunnable): number;
    scheduleSyncDelayedTask(plugin: Plugin, runnable: Runnable): number;
    scheduleSyncDelayedTask(plugin: Plugin, runnable: Runnable, l: number): number;
    scheduleSyncDelayedTask(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number): number;
    scheduleSyncRepeatingTask(plugin: Plugin, bukkitRunnable: BukkitRunnable, l: number, l: number): number;
    scheduleSyncRepeatingTask(plugin: Plugin, runnable: Runnable, l: number, l: number): number;
}

//eu.okaeri.poly.api.bukkit.BukkitScriptHelper
declare interface BukkitScriptHelper extends ScriptHelper {
    command(label: string, consumer: BiConsumer): void;
    getPlugin(): Plugin;
    getScriptChannelListeners(): List;
    getScriptCommands(): List;
    getScriptEventListener(): Listener;
    getScriptTasks(): List;
    listen(eventClass: Class, consumer: Consumer): void;
    listen(eventClass: Class, priority: EventPriority, consumer: Consumer): void;
    listen(eventClass: Class, priority: EventPriority, ignoreCancelled: boolean, consumer: Consumer): void;
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

//org.bukkit.scheduler.BukkitTask
declare interface BukkitTask {
    cancel(): void;
    getOwner(): Plugin;
    getTaskId(): number;
    isCancelled(): boolean;
    isSync(): boolean;
}

//org.bukkit.scheduler.BukkitWorker
declare interface BukkitWorker {
    getOwner(): Plugin;
    getTaskId(): number;
    getThread(): Thread;
}

//org.bukkit.configuration.file.BukkitYaml
declare interface BukkitYaml extends Yaml {
}

//org.bukkit.inventory.meta.BundleMeta
declare interface BundleMeta extends ItemMeta {
    addItem(itemStack: ItemStack): void;
    getItems(): List;
    hasItems(): boolean;
    setItems(list: List): void;
}

//org.bukkit.material.Button
declare interface Button extends SimpleAttachableMaterialData, Redstone {
    getAttachedFace(): BlockFace;
    isPowered(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setPowered(b: boolean): void;
}

//java.nio.ByteBuffer
declare interface ByteBuffer extends Buffer, Comparable {
    alignedSlice(i: number): ByteBuffer;
    alignmentOffset(i: number, i: number): number;
    allocate(i: number): ByteBuffer;
    allocateDirect(i: number): ByteBuffer;
    asCharBuffer(): string;
    asDoubleBuffer(): DoubleBuffer;
    asFloatBuffer(): FloatBuffer;
    asIntBuffer(): IntBuffer;
    asLongBuffer(): LongBuffer;
    asReadOnlyBuffer(): ByteBuffer;
    asShortBuffer(): ShortBuffer;
    compact(): ByteBuffer;
    compareTo(object: any): number;
    compareTo(byteBuffer: ByteBuffer): number;
    equals(object: any): boolean;
    get(): number;
    get(i: number): number;
    get(b: number): ByteBuffer;
    get(i: number, b: number): ByteBuffer;
    get(b: number, i: number, i: number): ByteBuffer;
    get(i: number, b: number, i: number, i: number): ByteBuffer;
    getChar(): string;
    getChar(i: number): string;
    getDouble(): number;
    getDouble(i: number): number;
    getFloat(): number;
    getFloat(i: number): number;
    getInt(): number;
    getInt(i: number): number;
    getLong(): number;
    getLong(i: number): number;
    getShort(): number;
    getShort(i: number): number;
    hashCode(): number;
    mismatch(byteBuffer: ByteBuffer): number;
    order(): ByteOrder;
    order(byteOrder: ByteOrder): ByteBuffer;
    put(byteBuffer: ByteBuffer): ByteBuffer;
    put(b: number): ByteBuffer;
    put(b: number): ByteBuffer;
    put(i: number, b: number): ByteBuffer;
    put(i: number, b: number): ByteBuffer;
    put(b: number, i: number, i: number): ByteBuffer;
    put(i: number, byteBuffer: ByteBuffer, i: number, i: number): ByteBuffer;
    put(i: number, b: number, i: number, i: number): ByteBuffer;
    putChar(c: string): ByteBuffer;
    putChar(i: number, c: string): ByteBuffer;
    putDouble(d: number): ByteBuffer;
    putDouble(i: number, d: number): ByteBuffer;
    putFloat(f: number): ByteBuffer;
    putFloat(i: number, f: number): ByteBuffer;
    putInt(i: number): ByteBuffer;
    putInt(i: number, i: number): ByteBuffer;
    putLong(l: number): ByteBuffer;
    putLong(i: number, l: number): ByteBuffer;
    putShort(s: number): ByteBuffer;
    putShort(i: number, s: number): ByteBuffer;
    toString(): string;
    wrap(b: number): ByteBuffer;
    wrap(b: number, i: number, i: number): ByteBuffer;
}

//java.nio.channels.ByteChannel
declare interface ByteChannel extends ReadableByteChannel, WritableByteChannel {
}

//java.nio.ByteOrder
declare interface ByteOrder {
    nativeOrder(): ByteOrder;
    BIG_ENDIAN: ByteOrder;
    LITTLE_ENDIAN: ByteOrder;
}

//org.bukkit.util.CachedServerIcon
declare interface CachedServerIcon {
}

//org.bukkit.block.data.type.Cake
declare interface Cake extends BlockData {
    getBites(): number;
    getMaximumBites(): number;
    setBites(i: number): void;
}

//org.bukkit.material.Cake
declare interface Cake extends MaterialData {
    getSlicesEaten(): number;
    getSlicesRemaining(): number;
    setSlicesEaten(i: number): void;
    setSlicesRemaining(i: number): void;
}

//java.util.concurrent.Callable
declare interface Callable {
    call(): any;
}

//org.bukkit.block.data.type.Campfire
declare interface Campfire extends Directional, Lightable, Waterlogged {
    isSignalFire(): boolean;
    setSignalFire(b: boolean): void;
}

//org.bukkit.block.Campfire
declare interface Campfire extends TileState {
    getCookTime(i: number): number;
    getCookTimeTotal(i: number): number;
    getItem(i: number): ItemStack;
    getSize(): number;
    setCookTime(i: number, i: number): void;
    setCookTimeTotal(i: number, i: number): void;
    setItem(i: number, itemStack: ItemStack): void;
}

//org.bukkit.inventory.CampfireRecipe
declare interface CampfireRecipe extends CookingRecipe {
}

//org.bukkit.event.Cancellable
declare interface Cancellable {
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.block.data.type.Candle
declare interface Candle extends Lightable, Waterlogged {
    getCandles(): number;
    getMaximumCandles(): number;
    setCandles(i: number): void;
}

//org.bukkit.inventory.CartographyInventory
declare interface CartographyInventory extends Inventory {
}

//org.bukkit.entity.Cat
declare interface Cat extends Tameable, Sittable {
    getCatType(): Type;
    getCollarColor(): DyeColor;
    setCatType(type: Type): void;
    setCollarColor(dyeColor: DyeColor): void;
}

//java.util.Locale$Category
declare enum Category {
    DISPLAY,
    FORMAT,
}

//org.bukkit.material.Cauldron
declare interface Cauldron extends MaterialData {
    isEmpty(): boolean;
    isFull(): boolean;
}

//org.bukkit.event.block.CauldronLevelChangeEvent
declare interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewLevel(): number;
    getNewState(): BlockState;
    getOldLevel(): number;
    getReason(): ChangeReason;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setNewLevel(i: number): void;
}

//org.bukkit.event.weather.LightningStrikeEvent$Cause
declare enum Cause {
    COMMAND,
    CUSTOM,
    SPAWNER,
    TRIDENT,
    TRAP,
    WEATHER,
    UNKNOWN,
}

//org.bukkit.event.entity.EntityPotionEffectEvent$Cause
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
    WARDEN,
    WITHER_ROSE,
}

//java.awt.event.FocusEvent$Cause
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

//org.bukkit.entity.CaveSpider
declare interface CaveSpider extends Spider {
}

//org.bukkit.block.data.type.CaveVines
declare interface CaveVines extends Ageable, CaveVinesPlant {
}

//org.bukkit.block.data.type.CaveVinesPlant
declare interface CaveVinesPlant extends BlockData {
    isBerries(): boolean;
    setBerries(b: boolean): void;
}

//java.security.cert.CertPath
declare interface CertPath extends Serializable {
    getCertificates(): List;
    getEncoded(): number[];
    getEncoded(s: string): number[];
    getEncodings(): Iterator;
    getType(): string;
}

//java.security.cert.Certificate
declare interface Certificate extends Serializable {
    getEncoded(): number[];
    getPublicKey(): PublicKey;
    getType(): string;
    verify(publicKey: PublicKey): void;
    verify(publicKey: PublicKey, s: string): void;
    verify(publicKey: PublicKey, provider: Provider): void;
}

//javax.security.cert.Certificate
declare interface Certificate {
    getEncoded(): number[];
    getPublicKey(): PublicKey;
    verify(publicKey: PublicKey): void;
    verify(publicKey: PublicKey, s: string): void;
}

//org.bukkit.block.data.type.Chain
declare interface Chain extends Orientable, Waterlogged {
}

//org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason
declare enum ChangeReason {
    LOSING_JOB,
    EMPLOYED,
}

//org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason
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

//java.nio.channels.Channel
declare interface Channel extends Closeable {
    close(): void;
    isOpen(): boolean;
}

//org.bukkit.plugin.messaging.ChannelNameTooLongException
declare interface ChannelNameTooLongException extends RuntimeException {
}

//org.bukkit.plugin.messaging.ChannelNotRegisteredException
declare interface ChannelNotRegisteredException extends RuntimeException {
}

//java.nio.CharBuffer
declare interface CharBuffer extends Buffer, Comparable, Appendable, CharSequence, Readable {
    allocate(i: number): string;
    append(s: string): Appendable;
    append(c: string): string;
    append(s: string): string;
    append(c: string): Appendable;
    append(s: string, i: number, i: number): string;
    append(s: string, i: number, i: number): Appendable;
    asReadOnlyBuffer(): string;
    charAt(i: number): string;
    chars(): IntStream;
    compact(): string;
    compareTo(s: string): number;
    compareTo(object: any): number;
    equals(object: any): boolean;
    get(): string;
    get(i: number): string;
    get(c: string): string;
    get(i: number, c: string): string;
    get(c: string, i: number, i: number): string;
    get(i: number, c: string, i: number, i: number): string;
    hashCode(): number;
    isEmpty(): boolean;
    length(): number;
    mismatch(s: string): number;
    order(): ByteOrder;
    put(s: string): string;
    put(c: string): string;
    put(c: string): string;
    put(s: string): string;
    put(i: number, c: string): string;
    put(i: number, c: string): string;
    put(s: string, i: number, i: number): string;
    put(c: string, i: number, i: number): string;
    put(i: number, c: string, i: number, i: number): string;
    put(i: number, s: string, i: number, i: number): string;
    read(s: string): number;
    subSequence(i: number, i: number): string;
    subSequence(i: number, i: number): string;
    toString(): string;
    wrap(c: string): string;
    wrap(s: string): string;
    wrap(c: string, i: number, i: number): string;
    wrap(s: string, i: number, i: number): string;
}

//java.lang.CharSequence
declare interface CharSequence {
    charAt(i: number): string;
    chars(): IntStream;
    codePoints(): IntStream;
    compare(s: string, s: string): number;
    isEmpty(): boolean;
    length(): number;
    subSequence(i: number, i: number): string;
    toString(): string;
}

//java.text.CharacterIterator
declare interface CharacterIterator extends Cloneable {
    clone(): any;
    current(): string;
    first(): string;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(i: number): string;
    DONE: string;
}

//org.bukkit.map.MapFont$CharacterSprite
declare interface CharacterSprite {
    get(i: number, i: number): boolean;
    getHeight(): number;
    getWidth(): number;
}

//java.util.stream.Collector$Characteristics
declare enum Characteristics {
    CONCURRENT,
    UNORDERED,
    IDENTITY_FINISH,
}

//java.nio.charset.Charset
declare interface Charset extends Comparable {
    aliases(): Set;
    availableCharsets(): SortedMap;
    canEncode(): boolean;
    compareTo(object: any): number;
    compareTo(charset: Charset): number;
    contains(charset: Charset): boolean;
    decode(byteBuffer: ByteBuffer): string;
    defaultCharset(): Charset;
    displayName(): string;
    displayName(locale: Locale): string;
    encode(s: string): ByteBuffer;
    encode(s: string): ByteBuffer;
    forName(s: string): Charset;
    isRegistered(): boolean;
    isSupported(s: string): boolean;
    name(): string;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
}

//java.nio.charset.CharsetDecoder
declare interface CharsetDecoder {
    averageCharsPerByte(): number;
    charset(): Charset;
    decode(byteBuffer: ByteBuffer): string;
    decode(byteBuffer: ByteBuffer, s: string, b: boolean): CoderResult;
    detectedCharset(): Charset;
    flush(s: string): CoderResult;
    isAutoDetecting(): boolean;
    isCharsetDetected(): boolean;
    malformedInputAction(): CodingErrorAction;
    maxCharsPerByte(): number;
    onMalformedInput(codingErrorAction: CodingErrorAction): CharsetDecoder;
    onUnmappableCharacter(codingErrorAction: CodingErrorAction): CharsetDecoder;
    replaceWith(s: string): CharsetDecoder;
    replacement(): string;
    reset(): CharsetDecoder;
    unmappableCharacterAction(): CodingErrorAction;
}

//java.nio.charset.CharsetEncoder
declare interface CharsetEncoder {
    averageBytesPerChar(): number;
    canEncode(s: string): boolean;
    canEncode(c: string): boolean;
    charset(): Charset;
    encode(s: string): ByteBuffer;
    encode(s: string, byteBuffer: ByteBuffer, b: boolean): CoderResult;
    flush(byteBuffer: ByteBuffer): CoderResult;
    isLegalReplacement(b: number): boolean;
    malformedInputAction(): CodingErrorAction;
    maxBytesPerChar(): number;
    onMalformedInput(codingErrorAction: CodingErrorAction): CharsetEncoder;
    onUnmappableCharacter(codingErrorAction: CodingErrorAction): CharsetEncoder;
    replaceWith(b: number): CharsetEncoder;
    replacement(): number[];
    reset(): CharsetEncoder;
    unmappableCharacterAction(): CodingErrorAction;
}

//org.bukkit.ChatColor
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

//net.md_5.bungee.api.ChatColor
declare interface ChatColor {
    getByChar(c: string): ChatColor;
    getColor(): Color;
    getName(): string;
    name(): string;
    of(color: Color): ChatColor;
    of(s: string): ChatColor;
    ordinal(): number;
    stripColor(s: string): string;
    translateAlternateColorCodes(c: string, s: string): string;
    valueOf(s: string): ChatColor;
    values(): ChatColor[];
    ALL_CODES: string;
    AQUA: ChatColor;
    BLACK: ChatColor;
    BLUE: ChatColor;
    BOLD: ChatColor;
    COLOR_CHAR: string;
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
    STRIP_COLOR_PATTERN: Pattern;
    UNDERLINE: ChatColor;
    WHITE: ChatColor;
    YELLOW: ChatColor;
}

//net.md_5.bungee.api.ChatMessageType
declare enum ChatMessageType {
    CHAT,
    SYSTEM,
    ACTION_BAR,
}

//org.bukkit.util.ChatPaginator$ChatPage
declare interface ChatPage {
    getLines(): string[];
    getPageNumber(): number;
    getTotalPages(): number;
}

//org.bukkit.util.ChatPaginator
declare interface ChatPaginator {
    paginate(s: string, i: number): ChatPage;
    paginate(s: string, i: number, i: number, i: number): ChatPage;
    wordWrap(s: string, i: number): string[];
    AVERAGE_CHAT_PAGE_WIDTH: number;
    CLOSED_CHAT_PAGE_HEIGHT: number;
    GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH: number;
    OPEN_CHAT_PAGE_HEIGHT: number;
    UNBOUNDED_PAGE_HEIGHT: number;
    UNBOUNDED_PAGE_WIDTH: number;
}

//org.bukkit.block.Chest
declare interface Chest extends Container, Lootable, Lidded {
    getBlockInventory(): Inventory;
}

//org.bukkit.block.data.type.Chest
declare interface Chest extends Directional, Waterlogged {
    getType(): Type;
    setType(type: Type): void;
}

//org.bukkit.material.Chest
declare interface Chest extends DirectionalContainer {
}

//org.bukkit.entity.ChestBoat
declare interface ChestBoat extends Boat, InventoryHolder, Lootable {
}

//org.bukkit.entity.ChestedHorse
declare interface ChestedHorse extends AbstractHorse {
    isCarryingChest(): boolean;
    setCarryingChest(b: boolean): void;
}

//org.bukkit.entity.Chicken
declare interface Chicken extends Animals {
}

//java.time.temporal.ChronoField
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

//java.time.chrono.ChronoLocalDate
declare interface ChronoLocalDate extends Temporal, TemporalAdjuster, Comparable {
    adjustInto(temporal: Temporal): Temporal;
    atTime(localTime: LocalTime): ChronoLocalDateTime;
    compareTo(object: any): number;
    compareTo(chronoLocalDate: ChronoLocalDate): number;
    equals(object: any): boolean;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    getChronology(): Chronology;
    getEra(): Era;
    hashCode(): number;
    isAfter(chronoLocalDate: ChronoLocalDate): boolean;
    isBefore(chronoLocalDate: ChronoLocalDate): boolean;
    isEqual(chronoLocalDate: ChronoLocalDate): boolean;
    isLeapYear(): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    lengthOfMonth(): number;
    lengthOfYear(): number;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(temporalAmount: TemporalAmount): ChronoLocalDate;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    plus(temporalAmount: TemporalAmount): ChronoLocalDate;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    query(temporalQuery: TemporalQuery): any;
    timeLineOrder(): Comparator;
    toEpochDay(): number;
    toString(): string;
    until(chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDate;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): ChronoLocalDate;
}

//java.time.chrono.ChronoLocalDateTime
declare interface ChronoLocalDateTime extends Temporal, TemporalAdjuster, Comparable {
    adjustInto(temporal: Temporal): Temporal;
    atZone(zoneId: ZoneId): ChronoZonedDateTime;
    compareTo(object: any): number;
    compareTo(chronoLocalDateTime: ChronoLocalDateTime): number;
    equals(object: any): boolean;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    getChronology(): Chronology;
    hashCode(): number;
    isAfter(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isBefore(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isEqual(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    plus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    query(temporalQuery: TemporalQuery): any;
    timeLineOrder(): Comparator;
    toEpochSecond(zoneOffset: ZoneOffset): number;
    toInstant(zoneOffset: ZoneOffset): Instant;
    toLocalDate(): ChronoLocalDate;
    toLocalTime(): LocalTime;
    toString(): string;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): ChronoLocalDateTime;
    with(temporalField: TemporalField, l: number): Temporal;
}

//java.time.chrono.ChronoPeriod
declare interface ChronoPeriod extends TemporalAmount {
    addTo(temporal: Temporal): Temporal;
    between(chronoLocalDate: ChronoLocalDate, chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    equals(object: any): boolean;
    get(temporalUnit: TemporalUnit): number;
    getChronology(): Chronology;
    getUnits(): List;
    hashCode(): number;
    isNegative(): boolean;
    isZero(): boolean;
    minus(temporalAmount: TemporalAmount): ChronoPeriod;
    multipliedBy(i: number): ChronoPeriod;
    negated(): ChronoPeriod;
    normalized(): ChronoPeriod;
    plus(temporalAmount: TemporalAmount): ChronoPeriod;
    subtractFrom(temporal: Temporal): Temporal;
    toString(): string;
}

//java.time.chrono.ChronoZonedDateTime
declare interface ChronoZonedDateTime extends Temporal, Comparable {
    compareTo(object: any): number;
    compareTo(chronoZonedDateTime: ChronoZonedDateTime): number;
    equals(object: any): boolean;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    get(temporalField: TemporalField): number;
    getChronology(): Chronology;
    getLong(temporalField: TemporalField): number;
    getOffset(): ZoneOffset;
    getZone(): ZoneId;
    hashCode(): number;
    isAfter(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isBefore(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isEqual(chronoZonedDateTime: ChronoZonedDateTime): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    timeLineOrder(): Comparator;
    toEpochSecond(): number;
    toInstant(): Instant;
    toLocalDate(): ChronoLocalDate;
    toLocalDateTime(): ChronoLocalDateTime;
    toLocalTime(): LocalTime;
    toString(): string;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): ChronoZonedDateTime;
    with(temporalField: TemporalField, l: number): ChronoZonedDateTime;
    with(temporalField: TemporalField, l: number): Temporal;
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime;
    withLaterOffsetAtOverlap(): ChronoZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ChronoZonedDateTime;
}

//java.time.chrono.Chronology
declare interface Chronology extends Comparable {
    compareTo(chronology: Chronology): number;
    compareTo(object: any): number;
    date(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    date(i: number, i: number, i: number): ChronoLocalDate;
    date(era: Era, i: number, i: number, i: number): ChronoLocalDate;
    dateEpochDay(l: number): ChronoLocalDate;
    dateNow(): ChronoLocalDate;
    dateNow(zoneId: ZoneId): ChronoLocalDate;
    dateNow(clock: Clock): ChronoLocalDate;
    dateYearDay(i: number, i: number): ChronoLocalDate;
    dateYearDay(era: Era, i: number, i: number): ChronoLocalDate;
    epochSecond(i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    epochSecond(era: Era, i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    equals(object: any): boolean;
    eraOf(i: number): Era;
    eras(): List;
    from(temporalAccessor: TemporalAccessor): Chronology;
    getAvailableChronologies(): Set;
    getCalendarType(): string;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    getId(): string;
    hashCode(): number;
    isLeapYear(l: number): boolean;
    localDateTime(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    of(s: string): Chronology;
    ofLocale(locale: Locale): Chronology;
    period(i: number, i: number, i: number): ChronoPeriod;
    prolepticYear(era: Era, i: number): number;
    range(chronoField: ChronoField): ValueRange;
    resolveDate(map: Map, resolverStyle: ResolverStyle): ChronoLocalDate;
    toString(): string;
    zonedDateTime(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ChronoZonedDateTime;
}

//org.bukkit.Chunk
declare interface Chunk extends PersistentDataHolder {
    addPluginChunkTicket(plugin: Plugin): boolean;
    contains(blockData: BlockData): boolean;
    getBlock(i: number, i: number, i: number): Block;
    getChunkSnapshot(): ChunkSnapshot;
    getChunkSnapshot(b: boolean, b: boolean, b: boolean): ChunkSnapshot;
    getEntities(): Entity[];
    getInhabitedTime(): number;
    getPluginChunkTickets(): Collection;
    getTileEntities(): BlockState[];
    getWorld(): World;
    getX(): number;
    getZ(): number;
    isEntitiesLoaded(): boolean;
    isForceLoaded(): boolean;
    isLoaded(): boolean;
    isSlimeChunk(): boolean;
    load(): boolean;
    load(b: boolean): boolean;
    removePluginChunkTicket(plugin: Plugin): boolean;
    setForceLoaded(b: boolean): void;
    setInhabitedTime(l: number): void;
    unload(): boolean;
    unload(b: boolean): boolean;
}

//org.bukkit.generator.ChunkGenerator$ChunkData
declare interface ChunkData {
    getBiome(i: number, i: number, i: number): Biome;
    getBlockData(i: number, i: number, i: number): BlockData;
    getData(i: number, i: number, i: number): number;
    getMaxHeight(): number;
    getMinHeight(): number;
    getType(i: number, i: number, i: number): Material;
    getTypeAndData(i: number, i: number, i: number): MaterialData;
    setBlock(i: number, i: number, i: number, blockData: BlockData): void;
    setBlock(i: number, i: number, i: number, materialData: MaterialData): void;
    setBlock(i: number, i: number, i: number, material: Material): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, materialData: MaterialData): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, blockData: BlockData): void;
    setRegion(i: number, i: number, i: number, i: number, i: number, i: number, material: Material): void;
}

//org.bukkit.event.world.ChunkEvent
declare interface ChunkEvent extends WorldEvent {
    getChunk(): Chunk;
}

//org.bukkit.generator.ChunkGenerator
declare interface ChunkGenerator {
    canSpawn(world: World, i: number, i: number): boolean;
    generateBedrock(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    generateCaves(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    generateChunkData(world: World, random: Random, i: number, i: number, biomeGrid: BiomeGrid): ChunkData;
    generateNoise(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    generateSurface(worldInfo: WorldInfo, random: Random, i: number, i: number, chunkData: ChunkData): void;
    getBaseHeight(worldInfo: WorldInfo, random: Random, i: number, i: number, heightMap: HeightMap): number;
    getDefaultBiomeProvider(worldInfo: WorldInfo): BiomeProvider;
    getDefaultPopulators(world: World): List;
    getFixedSpawnLocation(world: World, random: Random): Location;
    isParallelCapable(): boolean;
    shouldGenerateBedrock(): boolean;
    shouldGenerateCaves(): boolean;
    shouldGenerateDecorations(): boolean;
    shouldGenerateMobs(): boolean;
    shouldGenerateNoise(): boolean;
    shouldGenerateStructures(): boolean;
    shouldGenerateSurface(): boolean;
}

//org.bukkit.event.world.ChunkLoadEvent
declare interface ChunkLoadEvent extends ChunkEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isNewChunk(): boolean;
}

//org.bukkit.event.world.ChunkPopulateEvent
declare interface ChunkPopulateEvent extends ChunkEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.ChunkSnapshot
declare interface ChunkSnapshot {
    contains(blockData: BlockData): boolean;
    getBiome(i: number, i: number): Biome;
    getBiome(i: number, i: number, i: number): Biome;
    getBlockData(i: number, i: number, i: number): BlockData;
    getBlockEmittedLight(i: number, i: number, i: number): number;
    getBlockSkyLight(i: number, i: number, i: number): number;
    getBlockType(i: number, i: number, i: number): Material;
    getCaptureFullTime(): number;
    getData(i: number, i: number, i: number): number;
    getHighestBlockYAt(i: number, i: number): number;
    getRawBiomeTemperature(i: number, i: number): number;
    getRawBiomeTemperature(i: number, i: number, i: number): number;
    getWorldName(): string;
    getX(): number;
    getZ(): number;
    isSectionEmpty(i: number): boolean;
}

//org.bukkit.event.world.ChunkUnloadEvent
declare interface ChunkUnloadEvent extends ChunkEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isSaveChunk(): boolean;
    setSaveChunk(b: boolean): void;
}

//java.lang.Class
declare interface Class extends Serializable, GenericDeclaration, Type, AnnotatedElement, OfField, Constable {
    arrayType(): OfField;
    arrayType(): Class;
    asSubclass(clazz: Class): Class;
    cast(object: any): any;
    componentType(): OfField;
    componentType(): Class;
    describeConstable(): Optional;
    descriptorString(): string;
    desiredAssertionStatus(): boolean;
    forName(s: string): Class;
    forName(mod: Module, s: string): Class;
    forName(s: string, b: boolean, classLoader: ClassLoader): Class;
    getAnnotatedInterfaces(): AnnotatedType[];
    getAnnotatedSuperclass(): AnnotatedType;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getCanonicalName(): string;
    getClassLoader(): ClassLoader;
    getClasses(): Class[];
    getComponentType(): Class;
    getConstructor(clazz: Class): Constructor;
    getConstructors(): Constructor[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredClasses(): Class[];
    getDeclaredConstructor(clazz: Class): Constructor;
    getDeclaredConstructors(): Constructor[];
    getDeclaredField(s: string): Field;
    getDeclaredFields(): Field[];
    getDeclaredMethod(s: string, clazz: Class): Method;
    getDeclaredMethods(): Method[];
    getDeclaringClass(): Class;
    getEnclosingClass(): Class;
    getEnclosingConstructor(): Constructor;
    getEnclosingMethod(): Method;
    getEnumConstants(): any[];
    getField(s: string): Field;
    getFields(): Field[];
    getGenericInterfaces(): Type[];
    getGenericSuperclass(): Type;
    getInterfaces(): Class[];
    getMethod(s: string, clazz: Class): Method;
    getMethods(): Method[];
    getModifiers(): number;
    getModule(): Module;
    getName(): string;
    getNestHost(): Class;
    getNestMembers(): Class[];
    getPackage(): Package;
    getPackageName(): string;
    getPermittedSubclasses(): Class[];
    getProtectionDomain(): ProtectionDomain;
    getRecordComponents(): RecordComponent[];
    getResource(s: string): URL;
    getResourceAsStream(s: string): InputStream;
    getSigners(): any[];
    getSimpleName(): string;
    getSuperclass(): Class;
    getTypeName(): string;
    getTypeParameters(): TypeVariable[];
    isAnnotation(): boolean;
    isAnnotationPresent(clazz: Class): boolean;
    isAnonymousClass(): boolean;
    isArray(): boolean;
    isAssignableFrom(clazz: Class): boolean;
    isEnum(): boolean;
    isHidden(): boolean;
    isInstance(object: any): boolean;
    isInterface(): boolean;
    isLocalClass(): boolean;
    isMemberClass(): boolean;
    isNestmateOf(clazz: Class): boolean;
    isPrimitive(): boolean;
    isRecord(): boolean;
    isSealed(): boolean;
    isSynthetic(): boolean;
    newInstance(): any;
    toGenericString(): string;
}

//java.lang.ClassLoader
declare interface ClassLoader {
    clearAssertionStatus(): void;
    getDefinedPackage(s: string): Package;
    getDefinedPackages(): Package[];
    getName(): string;
    getParent(): ClassLoader;
    getPlatformClassLoader(): ClassLoader;
    getResource(s: string): URL;
    getResourceAsStream(s: string): InputStream;
    getResources(s: string): Enumeration;
    getSystemClassLoader(): ClassLoader;
    getSystemResource(s: string): URL;
    getSystemResourceAsStream(s: string): InputStream;
    getSystemResources(s: string): Enumeration;
    getUnnamedModule(): Module;
    isRegisteredAsParallelCapable(): boolean;
    loadClass(s: string): Class;
    resources(s: string): Stream;
    setClassAssertionStatus(s: string, b: boolean): void;
    setDefaultAssertionStatus(b: boolean): void;
    setPackageAssertionStatus(s: string, b: boolean): void;
}

//java.lang.invoke.MethodHandles$Lookup$ClassOption
declare enum ClassOption {
    NESTMATE,
    STRONG,
}

//net.md_5.bungee.api.chat.ClickEvent
declare interface ClickEvent {
    getAction(): Action;
    getValue(): string;
}

//org.bukkit.event.inventory.ClickType
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

//java.awt.datatransfer.Clipboard
declare interface Clipboard {
    addFlavorListener(flavorListener: FlavorListener): void;
    getAvailableDataFlavors(): DataFlavor[];
    getContents(object: any): Transferable;
    getData(dataFlavor: DataFlavor): any;
    getFlavorListeners(): FlavorListener[];
    getName(): string;
    isDataFlavorAvailable(dataFlavor: DataFlavor): boolean;
    removeFlavorListener(flavorListener: FlavorListener): void;
    setContents(transferable: Transferable, clipboardOwner: ClipboardOwner): void;
}

//java.awt.datatransfer.ClipboardOwner
declare interface ClipboardOwner {
    lostOwnership(clipboard: Clipboard, transferable: Transferable): void;
}

//java.time.Clock
declare interface Clock extends InstantSource {
    fixed(instant: Instant, zoneId: ZoneId): Clock;
    getZone(): ZoneId;
    instant(): Instant;
    millis(): number;
    offset(clock: Clock, duration: Duration): Clock;
    system(zoneId: ZoneId): Clock;
    systemDefaultZone(): Clock;
    systemUTC(): Clock;
    tick(clock: Clock, duration: Duration): Clock;
    tickMillis(zoneId: ZoneId): Clock;
    tickMinutes(zoneId: ZoneId): Clock;
    tickSeconds(zoneId: ZoneId): Clock;
    withZone(zoneId: ZoneId): Clock;
}

//java.lang.Cloneable
declare interface Cloneable {
}

//java.io.Closeable
declare interface Closeable extends AutoCloseable {
    close(): void;
}

//org.bukkit.material.Coal
declare interface Coal extends MaterialData {
    getType(): CoalType;
    setType(coalType: CoalType): void;
}

//org.bukkit.CoalType
declare enum CoalType {
    COAL,
    CHARCOAL,
}

//org.bukkit.block.data.type.Cocoa
declare interface Cocoa extends Ageable, Directional {
}

//org.bukkit.material.CocoaPlant
declare interface CocoaPlant extends MaterialData, Directional, Attachable {
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    getSize(): CocoaPlantSize;
    setFacingDirection(blockFace: BlockFace): void;
    setSize(cocoaPlantSize: CocoaPlantSize): void;
}

//org.bukkit.material.CocoaPlant$CocoaPlantSize
declare enum CocoaPlantSize {
    SMALL,
    MEDIUM,
    LARGE,
}

//org.bukkit.entity.Cod
declare interface Cod extends Fish {
}

//java.security.CodeSigner
declare interface CodeSigner extends Serializable {
    getSignerCertPath(): CertPath;
    getTimestamp(): Timestamp;
}

//java.security.CodeSource
declare interface CodeSource extends Serializable {
    getCertificates(): Certificate[];
    getCodeSigners(): CodeSigner[];
    getLocation(): URL;
    implies(codeSource: CodeSource): boolean;
}

//java.nio.charset.CoderResult
declare interface CoderResult {
    isError(): boolean;
    isMalformed(): boolean;
    isOverflow(): boolean;
    isUnderflow(): boolean;
    isUnmappable(): boolean;
    length(): number;
    malformedForLength(i: number): CoderResult;
    throwException(): void;
    unmappableForLength(i: number): CoderResult;
    OVERFLOW: CoderResult;
    UNDERFLOW: CoderResult;
}

//java.nio.charset.CodingErrorAction
declare interface CodingErrorAction {
    IGNORE: CodingErrorAction;
    REPLACE: CodingErrorAction;
    REPORT: CodingErrorAction;
}

//java.util.Collection
declare interface Collection extends Iterable {
    add(object: any): boolean;
    addAll(collection: Collection): boolean;
    clear(): void;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    equals(object: any): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    iterator(): Iterator;
    parallelStream(): Stream;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    removeIf(predicate: Predicate): boolean;
    retainAll(collection: Collection): boolean;
    size(): number;
    spliterator(): Spliterator;
    stream(): Stream;
    toArray(): any[];
    toArray(object: any): any[];
    toArray(intFunction: IntFunction): any[];
}

//java.util.stream.Collector
declare interface Collector {
    accumulator(): BiConsumer;
    characteristics(): Set;
    combiner(): BinaryOperator;
    finisher(): Function;
    of(supplier: Supplier, biConsumer: BiConsumer, binaryOperator: BinaryOperator, characteristics: Characteristics): Collector;
    of(supplier: Supplier, biConsumer: BiConsumer, binaryOperator: BinaryOperator, func: Function, characteristics: Characteristics): Collector;
    supplier(): Supplier;
}

//org.bukkit.Color
declare interface Color extends ConfigurationSerializable {
    asBGR(): number;
    asRGB(): number;
    deserialize(map: Map): Color;
    fromBGR(i: number): Color;
    fromBGR(i: number, i: number, i: number): Color;
    fromRGB(i: number): Color;
    fromRGB(i: number, i: number, i: number): Color;
    getBlue(): number;
    getGreen(): number;
    getRed(): number;
    mixColors(color: Color): Color;
    mixDyes(dyeColor: DyeColor): Color;
    serialize(): Map;
    setBlue(i: number): Color;
    setGreen(i: number): Color;
    setRed(i: number): Color;
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

//org.bukkit.entity.Llama$Color
declare enum Color {
    CREAMY,
    WHITE,
    BROWN,
    GRAY,
}

//java.awt.Color
declare interface Color extends Paint, Serializable {
    HSBtoRGB(f: number, f: number, f: number): number;
    RGBtoHSB(i: number, i: number, i: number, f: number): number[];
    brighter(): Color;
    createContext(colorModel: ColorModel, rectangle: Rectangle, rectangle2D: Rectangle2D, affineTransform: AffineTransform, renderingHints: RenderingHints): PaintContext;
    darker(): Color;
    decode(s: string): Color;
    getAlpha(): number;
    getBlue(): number;
    getColor(s: string): Color;
    getColor(s: string, i: number): Color;
    getColor(s: string, color: Color): Color;
    getColorComponents(f: number): number[];
    getColorComponents(colorSpace: ColorSpace, f: number): number[];
    getColorSpace(): ColorSpace;
    getComponents(f: number): number[];
    getComponents(colorSpace: ColorSpace, f: number): number[];
    getGreen(): number;
    getHSBColor(f: number, f: number, f: number): Color;
    getRGB(): number;
    getRGBColorComponents(f: number): number[];
    getRGBComponents(f: number): number[];
    getRed(): number;
    getTransparency(): number;
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

//org.bukkit.entity.Horse$Color
declare enum Color {
    WHITE,
    CREAMY,
    CHESTNUT,
    BROWN,
    BLACK,
    GRAY,
    DARK_BROWN,
}

//java.awt.image.ColorModel
declare interface ColorModel extends Transparency {
    coerceData(writableRaster: WritableRaster, b: boolean): ColorModel;
    createCompatibleSampleModel(i: number, i: number): SampleModel;
    createCompatibleWritableRaster(i: number, i: number): WritableRaster;
    getAlpha(object: any): number;
    getAlpha(i: number): number;
    getAlphaRaster(writableRaster: WritableRaster): WritableRaster;
    getBlue(object: any): number;
    getBlue(i: number): number;
    getColorSpace(): ColorSpace;
    getComponentSize(): number[];
    getComponentSize(i: number): number;
    getComponents(i: number, i: number, i: number): number[];
    getComponents(object: any, i: number, i: number): number[];
    getDataElement(f: number, i: number): number;
    getDataElement(i: number, i: number): number;
    getDataElements(i: number, object: any): any;
    getDataElements(f: number, i: number, object: any): any;
    getDataElements(i: number, i: number, object: any): any;
    getGreen(i: number): number;
    getGreen(object: any): number;
    getNormalizedComponents(object: any, f: number, i: number): number[];
    getNormalizedComponents(i: number, i: number, f: number, i: number): number[];
    getNumColorComponents(): number;
    getNumComponents(): number;
    getPixelSize(): number;
    getRGB(i: number): number;
    getRGB(object: any): number;
    getRGBdefault(): ColorModel;
    getRed(object: any): number;
    getRed(i: number): number;
    getTransferType(): number;
    getTransparency(): number;
    getUnnormalizedComponents(f: number, i: number, i: number, i: number): number[];
    hasAlpha(): boolean;
    isAlphaPremultiplied(): boolean;
    isCompatibleRaster(raster: Raster): boolean;
    isCompatibleSampleModel(sampleModel: SampleModel): boolean;
}

//java.awt.color.ColorSpace
declare interface ColorSpace extends Serializable {
    fromCIEXYZ(f: number): number[];
    fromRGB(f: number): number[];
    getInstance(i: number): ColorSpace;
    getMaxValue(i: number): number;
    getMinValue(i: number): number;
    getName(i: number): string;
    getNumComponents(): number;
    getType(): number;
    isCS_sRGB(): boolean;
    toCIEXYZ(f: number): number[];
    toRGB(f: number): number[];
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

//java.awt.PageAttributes$ColorType
declare interface ColorType extends AttributeValue {
    COLOR: ColorType;
    MONOCHROME: ColorType;
}

//org.bukkit.material.Colorable
declare interface Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

//org.bukkit.material.Command
declare interface Command extends MaterialData, Redstone {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

//org.bukkit.command.Command
declare interface Command {
    broadcastCommandMessage(commandSender: CommandSender, s: string): void;
    broadcastCommandMessage(commandSender: CommandSender, s: string, b: boolean): void;
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    getAliases(): List;
    getDescription(): string;
    getLabel(): string;
    getName(): string;
    getPermission(): string;
    getPermissionMessage(): string;
    getUsage(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setAliases(list: List): Command;
    setDescription(s: string): Command;
    setLabel(s: string): boolean;
    setName(s: string): boolean;
    setPermission(s: string): void;
    setPermissionMessage(s: string): Command;
    setUsage(s: string): Command;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, s: string, location: Location): List;
    testPermission(commandSender: CommandSender): boolean;
    testPermissionSilent(commandSender: CommandSender): boolean;
    unregister(commandMap: CommandMap): boolean;
    timings: CustomTimingsHandler;
}

//org.bukkit.block.data.type.CommandBlock
declare interface CommandBlock extends Directional {
    isConditional(): boolean;
    setConditional(b: boolean): void;
}

//org.bukkit.block.CommandBlock
declare interface CommandBlock extends TileState {
    getCommand(): string;
    getName(): string;
    setCommand(s: string): void;
    setName(s: string): void;
}

//org.bukkit.command.CommandException
declare interface CommandException extends RuntimeException {
}

//org.bukkit.command.CommandExecutor
declare interface CommandExecutor {
    onCommand(commandSender: CommandSender, command: Command, s: string, s: string): boolean;
}

//org.bukkit.command.CommandMap
declare interface CommandMap {
    clearCommands(): void;
    dispatch(commandSender: CommandSender, s: string): boolean;
    getCommand(s: string): Command;
    register(s: string, command: Command): boolean;
    register(s: string, s: string, command: Command): boolean;
    registerAll(s: string, list: List): void;
    tabComplete(commandSender: CommandSender, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, location: Location): List;
}

//org.bukkit.entity.minecart.CommandMinecart
declare interface CommandMinecart extends Minecart {
    getCommand(): string;
    setCommand(s: string): void;
    setName(s: string): void;
}

//org.bukkit.util.permissions.CommandPermissions
declare interface CommandPermissions {
    registerPermissions(permission: Permission): Permission;
}

//org.bukkit.command.CommandSender
declare interface CommandSender extends Permissible {
    getName(): string;
    getServer(): Server;
    sendMessage(s: string): void;
    sendMessage(s: string): void;
    sendMessage(uUID: UUID, s: string): void;
    sendMessage(uUID: UUID, s: string): void;
    spigot(): Spigot;
}

//java.lang.Comparable
declare interface Comparable {
    compareTo(object: any): number;
}

//org.bukkit.block.data.type.Comparator
declare interface Comparator extends Directional, Powerable {
    getMode(): Mode;
    setMode(mode: Mode): void;
}

//org.bukkit.block.Comparator
declare interface Comparator extends TileState {
}

//org.bukkit.material.Comparator
declare interface Comparator extends MaterialData, Directional, Redstone {
    getFacing(): BlockFace;
    isBeingPowered(): boolean;
    isPowered(): boolean;
    isSubtractionMode(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setSubtractionMode(b: boolean): void;
}

//java.util.Comparator
declare interface Comparator {
    compare(object: any, object: any): number;
    comparing(func: Function): Comparator;
    comparing(func: Function, comparator: Comparator): Comparator;
    comparingDouble(toDoubleFunction: ToDoubleFunction): Comparator;
    comparingInt(toIntFunction: ToIntFunction): Comparator;
    comparingLong(toLongFunction: ToLongFunction): Comparator;
    equals(object: any): boolean;
    naturalOrder(): Comparator;
    nullsFirst(comparator: Comparator): Comparator;
    nullsLast(comparator: Comparator): Comparator;
    reverseOrder(): Comparator;
    reversed(): Comparator;
    thenComparing(comparator: Comparator): Comparator;
    thenComparing(func: Function): Comparator;
    thenComparing(func: Function, comparator: Comparator): Comparator;
    thenComparingDouble(toDoubleFunction: ToDoubleFunction): Comparator;
    thenComparingInt(toIntFunction: ToIntFunction): Comparator;
    thenComparingLong(toLongFunction: ToLongFunction): Comparator;
}

//org.bukkit.inventory.meta.CompassMeta
declare interface CompassMeta extends ItemMeta {
    clone(): CompassMeta;
    clone(): ItemMeta;
    clone(): any;
    getLodestone(): Location;
    hasLodestone(): boolean;
    isLodestoneTracked(): boolean;
    setLodestone(location: Location): void;
    setLodestoneTracked(b: boolean): void;
}

//java.util.concurrent.CompletableFuture
declare interface CompletableFuture extends Future, CompletionStage {
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletableFuture;
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletableFuture;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletableFuture;
    allOf(completableFuture: CompletableFuture): CompletableFuture;
    anyOf(completableFuture: CompletableFuture): CompletableFuture;
    applyToEither(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEither(completionStage: CompletionStage, func: Function): CompletableFuture;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletableFuture;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletableFuture;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletionStage;
    cancel(b: boolean): boolean;
    complete(object: any): boolean;
    completeAsync(supplier: Supplier): CompletableFuture;
    completeAsync(supplier: Supplier, executor: Executor): CompletableFuture;
    completeExceptionally(throwable: Throwable): boolean;
    completeOnTimeout(object: any, l: number, timeUnit: TimeUnit): CompletableFuture;
    completedFuture(object: any): CompletableFuture;
    completedStage(object: any): CompletionStage;
    copy(): CompletableFuture;
    defaultExecutor(): Executor;
    delayedExecutor(l: number, timeUnit: TimeUnit): Executor;
    delayedExecutor(l: number, timeUnit: TimeUnit, executor: Executor): Executor;
    exceptionally(func: Function): CompletableFuture;
    exceptionally(func: Function): CompletionStage;
    exceptionallyAsync(func: Function): CompletableFuture;
    exceptionallyAsync(func: Function): CompletionStage;
    exceptionallyAsync(func: Function, executor: Executor): CompletableFuture;
    exceptionallyAsync(func: Function, executor: Executor): CompletionStage;
    exceptionallyCompose(func: Function): CompletableFuture;
    exceptionallyCompose(func: Function): CompletionStage;
    exceptionallyComposeAsync(func: Function): CompletableFuture;
    exceptionallyComposeAsync(func: Function): CompletionStage;
    exceptionallyComposeAsync(func: Function, executor: Executor): CompletableFuture;
    exceptionallyComposeAsync(func: Function, executor: Executor): CompletionStage;
    failedFuture(throwable: Throwable): CompletableFuture;
    failedStage(throwable: Throwable): CompletionStage;
    get(): any;
    get(l: number, timeUnit: TimeUnit): any;
    getNow(object: any): any;
    getNumberOfDependents(): number;
    handle(biFunction: BiFunction): CompletionStage;
    handle(biFunction: BiFunction): CompletableFuture;
    handleAsync(biFunction: BiFunction): CompletableFuture;
    handleAsync(biFunction: BiFunction): CompletionStage;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletionStage;
    handleAsync(biFunction: BiFunction, executor: Executor): CompletableFuture;
    isCancelled(): boolean;
    isCompletedExceptionally(): boolean;
    isDone(): boolean;
    join(): any;
    minimalCompletionStage(): CompletionStage;
    newIncompleteFuture(): CompletableFuture;
    obtrudeException(throwable: Throwable): void;
    obtrudeValue(object: any): void;
    orTimeout(l: number, timeUnit: TimeUnit): CompletableFuture;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterBoth(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    runAfterBothAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletableFuture;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEither(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletableFuture;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletionStage;
    runAfterEitherAsync(completionStage: CompletionStage, runnable: Runnable, executor: Executor): CompletableFuture;
    runAsync(runnable: Runnable): CompletableFuture;
    runAsync(runnable: Runnable, executor: Executor): CompletableFuture;
    supplyAsync(supplier: Supplier): CompletableFuture;
    supplyAsync(supplier: Supplier, executor: Executor): CompletableFuture;
    thenAccept(consumer: Consumer): CompletionStage;
    thenAccept(consumer: Consumer): CompletableFuture;
    thenAcceptAsync(consumer: Consumer): CompletableFuture;
    thenAcceptAsync(consumer: Consumer): CompletionStage;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletionStage;
    thenAcceptAsync(consumer: Consumer, executor: Executor): CompletableFuture;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletableFuture;
    thenAcceptBoth(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletableFuture;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer): CompletionStage;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletableFuture;
    thenAcceptBothAsync(completionStage: CompletionStage, biConsumer: BiConsumer, executor: Executor): CompletionStage;
    thenApply(func: Function): CompletionStage;
    thenApply(func: Function): CompletableFuture;
    thenApplyAsync(func: Function): CompletionStage;
    thenApplyAsync(func: Function): CompletableFuture;
    thenApplyAsync(func: Function, executor: Executor): CompletableFuture;
    thenApplyAsync(func: Function, executor: Executor): CompletionStage;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombine(completionStage: CompletionStage, biFunction: BiFunction): CompletableFuture;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletionStage;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction): CompletableFuture;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletableFuture;
    thenCombineAsync(completionStage: CompletionStage, biFunction: BiFunction, executor: Executor): CompletionStage;
    thenCompose(func: Function): CompletableFuture;
    thenCompose(func: Function): CompletionStage;
    thenComposeAsync(func: Function): CompletableFuture;
    thenComposeAsync(func: Function): CompletionStage;
    thenComposeAsync(func: Function, executor: Executor): CompletionStage;
    thenComposeAsync(func: Function, executor: Executor): CompletableFuture;
    thenRun(runnable: Runnable): CompletableFuture;
    thenRun(runnable: Runnable): CompletionStage;
    thenRunAsync(runnable: Runnable): CompletableFuture;
    thenRunAsync(runnable: Runnable): CompletionStage;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletableFuture;
    thenRunAsync(runnable: Runnable, executor: Executor): CompletionStage;
    toCompletableFuture(): CompletableFuture;
    whenComplete(biConsumer: BiConsumer): CompletableFuture;
    whenComplete(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer): CompletableFuture;
    whenCompleteAsync(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletableFuture;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletionStage;
}

//java.nio.channels.CompletionHandler
declare interface CompletionHandler {
    completed(object: any, object: any): void;
    failed(throwable: Throwable, object: any): void;
}

//java.util.concurrent.CompletionStage
declare interface CompletionStage {
    acceptEither(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer): CompletionStage;
    acceptEitherAsync(completionStage: CompletionStage, consumer: Consumer, executor: Executor): CompletionStage;
    applyToEither(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function): CompletionStage;
    applyToEitherAsync(completionStage: CompletionStage, func: Function, executor: Executor): CompletionStage;
    exceptionally(func: Function): CompletionStage;
    exceptionallyAsync(func: Function): CompletionStage;
    exceptionallyAsync(func: Function, executor: Executor): CompletionStage;
    exceptionallyCompose(func: Function): CompletionStage;
    exceptionallyComposeAsync(func: Function): CompletionStage;
    exceptionallyComposeAsync(func: Function, executor: Executor): CompletionStage;
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
    toCompletableFuture(): CompletableFuture;
    whenComplete(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer): CompletionStage;
    whenCompleteAsync(biConsumer: BiConsumer, executor: Executor): CompletionStage;
}

//org.bukkit.entity.ComplexEntityPart
declare interface ComplexEntityPart extends Entity {
    getParent(): ComplexLivingEntity;
}

//org.bukkit.entity.ComplexLivingEntity
declare interface ComplexLivingEntity extends LivingEntity {
    getParts(): Set;
}

//org.bukkit.inventory.ComplexRecipe
declare interface ComplexRecipe extends Recipe, Keyed {
}

//java.awt.Component
declare interface Component extends ImageObserver, MenuContainer, Serializable {
    action(event: Event, object: any): boolean;
    add(popupMenu: PopupMenu): void;
    addComponentListener(componentListener: ComponentListener): void;
    addFocusListener(focusListener: FocusListener): void;
    addHierarchyBoundsListener(hierarchyBoundsListener: HierarchyBoundsListener): void;
    addHierarchyListener(hierarchyListener: HierarchyListener): void;
    addInputMethodListener(inputMethodListener: InputMethodListener): void;
    addKeyListener(keyListener: KeyListener): void;
    addMouseListener(mouseListener: MouseListener): void;
    addMouseMotionListener(mouseMotionListener: MouseMotionListener): void;
    addMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
    addNotify(): void;
    addPropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    addPropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    applyComponentOrientation(componentOrientation: ComponentOrientation): void;
    areFocusTraversalKeysSet(i: number): boolean;
    bounds(): Rectangle;
    checkImage(image: Image, imageObserver: ImageObserver): number;
    checkImage(image: Image, i: number, i: number, imageObserver: ImageObserver): number;
    contains(point: Point): boolean;
    contains(i: number, i: number): boolean;
    createImage(imageProducer: ImageProducer): Image;
    createImage(i: number, i: number): Image;
    createVolatileImage(i: number, i: number): VolatileImage;
    createVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities): VolatileImage;
    deliverEvent(event: Event): void;
    disable(): void;
    dispatchEvent(aWTEvent: AWTEvent): void;
    doLayout(): void;
    enable(): void;
    enable(b: boolean): void;
    enableInputMethods(b: boolean): void;
    firePropertyChange(s: string, c: string, c: string): void;
    firePropertyChange(s: string, l: number, l: number): void;
    firePropertyChange(s: string, d: number, d: number): void;
    firePropertyChange(s: string, f: number, f: number): void;
    firePropertyChange(s: string, s: number, s: number): void;
    firePropertyChange(s: string, b: number, b: number): void;
    getAccessibleContext(): AccessibleContext;
    getAlignmentX(): number;
    getAlignmentY(): number;
    getBackground(): Color;
    getBaseline(i: number, i: number): number;
    getBaselineResizeBehavior(): BaselineResizeBehavior;
    getBounds(): Rectangle;
    getBounds(rectangle: Rectangle): Rectangle;
    getColorModel(): ColorModel;
    getComponentAt(point: Point): Component;
    getComponentAt(i: number, i: number): Component;
    getComponentListeners(): ComponentListener[];
    getComponentOrientation(): ComponentOrientation;
    getCursor(): Cursor;
    getDropTarget(): DropTarget;
    getFocusCycleRootAncestor(): Container;
    getFocusListeners(): FocusListener[];
    getFocusTraversalKeys(i: number): Set;
    getFocusTraversalKeysEnabled(): boolean;
    getFont(): Font;
    getFontMetrics(font: Font): FontMetrics;
    getForeground(): Color;
    getGraphics(): Graphics;
    getGraphicsConfiguration(): GraphicsConfiguration;
    getHeight(): number;
    getHierarchyBoundsListeners(): HierarchyBoundsListener[];
    getHierarchyListeners(): HierarchyListener[];
    getIgnoreRepaint(): boolean;
    getInputContext(): InputContext;
    getInputMethodListeners(): InputMethodListener[];
    getInputMethodRequests(): InputMethodRequests;
    getKeyListeners(): KeyListener[];
    getListeners(clazz: Class): EventListener[];
    getLocale(): Locale;
    getLocation(): Point;
    getLocation(point: Point): Point;
    getLocationOnScreen(): Point;
    getMaximumSize(): Dimension;
    getMinimumSize(): Dimension;
    getMouseListeners(): MouseListener[];
    getMouseMotionListeners(): MouseMotionListener[];
    getMousePosition(): Point;
    getMouseWheelListeners(): MouseWheelListener[];
    getName(): string;
    getParent(): Container;
    getPreferredSize(): Dimension;
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(s: string): PropertyChangeListener[];
    getSize(): Dimension;
    getSize(dimension: Dimension): Dimension;
    getToolkit(): Toolkit;
    getTreeLock(): any;
    getWidth(): number;
    getX(): number;
    getY(): number;
    gotFocus(event: Event, object: any): boolean;
    handleEvent(event: Event): boolean;
    hasFocus(): boolean;
    hide(): void;
    imageUpdate(image: Image, i: number, i: number, i: number, i: number, i: number): boolean;
    inside(i: number, i: number): boolean;
    invalidate(): void;
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
    layout(): void;
    list(): void;
    list(printWriter: PrintWriter): void;
    list(printStream: PrintStream): void;
    list(printWriter: PrintWriter, i: number): void;
    list(printStream: PrintStream, i: number): void;
    locate(i: number, i: number): Component;
    location(): Point;
    lostFocus(event: Event, object: any): boolean;
    minimumSize(): Dimension;
    mouseDown(event: Event, i: number, i: number): boolean;
    mouseDrag(event: Event, i: number, i: number): boolean;
    mouseEnter(event: Event, i: number, i: number): boolean;
    mouseExit(event: Event, i: number, i: number): boolean;
    mouseMove(event: Event, i: number, i: number): boolean;
    mouseUp(event: Event, i: number, i: number): boolean;
    move(i: number, i: number): void;
    nextFocus(): void;
    paint(graphics: Graphics): void;
    paintAll(graphics: Graphics): void;
    postEvent(event: Event): boolean;
    preferredSize(): Dimension;
    prepareImage(image: Image, imageObserver: ImageObserver): boolean;
    prepareImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    print(graphics: Graphics): void;
    printAll(graphics: Graphics): void;
    remove(menuComponent: MenuComponent): void;
    removeComponentListener(componentListener: ComponentListener): void;
    removeFocusListener(focusListener: FocusListener): void;
    removeHierarchyBoundsListener(hierarchyBoundsListener: HierarchyBoundsListener): void;
    removeHierarchyListener(hierarchyListener: HierarchyListener): void;
    removeInputMethodListener(inputMethodListener: InputMethodListener): void;
    removeKeyListener(keyListener: KeyListener): void;
    removeMouseListener(mouseListener: MouseListener): void;
    removeMouseMotionListener(mouseMotionListener: MouseMotionListener): void;
    removeMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
    removeNotify(): void;
    removePropertyChangeListener(propertyChangeListener: PropertyChangeListener): void;
    removePropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    repaint(): void;
    repaint(l: number): void;
    repaint(i: number, i: number, i: number, i: number): void;
    repaint(l: number, i: number, i: number, i: number, i: number): void;
    requestFocus(): void;
    requestFocus(cause: Cause): void;
    requestFocusInWindow(): boolean;
    requestFocusInWindow(cause: Cause): boolean;
    reshape(i: number, i: number, i: number, i: number): void;
    resize(dimension: Dimension): void;
    resize(i: number, i: number): void;
    revalidate(): void;
    setBackground(color: Color): void;
    setBounds(rectangle: Rectangle): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setComponentOrientation(componentOrientation: ComponentOrientation): void;
    setCursor(cursor: Cursor): void;
    setDropTarget(dropTarget: DropTarget): void;
    setEnabled(b: boolean): void;
    setFocusTraversalKeys(i: number, set: Set): void;
    setFocusTraversalKeysEnabled(b: boolean): void;
    setFocusable(b: boolean): void;
    setFont(font: Font): void;
    setForeground(color: Color): void;
    setIgnoreRepaint(b: boolean): void;
    setLocale(locale: Locale): void;
    setLocation(point: Point): void;
    setLocation(i: number, i: number): void;
    setMaximumSize(dimension: Dimension): void;
    setMinimumSize(dimension: Dimension): void;
    setMixingCutoutShape(shape: Shape): void;
    setName(s: string): void;
    setPreferredSize(dimension: Dimension): void;
    setSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    setVisible(b: boolean): void;
    show(): void;
    show(b: boolean): void;
    size(): Dimension;
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

//java.awt.event.ComponentEvent
declare interface ComponentEvent extends AWTEvent {
    getComponent(): Component;
    COMPONENT_FIRST: number;
    COMPONENT_HIDDEN: number;
    COMPONENT_LAST: number;
    COMPONENT_MOVED: number;
    COMPONENT_RESIZED: number;
    COMPONENT_SHOWN: number;
}

//java.awt.event.ComponentListener
declare interface ComponentListener extends EventListener {
    componentHidden(componentEvent: ComponentEvent): void;
    componentMoved(componentEvent: ComponentEvent): void;
    componentResized(componentEvent: ComponentEvent): void;
    componentShown(componentEvent: ComponentEvent): void;
}

//java.awt.ComponentOrientation
declare interface ComponentOrientation extends Serializable {
    getOrientation(locale: Locale): ComponentOrientation;
    getOrientation(resourceBundle: ResourceBundle): ComponentOrientation;
    isHorizontal(): boolean;
    isLeftToRight(): boolean;
    LEFT_TO_RIGHT: ComponentOrientation;
    RIGHT_TO_LEFT: ComponentOrientation;
    UNKNOWN: ComponentOrientation;
}

//org.yaml.snakeyaml.composer.Composer
declare interface Composer {
    checkNode(): boolean;
    getNode(): Node;
    getSingleNode(): Node;
}

//java.awt.Composite
declare interface Composite {
    createContext(colorModel: ColorModel, colorModel: ColorModel, renderingHints: RenderingHints): CompositeContext;
}

//java.awt.CompositeContext
declare interface CompositeContext {
    compose(raster: Raster, raster: Raster, writableRaster: WritableRaster): void;
    dispose(): void;
}

//java.util.concurrent.ConcurrentMap
declare interface ConcurrentMap extends Map {
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    forEach(biConsumer: BiConsumer): void;
    getOrDefault(object: any, object: any): any;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putIfAbsent(object: any, object: any): any;
    remove(object: any, object: any): boolean;
    replace(object: any, object: any): any;
    replace(object: any, object: any, object: any): boolean;
    replaceAll(biFunction: BiFunction): void;
}

//org.bukkit.block.Conduit
declare interface Conduit extends TileState {
}

//org.bukkit.configuration.Configuration
declare interface Configuration extends ConfigurationSection {
    addDefault(s: string, object: any): void;
    addDefaults(configuration: Configuration): void;
    addDefaults(map: Map): void;
    getDefaults(): Configuration;
    options(): ConfigurationOptions;
    setDefaults(configuration: Configuration): void;
}

//java.lang.module.Configuration
declare interface Configuration {
    empty(): Configuration;
    findModule(s: string): Optional;
    modules(): Set;
    parents(): List;
    resolve(moduleFinder: ModuleFinder, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    resolve(moduleFinder: ModuleFinder, list: List, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    resolveAndBind(moduleFinder: ModuleFinder, moduleFinder: ModuleFinder, collection: Collection): Configuration;
    resolveAndBind(moduleFinder: ModuleFinder, list: List, moduleFinder: ModuleFinder, collection: Collection): Configuration;
}

//org.bukkit.configuration.ConfigurationOptions
declare interface ConfigurationOptions {
    configuration(): Configuration;
    copyDefaults(): boolean;
    copyDefaults(b: boolean): ConfigurationOptions;
    pathSeparator(): string;
    pathSeparator(c: string): ConfigurationOptions;
}

//org.bukkit.configuration.ConfigurationSection
declare interface ConfigurationSection {
    addDefault(s: string, object: any): void;
    contains(s: string): boolean;
    contains(s: string, b: boolean): boolean;
    createSection(s: string): ConfigurationSection;
    createSection(s: string, map: Map): ConfigurationSection;
    get(s: string): any;
    get(s: string, object: any): any;
    getBoolean(s: string): boolean;
    getBoolean(s: string, b: boolean): boolean;
    getBooleanList(s: string): List;
    getByteList(s: string): List;
    getCharacterList(s: string): List;
    getColor(s: string): Color;
    getColor(s: string, color: Color): Color;
    getComments(s: string): List;
    getConfigurationSection(s: string): ConfigurationSection;
    getCurrentPath(): string;
    getDefaultSection(): ConfigurationSection;
    getDouble(s: string): number;
    getDouble(s: string, d: number): number;
    getDoubleList(s: string): List;
    getFloatList(s: string): List;
    getInlineComments(s: string): List;
    getInt(s: string): number;
    getInt(s: string, i: number): number;
    getIntegerList(s: string): List;
    getItemStack(s: string): ItemStack;
    getItemStack(s: string, itemStack: ItemStack): ItemStack;
    getKeys(b: boolean): Set;
    getList(s: string): List;
    getList(s: string, list: List): List;
    getLocation(s: string): Location;
    getLocation(s: string, location: Location): Location;
    getLong(s: string): number;
    getLong(s: string, l: number): number;
    getLongList(s: string): List;
    getMapList(s: string): List;
    getName(): string;
    getObject(s: string, clazz: Class): any;
    getObject(s: string, clazz: Class, object: any): any;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(s: string, offlinePlayer: OfflinePlayer): OfflinePlayer;
    getParent(): ConfigurationSection;
    getRoot(): Configuration;
    getSerializable(s: string, clazz: Class): ConfigurationSerializable;
    getSerializable(s: string, clazz: Class, configurationSerializable: ConfigurationSerializable): ConfigurationSerializable;
    getShortList(s: string): List;
    getString(s: string): string;
    getString(s: string, s: string): string;
    getStringList(s: string): List;
    getValues(b: boolean): Map;
    getVector(s: string): Vector;
    getVector(s: string, vector: Vector): Vector;
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
    set(s: string, object: any): void;
    setComments(s: string, list: List): void;
    setInlineComments(s: string, list: List): void;
}

//org.bukkit.configuration.serialization.ConfigurationSerializable
declare interface ConfigurationSerializable {
    serialize(): Map;
}

//org.bukkit.configuration.serialization.ConfigurationSerialization
declare interface ConfigurationSerialization {
    deserialize(map: Map): ConfigurationSerializable;
    deserializeObject(map: Map): ConfigurationSerializable;
    deserializeObject(map: Map, clazz: Class): ConfigurationSerializable;
    getAlias(clazz: Class): string;
    getClassByAlias(s: string): Class;
    registerClass(clazz: Class): void;
    registerClass(clazz: Class, s: string): void;
    unregisterClass(clazz: Class): void;
    unregisterClass(s: string): void;
    SERIALIZED_TYPE_KEY: string;
}

//org.bukkit.block.data.type.RedstoneWire$Connection
declare enum Connection {
    UP,
    SIDE,
    NONE,
}

//org.bukkit.command.ConsoleCommandSender
declare interface ConsoleCommandSender extends CommandSender, Conversable {
}

//java.lang.constant.Constable
declare interface Constable {
    describeConstable(): Optional;
}

//java.lang.constant.ConstantDesc
declare interface ConstantDesc {
    resolveConstantDesc(lookup: Lookup): any;
}

//org.yaml.snakeyaml.constructor.Construct
declare interface Construct {
    construct(node: Node): any;
    construct2ndStep(node: Node, object: any): void;
}

//org.yaml.snakeyaml.constructor.SafeConstructor$ConstructUndefined
declare interface ConstructUndefined extends AbstractConstruct {
    construct(node: Node): any;
}

//java.lang.reflect.Constructor
declare interface Constructor extends Executable {
    equals(object: any): boolean;
    hashCode(): number;
    newInstance(object: any): any;
    setAccessible(b: boolean): void;
    toString(): string;
}

//org.bukkit.util.Consumer
declare interface Consumer {
    accept(object: any): void;
}

//java.util.function.Consumer
declare interface Consumer {
    accept(object: any): void;
    andThen(consumer: Consumer): Consumer;
}

//org.bukkit.block.Container
declare interface Container extends TileState, BlockInventoryHolder, Lockable, Nameable {
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
}

//java.awt.Container
declare interface Container extends Component {
    add(component: Component): Component;
    add(s: string, component: Component): Component;
    add(component: Component, object: any): void;
    add(component: Component, i: number): Component;
    add(component: Component, object: any, i: number): void;
    addContainerListener(containerListener: ContainerListener): void;
    countComponents(): number;
    findComponentAt(point: Point): Component;
    findComponentAt(i: number, i: number): Component;
    getComponent(i: number): Component;
    getComponentCount(): number;
    getComponentZOrder(component: Component): number;
    getComponents(): Component[];
    getContainerListeners(): ContainerListener[];
    getFocusTraversalPolicy(): FocusTraversalPolicy;
    getInsets(): Insets;
    getLayout(): LayoutManager;
    getMousePosition(b: boolean): Point;
    insets(): Insets;
    isAncestorOf(component: Component): boolean;
    isFocusCycleRoot(): boolean;
    isFocusTraversalPolicyProvider(): boolean;
    isFocusTraversalPolicySet(): boolean;
    isValidateRoot(): boolean;
    paintComponents(graphics: Graphics): void;
    printComponents(graphics: Graphics): void;
    remove(component: Component): void;
    remove(i: number): void;
    removeAll(): void;
    removeContainerListener(containerListener: ContainerListener): void;
    setComponentZOrder(component: Component, i: number): void;
    setFocusCycleRoot(b: boolean): void;
    setFocusTraversalPolicy(focusTraversalPolicy: FocusTraversalPolicy): void;
    setFocusTraversalPolicyProvider(b: boolean): void;
    setLayout(layoutManager: LayoutManager): void;
    transferFocusDownCycle(): void;
}

//java.awt.event.ContainerEvent
declare interface ContainerEvent extends ComponentEvent {
    getChild(): Component;
    getContainer(): Container;
    COMPONENT_ADDED: number;
    COMPONENT_REMOVED: number;
    CONTAINER_FIRST: number;
    CONTAINER_LAST: number;
}

//java.awt.event.ContainerListener
declare interface ContainerListener extends EventListener {
    componentAdded(containerEvent: ContainerEvent): void;
    componentRemoved(containerEvent: ContainerEvent): void;
}

//net.md_5.bungee.api.chat.hover.content.Content
declare interface Content {
    assertAction(action: Action): void;
    requiredAction(): Action;
}

//java.net.ContentHandler
declare interface ContentHandler {
    getContent(uRLConnection: URLConnection): any;
    getContent(uRLConnection: URLConnection, clazz: Class): any;
}

//java.net.ContentHandlerFactory
declare interface ContentHandlerFactory {
    createContentHandler(s: string): ContentHandler;
}

//java.util.ResourceBundle$Control
declare interface Control {
    getCandidateLocales(s: string, locale: Locale): List;
    getControl(list: List): Control;
    getFallbackLocale(s: string, locale: Locale): Locale;
    getFormats(s: string): List;
    getNoFallbackControl(list: List): Control;
    getTimeToLive(s: string, locale: Locale): number;
    needsReload(s: string, locale: Locale, s: string, classLoader: ClassLoader, resourceBundle: ResourceBundle, l: number): boolean;
    newBundle(s: string, locale: Locale, s: string, classLoader: ClassLoader, b: boolean): ResourceBundle;
    toBundleName(s: string, locale: Locale): string;
    toResourceName(s: string, s: string): string;
    FORMAT_CLASS: List;
    FORMAT_DEFAULT: List;
    FORMAT_PROPERTIES: List;
    TTL_DONT_CACHE: number;
    TTL_NO_EXPIRATION_CONTROL: number;
}

//java.lang.ModuleLayer$Controller
declare interface Controller {
    addExports(mod: Module, s: string, mod: Module): Controller;
    addOpens(mod: Module, s: string, mod: Module): Controller;
    addReads(mod: Module, mod: Module): Controller;
    layer(): ModuleLayer;
}

//org.bukkit.conversations.Conversable
declare interface Conversable {
    abandonConversation(conversation: Conversation): void;
    abandonConversation(conversation: Conversation, conversationAbandonedEvent: ConversationAbandonedEvent): void;
    acceptConversationInput(s: string): void;
    beginConversation(conversation: Conversation): boolean;
    isConversing(): boolean;
    sendRawMessage(s: string): void;
    sendRawMessage(uUID: UUID, s: string): void;
}

//org.bukkit.conversations.Conversation
declare interface Conversation {
    abandon(): void;
    abandon(conversationAbandonedEvent: ConversationAbandonedEvent): void;
    acceptInput(s: string): void;
    addConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): void;
    begin(): void;
    getCancellers(): List;
    getContext(): ConversationContext;
    getForWhom(): Conversable;
    getPrefix(): ConversationPrefix;
    getState(): ConversationState;
    isLocalEchoEnabled(): boolean;
    isModal(): boolean;
    outputNextPrompt(): void;
    removeConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): void;
    setLocalEchoEnabled(b: boolean): void;
}

//org.bukkit.conversations.ConversationAbandonedEvent
declare interface ConversationAbandonedEvent extends EventObject {
    getCanceller(): ConversationCanceller;
    getContext(): ConversationContext;
    gracefulExit(): boolean;
}

//org.bukkit.conversations.ConversationAbandonedListener
declare interface ConversationAbandonedListener extends EventListener {
    conversationAbandoned(conversationAbandonedEvent: ConversationAbandonedEvent): void;
}

//org.bukkit.conversations.ConversationCanceller
declare interface ConversationCanceller extends Cloneable {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    clone(): any;
    clone(): ConversationCanceller;
    setConversation(conversation: Conversation): void;
}

//org.bukkit.conversations.ConversationContext
declare interface ConversationContext {
    getAllSessionData(): Map;
    getForWhom(): Conversable;
    getPlugin(): Plugin;
    getSessionData(object: any): any;
    setSessionData(object: any, object: any): void;
}

//org.bukkit.conversations.ConversationFactory
declare interface ConversationFactory {
    addConversationAbandonedListener(conversationAbandonedListener: ConversationAbandonedListener): ConversationFactory;
    buildConversation(conversable: Conversable): Conversation;
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

//org.bukkit.conversations.ConversationPrefix
declare interface ConversationPrefix {
    getPrefix(conversationContext: ConversationContext): string;
}

//org.bukkit.conversations.Conversation$ConversationState
declare enum ConversationState {
    UNSTARTED,
    STARTED,
    ABANDONED,
}

//java.net.CookieHandler
declare interface CookieHandler {
    get(uRI: URI, map: Map): Map;
    getDefault(): CookieHandler;
    put(uRI: URI, map: Map): void;
    setDefault(cookieHandler: CookieHandler): void;
}

//org.bukkit.inventory.CookingRecipe
declare interface CookingRecipe extends Recipe, Keyed {
    getCookingTime(): number;
    getExperience(): number;
    getGroup(): string;
    getInput(): ItemStack;
    getInputChoice(): RecipeChoice;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    setCookingTime(i: number): void;
    setExperience(f: number): void;
    setGroup(s: string): void;
    setInput(material: Material): CookingRecipe;
    setInputChoice(recipeChoice: RecipeChoice): CookingRecipe;
}

//java.nio.file.CopyOption
declare interface CopyOption {
}

//org.bukkit.block.data.type.CoralWallFan
declare interface CoralWallFan extends Directional, Waterlogged {
}

//org.bukkit.entity.Cow
declare interface Cow extends Animals {
}

//org.bukkit.event.inventory.CraftItemEvent
declare interface CraftItemEvent extends InventoryClickEvent {
    getInventory(): CraftingInventory;
    getInventory(): Inventory;
    getRecipe(): Recipe;
}

//org.bukkit.inventory.CraftingInventory
declare interface CraftingInventory extends Inventory {
    getMatrix(): ItemStack[];
    getRecipe(): Recipe;
    getResult(): ItemStack;
    setMatrix(itemStack: ItemStack): void;
    setResult(itemStack: ItemStack): void;
}

//org.bukkit.event.world.PortalCreateEvent$CreateReason
declare enum CreateReason {
    FIRE,
    NETHER_PAIR,
    END_PLATFORM,
}

//org.bukkit.inventory.CreativeCategory
declare enum CreativeCategory {
    BUILDING_BLOCKS,
    DECORATIONS,
    REDSTONE,
    TRANSPORTATION,
    MISC,
    FOOD,
    TOOLS,
    COMBAT,
    BREWING,
}

//org.bukkit.entity.Creature
declare interface Creature extends Mob {
}

//org.bukkit.event.entity.CreatureSpawnEvent
declare interface CreatureSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getSpawnReason(): SpawnReason;
}

//org.bukkit.block.CreatureSpawner
declare interface CreatureSpawner extends TileState {
    getCreatureTypeName(): string;
    getDelay(): number;
    getMaxNearbyEntities(): number;
    getMaxSpawnDelay(): number;
    getMinSpawnDelay(): number;
    getRequiredPlayerRange(): number;
    getSpawnCount(): number;
    getSpawnRange(): number;
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

//org.bukkit.entity.Creeper
declare interface Creeper extends Monster {
    explode(): void;
    getExplosionRadius(): number;
    getFuseTicks(): number;
    getMaxFuseTicks(): number;
    ignite(): void;
    isPowered(): boolean;
    setExplosionRadius(i: number): void;
    setFuseTicks(i: number): void;
    setMaxFuseTicks(i: number): void;
    setPowered(b: boolean): void;
}

//org.bukkit.event.entity.CreeperPowerEvent
declare interface CreeperPowerEvent extends EntityEvent, Cancellable {
    getCause(): PowerCause;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLightning(): LightningStrike;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.scoreboard.Criterias
declare interface Criterias {
    DEATHS: string;
    HEALTH: string;
    PLAYER_KILLS: string;
    TOTAL_KILLS: string;
}

//org.bukkit.CropState
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

//org.bukkit.material.Crops
declare interface Crops extends MaterialData {
    getState(): CropState;
    setState(cropState: CropState): void;
}

//org.bukkit.inventory.meta.CrossbowMeta
declare interface CrossbowMeta extends ItemMeta {
    addChargedProjectile(itemStack: ItemStack): void;
    getChargedProjectiles(): List;
    hasChargedProjectiles(): boolean;
    setChargedProjectiles(list: List): void;
}

//java.awt.Cursor
declare interface Cursor extends Serializable {
    getDefaultCursor(): Cursor;
    getName(): string;
    getPredefinedCursor(i: number): Cursor;
    getSystemCustomCursor(s: string): Cursor;
    getType(): number;
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

//org.bukkit.inventory.meta.tags.CustomItemTagContainer
declare interface CustomItemTagContainer {
    getAdapterContext(): ItemTagAdapterContext;
    getCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType): any;
    hasCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType): boolean;
    isEmpty(): boolean;
    removeCustomTag(namespacedKey: NamespacedKey): void;
    setCustomTag(namespacedKey: NamespacedKey, itemTagType: ItemTagType, object: any): void;
}

//org.spigotmc.CustomTimingsHandler
declare interface CustomTimingsHandler {
    printTimings(printStream: PrintStream): void;
    reload(): void;
    reset(): void;
    startTiming(): void;
    stopTiming(): void;
    tick(): void;
}

//org.bukkit.event.entity.EntityDamageEvent$DamageCause
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
    SONIC_BOOM,
}

//org.bukkit.event.entity.EntityDamageEvent$DamageModifier
declare enum DamageModifier {
    BASE,
    HARD_HAT,
    BLOCKING,
    ARMOR,
    RESISTANCE,
    MAGIC,
    ABSORPTION,
}

//org.bukkit.inventory.meta.Damageable
declare interface Damageable extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): Damageable;
    getDamage(): number;
    hasDamage(): boolean;
    setDamage(i: number): void;
}

//org.bukkit.entity.Damageable
declare interface Damageable extends Entity {
    damage(d: number): void;
    damage(d: number, entity: Entity): void;
    getAbsorptionAmount(): number;
    getHealth(): number;
    getMaxHealth(): number;
    resetMaxHealth(): void;
    setAbsorptionAmount(d: number): void;
    setHealth(d: number): void;
    setMaxHealth(d: number): void;
}

//java.awt.image.DataBuffer
declare interface DataBuffer {
    getDataType(): number;
    getDataTypeSize(i: number): number;
    getElem(i: number): number;
    getElem(i: number, i: number): number;
    getElemDouble(i: number): number;
    getElemDouble(i: number, i: number): number;
    getElemFloat(i: number): number;
    getElemFloat(i: number, i: number): number;
    getNumBanks(): number;
    getOffset(): number;
    getOffsets(): number[];
    getSize(): number;
    setElem(i: number, i: number): void;
    setElem(i: number, i: number, i: number): void;
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

//java.awt.datatransfer.DataFlavor
declare interface DataFlavor extends Externalizable, Cloneable {
    equals(s: string): boolean;
    equals(dataFlavor: DataFlavor): boolean;
    getDefaultRepresentationClass(): Class;
    getDefaultRepresentationClassAsString(): string;
    getHumanPresentableName(): string;
    getMimeType(): string;
    getParameter(s: string): string;
    getPrimaryType(): string;
    getReaderForText(transferable: Transferable): Reader;
    getRepresentationClass(): Class;
    getSubType(): string;
    getTextPlainUnicodeFlavor(): DataFlavor;
    isFlavorJavaFileListType(): boolean;
    isFlavorRemoteObjectType(): boolean;
    isFlavorSerializedObjectType(): boolean;
    isFlavorTextType(): boolean;
    isMimeTypeEqual(s: string): boolean;
    isMimeTypeEqual(dataFlavor: DataFlavor): boolean;
    isMimeTypeSerializedObject(): boolean;
    isRepresentationClassByteBuffer(): boolean;
    isRepresentationClassCharBuffer(): boolean;
    isRepresentationClassInputStream(): boolean;
    isRepresentationClassReader(): boolean;
    isRepresentationClassRemote(): boolean;
    isRepresentationClassSerializable(): boolean;
    match(dataFlavor: DataFlavor): boolean;
    readExternal(objectInput: ObjectInput): void;
    selectBestTextFlavor(dataFlavor: DataFlavor): DataFlavor;
    setHumanPresentableName(s: string): void;
    writeExternal(objectOutput: ObjectOutput): void;
    allHtmlFlavor: DataFlavor;
    fragmentHtmlFlavor: DataFlavor;
    imageFlavor: DataFlavor;
    javaFileListFlavor: DataFlavor;
    javaJVMLocalObjectMimeType: string;
    javaRemoteObjectMimeType: string;
    javaSerializedObjectMimeType: string;
    plainTextFlavor: DataFlavor;
    selectionHtmlFlavor: DataFlavor;
    stringFlavor: DataFlavor;
}

//java.io.DataInput
declare interface DataInput {
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readFully(b: number): void;
    readFully(b: number, i: number, i: number): void;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    skipBytes(i: number): number;
}

//java.io.DataOutput
declare interface DataOutput {
    write(b: number): void;
    write(i: number): void;
    write(b: number, i: number, i: number): void;
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

//java.nio.channels.DatagramChannel
declare interface DatagramChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, MulticastChannel {
    bind(socketAddress: SocketAddress): NetworkChannel;
    bind(socketAddress: SocketAddress): DatagramChannel;
    connect(socketAddress: SocketAddress): DatagramChannel;
    disconnect(): DatagramChannel;
    getLocalAddress(): SocketAddress;
    getRemoteAddress(): SocketAddress;
    isConnected(): boolean;
    open(): DatagramChannel;
    open(protocolFamily: ProtocolFamily): DatagramChannel;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    receive(byteBuffer: ByteBuffer): SocketAddress;
    send(byteBuffer: ByteBuffer, socketAddress: SocketAddress): number;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): DatagramChannel;
    socket(): DatagramSocket;
    validOps(): number;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
}

//java.net.DatagramPacket
declare interface DatagramPacket {
    getAddress(): InetAddress;
    getData(): number[];
    getLength(): number;
    getOffset(): number;
    getPort(): number;
    getSocketAddress(): SocketAddress;
    setAddress(inetAddress: InetAddress): void;
    setData(b: number): void;
    setData(b: number, i: number, i: number): void;
    setLength(i: number): void;
    setPort(i: number): void;
    setSocketAddress(socketAddress: SocketAddress): void;
}

//java.net.DatagramSocket
declare interface DatagramSocket extends Closeable {
    bind(socketAddress: SocketAddress): void;
    close(): void;
    connect(socketAddress: SocketAddress): void;
    connect(inetAddress: InetAddress, i: number): void;
    disconnect(): void;
    getBroadcast(): boolean;
    getChannel(): DatagramChannel;
    getInetAddress(): InetAddress;
    getLocalAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): SocketAddress;
    getOption(socketOption: SocketOption): any;
    getPort(): number;
    getReceiveBufferSize(): number;
    getRemoteSocketAddress(): SocketAddress;
    getReuseAddress(): boolean;
    getSendBufferSize(): number;
    getSoTimeout(): number;
    getTrafficClass(): number;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    joinGroup(socketAddress: SocketAddress, networkInterface: NetworkInterface): void;
    leaveGroup(socketAddress: SocketAddress, networkInterface: NetworkInterface): void;
    receive(datagramPacket: DatagramPacket): void;
    send(datagramPacket: DatagramPacket): void;
    setBroadcast(b: boolean): void;
    setDatagramSocketImplFactory(datagramSocketImplFactory: DatagramSocketImplFactory): void;
    setOption(socketOption: SocketOption, object: any): DatagramSocket;
    setReceiveBufferSize(i: number): void;
    setReuseAddress(b: boolean): void;
    setSendBufferSize(i: number): void;
    setSoTimeout(i: number): void;
    setTrafficClass(i: number): void;
    supportedOptions(): Set;
}

//java.net.DatagramSocketImpl
declare interface DatagramSocketImpl extends SocketOptions {
}

//java.net.DatagramSocketImplFactory
declare interface DatagramSocketImplFactory {
    createDatagramSocketImpl(): DatagramSocketImpl;
}

//java.util.Date
declare interface Date extends Serializable, Cloneable, Comparable {
    UTC(i: number, i: number, i: number, i: number, i: number, i: number): number;
    after(date: Date): boolean;
    before(date: Date): boolean;
    compareTo(object: any): number;
    compareTo(date: Date): number;
    from(instant: Instant): Date;
    getDate(): number;
    getDay(): number;
    getHours(): number;
    getMinutes(): number;
    getMonth(): number;
    getSeconds(): number;
    getTime(): number;
    getTimezoneOffset(): number;
    getYear(): number;
    parse(s: string): number;
    setDate(i: number): void;
    setHours(i: number): void;
    setMinutes(i: number): void;
    setMonth(i: number): void;
    setSeconds(i: number): void;
    setTime(l: number): void;
    setYear(i: number): void;
    toGMTString(): string;
    toInstant(): Instant;
    toLocaleString(): string;
}

//java.time.format.DateTimeFormatter
declare interface DateTimeFormatter {
    format(temporalAccessor: TemporalAccessor): string;
    formatTo(temporalAccessor: TemporalAccessor, appendable: Appendable): void;
    getChronology(): Chronology;
    getDecimalStyle(): DecimalStyle;
    getLocale(): Locale;
    getResolverFields(): Set;
    getResolverStyle(): ResolverStyle;
    getZone(): ZoneId;
    localizedBy(locale: Locale): DateTimeFormatter;
    ofLocalizedDate(formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedDateTime(formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedDateTime(formatStyle: FormatStyle, formatStyle: FormatStyle): DateTimeFormatter;
    ofLocalizedTime(formatStyle: FormatStyle): DateTimeFormatter;
    ofPattern(s: string): DateTimeFormatter;
    ofPattern(s: string, locale: Locale): DateTimeFormatter;
    parse(s: string): TemporalAccessor;
    parse(s: string, parsePosition: ParsePosition): TemporalAccessor;
    parse(s: string, temporalQuery: TemporalQuery): any;
    parseBest(s: string, temporalQuery: TemporalQuery): TemporalAccessor;
    parseUnresolved(s: string, parsePosition: ParsePosition): TemporalAccessor;
    parsedExcessDays(): TemporalQuery;
    parsedLeapSecond(): TemporalQuery;
    toFormat(): Format;
    toFormat(temporalQuery: TemporalQuery): Format;
    withChronology(chronology: Chronology): DateTimeFormatter;
    withDecimalStyle(decimalStyle: DecimalStyle): DateTimeFormatter;
    withLocale(locale: Locale): DateTimeFormatter;
    withResolverFields(temporalField: TemporalField): DateTimeFormatter;
    withResolverFields(set: Set): DateTimeFormatter;
    withResolverStyle(resolverStyle: ResolverStyle): DateTimeFormatter;
    withZone(zoneId: ZoneId): DateTimeFormatter;
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

//java.time.DayOfWeek
declare enum DayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}

//org.bukkit.block.data.type.DaylightDetector
declare interface DaylightDetector extends AnaloguePowerable {
    isInverted(): boolean;
    setInverted(b: boolean): void;
}

//org.bukkit.block.DaylightDetector
declare interface DaylightDetector extends TileState {
}

//java.time.format.DecimalStyle
declare interface DecimalStyle {
    getAvailableLocales(): Set;
    getDecimalSeparator(): string;
    getNegativeSign(): string;
    getPositiveSign(): string;
    getZeroDigit(): string;
    of(locale: Locale): DecimalStyle;
    ofDefaultLocale(): DecimalStyle;
    withDecimalSeparator(c: string): DecimalStyle;
    withNegativeSign(c: string): DecimalStyle;
    withPositiveSign(c: string): DecimalStyle;
    withZeroDigit(c: string): DecimalStyle;
    STANDARD: DecimalStyle;
}

//org.bukkit.util.permissions.DefaultPermissions
declare interface DefaultPermissions {
    registerCorePermissions(): void;
    registerPermission(permission: Permission): Permission;
    registerPermission(permission: Permission, b: boolean): Permission;
    registerPermission(permission: Permission, permission: Permission): Permission;
    registerPermission(s: string, s: string): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault): Permission;
    registerPermission(s: string, s: string, permission: Permission): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, permission: Permission): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, map: Map): Permission;
    registerPermission(s: string, s: string, permissionDefault: PermissionDefault, map: Map, permission: Permission): Permission;
}

//java.awt.JobAttributes$DefaultSelectionType
declare interface DefaultSelectionType extends AttributeValue {
    ALL: DefaultSelectionType;
    RANGE: DefaultSelectionType;
    SELECTION: DefaultSelectionType;
}

//org.bukkit.configuration.serialization.DelegateDeserialization
declare interface DelegateDeserialization extends Annotation {
    value(): Class;
}

//org.bukkit.Vibration$Destination
declare interface Destination {
}

//java.awt.JobAttributes$DestinationType
declare interface DestinationType extends AttributeValue {
    FILE: DestinationType;
    PRINTER: DestinationType;
}

//org.bukkit.material.DetectorRail
declare interface DetectorRail extends ExtendedRails, PressureSensor {
    isPressed(): boolean;
    setPressed(b: boolean): void;
}

//java.awt.JobAttributes$DialogType
declare interface DialogType extends AttributeValue {
    COMMON: DialogType;
    NATIVE: DialogType;
    NONE: DialogType;
}

//java.util.Dictionary
declare interface Dictionary {
    elements(): Enumeration;
    get(object: any): any;
    isEmpty(): boolean;
    keys(): Enumeration;
    put(object: any, object: any): any;
    remove(object: any): any;
    size(): number;
}

//org.bukkit.Difficulty
declare enum Difficulty {
    PEACEFUL,
    EASY,
    NORMAL,
    HARD,
}

//java.awt.Dimension
declare interface Dimension extends Dimension2D, Serializable {
    equals(object: any): boolean;
    getSize(): Dimension;
    hashCode(): number;
    setSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    toString(): string;
    height: number;
    width: number;
}

//java.awt.geom.Dimension2D
declare interface Dimension2D extends Cloneable {
    getHeight(): number;
    getWidth(): number;
    setSize(dimension2D: Dimension2D): void;
    setSize(d: number, d: number): void;
}

//org.bukkit.material.Diode
declare interface Diode extends MaterialData, Directional, Redstone {
    getDelay(): number;
    getFacing(): BlockFace;
    isPowered(): boolean;
    setDelay(i: number): void;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.material.Directional
declare interface Directional {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.block.data.Directional
declare interface Directional extends BlockData {
    getFaces(): Set;
    getFacing(): BlockFace;
    setFacing(blockFace: BlockFace): void;
}

//org.bukkit.material.DirectionalContainer
declare interface DirectionalContainer extends MaterialData, Directional {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

//java.nio.file.DirectoryStream
declare interface DirectoryStream extends Closeable, Iterable {
    iterator(): Iterator;
}

//org.bukkit.block.data.type.Dispenser
declare interface Dispenser extends Directional {
    isTriggered(): boolean;
    setTriggered(b: boolean): void;
}

//org.bukkit.block.Dispenser
declare interface Dispenser extends Container, Nameable, Lootable {
    dispense(): boolean;
    getBlockProjectileSource(): BlockProjectileSource;
}

//org.bukkit.material.Dispenser
declare interface Dispenser extends FurnaceAndDispenser {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

//java.awt.DisplayMode
declare interface DisplayMode {
    equals(displayMode: DisplayMode): boolean;
    getBitDepth(): number;
    getHeight(): number;
    getRefreshRate(): number;
    getWidth(): number;
    BIT_DEPTH_MULTI: number;
    REFRESH_RATE_UNKNOWN: number;
}

//org.bukkit.scoreboard.DisplaySlot
declare enum DisplaySlot {
    BELOW_NAME,
    PLAYER_LIST,
    SIDEBAR,
}

//org.bukkit.entity.Dolphin
declare interface Dolphin extends WaterMob {
}

//java.security.DomainCombiner
declare interface DomainCombiner {
    combine(protectionDomain: ProtectionDomain, protectionDomain: ProtectionDomain): ProtectionDomain[];
}

//org.bukkit.entity.Donkey
declare interface Donkey extends ChestedHorse {
}

//org.bukkit.block.data.type.Door
declare interface Door extends Bisected, Directional, Openable, Powerable {
    getHinge(): Hinge;
    setHinge(hinge: Hinge): void;
}

//org.bukkit.material.Door
declare interface Door extends MaterialData, Directional, Openable {
    getFacing(): BlockFace;
    getHinge(): boolean;
    getHingeCorner(): BlockFace;
    getWoodDoorOfSpecies(treeSpecies: TreeSpecies): Material;
    isOpen(): boolean;
    isTopHalf(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setHinge(b: boolean): void;
    setOpen(b: boolean): void;
    setTopHalf(b: boolean): void;
}

//java.lang.Double
declare interface Double extends Number, Comparable, Constable, ConstantDesc {
    compare(d: number, d: number): number;
    compareTo(double: Double): number;
    compareTo(object: any): number;
    describeConstable(): Optional;
    doubleToLongBits(d: number): number;
    doubleToRawLongBits(d: number): number;
    equals(object: any): boolean;
    hashCode(): number;
    hashCode(d: number): number;
    isFinite(d: number): boolean;
    isInfinite(): boolean;
    isInfinite(d: number): boolean;
    isNaN(): boolean;
    isNaN(d: number): boolean;
    longBitsToDouble(l: number): number;
    max(d: number, d: number): number;
    min(d: number, d: number): number;
    parseDouble(s: string): number;
    resolveConstantDesc(lookup: Lookup): any;
    resolveConstantDesc(lookup: Lookup): Double;
    sum(d: number, d: number): number;
    toHexString(d: number): string;
    toString(): string;
    toString(d: number): string;
    valueOf(s: string): Double;
    valueOf(d: number): Double;
    BYTES: number;
    MAX_EXPONENT: number;
    MAX_VALUE: number;
    MIN_EXPONENT: number;
    MIN_NORMAL: number;
    MIN_VALUE: number;
    NEGATIVE_INFINITY: number;
    NaN: number;
    POSITIVE_INFINITY: number;
    SIZE: number;
    TYPE: Class;
}

//java.util.function.DoubleBinaryOperator
declare interface DoubleBinaryOperator {
    applyAsDouble(d: number, d: number): number;
}

//java.nio.DoubleBuffer
declare interface DoubleBuffer extends Buffer, Comparable {
    allocate(i: number): DoubleBuffer;
    asReadOnlyBuffer(): DoubleBuffer;
    compact(): DoubleBuffer;
    compareTo(object: any): number;
    compareTo(doubleBuffer: DoubleBuffer): number;
    equals(object: any): boolean;
    get(): number;
    get(i: number): number;
    get(d: number): DoubleBuffer;
    get(i: number, d: number): DoubleBuffer;
    get(d: number, i: number, i: number): DoubleBuffer;
    get(i: number, d: number, i: number, i: number): DoubleBuffer;
    hashCode(): number;
    mismatch(doubleBuffer: DoubleBuffer): number;
    order(): ByteOrder;
    put(d: number): DoubleBuffer;
    put(doubleBuffer: DoubleBuffer): DoubleBuffer;
    put(d: number): DoubleBuffer;
    put(i: number, d: number): DoubleBuffer;
    put(i: number, d: number): DoubleBuffer;
    put(d: number, i: number, i: number): DoubleBuffer;
    put(i: number, d: number, i: number, i: number): DoubleBuffer;
    put(i: number, doubleBuffer: DoubleBuffer, i: number, i: number): DoubleBuffer;
    toString(): string;
    wrap(d: number): DoubleBuffer;
    wrap(d: number, i: number, i: number): DoubleBuffer;
}

//org.bukkit.block.DoubleChest
declare interface DoubleChest extends InventoryHolder {
    getInventory(): Inventory;
    getLeftSide(): InventoryHolder;
    getLocation(): Location;
    getRightSide(): InventoryHolder;
    getWorld(): World;
    getX(): number;
    getY(): number;
    getZ(): number;
}

//org.bukkit.inventory.DoubleChestInventory
declare interface DoubleChestInventory extends Inventory {
    getHolder(): InventoryHolder;
    getHolder(): DoubleChest;
    getLeftSide(): Inventory;
    getRightSide(): Inventory;
}

//java.util.function.DoubleConsumer
declare interface DoubleConsumer {
    accept(d: number): void;
    andThen(doubleConsumer: DoubleConsumer): DoubleConsumer;
}

//java.util.function.DoubleFunction
declare interface DoubleFunction {
    apply(d: number): any;
}

//java.util.stream.DoubleStream$DoubleMapMultiConsumer
declare interface DoubleMapMultiConsumer {
    accept(d: number, doubleConsumer: DoubleConsumer): void;
}

//java.util.function.DoublePredicate
declare interface DoublePredicate {
    and(doublePredicate: DoublePredicate): DoublePredicate;
    negate(): DoublePredicate;
    or(doublePredicate: DoublePredicate): DoublePredicate;
    test(d: number): boolean;
}

//java.util.stream.DoubleStream
declare interface DoubleStream extends BaseStream {
    allMatch(doublePredicate: DoublePredicate): boolean;
    anyMatch(doublePredicate: DoublePredicate): boolean;
    average(): OptionalDouble;
    boxed(): Stream;
    builder(): Builder;
    collect(supplier: Supplier, objDoubleConsumer: ObjDoubleConsumer, biConsumer: BiConsumer): any;
    concat(doubleStream: DoubleStream, doubleStream: DoubleStream): DoubleStream;
    count(): number;
    distinct(): DoubleStream;
    dropWhile(doublePredicate: DoublePredicate): DoubleStream;
    empty(): DoubleStream;
    filter(doublePredicate: DoublePredicate): DoubleStream;
    findAny(): OptionalDouble;
    findFirst(): OptionalDouble;
    flatMap(doubleFunction: DoubleFunction): DoubleStream;
    forEach(doubleConsumer: DoubleConsumer): void;
    forEachOrdered(doubleConsumer: DoubleConsumer): void;
    generate(doubleSupplier: DoubleSupplier): DoubleStream;
    iterate(d: number, doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    iterate(d: number, doublePredicate: DoublePredicate, doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    iterator(): OfDouble;
    iterator(): Iterator;
    limit(l: number): DoubleStream;
    map(doubleUnaryOperator: DoubleUnaryOperator): DoubleStream;
    mapMulti(doubleMapMultiConsumer: DoubleMapMultiConsumer): DoubleStream;
    mapToInt(doubleToIntFunction: DoubleToIntFunction): IntStream;
    mapToLong(doubleToLongFunction: DoubleToLongFunction): LongStream;
    mapToObj(doubleFunction: DoubleFunction): Stream;
    max(): OptionalDouble;
    min(): OptionalDouble;
    noneMatch(doublePredicate: DoublePredicate): boolean;
    of(d: number): DoubleStream;
    of(d: number): DoubleStream;
    parallel(): BaseStream;
    parallel(): DoubleStream;
    peek(doubleConsumer: DoubleConsumer): DoubleStream;
    reduce(doubleBinaryOperator: DoubleBinaryOperator): OptionalDouble;
    reduce(d: number, doubleBinaryOperator: DoubleBinaryOperator): number;
    sequential(): BaseStream;
    sequential(): DoubleStream;
    skip(l: number): DoubleStream;
    sorted(): DoubleStream;
    spliterator(): Spliterator;
    spliterator(): OfDouble;
    sum(): number;
    summaryStatistics(): DoubleSummaryStatistics;
    takeWhile(doublePredicate: DoublePredicate): DoubleStream;
    toArray(): number[];
}

//java.util.DoubleSummaryStatistics
declare interface DoubleSummaryStatistics extends DoubleConsumer {
    accept(d: number): void;
    combine(doubleSummaryStatistics: DoubleSummaryStatistics): void;
    getAverage(): number;
    getCount(): number;
    getMax(): number;
    getMin(): number;
    getSum(): number;
}

//java.util.function.DoubleSupplier
declare interface DoubleSupplier {
    getAsDouble(): number;
}

//java.util.function.DoubleToIntFunction
declare interface DoubleToIntFunction {
    applyAsInt(d: number): number;
}

//java.util.function.DoubleToLongFunction
declare interface DoubleToLongFunction {
    applyAsLong(d: number): number;
}

//java.util.function.DoubleUnaryOperator
declare interface DoubleUnaryOperator {
    andThen(doubleUnaryOperator: DoubleUnaryOperator): DoubleUnaryOperator;
    applyAsDouble(d: number): number;
    compose(doubleUnaryOperator: DoubleUnaryOperator): DoubleUnaryOperator;
    identity(): DoubleUnaryOperator;
}

//java.awt.dnd.DragGestureEvent
declare interface DragGestureEvent extends EventObject {
    getComponent(): Component;
    getDragAction(): number;
    getDragOrigin(): Point;
    getDragSource(): DragSource;
    getSourceAsDragGestureRecognizer(): DragGestureRecognizer;
    getTriggerEvent(): InputEvent;
    iterator(): Iterator;
    startDrag(cursor: Cursor, transferable: Transferable): void;
    startDrag(cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    toArray(): any[];
    toArray(object: any): any[];
}

//java.awt.dnd.DragGestureListener
declare interface DragGestureListener extends EventListener {
    dragGestureRecognized(dragGestureEvent: DragGestureEvent): void;
}

//java.awt.dnd.DragGestureRecognizer
declare interface DragGestureRecognizer extends Serializable {
    addDragGestureListener(dragGestureListener: DragGestureListener): void;
    getComponent(): Component;
    getDragSource(): DragSource;
    getSourceActions(): number;
    getTriggerEvent(): InputEvent;
    removeDragGestureListener(dragGestureListener: DragGestureListener): void;
    resetRecognizer(): void;
    setComponent(component: Component): void;
    setSourceActions(i: number): void;
}

//java.awt.dnd.DragSource
declare interface DragSource extends Serializable {
    addDragSourceListener(dragSourceListener: DragSourceListener): void;
    addDragSourceMotionListener(dragSourceMotionListener: DragSourceMotionListener): void;
    createDefaultDragGestureRecognizer(component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    createDragGestureRecognizer(clazz: Class, component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    getDefaultDragSource(): DragSource;
    getDragSourceListeners(): DragSourceListener[];
    getDragSourceMotionListeners(): DragSourceMotionListener[];
    getDragThreshold(): number;
    getFlavorMap(): FlavorMap;
    getListeners(clazz: Class): EventListener[];
    isDragImageSupported(): boolean;
    removeDragSourceListener(dragSourceListener: DragSourceListener): void;
    removeDragSourceMotionListener(dragSourceMotionListener: DragSourceMotionListener): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, transferable: Transferable, dragSourceListener: DragSourceListener, flavorMap: FlavorMap): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener): void;
    startDrag(dragGestureEvent: DragGestureEvent, cursor: Cursor, image: Image, point: Point, transferable: Transferable, dragSourceListener: DragSourceListener, flavorMap: FlavorMap): void;
    DefaultCopyDrop: Cursor;
    DefaultCopyNoDrop: Cursor;
    DefaultLinkDrop: Cursor;
    DefaultLinkNoDrop: Cursor;
    DefaultMoveDrop: Cursor;
    DefaultMoveNoDrop: Cursor;
}

//java.awt.dnd.DragSourceContext
declare interface DragSourceContext extends DragSourceListener, DragSourceMotionListener, Serializable {
    addDragSourceListener(dragSourceListener: DragSourceListener): void;
    dragDropEnd(dragSourceDropEvent: DragSourceDropEvent): void;
    dragEnter(dragSourceDragEvent: DragSourceDragEvent): void;
    dragExit(dragSourceEvent: DragSourceEvent): void;
    dragMouseMoved(dragSourceDragEvent: DragSourceDragEvent): void;
    dragOver(dragSourceDragEvent: DragSourceDragEvent): void;
    dropActionChanged(dragSourceDragEvent: DragSourceDragEvent): void;
    getComponent(): Component;
    getCursor(): Cursor;
    getDragSource(): DragSource;
    getSourceActions(): number;
    getTransferable(): Transferable;
    getTrigger(): DragGestureEvent;
    removeDragSourceListener(dragSourceListener: DragSourceListener): void;
    setCursor(cursor: Cursor): void;
    transferablesFlavorsChanged(): void;
}

//java.awt.dnd.DragSourceDragEvent
declare interface DragSourceDragEvent extends DragSourceEvent {
    getDropAction(): number;
    getGestureModifiers(): number;
    getGestureModifiersEx(): number;
    getTargetActions(): number;
    getUserAction(): number;
}

//java.awt.dnd.DragSourceDropEvent
declare interface DragSourceDropEvent extends DragSourceEvent {
    getDropAction(): number;
    getDropSuccess(): boolean;
}

//java.awt.dnd.DragSourceEvent
declare interface DragSourceEvent extends EventObject {
    getDragSourceContext(): DragSourceContext;
    getLocation(): Point;
    getX(): number;
    getY(): number;
}

//java.awt.dnd.DragSourceListener
declare interface DragSourceListener extends EventListener {
    dragDropEnd(dragSourceDropEvent: DragSourceDropEvent): void;
    dragEnter(dragSourceDragEvent: DragSourceDragEvent): void;
    dragExit(dragSourceEvent: DragSourceEvent): void;
    dragOver(dragSourceDragEvent: DragSourceDragEvent): void;
    dropActionChanged(dragSourceDragEvent: DragSourceDragEvent): void;
}

//java.awt.dnd.DragSourceMotionListener
declare interface DragSourceMotionListener extends EventListener {
    dragMouseMoved(dragSourceDragEvent: DragSourceDragEvent): void;
}

//org.bukkit.event.inventory.DragType
declare enum DragType {
    SINGLE,
    EVEN,
}

//org.bukkit.boss.DragonBattle
declare interface DragonBattle {
    generateEndPortal(b: boolean): boolean;
    getBossBar(): BossBar;
    getEndPortalLocation(): Location;
    getEnderDragon(): EnderDragon;
    getRespawnPhase(): RespawnPhase;
    hasBeenPreviouslyKilled(): boolean;
    initiateRespawn(): void;
    resetCrystals(): void;
    setRespawnPhase(respawnPhase: RespawnPhase): boolean;
}

//org.bukkit.entity.DragonFireball
declare interface DragonFireball extends Fireball {
}

//org.bukkit.block.data.type.Dripleaf
declare interface Dripleaf extends Directional, Waterlogged {
}

//java.awt.dnd.DropTarget
declare interface DropTarget extends DropTargetListener, Serializable {
    addDropTargetListener(dropTargetListener: DropTargetListener): void;
    addNotify(): void;
    dragEnter(dropTargetDragEvent: DropTargetDragEvent): void;
    dragExit(dropTargetEvent: DropTargetEvent): void;
    dragOver(dropTargetDragEvent: DropTargetDragEvent): void;
    drop(dropTargetDropEvent: DropTargetDropEvent): void;
    dropActionChanged(dropTargetDragEvent: DropTargetDragEvent): void;
    getComponent(): Component;
    getDefaultActions(): number;
    getDropTargetContext(): DropTargetContext;
    getFlavorMap(): FlavorMap;
    isActive(): boolean;
    removeDropTargetListener(dropTargetListener: DropTargetListener): void;
    removeNotify(): void;
    setActive(b: boolean): void;
    setComponent(component: Component): void;
    setDefaultActions(i: number): void;
    setFlavorMap(flavorMap: FlavorMap): void;
}

//java.awt.dnd.DropTargetContext
declare interface DropTargetContext extends Serializable {
    dropComplete(b: boolean): void;
    getComponent(): Component;
    getDropTarget(): DropTarget;
}

//java.awt.dnd.DropTargetDragEvent
declare interface DropTargetDragEvent extends DropTargetEvent {
    acceptDrag(i: number): void;
    getCurrentDataFlavors(): DataFlavor[];
    getCurrentDataFlavorsAsList(): List;
    getDropAction(): number;
    getLocation(): Point;
    getSourceActions(): number;
    getTransferable(): Transferable;
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    rejectDrag(): void;
}

//java.awt.dnd.DropTargetDropEvent
declare interface DropTargetDropEvent extends DropTargetEvent {
    acceptDrop(i: number): void;
    dropComplete(b: boolean): void;
    getCurrentDataFlavors(): DataFlavor[];
    getCurrentDataFlavorsAsList(): List;
    getDropAction(): number;
    getLocation(): Point;
    getSourceActions(): number;
    getTransferable(): Transferable;
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
    isLocalTransfer(): boolean;
    rejectDrop(): void;
}

//java.awt.dnd.DropTargetEvent
declare interface DropTargetEvent extends EventObject {
    getDropTargetContext(): DropTargetContext;
}

//java.awt.dnd.DropTargetListener
declare interface DropTargetListener extends EventListener {
    dragEnter(dropTargetDragEvent: DropTargetDragEvent): void;
    dragExit(dropTargetEvent: DropTargetEvent): void;
    dragOver(dropTargetDragEvent: DropTargetDragEvent): void;
    drop(dropTargetDropEvent: DropTargetDropEvent): void;
    dropActionChanged(dropTargetDragEvent: DropTargetDragEvent): void;
}

//org.bukkit.block.Dropper
declare interface Dropper extends Container, Lootable {
    drop(): void;
}

//org.bukkit.entity.Drowned
declare interface Drowned extends Zombie {
}

//java.time.Duration
declare interface Duration extends TemporalAmount, Comparable, Serializable {
    abs(): Duration;
    addTo(temporal: Temporal): Temporal;
    between(temporal: Temporal, temporal: Temporal): Duration;
    compareTo(object: any): number;
    compareTo(duration: Duration): number;
    dividedBy(l: number): Duration;
    dividedBy(duration: Duration): number;
    from(temporalAmount: TemporalAmount): Duration;
    get(temporalUnit: TemporalUnit): number;
    getNano(): number;
    getSeconds(): number;
    getUnits(): List;
    isNegative(): boolean;
    isZero(): boolean;
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
    of(l: number, temporalUnit: TemporalUnit): Duration;
    ofDays(l: number): Duration;
    ofHours(l: number): Duration;
    ofMillis(l: number): Duration;
    ofMinutes(l: number): Duration;
    ofNanos(l: number): Duration;
    ofSeconds(l: number): Duration;
    ofSeconds(l: number, l: number): Duration;
    parse(s: string): Duration;
    plus(duration: Duration): Duration;
    plus(l: number, temporalUnit: TemporalUnit): Duration;
    plusDays(l: number): Duration;
    plusHours(l: number): Duration;
    plusMillis(l: number): Duration;
    plusMinutes(l: number): Duration;
    plusNanos(l: number): Duration;
    plusSeconds(l: number): Duration;
    subtractFrom(temporal: Temporal): Temporal;
    toDays(): number;
    toDaysPart(): number;
    toHours(): number;
    toHoursPart(): number;
    toMillis(): number;
    toMillisPart(): number;
    toMinutes(): number;
    toMinutesPart(): number;
    toNanos(): number;
    toNanosPart(): number;
    toSeconds(): number;
    toSecondsPart(): number;
    truncatedTo(temporalUnit: TemporalUnit): Duration;
    withNanos(i: number): Duration;
    withSeconds(l: number): Duration;
    ZERO: Duration;
}

//org.bukkit.material.Dye
declare interface Dye extends MaterialData, Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

//org.bukkit.DyeColor
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

//org.bukkit.Effect
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

//org.bukkit.entity.Egg
declare interface Egg extends ThrowableProjectile {
}

//org.bukkit.entity.ElderGuardian
declare interface ElderGuardian extends Guardian {
}

//org.bukkit.event.enchantment.EnchantItemEvent
declare interface EnchantItemEvent extends InventoryEvent, Cancellable {
    getEnchantBlock(): Block;
    getEnchanter(): Player;
    getEnchantsToAdd(): Map;
    getExpLevelCost(): number;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setExpLevelCost(i: number): void;
    whichButton(): number;
}

//org.bukkit.inventory.EnchantingInventory
declare interface EnchantingInventory extends Inventory {
    getItem(): ItemStack;
    getSecondary(): ItemStack;
    setItem(itemStack: ItemStack): void;
    setSecondary(itemStack: ItemStack): void;
}

//org.bukkit.block.EnchantingTable
declare interface EnchantingTable extends TileState, Nameable {
}

//org.bukkit.enchantments.Enchantment
declare interface Enchantment extends Keyed {
    canEnchantItem(itemStack: ItemStack): boolean;
    conflictsWith(enchantment: Enchantment): boolean;
    getByKey(namespacedKey: NamespacedKey): Enchantment;
    getByName(s: string): Enchantment;
    getItemTarget(): EnchantmentTarget;
    getKey(): NamespacedKey;
    getMaxLevel(): number;
    getName(): string;
    getStartLevel(): number;
    isAcceptingRegistrations(): boolean;
    isCursed(): boolean;
    isTreasure(): boolean;
    registerEnchantment(enchantment: Enchantment): void;
    stopAcceptingRegistrations(): void;
    values(): Enchantment[];
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
    SWIFT_SNEAK: Enchantment;
    THORNS: Enchantment;
    VANISHING_CURSE: Enchantment;
    WATER_WORKER: Enchantment;
}

//org.bukkit.enchantments.EnchantmentOffer
declare interface EnchantmentOffer {
    getCost(): number;
    getEnchantment(): Enchantment;
    getEnchantmentLevel(): number;
    setCost(i: number): void;
    setEnchantment(enchantment: Enchantment): void;
    setEnchantmentLevel(i: number): void;
}

//org.bukkit.inventory.meta.EnchantmentStorageMeta
declare interface EnchantmentStorageMeta extends ItemMeta {
    addStoredEnchant(enchantment: Enchantment, i: number, b: boolean): boolean;
    clone(): EnchantmentStorageMeta;
    clone(): ItemMeta;
    clone(): any;
    getStoredEnchantLevel(enchantment: Enchantment): number;
    getStoredEnchants(): Map;
    hasConflictingStoredEnchant(enchantment: Enchantment): boolean;
    hasStoredEnchant(enchantment: Enchantment): boolean;
    hasStoredEnchants(): boolean;
    removeStoredEnchant(enchantment: Enchantment): boolean;
}

//org.bukkit.enchantments.EnchantmentTarget
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

//org.bukkit.enchantments.EnchantmentWrapper
declare interface EnchantmentWrapper extends Enchantment {
    getEnchantment(): Enchantment;
}

//org.bukkit.block.EndGateway
declare interface EndGateway extends TileState {
    getAge(): number;
    getExitLocation(): Location;
    isExactTeleport(): boolean;
    setAge(l: number): void;
    setExactTeleport(b: boolean): void;
    setExitLocation(location: Location): void;
}

//org.bukkit.block.data.type.EndPortalFrame
declare interface EndPortalFrame extends Directional {
    hasEye(): boolean;
    setEye(b: boolean): void;
}

//org.bukkit.block.EnderChest
declare interface EnderChest extends Lidded, TileState {
}

//org.bukkit.block.data.type.EnderChest
declare interface EnderChest extends Directional, Waterlogged {
}

//org.bukkit.material.EnderChest
declare interface EnderChest extends DirectionalContainer {
}

//org.bukkit.entity.EnderCrystal
declare interface EnderCrystal extends Entity {
    getBeamTarget(): Location;
    isShowingBottom(): boolean;
    setBeamTarget(location: Location): void;
    setShowingBottom(b: boolean): void;
}

//org.bukkit.entity.EnderDragon
declare interface EnderDragon extends ComplexLivingEntity, Boss, Mob {
    getDeathAnimationTicks(): number;
    getDragonBattle(): DragonBattle;
    getPhase(): Phase;
    setPhase(phase: Phase): void;
}

//org.bukkit.event.entity.EnderDragonChangePhaseEvent
declare interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
    getCurrentPhase(): Phase;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewPhase(): Phase;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setNewPhase(phase: Phase): void;
}

//org.bukkit.entity.EnderDragonPart
declare interface EnderDragonPart extends ComplexEntityPart, Damageable {
    getParent(): EnderDragon;
    getParent(): ComplexLivingEntity;
}

//org.bukkit.entity.EnderPearl
declare interface EnderPearl extends ThrowableProjectile {
}

//org.bukkit.entity.EnderSignal
declare interface EnderSignal extends Entity {
    getDespawnTimer(): number;
    getDropItem(): boolean;
    getItem(): ItemStack;
    getTargetLocation(): Location;
    setDespawnTimer(i: number): void;
    setDropItem(b: boolean): void;
    setItem(itemStack: ItemStack): void;
    setTargetLocation(location: Location): void;
}

//org.bukkit.entity.Enderman
declare interface Enderman extends Monster {
    getCarriedBlock(): BlockData;
    getCarriedMaterial(): MaterialData;
    setCarriedBlock(blockData: BlockData): void;
    setCarriedMaterial(materialData: MaterialData): void;
}

//org.bukkit.entity.Endermite
declare interface Endermite extends Monster {
    isPlayerSpawned(): boolean;
    setPlayerSpawned(b: boolean): void;
}

//org.bukkit.event.world.EntitiesLoadEvent
declare interface EntitiesLoadEvent extends ChunkEvent {
    getEntities(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.world.EntitiesUnloadEvent
declare interface EntitiesUnloadEvent extends ChunkEvent {
    getEntities(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.entity.Entity
declare interface Entity extends Metadatable, CommandSender, Nameable, PersistentDataHolder {
    addPassenger(entity: Entity): boolean;
    addScoreboardTag(s: string): boolean;
    eject(): boolean;
    getBoundingBox(): BoundingBox;
    getEntityId(): number;
    getFacing(): BlockFace;
    getFallDistance(): number;
    getFireTicks(): number;
    getFreezeTicks(): number;
    getHeight(): number;
    getLastDamageCause(): EntityDamageEvent;
    getLocation(): Location;
    getLocation(location: Location): Location;
    getMaxFireTicks(): number;
    getMaxFreezeTicks(): number;
    getNearbyEntities(d: number, d: number, d: number): List;
    getPassenger(): Entity;
    getPassengers(): List;
    getPistonMoveReaction(): PistonMoveReaction;
    getPortalCooldown(): number;
    getPose(): Pose;
    getScoreboardTags(): Set;
    getServer(): Server;
    getSpawnCategory(): SpawnCategory;
    getTicksLived(): number;
    getType(): EntityType;
    getUniqueId(): UUID;
    getVehicle(): Entity;
    getVelocity(): Vector;
    getWidth(): number;
    getWorld(): World;
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
    playEffect(entityEffect: EntityEffect): void;
    remove(): void;
    removePassenger(entity: Entity): boolean;
    removeScoreboardTag(s: string): boolean;
    setCustomNameVisible(b: boolean): void;
    setFallDistance(f: number): void;
    setFireTicks(i: number): void;
    setFreezeTicks(i: number): void;
    setGlowing(b: boolean): void;
    setGravity(b: boolean): void;
    setInvulnerable(b: boolean): void;
    setLastDamageCause(entityDamageEvent: EntityDamageEvent): void;
    setPassenger(entity: Entity): boolean;
    setPersistent(b: boolean): void;
    setPortalCooldown(i: number): void;
    setRotation(f: number, f: number): void;
    setSilent(b: boolean): void;
    setTicksLived(i: number): void;
    setVelocity(vector: Vector): void;
    setVisualFire(b: boolean): void;
    spigot(): Spigot;
    spigot(): Spigot;
    teleport(location: Location): boolean;
    teleport(entity: Entity): boolean;
    teleport(entity: Entity, teleportCause: TeleportCause): boolean;
    teleport(location: Location, teleportCause: TeleportCause): boolean;
}

//org.bukkit.event.entity.EntityAirChangeEvent
declare interface EntityAirChangeEvent extends EntityEvent, Cancellable {
    getAmount(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setAmount(i: number): void;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.block.EntityBlockFormEvent
declare interface EntityBlockFormEvent extends BlockFormEvent {
    getEntity(): Entity;
}

//org.bukkit.block.EntityBlockStorage
declare interface EntityBlockStorage extends TileState {
    addEntity(entity: Entity): void;
    getEntityCount(): number;
    getMaxEntities(): number;
    isFull(): boolean;
    releaseEntities(): List;
    setMaxEntities(i: number): void;
}

//org.bukkit.event.entity.EntityBreakDoorEvent
declare interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
    getEntity(): LivingEntity;
    getEntity(): Entity;
}

//org.bukkit.event.entity.EntityBreedEvent
declare interface EntityBreedEvent extends EntityEvent, Cancellable {
    getBredWith(): ItemStack;
    getBreeder(): LivingEntity;
    getExperience(): number;
    getFather(): LivingEntity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMother(): LivingEntity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setExperience(i: number): void;
}

//org.bukkit.entity.EntityCategory
declare enum EntityCategory {
    NONE,
    UNDEAD,
    ARTHROPOD,
    ILLAGER,
    WATER,
}

//org.bukkit.event.entity.EntityChangeBlockEvent
declare interface EntityChangeBlockEvent extends EntityEvent, Cancellable {
    getBlock(): Block;
    getBlockData(): BlockData;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getTo(): Material;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityCombustByBlockEvent
declare interface EntityCombustByBlockEvent extends EntityCombustEvent {
    getCombuster(): Block;
}

//org.bukkit.event.entity.EntityCombustByEntityEvent
declare interface EntityCombustByEntityEvent extends EntityCombustEvent {
    getCombuster(): Entity;
}

//org.bukkit.event.entity.EntityCombustEvent
declare interface EntityCombustEvent extends EntityEvent, Cancellable {
    getDuration(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setDuration(i: number): void;
}

//org.bukkit.event.entity.EntityCreatePortalEvent
declare interface EntityCreatePortalEvent extends EntityEvent, Cancellable {
    getBlocks(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPortalType(): PortalType;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityDamageByBlockEvent
declare interface EntityDamageByBlockEvent extends EntityDamageEvent {
    getDamager(): Block;
}

//org.bukkit.event.entity.EntityDamageByEntityEvent
declare interface EntityDamageByEntityEvent extends EntityDamageEvent {
    getDamager(): Entity;
}

//org.bukkit.event.entity.EntityDamageEvent
declare interface EntityDamageEvent extends EntityEvent, Cancellable {
    getCause(): DamageCause;
    getDamage(): number;
    getDamage(damageModifier: DamageModifier): number;
    getFinalDamage(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getOriginalDamage(damageModifier: DamageModifier): number;
    isApplicable(damageModifier: DamageModifier): boolean;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setDamage(d: number): void;
    setDamage(damageModifier: DamageModifier, d: number): void;
}

//org.bukkit.event.entity.EntityDeathEvent
declare interface EntityDeathEvent extends EntityEvent {
    getDroppedExp(): number;
    getDrops(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    setDroppedExp(i: number): void;
}

//org.bukkit.event.entity.EntityDropItemEvent
declare interface EntityDropItemEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItemDrop(): Item;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.EntityEffect
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

//org.bukkit.event.entity.EntityEnterBlockEvent
declare interface EntityEnterBlockEvent extends EntityEvent, Cancellable {
    getBlock(): Block;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityEnterLoveModeEvent
declare interface EntityEnterLoveModeEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getHumanEntity(): HumanEntity;
    getTicksInLove(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setTicksInLove(i: number): void;
}

//org.bukkit.inventory.EntityEquipment
declare interface EntityEquipment {
    clear(): void;
    getArmorContents(): ItemStack[];
    getBoots(): ItemStack;
    getBootsDropChance(): number;
    getChestplate(): ItemStack;
    getChestplateDropChance(): number;
    getHelmet(): ItemStack;
    getHelmetDropChance(): number;
    getHolder(): Entity;
    getItem(equipmentSlot: EquipmentSlot): ItemStack;
    getItemInHand(): ItemStack;
    getItemInHandDropChance(): number;
    getItemInMainHand(): ItemStack;
    getItemInMainHandDropChance(): number;
    getItemInOffHand(): ItemStack;
    getItemInOffHandDropChance(): number;
    getLeggings(): ItemStack;
    getLeggingsDropChance(): number;
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

//org.bukkit.event.entity.EntityEvent
declare interface EntityEvent extends Event {
    getEntity(): Entity;
    getEntityType(): EntityType;
}

//org.bukkit.event.entity.EntityExhaustionEvent
declare interface EntityExhaustionEvent extends EntityEvent, Cancellable {
    getExhaustion(): number;
    getExhaustionReason(): ExhaustionReason;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setExhaustion(f: number): void;
}

//org.bukkit.event.entity.EntityExplodeEvent
declare interface EntityExplodeEvent extends EntityEvent, Cancellable {
    blockList(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLocation(): Location;
    getYield(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setYield(f: number): void;
}

//org.bukkit.event.entity.EntityInteractEvent
declare interface EntityInteractEvent extends EntityEvent, Cancellable {
    getBlock(): Block;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityPickupItemEvent
declare interface EntityPickupItemEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): Item;
    getRemaining(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityPlaceEvent
declare interface EntityPlaceEvent extends EntityEvent, Cancellable {
    getBlock(): Block;
    getBlockFace(): BlockFace;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityPortalEnterEvent
declare interface EntityPortalEnterEvent extends EntityEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLocation(): Location;
}

//org.bukkit.event.entity.EntityPortalEvent
declare interface EntityPortalEvent extends EntityTeleportEvent {
    getSearchRadius(): number;
    setSearchRadius(i: number): void;
}

//org.bukkit.event.entity.EntityPortalExitEvent
declare interface EntityPortalExitEvent extends EntityTeleportEvent {
    getAfter(): Vector;
    getBefore(): Vector;
    setAfter(vector: Vector): void;
}

//org.bukkit.event.entity.EntityPoseChangeEvent
declare interface EntityPoseChangeEvent extends EntityEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPose(): Pose;
}

//org.bukkit.event.entity.EntityPotionEffectEvent
declare interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
    getAction(): Action;
    getCause(): Cause;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getModifiedType(): PotionEffectType;
    getNewEffect(): PotionEffect;
    getOldEffect(): PotionEffect;
    isCancelled(): boolean;
    isOverride(): boolean;
    setCancelled(b: boolean): void;
    setOverride(b: boolean): void;
}

//org.bukkit.event.entity.EntityRegainHealthEvent
declare interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
    getAmount(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRegainReason(): RegainReason;
    isCancelled(): boolean;
    setAmount(d: number): void;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityResurrectEvent
declare interface EntityResurrectEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityShootBowEvent
declare interface EntityShootBowEvent extends EntityEvent, Cancellable {
    getBow(): ItemStack;
    getConsumable(): ItemStack;
    getForce(): number;
    getHand(): EquipmentSlot;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getProjectile(): Entity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setConsumeItem(b: boolean): void;
    setProjectile(entity: Entity): void;
    shouldConsumeItem(): boolean;
}

//org.bukkit.event.entity.EntitySpawnEvent
declare interface EntitySpawnEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLocation(): Location;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntitySpellCastEvent
declare interface EntitySpellCastEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getSpell(): Spell;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityTameEvent
declare interface EntityTameEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getOwner(): AnimalTamer;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityTargetEvent
declare interface EntityTargetEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getReason(): TargetReason;
    getTarget(): Entity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setTarget(entity: Entity): void;
}

//org.bukkit.event.entity.EntityTargetLivingEntityEvent
declare interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
}

//org.bukkit.event.entity.EntityTeleportEvent
declare interface EntityTeleportEvent extends EntityEvent, Cancellable {
    getFrom(): Location;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getTo(): Location;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setFrom(location: Location): void;
    setTo(location: Location): void;
}

//org.bukkit.event.entity.EntityToggleGlideEvent
declare interface EntityToggleGlideEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isGliding(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityToggleSwimEvent
declare interface EntityToggleSwimEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isSwimming(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.EntityTransformEvent
declare interface EntityTransformEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getTransformReason(): TransformReason;
    getTransformedEntities(): List;
    getTransformedEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.entity.EntityType
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
    ALLAY,
    CHEST_BOAT,
    FROG,
    TADPOLE,
    WARDEN,
    FISHING_HOOK,
    LIGHTNING,
    PLAYER,
    UNKNOWN,
}

//org.bukkit.event.entity.EntityUnleashEvent
declare interface EntityUnleashEvent extends EntityEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getReason(): UnleashReason;
}

//java.util.Map$Entry
declare interface Entry {
    comparingByKey(): Comparator;
    comparingByKey(comparator: Comparator): Comparator;
    comparingByValue(): Comparator;
    comparingByValue(comparator: Comparator): Comparator;
    copyOf(entry: Entry): Entry;
    equals(object: any): boolean;
    getKey(): any;
    getValue(): any;
    hashCode(): number;
    setValue(object: any): any;
}

//java.util.Enumeration
declare interface Enumeration {
    asIterator(): Iterator;
    hasMoreElements(): boolean;
    nextElement(): any;
}

//org.bukkit.World$Environment
declare enum Environment {
    NORMAL,
    NETHER,
    THE_END,
    CUSTOM,
}

//org.bukkit.inventory.EquipmentSlot
declare enum EquipmentSlot {
    HAND,
    OFF_HAND,
    FEET,
    LEGS,
    CHEST,
    HEAD,
}

//java.time.chrono.Era
declare interface Era extends TemporalAccessor, TemporalAdjuster {
    adjustInto(temporal: Temporal): Temporal;
    get(temporalField: TemporalField): number;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    getLong(temporalField: TemporalField): number;
    getValue(): number;
    isSupported(temporalField: TemporalField): boolean;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
}

//java.util.logging.ErrorManager
declare interface ErrorManager {
    error(s: string, exception: Exception, i: number): void;
    CLOSE_FAILURE: number;
    FLUSH_FAILURE: number;
    FORMAT_FAILURE: number;
    GENERIC_FAILURE: number;
    OPEN_FAILURE: number;
    WRITE_FAILURE: number;
}

//org.bukkit.util.EulerAngle
declare interface EulerAngle {
    add(d: number, d: number, d: number): EulerAngle;
    getX(): number;
    getY(): number;
    getZ(): number;
    setX(d: number): EulerAngle;
    setY(d: number): EulerAngle;
    setZ(d: number): EulerAngle;
    subtract(d: number, d: number, d: number): EulerAngle;
    ZERO: EulerAngle;
}

//org.bukkit.event.Event
declare interface Event {
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
}

//java.awt.Event
declare interface Event extends Serializable {
    controlDown(): boolean;
    metaDown(): boolean;
    shiftDown(): boolean;
    translate(i: number, i: number): void;
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
    arg: any;
    clickCount: number;
    evt: Event;
    id: number;
    key: number;
    modifiers: number;
    target: any;
    when: number;
    x: number;
    y: number;
}

//org.bukkit.event.EventException
declare interface EventException extends Exception {
    getCause(): Throwable;
}

//org.bukkit.plugin.EventExecutor
declare interface EventExecutor {
    execute(listener: Listener, event: Event): void;
}

//org.bukkit.event.EventHandler
declare interface EventHandler extends Annotation {
    ignoreCancelled(): boolean;
    priority(): EventPriority;
}

//java.util.EventListener
declare interface EventListener {
}

//java.util.EventObject
declare interface EventObject extends Serializable {
    getSource(): any;
}

//org.bukkit.event.EventPriority
declare enum EventPriority {
    LOWEST,
    LOW,
    NORMAL,
    HIGH,
    HIGHEST,
    MONITOR,
}

//java.awt.EventQueue
declare interface EventQueue {
    createSecondaryLoop(): SecondaryLoop;
    getCurrentEvent(): AWTEvent;
    getMostRecentEventTime(): number;
    getNextEvent(): AWTEvent;
    invokeAndWait(runnable: Runnable): void;
    invokeLater(runnable: Runnable): void;
    isDispatchThread(): boolean;
    peekEvent(): AWTEvent;
    peekEvent(i: number): AWTEvent;
    postEvent(aWTEvent: AWTEvent): void;
    push(eventQueue: EventQueue): void;
}

//org.bukkit.entity.Evoker
declare interface Evoker extends Spellcaster {
    getCurrentSpell(): Spell;
    setCurrentSpell(spell: Spell): void;
}

//org.bukkit.entity.EvokerFangs
declare interface EvokerFangs extends Entity {
    getOwner(): LivingEntity;
    setOwner(livingEntity: LivingEntity): void;
}

//org.bukkit.conversations.ExactMatchConversationCanceller
declare interface ExactMatchConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

//java.lang.Exception
declare interface Exception extends Throwable {
}

//java.lang.reflect.Executable
declare interface Executable extends AccessibleObject, Member, GenericDeclaration {
    getAnnotatedExceptionTypes(): AnnotatedType[];
    getAnnotatedParameterTypes(): AnnotatedType[];
    getAnnotatedReceiverType(): AnnotatedType;
    getAnnotatedReturnType(): AnnotatedType;
    getDeclaringClass(): Class;
    getExceptionTypes(): Class[];
    getGenericExceptionTypes(): Type[];
    getGenericParameterTypes(): Type[];
    getModifiers(): number;
    getName(): string;
    getParameterAnnotations(): Annotation[][];
    getParameterCount(): number;
    getParameterTypes(): Class[];
    getParameters(): Parameter[];
    getTypeParameters(): TypeVariable[];
    isSynthetic(): boolean;
    isVarArgs(): boolean;
    toGenericString(): string;
}

//java.util.concurrent.Executor
declare interface Executor {
    execute(runnable: Runnable): void;
}

//java.util.concurrent.ExecutorService
declare interface ExecutorService extends Executor {
    awaitTermination(l: number, timeUnit: TimeUnit): boolean;
    invokeAll(collection: Collection): List;
    invokeAll(collection: Collection, l: number, timeUnit: TimeUnit): List;
    invokeAny(collection: Collection): any;
    invokeAny(collection: Collection, l: number, timeUnit: TimeUnit): any;
    isShutdown(): boolean;
    isTerminated(): boolean;
    shutdown(): void;
    shutdownNow(): List;
    submit(runnable: Runnable): Future;
    submit(callable: Callable): Future;
    submit(runnable: Runnable, object: any): Future;
}

//org.bukkit.event.entity.EntityExhaustionEvent$ExhaustionReason
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

//org.bukkit.event.entity.ExpBottleEvent
declare interface ExpBottleEvent extends ProjectileHitEvent {
    getExperience(): number;
    getShowEffect(): boolean;
    setExperience(i: number): void;
    setShowEffect(b: boolean): void;
}

//org.bukkit.entity.ExperienceOrb
declare interface ExperienceOrb extends Entity {
    getExperience(): number;
    setExperience(i: number): void;
}

//org.bukkit.event.entity.ExplosionPrimeEvent
declare interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
    getFire(): boolean;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRadius(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setFire(b: boolean): void;
    setRadius(f: number): void;
}

//org.bukkit.entity.Explosive
declare interface Explosive extends Entity {
    getYield(): number;
    isIncendiary(): boolean;
    setIsIncendiary(b: boolean): void;
    setYield(f: number): void;
}

//org.bukkit.entity.minecart.ExplosiveMinecart
declare interface ExplosiveMinecart extends Minecart {
}

//java.lang.module.ModuleDescriptor$Exports
declare interface Exports extends Comparable {
    compareTo(exports: Exports): number;
    compareTo(object: any): number;
    isQualified(): boolean;
    modifiers(): Set;
    source(): string;
    targets(): Set;
}

//org.bukkit.material.ExtendedRails
declare interface ExtendedRails extends Rails {
}

//java.io.Externalizable
declare interface Externalizable extends Serializable {
    readExternal(objectInput: ObjectInput): void;
    writeExternal(objectOutput: ObjectOutput): void;
}

//org.bukkit.block.data.type.Switch$Face
declare enum Face {
    FLOOR,
    WALL,
    CEILING,
}

//org.bukkit.block.data.FaceAttachable
declare interface FaceAttachable extends BlockData {
    getAttachedFace(): AttachedFace;
    setAttachedFace(attachedFace: AttachedFace): void;
}

//org.bukkit.entity.FallingBlock
declare interface FallingBlock extends Entity {
    canHurtEntities(): boolean;
    getBlockData(): BlockData;
    getDropItem(): boolean;
    getMaterial(): Material;
    setDropItem(b: boolean): void;
    setHurtEntities(b: boolean): void;
}

//org.bukkit.block.data.type.Farmland
declare interface Farmland extends BlockData {
    getMaximumMoisture(): number;
    getMoisture(): number;
    setMoisture(i: number): void;
}

//org.bukkit.block.data.type.Fence
declare interface Fence extends MultipleFacing, Waterlogged {
}

//java.lang.reflect.Field
declare interface Field extends AccessibleObject, Member {
    equals(object: any): boolean;
    get(object: any): any;
    getAnnotatedType(): AnnotatedType;
    getBoolean(object: any): boolean;
    getByte(object: any): number;
    getChar(object: any): string;
    getDeclaringClass(): Class;
    getDouble(object: any): number;
    getFloat(object: any): number;
    getGenericType(): Type;
    getInt(object: any): number;
    getLong(object: any): number;
    getModifiers(): number;
    getName(): string;
    getShort(object: any): number;
    getType(): Class;
    hashCode(): number;
    isEnumConstant(): boolean;
    isSynthetic(): boolean;
    set(object: any, object: any): void;
    setBoolean(object: any, b: boolean): void;
    setByte(object: any, b: number): void;
    setChar(object: any, c: string): void;
    setDouble(object: any, d: number): void;
    setFloat(object: any, f: number): void;
    setInt(object: any, i: number): void;
    setLong(object: any, l: number): void;
    setShort(object: any, s: number): void;
    toGenericString(): string;
    toString(): string;
}

//java.text.Format$Field
declare interface Field extends Attribute {
}

//java.text.FieldPosition
declare interface FieldPosition {
    getBeginIndex(): number;
    getEndIndex(): number;
    getField(): number;
    getFieldAttribute(): Field;
    setBeginIndex(i: number): void;
    setEndIndex(i: number): void;
}

//java.io.File
declare interface File extends Serializable, Comparable {
    canExecute(): boolean;
    canRead(): boolean;
    canWrite(): boolean;
    compareTo(file: File): number;
    compareTo(object: any): number;
    createNewFile(): boolean;
    createTempFile(s: string, s: string): File;
    createTempFile(s: string, s: string, file: File): File;
    delete(): boolean;
    deleteOnExit(): void;
    exists(): boolean;
    getAbsoluteFile(): File;
    getAbsolutePath(): string;
    getCanonicalFile(): File;
    getCanonicalPath(): string;
    getFreeSpace(): number;
    getName(): string;
    getParent(): string;
    getParentFile(): File;
    getPath(): string;
    getTotalSpace(): number;
    getUsableSpace(): number;
    isAbsolute(): boolean;
    isDirectory(): boolean;
    isFile(): boolean;
    isHidden(): boolean;
    lastModified(): number;
    length(): number;
    list(): string[];
    list(filenameFilter: FilenameFilter): string[];
    listFiles(): File[];
    listFiles(filenameFilter: FilenameFilter): File[];
    listFiles(fileFilter: FileFilter): File[];
    listRoots(): File[];
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
    toPath(): Path;
    toURI(): URI;
    toURL(): URL;
    pathSeparator: string;
    pathSeparatorChar: string;
    separator: string;
    separatorChar: string;
}

//java.nio.file.attribute.FileAttribute
declare interface FileAttribute {
    name(): string;
    value(): any;
}

//java.nio.file.attribute.FileAttributeView
declare interface FileAttributeView extends AttributeView {
}

//java.nio.channels.FileChannel
declare interface FileChannel extends AbstractInterruptibleChannel, SeekableByteChannel, GatheringByteChannel, ScatteringByteChannel {
    force(b: boolean): void;
    lock(): FileLock;
    lock(l: number, l: number, b: boolean): FileLock;
    map(mapMode: MapMode, l: number, l: number): MappedByteBuffer;
    open(path: Path, openOption: OpenOption): FileChannel;
    open(path: Path, set: Set, fileAttribute: FileAttribute): FileChannel;
    position(): number;
    position(l: number): SeekableByteChannel;
    position(l: number): FileChannel;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, l: number): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    size(): number;
    transferFrom(readableByteChannel: ReadableByteChannel, l: number, l: number): number;
    transferTo(l: number, l: number, writableByteChannel: WritableByteChannel): number;
    truncate(l: number): FileChannel;
    truncate(l: number): SeekableByteChannel;
    tryLock(): FileLock;
    tryLock(l: number, l: number, b: boolean): FileLock;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, l: number): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
}

//org.bukkit.configuration.file.FileConfiguration
declare interface FileConfiguration extends MemoryConfiguration {
    load(reader: Reader): void;
    load(file: File): void;
    load(s: string): void;
    loadFromString(s: string): void;
    save(file: File): void;
    save(s: string): void;
    saveToString(): string;
}

//org.bukkit.configuration.file.FileConfigurationOptions
declare interface FileConfigurationOptions extends MemoryConfigurationOptions {
    copyHeader(): boolean;
    copyHeader(b: boolean): FileConfigurationOptions;
    getFooter(): List;
    getHeader(): List;
    header(): string;
    header(s: string): FileConfigurationOptions;
    parseComments(): boolean;
    parseComments(b: boolean): MemoryConfigurationOptions;
    setFooter(list: List): FileConfigurationOptions;
    setHeader(list: List): FileConfigurationOptions;
}

//java.io.FileFilter
declare interface FileFilter {
    accept(file: File): boolean;
}

//java.nio.channels.FileLock
declare interface FileLock extends AutoCloseable {
    acquiredBy(): Channel;
    channel(): FileChannel;
    close(): void;
    isShared(): boolean;
    isValid(): boolean;
    overlaps(l: number, l: number): boolean;
    position(): number;
    release(): void;
    size(): number;
}

//java.net.FileNameMap
declare interface FileNameMap {
    getContentTypeFor(s: string): string;
}

//java.nio.file.FileStore
declare interface FileStore {
    getAttribute(s: string): any;
    getBlockSize(): number;
    getFileStoreAttributeView(clazz: Class): FileStoreAttributeView;
    getTotalSpace(): number;
    getUnallocatedSpace(): number;
    getUsableSpace(): number;
    isReadOnly(): boolean;
    name(): string;
    supportsFileAttributeView(clazz: Class): boolean;
    supportsFileAttributeView(s: string): boolean;
    type(): string;
}

//java.nio.file.attribute.FileStoreAttributeView
declare interface FileStoreAttributeView extends AttributeView {
}

//java.nio.file.FileSystem
declare interface FileSystem extends Closeable {
    close(): void;
    getFileStores(): Iterable;
    getPath(s: string, s: string): Path;
    getPathMatcher(s: string): PathMatcher;
    getRootDirectories(): Iterable;
    getSeparator(): string;
    getUserPrincipalLookupService(): UserPrincipalLookupService;
    isOpen(): boolean;
    isReadOnly(): boolean;
    newWatchService(): WatchService;
    provider(): FileSystemProvider;
    supportedFileAttributeViews(): Set;
}

//java.nio.file.spi.FileSystemProvider
declare interface FileSystemProvider {
    checkAccess(path: Path, accessMode: AccessMode): void;
    copy(path: Path, path: Path, copyOption: CopyOption): void;
    createDirectory(path: Path, fileAttribute: FileAttribute): void;
    createLink(path: Path, path: Path): void;
    createSymbolicLink(path: Path, path: Path, fileAttribute: FileAttribute): void;
    delete(path: Path): void;
    deleteIfExists(path: Path): boolean;
    getFileAttributeView(path: Path, clazz: Class, linkOption: LinkOption): FileAttributeView;
    getFileStore(path: Path): FileStore;
    getFileSystem(uRI: URI): FileSystem;
    getPath(uRI: URI): Path;
    getScheme(): string;
    installedProviders(): List;
    isHidden(path: Path): boolean;
    isSameFile(path: Path, path: Path): boolean;
    move(path: Path, path: Path, copyOption: CopyOption): void;
    newAsynchronousFileChannel(path: Path, set: Set, executorService: ExecutorService, fileAttribute: FileAttribute): AsynchronousFileChannel;
    newByteChannel(path: Path, set: Set, fileAttribute: FileAttribute): SeekableByteChannel;
    newDirectoryStream(path: Path, filter: Filter): DirectoryStream;
    newFileChannel(path: Path, set: Set, fileAttribute: FileAttribute): FileChannel;
    newFileSystem(uRI: URI, map: Map): FileSystem;
    newFileSystem(path: Path, map: Map): FileSystem;
    newInputStream(path: Path, openOption: OpenOption): InputStream;
    newOutputStream(path: Path, openOption: OpenOption): OutputStream;
    readAttributes(path: Path, clazz: Class, linkOption: LinkOption): BasicFileAttributes;
    readAttributes(path: Path, s: string, linkOption: LinkOption): Map;
    readSymbolicLink(path: Path): Path;
    setAttribute(path: Path, s: string, object: any, linkOption: LinkOption): void;
}

//java.nio.file.attribute.FileTime
declare interface FileTime extends Comparable {
    compareTo(fileTime: FileTime): number;
    compareTo(object: any): number;
    from(instant: Instant): FileTime;
    from(l: number, timeUnit: TimeUnit): FileTime;
    fromMillis(l: number): FileTime;
    to(timeUnit: TimeUnit): number;
    toInstant(): Instant;
    toMillis(): number;
}

//org.bukkit.util.FileUtil
declare interface FileUtil {
    copy(file: File, file: File): boolean;
}

//java.io.FilenameFilter
declare interface FilenameFilter {
    accept(file: File, s: string): boolean;
}

//java.util.logging.Filter
declare interface Filter {
    isLoggable(logRecord: LogRecord): boolean;
}

//java.nio.file.DirectoryStream$Filter
declare interface Filter {
    accept(object: any): boolean;
}

//java.io.ObjectInputFilter$FilterInfo
declare interface FilterInfo {
    arrayLength(): number;
    depth(): number;
    references(): number;
    serialClass(): Class;
    streamBytes(): number;
}

//java.io.FilterOutputStream
declare interface FilterOutputStream extends OutputStream {
}

//java.util.Locale$FilteringMode
declare enum FilteringMode {
    AUTOSELECT_FILTERING,
    EXTENDED_FILTERING,
    IGNORE_EXTENDED_RANGES,
    MAP_EXTENDED_RANGES,
    REJECT_EXTENDED_RANGES,
}

//org.bukkit.block.data.type.Fire
declare interface Fire extends Ageable, MultipleFacing {
}

//org.bukkit.entity.Fireball
declare interface Fireball extends Projectile, Explosive {
    getDirection(): Vector;
    setDirection(vector: Vector): void;
}

//org.bukkit.entity.Firework
declare interface Firework extends Projectile {
    detonate(): void;
    getFireworkMeta(): FireworkMeta;
    isShotAtAngle(): boolean;
    setFireworkMeta(fireworkMeta: FireworkMeta): void;
    setShotAtAngle(b: boolean): void;
}

//org.bukkit.FireworkEffect
declare interface FireworkEffect extends ConfigurationSerializable {
    builder(): Builder;
    deserialize(map: Map): ConfigurationSerializable;
    getColors(): List;
    getFadeColors(): List;
    getType(): Type;
    hasFlicker(): boolean;
    hasTrail(): boolean;
    serialize(): Map;
}

//org.bukkit.inventory.meta.FireworkEffectMeta
declare interface FireworkEffectMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): FireworkEffectMeta;
    getEffect(): FireworkEffect;
    hasEffect(): boolean;
    setEffect(fireworkEffect: FireworkEffect): void;
}

//org.bukkit.event.entity.FireworkExplodeEvent
declare interface FireworkExplodeEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.inventory.meta.FireworkMeta
declare interface FireworkMeta extends ItemMeta {
    addEffect(fireworkEffect: FireworkEffect): void;
    addEffects(iterable: Iterable): void;
    addEffects(fireworkEffect: FireworkEffect): void;
    clearEffects(): void;
    clone(): ItemMeta;
    clone(): FireworkMeta;
    clone(): any;
    getEffects(): List;
    getEffectsSize(): number;
    getPower(): number;
    hasEffects(): boolean;
    removeEffect(i: number): void;
    setPower(i: number): void;
}

//org.bukkit.entity.Fish
declare interface Fish extends WaterMob {
}

//org.bukkit.entity.FishHook
declare interface FishHook extends Projectile {
    getApplyLure(): boolean;
    getBiteChance(): number;
    getHookedEntity(): Entity;
    getMaxWaitTime(): number;
    getMinWaitTime(): number;
    getState(): HookState;
    isInOpenWater(): boolean;
    pullHookedEntity(): boolean;
    setApplyLure(b: boolean): void;
    setBiteChance(d: number): void;
    setHookedEntity(entity: Entity): void;
    setMaxWaitTime(i: number): void;
    setMinWaitTime(i: number): void;
}

//org.bukkit.metadata.FixedMetadataValue
declare interface FixedMetadataValue extends LazyMetadataValue {
}

//org.bukkit.conversations.FixedSetPrompt
declare interface FixedSetPrompt extends ValidatingPrompt {
}

//java.awt.datatransfer.FlavorEvent
declare interface FlavorEvent extends EventObject {
}

//java.awt.datatransfer.FlavorListener
declare interface FlavorListener extends EventListener {
    flavorsChanged(flavorEvent: FlavorEvent): void;
}

//java.awt.datatransfer.FlavorMap
declare interface FlavorMap {
    getFlavorsForNatives(s: string): Map;
    getNativesForFlavors(dataFlavor: DataFlavor): Map;
}

//java.awt.BufferCapabilities$FlipContents
declare interface FlipContents extends AttributeValue {
    BACKGROUND: FlipContents;
    COPIED: FlipContents;
    PRIOR: FlipContents;
    UNDEFINED: FlipContents;
}

//java.nio.FloatBuffer
declare interface FloatBuffer extends Buffer, Comparable {
    allocate(i: number): FloatBuffer;
    asReadOnlyBuffer(): FloatBuffer;
    compact(): FloatBuffer;
    compareTo(object: any): number;
    compareTo(floatBuffer: FloatBuffer): number;
    equals(object: any): boolean;
    get(): number;
    get(i: number): number;
    get(f: number): FloatBuffer;
    get(i: number, f: number): FloatBuffer;
    get(f: number, i: number, i: number): FloatBuffer;
    get(i: number, f: number, i: number, i: number): FloatBuffer;
    hashCode(): number;
    mismatch(floatBuffer: FloatBuffer): number;
    order(): ByteOrder;
    put(f: number): FloatBuffer;
    put(floatBuffer: FloatBuffer): FloatBuffer;
    put(f: number): FloatBuffer;
    put(i: number, f: number): FloatBuffer;
    put(i: number, f: number): FloatBuffer;
    put(f: number, i: number, i: number): FloatBuffer;
    put(i: number, f: number, i: number, i: number): FloatBuffer;
    put(i: number, floatBuffer: FloatBuffer, i: number, i: number): FloatBuffer;
    toString(): string;
    wrap(f: number): FloatBuffer;
    wrap(f: number, i: number, i: number): FloatBuffer;
}

//org.yaml.snakeyaml.DumperOptions$FlowStyle
declare enum FlowStyle {
    FLOW,
    BLOCK,
    AUTO,
}

//org.bukkit.material.FlowerPot
declare interface FlowerPot extends MaterialData {
    getContents(): MaterialData;
    setContents(materialData: MaterialData): void;
}

//org.bukkit.Fluid
declare enum Fluid {
    WATER,
    FLOWING_WATER,
    LAVA,
    FLOWING_LAVA,
}

//org.bukkit.FluidCollisionMode
declare enum FluidCollisionMode {
    NEVER,
    SOURCE_ONLY,
    ALWAYS,
}

//org.bukkit.event.block.FluidLevelChangeEvent
declare interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewData(): BlockData;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setNewData(blockData: BlockData): void;
}

//java.io.Flushable
declare interface Flushable {
    flush(): void;
}

//org.bukkit.entity.Flying
declare interface Flying extends Mob {
}

//java.awt.event.FocusEvent
declare interface FocusEvent extends ComponentEvent {
    getCause(): Cause;
    getOppositeComponent(): Component;
    isTemporary(): boolean;
    FOCUS_FIRST: number;
    FOCUS_GAINED: number;
    FOCUS_LAST: number;
    FOCUS_LOST: number;
}

//java.awt.event.FocusListener
declare interface FocusListener extends EventListener {
    focusGained(focusEvent: FocusEvent): void;
    focusLost(focusEvent: FocusEvent): void;
}

//java.awt.FocusTraversalPolicy
declare interface FocusTraversalPolicy {
    getComponentAfter(container: Container, component: Component): Component;
    getComponentBefore(container: Container, component: Component): Component;
    getDefaultComponent(container: Container): Component;
    getFirstComponent(container: Container): Component;
    getInitialComponent(window: Window): Component;
    getLastComponent(container: Container): Component;
}

//java.awt.Font
declare interface Font extends Serializable {
    canDisplay(i: number): boolean;
    canDisplay(c: string): boolean;
    canDisplayUpTo(s: string): number;
    canDisplayUpTo(c: string, i: number, i: number): number;
    canDisplayUpTo(characterIterator: CharacterIterator, i: number, i: number): number;
    createFont(i: number, inputStream: InputStream): Font;
    createFont(i: number, file: File): Font;
    createFonts(inputStream: InputStream): Font[];
    createFonts(file: File): Font[];
    createGlyphVector(fontRenderContext: FontRenderContext, c: string): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, characterIterator: CharacterIterator): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, s: string): GlyphVector;
    createGlyphVector(fontRenderContext: FontRenderContext, i: number): GlyphVector;
    decode(s: string): Font;
    deriveFont(i: number): Font;
    deriveFont(affineTransform: AffineTransform): Font;
    deriveFont(f: number): Font;
    deriveFont(map: Map): Font;
    deriveFont(i: number, f: number): Font;
    deriveFont(i: number, affineTransform: AffineTransform): Font;
    getAttributes(): Map;
    getAvailableAttributes(): Attribute[];
    getBaselineFor(c: string): number;
    getFamily(): string;
    getFamily(locale: Locale): string;
    getFont(s: string): Font;
    getFont(map: Map): Font;
    getFont(s: string, font: Font): Font;
    getFontName(): string;
    getFontName(locale: Locale): string;
    getItalicAngle(): number;
    getLineMetrics(s: string, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(s: string, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(characterIterator: CharacterIterator, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getLineMetrics(c: string, i: number, i: number, fontRenderContext: FontRenderContext): LineMetrics;
    getMaxCharBounds(fontRenderContext: FontRenderContext): Rectangle2D;
    getMissingGlyphCode(): number;
    getName(): string;
    getNumGlyphs(): number;
    getPSName(): string;
    getSize(): number;
    getSize2D(): number;
    getStringBounds(s: string, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(characterIterator: CharacterIterator, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(c: string, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStringBounds(s: string, i: number, i: number, fontRenderContext: FontRenderContext): Rectangle2D;
    getStyle(): number;
    getTransform(): AffineTransform;
    hasLayoutAttributes(): boolean;
    hasUniformLineMetrics(): boolean;
    isBold(): boolean;
    isItalic(): boolean;
    isPlain(): boolean;
    isTransformed(): boolean;
    layoutGlyphVector(fontRenderContext: FontRenderContext, c: string, i: number, i: number, i: number): GlyphVector;
    textRequiresLayout(c: string, i: number, i: number): boolean;
    BOLD: number;
    CENTER_BASELINE: number;
    DIALOG: string;
    DIALOG_INPUT: string;
    HANGING_BASELINE: number;
    ITALIC: number;
    LAYOUT_LEFT_TO_RIGHT: number;
    LAYOUT_NO_LIMIT_CONTEXT: number;
    LAYOUT_NO_START_CONTEXT: number;
    LAYOUT_RIGHT_TO_LEFT: number;
    MONOSPACED: string;
    PLAIN: number;
    ROMAN_BASELINE: number;
    SANS_SERIF: string;
    SERIF: string;
    TRUETYPE_FONT: number;
    TYPE1_FONT: number;
}

//java.awt.FontMetrics
declare interface FontMetrics extends Serializable {
    bytesWidth(b: number, i: number, i: number): number;
    charWidth(i: number): number;
    charWidth(c: string): number;
    charsWidth(c: string, i: number, i: number): number;
    getAscent(): number;
    getDescent(): number;
    getFont(): Font;
    getFontRenderContext(): FontRenderContext;
    getHeight(): number;
    getLeading(): number;
    getLineMetrics(s: string, graphics: Graphics): LineMetrics;
    getLineMetrics(s: string, i: number, i: number, graphics: Graphics): LineMetrics;
    getLineMetrics(c: string, i: number, i: number, graphics: Graphics): LineMetrics;
    getLineMetrics(characterIterator: CharacterIterator, i: number, i: number, graphics: Graphics): LineMetrics;
    getMaxAdvance(): number;
    getMaxAscent(): number;
    getMaxCharBounds(graphics: Graphics): Rectangle2D;
    getMaxDecent(): number;
    getMaxDescent(): number;
    getStringBounds(s: string, graphics: Graphics): Rectangle2D;
    getStringBounds(characterIterator: CharacterIterator, i: number, i: number, graphics: Graphics): Rectangle2D;
    getStringBounds(c: string, i: number, i: number, graphics: Graphics): Rectangle2D;
    getStringBounds(s: string, i: number, i: number, graphics: Graphics): Rectangle2D;
    getWidths(): number[];
    hasUniformLineMetrics(): boolean;
    stringWidth(s: string): number;
}

//java.awt.font.FontRenderContext
declare interface FontRenderContext {
    equals(fontRenderContext: FontRenderContext): boolean;
    getAntiAliasingHint(): any;
    getFractionalMetricsHint(): any;
    getTransform(): AffineTransform;
    getTransformType(): number;
    isAntiAliased(): boolean;
    isTransformed(): boolean;
    usesFractionalMetrics(): boolean;
}

//org.bukkit.event.entity.FoodLevelChangeEvent
declare interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
    getFoodLevel(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setFoodLevel(i: number): void;
}

//java.text.Format
declare interface Format extends Serializable, Cloneable {
    format(object: any): string;
    format(object: any, s: string, fieldPosition: FieldPosition): string;
    formatToCharacterIterator(object: any): AttributedCharacterIterator;
    parseObject(s: string): any;
    parseObject(s: string, parsePosition: ParsePosition): any;
}

//net.md_5.bungee.api.chat.ComponentBuilder$FormatRetention
declare enum FormatRetention {
    NONE,
    FORMATTING,
    EVENTS,
    ALL,
}

//java.time.format.FormatStyle
declare enum FormatStyle {
    FULL,
    LONG,
    MEDIUM,
    SHORT,
}

//org.bukkit.command.FormattedCommandAlias
declare interface FormattedCommandAlias extends Command {
}

//java.util.logging.Formatter
declare interface Formatter {
    format(logRecord: LogRecord): string;
    formatMessage(logRecord: LogRecord): string;
    getHead(handler: Handler): string;
    getTail(handler: Handler): string;
}

//org.bukkit.entity.Fox
declare interface Fox extends Animals, Sittable {
    getFirstTrustedPlayer(): AnimalTamer;
    getFoxType(): Type;
    getSecondTrustedPlayer(): AnimalTamer;
    isCrouching(): boolean;
    setCrouching(b: boolean): void;
    setFirstTrustedPlayer(animalTamer: AnimalTamer): void;
    setFoxType(type: Type): void;
    setSecondTrustedPlayer(animalTamer: AnimalTamer): void;
    setSleeping(b: boolean): void;
}

//java.awt.Frame
declare interface Frame extends Window, MenuContainer {
    getCursorType(): number;
    getExtendedState(): number;
    getFrames(): Frame[];
    getIconImage(): Image;
    getMaximizedBounds(): Rectangle;
    getMenuBar(): MenuBar;
    getState(): number;
    getTitle(): string;
    isResizable(): boolean;
    isUndecorated(): boolean;
    remove(menuComponent: MenuComponent): void;
    setCursor(i: number): void;
    setExtendedState(i: number): void;
    setMaximizedBounds(rectangle: Rectangle): void;
    setMenuBar(menuBar: MenuBar): void;
    setResizable(b: boolean): void;
    setState(i: number): void;
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

//org.bukkit.entity.Frog
declare interface Frog extends Animals {
    getTongueTarget(): Entity;
    getVariant(): Variant;
    setTongueTarget(entity: Entity): void;
    setVariant(variant: Variant): void;
}

//java.util.function.Function
declare interface Function {
    andThen(func: Function): Function;
    apply(object: any): any;
    compose(func: Function): Function;
    identity(): Function;
}

//org.bukkit.block.data.type.Furnace
declare interface Furnace extends Directional, Lightable {
}

//org.bukkit.block.Furnace
declare interface Furnace extends Container {
    getBurnTime(): number;
    getCookTime(): number;
    getCookTimeTotal(): number;
    getInventory(): FurnaceInventory;
    getInventory(): Inventory;
    getRecipesUsed(): Map;
    getSnapshotInventory(): FurnaceInventory;
    getSnapshotInventory(): Inventory;
    setBurnTime(s: number): void;
    setCookTime(s: number): void;
    setCookTimeTotal(i: number): void;
}

//org.bukkit.material.Furnace
declare interface Furnace extends FurnaceAndDispenser {
}

//org.bukkit.material.FurnaceAndDispenser
declare interface FurnaceAndDispenser extends DirectionalContainer {
}

//org.bukkit.event.inventory.FurnaceBurnEvent
declare interface FurnaceBurnEvent extends BlockEvent, Cancellable {
    getBurnTime(): number;
    getFuel(): ItemStack;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isBurning(): boolean;
    isCancelled(): boolean;
    setBurnTime(i: number): void;
    setBurning(b: boolean): void;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.inventory.FurnaceExtractEvent
declare interface FurnaceExtractEvent extends BlockExpEvent {
    getItemAmount(): number;
    getItemType(): Material;
    getPlayer(): Player;
}

//org.bukkit.inventory.FurnaceInventory
declare interface FurnaceInventory extends Inventory {
    getFuel(): ItemStack;
    getHolder(): Furnace;
    getHolder(): InventoryHolder;
    getResult(): ItemStack;
    getSmelting(): ItemStack;
    setFuel(itemStack: ItemStack): void;
    setResult(itemStack: ItemStack): void;
    setSmelting(itemStack: ItemStack): void;
}

//org.bukkit.inventory.FurnaceRecipe
declare interface FurnaceRecipe extends CookingRecipe {
    setInput(materialData: MaterialData): FurnaceRecipe;
    setInput(material: Material, i: number): FurnaceRecipe;
}

//org.bukkit.event.inventory.FurnaceSmeltEvent
declare interface FurnaceSmeltEvent extends BlockCookEvent {
}

//org.bukkit.event.inventory.FurnaceStartSmeltEvent
declare interface FurnaceStartSmeltEvent extends BlockEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRecipe(): CookingRecipe;
    getSource(): ItemStack;
    getTotalCookTime(): number;
    setTotalCookTime(i: number): void;
}

//java.util.concurrent.Future
declare interface Future {
    cancel(b: boolean): boolean;
    get(): any;
    get(l: number, timeUnit: TimeUnit): any;
    isCancelled(): boolean;
    isDone(): boolean;
}

//org.bukkit.GameEvent
declare interface GameEvent extends Keyed {
    getByKey(namespacedKey: NamespacedKey): GameEvent;
    getKey(): NamespacedKey;
    values(): Collection;
    BLOCK_ACTIVATE: GameEvent;
    BLOCK_ATTACH: GameEvent;
    BLOCK_CHANGE: GameEvent;
    BLOCK_CLOSE: GameEvent;
    BLOCK_DEACTIVATE: GameEvent;
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
    DRINK: GameEvent;
    DRINKING_FINISH: GameEvent;
    EAT: GameEvent;
    ELYTRA_FREE_FALL: GameEvent;
    ELYTRA_GLIDE: GameEvent;
    ENTITY_DAMAGE: GameEvent;
    ENTITY_DAMAGED: GameEvent;
    ENTITY_DIE: GameEvent;
    ENTITY_DYING: GameEvent;
    ENTITY_INTERACT: GameEvent;
    ENTITY_KILLED: GameEvent;
    ENTITY_PLACE: GameEvent;
    ENTITY_ROAR: GameEvent;
    ENTITY_SHAKE: GameEvent;
    EQUIP: GameEvent;
    EXPLODE: GameEvent;
    FLAP: GameEvent;
    FLUID_PICKUP: GameEvent;
    FLUID_PLACE: GameEvent;
    HIT_GROUND: GameEvent;
    INSTRUMENT_PLAY: GameEvent;
    ITEM_INTERACT_FINISH: GameEvent;
    ITEM_INTERACT_START: GameEvent;
    LIGHTNING_STRIKE: GameEvent;
    MOB_INTERACT: GameEvent;
    NOTE_BLOCK_PLAY: GameEvent;
    PISTON_CONTRACT: GameEvent;
    PISTON_EXTEND: GameEvent;
    PRIME_FUSE: GameEvent;
    PROJECTILE_LAND: GameEvent;
    PROJECTILE_SHOOT: GameEvent;
    RAVAGER_ROAR: GameEvent;
    RING_BELL: GameEvent;
    SCULK_SENSOR_TENDRILS_CLICKING: GameEvent;
    SHEAR: GameEvent;
    SHRIEK: GameEvent;
    SHULKER_CLOSE: GameEvent;
    SHULKER_OPEN: GameEvent;
    SPLASH: GameEvent;
    STEP: GameEvent;
    SWIM: GameEvent;
    TELEPORT: GameEvent;
    WOLF_SHAKING: GameEvent;
}

//org.bukkit.GameMode
declare enum GameMode {
    CREATIVE,
    SURVIVAL,
    ADVENTURE,
    SPECTATOR,
}

//org.bukkit.GameRule
declare interface GameRule {
    getByName(s: string): GameRule;
    getName(): string;
    getType(): Class;
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
    DO_WARDEN_SPAWNING: GameRule;
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

//org.bukkit.material.Gate
declare interface Gate extends MaterialData, Directional, Openable {
    getFacing(): BlockFace;
    isOpen(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setOpen(b: boolean): void;
}

//org.bukkit.block.data.type.Gate
declare interface Gate extends Directional, Openable, Powerable {
    isInWall(): boolean;
    setInWall(b: boolean): void;
}

//java.nio.channels.GatheringByteChannel
declare interface GatheringByteChannel extends WritableByteChannel {
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
}

//org.bukkit.entity.Panda$Gene
declare enum Gene {
    NORMAL,
    LAZY,
    WORRIED,
    PLAYFUL,
    BROWN,
    WEAK,
    AGGRESSIVE,
}

//org.bukkit.inventory.meta.BookMeta$Generation
declare enum Generation {
    ORIGINAL,
    COPY_OF_ORIGINAL,
    COPY_OF_COPY,
    TATTERED,
}

//org.bukkit.help.GenericCommandHelpTopic
declare interface GenericCommandHelpTopic extends HelpTopic {
}

//java.lang.reflect.GenericDeclaration
declare interface GenericDeclaration extends AnnotatedElement {
    getTypeParameters(): TypeVariable[];
}

//org.bukkit.event.world.GenericGameEvent
declare interface GenericGameEvent extends WorldEvent, Cancellable {
    getEntity(): Entity;
    getEvent(): GameEvent;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLocation(): Location;
    getRadius(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setRadius(i: number): void;
}

//java.io.ObjectInputStream$GetField
declare interface GetField {
    defaulted(s: string): boolean;
    get(s: string, l: number): number;
    get(s: string, i: number): number;
    get(s: string, s: number): number;
    get(s: string, f: number): number;
    get(s: string, d: number): number;
    get(s: string, object: any): any;
    get(s: string, b: boolean): boolean;
    get(s: string, b: number): number;
    get(s: string, c: string): string;
    getObjectStreamClass(): ObjectStreamClass;
}

//org.bukkit.entity.Ghast
declare interface Ghast extends Flying {
}

//org.bukkit.entity.Giant
declare interface Giant extends Monster {
}

//org.bukkit.block.data.type.GlassPane
declare interface GlassPane extends MultipleFacing, Waterlogged {
}

//org.bukkit.entity.GlowItemFrame
declare interface GlowItemFrame extends ItemFrame {
}

//org.bukkit.block.data.type.GlowLichen
declare interface GlowLichen extends MultipleFacing, Waterlogged {
}

//org.bukkit.entity.GlowSquid
declare interface GlowSquid extends Squid {
    getDarkTicksRemaining(): number;
    setDarkTicksRemaining(i: number): void;
}

//java.awt.font.GlyphJustificationInfo
declare interface GlyphJustificationInfo {
    PRIORITY_INTERCHAR: number;
    PRIORITY_KASHIDA: number;
    PRIORITY_NONE: number;
    PRIORITY_WHITESPACE: number;
    growAbsorb: boolean;
    growLeftLimit: number;
    growPriority: number;
    growRightLimit: number;
    shrinkAbsorb: boolean;
    shrinkLeftLimit: number;
    shrinkPriority: number;
    shrinkRightLimit: number;
    weight: number;
}

//java.awt.font.GlyphMetrics
declare interface GlyphMetrics {
    getAdvance(): number;
    getAdvanceX(): number;
    getAdvanceY(): number;
    getBounds2D(): Rectangle2D;
    getLSB(): number;
    getRSB(): number;
    getType(): number;
    isCombining(): boolean;
    isComponent(): boolean;
    isLigature(): boolean;
    isStandard(): boolean;
    isWhitespace(): boolean;
    COMBINING: number;
    COMPONENT: number;
    LIGATURE: number;
    STANDARD: number;
    WHITESPACE: number;
}

//java.awt.font.GlyphVector
declare interface GlyphVector extends Cloneable {
    equals(glyphVector: GlyphVector): boolean;
    getFont(): Font;
    getFontRenderContext(): FontRenderContext;
    getGlyphCharIndex(i: number): number;
    getGlyphCharIndices(i: number, i: number, i: number): number[];
    getGlyphCode(i: number): number;
    getGlyphCodes(i: number, i: number, i: number): number[];
    getGlyphJustificationInfo(i: number): GlyphJustificationInfo;
    getGlyphLogicalBounds(i: number): Shape;
    getGlyphMetrics(i: number): GlyphMetrics;
    getGlyphOutline(i: number): Shape;
    getGlyphOutline(i: number, f: number, f: number): Shape;
    getGlyphPixelBounds(i: number, fontRenderContext: FontRenderContext, f: number, f: number): Rectangle;
    getGlyphPosition(i: number): Point2D;
    getGlyphPositions(i: number, i: number, f: number): number[];
    getGlyphTransform(i: number): AffineTransform;
    getGlyphVisualBounds(i: number): Shape;
    getLayoutFlags(): number;
    getLogicalBounds(): Rectangle2D;
    getNumGlyphs(): number;
    getOutline(): Shape;
    getOutline(f: number, f: number): Shape;
    getPixelBounds(fontRenderContext: FontRenderContext, f: number, f: number): Rectangle;
    getVisualBounds(): Rectangle2D;
    performDefaultLayout(): void;
    setGlyphPosition(i: number, point2D: Point2D): void;
    setGlyphTransform(i: number, affineTransform: AffineTransform): void;
    FLAG_COMPLEX_GLYPHS: number;
    FLAG_HAS_POSITION_ADJUSTMENTS: number;
    FLAG_HAS_TRANSFORMS: number;
    FLAG_MASK: number;
    FLAG_RUN_RTL: number;
}

//org.bukkit.entity.Goat
declare interface Goat extends Animals {
    hasLeftHorn(): boolean;
    hasRightHorn(): boolean;
    isScreaming(): boolean;
    setLeftHorn(b: boolean): void;
    setRightHorn(b: boolean): void;
    setScreaming(b: boolean): void;
}

//org.bukkit.entity.Golem
declare interface Golem extends Creature {
}

//java.awt.Graphics
declare interface Graphics {
    clearRect(i: number, i: number, i: number, i: number): void;
    clipRect(i: number, i: number, i: number, i: number): void;
    copyArea(i: number, i: number, i: number, i: number, i: number, i: number): void;
    create(): Graphics;
    create(i: number, i: number, i: number, i: number): Graphics;
    dispose(): void;
    draw3DRect(i: number, i: number, i: number, i: number, b: boolean): void;
    drawArc(i: number, i: number, i: number, i: number, i: number, i: number): void;
    drawBytes(b: number, i: number, i: number, i: number, i: number): void;
    drawChars(c: string, i: number, i: number, i: number, i: number): void;
    drawImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, i: number, i: number, i: number, i: number, imageObserver: ImageObserver): boolean;
    drawImage(image: Image, i: number, i: number, i: number, i: number, i: number, i: number, i: number, i: number, color: Color, imageObserver: ImageObserver): boolean;
    drawLine(i: number, i: number, i: number, i: number): void;
    drawOval(i: number, i: number, i: number, i: number): void;
    drawPolygon(polygon: Polygon): void;
    drawPolygon(i: number, i: number, i: number): void;
    drawPolyline(i: number, i: number, i: number): void;
    drawRect(i: number, i: number, i: number, i: number): void;
    drawRoundRect(i: number, i: number, i: number, i: number, i: number, i: number): void;
    drawString(s: string, i: number, i: number): void;
    drawString(attributedCharacterIterator: AttributedCharacterIterator, i: number, i: number): void;
    fill3DRect(i: number, i: number, i: number, i: number, b: boolean): void;
    fillArc(i: number, i: number, i: number, i: number, i: number, i: number): void;
    fillOval(i: number, i: number, i: number, i: number): void;
    fillPolygon(polygon: Polygon): void;
    fillPolygon(i: number, i: number, i: number): void;
    fillRect(i: number, i: number, i: number, i: number): void;
    fillRoundRect(i: number, i: number, i: number, i: number, i: number, i: number): void;
    getClip(): Shape;
    getClipBounds(): Rectangle;
    getClipBounds(rectangle: Rectangle): Rectangle;
    getClipRect(): Rectangle;
    getColor(): Color;
    getFont(): Font;
    getFontMetrics(): FontMetrics;
    getFontMetrics(font: Font): FontMetrics;
    hitClip(i: number, i: number, i: number, i: number): boolean;
    setClip(shape: Shape): void;
    setClip(i: number, i: number, i: number, i: number): void;
    setColor(color: Color): void;
    setFont(font: Font): void;
    setPaintMode(): void;
    setXORMode(color: Color): void;
    translate(i: number, i: number): void;
}

//java.awt.Graphics2D
declare interface Graphics2D extends Graphics {
    addRenderingHints(map: Map): void;
    clip(shape: Shape): void;
    draw(shape: Shape): void;
    drawGlyphVector(glyphVector: GlyphVector, f: number, f: number): void;
    drawImage(image: Image, affineTransform: AffineTransform, imageObserver: ImageObserver): boolean;
    drawImage(bufferedImage: BufferedImage, bufferedImageOp: BufferedImageOp, i: number, i: number): void;
    drawRenderableImage(renderableImage: RenderableImage, affineTransform: AffineTransform): void;
    drawRenderedImage(renderedImage: RenderedImage, affineTransform: AffineTransform): void;
    drawString(attributedCharacterIterator: AttributedCharacterIterator, f: number, f: number): void;
    drawString(s: string, f: number, f: number): void;
    fill(shape: Shape): void;
    getBackground(): Color;
    getComposite(): Composite;
    getDeviceConfiguration(): GraphicsConfiguration;
    getFontRenderContext(): FontRenderContext;
    getPaint(): Paint;
    getRenderingHint(key: Key): any;
    getRenderingHints(): RenderingHints;
    getStroke(): Stroke;
    getTransform(): AffineTransform;
    hit(rectangle: Rectangle, shape: Shape, b: boolean): boolean;
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

//java.awt.GraphicsConfigTemplate
declare interface GraphicsConfigTemplate extends Serializable {
    getBestConfiguration(graphicsConfiguration: GraphicsConfiguration): GraphicsConfiguration;
    isGraphicsConfigSupported(graphicsConfiguration: GraphicsConfiguration): boolean;
    PREFERRED: number;
    REQUIRED: number;
    UNNECESSARY: number;
}

//java.awt.GraphicsConfiguration
declare interface GraphicsConfiguration {
    createCompatibleImage(i: number, i: number): BufferedImage;
    createCompatibleImage(i: number, i: number, i: number): BufferedImage;
    createCompatibleVolatileImage(i: number, i: number): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, i: number): VolatileImage;
    createCompatibleVolatileImage(i: number, i: number, imageCapabilities: ImageCapabilities, i: number): VolatileImage;
    getBounds(): Rectangle;
    getBufferCapabilities(): BufferCapabilities;
    getColorModel(): ColorModel;
    getColorModel(i: number): ColorModel;
    getDefaultTransform(): AffineTransform;
    getDevice(): GraphicsDevice;
    getImageCapabilities(): ImageCapabilities;
    getNormalizingTransform(): AffineTransform;
    isTranslucencyCapable(): boolean;
}

//java.awt.GraphicsDevice
declare interface GraphicsDevice {
    getAvailableAcceleratedMemory(): number;
    getBestConfiguration(graphicsConfigTemplate: GraphicsConfigTemplate): GraphicsConfiguration;
    getConfigurations(): GraphicsConfiguration[];
    getDefaultConfiguration(): GraphicsConfiguration;
    getDisplayMode(): DisplayMode;
    getDisplayModes(): DisplayMode[];
    getFullScreenWindow(): Window;
    getIDstring(): string;
    getType(): number;
    isDisplayChangeSupported(): boolean;
    isFullScreenSupported(): boolean;
    isWindowTranslucencySupported(windowTranslucency: WindowTranslucency): boolean;
    setDisplayMode(displayMode: DisplayMode): void;
    setFullScreenWindow(window: Window): void;
    TYPE_IMAGE_BUFFER: number;
    TYPE_PRINTER: number;
    TYPE_RASTER_SCREEN: number;
}

//org.bukkit.GrassSpecies
declare enum GrassSpecies {
    DEAD,
    NORMAL,
    FERN_LIKE,
}

//org.bukkit.block.data.type.Grindstone
declare interface Grindstone extends Directional, FaceAttachable {
}

//org.bukkit.inventory.GrindstoneInventory
declare interface GrindstoneInventory extends Inventory {
}

//java.nio.file.attribute.GroupPrincipal
declare interface GroupPrincipal extends UserPrincipal {
}

//java.security.Guard
declare interface Guard {
    checkGuard(object: any): void;
}

//org.bukkit.entity.Guardian
declare interface Guardian extends Monster {
    hasLaser(): boolean;
    isElder(): boolean;
    setElder(b: boolean): void;
    setLaser(b: boolean): boolean;
}

//org.bukkit.block.data.Bisected$Half
declare enum Half {
    TOP,
    BOTTOM,
}

//java.util.logging.Handler
declare interface Handler {
    close(): void;
    flush(): void;
    getEncoding(): string;
    getErrorManager(): ErrorManager;
    getFilter(): Filter;
    getFormatter(): Formatter;
    getLevel(): Level;
    isLoggable(logRecord: LogRecord): boolean;
    publish(logRecord: LogRecord): void;
    setEncoding(s: string): void;
    setErrorManager(errorManager: ErrorManager): void;
    setFilter(filter: Filter): void;
    setFormatter(formatter: Formatter): void;
    setLevel(level: Level): void;
}

//org.bukkit.event.HandlerList
declare interface HandlerList {
    bake(): void;
    bakeAll(): void;
    getHandlerLists(): ArrayList;
    getRegisteredListeners(): RegisteredListener[];
    getRegisteredListeners(plugin: Plugin): ArrayList;
    register(registeredListener: RegisteredListener): void;
    registerAll(collection: Collection): void;
    unregister(plugin: Plugin): void;
    unregister(listener: Listener): void;
    unregister(registeredListener: RegisteredListener): void;
    unregisterAll(): void;
    unregisterAll(plugin: Plugin): void;
    unregisterAll(listener: Listener): void;
}

//javax.net.ssl.SSLEngineResult$HandshakeStatus
declare enum HandshakeStatus {
    NOT_HANDSHAKING,
    FINISHED,
    NEED_TASK,
    NEED_WRAP,
    NEED_UNWRAP,
    NEED_UNWRAP_AGAIN,
}

//org.bukkit.block.data.Hangable
declare interface Hangable extends BlockData {
    isHanging(): boolean;
    setHanging(b: boolean): void;
}

//org.bukkit.entity.Hanging
declare interface Hanging extends Entity, Attachable {
    setFacingDirection(blockFace: BlockFace, b: boolean): boolean;
}

//org.bukkit.event.hanging.HangingBreakByEntityEvent
declare interface HangingBreakByEntityEvent extends HangingBreakEvent {
    getRemover(): Entity;
}

//org.bukkit.event.hanging.HangingBreakEvent
declare interface HangingBreakEvent extends HangingEvent, Cancellable {
    getCause(): RemoveCause;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.hanging.HangingEvent
declare interface HangingEvent extends Event {
    getEntity(): Hanging;
}

//org.bukkit.event.hanging.HangingPlaceEvent
declare interface HangingPlaceEvent extends HangingEvent, Cancellable {
    getBlock(): Block;
    getBlockFace(): BlockFace;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItemStack(): ItemStack;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//java.util.HashMap
declare interface HashMap extends AbstractMap, Map, Cloneable, Serializable {
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    forEach(biConsumer: BiConsumer): void;
    getOrDefault(object: any, object: any): any;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putIfAbsent(object: any, object: any): any;
    remove(object: any, object: any): boolean;
    replace(object: any, object: any): any;
    replace(object: any, object: any, object: any): boolean;
    replaceAll(biFunction: BiFunction): void;
}

//java.util.Hashtable
declare interface Hashtable extends Dictionary, Map, Cloneable, Serializable {
    clear(): void;
    clone(): any;
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    contains(object: any): boolean;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    entrySet(): Set;
    equals(object: any): boolean;
    forEach(biConsumer: BiConsumer): void;
    getOrDefault(object: any, object: any): any;
    hashCode(): number;
    keySet(): Set;
    merge(object: any, object: any, biFunction: BiFunction): any;
    putAll(map: Map): void;
    putIfAbsent(object: any, object: any): any;
    remove(object: any, object: any): boolean;
    replace(object: any, object: any): any;
    replace(object: any, object: any, object: any): boolean;
    replaceAll(biFunction: BiFunction): void;
    toString(): string;
    values(): Collection;
}

//org.bukkit.entity.Wither$Head
declare enum Head {
    CENTER,
    LEFT,
    RIGHT,
}

//org.bukkit.block.data.type.Wall$Height
declare enum Height {
    NONE,
    LOW,
    TALL,
}

//org.bukkit.HeightMap
declare enum HeightMap {
    MOTION_BLOCKING,
    MOTION_BLOCKING_NO_LEAVES,
    OCEAN_FLOOR,
    OCEAN_FLOOR_WG,
    WORLD_SURFACE,
    WORLD_SURFACE_WG,
}

//org.bukkit.command.defaults.HelpCommand
declare interface HelpCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

//org.bukkit.help.HelpMap
declare interface HelpMap {
    addTopic(helpTopic: HelpTopic): void;
    clear(): void;
    getHelpTopic(s: string): HelpTopic;
    getHelpTopics(): Collection;
    getIgnoredPlugins(): List;
    registerHelpTopicFactory(clazz: Class, helpTopicFactory: HelpTopicFactory): void;
}

//org.bukkit.help.HelpTopic
declare interface HelpTopic {
    amendCanSee(s: string): void;
    amendTopic(s: string, s: string): void;
    canSee(commandSender: CommandSender): boolean;
    getFullText(commandSender: CommandSender): string;
    getName(): string;
    getShortText(): string;
}

//org.bukkit.help.HelpTopicComparator
declare interface HelpTopicComparator extends Comparator {
    compare(object: any, object: any): number;
    compare(helpTopic: HelpTopic, helpTopic: HelpTopic): number;
    helpTopicComparatorInstance(): HelpTopicComparator;
    topicNameComparatorInstance(): TopicNameComparator;
}

//org.bukkit.help.HelpTopicFactory
declare interface HelpTopicFactory {
    createTopic(command: Command): HelpTopic;
}

//java.awt.event.HierarchyBoundsListener
declare interface HierarchyBoundsListener extends EventListener {
    ancestorMoved(hierarchyEvent: HierarchyEvent): void;
    ancestorResized(hierarchyEvent: HierarchyEvent): void;
}

//java.awt.event.HierarchyEvent
declare interface HierarchyEvent extends AWTEvent {
    getChangeFlags(): number;
    getChanged(): Component;
    getChangedParent(): Container;
    getComponent(): Component;
    ANCESTOR_MOVED: number;
    ANCESTOR_RESIZED: number;
    DISPLAYABILITY_CHANGED: number;
    HIERARCHY_CHANGED: number;
    HIERARCHY_FIRST: number;
    HIERARCHY_LAST: number;
    PARENT_CHANGED: number;
    SHOWING_CHANGED: number;
}

//java.awt.event.HierarchyListener
declare interface HierarchyListener extends EventListener {
    hierarchyChanged(hierarchyEvent: HierarchyEvent): void;
}

//org.bukkit.block.data.type.Door$Hinge
declare enum Hinge {
    LEFT,
    RIGHT,
}

//org.bukkit.entity.Hoglin
declare interface Hoglin extends Animals {
    getConversionTime(): number;
    isAbleToBeHunted(): boolean;
    isConverting(): boolean;
    isImmuneToZombification(): boolean;
    setConversionTime(i: number): void;
    setImmuneToZombification(b: boolean): void;
    setIsAbleToBeHunted(b: boolean): void;
}

//org.bukkit.entity.FishHook$HookState
declare enum HookState {
    UNHOOKED,
    HOOKED_ENTITY,
    BOBBING,
}

//org.bukkit.block.Hopper
declare interface Hopper extends Container, Lootable {
}

//org.bukkit.block.data.type.Hopper
declare interface Hopper extends Directional {
    isEnabled(): boolean;
    setEnabled(b: boolean): void;
}

//org.bukkit.material.Hopper
declare interface Hopper extends MaterialData, Directional, Redstone {
    getFacing(): BlockFace;
    isActive(): boolean;
    isPowered(): boolean;
    setActive(b: boolean): void;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.entity.minecart.HopperMinecart
declare interface HopperMinecart extends Minecart, InventoryHolder, Lootable {
    isEnabled(): boolean;
    setEnabled(b: boolean): void;
}

//org.bukkit.entity.Horse
declare interface Horse extends AbstractHorse {
    getColor(): Color;
    getInventory(): HorseInventory;
    getInventory(): Inventory;
    getInventory(): AbstractHorseInventory;
    getStyle(): Style;
    isCarryingChest(): boolean;
    setCarryingChest(b: boolean): void;
    setColor(color: Color): void;
    setStyle(style: Style): void;
}

//org.bukkit.inventory.HorseInventory
declare interface HorseInventory extends AbstractHorseInventory {
    getArmor(): ItemStack;
    setArmor(itemStack: ItemStack): void;
}

//org.bukkit.event.entity.HorseJumpEvent
declare interface HorseJumpEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPower(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setPower(f: number): void;
}

//net.md_5.bungee.api.chat.HoverEvent
declare interface HoverEvent {
    addContent(content: Content): void;
    getAction(): Action;
    getClass(action: Action, b: boolean): Class;
    getContents(): List;
    getValue(): BaseComponent[];
    isLegacy(): boolean;
    setLegacy(b: boolean): void;
}

//java.net.http.HttpClient
declare interface HttpClient {
    authenticator(): Optional;
    connectTimeout(): Optional;
    cookieHandler(): Optional;
    executor(): Optional;
    followRedirects(): Redirect;
    newBuilder(): Builder;
    newHttpClient(): HttpClient;
    newWebSocketBuilder(): Builder;
    proxy(): Optional;
    send(httpRequest: HttpRequest, bodyHandler: BodyHandler): HttpResponse;
    sendAsync(httpRequest: HttpRequest, bodyHandler: BodyHandler): CompletableFuture;
    sendAsync(httpRequest: HttpRequest, bodyHandler: BodyHandler, pushPromiseHandler: PushPromiseHandler): CompletableFuture;
    sslContext(): SSLContext;
    sslParameters(): SSLParameters;
    version(): Version;
}

//java.net.http.HttpHeaders
declare interface HttpHeaders {
    allValues(s: string): List;
    firstValue(s: string): Optional;
    firstValueAsLong(s: string): OptionalLong;
    map(): Map;
    of(map: Map, biPredicate: BiPredicate): HttpHeaders;
}

//java.net.http.HttpRequest
declare interface HttpRequest {
    bodyPublisher(): Optional;
    expectContinue(): boolean;
    headers(): HttpHeaders;
    method(): string;
    newBuilder(): Builder;
    newBuilder(uRI: URI): Builder;
    newBuilder(httpRequest: HttpRequest, biPredicate: BiPredicate): Builder;
    timeout(): Optional;
    uri(): URI;
    version(): Optional;
}

//java.net.http.HttpResponse
declare interface HttpResponse {
    body(): any;
    headers(): HttpHeaders;
    previousResponse(): Optional;
    request(): HttpRequest;
    sslSession(): Optional;
    statusCode(): number;
    uri(): URI;
    version(): Version;
}

//org.bukkit.entity.HumanEntity
declare interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
    closeInventory(): void;
    discoverRecipe(namespacedKey: NamespacedKey): boolean;
    discoverRecipes(collection: Collection): number;
    dropItem(b: boolean): boolean;
    getAttackCooldown(): number;
    getBedLocation(): Location;
    getCooldown(material: Material): number;
    getDiscoveredRecipes(): Set;
    getEnderChest(): Inventory;
    getExhaustion(): number;
    getExpToLevel(): number;
    getFoodLevel(): number;
    getGameMode(): GameMode;
    getInventory(): Inventory;
    getInventory(): PlayerInventory;
    getItemInHand(): ItemStack;
    getItemInUse(): ItemStack;
    getItemOnCursor(): ItemStack;
    getLastDeathLocation(): Location;
    getMainHand(): MainHand;
    getName(): string;
    getOpenInventory(): InventoryView;
    getSaturatedRegenRate(): number;
    getSaturation(): number;
    getShoulderEntityLeft(): Entity;
    getShoulderEntityRight(): Entity;
    getSleepTicks(): number;
    getStarvationRate(): number;
    getUnsaturatedRegenRate(): number;
    hasCooldown(material: Material): boolean;
    hasDiscoveredRecipe(namespacedKey: NamespacedKey): boolean;
    isBlocking(): boolean;
    isHandRaised(): boolean;
    openEnchanting(location: Location, b: boolean): InventoryView;
    openInventory(inventoryView: InventoryView): void;
    openInventory(inventory: Inventory): InventoryView;
    openMerchant(merchant: Merchant, b: boolean): InventoryView;
    openMerchant(villager: Villager, b: boolean): InventoryView;
    openWorkbench(location: Location, b: boolean): InventoryView;
    setCooldown(material: Material, i: number): void;
    setExhaustion(f: number): void;
    setFoodLevel(i: number): void;
    setGameMode(gameMode: GameMode): void;
    setItemInHand(itemStack: ItemStack): void;
    setItemOnCursor(itemStack: ItemStack): void;
    setLastDeathLocation(location: Location): void;
    setSaturatedRegenRate(i: number): void;
    setSaturation(f: number): void;
    setShoulderEntityLeft(entity: Entity): void;
    setShoulderEntityRight(entity: Entity): void;
    setStarvationRate(i: number): void;
    setUnsaturatedRegenRate(i: number): void;
    setWindowProperty(property: Property, i: number): boolean;
    sleep(location: Location, b: boolean): boolean;
    undiscoverRecipe(namespacedKey: NamespacedKey): boolean;
    undiscoverRecipes(collection: Collection): number;
    wakeup(b: boolean): void;
}

//org.bukkit.entity.Husk
declare interface Husk extends Zombie {
    getConversionTime(): number;
    isConverting(): boolean;
    setConversionTime(i: number): void;
}

//java.io.IOException
declare interface IOException extends Exception {
}

//org.bukkit.event.block.BlockIgniteEvent$IgniteCause
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

//org.bukkit.entity.Illager
declare interface Illager extends Raider {
}

//org.bukkit.plugin.IllegalPluginAccessException
declare interface IllegalPluginAccessException extends RuntimeException {
}

//org.bukkit.entity.Illusioner
declare interface Illusioner extends Spellcaster {
}

//java.awt.Image
declare interface Image {
    flush(): void;
    getAccelerationPriority(): number;
    getCapabilities(graphicsConfiguration: GraphicsConfiguration): ImageCapabilities;
    getGraphics(): Graphics;
    getHeight(imageObserver: ImageObserver): number;
    getProperty(s: string, imageObserver: ImageObserver): any;
    getScaledInstance(i: number, i: number, i: number): Image;
    getSource(): ImageProducer;
    getWidth(imageObserver: ImageObserver): number;
    setAccelerationPriority(f: number): void;
    SCALE_AREA_AVERAGING: number;
    SCALE_DEFAULT: number;
    SCALE_FAST: number;
    SCALE_REPLICATE: number;
    SCALE_SMOOTH: number;
    UndefinedProperty: any;
}

//java.awt.ImageCapabilities
declare interface ImageCapabilities extends Cloneable {
    isAccelerated(): boolean;
    isTrueVolatile(): boolean;
}

//java.awt.image.ImageConsumer
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

//java.awt.image.ImageObserver
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

//java.awt.image.ImageProducer
declare interface ImageProducer {
    addConsumer(imageConsumer: ImageConsumer): void;
    isConsumer(imageConsumer: ImageConsumer): boolean;
    removeConsumer(imageConsumer: ImageConsumer): void;
    requestTopDownLeftRightResend(imageConsumer: ImageConsumer): void;
    startProduction(imageConsumer: ImageConsumer): void;
}

//org.bukkit.conversations.InactivityConversationCanceller
declare interface InactivityConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

//org.bukkit.help.IndexHelpTopic
declare interface IndexHelpTopic extends HelpTopic {
}

//java.net.InetAddress
declare interface InetAddress extends Serializable {
    getAddress(): number[];
    getAllByName(s: string): InetAddress[];
    getByAddress(b: number): InetAddress;
    getByAddress(s: string, b: number): InetAddress;
    getByName(s: string): InetAddress;
    getCanonicalHostName(): string;
    getHostAddress(): string;
    getHostName(): string;
    getLocalHost(): InetAddress;
    getLoopbackAddress(): InetAddress;
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
}

//java.net.InetSocketAddress
declare interface InetSocketAddress extends SocketAddress {
    createUnresolved(s: string, i: number): InetSocketAddress;
    equals(object: any): boolean;
    getAddress(): InetAddress;
    getHostName(): string;
    getHostString(): string;
    getPort(): number;
    hashCode(): number;
    isUnresolved(): boolean;
    toString(): string;
}

//java.awt.im.InputContext
declare interface InputContext {
    dispatchEvent(aWTEvent: AWTEvent): void;
    dispose(): void;
    endComposition(): void;
    getInputMethodControlObject(): any;
    getInstance(): InputContext;
    getLocale(): Locale;
    isCompositionEnabled(): boolean;
    reconvert(): void;
    removeNotify(component: Component): void;
    selectInputMethod(locale: Locale): boolean;
    setCharacterSubsets(subset: Subset): void;
    setCompositionEnabled(b: boolean): void;
}

//java.awt.event.InputEvent
declare interface InputEvent extends ComponentEvent {
    consume(): void;
    getMaskForButton(i: number): number;
    getModifiers(): number;
    getModifiersEx(): number;
    getModifiersExText(i: number): string;
    getWhen(): number;
    isAltDown(): boolean;
    isAltGraphDown(): boolean;
    isConsumed(): boolean;
    isControlDown(): boolean;
    isMetaDown(): boolean;
    isShiftDown(): boolean;
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

//java.awt.event.InputMethodEvent
declare interface InputMethodEvent extends AWTEvent {
    getCaret(): TextHitInfo;
    getCommittedCharacterCount(): number;
    getText(): AttributedCharacterIterator;
    getVisiblePosition(): TextHitInfo;
    getWhen(): number;
    CARET_POSITION_CHANGED: number;
    INPUT_METHOD_FIRST: number;
    INPUT_METHOD_LAST: number;
    INPUT_METHOD_TEXT_CHANGED: number;
}

//java.awt.im.InputMethodHighlight
declare interface InputMethodHighlight {
    getState(): number;
    getStyle(): Map;
    getVariation(): number;
    isSelected(): boolean;
    CONVERTED_TEXT: number;
    RAW_TEXT: number;
    SELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
    SELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
    UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
    UNSELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
}

//java.awt.event.InputMethodListener
declare interface InputMethodListener extends EventListener {
    caretPositionChanged(inputMethodEvent: InputMethodEvent): void;
    inputMethodTextChanged(inputMethodEvent: InputMethodEvent): void;
}

//java.awt.im.InputMethodRequests
declare interface InputMethodRequests {
    cancelLatestCommittedText(attribute: Attribute): AttributedCharacterIterator;
    getCommittedText(i: number, i: number, attribute: Attribute): AttributedCharacterIterator;
    getCommittedTextLength(): number;
    getInsertPositionOffset(): number;
    getLocationOffset(i: number, i: number): TextHitInfo;
    getSelectedText(attribute: Attribute): AttributedCharacterIterator;
    getTextLocation(textHitInfo: TextHitInfo): Rectangle;
}

//java.io.InputStream
declare interface InputStream extends Closeable {
    available(): number;
    close(): void;
    mark(i: number): void;
    markSupported(): boolean;
    nullInputStream(): InputStream;
    read(): number;
    read(b: number): number;
    read(b: number, i: number, i: number): number;
    readAllBytes(): number[];
    readNBytes(i: number): number[];
    readNBytes(b: number, i: number, i: number): number;
    reset(): void;
    skip(l: number): number;
    skipNBytes(l: number): void;
    transferTo(outputStream: OutputStream): number;
}

//java.awt.Insets
declare interface Insets extends Cloneable, Serializable {
    set(i: number, i: number, i: number, i: number): void;
    bottom: number;
    left: number;
    right: number;
    top: number;
}

//java.time.Instant
declare interface Instant extends Temporal, TemporalAdjuster, Comparable, Serializable {
    adjustInto(temporal: Temporal): Temporal;
    atOffset(zoneOffset: ZoneOffset): OffsetDateTime;
    atZone(zoneId: ZoneId): ZonedDateTime;
    compareTo(instant: Instant): number;
    compareTo(object: any): number;
    from(temporalAccessor: TemporalAccessor): Instant;
    get(temporalField: TemporalField): number;
    getEpochSecond(): number;
    getLong(temporalField: TemporalField): number;
    getNano(): number;
    isAfter(instant: Instant): boolean;
    isBefore(instant: Instant): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    minus(temporalAmount: TemporalAmount): Instant;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Instant;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minusMillis(l: number): Instant;
    minusNanos(l: number): Instant;
    minusSeconds(l: number): Instant;
    now(): Instant;
    now(clock: Clock): Instant;
    ofEpochMilli(l: number): Instant;
    ofEpochSecond(l: number): Instant;
    ofEpochSecond(l: number, l: number): Instant;
    parse(s: string): Instant;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): Instant;
    plus(l: number, temporalUnit: TemporalUnit): Instant;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plusMillis(l: number): Instant;
    plusNanos(l: number): Instant;
    plusSeconds(l: number): Instant;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    toEpochMilli(): number;
    truncatedTo(temporalUnit: TemporalUnit): Instant;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Instant;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Instant;
    with(temporalField: TemporalField, l: number): Temporal;
    EPOCH: Instant;
    MAX: Instant;
    MIN: Instant;
}

//java.time.InstantSource
declare interface InstantSource {
    fixed(instant: Instant): InstantSource;
    instant(): Instant;
    millis(): number;
    offset(instantSource: InstantSource, duration: Duration): InstantSource;
    system(): InstantSource;
    tick(instantSource: InstantSource, duration: Duration): InstantSource;
    withZone(zoneId: ZoneId): Clock;
}

//org.bukkit.Instrument
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

//java.util.function.IntBinaryOperator
declare interface IntBinaryOperator {
    applyAsInt(i: number, i: number): number;
}

//java.nio.IntBuffer
declare interface IntBuffer extends Buffer, Comparable {
    allocate(i: number): IntBuffer;
    asReadOnlyBuffer(): IntBuffer;
    compact(): IntBuffer;
    compareTo(object: any): number;
    compareTo(intBuffer: IntBuffer): number;
    equals(object: any): boolean;
    get(): number;
    get(i: number): number;
    get(i: number): IntBuffer;
    get(i: number, i: number): IntBuffer;
    get(i: number, i: number, i: number): IntBuffer;
    get(i: number, i: number, i: number, i: number): IntBuffer;
    hashCode(): number;
    mismatch(intBuffer: IntBuffer): number;
    order(): ByteOrder;
    put(i: number): IntBuffer;
    put(intBuffer: IntBuffer): IntBuffer;
    put(i: number): IntBuffer;
    put(i: number, i: number): IntBuffer;
    put(i: number, i: number): IntBuffer;
    put(i: number, i: number, i: number): IntBuffer;
    put(i: number, i: number, i: number, i: number): IntBuffer;
    put(i: number, intBuffer: IntBuffer, i: number, i: number): IntBuffer;
    toString(): string;
    wrap(i: number): IntBuffer;
    wrap(i: number, i: number, i: number): IntBuffer;
}

//java.util.function.IntConsumer
declare interface IntConsumer {
    accept(i: number): void;
    andThen(intConsumer: IntConsumer): IntConsumer;
}

//java.util.function.IntFunction
declare interface IntFunction {
    apply(i: number): any;
}

//java.util.stream.IntStream$IntMapMultiConsumer
declare interface IntMapMultiConsumer {
    accept(i: number, intConsumer: IntConsumer): void;
}

//java.util.function.IntPredicate
declare interface IntPredicate {
    and(intPredicate: IntPredicate): IntPredicate;
    negate(): IntPredicate;
    or(intPredicate: IntPredicate): IntPredicate;
    test(i: number): boolean;
}

//java.util.stream.IntStream
declare interface IntStream extends BaseStream {
    allMatch(intPredicate: IntPredicate): boolean;
    anyMatch(intPredicate: IntPredicate): boolean;
    asDoubleStream(): DoubleStream;
    asLongStream(): LongStream;
    average(): OptionalDouble;
    boxed(): Stream;
    builder(): Builder;
    collect(supplier: Supplier, objIntConsumer: ObjIntConsumer, biConsumer: BiConsumer): any;
    concat(intStream: IntStream, intStream: IntStream): IntStream;
    count(): number;
    distinct(): IntStream;
    dropWhile(intPredicate: IntPredicate): IntStream;
    empty(): IntStream;
    filter(intPredicate: IntPredicate): IntStream;
    findAny(): OptionalInt;
    findFirst(): OptionalInt;
    flatMap(intFunction: IntFunction): IntStream;
    forEach(intConsumer: IntConsumer): void;
    forEachOrdered(intConsumer: IntConsumer): void;
    generate(intSupplier: IntSupplier): IntStream;
    iterate(i: number, intUnaryOperator: IntUnaryOperator): IntStream;
    iterate(i: number, intPredicate: IntPredicate, intUnaryOperator: IntUnaryOperator): IntStream;
    iterator(): Iterator;
    iterator(): OfInt;
    limit(l: number): IntStream;
    map(intUnaryOperator: IntUnaryOperator): IntStream;
    mapMulti(intMapMultiConsumer: IntMapMultiConsumer): IntStream;
    mapToDouble(intToDoubleFunction: IntToDoubleFunction): DoubleStream;
    mapToLong(intToLongFunction: IntToLongFunction): LongStream;
    mapToObj(intFunction: IntFunction): Stream;
    max(): OptionalInt;
    min(): OptionalInt;
    noneMatch(intPredicate: IntPredicate): boolean;
    of(i: number): IntStream;
    of(i: number): IntStream;
    parallel(): IntStream;
    parallel(): BaseStream;
    peek(intConsumer: IntConsumer): IntStream;
    range(i: number, i: number): IntStream;
    rangeClosed(i: number, i: number): IntStream;
    reduce(intBinaryOperator: IntBinaryOperator): OptionalInt;
    reduce(i: number, intBinaryOperator: IntBinaryOperator): number;
    sequential(): BaseStream;
    sequential(): IntStream;
    skip(l: number): IntStream;
    sorted(): IntStream;
    spliterator(): OfInt;
    spliterator(): Spliterator;
    sum(): number;
    summaryStatistics(): IntSummaryStatistics;
    takeWhile(intPredicate: IntPredicate): IntStream;
    toArray(): number[];
}

//java.util.IntSummaryStatistics
declare interface IntSummaryStatistics extends IntConsumer {
    accept(i: number): void;
    combine(intSummaryStatistics: IntSummaryStatistics): void;
    getAverage(): number;
    getCount(): number;
    getMax(): number;
    getMin(): number;
    getSum(): number;
}

//java.util.function.IntSupplier
declare interface IntSupplier {
    getAsInt(): number;
}

//java.util.function.IntToDoubleFunction
declare interface IntToDoubleFunction {
    applyAsDouble(i: number): number;
}

//java.util.function.IntToLongFunction
declare interface IntToLongFunction {
    applyAsLong(i: number): number;
}

//java.util.function.IntUnaryOperator
declare interface IntUnaryOperator {
    andThen(intUnaryOperator: IntUnaryOperator): IntUnaryOperator;
    applyAsInt(i: number): number;
    compose(intUnaryOperator: IntUnaryOperator): IntUnaryOperator;
    identity(): IntUnaryOperator;
}

//java.lang.Integer
declare interface Integer extends Number, Comparable, Constable, ConstantDesc {
    bitCount(i: number): number;
    compare(i: number, i: number): number;
    compareTo(integer: Integer): number;
    compareTo(object: any): number;
    compareUnsigned(i: number, i: number): number;
    decode(s: string): Integer;
    describeConstable(): Optional;
    divideUnsigned(i: number, i: number): number;
    equals(object: any): boolean;
    getInteger(s: string): Integer;
    getInteger(s: string, integer: Integer): Integer;
    getInteger(s: string, i: number): Integer;
    hashCode(): number;
    hashCode(i: number): number;
    highestOneBit(i: number): number;
    lowestOneBit(i: number): number;
    max(i: number, i: number): number;
    min(i: number, i: number): number;
    numberOfLeadingZeros(i: number): number;
    numberOfTrailingZeros(i: number): number;
    parseInt(s: string): number;
    parseInt(s: string, i: number): number;
    parseInt(s: string, i: number, i: number, i: number): number;
    parseUnsignedInt(s: string): number;
    parseUnsignedInt(s: string, i: number): number;
    parseUnsignedInt(s: string, i: number, i: number, i: number): number;
    remainderUnsigned(i: number, i: number): number;
    resolveConstantDesc(lookup: Lookup): any;
    resolveConstantDesc(lookup: Lookup): Integer;
    reverse(i: number): number;
    reverseBytes(i: number): number;
    rotateLeft(i: number, i: number): number;
    rotateRight(i: number, i: number): number;
    signum(i: number): number;
    sum(i: number, i: number): number;
    toBinaryString(i: number): string;
    toHexString(i: number): string;
    toOctalString(i: number): string;
    toString(): string;
    toString(i: number): string;
    toString(i: number, i: number): string;
    toUnsignedLong(i: number): number;
    toUnsignedString(i: number): string;
    toUnsignedString(i: number, i: number): string;
    valueOf(s: string): Integer;
    valueOf(i: number): Integer;
    valueOf(s: string, i: number): Integer;
    BYTES: number;
    MAX_VALUE: number;
    MIN_VALUE: number;
    SIZE: number;
    TYPE: Class;
}

//java.nio.channels.InterruptibleChannel
declare interface InterruptibleChannel extends Channel {
    close(): void;
}

//org.bukkit.configuration.InvalidConfigurationException
declare interface InvalidConfigurationException extends Exception {
}

//org.bukkit.plugin.InvalidDescriptionException
declare interface InvalidDescriptionException extends Exception {
}

//org.bukkit.plugin.InvalidPluginException
declare interface InvalidPluginException extends Exception {
}

//org.bukkit.inventory.Inventory
declare interface Inventory extends Iterable {
    addItem(itemStack: ItemStack): HashMap;
    all(material: Material): HashMap;
    all(itemStack: ItemStack): HashMap;
    clear(): void;
    clear(i: number): void;
    contains(itemStack: ItemStack): boolean;
    contains(material: Material): boolean;
    contains(itemStack: ItemStack, i: number): boolean;
    contains(material: Material, i: number): boolean;
    containsAtLeast(itemStack: ItemStack, i: number): boolean;
    first(itemStack: ItemStack): number;
    first(material: Material): number;
    firstEmpty(): number;
    getContents(): ItemStack[];
    getHolder(): InventoryHolder;
    getItem(i: number): ItemStack;
    getLocation(): Location;
    getMaxStackSize(): number;
    getSize(): number;
    getStorageContents(): ItemStack[];
    getType(): InventoryType;
    getViewers(): List;
    isEmpty(): boolean;
    iterator(): Iterator;
    iterator(): ListIterator;
    iterator(i: number): ListIterator;
    remove(itemStack: ItemStack): void;
    remove(material: Material): void;
    removeItem(itemStack: ItemStack): HashMap;
    setContents(itemStack: ItemStack): void;
    setItem(i: number, itemStack: ItemStack): void;
    setMaxStackSize(i: number): void;
    setStorageContents(itemStack: ItemStack): void;
}

//org.bukkit.event.inventory.InventoryAction
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

//org.bukkit.event.inventory.InventoryClickEvent
declare interface InventoryClickEvent extends InventoryInteractEvent {
    getAction(): InventoryAction;
    getClick(): ClickType;
    getClickedInventory(): Inventory;
    getCurrentItem(): ItemStack;
    getCursor(): ItemStack;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getHotbarButton(): number;
    getRawSlot(): number;
    getSlot(): number;
    getSlotType(): SlotType;
    isLeftClick(): boolean;
    isRightClick(): boolean;
    isShiftClick(): boolean;
    setCurrentItem(itemStack: ItemStack): void;
    setCursor(itemStack: ItemStack): void;
}

//org.bukkit.event.inventory.InventoryCloseEvent
declare interface InventoryCloseEvent extends InventoryEvent {
    getPlayer(): HumanEntity;
}

//org.bukkit.event.inventory.InventoryCreativeEvent
declare interface InventoryCreativeEvent extends InventoryClickEvent {
}

//org.bukkit.event.inventory.InventoryDragEvent
declare interface InventoryDragEvent extends InventoryInteractEvent {
    getCursor(): ItemStack;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getInventorySlots(): Set;
    getNewItems(): Map;
    getOldCursor(): ItemStack;
    getRawSlots(): Set;
    getType(): DragType;
    setCursor(itemStack: ItemStack): void;
}

//org.bukkit.event.inventory.InventoryEvent
declare interface InventoryEvent extends Event {
    getHandlerList(): HandlerList;
    getInventory(): Inventory;
    getView(): InventoryView;
    getViewers(): List;
}

//org.bukkit.inventory.InventoryHolder
declare interface InventoryHolder {
    getInventory(): Inventory;
}

//org.bukkit.event.inventory.InventoryInteractEvent
declare interface InventoryInteractEvent extends InventoryEvent, Cancellable {
    getResult(): Result;
    getWhoClicked(): HumanEntity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setResult(result: Result): void;
}

//org.bukkit.event.inventory.InventoryMoveItemEvent
declare interface InventoryMoveItemEvent extends Event, Cancellable {
    getDestination(): Inventory;
    getHandlerList(): HandlerList;
    getInitiator(): Inventory;
    getItem(): ItemStack;
    getSource(): Inventory;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setItem(itemStack: ItemStack): void;
}

//org.bukkit.event.inventory.InventoryOpenEvent
declare interface InventoryOpenEvent extends InventoryEvent, Cancellable {
    getPlayer(): HumanEntity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.inventory.InventoryPickupItemEvent
declare interface InventoryPickupItemEvent extends Event, Cancellable {
    getHandlerList(): HandlerList;
    getInventory(): Inventory;
    getItem(): Item;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.inventory.InventoryType
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

//org.bukkit.inventory.InventoryView
declare interface InventoryView {
    close(): void;
    convertSlot(i: number): number;
    countSlots(): number;
    getBottomInventory(): Inventory;
    getCursor(): ItemStack;
    getInventory(i: number): Inventory;
    getItem(i: number): ItemStack;
    getPlayer(): HumanEntity;
    getSlotType(i: number): SlotType;
    getTitle(): string;
    getTopInventory(): Inventory;
    getType(): InventoryType;
    setCursor(itemStack: ItemStack): void;
    setItem(i: number, itemStack: ItemStack): void;
    setProperty(property: Property, i: number): boolean;
    OUTSIDE: number;
}

//org.bukkit.entity.IronGolem
declare interface IronGolem extends Golem {
    isPlayerCreated(): boolean;
    setPlayerCreated(b: boolean): void;
}

//java.time.chrono.IsoChronology
declare interface IsoChronology extends AbstractChronology, Serializable {
    date(temporalAccessor: TemporalAccessor): LocalDate;
    date(temporalAccessor: TemporalAccessor): ChronoLocalDate;
    date(i: number, i: number, i: number): ChronoLocalDate;
    date(i: number, i: number, i: number): LocalDate;
    date(era: Era, i: number, i: number, i: number): LocalDate;
    date(era: Era, i: number, i: number, i: number): ChronoLocalDate;
    dateEpochDay(l: number): ChronoLocalDate;
    dateEpochDay(l: number): LocalDate;
    dateNow(): ChronoLocalDate;
    dateNow(): LocalDate;
    dateNow(zoneId: ZoneId): LocalDate;
    dateNow(zoneId: ZoneId): ChronoLocalDate;
    dateNow(clock: Clock): ChronoLocalDate;
    dateNow(clock: Clock): LocalDate;
    dateYearDay(i: number, i: number): ChronoLocalDate;
    dateYearDay(i: number, i: number): LocalDate;
    dateYearDay(era: Era, i: number, i: number): LocalDate;
    dateYearDay(era: Era, i: number, i: number): ChronoLocalDate;
    epochSecond(i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): number;
    eraOf(i: number): IsoEra;
    eraOf(i: number): Era;
    eras(): List;
    getCalendarType(): string;
    getId(): string;
    isLeapYear(l: number): boolean;
    localDateTime(temporalAccessor: TemporalAccessor): LocalDateTime;
    localDateTime(temporalAccessor: TemporalAccessor): ChronoLocalDateTime;
    period(i: number, i: number, i: number): ChronoPeriod;
    period(i: number, i: number, i: number): Period;
    prolepticYear(era: Era, i: number): number;
    range(chronoField: ChronoField): ValueRange;
    zonedDateTime(temporalAccessor: TemporalAccessor): ChronoZonedDateTime;
    zonedDateTime(temporalAccessor: TemporalAccessor): ZonedDateTime;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ChronoZonedDateTime;
    zonedDateTime(instant: Instant, zoneId: ZoneId): ZonedDateTime;
    INSTANCE: IsoChronology;
}

//java.util.Locale$IsoCountryCode
declare enum IsoCountryCode {
    PART1_ALPHA2,
    PART1_ALPHA3,
    PART3,
}

//java.time.chrono.IsoEra
declare enum IsoEra {
    BCE,
    CE,
}

//org.bukkit.entity.Item
declare interface Item extends Entity {
    getItemStack(): ItemStack;
    getOwner(): UUID;
    getPickupDelay(): number;
    getThrower(): UUID;
    isUnlimitedLifetime(): boolean;
    setItemStack(itemStack: ItemStack): void;
    setOwner(uUID: UUID): void;
    setPickupDelay(i: number): void;
    setThrower(uUID: UUID): void;
    setUnlimitedLifetime(b: boolean): void;
}

//org.bukkit.event.entity.ItemDespawnEvent
declare interface ItemDespawnEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLocation(): Location;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.inventory.ItemFactory
declare interface ItemFactory {
    asMetaFor(itemMeta: ItemMeta, material: Material): ItemMeta;
    asMetaFor(itemMeta: ItemMeta, itemStack: ItemStack): ItemMeta;
    createItemStack(s: string): ItemStack;
    equals(itemMeta: ItemMeta, itemMeta: ItemMeta): boolean;
    getDefaultLeatherColor(): Color;
    getItemMeta(material: Material): ItemMeta;
    isApplicable(itemMeta: ItemMeta, itemStack: ItemStack): boolean;
    isApplicable(itemMeta: ItemMeta, material: Material): boolean;
    updateMaterial(itemMeta: ItemMeta, material: Material): Material;
}

//org.bukkit.inventory.ItemFlag
declare enum ItemFlag {
    HIDE_ENCHANTS,
    HIDE_ATTRIBUTES,
    HIDE_UNBREAKABLE,
    HIDE_DESTROYS,
    HIDE_PLACED_ON,
    HIDE_POTION_EFFECTS,
    HIDE_DYE,
}

//org.bukkit.entity.ItemFrame
declare interface ItemFrame extends Hanging {
    getItem(): ItemStack;
    getItemDropChance(): number;
    getRotation(): Rotation;
    isFixed(): boolean;
    isVisible(): boolean;
    setFixed(b: boolean): void;
    setItem(itemStack: ItemStack): void;
    setItem(itemStack: ItemStack, b: boolean): void;
    setItemDropChance(f: number): void;
    setRotation(rotation: Rotation): void;
    setVisible(b: boolean): void;
}

//org.bukkit.event.entity.ItemMergeEvent
declare interface ItemMergeEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getTarget(): Item;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.inventory.meta.ItemMeta
declare interface ItemMeta extends Cloneable, ConfigurationSerializable, PersistentDataHolder {
    addAttributeModifier(attribute: Attribute, attributeModifier: AttributeModifier): boolean;
    addEnchant(enchantment: Enchantment, i: number, b: boolean): boolean;
    addItemFlags(itemFlag: ItemFlag): void;
    clone(): ItemMeta;
    clone(): any;
    getAsString(): string;
    getAttributeModifiers(): Multimap;
    getAttributeModifiers(equipmentSlot: EquipmentSlot): Multimap;
    getAttributeModifiers(attribute: Attribute): Collection;
    getCustomModelData(): number;
    getCustomTagContainer(): CustomItemTagContainer;
    getDisplayName(): string;
    getEnchantLevel(enchantment: Enchantment): number;
    getEnchants(): Map;
    getItemFlags(): Set;
    getLocalizedName(): string;
    getLore(): List;
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
    removeAttributeModifier(equipmentSlot: EquipmentSlot): boolean;
    removeAttributeModifier(attribute: Attribute, attributeModifier: AttributeModifier): boolean;
    removeEnchant(enchantment: Enchantment): boolean;
    removeItemFlags(itemFlag: ItemFlag): void;
    setAttributeModifiers(multimap: Multimap): void;
    setCustomModelData(integer: Integer): void;
    setDisplayName(s: string): void;
    setLocalizedName(s: string): void;
    setLore(list: List): void;
    setUnbreakable(b: boolean): void;
    setVersion(i: number): void;
}

//org.bukkit.event.entity.ItemSpawnEvent
declare interface ItemSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): Item;
}

//org.bukkit.inventory.ItemStack
declare interface ItemStack extends Cloneable, ConfigurationSerializable {
    addEnchantment(enchantment: Enchantment, i: number): void;
    addEnchantments(map: Map): void;
    addUnsafeEnchantment(enchantment: Enchantment, i: number): void;
    addUnsafeEnchantments(map: Map): void;
    containsEnchantment(enchantment: Enchantment): boolean;
    deserialize(map: Map): ItemStack;
    getAmount(): number;
    getData(): MaterialData;
    getDurability(): number;
    getEnchantmentLevel(enchantment: Enchantment): number;
    getEnchantments(): Map;
    getItemMeta(): ItemMeta;
    getMaxStackSize(): number;
    getType(): Material;
    hasItemMeta(): boolean;
    isSimilar(itemStack: ItemStack): boolean;
    removeEnchantment(enchantment: Enchantment): number;
    serialize(): Map;
    setAmount(i: number): void;
    setData(materialData: MaterialData): void;
    setDurability(s: number): void;
    setItemMeta(itemMeta: ItemMeta): boolean;
    setType(material: Material): void;
}

//org.bukkit.inventory.meta.tags.ItemTagAdapterContext
declare interface ItemTagAdapterContext {
    newTagContainer(): CustomItemTagContainer;
}

//org.bukkit.inventory.meta.tags.ItemTagType
declare interface ItemTagType {
    fromPrimitive(object: any, itemTagAdapterContext: ItemTagAdapterContext): any;
    getComplexType(): Class;
    getPrimitiveType(): Class;
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

//java.lang.Iterable
declare interface Iterable {
    forEach(consumer: Consumer): void;
    iterator(): Iterator;
    spliterator(): Spliterator;
}

//java.util.Iterator
declare interface Iterator {
    forEachRemaining(consumer: Consumer): void;
    hasNext(): boolean;
    next(): any;
    remove(): void;
}

//org.bukkit.plugin.java.JavaPlugin
declare interface JavaPlugin extends PluginBase {
    getCommand(s: string): PluginCommand;
    getConfig(): FileConfiguration;
    getDataFolder(): File;
    getDefaultBiomeProvider(s: string, s: string): BiomeProvider;
    getDefaultWorldGenerator(s: string, s: string): ChunkGenerator;
    getDescription(): PluginDescriptionFile;
    getLogger(): Logger;
    getPlugin(clazz: Class): JavaPlugin;
    getPluginLoader(): PluginLoader;
    getProvidingPlugin(clazz: Class): JavaPlugin;
    getResource(s: string): InputStream;
    getServer(): Server;
    isEnabled(): boolean;
    isNaggable(): boolean;
    onCommand(commandSender: CommandSender, command: Command, s: string, s: string): boolean;
    onDisable(): void;
    onEnable(): void;
    onLoad(): void;
    onTabComplete(commandSender: CommandSender, command: Command, s: string, s: string): List;
    reloadConfig(): void;
    saveConfig(): void;
    saveDefaultConfig(): void;
    saveResource(s: string, b: boolean): void;
    setNaggable(b: boolean): void;
    toString(): string;
}

//org.bukkit.plugin.java.JavaPluginLoader
declare interface JavaPluginLoader extends PluginLoader {
    createRegisteredListeners(listener: Listener, plugin: Plugin): Map;
    disablePlugin(plugin: Plugin): void;
    enablePlugin(plugin: Plugin): void;
    getPluginDescription(file: File): PluginDescriptionFile;
    getPluginFileFilters(): Pattern[];
    loadPlugin(file: File): Plugin;
    pluginParentTimer: CustomTimingsHandler;
}

//org.bukkit.block.Jigsaw
declare interface Jigsaw extends TileState {
}

//org.bukkit.block.data.type.Jigsaw
declare interface Jigsaw extends BlockData {
    getOrientation(): Orientation;
    setOrientation(orientation: Orientation): void;
}

//java.awt.JobAttributes
declare interface JobAttributes extends Cloneable {
    getCopies(): number;
    getDefaultSelection(): DefaultSelectionType;
    getDestination(): DestinationType;
    getDialog(): DialogType;
    getFileName(): string;
    getFromPage(): number;
    getMaxPage(): number;
    getMinPage(): number;
    getMultipleDocumentHandling(): MultipleDocumentHandlingType;
    getPageRanges(): number[][];
    getPrinter(): string;
    getSides(): SidesType;
    getToPage(): number;
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

//org.bukkit.block.data.type.Jukebox
declare interface Jukebox extends BlockData {
    hasRecord(): boolean;
}

//org.bukkit.block.Jukebox
declare interface Jukebox extends TileState {
    eject(): boolean;
    getPlaying(): Material;
    getRecord(): ItemStack;
    isPlaying(): boolean;
    setPlaying(material: Material): void;
    setRecord(itemStack: ItemStack): void;
    stopPlaying(): void;
}

//java.awt.RenderingHints$Key
declare interface Key {
    isCompatibleValue(object: any): boolean;
}

//java.security.Key
declare interface Key extends Serializable {
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    serialVersionUID: number;
}

//java.awt.event.KeyEvent
declare interface KeyEvent extends InputEvent {
    getExtendedKeyCode(): number;
    getExtendedKeyCodeForChar(i: number): number;
    getKeyChar(): string;
    getKeyCode(): number;
    getKeyLocation(): number;
    getKeyModifiersText(i: number): string;
    getKeyText(i: number): string;
    isActionKey(): boolean;
    paramString(): string;
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

//java.awt.event.KeyListener
declare interface KeyListener extends EventListener {
    keyPressed(keyEvent: KeyEvent): void;
    keyReleased(keyEvent: KeyEvent): void;
    keyTyped(keyEvent: KeyEvent): void;
}

//javax.net.ssl.KeyManager
declare interface KeyManager {
}

//org.bukkit.Keyed
declare interface Keyed {
    getKey(): NamespacedKey;
}

//org.bukkit.boss.KeyedBossBar
declare interface KeyedBossBar extends BossBar, Keyed {
}

//java.nio.file.WatchEvent$Kind
declare interface Kind {
    name(): string;
    type(): Class;
}

//org.bukkit.inventory.meta.KnowledgeBookMeta
declare interface KnowledgeBookMeta extends ItemMeta {
    addRecipe(namespacedKey: NamespacedKey): void;
    clone(): KnowledgeBookMeta;
    clone(): ItemMeta;
    clone(): any;
    getRecipes(): List;
    hasRecipes(): boolean;
    setRecipes(list: List): void;
}

//org.bukkit.block.data.type.Ladder
declare interface Ladder extends Directional, Waterlogged {
}

//org.bukkit.material.Ladder
declare interface Ladder extends SimpleAttachableMaterialData {
    getAttachedFace(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.block.data.type.Lantern
declare interface Lantern extends Hangable, Waterlogged {
}

//org.bukkit.entity.LargeFireball
declare interface LargeFireball extends SizedFireball {
}

//java.awt.LayoutManager
declare interface LayoutManager {
    addLayoutComponent(s: string, component: Component): void;
    layoutContainer(container: Container): void;
    minimumLayoutSize(container: Container): Dimension;
    preferredLayoutSize(container: Container): Dimension;
    removeLayoutComponent(component: Component): void;
}

//org.bukkit.metadata.LazyMetadataValue
declare interface LazyMetadataValue extends MetadataValueAdapter {
    invalidate(): void;
    value(): any;
}

//org.bukkit.entity.LeashHitch
declare interface LeashHitch extends Hanging {
}

//org.bukkit.inventory.meta.LeatherArmorMeta
declare interface LeatherArmorMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): LeatherArmorMeta;
    getColor(): Color;
    setColor(color: Color): void;
}

//org.bukkit.block.data.type.Leaves
declare interface Leaves extends Waterlogged {
    getDistance(): number;
    isPersistent(): boolean;
    setDistance(i: number): void;
    setPersistent(b: boolean): void;
}

//org.bukkit.material.Leaves
declare interface Leaves extends Wood {
    isDecayable(): boolean;
    isDecaying(): boolean;
    setDecayable(b: boolean): void;
    setDecaying(b: boolean): void;
}

//org.bukkit.block.data.type.Bamboo$Leaves
declare enum Leaves {
    NONE,
    SMALL,
    LARGE,
}

//org.bukkit.event.block.LeavesDecayEvent
declare interface LeavesDecayEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.block.data.type.Lectern
declare interface Lectern extends Directional, Powerable {
    hasBook(): boolean;
}

//org.bukkit.block.Lectern
declare interface Lectern extends TileState, BlockInventoryHolder {
    getInventory(): Inventory;
    getPage(): number;
    getSnapshotInventory(): Inventory;
    setPage(i: number): void;
}

//org.bukkit.inventory.LecternInventory
declare interface LecternInventory extends Inventory {
    getHolder(): Lectern;
    getHolder(): InventoryHolder;
}

//java.util.logging.Level
declare interface Level extends Serializable {
    getLocalizedName(): string;
    getName(): string;
    getResourceBundleName(): string;
    intValue(): number;
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

//org.bukkit.block.data.Levelled
declare interface Levelled extends BlockData {
    getLevel(): number;
    getMaximumLevel(): number;
    setLevel(i: number): void;
}

//org.bukkit.material.Lever
declare interface Lever extends SimpleAttachableMaterialData, Redstone {
    getAttachedFace(): BlockFace;
    isPowered(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setPowered(b: boolean): void;
}

//org.bukkit.block.Lidded
declare interface Lidded {
    close(): void;
    open(): void;
}

//org.bukkit.block.data.type.Light
declare interface Light extends Levelled, Waterlogged {
}

//org.bukkit.block.data.Lightable
declare interface Lightable extends BlockData {
    isLit(): boolean;
    setLit(b: boolean): void;
}

//org.bukkit.block.data.type.LightningRod
declare interface LightningRod extends Directional, Powerable, Waterlogged {
}

//org.bukkit.entity.LightningStrike
declare interface LightningStrike extends Entity {
    isEffect(): boolean;
    spigot(): Spigot;
    spigot(): Spigot;
    spigot(): Spigot;
}

//org.bukkit.event.weather.LightningStrikeEvent
declare interface LightningStrikeEvent extends WeatherEvent, Cancellable {
    getCause(): Cause;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLightning(): LightningStrike;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.generator.LimitedRegion
declare interface LimitedRegion extends RegionAccessor {
    getBuffer(): number;
    getTileEntities(): List;
    isInRegion(location: Location): boolean;
    isInRegion(i: number, i: number, i: number): boolean;
}

//java.awt.geom.Line2D
declare interface Line2D extends Shape, Cloneable {
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    getBounds(): Rectangle;
    getP1(): Point2D;
    getP2(): Point2D;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    getX1(): number;
    getX2(): number;
    getY1(): number;
    getY2(): number;
    intersects(rectangle2D: Rectangle2D): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    intersectsLine(line2D: Line2D): boolean;
    intersectsLine(d: number, d: number, d: number, d: number): boolean;
    linesIntersect(d: number, d: number, d: number, d: number, d: number, d: number, d: number, d: number): boolean;
    ptLineDist(point2D: Point2D): number;
    ptLineDist(d: number, d: number): number;
    ptLineDist(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptLineDistSq(point2D: Point2D): number;
    ptLineDistSq(d: number, d: number): number;
    ptLineDistSq(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptSegDist(point2D: Point2D): number;
    ptSegDist(d: number, d: number): number;
    ptSegDist(d: number, d: number, d: number, d: number, d: number, d: number): number;
    ptSegDistSq(point2D: Point2D): number;
    ptSegDistSq(d: number, d: number): number;
    ptSegDistSq(d: number, d: number, d: number, d: number, d: number, d: number): number;
    relativeCCW(point2D: Point2D): number;
    relativeCCW(d: number, d: number): number;
    relativeCCW(d: number, d: number, d: number, d: number, d: number, d: number): number;
    setLine(line2D: Line2D): void;
    setLine(point2D: Point2D, point2D: Point2D): void;
    setLine(d: number, d: number, d: number, d: number): void;
}

//java.awt.font.LineMetrics
declare interface LineMetrics {
    getAscent(): number;
    getBaselineIndex(): number;
    getBaselineOffsets(): number[];
    getDescent(): number;
    getHeight(): number;
    getLeading(): number;
    getNumChars(): number;
    getStrikethroughOffset(): number;
    getStrikethroughThickness(): number;
    getUnderlineOffset(): number;
    getUnderlineThickness(): number;
}

//org.bukkit.entity.LingeringPotion
declare interface LingeringPotion extends ThrownPotion {
}

//org.bukkit.event.entity.LingeringPotionSplashEvent
declare interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getAreaEffectCloud(): AreaEffectCloud;
}

//java.nio.file.LinkOption
declare enum LinkOption {
    NOFOLLOW_LINKS,
}

//java.util.List
declare interface List extends Collection {
    add(object: any): boolean;
    add(i: number, object: any): void;
    addAll(collection: Collection): boolean;
    addAll(i: number, collection: Collection): boolean;
    clear(): void;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    copyOf(collection: Collection): List;
    equals(object: any): boolean;
    get(i: number): any;
    hashCode(): number;
    indexOf(object: any): number;
    isEmpty(): boolean;
    iterator(): Iterator;
    lastIndexOf(object: any): number;
    listIterator(): ListIterator;
    listIterator(i: number): ListIterator;
    of(): List;
    of(object: any): List;
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
    remove(object: any): boolean;
    remove(i: number): any;
    removeAll(collection: Collection): boolean;
    replaceAll(func: UnaryOperator): void;
    retainAll(collection: Collection): boolean;
    set(i: number, object: any): any;
    size(): number;
    sort(comparator: Comparator): void;
    spliterator(): Spliterator;
    subList(i: number, i: number): List;
    toArray(): any[];
    toArray(object: any): any[];
}

//java.util.ListIterator
declare interface ListIterator extends Iterator {
    add(object: any): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): any;
    nextIndex(): number;
    previous(): any;
    previousIndex(): number;
    remove(): void;
    set(object: any): void;
}

//org.bukkit.event.Listener
declare interface Listener {
}

//java.net.http.WebSocket$Listener
declare interface Listener {
    onBinary(webSocket: WebSocket, byteBuffer: ByteBuffer, b: boolean): CompletionStage;
    onClose(webSocket: WebSocket, i: number, s: string): CompletionStage;
    onError(webSocket: WebSocket, throwable: Throwable): void;
    onOpen(webSocket: WebSocket): void;
    onPing(webSocket: WebSocket, byteBuffer: ByteBuffer): CompletionStage;
    onPong(webSocket: WebSocket, byteBuffer: ByteBuffer): CompletionStage;
    onText(webSocket: WebSocket, s: string, b: boolean): CompletionStage;
}

//org.bukkit.entity.LivingEntity
declare interface LivingEntity extends Attributable, Damageable, ProjectileSource {
    addPotionEffect(potionEffect: PotionEffect): boolean;
    addPotionEffect(potionEffect: PotionEffect, b: boolean): boolean;
    addPotionEffects(collection: Collection): boolean;
    attack(entity: Entity): void;
    getActivePotionEffects(): Collection;
    getArrowCooldown(): number;
    getArrowsInBody(): number;
    getCanPickupItems(): boolean;
    getCategory(): EntityCategory;
    getCollidableExemptions(): Set;
    getEquipment(): EntityEquipment;
    getEyeHeight(): number;
    getEyeHeight(b: boolean): number;
    getEyeLocation(): Location;
    getKiller(): Player;
    getLastDamage(): number;
    getLastTwoTargetBlocks(set: Set, i: number): List;
    getLeashHolder(): Entity;
    getLineOfSight(set: Set, i: number): List;
    getMaximumAir(): number;
    getMaximumNoDamageTicks(): number;
    getMemory(memoryKey: MemoryKey): any;
    getNoDamageTicks(): number;
    getPotionEffect(potionEffectType: PotionEffectType): PotionEffect;
    getRemainingAir(): number;
    getRemoveWhenFarAway(): boolean;
    getTargetBlock(set: Set, i: number): Block;
    getTargetBlockExact(i: number): Block;
    getTargetBlockExact(i: number, fluidCollisionMode: FluidCollisionMode): Block;
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
    rayTraceBlocks(d: number): RayTraceResult;
    rayTraceBlocks(d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    removePotionEffect(potionEffectType: PotionEffectType): void;
    setAI(b: boolean): void;
    setArrowCooldown(i: number): void;
    setArrowsInBody(i: number): void;
    setCanPickupItems(b: boolean): void;
    setCollidable(b: boolean): void;
    setGliding(b: boolean): void;
    setInvisible(b: boolean): void;
    setLastDamage(d: number): void;
    setLeashHolder(entity: Entity): boolean;
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

//org.bukkit.entity.Llama
declare interface Llama extends ChestedHorse {
    getColor(): Color;
    getInventory(): LlamaInventory;
    getInventory(): Inventory;
    getInventory(): AbstractHorseInventory;
    getStrength(): number;
    setColor(color: Color): void;
    setStrength(i: number): void;
}

//org.bukkit.inventory.LlamaInventory
declare interface LlamaInventory extends AbstractHorseInventory {
    getDecor(): ItemStack;
    setDecor(itemStack: ItemStack): void;
}

//org.bukkit.entity.LlamaSpit
declare interface LlamaSpit extends Projectile {
}

//org.bukkit.event.server.ServerLoadEvent$LoadType
declare enum LoadType {
    STARTUP,
    RELOAD,
}

//java.time.LocalDate
declare interface LocalDate extends Temporal, TemporalAdjuster, ChronoLocalDate, Serializable {
    adjustInto(temporal: Temporal): Temporal;
    atStartOfDay(): LocalDateTime;
    atStartOfDay(zoneId: ZoneId): ZonedDateTime;
    atTime(localTime: LocalTime): ChronoLocalDateTime;
    atTime(offsetTime: OffsetTime): OffsetDateTime;
    atTime(localTime: LocalTime): LocalDateTime;
    atTime(i: number, i: number): LocalDateTime;
    atTime(i: number, i: number, i: number): LocalDateTime;
    atTime(i: number, i: number, i: number, i: number): LocalDateTime;
    compareTo(object: any): number;
    compareTo(chronoLocalDate: ChronoLocalDate): number;
    datesUntil(localDate: LocalDate): Stream;
    datesUntil(localDate: LocalDate, period: Period): Stream;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): LocalDate;
    get(temporalField: TemporalField): number;
    getChronology(): Chronology;
    getChronology(): IsoChronology;
    getDayOfMonth(): number;
    getDayOfWeek(): DayOfWeek;
    getDayOfYear(): number;
    getEra(): IsoEra;
    getEra(): Era;
    getLong(temporalField: TemporalField): number;
    getMonth(): Month;
    getMonthValue(): number;
    getYear(): number;
    isAfter(chronoLocalDate: ChronoLocalDate): boolean;
    isBefore(chronoLocalDate: ChronoLocalDate): boolean;
    isEqual(chronoLocalDate: ChronoLocalDate): boolean;
    isLeapYear(): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    lengthOfMonth(): number;
    lengthOfYear(): number;
    minus(temporalAmount: TemporalAmount): ChronoLocalDate;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(temporalAmount: TemporalAmount): LocalDate;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): LocalDate;
    minusDays(l: number): LocalDate;
    minusMonths(l: number): LocalDate;
    minusWeeks(l: number): LocalDate;
    minusYears(l: number): LocalDate;
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
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): ChronoLocalDate;
    plus(temporalAmount: TemporalAmount): LocalDate;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDate;
    plus(l: number, temporalUnit: TemporalUnit): LocalDate;
    plusDays(l: number): LocalDate;
    plusMonths(l: number): LocalDate;
    plusWeeks(l: number): LocalDate;
    plusYears(l: number): LocalDate;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    toEpochDay(): number;
    toEpochSecond(localTime: LocalTime, zoneOffset: ZoneOffset): number;
    until(chronoLocalDate: ChronoLocalDate): ChronoPeriod;
    until(chronoLocalDate: ChronoLocalDate): Period;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDate;
    with(temporalAdjuster: TemporalAdjuster): LocalDate;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): ChronoLocalDate;
    with(temporalField: TemporalField, l: number): LocalDate;
    withDayOfMonth(i: number): LocalDate;
    withDayOfYear(i: number): LocalDate;
    withMonth(i: number): LocalDate;
    withYear(i: number): LocalDate;
    EPOCH: LocalDate;
    MAX: LocalDate;
    MIN: LocalDate;
}

//java.time.LocalDateTime
declare interface LocalDateTime extends Temporal, TemporalAdjuster, ChronoLocalDateTime, Serializable {
    adjustInto(temporal: Temporal): Temporal;
    atOffset(zoneOffset: ZoneOffset): OffsetDateTime;
    atZone(zoneId: ZoneId): ZonedDateTime;
    atZone(zoneId: ZoneId): ChronoZonedDateTime;
    compareTo(chronoLocalDateTime: ChronoLocalDateTime): number;
    compareTo(object: any): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): LocalDateTime;
    get(temporalField: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfWeek(): DayOfWeek;
    getDayOfYear(): number;
    getHour(): number;
    getLong(temporalField: TemporalField): number;
    getMinute(): number;
    getMonth(): Month;
    getMonthValue(): number;
    getNano(): number;
    getSecond(): number;
    getYear(): number;
    isAfter(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isBefore(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isEqual(chronoLocalDateTime: ChronoLocalDateTime): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    minus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    minus(temporalAmount: TemporalAmount): LocalDateTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): LocalDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minusDays(l: number): LocalDateTime;
    minusHours(l: number): LocalDateTime;
    minusMinutes(l: number): LocalDateTime;
    minusMonths(l: number): LocalDateTime;
    minusNanos(l: number): LocalDateTime;
    minusSeconds(l: number): LocalDateTime;
    minusWeeks(l: number): LocalDateTime;
    minusYears(l: number): LocalDateTime;
    now(): LocalDateTime;
    now(clock: Clock): LocalDateTime;
    now(zoneId: ZoneId): LocalDateTime;
    of(localDate: LocalDate, localTime: LocalTime): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, month: Month, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number): LocalDateTime;
    ofEpochSecond(l: number, i: number, zoneOffset: ZoneOffset): LocalDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): LocalDateTime;
    parse(s: string): LocalDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): LocalDateTime;
    plus(temporalAmount: TemporalAmount): ChronoLocalDateTime;
    plus(temporalAmount: TemporalAmount): LocalDateTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ChronoLocalDateTime;
    plus(l: number, temporalUnit: TemporalUnit): LocalDateTime;
    plusDays(l: number): LocalDateTime;
    plusHours(l: number): LocalDateTime;
    plusMinutes(l: number): LocalDateTime;
    plusMonths(l: number): LocalDateTime;
    plusNanos(l: number): LocalDateTime;
    plusSeconds(l: number): LocalDateTime;
    plusWeeks(l: number): LocalDateTime;
    plusYears(l: number): LocalDateTime;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    toLocalDate(): LocalDate;
    toLocalDate(): ChronoLocalDate;
    toLocalTime(): LocalTime;
    truncatedTo(temporalUnit: TemporalUnit): LocalDateTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): ChronoLocalDateTime;
    with(temporalAdjuster: TemporalAdjuster): LocalDateTime;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): LocalDateTime;
    with(temporalField: TemporalField, l: number): ChronoLocalDateTime;
    withDayOfMonth(i: number): LocalDateTime;
    withDayOfYear(i: number): LocalDateTime;
    withHour(i: number): LocalDateTime;
    withMinute(i: number): LocalDateTime;
    withMonth(i: number): LocalDateTime;
    withNano(i: number): LocalDateTime;
    withSecond(i: number): LocalDateTime;
    withYear(i: number): LocalDateTime;
    MAX: LocalDateTime;
    MIN: LocalDateTime;
}

//java.time.LocalTime
declare interface LocalTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    adjustInto(temporal: Temporal): Temporal;
    atDate(localDate: LocalDate): LocalDateTime;
    atOffset(zoneOffset: ZoneOffset): OffsetTime;
    compareTo(object: any): number;
    compareTo(localTime: LocalTime): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): LocalTime;
    get(temporalField: TemporalField): number;
    getHour(): number;
    getLong(temporalField: TemporalField): number;
    getMinute(): number;
    getNano(): number;
    getSecond(): number;
    isAfter(localTime: LocalTime): boolean;
    isBefore(localTime: LocalTime): boolean;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    minus(temporalAmount: TemporalAmount): LocalTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): LocalTime;
    minusHours(l: number): LocalTime;
    minusMinutes(l: number): LocalTime;
    minusNanos(l: number): LocalTime;
    minusSeconds(l: number): LocalTime;
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
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): LocalTime;
    plus(l: number, temporalUnit: TemporalUnit): LocalTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plusHours(l: number): LocalTime;
    plusMinutes(l: number): LocalTime;
    plusNanos(l: number): LocalTime;
    plusSeconds(l: number): LocalTime;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    toEpochSecond(localDate: LocalDate, zoneOffset: ZoneOffset): number;
    toNanoOfDay(): number;
    toSecondOfDay(): number;
    truncatedTo(temporalUnit: TemporalUnit): LocalTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): LocalTime;
    with(temporalField: TemporalField, l: number): Temporal;
    with(temporalField: TemporalField, l: number): LocalTime;
    withHour(i: number): LocalTime;
    withMinute(i: number): LocalTime;
    withNano(i: number): LocalTime;
    withSecond(i: number): LocalTime;
    MAX: LocalTime;
    MIDNIGHT: LocalTime;
    MIN: LocalTime;
    NOON: LocalTime;
}

//java.util.Locale
declare interface Locale extends Cloneable, Serializable {
    filter(list: List, collection: Collection): List;
    filter(list: List, collection: Collection, filteringMode: FilteringMode): List;
    filterTags(list: List, collection: Collection): List;
    filterTags(list: List, collection: Collection, filteringMode: FilteringMode): List;
    forLanguageTag(s: string): Locale;
    getAvailableLocales(): Locale[];
    getCountry(): string;
    getDefault(): Locale;
    getDefault(category: Category): Locale;
    getDisplayCountry(): string;
    getDisplayCountry(locale: Locale): string;
    getDisplayLanguage(): string;
    getDisplayLanguage(locale: Locale): string;
    getDisplayName(): string;
    getDisplayName(locale: Locale): string;
    getDisplayScript(): string;
    getDisplayScript(locale: Locale): string;
    getDisplayVariant(): string;
    getDisplayVariant(locale: Locale): string;
    getExtension(c: string): string;
    getExtensionKeys(): Set;
    getISO3Country(): string;
    getISO3Language(): string;
    getISOCountries(): string[];
    getISOCountries(isoCountryCode: IsoCountryCode): Set;
    getISOLanguages(): string[];
    getLanguage(): string;
    getScript(): string;
    getUnicodeLocaleAttributes(): Set;
    getUnicodeLocaleKeys(): Set;
    getUnicodeLocaleType(s: string): string;
    getVariant(): string;
    hasExtensions(): boolean;
    lookup(list: List, collection: Collection): Locale;
    lookupTag(list: List, collection: Collection): string;
    setDefault(locale: Locale): void;
    setDefault(category: Category, locale: Locale): void;
    stripExtensions(): Locale;
    toLanguageTag(): string;
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
    PRIVATE_USE_EXTENSION: string;
    ROOT: Locale;
    SIMPLIFIED_CHINESE: Locale;
    TAIWAN: Locale;
    TRADITIONAL_CHINESE: Locale;
    UK: Locale;
    UNICODE_LOCALE_EXTENSION: string;
    US: Locale;
}

//org.bukkit.Location
declare interface Location extends Cloneable, ConfigurationSerializable {
    add(vector: Vector): Location;
    add(location: Location): Location;
    add(d: number, d: number, d: number): Location;
    checkFinite(): void;
    deserialize(map: Map): Location;
    distance(location: Location): number;
    distanceSquared(location: Location): number;
    getBlock(): Block;
    getBlockX(): number;
    getBlockY(): number;
    getBlockZ(): number;
    getChunk(): Chunk;
    getDirection(): Vector;
    getPitch(): number;
    getWorld(): World;
    getX(): number;
    getY(): number;
    getYaw(): number;
    getZ(): number;
    isWorldLoaded(): boolean;
    length(): number;
    lengthSquared(): number;
    locToBlock(d: number): number;
    multiply(d: number): Location;
    normalizePitch(f: number): number;
    normalizeYaw(f: number): number;
    serialize(): Map;
    setDirection(vector: Vector): Location;
    setPitch(f: number): void;
    setWorld(world: World): void;
    setX(d: number): void;
    setY(d: number): void;
    setYaw(f: number): void;
    setZ(d: number): void;
    subtract(location: Location): Location;
    subtract(vector: Vector): Location;
    subtract(d: number, d: number, d: number): Location;
    toVector(): Vector;
    zero(): Location;
}

//org.bukkit.entity.ArmorStand$LockType
declare enum LockType {
    ADDING_OR_CHANGING,
    REMOVING_OR_CHANGING,
    ADDING,
}

//org.bukkit.block.Lockable
declare interface Lockable {
    getLock(): string;
    isLocked(): boolean;
    setLock(s: string): void;
}

//java.util.logging.LogRecord
declare interface LogRecord extends Serializable {
    getInstant(): Instant;
    getLevel(): Level;
    getLoggerName(): string;
    getLongThreadID(): number;
    getMessage(): string;
    getMillis(): number;
    getParameters(): any[];
    getResourceBundle(): ResourceBundle;
    getResourceBundleName(): string;
    getSequenceNumber(): number;
    getSourceClassName(): string;
    getSourceMethodName(): string;
    getThreadID(): number;
    getThrown(): Throwable;
    setInstant(instant: Instant): void;
    setLevel(level: Level): void;
    setLoggerName(s: string): void;
    setLongThreadID(l: number): LogRecord;
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

//java.util.logging.Logger
declare interface Logger {
    addHandler(handler: Handler): void;
    config(s: string): void;
    config(supplier: Supplier): void;
    entering(s: string, s: string): void;
    entering(s: string, s: string, object: any): void;
    entering(s: string, s: string, object: any): void;
    exiting(s: string, s: string): void;
    exiting(s: string, s: string, object: any): void;
    fine(supplier: Supplier): void;
    fine(s: string): void;
    finer(s: string): void;
    finer(supplier: Supplier): void;
    finest(s: string): void;
    finest(supplier: Supplier): void;
    getAnonymousLogger(): Logger;
    getAnonymousLogger(s: string): Logger;
    getFilter(): Filter;
    getGlobal(): Logger;
    getHandlers(): Handler[];
    getLevel(): Level;
    getLogger(s: string): Logger;
    getLogger(s: string, s: string): Logger;
    getName(): string;
    getParent(): Logger;
    getResourceBundle(): ResourceBundle;
    getResourceBundleName(): string;
    getUseParentHandlers(): boolean;
    info(supplier: Supplier): void;
    info(s: string): void;
    isLoggable(level: Level): boolean;
    log(logRecord: LogRecord): void;
    log(level: Level, supplier: Supplier): void;
    log(level: Level, s: string): void;
    log(level: Level, s: string, throwable: Throwable): void;
    log(level: Level, throwable: Throwable, supplier: Supplier): void;
    log(level: Level, s: string, object: any): void;
    log(level: Level, s: string, object: any): void;
    logp(level: Level, s: string, s: string, supplier: Supplier): void;
    logp(level: Level, s: string, s: string, s: string): void;
    logp(level: Level, s: string, s: string, s: string, object: any): void;
    logp(level: Level, s: string, s: string, s: string, object: any): void;
    logp(level: Level, s: string, s: string, s: string, throwable: Throwable): void;
    logp(level: Level, s: string, s: string, throwable: Throwable, supplier: Supplier): void;
    logrb(level: Level, resourceBundle: ResourceBundle, s: string, object: any): void;
    logrb(level: Level, resourceBundle: ResourceBundle, s: string, throwable: Throwable): void;
    logrb(level: Level, s: string, s: string, s: string, s: string): void;
    logrb(level: Level, s: string, s: string, resourceBundle: ResourceBundle, s: string, object: any): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, throwable: Throwable): void;
    logrb(level: Level, s: string, s: string, resourceBundle: ResourceBundle, s: string, throwable: Throwable): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, object: any): void;
    logrb(level: Level, s: string, s: string, s: string, s: string, object: any): void;
    removeHandler(handler: Handler): void;
    setFilter(filter: Filter): void;
    setLevel(level: Level): void;
    setParent(logger: Logger): void;
    setResourceBundle(resourceBundle: ResourceBundle): void;
    setUseParentHandlers(b: boolean): void;
    severe(supplier: Supplier): void;
    severe(s: string): void;
    throwing(s: string, s: string, throwable: Throwable): void;
    warning(supplier: Supplier): void;
    warning(s: string): void;
    GLOBAL_LOGGER_NAME: string;
    global: Logger;
}

//java.lang.Long
declare interface Long extends Number, Comparable, Constable, ConstantDesc {
    bitCount(l: number): number;
    compare(l: number, l: number): number;
    compareTo(object: any): number;
    compareTo(long: Long): number;
    compareUnsigned(l: number, l: number): number;
    decode(s: string): Long;
    describeConstable(): Optional;
    divideUnsigned(l: number, l: number): number;
    equals(object: any): boolean;
    getLong(s: string): Long;
    getLong(s: string, l: number): Long;
    getLong(s: string, long: Long): Long;
    hashCode(): number;
    hashCode(l: number): number;
    highestOneBit(l: number): number;
    lowestOneBit(l: number): number;
    max(l: number, l: number): number;
    min(l: number, l: number): number;
    numberOfLeadingZeros(l: number): number;
    numberOfTrailingZeros(l: number): number;
    parseLong(s: string): number;
    parseLong(s: string, i: number): number;
    parseLong(s: string, i: number, i: number, i: number): number;
    parseUnsignedLong(s: string): number;
    parseUnsignedLong(s: string, i: number): number;
    parseUnsignedLong(s: string, i: number, i: number, i: number): number;
    remainderUnsigned(l: number, l: number): number;
    resolveConstantDesc(lookup: Lookup): any;
    resolveConstantDesc(lookup: Lookup): Long;
    reverse(l: number): number;
    reverseBytes(l: number): number;
    rotateLeft(l: number, i: number): number;
    rotateRight(l: number, i: number): number;
    signum(l: number): number;
    sum(l: number, l: number): number;
    toBinaryString(l: number): string;
    toHexString(l: number): string;
    toOctalString(l: number): string;
    toString(): string;
    toString(l: number): string;
    toString(l: number, i: number): string;
    toUnsignedString(l: number): string;
    toUnsignedString(l: number, i: number): string;
    valueOf(l: number): Long;
    valueOf(s: string): Long;
    valueOf(s: string, i: number): Long;
    BYTES: number;
    MAX_VALUE: number;
    MIN_VALUE: number;
    SIZE: number;
    TYPE: Class;
}

//java.util.function.LongBinaryOperator
declare interface LongBinaryOperator {
    applyAsLong(l: number, l: number): number;
}

//java.nio.LongBuffer
declare interface LongBuffer extends Buffer, Comparable {
    allocate(i: number): LongBuffer;
    asReadOnlyBuffer(): LongBuffer;
    compact(): LongBuffer;
    compareTo(object: any): number;
    compareTo(longBuffer: LongBuffer): number;
    equals(object: any): boolean;
    get(): number;
    get(i: number): number;
    get(l: number): LongBuffer;
    get(i: number, l: number): LongBuffer;
    get(l: number, i: number, i: number): LongBuffer;
    get(i: number, l: number, i: number, i: number): LongBuffer;
    hashCode(): number;
    mismatch(longBuffer: LongBuffer): number;
    order(): ByteOrder;
    put(l: number): LongBuffer;
    put(longBuffer: LongBuffer): LongBuffer;
    put(l: number): LongBuffer;
    put(i: number, l: number): LongBuffer;
    put(i: number, l: number): LongBuffer;
    put(l: number, i: number, i: number): LongBuffer;
    put(i: number, l: number, i: number, i: number): LongBuffer;
    put(i: number, longBuffer: LongBuffer, i: number, i: number): LongBuffer;
    toString(): string;
    wrap(l: number): LongBuffer;
    wrap(l: number, i: number, i: number): LongBuffer;
}

//java.util.function.LongConsumer
declare interface LongConsumer {
    accept(l: number): void;
    andThen(longConsumer: LongConsumer): LongConsumer;
}

//java.util.function.LongFunction
declare interface LongFunction {
    apply(l: number): any;
}

//org.bukkit.material.LongGrass
declare interface LongGrass extends MaterialData {
    getSpecies(): GrassSpecies;
    setSpecies(grassSpecies: GrassSpecies): void;
}

//java.util.stream.LongStream$LongMapMultiConsumer
declare interface LongMapMultiConsumer {
    accept(l: number, longConsumer: LongConsumer): void;
}

//java.util.function.LongPredicate
declare interface LongPredicate {
    and(longPredicate: LongPredicate): LongPredicate;
    negate(): LongPredicate;
    or(longPredicate: LongPredicate): LongPredicate;
    test(l: number): boolean;
}

//java.util.stream.LongStream
declare interface LongStream extends BaseStream {
    allMatch(longPredicate: LongPredicate): boolean;
    anyMatch(longPredicate: LongPredicate): boolean;
    asDoubleStream(): DoubleStream;
    average(): OptionalDouble;
    boxed(): Stream;
    builder(): Builder;
    collect(supplier: Supplier, objLongConsumer: ObjLongConsumer, biConsumer: BiConsumer): any;
    concat(longStream: LongStream, longStream: LongStream): LongStream;
    count(): number;
    distinct(): LongStream;
    dropWhile(longPredicate: LongPredicate): LongStream;
    empty(): LongStream;
    filter(longPredicate: LongPredicate): LongStream;
    findAny(): OptionalLong;
    findFirst(): OptionalLong;
    flatMap(longFunction: LongFunction): LongStream;
    forEach(longConsumer: LongConsumer): void;
    forEachOrdered(longConsumer: LongConsumer): void;
    generate(longSupplier: LongSupplier): LongStream;
    iterate(l: number, longUnaryOperator: LongUnaryOperator): LongStream;
    iterate(l: number, longPredicate: LongPredicate, longUnaryOperator: LongUnaryOperator): LongStream;
    iterator(): Iterator;
    iterator(): OfLong;
    limit(l: number): LongStream;
    map(longUnaryOperator: LongUnaryOperator): LongStream;
    mapMulti(longMapMultiConsumer: LongMapMultiConsumer): LongStream;
    mapToDouble(longToDoubleFunction: LongToDoubleFunction): DoubleStream;
    mapToInt(longToIntFunction: LongToIntFunction): IntStream;
    mapToObj(longFunction: LongFunction): Stream;
    max(): OptionalLong;
    min(): OptionalLong;
    noneMatch(longPredicate: LongPredicate): boolean;
    of(l: number): LongStream;
    of(l: number): LongStream;
    parallel(): LongStream;
    parallel(): BaseStream;
    peek(longConsumer: LongConsumer): LongStream;
    range(l: number, l: number): LongStream;
    rangeClosed(l: number, l: number): LongStream;
    reduce(longBinaryOperator: LongBinaryOperator): OptionalLong;
    reduce(l: number, longBinaryOperator: LongBinaryOperator): number;
    sequential(): BaseStream;
    sequential(): LongStream;
    skip(l: number): LongStream;
    sorted(): LongStream;
    spliterator(): OfLong;
    spliterator(): Spliterator;
    sum(): number;
    summaryStatistics(): LongSummaryStatistics;
    takeWhile(longPredicate: LongPredicate): LongStream;
    toArray(): number[];
}

//java.util.LongSummaryStatistics
declare interface LongSummaryStatistics extends LongConsumer, IntConsumer {
    accept(i: number): void;
    accept(l: number): void;
    combine(longSummaryStatistics: LongSummaryStatistics): void;
    getAverage(): number;
    getCount(): number;
    getMax(): number;
    getMin(): number;
    getSum(): number;
}

//java.util.function.LongSupplier
declare interface LongSupplier {
    getAsLong(): number;
}

//java.util.function.LongToDoubleFunction
declare interface LongToDoubleFunction {
    applyAsDouble(l: number): number;
}

//java.util.function.LongToIntFunction
declare interface LongToIntFunction {
    applyAsInt(l: number): number;
}

//java.util.function.LongUnaryOperator
declare interface LongUnaryOperator {
    andThen(longUnaryOperator: LongUnaryOperator): LongUnaryOperator;
    applyAsLong(l: number): number;
    compose(longUnaryOperator: LongUnaryOperator): LongUnaryOperator;
    identity(): LongUnaryOperator;
}

//java.lang.invoke.MethodHandles$Lookup
declare interface Lookup {
    accessClass(clazz: Class): Class;
    bind(object: any, s: string, methodType: MethodType): MethodHandle;
    defineClass(b: number): Class;
    defineHiddenClass(b: number, b: boolean, classOption: ClassOption): Lookup;
    defineHiddenClassWithClassData(b: number, object: any, b: boolean, classOption: ClassOption): Lookup;
    dropLookupMode(i: number): Lookup;
    ensureInitialized(clazz: Class): Class;
    findClass(s: string): Class;
    findConstructor(clazz: Class, methodType: MethodType): MethodHandle;
    findGetter(clazz: Class, s: string, clazz: Class): MethodHandle;
    findSetter(clazz: Class, s: string, clazz: Class): MethodHandle;
    findSpecial(clazz: Class, s: string, methodType: MethodType, clazz: Class): MethodHandle;
    findStatic(clazz: Class, s: string, methodType: MethodType): MethodHandle;
    findStaticGetter(clazz: Class, s: string, clazz: Class): MethodHandle;
    findStaticSetter(clazz: Class, s: string, clazz: Class): MethodHandle;
    findStaticVarHandle(clazz: Class, s: string, clazz: Class): VarHandle;
    findVarHandle(clazz: Class, s: string, clazz: Class): VarHandle;
    findVirtual(clazz: Class, s: string, methodType: MethodType): MethodHandle;
    hasFullPrivilegeAccess(): boolean;
    hasPrivateAccess(): boolean;
    in(clazz: Class): Lookup;
    lookupClass(): Class;
    lookupModes(): number;
    previousLookupClass(): Class;
    revealDirect(methodHandle: MethodHandle): MethodHandleInfo;
    unreflect(method: Method): MethodHandle;
    unreflectConstructor(constructor: Constructor): MethodHandle;
    unreflectGetter(field: Field): MethodHandle;
    unreflectSetter(field: Field): MethodHandle;
    unreflectSpecial(method: Method, clazz: Class): MethodHandle;
    unreflectVarHandle(field: Field): VarHandle;
    MODULE: number;
    ORIGINAL: number;
    PACKAGE: number;
    PRIVATE: number;
    PROTECTED: number;
    PUBLIC: number;
    UNCONDITIONAL: number;
}

//org.bukkit.inventory.LoomInventory
declare interface LoomInventory extends Inventory {
}

//org.bukkit.loot.LootContext
declare interface LootContext {
    getKiller(): HumanEntity;
    getLocation(): Location;
    getLootedEntity(): Entity;
    getLootingModifier(): number;
    getLuck(): number;
    DEFAULT_LOOT_MODIFIER: number;
}

//org.bukkit.event.world.LootGenerateEvent
declare interface LootGenerateEvent extends WorldEvent, Cancellable {
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getInventoryHolder(): InventoryHolder;
    getLoot(): List;
    getLootContext(): LootContext;
    getLootTable(): LootTable;
    isCancelled(): boolean;
    isPlugin(): boolean;
    setCancelled(b: boolean): void;
    setLoot(collection: Collection): void;
}

//org.bukkit.loot.LootTable
declare interface LootTable extends Keyed {
    fillInventory(inventory: Inventory, random: Random, lootContext: LootContext): void;
    populateLoot(random: Random, lootContext: LootContext): Collection;
}

//org.bukkit.loot.LootTables
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
    ANCIENT_CITY,
    ANCIENT_CITY_ICE_BOX,
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

//org.bukkit.loot.Lootable
declare interface Lootable {
    getLootTable(): LootTable;
    getSeed(): number;
    setLootTable(lootTable: LootTable): void;
    setSeed(l: number): void;
}

//org.bukkit.entity.MagmaCube
declare interface MagmaCube extends Slime {
}

//org.bukkit.inventory.MainHand
declare enum MainHand {
    LEFT,
    RIGHT,
}

//org.bukkit.block.data.type.MangrovePropagule
declare interface MangrovePropagule extends Ageable, Hangable, Sapling, Waterlogged {
}

//org.bukkit.conversations.ManuallyAbandonedConversationCanceller
declare interface ManuallyAbandonedConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(conversationContext: ConversationContext, s: string): boolean;
    setConversation(conversation: Conversation): void;
}

//java.util.Map
declare interface Map {
    clear(): void;
    compute(object: any, biFunction: BiFunction): any;
    computeIfAbsent(object: any, func: Function): any;
    computeIfPresent(object: any, biFunction: BiFunction): any;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    copyOf(map: Map): Map;
    entry(object: any, object: any): Entry;
    entrySet(): Set;
    equals(object: any): boolean;
    forEach(biConsumer: BiConsumer): void;
    get(object: any): any;
    getOrDefault(object: any, object: any): any;
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): Set;
    merge(object: any, object: any, biFunction: BiFunction): any;
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
    put(object: any, object: any): any;
    putAll(map: Map): void;
    putIfAbsent(object: any, object: any): any;
    remove(object: any): any;
    remove(object: any, object: any): boolean;
    replace(object: any, object: any): any;
    replace(object: any, object: any, object: any): boolean;
    replaceAll(biFunction: BiFunction): void;
    size(): number;
    values(): Collection;
}

//org.bukkit.map.MapCanvas
declare interface MapCanvas {
    drawImage(i: number, i: number, image: Image): void;
    drawText(i: number, i: number, mapFont: MapFont, s: string): void;
    getBasePixel(i: number, i: number): number;
    getBasePixelColor(i: number, i: number): Color;
    getCursors(): MapCursorCollection;
    getMapView(): MapView;
    getPixel(i: number, i: number): number;
    getPixelColor(i: number, i: number): Color;
    setCursors(mapCursorCollection: MapCursorCollection): void;
    setPixel(i: number, i: number, b: number): void;
    setPixelColor(i: number, i: number, color: Color): void;
}

//org.bukkit.map.MapPalette$MapColorCache
declare interface MapColorCache {
    isCached(): boolean;
    matchColor(color: Color): number;
}

//org.bukkit.map.MapCursor
declare interface MapCursor {
    getCaption(): string;
    getDirection(): number;
    getRawType(): number;
    getType(): Type;
    getX(): number;
    getY(): number;
    isVisible(): boolean;
    setCaption(s: string): void;
    setDirection(b: number): void;
    setRawType(b: number): void;
    setType(type: Type): void;
    setVisible(b: boolean): void;
    setX(b: number): void;
    setY(b: number): void;
}

//org.bukkit.map.MapCursorCollection
declare interface MapCursorCollection {
    addCursor(mapCursor: MapCursor): MapCursor;
    addCursor(i: number, i: number, b: number): MapCursor;
    addCursor(i: number, i: number, b: number, b: number): MapCursor;
    addCursor(i: number, i: number, b: number, b: number, b: boolean): MapCursor;
    addCursor(i: number, i: number, b: number, b: number, b: boolean, s: string): MapCursor;
    getCursor(i: number): MapCursor;
    removeCursor(mapCursor: MapCursor): boolean;
    size(): number;
}

//org.bukkit.map.MapFont
declare interface MapFont {
    getChar(c: string): CharacterSprite;
    getHeight(): number;
    getWidth(s: string): number;
    isValid(s: string): boolean;
    setChar(c: string, characterSprite: CharacterSprite): void;
}

//org.bukkit.event.server.MapInitializeEvent
declare interface MapInitializeEvent extends ServerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMap(): MapView;
}

//org.bukkit.inventory.meta.MapMeta
declare interface MapMeta extends ItemMeta {
    clone(): MapMeta;
    clone(): ItemMeta;
    clone(): any;
    getColor(): Color;
    getLocationName(): string;
    getMapId(): number;
    getMapView(): MapView;
    hasColor(): boolean;
    hasLocationName(): boolean;
    hasMapId(): boolean;
    hasMapView(): boolean;
    isScaling(): boolean;
    setColor(color: Color): void;
    setLocationName(s: string): void;
    setMapId(i: number): void;
    setMapView(mapView: MapView): void;
    setScaling(b: boolean): void;
}

//java.nio.channels.FileChannel$MapMode
declare interface MapMode {
    PRIVATE: MapMode;
    READ_ONLY: MapMode;
    READ_WRITE: MapMode;
}

//org.bukkit.map.MapPalette
declare interface MapPalette {
    getColor(b: number): Color;
    imageToBytes(image: Image): number[];
    matchColor(color: Color): number;
    matchColor(i: number, i: number, i: number): number;
    resizeImage(image: Image): BufferedImage;
    setMapColorCache(mapColorCache: MapColorCache): void;
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

//org.bukkit.map.MapRenderer
declare interface MapRenderer {
    initialize(mapView: MapView): void;
    isContextual(): boolean;
    render(mapView: MapView, mapCanvas: MapCanvas, player: Player): void;
}

//org.bukkit.map.MapView
declare interface MapView {
    addRenderer(mapRenderer: MapRenderer): void;
    getCenterX(): number;
    getCenterZ(): number;
    getId(): number;
    getRenderers(): List;
    getScale(): Scale;
    getWorld(): World;
    isLocked(): boolean;
    isTrackingPosition(): boolean;
    isUnlimitedTracking(): boolean;
    isVirtual(): boolean;
    removeRenderer(mapRenderer: MapRenderer): boolean;
    setCenterX(i: number): void;
    setCenterZ(i: number): void;
    setLocked(b: boolean): void;
    setScale(scale: Scale): void;
    setTrackingPosition(b: boolean): void;
    setUnlimitedTracking(b: boolean): void;
    setWorld(world: World): void;
}

//java.nio.MappedByteBuffer
declare interface MappedByteBuffer extends ByteBuffer {
    force(): MappedByteBuffer;
    force(i: number, i: number): MappedByteBuffer;
    isLoaded(): boolean;
    load(): MappedByteBuffer;
}

//org.yaml.snakeyaml.error.Mark
declare interface Mark extends Serializable {
    getBuffer(): number[];
    getColumn(): number;
    getIndex(): number;
    getLine(): number;
    getName(): string;
    getPointer(): number;
    get_snippet(): string;
    get_snippet(i: number, i: number): string;
}

//org.bukkit.entity.Marker
declare interface Marker extends Entity {
}

//java.util.regex.MatchResult
declare interface MatchResult {
    end(): number;
    end(i: number): number;
    group(): string;
    group(i: number): string;
    groupCount(): number;
    start(): number;
    start(i: number): number;
}

//java.util.regex.Matcher
declare interface Matcher extends MatchResult {
    appendReplacement(s: string, s: string): Matcher;
    appendReplacement(s: string, s: string): Matcher;
    appendTail(s: string): string;
    appendTail(s: string): string;
    end(): number;
    end(s: string): number;
    end(i: number): number;
    find(): boolean;
    find(i: number): boolean;
    group(): string;
    group(s: string): string;
    group(i: number): string;
    groupCount(): number;
    hasAnchoringBounds(): boolean;
    hasTransparentBounds(): boolean;
    hitEnd(): boolean;
    lookingAt(): boolean;
    matches(): boolean;
    pattern(): Pattern;
    quoteReplacement(s: string): string;
    region(i: number, i: number): Matcher;
    regionEnd(): number;
    regionStart(): number;
    replaceAll(func: Function): string;
    replaceAll(s: string): string;
    replaceFirst(s: string): string;
    replaceFirst(func: Function): string;
    requireEnd(): boolean;
    reset(): Matcher;
    reset(s: string): Matcher;
    results(): Stream;
    start(): number;
    start(i: number): number;
    start(s: string): number;
    toMatchResult(): MatchResult;
    useAnchoringBounds(b: boolean): Matcher;
    usePattern(pattern: Pattern): Matcher;
    useTransparentBounds(b: boolean): Matcher;
}

//org.bukkit.Material
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
    MUD,
    CRIMSON_NYLIUM,
    WARPED_NYLIUM,
    COBBLESTONE,
    OAK_PLANKS,
    SPRUCE_PLANKS,
    BIRCH_PLANKS,
    JUNGLE_PLANKS,
    ACACIA_PLANKS,
    DARK_OAK_PLANKS,
    MANGROVE_PLANKS,
    CRIMSON_PLANKS,
    WARPED_PLANKS,
    OAK_SAPLING,
    SPRUCE_SAPLING,
    BIRCH_SAPLING,
    JUNGLE_SAPLING,
    ACACIA_SAPLING,
    DARK_OAK_SAPLING,
    MANGROVE_PROPAGULE,
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
    MANGROVE_LOG,
    MANGROVE_ROOTS,
    MUDDY_MANGROVE_ROOTS,
    CRIMSON_STEM,
    WARPED_STEM,
    STRIPPED_OAK_LOG,
    STRIPPED_SPRUCE_LOG,
    STRIPPED_BIRCH_LOG,
    STRIPPED_JUNGLE_LOG,
    STRIPPED_ACACIA_LOG,
    STRIPPED_DARK_OAK_LOG,
    STRIPPED_MANGROVE_LOG,
    STRIPPED_CRIMSON_STEM,
    STRIPPED_WARPED_STEM,
    STRIPPED_OAK_WOOD,
    STRIPPED_SPRUCE_WOOD,
    STRIPPED_BIRCH_WOOD,
    STRIPPED_JUNGLE_WOOD,
    STRIPPED_ACACIA_WOOD,
    STRIPPED_DARK_OAK_WOOD,
    STRIPPED_MANGROVE_WOOD,
    STRIPPED_CRIMSON_HYPHAE,
    STRIPPED_WARPED_HYPHAE,
    OAK_WOOD,
    SPRUCE_WOOD,
    BIRCH_WOOD,
    JUNGLE_WOOD,
    ACACIA_WOOD,
    DARK_OAK_WOOD,
    MANGROVE_WOOD,
    CRIMSON_HYPHAE,
    WARPED_HYPHAE,
    OAK_LEAVES,
    SPRUCE_LEAVES,
    BIRCH_LEAVES,
    JUNGLE_LEAVES,
    ACACIA_LEAVES,
    DARK_OAK_LEAVES,
    MANGROVE_LEAVES,
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
    MANGROVE_SLAB,
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
    MUD_BRICK_SLAB,
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
    MANGROVE_FENCE,
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
    PACKED_MUD,
    MUD_BRICKS,
    DEEPSLATE_BRICKS,
    CRACKED_DEEPSLATE_BRICKS,
    DEEPSLATE_TILES,
    CRACKED_DEEPSLATE_TILES,
    CHISELED_DEEPSLATE,
    REINFORCED_DEEPSLATE,
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
    MUD_BRICK_STAIRS,
    MYCELIUM,
    LILY_PAD,
    NETHER_BRICKS,
    CRACKED_NETHER_BRICKS,
    CHISELED_NETHER_BRICKS,
    NETHER_BRICK_FENCE,
    NETHER_BRICK_STAIRS,
    SCULK,
    SCULK_VEIN,
    SCULK_CATALYST,
    SCULK_SHRIEKER,
    ENCHANTING_TABLE,
    END_PORTAL_FRAME,
    END_STONE,
    END_STONE_BRICKS,
    DRAGON_EGG,
    SANDSTONE_STAIRS,
    ENDER_CHEST,
    EMERALD_BLOCK,
    OAK_STAIRS,
    SPRUCE_STAIRS,
    BIRCH_STAIRS,
    JUNGLE_STAIRS,
    ACACIA_STAIRS,
    DARK_OAK_STAIRS,
    MANGROVE_STAIRS,
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
    MUD_BRICK_WALL,
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
    MANGROVE_BUTTON,
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
    MANGROVE_PRESSURE_PLATE,
    CRIMSON_PRESSURE_PLATE,
    WARPED_PRESSURE_PLATE,
    IRON_DOOR,
    OAK_DOOR,
    SPRUCE_DOOR,
    BIRCH_DOOR,
    JUNGLE_DOOR,
    ACACIA_DOOR,
    DARK_OAK_DOOR,
    MANGROVE_DOOR,
    CRIMSON_DOOR,
    WARPED_DOOR,
    IRON_TRAPDOOR,
    OAK_TRAPDOOR,
    SPRUCE_TRAPDOOR,
    BIRCH_TRAPDOOR,
    JUNGLE_TRAPDOOR,
    ACACIA_TRAPDOOR,
    DARK_OAK_TRAPDOOR,
    MANGROVE_TRAPDOOR,
    CRIMSON_TRAPDOOR,
    WARPED_TRAPDOOR,
    OAK_FENCE_GATE,
    SPRUCE_FENCE_GATE,
    BIRCH_FENCE_GATE,
    JUNGLE_FENCE_GATE,
    ACACIA_FENCE_GATE,
    DARK_OAK_FENCE_GATE,
    MANGROVE_FENCE_GATE,
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
    OAK_CHEST_BOAT,
    SPRUCE_BOAT,
    SPRUCE_CHEST_BOAT,
    BIRCH_BOAT,
    BIRCH_CHEST_BOAT,
    JUNGLE_BOAT,
    JUNGLE_CHEST_BOAT,
    ACACIA_BOAT,
    ACACIA_CHEST_BOAT,
    DARK_OAK_BOAT,
    DARK_OAK_CHEST_BOAT,
    MANGROVE_BOAT,
    MANGROVE_CHEST_BOAT,
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
    MANGROVE_SIGN,
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
    TADPOLE_BUCKET,
    BRICK,
    CLAY_BALL,
    DRIED_KELP_BLOCK,
    PAPER,
    BOOK,
    SLIME_BALL,
    EGG,
    COMPASS,
    RECOVERY_COMPASS,
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
    ALLAY_SPAWN_EGG,
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
    FROG_SPAWN_EGG,
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
    TADPOLE_SPAWN_EGG,
    TRADER_LLAMA_SPAWN_EGG,
    TROPICAL_FISH_SPAWN_EGG,
    TURTLE_SPAWN_EGG,
    VEX_SPAWN_EGG,
    VILLAGER_SPAWN_EGG,
    VINDICATOR_SPAWN_EGG,
    WANDERING_TRADER_SPAWN_EGG,
    WARDEN_SPAWN_EGG,
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
    MUSIC_DISC_OTHERSIDE,
    MUSIC_DISC_5,
    MUSIC_DISC_PIGSTEP,
    DISC_FRAGMENT_5,
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
    GOAT_HORN,
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
    OCHRE_FROGLIGHT,
    VERDANT_FROGLIGHT,
    PEARLESCENT_FROGLIGHT,
    FROGSPAWN,
    ECHO_SHARD,
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
    MANGROVE_WALL_SIGN,
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
    POTTED_MANGROVE_PROPAGULE,
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

//org.bukkit.material.MaterialData
declare interface MaterialData extends Cloneable {
    getData(): number;
    getItemType(): Material;
    setData(b: number): void;
    toItemStack(): ItemStack;
    toItemStack(i: number): ItemStack;
}

//java.awt.PageAttributes$MediaType
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

//java.lang.reflect.Member
declare interface Member {
    getDeclaringClass(): Class;
    getModifiers(): number;
    getName(): string;
    isSynthetic(): boolean;
    DECLARED: number;
    PUBLIC: number;
}

//java.nio.channels.MembershipKey
declare interface MembershipKey {
    block(inetAddress: InetAddress): MembershipKey;
    channel(): MulticastChannel;
    drop(): void;
    group(): InetAddress;
    isValid(): boolean;
    networkInterface(): NetworkInterface;
    sourceAddress(): InetAddress;
    unblock(inetAddress: InetAddress): MembershipKey;
}

//org.bukkit.configuration.MemoryConfiguration
declare interface MemoryConfiguration extends MemorySection, Configuration {
    addDefaults(map: Map): void;
    addDefaults(configuration: Configuration): void;
    getDefaults(): Configuration;
    options(): ConfigurationOptions;
    options(): MemoryConfigurationOptions;
    setDefaults(configuration: Configuration): void;
}

//org.bukkit.configuration.MemoryConfigurationOptions
declare interface MemoryConfigurationOptions extends ConfigurationOptions {
}

//org.bukkit.entity.memory.MemoryKey
declare interface MemoryKey extends Keyed {
    getByKey(namespacedKey: NamespacedKey): MemoryKey;
    getKey(): NamespacedKey;
    getMemoryClass(): Class;
    values(): Set;
    ADMIRING_DISABLED: MemoryKey;
    ADMIRING_ITEM: MemoryKey;
    ANGRY_AT: MemoryKey;
    GOLEM_DETECTED_RECENTLY: MemoryKey;
    HAS_HUNTING_COOLDOWN: MemoryKey;
    HOME: MemoryKey;
    HUNTED_RECENTLY: MemoryKey;
    IS_TEMPTED: MemoryKey;
    ITEM_PICKUP_COOLDOWN_TICKS: MemoryKey;
    JOB_SITE: MemoryKey;
    LAST_SLEPT: MemoryKey;
    LAST_WOKEN: MemoryKey;
    LAST_WORKED_AT_POI: MemoryKey;
    LIKED_NOTEBLOCK_COOLDOWN_TICKS: MemoryKey;
    LIKED_NOTEBLOCK_POSITION: MemoryKey;
    LIKED_PLAYER: MemoryKey;
    LONG_JUMP_COOLING_DOWN: MemoryKey;
    MEETING_POINT: MemoryKey;
    PLAY_DEAD_TICKS: MemoryKey;
    POTENTIAL_JOB_SITE: MemoryKey;
    RAM_COOLDOWN_TICKS: MemoryKey;
    TEMPTATION_COOLDOWN_TICKS: MemoryKey;
    UNIVERSAL_ANGER: MemoryKey;
}

//org.bukkit.configuration.MemorySection
declare interface MemorySection extends ConfigurationSection {
    addDefault(s: string, object: any): void;
    contains(s: string): boolean;
    contains(s: string, b: boolean): boolean;
    createPath(configurationSection: ConfigurationSection, s: string): string;
    createPath(configurationSection: ConfigurationSection, s: string, configurationSection: ConfigurationSection): string;
    createSection(s: string): ConfigurationSection;
    createSection(s: string, map: Map): ConfigurationSection;
    get(s: string): any;
    get(s: string, object: any): any;
    getBoolean(s: string): boolean;
    getBoolean(s: string, b: boolean): boolean;
    getBooleanList(s: string): List;
    getByteList(s: string): List;
    getCharacterList(s: string): List;
    getColor(s: string): Color;
    getColor(s: string, color: Color): Color;
    getComments(s: string): List;
    getConfigurationSection(s: string): ConfigurationSection;
    getCurrentPath(): string;
    getDefaultSection(): ConfigurationSection;
    getDouble(s: string): number;
    getDouble(s: string, d: number): number;
    getDoubleList(s: string): List;
    getFloatList(s: string): List;
    getInlineComments(s: string): List;
    getInt(s: string): number;
    getInt(s: string, i: number): number;
    getIntegerList(s: string): List;
    getItemStack(s: string): ItemStack;
    getItemStack(s: string, itemStack: ItemStack): ItemStack;
    getKeys(b: boolean): Set;
    getList(s: string): List;
    getList(s: string, list: List): List;
    getLocation(s: string): Location;
    getLocation(s: string, location: Location): Location;
    getLong(s: string): number;
    getLong(s: string, l: number): number;
    getLongList(s: string): List;
    getMapList(s: string): List;
    getName(): string;
    getObject(s: string, clazz: Class): any;
    getObject(s: string, clazz: Class, object: any): any;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(s: string, offlinePlayer: OfflinePlayer): OfflinePlayer;
    getParent(): ConfigurationSection;
    getRoot(): Configuration;
    getSerializable(s: string, clazz: Class): ConfigurationSerializable;
    getSerializable(s: string, clazz: Class, configurationSerializable: ConfigurationSerializable): ConfigurationSerializable;
    getShortList(s: string): List;
    getString(s: string): string;
    getString(s: string, s: string): string;
    getStringList(s: string): List;
    getValues(b: boolean): Map;
    getVector(s: string): Vector;
    getVector(s: string, vector: Vector): Vector;
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
    set(s: string, object: any): void;
    setComments(s: string, list: List): void;
    setInlineComments(s: string, list: List): void;
}

//java.awt.Menu
declare interface Menu extends MenuItem, MenuContainer, Accessible {
    add(s: string): void;
    add(menuItem: MenuItem): MenuItem;
    addSeparator(): void;
    countItems(): number;
    getItem(i: number): MenuItem;
    getItemCount(): number;
    insert(s: string, i: number): void;
    insert(menuItem: MenuItem, i: number): void;
    insertSeparator(i: number): void;
    isTearOff(): boolean;
    remove(menuComponent: MenuComponent): void;
    remove(i: number): void;
    removeAll(): void;
    removeNotify(): void;
}

//java.awt.MenuBar
declare interface MenuBar extends MenuComponent, MenuContainer, Accessible {
    add(menu: Menu): Menu;
    addNotify(): void;
    countMenus(): number;
    deleteShortcut(menuShortcut: MenuShortcut): void;
    getHelpMenu(): Menu;
    getMenu(i: number): Menu;
    getMenuCount(): number;
    getShortcutMenuItem(menuShortcut: MenuShortcut): MenuItem;
    remove(i: number): void;
    remove(menuComponent: MenuComponent): void;
    setHelpMenu(menu: Menu): void;
    shortcuts(): Enumeration;
}

//java.awt.MenuComponent
declare interface MenuComponent extends Serializable {
    dispatchEvent(aWTEvent: AWTEvent): void;
    getAccessibleContext(): AccessibleContext;
    getFont(): Font;
    getName(): string;
    getParent(): MenuContainer;
    postEvent(event: Event): boolean;
    removeNotify(): void;
    setFont(font: Font): void;
    setName(s: string): void;
}

//java.awt.MenuContainer
declare interface MenuContainer {
    getFont(): Font;
    postEvent(event: Event): boolean;
    remove(menuComponent: MenuComponent): void;
}

//java.awt.MenuItem
declare interface MenuItem extends MenuComponent, Accessible {
    addActionListener(actionListener: ActionListener): void;
    addNotify(): void;
    deleteShortcut(): void;
    disable(): void;
    enable(): void;
    enable(b: boolean): void;
    getActionCommand(): string;
    getActionListeners(): ActionListener[];
    getLabel(): string;
    getListeners(clazz: Class): EventListener[];
    getShortcut(): MenuShortcut;
    isEnabled(): boolean;
    removeActionListener(actionListener: ActionListener): void;
    setActionCommand(s: string): void;
    setEnabled(b: boolean): void;
    setLabel(s: string): void;
    setShortcut(menuShortcut: MenuShortcut): void;
}

//java.awt.MenuShortcut
declare interface MenuShortcut extends Serializable {
    equals(menuShortcut: MenuShortcut): boolean;
    getKey(): number;
    usesShiftModifier(): boolean;
}

//org.bukkit.inventory.Merchant
declare interface Merchant {
    getRecipe(i: number): MerchantRecipe;
    getRecipeCount(): number;
    getRecipes(): List;
    getTrader(): HumanEntity;
    isTrading(): boolean;
    setRecipe(i: number, merchantRecipe: MerchantRecipe): void;
    setRecipes(list: List): void;
}

//org.bukkit.inventory.MerchantInventory
declare interface MerchantInventory extends Inventory {
    getMerchant(): Merchant;
    getSelectedRecipe(): MerchantRecipe;
    getSelectedRecipeIndex(): number;
}

//org.bukkit.inventory.MerchantRecipe
declare interface MerchantRecipe extends Recipe {
    addIngredient(itemStack: ItemStack): void;
    adjust(itemStack: ItemStack): void;
    getAdjustedIngredient1(): ItemStack;
    getDemand(): number;
    getIngredients(): List;
    getMaxUses(): number;
    getPriceMultiplier(): number;
    getResult(): ItemStack;
    getSpecialPrice(): number;
    getUses(): number;
    getVillagerExperience(): number;
    hasExperienceReward(): boolean;
    removeIngredient(i: number): void;
    setDemand(i: number): void;
    setExperienceReward(b: boolean): void;
    setIngredients(list: List): void;
    setMaxUses(i: number): void;
    setPriceMultiplier(f: number): void;
    setSpecialPrice(i: number): void;
    setUses(i: number): void;
    setVillagerExperience(i: number): void;
}

//org.bukkit.conversations.MessagePrompt
declare interface MessagePrompt extends Prompt {
    acceptInput(conversationContext: ConversationContext, s: string): Prompt;
    blocksForInput(conversationContext: ConversationContext): boolean;
}

//org.bukkit.plugin.messaging.MessageTooLargeException
declare interface MessageTooLargeException extends RuntimeException {
}

//org.bukkit.plugin.messaging.Messenger
declare interface Messenger {
    dispatchIncomingMessage(player: Player, s: string, b: number): void;
    getIncomingChannelRegistrations(s: string): Set;
    getIncomingChannelRegistrations(plugin: Plugin): Set;
    getIncomingChannelRegistrations(plugin: Plugin, s: string): Set;
    getIncomingChannels(): Set;
    getIncomingChannels(plugin: Plugin): Set;
    getOutgoingChannels(): Set;
    getOutgoingChannels(plugin: Plugin): Set;
    isIncomingChannelRegistered(plugin: Plugin, s: string): boolean;
    isOutgoingChannelRegistered(plugin: Plugin, s: string): boolean;
    isRegistrationValid(pluginMessageListenerRegistration: PluginMessageListenerRegistration): boolean;
    isReservedChannel(s: string): boolean;
    registerIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): PluginMessageListenerRegistration;
    registerOutgoingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): void;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, s: string): void;
    MAX_CHANNEL_SIZE: number;
    MAX_MESSAGE_SIZE: number;
}

//org.bukkit.metadata.MetadataConversionException
declare interface MetadataConversionException extends RuntimeException {
}

//org.bukkit.metadata.MetadataEvaluationException
declare interface MetadataEvaluationException extends RuntimeException {
}

//org.bukkit.metadata.MetadataStore
declare interface MetadataStore {
    getMetadata(object: any, s: string): List;
    hasMetadata(object: any, s: string): boolean;
    invalidateAll(plugin: Plugin): void;
    removeMetadata(object: any, s: string, plugin: Plugin): void;
    setMetadata(object: any, s: string, metadataValue: MetadataValue): void;
}

//org.bukkit.metadata.MetadataStoreBase
declare interface MetadataStoreBase {
    getMetadata(object: any, s: string): List;
    hasMetadata(object: any, s: string): boolean;
    invalidateAll(plugin: Plugin): void;
    removeMetadata(object: any, s: string, plugin: Plugin): void;
    setMetadata(object: any, s: string, metadataValue: MetadataValue): void;
}

//org.bukkit.metadata.MetadataValue
declare interface MetadataValue {
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asShort(): number;
    asString(): string;
    getOwningPlugin(): Plugin;
    invalidate(): void;
    value(): any;
}

//org.bukkit.metadata.MetadataValueAdapter
declare interface MetadataValueAdapter extends MetadataValue {
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asShort(): number;
    asString(): string;
    getOwningPlugin(): Plugin;
}

//org.bukkit.metadata.Metadatable
declare interface Metadatable {
    getMetadata(s: string): List;
    hasMetadata(s: string): boolean;
    removeMetadata(s: string, plugin: Plugin): void;
    setMetadata(s: string, metadataValue: MetadataValue): void;
}

//java.lang.reflect.Method
declare interface Method extends Executable {
    equals(object: any): boolean;
    getDefaultValue(): any;
    getGenericReturnType(): Type;
    getReturnType(): Class;
    hashCode(): number;
    invoke(object: any, object: any): any;
    isBridge(): boolean;
    isDefault(): boolean;
    setAccessible(b: boolean): void;
    toString(): string;
}

//java.lang.invoke.MethodHandle
declare interface MethodHandle extends Constable {
    asCollector(clazz: Class, i: number): MethodHandle;
    asCollector(i: number, clazz: Class, i: number): MethodHandle;
    asFixedArity(): MethodHandle;
    asSpreader(clazz: Class, i: number): MethodHandle;
    asSpreader(i: number, clazz: Class, i: number): MethodHandle;
    asType(methodType: MethodType): MethodHandle;
    asVarargsCollector(clazz: Class): MethodHandle;
    bindTo(object: any): MethodHandle;
    describeConstable(): Optional;
    invoke(object: any): any;
    invokeExact(object: any): any;
    invokeWithArguments(object: any): any;
    invokeWithArguments(list: List): any;
    isVarargsCollector(): boolean;
    type(): MethodType;
    withVarargs(b: boolean): MethodHandle;
}

//java.lang.invoke.MethodHandleInfo
declare interface MethodHandleInfo {
    getDeclaringClass(): Class;
    getMethodType(): MethodType;
    getModifiers(): number;
    getName(): string;
    getReferenceKind(): number;
    isVarArgs(): boolean;
    referenceKindToString(i: number): string;
    reflectAs(clazz: Class, lookup: Lookup): Member;
    toString(i: number, clazz: Class, s: string, methodType: MethodType): string;
    REF_getField: number;
    REF_getStatic: number;
    REF_invokeInterface: number;
    REF_invokeSpecial: number;
    REF_invokeStatic: number;
    REF_invokeVirtual: number;
    REF_newInvokeSpecial: number;
    REF_putField: number;
    REF_putStatic: number;
}

//java.lang.invoke.MethodType
declare interface MethodType extends Constable, OfMethod, Serializable {
    appendParameterTypes(list: List): MethodType;
    appendParameterTypes(clazz: Class): MethodType;
    changeParameterType(i: number, ofField: OfField): OfMethod;
    changeParameterType(i: number, clazz: Class): MethodType;
    changeReturnType(clazz: Class): MethodType;
    changeReturnType(ofField: OfField): OfMethod;
    describeConstable(): Optional;
    descriptorString(): string;
    dropParameterTypes(i: number, i: number): OfMethod;
    dropParameterTypes(i: number, i: number): MethodType;
    erase(): MethodType;
    fromMethodDescriptorString(s: string, classLoader: ClassLoader): MethodType;
    generic(): MethodType;
    genericMethodType(i: number): MethodType;
    genericMethodType(i: number, b: boolean): MethodType;
    hasPrimitives(): boolean;
    hasWrappers(): boolean;
    insertParameterTypes(i: number, list: List): MethodType;
    insertParameterTypes(i: number, clazz: Class): MethodType;
    insertParameterTypes(i: number, ofField: OfField): OfMethod;
    lastParameterType(): Class;
    methodType(clazz: Class): MethodType;
    methodType(clazz: Class, clazz: Class): MethodType;
    methodType(clazz: Class, methodType: MethodType): MethodType;
    methodType(clazz: Class, list: List): MethodType;
    methodType(clazz: Class, clazz: Class): MethodType;
    methodType(clazz: Class, clazz: Class, clazz: Class): MethodType;
    parameterArray(): Class[];
    parameterArray(): OfField[];
    parameterCount(): number;
    parameterList(): List;
    parameterType(i: number): Class;
    parameterType(i: number): OfField;
    returnType(): Class;
    returnType(): OfField;
    toMethodDescriptorString(): string;
    unwrap(): MethodType;
    wrap(): MethodType;
}

//org.bukkit.entity.Minecart
declare interface Minecart extends Vehicle {
    getDamage(): number;
    getDerailedVelocityMod(): Vector;
    getDisplayBlock(): MaterialData;
    getDisplayBlockData(): BlockData;
    getDisplayBlockOffset(): number;
    getFlyingVelocityMod(): Vector;
    getMaxSpeed(): number;
    isSlowWhenEmpty(): boolean;
    setDamage(d: number): void;
    setDerailedVelocityMod(vector: Vector): void;
    setDisplayBlock(materialData: MaterialData): void;
    setDisplayBlockData(blockData: BlockData): void;
    setDisplayBlockOffset(i: number): void;
    setFlyingVelocityMod(vector: Vector): void;
    setMaxSpeed(d: number): void;
    setSlowWhenEmpty(b: boolean): void;
}

//org.bukkit.map.MinecraftFont
declare interface MinecraftFont extends MapFont {
    Font: MinecraftFont;
}

//org.bukkit.block.structure.Mirror
declare enum Mirror {
    NONE,
    LEFT_RIGHT,
    FRONT_BACK,
}

//org.bukkit.entity.Mob
declare interface Mob extends LivingEntity, Lootable {
    getTarget(): LivingEntity;
    isAware(): boolean;
    setAware(b: boolean): void;
    setTarget(livingEntity: LivingEntity): void;
}

//java.awt.Dialog$ModalExclusionType
declare enum ModalExclusionType {
    NO_EXCLUDE,
    APPLICATION_EXCLUDE,
    TOOLKIT_EXCLUDE,
}

//java.awt.Dialog$ModalityType
declare enum ModalityType {
    MODELESS,
    DOCUMENT_MODAL,
    APPLICATION_MODAL,
    TOOLKIT_MODAL,
}

//org.bukkit.block.data.type.StructureBlock$Mode
declare enum Mode {
    SAVE,
    LOAD,
    CORNER,
    DATA,
}

//org.bukkit.block.data.type.Comparator$Mode
declare enum Mode {
    COMPARE,
    SUBTRACT,
}

//java.nio.file.WatchEvent$Modifier
declare interface Modifier {
    name(): string;
}

//java.lang.Module
declare interface Module extends AnnotatedElement {
    addExports(s: string, mod: Module): Module;
    addOpens(s: string, mod: Module): Module;
    addReads(mod: Module): Module;
    addUses(clazz: Class): Module;
    canRead(mod: Module): boolean;
    canUse(clazz: Class): boolean;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getClassLoader(): ClassLoader;
    getDeclaredAnnotations(): Annotation[];
    getDescriptor(): ModuleDescriptor;
    getLayer(): ModuleLayer;
    getName(): string;
    getPackages(): Set;
    getResourceAsStream(s: string): InputStream;
    isExported(s: string): boolean;
    isExported(s: string, mod: Module): boolean;
    isNamed(): boolean;
    isOpen(s: string): boolean;
    isOpen(s: string, mod: Module): boolean;
}

//java.lang.module.ModuleDescriptor
declare interface ModuleDescriptor extends Comparable {
    compareTo(moduleDescriptor: ModuleDescriptor): number;
    compareTo(object: any): number;
    exports(): Set;
    isAutomatic(): boolean;
    isOpen(): boolean;
    mainClass(): Optional;
    modifiers(): Set;
    name(): string;
    newAutomaticModule(s: string): Builder;
    newModule(s: string): Builder;
    newModule(s: string, set: Set): Builder;
    newOpenModule(s: string): Builder;
    opens(): Set;
    packages(): Set;
    provides(): Set;
    rawVersion(): Optional;
    read(inputStream: InputStream): ModuleDescriptor;
    read(byteBuffer: ByteBuffer): ModuleDescriptor;
    read(inputStream: InputStream, supplier: Supplier): ModuleDescriptor;
    read(byteBuffer: ByteBuffer, supplier: Supplier): ModuleDescriptor;
    requires(): Set;
    toNameAndVersion(): string;
    uses(): Set;
    version(): Optional;
}

//java.lang.module.ModuleFinder
declare interface ModuleFinder {
    compose(moduleFinder: ModuleFinder): ModuleFinder;
    find(s: string): Optional;
    findAll(): Set;
    of(path: Path): ModuleFinder;
    ofSystem(): ModuleFinder;
}

//java.lang.ModuleLayer
declare interface ModuleLayer {
    boot(): ModuleLayer;
    configuration(): Configuration;
    defineModules(configuration: Configuration, func: Function): ModuleLayer;
    defineModules(configuration: Configuration, list: List, func: Function): Controller;
    defineModulesWithManyLoaders(configuration: Configuration, classLoader: ClassLoader): ModuleLayer;
    defineModulesWithManyLoaders(configuration: Configuration, list: List, classLoader: ClassLoader): Controller;
    defineModulesWithOneLoader(configuration: Configuration, classLoader: ClassLoader): ModuleLayer;
    defineModulesWithOneLoader(configuration: Configuration, list: List, classLoader: ClassLoader): Controller;
    empty(): ModuleLayer;
    findLoader(s: string): ClassLoader;
    findModule(s: string): Optional;
    modules(): Set;
    parents(): List;
}

//org.bukkit.event.block.MoistureChangeEvent
declare interface MoistureChangeEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewState(): BlockState;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.entity.Monster
declare interface Monster extends Creature {
}

//org.bukkit.material.MonsterEggs
declare interface MonsterEggs extends TexturedMaterial {
}

//java.time.Month
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

//java.awt.event.MouseEvent
declare interface MouseEvent extends InputEvent {
    getButton(): number;
    getClickCount(): number;
    getLocationOnScreen(): Point;
    getMouseModifiersText(i: number): string;
    getPoint(): Point;
    getX(): number;
    getXOnScreen(): number;
    getY(): number;
    getYOnScreen(): number;
    isPopupTrigger(): boolean;
    paramString(): string;
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

//java.awt.event.MouseListener
declare interface MouseListener extends EventListener {
    mouseClicked(mouseEvent: MouseEvent): void;
    mouseEntered(mouseEvent: MouseEvent): void;
    mouseExited(mouseEvent: MouseEvent): void;
    mousePressed(mouseEvent: MouseEvent): void;
    mouseReleased(mouseEvent: MouseEvent): void;
}

//java.awt.event.MouseMotionListener
declare interface MouseMotionListener extends EventListener {
    mouseDragged(mouseEvent: MouseEvent): void;
    mouseMoved(mouseEvent: MouseEvent): void;
}

//java.awt.event.MouseWheelEvent
declare interface MouseWheelEvent extends MouseEvent {
    getPreciseWheelRotation(): number;
    getScrollAmount(): number;
    getScrollType(): number;
    getUnitsToScroll(): number;
    getWheelRotation(): number;
    WHEEL_BLOCK_SCROLL: number;
    WHEEL_UNIT_SCROLL: number;
}

//java.awt.event.MouseWheelListener
declare interface MouseWheelListener extends EventListener {
    mouseWheelMoved(mouseWheelEvent: MouseWheelEvent): void;
}

//org.bukkit.entity.Mule
declare interface Mule extends ChestedHorse {
}

//java.nio.channels.MulticastChannel
declare interface MulticastChannel extends NetworkChannel {
    close(): void;
    join(inetAddress: InetAddress, networkInterface: NetworkInterface): MembershipKey;
    join(inetAddress: InetAddress, networkInterface: NetworkInterface, inetAddress: InetAddress): MembershipKey;
}

//com.google.common.collect.Multimap
declare interface Multimap {
    asMap(): Map;
    clear(): void;
    containsEntry(object: any, object: any): boolean;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    entries(): Collection;
    equals(object: any): boolean;
    forEach(biConsumer: BiConsumer): void;
    get(object: any): Collection;
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): Set;
    keys(): Multiset;
    put(object: any, object: any): boolean;
    putAll(multimap: Multimap): boolean;
    putAll(object: any, iterable: Iterable): boolean;
    remove(object: any, object: any): boolean;
    removeAll(object: any): Collection;
    replaceValues(object: any, iterable: Iterable): Collection;
    size(): number;
    values(): Collection;
}

//org.bukkit.command.MultipleCommandAlias
declare interface MultipleCommandAlias extends Command {
    getCommands(): Command[];
}

//java.awt.JobAttributes$MultipleDocumentHandlingType
declare interface MultipleDocumentHandlingType extends AttributeValue {
    SEPARATE_DOCUMENTS_COLLATED_COPIES: MultipleDocumentHandlingType;
    SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: MultipleDocumentHandlingType;
}

//org.bukkit.block.data.MultipleFacing
declare interface MultipleFacing extends BlockData {
    getAllowedFaces(): Set;
    getFaces(): Set;
    hasFace(blockFace: BlockFace): boolean;
    setFace(blockFace: BlockFace, b: boolean): void;
}

//com.google.common.collect.Multiset
declare interface Multiset extends Collection {
    add(object: any): boolean;
    add(object: any, i: number): number;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    count(object: any): number;
    elementSet(): Set;
    entrySet(): Set;
    equals(object: any): boolean;
    forEach(consumer: Consumer): void;
    forEachEntry(objIntConsumer: ObjIntConsumer): void;
    hashCode(): number;
    iterator(): Iterator;
    remove(object: any): boolean;
    remove(object: any, i: number): number;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    setCount(object: any, i: number): number;
    setCount(object: any, i: number, i: number): boolean;
    size(): number;
    spliterator(): Spliterator;
    toString(): string;
}

//org.bukkit.material.Mushroom
declare interface Mushroom extends MaterialData {
    getBlockTexture(): MushroomBlockTexture;
    getPaintedFaces(): Set;
    isFacePainted(blockFace: BlockFace): boolean;
    isStem(): boolean;
    setBlockTexture(mushroomBlockTexture: MushroomBlockTexture): void;
    setFacePainted(blockFace: BlockFace, b: boolean): void;
    setStem(): void;
}

//org.bukkit.material.types.MushroomBlockTexture
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

//org.bukkit.entity.MushroomCow
declare interface MushroomCow extends Cow {
    getVariant(): Variant;
    setVariant(variant: Variant): void;
}

//org.bukkit.entity.NPC
declare interface NPC extends Creature {
}

//org.bukkit.scoreboard.NameTagVisibility
declare enum NameTagVisibility {
    ALWAYS,
    NEVER,
    HIDE_FOR_OTHER_TEAMS,
    HIDE_FOR_OWN_TEAM,
}

//org.bukkit.Nameable
declare interface Nameable {
    getCustomName(): string;
    setCustomName(s: string): void;
}

//java.lang.NamedPackage
declare interface NamedPackage {
}

//org.bukkit.NamespacedKey
declare interface NamespacedKey {
    fromString(s: string): NamespacedKey;
    fromString(s: string, plugin: Plugin): NamespacedKey;
    getKey(): string;
    getNamespace(): string;
    minecraft(s: string): NamespacedKey;
    randomKey(): NamespacedKey;
    BUKKIT: string;
    MINECRAFT: string;
}

//org.bukkit.material.NetherWarts
declare interface NetherWarts extends MaterialData {
    getState(): NetherWartsState;
    setState(netherWartsState: NetherWartsState): void;
}

//org.bukkit.NetherWartsState
declare enum NetherWartsState {
    SEEDED,
    STAGE_ONE,
    STAGE_TWO,
    RIPE,
}

//java.nio.channels.NetworkChannel
declare interface NetworkChannel extends Channel {
    bind(socketAddress: SocketAddress): NetworkChannel;
    getLocalAddress(): SocketAddress;
    getOption(socketOption: SocketOption): any;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    supportedOptions(): Set;
}

//java.net.NetworkInterface
declare interface NetworkInterface {
    getByIndex(i: number): NetworkInterface;
    getByInetAddress(inetAddress: InetAddress): NetworkInterface;
    getByName(s: string): NetworkInterface;
    getDisplayName(): string;
    getHardwareAddress(): number[];
    getIndex(): number;
    getInetAddresses(): Enumeration;
    getInterfaceAddresses(): List;
    getMTU(): number;
    getName(): string;
    getNetworkInterfaces(): Enumeration;
    getParent(): NetworkInterface;
    getSubInterfaces(): Enumeration;
    inetAddresses(): Stream;
    isLoopback(): boolean;
    isPointToPoint(): boolean;
    isUp(): boolean;
    isVirtual(): boolean;
    networkInterfaces(): Stream;
    subInterfaces(): Stream;
    supportsMulticast(): boolean;
}

//org.yaml.snakeyaml.nodes.Node
declare interface Node {
    getAnchor(): string;
    getBlockComments(): List;
    getEndComments(): List;
    getEndMark(): Mark;
    getInLineComments(): List;
    getNodeId(): NodeId;
    getStartMark(): Mark;
    getTag(): Tag;
    getType(): Class;
    isResolved(): boolean;
    isTwoStepsConstruction(): boolean;
    setAnchor(s: string): void;
    setBlockComments(list: List): void;
    setEndComments(list: List): void;
    setInLineComments(list: List): void;
    setTag(tag: Tag): void;
    setTwoStepsConstruction(b: boolean): void;
    setType(clazz: Class): void;
    setUseClassConstructor(boolean: Boolean): void;
    useClassConstructor(): boolean;
}

//org.yaml.snakeyaml.nodes.NodeId
declare enum NodeId {
    scalar,
    sequence,
    mapping,
    anchor,
}

//org.bukkit.util.noise.NoiseGenerator
declare interface NoiseGenerator {
    floor(d: number): number;
    noise(d: number): number;
    noise(d: number, d: number): number;
    noise(d: number, d: number, d: number): number;
    noise(d: number, i: number, d: number, d: number): number;
    noise(d: number, i: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, i: number, d: number, d: number): number;
    noise(d: number, d: number, i: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, i: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, i: number, d: number, d: number, b: boolean): number;
}

//org.bukkit.Note
declare interface Note {
    flat(i: number, tone: Tone): Note;
    flattened(): Note;
    getId(): number;
    getOctave(): number;
    getTone(): Tone;
    isSharped(): boolean;
    natural(i: number, tone: Tone): Note;
    sharp(i: number, tone: Tone): Note;
    sharped(): Note;
}

//org.bukkit.block.data.type.NoteBlock
declare interface NoteBlock extends Powerable {
    getInstrument(): Instrument;
    getNote(): Note;
    setInstrument(instrument: Instrument): void;
    setNote(note: Note): void;
}

//org.bukkit.event.block.NotePlayEvent
declare interface NotePlayEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getInstrument(): Instrument;
    getNote(): Note;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setInstrument(instrument: Instrument): void;
    setNote(note: Note): void;
}

//org.bukkit.conversations.NullConversationPrefix
declare interface NullConversationPrefix extends ConversationPrefix {
    getPrefix(conversationContext: ConversationContext): string;
}

//java.lang.Number
declare interface Number extends Serializable {
    byteValue(): number;
    doubleValue(): number;
    floatValue(): number;
    intValue(): number;
    longValue(): number;
    shortValue(): number;
}

//org.bukkit.util.NumberConversions
declare interface NumberConversions {
    ceil(d: number): number;
    checkFinite(d: number, s: string): void;
    checkFinite(f: number, s: string): void;
    floor(d: number): number;
    isFinite(d: number): boolean;
    isFinite(f: number): boolean;
    round(d: number): number;
    square(d: number): number;
    toByte(object: any): number;
    toDouble(object: any): number;
    toFloat(object: any): number;
    toInt(object: any): number;
    toLong(object: any): number;
    toShort(object: any): number;
}

//org.bukkit.conversations.NumericPrompt
declare interface NumericPrompt extends ValidatingPrompt {
}

//java.util.function.ObjDoubleConsumer
declare interface ObjDoubleConsumer {
    accept(object: any, d: number): void;
}

//java.util.function.ObjIntConsumer
declare interface ObjIntConsumer {
    accept(object: any, i: number): void;
}

//java.util.function.ObjLongConsumer
declare interface ObjLongConsumer {
    accept(object: any, l: number): void;
}

//java.lang.Object
declare interface Object {
    equals(object: any): boolean;
    getClass(): Class;
    hashCode(): number;
    notify(): void;
    notifyAll(): void;
    toString(): string;
    wait(): void;
    wait(l: number): void;
    wait(l: number, i: number): void;
}

//java.io.ObjectInput
declare interface ObjectInput extends DataInput, AutoCloseable {
    available(): number;
    close(): void;
    read(): number;
    read(b: number): number;
    read(b: number, i: number, i: number): number;
    readObject(): any;
    skip(l: number): number;
}

//java.io.ObjectInputFilter
declare interface ObjectInputFilter {
    allowFilter(predicate: Predicate, status: Status): ObjectInputFilter;
    checkInput(filterInfo: FilterInfo): Status;
    merge(objectInputFilter: ObjectInputFilter, objectInputFilter: ObjectInputFilter): ObjectInputFilter;
    rejectFilter(predicate: Predicate, status: Status): ObjectInputFilter;
    rejectUndecidedClass(objectInputFilter: ObjectInputFilter): ObjectInputFilter;
}

//java.io.ObjectInputStream
declare interface ObjectInputStream extends InputStream, ObjectInput, ObjectStreamConstants {
    defaultReadObject(): void;
    getObjectInputFilter(): ObjectInputFilter;
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFields(): GetField;
    readFloat(): number;
    readFully(b: number): void;
    readFully(b: number, i: number, i: number): void;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    readObject(): any;
    readShort(): number;
    readUTF(): string;
    readUnshared(): any;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    registerValidation(objectInputValidation: ObjectInputValidation, i: number): void;
    setObjectInputFilter(objectInputFilter: ObjectInputFilter): void;
    skipBytes(i: number): number;
}

//java.io.ObjectInputValidation
declare interface ObjectInputValidation {
    validateObject(): void;
}

//java.io.ObjectOutput
declare interface ObjectOutput extends DataOutput, AutoCloseable {
    close(): void;
    flush(): void;
    write(b: number): void;
    write(i: number): void;
    write(b: number, i: number, i: number): void;
    writeObject(object: any): void;
}

//java.io.ObjectOutputStream
declare interface ObjectOutputStream extends OutputStream, ObjectOutput, ObjectStreamConstants {
    defaultWriteObject(): void;
    putFields(): PutField;
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
    writeObject(object: any): void;
    writeShort(i: number): void;
    writeUTF(s: string): void;
    writeUnshared(object: any): void;
}

//java.io.ObjectStreamClass
declare interface ObjectStreamClass extends Serializable {
    forClass(): Class;
    getField(s: string): ObjectStreamField;
    getFields(): ObjectStreamField[];
    getName(): string;
    getSerialVersionUID(): number;
    lookup(clazz: Class): ObjectStreamClass;
    lookupAny(clazz: Class): ObjectStreamClass;
    NO_FIELDS: ObjectStreamField[];
}

//java.io.ObjectStreamConstants
declare interface ObjectStreamConstants {
    PROTOCOL_VERSION_1: number;
    PROTOCOL_VERSION_2: number;
    SC_BLOCK_DATA: number;
    SC_ENUM: number;
    SC_EXTERNALIZABLE: number;
    SC_SERIALIZABLE: number;
    SC_WRITE_METHOD: number;
    SERIAL_FILTER_PERMISSION: SerializablePermission;
    STREAM_MAGIC: number;
    STREAM_VERSION: number;
    SUBCLASS_IMPLEMENTATION_PERMISSION: SerializablePermission;
    SUBSTITUTION_PERMISSION: SerializablePermission;
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
    baseWireHandle: number;
}

//java.io.ObjectStreamField
declare interface ObjectStreamField extends Comparable {
    compareTo(object: any): number;
    getName(): string;
    getOffset(): number;
    getType(): Class;
    getTypeCode(): string;
    getTypeString(): string;
    isPrimitive(): boolean;
    isUnshared(): boolean;
}

//org.bukkit.scoreboard.Objective
declare interface Objective {
    getCriteria(): string;
    getDisplayName(): string;
    getDisplaySlot(): DisplaySlot;
    getName(): string;
    getRenderType(): RenderType;
    getScore(offlinePlayer: OfflinePlayer): Score;
    getScore(s: string): Score;
    getScoreboard(): Scoreboard;
    isModifiable(): boolean;
    setDisplayName(s: string): void;
    setDisplaySlot(displaySlot: DisplaySlot): void;
    setRenderType(renderType: RenderType): void;
    unregister(): void;
}

//org.bukkit.block.data.type.Observer
declare interface Observer extends Directional, Powerable {
}

//org.bukkit.material.Observer
declare interface Observer extends MaterialData, Directional, Redstone {
    getFacing(): BlockFace;
    isPowered(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.entity.Ocelot
declare interface Ocelot extends Animals {
    getCatType(): Type;
    isTrusting(): boolean;
    setCatType(type: Type): void;
    setTrusting(b: boolean): void;
}

//org.bukkit.util.noise.OctaveGenerator
declare interface OctaveGenerator {
    getOctaves(): NoiseGenerator[];
    getXScale(): number;
    getYScale(): number;
    getZScale(): number;
    noise(d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, d: number, b: boolean): number;
    noise(d: number, d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number, d: number, b: boolean): number;
    setScale(d: number): void;
    setXScale(d: number): void;
    setYScale(d: number): void;
    setZScale(d: number): void;
}

//java.util.PrimitiveIterator$OfDouble
declare interface OfDouble extends PrimitiveIterator {
    forEachRemaining(object: any): void;
    forEachRemaining(doubleConsumer: DoubleConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    next(): any;
    next(): Double;
    nextDouble(): number;
}

//java.util.Spliterator$OfDouble
declare interface OfDouble extends OfPrimitive {
    forEachRemaining(object: any): void;
    forEachRemaining(doubleConsumer: DoubleConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    tryAdvance(doubleConsumer: DoubleConsumer): boolean;
    tryAdvance(consumer: Consumer): boolean;
    tryAdvance(object: any): boolean;
    trySplit(): OfPrimitive;
    trySplit(): Spliterator;
    trySplit(): OfDouble;
}

//java.lang.invoke.TypeDescriptor$OfField
declare interface OfField extends TypeDescriptor {
    arrayType(): OfField;
    componentType(): OfField;
    isArray(): boolean;
    isPrimitive(): boolean;
}

//java.util.PrimitiveIterator$OfInt
declare interface OfInt extends PrimitiveIterator {
    forEachRemaining(object: any): void;
    forEachRemaining(intConsumer: IntConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    next(): any;
    next(): Integer;
    nextInt(): number;
}

//java.util.Spliterator$OfInt
declare interface OfInt extends OfPrimitive {
    forEachRemaining(object: any): void;
    forEachRemaining(intConsumer: IntConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    tryAdvance(intConsumer: IntConsumer): boolean;
    tryAdvance(consumer: Consumer): boolean;
    tryAdvance(object: any): boolean;
    trySplit(): OfPrimitive;
    trySplit(): Spliterator;
    trySplit(): OfInt;
}

//java.util.PrimitiveIterator$OfLong
declare interface OfLong extends PrimitiveIterator {
    forEachRemaining(object: any): void;
    forEachRemaining(longConsumer: LongConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    next(): any;
    next(): Long;
    nextLong(): number;
}

//java.util.Spliterator$OfLong
declare interface OfLong extends OfPrimitive {
    forEachRemaining(object: any): void;
    forEachRemaining(longConsumer: LongConsumer): void;
    forEachRemaining(consumer: Consumer): void;
    tryAdvance(longConsumer: LongConsumer): boolean;
    tryAdvance(consumer: Consumer): boolean;
    tryAdvance(object: any): boolean;
    trySplit(): OfPrimitive;
    trySplit(): Spliterator;
    trySplit(): OfLong;
}

//java.lang.invoke.TypeDescriptor$OfMethod
declare interface OfMethod extends TypeDescriptor {
    changeParameterType(i: number, ofField: OfField): OfMethod;
    changeReturnType(ofField: OfField): OfMethod;
    dropParameterTypes(i: number, i: number): OfMethod;
    insertParameterTypes(i: number, ofField: OfField): OfMethod;
    parameterArray(): OfField[];
    parameterCount(): number;
    parameterList(): List;
    parameterType(i: number): OfField;
    returnType(): OfField;
}

//java.util.Spliterator$OfPrimitive
declare interface OfPrimitive extends Spliterator {
    forEachRemaining(object: any): void;
    tryAdvance(object: any): boolean;
    trySplit(): Spliterator;
    trySplit(): OfPrimitive;
}

//org.bukkit.OfflinePlayer
declare interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
    decrementStatistic(statistic: Statistic): void;
    decrementStatistic(statistic: Statistic, material: Material): void;
    decrementStatistic(statistic: Statistic, entityType: EntityType): void;
    decrementStatistic(statistic: Statistic, i: number): void;
    decrementStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    decrementStatistic(statistic: Statistic, material: Material, i: number): void;
    getBedSpawnLocation(): Location;
    getFirstPlayed(): number;
    getLastDeathLocation(): Location;
    getLastPlayed(): number;
    getName(): string;
    getPlayer(): Player;
    getPlayerProfile(): PlayerProfile;
    getStatistic(statistic: Statistic): number;
    getStatistic(statistic: Statistic, material: Material): number;
    getStatistic(statistic: Statistic, entityType: EntityType): number;
    getUniqueId(): UUID;
    hasPlayedBefore(): boolean;
    incrementStatistic(statistic: Statistic): void;
    incrementStatistic(statistic: Statistic, entityType: EntityType): void;
    incrementStatistic(statistic: Statistic, material: Material): void;
    incrementStatistic(statistic: Statistic, i: number): void;
    incrementStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    incrementStatistic(statistic: Statistic, material: Material, i: number): void;
    isBanned(): boolean;
    isOnline(): boolean;
    isWhitelisted(): boolean;
    setStatistic(statistic: Statistic, i: number): void;
    setStatistic(statistic: Statistic, material: Material, i: number): void;
    setStatistic(statistic: Statistic, entityType: EntityType, i: number): void;
    setWhitelisted(b: boolean): void;
}

//java.time.OffsetDateTime
declare interface OffsetDateTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    adjustInto(temporal: Temporal): Temporal;
    atZoneSameInstant(zoneId: ZoneId): ZonedDateTime;
    atZoneSimilarLocal(zoneId: ZoneId): ZonedDateTime;
    compareTo(offsetDateTime: OffsetDateTime): number;
    compareTo(object: any): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): OffsetDateTime;
    get(temporalField: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfWeek(): DayOfWeek;
    getDayOfYear(): number;
    getHour(): number;
    getLong(temporalField: TemporalField): number;
    getMinute(): number;
    getMonth(): Month;
    getMonthValue(): number;
    getNano(): number;
    getOffset(): ZoneOffset;
    getSecond(): number;
    getYear(): number;
    isAfter(offsetDateTime: OffsetDateTime): boolean;
    isBefore(offsetDateTime: OffsetDateTime): boolean;
    isEqual(offsetDateTime: OffsetDateTime): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    minus(temporalAmount: TemporalAmount): OffsetDateTime;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): OffsetDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minusDays(l: number): OffsetDateTime;
    minusHours(l: number): OffsetDateTime;
    minusMinutes(l: number): OffsetDateTime;
    minusMonths(l: number): OffsetDateTime;
    minusNanos(l: number): OffsetDateTime;
    minusSeconds(l: number): OffsetDateTime;
    minusWeeks(l: number): OffsetDateTime;
    minusYears(l: number): OffsetDateTime;
    now(): OffsetDateTime;
    now(clock: Clock): OffsetDateTime;
    now(zoneId: ZoneId): OffsetDateTime;
    of(localDateTime: LocalDateTime, zoneOffset: ZoneOffset): OffsetDateTime;
    of(localDate: LocalDate, localTime: LocalTime, zoneOffset: ZoneOffset): OffsetDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): OffsetDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): OffsetDateTime;
    parse(s: string): OffsetDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): OffsetDateTime;
    plus(temporalAmount: TemporalAmount): OffsetDateTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): OffsetDateTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plusDays(l: number): OffsetDateTime;
    plusHours(l: number): OffsetDateTime;
    plusMinutes(l: number): OffsetDateTime;
    plusMonths(l: number): OffsetDateTime;
    plusNanos(l: number): OffsetDateTime;
    plusSeconds(l: number): OffsetDateTime;
    plusWeeks(l: number): OffsetDateTime;
    plusYears(l: number): OffsetDateTime;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    timeLineOrder(): Comparator;
    toEpochSecond(): number;
    toInstant(): Instant;
    toLocalDate(): LocalDate;
    toLocalDateTime(): LocalDateTime;
    toLocalTime(): LocalTime;
    toOffsetTime(): OffsetTime;
    toZonedDateTime(): ZonedDateTime;
    truncatedTo(temporalUnit: TemporalUnit): OffsetDateTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): OffsetDateTime;
    with(temporalField: TemporalField, l: number): OffsetDateTime;
    with(temporalField: TemporalField, l: number): Temporal;
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
    MAX: OffsetDateTime;
    MIN: OffsetDateTime;
}

//java.time.OffsetTime
declare interface OffsetTime extends Temporal, TemporalAdjuster, Comparable, Serializable {
    adjustInto(temporal: Temporal): Temporal;
    atDate(localDate: LocalDate): OffsetDateTime;
    compareTo(object: any): number;
    compareTo(offsetTime: OffsetTime): number;
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): OffsetTime;
    get(temporalField: TemporalField): number;
    getHour(): number;
    getLong(temporalField: TemporalField): number;
    getMinute(): number;
    getNano(): number;
    getOffset(): ZoneOffset;
    getSecond(): number;
    isAfter(offsetTime: OffsetTime): boolean;
    isBefore(offsetTime: OffsetTime): boolean;
    isEqual(offsetTime: OffsetTime): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    isSupported(temporalField: TemporalField): boolean;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(temporalAmount: TemporalAmount): OffsetTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): OffsetTime;
    minusHours(l: number): OffsetTime;
    minusMinutes(l: number): OffsetTime;
    minusNanos(l: number): OffsetTime;
    minusSeconds(l: number): OffsetTime;
    now(): OffsetTime;
    now(zoneId: ZoneId): OffsetTime;
    now(clock: Clock): OffsetTime;
    of(localTime: LocalTime, zoneOffset: ZoneOffset): OffsetTime;
    of(i: number, i: number, i: number, i: number, zoneOffset: ZoneOffset): OffsetTime;
    ofInstant(instant: Instant, zoneId: ZoneId): OffsetTime;
    parse(s: string): OffsetTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): OffsetTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): OffsetTime;
    plus(l: number, temporalUnit: TemporalUnit): OffsetTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plusHours(l: number): OffsetTime;
    plusMinutes(l: number): OffsetTime;
    plusNanos(l: number): OffsetTime;
    plusSeconds(l: number): OffsetTime;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    toEpochSecond(localDate: LocalDate): number;
    toLocalTime(): LocalTime;
    truncatedTo(temporalUnit: TemporalUnit): OffsetTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): OffsetTime;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): OffsetTime;
    with(temporalField: TemporalField, l: number): Temporal;
    withHour(i: number): OffsetTime;
    withMinute(i: number): OffsetTime;
    withNano(i: number): OffsetTime;
    withOffsetSameInstant(zoneOffset: ZoneOffset): OffsetTime;
    withOffsetSameLocal(zoneOffset: ZoneOffset): OffsetTime;
    withSecond(i: number): OffsetTime;
    MAX: OffsetTime;
    MIN: OffsetTime;
}

//java.nio.file.OpenOption
declare interface OpenOption {
}

//org.bukkit.material.Openable
declare interface Openable {
    isOpen(): boolean;
    setOpen(b: boolean): void;
}

//org.bukkit.block.data.Openable
declare interface Openable extends BlockData {
    isOpen(): boolean;
    setOpen(b: boolean): void;
}

//java.lang.module.ModuleDescriptor$Opens
declare interface Opens extends Comparable {
    compareTo(opens: Opens): number;
    compareTo(object: any): number;
    isQualified(): boolean;
    modifiers(): Set;
    source(): string;
    targets(): Set;
}

//org.bukkit.attribute.AttributeModifier$Operation
declare enum Operation {
    ADD_NUMBER,
    ADD_SCALAR,
    MULTIPLY_SCALAR_1,
}

//org.bukkit.scoreboard.Team$Option
declare enum Option {
    NAME_TAG_VISIBILITY,
    DEATH_MESSAGE_VISIBILITY,
    COLLISION_RULE,
}

//org.bukkit.scoreboard.Team$OptionStatus
declare enum OptionStatus {
    ALWAYS,
    NEVER,
    FOR_OTHER_TEAMS,
    FOR_OWN_TEAM,
}

//java.util.Optional
declare interface Optional {
    empty(): Optional;
    filter(predicate: Predicate): Optional;
    flatMap(func: Function): Optional;
    get(): any;
    ifPresent(consumer: Consumer): void;
    ifPresentOrElse(consumer: Consumer, runnable: Runnable): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    map(func: Function): Optional;
    of(object: any): Optional;
    ofNullable(object: any): Optional;
    or(supplier: Supplier): Optional;
    orElse(object: any): any;
    orElseGet(supplier: Supplier): any;
    orElseThrow(): any;
    orElseThrow(supplier: Supplier): any;
    stream(): Stream;
}

//java.util.OptionalDouble
declare interface OptionalDouble {
    empty(): OptionalDouble;
    getAsDouble(): number;
    ifPresent(doubleConsumer: DoubleConsumer): void;
    ifPresentOrElse(doubleConsumer: DoubleConsumer, runnable: Runnable): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    of(d: number): OptionalDouble;
    orElse(d: number): number;
    orElseGet(doubleSupplier: DoubleSupplier): number;
    orElseThrow(): number;
    orElseThrow(supplier: Supplier): number;
    stream(): DoubleStream;
}

//java.util.OptionalInt
declare interface OptionalInt {
    empty(): OptionalInt;
    getAsInt(): number;
    ifPresent(intConsumer: IntConsumer): void;
    ifPresentOrElse(intConsumer: IntConsumer, runnable: Runnable): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    of(i: number): OptionalInt;
    orElse(i: number): number;
    orElseGet(intSupplier: IntSupplier): number;
    orElseThrow(): number;
    orElseThrow(supplier: Supplier): number;
    stream(): IntStream;
}

//java.util.OptionalLong
declare interface OptionalLong {
    empty(): OptionalLong;
    getAsLong(): number;
    ifPresent(longConsumer: LongConsumer): void;
    ifPresentOrElse(longConsumer: LongConsumer, runnable: Runnable): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    of(l: number): OptionalLong;
    orElse(l: number): number;
    orElseGet(longSupplier: LongSupplier): number;
    orElseThrow(): number;
    orElseThrow(supplier: Supplier): number;
    stream(): LongStream;
}

//org.bukkit.block.data.Orientable
declare interface Orientable extends BlockData {
    getAxes(): Set;
    getAxis(): Axis;
    setAxis(axis: Axis): void;
}

//org.bukkit.block.data.type.Jigsaw$Orientation
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

//java.awt.PageAttributes$OrientationRequestedType
declare interface OrientationRequestedType extends AttributeValue {
    LANDSCAPE: OrientationRequestedType;
    PORTRAIT: OrientationRequestedType;
}

//java.awt.PageAttributes$OriginType
declare interface OriginType extends AttributeValue {
    PHYSICAL: OriginType;
    PRINTABLE: OriginType;
}

//java.io.OutputStream
declare interface OutputStream extends Closeable, Flushable {
    close(): void;
    flush(): void;
    nullOutputStream(): OutputStream;
    write(b: number): void;
    write(i: number): void;
    write(b: number, i: number, i: number): void;
}

//java.lang.Package
declare interface Package extends NamedPackage, AnnotatedElement {
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getImplementationTitle(): string;
    getImplementationVendor(): string;
    getImplementationVersion(): string;
    getName(): string;
    getPackage(s: string): Package;
    getPackages(): Package[];
    getSpecificationTitle(): string;
    getSpecificationVendor(): string;
    getSpecificationVersion(): string;
    hashCode(): number;
    isAnnotationPresent(clazz: Class): boolean;
    isCompatibleWith(s: string): boolean;
    isSealed(): boolean;
    isSealed(uRL: URL): boolean;
    toString(): string;
}

//java.awt.PageAttributes
declare interface PageAttributes extends Cloneable {
    getColor(): ColorType;
    getMedia(): MediaType;
    getOrientationRequested(): OrientationRequestedType;
    getOrigin(): OriginType;
    getPrintQuality(): PrintQualityType;
    getPrinterResolution(): number[];
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

//java.awt.Paint
declare interface Paint extends Transparency {
    createContext(colorModel: ColorModel, rectangle: Rectangle, rectangle2D: Rectangle2D, affineTransform: AffineTransform, renderingHints: RenderingHints): PaintContext;
}

//java.awt.PaintContext
declare interface PaintContext {
    dispose(): void;
    getColorModel(): ColorModel;
    getRaster(i: number, i: number, i: number, i: number): Raster;
}

//org.bukkit.entity.Painting
declare interface Painting extends Hanging {
    getArt(): Art;
    setArt(art: Art): boolean;
    setArt(art: Art, b: boolean): boolean;
}

//org.bukkit.structure.Palette
declare interface Palette {
    getBlockCount(): number;
    getBlocks(): List;
}

//org.bukkit.entity.Panda
declare interface Panda extends Animals {
    getHiddenGene(): Gene;
    getMainGene(): Gene;
    setHiddenGene(gene: Gene): void;
    setMainGene(gene: Gene): void;
}

//java.lang.reflect.Parameter
declare interface Parameter extends AnnotatedElement {
    getAnnotatedType(): AnnotatedType;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getAnnotationsByType(clazz: Class): Annotation[];
    getDeclaredAnnotation(clazz: Class): Annotation;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(clazz: Class): Annotation[];
    getDeclaringExecutable(): Executable;
    getModifiers(): number;
    getName(): string;
    getParameterizedType(): Type;
    getType(): Class;
    isImplicit(): boolean;
    isNamePresent(): boolean;
    isSynthetic(): boolean;
    isVarArgs(): boolean;
}

//org.bukkit.entity.Parrot
declare interface Parrot extends Tameable, Sittable {
    getVariant(): Variant;
    setVariant(variant: Variant): void;
}

//java.text.ParsePosition
declare interface ParsePosition {
    getErrorIndex(): number;
    getIndex(): number;
    setErrorIndex(i: number): void;
    setIndex(i: number): void;
}

//org.bukkit.block.data.type.Bed$Part
declare enum Part {
    HEAD,
    FOOT,
}

//org.bukkit.Particle
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
    SONIC_BOOM,
    SCULK_SOUL,
    SCULK_CHARGE,
    SCULK_CHARGE_POP,
    SHRIEK,
    BLOCK_MARKER,
    LEGACY_BLOCK_CRACK,
    LEGACY_BLOCK_DUST,
    LEGACY_FALLING_DUST,
}

//java.net.PasswordAuthentication
declare interface PasswordAuthentication {
    getPassword(): string[];
    getUserName(): string;
}

//java.nio.file.Path
declare interface Path extends Comparable, Iterable, Watchable {
    compareTo(path: Path): number;
    compareTo(object: any): number;
    endsWith(path: Path): boolean;
    endsWith(s: string): boolean;
    equals(object: any): boolean;
    getFileName(): Path;
    getFileSystem(): FileSystem;
    getName(i: number): Path;
    getNameCount(): number;
    getParent(): Path;
    getRoot(): Path;
    hashCode(): number;
    isAbsolute(): boolean;
    iterator(): Iterator;
    normalize(): Path;
    of(uRI: URI): Path;
    of(s: string, s: string): Path;
    register(watchService: WatchService, kind: Kind): WatchKey;
    register(watchService: WatchService, kind: Kind, modifier: Modifier): WatchKey;
    relativize(path: Path): Path;
    resolve(s: string): Path;
    resolve(path: Path): Path;
    resolveSibling(path: Path): Path;
    resolveSibling(s: string): Path;
    startsWith(s: string): boolean;
    startsWith(path: Path): boolean;
    subpath(i: number, i: number): Path;
    toAbsolutePath(): Path;
    toFile(): File;
    toRealPath(linkOption: LinkOption): Path;
    toString(): string;
    toUri(): URI;
}

//java.awt.geom.PathIterator
declare interface PathIterator {
    currentSegment(f: number): number;
    currentSegment(d: number): number;
    getWindingRule(): number;
    isDone(): boolean;
    next(): void;
    SEG_CLOSE: number;
    SEG_CUBICTO: number;
    SEG_LINETO: number;
    SEG_MOVETO: number;
    SEG_QUADTO: number;
    WIND_EVEN_ODD: number;
    WIND_NON_ZERO: number;
}

//java.nio.file.PathMatcher
declare interface PathMatcher {
    matches(path: Path): boolean;
}

//org.bukkit.block.banner.Pattern
declare interface Pattern extends ConfigurationSerializable {
    getColor(): DyeColor;
    getPattern(): PatternType;
    serialize(): Map;
}

//org.bukkit.entity.TropicalFish$Pattern
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

//java.util.regex.Pattern
declare interface Pattern extends Serializable {
    asMatchPredicate(): Predicate;
    asPredicate(): Predicate;
    compile(s: string): Pattern;
    compile(s: string, i: number): Pattern;
    flags(): number;
    matcher(s: string): Matcher;
    matches(s: string, s: string): boolean;
    pattern(): string;
    quote(s: string): string;
    split(s: string): string[];
    split(s: string, i: number): string[];
    splitAsStream(s: string): Stream;
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

//org.bukkit.block.banner.PatternType
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

//java.time.Period
declare interface Period extends ChronoPeriod, Serializable {
    addTo(temporal: Temporal): Temporal;
    between(localDate: LocalDate, localDate: LocalDate): Period;
    from(temporalAmount: TemporalAmount): Period;
    get(temporalUnit: TemporalUnit): number;
    getChronology(): IsoChronology;
    getChronology(): Chronology;
    getDays(): number;
    getMonths(): number;
    getUnits(): List;
    getYears(): number;
    isNegative(): boolean;
    isZero(): boolean;
    minus(temporalAmount: TemporalAmount): Period;
    minus(temporalAmount: TemporalAmount): ChronoPeriod;
    minusDays(l: number): Period;
    minusMonths(l: number): Period;
    minusYears(l: number): Period;
    multipliedBy(i: number): ChronoPeriod;
    multipliedBy(i: number): Period;
    negated(): Period;
    negated(): ChronoPeriod;
    normalized(): ChronoPeriod;
    normalized(): Period;
    of(i: number, i: number, i: number): Period;
    ofDays(i: number): Period;
    ofMonths(i: number): Period;
    ofWeeks(i: number): Period;
    ofYears(i: number): Period;
    parse(s: string): Period;
    plus(temporalAmount: TemporalAmount): ChronoPeriod;
    plus(temporalAmount: TemporalAmount): Period;
    plusDays(l: number): Period;
    plusMonths(l: number): Period;
    plusYears(l: number): Period;
    subtractFrom(temporal: Temporal): Temporal;
    toTotalMonths(): number;
    withDays(i: number): Period;
    withMonths(i: number): Period;
    withYears(i: number): Period;
    ZERO: Period;
}

//org.bukkit.util.noise.PerlinNoiseGenerator
declare interface PerlinNoiseGenerator extends NoiseGenerator {
    getInstance(): PerlinNoiseGenerator;
    getNoise(d: number): number;
    getNoise(d: number, d: number): number;
    getNoise(d: number, d: number, d: number): number;
    getNoise(d: number, i: number, d: number, d: number): number;
    getNoise(d: number, d: number, i: number, d: number, d: number): number;
    getNoise(d: number, d: number, d: number, i: number, d: number, d: number): number;
}

//org.bukkit.util.noise.PerlinOctaveGenerator
declare interface PerlinOctaveGenerator extends OctaveGenerator {
}

//org.bukkit.permissions.Permissible
declare interface Permissible extends ServerOperator {
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean, i: number): PermissionAttachment;
    getEffectivePermissions(): Set;
    hasPermission(permission: Permission): boolean;
    hasPermission(s: string): boolean;
    isPermissionSet(s: string): boolean;
    isPermissionSet(permission: Permission): boolean;
    recalculatePermissions(): void;
    removeAttachment(permissionAttachment: PermissionAttachment): void;
}

//org.bukkit.permissions.PermissibleBase
declare interface PermissibleBase extends Permissible {
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, i: number): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean): PermissionAttachment;
    addAttachment(plugin: Plugin, s: string, b: boolean, i: number): PermissionAttachment;
    clearPermissions(): void;
    getEffectivePermissions(): Set;
    hasPermission(permission: Permission): boolean;
    hasPermission(s: string): boolean;
    isOp(): boolean;
    isPermissionSet(s: string): boolean;
    isPermissionSet(permission: Permission): boolean;
    recalculatePermissions(): void;
    removeAttachment(permissionAttachment: PermissionAttachment): void;
    setOp(b: boolean): void;
}

//org.bukkit.permissions.Permission
declare interface Permission {
    addParent(s: string, b: boolean): Permission;
    addParent(permission: Permission, b: boolean): void;
    getChildren(): Map;
    getDefault(): PermissionDefault;
    getDescription(): string;
    getName(): string;
    getPermissibles(): Set;
    loadPermission(s: string, map: Map): Permission;
    loadPermission(s: string, map: Map, permissionDefault: PermissionDefault, list: List): Permission;
    loadPermissions(map: Map, s: string, permissionDefault: PermissionDefault): List;
    recalculatePermissibles(): void;
    setDefault(permissionDefault: PermissionDefault): void;
    setDescription(s: string): void;
    DEFAULT_PERMISSION: PermissionDefault;
}

//java.security.Permission
declare interface Permission extends Guard, Serializable {
    checkGuard(object: any): void;
    getActions(): string;
    getName(): string;
    implies(permission: Permission): boolean;
    newPermissionCollection(): PermissionCollection;
}

//org.bukkit.permissions.PermissionAttachment
declare interface PermissionAttachment {
    getPermissible(): Permissible;
    getPermissions(): Map;
    getPlugin(): Plugin;
    getRemovalCallback(): PermissionRemovedExecutor;
    remove(): boolean;
    setPermission(permission: Permission, b: boolean): void;
    setPermission(s: string, b: boolean): void;
    setRemovalCallback(permissionRemovedExecutor: PermissionRemovedExecutor): void;
    unsetPermission(permission: Permission): void;
    unsetPermission(s: string): void;
}

//org.bukkit.permissions.PermissionAttachmentInfo
declare interface PermissionAttachmentInfo {
    getAttachment(): PermissionAttachment;
    getPermissible(): Permissible;
    getPermission(): string;
    getValue(): boolean;
}

//java.security.PermissionCollection
declare interface PermissionCollection extends Serializable {
    add(permission: Permission): void;
    elements(): Enumeration;
    elementsAsStream(): Stream;
    implies(permission: Permission): boolean;
    isReadOnly(): boolean;
    setReadOnly(): void;
}

//org.bukkit.permissions.PermissionDefault
declare enum PermissionDefault {
    TRUE,
    FALSE,
    OP,
    NOT_OP,
}

//org.bukkit.permissions.PermissionRemovedExecutor
declare interface PermissionRemovedExecutor {
    attachmentRemoved(permissionAttachment: PermissionAttachment): void;
}

//org.bukkit.persistence.PersistentDataAdapterContext
declare interface PersistentDataAdapterContext {
    newPersistentDataContainer(): PersistentDataContainer;
}

//org.bukkit.persistence.PersistentDataContainer
declare interface PersistentDataContainer {
    get(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType): any;
    getAdapterContext(): PersistentDataAdapterContext;
    getKeys(): Set;
    getOrDefault(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType, object: any): any;
    has(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType): boolean;
    isEmpty(): boolean;
    remove(namespacedKey: NamespacedKey): void;
    set(namespacedKey: NamespacedKey, persistentDataType: PersistentDataType, object: any): void;
}

//org.bukkit.persistence.PersistentDataHolder
declare interface PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}

//org.bukkit.persistence.PersistentDataType
declare interface PersistentDataType {
    fromPrimitive(object: any, persistentDataAdapterContext: PersistentDataAdapterContext): any;
    getComplexType(): Class;
    getPrimitiveType(): Class;
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

//org.bukkit.entity.Phantom
declare interface Phantom extends Flying {
    getSize(): number;
    setSize(i: number): void;
}

//org.bukkit.entity.EnderDragon$Phase
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

//org.bukkit.block.data.type.SculkSensor$Phase
declare enum Phase {
    INACTIVE,
    ACTIVE,
    COOLDOWN,
}

//org.bukkit.entity.AbstractArrow$PickupStatus
declare enum PickupStatus {
    DISALLOWED,
    ALLOWED,
    CREATIVE_ONLY,
}

//org.bukkit.entity.Pig
declare interface Pig extends Steerable, Vehicle {
}

//org.bukkit.event.entity.PigZapEvent
declare interface PigZapEvent extends EntityTransformEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Pig;
    getLightning(): LightningStrike;
    getPigZombie(): PigZombie;
}

//org.bukkit.entity.PigZombie
declare interface PigZombie extends Zombie {
    getAnger(): number;
    getConversionTime(): number;
    isAngry(): boolean;
    isConverting(): boolean;
    setAnger(i: number): void;
    setAngry(b: boolean): void;
    setConversionTime(i: number): void;
}

//org.bukkit.event.entity.PigZombieAngerEvent
declare interface PigZombieAngerEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewAnger(): number;
    getTarget(): Entity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setNewAnger(i: number): void;
}

//org.bukkit.entity.Piglin
declare interface Piglin extends PiglinAbstract, InventoryHolder {
    addBarterMaterial(material: Material): boolean;
    addMaterialOfInterest(material: Material): boolean;
    getBarterList(): Set;
    getInterestList(): Set;
    isAbleToHunt(): boolean;
    removeBarterMaterial(material: Material): boolean;
    removeMaterialOfInterest(material: Material): boolean;
    setIsAbleToHunt(b: boolean): void;
}

//org.bukkit.entity.PiglinAbstract
declare interface PiglinAbstract extends Monster, Ageable {
    getConversionTime(): number;
    isBaby(): boolean;
    isConverting(): boolean;
    isImmuneToZombification(): boolean;
    setBaby(b: boolean): void;
    setConversionTime(i: number): void;
    setImmuneToZombification(b: boolean): void;
}

//org.bukkit.event.entity.PiglinBarterEvent
declare interface PiglinBarterEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getInput(): ItemStack;
    getOutcome(): List;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.entity.PiglinBrute
declare interface PiglinBrute extends PiglinAbstract {
}

//org.bukkit.entity.Pillager
declare interface Pillager extends Illager, InventoryHolder {
}

//java.nio.channels.Pipe
declare interface Pipe {
    open(): Pipe;
    sink(): SinkChannel;
    source(): SourceChannel;
}

//org.bukkit.block.data.type.Piston
declare interface Piston extends Directional {
    isExtended(): boolean;
    setExtended(b: boolean): void;
}

//org.bukkit.material.PistonBaseMaterial
declare interface PistonBaseMaterial extends MaterialData, Directional, Redstone {
    getFacing(): BlockFace;
    isPowered(): boolean;
    isSticky(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setPowered(b: boolean): void;
}

//org.bukkit.material.PistonExtensionMaterial
declare interface PistonExtensionMaterial extends MaterialData, Attachable {
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    isSticky(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setSticky(b: boolean): void;
}

//org.bukkit.block.data.type.PistonHead
declare interface PistonHead extends TechnicalPiston {
    isShort(): boolean;
    setShort(b: boolean): void;
}

//org.bukkit.block.PistonMoveReaction
declare enum PistonMoveReaction {
    MOVE,
    BREAK,
    BLOCK,
    IGNORE,
    PUSH_ONLY,
}

//org.bukkit.entity.Player
declare interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
    breakBlock(block: Block): boolean;
    canSee(entity: Entity): boolean;
    canSee(player: Player): boolean;
    chat(s: string): void;
    getAddress(): InetSocketAddress;
    getAdvancementProgress(advancement: Advancement): AdvancementProgress;
    getAllowFlight(): boolean;
    getBedSpawnLocation(): Location;
    getClientViewDistance(): number;
    getCompassTarget(): Location;
    getDisplayName(): string;
    getExp(): number;
    getFlySpeed(): number;
    getHealthScale(): number;
    getLevel(): number;
    getLocale(): string;
    getPing(): number;
    getPlayerListFooter(): string;
    getPlayerListHeader(): string;
    getPlayerListName(): string;
    getPlayerTime(): number;
    getPlayerTimeOffset(): number;
    getPlayerWeather(): WeatherType;
    getPreviousGameMode(): GameMode;
    getScoreboard(): Scoreboard;
    getSpectatorTarget(): Entity;
    getTotalExperience(): number;
    getWalkSpeed(): number;
    getWorldBorder(): WorldBorder;
    giveExp(i: number): void;
    giveExpLevels(i: number): void;
    hideEntity(plugin: Plugin, entity: Entity): void;
    hidePlayer(player: Player): void;
    hidePlayer(plugin: Plugin, player: Player): void;
    isAllowingServerListings(): boolean;
    isFlying(): boolean;
    isHealthScaled(): boolean;
    isOnGround(): boolean;
    isPlayerTimeRelative(): boolean;
    isSleepingIgnored(): boolean;
    isSneaking(): boolean;
    isSprinting(): boolean;
    kickPlayer(s: string): void;
    loadData(): void;
    openBook(itemStack: ItemStack): void;
    openSign(sign: Sign): void;
    performCommand(s: string): boolean;
    playEffect(location: Location, effect: Effect, i: number): void;
    playEffect(location: Location, effect: Effect, object: any): void;
    playNote(location: Location, instrument: Instrument, note: Note): void;
    playNote(location: Location, b: number, b: number): void;
    playSound(entity: Entity, sound: Sound, f: number, f: number): void;
    playSound(location: Location, s: string, f: number, f: number): void;
    playSound(location: Location, sound: Sound, f: number, f: number): void;
    playSound(location: Location, s: string, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(entity: Entity, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(location: Location, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    resetPlayerTime(): void;
    resetPlayerWeather(): void;
    resetTitle(): void;
    saveData(): void;
    sendBlockChange(location: Location, blockData: BlockData): void;
    sendBlockChange(location: Location, material: Material, b: number): void;
    sendBlockDamage(location: Location, f: number): void;
    sendEquipmentChange(livingEntity: LivingEntity, equipmentSlot: EquipmentSlot, itemStack: ItemStack): void;
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
    setResourcePack(s: string, b: number, b: boolean): void;
    setResourcePack(s: string, b: number, s: string): void;
    setResourcePack(s: string, b: number, s: string, b: boolean): void;
    setScoreboard(scoreboard: Scoreboard): void;
    setSleepingIgnored(b: boolean): void;
    setSneaking(b: boolean): void;
    setSpectatorTarget(entity: Entity): void;
    setSprinting(b: boolean): void;
    setTexturePack(s: string): void;
    setTotalExperience(i: number): void;
    setWalkSpeed(f: number): void;
    setWorldBorder(worldBorder: WorldBorder): void;
    showDemoScreen(): void;
    showEntity(plugin: Plugin, entity: Entity): void;
    showPlayer(player: Player): void;
    showPlayer(plugin: Plugin, player: Player): void;
    spawnParticle(particle: Particle, location: Location, i: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spigot(): Spigot;
    spigot(): Spigot;
    spigot(): Spigot;
    stopAllSounds(): void;
    stopSound(s: string): void;
    stopSound(sound: Sound): void;
    stopSound(s: string, soundCategory: SoundCategory): void;
    stopSound(sound: Sound, soundCategory: SoundCategory): void;
    updateCommands(): void;
    updateInventory(): void;
}

//org.bukkit.event.player.PlayerAdvancementDoneEvent
declare interface PlayerAdvancementDoneEvent extends PlayerEvent {
    getAdvancement(): Advancement;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerAnimationEvent
declare interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
    getAnimationType(): PlayerAnimationType;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerAnimationType
declare enum PlayerAnimationType {
    ARM_SWING,
    OFF_ARM_SWING,
}

//org.bukkit.event.player.PlayerArmorStandManipulateEvent
declare interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
    getArmorStandItem(): ItemStack;
    getPlayerItem(): ItemStack;
    getSlot(): EquipmentSlot;
}

//org.bukkit.event.player.PlayerBedEnterEvent
declare interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
    getBed(): Block;
    getBedEnterResult(): BedEnterResult;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setUseBed(result: Result): void;
    useBed(): Result;
}

//org.bukkit.event.player.PlayerBedLeaveEvent
declare interface PlayerBedLeaveEvent extends PlayerEvent, Cancellable {
    getBed(): Block;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setSpawnLocation(b: boolean): void;
    shouldSetSpawnLocation(): boolean;
}

//org.bukkit.event.player.PlayerBucketEmptyEvent
declare interface PlayerBucketEmptyEvent extends PlayerBucketEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerBucketEntityEvent
declare interface PlayerBucketEntityEvent extends PlayerEvent, Cancellable {
    getEntity(): Entity;
    getEntityBucket(): ItemStack;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getOriginalBucket(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerBucketEvent
declare interface PlayerBucketEvent extends PlayerEvent, Cancellable {
    getBlock(): Block;
    getBlockClicked(): Block;
    getBlockFace(): BlockFace;
    getBucket(): Material;
    getItemStack(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setItemStack(itemStack: ItemStack): void;
}

//org.bukkit.event.player.PlayerBucketFillEvent
declare interface PlayerBucketFillEvent extends PlayerBucketEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerBucketFishEvent
declare interface PlayerBucketFishEvent extends PlayerBucketEntityEvent {
    getFishBucket(): ItemStack;
    getWaterBucket(): ItemStack;
}

//org.bukkit.event.player.PlayerChangedMainHandEvent
declare interface PlayerChangedMainHandEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMainHand(): MainHand;
}

//org.bukkit.event.player.PlayerChangedWorldEvent
declare interface PlayerChangedWorldEvent extends PlayerEvent {
    getFrom(): World;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerChannelEvent
declare interface PlayerChannelEvent extends PlayerEvent {
    getChannel(): string;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerChatEvent
declare interface PlayerChatEvent extends PlayerEvent, Cancellable {
    getFormat(): string;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMessage(): string;
    getRecipients(): Set;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setFormat(s: string): void;
    setMessage(s: string): void;
    setPlayer(player: Player): void;
}

//org.bukkit.event.player.PlayerChatTabCompleteEvent
declare interface PlayerChatTabCompleteEvent extends PlayerEvent {
    getChatMessage(): string;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLastToken(): string;
    getTabCompletions(): Collection;
}

//org.bukkit.event.player.PlayerCommandPreprocessEvent
declare interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMessage(): string;
    getRecipients(): Set;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setMessage(s: string): void;
    setPlayer(player: Player): void;
}

//org.bukkit.event.player.PlayerCommandSendEvent
declare interface PlayerCommandSendEvent extends PlayerEvent {
    getCommands(): Collection;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.entity.PlayerDeathEvent
declare interface PlayerDeathEvent extends EntityDeathEvent {
    getDeathMessage(): string;
    getKeepInventory(): boolean;
    getKeepLevel(): boolean;
    getNewExp(): number;
    getNewLevel(): number;
    getNewTotalExp(): number;
    setDeathMessage(s: string): void;
    setKeepInventory(b: boolean): void;
    setKeepLevel(b: boolean): void;
    setNewExp(i: number): void;
    setNewLevel(i: number): void;
    setNewTotalExp(i: number): void;
}

//org.bukkit.event.player.PlayerDropItemEvent
declare interface PlayerDropItemEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItemDrop(): Item;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerEditBookEvent
declare interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewBookMeta(): BookMeta;
    getPreviousBookMeta(): BookMeta;
    getSlot(): number;
    isCancelled(): boolean;
    isSigning(): boolean;
    setCancelled(b: boolean): void;
    setNewBookMeta(bookMeta: BookMeta): void;
    setSigning(b: boolean): void;
}

//org.bukkit.event.player.PlayerEggThrowEvent
declare interface PlayerEggThrowEvent extends PlayerEvent {
    getEgg(): Egg;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getHatchingType(): EntityType;
    getNumHatches(): number;
    isHatching(): boolean;
    setHatching(b: boolean): void;
    setHatchingType(entityType: EntityType): void;
    setNumHatches(b: number): void;
}

//org.bukkit.event.player.PlayerEvent
declare interface PlayerEvent extends Event {
    getPlayer(): Player;
}

//org.bukkit.event.player.PlayerExpChangeEvent
declare interface PlayerExpChangeEvent extends PlayerEvent {
    getAmount(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    setAmount(i: number): void;
}

//org.bukkit.event.player.PlayerFishEvent
declare interface PlayerFishEvent extends PlayerEvent, Cancellable {
    getCaught(): Entity;
    getExpToDrop(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getHook(): FishHook;
    getState(): State;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setExpToDrop(i: number): void;
}

//org.bukkit.event.player.PlayerGameModeChangeEvent
declare interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewGameMode(): GameMode;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerHarvestBlockEvent
declare interface PlayerHarvestBlockEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getHarvestedBlock(): Block;
    getItemsHarvested(): List;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerHideEntityEvent
declare interface PlayerHideEntityEvent extends PlayerEvent {
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerInteractAtEntityEvent
declare interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
    getClickedPosition(): Vector;
}

//org.bukkit.event.player.PlayerInteractEntityEvent
declare interface PlayerInteractEntityEvent extends PlayerEvent, Cancellable {
    getHand(): EquipmentSlot;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRightClicked(): Entity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerInteractEvent
declare interface PlayerInteractEvent extends PlayerEvent, Cancellable {
    getAction(): Action;
    getBlockFace(): BlockFace;
    getClickedBlock(): Block;
    getHand(): EquipmentSlot;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getMaterial(): Material;
    hasBlock(): boolean;
    hasItem(): boolean;
    isBlockInHand(): boolean;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setUseInteractedBlock(result: Result): void;
    setUseItemInHand(result: Result): void;
    useInteractedBlock(): Result;
    useItemInHand(): Result;
}

//org.bukkit.inventory.PlayerInventory
declare interface PlayerInventory extends Inventory {
    getArmorContents(): ItemStack[];
    getBoots(): ItemStack;
    getChestplate(): ItemStack;
    getExtraContents(): ItemStack[];
    getHeldItemSlot(): number;
    getHelmet(): ItemStack;
    getHolder(): HumanEntity;
    getHolder(): InventoryHolder;
    getItem(equipmentSlot: EquipmentSlot): ItemStack;
    getItemInHand(): ItemStack;
    getItemInMainHand(): ItemStack;
    getItemInOffHand(): ItemStack;
    getLeggings(): ItemStack;
    setArmorContents(itemStack: ItemStack): void;
    setBoots(itemStack: ItemStack): void;
    setChestplate(itemStack: ItemStack): void;
    setExtraContents(itemStack: ItemStack): void;
    setHeldItemSlot(i: number): void;
    setHelmet(itemStack: ItemStack): void;
    setItem(equipmentSlot: EquipmentSlot, itemStack: ItemStack): void;
    setItem(i: number, itemStack: ItemStack): void;
    setItemInHand(itemStack: ItemStack): void;
    setItemInMainHand(itemStack: ItemStack): void;
    setItemInOffHand(itemStack: ItemStack): void;
    setLeggings(itemStack: ItemStack): void;
}

//org.bukkit.event.player.PlayerItemBreakEvent
declare interface PlayerItemBreakEvent extends PlayerEvent {
    getBrokenItem(): ItemStack;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerItemConsumeEvent
declare interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setItem(itemStack: ItemStack): void;
}

//org.bukkit.event.player.PlayerItemDamageEvent
declare interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
    getDamage(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setDamage(i: number): void;
}

//org.bukkit.event.player.PlayerItemHeldEvent
declare interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewSlot(): number;
    getPreviousSlot(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerItemMendEvent
declare interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
    getExperienceOrb(): ExperienceOrb;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getRepairAmount(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setRepairAmount(i: number): void;
}

//org.bukkit.event.player.PlayerJoinEvent
declare interface PlayerJoinEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getJoinMessage(): string;
    setJoinMessage(s: string): void;
}

//org.bukkit.event.player.PlayerKickEvent
declare interface PlayerKickEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLeaveMessage(): string;
    getReason(): string;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setLeaveMessage(s: string): void;
    setReason(s: string): void;
}

//org.bukkit.event.entity.PlayerLeashEntityEvent
declare interface PlayerLeashEntityEvent extends Event, Cancellable {
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getLeashHolder(): Entity;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerLevelChangeEvent
declare interface PlayerLevelChangeEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getNewLevel(): number;
    getOldLevel(): number;
}

//org.bukkit.event.player.PlayerLocaleChangeEvent
declare interface PlayerLocaleChangeEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLocale(): string;
}

//org.bukkit.event.player.PlayerLoginEvent
declare interface PlayerLoginEvent extends PlayerEvent {
    allow(): void;
    disallow(result: Result, s: string): void;
    getAddress(): InetAddress;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getHostname(): string;
    getKickMessage(): string;
    getRealAddress(): InetAddress;
    getResult(): Result;
    setKickMessage(s: string): void;
    setResult(result: Result): void;
}

//org.bukkit.event.player.PlayerMoveEvent
declare interface PlayerMoveEvent extends PlayerEvent, Cancellable {
    getFrom(): Location;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getTo(): Location;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setFrom(location: Location): void;
    setTo(location: Location): void;
}

//org.bukkit.conversations.PlayerNamePrompt
declare interface PlayerNamePrompt extends ValidatingPrompt {
}

//org.bukkit.event.player.PlayerPickupArrowEvent
declare interface PlayerPickupArrowEvent extends PlayerPickupItemEvent {
    getArrow(): AbstractArrow;
}

//org.bukkit.event.player.PlayerPickupItemEvent
declare interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): Item;
    getRemaining(): number;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerPortalEvent
declare interface PlayerPortalEvent extends PlayerTeleportEvent {
    getCanCreatePortal(): boolean;
    getCreationRadius(): number;
    getSearchRadius(): number;
    setCanCreatePortal(b: boolean): void;
    setCreationRadius(i: number): void;
    setSearchRadius(i: number): void;
}

//org.bukkit.event.player.PlayerPreLoginEvent
declare interface PlayerPreLoginEvent extends Event {
    allow(): void;
    disallow(result: Result, s: string): void;
    getAddress(): InetAddress;
    getHandlerList(): HandlerList;
    getKickMessage(): string;
    getName(): string;
    getResult(): Result;
    getUniqueId(): UUID;
    setKickMessage(s: string): void;
    setResult(result: Result): void;
}

//org.bukkit.profile.PlayerProfile
declare interface PlayerProfile extends Cloneable, ConfigurationSerializable {
    clone(): PlayerProfile;
    clone(): any;
    getName(): string;
    getTextures(): PlayerTextures;
    getUniqueId(): UUID;
    isComplete(): boolean;
    setTextures(playerTextures: PlayerTextures): void;
    update(): CompletableFuture;
}

//org.bukkit.event.player.PlayerQuitEvent
declare interface PlayerQuitEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getQuitMessage(): string;
    setQuitMessage(s: string): void;
}

//org.bukkit.event.player.PlayerRecipeDiscoverEvent
declare interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRecipe(): NamespacedKey;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerRegisterChannelEvent
declare interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
}

//org.bukkit.event.player.PlayerResourcePackStatusEvent
declare interface PlayerResourcePackStatusEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getStatus(): Status;
}

//org.bukkit.event.player.PlayerRespawnEvent
declare interface PlayerRespawnEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRespawnLocation(): Location;
    isAnchorSpawn(): boolean;
    isBedSpawn(): boolean;
    setRespawnLocation(location: Location): void;
}

//org.bukkit.event.player.PlayerRiptideEvent
declare interface PlayerRiptideEvent extends PlayerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
}

//org.bukkit.event.player.PlayerShearEntityEvent
declare interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
    getEntity(): Entity;
    getHand(): EquipmentSlot;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerShowEntityEvent
declare interface PlayerShowEntityEvent extends PlayerEvent {
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.player.PlayerStatisticIncrementEvent
declare interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
    getEntityType(): EntityType;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMaterial(): Material;
    getNewValue(): number;
    getPreviousValue(): number;
    getStatistic(): Statistic;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerSwapHandItemsEvent
declare interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMainHandItem(): ItemStack;
    getOffHandItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setMainHandItem(itemStack: ItemStack): void;
    setOffHandItem(itemStack: ItemStack): void;
}

//org.bukkit.event.player.PlayerTakeLecternBookEvent
declare interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
    getBook(): ItemStack;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLectern(): Lectern;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerTeleportEvent
declare interface PlayerTeleportEvent extends PlayerMoveEvent {
    getCause(): TeleportCause;
}

//org.bukkit.profile.PlayerTextures
declare interface PlayerTextures {
    clear(): void;
    getCape(): URL;
    getSkin(): URL;
    getSkinModel(): SkinModel;
    getTimestamp(): number;
    isEmpty(): boolean;
    isSigned(): boolean;
    setCape(uRL: URL): void;
    setSkin(uRL: URL): void;
    setSkin(uRL: URL, skinModel: SkinModel): void;
}

//org.bukkit.event.player.PlayerToggleFlightEvent
declare interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isFlying(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerToggleSneakEvent
declare interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isSneaking(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerToggleSprintEvent
declare interface PlayerToggleSprintEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isSprinting(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerUnleashEntityEvent
declare interface PlayerUnleashEntityEvent extends EntityUnleashEvent, Cancellable {
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.player.PlayerUnregisterChannelEvent
declare interface PlayerUnregisterChannelEvent extends PlayerChannelEvent {
}

//org.bukkit.event.player.PlayerVelocityEvent
declare interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getVelocity(): Vector;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setVelocity(vector: Vector): void;
}

//org.bukkit.plugin.Plugin
declare interface Plugin extends TabExecutor {
    getConfig(): FileConfiguration;
    getDataFolder(): File;
    getDefaultBiomeProvider(s: string, s: string): BiomeProvider;
    getDefaultWorldGenerator(s: string, s: string): ChunkGenerator;
    getDescription(): PluginDescriptionFile;
    getLogger(): Logger;
    getName(): string;
    getPluginLoader(): PluginLoader;
    getResource(s: string): InputStream;
    getServer(): Server;
    isEnabled(): boolean;
    isNaggable(): boolean;
    onDisable(): void;
    onEnable(): void;
    onLoad(): void;
    reloadConfig(): void;
    saveConfig(): void;
    saveDefaultConfig(): void;
    saveResource(s: string, b: boolean): void;
    setNaggable(b: boolean): void;
}

//org.bukkit.plugin.PluginAwareness
declare interface PluginAwareness {
}

//org.bukkit.plugin.PluginBase
declare interface PluginBase extends Plugin {
    getName(): string;
}

//org.bukkit.plugin.messaging.PluginChannelDirection
declare enum PluginChannelDirection {
    INCOMING,
    OUTGOING,
}

//org.bukkit.plugin.java.PluginClassLoader
declare interface PluginClassLoader extends URLClassLoader {
    getResource(s: string): URL;
    getResources(s: string): Enumeration;
}

//org.bukkit.command.PluginCommand
declare interface PluginCommand extends Command, PluginIdentifiableCommand {
    getExecutor(): CommandExecutor;
    getPlugin(): Plugin;
    getTabCompleter(): TabCompleter;
    setExecutor(commandExecutor: CommandExecutor): void;
    setTabCompleter(tabCompleter: TabCompleter): void;
}

//org.bukkit.command.PluginCommandYamlParser
declare interface PluginCommandYamlParser {
    parse(plugin: Plugin): List;
}

//org.bukkit.plugin.PluginDescriptionFile
declare interface PluginDescriptionFile {
    getAPIVersion(): string;
    getAuthors(): List;
    getAwareness(): Set;
    getClassLoaderOf(): string;
    getCommands(): Map;
    getContributors(): List;
    getDepend(): List;
    getDescription(): string;
    getFullName(): string;
    getLibraries(): List;
    getLoad(): PluginLoadOrder;
    getLoadBefore(): List;
    getMain(): string;
    getName(): string;
    getPermissionDefault(): PermissionDefault;
    getPermissions(): List;
    getPrefix(): string;
    getProvides(): List;
    getRawName(): string;
    getSoftDepend(): List;
    getVersion(): string;
    getWebsite(): string;
    save(writer: Writer): void;
}

//org.bukkit.event.server.PluginDisableEvent
declare interface PluginDisableEvent extends PluginEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.server.PluginEnableEvent
declare interface PluginEnableEvent extends PluginEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.server.PluginEvent
declare interface PluginEvent extends ServerEvent {
    getPlugin(): Plugin;
}

//org.bukkit.command.PluginIdentifiableCommand
declare interface PluginIdentifiableCommand {
    getPlugin(): Plugin;
}

//org.bukkit.plugin.PluginLoadOrder
declare enum PluginLoadOrder {
    STARTUP,
    POSTWORLD,
}

//org.bukkit.plugin.PluginLoader
declare interface PluginLoader {
    createRegisteredListeners(listener: Listener, plugin: Plugin): Map;
    disablePlugin(plugin: Plugin): void;
    enablePlugin(plugin: Plugin): void;
    getPluginDescription(file: File): PluginDescriptionFile;
    getPluginFileFilters(): Pattern[];
    loadPlugin(file: File): Plugin;
}

//org.bukkit.plugin.PluginLogger
declare interface PluginLogger extends Logger {
}

//org.bukkit.plugin.PluginManager
declare interface PluginManager {
    addPermission(permission: Permission): void;
    callEvent(event: Event): void;
    clearPlugins(): void;
    disablePlugin(plugin: Plugin): void;
    disablePlugins(): void;
    enablePlugin(plugin: Plugin): void;
    getDefaultPermSubscriptions(b: boolean): Set;
    getDefaultPermissions(b: boolean): Set;
    getPermission(s: string): Permission;
    getPermissionSubscriptions(s: string): Set;
    getPermissions(): Set;
    getPlugin(s: string): Plugin;
    getPlugins(): Plugin[];
    isPluginEnabled(s: string): boolean;
    isPluginEnabled(plugin: Plugin): boolean;
    loadPlugin(file: File): Plugin;
    loadPlugins(file: File): Plugin[];
    recalculatePermissionDefaults(permission: Permission): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin): void;
    registerEvent(clazz: Class, listener: Listener, eventPriority: EventPriority, eventExecutor: EventExecutor, plugin: Plugin, b: boolean): void;
    registerEvents(listener: Listener, plugin: Plugin): void;
    registerInterface(clazz: Class): void;
    removePermission(permission: Permission): void;
    removePermission(s: string): void;
    subscribeToDefaultPerms(b: boolean, permissible: Permissible): void;
    subscribeToPermission(s: string, permissible: Permissible): void;
    unsubscribeFromDefaultPerms(b: boolean, permissible: Permissible): void;
    unsubscribeFromPermission(s: string, permissible: Permissible): void;
    useTimings(): boolean;
}

//org.bukkit.plugin.messaging.PluginMessageListener
declare interface PluginMessageListener {
    onPluginMessageReceived(s: string, player: Player, b: number): void;
}

//org.bukkit.plugin.messaging.PluginMessageListenerRegistration
declare interface PluginMessageListenerRegistration {
    getChannel(): string;
    getListener(): PluginMessageListener;
    getPlugin(): Plugin;
    isValid(): boolean;
}

//org.bukkit.plugin.messaging.PluginMessageRecipient
declare interface PluginMessageRecipient {
    getListeningPluginChannels(): Set;
    sendPluginMessage(plugin: Plugin, s: string, b: number): void;
}

//org.bukkit.conversations.PluginNameConversationPrefix
declare interface PluginNameConversationPrefix extends ConversationPrefix {
    getPrefix(conversationContext: ConversationContext): string;
}

//org.bukkit.command.defaults.PluginsCommand
declare interface PluginsCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

//java.awt.Point
declare interface Point extends Point2D, Serializable {
    getLocation(): Point;
    move(i: number, i: number): void;
    setLocation(point: Point): void;
    setLocation(i: number, i: number): void;
    toString(): string;
    translate(i: number, i: number): void;
    x: number;
    y: number;
}

//java.awt.geom.Point2D
declare interface Point2D extends Cloneable {
    distance(point2D: Point2D): number;
    distance(d: number, d: number): number;
    distance(d: number, d: number, d: number, d: number): number;
    distanceSq(point2D: Point2D): number;
    distanceSq(d: number, d: number): number;
    distanceSq(d: number, d: number, d: number, d: number): number;
    getX(): number;
    getY(): number;
    setLocation(point2D: Point2D): void;
    setLocation(d: number, d: number): void;
}

//org.bukkit.block.data.type.PointedDripstone
declare interface PointedDripstone extends Waterlogged {
    getThickness(): Thickness;
    getVerticalDirection(): BlockFace;
    getVerticalDirections(): Set;
    setThickness(thickness: Thickness): void;
    setVerticalDirection(blockFace: BlockFace): void;
}

//org.bukkit.entity.PolarBear
declare interface PolarBear extends Animals {
}

//eu.okaeri.poly.api.Poly
declare interface Poly {
    getDefaultBindings(scriptHelper: ScriptHelper): Map;
    getScriptManager(): ScriptManager;
}

//java.awt.Polygon
declare interface Polygon extends Shape, Serializable {
    addPoint(i: number, i: number): void;
    contains(point: Point): boolean;
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    contains(i: number, i: number): boolean;
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    getBoundingBox(): Rectangle;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    inside(i: number, i: number): boolean;
    intersects(rectangle2D: Rectangle2D): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
    invalidate(): void;
    reset(): void;
    translate(i: number, i: number): void;
    npoints: number;
    xpoints: number[];
    ypoints: number[];
}

//java.awt.PopupMenu
declare interface PopupMenu extends Menu {
    getParent(): MenuContainer;
    show(component: Component, i: number, i: number): void;
}

//org.bukkit.event.world.PortalCreateEvent
declare interface PortalCreateEvent extends WorldEvent, Cancellable {
    getBlocks(): List;
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getReason(): CreateReason;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.PortalType
declare enum PortalType {
    NETHER,
    ENDER,
    CUSTOM,
}

//org.bukkit.entity.Pose
declare enum Pose {
    STANDING,
    FALL_FLYING,
    SLEEPING,
    SWIMMING,
    SPIN_ATTACK,
    SNEAKING,
    LONG_JUMPING,
    DYING,
    CROAKING,
    USING_TONGUE,
    ROARING,
    SNIFFING,
    EMERGING,
    DIGGING,
}

//org.bukkit.potion.Potion
declare interface Potion {
    apply(itemStack: ItemStack): void;
    apply(livingEntity: LivingEntity): void;
    extend(): Potion;
    fromDamage(i: number): Potion;
    fromItemStack(itemStack: ItemStack): Potion;
    getBrewer(): PotionBrewer;
    getEffects(): Collection;
    getLevel(): number;
    getNameId(): number;
    getType(): PotionType;
    hasExtendedDuration(): boolean;
    isSplash(): boolean;
    setHasExtendedDuration(b: boolean): void;
    setLevel(i: number): void;
    setPotionBrewer(potionBrewer: PotionBrewer): void;
    setSplash(b: boolean): void;
    setType(potionType: PotionType): void;
    splash(): Potion;
    toDamageValue(): number;
    toItemStack(i: number): ItemStack;
}

//org.bukkit.potion.PotionBrewer
declare interface PotionBrewer {
    createEffect(potionEffectType: PotionEffectType, i: number, i: number): PotionEffect;
    getEffects(potionType: PotionType, b: boolean, b: boolean): Collection;
    getEffectsFromDamage(i: number): Collection;
}

//org.bukkit.potion.PotionData
declare interface PotionData {
    getType(): PotionType;
    isExtended(): boolean;
    isUpgraded(): boolean;
}

//org.bukkit.potion.PotionEffect
declare interface PotionEffect extends ConfigurationSerializable {
    apply(livingEntity: LivingEntity): boolean;
    getAmplifier(): number;
    getColor(): Color;
    getDuration(): number;
    getType(): PotionEffectType;
    hasIcon(): boolean;
    hasParticles(): boolean;
    isAmbient(): boolean;
    serialize(): Map;
}

//org.bukkit.potion.PotionEffectType
declare interface PotionEffectType extends Keyed {
    createEffect(i: number, i: number): PotionEffect;
    getById(i: number): PotionEffectType;
    getByKey(namespacedKey: NamespacedKey): PotionEffectType;
    getByName(s: string): PotionEffectType;
    getColor(): Color;
    getDurationModifier(): number;
    getId(): number;
    getKey(): NamespacedKey;
    getName(): string;
    isInstant(): boolean;
    registerPotionEffectType(potionEffectType: PotionEffectType): void;
    stopAcceptingRegistrations(): void;
    values(): PotionEffectType[];
    ABSORPTION: PotionEffectType;
    BAD_OMEN: PotionEffectType;
    BLINDNESS: PotionEffectType;
    CONDUIT_POWER: PotionEffectType;
    CONFUSION: PotionEffectType;
    DAMAGE_RESISTANCE: PotionEffectType;
    DARKNESS: PotionEffectType;
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

//org.bukkit.potion.PotionEffectTypeWrapper
declare interface PotionEffectTypeWrapper extends PotionEffectType {
    getType(): PotionEffectType;
}

//org.bukkit.inventory.meta.PotionMeta
declare interface PotionMeta extends ItemMeta {
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    clearCustomEffects(): boolean;
    clone(): ItemMeta;
    clone(): PotionMeta;
    clone(): any;
    getBasePotionData(): PotionData;
    getColor(): Color;
    getCustomEffects(): List;
    hasColor(): boolean;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
    setBasePotionData(potionData: PotionData): void;
    setColor(color: Color): void;
    setMainEffect(potionEffectType: PotionEffectType): boolean;
}

//org.bukkit.event.entity.PotionSplashEvent
declare interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getAffectedEntities(): Collection;
    getIntensity(livingEntity: LivingEntity): number;
    getPotion(): ThrownPotion;
    setIntensity(livingEntity: LivingEntity, d: number): void;
}

//org.bukkit.potion.PotionType
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

//org.bukkit.event.entity.CreeperPowerEvent$PowerCause
declare enum PowerCause {
    LIGHTNING,
    SET_ON,
    SET_OFF,
}

//org.bukkit.block.data.Powerable
declare interface Powerable extends BlockData {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

//org.bukkit.entity.minecart.PoweredMinecart
declare interface PoweredMinecart extends Minecart {
    getFuel(): number;
    setFuel(i: number): void;
}

//org.bukkit.material.PoweredRail
declare interface PoweredRail extends ExtendedRails, Redstone {
    isPowered(): boolean;
    setPowered(b: boolean): void;
}

//java.util.function.Predicate
declare interface Predicate {
    and(predicate: Predicate): Predicate;
    isEqual(object: any): Predicate;
    negate(): Predicate;
    not(predicate: Predicate): Predicate;
    or(predicate: Predicate): Predicate;
    test(object: any): boolean;
}

//org.bukkit.event.inventory.PrepareAnvilEvent
declare interface PrepareAnvilEvent extends InventoryEvent {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
}

//org.bukkit.event.inventory.PrepareItemCraftEvent
declare interface PrepareItemCraftEvent extends InventoryEvent {
    getRecipe(): Recipe;
    isRepair(): boolean;
}

//org.bukkit.event.enchantment.PrepareItemEnchantEvent
declare interface PrepareItemEnchantEvent extends InventoryEvent, Cancellable {
    getEnchantBlock(): Block;
    getEnchanter(): Player;
    getEnchantmentBonus(): number;
    getExpLevelCostsOffered(): number[];
    getItem(): ItemStack;
    getOffers(): EnchantmentOffer[];
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.inventory.PrepareSmithingEvent
declare interface PrepareSmithingEvent extends InventoryEvent {
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
}

//org.bukkit.material.PressurePlate
declare interface PressurePlate extends MaterialData, PressureSensor {
    isPressed(): boolean;
}

//org.bukkit.material.PressureSensor
declare interface PressureSensor {
    isPressed(): boolean;
}

//java.util.PrimitiveIterator
declare interface PrimitiveIterator extends Iterator {
    forEachRemaining(object: any): void;
}

//java.security.Principal
declare interface Principal {
    equals(object: any): boolean;
    getName(): string;
    hashCode(): number;
    implies(subject: Subject): boolean;
    toString(): string;
}

//java.awt.PrintJob
declare interface PrintJob {
    end(): void;
    getGraphics(): Graphics;
    getPageDimension(): Dimension;
    getPageResolution(): number;
    lastPageFirst(): boolean;
}

//java.awt.PageAttributes$PrintQualityType
declare interface PrintQualityType extends AttributeValue {
    DRAFT: PrintQualityType;
    HIGH: PrintQualityType;
    NORMAL: PrintQualityType;
}

//java.io.PrintStream
declare interface PrintStream extends FilterOutputStream, Appendable, Closeable {
    append(s: string): Appendable;
    append(c: string): Appendable;
    append(s: string): PrintStream;
    append(c: string): PrintStream;
    append(s: string, i: number, i: number): Appendable;
    append(s: string, i: number, i: number): PrintStream;
    checkError(): boolean;
    format(s: string, object: any): PrintStream;
    format(locale: Locale, s: string, object: any): PrintStream;
    print(b: boolean): void;
    print(s: string): void;
    print(c: string): void;
    print(l: number): void;
    print(d: number): void;
    print(f: number): void;
    print(c: string): void;
    print(i: number): void;
    print(object: any): void;
    printf(s: string, object: any): PrintStream;
    printf(locale: Locale, s: string, object: any): PrintStream;
    println(): void;
    println(s: string): void;
    println(object: any): void;
    println(f: number): void;
    println(d: number): void;
    println(c: string): void;
    println(b: boolean): void;
    println(c: string): void;
    println(i: number): void;
    println(l: number): void;
    writeBytes(b: number): void;
}

//java.io.PrintWriter
declare interface PrintWriter extends Writer {
    checkError(): boolean;
    format(s: string, object: any): PrintWriter;
    format(locale: Locale, s: string, object: any): PrintWriter;
    print(f: number): void;
    print(l: number): void;
    print(i: number): void;
    print(c: string): void;
    print(b: boolean): void;
    print(object: any): void;
    print(s: string): void;
    print(c: string): void;
    print(d: number): void;
    printf(s: string, object: any): PrintWriter;
    printf(locale: Locale, s: string, object: any): PrintWriter;
    println(): void;
    println(c: string): void;
    println(b: boolean): void;
    println(s: string): void;
    println(object: any): void;
    println(d: number): void;
    println(f: number): void;
    println(l: number): void;
    println(i: number): void;
    println(c: string): void;
}

//java.security.PrivilegedAction
declare interface PrivilegedAction {
    run(): any;
}

//java.security.PrivilegedExceptionAction
declare interface PrivilegedExceptionAction {
    run(): any;
}

//org.bukkit.entity.Villager$Profession
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

//org.bukkit.entity.Projectile
declare interface Projectile extends Entity {
    doesBounce(): boolean;
    getShooter(): ProjectileSource;
    setBounce(b: boolean): void;
    setShooter(projectileSource: ProjectileSource): void;
}

//org.bukkit.event.entity.ProjectileHitEvent
declare interface ProjectileHitEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.entity.ProjectileLaunchEvent
declare interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
    getEntity(): Projectile;
    getEntity(): Entity;
}

//org.bukkit.projectiles.ProjectileSource
declare interface ProjectileSource {
    launchProjectile(clazz: Class): Projectile;
    launchProjectile(clazz: Class, vector: Vector): Projectile;
}

//org.bukkit.conversations.Prompt
declare interface Prompt extends Cloneable {
    acceptInput(conversationContext: ConversationContext, s: string): Prompt;
    blocksForInput(conversationContext: ConversationContext): boolean;
    getPromptText(conversationContext: ConversationContext): string;
    END_OF_CONVERSATION: Prompt;
}

//java.util.Properties
declare interface Properties extends Hashtable {
    getProperty(s: string): string;
    getProperty(s: string, s: string): string;
    list(printStream: PrintStream): void;
    list(printWriter: PrintWriter): void;
    load(reader: Reader): void;
    load(inputStream: InputStream): void;
    loadFromXML(inputStream: InputStream): void;
    propertyNames(): Enumeration;
    save(outputStream: OutputStream, s: string): void;
    setProperty(s: string, s: string): any;
    store(outputStream: OutputStream, s: string): void;
    store(writer: Writer, s: string): void;
    storeToXML(outputStream: OutputStream, s: string): void;
    storeToXML(outputStream: OutputStream, s: string, s: string): void;
    storeToXML(outputStream: OutputStream, s: string, charset: Charset): void;
    stringPropertyNames(): Set;
}

//org.bukkit.inventory.InventoryView$Property
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

//org.yaml.snakeyaml.introspector.Property
declare interface Property extends Comparable {
    compareTo(object: any): number;
    compareTo(property: Property): number;
    get(object: any): any;
    getActualTypeArguments(): Class[];
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): List;
    getName(): string;
    getType(): Class;
    isReadable(): boolean;
    isWritable(): boolean;
    set(object: any, object: any): void;
}

//java.beans.PropertyChangeEvent
declare interface PropertyChangeEvent extends EventObject {
    getNewValue(): any;
    getOldValue(): any;
    getPropagationId(): any;
    getPropertyName(): string;
    setPropagationId(object: any): void;
}

//java.beans.PropertyChangeListener
declare interface PropertyChangeListener extends EventListener {
    propertyChange(propertyChangeEvent: PropertyChangeEvent): void;
}

//org.yaml.snakeyaml.introspector.PropertySubstitute
declare interface PropertySubstitute extends Property {
    setActualTypeArguments(clazz: Class): void;
    setDelegate(property: Property): void;
    setTargetType(clazz: Class): void;
}

//org.yaml.snakeyaml.introspector.PropertyUtils
declare interface PropertyUtils {
    getProperties(clazz: Class): Set;
    getProperties(clazz: Class, beanAccess: BeanAccess): Set;
    getProperty(clazz: Class, s: string): Property;
    getProperty(clazz: Class, s: string, beanAccess: BeanAccess): Property;
    isAllowReadOnlyProperties(): boolean;
    isSkipMissingProperties(): boolean;
    setAllowReadOnlyProperties(b: boolean): void;
    setBeanAccess(beanAccess: BeanAccess): void;
    setSkipMissingProperties(b: boolean): void;
}

//java.security.ProtectionDomain
declare interface ProtectionDomain {
    getClassLoader(): ClassLoader;
    getCodeSource(): CodeSource;
    getPermissions(): PermissionCollection;
    getPrincipals(): Principal[];
    implies(permission: Permission): boolean;
    staticPermissionsOnly(): boolean;
}

//java.net.ProtocolFamily
declare interface ProtocolFamily {
    name(): string;
}

//java.security.Provider
declare interface Provider extends Properties {
    configure(s: string): Provider;
    getInfo(): string;
    getName(): string;
    getService(s: string, s: string): Service;
    getServices(): Set;
    getVersion(): number;
    getVersionStr(): string;
    isConfigured(): boolean;
}

//java.lang.module.ModuleDescriptor$Provides
declare interface Provides extends Comparable {
    compareTo(object: any): number;
    compareTo(provides: Provides): number;
    providers(): List;
    service(): string;
}

//org.bukkit.command.ProxiedCommandSender
declare interface ProxiedCommandSender extends CommandSender {
    getCallee(): CommandSender;
    getCaller(): CommandSender;
}

//java.net.Proxy
declare interface Proxy {
    address(): SocketAddress;
    type(): Type;
    NO_PROXY: Proxy;
}

//java.net.ProxySelector
declare interface ProxySelector {
    connectFailed(uRI: URI, socketAddress: SocketAddress, iOException: IOException): void;
    getDefault(): ProxySelector;
    of(inetSocketAddress: InetSocketAddress): ProxySelector;
    select(uRI: URI): List;
    setDefault(proxySelector: ProxySelector): void;
}

//java.security.PublicKey
declare interface PublicKey extends Key {
    serialVersionUID: number;
}

//java.util.concurrent.Flow$Publisher
declare interface Publisher {
    subscribe(subscriber: Subscriber): void;
}

//org.bukkit.entity.PufferFish
declare interface PufferFish extends Fish {
    getPuffState(): number;
    setPuffState(i: number): void;
}

//org.bukkit.material.Pumpkin
declare interface Pumpkin extends MaterialData, Directional {
    getFacing(): BlockFace;
    isLit(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
}

//java.net.http.HttpResponse$PushPromiseHandler
declare interface PushPromiseHandler {
    applyPushPromise(httpRequest: HttpRequest, httpRequest: HttpRequest, func: Function): void;
    of(func: Function, concurrentMap: ConcurrentMap): PushPromiseHandler;
}

//java.io.ObjectOutputStream$PutField
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

//org.bukkit.entity.Rabbit
declare interface Rabbit extends Animals {
    getRabbitType(): Type;
    setRabbitType(type: Type): void;
}

//org.bukkit.Raid
declare interface Raid {
    getActiveTicks(): number;
    getBadOmenLevel(): number;
    getHeroes(): Set;
    getLocation(): Location;
    getRaiders(): List;
    getSpawnedGroups(): number;
    getStatus(): RaidStatus;
    getTotalGroups(): number;
    getTotalHealth(): number;
    getTotalWaves(): number;
    isStarted(): boolean;
    setBadOmenLevel(i: number): void;
}

//org.bukkit.event.raid.RaidEvent
declare interface RaidEvent extends WorldEvent {
    getRaid(): Raid;
}

//org.bukkit.event.raid.RaidFinishEvent
declare interface RaidFinishEvent extends RaidEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getWinners(): List;
}

//org.bukkit.event.raid.RaidSpawnWaveEvent
declare interface RaidSpawnWaveEvent extends RaidEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPatrolLeader(): Raider;
    getRaiders(): List;
}

//org.bukkit.Raid$RaidStatus
declare enum RaidStatus {
    ONGOING,
    VICTORY,
    LOSS,
    STOPPED,
}

//org.bukkit.event.raid.RaidStopEvent
declare interface RaidStopEvent extends RaidEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getReason(): Reason;
}

//org.bukkit.event.raid.RaidTriggerEvent
declare interface RaidTriggerEvent extends RaidEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.entity.Raider
declare interface Raider extends Monster {
    getPatrolTarget(): Block;
    isCanJoinRaid(): boolean;
    isPatrolLeader(): boolean;
    setCanJoinRaid(b: boolean): void;
    setPatrolLeader(b: boolean): void;
    setPatrolTarget(block: Block): void;
}

//org.bukkit.block.data.Rail
declare interface Rail extends Waterlogged {
    getShape(): Shape;
    getShapes(): Set;
    setShape(shape: Shape): void;
}

//org.bukkit.material.Rails
declare interface Rails extends MaterialData {
    getDirection(): BlockFace;
    isCurve(): boolean;
    isOnSlope(): boolean;
    setDirection(blockFace: BlockFace, b: boolean): void;
}

//java.util.Random
declare interface Random extends RandomGenerator, Serializable {
    doubles(): DoubleStream;
    doubles(l: number): DoubleStream;
    doubles(d: number, d: number): DoubleStream;
    doubles(l: number, d: number, d: number): DoubleStream;
    ints(): IntStream;
    ints(l: number): IntStream;
    ints(i: number, i: number): IntStream;
    ints(l: number, i: number, i: number): IntStream;
    longs(): LongStream;
    longs(l: number): LongStream;
    longs(l: number, l: number): LongStream;
    longs(l: number, l: number, l: number): LongStream;
    nextBoolean(): boolean;
    nextBytes(b: number): void;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(): number;
    nextInt(i: number): number;
    nextLong(): number;
    setSeed(l: number): void;
}

//java.util.RandomAccess
declare interface RandomAccess {
}

//java.util.random.RandomGenerator
declare interface RandomGenerator {
    doubles(): DoubleStream;
    doubles(l: number): DoubleStream;
    doubles(d: number, d: number): DoubleStream;
    doubles(l: number, d: number, d: number): DoubleStream;
    getDefault(): RandomGenerator;
    ints(): IntStream;
    ints(l: number): IntStream;
    ints(i: number, i: number): IntStream;
    ints(l: number, i: number, i: number): IntStream;
    isDeprecated(): boolean;
    longs(): LongStream;
    longs(l: number): LongStream;
    longs(l: number, l: number): LongStream;
    longs(l: number, l: number, l: number): LongStream;
    nextBoolean(): boolean;
    nextBytes(b: number): void;
    nextDouble(): number;
    nextDouble(d: number): number;
    nextDouble(d: number, d: number): number;
    nextExponential(): number;
    nextFloat(): number;
    nextFloat(f: number): number;
    nextFloat(f: number, f: number): number;
    nextGaussian(): number;
    nextGaussian(d: number, d: number): number;
    nextInt(): number;
    nextInt(i: number): number;
    nextInt(i: number, i: number): number;
    nextLong(): number;
    nextLong(l: number): number;
    nextLong(l: number, l: number): number;
    of(s: string): RandomGenerator;
}

//java.awt.image.Raster
declare interface Raster {
    createBandedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createBandedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createBandedRaster(i: number, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createChild(i: number, i: number, i: number, i: number, i: number, i: number, i: number): Raster;
    createCompatibleWritableRaster(): WritableRaster;
    createCompatibleWritableRaster(rectangle: Rectangle): WritableRaster;
    createCompatibleWritableRaster(i: number, i: number): WritableRaster;
    createCompatibleWritableRaster(i: number, i: number, i: number, i: number): WritableRaster;
    createInterleavedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createInterleavedRaster(i: number, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createInterleavedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(dataBuffer: DataBuffer, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createPackedRaster(i: number, i: number, i: number, i: number, i: number, point: Point): WritableRaster;
    createRaster(sampleModel: SampleModel, dataBuffer: DataBuffer, point: Point): Raster;
    createTranslatedChild(i: number, i: number): Raster;
    createWritableRaster(sampleModel: SampleModel, point: Point): WritableRaster;
    createWritableRaster(sampleModel: SampleModel, dataBuffer: DataBuffer, point: Point): WritableRaster;
    getBounds(): Rectangle;
    getDataBuffer(): DataBuffer;
    getDataElements(i: number, i: number, object: any): any;
    getDataElements(i: number, i: number, i: number, i: number, object: any): any;
    getHeight(): number;
    getMinX(): number;
    getMinY(): number;
    getNumBands(): number;
    getNumDataElements(): number;
    getParent(): Raster;
    getPixel(i: number, i: number, i: number): number[];
    getPixel(i: number, i: number, f: number): number[];
    getPixel(i: number, i: number, d: number): number[];
    getPixels(i: number, i: number, i: number, i: number, f: number): number[];
    getPixels(i: number, i: number, i: number, i: number, d: number): number[];
    getPixels(i: number, i: number, i: number, i: number, i: number): number[];
    getSample(i: number, i: number, i: number): number;
    getSampleDouble(i: number, i: number, i: number): number;
    getSampleFloat(i: number, i: number, i: number): number;
    getSampleModel(): SampleModel;
    getSampleModelTranslateX(): number;
    getSampleModelTranslateY(): number;
    getSamples(i: number, i: number, i: number, i: number, i: number, i: number): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, f: number): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, d: number): number[];
    getTransferType(): number;
    getWidth(): number;
}

//org.bukkit.entity.Ravager
declare interface Ravager extends Raider {
}

//org.bukkit.util.RayTraceResult
declare interface RayTraceResult {
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitPosition(): Vector;
}

//java.lang.Readable
declare interface Readable {
    read(s: string): number;
}

//java.nio.channels.ReadableByteChannel
declare interface ReadableByteChannel extends Channel {
    read(byteBuffer: ByteBuffer): number;
}

//java.io.Reader
declare interface Reader extends Readable, Closeable {
    close(): void;
    mark(i: number): void;
    markSupported(): boolean;
    nullReader(): Reader;
    read(): number;
    read(c: string): number;
    read(s: string): number;
    read(c: string, i: number, i: number): number;
    ready(): boolean;
    reset(): void;
    skip(l: number): number;
    transferTo(writer: Writer): number;
}

//org.bukkit.event.raid.RaidStopEvent$Reason
declare enum Reason {
    PEACE,
    TIMEOUT,
    FINISHED,
    UNSPAWNABLE,
    NOT_IN_VILLAGE,
}

//org.bukkit.inventory.Recipe
declare interface Recipe {
    getResult(): ItemStack;
}

//org.bukkit.inventory.RecipeChoice
declare interface RecipeChoice extends Predicate, Cloneable {
    clone(): any;
    clone(): RecipeChoice;
    getItemStack(): ItemStack;
    test(object: any): boolean;
    test(itemStack: ItemStack): boolean;
}

//java.lang.reflect.RecordComponent
declare interface RecordComponent extends AnnotatedElement {
    getAccessor(): Method;
    getAnnotatedType(): AnnotatedType;
    getAnnotation(clazz: Class): Annotation;
    getAnnotations(): Annotation[];
    getDeclaredAnnotations(): Annotation[];
    getDeclaringRecord(): Class;
    getGenericSignature(): string;
    getGenericType(): Type;
    getName(): string;
    getType(): Class;
}

//java.awt.Rectangle
declare interface Rectangle extends Rectangle2D, Shape, Serializable {
    add(rectangle: Rectangle): void;
    add(point: Point): void;
    add(i: number, i: number): void;
    contains(rectangle: Rectangle): boolean;
    contains(point: Point): boolean;
    contains(i: number, i: number): boolean;
    contains(i: number, i: number, i: number, i: number): boolean;
    getBounds(): Rectangle;
    getHeight(): number;
    getLocation(): Point;
    getSize(): Dimension;
    getWidth(): number;
    getX(): number;
    getY(): number;
    grow(i: number, i: number): void;
    inside(i: number, i: number): boolean;
    intersection(rectangle: Rectangle): Rectangle;
    intersects(rectangle: Rectangle): boolean;
    isEmpty(): boolean;
    move(i: number, i: number): void;
    reshape(i: number, i: number, i: number, i: number): void;
    resize(i: number, i: number): void;
    setBounds(rectangle: Rectangle): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setLocation(point: Point): void;
    setLocation(i: number, i: number): void;
    setSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    toString(): string;
    translate(i: number, i: number): void;
    union(rectangle: Rectangle): Rectangle;
    height: number;
    width: number;
    x: number;
    y: number;
}

//java.awt.geom.Rectangle2D
declare interface Rectangle2D extends RectangularShape {
    add(point2D: Point2D): void;
    add(rectangle2D: Rectangle2D): void;
    add(d: number, d: number): void;
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    createIntersection(rectangle2D: Rectangle2D): Rectangle2D;
    createUnion(rectangle2D: Rectangle2D): Rectangle2D;
    equals(object: any): boolean;
    getBounds2D(): Rectangle2D;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    hashCode(): number;
    intersect(rectangle2D: Rectangle2D, rectangle2D: Rectangle2D, rectangle2D: Rectangle2D): void;
    intersects(d: number, d: number, d: number, d: number): boolean;
    intersectsLine(line2D: Line2D): boolean;
    intersectsLine(d: number, d: number, d: number, d: number): boolean;
    outcode(point2D: Point2D): number;
    outcode(d: number, d: number): number;
    setRect(rectangle2D: Rectangle2D): void;
    setRect(d: number, d: number, d: number, d: number): void;
    union(rectangle2D: Rectangle2D, rectangle2D: Rectangle2D, rectangle2D: Rectangle2D): void;
    OUT_BOTTOM: number;
    OUT_LEFT: number;
    OUT_RIGHT: number;
    OUT_TOP: number;
}

//java.awt.geom.RectangularShape
declare interface RectangularShape extends Shape, Cloneable {
    contains(point2D: Point2D): boolean;
    contains(rectangle2D: Rectangle2D): boolean;
    getBounds(): Rectangle;
    getCenterX(): number;
    getCenterY(): number;
    getFrame(): Rectangle2D;
    getHeight(): number;
    getMaxX(): number;
    getMaxY(): number;
    getMinX(): number;
    getMinY(): number;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    getWidth(): number;
    getX(): number;
    getY(): number;
    intersects(rectangle2D: Rectangle2D): boolean;
    isEmpty(): boolean;
    setFrame(rectangle2D: Rectangle2D): void;
    setFrame(point2D: Point2D, dimension2D: Dimension2D): void;
    setFrame(d: number, d: number, d: number, d: number): void;
    setFrameFromCenter(point2D: Point2D, point2D: Point2D): void;
    setFrameFromCenter(d: number, d: number, d: number, d: number): void;
    setFrameFromDiagonal(point2D: Point2D, point2D: Point2D): void;
    setFrameFromDiagonal(d: number, d: number, d: number, d: number): void;
}

//java.net.http.HttpClient$Redirect
declare enum Redirect {
    NEVER,
    ALWAYS,
    NORMAL,
}

//org.bukkit.material.Redstone
declare interface Redstone {
    isPowered(): boolean;
}

//org.bukkit.block.data.type.RedstoneRail
declare interface RedstoneRail extends Powerable, Rail {
}

//org.bukkit.material.RedstoneTorch
declare interface RedstoneTorch extends Torch, Redstone {
    isPowered(): boolean;
    toString(): string;
}

//org.bukkit.block.data.type.RedstoneWallTorch
declare interface RedstoneWallTorch extends Directional, Lightable {
}

//org.bukkit.material.RedstoneWire
declare interface RedstoneWire extends MaterialData, Redstone {
    isPowered(): boolean;
}

//org.bukkit.block.data.type.RedstoneWire
declare interface RedstoneWire extends AnaloguePowerable {
    getAllowedFaces(): Set;
    getFace(blockFace: BlockFace): Connection;
    setFace(blockFace: BlockFace, connection: Connection): void;
}

//org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason
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

//org.bukkit.conversations.RegexPrompt
declare interface RegexPrompt extends ValidatingPrompt {
}

//org.bukkit.RegionAccessor
declare interface RegionAccessor {
    generateTree(location: Location, random: Random, treeType: TreeType): boolean;
    generateTree(location: Location, random: Random, treeType: TreeType, predicate: Predicate): boolean;
    generateTree(location: Location, random: Random, treeType: TreeType, consumer: Consumer): boolean;
    getBiome(location: Location): Biome;
    getBiome(i: number, i: number, i: number): Biome;
    getBlockData(location: Location): BlockData;
    getBlockData(i: number, i: number, i: number): BlockData;
    getBlockState(location: Location): BlockState;
    getBlockState(i: number, i: number, i: number): BlockState;
    getEntities(): List;
    getEntitiesByClass(clazz: Class): Collection;
    getEntitiesByClasses(clazz: Class): Collection;
    getLivingEntities(): List;
    getType(location: Location): Material;
    getType(i: number, i: number, i: number): Material;
    setBiome(location: Location, biome: Biome): void;
    setBiome(i: number, i: number, i: number, biome: Biome): void;
    setBlockData(location: Location, blockData: BlockData): void;
    setBlockData(i: number, i: number, i: number, blockData: BlockData): void;
    setType(location: Location, material: Material): void;
    setType(i: number, i: number, i: number, material: Material): void;
    spawn(location: Location, clazz: Class): Entity;
    spawn(location: Location, clazz: Class, consumer: Consumer): Entity;
    spawn(location: Location, clazz: Class, b: boolean, consumer: Consumer): Entity;
    spawnEntity(location: Location, entityType: EntityType): Entity;
    spawnEntity(location: Location, entityType: EntityType, b: boolean): Entity;
}

//org.bukkit.plugin.RegisteredListener
declare interface RegisteredListener {
    callEvent(event: Event): void;
    getListener(): Listener;
    getPlugin(): Plugin;
    getPriority(): EventPriority;
    isIgnoringCancelled(): boolean;
}

//org.bukkit.plugin.RegisteredServiceProvider
declare interface RegisteredServiceProvider extends Comparable {
    compareTo(registeredServiceProvider: RegisteredServiceProvider): number;
    compareTo(object: any): number;
    getPlugin(): Plugin;
    getPriority(): ServicePriority;
    getProvider(): any;
    getService(): Class;
}

//org.bukkit.Registry
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
    FROG_VARIANT: Registry;
    GAME_EVENT: Registry;
    LOOT_TABLES: Registry;
    MATERIAL: Registry;
    MEMORY_MODULE_TYPE: Registry;
    SOUNDS: Registry;
    STATISTIC: Registry;
    VILLAGER_PROFESSION: Registry;
    VILLAGER_TYPE: Registry;
}

//org.bukkit.command.defaults.ReloadCommand
declare interface ReloadCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

//org.bukkit.command.RemoteConsoleCommandSender
declare interface RemoteConsoleCommandSender extends CommandSender {
}

//org.bukkit.event.server.RemoteServerCommandEvent
declare interface RemoteServerCommandEvent extends ServerCommandEvent {
}

//org.bukkit.event.hanging.HangingBreakEvent$RemoveCause
declare enum RemoveCause {
    ENTITY,
    EXPLOSION,
    OBSTRUCTION,
    PHYSICS,
    DEFAULT,
}

//java.awt.image.renderable.RenderContext
declare interface RenderContext extends Cloneable {
    concatenateTransform(affineTransform: AffineTransform): void;
    concetenateTransform(affineTransform: AffineTransform): void;
    getAreaOfInterest(): Shape;
    getRenderingHints(): RenderingHints;
    getTransform(): AffineTransform;
    preConcatenateTransform(affineTransform: AffineTransform): void;
    preConcetenateTransform(affineTransform: AffineTransform): void;
    setAreaOfInterest(shape: Shape): void;
    setRenderingHints(renderingHints: RenderingHints): void;
    setTransform(affineTransform: AffineTransform): void;
}

//org.bukkit.scoreboard.RenderType
declare enum RenderType {
    INTEGER,
    HEARTS,
}

//java.awt.image.renderable.RenderableImage
declare interface RenderableImage {
    createDefaultRendering(): RenderedImage;
    createRendering(renderContext: RenderContext): RenderedImage;
    createScaledRendering(i: number, i: number, renderingHints: RenderingHints): RenderedImage;
    getHeight(): number;
    getMinX(): number;
    getMinY(): number;
    getProperty(s: string): any;
    getPropertyNames(): string[];
    getSources(): Vector;
    getWidth(): number;
    isDynamic(): boolean;
    HINTS_OBSERVED: string;
}

//java.awt.image.RenderedImage
declare interface RenderedImage {
    copyData(writableRaster: WritableRaster): WritableRaster;
    getColorModel(): ColorModel;
    getData(): Raster;
    getData(rectangle: Rectangle): Raster;
    getHeight(): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getMinX(): number;
    getMinY(): number;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getProperty(s: string): any;
    getPropertyNames(): string[];
    getSampleModel(): SampleModel;
    getSources(): Vector;
    getTile(i: number, i: number): Raster;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTileHeight(): number;
    getTileWidth(): number;
    getWidth(): number;
}

//java.awt.RenderingHints
declare interface RenderingHints extends Map, Cloneable {
    add(renderingHints: RenderingHints): void;
    clear(): void;
    containsKey(object: any): boolean;
    containsValue(object: any): boolean;
    entrySet(): Set;
    get(object: any): any;
    isEmpty(): boolean;
    keySet(): Set;
    put(object: any, object: any): any;
    putAll(map: Map): void;
    remove(object: any): any;
    size(): number;
    values(): Collection;
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

//org.bukkit.inventory.meta.Repairable
declare interface Repairable extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): Repairable;
    getRepairCost(): number;
    hasRepairCost(): boolean;
    setRepairCost(i: number): void;
}

//org.bukkit.block.data.type.Repeater
declare interface Repeater extends Directional, Powerable {
    getDelay(): number;
    getMaximumDelay(): number;
    getMinimumDelay(): number;
    isLocked(): boolean;
    setDelay(i: number): void;
    setLocked(b: boolean): void;
}

//org.yaml.snakeyaml.representer.Representer
declare interface Representer extends SafeRepresenter {
    addTypeDescription(typeDescription: TypeDescription): TypeDescription;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
}

//java.net.Authenticator$RequestorType
declare enum RequestorType {
    PROXY,
    SERVER,
}

//java.lang.module.ModuleDescriptor$Requires
declare interface Requires extends Comparable {
    compareTo(object: any): number;
    compareTo(requires: Requires): number;
    compiledVersion(): Optional;
    modifiers(): Set;
    name(): string;
    rawCompiledVersion(): Optional;
}

//org.bukkit.plugin.messaging.ReservedChannelException
declare interface ReservedChannelException extends RuntimeException {
}

//java.time.format.ResolverStyle
declare enum ResolverStyle {
    STRICT,
    SMART,
    LENIENT,
}

//java.util.ResourceBundle
declare interface ResourceBundle {
    clearCache(): void;
    clearCache(classLoader: ClassLoader): void;
    containsKey(s: string): boolean;
    getBaseBundleName(): string;
    getBundle(s: string): ResourceBundle;
    getBundle(s: string, control: Control): ResourceBundle;
    getBundle(s: string, locale: Locale): ResourceBundle;
    getBundle(s: string, mod: Module): ResourceBundle;
    getBundle(s: string, locale: Locale, classLoader: ClassLoader): ResourceBundle;
    getBundle(s: string, locale: Locale, mod: Module): ResourceBundle;
    getBundle(s: string, locale: Locale, control: Control): ResourceBundle;
    getBundle(s: string, locale: Locale, classLoader: ClassLoader, control: Control): ResourceBundle;
    getKeys(): Enumeration;
    getLocale(): Locale;
    getObject(s: string): any;
    getString(s: string): string;
    getStringArray(s: string): string[];
    keySet(): Set;
}

//org.bukkit.block.data.type.RespawnAnchor
declare interface RespawnAnchor extends BlockData {
    getCharges(): number;
    getMaximumCharges(): number;
    setCharges(i: number): void;
}

//org.bukkit.boss.DragonBattle$RespawnPhase
declare enum RespawnPhase {
    START,
    PREPARING_TO_SUMMON_PILLARS,
    SUMMONING_PILLARS,
    SUMMONING_DRAGON,
    END,
    NONE,
}

//java.net.http.HttpResponse$ResponseInfo
declare interface ResponseInfo {
    headers(): HttpHeaders;
    statusCode(): number;
    version(): Version;
}

//org.bukkit.event.player.PlayerPreLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

//org.bukkit.event.player.PlayerLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

//org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result
declare enum Result {
    ALLOWED,
    KICK_FULL,
    KICK_BANNED,
    KICK_WHITELIST,
    KICK_OTHER,
}

//org.bukkit.event.Event$Result
declare enum Result {
    DENY,
    DEFAULT,
    ALLOW,
}

//org.bukkit.entity.minecart.RideableMinecart
declare interface RideableMinecart extends Minecart {
}

//org.bukkit.block.data.Rotatable
declare interface Rotatable extends BlockData {
    getRotation(): BlockFace;
    setRotation(blockFace: BlockFace): void;
}

//org.bukkit.Rotation
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

//java.lang.Runnable
declare interface Runnable {
    run(): void;
}

//java.lang.RuntimeException
declare interface RuntimeException extends Exception {
}

//javax.net.ssl.SSLContext
declare interface SSLContext {
    createSSLEngine(): SSLEngine;
    createSSLEngine(s: string, i: number): SSLEngine;
    getClientSessionContext(): SSLSessionContext;
    getDefault(): SSLContext;
    getDefaultSSLParameters(): SSLParameters;
    getInstance(s: string): SSLContext;
    getInstance(s: string, provider: Provider): SSLContext;
    getInstance(s: string, s: string): SSLContext;
    getProtocol(): string;
    getProvider(): Provider;
    getServerSessionContext(): SSLSessionContext;
    getServerSocketFactory(): SSLServerSocketFactory;
    getSocketFactory(): SSLSocketFactory;
    getSupportedSSLParameters(): SSLParameters;
    init(keyManager: KeyManager, trustManager: TrustManager, secureRandom: SecureRandom): void;
    setDefault(sSLContext: SSLContext): void;
}

//javax.net.ssl.SSLEngine
declare interface SSLEngine {
    beginHandshake(): void;
    closeInbound(): void;
    closeOutbound(): void;
    getApplicationProtocol(): string;
    getDelegatedTask(): Runnable;
    getEnableSessionCreation(): boolean;
    getEnabledCipherSuites(): string[];
    getEnabledProtocols(): string[];
    getHandshakeApplicationProtocol(): string;
    getHandshakeApplicationProtocolSelector(): BiFunction;
    getHandshakeSession(): SSLSession;
    getHandshakeStatus(): HandshakeStatus;
    getNeedClientAuth(): boolean;
    getPeerHost(): string;
    getPeerPort(): number;
    getSSLParameters(): SSLParameters;
    getSession(): SSLSession;
    getSupportedCipherSuites(): string[];
    getSupportedProtocols(): string[];
    getUseClientMode(): boolean;
    getWantClientAuth(): boolean;
    isInboundDone(): boolean;
    isOutboundDone(): boolean;
    setEnableSessionCreation(b: boolean): void;
    setEnabledCipherSuites(s: string): void;
    setEnabledProtocols(s: string): void;
    setHandshakeApplicationProtocolSelector(biFunction: BiFunction): void;
    setNeedClientAuth(b: boolean): void;
    setSSLParameters(sSLParameters: SSLParameters): void;
    setUseClientMode(b: boolean): void;
    setWantClientAuth(b: boolean): void;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    unwrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer, i: number, i: number): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, byteBuffer: ByteBuffer): SSLEngineResult;
    wrap(byteBuffer: ByteBuffer, i: number, i: number, byteBuffer: ByteBuffer): SSLEngineResult;
}

//javax.net.ssl.SSLEngineResult
declare interface SSLEngineResult {
    bytesConsumed(): number;
    bytesProduced(): number;
    getHandshakeStatus(): HandshakeStatus;
    getStatus(): Status;
    sequenceNumber(): number;
}

//javax.net.ssl.SSLParameters
declare interface SSLParameters {
    getAlgorithmConstraints(): AlgorithmConstraints;
    getApplicationProtocols(): string[];
    getCipherSuites(): string[];
    getEnableRetransmissions(): boolean;
    getEndpointIdentificationAlgorithm(): string;
    getMaximumPacketSize(): number;
    getNeedClientAuth(): boolean;
    getProtocols(): string[];
    getSNIMatchers(): Collection;
    getServerNames(): List;
    getUseCipherSuitesOrder(): boolean;
    getWantClientAuth(): boolean;
    setAlgorithmConstraints(algorithmConstraints: AlgorithmConstraints): void;
    setApplicationProtocols(s: string): void;
    setCipherSuites(s: string): void;
    setEnableRetransmissions(b: boolean): void;
    setEndpointIdentificationAlgorithm(s: string): void;
    setMaximumPacketSize(i: number): void;
    setNeedClientAuth(b: boolean): void;
    setProtocols(s: string): void;
    setSNIMatchers(collection: Collection): void;
    setServerNames(list: List): void;
    setUseCipherSuitesOrder(b: boolean): void;
    setWantClientAuth(b: boolean): void;
}

//javax.net.ssl.SSLServerSocketFactory
declare interface SSLServerSocketFactory extends ServerSocketFactory {
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
}

//javax.net.ssl.SSLSession
declare interface SSLSession {
    getApplicationBufferSize(): number;
    getCipherSuite(): string;
    getCreationTime(): number;
    getId(): number[];
    getLastAccessedTime(): number;
    getLocalCertificates(): Certificate[];
    getLocalPrincipal(): Principal;
    getPacketBufferSize(): number;
    getPeerCertificateChain(): X509Certificate[];
    getPeerCertificates(): Certificate[];
    getPeerHost(): string;
    getPeerPort(): number;
    getPeerPrincipal(): Principal;
    getProtocol(): string;
    getSessionContext(): SSLSessionContext;
    getValue(s: string): any;
    getValueNames(): string[];
    invalidate(): void;
    isValid(): boolean;
    putValue(s: string, object: any): void;
    removeValue(s: string): void;
}

//javax.net.ssl.SSLSessionContext
declare interface SSLSessionContext {
    getIds(): Enumeration;
    getSession(b: number): SSLSession;
    getSessionCacheSize(): number;
    getSessionTimeout(): number;
    setSessionCacheSize(i: number): void;
    setSessionTimeout(i: number): void;
}

//javax.net.ssl.SSLSocketFactory
declare interface SSLSocketFactory extends SocketFactory {
    createSocket(socket: Socket, inputStream: InputStream, b: boolean): Socket;
    createSocket(socket: Socket, s: string, i: number, b: boolean): Socket;
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
}

//org.yaml.snakeyaml.constructor.SafeConstructor
declare interface SafeConstructor extends BaseConstructor {
    undefinedConstructor: ConstructUndefined;
}

//org.yaml.snakeyaml.representer.SafeRepresenter
declare interface SafeRepresenter extends BaseRepresenter {
    addClassTag(clazz: Class, tag: Tag): Tag;
    getTimeZone(): TimeZone;
    setTimeZone(timeZone: TimeZone): void;
}

//org.bukkit.entity.Salmon
declare interface Salmon extends Fish {
}

//java.awt.image.SampleModel
declare interface SampleModel {
    createCompatibleSampleModel(i: number, i: number): SampleModel;
    createDataBuffer(): DataBuffer;
    createSubsetSampleModel(i: number): SampleModel;
    getDataElements(i: number, i: number, object: any, dataBuffer: DataBuffer): any;
    getDataElements(i: number, i: number, i: number, i: number, object: any, dataBuffer: DataBuffer): any;
    getDataType(): number;
    getHeight(): number;
    getNumBands(): number;
    getNumDataElements(): number;
    getPixel(i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getPixel(i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getPixel(i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getPixels(i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getSample(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getSampleDouble(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getSampleFloat(i: number, i: number, i: number, dataBuffer: DataBuffer): number;
    getSampleSize(): number[];
    getSampleSize(i: number): number;
    getSamples(i: number, i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): number[];
    getSamples(i: number, i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): number[];
    getTransferType(): number;
    getWidth(): number;
    setDataElements(i: number, i: number, object: any, dataBuffer: DataBuffer): void;
    setDataElements(i: number, i: number, i: number, i: number, object: any, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setPixel(i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setPixels(i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setSample(i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, i: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, f: number, dataBuffer: DataBuffer): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, d: number, dataBuffer: DataBuffer): void;
}

//org.bukkit.material.Sandstone
declare interface Sandstone extends MaterialData {
    getType(): SandstoneType;
    setType(sandstoneType: SandstoneType): void;
}

//org.bukkit.SandstoneType
declare enum SandstoneType {
    CRACKED,
    GLYPHED,
    SMOOTH,
}

//org.bukkit.block.data.type.Sapling
declare interface Sapling extends BlockData {
    getMaximumStage(): number;
    getStage(): number;
    setStage(i: number): void;
}

//org.bukkit.material.Sapling
declare interface Sapling extends Wood {
    isInstantGrowable(): boolean;
    setIsInstantGrowable(b: boolean): void;
}

//org.bukkit.block.data.type.Scaffolding
declare interface Scaffolding extends Waterlogged {
    getDistance(): number;
    getMaximumDistance(): number;
    isBottom(): boolean;
    setBottom(b: boolean): void;
    setDistance(i: number): void;
}

//org.yaml.snakeyaml.DumperOptions$ScalarStyle
declare enum ScalarStyle {
    DOUBLE_QUOTED,
    SINGLE_QUOTED,
    LITERAL,
    FOLDED,
    PLAIN,
}

//org.bukkit.map.MapView$Scale
declare enum Scale {
    CLOSEST,
    CLOSE,
    NORMAL,
    FAR,
    FARTHEST,
}

//java.nio.channels.ScatteringByteChannel
declare interface ScatteringByteChannel extends ReadableByteChannel {
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
}

//org.bukkit.scoreboard.Score
declare interface Score {
    getEntry(): string;
    getObjective(): Objective;
    getPlayer(): OfflinePlayer;
    getScore(): number;
    getScoreboard(): Scoreboard;
    isScoreSet(): boolean;
    setScore(i: number): void;
}

//org.bukkit.scoreboard.Scoreboard
declare interface Scoreboard {
    clearSlot(displaySlot: DisplaySlot): void;
    getEntries(): Set;
    getEntryTeam(s: string): Team;
    getObjective(s: string): Objective;
    getObjective(displaySlot: DisplaySlot): Objective;
    getObjectives(): Set;
    getObjectivesByCriteria(s: string): Set;
    getPlayerTeam(offlinePlayer: OfflinePlayer): Team;
    getPlayers(): Set;
    getScores(s: string): Set;
    getScores(offlinePlayer: OfflinePlayer): Set;
    getTeam(s: string): Team;
    getTeams(): Set;
    registerNewObjective(s: string, s: string): Objective;
    registerNewObjective(s: string, s: string, s: string): Objective;
    registerNewObjective(s: string, s: string, s: string, renderType: RenderType): Objective;
    registerNewTeam(s: string): Team;
    resetScores(s: string): void;
    resetScores(offlinePlayer: OfflinePlayer): void;
}

//org.bukkit.scoreboard.ScoreboardManager
declare interface ScoreboardManager {
    getMainScoreboard(): Scoreboard;
    getNewScoreboard(): Scoreboard;
}

//eu.okaeri.poly.api.script.ScriptHelper
declare interface ScriptHelper {
    callOnLoad(): void;
    callOnUnload(): void;
    getName(): string;
    unregister(): void;
}

//eu.okaeri.poly.api.script.ScriptManager
declare interface ScriptManager {
    eval(extension: string, source: string): any;
    getServices(): Map;
    listLoaded(): Set;
    load(name: string, source: string): ScriptHelper;
    load(path: Path): ScriptHelper;
    register(extension: string, scriptService: ScriptService): ScriptManager;
    unload(name: string): boolean;
}

//eu.okaeri.poly.api.script.ScriptService
declare interface ScriptService {
    eval(source: string): any;
    exec(name: string, source: string): ScriptHelper;
    getDefaultBindings(scriptHelper: ScriptHelper): Map;
    listLoaded(): Set;
    load(name: string, source: string): ScriptHelper;
    unload(name: string): boolean;
}

//org.bukkit.block.SculkCatalyst
declare interface SculkCatalyst extends TileState {
}

//org.bukkit.block.data.type.SculkCatalyst
declare interface SculkCatalyst extends BlockData {
    isBloom(): boolean;
    setBloom(b: boolean): void;
}

//org.bukkit.block.data.type.SculkSensor
declare interface SculkSensor extends AnaloguePowerable, Waterlogged {
    getPhase(): Phase;
    setPhase(phase: Phase): void;
}

//org.bukkit.block.SculkSensor
declare interface SculkSensor extends TileState {
    getLastVibrationFrequency(): number;
    setLastVibrationFrequency(i: number): void;
}

//org.bukkit.block.SculkShrieker
declare interface SculkShrieker extends TileState {
    getWarningLevel(): number;
    setWarningLevel(i: number): void;
}

//org.bukkit.block.data.type.SculkShrieker
declare interface SculkShrieker extends Waterlogged {
    isCanSummon(): boolean;
    isShrieking(): boolean;
    setCanSummon(b: boolean): void;
    setShrieking(b: boolean): void;
}

//org.bukkit.block.data.type.SeaPickle
declare interface SeaPickle extends Waterlogged {
    getMaximumPickles(): number;
    getMinimumPickles(): number;
    getPickles(): number;
    setPickles(i: number): void;
}

//java.awt.SecondaryLoop
declare interface SecondaryLoop {
    enter(): boolean;
    exit(): boolean;
}

//org.bukkit.configuration.SectionPathData
declare interface SectionPathData {
    getComments(): List;
    getData(): any;
    getInlineComments(): List;
    setComments(list: List): void;
    setData(object: any): void;
    setInlineComments(list: List): void;
}

//java.security.SecureClassLoader
declare interface SecureClassLoader extends ClassLoader {
}

//java.security.SecureRandom
declare interface SecureRandom extends Random {
    generateSeed(i: number): number[];
    getAlgorithm(): string;
    getInstance(s: string): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters): SecureRandom;
    getInstance(s: string, s: string): SecureRandom;
    getInstance(s: string, provider: Provider): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters, provider: Provider): SecureRandom;
    getInstance(s: string, secureRandomParameters: SecureRandomParameters, s: string): SecureRandom;
    getInstanceStrong(): SecureRandom;
    getParameters(): SecureRandomParameters;
    getProvider(): Provider;
    getSeed(i: number): number[];
    nextBytes(b: number, secureRandomParameters: SecureRandomParameters): void;
    reseed(): void;
    reseed(secureRandomParameters: SecureRandomParameters): void;
    setSeed(b: number): void;
    toString(): string;
}

//java.security.SecureRandomParameters
declare interface SecureRandomParameters {
}

//java.nio.channels.SeekableByteChannel
declare interface SeekableByteChannel extends ByteChannel {
    position(): number;
    position(l: number): SeekableByteChannel;
    read(byteBuffer: ByteBuffer): number;
    size(): number;
    truncate(l: number): SeekableByteChannel;
    write(byteBuffer: ByteBuffer): number;
}

//java.nio.channels.SelectableChannel
declare interface SelectableChannel extends AbstractInterruptibleChannel, Channel {
    blockingLock(): any;
    configureBlocking(b: boolean): SelectableChannel;
    isBlocking(): boolean;
    isRegistered(): boolean;
    keyFor(selector: Selector): SelectionKey;
    provider(): SelectorProvider;
    register(selector: Selector, i: number): SelectionKey;
    register(selector: Selector, i: number, object: any): SelectionKey;
    validOps(): number;
}

//java.nio.channels.SelectionKey
declare interface SelectionKey {
    attach(object: any): any;
    attachment(): any;
    cancel(): void;
    channel(): SelectableChannel;
    interestOps(): number;
    interestOps(i: number): SelectionKey;
    interestOpsAnd(i: number): number;
    interestOpsOr(i: number): number;
    isAcceptable(): boolean;
    isConnectable(): boolean;
    isReadable(): boolean;
    isValid(): boolean;
    isWritable(): boolean;
    readyOps(): number;
    selector(): Selector;
    OP_ACCEPT: number;
    OP_CONNECT: number;
    OP_READ: number;
    OP_WRITE: number;
}

//java.nio.channels.Selector
declare interface Selector extends Closeable {
    close(): void;
    isOpen(): boolean;
    keys(): Set;
    open(): Selector;
    provider(): SelectorProvider;
    select(): number;
    select(consumer: Consumer): number;
    select(l: number): number;
    select(consumer: Consumer, l: number): number;
    selectNow(): number;
    selectNow(consumer: Consumer): number;
    selectedKeys(): Set;
    wakeup(): Selector;
}

//java.nio.channels.spi.SelectorProvider
declare interface SelectorProvider {
    inheritedChannel(): Channel;
    openDatagramChannel(): DatagramChannel;
    openDatagramChannel(protocolFamily: ProtocolFamily): DatagramChannel;
    openPipe(): Pipe;
    openSelector(): AbstractSelector;
    openServerSocketChannel(): ServerSocketChannel;
    openServerSocketChannel(protocolFamily: ProtocolFamily): ServerSocketChannel;
    openSocketChannel(): SocketChannel;
    openSocketChannel(protocolFamily: ProtocolFamily): SocketChannel;
    provider(): SelectorProvider;
}

//java.io.Serializable
declare interface Serializable {
}

//org.bukkit.configuration.serialization.SerializableAs
declare interface SerializableAs extends Annotation {
    value(): string;
}

//java.io.SerializablePermission
declare interface SerializablePermission extends BasicPermission {
}

//org.bukkit.Server
declare interface Server extends PluginMessageRecipient {
    addRecipe(recipe: Recipe): boolean;
    advancementIterator(): Iterator;
    banIP(s: string): void;
    broadcast(s: string, s: string): number;
    broadcastMessage(s: string): number;
    clearRecipes(): void;
    craftItem(itemStack: ItemStack, world: World, player: Player): ItemStack;
    createBlockData(s: string): BlockData;
    createBlockData(material: Material): BlockData;
    createBlockData(material: Material, s: string): BlockData;
    createBlockData(material: Material, consumer: Consumer): BlockData;
    createBossBar(s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): BossBar;
    createBossBar(namespacedKey: NamespacedKey, s: string, barColor: BarColor, barStyle: BarStyle, barFlag: BarFlag): KeyedBossBar;
    createChunkData(world: World): ChunkData;
    createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
    createExplorerMap(world: World, location: Location, structureType: StructureType, i: number, b: boolean): ItemStack;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number): Inventory;
    createInventory(inventoryHolder: InventoryHolder, i: number, s: string): Inventory;
    createInventory(inventoryHolder: InventoryHolder, inventoryType: InventoryType, s: string): Inventory;
    createMap(world: World): MapView;
    createMerchant(s: string): Merchant;
    createPlayerProfile(uUID: UUID): PlayerProfile;
    createPlayerProfile(s: string): PlayerProfile;
    createPlayerProfile(uUID: UUID, s: string): PlayerProfile;
    createWorld(worldCreator: WorldCreator): World;
    createWorldBorder(): WorldBorder;
    dispatchCommand(commandSender: CommandSender, s: string): boolean;
    getAdvancement(namespacedKey: NamespacedKey): Advancement;
    getAllowEnd(): boolean;
    getAllowFlight(): boolean;
    getAllowNether(): boolean;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getBanList(type: Type): BanList;
    getBannedPlayers(): Set;
    getBossBar(namespacedKey: NamespacedKey): KeyedBossBar;
    getBossBars(): Iterator;
    getBukkitVersion(): string;
    getCommandAliases(): Map;
    getConnectionThrottle(): number;
    getConsoleSender(): ConsoleCommandSender;
    getCraftingRecipe(itemStack: ItemStack, world: World): Recipe;
    getDefaultGameMode(): GameMode;
    getEntity(uUID: UUID): Entity;
    getGenerateStructures(): boolean;
    getHelpMap(): HelpMap;
    getHideOnlinePlayers(): boolean;
    getIPBans(): Set;
    getIdleTimeout(): number;
    getIp(): string;
    getItemFactory(): ItemFactory;
    getLogger(): Logger;
    getLootTable(namespacedKey: NamespacedKey): LootTable;
    getMap(i: number): MapView;
    getMaxChainedNeighborUpdates(): number;
    getMaxPlayers(): number;
    getMaxWorldSize(): number;
    getMessenger(): Messenger;
    getMonsterSpawnLimit(): number;
    getMotd(): string;
    getName(): string;
    getOfflinePlayer(s: string): OfflinePlayer;
    getOfflinePlayer(uUID: UUID): OfflinePlayer;
    getOfflinePlayers(): OfflinePlayer[];
    getOnlineMode(): boolean;
    getOnlinePlayers(): Collection;
    getOperators(): Set;
    getPlayer(s: string): Player;
    getPlayer(uUID: UUID): Player;
    getPlayerExact(s: string): Player;
    getPluginCommand(s: string): PluginCommand;
    getPluginManager(): PluginManager;
    getPort(): number;
    getRecipe(namespacedKey: NamespacedKey): Recipe;
    getRecipesFor(itemStack: ItemStack): List;
    getResourcePack(): string;
    getResourcePackHash(): string;
    getResourcePackPrompt(): string;
    getScheduler(): BukkitScheduler;
    getScoreboardManager(): ScoreboardManager;
    getServerIcon(): CachedServerIcon;
    getServicesManager(): ServicesManager;
    getShutdownMessage(): string;
    getSimulationDistance(): number;
    getSpawnLimit(spawnCategory: SpawnCategory): number;
    getSpawnRadius(): number;
    getStructureManager(): StructureManager;
    getTag(s: string, namespacedKey: NamespacedKey, clazz: Class): Tag;
    getTags(s: string, clazz: Class): Iterable;
    getTicksPerAmbientSpawns(): number;
    getTicksPerAnimalSpawns(): number;
    getTicksPerMonsterSpawns(): number;
    getTicksPerSpawns(spawnCategory: SpawnCategory): number;
    getTicksPerWaterAmbientSpawns(): number;
    getTicksPerWaterSpawns(): number;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getUnsafe(): UnsafeValues;
    getUpdateFolder(): string;
    getUpdateFolderFile(): File;
    getVersion(): string;
    getViewDistance(): number;
    getWarningState(): WarningState;
    getWaterAmbientSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getWhitelistedPlayers(): Set;
    getWorld(s: string): World;
    getWorld(uUID: UUID): World;
    getWorldContainer(): File;
    getWorldType(): string;
    getWorlds(): List;
    hasWhitelist(): boolean;
    isEnforcingSecureProfiles(): boolean;
    isHardcore(): boolean;
    isPrimaryThread(): boolean;
    isResourcePackRequired(): boolean;
    isWhitelistEnforced(): boolean;
    loadServerIcon(file: File): CachedServerIcon;
    loadServerIcon(bufferedImage: BufferedImage): CachedServerIcon;
    matchPlayer(s: string): List;
    recipeIterator(): Iterator;
    reload(): void;
    reloadData(): void;
    reloadWhitelist(): void;
    removeBossBar(namespacedKey: NamespacedKey): boolean;
    removeRecipe(namespacedKey: NamespacedKey): boolean;
    resetRecipes(): void;
    savePlayers(): void;
    selectEntities(commandSender: CommandSender, s: string): List;
    setDefaultGameMode(gameMode: GameMode): void;
    setIdleTimeout(i: number): void;
    setSpawnRadius(i: number): void;
    setWhitelist(b: boolean): void;
    setWhitelistEnforced(b: boolean): void;
    shouldSendChatPreviews(): boolean;
    shutdown(): void;
    spigot(): Spigot;
    unbanIP(s: string): void;
    unloadWorld(s: string, b: boolean): boolean;
    unloadWorld(world: World, b: boolean): boolean;
    BROADCAST_CHANNEL_ADMINISTRATIVE: string;
    BROADCAST_CHANNEL_USERS: string;
}

//org.bukkit.event.server.ServerCommandEvent
declare interface ServerCommandEvent extends ServerEvent, Cancellable {
    getCommand(): string;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getSender(): CommandSender;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setCommand(s: string): void;
}

//org.bukkit.event.server.ServerEvent
declare interface ServerEvent extends Event {
}

//org.bukkit.event.server.ServerListPingEvent
declare interface ServerListPingEvent extends ServerEvent, Iterable {
    getAddress(): InetAddress;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getMaxPlayers(): number;
    getMotd(): string;
    getNumPlayers(): number;
    iterator(): Iterator;
    setMaxPlayers(i: number): void;
    setMotd(s: string): void;
    setServerIcon(cachedServerIcon: CachedServerIcon): void;
    shouldSendChatPreviews(): boolean;
}

//org.bukkit.event.server.ServerLoadEvent
declare interface ServerLoadEvent extends ServerEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getType(): LoadType;
}

//org.bukkit.permissions.ServerOperator
declare interface ServerOperator {
    isOp(): boolean;
    setOp(b: boolean): void;
}

//java.net.ServerSocket
declare interface ServerSocket extends Closeable {
    accept(): Socket;
    bind(socketAddress: SocketAddress): void;
    bind(socketAddress: SocketAddress, i: number): void;
    close(): void;
    getChannel(): ServerSocketChannel;
    getInetAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): SocketAddress;
    getOption(socketOption: SocketOption): any;
    getReceiveBufferSize(): number;
    getReuseAddress(): boolean;
    getSoTimeout(): number;
    isBound(): boolean;
    isClosed(): boolean;
    setOption(socketOption: SocketOption, object: any): ServerSocket;
    setPerformancePreferences(i: number, i: number, i: number): void;
    setReceiveBufferSize(i: number): void;
    setReuseAddress(b: boolean): void;
    setSoTimeout(i: number): void;
    setSocketFactory(socketImplFactory: SocketImplFactory): void;
    supportedOptions(): Set;
}

//java.nio.channels.ServerSocketChannel
declare interface ServerSocketChannel extends AbstractSelectableChannel, NetworkChannel {
    accept(): SocketChannel;
    bind(socketAddress: SocketAddress): NetworkChannel;
    bind(socketAddress: SocketAddress): ServerSocketChannel;
    bind(socketAddress: SocketAddress, i: number): ServerSocketChannel;
    getLocalAddress(): SocketAddress;
    open(): ServerSocketChannel;
    open(protocolFamily: ProtocolFamily): ServerSocketChannel;
    setOption(socketOption: SocketOption, object: any): ServerSocketChannel;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    socket(): ServerSocket;
    validOps(): number;
}

//javax.net.ServerSocketFactory
declare interface ServerSocketFactory {
    createServerSocket(): ServerSocket;
    createServerSocket(i: number): ServerSocket;
    createServerSocket(i: number, i: number): ServerSocket;
    createServerSocket(i: number, i: number, inetAddress: InetAddress): ServerSocket;
    getDefault(): ServerSocketFactory;
}

//java.security.Provider$Service
declare interface Service {
    getAlgorithm(): string;
    getAttribute(s: string): string;
    getClassName(): string;
    getProvider(): Provider;
    getType(): string;
    newInstance(object: any): any;
    supportsParameter(object: any): boolean;
}

//org.bukkit.event.server.ServiceEvent
declare interface ServiceEvent extends ServerEvent {
    getProvider(): RegisteredServiceProvider;
}

//org.bukkit.plugin.ServicePriority
declare enum ServicePriority {
    Lowest,
    Low,
    Normal,
    High,
    Highest,
}

//org.bukkit.event.server.ServiceRegisterEvent
declare interface ServiceRegisterEvent extends ServiceEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.server.ServiceUnregisterEvent
declare interface ServiceUnregisterEvent extends ServiceEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.plugin.ServicesManager
declare interface ServicesManager {
    getKnownServices(): Collection;
    getRegistration(clazz: Class): RegisteredServiceProvider;
    getRegistrations(plugin: Plugin): List;
    getRegistrations(clazz: Class): Collection;
    isProvidedFor(clazz: Class): boolean;
    load(clazz: Class): any;
    register(clazz: Class, object: any, plugin: Plugin, servicePriority: ServicePriority): void;
    unregister(object: any): void;
    unregister(clazz: Class, object: any): void;
    unregisterAll(plugin: Plugin): void;
}

//java.util.Set
declare interface Set extends Collection {
    add(object: any): boolean;
    addAll(collection: Collection): boolean;
    clear(): void;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    copyOf(collection: Collection): Set;
    equals(object: any): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    iterator(): Iterator;
    of(): Set;
    of(object: any): Set;
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
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    retainAll(collection: Collection): boolean;
    size(): number;
    spliterator(): Spliterator;
    toArray(): any[];
    toArray(object: any): any[];
}

//org.bukkit.block.data.Rail$Shape
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

//org.bukkit.block.data.type.Stairs$Shape
declare enum Shape {
    STRAIGHT,
    INNER_LEFT,
    INNER_RIGHT,
    OUTER_LEFT,
    OUTER_RIGHT,
}

//java.awt.Shape
declare interface Shape {
    contains(rectangle2D: Rectangle2D): boolean;
    contains(point2D: Point2D): boolean;
    contains(d: number, d: number): boolean;
    contains(d: number, d: number, d: number, d: number): boolean;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    getPathIterator(affineTransform: AffineTransform): PathIterator;
    getPathIterator(affineTransform: AffineTransform, d: number): PathIterator;
    intersects(rectangle2D: Rectangle2D): boolean;
    intersects(d: number, d: number, d: number, d: number): boolean;
}

//org.bukkit.inventory.ShapedRecipe
declare interface ShapedRecipe extends Recipe, Keyed {
    getChoiceMap(): Map;
    getGroup(): string;
    getIngredientMap(): Map;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    getShape(): string[];
    setGroup(s: string): void;
    setIngredient(c: string, material: Material): ShapedRecipe;
    setIngredient(c: string, recipeChoice: RecipeChoice): ShapedRecipe;
    setIngredient(c: string, materialData: MaterialData): ShapedRecipe;
    setIngredient(c: string, material: Material, i: number): ShapedRecipe;
    shape(s: string): ShapedRecipe;
}

//org.bukkit.inventory.ShapelessRecipe
declare interface ShapelessRecipe extends Recipe, Keyed {
    addIngredient(materialData: MaterialData): ShapelessRecipe;
    addIngredient(material: Material): ShapelessRecipe;
    addIngredient(recipeChoice: RecipeChoice): ShapelessRecipe;
    addIngredient(i: number, materialData: MaterialData): ShapelessRecipe;
    addIngredient(material: Material, i: number): ShapelessRecipe;
    addIngredient(i: number, material: Material): ShapelessRecipe;
    addIngredient(i: number, material: Material, i: number): ShapelessRecipe;
    getChoiceList(): List;
    getGroup(): string;
    getIngredientList(): List;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    removeIngredient(materialData: MaterialData): ShapelessRecipe;
    removeIngredient(material: Material): ShapelessRecipe;
    removeIngredient(recipeChoice: RecipeChoice): ShapelessRecipe;
    removeIngredient(i: number, material: Material): ShapelessRecipe;
    removeIngredient(material: Material, i: number): ShapelessRecipe;
    removeIngredient(i: number, materialData: MaterialData): ShapelessRecipe;
    removeIngredient(i: number, material: Material, i: number): ShapelessRecipe;
    setGroup(s: string): void;
}

//org.bukkit.entity.Sheep
declare interface Sheep extends Animals, Colorable {
    isSheared(): boolean;
    setSheared(b: boolean): void;
}

//org.bukkit.event.entity.SheepDyeWoolEvent
declare interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
    getColor(): DyeColor;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setColor(dyeColor: DyeColor): void;
}

//org.bukkit.event.entity.SheepRegrowWoolEvent
declare interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//java.nio.ShortBuffer
declare interface ShortBuffer extends Buffer, Comparable {
    allocate(i: number): ShortBuffer;
    asReadOnlyBuffer(): ShortBuffer;
    compact(): ShortBuffer;
    compareTo(object: any): number;
    compareTo(shortBuffer: ShortBuffer): number;
    equals(object: any): boolean;
    get(): number;
    get(i: number): number;
    get(s: number): ShortBuffer;
    get(i: number, s: number): ShortBuffer;
    get(s: number, i: number, i: number): ShortBuffer;
    get(i: number, s: number, i: number, i: number): ShortBuffer;
    hashCode(): number;
    mismatch(shortBuffer: ShortBuffer): number;
    order(): ByteOrder;
    put(s: number): ShortBuffer;
    put(shortBuffer: ShortBuffer): ShortBuffer;
    put(s: number): ShortBuffer;
    put(i: number, s: number): ShortBuffer;
    put(i: number, s: number): ShortBuffer;
    put(s: number, i: number, i: number): ShortBuffer;
    put(i: number, s: number, i: number, i: number): ShortBuffer;
    put(i: number, shortBuffer: ShortBuffer, i: number, i: number): ShortBuffer;
    toString(): string;
    wrap(s: number): ShortBuffer;
    wrap(s: number, i: number, i: number): ShortBuffer;
}

//org.bukkit.entity.Shulker
declare interface Shulker extends Golem, Colorable {
    getAttachedFace(): BlockFace;
    getPeek(): number;
    setAttachedFace(blockFace: BlockFace): void;
    setPeek(f: number): void;
}

//org.bukkit.block.ShulkerBox
declare interface ShulkerBox extends Container, Lootable, Lidded {
    getColor(): DyeColor;
}

//org.bukkit.entity.ShulkerBullet
declare interface ShulkerBullet extends Projectile {
    getTarget(): Entity;
    setTarget(entity: Entity): void;
}

//java.awt.JobAttributes$SidesType
declare interface SidesType extends AttributeValue {
    ONE_SIDED: SidesType;
    TWO_SIDED_LONG_EDGE: SidesType;
    TWO_SIDED_SHORT_EDGE: SidesType;
}

//org.bukkit.block.data.type.Sign
declare interface Sign extends Rotatable, Waterlogged {
}

//org.bukkit.block.Sign
declare interface Sign extends TileState, Colorable {
    getLine(i: number): string;
    getLines(): string[];
    isEditable(): boolean;
    isGlowingText(): boolean;
    setEditable(b: boolean): void;
    setGlowingText(b: boolean): void;
    setLine(i: number, s: string): void;
}

//org.bukkit.material.Sign
declare interface Sign extends MaterialData, Attachable {
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    isWallSign(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.event.block.SignChangeEvent
declare interface SignChangeEvent extends BlockEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLine(i: number): string;
    getLines(): string[];
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setLine(i: number, s: string): void;
}

//org.bukkit.entity.Silverfish
declare interface Silverfish extends Monster {
}

//org.bukkit.material.SimpleAttachableMaterialData
declare interface SimpleAttachableMaterialData extends MaterialData, Attachable {
    getFacing(): BlockFace;
}

//org.bukkit.command.SimpleCommandMap
declare interface SimpleCommandMap extends CommandMap {
    clearCommands(): void;
    dispatch(commandSender: CommandSender, s: string): boolean;
    getCommand(s: string): Command;
    getCommands(): Collection;
    register(s: string, command: Command): boolean;
    register(s: string, s: string, command: Command): boolean;
    registerAll(s: string, list: List): void;
    registerServerAliases(): void;
    setFallbackCommands(): void;
    tabComplete(commandSender: CommandSender, s: string): List;
    tabComplete(commandSender: CommandSender, s: string, location: Location): List;
}

//org.bukkit.plugin.SimplePluginManager
declare interface SimplePluginManager extends PluginManager {
    addPermission(permission: Permission): void;
    addPermission(permission: Permission, b: boolean): void;
    callEvent(event: Event): void;
    clearPlugins(): void;
    dirtyPermissibles(): void;
    disablePlugin(plugin: Plugin): void;
    disablePlugins(): void;
    enablePlugin(plugin: Plugin): void;
    getDefaultPermSubscriptions(b: boolean): Set;
    getDefaultPermissions(b: boolean): Set;
    getPermission(s: string): Permission;
    getPermissionSubscriptions(s: string): Set;
    getPermissions(): Set;
    getPlugin(s: string): Plugin;
    getPlugins(): Plugin[];
    isPluginEnabled(plugin: Plugin): boolean;
    isPluginEnabled(s: string): boolean;
    isTransitiveDepend(pluginDescriptionFile: PluginDescriptionFile, pluginDescriptionFile: PluginDescriptionFile): boolean;
    loadPlugin(file: File): Plugin;
    loadPlugins(file: File): Plugin[];
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
    useTimings(): boolean;
    useTimings(b: boolean): void;
}

//org.bukkit.plugin.SimpleServicesManager
declare interface SimpleServicesManager extends ServicesManager {
    getKnownServices(): Collection;
    getKnownServices(): Set;
    getRegistration(clazz: Class): RegisteredServiceProvider;
    getRegistrations(plugin: Plugin): List;
    getRegistrations(clazz: Class): List;
    getRegistrations(clazz: Class): Collection;
    isProvidedFor(clazz: Class): boolean;
    load(clazz: Class): any;
    register(clazz: Class, object: any, plugin: Plugin, servicePriority: ServicePriority): void;
    unregister(object: any): void;
    unregister(clazz: Class, object: any): void;
    unregisterAll(plugin: Plugin): void;
}

//org.bukkit.util.noise.SimplexNoiseGenerator
declare interface SimplexNoiseGenerator extends PerlinNoiseGenerator {
    getNoise(d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number): number;
}

//org.bukkit.util.noise.SimplexOctaveGenerator
declare interface SimplexOctaveGenerator extends OctaveGenerator {
    getWScale(): number;
    noise(d: number, d: number, d: number, d: number, d: number, d: number): number;
    noise(d: number, d: number, d: number, d: number, d: number, d: number, b: boolean): number;
    setWScale(d: number): void;
}

//java.nio.channels.Pipe$SinkChannel
declare interface SinkChannel extends AbstractSelectableChannel, WritableByteChannel, GatheringByteChannel {
    validOps(): number;
}

//org.bukkit.entity.Sittable
declare interface Sittable {
    isSitting(): boolean;
    setSitting(b: boolean): void;
}

//org.bukkit.entity.SizedFireball
declare interface SizedFireball extends Fireball {
    getDisplayItem(): ItemStack;
    setDisplayItem(itemStack: ItemStack): void;
}

//org.bukkit.entity.Skeleton
declare interface Skeleton extends AbstractSkeleton {
    getConversionTime(): number;
    isConverting(): boolean;
    setConversionTime(i: number): void;
}

//org.bukkit.entity.SkeletonHorse
declare interface SkeletonHorse extends AbstractHorse {
    getTrapTime(): number;
    isTrapped(): boolean;
    setTrapTime(i: number): void;
    setTrapped(b: boolean): void;
}

//org.bukkit.entity.Skeleton$SkeletonType
declare enum SkeletonType {
    NORMAL,
    WITHER,
    STRAY,
}

//org.bukkit.profile.PlayerTextures$SkinModel
declare enum SkinModel {
    CLASSIC,
    SLIM,
}

//org.bukkit.event.world.TimeSkipEvent$SkipReason
declare enum SkipReason {
    COMMAND,
    CUSTOM,
    NIGHT_SKIP,
}

//org.bukkit.block.Skull
declare interface Skull extends TileState {
    getOwner(): string;
    getOwnerProfile(): PlayerProfile;
    getOwningPlayer(): OfflinePlayer;
    getRotation(): BlockFace;
    getSkullType(): SkullType;
    hasOwner(): boolean;
    setOwner(s: string): boolean;
    setOwnerProfile(playerProfile: PlayerProfile): void;
    setOwningPlayer(offlinePlayer: OfflinePlayer): void;
    setRotation(blockFace: BlockFace): void;
    setSkullType(skullType: SkullType): void;
}

//org.bukkit.material.Skull
declare interface Skull extends MaterialData, Directional {
    getFacing(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.inventory.meta.SkullMeta
declare interface SkullMeta extends ItemMeta {
    clone(): SkullMeta;
    clone(): ItemMeta;
    clone(): any;
    getOwner(): string;
    getOwnerProfile(): PlayerProfile;
    getOwningPlayer(): OfflinePlayer;
    hasOwner(): boolean;
    setOwner(s: string): boolean;
    setOwnerProfile(playerProfile: PlayerProfile): void;
    setOwningPlayer(offlinePlayer: OfflinePlayer): boolean;
}

//org.bukkit.SkullType
declare enum SkullType {
    SKELETON,
    WITHER,
    ZOMBIE,
    PLAYER,
    CREEPER,
    DRAGON,
}

//org.bukkit.block.data.type.Slab
declare interface Slab extends Waterlogged {
    getType(): Type;
    setType(type: Type): void;
}

//org.bukkit.entity.Slime
declare interface Slime extends Mob {
    getSize(): number;
    setSize(i: number): void;
}

//org.bukkit.event.entity.SlimeSplitEvent
declare interface SlimeSplitEvent extends EntityEvent, Cancellable {
    getCount(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setCount(i: number): void;
}

//org.bukkit.event.inventory.InventoryType$SlotType
declare enum SlotType {
    RESULT,
    CRAFTING,
    ARMOR,
    CONTAINER,
    QUICKBAR,
    OUTSIDE,
    FUEL,
}

//org.bukkit.block.data.type.SmallDripleaf
declare interface SmallDripleaf extends Dripleaf, Bisected {
}

//org.bukkit.entity.SmallFireball
declare interface SmallFireball extends SizedFireball {
}

//org.bukkit.event.inventory.SmithItemEvent
declare interface SmithItemEvent extends InventoryClickEvent {
    getInventory(): Inventory;
    getInventory(): SmithingInventory;
}

//org.bukkit.inventory.SmithingInventory
declare interface SmithingInventory extends Inventory {
    getRecipe(): Recipe;
    getResult(): ItemStack;
    setResult(itemStack: ItemStack): void;
}

//org.bukkit.inventory.SmithingRecipe
declare interface SmithingRecipe extends Recipe, Keyed {
    getAddition(): RecipeChoice;
    getBase(): RecipeChoice;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
}

//org.bukkit.block.Smoker
declare interface Smoker extends Furnace {
}

//org.bukkit.inventory.SmokingRecipe
declare interface SmokingRecipe extends CookingRecipe {
}

//org.bukkit.material.SmoothBrick
declare interface SmoothBrick extends TexturedMaterial {
}

//org.bukkit.block.data.type.Snow
declare interface Snow extends BlockData {
    getLayers(): number;
    getMaximumLayers(): number;
    getMinimumLayers(): number;
    setLayers(i: number): void;
}

//org.bukkit.block.data.Snowable
declare interface Snowable extends BlockData {
    isSnowy(): boolean;
    setSnowy(b: boolean): void;
}

//org.bukkit.entity.Snowball
declare interface Snowball extends ThrowableProjectile {
}

//org.bukkit.entity.Snowman
declare interface Snowman extends Golem {
    isDerp(): boolean;
    setDerp(b: boolean): void;
}

//java.net.Socket
declare interface Socket extends Closeable {
    bind(socketAddress: SocketAddress): void;
    close(): void;
    connect(socketAddress: SocketAddress): void;
    connect(socketAddress: SocketAddress, i: number): void;
    getChannel(): SocketChannel;
    getInetAddress(): InetAddress;
    getInputStream(): InputStream;
    getKeepAlive(): boolean;
    getLocalAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): SocketAddress;
    getOOBInline(): boolean;
    getOption(socketOption: SocketOption): any;
    getOutputStream(): OutputStream;
    getPort(): number;
    getReceiveBufferSize(): number;
    getRemoteSocketAddress(): SocketAddress;
    getReuseAddress(): boolean;
    getSendBufferSize(): number;
    getSoLinger(): number;
    getSoTimeout(): number;
    getTcpNoDelay(): boolean;
    getTrafficClass(): number;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    isInputShutdown(): boolean;
    isOutputShutdown(): boolean;
    sendUrgentData(i: number): void;
    setKeepAlive(b: boolean): void;
    setOOBInline(b: boolean): void;
    setOption(socketOption: SocketOption, object: any): Socket;
    setPerformancePreferences(i: number, i: number, i: number): void;
    setReceiveBufferSize(i: number): void;
    setReuseAddress(b: boolean): void;
    setSendBufferSize(i: number): void;
    setSoLinger(b: boolean, i: number): void;
    setSoTimeout(i: number): void;
    setSocketImplFactory(socketImplFactory: SocketImplFactory): void;
    setTcpNoDelay(b: boolean): void;
    setTrafficClass(i: number): void;
    shutdownInput(): void;
    shutdownOutput(): void;
    supportedOptions(): Set;
}

//java.net.SocketAddress
declare interface SocketAddress extends Serializable {
}

//java.nio.channels.SocketChannel
declare interface SocketChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, NetworkChannel {
    bind(socketAddress: SocketAddress): SocketChannel;
    bind(socketAddress: SocketAddress): NetworkChannel;
    connect(socketAddress: SocketAddress): boolean;
    finishConnect(): boolean;
    getLocalAddress(): SocketAddress;
    getRemoteAddress(): SocketAddress;
    isConnected(): boolean;
    isConnectionPending(): boolean;
    open(): SocketChannel;
    open(protocolFamily: ProtocolFamily): SocketChannel;
    open(socketAddress: SocketAddress): SocketChannel;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer): number;
    read(byteBuffer: ByteBuffer, i: number, i: number): number;
    setOption(socketOption: SocketOption, object: any): NetworkChannel;
    setOption(socketOption: SocketOption, object: any): SocketChannel;
    shutdownInput(): SocketChannel;
    shutdownOutput(): SocketChannel;
    socket(): Socket;
    validOps(): number;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer): number;
    write(byteBuffer: ByteBuffer, i: number, i: number): number;
}

//javax.net.SocketFactory
declare interface SocketFactory {
    createSocket(): Socket;
    createSocket(inetAddress: InetAddress, i: number): Socket;
    createSocket(s: string, i: number): Socket;
    createSocket(s: string, i: number, inetAddress: InetAddress, i: number): Socket;
    createSocket(inetAddress: InetAddress, i: number, inetAddress: InetAddress, i: number): Socket;
    getDefault(): SocketFactory;
}

//java.net.SocketImpl
declare interface SocketImpl extends SocketOptions {
}

//java.net.SocketImplFactory
declare interface SocketImplFactory {
    createSocketImpl(): SocketImpl;
}

//java.net.SocketOption
declare interface SocketOption {
    name(): string;
    type(): Class;
}

//java.net.SocketOptions
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

//java.util.SortedMap
declare interface SortedMap extends Map {
    comparator(): Comparator;
    entrySet(): Set;
    firstKey(): any;
    headMap(object: any): SortedMap;
    keySet(): Set;
    lastKey(): any;
    subMap(object: any, object: any): SortedMap;
    tailMap(object: any): SortedMap;
    values(): Collection;
}

//org.bukkit.Sound
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
    BLOCK_FROGLIGHT_BREAK,
    BLOCK_FROGLIGHT_FALL,
    BLOCK_FROGLIGHT_HIT,
    BLOCK_FROGLIGHT_PLACE,
    BLOCK_FROGLIGHT_STEP,
    BLOCK_FROGSPAWN_BREAK,
    BLOCK_FROGSPAWN_FALL,
    BLOCK_FROGSPAWN_HATCH,
    BLOCK_FROGSPAWN_HIT,
    BLOCK_FROGSPAWN_PLACE,
    BLOCK_FROGSPAWN_STEP,
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
    BLOCK_GROWING_PLANT_CROP,
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
    BLOCK_MANGROVE_ROOTS_BREAK,
    BLOCK_MANGROVE_ROOTS_FALL,
    BLOCK_MANGROVE_ROOTS_HIT,
    BLOCK_MANGROVE_ROOTS_PLACE,
    BLOCK_MANGROVE_ROOTS_STEP,
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
    BLOCK_MUDDY_MANGROVE_ROOTS_BREAK,
    BLOCK_MUDDY_MANGROVE_ROOTS_FALL,
    BLOCK_MUDDY_MANGROVE_ROOTS_HIT,
    BLOCK_MUDDY_MANGROVE_ROOTS_PLACE,
    BLOCK_MUDDY_MANGROVE_ROOTS_STEP,
    BLOCK_MUD_BREAK,
    BLOCK_MUD_BRICKS_BREAK,
    BLOCK_MUD_BRICKS_FALL,
    BLOCK_MUD_BRICKS_HIT,
    BLOCK_MUD_BRICKS_PLACE,
    BLOCK_MUD_BRICKS_STEP,
    BLOCK_MUD_FALL,
    BLOCK_MUD_HIT,
    BLOCK_MUD_PLACE,
    BLOCK_MUD_STEP,
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
    BLOCK_PACKED_MUD_BREAK,
    BLOCK_PACKED_MUD_FALL,
    BLOCK_PACKED_MUD_HIT,
    BLOCK_PACKED_MUD_PLACE,
    BLOCK_PACKED_MUD_STEP,
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
    BLOCK_SCULK_BREAK,
    BLOCK_SCULK_CATALYST_BLOOM,
    BLOCK_SCULK_CATALYST_BREAK,
    BLOCK_SCULK_CATALYST_FALL,
    BLOCK_SCULK_CATALYST_HIT,
    BLOCK_SCULK_CATALYST_PLACE,
    BLOCK_SCULK_CATALYST_STEP,
    BLOCK_SCULK_CHARGE,
    BLOCK_SCULK_FALL,
    BLOCK_SCULK_HIT,
    BLOCK_SCULK_PLACE,
    BLOCK_SCULK_SENSOR_BREAK,
    BLOCK_SCULK_SENSOR_CLICKING,
    BLOCK_SCULK_SENSOR_CLICKING_STOP,
    BLOCK_SCULK_SENSOR_FALL,
    BLOCK_SCULK_SENSOR_HIT,
    BLOCK_SCULK_SENSOR_PLACE,
    BLOCK_SCULK_SENSOR_STEP,
    BLOCK_SCULK_SHRIEKER_BREAK,
    BLOCK_SCULK_SHRIEKER_FALL,
    BLOCK_SCULK_SHRIEKER_HIT,
    BLOCK_SCULK_SHRIEKER_PLACE,
    BLOCK_SCULK_SHRIEKER_SHRIEK,
    BLOCK_SCULK_SHRIEKER_STEP,
    BLOCK_SCULK_SPREAD,
    BLOCK_SCULK_STEP,
    BLOCK_SCULK_VEIN_BREAK,
    BLOCK_SCULK_VEIN_FALL,
    BLOCK_SCULK_VEIN_HIT,
    BLOCK_SCULK_VEIN_PLACE,
    BLOCK_SCULK_VEIN_STEP,
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
    ENTITY_ALLAY_AMBIENT_WITHOUT_ITEM,
    ENTITY_ALLAY_AMBIENT_WITH_ITEM,
    ENTITY_ALLAY_DEATH,
    ENTITY_ALLAY_HURT,
    ENTITY_ALLAY_ITEM_GIVEN,
    ENTITY_ALLAY_ITEM_TAKEN,
    ENTITY_ALLAY_ITEM_THROWN,
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
    ENTITY_FROG_AMBIENT,
    ENTITY_FROG_DEATH,
    ENTITY_FROG_EAT,
    ENTITY_FROG_HURT,
    ENTITY_FROG_LAY_SPAWN,
    ENTITY_FROG_LONG_JUMP,
    ENTITY_FROG_STEP,
    ENTITY_FROG_TONGUE,
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
    ENTITY_GOAT_HORN_BREAK,
    ENTITY_GOAT_HURT,
    ENTITY_GOAT_LONG_JUMP,
    ENTITY_GOAT_MILK,
    ENTITY_GOAT_PREPARE_RAM,
    ENTITY_GOAT_RAM_IMPACT,
    ENTITY_GOAT_SCREAMING_AMBIENT,
    ENTITY_GOAT_SCREAMING_DEATH,
    ENTITY_GOAT_SCREAMING_EAT,
    ENTITY_GOAT_SCREAMING_HORN_BREAK,
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
    ENTITY_PARROT_IMITATE_WARDEN,
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
    ENTITY_TADPOLE_DEATH,
    ENTITY_TADPOLE_FLOP,
    ENTITY_TADPOLE_GROW_UP,
    ENTITY_TADPOLE_HURT,
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
    ENTITY_WARDEN_AGITATED,
    ENTITY_WARDEN_AMBIENT,
    ENTITY_WARDEN_ANGRY,
    ENTITY_WARDEN_ATTACK_IMPACT,
    ENTITY_WARDEN_DEATH,
    ENTITY_WARDEN_DIG,
    ENTITY_WARDEN_EMERGE,
    ENTITY_WARDEN_HEARTBEAT,
    ENTITY_WARDEN_HURT,
    ENTITY_WARDEN_LISTENING,
    ENTITY_WARDEN_LISTENING_ANGRY,
    ENTITY_WARDEN_NEARBY_CLOSE,
    ENTITY_WARDEN_NEARBY_CLOSER,
    ENTITY_WARDEN_NEARBY_CLOSEST,
    ENTITY_WARDEN_ROAR,
    ENTITY_WARDEN_SNIFF,
    ENTITY_WARDEN_SONIC_BOOM,
    ENTITY_WARDEN_SONIC_CHARGE,
    ENTITY_WARDEN_STEP,
    ENTITY_WARDEN_TENDRIL_CLICKS,
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
    ITEM_BUCKET_EMPTY_TADPOLE,
    ITEM_BUCKET_FILL,
    ITEM_BUCKET_FILL_AXOLOTL,
    ITEM_BUCKET_FILL_FISH,
    ITEM_BUCKET_FILL_LAVA,
    ITEM_BUCKET_FILL_POWDER_SNOW,
    ITEM_BUCKET_FILL_TADPOLE,
    ITEM_BUNDLE_DROP_CONTENTS,
    ITEM_BUNDLE_INSERT,
    ITEM_BUNDLE_REMOVE_ONE,
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
    ITEM_GOAT_HORN_PLAY,
    ITEM_GOAT_HORN_SOUND_0,
    ITEM_GOAT_HORN_SOUND_1,
    ITEM_GOAT_HORN_SOUND_2,
    ITEM_GOAT_HORN_SOUND_3,
    ITEM_GOAT_HORN_SOUND_4,
    ITEM_GOAT_HORN_SOUND_5,
    ITEM_GOAT_HORN_SOUND_6,
    ITEM_GOAT_HORN_SOUND_7,
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
    MUSIC_DISC_5,
    MUSIC_DISC_BLOCKS,
    MUSIC_DISC_CAT,
    MUSIC_DISC_CHIRP,
    MUSIC_DISC_FAR,
    MUSIC_DISC_MALL,
    MUSIC_DISC_MELLOHI,
    MUSIC_DISC_OTHERSIDE,
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
    MUSIC_OVERWORLD_DEEP_DARK,
    MUSIC_OVERWORLD_DRIPSTONE_CAVES,
    MUSIC_OVERWORLD_FROZEN_PEAKS,
    MUSIC_OVERWORLD_GROVE,
    MUSIC_OVERWORLD_JAGGED_PEAKS,
    MUSIC_OVERWORLD_JUNGLE_AND_FOREST,
    MUSIC_OVERWORLD_LUSH_CAVES,
    MUSIC_OVERWORLD_MEADOW,
    MUSIC_OVERWORLD_OLD_GROWTH_TAIGA,
    MUSIC_OVERWORLD_SNOWY_SLOPES,
    MUSIC_OVERWORLD_STONY_PEAKS,
    MUSIC_OVERWORLD_SWAMP,
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

//org.bukkit.SoundCategory
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

//org.bukkit.SoundGroup
declare interface SoundGroup {
    getBreakSound(): Sound;
    getFallSound(): Sound;
    getHitSound(): Sound;
    getPitch(): number;
    getPlaceSound(): Sound;
    getStepSound(): Sound;
    getVolume(): number;
}

//java.nio.channels.Pipe$SourceChannel
declare interface SourceChannel extends AbstractSelectableChannel, ReadableByteChannel, ScatteringByteChannel {
    validOps(): number;
}

//org.bukkit.entity.SpawnCategory
declare enum SpawnCategory {
    MONSTER,
    ANIMAL,
    WATER_ANIMAL,
    WATER_AMBIENT,
    WATER_UNDERGROUND_CREATURE,
    AMBIENT,
    AXOLOTL,
    MISC,
}

//org.bukkit.event.world.SpawnChangeEvent
declare interface SpawnChangeEvent extends WorldEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getPreviousLocation(): Location;
}

//org.bukkit.material.SpawnEgg
declare interface SpawnEgg extends MaterialData {
    getSpawnedType(): EntityType;
    setSpawnedType(entityType: EntityType): void;
}

//org.bukkit.inventory.meta.SpawnEggMeta
declare interface SpawnEggMeta extends ItemMeta {
    clone(): ItemMeta;
    clone(): any;
    clone(): SpawnEggMeta;
    getSpawnedType(): EntityType;
    setSpawnedType(entityType: EntityType): void;
}

//org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason
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
    SPELL,
    FROZEN,
    METAMORPHOSIS,
    COMMAND,
    CUSTOM,
    DEFAULT,
}

//org.bukkit.entity.minecart.SpawnerMinecart
declare interface SpawnerMinecart extends Minecart {
}

//org.bukkit.event.entity.SpawnerSpawnEvent
declare interface SpawnerSpawnEvent extends EntitySpawnEvent {
    getSpawner(): CreatureSpawner;
}

//org.bukkit.entity.SpectralArrow
declare interface SpectralArrow extends AbstractArrow {
    getGlowingTicks(): number;
    setGlowingTicks(i: number): void;
}

//org.bukkit.entity.Spellcaster$Spell
declare enum Spell {
    NONE,
    SUMMON_VEX,
    FANGS,
    WOLOLO,
    DISAPPEAR,
    BLINDNESS,
}

//org.bukkit.entity.Evoker$Spell
declare enum Spell {
    NONE,
    SUMMON,
    FANGS,
    WOLOLO,
    DISAPPEAR,
    BLINDNESS,
}

//org.bukkit.entity.Spellcaster
declare interface Spellcaster extends Illager {
    getSpell(): Spell;
    setSpell(spell: Spell): void;
}

//org.bukkit.entity.Spider
declare interface Spider extends Monster {
}

//org.bukkit.World$Spigot
declare interface Spigot {
    strikeLightning(location: Location, b: boolean): LightningStrike;
    strikeLightningEffect(location: Location, b: boolean): LightningStrike;
}

//org.bukkit.inventory.meta.BookMeta$Spigot
declare interface Spigot {
    addPage(baseComponent: BaseComponent): void;
    getPage(i: number): BaseComponent[];
    getPages(): List;
    setPage(i: number, baseComponent: BaseComponent): void;
    setPages(baseComponent: BaseComponent): void;
    setPages(list: List): void;
}

//org.bukkit.Server$Spigot
declare interface Spigot {
    broadcast(baseComponent: BaseComponent): void;
    broadcast(baseComponent: BaseComponent): void;
    getConfig(): YamlConfiguration;
    restart(): void;
}

//org.bukkit.entity.LightningStrike$Spigot
declare interface Spigot extends Spigot {
    isSilent(): boolean;
}

//org.bukkit.command.CommandSender$Spigot
declare interface Spigot {
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(uUID: UUID, baseComponent: BaseComponent): void;
}

//org.bukkit.entity.Player$Spigot
declare interface Spigot extends Spigot {
    getCollidesWithEntities(): boolean;
    getHiddenPlayers(): Set;
    getRawAddress(): InetSocketAddress;
    respawn(): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, uUID: UUID, baseComponent: BaseComponent): void;
    sendMessage(chatMessageType: ChatMessageType, uUID: UUID, baseComponent: BaseComponent): void;
    setCollidesWithEntities(b: boolean): void;
}

//org.bukkit.entity.Entity$Spigot
declare interface Spigot extends Spigot {
}

//org.bukkit.entity.SplashPotion
declare interface SplashPotion extends ThrownPotion {
}

//java.util.Spliterator
declare interface Spliterator {
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(consumer: Consumer): void;
    getComparator(): Comparator;
    getExactSizeIfKnown(): number;
    hasCharacteristics(i: number): boolean;
    tryAdvance(consumer: Consumer): boolean;
    trySplit(): Spliterator;
    CONCURRENT: number;
    DISTINCT: number;
    IMMUTABLE: number;
    NONNULL: number;
    ORDERED: number;
    SIZED: number;
    SORTED: number;
    SUBSIZED: number;
}

//org.bukkit.event.block.SpongeAbsorbEvent
declare interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
    getBlocks(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.entity.Squid
declare interface Squid extends WaterMob {
}

//java.lang.StackTraceElement
declare interface StackTraceElement extends Serializable {
    getClassLoaderName(): string;
    getClassName(): string;
    getFileName(): string;
    getLineNumber(): number;
    getMethodName(): string;
    getModuleName(): string;
    getModuleVersion(): string;
    isNativeMethod(): boolean;
}

//org.bukkit.material.Stairs
declare interface Stairs extends MaterialData, Directional {
    getAscendingDirection(): BlockFace;
    getDescendingDirection(): BlockFace;
    getFacing(): BlockFace;
    isInverted(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setInverted(b: boolean): void;
}

//org.bukkit.block.data.type.Stairs
declare interface Stairs extends Bisected, Directional, Waterlogged {
    getShape(): Shape;
    setShape(shape: Shape): void;
}

//org.bukkit.plugin.messaging.StandardMessenger
declare interface StandardMessenger extends Messenger {
    dispatchIncomingMessage(player: Player, s: string, b: number): void;
    getIncomingChannelRegistrations(plugin: Plugin): Set;
    getIncomingChannelRegistrations(s: string): Set;
    getIncomingChannelRegistrations(plugin: Plugin, s: string): Set;
    getIncomingChannels(): Set;
    getIncomingChannels(plugin: Plugin): Set;
    getOutgoingChannels(): Set;
    getOutgoingChannels(plugin: Plugin): Set;
    isIncomingChannelRegistered(plugin: Plugin, s: string): boolean;
    isOutgoingChannelRegistered(plugin: Plugin, s: string): boolean;
    isRegistrationValid(pluginMessageListenerRegistration: PluginMessageListenerRegistration): boolean;
    isReservedChannel(s: string): boolean;
    registerIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): PluginMessageListenerRegistration;
    registerOutgoingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, s: string, pluginMessageListener: PluginMessageListener): void;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, s: string): void;
    validateAndCorrectChannel(s: string): string;
    validateChannel(s: string): void;
    validatePluginMessage(messenger: Messenger, plugin: Plugin, s: string, b: number): void;
}

//org.bukkit.event.player.PlayerFishEvent$State
declare enum State {
    FISHING,
    CAUGHT_FISH,
    CAUGHT_ENTITY,
    IN_GROUND,
    FAILED_ATTEMPT,
    REEL_IN,
    BITE,
}

//java.lang.Thread$State
declare enum State {
    NEW,
    RUNNABLE,
    BLOCKED,
    WAITING,
    TIMED_WAITING,
    TERMINATED,
}

//org.bukkit.Statistic
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

//org.bukkit.event.player.PlayerResourcePackStatusEvent$Status
declare enum Status {
    SUCCESSFULLY_LOADED,
    DECLINED,
    FAILED_DOWNLOAD,
    ACCEPTED,
}

//java.io.ObjectInputFilter$Status
declare enum Status {
    UNDECIDED,
    ALLOWED,
    REJECTED,
}

//javax.net.ssl.SSLEngineResult$Status
declare enum Status {
    BUFFER_UNDERFLOW,
    BUFFER_OVERFLOW,
    OK,
    CLOSED,
}

//org.bukkit.entity.Steerable
declare interface Steerable extends Animals {
    getBoostTicks(): number;
    getCurrentBoostTicks(): number;
    getSteerMaterial(): Material;
    hasSaddle(): boolean;
    setBoostTicks(i: number): void;
    setCurrentBoostTicks(i: number): void;
    setSaddle(b: boolean): void;
}

//org.bukkit.material.Step
declare interface Step extends TexturedMaterial {
    isInverted(): boolean;
    setInverted(b: boolean): void;
}

//org.bukkit.inventory.StonecutterInventory
declare interface StonecutterInventory extends Inventory {
}

//org.bukkit.inventory.StonecuttingRecipe
declare interface StonecuttingRecipe extends Recipe, Keyed {
    getGroup(): string;
    getInput(): ItemStack;
    getInputChoice(): RecipeChoice;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    setGroup(s: string): void;
    setInput(material: Material): StonecuttingRecipe;
    setInputChoice(recipeChoice: RecipeChoice): StonecuttingRecipe;
}

//org.bukkit.entity.minecart.StorageMinecart
declare interface StorageMinecart extends Minecart, InventoryHolder, Lootable {
}

//org.bukkit.entity.Stray
declare interface Stray extends AbstractSkeleton {
}

//java.util.stream.Stream
declare interface Stream extends BaseStream {
    allMatch(predicate: Predicate): boolean;
    anyMatch(predicate: Predicate): boolean;
    builder(): Builder;
    collect(collector: Collector): any;
    collect(supplier: Supplier, biConsumer: BiConsumer, biConsumer: BiConsumer): any;
    concat(stream: Stream, stream: Stream): Stream;
    count(): number;
    distinct(): Stream;
    dropWhile(predicate: Predicate): Stream;
    empty(): Stream;
    filter(predicate: Predicate): Stream;
    findAny(): Optional;
    findFirst(): Optional;
    flatMap(func: Function): Stream;
    flatMapToDouble(func: Function): DoubleStream;
    flatMapToInt(func: Function): IntStream;
    flatMapToLong(func: Function): LongStream;
    forEach(consumer: Consumer): void;
    forEachOrdered(consumer: Consumer): void;
    generate(supplier: Supplier): Stream;
    iterate(object: any, func: UnaryOperator): Stream;
    iterate(object: any, predicate: Predicate, func: UnaryOperator): Stream;
    limit(l: number): Stream;
    map(func: Function): Stream;
    mapMulti(biConsumer: BiConsumer): Stream;
    mapMultiToDouble(biConsumer: BiConsumer): DoubleStream;
    mapMultiToInt(biConsumer: BiConsumer): IntStream;
    mapMultiToLong(biConsumer: BiConsumer): LongStream;
    mapToDouble(toDoubleFunction: ToDoubleFunction): DoubleStream;
    mapToInt(toIntFunction: ToIntFunction): IntStream;
    mapToLong(toLongFunction: ToLongFunction): LongStream;
    max(comparator: Comparator): Optional;
    min(comparator: Comparator): Optional;
    noneMatch(predicate: Predicate): boolean;
    of(object: any): Stream;
    of(object: any): Stream;
    ofNullable(object: any): Stream;
    peek(consumer: Consumer): Stream;
    reduce(binaryOperator: BinaryOperator): Optional;
    reduce(object: any, binaryOperator: BinaryOperator): any;
    reduce(object: any, biFunction: BiFunction, binaryOperator: BinaryOperator): any;
    skip(l: number): Stream;
    sorted(): Stream;
    sorted(comparator: Comparator): Stream;
    takeWhile(predicate: Predicate): Stream;
    toArray(): any[];
    toArray(intFunction: IntFunction): any[];
    toList(): List;
}

//org.bukkit.entity.Strider
declare interface Strider extends Steerable, Vehicle {
    isShivering(): boolean;
    setShivering(b: boolean): void;
}

//org.bukkit.event.entity.StriderTemperatureChangeEvent
declare interface StriderTemperatureChangeEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isShivering(): boolean;
    setCancelled(b: boolean): void;
}

//java.lang.String
declare interface String extends Serializable, Comparable, CharSequence, Constable, ConstantDesc {
    charAt(i: number): string;
    chars(): IntStream;
    codePointAt(i: number): number;
    codePointBefore(i: number): number;
    codePointCount(i: number, i: number): number;
    codePoints(): IntStream;
    compareTo(s: string): number;
    compareTo(object: any): number;
    compareToIgnoreCase(s: string): number;
    concat(s: string): string;
    contains(s: string): boolean;
    contentEquals(s: string): boolean;
    contentEquals(s: string): boolean;
    copyValueOf(c: string): string;
    copyValueOf(c: string, i: number, i: number): string;
    describeConstable(): Optional;
    endsWith(s: string): boolean;
    equalsIgnoreCase(s: string): boolean;
    format(s: string, object: any): string;
    format(locale: Locale, s: string, object: any): string;
    formatted(object: any): string;
    getBytes(): number[];
    getBytes(charset: Charset): number[];
    getBytes(s: string): number[];
    getBytes(i: number, i: number, b: number, i: number): void;
    getChars(i: number, i: number, c: string, i: number): void;
    indent(i: number): string;
    indexOf(i: number): number;
    indexOf(s: string): number;
    indexOf(s: string, i: number): number;
    indexOf(i: number, i: number): number;
    intern(): string;
    isBlank(): boolean;
    isEmpty(): boolean;
    join(s: string, s: string): string;
    join(s: string, iterable: Iterable): string;
    lastIndexOf(s: string): number;
    lastIndexOf(i: number): number;
    lastIndexOf(s: string, i: number): number;
    lastIndexOf(i: number, i: number): number;
    length(): number;
    lines(): Stream;
    matches(s: string): boolean;
    offsetByCodePoints(i: number, i: number): number;
    regionMatches(i: number, s: string, i: number, i: number): boolean;
    regionMatches(b: boolean, i: number, s: string, i: number, i: number): boolean;
    repeat(i: number): string;
    replace(c: string, c: string): string;
    replace(s: string, s: string): string;
    replaceAll(s: string, s: string): string;
    replaceFirst(s: string, s: string): string;
    resolveConstantDesc(lookup: Lookup): any;
    resolveConstantDesc(lookup: Lookup): string;
    split(s: string): string[];
    split(s: string, i: number): string[];
    startsWith(s: string): boolean;
    startsWith(s: string, i: number): boolean;
    strip(): string;
    stripIndent(): string;
    stripLeading(): string;
    stripTrailing(): string;
    subSequence(i: number, i: number): string;
    substring(i: number): string;
    substring(i: number, i: number): string;
    toCharArray(): string[];
    toLowerCase(): string;
    toLowerCase(locale: Locale): string;
    toUpperCase(): string;
    toUpperCase(locale: Locale): string;
    transform(func: Function): any;
    translateEscapes(): string;
    trim(): string;
    valueOf(i: number): string;
    valueOf(c: string): string;
    valueOf(object: any): string;
    valueOf(b: boolean): string;
    valueOf(c: string): string;
    valueOf(d: number): string;
    valueOf(f: number): string;
    valueOf(l: number): string;
    valueOf(c: string, i: number, i: number): string;
    CASE_INSENSITIVE_ORDER: Comparator;
}

//java.lang.StringBuffer
declare interface StringBuffer extends AbstractStringBuilder, Serializable, Comparable, CharSequence {
    compareTo(s: string): number;
    compareTo(object: any): number;
}

//java.lang.StringBuilder
declare interface StringBuilder extends AbstractStringBuilder, Serializable, Comparable, CharSequence {
    compareTo(object: any): number;
    compareTo(s: string): number;
}

//org.bukkit.conversations.StringPrompt
declare interface StringPrompt extends Prompt {
    blocksForInput(conversationContext: ConversationContext): boolean;
}

//org.bukkit.util.StringUtil
declare interface StringUtil {
    copyPartialMatches(s: string, iterable: Iterable, collection: Collection): Collection;
    startsWithIgnoreCase(s: string, s: string): boolean;
}

//java.awt.Stroke
declare interface Stroke {
    createStrokedShape(shape: Shape): Shape;
}

//org.bukkit.structure.Structure
declare interface Structure extends PersistentDataHolder {
    fill(location: Location, blockVector: BlockVector, b: boolean): void;
    fill(location: Location, location: Location, b: boolean): void;
    getEntities(): List;
    getEntityCount(): number;
    getPaletteCount(): number;
    getPalettes(): List;
    getSize(): BlockVector;
    place(location: Location, b: boolean, structureRotation: StructureRotation, mirror: Mirror, i: number, f: number, random: Random): void;
    place(regionAccessor: RegionAccessor, blockVector: BlockVector, b: boolean, structureRotation: StructureRotation, mirror: Mirror, i: number, f: number, random: Random): void;
}

//org.bukkit.block.Structure
declare interface Structure extends TileState {
    getAuthor(): string;
    getIntegrity(): number;
    getMetadata(): string;
    getMirror(): Mirror;
    getRelativePosition(): BlockVector;
    getRotation(): StructureRotation;
    getSeed(): number;
    getStructureName(): string;
    getStructureSize(): BlockVector;
    getUsageMode(): UsageMode;
    isBoundingBoxVisible(): boolean;
    isIgnoreEntities(): boolean;
    isShowAir(): boolean;
    setAuthor(livingEntity: LivingEntity): void;
    setAuthor(s: string): void;
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

//org.bukkit.block.data.type.StructureBlock
declare interface StructureBlock extends BlockData {
    getMode(): Mode;
    setMode(mode: Mode): void;
}

//org.bukkit.event.world.StructureGrowEvent
declare interface StructureGrowEvent extends WorldEvent, Cancellable {
    getBlocks(): List;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getLocation(): Location;
    getPlayer(): Player;
    getSpecies(): TreeType;
    isCancelled(): boolean;
    isFromBonemeal(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.structure.StructureManager
declare interface StructureManager {
    copy(structure: Structure): Structure;
    createStructure(): Structure;
    deleteStructure(namespacedKey: NamespacedKey): void;
    deleteStructure(namespacedKey: NamespacedKey, b: boolean): void;
    getStructure(namespacedKey: NamespacedKey): Structure;
    getStructureFile(namespacedKey: NamespacedKey): File;
    getStructures(): Map;
    loadStructure(inputStream: InputStream): Structure;
    loadStructure(file: File): Structure;
    loadStructure(namespacedKey: NamespacedKey): Structure;
    loadStructure(namespacedKey: NamespacedKey, b: boolean): Structure;
    registerStructure(namespacedKey: NamespacedKey, structure: Structure): Structure;
    saveStructure(namespacedKey: NamespacedKey): void;
    saveStructure(file: File, structure: Structure): void;
    saveStructure(outputStream: OutputStream, structure: Structure): void;
    saveStructure(namespacedKey: NamespacedKey, structure: Structure): void;
    unregisterStructure(namespacedKey: NamespacedKey): Structure;
}

//org.bukkit.block.structure.StructureRotation
declare enum StructureRotation {
    NONE,
    CLOCKWISE_90,
    CLOCKWISE_180,
    COUNTERCLOCKWISE_90,
}

//org.bukkit.StructureType
declare interface StructureType extends Keyed {
    getKey(): NamespacedKey;
    getMapIcon(): Type;
    getName(): string;
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

//org.bukkit.entity.Horse$Style
declare enum Style {
    NONE,
    WHITE,
    WHITEFIELD,
    WHITE_DOTS,
    BLACK_DOTS,
}

//javax.security.auth.Subject
declare interface Subject extends Serializable {
    doAs(subject: Subject, privilegedAction: PrivilegedAction): any;
    doAs(subject: Subject, privilegedExceptionAction: PrivilegedExceptionAction): any;
    doAsPrivileged(subject: Subject, privilegedAction: PrivilegedAction, accessControlContext: AccessControlContext): any;
    doAsPrivileged(subject: Subject, privilegedExceptionAction: PrivilegedExceptionAction, accessControlContext: AccessControlContext): any;
    getPrincipals(): Set;
    getPrincipals(clazz: Class): Set;
    getPrivateCredentials(): Set;
    getPrivateCredentials(clazz: Class): Set;
    getPublicCredentials(): Set;
    getPublicCredentials(clazz: Class): Set;
    getSubject(accessControlContext: AccessControlContext): Subject;
    isReadOnly(): boolean;
    setReadOnly(): void;
}

//java.util.concurrent.Flow$Subscriber
declare interface Subscriber {
    onComplete(): void;
    onError(throwable: Throwable): void;
    onNext(object: any): void;
    onSubscribe(subscription: Subscription): void;
}

//java.util.concurrent.Flow$Subscription
declare interface Subscription {
    cancel(): void;
    request(l: number): void;
}

//java.lang.Character$Subset
declare interface Subset {
}

//java.util.function.Supplier
declare interface Supplier {
    get(): any;
}

//org.bukkit.inventory.meta.SuspiciousStewMeta
declare interface SuspiciousStewMeta extends ItemMeta {
    addCustomEffect(potionEffect: PotionEffect, b: boolean): boolean;
    clearCustomEffects(): boolean;
    clone(): ItemMeta;
    clone(): SuspiciousStewMeta;
    clone(): any;
    getCustomEffects(): List;
    hasCustomEffect(potionEffectType: PotionEffectType): boolean;
    hasCustomEffects(): boolean;
    removeCustomEffect(potionEffectType: PotionEffectType): boolean;
}

//org.bukkit.block.data.type.Switch
declare interface Switch extends Directional, FaceAttachable, Powerable {
    getFace(): Face;
    setFace(face: Face): void;
}

//org.bukkit.block.data.type.TNT
declare interface TNT extends BlockData {
    isUnstable(): boolean;
    setUnstable(b: boolean): void;
}

//org.bukkit.entity.TNTPrimed
declare interface TNTPrimed extends Explosive {
    getFuseTicks(): number;
    getSource(): Entity;
    setFuseTicks(i: number): void;
    setSource(entity: Entity): void;
}

//org.bukkit.event.server.TabCompleteEvent
declare interface TabCompleteEvent extends Event, Cancellable {
    getBuffer(): string;
    getCompletions(): List;
    getHandlerList(): HandlerList;
    getSender(): CommandSender;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setCompletions(list: List): void;
}

//org.bukkit.command.TabCompleter
declare interface TabCompleter {
    onTabComplete(commandSender: CommandSender, command: Command, s: string, s: string): List;
}

//org.bukkit.command.TabExecutor
declare interface TabExecutor extends TabCompleter, CommandExecutor {
}

//org.bukkit.entity.Tadpole
declare interface Tadpole extends Fish {
    getAge(): number;
    setAge(i: number): void;
}

//org.bukkit.Tag
declare interface Tag extends Keyed {
    getValues(): Set;
    isTagged(keyed: Keyed): boolean;
    ACACIA_LOGS: Tag;
    ANCIENT_CITY_REPLACEABLE: Tag;
    ANIMALS_SPAWNABLE_ON: Tag;
    ANVIL: Tag;
    AXOLOTLS_SPAWNABLE_ON: Tag;
    AXOLOTL_TEMPT_ITEMS: Tag;
    AZALEA_GROWS_ON: Tag;
    AZALEA_ROOT_REPLACEABLE: Tag;
    BAMBOO_PLANTABLE_ON: Tag;
    BANNERS: Tag;
    BASE_STONE_NETHER: Tag;
    BASE_STONE_OVERWORLD: Tag;
    BEACON_BASE_BLOCKS: Tag;
    BEDS: Tag;
    BEEHIVES: Tag;
    BEE_GROWABLES: Tag;
    BIG_DRIPLEAF_PLACEABLE: Tag;
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
    COMPLETES_FIND_TREE_TUTORIAL: Tag;
    CONVERTABLE_TO_MUD: Tag;
    COPPER_ORES: Tag;
    CORALS: Tag;
    CORAL_BLOCKS: Tag;
    CORAL_PLANTS: Tag;
    CRIMSON_STEMS: Tag;
    CROPS: Tag;
    CRYSTAL_SOUND_BLOCKS: Tag;
    DAMPENS_VIBRATIONS: Tag;
    DARK_OAK_LOGS: Tag;
    DEAD_BUSH_MAY_PLACE_ON: Tag;
    DEEPSLATE_ORE_REPLACEABLES: Tag;
    DIAMOND_ORES: Tag;
    DIRT: Tag;
    DOORS: Tag;
    DRAGON_IMMUNE: Tag;
    DRAGON_TRANSPARENT: Tag;
    DRIPSTONE_REPLACEABLE: Tag;
    EMERALD_ORES: Tag;
    ENDERMAN_HOLDABLE: Tag;
    ENTITY_TYPES_ARROWS: Tag;
    ENTITY_TYPES_AXOLOTL_ALWAYS_HOSTILES: Tag;
    ENTITY_TYPES_AXOLOTL_HUNT_TARGETS: Tag;
    ENTITY_TYPES_BEEHIVE_INHABITORS: Tag;
    ENTITY_TYPES_FREEZE_HURTS_EXTRA_TYPES: Tag;
    ENTITY_TYPES_FREEZE_IMMUNE_ENTITY_TYPES: Tag;
    ENTITY_TYPES_FROG_FOOD: Tag;
    ENTITY_TYPES_IMPACT_PROJECTILES: Tag;
    ENTITY_TYPES_POWDER_SNOW_WALKABLE_MOBS: Tag;
    ENTITY_TYPES_RAIDERS: Tag;
    ENTITY_TYPES_SKELETONS: Tag;
    FALL_DAMAGE_RESETTING: Tag;
    FEATURES_CANNOT_REPLACE: Tag;
    FENCES: Tag;
    FENCE_GATES: Tag;
    FIRE: Tag;
    FLOWERS: Tag;
    FLOWER_POTS: Tag;
    FLUIDS_LAVA: Tag;
    FLUIDS_WATER: Tag;
    FOXES_SPAWNABLE_ON: Tag;
    FOX_FOOD: Tag;
    FREEZE_IMMUNE_WEARABLES: Tag;
    FROGS_SPAWNABLE_ON: Tag;
    FROG_PREFER_JUMP_TO: Tag;
    GEODE_INVALID_BLOCKS: Tag;
    GOATS_SPAWNABLE_ON: Tag;
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
    ITEMS_CHEST_BOATS: Tag;
    ITEMS_COALS: Tag;
    ITEMS_COMPASSES: Tag;
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
    MANGROVE_LOGS: Tag;
    MANGROVE_LOGS_CAN_GROW_THROUGH: Tag;
    MANGROVE_ROOTS_CAN_GROW_THROUGH: Tag;
    MINEABLE_AXE: Tag;
    MINEABLE_HOE: Tag;
    MINEABLE_PICKAXE: Tag;
    MINEABLE_SHOVEL: Tag;
    MOOSHROOMS_SPAWNABLE_ON: Tag;
    MOSS_REPLACEABLE: Tag;
    MUSHROOM_GROW_BLOCK: Tag;
    NEEDS_DIAMOND_TOOL: Tag;
    NEEDS_IRON_TOOL: Tag;
    NEEDS_STONE_TOOL: Tag;
    NETHER_CARVER_REPLACEABLES: Tag;
    NON_FLAMMABLE_WOOD: Tag;
    NYLIUM: Tag;
    OAK_LOGS: Tag;
    OCCLUDES_VIBRATION_SIGNALS: Tag;
    OVERWORLD_CARVER_REPLACEABLES: Tag;
    OVERWORLD_NATURAL_LOGS: Tag;
    PARROTS_SPAWNABLE_ON: Tag;
    PIGLIN_FOOD: Tag;
    PIGLIN_REPELLENTS: Tag;
    PLANKS: Tag;
    POLAR_BEARS_SPAWNABLE_ON_ALTERNATE: Tag;
    POLAR_BEARS_SPAWNABLE_ON_IN_FROZEN_OCEAN: Tag;
    PORTALS: Tag;
    PRESSURE_PLATES: Tag;
    PREVENT_MOB_SPAWNING_INSIDE: Tag;
    RABBITS_SPAWNABLE_ON: Tag;
    RAILS: Tag;
    REDSTONE_ORES: Tag;
    REGISTRY_BLOCKS: string;
    REGISTRY_ENTITY_TYPES: string;
    REGISTRY_FLUIDS: string;
    REGISTRY_ITEMS: string;
    REPLACEABLE_PLANTS: Tag;
    SAND: Tag;
    SAPLINGS: Tag;
    SCULK_REPLACEABLE: Tag;
    SCULK_REPLACEABLE_WORLD_GEN: Tag;
    SHULKER_BOXES: Tag;
    SIGNS: Tag;
    SLABS: Tag;
    SMALL_DRIPLEAF_PLACEABLE: Tag;
    SMALL_FLOWERS: Tag;
    SNAPS_GOAT_HORN: Tag;
    SNOW: Tag;
    SNOW_LAYER_CANNOT_SURVIVE_ON: Tag;
    SNOW_LAYER_CAN_SURVIVE_ON: Tag;
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
    TERRACOTTA: Tag;
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
    WOLVES_SPAWNABLE_ON: Tag;
    WOODEN_BUTTONS: Tag;
    WOODEN_DOORS: Tag;
    WOODEN_FENCES: Tag;
    WOODEN_PRESSURE_PLATES: Tag;
    WOODEN_SLABS: Tag;
    WOODEN_STAIRS: Tag;
    WOODEN_TRAPDOORS: Tag;
    WOOL: Tag;
    WOOL_CARPETS: Tag;
}

//org.yaml.snakeyaml.nodes.Tag
declare interface Tag {
    getClassName(): string;
    getValue(): string;
    isCompatible(clazz: Class): boolean;
    isSecondary(): boolean;
    matches(clazz: Class): boolean;
    startsWith(s: string): boolean;
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
    PREFIX: string;
    SEQ: Tag;
    SET: Tag;
    STR: Tag;
    TIMESTAMP: Tag;
    YAML: Tag;
}

//org.bukkit.entity.Tameable
declare interface Tameable extends Animals {
    getOwner(): AnimalTamer;
    isTamed(): boolean;
    setOwner(animalTamer: AnimalTamer): void;
    setTamed(b: boolean): void;
}

//org.bukkit.event.entity.EntityTargetEvent$TargetReason
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

//org.bukkit.scoreboard.Team
declare interface Team {
    addEntry(s: string): void;
    addPlayer(offlinePlayer: OfflinePlayer): void;
    allowFriendlyFire(): boolean;
    canSeeFriendlyInvisibles(): boolean;
    getColor(): ChatColor;
    getDisplayName(): string;
    getEntries(): Set;
    getName(): string;
    getNameTagVisibility(): NameTagVisibility;
    getOption(option: Option): OptionStatus;
    getPlayers(): Set;
    getPrefix(): string;
    getScoreboard(): Scoreboard;
    getSize(): number;
    getSuffix(): string;
    hasEntry(s: string): boolean;
    hasPlayer(offlinePlayer: OfflinePlayer): boolean;
    removeEntry(s: string): boolean;
    removePlayer(offlinePlayer: OfflinePlayer): boolean;
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

//org.bukkit.block.data.type.TechnicalPiston
declare interface TechnicalPiston extends Directional {
    getType(): Type;
    setType(type: Type): void;
}

//org.bukkit.event.player.PlayerTeleportEvent$TeleportCause
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

//java.time.temporal.Temporal
declare interface Temporal extends TemporalAccessor {
    isSupported(temporalUnit: TemporalUnit): boolean;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalField: TemporalField, l: number): Temporal;
}

//java.time.temporal.TemporalAccessor
declare interface TemporalAccessor {
    get(temporalField: TemporalField): number;
    getLong(temporalField: TemporalField): number;
    isSupported(temporalField: TemporalField): boolean;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
}

//java.time.temporal.TemporalAdjuster
declare interface TemporalAdjuster {
    adjustInto(temporal: Temporal): Temporal;
}

//java.time.temporal.TemporalAmount
declare interface TemporalAmount {
    addTo(temporal: Temporal): Temporal;
    get(temporalUnit: TemporalUnit): number;
    getUnits(): List;
    subtractFrom(temporal: Temporal): Temporal;
}

//java.time.temporal.TemporalField
declare interface TemporalField {
    adjustInto(temporal: Temporal, l: number): Temporal;
    getBaseUnit(): TemporalUnit;
    getDisplayName(locale: Locale): string;
    getFrom(temporalAccessor: TemporalAccessor): number;
    getRangeUnit(): TemporalUnit;
    isDateBased(): boolean;
    isSupportedBy(temporalAccessor: TemporalAccessor): boolean;
    isTimeBased(): boolean;
    range(): ValueRange;
    rangeRefinedBy(temporalAccessor: TemporalAccessor): ValueRange;
    resolve(map: Map, temporalAccessor: TemporalAccessor, resolverStyle: ResolverStyle): TemporalAccessor;
    toString(): string;
}

//java.time.temporal.TemporalQuery
declare interface TemporalQuery {
    queryFrom(temporalAccessor: TemporalAccessor): any;
}

//java.time.temporal.TemporalUnit
declare interface TemporalUnit {
    addTo(temporal: Temporal, l: number): Temporal;
    between(temporal: Temporal, temporal: Temporal): number;
    getDuration(): Duration;
    isDateBased(): boolean;
    isDurationEstimated(): boolean;
    isSupportedBy(temporal: Temporal): boolean;
    isTimeBased(): boolean;
    toString(): string;
}

//java.awt.font.TextHitInfo
declare interface TextHitInfo {
    afterOffset(i: number): TextHitInfo;
    beforeOffset(i: number): TextHitInfo;
    equals(textHitInfo: TextHitInfo): boolean;
    getCharIndex(): number;
    getInsertionIndex(): number;
    getOffsetHit(i: number): TextHitInfo;
    getOtherHit(): TextHitInfo;
    isLeadingEdge(): boolean;
    leading(i: number): TextHitInfo;
    trailing(i: number): TextHitInfo;
}

//java.time.format.TextStyle
declare enum TextStyle {
    FULL,
    FULL_STANDALONE,
    SHORT,
    SHORT_STANDALONE,
    NARROW,
    NARROW_STANDALONE,
}

//org.bukkit.material.TexturedMaterial
declare interface TexturedMaterial extends MaterialData {
    getMaterial(): Material;
    getTextures(): List;
    setMaterial(material: Material): void;
}

//org.bukkit.block.data.type.PointedDripstone$Thickness
declare enum Thickness {
    TIP_MERGE,
    TIP,
    FRUSTUM,
    MIDDLE,
    BASE,
}

//java.lang.Thread
declare interface Thread extends Runnable {
    activeCount(): number;
    checkAccess(): void;
    countStackFrames(): number;
    currentThread(): Thread;
    dumpStack(): void;
    enumerate(thread: Thread): number;
    getAllStackTraces(): Map;
    getContextClassLoader(): ClassLoader;
    getDefaultUncaughtExceptionHandler(): UncaughtExceptionHandler;
    getId(): number;
    getName(): string;
    getPriority(): number;
    getStackTrace(): StackTraceElement[];
    getState(): State;
    getThreadGroup(): ThreadGroup;
    getUncaughtExceptionHandler(): UncaughtExceptionHandler;
    holdsLock(object: any): boolean;
    interrupt(): void;
    interrupted(): boolean;
    isAlive(): boolean;
    isDaemon(): boolean;
    isInterrupted(): boolean;
    join(): void;
    join(l: number): void;
    join(l: number, i: number): void;
    onSpinWait(): void;
    resume(): void;
    run(): void;
    setContextClassLoader(classLoader: ClassLoader): void;
    setDaemon(b: boolean): void;
    setDefaultUncaughtExceptionHandler(uncaughtExceptionHandler: UncaughtExceptionHandler): void;
    setName(s: string): void;
    setPriority(i: number): void;
    setUncaughtExceptionHandler(uncaughtExceptionHandler: UncaughtExceptionHandler): void;
    sleep(l: number): void;
    sleep(l: number, i: number): void;
    start(): void;
    stop(): void;
    suspend(): void;
    yield(): void;
    MAX_PRIORITY: number;
    MIN_PRIORITY: number;
    NORM_PRIORITY: number;
}

//java.lang.ThreadGroup
declare interface ThreadGroup extends UncaughtExceptionHandler {
    activeCount(): number;
    activeGroupCount(): number;
    allowThreadSuspension(b: boolean): boolean;
    checkAccess(): void;
    destroy(): void;
    enumerate(threadGroup: ThreadGroup): number;
    enumerate(thread: Thread): number;
    enumerate(threadGroup: ThreadGroup, b: boolean): number;
    enumerate(thread: Thread, b: boolean): number;
    getMaxPriority(): number;
    getName(): string;
    getParent(): ThreadGroup;
    interrupt(): void;
    isDaemon(): boolean;
    isDestroyed(): boolean;
    list(): void;
    parentOf(threadGroup: ThreadGroup): boolean;
    resume(): void;
    setDaemon(b: boolean): void;
    setMaxPriority(i: number): void;
    stop(): void;
    suspend(): void;
    uncaughtException(thread: Thread, throwable: Throwable): void;
}

//java.lang.Throwable
declare interface Throwable extends Serializable {
    addSuppressed(throwable: Throwable): void;
    fillInStackTrace(): Throwable;
    getCause(): Throwable;
    getLocalizedMessage(): string;
    getMessage(): string;
    getStackTrace(): StackTraceElement[];
    getSuppressed(): Throwable[];
    initCause(throwable: Throwable): Throwable;
    printStackTrace(): void;
    printStackTrace(printStream: PrintStream): void;
    printStackTrace(printWriter: PrintWriter): void;
    setStackTrace(stackTraceElement: StackTraceElement): void;
}

//org.bukkit.entity.ThrowableProjectile
declare interface ThrowableProjectile extends Projectile {
    getItem(): ItemStack;
    setItem(itemStack: ItemStack): void;
}

//org.bukkit.entity.ThrownExpBottle
declare interface ThrownExpBottle extends ThrowableProjectile {
}

//org.bukkit.entity.ThrownPotion
declare interface ThrownPotion extends Projectile {
    getEffects(): Collection;
    getItem(): ItemStack;
    setItem(itemStack: ItemStack): void;
}

//org.bukkit.event.weather.ThunderChangeEvent
declare interface ThunderChangeEvent extends WeatherEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    toThunderState(): boolean;
}

//java.awt.image.TileObserver
declare interface TileObserver {
    tileUpdate(writableRenderedImage: WritableRenderedImage, i: number, i: number, b: boolean): void;
}

//org.bukkit.block.TileState
declare interface TileState extends BlockState, PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}

//org.bukkit.block.data.type.BigDripleaf$Tilt
declare enum Tilt {
    NONE,
    UNSTABLE,
    PARTIAL,
    FULL,
}

//org.bukkit.event.world.TimeSkipEvent
declare interface TimeSkipEvent extends WorldEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getSkipAmount(): number;
    getSkipReason(): SkipReason;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setSkipAmount(l: number): void;
}

//java.util.concurrent.TimeUnit
declare enum TimeUnit {
    NANOSECONDS,
    MICROSECONDS,
    MILLISECONDS,
    SECONDS,
    MINUTES,
    HOURS,
    DAYS,
}

//java.util.TimeZone
declare interface TimeZone extends Serializable, Cloneable {
    getAvailableIDs(): string[];
    getAvailableIDs(i: number): string[];
    getDSTSavings(): number;
    getDefault(): TimeZone;
    getDisplayName(): string;
    getDisplayName(locale: Locale): string;
    getDisplayName(b: boolean, i: number): string;
    getDisplayName(b: boolean, i: number, locale: Locale): string;
    getID(): string;
    getOffset(l: number): number;
    getOffset(i: number, i: number, i: number, i: number, i: number, i: number): number;
    getRawOffset(): number;
    getTimeZone(zoneId: ZoneId): TimeZone;
    getTimeZone(s: string): TimeZone;
    hasSameRules(timeZone: TimeZone): boolean;
    inDaylightTime(date: Date): boolean;
    observesDaylightTime(): boolean;
    setDefault(timeZone: TimeZone): void;
    setID(s: string): void;
    setRawOffset(i: number): void;
    toZoneId(): ZoneId;
    useDaylightTime(): boolean;
    LONG: number;
    SHORT: number;
}

//org.bukkit.plugin.TimedRegisteredListener
declare interface TimedRegisteredListener extends RegisteredListener {
    getCount(): number;
    getEventClass(): Class;
    getTotalTime(): number;
    hasMultiple(): boolean;
    reset(): void;
}

//java.security.Timestamp
declare interface Timestamp extends Serializable {
    getSignerCertPath(): CertPath;
    getTimestamp(): Date;
}

//org.bukkit.command.defaults.TimingsCommand
declare interface TimingsCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    executeSpigotTimings(commandSender: CommandSender, s: string): void;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
    timingStart: number;
}

//org.bukkit.entity.TippedArrow
declare interface TippedArrow extends Arrow {
}

//java.util.function.ToDoubleFunction
declare interface ToDoubleFunction {
    applyAsDouble(object: any): number;
}

//java.util.function.ToIntFunction
declare interface ToIntFunction {
    applyAsInt(object: any): number;
}

//java.util.function.ToLongFunction
declare interface ToLongFunction {
    applyAsLong(object: any): number;
}

//org.bukkit.Note$Tone
declare enum Tone {
    G,
    A,
    B,
    C,
    D,
    E,
    F,
}

//java.awt.Toolkit
declare interface Toolkit {
    addAWTEventListener(aWTEventListener: AWTEventListener, l: number): void;
    addPropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    areExtraMouseButtonsEnabled(): boolean;
    beep(): void;
    checkImage(image: Image, i: number, i: number, imageObserver: ImageObserver): number;
    createCustomCursor(image: Image, point: Point, s: string): Cursor;
    createDragGestureRecognizer(clazz: Class, dragSource: DragSource, component: Component, i: number, dragGestureListener: DragGestureListener): DragGestureRecognizer;
    createImage(b: number): Image;
    createImage(s: string): Image;
    createImage(uRL: URL): Image;
    createImage(imageProducer: ImageProducer): Image;
    createImage(b: number, i: number, i: number): Image;
    getAWTEventListeners(): AWTEventListener[];
    getAWTEventListeners(l: number): AWTEventListener[];
    getBestCursorSize(i: number, i: number): Dimension;
    getColorModel(): ColorModel;
    getDefaultToolkit(): Toolkit;
    getDesktopProperty(s: string): any;
    getFontList(): string[];
    getFontMetrics(font: Font): FontMetrics;
    getImage(uRL: URL): Image;
    getImage(s: string): Image;
    getLockingKeyState(i: number): boolean;
    getMaximumCursorColors(): number;
    getMenuShortcutKeyMask(): number;
    getMenuShortcutKeyMaskEx(): number;
    getPrintJob(frame: Frame, s: string, properties: Properties): PrintJob;
    getPrintJob(frame: Frame, s: string, jobAttributes: JobAttributes, pageAttributes: PageAttributes): PrintJob;
    getProperty(s: string, s: string): string;
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(s: string): PropertyChangeListener[];
    getScreenInsets(graphicsConfiguration: GraphicsConfiguration): Insets;
    getScreenResolution(): number;
    getScreenSize(): Dimension;
    getSystemClipboard(): Clipboard;
    getSystemEventQueue(): EventQueue;
    getSystemSelection(): Clipboard;
    isAlwaysOnTopSupported(): boolean;
    isDynamicLayoutActive(): boolean;
    isFrameStateSupported(i: number): boolean;
    isModalExclusionTypeSupported(modalExclusionType: ModalExclusionType): boolean;
    isModalityTypeSupported(modalityType: ModalityType): boolean;
    mapInputMethodHighlight(inputMethodHighlight: InputMethodHighlight): Map;
    prepareImage(image: Image, i: number, i: number, imageObserver: ImageObserver): boolean;
    removeAWTEventListener(aWTEventListener: AWTEventListener): void;
    removePropertyChangeListener(s: string, propertyChangeListener: PropertyChangeListener): void;
    setDynamicLayout(b: boolean): void;
    setLockingKeyState(i: number, b: boolean): void;
    sync(): void;
}

//org.bukkit.help.HelpTopicComparator$TopicNameComparator
declare interface TopicNameComparator extends Comparator {
    compare(s: string, s: string): number;
    compare(object: any, object: any): number;
}

//org.bukkit.material.Torch
declare interface Torch extends SimpleAttachableMaterialData {
    getAttachedFace(): BlockFace;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.event.inventory.TradeSelectEvent
declare interface TradeSelectEvent extends InventoryInteractEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getIndex(): number;
    getInventory(): Inventory;
    getInventory(): MerchantInventory;
    getMerchant(): Merchant;
}

//org.bukkit.entity.TraderLlama
declare interface TraderLlama extends Llama {
}

//java.awt.datatransfer.Transferable
declare interface Transferable {
    getTransferData(dataFlavor: DataFlavor): any;
    getTransferDataFlavors(): DataFlavor[];
    isDataFlavorSupported(dataFlavor: DataFlavor): boolean;
}

//org.bukkit.event.entity.EntityTransformEvent$TransformReason
declare enum TransformReason {
    CURED,
    FROZEN,
    INFECTION,
    DROWNED,
    SHEARED,
    LIGHTNING,
    SPLIT,
    PIGLIN_ZOMBIFIED,
    METAMORPHOSIS,
    UNKNOWN,
}

//java.awt.Transparency
declare interface Transparency {
    getTransparency(): number;
    BITMASK: number;
    OPAQUE: number;
    TRANSLUCENT: number;
}

//org.bukkit.material.TrapDoor
declare interface TrapDoor extends SimpleAttachableMaterialData, Openable {
    getAttachedFace(): BlockFace;
    isInverted(): boolean;
    isOpen(): boolean;
    setFacingDirection(blockFace: BlockFace): void;
    setInverted(b: boolean): void;
    setOpen(b: boolean): void;
}

//org.bukkit.block.data.type.TrapDoor
declare interface TrapDoor extends Bisected, Directional, Openable, Powerable, Waterlogged {
}

//org.bukkit.material.Tree
declare interface Tree extends Wood {
    getDirection(): BlockFace;
    setDirection(blockFace: BlockFace): void;
}

//org.bukkit.TreeSpecies
declare enum TreeSpecies {
    GENERIC,
    REDWOOD,
    BIRCH,
    JUNGLE,
    ACACIA,
    DARK_OAK,
}

//org.bukkit.TreeType
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
    MANGROVE,
    TALL_MANGROVE,
}

//org.bukkit.entity.Trident
declare interface Trident extends AbstractArrow, ThrowableProjectile {
}

//org.bukkit.block.data.type.Tripwire
declare interface Tripwire extends Attachable, MultipleFacing, Powerable {
    isDisarmed(): boolean;
    setDisarmed(b: boolean): void;
}

//org.bukkit.material.Tripwire
declare interface Tripwire extends MaterialData {
    isActivated(): boolean;
    isObjectTriggering(): boolean;
    setActivated(b: boolean): void;
    setObjectTriggering(b: boolean): void;
}

//org.bukkit.block.data.type.TripwireHook
declare interface TripwireHook extends Attachable, Directional, Powerable {
}

//org.bukkit.material.TripwireHook
declare interface TripwireHook extends SimpleAttachableMaterialData, Redstone {
    getAttachedFace(): BlockFace;
    isActivated(): boolean;
    isConnected(): boolean;
    isPowered(): boolean;
    setActivated(b: boolean): void;
    setConnected(b: boolean): void;
    setFacingDirection(blockFace: BlockFace): void;
}

//org.bukkit.entity.TropicalFish
declare interface TropicalFish extends Fish {
    getBodyColor(): DyeColor;
    getPattern(): Pattern;
    getPatternColor(): DyeColor;
    setBodyColor(dyeColor: DyeColor): void;
    setPattern(pattern: Pattern): void;
    setPatternColor(dyeColor: DyeColor): void;
}

//org.bukkit.inventory.meta.TropicalFishBucketMeta
declare interface TropicalFishBucketMeta extends ItemMeta {
    clone(): TropicalFishBucketMeta;
    clone(): ItemMeta;
    clone(): any;
    getBodyColor(): DyeColor;
    getPattern(): Pattern;
    getPatternColor(): DyeColor;
    hasVariant(): boolean;
    setBodyColor(dyeColor: DyeColor): void;
    setPattern(pattern: Pattern): void;
    setPatternColor(dyeColor: DyeColor): void;
}

//javax.net.ssl.TrustManager
declare interface TrustManager {
}

//org.bukkit.entity.Turtle
declare interface Turtle extends Animals {
}

//org.bukkit.block.data.type.TurtleEgg
declare interface TurtleEgg extends BlockData {
    getEggs(): number;
    getHatch(): number;
    getMaximumEggs(): number;
    getMaximumHatch(): number;
    getMinimumEggs(): number;
    setEggs(i: number): void;
    setHatch(i: number): void;
}

//org.bukkit.block.data.type.Slab$Type
declare enum Type {
    TOP,
    BOTTOM,
    DOUBLE,
}

//org.bukkit.entity.Cat$Type
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

//org.bukkit.entity.Fox$Type
declare enum Type {
    RED,
    SNOW,
}

//org.bukkit.entity.Villager$Type
declare enum Type {
    DESERT,
    JUNGLE,
    PLAINS,
    SAVANNA,
    SNOW,
    SWAMP,
    TAIGA,
}

//org.bukkit.BanList$Type
declare enum Type {
    NAME,
    IP,
}

//org.bukkit.entity.Rabbit$Type
declare enum Type {
    BROWN,
    WHITE,
    BLACK,
    BLACK_AND_WHITE,
    GOLD,
    SALT_AND_PEPPER,
    THE_KILLER_BUNNY,
}

//org.bukkit.block.data.type.TechnicalPiston$Type
declare enum Type {
    NORMAL,
    STICKY,
}

//org.bukkit.FireworkEffect$Type
declare enum Type {
    BALL,
    BALL_LARGE,
    STAR,
    BURST,
    CREEPER,
}

//org.bukkit.map.MapCursor$Type
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

//org.bukkit.entity.Ocelot$Type
declare enum Type {
    WILD_OCELOT,
    BLACK_CAT,
    RED_CAT,
    SIAMESE_CAT,
}

//org.bukkit.block.data.type.Chest$Type
declare enum Type {
    SINGLE,
    LEFT,
    RIGHT,
}

//java.lang.reflect.Type
declare interface Type {
    getTypeName(): string;
}

//java.net.Proxy$Type
declare enum Type {
    DIRECT,
    HTTP,
    SOCKS,
}

//java.awt.Window$Type
declare enum Type {
    NORMAL,
    UTILITY,
    POPUP,
}

//org.yaml.snakeyaml.TypeDescription
declare interface TypeDescription {
    addPropertyParameters(s: string, clazz: Class): void;
    finalizeConstruction(object: any): any;
    getListPropertyType(s: string): Class;
    getMapKeyType(s: string): Class;
    getMapValueType(s: string): Class;
    getProperties(): Set;
    getProperty(s: string): Property;
    getTag(): Tag;
    getType(): Class;
    newInstance(node: Node): any;
    newInstance(s: string, node: Node): any;
    putListPropertyType(s: string, clazz: Class): void;
    putMapPropertyType(s: string, clazz: Class, clazz: Class): void;
    setExcludes(s: string): void;
    setIncludes(s: string): void;
    setProperty(object: any, s: string, object: any): boolean;
    setPropertyUtils(propertyUtils: PropertyUtils): void;
    setTag(tag: Tag): void;
    setTag(s: string): void;
    setupPropertyType(s: string, node: Node): boolean;
    substituteProperty(propertySubstitute: PropertySubstitute): void;
    substituteProperty(s: string, clazz: Class, s: string, s: string, clazz: Class): void;
}

//java.lang.invoke.TypeDescriptor
declare interface TypeDescriptor {
    descriptorString(): string;
}

//java.lang.reflect.TypeVariable
declare interface TypeVariable extends Type, AnnotatedElement {
    getAnnotatedBounds(): AnnotatedType[];
    getBounds(): Type[];
    getGenericDeclaration(): GenericDeclaration;
    getName(): string;
}

//java.net.URI
declare interface URI extends Comparable, Serializable {
    compareTo(uRI: URI): number;
    compareTo(object: any): number;
    create(s: string): URI;
    getAuthority(): string;
    getFragment(): string;
    getHost(): string;
    getPath(): string;
    getPort(): number;
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
    isAbsolute(): boolean;
    isOpaque(): boolean;
    normalize(): URI;
    parseServerAuthority(): URI;
    relativize(uRI: URI): URI;
    resolve(s: string): URI;
    resolve(uRI: URI): URI;
    toASCIIString(): string;
    toURL(): URL;
}

//java.net.URL
declare interface URL extends Serializable {
    getAuthority(): string;
    getContent(): any;
    getContent(clazz: Class): any;
    getDefaultPort(): number;
    getFile(): string;
    getHost(): string;
    getPath(): string;
    getPort(): number;
    getProtocol(): string;
    getQuery(): string;
    getRef(): string;
    getUserInfo(): string;
    openConnection(): URLConnection;
    openConnection(proxy: Proxy): URLConnection;
    openStream(): InputStream;
    sameFile(uRL: URL): boolean;
    setURLStreamHandlerFactory(uRLStreamHandlerFactory: URLStreamHandlerFactory): void;
    toExternalForm(): string;
    toURI(): URI;
}

//java.net.URLClassLoader
declare interface URLClassLoader extends SecureClassLoader, Closeable {
    close(): void;
    findResource(s: string): URL;
    findResources(s: string): Enumeration;
    getResourceAsStream(s: string): InputStream;
    getURLs(): URL[];
    newInstance(uRL: URL): URLClassLoader;
    newInstance(uRL: URL, classLoader: ClassLoader): URLClassLoader;
}

//java.net.URLConnection
declare interface URLConnection {
    addRequestProperty(s: string, s: string): void;
    connect(): void;
    getAllowUserInteraction(): boolean;
    getConnectTimeout(): number;
    getContent(): any;
    getContent(clazz: Class): any;
    getContentEncoding(): string;
    getContentLength(): number;
    getContentLengthLong(): number;
    getContentType(): string;
    getDate(): number;
    getDefaultAllowUserInteraction(): boolean;
    getDefaultRequestProperty(s: string): string;
    getDefaultUseCaches(): boolean;
    getDefaultUseCaches(s: string): boolean;
    getDoInput(): boolean;
    getDoOutput(): boolean;
    getExpiration(): number;
    getFileNameMap(): FileNameMap;
    getHeaderField(i: number): string;
    getHeaderField(s: string): string;
    getHeaderFieldDate(s: string, l: number): number;
    getHeaderFieldInt(s: string, i: number): number;
    getHeaderFieldKey(i: number): string;
    getHeaderFieldLong(s: string, l: number): number;
    getHeaderFields(): Map;
    getIfModifiedSince(): number;
    getInputStream(): InputStream;
    getLastModified(): number;
    getOutputStream(): OutputStream;
    getPermission(): Permission;
    getReadTimeout(): number;
    getRequestProperties(): Map;
    getRequestProperty(s: string): string;
    getURL(): URL;
    getUseCaches(): boolean;
    guessContentTypeFromName(s: string): string;
    guessContentTypeFromStream(inputStream: InputStream): string;
    setAllowUserInteraction(b: boolean): void;
    setConnectTimeout(i: number): void;
    setContentHandlerFactory(contentHandlerFactory: ContentHandlerFactory): void;
    setDefaultAllowUserInteraction(b: boolean): void;
    setDefaultRequestProperty(s: string, s: string): void;
    setDefaultUseCaches(b: boolean): void;
    setDefaultUseCaches(s: string, b: boolean): void;
    setDoInput(b: boolean): void;
    setDoOutput(b: boolean): void;
    setFileNameMap(fileNameMap: FileNameMap): void;
    setIfModifiedSince(l: number): void;
    setReadTimeout(i: number): void;
    setRequestProperty(s: string, s: string): void;
    setUseCaches(b: boolean): void;
}

//java.net.URLStreamHandler
declare interface URLStreamHandler {
}

//java.net.URLStreamHandlerFactory
declare interface URLStreamHandlerFactory {
    createURLStreamHandler(s: string): URLStreamHandler;
}

//java.util.UUID
declare interface UUID extends Serializable, Comparable {
    clockSequence(): number;
    compareTo(object: any): number;
    compareTo(uUID: UUID): number;
    fromString(s: string): UUID;
    getLeastSignificantBits(): number;
    getMostSignificantBits(): number;
    nameUUIDFromBytes(b: number): UUID;
    node(): number;
    randomUUID(): UUID;
    timestamp(): number;
    variant(): number;
    version(): number;
}

//java.util.function.UnaryOperator
declare interface UnaryOperator extends Function {
    identity(): UnaryOperator;
}

//java.lang.Thread$UncaughtExceptionHandler
declare interface UncaughtExceptionHandler {
    uncaughtException(thread: Thread, throwable: Throwable): void;
}

//org.bukkit.UndefinedNullability
declare interface UndefinedNullability extends Annotation {
    value(): string;
}

//org.bukkit.plugin.UnknownDependencyException
declare interface UnknownDependencyException extends RuntimeException {
}

//org.bukkit.event.entity.EntityUnleashEvent$UnleashReason
declare enum UnleashReason {
    HOLDER_GONE,
    PLAYER_UNLEASH,
    DISTANCE,
    UNKNOWN,
}

//org.bukkit.UnsafeValues
declare interface UnsafeValues {
    checkSupported(pluginDescriptionFile: PluginDescriptionFile): void;
    fromLegacy(material: Material): Material;
    fromLegacy(materialData: MaterialData): Material;
    fromLegacy(materialData: MaterialData, b: boolean): Material;
    fromLegacy(material: Material, b: number): BlockData;
    getCreativeCategory(material: Material): CreativeCategory;
    getDataVersion(): number;
    getDefaultAttributeModifiers(material: Material, equipmentSlot: EquipmentSlot): Multimap;
    getMaterial(s: string, i: number): Material;
    loadAdvancement(namespacedKey: NamespacedKey, s: string): Advancement;
    modifyItemStack(itemStack: ItemStack, s: string): ItemStack;
    processClass(pluginDescriptionFile: PluginDescriptionFile, s: string, b: number): number[];
    removeAdvancement(namespacedKey: NamespacedKey): boolean;
    toLegacy(material: Material): Material;
}

//org.bukkit.block.structure.UsageMode
declare enum UsageMode {
    SAVE,
    LOAD,
    CORNER,
    DATA,
}

//java.nio.file.attribute.UserPrincipal
declare interface UserPrincipal extends Principal {
}

//java.nio.file.attribute.UserPrincipalLookupService
declare interface UserPrincipalLookupService {
    lookupPrincipalByGroupName(s: string): GroupPrincipal;
    lookupPrincipalByName(s: string): UserPrincipal;
}

//org.bukkit.Utility
declare interface Utility extends Annotation {
}

//org.bukkit.conversations.ValidatingPrompt
declare interface ValidatingPrompt extends Prompt {
    acceptInput(conversationContext: ConversationContext, s: string): Prompt;
    blocksForInput(conversationContext: ConversationContext): boolean;
}

//java.time.temporal.ValueRange
declare interface ValueRange extends Serializable {
    checkValidIntValue(l: number, temporalField: TemporalField): number;
    checkValidValue(l: number, temporalField: TemporalField): number;
    getLargestMinimum(): number;
    getMaximum(): number;
    getMinimum(): number;
    getSmallestMaximum(): number;
    isFixed(): boolean;
    isIntValue(): boolean;
    isValidIntValue(l: number): boolean;
    isValidValue(l: number): boolean;
    of(l: number, l: number): ValueRange;
    of(l: number, l: number, l: number): ValueRange;
    of(l: number, l: number, l: number, l: number): ValueRange;
}

//java.lang.invoke.VarHandle
declare interface VarHandle extends Constable {
    accessModeType(accessMode: AccessMode): MethodType;
    acquireFence(): void;
    compareAndExchange(object: any): any;
    compareAndExchangeAcquire(object: any): any;
    compareAndExchangeRelease(object: any): any;
    compareAndSet(object: any): boolean;
    coordinateTypes(): List;
    describeConstable(): Optional;
    fullFence(): void;
    get(object: any): any;
    getAcquire(object: any): any;
    getAndAdd(object: any): any;
    getAndAddAcquire(object: any): any;
    getAndAddRelease(object: any): any;
    getAndBitwiseAnd(object: any): any;
    getAndBitwiseAndAcquire(object: any): any;
    getAndBitwiseAndRelease(object: any): any;
    getAndBitwiseOr(object: any): any;
    getAndBitwiseOrAcquire(object: any): any;
    getAndBitwiseOrRelease(object: any): any;
    getAndBitwiseXor(object: any): any;
    getAndBitwiseXorAcquire(object: any): any;
    getAndBitwiseXorRelease(object: any): any;
    getAndSet(object: any): any;
    getAndSetAcquire(object: any): any;
    getAndSetRelease(object: any): any;
    getOpaque(object: any): any;
    getVolatile(object: any): any;
    hasInvokeExactBehavior(): boolean;
    isAccessModeSupported(accessMode: AccessMode): boolean;
    loadLoadFence(): void;
    releaseFence(): void;
    set(object: any): void;
    setOpaque(object: any): void;
    setRelease(object: any): void;
    setVolatile(object: any): void;
    storeStoreFence(): void;
    toMethodHandle(accessMode: AccessMode): MethodHandle;
    varType(): Class;
    weakCompareAndSet(object: any): boolean;
    weakCompareAndSetAcquire(object: any): boolean;
    weakCompareAndSetPlain(object: any): boolean;
    weakCompareAndSetRelease(object: any): boolean;
    withInvokeBehavior(): VarHandle;
    withInvokeExactBehavior(): VarHandle;
}

//org.bukkit.entity.Horse$Variant
declare enum Variant {
    HORSE,
    DONKEY,
    MULE,
    UNDEAD_HORSE,
    SKELETON_HORSE,
    LLAMA,
}

//org.bukkit.entity.MushroomCow$Variant
declare enum Variant {
    RED,
    BROWN,
}

//org.bukkit.entity.Axolotl$Variant
declare enum Variant {
    LUCY,
    WILD,
    GOLD,
    CYAN,
    BLUE,
}

//org.bukkit.entity.Parrot$Variant
declare enum Variant {
    RED,
    BLUE,
    GREEN,
    CYAN,
    GRAY,
}

//org.bukkit.entity.Frog$Variant
declare enum Variant {
    TEMPERATE,
    WARM,
    COLD,
}

//org.bukkit.util.Vector
declare interface Vector extends Cloneable, ConfigurationSerializable {
    add(vector: Vector): Vector;
    angle(vector: Vector): number;
    checkFinite(): void;
    copy(vector: Vector): Vector;
    crossProduct(vector: Vector): Vector;
    deserialize(map: Map): Vector;
    distance(vector: Vector): number;
    distanceSquared(vector: Vector): number;
    divide(vector: Vector): Vector;
    dot(vector: Vector): number;
    getBlockX(): number;
    getBlockY(): number;
    getBlockZ(): number;
    getCrossProduct(vector: Vector): Vector;
    getEpsilon(): number;
    getMaximum(vector: Vector, vector: Vector): Vector;
    getMidpoint(vector: Vector): Vector;
    getMinimum(vector: Vector, vector: Vector): Vector;
    getRandom(): Vector;
    getX(): number;
    getY(): number;
    getZ(): number;
    isInAABB(vector: Vector, vector: Vector): boolean;
    isInSphere(vector: Vector, d: number): boolean;
    isNormalized(): boolean;
    length(): number;
    lengthSquared(): number;
    midpoint(vector: Vector): Vector;
    multiply(vector: Vector): Vector;
    multiply(f: number): Vector;
    multiply(d: number): Vector;
    multiply(i: number): Vector;
    normalize(): Vector;
    rotateAroundAxis(vector: Vector, d: number): Vector;
    rotateAroundNonUnitAxis(vector: Vector, d: number): Vector;
    rotateAroundX(d: number): Vector;
    rotateAroundY(d: number): Vector;
    rotateAroundZ(d: number): Vector;
    serialize(): Map;
    setX(i: number): Vector;
    setX(d: number): Vector;
    setX(f: number): Vector;
    setY(d: number): Vector;
    setY(f: number): Vector;
    setY(i: number): Vector;
    setZ(d: number): Vector;
    setZ(f: number): Vector;
    setZ(i: number): Vector;
    subtract(vector: Vector): Vector;
    toBlockVector(): BlockVector;
    toLocation(world: World): Location;
    toLocation(world: World, f: number, f: number): Location;
    zero(): Vector;
}

//java.util.Vector
declare interface Vector extends AbstractList, List, RandomAccess, Cloneable, Serializable {
    addAll(collection: Collection): boolean;
    addElement(object: any): void;
    capacity(): number;
    clone(): any;
    contains(object: any): boolean;
    containsAll(collection: Collection): boolean;
    copyInto(object: any): void;
    elementAt(i: number): any;
    elements(): Enumeration;
    ensureCapacity(i: number): void;
    firstElement(): any;
    forEach(consumer: Consumer): void;
    indexOf(object: any, i: number): number;
    insertElementAt(object: any, i: number): void;
    isEmpty(): boolean;
    lastElement(): any;
    lastIndexOf(object: any, i: number): number;
    remove(object: any): boolean;
    removeAll(collection: Collection): boolean;
    removeAllElements(): void;
    removeElement(object: any): boolean;
    removeElementAt(i: number): void;
    removeIf(predicate: Predicate): boolean;
    replaceAll(func: UnaryOperator): void;
    retainAll(collection: Collection): boolean;
    setElementAt(object: any, i: number): void;
    setSize(i: number): void;
    size(): number;
    sort(comparator: Comparator): void;
    spliterator(): Spliterator;
    toArray(): any[];
    toArray(object: any): any[];
    toString(): string;
    trimToSize(): void;
}

//org.bukkit.entity.Vehicle
declare interface Vehicle extends Entity {
    getVelocity(): Vector;
    setVelocity(vector: Vector): void;
}

//org.bukkit.event.vehicle.VehicleBlockCollisionEvent
declare interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
    getBlock(): Block;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.vehicle.VehicleCollisionEvent
declare interface VehicleCollisionEvent extends VehicleEvent {
}

//org.bukkit.event.vehicle.VehicleCreateEvent
declare interface VehicleCreateEvent extends VehicleEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.vehicle.VehicleDamageEvent
declare interface VehicleDamageEvent extends VehicleEvent, Cancellable {
    getAttacker(): Entity;
    getDamage(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setDamage(d: number): void;
}

//org.bukkit.event.vehicle.VehicleDestroyEvent
declare interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
    getAttacker(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.vehicle.VehicleEnterEvent
declare interface VehicleEnterEvent extends VehicleEvent, Cancellable {
    getEntered(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.vehicle.VehicleEntityCollisionEvent
declare interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
    getEntity(): Entity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    isCollisionCancelled(): boolean;
    isPickupCancelled(): boolean;
    setCancelled(b: boolean): void;
    setCollisionCancelled(b: boolean): void;
    setPickupCancelled(b: boolean): void;
}

//org.bukkit.event.vehicle.VehicleEvent
declare interface VehicleEvent extends Event {
    getVehicle(): Vehicle;
}

//org.bukkit.event.vehicle.VehicleExitEvent
declare interface VehicleExitEvent extends VehicleEvent, Cancellable {
    getExited(): LivingEntity;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.event.vehicle.VehicleMoveEvent
declare interface VehicleMoveEvent extends VehicleEvent {
    getFrom(): Location;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getTo(): Location;
}

//org.bukkit.event.vehicle.VehicleUpdateEvent
declare interface VehicleUpdateEvent extends VehicleEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//java.net.http.HttpClient$Version
declare enum Version {
    HTTP_1_1,
    HTTP_2,
}

//java.lang.module.ModuleDescriptor$Version
declare interface Version extends Comparable {
    compareTo(version: Version): number;
    compareTo(object: any): number;
    parse(s: string): Version;
}

//org.bukkit.command.defaults.VersionCommand
declare interface VersionCommand extends BukkitCommand {
    execute(commandSender: CommandSender, s: string, s: string): boolean;
    tabComplete(commandSender: CommandSender, s: string, s: string): List;
}

//org.bukkit.entity.Vex
declare interface Vex extends Monster {
    getBound(): Location;
    getLifeTicks(): number;
    hasLimitedLife(): boolean;
    isCharging(): boolean;
    setBound(location: Location): void;
    setCharging(b: boolean): void;
    setLifeTicks(i: number): void;
}

//org.bukkit.Vibration
declare interface Vibration {
    getArrivalTime(): number;
    getDestination(): Destination;
    getOrigin(): Location;
}

//org.bukkit.entity.Villager
declare interface Villager extends AbstractVillager {
    getProfession(): Profession;
    getVillagerExperience(): number;
    getVillagerLevel(): number;
    getVillagerType(): Type;
    setProfession(profession: Profession): void;
    setVillagerExperience(i: number): void;
    setVillagerLevel(i: number): void;
    setVillagerType(type: Type): void;
    shakeHead(): void;
    sleep(location: Location): boolean;
    wakeup(): void;
    zombify(): ZombieVillager;
}

//org.bukkit.event.entity.VillagerAcquireTradeEvent
declare interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRecipe(): MerchantRecipe;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setRecipe(merchantRecipe: MerchantRecipe): void;
}

//org.bukkit.event.entity.VillagerCareerChangeEvent
declare interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getProfession(): Profession;
    getReason(): ChangeReason;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    setProfession(profession: Profession): void;
}

//org.bukkit.event.entity.VillagerReplenishTradeEvent
declare interface VillagerReplenishTradeEvent extends EntityEvent, Cancellable {
    getBonus(): number;
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    getRecipe(): MerchantRecipe;
    isCancelled(): boolean;
    setBonus(i: number): void;
    setCancelled(b: boolean): void;
    setRecipe(merchantRecipe: MerchantRecipe): void;
}

//org.bukkit.entity.Vindicator
declare interface Vindicator extends Illager {
    isJohnny(): boolean;
    setJohnny(b: boolean): void;
}

//org.bukkit.material.Vine
declare interface Vine extends MaterialData {
    isOnFace(blockFace: BlockFace): boolean;
    putOnFace(blockFace: BlockFace): void;
    removeFromFace(blockFace: BlockFace): void;
}

//java.awt.image.VolatileImage
declare interface VolatileImage extends Image, Transparency {
    contentsLost(): boolean;
    createGraphics(): Graphics2D;
    getCapabilities(): ImageCapabilities;
    getHeight(): number;
    getSnapshot(): BufferedImage;
    getTransparency(): number;
    getWidth(): number;
    validate(graphicsConfiguration: GraphicsConfiguration): number;
    IMAGE_INCOMPATIBLE: number;
    IMAGE_OK: number;
    IMAGE_RESTORED: number;
}

//org.bukkit.util.VoxelShape
declare interface VoxelShape {
    getBoundingBoxes(): Collection;
    overlaps(boundingBox: BoundingBox): boolean;
}

//org.bukkit.block.data.type.Wall
declare interface Wall extends Waterlogged {
    getHeight(blockFace: BlockFace): Height;
    isUp(): boolean;
    setHeight(blockFace: BlockFace, height: Height): void;
    setUp(b: boolean): void;
}

//org.bukkit.block.data.type.WallSign
declare interface WallSign extends Directional, Waterlogged {
}

//org.bukkit.entity.WanderingTrader
declare interface WanderingTrader extends AbstractVillager {
    getDespawnDelay(): number;
    setDespawnDelay(i: number): void;
}

//org.bukkit.entity.Warden
declare interface Warden extends Monster {
    getAnger(entity: Entity): number;
    increaseAnger(entity: Entity, i: number): void;
    setAnger(entity: Entity, i: number): void;
}

//org.bukkit.Warning
declare interface Warning extends Annotation {
    reason(): string;
    value(): boolean;
}

//org.bukkit.Warning$WarningState
declare enum WarningState {
    ON,
    OFF,
    DEFAULT,
}

//java.nio.file.WatchKey
declare interface WatchKey {
    cancel(): void;
    isValid(): boolean;
    pollEvents(): List;
    reset(): boolean;
    watchable(): Watchable;
}

//java.nio.file.WatchService
declare interface WatchService extends Closeable {
    close(): void;
    poll(): WatchKey;
    poll(l: number, timeUnit: TimeUnit): WatchKey;
    take(): WatchKey;
}

//java.nio.file.Watchable
declare interface Watchable {
    register(watchService: WatchService, kind: Kind): WatchKey;
    register(watchService: WatchService, kind: Kind, modifier: Modifier): WatchKey;
}

//org.bukkit.entity.WaterMob
declare interface WaterMob extends Creature {
}

//org.bukkit.block.data.Waterlogged
declare interface Waterlogged extends BlockData {
    isWaterlogged(): boolean;
    setWaterlogged(b: boolean): void;
}

//org.bukkit.event.weather.WeatherChangeEvent
declare interface WeatherChangeEvent extends WeatherEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
    toWeatherState(): boolean;
}

//org.bukkit.event.weather.WeatherEvent
declare interface WeatherEvent extends Event {
    getWorld(): World;
}

//org.bukkit.WeatherType
declare enum WeatherType {
    DOWNFALL,
    CLEAR,
}

//java.net.http.WebSocket
declare interface WebSocket {
    abort(): void;
    getSubprotocol(): string;
    isInputClosed(): boolean;
    isOutputClosed(): boolean;
    request(l: number): void;
    sendBinary(byteBuffer: ByteBuffer, b: boolean): CompletableFuture;
    sendClose(i: number, s: string): CompletableFuture;
    sendPing(byteBuffer: ByteBuffer): CompletableFuture;
    sendPong(byteBuffer: ByteBuffer): CompletableFuture;
    sendText(s: string, b: boolean): CompletableFuture;
    NORMAL_CLOSURE: number;
}

//java.awt.Window
declare interface Window extends Container, Accessible {
    addWindowFocusListener(windowFocusListener: WindowFocusListener): void;
    addWindowListener(windowListener: WindowListener): void;
    addWindowStateListener(windowStateListener: WindowStateListener): void;
    applyResourceBundle(resourceBundle: ResourceBundle): void;
    applyResourceBundle(s: string): void;
    createBufferStrategy(i: number): void;
    createBufferStrategy(i: number, bufferCapabilities: BufferCapabilities): void;
    dispose(): void;
    getAccessibleContext(): AccessibleContext;
    getBackground(): Color;
    getBufferStrategy(): BufferStrategy;
    getFocusCycleRootAncestor(): Container;
    getFocusOwner(): Component;
    getFocusableWindowState(): boolean;
    getIconImages(): List;
    getInputContext(): InputContext;
    getLocale(): Locale;
    getModalExclusionType(): ModalExclusionType;
    getMostRecentFocusOwner(): Component;
    getOpacity(): number;
    getOwnedWindows(): Window[];
    getOwner(): Window;
    getOwnerlessWindows(): Window[];
    getShape(): Shape;
    getToolkit(): Toolkit;
    getType(): Type;
    getWarningString(): string;
    getWindowFocusListeners(): WindowFocusListener[];
    getWindowListeners(): WindowListener[];
    getWindowStateListeners(): WindowStateListener[];
    getWindows(): Window[];
    hide(): void;
    isActive(): boolean;
    isAlwaysOnTop(): boolean;
    isAlwaysOnTopSupported(): boolean;
    isAutoRequestFocus(): boolean;
    isFocusableWindow(): boolean;
    isFocused(): boolean;
    isLocationByPlatform(): boolean;
    isOpaque(): boolean;
    isShowing(): boolean;
    pack(): void;
    postEvent(event: Event): boolean;
    removeWindowFocusListener(windowFocusListener: WindowFocusListener): void;
    removeWindowListener(windowListener: WindowListener): void;
    removeWindowStateListener(windowStateListener: WindowStateListener): void;
    reshape(i: number, i: number, i: number, i: number): void;
    setAlwaysOnTop(b: boolean): void;
    setAutoRequestFocus(b: boolean): void;
    setBackground(color: Color): void;
    setBounds(rectangle: Rectangle): void;
    setBounds(i: number, i: number, i: number, i: number): void;
    setCursor(cursor: Cursor): void;
    setFocusableWindowState(b: boolean): void;
    setIconImage(image: Image): void;
    setIconImages(list: List): void;
    setLocation(point: Point): void;
    setLocation(i: number, i: number): void;
    setLocationByPlatform(b: boolean): void;
    setLocationRelativeTo(component: Component): void;
    setMinimumSize(dimension: Dimension): void;
    setModalExclusionType(modalExclusionType: ModalExclusionType): void;
    setOpacity(f: number): void;
    setShape(shape: Shape): void;
    setSize(dimension: Dimension): void;
    setSize(i: number, i: number): void;
    setType(type: Type): void;
    setVisible(b: boolean): void;
    show(): void;
    toBack(): void;
    toFront(): void;
}

//java.awt.event.WindowEvent
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

//java.awt.event.WindowFocusListener
declare interface WindowFocusListener extends EventListener {
    windowGainedFocus(windowEvent: WindowEvent): void;
    windowLostFocus(windowEvent: WindowEvent): void;
}

//java.awt.event.WindowListener
declare interface WindowListener extends EventListener {
    windowActivated(windowEvent: WindowEvent): void;
    windowClosed(windowEvent: WindowEvent): void;
    windowClosing(windowEvent: WindowEvent): void;
    windowDeactivated(windowEvent: WindowEvent): void;
    windowDeiconified(windowEvent: WindowEvent): void;
    windowIconified(windowEvent: WindowEvent): void;
    windowOpened(windowEvent: WindowEvent): void;
}

//java.awt.event.WindowStateListener
declare interface WindowStateListener extends EventListener {
    windowStateChanged(windowEvent: WindowEvent): void;
}

//java.awt.GraphicsDevice$WindowTranslucency
declare enum WindowTranslucency {
    PERPIXEL_TRANSPARENT,
    TRANSLUCENT,
    PERPIXEL_TRANSLUCENT,
}

//org.bukkit.entity.Witch
declare interface Witch extends Raider {
}

//org.bukkit.entity.Wither
declare interface Wither extends Monster, Boss {
    getTarget(head: Head): LivingEntity;
    setTarget(livingEntity: LivingEntity): void;
    setTarget(head: Head, livingEntity: LivingEntity): void;
}

//org.bukkit.entity.WitherSkeleton
declare interface WitherSkeleton extends AbstractSkeleton {
}

//org.bukkit.entity.WitherSkull
declare interface WitherSkull extends Fireball {
    isCharged(): boolean;
    setCharged(b: boolean): void;
}

//org.bukkit.entity.Wolf
declare interface Wolf extends Tameable, Sittable {
    getCollarColor(): DyeColor;
    isAngry(): boolean;
    setAngry(b: boolean): void;
    setCollarColor(dyeColor: DyeColor): void;
}

//org.bukkit.material.Wood
declare interface Wood extends MaterialData {
    getSpecies(): TreeSpecies;
    setSpecies(treeSpecies: TreeSpecies): void;
}

//org.bukkit.material.WoodenStep
declare interface WoodenStep extends Wood {
    isInverted(): boolean;
    setInverted(b: boolean): void;
}

//org.bukkit.material.Wool
declare interface Wool extends MaterialData, Colorable {
    getColor(): DyeColor;
    setColor(dyeColor: DyeColor): void;
}

//org.bukkit.World
declare interface World extends RegionAccessor, WorldInfo, PluginMessageRecipient, Metadatable, PersistentDataHolder, Keyed {
    addPluginChunkTicket(i: number, i: number, plugin: Plugin): boolean;
    canGenerateStructures(): boolean;
    createExplosion(location: Location, f: number): boolean;
    createExplosion(location: Location, f: number, b: boolean): boolean;
    createExplosion(d: number, d: number, d: number, f: number): boolean;
    createExplosion(location: Location, f: number, b: boolean, b: boolean): boolean;
    createExplosion(location: Location, f: number, b: boolean, b: boolean, entity: Entity): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean, b: boolean): boolean;
    createExplosion(d: number, d: number, d: number, f: number, b: boolean, b: boolean, entity: Entity): boolean;
    dropItem(location: Location, itemStack: ItemStack): Item;
    dropItem(location: Location, itemStack: ItemStack, consumer: Consumer): Item;
    dropItemNaturally(location: Location, itemStack: ItemStack): Item;
    dropItemNaturally(location: Location, itemStack: ItemStack, consumer: Consumer): Item;
    generateTree(location: Location, treeType: TreeType): boolean;
    generateTree(location: Location, treeType: TreeType, blockChangeDelegate: BlockChangeDelegate): boolean;
    getAllowAnimals(): boolean;
    getAllowMonsters(): boolean;
    getAmbientSpawnLimit(): number;
    getAnimalSpawnLimit(): number;
    getBiome(i: number, i: number): Biome;
    getBiomeProvider(): BiomeProvider;
    getBlockAt(location: Location): Block;
    getBlockAt(i: number, i: number, i: number): Block;
    getChunkAt(location: Location): Chunk;
    getChunkAt(block: Block): Chunk;
    getChunkAt(i: number, i: number): Chunk;
    getClearWeatherDuration(): number;
    getDifficulty(): Difficulty;
    getEmptyChunkSnapshot(i: number, i: number, b: boolean, b: boolean): ChunkSnapshot;
    getEnderDragonBattle(): DragonBattle;
    getEntities(): List;
    getEntitiesByClass(clazz: Class): Collection;
    getEntitiesByClass(clazz: Class): Collection;
    getEntitiesByClasses(clazz: Class): Collection;
    getForceLoadedChunks(): Collection;
    getFullTime(): number;
    getGameRuleDefault(gameRule: GameRule): any;
    getGameRuleValue(s: string): string;
    getGameRuleValue(gameRule: GameRule): any;
    getGameRules(): string[];
    getGameTime(): number;
    getGenerator(): ChunkGenerator;
    getHighestBlockAt(location: Location): Block;
    getHighestBlockAt(location: Location, heightMap: HeightMap): Block;
    getHighestBlockAt(i: number, i: number): Block;
    getHighestBlockAt(i: number, i: number, heightMap: HeightMap): Block;
    getHighestBlockYAt(location: Location): number;
    getHighestBlockYAt(location: Location, heightMap: HeightMap): number;
    getHighestBlockYAt(i: number, i: number): number;
    getHighestBlockYAt(i: number, i: number, heightMap: HeightMap): number;
    getHumidity(i: number, i: number): number;
    getHumidity(i: number, i: number, i: number): number;
    getKeepSpawnInMemory(): boolean;
    getLivingEntities(): List;
    getLoadedChunks(): Chunk[];
    getLogicalHeight(): number;
    getMonsterSpawnLimit(): number;
    getNearbyEntities(boundingBox: BoundingBox): Collection;
    getNearbyEntities(boundingBox: BoundingBox, predicate: Predicate): Collection;
    getNearbyEntities(location: Location, d: number, d: number, d: number): Collection;
    getNearbyEntities(location: Location, d: number, d: number, d: number, predicate: Predicate): Collection;
    getPVP(): boolean;
    getPlayers(): List;
    getPluginChunkTickets(): Map;
    getPluginChunkTickets(i: number, i: number): Collection;
    getPopulators(): List;
    getRaids(): List;
    getSeaLevel(): number;
    getSimulationDistance(): number;
    getSpawnLimit(spawnCategory: SpawnCategory): number;
    getSpawnLocation(): Location;
    getTemperature(i: number, i: number): number;
    getTemperature(i: number, i: number, i: number): number;
    getThunderDuration(): number;
    getTicksPerAmbientSpawns(): number;
    getTicksPerAnimalSpawns(): number;
    getTicksPerMonsterSpawns(): number;
    getTicksPerSpawns(spawnCategory: SpawnCategory): number;
    getTicksPerWaterAmbientSpawns(): number;
    getTicksPerWaterSpawns(): number;
    getTicksPerWaterUndergroundCreatureSpawns(): number;
    getTime(): number;
    getViewDistance(): number;
    getWaterAmbientSpawnLimit(): number;
    getWaterAnimalSpawnLimit(): number;
    getWaterUndergroundCreatureSpawnLimit(): number;
    getWeatherDuration(): number;
    getWorldBorder(): WorldBorder;
    getWorldFolder(): File;
    getWorldType(): WorldType;
    hasCeiling(): boolean;
    hasRaids(): boolean;
    hasSkyLight(): boolean;
    hasStorm(): boolean;
    isAutoSave(): boolean;
    isBedWorks(): boolean;
    isChunkForceLoaded(i: number, i: number): boolean;
    isChunkGenerated(i: number, i: number): boolean;
    isChunkInUse(i: number, i: number): boolean;
    isChunkLoaded(chunk: Chunk): boolean;
    isChunkLoaded(i: number, i: number): boolean;
    isClearWeather(): boolean;
    isGameRule(s: string): boolean;
    isHardcore(): boolean;
    isNatural(): boolean;
    isPiglinSafe(): boolean;
    isRespawnAnchorWorks(): boolean;
    isThundering(): boolean;
    isUltraWarm(): boolean;
    loadChunk(chunk: Chunk): void;
    loadChunk(i: number, i: number): void;
    loadChunk(i: number, i: number, b: boolean): boolean;
    locateNearestRaid(location: Location, i: number): Raid;
    locateNearestStructure(location: Location, structureType: StructureType, i: number, b: boolean): Location;
    playEffect(location: Location, effect: Effect, i: number): void;
    playEffect(location: Location, effect: Effect, object: any): void;
    playEffect(location: Location, effect: Effect, object: any, i: number): void;
    playEffect(location: Location, effect: Effect, i: number, i: number): void;
    playSound(entity: Entity, sound: Sound, f: number, f: number): void;
    playSound(location: Location, s: string, f: number, f: number): void;
    playSound(location: Location, sound: Sound, f: number, f: number): void;
    playSound(location: Location, s: string, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(location: Location, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    playSound(entity: Entity, sound: Sound, soundCategory: SoundCategory, f: number, f: number): void;
    rayTrace(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode, b: boolean, d: number, predicate: Predicate): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    rayTraceBlocks(location: Location, vector: Vector, d: number, fluidCollisionMode: FluidCollisionMode, b: boolean): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, d: number): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, predicate: Predicate): RayTraceResult;
    rayTraceEntities(location: Location, vector: Vector, d: number, d: number, predicate: Predicate): RayTraceResult;
    refreshChunk(i: number, i: number): boolean;
    regenerateChunk(i: number, i: number): boolean;
    removePluginChunkTicket(i: number, i: number, plugin: Plugin): boolean;
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
    setGameRule(gameRule: GameRule, object: any): boolean;
    setGameRuleValue(s: string, s: string): boolean;
    setHardcore(b: boolean): void;
    setKeepSpawnInMemory(b: boolean): void;
    setMonsterSpawnLimit(i: number): void;
    setPVP(b: boolean): void;
    setSpawnFlags(b: boolean, b: boolean): void;
    setSpawnLimit(spawnCategory: SpawnCategory, i: number): void;
    setSpawnLocation(location: Location): boolean;
    setSpawnLocation(i: number, i: number, i: number): boolean;
    setSpawnLocation(i: number, i: number, i: number, f: number): boolean;
    setStorm(b: boolean): void;
    setThunderDuration(i: number): void;
    setThundering(b: boolean): void;
    setTicksPerAmbientSpawns(i: number): void;
    setTicksPerAnimalSpawns(i: number): void;
    setTicksPerMonsterSpawns(i: number): void;
    setTicksPerSpawns(spawnCategory: SpawnCategory, i: number): void;
    setTicksPerWaterAmbientSpawns(i: number): void;
    setTicksPerWaterSpawns(i: number): void;
    setTicksPerWaterUndergroundCreatureSpawns(i: number): void;
    setTime(l: number): void;
    setWaterAmbientSpawnLimit(i: number): void;
    setWaterAnimalSpawnLimit(i: number): void;
    setWaterUndergroundCreatureSpawnLimit(i: number): void;
    setWeatherDuration(i: number): void;
    spawnArrow(location: Location, vector: Vector, f: number, f: number): Arrow;
    spawnArrow(location: Location, vector: Vector, f: number, f: number, clazz: Class): AbstractArrow;
    spawnFallingBlock(location: Location, blockData: BlockData): FallingBlock;
    spawnFallingBlock(location: Location, materialData: MaterialData): FallingBlock;
    spawnFallingBlock(location: Location, material: Material, b: number): FallingBlock;
    spawnParticle(particle: Particle, location: Location, i: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number): void;
    spawnParticle(particle: Particle, location: Location, i: number, d: number, d: number, d: number, d: number, object: any, b: boolean): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any): void;
    spawnParticle(particle: Particle, d: number, d: number, d: number, i: number, d: number, d: number, d: number, d: number, object: any, b: boolean): void;
    spigot(): Spigot;
    strikeLightning(location: Location): LightningStrike;
    strikeLightningEffect(location: Location): LightningStrike;
    unloadChunk(chunk: Chunk): boolean;
    unloadChunk(i: number, i: number): boolean;
    unloadChunk(i: number, i: number, b: boolean): boolean;
    unloadChunkRequest(i: number, i: number): boolean;
}

//org.bukkit.WorldBorder
declare interface WorldBorder {
    getCenter(): Location;
    getDamageAmount(): number;
    getDamageBuffer(): number;
    getSize(): number;
    getWarningDistance(): number;
    getWarningTime(): number;
    getWorld(): World;
    isInside(location: Location): boolean;
    reset(): void;
    setCenter(location: Location): void;
    setCenter(d: number, d: number): void;
    setDamageAmount(d: number): void;
    setDamageBuffer(d: number): void;
    setSize(d: number): void;
    setSize(d: number, l: number): void;
    setWarningDistance(i: number): void;
    setWarningTime(i: number): void;
}

//org.bukkit.WorldCreator
declare interface WorldCreator {
    biomeProvider(): BiomeProvider;
    biomeProvider(biomeProvider: BiomeProvider): WorldCreator;
    biomeProvider(s: string): WorldCreator;
    biomeProvider(s: string, commandSender: CommandSender): WorldCreator;
    copy(world: World): WorldCreator;
    copy(worldCreator: WorldCreator): WorldCreator;
    createWorld(): World;
    environment(): Environment;
    environment(environment: Environment): WorldCreator;
    generateStructures(): boolean;
    generateStructures(b: boolean): WorldCreator;
    generator(): ChunkGenerator;
    generator(chunkGenerator: ChunkGenerator): WorldCreator;
    generator(s: string): WorldCreator;
    generator(s: string, commandSender: CommandSender): WorldCreator;
    generatorSettings(): string;
    generatorSettings(s: string): WorldCreator;
    getBiomeProviderForName(s: string, s: string, commandSender: CommandSender): BiomeProvider;
    getGeneratorForName(s: string, s: string, commandSender: CommandSender): ChunkGenerator;
    hardcore(): boolean;
    hardcore(b: boolean): WorldCreator;
    name(): string;
    name(s: string): WorldCreator;
    seed(): number;
    seed(l: number): WorldCreator;
    type(): WorldType;
    type(worldType: WorldType): WorldCreator;
}

//org.bukkit.event.world.WorldEvent
declare interface WorldEvent extends Event {
    getWorld(): World;
}

//org.bukkit.generator.WorldInfo
declare interface WorldInfo {
    getEnvironment(): Environment;
    getMaxHeight(): number;
    getMinHeight(): number;
    getName(): string;
    getSeed(): number;
    getUID(): UUID;
}

//org.bukkit.event.world.WorldInitEvent
declare interface WorldInitEvent extends WorldEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.world.WorldLoadEvent
declare interface WorldLoadEvent extends WorldEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.event.world.WorldSaveEvent
declare interface WorldSaveEvent extends WorldEvent {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
}

//org.bukkit.WorldType
declare enum WorldType {
    NORMAL,
    FLAT,
    LARGE_BIOMES,
    AMPLIFIED,
}

//org.bukkit.event.world.WorldUnloadEvent
declare interface WorldUnloadEvent extends WorldEvent, Cancellable {
    getHandlerList(): HandlerList;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(b: boolean): void;
}

//org.bukkit.util.io.Wrapper
declare interface Wrapper extends Serializable {
}

//java.nio.channels.WritableByteChannel
declare interface WritableByteChannel extends Channel {
    write(byteBuffer: ByteBuffer): number;
}

//java.awt.image.WritableRaster
declare interface WritableRaster extends Raster {
    createWritableChild(i: number, i: number, i: number, i: number, i: number, i: number, i: number): WritableRaster;
    createWritableTranslatedChild(i: number, i: number): WritableRaster;
    getWritableParent(): WritableRaster;
    setDataElements(i: number, i: number, object: any): void;
    setDataElements(i: number, i: number, raster: Raster): void;
    setDataElements(i: number, i: number, i: number, i: number, object: any): void;
    setPixel(i: number, i: number, i: number): void;
    setPixel(i: number, i: number, d: number): void;
    setPixel(i: number, i: number, f: number): void;
    setPixels(i: number, i: number, i: number, i: number, d: number): void;
    setPixels(i: number, i: number, i: number, i: number, i: number): void;
    setPixels(i: number, i: number, i: number, i: number, f: number): void;
    setRect(raster: Raster): void;
    setRect(i: number, i: number, raster: Raster): void;
    setSample(i: number, i: number, i: number, i: number): void;
    setSample(i: number, i: number, i: number, d: number): void;
    setSample(i: number, i: number, i: number, f: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, i: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, f: number): void;
    setSamples(i: number, i: number, i: number, i: number, i: number, d: number): void;
}

//java.awt.image.WritableRenderedImage
declare interface WritableRenderedImage extends RenderedImage {
    addTileObserver(tileObserver: TileObserver): void;
    getWritableTile(i: number, i: number): WritableRaster;
    getWritableTileIndices(): Point[];
    hasTileWriters(): boolean;
    isTileWritable(i: number, i: number): boolean;
    releaseWritableTile(i: number, i: number): void;
    removeTileObserver(tileObserver: TileObserver): void;
    setData(raster: Raster): void;
}

//java.io.Writer
declare interface Writer extends Appendable, Closeable, Flushable {
    append(c: string): Writer;
    append(s: string): Appendable;
    append(c: string): Appendable;
    append(s: string): Writer;
    append(s: string, i: number, i: number): Writer;
    append(s: string, i: number, i: number): Appendable;
    close(): void;
    flush(): void;
    nullWriter(): Writer;
    write(i: number): void;
    write(s: string): void;
    write(c: string): void;
    write(s: string, i: number, i: number): void;
    write(c: string, i: number, i: number): void;
}

//javax.security.cert.X509Certificate
declare interface X509Certificate extends Certificate {
    checkValidity(): void;
    checkValidity(date: Date): void;
    getInstance(b: number): X509Certificate;
    getInstance(inputStream: InputStream): X509Certificate;
    getIssuerDN(): Principal;
    getNotAfter(): Date;
    getNotBefore(): Date;
    getSerialNumber(): BigInteger;
    getSigAlgName(): string;
    getSigAlgOID(): string;
    getSigAlgParams(): number[];
    getSubjectDN(): Principal;
    getVersion(): number;
}

//org.yaml.snakeyaml.Yaml
declare interface Yaml {
    addImplicitResolver(tag: Tag, pattern: Pattern, s: string): void;
    addTypeDescription(typeDescription: TypeDescription): void;
    compose(reader: Reader): Node;
    composeAll(reader: Reader): Iterable;
    dump(object: any): string;
    dump(object: any, writer: Writer): void;
    dumpAll(iterator: Iterator): string;
    dumpAll(iterator: Iterator, writer: Writer): void;
    dumpAs(object: any, tag: Tag, flowStyle: FlowStyle): string;
    dumpAsMap(object: any): string;
    getName(): string;
    load(reader: Reader): any;
    load(inputStream: InputStream): any;
    load(s: string): any;
    loadAll(reader: Reader): Iterable;
    loadAll(s: string): Iterable;
    loadAll(inputStream: InputStream): Iterable;
    loadAs(reader: Reader, clazz: Class): any;
    loadAs(inputStream: InputStream, clazz: Class): any;
    loadAs(s: string, clazz: Class): any;
    parse(reader: Reader): Iterable;
    represent(object: any): Node;
    serialize(node: Node): List;
    serialize(node: Node, writer: Writer): void;
    setBeanAccess(beanAccess: BeanAccess): void;
    setName(s: string): void;
}

//org.bukkit.configuration.file.YamlConfiguration
declare interface YamlConfiguration extends FileConfiguration {
    loadConfiguration(file: File): YamlConfiguration;
    loadConfiguration(reader: Reader): YamlConfiguration;
}

//org.bukkit.configuration.file.YamlConfigurationOptions
declare interface YamlConfigurationOptions extends FileConfigurationOptions {
    indent(): number;
    indent(i: number): YamlConfigurationOptions;
    width(): number;
    width(i: number): YamlConfigurationOptions;
}

//org.bukkit.configuration.file.YamlConstructor
declare interface YamlConstructor extends SafeConstructor {
    construct(node: Node): any;
}

//org.bukkit.configuration.file.YamlRepresenter
declare interface YamlRepresenter extends Representer {
}

//org.bukkit.entity.Zoglin
declare interface Zoglin extends Monster, Ageable {
    isBaby(): boolean;
    setBaby(b: boolean): void;
}

//org.bukkit.entity.Zombie
declare interface Zombie extends Monster, Ageable {
    getConversionTime(): number;
    getVillagerProfession(): Profession;
    isBaby(): boolean;
    isConverting(): boolean;
    isVillager(): boolean;
    setBaby(b: boolean): void;
    setConversionTime(i: number): void;
    setVillager(b: boolean): void;
    setVillagerProfession(profession: Profession): void;
}

//org.bukkit.entity.ZombieHorse
declare interface ZombieHorse extends AbstractHorse {
}

//org.bukkit.entity.ZombieVillager
declare interface ZombieVillager extends Zombie {
    getConversionPlayer(): OfflinePlayer;
    getConversionTime(): number;
    getVillagerProfession(): Profession;
    getVillagerType(): Type;
    isConverting(): boolean;
    setConversionPlayer(offlinePlayer: OfflinePlayer): void;
    setConversionTime(i: number): void;
    setVillagerProfession(profession: Profession): void;
    setVillagerType(type: Type): void;
}

//java.time.ZoneId
declare interface ZoneId extends Serializable {
    from(temporalAccessor: TemporalAccessor): ZoneId;
    getAvailableZoneIds(): Set;
    getDisplayName(textStyle: TextStyle, locale: Locale): string;
    getId(): string;
    getRules(): ZoneRules;
    normalized(): ZoneId;
    of(s: string): ZoneId;
    of(s: string, map: Map): ZoneId;
    ofOffset(s: string, zoneOffset: ZoneOffset): ZoneId;
    systemDefault(): ZoneId;
    SHORT_IDS: Map;
}

//java.time.ZoneOffset
declare interface ZoneOffset extends ZoneId, TemporalAccessor, TemporalAdjuster, Comparable, Serializable {
    adjustInto(temporal: Temporal): Temporal;
    compareTo(zoneOffset: ZoneOffset): number;
    compareTo(object: any): number;
    get(temporalField: TemporalField): number;
    getLong(temporalField: TemporalField): number;
    getTotalSeconds(): number;
    isSupported(temporalField: TemporalField): boolean;
    ofHours(i: number): ZoneOffset;
    ofHoursMinutes(i: number, i: number): ZoneOffset;
    ofHoursMinutesSeconds(i: number, i: number, i: number): ZoneOffset;
    ofTotalSeconds(i: number): ZoneOffset;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    MAX: ZoneOffset;
    MIN: ZoneOffset;
    UTC: ZoneOffset;
}

//java.time.zone.ZoneOffsetTransition
declare interface ZoneOffsetTransition extends Comparable, Serializable {
    compareTo(zoneOffsetTransition: ZoneOffsetTransition): number;
    compareTo(object: any): number;
    getDateTimeAfter(): LocalDateTime;
    getDateTimeBefore(): LocalDateTime;
    getDuration(): Duration;
    getInstant(): Instant;
    getOffsetAfter(): ZoneOffset;
    getOffsetBefore(): ZoneOffset;
    isGap(): boolean;
    isOverlap(): boolean;
    isValidOffset(zoneOffset: ZoneOffset): boolean;
    of(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneOffset: ZoneOffset): ZoneOffsetTransition;
    toEpochSecond(): number;
}

//java.time.zone.ZoneRules
declare interface ZoneRules extends Serializable {
    getDaylightSavings(instant: Instant): Duration;
    getOffset(localDateTime: LocalDateTime): ZoneOffset;
    getOffset(instant: Instant): ZoneOffset;
    getStandardOffset(instant: Instant): ZoneOffset;
    getTransition(localDateTime: LocalDateTime): ZoneOffsetTransition;
    getTransitionRules(): List;
    getTransitions(): List;
    getValidOffsets(localDateTime: LocalDateTime): List;
    isDaylightSavings(instant: Instant): boolean;
    isFixedOffset(): boolean;
    isValidOffset(localDateTime: LocalDateTime, zoneOffset: ZoneOffset): boolean;
    nextTransition(instant: Instant): ZoneOffsetTransition;
    of(zoneOffset: ZoneOffset): ZoneRules;
    of(zoneOffset: ZoneOffset, zoneOffset: ZoneOffset, list: List, list: List, list: List): ZoneRules;
    previousTransition(instant: Instant): ZoneOffsetTransition;
}

//java.time.ZonedDateTime
declare interface ZonedDateTime extends Temporal, ChronoZonedDateTime, Serializable {
    format(dateTimeFormatter: DateTimeFormatter): string;
    from(temporalAccessor: TemporalAccessor): ZonedDateTime;
    get(temporalField: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfWeek(): DayOfWeek;
    getDayOfYear(): number;
    getHour(): number;
    getLong(temporalField: TemporalField): number;
    getMinute(): number;
    getMonth(): Month;
    getMonthValue(): number;
    getNano(): number;
    getOffset(): ZoneOffset;
    getSecond(): number;
    getYear(): number;
    getZone(): ZoneId;
    isSupported(temporalField: TemporalField): boolean;
    isSupported(temporalUnit: TemporalUnit): boolean;
    minus(temporalAmount: TemporalAmount): Temporal;
    minus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    minus(temporalAmount: TemporalAmount): ZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    minus(l: number, temporalUnit: TemporalUnit): Temporal;
    minusDays(l: number): ZonedDateTime;
    minusHours(l: number): ZonedDateTime;
    minusMinutes(l: number): ZonedDateTime;
    minusMonths(l: number): ZonedDateTime;
    minusNanos(l: number): ZonedDateTime;
    minusSeconds(l: number): ZonedDateTime;
    minusWeeks(l: number): ZonedDateTime;
    minusYears(l: number): ZonedDateTime;
    now(): ZonedDateTime;
    now(clock: Clock): ZonedDateTime;
    now(zoneId: ZoneId): ZonedDateTime;
    of(localDateTime: LocalDateTime, zoneId: ZoneId): ZonedDateTime;
    of(localDate: LocalDate, localTime: LocalTime, zoneId: ZoneId): ZonedDateTime;
    of(i: number, i: number, i: number, i: number, i: number, i: number, i: number, zoneId: ZoneId): ZonedDateTime;
    ofInstant(instant: Instant, zoneId: ZoneId): ZonedDateTime;
    ofInstant(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneId: ZoneId): ZonedDateTime;
    ofLocal(localDateTime: LocalDateTime, zoneId: ZoneId, zoneOffset: ZoneOffset): ZonedDateTime;
    ofStrict(localDateTime: LocalDateTime, zoneOffset: ZoneOffset, zoneId: ZoneId): ZonedDateTime;
    parse(s: string): ZonedDateTime;
    parse(s: string, dateTimeFormatter: DateTimeFormatter): ZonedDateTime;
    plus(temporalAmount: TemporalAmount): Temporal;
    plus(temporalAmount: TemporalAmount): ZonedDateTime;
    plus(temporalAmount: TemporalAmount): ChronoZonedDateTime;
    plus(l: number, temporalUnit: TemporalUnit): Temporal;
    plus(l: number, temporalUnit: TemporalUnit): ZonedDateTime;
    plus(l: number, temporalUnit: TemporalUnit): ChronoZonedDateTime;
    plusDays(l: number): ZonedDateTime;
    plusHours(l: number): ZonedDateTime;
    plusMinutes(l: number): ZonedDateTime;
    plusMonths(l: number): ZonedDateTime;
    plusNanos(l: number): ZonedDateTime;
    plusSeconds(l: number): ZonedDateTime;
    plusWeeks(l: number): ZonedDateTime;
    plusYears(l: number): ZonedDateTime;
    query(temporalQuery: TemporalQuery): any;
    range(temporalField: TemporalField): ValueRange;
    toLocalDate(): LocalDate;
    toLocalDate(): ChronoLocalDate;
    toLocalDateTime(): ChronoLocalDateTime;
    toLocalDateTime(): LocalDateTime;
    toLocalTime(): LocalTime;
    toOffsetDateTime(): OffsetDateTime;
    truncatedTo(temporalUnit: TemporalUnit): ZonedDateTime;
    until(temporal: Temporal, temporalUnit: TemporalUnit): number;
    with(temporalAdjuster: TemporalAdjuster): Temporal;
    with(temporalAdjuster: TemporalAdjuster): ChronoZonedDateTime;
    with(temporalAdjuster: TemporalAdjuster): ZonedDateTime;
    with(temporalField: TemporalField, l: number): ZonedDateTime;
    with(temporalField: TemporalField, l: number): ChronoZonedDateTime;
    with(temporalField: TemporalField, l: number): Temporal;
    withDayOfMonth(i: number): ZonedDateTime;
    withDayOfYear(i: number): ZonedDateTime;
    withEarlierOffsetAtOverlap(): ZonedDateTime;
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime;
    withFixedOffsetZone(): ZonedDateTime;
    withHour(i: number): ZonedDateTime;
    withLaterOffsetAtOverlap(): ChronoZonedDateTime;
    withLaterOffsetAtOverlap(): ZonedDateTime;
    withMinute(i: number): ZonedDateTime;
    withMonth(i: number): ZonedDateTime;
    withNano(i: number): ZonedDateTime;
    withSecond(i: number): ZonedDateTime;
    withYear(i: number): ZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ZonedDateTime;
    withZoneSameInstant(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ChronoZonedDateTime;
    withZoneSameLocal(zoneId: ZoneId): ZonedDateTime;
}

