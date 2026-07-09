---
layout: post
title: "Enginefall"
category: games
image: /assets/images/Enginefall.jpg
tags: [UE5,UI,Gameplay,Leadership]
---

<h2>Overview</h2>

For around 2 years, I have been working on <strong><a href="https://store.steampowered.com/app/2437390/Enginefall/" target="_blank">Enginefall</a></strong>.

I have taken on a number of roles, such as <strong>Gameplay Programmer</strong>, <strong>UI Programmer</strong>, and <strong>Strike Team Lead</strong>.

Here are some of my responsibilities:
- Lead the <strong>Social Gameplay</strong> and <strong>PvP</strong> strike teams
    - Organized meetings, drove team initiatives
    - Owned, Concepted, Designed, Proposed, Implemented, and Maintained several features
- <strong>Gunplay</strong> and <strong>Combat</strong> code
    - Recoil System
    - Recoil Spray Patterns
    - Interruptible Shotgun Reloads
    - Riot Shields
    - TRACE System
- <strong>Ladders</strong> (harder than it sounds!)
- UI Work
    - World-to-Screen transforms for grenade and waypoint indicators
    - Inventory System & slots work
- Tools
    - I've also worked on several tools, including a recoil visualization tool

<hr>

<h2>Features</h2>

Here's a more in-depth look at some of the features I've worked on.

<br>
<h3 class="green">Recoil System</h3>

The recoil system was set up to be <strong>physically realistic</strong> (as reasonably possible), the chief inspiration for the system was Counter-Strike 2.
<br><br>
The recoil system involved a few moving parts:
- Simulating the force a bullet imparts on a player, and moving the crosshair accordingly
- Returning the crosshair back to center once the player stops firing (using some fancy spring equations)
- Measuring the mouse movement of the player whilst firing, and offseting the recovery value

These elements together created a system where a designer could assign <strong>per-bullet forces</strong> on the weapon, allowing them to create <strong>spray patterns</strong>. Then when a player fires, the recoil is simulated accurately, and once they stop firing the character recovers from the recoil. The player themselves could also try to offset the recovery and become more accurate.  
<br>
<h3 class="green">Recoil Visualization Tool</h3>
The recoil system was set up to be very flexible, but as a result of this flexibility, it now took quite a long time to create and tweak patterns. 
Every time a designer wants to change a spray pattern, they'd have to open the weapon, go to the bullets, change the forces, load the game up, get a weapon, and finally fire it against a wall. Each iteration could take several minutes, which is obviously too slow.
<br>
To remedy this I created the Recoil Visualization Tool. 
<br><br>
This tool did a few things:
- Allowed you to select a weapon
- Displayed the spray pattern for that weapon
- Updated in <strong>real-time</strong> as you edited the weapon bullet array
- Allowed you to scrub through the pattern per-bullet
- Display the old pattern as reference
- Adjust the recoil system variables to see the effects it has on the pattern

<br>
It did all of this in <strong>Editor time</strong>, meaning you didn't even have to launch the game to iterate on spray patterns!
<hr>

<!-- Other things to flesh-out:
- Coverage System + Strategies -->

<div class="steam-embed">
    <iframe src="https://store.steampowered.com/widget/2437390/" frameborder="0" width="646" height="190"></iframe>
</div>