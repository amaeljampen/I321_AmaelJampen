// Simuler une DB
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

export const getUsers = (req, res) => {
    res.json(users);
};

export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json(user);
};

export const createUser = (req, res) => {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};
