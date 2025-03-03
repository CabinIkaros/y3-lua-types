// @ts-nocheck
declare interface Item {
    destructor(): void;
    get_by_handle(py_item: any): Item;
    get_by_id(id: py.ItemID): Item;
    is_exist(): boolean;
    get_id(): number;
    has_tag(tag: string): boolean;
    is_in_scene(): boolean;
    is_in_bar(): boolean;
    is_in_bag(): boolean;
    remove(): void;
    drop(point: Point, count: number): void;
    set_point(point: Point): void;
    set_name(name: string): void;
    set_description(description: string): void;
    set_icon(picture_id: py.Texture): void;
    set_owner_player(player: Player): void;
    set_level(level: number): void;
    set_charge(charge: number): void;
    add_charge(charge: number): void;
    set_max_charge(charge: number): void;
    set_stack(stack: number): void;
    add_stack(stack: number): void;
    set_attribute(key: string, value: number): void;
    add_attribute(key: string, value: number): void;
    get_attribute(key: string): number;
    set_hp(value: number): void;
    add_passive_ability(ability_id: py.AbilityKey, level: number): void;
    set_droppable(dropable: boolean): void;
    add_tag(tag: string): void;
    remove_tag(tag: string): void;
    set_sale_state(state: boolean): void;
    set_scale(scale: number): void;
    set_facing(facing: number): void;
    get_key(): py.ItemKey;
    set_shop_price(id: py.ItemKey, player_attr_name: py.RoleResKey, price: number): void;
    get_owner(): Unit?;
    get_point(): Point;
    get_stack(): number;
    get_charge(): number;
    get_max_charge(): number;
    get_level(): number;
    get_hp(): number;
    get_name(): string;
    get_description(): string;
    get_scale(): number;
    get_facing(): number;
    get_ability(): Ability?;
    get_passive_ability(index: number): Ability?;
    get_slot(): number;
    get_owner_player(): Player;
    get_slot_type(): py.SlotType;
    check_precondition_by_key(player: Player, item_key: py.ItemKey): boolean;
    create_item(point: Point, item_key: py.ItemKey, player: any): Item;
    get_item_buy_price_by_key(item_key: py.ItemKey, key: py.RoleResKey): number;
    get_item_sell_price_by_key(item_key: py.ItemKey, key: py.RoleResKey): number;
    get_item_group_in_area(area: Area): ItemGroup;
    get_name_by_key(item_key: py.ItemKey): string;
    get_icon_id_by_key(item_key: py.ItemKey): number;
    get_description_by_key(item_key: py.ItemKey): string;
    get_model(): py.ModelKey;
    get_model_by_key(item_key: py.ItemKey): py.ModelKey;
}
