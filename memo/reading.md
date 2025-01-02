## MENU
* [《Mathematical Foundations of Reinforcement Learning》](#mathematical-foundations-of-reinforcement-learning)
---


## 《Mathematical Foundations of Reinforcement Learning》

### [2025/0101](/2025/0101.md#mathematical-foundations-of-reinforcement-learning)

Begin to read the book.

### Chapter 1

* Basic concepts of reinforcement learning
    * **State**
        $$\mathcal{S}$$
    * **Action**
        $$\mathcal{A}$$
    * **State transition**
        $$
        p(s_k|s_i, a_j)
        $$
    * **Policy**
        $$
        \pi(s_j|a_i)
        $$
    * **Reward**
        $$
        p(r=R|s_i,a_j)
        $$
    * **Return**
        * *return* is the sum of reward along a trajectory.
    * **MDPs**=Markov decision processes
        *  Once the policy in an MDP is fixed, the *MDP* degenerates into an *MP* (Markov process).



### [2025/0102](/2025/0102.md#mathematical-foundations-of-reinforcement-learning)

### Chapter 2

* State value: the expected value of return.

* Bellman equation:

  * A simplified version:
    $$
    v = r + \gamma P v
    $$

    While $v$ is the state value, $r$ is the reward, $\gamma$ is the discount factor, $P$ is the policy & transition matrix.

    Then the state value can be resolved as:
    $$
    v = (I - \gamma P)^{-1} r
    $$

  * Formal version:
    $$
    \begin{align}
    v_{\pi}(s) &= \mathbb{E} [R_{t+1} | S_t = s] + \gamma \mathbb{E} [G_{t+1} | S_t = s] \\
    &= \sum _ {a \in \mathcal{A}} \pi(a|s) \left[ \sum _ {r \in \mathcal {R}} p(r | s, a)r + \gamma \sum _ {s' \in \mathcal{S}} p(s'| s, a) v_{\pi}(s') \right] \\
    &= \sum _ {a \in \mathcal{A}} \pi(a|s) \sum _ {s' \in \mathcal{S}} \sum _ {r \in \mathcal{R}} p(s', r | s, a) [r + \gamma v_{\pi}(s')]
    \end{align}
    $$

    * The first item is the immediate reward, the second item is the discounted value of the next state.

* State value $v_{\pi}(s)$ depends on $\pi$ and $s$, not depends on $t$.




