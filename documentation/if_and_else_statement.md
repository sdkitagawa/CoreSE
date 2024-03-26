<p align="center" >
<img src="https://raw.githubusercontent.com/sdkitagawa/corese/master/assets/img/logo.png" height="120px" alt="CoreSE Programming Language logo with 3 squares stacked diagonally in a counterclockwise direction each in a different color. The first is in white, the second is in azure and the third in a dark blue tone almost turning purple. And at the top of the 3 stacked squares there is the logo of the CoreSE programming language (which is pronounced Direction Course and Bearing) which are two letters C facing each other forming an infinity symbol and making a course. Each letter C has two different colors. In the letter C on the left at the top we have the dark blue tone and the azure tone at the bottom, while in the letter C on the right we have the opposite." title="CoresE Programming Language">
</p>

**CoreSE** is a powerful, statically and strong typed, lightweight, embedded and a cross-platform, object-oriented scripting programming language written in C/C++, Client & Server side for Scripting Game Development and it was developed by [Douglas Kitagawa](https://github.com/sdkitagawa). It is a class-based concurrent scripting language and it can be integrated with [`Lua`](https://github.com/lua/lua) or `SQL`.

<details>
<summary id="learn_more"><b><a href="#learn_more">Learn more</b></a></summary>
<ul>
	<li><a href="./hello_world.md">Hello World</a></li>
	<li><a href="./variables.md">Variables</a></li>
	<li><a href="./declaring_variables.md">Declaring Variables</a></li>
	<li><a href="./prefix_operator.md">Prefix Operator</a></li>
	<li><a href="./variable_scope.md">Variable Scope</a></li>
	<li><a href="./prefix_global_variables.md">Prefix Global Variables</a></li>
	<li><a href="./prefix_ai_variables.md">Prefix AI Variables</a></li>
	<li><a href="./prefix_global_constant_variables.md">Prefix Global Constant Variables</a></li>
	<li><a href="./prefix_local_constant_variables.md">Prefix Local Constant Variables</a></li>
	<li><a href="./prefix_instance_variables.md">Prefix Instance Variables</a></li>
	<li><a href="./postfix_data_type_variables.md">Postfix Data Type Variables</a></li>
	<li><a href="./array_data_type_variables.md">Array Data Type Variables</a></li>
	<li><a href="./if_and_else_statement.md">If & Else Statement</a></li>
	<li><a href="./switch_and_case_statement.md">Switch & Case Statement</a></li>
	<li><a href="./while_statement.md">While Statement</a></li>
	<li><a href="./for_statement.md">For Statement</a></li>
	<li><a href="./do_statement.md">Do Statement</a></li>
	<li><a href="./freeloop_statement.md">Freeloop Statement</a></li>
	<li><a href="./function_declarations.md">Function Declarations</a></li>
</ul>
</details>
<br />

# If & Else Statement
This is the basic conditional statement command, and it is not the only one available in this scripting language. The condition can be any expression. All expressions resulting in a non-zero value will be considered `True`, including negative values. All expressions resulting in a zero are `False`.

If the expression results in `True`, the statement will be executed. If it is `False`, nothing happens and we move on to the next line of the script.

## First Example

```cpp
if (1) dialog "This will always print.";
if (0) dialog "And this will never print.";
if (5) dialog "This will also always print.";
if (-1) dialog "Funny as it is, this will also print just fine.";
```

## Second Example

```cpp
.@count++;
dialog "Hello!";
if (.@count == 1) dialog "This is the first time you have talked to me.";
if (.@count == 2) dialog "This is the second time you have talked to me.";
if (.@count == 3) dialog "This is the third time you have talked to me.";
if (.@count == 4) {
	dialog "This is the fourth time you have talked to me.";
	dialog "I think I am getting amnesia, I have forgotten about you...";
	.@count = 0;
}
close;
```

## Third Example

```cpp
dialog "[Single Checker Dude]";
// 2312 it is an ID
.@itemId = 2312;
if (countitem(.@itemId) < 1) {
	mes "Can you please bring me that " + .@itemId + "?";
	close;
}
dialog "Oh, you brought me!";
dialog "I didn't really want it, I was just wanting to see one.";
close;
```

## Fourth Example

```cpp
dialog "[Multiple Checks Dude]";
// 2312 it is an ID
.@itemId = 2312;
if (@queststarted == 1 && countitem(.@itemId) >= 5) {
	dialog "Nice! You just have started the quest and brought me 5 Apples.";
	@queststarted = 0;
	delitem 512,5;
	close;
} else {
	dialog "Please bring me 5 apples.";
	@queststarted = 1;
	close;
}

```
