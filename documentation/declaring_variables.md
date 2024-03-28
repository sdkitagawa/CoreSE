<p align="center" >
<img src="https://raw.githubusercontent.com/sdkitagawa/corese/master/assets/img/logo.png" height="120px" alt="CoreSE Programming Language logo with 3 squares stacked diagonally in a counterclockwise direction each in a different color. The first is in white, the second is in azure and the third in a dark blue tone almost turning purple. And at the top of the 3 stacked squares there is the logo of the CoreSE programming language (which is pronounced Direction Course and Bearing) which are two letters C facing each other forming an infinity symbol and making a course. Each letter C has two different colors. In the letter C on the left at the top we have the dark blue tone and the azure tone at the bottom, while in the letter C on the right we have the opposite." title="CoresE Programming Language">
</p>

**CoreSE** is a powerful, statically and strong typed, lightweight, embedded and a cross-platform, object-oriented scripting programming language written in C/C++, Client & Server side for Scripting Game Development and it was developed by [Douglas Kitagawa](https://github.com/sdkitagawa). It is a class-based concurrent scripting language and it can be integrated with [`Lua`](https://github.com/lua/lua) or `SQL`.

<details>
<summary id="learn_more"><b><a href="#learn_more">Learn more</b></a></summary>
<ul>
	<li><a href="./hello_world.md">Hello World</a></li>
	<li><a href="./variables.md">Variables</a></li>
	<li><a href="./prefix_operator.md">Prefix Operator</a></li>
	<li><a href="./declaring_variables.md">Declaring Variables</a></li>
	<li><a href="./variable_scope.md">Variable Scope</a></li>
	<li><a href="./global_prefix.md">Global Prefix</a></li>
	<li><a href="./ai_prefix.md">AI Prefix</a></li>
	<li><a href="./global_prefix_constants.md">Global Prefix Constants</a></li>
	<li><a href="./local_prefix_constants.md">Local Prefix Constants</a></li>
	<li><a href="./instance_prefix.md">Instance Prefix</a></li>
	<li><a href="./data_type_postfix.md">Data Type Postfix</a></li>
	<li><a href="./array_data_type.md">Array Data Type</a></li>
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

# Declaring variables
To declare a variable in **CoreSE** first use the keyword `var` or `set` following by this choose your **Prefix Operator** plus the variable name and then use the comma (`optional`), **i.e**:

**Good Practice Pattern**: `<keyword> <prefix operator> <variable name> <comma>`.<br />
**Optional Pattern** `<keyword> <prefix operator> <variable name>`.

**Note**: The `$` before the `firstVariable` word it is a [Variable Prefix Operator](./prefix_operator.md).

```cs
var $firstVariable;
var $firstVariable
set $firstVariable;
set $firstVariable
```

# Initializing variables
To initialize your variables in **CoreSE** you must use the `equal to` (`=`) followed by the value of your variable, **i.e**:

```cs
set $firstVariable = "This is your first variable!";
```

You can also use a `comma` (`,`) instead of the `equal to` signal.

```cs
set $firstVariable, "This is your first variable!";
```
