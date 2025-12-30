function NavLinks ({ itemsClass = "", listClass = "" }) {
    const navItems = ["Pricing", "Product", "About Us", "Careers", "Community"];
    return (
        <ul className={listClass}>
            {navItems.map((item) => {
                return (
                    <li 
                        className={itemsClass}
                        key={item}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}

export default NavLinks