<p align="center" >
<img src="https://raw.githubusercontent.com/sdkitagawa/corese/master/assets/img/logo.png" height="120px" alt="CoreSE Programming Language logo with 3 squares stacked diagonally in a counterclockwise direction each in a different color. The first is in white, the second is in azure and the third in a dark blue tone almost turning purple. And at the top of the 3 stacked squares there is the logo of the CoreSE programming language (which is pronounced Direction Course and Bearing) which are two letters C facing each other forming an infinity symbol and making a course. Each letter C has two different colors. In the letter C on the left at the top we have the dark blue tone and the azure tone at the bottom, while in the letter C on the right we have the opposite." title="CoresE Programming Language">
</p>

**CoreSE** is a powerful, dynamically typed, lightweight and embedded programming language written in C++ focused on Hooking Applications, Client & Server side for Scripting Game Development and it was developed by [Douglas Kitagawa](https://github.com/sdkitagawa). It is a class-based concurrent scripting language and it can be integrated with [`Lua`](https://github.com/lua/lua) or `SQL`.

**CoreSE** supports procedural programming, object-oriented programming and functional programming. Thanks to special built-in methods, it can also be used as a prototype-based programming language.

**CoreSE** has been developed from scratch for the <a href="https://www.gravity.co.kr/" target="_blank">GRAVITY</a> in order to offer an easy way to write high level code in a scripted language compatible with Lua and Delphi code for Windows platforms. It is written in C++ code that can be compiled on any platform using a C/C++ compiler.


## Features
* Dynamic typing
* Dynamic Scoping
* Higher-order functions and classes
* Classes and inheritance
* Nested classes
* Instance
* Garbage collection
* Built-in unit tests
* **Optional commas**

## How does it look a CoreSE code

```swift
-	script	mac_address_check_and_disconnect	-1,{

OnPCLoadMapEvent:
	
        	set(.maps$,"map_x01,map_y02")
        	set(@map$,strcharinfo(3))
    
    			if((compare(","+.maps$+"," , ","+@map$+",")) && (query_sql("SELECT zoneaccount_id FROM login LEFT JOIN `character` ON zone.account_id=`char`account_id WHERE login.last_mac=(SELECT last_macaddress FROM login WHEREaccount_id="+getcharid(3)+") AND `character`.online=1",@account_id) > 1))
    		{
    				for(set(@thisIndex,0) @thisIndex < getarraysize(@account_id) if(@thisIndex,@thisIndex+1))
    			{
    				getmapxy(@tempMap$,@x,@y,0,rid2name(@account_id[@j]))
    				if(@map$ == @tempMap$)
    				command(">disconnect "+strcharinfo(0)+"")
    			}
    		}
    end()
}
 ```

## Special thanks
CoreSE was supported by a AEGIS Core which is a closed-source project from [GRAVITY](https://www.gravity.co.kr/). This programming language has great inspiration comes from the elegant <a href="http://www.lua.org" target="_blank">Lua</a> and <a href="https://www.gravity-lang.org/" target="_blank">Gravity</a> programming languages. Special thanks and credits to [**Marco Bambini**](https://github.com/marcobambini) and [**Roberto Ierusalimschy**](https://github.com/roberto-ieru) and [**Luiz Henrique Figueiredo**](https://github.com/lhf) for the logo, documentation and also language structure ideas.

## Documentation
The <a href="https://corese.github.io/#/README">Getting Started</a> page is a guide for downloading and compiling the language. There is also a more extensive <a href="https://gravity-lang.org">language documentation</a>. Official [wiki](https://github.com/marcobambini/gravity/wiki) is used to collect related projects and tools.

## Where CoreSE is used
* CoreSE is the core language built into AEGIS Core
* CoreSE is the scripting language for the AEGIS Core game engine (https://www.youtube.com/@WarpPortal)

## License
CoreSE is available under the permissive MIT license.