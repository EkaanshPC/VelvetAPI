# **VelvetAPI**  
### **Advanced Scripting Toolkit for Bloxd.io**  
#### **Made by ObiloxYT**  

VelvetAPI is a **powerful and versatile API** designed for **Bloxd.io** by ObiloxYT.  
It provides essential scripting functions such as **loops, async execution, custom timers (`setTimeout`, `setInterval`)**, and much more—allowing creators to take their worlds to the next level!  

Whether you're developing **game logic, automating mechanics, or enhancing player interactions**, VelvetAPI delivers efficient tools to push Bloxd scripting **to its limits!** 🚀  

![VelvetAPI Banner](main/VelvetAPI_Banner.png)

Examples:

```js
velvetJump(myId, 100)
```
###### Makes the player jump.

```js
velvetRandomNum(1,10)
```
###### Get a random Number between 1 and 10.

## DOCUMENTATION:
```js
/**
 * Velvet API v1.2  
 * Author: ObiloxYT  
 * Description: A high-performance scripting toolkit for Bloxd.io.  
 */
const velvet = {
    /**
     * Runs a loop a specified number of times.
     *
     * @param {number} count - Number of iterations to run.
     * @param {Function} callback - Function to execute per iteration.
     * @throws {TypeError} If count is not a number or callback is not a function.
     */
    velvetLoop(count, callback) {},

    /**
     * Executes a function asynchronously with optional delay.
     *
     * @param {Function} callback - Function to execute.
     * @param {number} [delay=0] - Optional delay before execution (default 0ms).
     * @throws {TypeError} If callback is not a function or delay is not a number.
     */
    velvetAsync(callback, delay = 0) {},

    /**
     * Creates a timeout event.
     *
     * @param {Function} callback - Function to execute after the delay.
     * @param {number} delay - The delay in milliseconds.
     * @throws {TypeError} If callback is not a function or delay is not a number.
     */
    velvetTimeout(callback, delay) {},

    /**
     * Creates an interval event.
     *
     * @param {Function} callback - Function to execute periodically.
     * @param {number} interval - Time between executions in milliseconds.
     * @returns {string} Unique identifier for interval instance.
     * @throws {TypeError} If callback is not a function or interval is not a number.
     */
    velvetInterval(callback, interval) {},

    /**
     * Clears a running interval by ID.
     *
     * @param {string} intervalId - The ID of the interval to clear.
     * @throws {TypeError} If intervalId is not a valid string.
     */
    velvetClearInterval(intervalId) {},

    /**
     * Returns a random number between two values.
     *
     * @param {number} min - Minimum value (inclusive).
     * @param {number} max - Maximum value (exclusive).
     * @returns {number} Randomized number within range.
     * @throws {TypeError} If min or max are not numbers.
     */
    velvetRandomNum(min, max) {},

    /**
     * Applies upward velocity to a player.
     *
     * @param {string} playerId - The ID of the player.
     * @param {number} force - The force of the jump.
     * @throws {TypeError} If playerId is not a string or force is not a number.
     */
    velvetJump(playerId, force) {},

    /**
     * Toggles player transparency.
     *
     * @param {string} playerId - The ID of the player.
     * @param {boolean} state - True for invisible, false for visible.
     * @throws {TypeError} If playerId is not a string or state is not a boolean.
     */
    velvetGhostPlayer(playerId, state) {},

    /**
     * Detects the server lobby type.
     *
     * @returns {string} "Standard Lobby" | "Discord Guild Lobby" | "Unknown Lobby Type"
     */
    velvetDetectServerClient() {},

    /**
     * Checks if a player has a specific item.
     *
     * @param {string} playerId - The ID of the player.
     * @param {string} itemId - The item name.
     * @param {string} customName - The custom display name of the item.
     * @returns {boolean} True if the player has the item, false otherwise.
     * @throws {TypeError} If playerId, itemId, or customName are not strings.
     */
    velvethasItem(playerId, itemId, customName) {}
};
```

---

### License: 
This API is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license.

> You are free to share and adapt VelvetAPI under the following terms:
> - **Attribution** — Crediting is optional
> - **Commercial** — You may use VelvetAPI for commercial purposes.
> - **ShareAlike** — If you remix, transform, or build upon VelvetAPI, you must distribute your contributions under the same license.

#### OPEN [Click here to download VelvetAPI.js](main/VelvetAPI.js) TO ADD IT TO YOUR WORLD!
