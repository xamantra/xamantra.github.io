import 'package:flutter/material.dart';
import 'package:flutter_portfolio/src/controllers/core/provider.dart';
import 'package:flutter_portfolio/src/controllers/data_controller.dart';
import 'package:flutter_portfolio/src/utils/responsive_util.dart';
import 'package:flutter_portfolio/src/widgets/portfolio_item.dart';
import 'package:flutter_portfolio/theme.dart';

class Portfolio extends StatelessWidget {
  const Portfolio({super.key});

  @override
  Widget build(BuildContext context) {
    final dataController = Provider.of<DataController>(context);
    return SingleChildScrollView(
      physics: BouncingScrollPhysics(),
      child: Card(
        child: StreamBuilder(
          stream: dataController.state,
          builder: (context, snapshot) {
            final projects = dataController.projects;
            return AnimatedContainer(
              duration: Duration(milliseconds: 350),
              width: double.infinity,
              padding: EdgeInsets.all(Responsive.maxMainSpacing(context) * 1.333),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    "Portfolio",
                    style: Responsive.mainHeadline(context),
                  ),
                  SizedBox(height: Responsive.maxSmallSpacing(context)),
                  Container(
                    height: 6,
                    width: 48,
                    decoration: BoxDecoration(
                      color: accentColor(context),
                      borderRadius: BorderRadius.circular(5),
                    ),
                  ),
                  SizedBox(height: Responsive.maxSmallSpacing(context)),
                  GridView.builder(
                    itemCount: projects.length,
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      crossAxisSpacing: 28,
                      childAspectRatio: 0.9,
                    ),
                    shrinkWrap: true,
                    itemBuilder: (context, index) {
                      return PortfolioItem(projectData: projects[index]);
                    },
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}
