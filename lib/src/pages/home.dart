import 'package:flutter/material.dart';
import 'package:flutter_portfolio/src/controllers/core/provider.dart';
import 'package:flutter_portfolio/src/controllers/data_controller.dart';
import 'package:flutter_portfolio/src/controllers/theme_controller.dart';
import 'package:flutter_portfolio/src/pages/routes/about-me.dart';
import 'package:flutter_portfolio/src/pages/routes/contact.dart';
import 'package:flutter_portfolio/src/pages/routes/experience.dart';
import 'package:flutter_portfolio/src/pages/routes/portfolio.dart';
import 'package:flutter_portfolio/src/utils/responsive_util.dart';
import 'package:flutter_portfolio/theme.dart';

class Home extends StatefulWidget {
  const Home({
    Key? key,
    this.routeIndex = 0,
    this.routeChild,
  }) : super(key: key);

  final int routeIndex;
  final Widget? routeChild;

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> with SingleTickerProviderStateMixin {
  late TabController tabController;

  int get routeIndex {
    return widget.routeIndex.clamp(0, 3);
  }

  int selectedMenu = 0;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    tabController = TabController(length: 4, vsync: this, initialIndex: routeIndex);

    Provider.of<DataController>(context).loadAllData();
  }

  @override
  Widget build(BuildContext context) {
    final themeController = Provider.of<ThemeController>(context);
    return StreamBuilder(
      stream: themeController.state,
      builder: (context, snapshot) {
        return Scaffold(
          body: Stack(
            children: [
              Center(
                child: Container(
                  padding: EdgeInsets.all(Responsive.maxLargeSpacing(context)),
                  width: Responsive.maxContainerWidth(context, 800),
                  height: double.infinity,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          Expanded(
                            child: TabBar(
                              controller: tabController,
                              isScrollable: true,
                              physics: BouncingScrollPhysics(),
                              indicatorColor: accentColor(context),
                              tabs: [
                                Tab(
                                  text: "About",
                                ),
                                Tab(
                                  text: "Portfolio",
                                ),
                                Tab(
                                  text: "Experience",
                                ),
                                Tab(
                                  text: "Contact",
                                ),
                              ],
                              onTap: (index) {
                                switch (index) {
                                  case 0:
                                    Navigator.pushNamed(context, "/about");
                                    break;
                                  case 1:
                                    Navigator.pushNamed(context, "/portfolio");
                                    break;
                                  case 2:
                                    Navigator.pushNamed(context, "/experience");
                                    break;
                                  case 3:
                                    Navigator.pushNamed(context, "/contact");
                                    break;
                                  default:
                                }
                              },
                            ),
                          ),
                          SizedBox(width: Responsive.isMediumScreenOrSmaller(context) ? 64 : 0),
                        ],
                      ),
                      SizedBox(height: 24),
                      Expanded(
                        child: widget.routeChild ??
                            TabBarView(
                              controller: tabController,
                              children: [
                                AboutMe(),
                                Portfolio(),
                                Experience(),
                                Contact(),
                              ],
                            ),
                      ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(Responsive.maxLargeSpacing(context)),
                child: Align(
                  alignment: Alignment.topRight,
                  child: IconButton(
                    onPressed: () {
                      themeController.toggleTheme();
                    },
                    icon: Icon(
                      themeController.isDarkMode ? Icons.dark_mode : Icons.light_mode,
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
