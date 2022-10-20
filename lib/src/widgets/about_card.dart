import 'package:flutter/material.dart';
import 'package:flutter_portfolio/src/controllers/core/provider.dart';
import 'package:flutter_portfolio/src/controllers/data_controller.dart';
import 'package:flutter_portfolio/src/utils/responsive_util.dart';
import 'package:flutter_portfolio/theme.dart';

class AboutCard extends StatelessWidget {
  const AboutCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final dataController = Provider.of<DataController>(context);
    return Card(
      child: StreamBuilder(
        stream: dataController.state,
        builder: (context, snapshot) {
          final about = dataController.aboutData;
          return AnimatedContainer(
            duration: Duration(milliseconds: 350),
            width: double.infinity,
            padding: EdgeInsets.all(Responsive.maxMainSpacing(context) * 1.333),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  "About Me",
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
                Text(
                  about.description,
                  style: Theme.of(context).textTheme.bodyText1?.copyWith(
                        height: 1.8,
                        color: bodyTextColor(context),
                      ),
                ),
                SizedBox(height: Responsive.maxSmallSpacing(context)),
                Text(
                  about.more,
                  style: Theme.of(context).textTheme.bodyText1?.copyWith(
                        height: 1.8,
                        color: bodyTextColor(context),
                      ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
