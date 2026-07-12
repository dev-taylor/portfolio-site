---
layout: post
title: "DeathSprint 66"
permalink: /games/DeathSprint-66
category: games
image: /assets/images/DeathSprint-66.png
splash-offset: -5%
tags: [UE5,UI,Gameplay]
release-year: 2024
company: "Sumo Digital Ltd."
showdate: false
---

<h2>Overview</h2>

From 2022-2024 I worked on **<a href="https://store.steampowered.com/app/1273560/DeathSprint_66/" target="_blank">DeathSprint 66</a>**.

I was on this project from early prototyping all the way until release and post-launch.
<br>In my role I took on **Gameplay** and **UI** code.

Primarily I was responsible for implementing the **in-game HUD**.<br>
Some of my other responsibilites included:
- **Emoji** System
- **Cosmetics** implementation
- Creating the **Momentum System**
- Various character ability work (**GAS**)
- **Animation** and **VFX** implementation
- **Optimization** work

---

## Features
Here's a closer look at some of the features mentioned above.

### In-Game HUD
I created various widgets for the HUD, using various techniques to achieve some cool effects. 
The entire HUD was completely **event-driven** except for where it made sense otherwise (race timer, for example).

<figure>
    <div class="embed-image">
        <div>
        <div class="image-container">
            <image src="/assets/images/DeathSprint/DeathSprint_HUD.png" width=900px alt/>
        </div>
        <figcaption>DeathSprint 66 In-Game HUD</figcaption>
        </div>
    </div>
</figure>

On the image above you can see the following elements I created:
- Lap Number and Time tracker
- Leaderboard
- Killfeed
- Lives Counter
- Ability Container
- Surge Bar
- Emoji Feed
- Name Tags

Below I'll explain a little more about some of the more complicated
<br>
<br>
<h3 class="green">Emojis</h3>
DeathSprint 66 is canonically a game show, and to sell that effect we wanted to have emojis that burst from the bottom of the screen that respond to your characters in-game actions, to mimick viewers watching at home.
Originally, we had a small number of emoji widgets that'd burst onto the screen, which was slow and costly. Using a widget pool didn't help too much either, since the bulk of the cost was the overhead of the widgets themselves, so in the end I decided to use an **SMeshWidget**.<br>
This essentially allowed me to instance widgets and draw all emojis in a **single drawcall**, meaning instead of a handfull of slow emojis on screen, we could have had thousands, and they were lightning quick too!

<figure>
    <div class="embed-image">
        <div>
        <div class="image-container">
            <image src="/assets/images/DeathSprint/DeathSprint_Emojis.gif" width=500px alt/>
        </div>
        <figcaption>Emojis</figcaption>
        </div>
    </div>
</figure>

<h3 class="green">Ability Container</h3>
The ability container was really fun to implement, it's a 3d coin-flip animation that travels up the screen, fading away to reveal the ability you have randomly received!
<br>
<figure>
    <div class="embed-image">
        <div>
        <div class="image-container">
            <image src="/assets/images/DeathSprint/DeathSprint_Coin.gif" width=300px alt/>
        </div>
        <figcaption>Coin flip animation</figcaption>
        </div>
    </div>
</figure>
<br>
<br>
<h3 class="green">Surge Bar</h3>
The surge bar is all material based, I worked on it together with a really talented Tech Artist, it consists of three separate bars that fill up, and turn a different colour upon filling up, all on a radial meter.
<br>
<figure>
    <div class="embed-image">
        <div>
        <div class="image-container">
            <image src="/assets/images/DeathSprint/DeathSprint_SurgeMeter.gif" width=500px alt/>
        </div>
        <figcaption>Radial Surge Meter</figcaption>
        </div>
    </div>
</figure>
<br>
### Cosmetics
I was also one of a few programmers who worked on cosmetics implementation, mainly responsible for reading the data given to us from backend. The indexes for skins, emoji packs, and banners would be sent from the server and I created the system that read that data and displayed the correct cosmetic.
<br>
<figure>
    <div class="embed-image">
        <div>
        <div class="image-container">
            <image src="/assets/images/DeathSprint/DeathSprint_Cosmetics.png" width=900px alt/>
        </div>
        <figcaption>Cosmetics menu (I did not make the menu itself)</figcaption>
        </div>
    </div>
</figure>
<br>
<br>
### Character Controller Work
<h3 class="green"> Momentum System </h3>
We faced a problem with our racing game in that the characters all ran at the same speed, meaning you could only overtake someone if they messed up and died. To remedy this, I came up with a system where doing well at the game (chaining up wallruns, ziplines, drifting, etc.) would allow you to build 'momentum'. <br> Your momentum score was then used to increase your maximum speed, allowing you to travel faster. This ended up working really well as it created a sense of 'flow-state' to the player.
<br><br>
One thing I'm really proud of is the way I set this system up. 
<br>It allowed designers to:
- Define which game actions increased momentum 
- How long it'd add momentum for (instant or continuous) 
- How the momentum would be added (instantly, linearly, custom curves)
- How much momentum would be added
- How long the momentum takes to decay
- How the momentum decays (instantly, linearly, custom curve)

They could do all of this **without *any* code support**.

The system itself managed your momentum modifiers, calculated your momentum score, and then calcualted your new max speed based on a Momentum -> Max Speed curve, injecting the new max speed into the movement code.
<br>
<br>
<h3 class="green"> Character Abilities </h3>
Towards the beginning of production I also helped in setting up and learning about the **Gameplay Ability System** which was new to us at the time. Using it, I implemented a few character abilities, some of which are still in the game (although they were built upon by another programmer after me!)
<br>
<br>
<h3 class="green"> Leaning </h3>
Whilst on ziplines and grindrails the character can lean to either side to dodge traps. <br> I worked together with **Animation** to achieve this effect using **blend-spaces**. 
<br>
<figure>
    <div class="embed-image">
        <div>
        <div class="image-container">
            <image src="/assets/images/DeathSprint/DeathSprint_Leaning.png" width=900px alt/>
        </div>
        <figcaption>Leaning left and right</figcaption>
        </div>
    </div>
</figure>
<br>
<h3 class="green"> Animation Masking </h3>
The character can be hit with other players' abilities, one ability causes the player to grab their head with both hands. Obviously, while the player is ziplining or wallrunning, one of their hands is preoccupied, so I looked into **Skeletal Animation Masking**. This allowed us to mask off part of the animation if the hands were pre-occupied, meaning their hand on the wall or zipline would stay there, and only the other hand would play the animation.
<br>
<br>
## Misc Work
<h3 class="green">ImGui</h3>
I added ImGui into our custom version of Unreal Engine, and used it to make some nice debug tools for DeathSprint, including a graph which showed speed over time and momentum over time. 
<br>
<br>
<h3 class="green">Optimization Work</h3>
Part of implementing the UI was making sure the UI was performant. I used an array of techniques to diagnose and optimize the HUD, such as:
- Only invalidating widgets when necessary, and avoiding widget setups that frequently invalidate widgets
- Used phased **retention boxes** to load-balance the UI
- Lots of **widget pooling**
- Converting Emoji system into an **SMeshWidget**
- Ensuring all HUD elements were **event-driven**

<br>
Through this I managed to get the entire HUD under 1ms/tick, even under worst-case scenario.  
<br>
<hr>
<br>
<div class="steam-embed">
    <iframe src="https://store.steampowered.com/widget/1273560/" frameborder="0" width="646" height="190"></iframe>
</div>